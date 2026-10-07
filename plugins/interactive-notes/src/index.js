import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import remarkDirective from "remark-directive"
import { visit, SKIP } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import { fromHtml } from "hast-util-from-html"
import katex from "katex"
import YAML from "yaml"
import { highlightChange } from "./texdiff.js"

const here = path.dirname(fileURLToPath(import.meta.url))
const read = (f) => readFileSync(path.join(here, "..", "client", f), "utf-8")

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")

const el = (tag, props, children = []) => ({ type: "element", tagName: tag, properties: props, children })

function pathToRoot(slug) {
  const depth = slug.split("/").filter(Boolean).length - 1
  return depth <= 0 ? "." : Array(depth).fill("..").join("/")
}
const relative = (from, to) => `${pathToRoot(from)}/${to}`

// ---------------------------------------------------------------- mdast stage

function asElement(node, tag, classes, props = {}) {
  node.data = {
    ...(node.data ?? {}),
    hName: tag,
    hProperties: { className: classes.split(" "), ...props },
  }
  return node
}

function wrapper(tag, classes, children, props) {
  return asElement({ type: "xpWrapper", children }, tag, classes, props)
}

function renderKatex(tex) {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    trust: true,
    strict: false,
    macros: { "\\hl": "\\htmlClass{xp-new}{#1}" },
  })
  return fromHtml(html, { fragment: true }).children
}

function splitOnRules(children) {
  const groups = [[]]
  for (const c of children) {
    if (c.type === "thematicBreak") groups.push([])
    else groups.at(-1).push(c)
  }
  return groups.filter((g) => g.length)
}

function buildSteps(node) {
  const plain = "plain" in (node.attributes ?? {})
  let prev = null
  const steps = splitOnRules(node.children).map((group, i) => {
    const eq = group.find((n) => n.type === "math")
    if (eq) {
      const tex = plain ? eq.value : highlightChange(prev, eq.value)
      prev = eq.value
      eq.data = { hName: "div", hProperties: { className: ["xp-eq"] }, hChildren: renderKatex(tex) }
      group.splice(group.indexOf(eq), 1)
      const rest = group
      return wrapper("div", "xp-step", [eq, wrapper("div", "xp-step-text", rest)], { dataStep: i })
    }
    return wrapper("div", "xp-step", [wrapper("div", "xp-step-text", group)], { dataStep: i })
  })
  node.children = steps
  return asElement(node, "div", "xp-steps", { dataTitle: node.attributes?.title ?? "" })
}

function buildQuiz(node, counter) {
  const question = []
  const choices = []
  let solution = null
  for (const c of node.children) {
    if (c.type === "containerDirective" && c.name === "choice") choices.push(c)
    else if (c.type === "containerDirective" && c.name === "solution") solution = c
    else question.push(c)
  }
  const items = choices.map((c, i) => {
    const [label, ...why] = (() => {
      const idx = c.children.findIndex((n) => n.type === "thematicBreak")
      if (idx < 0) return [c.children]
      return [c.children.slice(0, idx), c.children.slice(idx + 1)]
    })()
    const correct = "correct" in (c.attributes ?? {})
    return wrapper(
      "li",
      "xp-choice",
      [
        wrapper("div", "xp-choice-label", label),
        wrapper("div", "xp-choice-why", why[0] ?? []),
      ],
      { dataCorrect: correct ? "true" : "false", dataIndex: i },
    )
  })
  node.children = [
    wrapper("div", "xp-q", question),
    wrapper("ol", "xp-choices", items),
    ...(solution ? [wrapper("div", "xp-solution", solution.children)] : []),
  ]
  asElement(node, "div", "xp-quiz", { dataQuiz: counter })
  return node
}

function remarkInteractive() {
  return (tree, file) => {
    const src = String(file.value ?? "")
    let quizCount = 0
    visit(tree, (node, index, parent) => {
      if (node.type === "code" && node.lang === "graph") {
        let cfg
        try {
          cfg = YAML.parse(node.value) ?? {}
        } catch (e) {
          cfg = { error: String(e.message) }
        }
        parent.children[index] = {
          type: "xpGraph",
          data: {
            hName: "div",
            hProperties: { className: ["xp-graph"], dataConfig: JSON.stringify(cfg) },
            hChildren: [],
          },
        }
        return SKIP
      }
      if (!node.type.endsWith("Directive")) return
      const attrs = node.attributes ?? {}
      if (node.type === "textDirective" && (node.name === "explain" || node.name === "x")) {
        const label = toString(node)
        const id = attrs.id ?? slugify(label)
        asElement(node, "span", "xp-anchor", { dataXp: id, tabIndex: 0, role: "button" })
        return
      }
      if (node.type === "containerDirective") {
        switch (node.name) {
          case "explain": {
            const id = attrs.id ?? slugify(attrs.title ?? "note")
            asElement(node, "div", "xp-note-src", {
              dataXp: id,
              dataTitle: attrs.title ?? id,
            })
            return
          }
          case "steps":
            buildSteps(node)
            return
          case "quiz":
            buildQuiz(node, quizCount++)
            return
        }
      }
      // not one of ours (e.g. "3:30" or "Note:foo"): hand the source text back
      if (parent && index != null && node.position) {
        const { start, end } = node.position
        parent.children[index] = { type: "text", value: src.slice(start.offset, end.offset) }
        return SKIP
      }
    })
  }
}

// ----------------------------------------------------------------- hast stage

const hasClass = (n, c) => n.type === "element" && (n.properties?.className ?? []).includes(c)

function rehypeInteractive() {
  return (tree, file) => {
    const slug = file.data.slug
    const notes = new Map() // id -> { id, title, parent, node }

    const collect = (node, parentId) => {
      if (!node.children) return
      node.children = node.children.filter((child) => {
        if (hasClass(child, "xp-note-src")) {
          const id = child.properties.dataXp
          const entry = { id, title: child.properties.dataTitle, parent: parentId, node: child }
          notes.set(id, entry)
          collect(child, id)
          return false
        }
        collect(child, parentId)
        return true
      })
    }
    collect(tree, null)
    visitTree(tree, fixEmbeddedSvg)
    if (!notes.size) return

    const rel = (from, id) => relative(from, `${slug}/${id}`)
    const aside = (n, from) =>
      el(
        "aside",
        { className: ["xp-note"], dataXp: n.id, dataHref: rel(from, n.id), tabIndex: 0 },
        [
          el("div", { className: ["xp-note-title"] }, [{ type: "text", value: n.title }]),
          el("div", { className: ["xp-note-body"] }, clone(n.node.children)),
          el("a", { className: ["xp-note-more", "internal"], href: rel(from, n.id) }, [
            { type: "text", value: "Read in full →" },
          ]),
        ],
      )
    const notesFor = (parentId, from) =>
      el(
        "div",
        { className: ["xp-notes"] },
        [...notes.values()].filter((n) => n.parent === parentId).map((n) => aside(n, from)),
      )

    const pages = {}
    file.data.xpPages = pages
    for (const n of notes.values()) {
      pages[n.id] = { id: n.id, title: n.title, parent: n.parent }
    }
    for (const n of notes.values()) {
      const from = `${slug}/${n.id}`
      const parentTitle = n.parent ? notes.get(n.parent).title : file.data.frontmatter?.title ?? slug
      const parentHref = n.parent ? rel(from, n.parent) : relative(from, slug)
      pages[n.id].root = {
        type: "root",
        children: [
          el("div", { className: ["xp-on"] }, [
            el("span", { className: ["xp-on-label"] }, [{ type: "text", value: "on:" }]),
            el("a", { className: ["internal"], href: parentHref }, [{ type: "text", value: parentTitle }]),
          ]),
          ...clone(n.node.children),
          notesFor(n.id, from),
        ],
      }
      pages[n.id].parentTitle = parentTitle
      pages[n.id].parentSlug = n.parent ? `${slug}/${n.parent}` : slug
      delete pages[n.id].children
    }
    const container = notesFor(null, slug)
    tree.children.push(container)
  }
}

const clone = (nodes) => JSON.parse(JSON.stringify(nodes))

// Obsidian-style ![[drawing.svg|40%|center]] embeds arrive as <object> tags with the
// size/alignment options stuffed into aria-label. Turn them into sized images.
function fixEmbeddedSvg(node) {
  if (node.type !== "element" || node.tagName !== "object") return
  if (node.properties?.type !== "image/svg+xml") return
  const opts = String(node.properties.ariaLabel ?? "").split("|").map((o) => o.trim())
  const style = []
  const classes = ["xp-drawing"]
  for (const o of opts) {
    if (/^\d+%$/.test(o)) style.push(`width:${o}`)
    else if (/^\d+$/.test(o)) style.push(`width:${o}px`)
    else if (o === "center") classes.push("xp-center")
  }
  node.tagName = "img"
  node.properties = {
    src: node.properties.data,
    alt: "",
    className: classes,
    ...(style.length ? { style: style.join(";") } : {}),
  }
  node.children = []
}

function visitTree(node, fn) {
  fn(node)
  if (node.children) for (const c of node.children) visitTree(c, fn)
}

// -------------------------------------------------------------------- plugin

export const InteractiveNotes = () => ({
  name: "InteractiveNotes",
  markdownPlugins: () => [remarkDirective, remarkInteractive],
  htmlPlugins: () => [rehypeInteractive],
  externalResources: () => ({
    css: [{ content: read("interactive-notes.css"), inline: true }],
    js: [
      {
        loadTime: "afterDOMReady",
        contentType: "inline",
        script: read("interactive-notes.js"),
      },
    ],
  }),
})

export default InteractiveNotes

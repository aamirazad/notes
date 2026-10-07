import { h } from "preact"

const css = `
.class-index { margin: 1rem 0 3rem; }
.class-index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
}
.class-index .class-index-grid a.class-card.internal {
  text-decoration: none !important;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.1rem 1.2rem 1rem !important;
  border: 1px solid var(--lightgray);
  border-radius: 12px;
  background: var(--light);
  color: var(--darkgray) !important;
  text-decoration: none !important;
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
  display: flex;
}
.class-index .class-index-grid a.class-card.internal:hover {
  border-color: var(--secondary);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.35);
  background: var(--light) !important;
}
.class-card-name {
  font-family: var(--headerFont);
  font-size: 1.2rem;
  font-weight: 650;
  color: var(--dark);
}
.class-card-desc { font-size: 0.92rem; line-height: 1.45; font-weight: 400; }
.class-card-meta { font-weight: 400; margin-top: auto; padding-top: 0.5rem; font-size: 0.8rem; color: var(--gray); }
`

const fmt = (d) => d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
const toDate = (d) => (d instanceof Date ? d : d ? new Date(d) : null)

export const ClassIndex = () => {
  const Component = ({ fileData, allFiles }) => {
    if (fileData.slug !== "index") return null
    const classes = new Map()
    for (const f of allFiles ?? []) {
      const slug = f.slug ?? ""
      if (!slug.includes("/") || slug.startsWith("tags/") || f.unlisted || f.xpExplanation) continue
      const folder = slug.split("/")[0]
      const name = (f.relativePath ?? slug).split("/")[0]
      if (!classes.has(folder)) classes.set(folder, { folder, name, notes: [], description: "" })
      const c = classes.get(folder)
      if (slug === `${folder}/index`) {
        c.description = f.frontmatter?.description ?? ""
        if (f.frontmatter?.title && f.frontmatter.title !== "index") c.name = f.frontmatter.title
        c.order = f.frontmatter?.order
      } else c.notes.push(f)
    }
    const list = [...classes.values()]
      .filter((c) => c.notes.length)
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.name.localeCompare(b.name))
    return h("section", { class: "class-index" }, [
      h(
        "div",
        { class: "class-index-grid" },
        list.map((c) => {
          const dates = c.notes.map((n) => toDate(n.dates?.created)).filter(Boolean)
          const latest = dates.length ? new Date(Math.max(...dates)) : null
          return h("a", { class: "class-card internal", href: `./${c.folder}/` }, [
            h("span", { class: "class-card-name" }, c.name),
            c.description ? h("span", { class: "class-card-desc" }, c.description) : null,
            h(
              "span",
              { class: "class-card-meta" },
              `${c.notes.length} note${c.notes.length === 1 ? "" : "s"}${latest ? ` · latest ${fmt(latest)}` : ""}`,
            ),
          ])
        }),
      ),
    ])
  }
  Component.css = css
  return Component
}

export default ClassIndex

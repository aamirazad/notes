import { h } from "preact"
import { htmlToJsx } from "@quartz-community/utils"

// Every `:::explain` block in a note gets its own page at <note>/<id>. The
// transformer (interactive-notes) already rendered each one into hast.
const ExplanationBody = () => {
  const Body = ({ fileData }) => {
    const root = fileData.xpRoot
    return h("article", { class: "popover-hint xp-explanation-page" }, [
      h("div", { class: "markdown-preview-view markdown-rendered" }, root ? htmlToJsx(root) : null),
    ])
  }
  return Body
}

export const ExplanationPages = () => ({
  name: "ExplanationPages",
  priority: 20,
  layout: "content",
  match: ({ fileData }) => fileData.xpExplanation === true,
  generate({ content }) {
    const pages = []
    for (const [, file] of content) {
      const data = file.data
      if (!data.xpPages) continue
      for (const page of Object.values(data.xpPages)) {
        pages.push({
          slug: `${data.slug}/${page.id}`,
          title: page.title,
          data: {
            xpExplanation: true,
            xpRoot: page.root,
            unlisted: true,
            dates: data.dates,
            frontmatter: {
              title: page.title,
              tags: [],
              xpParent: page.parentSlug,
              course: data.frontmatter?.course,
            },
          },
        })
      }
    }
    return pages
  },
  body: ExplanationBody,
})

export default ExplanationPages

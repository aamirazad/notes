import { h } from "preact";

const css = `
.ftoc {
  position: fixed;
  right: 0.9rem;
  top: 9rem;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.ftoc-lines {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--ftoc-gap, 9px);
  padding: 0.7rem 0.35rem;
  cursor: pointer;
}
.ftoc-line {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: var(--gray);
  opacity: 0.35;
  transition: opacity 0.2s ease, background-color 0.2s ease, width 0.2s ease;
}
.ftoc-line.depth-0 { width: 22px; }
.ftoc-line.depth-1 { width: 15px; }
.ftoc-line.depth-2, .ftoc-line.depth-3 { width: 9px; }
.ftoc-line.ftoc-current { opacity: 1; background: var(--dark); width: 24px; }
.ftoc-panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 17rem;
  max-height: 72vh;
  overflow-y: auto;
  padding: 0.9rem 0.6rem 0.9rem 1rem;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 12px;
  box-shadow: 0 18px 50px -20px rgba(0, 0, 0, 0.35);
  opacity: 0;
  pointer-events: none;
  transform: translateX(8px);
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.ftoc:hover .ftoc-panel,
.ftoc:focus-within .ftoc-panel,
.ftoc.ftoc-open .ftoc-panel {
  opacity: 1;
  pointer-events: auto;
  transform: none;
}
.ftoc:hover .ftoc-lines, .ftoc.ftoc-open .ftoc-lines { opacity: 0; }
.ftoc-title {
  font-family: var(--headerFont);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gray);
  margin: 0 0 0.4rem;
}
.ftoc-panel ol { list-style: none; margin: 0; padding: 0; }
.ftoc-panel li { margin: 0; }
.ftoc-panel a {
  display: block;
  padding: 0.22rem 0.5rem;
  border-radius: 6px;
  font-size: 0.86rem;
  line-height: 1.35;
  color: var(--gray);
  background: none;
  text-decoration: none;
}
.ftoc-panel a:hover { color: var(--dark); background: var(--highlight); }
.ftoc-panel li.depth-1 a { padding-left: 1.2rem; }
.ftoc-panel li.depth-2 a, .ftoc-panel li.depth-3 a { padding-left: 2rem; font-size: 0.82rem; }
.ftoc-panel a.ftoc-current { color: var(--dark); font-weight: 600; }
@media (max-width: 800px) {
  .ftoc { top: auto; bottom: 1rem; transform: none; }
  .ftoc-lines { background: var(--light); border: 1px solid var(--lightgray); border-radius: 10px; }
  .ftoc:hover .ftoc-panel { opacity: 0; pointer-events: none; }
  .ftoc.ftoc-open .ftoc-panel { top: auto; bottom: 0; transform: none; opacity: 1; pointer-events: auto; }
}
@media print { .ftoc { display: none; } }
`;

const script = `
(() => {
  function setup() {
    const nav = document.querySelector(".ftoc")
    if (!nav) return
    const lines = [...nav.querySelectorAll(".ftoc-line")]
    const links = [...nav.querySelectorAll(".ftoc-panel a")]
    const heads = lines.map((l) => document.getElementById(l.dataset.for)).filter(Boolean)
    if (lines.length > 28) nav.style.setProperty("--ftoc-gap", Math.max(3, Math.floor(260 / lines.length)) + "px")
    let current = null
    const update = () => {
      const line = window.innerHeight * 0.3
      let cur = heads[0]?.id
      for (const h of heads) {
        if (h.getBoundingClientRect().top < line) cur = h.id
        else break
      }
      if (cur === current) return
      current = cur
      for (const el of [...lines, ...links]) el.classList.toggle("ftoc-current", el.dataset.for === cur)
      const active = links.find((l) => l.dataset.for === cur)
      if (active && nav.matches(":hover")) active.scrollIntoView({ block: "nearest" })
    }
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { ticking = false; update() })
    }
    const toggle = (e) => { e.stopPropagation(); nav.classList.toggle("ftoc-open") }
    const close = (e) => { if (!nav.contains(e.target)) nav.classList.remove("ftoc-open") }
    const linesEl = nav.querySelector(".ftoc-lines")
    linesEl.addEventListener("click", toggle)
    for (const a of links) a.addEventListener("click", () => nav.classList.remove("ftoc-open"))
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("click", close)
    update()
    window.addCleanup?.(() => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("click", close)
    })
  }
  document.addEventListener("nav", setup)
})()
`;

export const FloatingToc = () => {
  const Component = ({ fileData }) => {
    // the note's own "# Title" duplicates the page title, so leave it out
    const title = fileData?.frontmatter?.title;
    const entries = (fileData?.toc ?? []).filter(
      (t) => !(t.depth === 0 && t.text === title),
    );
    if (entries.length < 2) return null;
    const base = Math.min(...entries.map((t) => t.depth));
    const toc = entries.map((t) => ({ ...t, depth: t.depth - base }));
    return h("nav", { class: "ftoc", "aria-label": "Table of contents" }, [
      h(
        "div",
        {
          class: "ftoc-lines",
          role: "button",
          tabIndex: 0,
          "aria-label": "Show table of contents",
        },
        toc.map((t) =>
          h("span", {
            class: `ftoc-line depth-${t.depth}`,
            "data-for": t.slug,
          }),
        ),
      ),
      h("div", { class: "ftoc-panel" }, [
        h("div", { class: "ftoc-title" }, "On this page"),
        h(
          "ol",
          null,
          toc.map((t) =>
            h(
              "li",
              { class: `depth-${t.depth}` },
              h("a", { href: `#${t.slug}`, "data-for": t.slug }, t.text),
            ),
          ),
        ),
      ]),
    ]);
  };
  Component.css = css;
  Component.afterDOMLoaded = script;
  return Component;
};

export default FloatingToc;

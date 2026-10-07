import { h } from "preact";
import { resolveRelative } from "@quartz-community/utils";

// An unedited copy of a note lives next to it as "<name> (original).md" with
// `original: true` and `unlisted: true` in its frontmatter.
const SUFFIX = "-(original)";

const css = `
.orig-version {
  position: relative;
  display: inline-block;
  margin: 0.2rem 0 0.4rem;
  font-family: var(--bodyFont);
  font-size: 0.85rem;
}
.orig-version > a.orig-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--lightgray);
  color: var(--gray) !important;
  background: none !important;
  text-decoration: none !important;
  font-weight: 400;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.orig-version > a.orig-link:hover,
.orig-version > a.orig-link:focus-visible {
  color: var(--dark) !important;
  border-color: var(--gray);
}
.orig-version .orig-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--xp-accent, var(--secondary));
}
.orig-blurb {
  position: absolute;
  left: 0;
  top: calc(100% + 0.45rem);
  z-index: 30;
  width: min(22rem, 80vw);
  padding: 0.75rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--lightgray);
  background: var(--light);
  box-shadow: 0 14px 40px -18px rgba(0, 0, 0, 0.35);
  color: var(--darkgray);
  line-height: 1.5;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
  transition: opacity 0.16s ease, transform 0.16s ease;
}
.orig-version:hover .orig-blurb,
.orig-version:focus-within .orig-blurb {
  opacity: 1;
  transform: none;
}
.orig-blurb p { margin: 0; }
`;

export const OriginalVersion = () => {
  const Component = ({ fileData, allFiles }) => {
    const slug = fileData?.slug;
    if (!slug || !allFiles) return null;

    if (fileData.frontmatter?.original === true) {
      const edited = slug.endsWith(SUFFIX)
        ? slug.slice(0, -SUFFIX.length)
        : null;
      if (!edited || !allFiles.some((f) => f.slug === edited)) return null;
      return h("div", { class: "orig-version" }, [
        h(
          "a",
          {
            class: "orig-link internal",
            href: resolveRelative(slug, edited),
            "data-no-popover": true,
          },
          [
            h("span", { class: "orig-dot" }),
            "Original version · back to the edited notes",
          ],
        ),
        h("div", { class: "orig-blurb", role: "note" }, [
          h(
            "p",
            null,
            "This is exactly what I wrote, mistakes and all. The edited version fixes errors, fills in skipped steps, and adds explanations, quizzes and animations.",
          ),
        ]),
      ]);
    }

    const original = allFiles.find(
      (f) => f.slug === slug + SUFFIX && f.frontmatter?.original === true,
    );
    if (!original) return null;
    return h("div", { class: "orig-version" }, [
      h(
        "a",
        {
          class: "orig-link internal",
          href: resolveRelative(slug, original.slug),
          "data-no-popover": true,
        },
        [
          h("span", { class: "orig-dot" }),
          "Edited with AI · read the original",
        ],
      ),
      h("div", { class: "orig-blurb", role: "note" }, [
        h(
          "p",
          null,
          "I wrote these notes myself, then had AI edit them: it fixed mistakes, filled in steps I skipped, and added the margin explanations, quizzes and animations. If you'd rather read the raw, human-written version, click here.",
        ),
      ]),
    ]);
  };
  Component.css = css;
  return Component;
};

export default OriginalVersion;

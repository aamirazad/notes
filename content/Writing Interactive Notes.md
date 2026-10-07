---
title: Writing Interactive Notes
unlisted: true
description: Reference for the explanation, step, quiz and graph syntax used on this site.
---
This page is a reference for the markdown syntax behind the interactive pieces. It's unlisted, so it only shows up if you know the URL. The syntax uses [generic directives](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444) (`:name`, `::name`, `:::name`), handled by the local plugin in `plugins/interactive-notes`.

## Margin explanations

Mark a phrase with `:explain[text]{#id}` and write the explanation anywhere in the note (usually right after the paragraph) as a container with the same id:

```markdown
The :explain[average velocity]{#avg-velocity} is the slope.

::::explain{#avg-velocity title="Average velocity is a slope"}
Any markdown, including math, lists and images.

:::explain{#nested title="A nested explanation"}
Explanations can have their own explanations.
:::
::::
```

Use one more colon on the outer container than on anything nested inside it. Each explanation also gets its own page at `<note>/<id>`, which shows "on:" with a link back to whatever it explains. Clicking a margin note opens that page.

Here's a live one: the :explain[margin]{#demo-margin} works on this page too.

::::explain{#demo-margin title="A demo explanation"}
Hover the highlighted text and this box slides over to line up with it. Click it to open it on its own page, where :explain[this phrase]{#demo-nested} has an explanation of its own.

:::explain{#demo-nested title="An explanation of an explanation"}
Explanations nest as deep as you like.
:::
::::

## Step-by-step equations

Separate steps with `---`. The first `$$` block in each step is the equation and everything after it is the explanation. Whatever changed from the previous equation is highlighted automatically. Wrap a part in `\hl{...}` to choose the highlight yourself, or add `{plain}` to turn highlighting off.

Hover over the block and it starts playing: the ring under it fills up and moves on to the next step, lingering longer on steps with more to read. Moving the pointer away pauses it. Click the ring to play it yourself, and it keeps going until you click it again. Hover the ring for back and forward buttons. On touch screens it plays once it scrolls into view. The arrow keys and space bar work too when the block has focus.

```markdown
:::steps{title="Solve for t"}
$$
5t^2 = 50
$$
Start here.

---

$$
t^2 = 10
$$
Divide both sides by 5.
:::
```

:::steps{title="Solve for t"}
$$
0 = -5t^2 + 50
$$
The ball hits the ground when its height is zero.

---

$$
5t^2 = 50
$$
Add $5t^2$ to both sides.

---

$$
t^2 = 10
$$
Divide both sides by $5$.

---

$$
t = 3.16~\mathrm{s}
$$
Take the square root.
:::

## Quizzes

Each `choice` can have feedback after a `---`, shown when someone picks it. Mark the right one with `{correct}`. The `solution` is shown after any answer, so even a lucky guess gets the full explanation.

```markdown
:::::quiz
What is $2 + 2$?

::::choice
3

---
Close, but that's $2 + 1$.
::::

::::choice{correct}
4
::::

::::solution
Add them: $2 + 2 = 4$.
::::
:::::
```

:::::quiz
What is $2 + 2$?

::::choice
3

---
Close, but that's $2 + 1$.
::::

::::choice{correct}
4
::::

::::solution
Add them: $2 + 2 = 4$.
::::
:::::

## Graphs

A fenced code block with the language `graph` and YAML options. Expressions understand `+ - * / ^`, implicit multiplication (`2x`), `pi`, `e`, and `sin cos tan sec csc cot asin acos atan sqrt abs exp ln log`.

| Option | Meaning |
| --- | --- |
| `type` | `plot` (default), `parametric`, `arclength` or `revolve` |
| `fn` / `fns` | the function(s) of `x`; `fns` is a list of `{fn, label, color}` |
| `px`, `py`, `t` | parametric x(t), y(t) and the range of t |
| `x`, `y`, `xrange` | the domain, the y range, and (for parametric) the x range |
| `animate` | `draw` adds a play button that draws the curve |
| `sliders` | `name: [min, max, step, start]`, usable in expressions (`n` sets the segment count for `arclength`) |
| `axis` | `x` or `y` for `revolve` |
| `points`, `area`, `ghosts` | dots to mark, an `[a, b]` interval to shade, strobe dots for parametric |
| `title`, `caption`, `xlabel`, `ylabel` | labels |

````markdown
```graph
type: revolve
fn: sqrt(9 - x^2)
x: [-3, 3]
axis: x
```
````

```graph
type: revolve
title: A sphere from a semicircle
fn: sqrt(9 - x^2)
x: [-3, 3]
axis: x
```

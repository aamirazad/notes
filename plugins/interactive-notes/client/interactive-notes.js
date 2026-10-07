(() => {
  const $ = (sel, root = document) => root.querySelector(sel)
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel))
  const cleanupFns = []
  const onCleanup = (fn) => (window.addCleanup ? window.addCleanup(fn) : cleanupFns.push(fn))
  const listen = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts)
    onCleanup(() => target.removeEventListener(type, fn, opts))
  }
  const h = (tag, cls, text) => {
    const e = document.createElement(tag)
    if (cls) e.className = cls
    if (text != null) e.textContent = text
    return e
  }

  // ===================================================================
  // Margin explanations
  // ===================================================================
  const WIDE = window.matchMedia("(min-width: 1100px)")
  const GAP = 14

  function initNotes() {
    const article = $("article")
    const holder = article && $(".xp-notes", article)
    if (!holder) return
    const notes = new Map($$(".xp-note", holder).map((n) => [n.dataset.xp, n]))
    const anchors = new Map()
    for (const a of $$(".xp-anchor", article)) {
      if (a.closest(".xp-notes")) continue
      const id = a.dataset.xp
      if (!notes.has(id)) continue
      if (!anchors.has(id)) anchors.set(id, [])
      anchors.get(id).push(a)
    }
    // keep only notes that are referenced, in document order
    const order = [...anchors.keys()].sort((a, b) => {
      const pos = anchors.get(a)[0].compareDocumentPosition(anchors.get(b)[0])
      return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    })
    for (const [id, n] of notes) if (!anchors.has(id)) n.hidden = true

    // nested anchors (inside a preview) link to their own page
    for (const a of $$(".xp-anchor", holder)) {
      const parentNote = a.closest(".xp-note")
      a.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        const base = parentNote.dataset.href.replace(/[^/]*$/, "")
        navigate(base + a.dataset.xp)
      })
    }

    let active = null
    let pinned = null
    let leaveTimer = 0

    const place = () => {
      if (!WIDE.matches) {
        holder.classList.add("xp-narrow")
        return
      }
      holder.classList.remove("xp-narrow")
      const top = holder.getBoundingClientRect().top + window.scrollY
      const items = order.map((id) => {
        const note = notes.get(id)
        const a = anchors.get(id)[0]
        const y = a.getBoundingClientRect().top + window.scrollY - top - 4
        return { id, note, anchorY: y, h: note.offsetHeight, y }
      })
      let cursor = 0
      for (const it of items) {
        it.y = Math.max(it.anchorY, cursor)
        cursor = it.y + it.h + GAP
      }
      const k = items.findIndex((it) => it.id === active)
      if (k >= 0) {
        items[k].y = items[k].anchorY
        for (let i = k - 1; i >= 0; i--) {
          items[i].y = Math.min(items[i].y, items[i + 1].y - items[i].h - GAP)
        }
        // nothing may start above the top of the article
        let floor = 0
        for (const it of items) {
          if (it.y < floor) it.y = floor
          floor = it.y + it.h + GAP
        }
        for (let i = k + 1; i < items.length; i++) {
          items[i].y = Math.max(items[i].y, items[i - 1].y + items[i - 1].h + GAP)
        }
      }
      for (const it of items) it.note.style.transform = `translateY(${Math.round(it.y)}px)`
      const last = items.at(-1)
      if (last) {
        const need = last.y + last.h + 24
        article.style.minHeight = `${Math.max(0, need + (top - (article.getBoundingClientRect().top + window.scrollY)))}px`
      }
    }

    const setActive = (id) => {
      if (active === id) return
      active = id
      for (const [nid, n] of notes) n.classList.toggle("xp-active", nid === id)
      for (const [aid, list] of anchors) for (const a of list) a.classList.toggle("xp-active", aid === id)
      place()
    }
    const clear = () => {
      clearTimeout(leaveTimer)
      leaveTimer = setTimeout(() => setActive(pinned), 120)
    }

    for (const [id, list] of anchors) {
      for (const a of list) {
        listen(a, "mouseenter", () => {
          clearTimeout(leaveTimer)
          setActive(id)
        })
        listen(a, "mouseleave", clear)
        listen(a, "focus", () => setActive(id))
        listen(a, "click", (e) => {
          e.preventDefault()
          if (WIDE.matches) {
            pinned = pinned === id ? null : id
            setActive(id)
          } else {
            openSheet(notes.get(id))
          }
        })
        listen(a, "keydown", (e) => {
          if (e.key === "Enter") a.click()
        })
      }
    }
    for (const [id, n] of notes) {
      listen(n, "mouseenter", () => {
        clearTimeout(leaveTimer)
        setActive(id)
      })
      listen(n, "mouseleave", clear)
      listen(n, "click", (e) => {
        if (e.target.closest("a")) return
        if (String(window.getSelection())) return
        navigate(n.dataset.href)
      })
    }

    let sheet = null
    const openSheet = (note) => {
      closeSheet()
      sheet = note
      note.classList.add("xp-sheet")
      const close = h("button", "xp-sheet-close", "×")
      close.setAttribute("aria-label", "Close explanation")
      close.addEventListener("click", (e) => {
        e.stopPropagation()
        closeSheet()
      })
      note.prepend(close)
    }
    const closeSheet = () => {
      if (!sheet) return
      sheet.classList.remove("xp-sheet")
      $(".xp-sheet-close", sheet)?.remove()
      sheet = null
    }
    listen(document, "keydown", (e) => e.key === "Escape" && closeSheet())

    const relayout = () => requestAnimationFrame(place)
    listen(window, "resize", relayout)
    WIDE.addEventListener("change", relayout)
    onCleanup(() => WIDE.removeEventListener("change", relayout))
    // math and images change heights after load
    const ro = new ResizeObserver(relayout)
    ro.observe(article)
    notes.forEach((n) => ro.observe(n))
    onCleanup(() => ro.disconnect())
    document.fonts?.ready.then(relayout)
    for (const img of $$("img", article)) if (!img.complete) img.addEventListener("load", relayout, { once: true })
    // belt and braces: late-loading fonts, math and images can shift the text
    listen(window, "load", relayout)
    let checks = 0
    const settle = setInterval(() => {
      place()
      if (++checks > 8) clearInterval(settle)
    }, 400)
    onCleanup(() => clearInterval(settle))
    place()
    holder.classList.add("xp-placed")
    // turn on movement animations after fonts, math and images have settled
    const ready = setTimeout(() => holder.classList.add("xp-ready"), 900)
    onCleanup(() => clearTimeout(ready))
    onCleanup(() => {
      article.style.minHeight = ""
    })
  }

  function navigate(href) {
    const a = h("a")
    a.href = href
    a.className = "internal"
    a.style.display = "none"
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  // ===================================================================
  // Step-by-step equations
  // ===================================================================
  function initSteps() {
    for (const box of $$(".xp-steps")) {
      if (box.dataset.ready) continue
      box.dataset.ready = "1"
      const steps = $$(":scope > .xp-step", box)
      if (!steps.length) continue
      let shown = 1
      const bar = h("div", "xp-steps-bar")
      const title = h("div", "xp-steps-title")
      title.append(h("span", "xp-badge", "Step by step"))
      if (box.dataset.title) title.append(h("span", "xp-steps-name", box.dataset.title))
      const count = h("span", "xp-steps-count")
      const btn = (label, text, fn) => {
        const b = h("button", "xp-btn", text)
        b.type = "button"
        b.setAttribute("aria-label", label)
        b.addEventListener("click", fn)
        return b
      }
      const first = btn("Back to the first step", "⏮", () => go(1))
      const back = btn("Previous step", "◀ Back", () => go(shown - 1))
      const next = btn("Next step", "Next ▶", () => go(shown + 1))
      next.classList.add("xp-btn-primary")
      const last = btn("Skip to the end", "⏭", () => go(steps.length))
      const controls = h("div", "xp-steps-controls")
      controls.append(first, back, next, last)
      bar.append(title, count)
      box.prepend(bar)
      box.append(controls)
      box.tabIndex = 0
      box.addEventListener("keydown", (e) => {
        if (e.target !== box) return
        if (e.key === "ArrowRight") go(shown + 1)
        else if (e.key === "ArrowLeft") go(shown - 1)
      })
      function go(n) {
        shown = Math.max(1, Math.min(steps.length, n))
        steps.forEach((s, i) => {
          s.classList.toggle("xp-hidden", i >= shown)
          s.classList.toggle("xp-latest", i === shown - 1)
        })
        count.textContent = `${shown} / ${steps.length}`
        first.disabled = back.disabled = shown === 1
        next.disabled = last.disabled = shown === steps.length
        box.classList.toggle("xp-done", shown === steps.length)
      }
      go(1)
    }
  }

  // ===================================================================
  // Quizzes
  // ===================================================================
  function initQuizzes() {
    for (const quiz of $$(".xp-quiz")) {
      if (quiz.dataset.ready) continue
      quiz.dataset.ready = "1"
      const choices = $$(":scope > .xp-choices > .xp-choice", quiz)
      const solution = $(":scope > .xp-solution", quiz)
      const question = $(":scope > .xp-q", quiz)
      quiz.prepend(h("div", "xp-quiz-badge", "Check your understanding"))
      const feedback = h("div", "xp-feedback")
      feedback.hidden = true
      $(":scope > .xp-choices", quiz).after(feedback)
      let answered = false
      choices.forEach((c, i) => {
        const label = $(".xp-choice-label", c)
        const btn = h("button", "xp-choice-btn")
        btn.type = "button"
        const letter = h("span", "xp-letter", String.fromCharCode(65 + i))
        btn.append(letter)
        const body = h("div", "xp-choice-text")
        while (label.firstChild) body.append(label.firstChild)
        btn.append(body)
        label.replaceWith(btn)
        btn.addEventListener("click", () => answer(i))
      })
      if (solution) solution.hidden = true

      function answer(i) {
        if (answered) return
        answered = true
        const picked = choices[i]
        const ok = picked.dataset.correct === "true"
        quiz.classList.add("xp-answered", ok ? "xp-right" : "xp-wrong")
        choices.forEach((c, j) => {
          $(".xp-choice-btn", c).disabled = true
          if (c.dataset.correct === "true") c.classList.add("xp-is-correct")
          if (j === i && !ok) c.classList.add("xp-is-wrong")
        })
        feedback.hidden = false
        feedback.innerHTML = ""
        const head = h("div", "xp-feedback-head", ok ? "Correct!" : "Not quite.")
        feedback.append(head)
        const why = $(".xp-choice-why", picked)
        if (!ok) {
          const wrongBox = h("div", "xp-why-wrong")
          wrongBox.append(h("strong", "", `Why ${String.fromCharCode(65 + i)} doesn't work: `))
          if (why && why.textContent.trim()) wrongBox.append(...Array.from(why.cloneNode(true).childNodes))
          else wrongBox.append("this isn't what the problem is asking for. Walk through the steps below to see why.")
          feedback.append(wrongBox)
          const right = choices.findIndex((c) => c.dataset.correct === "true")
          feedback.append(h("div", "xp-right-answer", `The right answer is ${String.fromCharCode(65 + right)}.`))
        } else if (why && why.textContent.trim()) {
          const box = h("div", "xp-why-right")
          box.append(...Array.from(why.cloneNode(true).childNodes))
          feedback.append(box)
        }
        if (solution) {
          const sol = h("div", "xp-solution-shown")
          sol.append(h("div", "xp-solution-title", "How to get there"))
          const content = h("div", "xp-solution-body")
          content.append(...Array.from(solution.childNodes))
          sol.append(content)
          feedback.append(sol)
          initSteps()
        }
        const retry = h("button", "xp-btn", "Try again")
        retry.type = "button"
        retry.addEventListener("click", reset)
        feedback.append(retry)
      }
      function reset() {
        answered = false
        // return solution content to its home so a second answer can re-use it
        const content = $(".xp-solution-body", feedback)
        if (content && solution) {
          while (content.firstChild) solution.append(content.firstChild)
        }
        quiz.classList.remove("xp-answered", "xp-right", "xp-wrong")
        choices.forEach((c) => {
          c.classList.remove("xp-is-correct", "xp-is-wrong")
          $(".xp-choice-btn", c).disabled = false
        })
        feedback.hidden = true
        feedback.innerHTML = ""
      }
      void question
    }
  }

  // ===================================================================
  // Graphs
  // ===================================================================
  // --- tiny safe expression parser (no eval) -----------------------
  const FUNCS = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
    sec: (x) => 1 / Math.cos(x), csc: (x) => 1 / Math.sin(x), cot: (x) => 1 / Math.tan(x),
    sqrt: Math.sqrt, abs: Math.abs, exp: Math.exp, ln: Math.log, log: Math.log10,
    floor: Math.floor, ceil: Math.ceil, sign: Math.sign, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  }
  const CONSTS = { pi: Math.PI, e: Math.E, tau: 2 * Math.PI }

  function compile(src) {
    const s = String(src).replace(/\s+/g, "").replace(/π/g, "pi")
    let i = 0
    const peek = () => s[i]
    const num = () => {
      const m = /^\d*\.?\d+(e[+-]?\d+)?/i.exec(s.slice(i))
      if (!m) throw new Error(`Unexpected '${s[i] ?? "end"}' in "${src}"`)
      i += m[0].length
      return { t: "n", v: parseFloat(m[0]) }
    }
    function primary() {
      const c = peek()
      if (c === "(") {
        i++
        const e = expr()
        if (peek() !== ")") throw new Error(`Missing ) in "${src}"`)
        i++
        return e
      }
      if (c === "|") {
        i++
        const e = expr()
        if (peek() !== "|") throw new Error(`Missing | in "${src}"`)
        i++
        return { t: "f", f: Math.abs, a: e }
      }
      if (/[a-z]/i.test(c ?? "")) {
        const m = /^[a-z_][a-z_0-9]*/i.exec(s.slice(i))
        const name = m[0]
        // greedily split things like "2x" handled elsewhere; here names are whole
        i += name.length
        if (peek() === "(" && FUNCS[name]) {
          i++
          const e = expr()
          if (peek() !== ")") throw new Error(`Missing ) in "${src}"`)
          i++
          return { t: "f", f: FUNCS[name], a: e }
        }
        if (name in CONSTS) return { t: "n", v: CONSTS[name] }
        return { t: "v", n: name }
      }
      return num()
    }
    function power() {
      const base = primary()
      if (peek() === "^") {
        i++
        const exp = unary() // right assoc
        return { t: "b", o: "^", l: base, r: exp }
      }
      return base
    }
    function unary() {
      if (peek() === "-") {
        i++
        return { t: "neg", a: unary() }
      }
      if (peek() === "+") {
        i++
        return unary()
      }
      return power()
    }
    function term() {
      let l = unary()
      while (i < s.length) {
        const c = peek()
        if (c === "*" || c === "/") {
          i++
          l = { t: "b", o: c, l, r: unary() }
        } else if (c === "(" || /[a-z0-9.]/i.test(c)) {
          // implicit multiplication: 2x, 3(x+1), x sin(x)
          l = { t: "b", o: "*", l, r: unary() }
        } else break
      }
      return l
    }
    function expr() {
      let l = term()
      while (peek() === "+" || peek() === "-") {
        const o = s[i++]
        l = { t: "b", o, l, r: term() }
      }
      return l
    }
    const ast = expr()
    if (i < s.length) throw new Error(`Unexpected '${s[i]}' in "${src}"`)
    const run = (n, env) => {
      switch (n.t) {
        case "n": return n.v
        case "v": {
          const v = env[n.n]
          if (v === undefined) throw new Error(`Unknown variable ${n.n}`)
          return v
        }
        case "neg": return -run(n.a, env)
        case "f": return n.f(run(n.a, env))
        case "b": {
          const a = run(n.l, env)
          const b = run(n.r, env)
          switch (n.o) {
            case "+": return a + b
            case "-": return a - b
            case "*": return a * b
            case "/": return a / b
            default: return Math.pow(a, b)
          }
        }
      }
    }
    return (env) => run(ast, env)
  }

  const cssVar = (name, fallback) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback

  function palette() {
    return {
      text: cssVar("--darkgray", "#444"),
      grid: cssVar("--lightgray", "#ddd"),
      axis: cssVar("--gray", "#999"),
      curve: cssVar("--xp-curve", "#2f6f9f"),
      accent: cssVar("--xp-accent", "#d9822b"),
      fill: cssVar("--xp-accent-soft", "rgba(217,130,43,.18)"),
      bg: cssVar("--light", "#fff"),
    }
  }

  function niceStep(span) {
    const raw = span / 8
    const p = Math.pow(10, Math.floor(Math.log10(raw)))
    const n = raw / p
    return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * p
  }

  function initGraphs() {
    for (const host of $$(".xp-graph")) {
      if (host.dataset.ready) continue
      host.dataset.ready = "1"
      let cfg
      try {
        cfg = JSON.parse(host.dataset.config || "{}")
        if (cfg.error) throw new Error(cfg.error)
        buildGraph(host, cfg)
      } catch (err) {
        host.classList.add("xp-graph-error")
        host.textContent = `Graph error: ${err.message}`
      }
    }
  }

  function buildGraph(host, cfg) {
    const kind = cfg.type ?? (cfg.parametric || cfg.px ? "parametric" : "plot")
    const frame = h("div", "xp-graph-frame")
    const canvas = h("canvas", "xp-canvas")
    const controls = h("div", "xp-graph-controls")
    host.append(frame)
    if (cfg.title) frame.append(h("div", "xp-graph-title", cfg.title))
    frame.append(canvas)
    frame.append(controls)
    if (cfg.caption) frame.append(h("div", "xp-graph-caption", cfg.caption))
    const aspect = cfg.aspect ?? 0.6
    const ctx = canvas.getContext("2d")
    const params = {}
    const sliders = cfg.sliders ?? {}
    for (const [name, spec] of Object.entries(sliders)) {
      const [min, max, step = (max - min) / 100, init = min] = spec
      params[name] = init
      const wrap = h("label", "xp-slider")
      const val = h("span", "xp-slider-val", String(init))
      const input = h("input")
      input.type = "range"
      input.min = min
      input.max = max
      input.step = step
      input.value = init
      input.addEventListener("input", () => {
        params[name] = parseFloat(input.value)
        val.textContent = String(params[name])
        paintNow()
      })
      wrap.append(h("span", "xp-slider-name", name), input, val)
      controls.append(wrap)
    }

    const env = (extra) => ({ ...params, ...extra })
    const [xmin, xmax] = (cfg.x ?? [-5, 5]).map((v) => (typeof v === "string" ? compile(v)(env({})) : v))
    const fns = (cfg.fns ?? (cfg.fn ? [{ fn: cfg.fn }] : [])).map((f, i) => {
      const o = typeof f === "string" ? { fn: f } : f
      return { ...o, f: compile(o.fn), color: o.color }
    })
    const par = kind === "parametric" ? { x: compile(cfg.px ?? cfg.parametric.x), y: compile(cfg.py ?? cfg.parametric.y) } : null
    const trange = cfg.t ?? [0, 1]
    const speed = (cfg.duration ?? 3) * 1000

    // domain -> y range
    let ymin, ymax
    const sample = (f, a, b, n = 300) => {
      const out = []
      for (let i = 0; i <= n; i++) {
        const x = a + ((b - a) * i) / n
        let y
        try {
          y = f(env({ x }))
        } catch {
          y = NaN
        }
        out.push([x, y])
      }
      return out
    }
    const computeRange = () => {
      if (cfg.y) return cfg.y.map(Number)
      let lo = Infinity
      let hi = -Infinity
      const feed = (y) => {
        if (Number.isFinite(y) && Math.abs(y) < 1e6) {
          lo = Math.min(lo, y)
          hi = Math.max(hi, y)
        }
      }
      if (par) {
        for (let i = 0; i <= 200; i++) {
          const t = trange[0] + ((trange[1] - trange[0]) * i) / 200
          feed(par.y(env({ t })))
        }
      } else for (const f of fns) sample(f.f, xmin, xmax).forEach(([, y]) => feed(y))
      if (!Number.isFinite(lo)) [lo, hi] = [-1, 1]
      if (kind === "revolve") {
        const m = Math.max(Math.abs(lo), Math.abs(hi))
        lo = -m
        hi = m
      }
      if (lo > 0 && lo < (hi - lo) * 0.5) lo = 0
      if (hi < 0 && -hi < (hi - lo) * 0.5) hi = 0
      const pad = (hi - lo || 1) * 0.12
      return [lo - pad, hi + pad]
    }
    ;[ymin, ymax] = computeRange()
    let xlo = xmin
    let xhi = xmax
    if (par) {
      let lo = Infinity
      let hi = -Infinity
      for (let i = 0; i <= 200; i++) {
        const t = trange[0] + ((trange[1] - trange[0]) * i) / 200
        const x = par.x(env({ t }))
        lo = Math.min(lo, x)
        hi = Math.max(hi, x)
      }
      const pad = (hi - lo || 1) * 0.08
      xlo = lo - pad
      xhi = hi + pad
    } else if (kind === "revolve") {
      const pad = (xmax - xmin) * 0.1
      xlo = xmin - pad
      xhi = xmax + pad
    }
    if (cfg.xrange) [xlo, xhi] = cfg.xrange

    let W = 0
    let H = 0
    const resize = () => {
      const rect = frame.getBoundingClientRect()
      W = Math.max(280, Math.round(rect.width - 2))
      H = Math.round(W * aspect)
      const dpr = window.devicePixelRatio || 1
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.height = `${H}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paintNow()
    }
    const M = { l: 44, r: 16, t: 14, b: 30 }
    const sx = (x) => M.l + ((x - xlo) / (xhi - xlo)) * (W - M.l - M.r)
    const sy = (y) => H - M.b - ((y - ymin) / (ymax - ymin)) * (H - M.t - M.b)

    function axes(c) {
      ctx.save()
      ctx.font = "12px var(--bodyFont), sans-serif"
      ctx.fillStyle = c.text
      ctx.strokeStyle = c.grid
      ctx.lineWidth = 1
      const stepX = niceStep(xhi - xlo)
      const stepY = niceStep(ymax - ymin)
      ctx.textAlign = "center"
      for (let x = Math.ceil(xlo / stepX) * stepX; x <= xhi + 1e-9; x += stepX) {
        ctx.beginPath()
        ctx.moveTo(sx(x), M.t)
        ctx.lineTo(sx(x), H - M.b)
        ctx.stroke()
        ctx.fillText(+x.toFixed(6) + "", sx(x), H - M.b + 16)
      }
      ctx.textAlign = "right"
      for (let y = Math.ceil(ymin / stepY) * stepY; y <= ymax + 1e-9; y += stepY) {
        ctx.beginPath()
        ctx.moveTo(M.l, sy(y))
        ctx.lineTo(W - M.r, sy(y))
        ctx.stroke()
        ctx.fillText(+y.toFixed(6) + "", M.l - 6, sy(y) + 4)
      }
      ctx.strokeStyle = c.axis
      ctx.lineWidth = 1.5
      if (xlo < 0 && xhi > 0) {
        ctx.beginPath()
        ctx.moveTo(sx(0), M.t)
        ctx.lineTo(sx(0), H - M.b)
        ctx.stroke()
      }
      if (ymin < 0 && ymax > 0) {
        ctx.beginPath()
        ctx.moveTo(M.l, sy(0))
        ctx.lineTo(W - M.r, sy(0))
        ctx.stroke()
      }
      if (cfg.xlabel || cfg.ylabel) {
        ctx.fillStyle = c.text
        ctx.textAlign = "right"
        if (cfg.xlabel) ctx.fillText(cfg.xlabel, W - M.r, H - 6)
        if (cfg.ylabel) {
          ctx.save()
          ctx.translate(12, M.t + 4)
          ctx.rotate(-Math.PI / 2)
          ctx.textAlign = "right"
          ctx.fillText(cfg.ylabel, 0, 0)
          ctx.restore()
        }
      }
      ctx.restore()
    }

    function stroke(points, color, width = 2.5, upto = 1) {
      ctx.save()
      ctx.strokeStyle = color
      ctx.lineWidth = width
      ctx.lineJoin = "round"
      ctx.lineCap = "round"
      ctx.beginPath()
      const limit = Math.max(1, Math.floor(points.length * upto))
      let pen = false
      for (let i = 0; i < limit; i++) {
        const [x, y] = points[i]
        if (!Number.isFinite(y) || Math.abs(y) > 1e6) {
          pen = false
          continue
        }
        const px = sx(x)
        const py = sy(y)
        if (!pen) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
        pen = true
      }
      ctx.stroke()
      ctx.restore()
    }

    const dot = (x, y, color, r = 5) => {
      ctx.save()
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(sx(x), sy(y), r, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = cssVar("--light", "#fff")
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()
    }

    const colors = (c) => [c.curve, c.accent, "#5d9b73", "#a65da6"]

    // animation state --------------------------------------------------
    let progress = 1 // 0..1, the finished picture until someone presses play
    let raf = 0
    let playBtn = null
    const playable = ["draw", true, "revolve"].includes(cfg.animate) || kind === "revolve" || (kind === "parametric" && cfg.animate !== false)
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
    function play() {
      cancelAnimationFrame(raf)
      progress = 0
      const t0 = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / speed)
        progress = kind === "parametric" ? t : ease(t)
        paintNow()
        if (t < 1) raf = requestAnimationFrame(tick)
        else if (playBtn) playBtn.textContent = "↻ Replay"
      }
      if (playBtn) playBtn.textContent = "… playing"
      raf = requestAnimationFrame(tick)
    }
    if (playable) {
      playBtn = h("button", "xp-btn xp-btn-primary", kind === "revolve" ? "▶ Revolve" : "▶ Animate")
      playBtn.type = "button"
      playBtn.addEventListener("click", play)
      controls.prepend(playBtn)
    }
    onCleanup(() => cancelAnimationFrame(raf))

    // painters -----------------------------------------------------------
    function paintPlot(c) {
      axes(c)
      const cols = colors(c)
      fns.forEach((f, i) => {
        const col = f.color ?? cols[i % cols.length]
        const pts = sample(f.f, xmin, xmax, 400)
        if (cfg.area && i === 0) {
          const [a, b] = cfg.area.map((v) => (typeof v === "string" ? compile(v)(env({})) : v))
          ctx.save()
          ctx.fillStyle = c.fill
          ctx.beginPath()
          ctx.moveTo(sx(a), sy(0))
          const m = 200
          for (let k = 0; k <= m; k++) {
            const x = a + ((b - a) * k) / m
            ctx.lineTo(sx(x), sy(f.f(env({ x }))))
          }
          ctx.lineTo(sx(b), sy(0))
          ctx.closePath()
          ctx.fill()
          ctx.restore()
        }
        stroke(pts, col, 2.5, progress)
        if (progress < 1 && progress > 0) {
          const [x, y] = pts[Math.min(pts.length - 1, Math.floor(pts.length * progress))]
          dot(x, y, col)
        }
        if (f.label) {
          const [x, y] = pts[Math.floor(pts.length * 0.92)]
          ctx.save()
          ctx.fillStyle = col
          ctx.font = "600 13px var(--bodyFont), sans-serif"
          ctx.fillText(f.label, sx(x) - 30, sy(y) - 8)
          ctx.restore()
        }
      })
      for (const p of cfg.points ?? []) {
        const [x, y] = p.map((v) => (typeof v === "string" ? compile(v)(env({})) : v))
        dot(x, y, c.accent)
      }
    }

    function paintParametric(c) {
      axes(c)
      const n = 300
      const pts = []
      for (let i = 0; i <= n; i++) {
        const t = trange[0] + ((trange[1] - trange[0]) * i) / n
        pts.push([par.x(env({ t })), par.y(env({ t }))])
      }
      // the faint full path, then the part travelled so far
      ctx.save()
      ctx.setLineDash([4, 5])
      stroke(pts, c.grid, 2)
      ctx.restore()
      stroke(pts, c.curve, 2.5, progress)
      const k = Math.min(n, Math.floor(n * progress))
      // ghost positions every so often (like a strobe photo)
      const ghosts = cfg.ghosts ?? 0
      for (let g = 1; g <= ghosts; g++) {
        const gi = Math.floor((n * g) / (ghosts + 1))
        if (gi < k) dot(pts[gi][0], pts[gi][1], c.axis, 3.5)
      }
      dot(pts[k][0], pts[k][1], c.accent, 6)
      if (cfg.readout !== false) {
        const t = trange[0] + (trange[1] - trange[0]) * progress
        ctx.save()
        ctx.fillStyle = c.text
        ctx.font = "13px var(--bodyFont), sans-serif"
        ctx.textAlign = "left"
        ctx.fillText(`t = ${t.toFixed(2)}${cfg.tunit ?? " s"}`, M.l + 10, M.t + 16)
        ctx.restore()
      }
    }

    function paintArclength(c) {
      axes(c)
      const f = fns[0].f
      const n = Math.round(params.n ?? cfg.n ?? 4)
      stroke(sample(f, xmin, xmax, 400), c.curve, 2.5)
      let len = 0
      ctx.save()
      ctx.strokeStyle = c.accent
      ctx.lineWidth = 2.5
      ctx.beginPath()
      let prev = null
      for (let i = 0; i <= n; i++) {
        const x = xmin + ((xmax - xmin) * i) / n
        const y = f(env({ x }))
        if (prev) len += Math.hypot(x - prev[0], y - prev[1])
        if (i === 0) ctx.moveTo(sx(x), sy(y))
        else ctx.lineTo(sx(x), sy(y))
        prev = [x, y]
      }
      ctx.stroke()
      ctx.restore()
      for (let i = 0; i <= n; i++) {
        const x = xmin + ((xmax - xmin) * i) / n
        dot(x, f(env({ x })), c.accent, 3.5)
      }
      let exact = 0
      prev = null
      for (let i = 0; i <= 4000; i++) {
        const x = xmin + ((xmax - xmin) * i) / 4000
        const y = f(env({ x }))
        if (prev) exact += Math.hypot(x - prev[0], y - prev[1])
        prev = [x, y]
      }
      ctx.save()
      ctx.fillStyle = c.text
      ctx.font = "13px var(--bodyFont), sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(`${n} segment${n === 1 ? "" : "s"}: length ≈ ${len.toFixed(4)}`, M.l + 10, M.t + 16)
      ctx.fillText(`true length ≈ ${exact.toFixed(4)}`, M.l + 10, M.t + 34)
      ctx.restore()
    }

    // revolve: wireframe of the surface swept out around the x- or y-axis
    function paintRevolve(c) {
      const f = fns[0].f
      const axis = cfg.axis ?? "x"
      const yaw = -0.62
      const pitch = 0.42
      // world (x along axis, y radial) -> screen, orthographic
      const proj = (X, Y, Z) => {
        const x1 = X * Math.cos(yaw) + Z * Math.sin(yaw)
        const z1 = -X * Math.sin(yaw) + Z * Math.cos(yaw)
        const y2 = Y * Math.cos(pitch) - z1 * Math.sin(pitch)
        return [x1, y2]
      }
      // fit
      const radius = Math.max(...sample(f, xmin, xmax, 100).map(([, y]) => Math.abs(y)).filter(Number.isFinite))
      const L = xmax - xmin
      const extent = Math.max(L, radius * 2) * 0.62
      const cx = (xmin + xmax) / 2
      const k = Math.min((W - 30) / (extent * 2.1), (H - 30) / (extent * 1.5))
      const toS = ([a, b]) => [W / 2 + (a - (cx * Math.cos(yaw))) * k, H / 2 - b * k]
      const P = (x, r, th) => {
        // axis x: radius r spins in the y-z plane; axis y: swap roles
        return axis === "x"
          ? toS(proj(x, r * Math.cos(th), r * Math.sin(th)))
          : toS(proj(r * Math.cos(th), x, r * Math.sin(th)))
      }
      const maxTh = Math.PI * 2 * progress
      ctx.save()
      ctx.lineJoin = "round"
      // axis of rotation
      ctx.strokeStyle = c.axis
      ctx.lineWidth = 1.5
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      const a0 = axis === "x" ? toS(proj(xmin - L * 0.15, 0, 0)) : toS(proj(0, xmin - L * 0.15, 0))
      const a1 = axis === "x" ? toS(proj(xmax + L * 0.15, 0, 0)) : toS(proj(0, xmax + L * 0.15, 0))
      ctx.moveTo(...a0)
      ctx.lineTo(...a1)
      ctx.stroke()
      ctx.setLineDash([])
      // rings (cross sections)
      const rings = cfg.rings ?? 14
      ctx.lineWidth = 1
      ctx.strokeStyle = c.accent
      ctx.globalAlpha = 0.55
      for (let i = 0; i <= rings; i++) {
        const x = xmin + (L * i) / rings
        const r = Math.abs(f(env({ x })))
        if (!Number.isFinite(r)) continue
        ctx.beginPath()
        const steps = Math.max(2, Math.ceil(maxTh / 0.1))
        for (let s = 0; s <= steps; s++) {
          const th = (maxTh * s) / steps
          const [px, py] = P(x, r, th)
          if (s === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
      // meridians
      const mer = cfg.meridians ?? 16
      for (let m = 0; m < mer; m++) {
        const th = (Math.PI * 2 * m) / mer
        if (th > maxTh) break
        ctx.beginPath()
        for (let s = 0; s <= 80; s++) {
          const x = xmin + (L * s) / 80
          const [px, py] = P(x, f(env({ x })), th)
          if (s === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      // the generating curve (rotates with the sweep)
      ctx.strokeStyle = c.curve
      ctx.lineWidth = 3
      ctx.beginPath()
      for (let s = 0; s <= 120; s++) {
        const x = xmin + (L * s) / 120
        const [px, py] = P(x, f(env({ x })), maxTh)
        if (s === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.restore()
      ctx.save()
      ctx.fillStyle = c.text
      ctx.font = "13px var(--bodyFont), sans-serif"
      ctx.fillText(`rotated ${Math.round((maxTh * 180) / Math.PI)}°`, 14, 22)
      ctx.restore()
    }

    function paintNow() {
      if (!W) return
      const c = palette()
      ctx.clearRect(0, 0, W, H)
      try {
        if (kind === "parametric") paintParametric(c)
        else if (kind === "arclength") paintArclength(c)
        else if (kind === "revolve") {
          paintRevolve(c)
        } else paintPlot(c)
      } catch (err) {
        ctx.fillStyle = c.text
        ctx.fillText(String(err.message), 12, 24)
      }
    }
    if (kind === "revolve") progress = cfg.start ?? 0.3
    new ResizeObserver(() => resize()).observe(frame)
    const theme = new MutationObserver(paintNow)
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["saved-theme"] })
    onCleanup(() => theme.disconnect())
    resize()
    if (cfg.autoplay) {
      const io = new IntersectionObserver((es) => {
        if (es.some((e) => e.isIntersecting)) {
          io.disconnect()
          play()
        }
      })
      io.observe(frame)
      onCleanup(() => io.disconnect())
    }
  }

  // ===================================================================
  function init() {
    initNotes()
    initSteps()
    initQuizzes()
    initGraphs()
  }
  document.addEventListener("nav", init)
})()

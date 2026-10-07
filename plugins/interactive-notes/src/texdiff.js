// Highlights what changed between two consecutive LaTeX equations by wrapping
// the new tokens in \hl{...}. It works on a token level (commands with their
// arguments stay together) and recurses into matching commands so that only
// the part of a fraction / root that actually changed is highlighted.

const TEXT_ARG_CMDS = new Set(["mathrm", "text", "mathbf", "textbf", "operatorname", "mathit"])

function readGroup(s, i, open, close) {
  let depth = 0
  for (let j = i; j < s.length; j++) {
    if (s[j] === "\\") {
      j++
      continue
    }
    if (s[j] === open) depth++
    else if (s[j] === close && --depth === 0) return j + 1
  }
  return s.length
}

export function tokenize(s) {
  const toks = []
  let i = 0
  while (i < s.length) {
    const c = s[i]
    if (/\s/.test(c)) {
      i++
      continue
    }
    let j = i
    if (c === "{") {
      j = readGroup(s, i, "{", "}")
    } else if (c === "\\") {
      j = i + 1
      if (/[A-Za-z]/.test(s[j] ?? "")) {
        while (/[A-Za-z]/.test(s[j] ?? "")) j++
      } else j++
      const name = s.slice(i + 1, j)
      if (name === "left" || name === "right") {
        // the delimiter belongs to the token
        if (s[j] === "\\") {
          j++
          while (/[A-Za-z]/.test(s[j] ?? "")) j++
        } else j++
      } else if (name !== "\\") {
        // greedily attach brace groups (and an optional [..]) as arguments
        while (true) {
          let k = j
          while (s[k] === " ") k++
          if (s[k] === "{") j = readGroup(s, k, "{", "}")
          else if (s[k] === "[" && (name === "sqrt" || name === "frac")) j = readGroup(s, k, "[", "]")
          else break
        }
      }
    } else if (/[0-9.]/.test(c)) {
      while (/[0-9.]/.test(s[j] ?? "")) j++
    } else {
      j = i + 1
    }
    // attach scripts (x^2, a_{i}^{n}) to their base
    while (c !== "&" && true) {
      let k = j
      while (s[k] === " ") k++
      if (s[k] !== "^" && s[k] !== "_") break
      k++
      while (s[k] === " ") k++
      if (s[k] === "{") k = readGroup(s, k, "{", "}")
      else if (s[k] === "\\") {
        k++
        while (/[A-Za-z]/.test(s[k] ?? "")) k++
      } else k++
      j = k
    }
    toks.push(s.slice(i, j))
    i = j
  }
  return toks
}

function lcs(a, b) {
  const n = a.length
  const m = b.length
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1))
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
  const pairs = []
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      pairs.push([i, j])
      i++
      j++
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++
    else j++
  }
  return pairs
}

function split(tok) {
  // "\frac{a}{b}" -> ["\frac", "{a}", "{b}"]
  if (tok[0] === "{") return { head: "", groups: [tok] }
  const m = tok.match(/^\\([A-Za-z]+)/)
  if (!m) return null
  const head = "\\" + m[1]
  const groups = []
  let i = head.length
  while (i < tok.length) {
    if (tok[i] === " ") {
      i++
      continue
    }
    const open = tok[i]
    const close = open === "{" ? "}" : "]"
    const end = readGroup(tok, i, open, close)
    groups.push(tok.slice(i, end))
    i = end
  }
  return { head, groups }
}

const STRUCT = new Set(["&", "\\\\", "^", "_"])
const wrap = (t) => `\\hl{${t}}`

// returns the new equation with changed tokens highlighted
function diffTokens(oldT, newT) {
  const pairs = lcs(oldT, newT)
  const out = []
  let pi = 0
  let oi = 0
  let ni = 0
  let run = []
  const flush = () => {
    if (!run.length) return
    // never wrap bare structure tokens on their own
    let start = 0
    const emit = []
    let cur = []
    for (const t of run) {
      if (t === "&" || t === "\\\\") {
        if (cur.length) emit.push(wrap(cur.join(" ")))
        cur = []
        emit.push(t)
      } else cur.push(t)
    }
    if (cur.length) emit.push(wrap(cur.join(" ")))
    out.push(...emit)
    run = []
  }
  const hunk = (oEnd, nEnd) => {
    const delT = oldT.slice(oi, oEnd)
    const insT = newT.slice(ni, nEnd)
    // replaced a single command/group by one of the same shape: recurse
    if (delT.length === 1 && insT.length === 1) {
      const a = split(delT[0])
      const b = split(insT[0])
      if (a && b && a.head === b.head && a.groups.length === b.groups.length && a.groups.length) {
        flush()
        const parts = b.groups.map((g, k) => {
          if (a.groups[k] === g) return g
          if (g[0] === "{" && a.groups[k][0] === "{") {
            const inner = diffTokens(tokenize(a.groups[k].slice(1, -1)), tokenize(g.slice(1, -1)))
            return "{" + inner + "}"
          }
          return g
        })
        out.push(b.head + parts.join(""))
        return
      }
    }
    run.push(...insT)
  }
  for (const [o, n] of pairs) {
    if (o > oi || n > ni) hunk(o, n)
    flush()
    out.push(newT[n])
    oi = o + 1
    ni = n + 1
  }
  hunk(oldT.length, newT.length)
  flush()
  void pi
  void STRUCT
  void TEXT_ARG_CMDS
  return out.join(" ")
}

const balanced = (s) => {
  const count = (re) => (s.match(re) ?? []).length
  return count(/\\left/g) === count(/\\right/g) && count(/\\begin/g) === count(/\\end/g)
}

/** Returns the next equation with changes marked, or the unchanged text if unsafe. */
export function highlightChange(prev, next) {
  if (!prev || next.includes("\\hl")) return next
  try {
    const result = diffTokens(tokenize(prev), tokenize(next))
    // each \hl run must be self-contained
    const runs = result.match(/\\hl\{(?:[^{}]|\{[^{}]*\})*\}/g) ?? []
    if (runs.some((r) => !balanced(r))) return next
    // if everything changed, highlighting is just noise
    if (runs.length === 1 && runs[0].length >= result.length - 2) return next
    return result
  } catch {
    return next
  }
}

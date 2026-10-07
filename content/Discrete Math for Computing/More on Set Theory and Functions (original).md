---
created: 2026-09-22T14:00:00
modified: 2026-09-22T15:12:00
title: "More on Set Theory and Functions (original)"
unlisted: true
original: true
course: "[[Discrete Math for Computing]]"
date created: 2026-09-22T14:00:00
date modified: 2026-09-22T15:12:00
---
# More on Set Theory

Ex:

Verify $\overline{ A\cup B }$ = $A \cap B$ (use membership table)

| $A$ | $B$ | $A\cup B$ | $\overline{ A\cup B }$ | $\overline{ A }$ | $\overline{ B }$ | $\overline{ A }\cap \overline{ B }$ |
| --- | --- | --------- | ---------------------- | ---------------- | ---------------- | ----------------------------------- |
| 0   | 0   | 0         | 1                      | 1                | 1                | 1                                   |
| 0   | 1   | 1         | 0                      | 1                | 0                | 0                                   |
| 1   | 0   | 1         | 0                      | 0                | 1                | 0                                   |
| 1   | 1   | 1         | 0                      | 0                | 0                | 0                                   |
Ex: Verify $\overline{A\cup B} = \overline{ A }\cap \overline{ B }$ by definitions

Solution
$$
\overline{ A\cup B  }= \{ x|x\not \in (A\cup B) \} = \{ x|\neg(\in A\cup B) \}
$$
$$
= \{ x|\neg(x \in A vx \in B) \}= \{ x|x\not \in A \land x \not\in B\}
$$
$$
= \{ x|x\in \overline{ A } \land x \in \overline{ B } \} = \overline{ A } \cap \overline{ B }
$$

---
Ex:
Verify $A\cup(B\cap C) = (C\cup B) \cap A$
$$
A\cup(B\cap C) \overbrace{ = }^{ \text{De Morgan's} } \overline{ A } \cap \overline{ (B\cap C) } = \overline{ A } \cap(\overline{ B }\cup \overline{ C })
$$
$$
= (\overline{ C }\cup \overline{ B }) \cap \overline{ A }
$$
$$
A\subseteq B
$$
$$
\overline{ B } \subseteq \overline{ A }
$$

---
$$
\bigcup_{i\in I} A_{i} = \{ x|\exists i\in I(x\in A_{i}) \}
$$
$$
\bigcap_{i\in I} A_{i} = \{ x|\forall i\in I(x\in A_{i}) \}
$$
Ex:
$$
I = \mathbb{Z}^{+} = \{ 1,2,3,\dots \}
$$
$$
\bigcup_{i\in \mathbb{Z}^{+}} A_{i} = \bigcup_{i=i}^{\infty} A_{i}
$$
$$
\bigcap_{i\in\mathbb{Z}}A_{i} = \bigcap_{i=1}^{\infty} A_{i}
$$
$$
I = \{ 1,2,3,\dots,n \}
$$
$$
\bigcup_{i\in I} A_{i} = \bigcup_{i=1}^{n} A_{i} = A_{1}\cup A_{2}\cup A_{3}\dots \cup A_{n}
$$
Ex: For $i \in \mathbb{Z}^{+}$, define $A_{i} = \{ i, i+1, i+2, \dots \}$
Find:
$$
\bigcup_{i=1}^{n} A_{i}
$$
$$
A_{1}\subseteq A_{2} \subseteq A_{3}\subseteq\dots
$$
$$
\bigcup_{i=1}^{n} A_{i} = A_{i}\cup A_{2}\cup\dots \cup A_{n} = A_{1}= \mathbb{Z}^{+}
$$
Find:
$$
\bigcap_{i=1}^{n}A_{i} = A_{n} = \{ n, n+1, n+2, \dots \}
$$

---
Ex: Let $A_{i} = \{ 1,2,3,\dots,i \}$ $(i\in \mathbb{Z}^{+})$
Find:
$$
\bigcup_{i=1}^{\infty} A_{i} = \mathbb{Z}^{+}
$$
$$
A_{1}\subseteq A_{2} \subseteq A_{3}\subseteq\dots
$$
Find:
$$
\bigcap_{i=1}^{n}A_{i} = A_{i} = \{ 1 \}
$$

## Bit String Representations of Sets

Let $U = \{ a_{i}, a_{2}, \dots, a_{n} \}$ be an (ordered) universal set. %%Abuse of language%%

Let $S\subseteq U$. Associate a bit string $B_{s} = b_{1}b_{2}\dots b_{n}$ given by:
$$
b_{i} = 1\text{ if } a_{i}\in S \text{ or } 0 \text{ if } a_{i} \not\in S 
$$

Ex:
$$
U = \{ 1,2,3,4,5,6 \}
$$
$$
S_{1} = \{ 2,4,6 \},\ B_{S_{1}} = 010101
$$
$$
S_{2} = \{ 1,3,5 \},\ B_{S_{2}} = 101010
$$
$$
S_{3} = \{ 1,2,3 \},\ B_{S_{3}} = 111000
$$
$$
S_{4} = \{ 3,4,5 \},\ B_{S_{$}} = 001110
$$

## Functions %%2.3%%

Definition: Let $A,B$ be sets. A function $f$ from A to B (written $f: A\to B$) is an assignment of exactly one $b\in B$ to each $a\in A$
- A is set of inputs (domain of $f$)
- B is the codomain (outputs land in B)
$f(a) = b$ equiv: $a\to b$. $b$ is the image of $a$ under $f$.

---
Ex: Define $f: \{ a,b,c \}\to \{ 1,2,3,4 \}$
$$
f(a) = 1,\ f(b)=2, f(c) = 4
$$
This is a well-defined function (for each input we have one output)

---
Ex: Is this a function?
$$
g: \{ a,b,c \} \to \{ 1,2,3 \}
$$
$$
g(a) = 1,\ g(b) = 2
$$
$g(c)$ undefined, so not a function.

---
Ex: Is this a function?
$$
f: \{ a,b,c \} \to \{ 1,2,3 \}
$$
$$
f(a) = 1,\ f(b)= 2,\ f(c) = \pi
$$
$\pi \notin \{ 1,2,3 \}$ so $f$ isn't a function

---
Ex: Is $h$ a function
$$
h: \{ a,b,c \} \to \{ 1,2,3 \}
$$
$$
h(a) = 1,\ h(b) = 2,\ h(c) = 3,\ h(c)=2
$$
Problem - $h$ multiply defined at $c$ so $h$ not a function.

---
Let $f: A\to B$ be a function.
Let $A' \subseteq A$ and $B' \subseteq B$
$$
f(A') = \{ f(a) | a\in A' \} = \text{image of A' under f}
$$
$$
f^{-1}(B') = \{ a\in A| f(a) \in B' \} = \text{preimage of B' under the funciton f}
$$
$$
f(A) = \text{range of f} = \text{set of all outputs of f}
$$
$$
\text{range(f)} \subseteq \text{codomain(f)}
$$

---
Function $f:A\to B$
The function $f$ of $a$ outputs $b$ so $f^{-1}$ of $b$ outputs $a$
$$
f(a) = b \text{ iff } f^{-1}=a
$$

---
Definition: A function $f$ is **one-to-one**. (injective) (an injection) iff:
$$
\forall a,a' \in A : [f(a) = f(a') \to a=a']
$$
Equivalently:
$$
a \neq a' \to f(a) \neq f(a')
$$
Definition: A function $f: A\to B$ is **onto** (surjection) (surjective) iff:
$$
\text{range}(f) =  B
$$
Definition: A function $f: A\to B$ is a **bijection** (one-to-one correspondence) iff it is both one-to-one and onto
Fact: $f$ is invertible (i.e. $f^{-1}$ is a well-defined function) iff $f$ is a bijection.

---
Ex:
Define $f(x) = \sin x,\ f: \mathbb{R}\to \mathbb{R}$
Is $f$ 1-to-1, onto?
No. $f$ isn't one-to-one, since $f(0) = f(2\pi)= 0$
$$
\text{range}(f) = [-1.1] \subseteq \mathbb{R}, \text{so f(x) not onto}
$$

---
Ex:
Define $g(x) = \sin x,\ g: [\frac{-\pi}{2}, \frac{-\pi}{2} \to [-1,1]]$
$g$ is one-to-one (passes horizontal line test)
$g$ 9s onto as $\text{range}(g) = [-1,1]$
$g$ is abijection, it is invertable.
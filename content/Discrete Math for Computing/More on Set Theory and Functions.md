---
course: "[[Discrete Math for Computing]]"
created: 2026-09-22T14:00:00
modified: 2026-09-22T15:12:00
---
# More on Set Theory and Functions

Ex:

Verify $\overline{ A\cup B }$ = $\overline{A} \cap \overline{B}$ (use :explain[membership table]{#membership-table})

| $A$ | $B$ | $A\cup B$ | $\overline{ A\cup B }$ | $\overline{ A }$ | $\overline{ B }$ | $\overline{ A }\cap \overline{ B }$ |
| --- | --- | --------- | ---------------------- | ---------------- | ---------------- | ----------------------------------- |
| 0   | 0   | 0         | 1                      | 1                | 1                | 1                                   |
| 0   | 1   | 1         | 0                      | 1                | 0                | 0                                   |
| 1   | 0   | 1         | 0                      | 0                | 1                | 0                                   |
| 1   | 1   | 1         | 0                      | 0                | 0                | 0                                   |

::::explain{#membership-table title="How to read a membership table"}
A membership table is a truth table for sets. Each row is one kind of element, and a $1$ means "the element is in this set" while $0$ means "it isn't".

With two sets there are only four kinds of elements: in neither, only in $B$, only in $A$, or in both. That's the four rows. Every element of the universe falls into exactly one of them.

Then you fill in each column using the rules:

- $A \cup B$ is $1$ if **either** column is $1$ (like OR).
- $A \cap B$ is $1$ only if **both** are $1$ (like AND).
- $\overline{A}$ flips the $A$ column (like NOT).

Two sets are equal exactly when their columns match in every row. Here the $\overline{A \cup B}$ column and the $\overline{A} \cap \overline{B}$ column are both $1, 0, 0, 0$, so the sets are equal. This is De Morgan's law for sets.
::::

Ex: Verify $\overline{A\cup B} = \overline{ A }\cap \overline{ B }$ by definitions

Solution

:::steps{title="De Morgan's law from the definitions"}
$$
\overline{ A\cup B  }= \{ x \mid x\not \in (A\cup B) \}
$$
The complement is everything that isn't in the set.

---

$$
= \{ x \mid \neg(x \in A\cup B) \}
$$
"Not in" is the negation of "in".

---

$$
= \{ x \mid \neg(x \in A \lor x \in B) \}
$$
By the definition of union, being in $A \cup B$ means being in $A$ **or** in $B$.

---

$$
= \{ x \mid x\not \in A \land x \not\in B\}
$$
De Morgan's law for logic: $\neg(p \lor q) \equiv \neg p \land \neg q$.

---

$$
= \{ x \mid x\in \overline{ A } \land x \in \overline{ B } \}
$$
Not being in $A$ is the same as being in its complement.

---

$$
= \overline{ A } \cap \overline{ B }
$$
Being in both sets is the definition of intersection.
:::

---
Ex:
Verify $\overline{A\cup(B\cap C)} = (\overline{C}\cup \overline{B}) \cap \overline{A}$

:::steps{title="Using set identities"}
$$
\overline{A\cup(B\cap C)} = \overline{ A } \cap \overline{ (B\cap C) }
$$
De Morgan's law on the outer union: the complement of a union is the intersection of the complements.

---

$$
= \overline{ A } \cap(\overline{ B }\cup \overline{ C })
$$
De Morgan's law again, this time on $\overline{B \cap C}$: the complement of an intersection is the union of the complements.

---

$$
= (\overline{ C }\cup \overline{ B }) \cap \overline{ A }
$$
Union and intersection are both commutative, so we can swap the order of $\overline{B}$ and $\overline{C}$, and of the two sides of $\cap$.
:::

Fact: if $A$ is a subset of $B$, then their complements go the :explain[other way]{#complement-subset}.
$$
A\subseteq B \implies \overline{ B } \subseteq \overline{ A }
$$

::::explain{#complement-subset title="Why taking complements flips ⊆"}
Say $A \subseteq B$, so everything in $A$ is also in $B$. Now take something that's *not* in $B$ (it's in $\overline{B}$). Could it be in $A$? No, because anything in $A$ would have to be in $B$ too. So it's not in $A$ either, which means it's in $\overline{A}$.

Every element of $\overline{B}$ is in $\overline{A}$, so $\overline{B} \subseteq \overline{A}$.

Example: let the universe be $\{1, 2, 3, 4\}$, $A = \{1\}$ and $B = \{1, 2\}$. Then $\overline{B} = \{3, 4\}$ and $\overline{A} = \{2, 3, 4\}$, and $\{3, 4\} \subseteq \{2, 3, 4\}$. It's the same idea as the contrapositive in logic: $p \to q$ is equivalent to $\neg q \to \neg p$.
::::

:::::quiz
Using De Morgan's law, which set equals $\overline{A \cap B}$?

::::choice
$\overline{A} \cap \overline{B}$

---
That's the complement of the *union*, $\overline{A \cup B}$. When the bar is "broken" across the sets, the $\cap$ has to flip to $\cup$.
::::

::::choice{correct}
$\overline{A} \cup \overline{B}$
::::

::::choice
$A \cup B$

---
The complement didn't go anywhere. Every set inside still needs its own bar.
::::

::::choice
$\overline{A} \cap B$

---
Only $A$ got complemented here. De Morgan's law complements both sets and flips the operation.
::::

::::solution
De Morgan's law for sets: the complement of an intersection is the union of the complements.

$$
\overline{A \cap B} = \overline{A} \cup \overline{B}
$$

In words: "not in both" means "missing from at least one". You can double check it with a membership table, the same way as the first example.
::::
:::::

---
$$
\bigcup_{i\in I} A_{i} = \{ x \mid \exists i\in I(x\in A_{i}) \}
$$
$$
\bigcap_{i\in I} A_{i} = \{ x \mid \forall i\in I(x\in A_{i}) \}
$$
The big union and intersection are just the :explain[quantifiers from last time]{#indexed-quantifiers}, applied to sets.

::::explain{#indexed-quantifiers title="Big union = exists, big intersection = for all"}
These are the set versions of $\exists$ and $\forall$:

- $x$ is in the big **union** if it's in **at least one** of the $A_i$. That's "there exists an $i$".
- $x$ is in the big **intersection** if it's in **every single** $A_i$. That's "for all $i$".

It's the same relationship as $\cup$ with OR and $\cap$ with AND, just stretched over lots of sets at once, exactly like $\forall$ is a giant AND and $\exists$ is a giant OR.

$I$ is called the **index set**. It's just the list of labels for the sets, like $\{1, 2, 3, \dots\}$.
::::

Ex:
$$
I = \mathbb{Z}^{+} = \{ 1,2,3,\dots \}
$$
$$
\bigcup_{i\in \mathbb{Z}^{+}} A_{i} = \bigcup_{i=1}^{\infty} A_{i}
$$
$$
\bigcap_{i\in\mathbb{Z}^{+}}A_{i} = \bigcap_{i=1}^{\infty} A_{i}
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
The sets get smaller as $i$ grows (each one starts one number later), so they're :explain[nested]{#nested-sets}:
$$
A_{1}\supseteq A_{2} \supseteq A_{3}\supseteq\dots
$$
$$
\bigcup_{i=1}^{n} A_{i} = A_{1}\cup A_{2}\cup\dots \cup A_{n} = A_{1}= \mathbb{Z}^{+}
$$
Find:
$$
\bigcap_{i=1}^{n}A_{i} = A_{n} = \{ n, n+1, n+2, \dots \}
$$

::::explain{#nested-sets title="Unions and intersections of nested sets"}
When sets are nested, one inside the next, the union and intersection are easy to find:

- The **union** is the **biggest** set, since every other set is already inside it.
- The **intersection** is the **smallest** set, since that's all they have in common.

Here $A_1 = \{1, 2, 3, \dots\}$, $A_2 = \{2, 3, 4, \dots\}$, $A_3 = \{3, 4, 5, \dots\}$, and so on. Each one is the previous one with the first number removed, so they're shrinking: $A_1 \supseteq A_2 \supseteq A_3 \supseteq \cdots$.

So among $A_1, \dots, A_n$, the biggest is $A_1 = \mathbb{Z}^+$ (the union), and the smallest is $A_n = \{n, n+1, \dots\}$ (the intersection).

In the next example the sets *grow* instead ($A_1 \subseteq A_2 \subseteq \cdots$), so the roles swap.
::::

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
\bigcap_{i=1}^{n}A_{i} = A_{1} = \{ 1 \}
$$

:::::quiz
Let $B_i = \{0, 1, 2, \dots, i\}$ for $i = 1, 2, 3, \dots$. What is $\displaystyle\bigcap_{i=1}^{5} B_i$?

::::choice
$\{0, 1, 2, 3, 4, 5\}$

---
That's $B_5$, the biggest set, which is the *union*. The intersection is only what *all* five sets share.
::::

::::choice{correct}
$\{0, 1\}$
::::

::::choice
$\{0\}$

---
Check $B_1$ again: it's $\{0, 1\}$, since it goes from $0$ up to $i = 1$.
::::

::::choice
$\varnothing$

---
Every set contains $0$ and $1$, so the intersection isn't empty.
::::

::::solution
The sets grow: $B_1 = \{0, 1\} \subseteq B_2 = \{0, 1, 2\} \subseteq \cdots \subseteq B_5$. For nested sets, the intersection is the smallest one, $B_1 = \{0, 1\}$. Both $0$ and $1$ are in every $B_i$, and $2$ is missing from $B_1$, so nothing else makes it in.
::::
:::::

## Bit String Representations of Sets

Let $U = \{ a_{1}, a_{2}, \dots, a_{n} \}$ be an (ordered) universal set. %%Abuse of language%%

Let $S\subseteq U$. Associate a bit string $B_{S} = b_{1}b_{2}\dots b_{n}$ given by:
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
S_{4} = \{ 3,4,5 \},\ B_{S_{4}} = 001110
$$

The nice part is that set operations become :explain[bitwise operations]{#bitwise}.

::::explain{#bitwise title="Set operations are bitwise operations"}
Once sets are bit strings, a computer can do set operations really fast, one bit at a time:

- **Union** is bitwise OR: $S_1 \cup S_3 = 010101 \lor 111000 = 111101 = \{1, 2, 3, 4, 6\}$.
- **Intersection** is bitwise AND: $S_1 \cap S_3 = 010101 \land 111000 = 010000 = \{2\}$.
- **Complement** flips every bit: $\overline{S_1} = 101010 = S_2$. The evens and odds are complements of each other!

This is how bitmask flags in programs work (like file permissions), and it's why the order of the universal set matters: bit $i$ always has to mean the same element.
::::

## Functions %%2.3%%

Definition: Let $A,B$ be sets. A function $f$ from A to B (written $f: A\to B$) is an assignment of exactly one $b\in B$ to each $a\in A$
- A is set of inputs (domain of $f$)
- B is the codomain (outputs land in B)
$f(a) = b$ equiv: $a \mapsto b$. $b$ is the image of $a$ under $f$.

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

:::::quiz
Let $f: \{1, 2, 3\} \to \{x, y\}$ with $f(1) = x$, $f(2) = x$, $f(3) = y$. Is $f$ a function?

::::choice{correct}
Yes. Every input has exactly one output.
::::

::::choice
No, because $1$ and $2$ both go to $x$.

---
Two inputs sharing an output is fine. The rule is that each *input* gets exactly one output, not the other way around. (It does mean $f$ isn't one-to-one, which we'll see below.)
::::

::::choice
No, because the codomain is smaller than the domain.

---
The sizes don't matter for being a function. Lots of inputs can land on the same few outputs.
::::

::::choice
No, because nothing maps to some element of $\{x, y\}$.

---
Both $x$ and $y$ get hit here. And even if one didn't, that would only stop $f$ from being *onto*, it would still be a function.
::::

::::solution
Check the definition: each element of the domain $\{1, 2, 3\}$ needs exactly one output in the codomain $\{x, y\}$.

- $1 \mapsto x$ ✓
- $2 \mapsto x$ ✓
- $3 \mapsto y$ ✓

Nothing is missing, nothing has two outputs, and all outputs are in the codomain. So $f$ is a function. Repeated outputs are allowed.
::::
:::::

---
Let $f: A\to B$ be a function.
Let $A' \subseteq A$ and $B' \subseteq B$
$$
f(A') = \{ f(a) \mid a\in A' \} = \text{image of } A' \text{ under } f
$$
$$
f^{-1}(B') = \{ a\in A \mid f(a) \in B' \} = \text{preimage of } B' \text{ under the function } f
$$
$$
f(A) = \text{range of f} = \text{set of all outputs of f}
$$
$$
\text{range(f)} \subseteq \text{codomain(f)}
$$

The preimage $f^{-1}(B')$ :explain[always makes sense]{#preimage-vs-inverse}, even when $f$ has no inverse function.

::::explain{#preimage-vs-inverse title="Preimage vs inverse function"}
The notation $f^{-1}$ means two different things, which is confusing:

- $f^{-1}(B')$ applied to a **set** is the preimage: "all the inputs that land in $B'$". This always exists, for any function. It might contain several elements, or none.
- $f^{-1}(b)$ applied to a single **element**, as a function, only makes sense if $f$ is a bijection (see below). Otherwise one output could come from two inputs, or from none, and the "inverse" wouldn't be a function.

Example: $f(x) = x^2$ on the real numbers. The preimage $f^{-1}(\{4\}) = \{-2, 2\}$ is a perfectly good set. But there's no inverse *function*, because $4$ comes from two inputs.
::::

---
Function $f:A\to B$
The function $f$ of $a$ outputs $b$ so $f^{-1}$ of $b$ outputs $a$. When $f$ has an inverse:
$$
f(a) = b \text{ iff } f^{-1}(b)=a
$$

---
Definition: A function $f$ is **one-to-one** (injective) (an injection) iff:
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
Fact: $f$ is invertible (i.e. $f^{-1}$ is a well-defined function) iff $f$ is a :explain[bijection]{#why-bijection}.

::::explain{#why-bijection title="Why invertible means bijection"}
An inverse function $f^{-1}: B \to A$ has to send every $b$ back to exactly one $a$. Two things can go wrong:

- **If $f$ isn't one-to-one**, some $b$ came from two different inputs. The inverse wouldn't know which one to send it back to, so it'd have two outputs. Not a function.
- **If $f$ isn't onto**, some $b$ in the codomain never got hit. The inverse would have nothing to send it to, so it'd have no output. Not a function either.

A bijection avoids both problems: every $b$ comes from exactly one $a$. That's exactly what it takes for $f^{-1}$ to be a function.
::::

---
Ex:
Define $f(x) = \sin x,\ f: \mathbb{R}\to \mathbb{R}$
Is $f$ 1-to-1, onto?
No. $f$ isn't one-to-one, since $f(0) = f(2\pi)= 0$
$$
\text{range}(f) = [-1,1] \subsetneq \mathbb{R}, \text{so } f \text{ is not onto}
$$
The range is a proper subset of the codomain. For example, nothing maps to $2$.

---
Ex:
Define $g(x) = \sin x,\ g: \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \to [-1,1]$
$g$ is one-to-one (passes horizontal line test)
$g$ is onto as $\text{range}(g) = [-1,1]$
$g$ is a bijection, so it is invertible. Its inverse is $\arcsin$.

```graph
title: Restricting sin x to make it a bijection
fns:
  - fn: sin(x)
    label: sin x
x: [-6.3, 6.3]
area: [-1.5708, 1.5708]
y: [-1.6, 1.6]
caption: On all of ℝ, sin x repeats, so it fails the horizontal line test. The shaded strip from −π/2 to π/2 is the piece g keeps, where every value from −1 to 1 is hit exactly once.
```

:::::quiz
Let $f: \mathbb{Z} \to \mathbb{Z}$ be $f(n) = 2n$. Which is true?

::::choice
$f$ is a bijection.

---
It's one-to-one, but it misses every odd number. Not onto, so not a bijection.
::::

::::choice{correct}
$f$ is one-to-one but not onto.
::::

::::choice
$f$ is onto but not one-to-one.

---
Different inputs give different outputs ($2n = 2m$ means $n = m$), so it *is* one-to-one. It's onto that fails.
::::

::::choice
$f$ is neither one-to-one nor onto.

---
Check one-to-one again: if $2n = 2m$, divide by $2$ to get $n = m$. So it is one-to-one.
::::

::::solution
**One-to-one?** Suppose $f(n) = f(m)$. Then $2n = 2m$, so $n = m$. Yes.

**Onto?** For $f$ to be onto, every integer would need to be $2n$ for some integer $n$. But $3 = 2n$ means $n = 1.5$, which isn't an integer. Nothing maps to $3$ (or any odd number), so no.

So $f$ is one-to-one but not onto. If the codomain were the even integers instead, it would be a bijection!
::::
:::::

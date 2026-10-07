---
created: 2026-09-01T14:00:00
modified: 2026-09-03T12:05:00
title: "Introduction to Predicates and Quantifiers (original)"
unlisted: true
original: true
course: "[[Discrete Math for Computing]]"
date created: 2026-09-01T14:00:00
date modified: 2026-09-03T12:05:00
---
# Introduction to Predicates and Quantifiers

Let $P(x)$ denote "$x$ is greater than 4"
"$x$" is the subject of the statement. "Is greater than 4" is the predicate.
$P(x)$ is a propositional function, but not a proposition because it varies depending on $x$.
$P(5)$: "5 is greater than 4". True
$P(1)$: "1 is greater than 4". False

---

Ex:
Let $Q(x, y)$ denote "$x = y + 3$"
$Q(1, y)$ says $1 = y + 3$.
$Q(1, 11)$ says $1 = 11 + 3$. False
$Q(4, 1)$ says $4 = 1 + 3$. True

---

Ex:
Let $R(a,b,c)$ denote "$a + b = c$"
$R(1,2,3)$ says $1 + 2 = 3$. True
$R(0,0,1)$ says $0 + 0 = 1$. False

## The Universal Quantifier

This quantifier generalizes AND. There is another quantifier, the existential quantifier that generalizes OR.

Let $D$ be the set of all possible values that $x$ can take on.
$D$ is the domain (of discourse) which contains a set of values that we are allowed to consider.

"For all $x\ P(x)$" or "For every $x\ P(x)$"
Notation: $\forall x P(x)$ = "For all $x\ P(x)$"

$\forall x P(x)$ is false if there's an $x_{0}$ in $D$ such that $P(x_{0})$ is false. (such an $x_{0}$ is a counterexample to $\forall x\ P(x)$). Else $\forall x P(x)$ is true.

---

Ex:
Let $D = \mathbb{R}$, the set of all real numbers.
Let $P(x)$ denote $x+2 > x$
$\forall x P(x)$ is true.

---

Ex:
$D=\mathbb{R}$. Let $Q(x)$ denote $x<4$
$\forall x Q(x)$ is false, since $x=5$ is a counterexample (this counterexample was not hard to find, some may be extremely difficult to find).

---

Ex:
$D=\mathbb{R}$. Consider $\forall x(x^{2} \geq x)$
False, take $x=\frac{1}{2}$ as a counterexample.
$$
\left( \frac{1}{2} \right)^{2} = \frac{1}{4} \ngeq \frac{1}{2}
$$

---

Ex:
$D = \mathbb{Z} = \{\dots,-3,-2,-1,0,1,2,3,\dots\}$.
$\forall x(x^{2}\geq x)$ True. The domain eliminated the counterexamples.

## The Existential Quantifier

Generalized OR.

$\exists x P(x)$ = "There is an $x$ such that $P(x)$" or "There's at least one $x$ such that $P(x)$" or "For some $x$"

$\exists x P(x)$ is true if we can find $x_{1}$ in $D$ such that $P(x_{1})$ is true. Else $\exists x P(x)$ is false.

---

Ex:
$\exists x(x^{2}=-1)$. It depends on the domain.
If $D = \mathbb{R}$, False.
If $D = \mathbb{C} = \{a+bi \mid a,b \in \mathbb{R}\}$ (set of all complex numbers)
$\exists x(x^{2}=-1)$. True, let $x=i$

---

$D = \mathbb{R}$
$\exists x(x>6)$. True, let $x=7$

---

Let $D = \varnothing = \{\}$ (empty set)
$\forall x P(x)$. True.
$\exists x P(x)$. False.

---

Set $D = \{1,2,3,\dots,n\}$
$\forall x P(x) \equiv P(1) \land P(2) \land \dots \land P(n) \equiv \bigwedge_{i=1}^{n} P(i)$
$\exists x P(x) \equiv P(1) \lor P(2) \lor \dots \lor P(n) \equiv \bigvee_{i=1}^{n} P(i)$

## The Uniqueness Quantifier

$\exists!x P(x) =$ "There's a unique $x$ such that $P(x)$" or "There is one and only one $x$ such that $P(x)$"

Ex:
$D = \mathbb{R}$
$\exists!x(x-2=0)$. True, $x=2$ is a unique solution

Ex:
$D=\mathbb{R}$
$\exists!x(x^{2}=9)$. False, since $x = \pm 3$ are both solutions.

## Negating Quantified Statements

$$
\neg(\forall x P(x)) \equiv \neg\left(\bigwedge_{i=1}^{n} P(i)\right) \equiv \bigvee_{i=1}^{n} \neg P(i) \equiv \exists x \neg P(x)
$$
$$
\neg(\exists x P(x)) \equiv \neg\left(\bigvee_{i=1}^{n} P(i)\right) \equiv \bigwedge_{i=1}^{n} \neg P(i) \equiv \forall x \neg P(x)
$$
$$
\neg(\forall x P(x)) \equiv \exists x\neg P(x)
$$
$$
\neg(\exists x P(x)) \equiv \forall x\neg P(x)
$$

Ex:
$$
\neg(\forall x(x^{2}>x)) \equiv \exists x\neg (x^{2}>x) \equiv \exists x(x^{2}\leq x)
$$

Ex:
$$
\neg(\exists x(x^{2}=5)) \equiv \forall x\neg(x^{2}=5) \equiv \forall x(x^{2}\neq 5)
$$

## Restriction of $D$

Restriction of $D$ with universal quantification:
$\forall x \text{ (subject to restriction) } P(x) \equiv \forall x (\text{restriction} \to P(x))$
$\exists x \text{ (subject to restriction) } P(x) \equiv \exists x (\text{restriction} \land P(x))$

Ex:
$D = \mathbb{R}$
i.
$$
\forall x < 0(x^{4}>0) \equiv \forall x(x<0 \to x^{4}>0)
$$
ii.
$$
\forall y\neq 0(y^{5}\neq0) \equiv \forall y(y\neq 0\to y^{5}\neq 0)
$$

Ex:
$$
D = \mathbb{R}
$$
$$
\exists z > 0(z^{2}=5) \equiv \exists z(z>0\land z^{2}=5)
$$

Rule: Our quantifiers all have higher precedence than the basic logical connectives ($\neg,\ \land,\ \lor,\ \to,\ \leftrightarrow,\ \text{XOR}$)

## Nested Quantifiers

$D = \mathbb{R}$ for $x$ and $y$

$$
\forall x\ \exists y\ (x+y = 0)
$$
"If I give you an $x$ can you give me a $y$ such that $x+y=0$ is true"
Yes. Let $y=-x$. True.

$$
\exists y\ \forall x\ (x+y=0)
$$
"Give me a $y$ that works for every $x$ so $x+y=0$"
False.

You can negate nested quantifiers. Flip the quantifiers and then negate the statement inside.
$$
\neg[\forall x\ \exists y\ (x+y = 0)] \equiv \exists x\ \forall y\ (x+y \neq 0)
$$

> [!question] "Every non-zero number has a square greater than 0" using quantifiers and domain restriction notation? Is that statement True or False?
> $$
> \forall x(x>0\to x^{2}>0)
> $$
> The statement is true, but I am not sure how to prove it

$$
\exists x\forall y(x>y)
$$
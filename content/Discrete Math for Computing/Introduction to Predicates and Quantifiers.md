---
course: "[[Discrete Math for Computing]]"
created: 2026-09-01T14:00:00
modified: 2026-09-03T12:05:00
---
# Introduction to Predicates and Quantifiers

Let $P(x)$ denote "$x$ is greater than 4"
"$x$" is the subject of the statement. "Is greater than 4" is the predicate.
$P(x)$ is a :explain[propositional function]{#propositional-function}, but not a proposition because its truth value depends on $x$.
$P(5)$: "5 is greater than 4". True
$P(1)$: "1 is greater than 4". False

::::explain{#propositional-function title="Proposition vs propositional function"}
A **proposition** is a statement that is definitely true or definitely false. "$5 > 4$" is a proposition (it's true). "$1 > 4$" is a proposition (it's false).

"$x > 4$" isn't, because we can't say whether it's true until we know what $x$ is. It's more like a function in programming: you give it an input and it gives back `true` or `false`.

```
def P(x):
    return x > 4
```

There are two ways to turn a propositional function into an actual proposition:

1. **Plug in a value**, like $P(5)$.
2. **Quantify it**, like "for every $x$, $P(x)$" or "there is some $x$ with $P(x)$". That's what the rest of these notes are about.
::::

---

Ex:
Let $Q(x, y)$ denote "$x = y + 3$"
$Q(1, y)$ says $1 = y + 3$. (Still not a proposition, since $y$ isn't known.)
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

$\forall x P(x)$ is false if there's an $x_{0}$ in $D$ such that $P(x_{0})$ is false. (such an $x_{0}$ is a :explain[counterexample]{#counterexample} to $\forall x\ P(x)$). Else $\forall x P(x)$ is true.

::::explain{#counterexample title="One counterexample is enough"}
"For all $x$" is a really strong claim. It says $P(x)$ works for *every single* value in the domain, with no exceptions. So to show it's false, you only need **one** value where it fails. That one value is a counterexample.

Showing it's *true* is a different story. Checking a hundred examples, or a million, doesn't prove it, because the next one could be the one that breaks it. To prove a "for all" statement you need an argument that works for any $x$ at once (like the algebra in the $x + 2 > x$ example below).

So: **false** needs one counterexample, **true** needs a proof.
::::

---

Ex:
Let $D = \mathbb{R}$, the set of all real numbers.
Let $P(x)$ denote $x+2 > x$
$\forall x P(x)$ is true. (Subtracting $x$ from both sides gives $2 > 0$, which is always true.)

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
$\forall x(x^{2}\geq x)$ True. The :explain[domain eliminated the counterexamples]{#domain-matters}.

::::explain{#domain-matters title="Why the same statement changes truth value"}
The counterexamples to $x^2 \geq x$ are exactly the numbers strictly between $0$ and $1$. For those, squaring makes the number *smaller* (like $\frac{1}{2} \to \frac{1}{4}$).

There are no integers strictly between $0$ and $1$, so once the domain is $\mathbb{Z}$, there's nothing left to break the statement. Checking the integers:

- **Negative integers:** $x^2$ is positive and $x$ is negative, so $x^2 > x$.
- **$0$ and $1$:** $0^2 = 0$ and $1^2 = 1$, so they're equal, and $\geq$ still holds.
- **$2$ and up:** $x^2 = x \cdot x \geq 2x > x$.

That's why you always have to know the domain before you can say whether a quantified statement is true.
::::

:::::quiz
Let the domain be all real numbers. Is $\forall x\,(x^2 > 0)$ true or false?

::::choice
True, because squaring a number always makes it positive.

---
Almost! Squaring makes nonzero numbers positive, but there's one real number that doesn't work.
::::

::::choice{correct}
False, because $x = 0$ is a counterexample.
::::

::::choice
False, because $x = -2$ is a counterexample.

---
$(-2)^2 = 4$, which is greater than $0$. Negative numbers become positive when you square them.
::::

::::choice
We can't tell without checking every real number.

---
We don't need to check every number to show a "for all" statement is false. One counterexample is enough.
::::

::::solution
A "for all" statement is false as soon as we find one counterexample. Try $x = 0$:

$$
0^2 = 0, \text{ and } 0 > 0 \text{ is false}
$$

So $\forall x\,(x^2 > 0)$ is false over the real numbers. (If the statement were $x^2 \geq 0$ instead, it would be true.)
::::
:::::

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
These might feel backwards, but they come straight from the :explain[definitions]{#empty-domain}.

::::explain{#empty-domain title="Quantifiers over an empty domain"}
Go back to how each one is defined:

- $\forall x P(x)$ is **false** only if there's a counterexample in $D$. The empty set has no elements at all, so there can't be a counterexample. That makes it true. This is called being *vacuously* true.
- $\exists x P(x)$ is **true** only if we can find an element of $D$ that works. There are no elements to find, so it's false.

An everyday version: "every unicorn in this room is purple" is true, because there are no unicorns in the room to prove it wrong. But "there is a purple unicorn in this room" is false.

It also matches the AND/OR idea. An empty AND is true (there's nothing to fail), and an empty OR is false (there's nothing to succeed).
::::

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

:::::quiz
Let the domain be the integers. Which statement is true?

::::choice
$\exists!x\,(x^2 = 4)$

---
Both $x = 2$ and $x = -2$ work, so there isn't exactly one.
::::

::::choice
$\exists x\,(2x = 5)$

---
The only solution is $x = 2.5$, which isn't an integer. Remember the domain!
::::

::::choice{correct}
$\exists!x\,(x + 3 = 0)$
::::

::::choice
$\forall x\,(x + 1 > x + 2)$

---
Subtracting $x$ from both sides gives $1 > 2$, which is never true. This fails for every integer.
::::

::::solution
Go through each one with the domain $\mathbb{Z}$ in mind:

- $x^2 = 4$ has two integer solutions ($2$ and $-2$), so "exactly one" is false.
- $2x = 5$ has no integer solution, so "there exists" is false.
- $x + 3 = 0$ has exactly one solution, $x = -3$, and it's an integer. **True.**
- $x + 1 > x + 2$ simplifies to $1 > 2$, false for every $x$.
::::
:::::

## Negating Quantified Statements

This is De Morgan's law, :explain[stretched out over the whole domain]{#quantifier-de-morgan}.

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

::::explain{#quantifier-de-morgan title="Flipping the quantifier"}
Regular De Morgan's law says:

$$
\neg(A \land B) \equiv \neg A \lor \neg B \qquad \neg(A \lor B) \equiv \neg A \land \neg B
$$

"For all" is a giant AND, and "there exists" is a giant OR. So when you push the $\neg$ inside, the AND turns into an OR (the $\forall$ becomes $\exists$) and the OR turns into an AND (the $\exists$ becomes $\forall$).

In plain English:

- "Not everyone passed" means "someone didn't pass".
- "Nobody passed" (it's not true that someone passed) means "everyone didn't pass".

The recipe: **flip the quantifier, then negate what's inside.**
::::

Ex:
$$
\neg(\forall x(x^{2}>x)) \equiv \exists x\neg (x^{2}>x) \equiv \exists x(x^{2}\leq x)
$$

Ex:
$$
\neg(\exists x(x^{2}=5)) \equiv \forall x\neg(x^{2}=5) \equiv \forall x(x^{2}\neq 5)
$$

:::::quiz
What is the negation of "Every student in the class has a laptop"?

::::choice
At least one student in the class has a laptop.

---
This doesn't contradict the original at all. If every student has a laptop, then at least one does, so both can be true at the same time. A negation has to be true exactly when the original is false.
::::

::::choice{correct}
There is a student in the class who doesn't have a laptop.
::::

::::choice
There is a student in the class who has a laptop.

---
This forgot to negate the inside. When you flip $\forall$ to $\exists$, you also have to negate the statement.
::::

::::choice
No student in the class has a laptop.

---
"No student has a laptop" means *everyone* is missing one, which is stronger than just "not everyone has one".
::::

::::solution
Write it with quantifiers: $\forall x\, L(x)$, where $L(x)$ means "$x$ has a laptop" and the domain is the students in the class.

Negate it by flipping the quantifier and negating the inside:

$$
\neg\forall x\, L(x) \equiv \exists x\, \neg L(x)
$$

"There exists a student who doesn't have a laptop." One student without a laptop is all it takes to make the original claim false.
::::
:::::

## Restriction of $D$

Restriction of $D$ with universal quantification:
$\forall x \text{ (subject to restriction) } P(x) \equiv \forall x (\text{restriction} \to P(x))$
$\exists x \text{ (subject to restriction) } P(x) \equiv \exists x (\text{restriction} \land P(x))$

Notice that $\forall$ uses :explain[$\to$ but $\exists$ uses $\land$]{#restriction-connective}.

::::explain{#restriction-connective title="Why → for ∀ but ∧ for ∃"}
Take "every negative number has a positive fourth power", $\forall x < 0\,(x^4 > 0)$.

**With $\to$:** $\forall x\,(x < 0 \to x^4 > 0)$. For a negative $x$, the implication checks $x^4 > 0$. For a non-negative $x$, the "if" part is false, so the implication is automatically true and that $x$ is ignored. That's exactly the restriction we want.

**If we used $\land$ instead:** $\forall x\,(x < 0 \land x^4 > 0)$ would claim *every* real number is negative, which is false. Wrong meaning.

Now "there's a positive number whose square is $5$", $\exists z > 0\,(z^2 = 5)$.

**With $\land$:** $\exists z\,(z > 0 \land z^2 = 5)$ asks for one $z$ that is positive *and* squares to $5$. That's $\sqrt{5}$, so it's true. Exactly right.

**If we used $\to$ instead:** $\exists z\,(z > 0 \to z^2 = 5)$ would be true just by picking $z = -1$, since a false "if" part makes the implication true. That's way too easy, and it says nothing about positive numbers.
::::

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

Rule: Our quantifiers all have higher precedence than the basic logical connectives ($\neg,\ \land,\ \lor,\ \to,\ \leftrightarrow,\ \text{XOR}$). For example, $\forall x P(x) \lor Q(x)$ means $(\forall x P(x)) \lor Q(x)$, not $\forall x (P(x) \lor Q(x))$.

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

The only difference between those two is the :explain[order of the quantifiers]{#quantifier-order}.

::::explain{#quantifier-order title="Why the order of quantifiers matters"}
Read nested quantifiers left to right, like a game between two players.

**$\forall x\ \exists y$:** your opponent picks any $x$ first, *then* you get to pick $y$ knowing what $x$ is. You can tailor your answer: whatever $x$ they pick, you answer $y = -x$. You always win, so it's true.

**$\exists y\ \forall x$:** now *you* have to commit to one $y$ first, and then your opponent tries every $x$ against it. Whatever $y$ you pick, they can choose $x = 1 - y$, and then $x + y = 1 \neq 0$. No single $y$ works for everybody, so it's false.

In general, $\exists y\,\forall x$ is the stronger statement. If it's true, then $\forall x\,\exists y$ is true too, but not the other way around.
::::

You can negate nested quantifiers. Flip the quantifiers and then negate the statement inside.
$$
\neg[\forall x\ \exists y\ (x+y = 0)] \equiv \exists x\ \forall y\ (x+y \neq 0)
$$

> [!question] "Every non-zero number has a square greater than 0" using quantifiers and domain restriction notation? Is that statement True or False?
> $$
> \forall x \neq 0\,(x^{2}>0) \equiv \forall x(x\neq 0\to x^{2}>0)
> $$
> The statement is true. I wasn't sure how to prove it, but it comes down to :explain[two cases]{#nonzero-square-proof}.

::::explain{#nonzero-square-proof title="Proving every non-zero number has a positive square"}
We need an argument that works for any $x \neq 0$, not just a few examples. A non-zero real number is either positive or negative, so we split into two cases.

**Case 1: $x > 0$.** Then $x^2 = x \cdot x$ is a positive number times a positive number, which is positive. So $x^2 > 0$.

**Case 2: $x < 0$.** Then $-x > 0$, and

$$
x^2 = (-x)(-x)
$$

is a positive number times a positive number, which is positive. So $x^2 > 0$.

Every non-zero $x$ falls into one of the two cases, and both end with $x^2 > 0$. That proves $\forall x\,(x \neq 0 \to x^2 > 0)$. This kind of argument is called a **proof by cases**.

Note the restriction matters: without it, $x = 0$ would be a counterexample, just like in the quiz in the Universal Quantifier section.
::::

$$
\exists x\forall y(x>y)
$$
This one says "there is a number bigger than every number", in other words a largest real number. It's :explain[false]{#no-largest}.

::::explain{#no-largest title="There is no largest real number"}
To show $\exists x\,\forall y\,(x > y)$ is false, show its negation is true:

$$
\neg\exists x\,\forall y\,(x > y) \equiv \forall x\,\exists y\,(x \leq y)
$$

"For every $x$, there's a $y$ at least as big." That's easy: whatever $x$ someone picks, choose $y = x$ (or $y = x + 1$). So the negation is true and the original statement is false.

Notice that it fails even with $y = x$, because $x > x$ is never true. No number is bigger than itself, so no number can be bigger than *every* number.
::::

:::::quiz
Let the domain be all real numbers. Which statement is true?

::::choice{correct}
$\forall x\ \exists y\ (y > x)$
::::

::::choice
$\exists y\ \forall x\ (y > x)$

---
This says one single $y$ is bigger than every $x$, including $x = y$ itself. No such number exists.
::::

::::choice
$\exists x\ \forall y\ (x \cdot y = 1)$

---
Whatever $x$ you pick, the opponent can choose $y = 0$, and $x \cdot 0 = 0 \neq 1$.
::::

::::choice
$\forall x\ \forall y\ (x > y)$

---
This says every number is bigger than every number. Take $x = y = 0$: $0 > 0$ is false.
::::

::::solution
**$\forall x\ \exists y\ (y > x)$:** for any $x$, pick $y = x + 1$. True.

**$\exists y\ \forall x\ (y > x)$:** that would be a largest real number. False.

**$\exists x\ \forall y\ (x \cdot y = 1)$:** $y = 0$ breaks any choice of $x$. False.

**$\forall x\ \forall y\ (x > y)$:** fails at $x = y = 0$. False.

The order of the quantifiers is the whole difference between the first two!
::::
:::::

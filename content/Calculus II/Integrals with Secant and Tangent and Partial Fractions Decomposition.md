---
course: "[[Calculus II]]"
created: 2026-09-02T13:00:00
modified: 2026-09-03T11:48:00
---
# Integrals with Secant and Tangent and Partial Fractions Decomposition

- MATH 182 Calculus II
- 9/2/26
- Today we will be completing Quiz 1 based on Webassign 1 during the first 15 minutes of class.
- Reminder to continue doing the topic quizzes. You should be able to complete topic quizzes 0, 1, and 4.

## Integrals of Powers of Secant and Tangent

After all students turned in their quiz, Dr. Towsley recapped how in the past few classes we covered the different methods to solving integrals. Today we are looking at the next step as to what to do when we have $\sec$ and $\tan$ situations.

Recall,
$$
\frac{d}{dx} \sec x = \sec x\cdot \tan x
$$
$$
\frac{d}{dx} \tan x = \sec^{2}x
$$
We can also transform the Pythagorean identity $\sin^{2}x +\cos^{2}x = 1$ by :explain[dividing by]{#divide-identity} $\cos^{2}x$ to get
$$
\tan^{2}x+1 = \sec^{2}x
$$
All the formulas above will be on the formula sheets for exams.

::::explain{#divide-identity title="Getting tan² + 1 = sec²"}
Start with the identity everyone knows from the unit circle:

$$
\sin^2 x + \cos^2 x = 1
$$

Divide **every** term by $\cos^2 x$:

$$
\frac{\sin^2 x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x} = \frac{1}{\cos^2 x}
$$

Now simplify each piece. $\frac{\sin x}{\cos x} = \tan x$, so the first term is $\tan^2 x$. The middle term is just $1$. And $\frac{1}{\cos x} = \sec x$, so the right side is $\sec^2 x$:

$$
\tan^2 x + 1 = \sec^2 x
$$

This is the identity that lets us trade $\sec^2 x$ for $\tan^2 x + 1$ (or $\tan^2 x$ for $\sec^2 x - 1$) in the examples below.
::::

We are looking for specific items in a question to know when to use these. The whole trick is to :explain[save one derivative]{#save-du} for $du$.

::::explain{#save-du title="The plan for every sec/tan integral"}
Each derivative above gives us a possible $u$-substitution:

- If $u = \tan x$, then $du = \sec^2 x\,dx$. So we need to **set aside a $\sec^2 x$** and turn everything else into $\tan x$.
- If $u = \sec x$, then $du = \sec x \tan x\,dx$. So we need to **set aside a $\sec x \tan x$** and turn everything else into $\sec x$.

The identity $\tan^2 x + 1 = \sec^2 x$ is how we convert the leftovers. But it only converts *squares*, so:

- After setting aside $\sec^2 x$, the leftover power of $\sec$ has to be even. That's why we need an **even power of $\sec$** for the first option.
- After setting aside $\sec x\tan x$, the leftover power of $\tan$ has to be even. That's why we need an **odd power of $\tan$** for the second option.
::::

---
Ex:
$$
\int \tan^{8} x\sec^{6}x \, dx
$$
We have two options, $\sec \cdot \tan$ or $\sec^{2}x$. The power of $\sec$ is even, so we save a $\sec^2 x$.

:::steps{title="Even power of secant"}
$$
\int \tan^{8} x\sec^{6}x \, dx = \int \tan^{8}x \sec^{4}x \cdot \underbrace{ \sec^{2}x\, dx  }_{ \text{will be du} }
$$
Split $\sec^6 x$ into $\sec^4 x \cdot \sec^2 x$ and set the $\sec^2 x$ aside for $du$.

---

$$
= \int \tan^{8}x(\sec^{2}x)^{2}\sec^{2}x \, dx
$$
Write $\sec^4 x$ as $(\sec^2 x)^2$ so we can use the identity.

---

$$
= \int \tan^{8}x(\tan^{2}x+1)^{2}\sec^{2}x \, dx
$$
Replace $\sec^2 x$ with $\tan^2 x + 1$. Now everything except $du$ is in terms of $\tan x$.

---

$$
u = \tan x,\ du = \sec^{2}x\,dx
$$
Now this is more familiar, we can do u-sub to solve.

---

$$
=\int u^{8}(u^{2}+1)^{2} \, du
$$
Swap every $\tan x$ for $u$ and $\sec^2 x\,dx$ for $du$.

---

$$
=\int u^{8}(u^{4}+2u^{2}+1) \, du
$$
Expand $(u^2 + 1)^2 = u^4 + 2u^2 + 1$.

---

$$
=\int u^{12}+2u^{10}+u^{8} \, du
$$
Distribute the $u^8$: add the exponents.

---

$$
=\frac{1}{13}u^{13}+\frac{2}{11}u^{11}+\frac{1}{9}u^{9}+C
$$
Power rule on each term: add one to the exponent and divide by the new exponent.

---

$$
= \frac{1}{13}\tan^{13}x+\frac{2}{11}\tan^{11}x+\frac{1}{9}\tan^{9}x+C
$$
Substitute $u = \tan x$ back in.
:::

---
The important thing in the last one is that we had an even number of $\sec$ that we could turn into $\tan$. You could do the same in this one, it would work the same way. If it had an odd power it wouldn't work. There is a different way since we have an odd power of $\tan$

:::steps{title="Odd power of tangent"}
$$
\int \tan^{3}x\sec^{6}x \, dx  = \int \tan^{2}x\sec^{5}x\cdot \underbrace{ \sec x\tan x \, dx  }_{ \text{will be du} }
$$
Take one $\tan x$ and one $\sec x$ and set them aside together for $du$.

---

$$
= \int (\sec^{2}x-1)\sec^{5}x\sec x\tan x \, dx
$$
The leftover $\tan^2 x$ becomes $\sec^2 x - 1$, so everything is in terms of $\sec x$.

---

$$
u = \sec x,\ du = \sec x\tan x\, dx
$$

---

$$
= \int (u^{2}-1)u^{5} \, du  = \int u^{7}-u^{5} \, du
$$
Substitute, then distribute the $u^5$.

---

$$
= \frac{1}{8}u^{8}-\frac{1}{6}u^{6}+C
$$
Power rule.

---

$$
= \frac{1}{8}\sec^{8} x-\frac{1}{6}\sec^{6}x+C
$$
Back to $x$.
:::

It just so happens that this method was probably easier, usually you want to work with the one with the smaller exponent. But these are the two options: even power $\sec$ or odd power $\tan$.

When neither option fits, like $\int\sec x\,dx$ (odd power of $\sec$, no $\tan$ at all), there is no simple pattern, so we are left with some ad hoc methods.

---
Ex:
$$
\int \sec x \, dx
$$
What we are going to do is multiply by one (but a :explain[fancy one]{#fancy-one})

::::explain{#fancy-one title="Where does the fancy one come from?"}
Honestly, nobody would come up with this on the spot, and that's okay. The trick is just to remember it.

The reason it works: look at the derivatives of $\sec x$ and $\tan x$.

$$
\frac{d}{dx}\sec x = \sec x\tan x \qquad \frac{d}{dx}\tan x = \sec^2 x
$$

If we multiply $\sec x$ by $(\sec x + \tan x)$ we get $\sec^2 x + \sec x\tan x$, which is *exactly* the derivative of $\sec x + \tan x$. So when we let $u = \sec x + \tan x$, the whole top of the fraction becomes $du$ and we're left with $\int\frac{du}{u}$, which is just a natural log.

Since $\frac{\sec x + \tan x}{\sec x + \tan x} = 1$, multiplying by it doesn't change the integral at all.
::::

:::steps{title="The integral of secant"}
$$
\int \sec x \, dx  = \int \sec x\cdot \frac{\sec x+\tan x}{\sec x+\tan x} \, dx
$$
Multiply by a fancy version of $1$.

---

$$
= \int \frac{\sec^{2}x+\sec x\tan x}{\sec x+\tan x} \, dx
$$
Distribute the $\sec x$ on top.

---

$$
u = \sec x+\tan x,\ du = (\sec x\tan x+\sec^{2}x)\,dx
$$
The top is exactly $du$!

---

$$
=\int \frac{1}{u} \, du = \ln|u| + C
$$
The whole fraction becomes $\frac{du}{u}$.

---

$$
= \ln|\sec x+\tan x| + C
$$
Substitute back.
:::
It is important to note this works only for $\sec$ to the first.

:::::quiz
Which substitution should you use for $\displaystyle\int \tan^{5}x\sec^{3}x\,dx$?

::::choice
$u = \tan x$, saving a $\sec^2 x$ for $du$.

---
After saving $\sec^2 x$ you'd have $\sec x$ left over, an odd power, which can't be turned into $\tan x$ with the identity.
::::

::::choice{correct}
$u = \sec x$, saving a $\sec x\tan x$ for $du$.
::::

::::choice
$u = \sec x + \tan x$.

---
That's the special trick for $\int\sec x\,dx$ by itself. Here there's an odd power of $\tan$, so a regular substitution works.
::::

::::choice
Neither, this needs integration by parts.

---
Integration by parts is for things like $\int\sec^3 x\,dx$ that don't fit either pattern. This one has an odd power of $\tan$, which fits the second pattern.
::::

::::solution
Check the two patterns:

- **Even power of $\sec$?** No, it's $\sec^3 x$.
- **Odd power of $\tan$?** Yes, $\tan^5 x$.

So save $\sec x\tan x$ for $du$ with $u = \sec x$. What's left is $\tan^4 x\sec^2 x = (\sec^2 x - 1)^2\sec^2 x$, all in terms of $\sec x$:

$$
\int (u^2 - 1)^2 u^2\,du
$$

which is just a polynomial.
::::
:::::

---

Ex:
$$
\int \tan^{3}x \, dx
$$

> [!example] You *could* do it this way
> $$
> \int \frac{\sin^{3}x}{\cos^{3}x} \, dx
> $$
> $$
> = \int \frac{\sin^{2}x}{\cos^{3}x}\sin x \, dx = \int \frac{1-\cos^{2}x}{\cos^{3}x}\sin x \, dx
> $$
> Then you would do $u = \cos x$ and so on, but Dr. Towsley wants to focus on the other way he is teaching.
>

:::steps{title="Odd power of tangent with no secant"}
$$
\int \tan^{3}x \, dx = \int \tan x\cdot \tan^{2} x \, dx
$$
Pull one $\tan x$ out so we're left with a square.

---

$$
= \int \tan x(\sec^{2}x-1) \, dx
$$
Use the identity on $\tan^2 x$.

---

$$
= \int \tan x\sec^{2}x \, dx - \int \tan x \, dx
$$
Distribute and split into two integrals. We take out the $\int \tan x \, dx$ because we have a formula for that: $\ln|\sec x|$.

---

$$
u = \tan x,\ du = \sec^{2}x\,dx
$$
The first integral is $\int u\,du$.

---

$$
= \frac{1}{2}\tan^{2}x-\ln|\sec x|+C
$$
$\int u\,du = \frac{1}{2}u^2$, then back to $x$.
:::

You could also do $u = \sec x,\ du = \sec x\tan x\,dx$ for the first integral, but you end up with
$$
= \frac{1}{2}\sec^{2}x-\ln|\sec x| + C
$$
They are equivalent because $\frac{1}{2}\sec^2 x$ and $\frac{1}{2}\tan^2 x$ only :explain[differ by a constant]{#differ-by-constant} ($\frac{1}{2}$), and the $+C$ soaks that up.

::::explain{#differ-by-constant title="Two answers that are both right"}
From the identity, $\sec^2 x = \tan^2 x + 1$, so

$$
\frac{1}{2}\sec^2 x = \frac{1}{2}\tan^2 x + \frac{1}{2}
$$

The two answers differ by exactly $\frac{1}{2}$ everywhere. An antiderivative is only ever defined up to a constant (that's what the $+C$ means), so the $\frac{1}{2}$ just gets absorbed into $C$. Both are correct.

The graph below shows it: the two curves are the same shape, one is just shifted up by $\frac{1}{2}$. They have the same slope at every point, so they have the same derivative, $\tan^3 x$.
::::

```graph
title: Two antiderivatives of tan³x
fns:
  - fn: 0.5tan(x)^2 - ln(abs(sec(x)))
    label: ½tan²x − ln|sec x|
  - fn: 0.5sec(x)^2 - ln(abs(sec(x)))
    label: ½sec²x − ln|sec x|
x: [-1.3, 1.3]
y: [-0.2, 2]
caption: The curves are exactly ½ apart everywhere, so they're both valid antiderivatives.
```

---
Ex:
$$
\int \sec^{3}x \, dx
$$
Dr. Towsley remarks that in some institutions this function is extremely important.
$$
\int \sec^{3}x \, dx = \int \sec x\cdot \sec^{2}x \, dx
$$
We could try to manipulate this but here we are going to use Integration by Parts (specifically using the Tabular Method), with :explain[$u = \sec x$ and $dv = \sec^2 x\,dx$]{#parts-choice}.

::::explain{#parts-choice title="Why these choices for u and dv"}
Integration by parts says $\int u\,dv = uv - \int v\,du$. We need a $dv$ we can integrate and a $u$ whose derivative isn't worse.

- $dv = \sec^2 x\,dx$ is easy to integrate: $v = \tan x$.
- $u = \sec x$ has derivative $du = \sec x\tan x\,dx$.

That's the table: the left column is $u$ and its derivative, the right column is $dv$ and its integral.

The new integral, $\int\sec x\tan^2 x\,dx$, doesn't look easier at first. But after using $\tan^2 x = \sec^2 x - 1$, the original integral $\int\sec^3 x\,dx$ shows up again on the right side. That's the trick: instead of integrating it, we *solve* for it like an algebra problem.
::::

| $\sec x$       | $\sec^{2} x$ |
| -------------- | ------------ |
| $\sec x\tan x$ | $\tan x$     |

:::steps{title="Integration by parts that loops back"}
$$
\int \sec^{3}x \, dx = \sec x\tan x-\int \sec x\tan^{2}x \, dx
$$
$uv - \int v\,du$ with $u = \sec x$, $v = \tan x$, $du = \sec x\tan x\,dx$.

---

$$
= \sec x\tan x-\int \sec x(\sec^{2}x-1) \, dx
$$
Use $\tan^2 x = \sec^2 x - 1$.

---

$$
\int \sec^{3}x \, dx = \sec x\tan x-\int \sec^{3}x \, dx + \int \sec x \, dx
$$
Distribute and split the integral. The original integral appeared on the right!

---

$$
2\int \sec^{3}x \, dx  = \sec x\tan x+ \int \sec x \, dx
$$
Add $\int\sec^3 x\,dx$ to both sides.

---

$$
2\int \sec^{3}x \, dx  = \sec x\tan x+ \ln \lvert\sec x+\tan x\rvert + C
$$
We already know the integral of $\sec x$.

---

$$
\int \sec^{3}x \, dx  = \frac{1}{2}[\sec x\tan x+\ln\lvert\sec x+\tan x\rvert] + C
$$
Divide both sides by $2$.
:::

## Partial Fractions Decomposition

- Here we are going to take functions that we normally can't take the integral of and rearrange them using algebra to make them something we can integrate
- This is a very powerful and useful technique that is used in more areas than just calculus.

$$
\begin{aligned}
\int \frac{x}{x^{2}-1} \, dx && \int \frac{x+1}{x^{2}-1} \, dx && \int \frac{x+2}{x^{2}-1} \, dx
\end{aligned}
$$
Even though it looks like all three functions are very similar, they are solved with completely different techniques.

The first one is solved using u-sub with $u = x^2 - 1$, $du = 2x\,dx$.
$$
\int \frac{x}{x^{2}-1} \, dx = \frac{1}{2}\int \frac{1}{u} \, du = \frac{1}{2}\ln|u|+C = \frac{1}{2}\ln\left|x^{2}-1\right|+C
$$
The second is even easier
$$
\int \frac{x+1}{x^{2}-1} \, dx = \int \frac{x+1}{(x-1)(x+1)} \, dx  = \int \frac{1}{x-1} \, dx  = \ln|x-1|+C
$$
The third one however, we don't know how to do. This is the first example of partial fractions.
$$
\frac{x+2}{x^{2}-1} = \frac{x+2}{(x-1)(x+1)}
$$
If we could write it like this then we could do it
$$
\frac{A}{x-1} + \frac{B}{(x+1)}
$$
So we have our function, and we have what we want it to look like. How do we make it look like that? We :explain[match coefficients]{#match-coefficients}.

::::explain{#match-coefficients title="Why we can match coefficients"}
After clearing the denominators we get

$$
x + 2 = (A + B)x + (A - B)
$$

This has to be true for **every** value of $x$, not just one. Two polynomials are only equal for every $x$ if they have exactly the same coefficients. So:

- The $x$ terms must match: $1 = A + B$.
- The constant terms must match: $2 = A - B$.

That's two equations and two unknowns, which we can solve.

There's also a shortcut: since the equation holds for every $x$, plug in values that make terms disappear. $x = 1$ gives $3 = 2A$, so $A = \frac{3}{2}$. $x = -1$ gives $1 = -2B$, so $B = -\frac{1}{2}$. Same answer, less algebra!
::::

:::steps{title="Finding A and B"}
$$
\frac{A}{x-1}\cdot \frac{x+1}{x+1} + \frac{B}{(x+1)}\cdot \frac{x-1}{x-1}
$$
Give both fractions the same denominator, $(x-1)(x+1)$.

---

$$
\frac{x+2}{(x-1)(x+1)} = \frac{Ax+A}{(x+1)(x-1)}+\frac{Bx-B}{(x+1)(x-1)}
$$
Multiply out the tops.

---

$$
x+2 = Ax+A + Bx-B
$$
The denominators are the same on both sides, so the numerators have to be equal.

---

$$
1=A+B \qquad 2 = A-B
$$
So splitting it up so we have two equations and two variables. The $x$ coefficients and the constant terms each have to match.

---

$$
A = 2 + B
$$
Solve the second equation for $A$.

---

$$
1 = 2+B+B
$$
Substitute into the first equation.

---

$$
-1 = 2B
$$
Subtract $2$ from both sides.

---

$$
B = -\frac{1}{2}
$$

---

$$
A = 2+\left( -\frac{1}{2} \right) = \frac{3}{2}
$$
And now doing A.
:::

So plugging it into our original function

$$
\int \frac{\frac{3}{2}}{x-1} + \frac{-\frac{1}{2}}{x+1} \, dx
$$
$$
= \frac{3}{2}\ln|x-1|-\frac{1}{2}\ln|x+1|+C
$$

:::::quiz
Which is the correct partial fractions setup for $\dfrac{5x + 1}{(x-2)(x+3)}$?

::::choice{correct}
$\dfrac{A}{x-2} + \dfrac{B}{x+3}$
::::

::::choice
$\dfrac{A}{x-2} + \dfrac{A}{x+3}$

---
The two fractions need their own unknowns. There's no reason the numerators have to be the same.
::::

::::choice
$\dfrac{Ax + B}{(x-2)(x+3)}$

---
That's just the original fraction with letters in it. The point is to split it into simpler fractions we can integrate.
::::

::::choice
$\dfrac{A}{x-2} \cdot \dfrac{B}{x+3}$

---
Partial fractions splits a fraction into a *sum*. Multiplying them back together wouldn't give the original fraction.
::::

::::solution
The denominator is already factored into two different linear factors, and the top has a smaller degree than the bottom. So each linear factor gets its own fraction with its own constant on top:

$$
\frac{5x + 1}{(x-2)(x+3)} = \frac{A}{x-2} + \frac{B}{x+3}
$$

(Solving gives $A = \frac{11}{5}$ and $B = \frac{14}{5}$. Try plugging in $x = 2$ and $x = -3$!)
::::
:::::

### Case 0: The numerator has degree greater than or equal to the degree of the denominator

The numerator has degree greater than or equal to the degree of the denominator

Ex:
$$
\int \frac{x^{3}-2x+3}{x+2} \, dx
$$
Need to do polynomial long division

### Polynomial long division

Remember there is an invisible $0x^{2}$

$$
\begin{array}{r}
\phantom{x+2{\overline{\smash{\big)}\,}}} x^2 - 2x + 2\phantom{+3)} \\
x+2{\overline{\smash{\big)}\,x^3+0x^2-2x+3\phantom{)}}}\\
\underline{-~\phantom{(}(x^3+2x^2)\phantom{-2x+3b)}}\\
-2x^2-2x+3\phantom{)}\\
\underline{-~\phantom{()}(-2x^2-4x)\phantom{+3b)}}\\
2x+3\phantom{)}\\
\underline{-~\phantom{()}(2x+4)\phantom{b)}}\\
-1\phantom{)}
\end{array}
$$

The quotient is $x^2 - 2x + 2$ and the :explain[remainder]{#remainder} is $-1$. So
$$
= \int x^{2}-2x+2+\frac{-1}{x+2} \, dx = \frac{1}{3}x^{3}-x^{2}+2x-\ln|x+2|+C
$$

::::explain{#remainder title="Writing the answer of long division"}
Just like $\frac{17}{5} = 3 + \frac{2}{5}$ (quotient $3$, remainder $2$), polynomial division gives

$$
\frac{x^3 - 2x + 3}{x + 2} = \underbrace{x^2 - 2x + 2}_{\text{quotient}} + \frac{\overbrace{-1}^{\text{remainder}}}{x + 2}
$$

The quotient is a polynomial, which is easy to integrate term by term: $\frac{1}{3}x^3 - x^2 + 2x$. The leftover fraction has a smaller degree on top than on the bottom, and here it's simple enough to integrate directly: $\int\frac{-1}{x+2}dx = -\ln|x+2|$.

You can check the division by multiplying back: $(x+2)(x^2 - 2x + 2) - 1 = x^3 - 2x + 3$.
::::

Ex:
$$
\int \frac{x^{2}-2x+3}{x^{2}+2x+1} \, dx
$$
After doing long division
$$
= \int 1+\frac{-4x+2}{\underbrace{ x^{2}+2x+1 }_{ \text{ Case 2} }} \, dx
$$
We will go into case two next week. ($x^2 + 2x + 1 = (x+1)^2$ is a repeated linear factor.)

### General Notes

1. If the numerator has degree $\geq$ the denominator, start with long division
2. Any polynomial (with real coefficients) can be factored into linear (degree 1) terms and irreducible quadratic (degree 2) terms
	- Ex: $x^{4}-16 = (x^{2}-4)(x^{2}+4) = (x-2)(x+2)(x^{2}+4)$
	- Dr. Towsley says he will not give very difficult equations to factor because this is not an algebra class, he will tell us the factors for hard equations but still expects us to be able to do simple ones like $x^{3}-9x = x(x^{2}-9)$. He says that degree 4 factoring is extremely difficult (there is a formula, but it's huge) and for degree 5 or higher there is no general formula. Not that we didn't find it, it has been proven that it doesn't exist.

### Case 1: The denominator factors into distinct linear terms

Ex:
$$
\int \frac{x^{2}+3x+4}{x^{3}-3x^{2}-4x} \, dx
$$

:::steps{title="Setting up the decomposition"}
$$
x^{3}-3x^{2}-4x = x(x^{2}-3x-4) = x(x-4)(x+1)
$$
Factor out an $x$, then factor the quadratic: we need two numbers that multiply to $-4$ and add to $-3$, which are $-4$ and $1$.

---

$$
\frac{x^{2}+3x+4}{x(x-4)(x+1)} = \frac{A}{x} + \frac{B}{x-4} + \frac{C}{x+1}
$$
Three distinct linear factors means three fractions.

---

$$
x^{2}+3x+4 = A(x-4)(x+1)+Bx(x+1)+Cx(x-4)
$$
This is now what we did in earlier: multiply both sides by the whole denominator.

---

$$
= Ax^{2}-3Ax-4A+Bx^{2}+Bx+Cx^{2}-4Cx
$$
Expand everything.
:::

- We did not have enough time to :explain[finish this problem]{#finish-case-1}, we will finish it on Wednesday.
- Reminder Monday we do not have class because of Labor Day.
- Reminder there is a homework that is posted and there will be a quiz on Wednesday on the content that is in the homework.

::::explain{#finish-case-1 title="Finishing the Case 1 example"}
We can finish it with the plug-in shortcut. Start from

$$
x^{2}+3x+4 = A(x-4)(x+1)+Bx(x+1)+Cx(x-4)
$$

and pick values of $x$ that make two of the three terms vanish.

**$x = 0$:** $\;4 = A(-4)(1)$, so $A = -1$.

**$x = 4$:** $\;16 + 12 + 4 = B(4)(5)$, so $32 = 20B$ and $B = \frac{8}{5}$.

**$x = -1$:** $\;1 - 3 + 4 = C(-1)(-5)$, so $2 = 5C$ and $C = \frac{2}{5}$.

Quick check: the $x^2$ coefficients should match, and $A + B + C = -1 + \frac{8}{5} + \frac{2}{5} = 1$. ✓

Each piece is a log:

$$
\int \frac{x^{2}+3x+4}{x^{3}-3x^{2}-4x} \, dx = -\ln|x| + \frac{8}{5}\ln|x-4| + \frac{2}{5}\ln|x+1| + C
$$
::::

---
created: 2026-09-02T13:00:00
modified: 2026-09-03T11:48:00
title: "Integrals with Secant and Tangent and Partial Fractions Decomposition (original)"
unlisted: true
original: true
course: "[[Calculus II]]"
date created: 2026-09-02T13:00:00
date modified: 2026-09-03T11:48:00
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
We can also transform the simple pathogen identity $\sin^{2}x +\cos^{2}x = 1$ by dividing by $\cos^{2}x$ to get
$$
\tan^{2}x+1 = \sec^{2}x
$$
All the formulas above will be on the formula sheets for exams.

We are looking for specific items in a question to know when to use these.

---
Ex:
$$
\int \tan^{8} x\sec^{6}x \, dx 
$$
We have two options, $\sec \cdot \tan$ or $\sec^{2}x$.
$$
\int \tan^{8} x\sec^{6}x \, dx = \int \tan^{8}x \sec^{4}x \cdot \underbrace{ \sec^{2}x\, dx  }_{ \text{will be du} }
$$
$$
= \int \tan^{8}x(\sec^{2}x)^{2}\sec^{2}x \, dx
$$
$$
= \int \tan^{8}x(\tan^{2}x+1)^{2}\sec^{2}x \, dx 
$$
Now this is more familiar, we can do u-sub to solve.
$$
u = \tan x,\ du = \sec^{2}x\,dx
$$
$$
=\int u^{8}(u^{2}+1)^{2} \, du =\int u^{8}(u^{4}+2u^{2}+1) \, du
$$
$$
=\int u^{12}+2u^{10}+u^{8} \, du 
$$
$$
=\frac{1}{15}u^{13}+\frac{2}{11}u^{11}+\frac{1}{9}u^{9}+C
$$
$$
= \frac{1}{13}\tan^{13}x+\frac{2}{11}\tan^{11}x+\frac{1}{9}\tan^{9}x+C
$$

---
The important thing in the last one is that we had an even number of $\sec$ that we could turn into $\tan$. You could do the same in this one, it would work the same way. If it had an odd power it wouldn't work. There is a different way since we have an odd power of $\tan$
$$
\int \tan^{3}x\sec^{6}x \, dx  = \int \tan^{2}x\sec^{5}\cdot \underbrace{ \sec x\tan x \, dx  }_{ \text{will be du} }
$$
$$
= \int (\sec^{2}x-1)\sec^{5}x\sec x\tan x \, dx 
$$
$$
u = \sec x,\ du = \sec x\tan x\, dx
$$
$$
= \int (u^{2}-1)u^{5} \, du  = \int u^{7}-u^{5} \, du 
$$
$$
= \frac{1}{8}u^{8}-\frac{1}{6}u^{6}+C
$$
$$
= \frac{1}{8}\sec^{8} x-\frac{1}{6}\sec^{6}x+C
$$

It just so happens that this method was probably easier, usually you want to work with the one with the smaller exponent. But these are the two options: even power $\sec$ or odd power $\tan$.

There is no simple formula for $sec$ or $\tan$ so we are left with some ad hoc methods.

---
Ex:
$$
\int \sec x \, dx 
$$
What we are going to do is multiply by one (but a fancy one)
$$
\int \sec x \, dx  = \int \sec x\cdot \textcolor{blue}{\frac{\sec x+\tan x}{\sec x+\tan x}} \, dx 
$$
$$
= \int \frac{\sec^{2}x+\sec x\tan x}{\sec x+\tan x} \, dx 
$$
$$
u = \sec x+\tan x,\ du = \sec x\tan x+\sec^{2}x\,dx
$$
$$
=\int \frac{1}{u} \, du = \ln|u| + C 
$$
$$
= \ln|\sec x+\tan x| + C
$$
It is important to note this works only for $\sec$ to the first.

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
> = \int \frac{\sin^{2}x}{\cos^{2}x} \, dx 
> $$
> Then you would do $u = \cos x$ and so on, but Dr. Towsley wants to focus on the other way he is teaching.
>

$$
\int \tan^{3}x \, dx = \int \tan x\cdot \tan^{2} x \, dx  = \int \tan x(\sec^{2}x-1) \, dx 
$$
$$
= \int \tan x\sec^{2}x-\tan x \, dx  = \int \tan x\sec^{2}x \, dx - \int \tan x \, dx 
$$
We take out the $\int \tan x \, dx$ because we have an equation for that.
$$
u = \tan x,\ du = \sec^{2}x\,dx
$$
You could also do $u = \sec x,\ du = \sec x\tan x\,dx$, but you still end up with
$$
= \frac{1}{2}\sec^{2}x-\ln|\sec x| + C
$$
or
$$
= \frac{1}{2}\tan^{2}x-\ln|\sec x|+C
$$
They are equivalent because when you use the formulas you get the same value with a difference by $1$ but remember the $+C$ is a constant that makes them equivalent.

---
Ex:
$$
\int \sec x^{3} \, dx 
$$
Dr. Towsley remarks that in some institutions this function is extremely important.
$$
\int \sec x^{3} \, dx = \int \sec x\cdot \sec^{2}x \, dx 
$$
We could try to manipulate this but here we are going to use Integration by Parts (specifically using the Tabular Method).

| $\sec x$       | $\sec^{2} x$ |
| -------------- | ------------ |
| $\sec x\tan x$ | $\tan x$     |
$$
= \sec x\tan x-\int \sec x\tan^{2}x \, dx = \sec x\tan x-\int \sec x(\sec^{2}x-1) \, dx 
$$
$$
\underbrace{ \int \sec x^{3} \, dx }_{ +\int \sec x^{3} \, dx } = \sec x\tan x-\underbrace{ \int \sec^{3}x \, dx }_{ +\int \sec x^{3} \, dx } + \int \sec x \, dx 
$$
$$
2\int \sec^{3}x \, dx  = \sec x\tan x+ \ln \lvert\sec x+\tan x\rvert + C
$$
$$
\int \sec^{3}x \, dx  = \frac{1}{2}[\sec x\tan x+\ln\lvert\sec x+\tan x\rvert] + C
$$

## Partial Fractions Decomposition

- Here we are going to mess functions that we normally can't take the integral of and mess it up using algebra to make it something we can integrate
- This is a very powerful and useful technique that is used in more areas than just calculus.

$$
\begin{aligned}
\int \frac{x}{x^{2}-1} \, dx && \int \frac{x+1}{x^{2}-1} \, dx && \int \frac{x+2}{x^{2}-1} \, dx 
\end{aligned}
$$
Even though it looks like all three functions are very similar, they are solved with completely different techniques.

The first one is solved using u-sub.
$$
\int \frac{x}{x^{2}-1} \, dx = \frac{1}{2}\int \frac{1}{u} \, du = \frac{1}{2}\ln|u|+C = \frac{1}{2}\left|x^{2}-1\right|+C
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
So we have our function, and we have what we want it to look like. How do we make it look like that?
$$
\frac{A}{x-1}\cdot \frac{x+1}{x+1} + \frac{B}{(x+1)}\cdot \frac{x-1}{x-1}
$$
$$
\frac{x+2}{(x-1)(x+1)} = \frac{AxA}{(x+1)(x-1)}+\frac{Bx-B}{(x+1)(x-1)}
$$
$$
x+2 = Ax+A + Bx-B
$$
So splitting it up so we have two equations and two variables
$$
x = Ax+Bx
$$
$$
2 = A-B
$$
$$
1=A+B
$$
$$
1 = 2+B+B
$$
$$
-1 = 2B
$$
$$
B = -\frac{1}{2}
$$
And now doing A
$$
A = 2+\left( -\frac{1}{2} \right)
$$
$$
A = \frac{3}{2}
$$
So plugging it into our original function

$$
\int \frac{\frac{3}{2}}{x^{2}-1} + \frac{-\frac{1}{2}}{x+1} \, dx
$$
$$
= \frac{3}{2}\ln|x+1|-\frac{1}{2}\ln|x+1|+C
$$

### Case 0: The numerator has degree greater than the degree of the denominator

The numerator has degree greater than the degree of the denominator

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

So
$$
= \int x^{2}-2x+2+\frac{-1}{x+2} \, dx = \frac{1}{3}x^{3}-x^{2}-\ln|x+2|+C
$$

Ex:
$$
\int \frac{x^{2}-2x+3}{x^{2}+2x+1} \, dx
$$
After doing long division
$$
= \int 1+\frac{-4x+2}{\underbrace{ x^{2}+2x+1 }_{ \text{ Case 2} }} \, dx
$$
We will go into case two next week

### General Notes

1. If the numerator has degree $\geq$ the denominator, start with long division
2. Any polynomial can be factored into linear (degree 1) terms and irreducible quadratic (degree 2) terms
	- Ex: $x^{4}-16 = (x^{2}-4)(x^{2}+4) = (x-2)(x+2)(x^{2}+4)$
	- Dr. Towsley says he will not give very difficult equations to factor because this is not an algebra class, he will tell us the factors for hard equations but still expects us to be able to do simple ones like $x^{3}-9x = x(x^{2}-9)$. He says that degree 4 factoring is extremely difficult and for degree 5 or high there is no formula. Not that we didn't find it, it has been proven that it doesn't exist.

### Case 1: The denominator factors into distinct linear terms

Ex:
$$
\int \frac{x^{2}+3x+4}{x^{3}-3x^{2}-4x} \, dx
$$
$$
x^{3}-3x^{2}-4x = x(x^{2}-3x-4) = x(x-4)(x+1)
$$
$$
\frac{x^{2}+3x+4}{x(x-4)(x+1)} = \frac{A}{x} + \frac{B}{x-4} + \frac{C}{x+1}
$$
This is now what we did in earlier.
$$
x^{2}+3x+4 = A(x-4)(x+1)+Bx(x+1)+Cx(x-4)
$$
$$
= Ax^{2}-3Ax-4A+Bx^{2}+Bx+Cx^{2}-4Cx
$$
- We did not have enough time to finish this problem, we will finish it on Wednesday.
- Reminder Monday we do not have class because of Labor Day.
- Reminder there is a homework that is posted and there will be a quiz on Wednesday on the content that is in the homework.
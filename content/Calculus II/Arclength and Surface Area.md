---
course: "[[Calculus II]]"
created: 2026-09-23T14:00:00
modified: 2026-09-23T15:50:00
---
# Arclength and Surface Area

- MATH 182 Calculus II
- 9/14/26
- Reminder that Homework 5 is split into two parts and is due on Tuesday.
- The homework after that, Homework 6 is due Sunday because the test will be on Monday.

## Arclength

```graph
type: arclength
title: Approximating a curve with straight segments
fn: 1 + 6x^(3/2)
x: [0, 1]
sliders:
  n: [1, 40, 1, 2]
caption: Drag n to use more segments. The total length of the orange segments creeps up toward the true length of the curve.
```

If $C$ has $n$ line segments approximating it each with length $\Delta l_{i}$, then the length of $C$ is :explain[approximately]{#arclength-segments}
$$
\sum \Delta l_{i} = \sum_{i=1}^{n}\sqrt{ \Delta x_{i}^{2}+\Delta y_{i}^{2} }
$$

::::explain{#arclength-segments title="Where the square root comes from"}
Each little segment is the long side of a tiny right triangle. Going across the segment, $x$ changes by $\Delta x_i$ and $y$ changes by $\Delta y_i$. Those are the two legs of the triangle.

By the Pythagorean theorem, the segment's length is

$$
\Delta l_i = \sqrt{\Delta x_i^2 + \Delta y_i^2}
$$

Adding up all of the segments gives an approximation of the curve's length. Straight segments always cut corners a little, so the approximation is a bit short, but the more segments you use, the closer they hug the curve. Try dragging $n$ in the graph above and watch the number get closer to the true length.
::::

By taking the limit as $n\to \infty$ and writing $dl = \sqrt{ dx^{2}+dy^{2} }$ we get
$$
l = \int _{a}^{b}dl = \int _{a}^{b}\sqrt{ dx^{2}+dy^{2} } = \int _{a}^{b}\sqrt{ 1+\frac{dy^{2}}{dx^{2}} } \, dx
$$

> [!notes] Sidebar
>
> :::steps{title="Pulling dx out of the square root"}
> $$
> \sqrt{ dx^{2}+dy^{2} }
> $$
> We want an integral with a $dx$ on the end, so we need to get $dx$ out of the square root.
>
> ---
>
> $$
> = \sqrt{ dx^{2}\left( 1+\frac{dy^{2}}{dx^{2}} \right) }
> $$
> Factor $dx^2$ out of both terms. Multiplying it back in gives $dx^2 + dy^2$, so nothing changed.
>
> ---
>
> $$
> = dx\sqrt{ 1+\frac{dy^{2}}{dx^{2}} }
> $$
> The square root of $dx^2$ is just $dx$, so it comes out front.
> :::

So
$$
\int _{a}^{b}\sqrt{ 1+\frac{dy^{2}}{dx^{2}} } \, dx = \int _{a}^{b}\sqrt{ 1+\left( \frac{dy}{dx} \right)^{2}} \, dx = \int_{a}^{b} \sqrt{ 1+(f'(x))^{2} }  \, dx
$$

### Theorem (arclength formula)

The length of the curve given by $y=f(x)$ for $a\leq x\leq b$ is
$$
\int _{a}^{b}\sqrt{ 1+(f'(x))^{2} } \, dx
$$
Ex:
Find the length of the curve given by $y=1+6x^{3/2}$ from $x=0$ to $x=1$.

First step find $f'(x)$ on the side

:::steps{title="Finding (f'(x))²"}
$$
f(x) = 1+6x^{3/2}
$$
Start with the function.

---

$$
f'(x) = 9x^{1/2}
$$
Power rule: bring the $\frac{3}{2}$ down and subtract one from the exponent. $6 \cdot \frac{3}{2} = 9$ and $\frac{3}{2} - 1 = \frac{1}{2}$. The $1$ is a constant, so it disappears.

---

$$
(f'(x))^{2} = 81x
$$
Square both the $9$ and the $x^{1/2}$: $9^2 = 81$ and $(x^{1/2})^2 = x$.
:::

Now that we know that, we can use the formula

:::steps{title="Evaluating the arclength integral"}
$$
l = \int _{0}^{1} \sqrt{ 1+81x } \, dx
$$
Plug $(f'(x))^2 = 81x$ into the arclength formula.

---

$$
u = 1+81x,\ du = 81dx
$$
The inside of the square root is a linear function, so a $u$-substitution will turn it into $\sqrt{u}$. That means $dx = \frac{1}{81}du$.

---

$$
x = 0,\ u = 1 \qquad x = 1,\ u = 82
$$
Change the bounds too, so we never have to switch back to $x$: plug each $x$ bound into $u = 1 + 81x$.

---

$$
\frac{1}{81}\int _{1}^{82} \sqrt{ u } \, du
$$
Substitute everything in. The $\frac{1}{81}$ comes from $dx = \frac{1}{81}du$.

---

$$
= \left. \frac{1}{81}\cdot \frac{2}{3} u^{3/2}\right|_{1}^{82}
$$
The antiderivative of $u^{1/2}$ is $\frac{u^{3/2}}{3/2} = \frac{2}{3}u^{3/2}$.

---

$$
= \boxed{ \frac{2}{243}(82^{3/2}-1) }
$$
$\frac{1}{81} \cdot \frac{2}{3} = \frac{2}{243}$, and plugging in the bounds gives $82^{3/2} - 1^{3/2}$.
:::

Leave the answer like that, it is fully numerical so it is a valid answer on a test and way too much work to compute. (It's about $6.10$, which matches the "true length" in the graph above.)

---
Theorem: If a curve is given by $x=g(y)$ for $c\leq y \leq d$, then the length of the curve is
$$
l = \int _{c}^{d}\sqrt{ 1+(g'(y))^{2} } \, dy
$$
This is the same formula with the roles of $x$ and $y$ :explain[swapped]{#swap-xy}.

::::explain{#swap-xy title="Integrating with respect to y"}
Go back to $dl = \sqrt{dx^2 + dy^2}$. Last time we factored out $dx^2$. If the curve is written as $x = g(y)$, it's easier to factor out $dy^2$ instead:

$$
\sqrt{dx^2 + dy^2} = \sqrt{dy^2\left(\frac{dx^2}{dy^2} + 1\right)} = \sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy
$$

and $\frac{dx}{dy}$ is just $g'(y)$. Everything is in terms of $y$ now, so the bounds have to be $y$ values too ($c$ to $d$).

It's the same length either way. Use whichever version gives an easier integral.
::::

Ex:
Find the length of $x=y^{2}$ from $x=0$ to $x=\frac{1}{4}$, on the top half where $y \geq 0$. In terms of $y$, that's from $y = 0$ to $y = \frac{1}{2}$.

```graph
type: parametric
title: x = y² for 0 ≤ y ≤ 1/2
px: t^2
py: t
t: [0, 0.5]
xrange: [-0.05, 0.3]
y: [0, 0.6]
readout: false
duration: 2
xlabel: x
ylabel: y
```

:::steps{title="Setting up the integral"}
$$
g(y) = y^{2}
$$
The curve is already written as $x$ in terms of $y$.

---

$$
g'(y) = 2y
$$
Power rule.

---

$$
(g'(y))^{2} = 4y^{2}
$$
Square it.

---

$$
l = \underbrace{ \int _{0}^{1/2}\sqrt{ 1+4y^{2} } \, dy  }_{ \text{This requires a trig substitution} }
$$
Plug into the formula with the $y$ bounds.
:::

Notice how our function is relatively simple, just $x=y^{2}$, it seems simpler than the earlier one, but it turns out to be much harder, so hard that we aren't doing it in this class.

---
Ex:
Find the length of $y=\ln(\cos x)$ for $0\leq x\leq \frac{\pi}{3}$.

:::steps{title="Length of y = ln(cos x)"}
$$
f(x) = \ln(\cos x)
$$
Start with the function.

---

$$
f'(x) = \frac{-\sin x}{\cos x} = -\tan x
$$
Chain rule: the derivative of $\ln(\text{stuff})$ is $\frac{(\text{stuff})'}{\text{stuff}}$, and the derivative of $\cos x$ is $-\sin x$.

---

$$
(f'(x))^{2} = \tan^{2}x
$$
Squaring gets rid of the negative sign.

---

$$
(f'(x))^{2}+1 = \tan^{2}x +1 = \sec^{2}x
$$
This is the Pythagorean identity $\tan^2 x + 1 = \sec^2 x$. It's the whole reason this problem works out nicely.

---

$$
l= \int_{0}^{\pi/3} \sqrt{ \sec^{2}x }  \, dx = \int _{0}^{\pi/3} \sec x \, dx
$$
The square root and the square cancel. $\sec x$ is positive between $0$ and $\frac{\pi}{3}$, so we don't need an absolute value.

---

$$
= \left.\ln|\sec x+\tan x|\right|_{0}^{\pi/3}
$$
That's the antiderivative of $\sec x$ (we derived it in [[Integrals with Secant and Tangent and Partial Fractions Decomposition|the secant and tangent notes]]).

---

$$
= \ln\left|\sec \frac{\pi}{3} + \tan \frac{\pi}{3} \right| - \ln|\sec0 + \tan0|
$$
Top bound minus bottom bound.

---

$$
= \ln\left|2+\sqrt{ 3 }\right| - \ln1 = \ln\left(2+\sqrt{ 3 }\right)
$$
$\sec\frac{\pi}{3} = \frac{1}{\cos(\pi/3)} = 2$, $\tan\frac{\pi}{3} = \sqrt{3}$, $\sec 0 = 1$, $\tan 0 = 0$, and $\ln 1 = 0$.
:::

---
Ex:
Set up 2 integrals which give the length of $x=1+y^{2}$ from $y = 0$ to $y=1$.

```graph
type: parametric
title: x = 1 + y² for 0 ≤ y ≤ 1
px: 1 + t^2
py: t
t: [0, 1]
xrange: [0.8, 2.2]
y: [0, 1.2]
readout: false
duration: 2
xlabel: x
ylabel: y
```

We can set it up with :explain[either variable]{#two-setups}.

::::explain{#two-setups title="The same length two ways"}
**In terms of $y$.** The curve is already $x = g(y) = 1 + y^2$, so $g'(y) = 2y$ and

$$
l = \int_0^1 \sqrt{1 + 4y^2}\,dy
$$

**In terms of $x$.** Solve for $y$: $y^2 = x - 1$, so $y = \sqrt{x - 1}$ (positive, since $y$ goes from $0$ to $1$). Then

$$
\frac{dy}{dx} = \frac{1}{2\sqrt{x-1}} \qquad \left(\frac{dy}{dx}\right)^2 = \frac{1}{4(x-1)}
$$

The $x$ bounds come from plugging the $y$ bounds into $x = 1 + y^2$: $y = 0$ gives $x = 1$ and $y = 1$ gives $x = 2$. So

$$
l = \int_1^2 \sqrt{1 + \frac{1}{4(x-1)}}\,dx
$$

Both integrals give the same number (about $1.479$). The second one blows up at $x = 1$ because the curve is vertical there, which is a good hint that the $y$ version is the nicer one.
::::

:::::quiz
What is the length of the straight line $y = 2x$ from $x = 0$ to $x = 3$, using the arclength formula?

::::choice
$6$

---
That's how much $y$ changes, not the length of the line. The line also moves $3$ units to the right.
::::

::::choice
$3\sqrt{3}$

---
This uses $\sqrt{1 + f'(x)}$ without squaring the derivative. Make sure to square $f'(x) = 2$ first.
::::

::::choice{correct}
$3\sqrt{5}$
::::

::::choice
$9$

---
This adds the horizontal and vertical distances. The length is the hypotenuse of the triangle they make, not their sum.
::::

::::solution
:::steps
$$
f'(x) = 2
$$
The slope of the line is $2$ everywhere.

---

$$
l = \int_0^3 \sqrt{1 + 2^2}\,dx = \int_0^3 \sqrt{5}\,dx
$$
$(f'(x))^2 = 4$, so the inside of the root is $5$, a constant.

---

$$
l = \sqrt{5}\,x\Big|_0^3 = 3\sqrt{5}
$$
Integrating a constant just multiplies it by the width of the interval.
:::

You can double check with the distance formula: from $(0, 0)$ to $(3, 6)$ is $\sqrt{3^2 + 6^2} = \sqrt{45} = 3\sqrt{5}$.
::::
:::::

## Surface Area

Rotating about the x-axis. Our building block will be the surface area of :explain[thin bands]{#bands} (like the side of a cylinder).

```graph
type: revolve
title: Rotating a curve about the x-axis
fn: 1 + 0.5sin(x)
x: [0, 6]
axis: x
duration: 4
caption: Press Revolve to sweep the curve around the x-axis. Each orange ring is a thin band, and the surface area adds them all up.
```

::::explain{#bands title="Why each band is 2πr times dl"}
Imagine slicing the surface into really thin rings, like slicing a cucumber but keeping only the skin. If you cut one of those rings open and flatten it out, it's a long thin strip.

- How long is the strip? It wraps once around the axis, so its length is the circumference, $2\pi r$.
- How wide is the strip? It's the little piece of the curve that got rotated, which has length $dl$.

So the area of one band is about $2\pi r \cdot dl$. The radius $r$ is how far the curve is from the axis it's spinning around, which is $f(x)$ when we rotate around the $x$-axis.

We use $dl$ (the slanted length along the curve) and not $dx$, because the band is tilted wherever the curve is sloped. Using $dx$ would treat every band like a flat cylinder and give the wrong area.
::::

For a small cross-section, the surface area is
$$
dS = 2\pi r \cdot dl = 2\pi f(x)\ dl
$$
Where $dl = \sqrt{ dx^{2}+dy^{2} } = \sqrt{ 1+\left( \frac{dy}{dx} \right)^{2} }dx$ or $\sqrt{ 1+\left( \frac{dx}{dy} \right)^{2} }dy$

Theorem: The surface area of the solid created by rotating $y=f(x)$ for $a\leq x\leq b$ about the x-axis is given by
$$
\text{SA} = \int _{a}^{b}2\pi  f(x)\sqrt{ 1+(f'(x))^{2} } \, dx
$$
Think of $f(x)$ as the $r$ in $2\pi r$

---
Ex: Find the surface area of a sphere with radius 3.

Solution: To get the sphere we rotate the top half of the circle $x^{2}+y^{2} = 3^{2}$ about the x-axis.

```graph
type: revolve
title: Half a circle swept into a sphere
fn: sqrt(9 - x^2)
x: [-3, 3]
axis: x
duration: 4
rings: 16
caption: Spinning the top half of the circle all the way around makes the whole sphere.
```

We will just use $0\leq x\leq 3$ and double the result, since the sphere is :explain[symmetric]{#sphere-symmetry}.

::::explain{#sphere-symmetry title="Why we can double half the sphere"}
The left half of the sphere ($-3 \leq x \leq 0$) is a mirror image of the right half ($0 \leq x \leq 3$), so they have exactly the same surface area. Integrating from $0$ to $3$ and doubling gives the same answer as integrating from $-3$ to $3$.

It's not just to save writing. At $x = \pm 3$ the derivative of $\sqrt{9 - x^2}$ blows up (the circle is vertical there), and using a symmetric half keeps the setup a little cleaner.
::::

:::steps{title="Getting (f'(x))²"}
$$
f(x) = \sqrt{ 9-x^{2} }
$$
Solve $x^2 + y^2 = 9$ for $y$ and keep the positive root (the top half).

---

$$
f'(x) = \frac{-2x}{2\sqrt{ 9-x^{2} }} = -x(9-x^{2})^{-1/2}
$$
Chain rule: the derivative of $\sqrt{\text{stuff}}$ is $\frac{(\text{stuff})'}{2\sqrt{\text{stuff}}}$, and the derivative of $9 - x^2$ is $-2x$. The $2$s cancel.

---

$$
(f'(x))^{2} = x^{2}(9-x^{2})^{-1} = \frac{x^{2}}{9-x^{2}}
$$
Squaring gets rid of the negative and turns the $-\frac{1}{2}$ power into $-1$.
:::

:::steps{title="Setting up and evaluating the integral"}
$$
\text{SA} = 2\int _{0}^{3}{2\pi \sqrt{ 9-x^{2} }\sqrt{ 1+\frac{x^{2}}{9-x^{2}}}} \, dx
$$
Plug $f(x)$ and $(f'(x))^2$ into the formula, and double it for the other half.

---

$$
= 4\pi \int _{0}^{3}\sqrt{ 9-x^{2} } \sqrt{ \frac{9-x^{2}}{9-x^{2}}+\frac{x^{2}}{9-x^{2}} } \, dx
$$
Pull the constants out ($2 \cdot 2\pi = 4\pi$) and rewrite $1$ as $\frac{9-x^2}{9-x^2}$ so we can add the fractions.

---

$$
= 4\pi \int _{0}^{3}\sqrt{ 9-x^{2} } \sqrt{ \frac{9}{9-x^{2}} } \, dx
$$
Add the fractions: $9 - x^2 + x^2 = 9$.

---

$$
= 4\pi \int _{0}^{3}\sqrt{ 9 } \, dx
$$
Combine the two roots into one: $\sqrt{9-x^2}\cdot\sqrt{\frac{9}{9-x^2}} = \sqrt{9}$. The $9 - x^2$ cancels completely!

---

$$
= 4\pi \int _{0}^{3} 3 \, dx = \left.4\pi \cdot 3x\right|_{0}^{3}
$$
$\sqrt{9} = 3$, and the antiderivative of $3$ is $3x$.

---

$$
= 4\pi \cdot 3^{2} = 36\pi
$$
Plug in the bounds: $4\pi(3 \cdot 3 - 0) = 36\pi$.
:::

> [!important]  By replacing 3 and 9 with $r$ and $r^{2}$ we showed that the surface area of a sphere is
> $$
> \text{SA} = 4\pi r^{2}
> $$

---
About the y-axis

```graph
type: revolve
title: Rotating a curve about the y-axis
fn: 1 + 0.3x
x: [0, 4]
axis: y
duration: 4
caption: Now the axis of rotation is vertical, so the radius of each band is the curve's distance from the y-axis.
```

Theorem: If a curve $C$ is given by $x=g(y)$, $c\leq y\leq d$, is rotated about the y-axis, the surface area of the resulting solid is given by
$$
\text{SA} = \int _{c}^{d} 2\pi g(y) \sqrt{ 1+(g'(y))^{2} } \, dy
$$

---
Ex:
Let $C$ be defined by $y=x^{2}$ for $0\leq x\leq 2$. Find the surface area created by rotating $C$ about the y-axis.

```graph
type: revolve
title: y = x² rotated about the y-axis
fn: sqrt(x)
x: [0, 4]
axis: y
duration: 4
caption: Written as x = √y, the curve's distance from the y-axis is the radius of each band. It makes a bowl shape.
```

:::steps{title="Writing the curve as x = g(y)"}
$$
g(y) = \sqrt{ y }
$$
Solve $y = x^2$ for $x$ (positive, since $0 \leq x \leq 2$). The $x$ bounds $0$ to $2$ become $y$ bounds $0$ to $4$.

---

$$
g'(y) = \frac{1}{2\sqrt{ y }}
$$
$\sqrt{y} = y^{1/2}$, and the power rule gives $\frac{1}{2}y^{-1/2}$.

---

$$
(g'(y))^{2} = \frac{1}{4y}
$$
Square both the $\frac{1}{2}$ and the $y^{-1/2}$.
:::

:::steps{title="Evaluating the surface area"}
$$
\text{SA} = \int _{0}^{4}2\pi \sqrt{ y }\sqrt{ 1+\frac{1}{4y} } \, dy
$$
Plug into the formula.

---

$$
= 2\pi \int _{0}^{4}\sqrt{ y }\sqrt{ \frac{4y}{4y}+\frac{1}{4y} } \, dy
$$
Rewrite $1$ as $\frac{4y}{4y}$ so the fractions can be added.

---

$$
= 2\pi \int _{0}^{4}\sqrt{ y } \sqrt{ \frac{4y+1}{4y} } \, dy
$$
Add the fractions.

---

$$
= 2\pi \int _{0}^{4}\sqrt{ y } \cdot \frac{\sqrt{ 4y+1 }}{2\sqrt{ y }} \, dy
$$
Split the root of the fraction: $\sqrt{4y} = 2\sqrt{y}$.

---

$$
= \pi \int _{0}^{4} \sqrt{ 4y+1 } \, dy
$$
The $\sqrt{y}$ cancels, and $\frac{2\pi}{2} = \pi$.

---

$$
u = 4y+1,\ du = 4\,dy
$$
Same kind of substitution as before. The bounds become $u = 1$ and $u = 17$.

---

$$
= \frac{\pi}{4} \int _{1}^{17}\sqrt{ u } \, du
$$
$dy = \frac{1}{4}du$, so a $\frac{1}{4}$ comes out front.

---

$$
= \frac{\pi}{4} \cdot \left.\frac{2}{3}u^{3/2}\right|_{1}^{17}
$$
Antiderivative of $u^{1/2}$.

---

$$
= \frac{\pi}{6}(17^{3/2}-1)
$$
$\frac{\pi}{4} \cdot \frac{2}{3} = \frac{\pi}{6}$.
:::

### Surface Area Using Either Variable

If your curve is one-to-one then there are multiple ways to compute surface area. The radius and the $dl$ can each be written with :explain[either variable]{#mix-variables}.

$$
r = x = g(y)
$$
$$
 dl = \sqrt{ dx^{2}+dy^{2} } = \sqrt{ 1+(f'(x))^{2} } dx
$$
or
$$
dl = \sqrt{ dx^{2}+dy^{2} } = \sqrt{ 1+(g'(y))^{2} } dy
$$
and either
$$
r = x, \text{ or } r = g(y)
$$

::::explain{#mix-variables title="Pick the variable that makes the integral easy"}
For rotation about the $y$-axis, the radius of each band is the horizontal distance to the $y$-axis. That distance is the $x$-coordinate of the point. If you're integrating in $x$, just write $r = x$. If you're integrating in $y$, write it as $r = g(y)$.

The same goes for $dl$: use the $dx$ form if you're integrating in $x$, and the $dy$ form if you're integrating in $y$. The only rule is that everything inside one integral has to be in the **same** variable, including the bounds.

Both setups describe the exact same surface, so they have to give the same answer. The example at the end shows that happening.
::::

Theorem: Surface area with $dy$ or $dx$ about the y-axis. If $C$ is given by either $y=f(x)$, $a\leq x\leq b$, or $x=g(y)$, $c\leq y\leq d$, and $C$ is rotated about the y-axis, then resulting surface area is
$$
\text{SA} = \int _{a}^{b}2\pi x\sqrt{ 1+(f'(x))^{2} } \, dx
$$
$$
\text{SA} = \int _{c}^{d}2\pi g(y)\sqrt{ 1+(g'(y))^{2} } \, dy
$$
Theorem: Surface area with $dy$ or $dx$ about the x-axis. If $C$ is given by $y=f(x)$, $a\leq x\leq b$, or $x=g(y)$, $c\leq y\leq d$ and $C$ is rotated about the x-axis, then the resulting surface area is
$$
\text{SA} = \int _{a}^{b}2\pi f(x)\sqrt{ 1+(f'(x))^{2} } \, dx
$$
and
$$
\text{SA} = \int _{c}^{d} 2\pi y \sqrt{ 1+(g'(y))^{2} } \, dy
$$

---
Ex: Let $C$ be given by $y=x^{2}$ from $x=0$ to $x=2$. Find the surface area created by rotating $C$ about the y-axis.

:::steps{title="The same surface, integrating in x"}
$$
\int _{0}^{2}2\pi x \sqrt{ 1+4x^{2} } \, dx
$$
Rotating about the $y$-axis, so $r = x$. With $f(x) = x^2$, $f'(x) = 2x$ and $(f'(x))^2 = 4x^2$.

---

$$
u = 1+4x^{2},\ du = 8x\,dx
$$
The $x$ out front is exactly what we need for this substitution. The bounds become $u = 1$ and $u = 17$.

---

$$
\frac{2\pi}{8} \int_{1}^{17} \sqrt{ u } \, du = \frac{\pi}{4}\int_{1}^{17} \sqrt{ u } \, du
$$
$x\,dx = \frac{1}{8}du$, so the $2\pi$ becomes $\frac{2\pi}{8} = \frac{\pi}{4}$.

---

$$
= \frac{\pi}{6}(17^{3/2}-1)
$$
Same antiderivative as before.
:::

This was the exact same integral from the other method.

:::::quiz
The curve $y = x$ for $0 \leq x \leq 1$ is rotated about the $x$-axis, making a cone. Which integral gives its surface area?

::::choice
$\displaystyle\int_0^1 2\pi x \, dx$

---
This uses $dx$ instead of $dl$, which treats the cone's slanted side like a flat cylinder. You need the $\sqrt{1 + (f'(x))^2}$ factor.
::::

::::choice{correct}
$\displaystyle\int_0^1 2\pi x\sqrt{2} \, dx$
::::

::::choice
$\displaystyle\int_0^1 \pi x^2 \sqrt{2} \, dx$

---
$\pi r^2$ is the area of a disk, which is what you'd use for *volume*. For surface area, each band's length is the circumference, $2\pi r$.
::::

::::choice
$\displaystyle\int_0^1 2\pi \sqrt{2} \, dx$

---
The radius isn't constant. It's the distance from the axis to the curve, which is $f(x) = x$.
::::

::::solution
:::steps
$$
\text{SA} = \int_a^b 2\pi f(x)\sqrt{1 + (f'(x))^2}\,dx
$$
Rotating around the $x$-axis, so the radius is $f(x)$.

---

$$
f(x) = x, \quad f'(x) = 1
$$
The line has slope $1$.

---

$$
\text{SA} = \int_0^1 2\pi x\sqrt{1 + 1^2}\,dx = \int_0^1 2\pi x\sqrt{2}\,dx
$$
Plug in. This works out to $\pi\sqrt{2}$, which matches the cone formula $\pi r \ell$ with $r = 1$ and slant height $\ell = \sqrt{2}$.
:::
::::
:::::

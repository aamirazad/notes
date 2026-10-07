---
created: 2026-09-23T14:00:00
modified: 2026-09-23T15:50:00
title: "Arclength and Surface Area (original)"
unlisted: true
original: true
course: "[[Calculus II]]"
date created: 2026-09-23T14:00:00
date modified: 2026-09-23T15:50:00
---
# Arclength and Surface Area

- MATH 182 Calculus II
- 9/14/26
- Reminder that Homework 5 is split into two parts and is due on Tuesday.
- The homework after that, Homework 6 is due Sunday because the test will be on Monday.
## Arclength

![[Drawing 2026-09-23 14.16.25.excalidraw|center|500]]

If $C$ has $n$ line segments approximating it each with length $\Delta l_{i}$, then the length of $C$ is approximately
$$
\sum \Delta l_{i} = \sum_{i=1}^{n}\sqrt{ \Delta x_{i}^{2}+\Delta y_{i}^{2} }
$$

By taking the limit as $n\to \infty$ and writing $dl = \sqrt{ dx^{2}+dy^{2} }$ we get
$$
l = \int _{a}^{b}dl \, dx = \int _{a}^{b}\sqrt{ dx^{2}+dy^{2} } \, dx = \int _{a}^{b}\sqrt{ 1+\frac{dy^{2}}{dx^{2}} } \, dx 
$$

> [!notes] Sidebar
> $$
> \sqrt{ dx^{2}+dy^{2} }
> $$
> $$
> = \sqrt{ dx^{2}\left( 1+\frac{dy^{2}}{dx^{2}} \right) }
> $$
> $$
> = dx\sqrt{ 1+\frac{dy^{2}}{dx^{2}} }
> $$

So
$$
\int _{a}^{b}\sqrt{ 1+\frac{dy^{2}}{dx^{2}} } \, dx = \int _{a}^{b}\sqrt{ 1+\left( \frac{dy}{dx} \right)^{2}} \, dx = \int_{a}^{b} \sqrt{ 1+(f'(x))^{2} }  \, dx 
$$

### Theorem (arclength formula)

The length at the curve given by $y=f(x)$ for $a\leq x\leq b$ is
$$
\int _{a}^{b}\sqrt{ 1+(f'(x))^{2} } \, dx 
$$
Ex:
Find the length of the curve given by $y=1+6x^{3/2}$ from $x=0$ to $x=1$.

First step find $f'(x)$ on the side
$$
f(x) = 1+6x^{3/2}
$$
$$
f'(x) = 9x^{1/2}
$$
$$
(f'(x))^{2} = 81x
$$
Now that we know that, we can use the formula
$$
l = \int _{0}^{1} \sqrt{ 1+81x } \, dx 
$$
$$
u = 1+81x,\ du = 81dx
$$
$$
x = 0,\ u = 1
$$
$$
x = 1, u = 82
$$
$$
\frac{1}{81}\int _{1}^{82} \sqrt{ u } \, du = \left. \frac{1}{81}\cdot \frac{2}{3} u^{3/2}\right|_{1}^{82} = \boxed{ \frac{2}{243}(82^{3/2}-1) }
$$
Leave the answer like that, it is fully numerical so it is a valid answer on a test and way too much work to compute.

---
Theorem: If a curve is given by $x=g(y)$ for $c\leq y \leq d$, then the length of the curve is
$$
l = \int _{c}^{d}\sqrt{ 1+(g(y))^{2} } \, dx 
$$
Ex:
Find the length of $x=y^{2}$ from $x=0$ to $x=\frac{1}{4}$
![[Arclength 2026-09-23 14.36.11.excalidraw|center|400]]
$$
g(y) = y^{2}
$$
$$
g'(y) = 2y
$$

$$
(g'(y))^{2} = 4y^{2}
$$
$$
l = \underbrace{ \int _{0}^{1/2}\sqrt{ 1+4y^{2} } \, dy  }_{ \text{This requires a trig integral} }
$$
Notice how our function is relatively simple, just $x=y^{2}$, it seems simpler than the earlier one, but it turns out to be much harder, so hard that we aren't doing it in this class.

---
Ex:
Find the length of $y=\ln(\cos x)$ for $0\leq x\leq \frac{\pi}{3}$.
$$
f(x) = \ln(\cos x)
$$
$$
f'(x) = \frac{-\sin x}{\cos x} = -\tan x
$$
$$
(f'(x))^{2} = \tan^{2}x
$$
$$
(f'(x))^{2}+1 = \tan^{2}x +1 \sec^{2}x
$$
$$
l= \int_{0}^{\pi/3} \sqrt{ \sec^{2}x }  \, dx = \int _{0}^{\pi/3} \sec x \, dx = \left.\ln|\sec x+\tan x|\right|_{0}^{\pi/3}
$$
$$
= \ln\left|\sec \frac{\pi}{3} + \tan \frac{\pi}{3} \right| - \ln|\sec0 + \tan0| = \ln\left|2+\sqrt{ 3 }\right| - \ln1 = \ln\left|2+\sqrt{ 3 }\right|
$$

---
Ex:
Set up 2 integrals which give the length of $x=1+y^{2}$ from $y = 0$ to $y=1$.
![[Arclength 2026-09-23 14.45.55.excalidraw|center|400]]

## Surface Area

Rotating about the x-axis. Our building block will be the surface area of cylindars.
![[Arclength 2026-09-23 15.05.25.excalidraw|center|800]]

For a small cross-section, the surface area is
$$
ds = 2\pi r \cdot dl = 2\pi f(x)\ dl
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
![[Arclength 2026-09-23 15.16.05.excalidraw|center|300]]
We will just use $0\leq x\leq 3$ and double the result.
$$
f(x) = \sqrt{ 9-x^{2} }
$$
$$
f'(x) = \frac{-2x}{2\sqrt{ 9-x^{2} }} = -x(9-x^{2})^{-1/2}
$$
$$
(f'(x))^{2} = x^{2}(9-x^{2})^{-1} = \frac{x^{2}}{9-x^{2}}
$$
$$
\text{SA} = 2\int _{0}^{3}{2\pi \sqrt{ 9-x^{2} }\sqrt{ 1+\frac{x^{2}}{9-x^{2}}}} \, dx 
$$
$$
= 4\pi = \int _{0}^{3}\sqrt{ 9-x^{2} } \sqrt{ \frac{9-x^{2}}{\cancel{ 9-x^{2} }}+\frac{x^{2}}{\cancel{ 9-x^{2} }} } \, dx 
$$
$$
4\pi \int _{0}^{3}\sqrt{ 9-x^{2}+x^{2} } \, dx  = 4\pi \int _{0}^{3}\sqrt{ 9 } \, dx = 4\pi \int _{0}^{3} 3dx \, dx = \left.4\pi3x\right|_{0}^{3} = 4\pi3^{2} = 36\pi
$$

> [!important]  By replacing 3 and 9 with $r$ and $r^{2}$ we showed that the surface area of a sphere is
> $$
> \text{SA} = 4\pi r^{2}
> $$

---
About the y-axis
![[Arclength 2026-09-23 15.25.15.excalidraw|center|400]]
Theorem: If a curve $C$ is given by $x=g(x)$, $c\leq y\leq d$, is rotated about the y-axis, the surface of the resulting solid is given by
$$
\text{SA} = \int _{c}^{d} 2\pi g(y) \sqrt{ 1+(g'(y))^{2} } \, dy 
$$

---
Ex:
Let $C$ be defined by $y=x^{2}$ for $0\leq x\leq 2$. Find the surface area created by rotating $C$ about the y-axis.

![[Arclength 2026-09-23 15.28.45.excalidraw|center|300]]
$$
g(y) = \sqrt{ y }
$$
$$
g'(y) = \frac{1}{2\sqrt{ y }}
$$
$$
(g'(y))^{2} = \frac{1}{4y}
$$
$$
\text{SA} = \int _{0}^{4}2\pi \sqrt{ y }\sqrt{ 1+\frac{1}{4y} } \, dy
$$
$$
= 2\pi \int _{0}^{4}\sqrt{ y }\sqrt{ \frac{4y}{4y}+\frac{1}{4y} } \, dy = 2\pi \int _{0}^{4}\sqrt{ y } \sqrt{ \frac{4y+1}{4y} } \, dy -  2\pi \int _{0}^{4}\cancel{ \sqrt{ y } } \sqrt{ \frac{4y+1}{2\cancel{ \sqrt{ y } }} } \, dy = \pi \int _{0}^{4} \sqrt{ 4y+1 } \, dy
$$
$$
u = 4y+1
$$
$$
= \frac{\pi}{4} \int _{1}^{17} \sqrt{ u } \, du = \frac{\pi}{6}(17^{3/2}-1)
$$

### Surface Area Using Either Variable

If your curve is one-to-one then there are multiple ways to compute surface area.

$$
r = x = g(y)
$$
$$
 dl = \sqrt{ dx^{2}+dy^{2} } = \sqrt{ 1+f'(x) } dx
$$
or
$$
dl = \sqrt{ dx^{2}+dy^{2} } = \sqrt{ 1+(g'(x))^{2} } dy
$$
and either
$$
r = x, \text{ or } r = g(y)
$$
Theorem: Surface area with $dy$ or $dx$ about the y-axis. If $C$ is given by either $y=f(x)$, $a\leq x\leq b$, or $x=g(y)$, $c\leq y\leq d$, and $C$ is rotated about the y-axis, then resulting surface area is
$$
\text{SA} = \int _{a}^{b}2\pi x\sqrt{ 1+(f'(x))^{2} } \, dx 
$$
$$
\text{SA} = \int _{c}^{d}2\pi g(y)\sqrt{ 1+(g'(x))^{2} } \, dy 
$$
Theorem: Surface area with $dy$ or $dx$ about the x-axis. If $C$ is given by $y=f(x)$, $a\leq x\leq b$, or $x=g(x)$, $c\leq y\leq d$ and $C$ is rotated about the x-axis, then the resulting surface area is
$$
\text{SA} = \int _{a}^{b}2\pi f(x)\sqrt{ 1+(f'(x))^{2} } \, dx 
$$
and
$$
\text{SA} = \int _{c}^{d} 2\pi y \sqrt{ 1+(g'(x))^{2} } \, dy
$$

---
Ex: Let $C$ be given by $y=x^{2}$ from $x=0$ to $x=2$. Find the surface area created by rotating $C$ about the y-axis.
$$
\int _{0}^{2}2\pi \sqrt{ 1+4x^{2} } \, dx 
$$
$$
u = 1+4x^{2}
$$
$$
\frac{2\pi}{8} \int_{1}^{17} u \, du = \frac{\pi}{4}\int_{1}^{17} \sqrt{ u } \, du = \frac{\pi}{6}(17^{3/2}-1)
$$
This was the exact same integral from the other method.
---
created: 2026-04-01T16:34:00
modified: 2026-04-18T17:01:00
title: "Unit 1 – Kinematics (original)"
unlisted: true
original: true
date modified: 2026-04-18T17:01:00
course: "[[AP Physics]]"
publish: true
---
# Unit 1 – Kinematics

## 1.1 Scalars and Vectors in One Dimension

### Position vs Time Graphs

1. Title
2. Label Axis
3. Scale each axis, so data takes up at least half of the graph
4. Line of best fit is in a straight line and drawn with one pencil stroke. Same number of points above than below
5. When calculating slope, choose points from the best fit line, not data points

## 1.2 Displacement, Velocity, and Acceleration

### Velocity and Displacement

Some things in physics are mathematically possible but not possible in real life.

Slope change is change in position divided by change in time

$$
\text{Avg Velocity} = \frac{\text{change in position}}{\text{change in time}}
$$

$$
\bar{v} = \frac{\Delta s}{\Delta t}
$$

Average because speed could be changing during time

Displacement is change in position

$$
\Delta x = x_f - x_i
$$

### Position Equation for No Acceleration

Compare

$$
y=mx+b
$$

$$
x(t) = \bar{v}t + x_0
$$

$\bar{v}$: average velocity, $x_0$: initial position, $t$: time, $x(t)$: as a function on time. This assumes they will continue going at this speed.

### Position Equation for Constant Acceleration

Position equation (as a function on time)

$$
x(t) = \frac{1}{2}at^2 + v_0 t + x_0
$$

$a$: acceleration, $v_0$: initial velocity, $x_0$: initial position

Example question

> [!question]- What is the position of an object with an initial position of $-5~\mathrm{m}$ with an initial velocity of $2.5~\mathrm{m/s}$ for $6~\mathrm{seconds}$.
>
>$$
>\frac{1}{2}0\cdot6^2 + 2.5\cdot6 + -0.5 = 10~\mathrm{m}
>$$

### Velocity Equation for Constant Acceleration

$$
v(t)=at + v_0
$$

Or $v^2$ equation ^dec08b

$$
v^2 = {v_0}^2 + 2a(y-y_0)
$$

## 1.3 Representing Motion

### Position, Velocity, Acceleration Relationship

![[Position velocity acceleration graphs.svg|100%]]

### Freefall

Freefall occurs when gravity is the only force acting on an object. Gravity acts with a constant acceleration of $9.81~\mathrm{m/s^2}$. On the AP test you are allowed to round to $10$.

To find maximum height, find the time when the velocity is $0$ using the velocity equation. If finding distance, then use that time in the position equation.

Or simply use the $v^2$[[#^dec08b| equation]]

> [!question]- Find ball's max height if thrown upward at $50~\mathrm{m/s}$
> Using the $v^2$ equation
>
> $$
> 0^2 = 50^2 + 2(-10)(y-0)
> $$
>
> $$
> y= 125~\mathrm{m}
> $$

## 1.4 Reference Frames and Relative Motion

Position and velocity are relative to the observer. Throwing an object upward could have positive velocity or negative velocity, depending on whether the viewer is above or below. Stay consistent and the math will still work out.

## 1.5 Vectors and Motion in Two Dimensions

### Horizontal Launch

![[Horizontal Launch.svg|center]]

> [!info] Finding maximum distance in the $x$ direction the ball travels.
>
> | Y Values                    | X Values                |
> | --------------------------- | ----------------------- |
> | $y_0 = 50~\mathrm{m}$       | $x_0 = 0~\mathrm{m}$    |
> | $y= 0~\mathrm{m}$           | $x ={ } ?$              |
> | $a = -10~\mathrm{m/s^2}$    | $a= 0~\mathrm{m/s^2}$   |
> | $v_0 = 0~\mathrm{m/s}$      | $v_0 = 20~\mathrm{m/s}$ |
> | $t = 3.16~\mathrm{seconds}$ |                         |

> [!info] Finding how long it takes the ball to hit the ground.
>
> $$
> 0 = \frac{1}{2}(-10)t^2 + (0) t + 50
> $$
>
> $$
> 5t^2 = 50
> $$
> $$
> t = 3.2~\mathrm{s}
> $$

> [!info] Finding the maximum distance in the $x$ direction that the object travels. The object does not experience any negative acceleration, it's velocity is constant.
>
> $$
> x= v_0 \cdot t
> $$
>
> $$
> x = 20(3.2)
> $$
>
> $$
> x = 64~\mathrm{m}
> $$

---

 ![[Two dimensions.svg|40%|center]]

> [!info] Finding the vertical velocity.
>
>$$
> \sin(36) = \frac{\text{opp}}{25}
> $$
>
> $$
> \text{opp} = 15~\mathrm{m/s \text{ up}}
> $$

> [!info] Finding the horizontal velocity.
>
> $$
> \cos(37) = \frac{\text{adj}}{25}
> $$
>
> $$
> \text{adj} = 20~\mathrm{m/s \text{ right}}
> $$
>
> $$
> 0 = 15^2 + 2\cdot -5(y-0)
> $$
>
> $$
> y = 22.5~\mathrm{m}
> $$
>
> $$
> x= 20\cdot 3 = 60~\mathrm{m}
> $$
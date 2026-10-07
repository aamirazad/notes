---
created: 2026-04-01T16:34:00
modified: 2026-04-18T17:01:00
course: "[[AP Physics]]"
publish: true
---
# Unit 1 – Kinematics

## 1.1 Scalars and Vectors in One Dimension

### Position vs Time Graphs

1. Title
2. Label Axis
3. Scale each axis, so data takes up at least half of the graph
4. :explain[Line of best fit]{#best-fit} is in a straight line and drawn with one pencil stroke. Same number of points above than below
5. When calculating slope, choose points from the best fit line, not data points

::::explain{#best-fit title="Why a line of best fit?"}
Real measurements are messy. If you timed a cart rolling down the hallway, every data point has a little bit of error in it from your reaction time, the stopwatch, where exactly you were standing, and so on. The line of best fit is your best guess at the *true* relationship hiding under all that noise.

That's also why you take slope from two points **on the line** and not from two data points. Any single data point might be one of the noisy ones, so using it would bake its error right into your answer. Points on the line already "average out" all of the data.

Keeping roughly the same number of points above and below the line is a quick way to check you didn't tilt it toward one side.
::::

## 1.2 Displacement, Velocity, and Acceleration

### Velocity and Displacement

Some things in physics are mathematically possible but not possible in real life.

The slope of a position vs time graph is the change in position divided by the change in time, which is the :explain[average velocity]{#avg-velocity}.

$$
\text{Avg Velocity} = \frac{\text{change in position}}{\text{change in time}}
$$

$$
\bar{v} = \frac{\Delta x}{\Delta t}
$$

::::explain{#avg-velocity title="Average velocity is a slope"}
On a position vs time graph, position is on the $y$-axis and time is on the $x$-axis. Slope is always "rise over run", so here that's

$$
\text{slope} = \frac{\text{rise}}{\text{run}} = \frac{\Delta x}{\Delta t}
$$

which is exactly the definition of average velocity. So whenever you see a position vs time graph, a steep line means fast, a flat line means stopped, and a line sloping downward means moving in the negative direction.

The bar over the $v$ ($\bar{v}$) is how physicists write "average". We'll use $\Delta x$ for the change in position, since $x$ is what we call position for the rest of this unit.
::::

Average because velocity could be changing during that time.

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

$\bar{v}$: average velocity, $x_0$: initial position, $t$: time, $x(t)$: position as a function of time. This assumes the object keeps going at this same speed, which is what :explain[no acceleration]{#no-accel-line} means.

::::explain{#no-accel-line title="Lining up the two equations"}
The two equations are the same shape, just with different letters:

- $y$ (the output) becomes $x(t)$, the position.
- $m$ (the slope) becomes $\bar{v}$, the velocity.
- $x$ (the input) becomes $t$, the time.
- $b$ (the $y$-intercept) becomes $x_0$, where the object starts at $t = 0$.

If the velocity never changes, the slope never changes, and a graph with a constant slope is a straight line. That's why "no acceleration" and "straight line on a position vs time graph" mean the same thing.
::::

### Position Equation for Constant Acceleration

Position equation (as a function of time)

$$
x(t) = \frac{1}{2}at^2 + v_0 t + x_0
$$

$a$: acceleration, $v_0$: initial velocity, $x_0$: initial position

Example question

> [!question]- What is the position of an object with an initial position of $-5~\mathrm{m}$ and an initial velocity of $2.5~\mathrm{m/s}$ after $6~\mathrm{seconds}$, if it isn't accelerating?
>
> :::steps{title="Plugging into the position equation"}
> $$
> x(t) = \frac{1}{2}at^2 + v_0 t + x_0
> $$
> Start with the full position equation, then figure out what each letter is. Nothing says the object speeds up or slows down, so $a = 0$. We also know $v_0 = 2.5$, $x_0 = -5$ and $t = 6$.
>
> ---
>
> $$
> x = \frac{1}{2}(0)(6)^2 + (2.5)(6) + (-5)
> $$
> Swap every letter for its number. Keep the parentheses around the $-5$ so the negative sign doesn't get lost.
>
> ---
>
> $$
> x = 0 + 15 - 5
> $$
> Anything times zero is zero, so the whole acceleration term disappears. Then $2.5 \cdot 6 = 15$.
>
> ---
>
> $$
> x = 10~\mathrm{m}
> $$
> The object started $5$ meters behind the origin and traveled $15$ meters forward, so it ends up $10$ meters in front of the origin.
> :::

### Velocity Equation for Constant Acceleration

$$
v(t)=at + v_0
$$

Or $v^2$ equation ^dec08b

$$
v^2 = {v_0}^2 + 2a(x-x_0)
$$

This is the equation to reach for when the problem :explain[doesn't mention time]{#v-squared}.

::::explain{#v-squared title="Where the v² equation comes from"}
The $v^2$ equation is what you get when you take the two equations above and get rid of $t$.

From the velocity equation, $t = \dfrac{v - v_0}{a}$. If you plug that into the position equation and simplify (it takes a few lines of algebra), every $t$ cancels out and you're left with

$$
v^2 = {v_0}^2 + 2a(x - x_0)
$$

So it's not a new idea, just the same physics without time in it. That's what makes it handy: if a problem gives you speeds and a distance but never a time, this is the one that lets you skip finding the time first.

The same equation works vertically. Just swap $x$ for $y$, like we do in freefall problems.
::::

:::::quiz
A car starts from rest and speeds up at a constant $4~\mathrm{m/s^2}$. How fast is it going after it has traveled $50~\mathrm{m}$?

::::choice
$200~\mathrm{m/s}$

---
That's $2a(x - x_0) = 2 \cdot 4 \cdot 50$, which is $v^2$, not $v$. You still need to take the square root.
::::

::::choice{correct}
$20~\mathrm{m/s}$
::::

::::choice
$14.1~\mathrm{m/s}$

---
This is $\sqrt{4 \cdot 50}$. It looks like the $2$ in front of $a(x - x_0)$ got dropped.
::::

::::choice
$12.5~\mathrm{m/s}$

---
That's $50 / 4$, which mixes up the units: meters divided by $\mathrm{m/s^2}$ isn't a speed. Distance and acceleration need the $v^2$ equation.
::::

::::solution
There's no time anywhere in the problem, so this is a job for the $v^2$ equation. "Starts from rest" means $v_0 = 0$.

:::steps
$$
v^2 = {v_0}^2 + 2a(x - x_0)
$$
Write down the equation that doesn't need time.

---

$$
v^2 = 0^2 + 2(4)(50)
$$
Plug in $v_0 = 0$, $a = 4$ and $x - x_0 = 50$.

---

$$
v^2 = 400
$$
$2 \cdot 4 \cdot 50 = 400$. Remember, this is $v^2$, not $v$!

---

$$
v = 20~\mathrm{m/s}
$$
Take the square root of both sides.
:::
::::
:::::

## 1.3 Representing Motion

### Position, Velocity, Acceleration Relationship

![[Position velocity acceleration graphs.svg|100%]]

The three graphs are connected by :explain[slopes]{#pva-slopes}: the slope of the position graph is the velocity, and the slope of the velocity graph is the acceleration.

::::explain{#pva-slopes title="Reading one graph from another"}
Look at the drawing from left to right.

The position graph is a straight line going up, so it has a constant, positive slope. Since slope of position is velocity, the velocity graph is a flat line at that constant value ($20~\mathrm{m/s}$ in the drawing).

The velocity graph is flat, which means its slope is zero. Since slope of velocity is acceleration, the acceleration graph sits right on $0$.

You can go backwards too: the *area* under a velocity graph is the displacement, and the area under an acceleration graph is the change in velocity. That comes back a lot on the AP test.
::::

### Freefall

Freefall occurs when gravity is the only force acting on an object. Near the surface of the Earth, gravity gives everything the same constant acceleration of $9.81~\mathrm{m/s^2}$ downward, no matter how heavy it is. On the AP test you are allowed to round to $10$.

To find maximum height, find the time when the velocity is $0$ using the velocity equation. If finding distance, then use that time in the position equation.

Or simply use the $v^2$[[#^dec08b| equation]]

> [!question]- Find ball's max height if thrown upward at $50~\mathrm{m/s}$
> Using the $v^2$ equation
>
> :::steps{title="Max height with the v² equation"}
> $$
> v^2 = {v_0}^2 + 2a(y - y_0)
> $$
> At the very top the ball stops for an instant before it falls back down, so $v = 0$ there. We want $y$, how high it got. Up is positive, so gravity is $a = -10$.
>
> ---
>
> $$
> 0^2 = 50^2 + 2(-10)(y-0)
> $$
> Plug in $v = 0$, $v_0 = 50$, $a = -10$, and $y_0 = 0$ since it starts at the ground.
>
> ---
>
> $$
> 0 = 2500 - 20y
> $$
> $50^2 = 2500$ and $2 \cdot (-10) = -20$.
>
> ---
>
> $$
> 20y = 2500
> $$
> Add $20y$ to both sides to get it by itself.
>
> ---
>
> $$
> y= 125~\mathrm{m}
> $$
> Divide both sides by $20$.
> :::

```graph
title: Height of the ball over time
fn: 50x - 5x^2
x: [0, 10]
xlabel: time (s)
ylabel: height (m)
animate: draw
duration: 3
points: [[5, 125]]
caption: The ball slows down on the way up, stops for an instant at 125 m when t = 5 s, then falls back down. Press Animate to watch the curve draw itself.
```

:::::quiz
A ball is thrown straight up. At the very top of its path, which of these is true?

::::choice
Its velocity and acceleration are both zero.

---
The velocity is zero for an instant, but gravity never turns off. If the acceleration were zero too, the ball would just float there forever.
::::

::::choice{correct}
Its velocity is zero, but its acceleration is still $10~\mathrm{m/s^2}$ downward.
::::

::::choice
Its velocity is $10~\mathrm{m/s}$ downward and its acceleration is zero.

---
This mixes up velocity and acceleration. $10~\mathrm{m/s^2}$ is the acceleration, and it's there the whole flight.
::::

::::choice
Its velocity is upward and its acceleration is zero.

---
If the ball were still moving upward, it wouldn't be at the top yet.
::::

::::solution
In freefall, gravity is the only force acting, and it's acting the entire time, so the acceleration is always $10~\mathrm{m/s^2}$ downward, at the top too.

The velocity, on the other hand, is changing. It starts positive (up), shrinks by $10~\mathrm{m/s}$ every second, passes through $0$ at the top, and then becomes negative (down). The top is exactly the moment where it crosses zero.

So the velocity is zero at the top, but the acceleration isn't.
::::
:::::

## 1.4 Reference Frames and Relative Motion

Position and velocity are relative to the observer. Throwing an object upward could have positive velocity or negative velocity, depending on which direction you choose as positive. Stay consistent and the math will still work out.

## 1.5 Vectors and Motion in Two Dimensions

### Horizontal Launch

![[Horizontal Launch.svg|center]]

A ball rolls off the top of a $50~\mathrm{m}$ cliff moving horizontally at $20~\mathrm{m/s}$. The trick is that the :explain[horizontal and vertical motion are independent]{#independent-xy}.

::::explain{#independent-xy title="Splitting the motion into x and y"}
Gravity only pulls *down*. It doesn't push the ball forward or backward at all. So we can treat the launch as two separate one-dimensional problems that happen at the same time:

- **Vertically**, the ball starts with $0$ vertical velocity and falls with $a = -10~\mathrm{m/s^2}$, exactly like you dropped it off the cliff.
- **Horizontally**, nothing is pushing it, so there's no acceleration. It just keeps moving at $20~\mathrm{m/s}$ the whole time.

The one thing both directions share is **time**. The ball hits the ground at one moment, and that moment is the same whether you're looking at $x$ or $y$. So the usual plan is: solve the vertical problem to get the time, then use that time in the horizontal problem.

If you want to see it, the animation below drops a ghost dot every so often. Notice they're evenly spaced left to right (constant horizontal speed) but get farther and farther apart top to bottom (speeding up as it falls).
::::

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
> :::steps{title="Solving for the time"}
> $$
> 0 = \frac{1}{2}(-10)t^2 + (0) t + 50
> $$
> Use the position equation for the vertical direction. The ball ends at $y = 0$ (the ground), starts at $y_0 = 50$, has no starting vertical velocity, and $a = -10$.
>
> ---
>
> $$
> 0 = -5t^2 + 50
> $$
> $\frac{1}{2}(-10) = -5$, and the $(0)t$ term is just zero.
>
> ---
>
> $$
> 5t^2 = 50
> $$
> Add $5t^2$ to both sides.
>
> ---
>
> $$
> t^2 = 10
> $$
> Divide both sides by $5$.
>
> ---
>
> $$
> t = 3.16~\mathrm{s}
> $$
> Take the square root. We only keep the positive answer, since a negative time would be before the ball left the cliff.
> :::

> [!info] Finding the maximum distance in the $x$ direction that the object travels. The object does not experience any horizontal acceleration, so its horizontal velocity is constant.
>
> :::steps{title="Using the time horizontally"}
> $$
> x= v_0 \cdot t
> $$
> With no acceleration, the position equation is just velocity times time.
>
> ---
>
> $$
> x = 20(3.16)
> $$
> Plug in the horizontal velocity and the time we found from the vertical motion.
>
> ---
>
> $$
> x = 63.2~\mathrm{m}
> $$
> If you round the time to $3.2~\mathrm{s}$ first, you get $64~\mathrm{m}$, which is close enough on the AP test. Just try to round at the end when you can.
> :::

```graph
type: parametric
title: The ball rolling off the cliff
px: 20t
py: 50 - 5t^2
t: [0, 3.162]
duration: 3.2
ghosts: 7
xlabel: x (m)
ylabel: y (m)
y: [0, 55]
caption: Each gray dot is the ball's position at an equal time step. Horizontally they're evenly spaced, vertically they spread out as the ball speeds up.
```

---

 ![[Two dimensions.svg|40%|center]]

Now the ball is launched from the ground at $25~\mathrm{m/s}$, $37^\circ$ above the horizontal. First we :explain[break the velocity into components]{#components}.

::::explain{#components title="Why sine for vertical and cosine for horizontal"}
The launch velocity is the long side (the hypotenuse) of a right triangle. The horizontal part is the side *next to* the angle and the vertical part is the side *across from* the angle. That's where SOH CAH TOA comes in:

$$
\sin\theta = \frac{\text{opp}}{\text{hyp}} \qquad \cos\theta = \frac{\text{adj}}{\text{hyp}}
$$

So the vertical component is $25\sin 37^\circ$ and the horizontal component is $25\cos 37^\circ$.

$37^\circ$ shows up all the time on the AP test because it makes a famous 3-4-5 triangle: $\sin 37^\circ \approx 0.6$ and $\cos 37^\circ \approx 0.8$. That's why the numbers come out so nicely to $15$ and $20$.
::::

> [!info] Finding the vertical velocity.
>
> $$
> \sin(37^\circ) = \frac{\text{opp}}{25}
> $$
>
> $$
> \text{opp} = 25\sin(37^\circ) = 15~\mathrm{m/s \text{ up}}
> $$

> [!info] Finding the horizontal velocity.
>
> $$
> \cos(37^\circ) = \frac{\text{adj}}{25}
> $$
>
> $$
> \text{adj} = 25\cos(37^\circ) = 20~\mathrm{m/s \text{ right}}
> $$

> [!info] Finding the maximum height and how far it lands.
>
> :::steps{title="Max height from the vertical motion"}
> $$
> v^2 = {v_0}^2 + 2a(y - y_0)
> $$
> At the top, the vertical velocity is $0$ (it's still moving sideways, just not up or down). There's no time given, so we use the $v^2$ equation.
>
> ---
>
> $$
> 0 = 15^2 + 2(-10)(y-0)
> $$
> Only the *vertical* part of the velocity matters here, so $v_0 = 15$, not $25$.
>
> ---
>
> $$
> 0 = 225 - 20y
> $$
> Square the $15$ and multiply out $2 \cdot (-10)$.
>
> ---
>
> $$
> y = 11.25~\mathrm{m}
> $$
> Add $20y$ to both sides and divide by $20$.
> :::
>
> :::steps{title="How far it lands"}
> $$
> t_\text{top} = \frac{0 - 15}{-10} = 1.5~\mathrm{s}
> $$
> From $v = at + v_0$, the ball loses $10~\mathrm{m/s}$ of vertical speed every second, so it takes $1.5~\mathrm{s}$ to go from $15$ to $0$.
>
> ---
>
> $$
> t_\text{total} = 2 \cdot 1.5 = 3~\mathrm{s}
> $$
> Going down takes just as long as going up when it lands at the same height it started, so the whole flight is twice as long.
>
> ---
>
> $$
> x= 20\cdot 3 = 60~\mathrm{m}
> $$
> Horizontally there's no acceleration, so distance is just the horizontal velocity times the time in the air.
> :::

```graph
type: parametric
title: Launched at 25 m/s, 37° above the horizontal
px: 20t
py: 15t - 5t^2
t: [0, 3]
duration: 3
ghosts: 9
xlabel: x (m)
ylabel: y (m)
y: [0, 14]
caption: It peaks at 11.25 m after 1.5 s and lands 60 m away after 3 s.
```

:::::quiz
A ball is launched at an angle and lands back at the same height. Ignoring air resistance, what happens to its **horizontal** velocity during the flight?

::::choice
It decreases until the ball reaches the top, then increases.

---
That's what the *vertical* velocity's size does (it slows down on the way up and speeds up on the way down). Gravity doesn't affect the horizontal direction.
::::

::::choice
It decreases the whole time because gravity is slowing it down.

---
Gravity pulls straight down, so it can only change the vertical velocity. There's nothing pushing or pulling sideways.
::::

::::choice{correct}
It stays the same the whole flight.
::::

::::choice
It is zero at the top of the path.

---
The *vertical* velocity is zero at the top. If the horizontal velocity were zero too, the ball would fall straight down from there.
::::

::::solution
Split the motion into horizontal and vertical. The only force in flight is gravity, and gravity points straight down. That means:

- Vertically, there's an acceleration of $10~\mathrm{m/s^2}$ down, so the vertical velocity changes.
- Horizontally, there's no force and so no acceleration, so the horizontal velocity stays exactly what it was at launch.

In the example above, it's $20~\mathrm{m/s}$ from the moment it leaves the ground until it lands.
::::
:::::

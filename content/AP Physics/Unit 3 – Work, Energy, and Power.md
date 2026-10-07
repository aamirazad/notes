---
created: 2026-04-18T17:35:00
modified: 2026-04-19T13:56:00
course: "[[AP Physics]]"
publish: true
---
# Unit 3 – Work, Energy, and Power

## 3.1 Translational Kinetic Energy

**Kinetic energy** refers to the energy of an object's motion.

$$
K = \frac{1}{2} mv^2
$$

Kinetic energy is a scalar (no direction) and it's measured in joules, $\mathrm{J}$. Because the speed is :explain[squared]{#ke-squared}, speed matters a lot more than mass.

::::explain{#ke-squared title="Why the speed matters more than the mass"}
Mass shows up in the formula once, but speed shows up twice ($v^2 = v \cdot v$). So:

- Double the **mass** and the kinetic energy doubles.
- Double the **speed** and the kinetic energy goes up by $2^2 = 4$ times.
- Triple the speed and it goes up $3^2 = 9$ times.

This is why car crashes get so much worse at higher speeds. Going from $30$ to $60~\mathrm{mph}$ doesn't double the energy the brakes (or the crash) have to get rid of, it quadruples it.

It also means kinetic energy can never be negative. Even if the velocity is negative, squaring it makes it positive.
::::

---

Claim: "if you double a block's speed, its kinetic energy will double"

 ![[Kinetic energy relates to mass.svg|center]]

:::steps{title="Checking the claim"}
$$
K_A = \frac{1}{2} mv^2
$$
Block A has mass $m$ and speed $v$.

---

$$
K_B = \frac{1}{2} m(2v)^2
$$
Block B has the same mass but twice the speed, so we swap $v$ for $2v$.

---

$$
K_B = \frac{1}{2} m \cdot 4v^2
$$
Square the whole $2v$: $(2v)^2 = 2^2 v^2 = 4v^2$. Forgetting to square the $2$ is exactly the mistake the claim makes.

---

$$
K_B = 4 \cdot \frac{1}{2} mv^2
$$
Pull the $4$ out front. What's left is exactly $K_A$.

---

$$
K_B = 4 \cdot K_A
$$
:::

The claim is incorrect. The block will have four times the kinetic energy.

## 3.2 Work

**Work** is **mechanical energy** transferred into or out of a system. Work is the force times the distance.

$$
W = F \cdot d \cdot \cos\theta
$$

$F$ is the force exerted on the system, $d$ is the distance over which the force is exerted, $\theta$ is the :explain[angle between the force and the direction of motion]{#work-angle}.

::::explain{#work-angle title="What the cos θ is doing"}
Only the part of the force that points along the direction of motion does any work. The $\cos\theta$ picks out exactly that part.

- **Force in the same direction as the motion** ($\theta = 0^\circ$): $\cos 0^\circ = 1$, so $W = Fd$. All of the force counts, and the work is positive. The force is adding energy.
- **Force perpendicular to the motion** ($\theta = 90^\circ$): $\cos 90^\circ = 0$, so $W = 0$. The normal force on something sliding across the floor does no work, and neither does the string on a ball going in a circle.
- **Force against the motion** ($\theta = 180^\circ$): $\cos 180^\circ = -1$, so $W = -Fd$. Friction does negative work, which means it's taking energy *out*.

So the sign of work tells you whether a force is speeding something up (positive) or slowing it down (negative).
::::

The area under a Force vs Distance graph is the work.

The :explain[net work]{#work-energy-theorem} (the work done by all the forces together) is equal to the change in kinetic energy.

$$
W_\text{net} = \Delta K
$$

::::explain{#work-energy-theorem title="The work-energy theorem"}
This is one of the most useful equations in the unit. If you add up the work done by **every** force on an object, that total tells you exactly how much the kinetic energy changed.

It has to be the *net* work. For example, if you lift a box at a constant speed, you do positive work on it, but gravity does the same amount of negative work. The net work is zero, and sure enough, the kinetic energy doesn't change (the speed stays the same). The energy you put in went into gravitational potential energy instead.

We use this in the block-and-spring problem below: friction's (negative) work is what takes away all of the block's kinetic energy.
::::

 ![[Work of gravity.svg|center]]

For a cart rolling down a ramp, the part of gravity along the ramp is $mg\sin\theta$, and that is the part that does work as the cart rolls.

:::::quiz
A box slides $4~\mathrm{m}$ across the floor while friction pushes back on it with $5~\mathrm{N}$. How much work does friction do on the box?

::::choice
$20~\mathrm{J}$

---
The size is right, but friction points *opposite* to the motion, so $\theta = 180^\circ$ and $\cos 180^\circ = -1$.
::::

::::choice{correct}
$-20~\mathrm{J}$
::::

::::choice
$0~\mathrm{J}$

---
Zero work only happens when the force is perpendicular to the motion (like the normal force). Friction points right along the line of motion, just backwards.
::::

::::choice
$-1.25~\mathrm{J}$

---
This divides instead of multiplying. Work is force *times* distance.
::::

::::solution
:::steps
$$
W = Fd\cos\theta
$$
Start with the definition of work.

---

$$
W = (5)(4)\cos 180^\circ
$$
Friction points backwards while the box moves forwards, so the angle between them is $180^\circ$.

---

$$
W = (5)(4)(-1) = -20~\mathrm{J}
$$
$\cos 180^\circ = -1$. The negative sign means friction is taking $20~\mathrm{J}$ of energy out of the box.
:::
::::
:::::

## 3.3 Potential Energy

### Elastic Potential Energy

**Elastic potential energy** is potential energy stored in an ideal spring.

$$
U_s = \frac{1}{2} k(\Delta x)^2
$$

$U_s$ is the scalar amount of energy in joules. $k~\mathrm{(N/m)}$ is the spring constant. $\Delta x~\mathrm{(m)}$ is the distance the spring has been stretched or compressed from its equilibrium length.

Comparing a spring at its natural length ($U_1$), stretched by $x$ ($U_2$), and stretched by $2x$ ($U_3$):

:::steps{title="Doubling the stretch"}
$$
U_1 = \frac{1}{2}k(0)^2
$$
At its natural length the spring isn't stretched at all, so $\Delta x = 0$.

---

$$
U_1 = 0
$$
No stretch, no stored energy.

---

$$
U_2 = \frac{1}{2}k(x)^2
$$
Stretched by $x$.

---

$$
U_3 = \frac{1}{2}k(2x)^2
$$
Stretched by twice as much.

---

$$
U_3 = 4U_2
$$
Just like with kinetic energy, the stretch is squared, so double the stretch means four times the energy.
:::

### Local Gravitational Potential Energy

Gravitational potential energy ($U_g$) is the energy an object has because of its position in a gravitational field. Near the Earth's surface, the change in it depends on the :explain[change in height]{#ug-height}.

$$
\Delta U_g = mg\Delta y
$$

::::explain{#ug-height title="Only the change in height matters"}
You get to pick where "zero height" is. It could be the floor, the table, or the bottom of a roller coaster. Changing where you put zero changes every $U_g$ value by the same amount, so the *differences* stay the same, and the differences are all the physics cares about.

That's why the formula is written with $\Delta y$. A $2~\mathrm{kg}$ book lifted $1.5~\mathrm{m}$ gains $mg\Delta y = 2 \cdot 10 \cdot 1.5 = 30~\mathrm{J}$ of potential energy no matter where you put zero.

The path doesn't matter either. Carrying the book up a ramp or straight up gives it the same gain in $U_g$, as long as the final height is the same.
::::

### Total Gravitational Potential Energy

Similar to the [[Unit 2 – Force and Translational Dynamics#2.6 Gravitational Force|Gravitational Force]] equation, the potential energy of objects very far from earth have a different equation.
$$
U_{g} = - \frac{Gm_{1}m_{2}}{r}
$$

The :explain[negative sign]{#negative-ug} means that zero potential energy is infinitely far away.

::::explain{#negative-ug title="Why gravitational potential energy is negative"}
For this formula, we put "zero" infinitely far apart, where the two objects don't pull on each other at all.

Gravity always pulls things together, so as two objects get closer, they *lose* potential energy (it turns into kinetic energy as they speed up toward each other). If they start at zero and only lose energy, they end up negative.

The closer they are (smaller $r$), the more negative $U_g$ is. To pull them all the way apart again, you'd have to add enough energy to bring it back up to zero. That's the idea behind escape velocity.
::::

:::::quiz
A spring stores $10~\mathrm{J}$ of energy when it's compressed by $3~\mathrm{cm}$. How much energy does it store when compressed by $6~\mathrm{cm}$?

::::choice
$20~\mathrm{J}$

---
That would be true if the energy were proportional to the compression. In $U_s = \frac{1}{2}k(\Delta x)^2$ the compression is *squared*.
::::

::::choice{correct}
$40~\mathrm{J}$
::::

::::choice
$10~\mathrm{J}$

---
Compressing the spring more stores more energy, it doesn't stay the same.
::::

::::choice
$100~\mathrm{J}$

---
This squares the energy instead of the compression ratio. The compression doubled, so the energy goes up by $2^2 = 4$.
::::

::::solution
$U_s = \frac{1}{2}k(\Delta x)^2$, and nothing about the spring ($k$) changed. Only the compression doubled, from $3$ to $6~\mathrm{cm}$.

Since the compression is squared, doubling it multiplies the energy by $2^2 = 4$:

$$
U = 4 \cdot 10~\mathrm{J} = 40~\mathrm{J}
$$
::::
:::::

## 3.4 Conservation of Energy

The sum of $K$, $U_{g}$, and $U_{s}$ will remain the same in a closed system as long as no outside forces (like friction or a push from someone) do work on it. The energy just :explain[moves between forms]{#energy-moves}.

::::explain{#energy-moves title="Trading one kind of energy for another"}
Think of the total mechanical energy, $K + U_g + U_s$, as a fixed amount of money that can be moved between three bank accounts. Energy can move from $U_g$ to $K$ as a car rolls downhill, or from $K$ to $U_s$ as a block squishes a spring, but the total stays the same.

That gives us the go-to equation for these problems:

$$
K_i + U_i = K_f + U_f
$$

When friction is involved, some energy leaves as heat, so the total *mechanical* energy goes down. You can handle that with the work-energy idea: the work done by friction ($-\mu F_N d$) is how much energy got taken out. That's exactly what happens in the spring problem below.
::::

![[Unit 3 – Work, Energy, and Power 2026-04-18 23.04.36.svg|100%]]

The car starts from rest at the top ($15~\mathrm{m}$ high), rolls down through point $x$ at the bottom, and up over the hill at $y$ ($10~\mathrm{m}$ high). There's no friction.

> [!info] How fast is the car traveling at $x$?
>
> :::steps{title="Speed at the bottom"}
> $$
> K = \frac{1}{2}mv^{2}
> $$
> At the top the car isn't moving, so all its energy is potential. At $x$ (the bottom), all of that has turned into kinetic energy.
>
> ---
>
> $$
> U_{g} = mg\Delta y
> $$
> The potential energy it loses depends on how far it drops: $\Delta y = 15~\mathrm{m}$.
>
> ---
>
> $$
> \frac{1}{2}mv^{2} = mg\Delta y
> $$
> Energy lost as potential = energy gained as kinetic.
>
> ---
>
> $$
> v = \sqrt{ 2g\Delta y }
> $$
> The mass is on both sides, so it cancels. Then multiply both sides by $2$ and take the square root.
>
> ---
>
> $$
> v = \sqrt{ 2\cdot9.8 \cdot 15 }
> $$
> Plug in $g = 9.8$ and $\Delta y = 15$.
>
> ---
>
> $$
> v = 17.146~\mathrm{m/s}
> $$
> $2 \cdot 9.8 \cdot 15 = 294$, and $\sqrt{294} \approx 17.146$.
> :::

> [!question]- How fast is the car traveling at $y$?
>
> :::steps{title="Speed on top of the hill"}
> $$
> K = \frac{1}{2}mv^{2}
> $$
> Same idea, but now the car only drops from $15~\mathrm{m}$ down to $10~\mathrm{m}$ before reaching $y$.
>
> ---
>
> $$
> U_{g} = mg\Delta y
> $$
> The drop is $\Delta y = 15 - 10 = 5~\mathrm{m}$. It doesn't matter that it went down to the bottom first and back up. Only the starting and ending heights matter.
>
> ---
>
> $$
> \frac{1}{2}mv^{2} = mg\Delta y
> $$
> The potential energy it lost became kinetic energy.
>
> ---
>
> $$
> v = \sqrt{ 2g\Delta y }
> $$
> Cancel the mass and solve for $v$, just like before.
>
> ---
>
> $$
> v = \sqrt{ 2\cdot9.8 \cdot 5 }
> $$
> Use the $5~\mathrm{m}$ drop this time.
>
> ---
>
> $$
> v = 9.899~\mathrm{m/s}
> $$
> $\sqrt{98} \approx 9.899$.
> :::

```graph
title: Speed of the car at each height
fn: sqrt(2*9.8*(15 - x))
x: [0, 15]
y: [0, 20]
xlabel: height (m)
ylabel: speed (m/s)
points: [[0, 17.146], [10, 9.899]]
animate: draw
caption: The lower the car is, the more potential energy has turned into kinetic energy. The two dots are point x (at the bottom) and point y (10 m up).
```

### Practice Question

A $5.0~\mathrm{kg}$ block is pushed against a spring ($k = 210~\mathrm{N/m}$), compressing it $0.65~\mathrm{m}$, and released from rest. At point $A$, the block leaves the spring and slides over a rough surface ($\mu = 0.35$) before coming to a stop at point $B$.

![[Unit 3 – Work, Energy, and Power 2026-04-19 13.17.10.svg|100%]]

> [!question]- What is the speed of the block at point A?
>
> :::steps{title="Spring energy becomes kinetic energy"}
> $$
> \frac{1}{2}k(\Delta x)^{2} = \frac{1}{2} mv^{2}
> $$
> Up until point $A$ the floor under the spring is smooth, so all of the spring's stored energy turns into the block's kinetic energy.
>
> ---
>
> $$
> k(\Delta x)^{2} = mv^{2}
> $$
> Multiply both sides by $2$ to get rid of the halves.
>
> ---
>
> $$
> v = \sqrt{ \frac{k(\Delta x)^{2}}{m} }
> $$
> Divide by $m$ and take the square root.
>
> ---
>
> $$
> v = \sqrt{ \frac{210\cdot 0.65^{2}}{5} }
> $$
> Plug in $k = 210$, $\Delta x = 0.65$ and $m = 5$.
>
> ---
>
> $$
> v = 4.21~\mathrm{m/s}
> $$
> $0.65^2 = 0.4225$, times $210$ is $88.7$, divided by $5$ is $17.7$, and $\sqrt{17.7} \approx 4.21$.
> :::

> [!question]- What is the distance between point A and point B?
>
> :::steps{title="Friction takes all the kinetic energy"}
> $$
> W = F\cdot d
> $$
> Friction is the only force doing work after point $A$, and it takes away all of the block's kinetic energy.
>
> ---
>
> $$
> \frac{1}{2}mv^{2} = (\mu \cdot mg) d
> $$
> The kinetic energy at $A$ equals the work friction does. On flat ground $F_N = mg$, so the friction force is $\mu mg$.
>
> ---
>
> $$
> d = \frac{mv^{2}}{2\mu \cdot mg}
> $$
> Multiply both sides by $2$ and divide by $\mu mg$ to get $d$ by itself.
>
> ---
>
> $$
> d = \frac{v^{2}}{2\mu \cdot g}
> $$
> The mass cancels from the top and bottom.
>
> ---
>
> $$
> d = \frac{4.21^{2}}{2\cdot 0.35\cdot9.8}
> $$
> Plug in the speed from the last part, $\mu = 0.35$ and $g = 9.8$.
>
> ---
>
> $$
> d = 2.584~\mathrm{m}
> $$
> $4.21^2 = 17.72$ and $2 \cdot 0.35 \cdot 9.8 = 6.86$.
> :::

:::::quiz
A ball is dropped from a height $h$ and hits the ground with speed $v$. From what height would you need to drop it so it hits the ground with speed $2v$? (Ignore air resistance.)

::::choice
$2h$

---
Kinetic energy depends on $v^2$. Twice the speed needs *four* times the kinetic energy, so four times the drop.
::::

::::choice{correct}
$4h$
::::

::::choice
$\sqrt{2}h$

---
This one has it backwards. $\sqrt{2}h$ would give a speed of only about $1.19v$.
::::

::::choice
$h/2$

---
A shorter drop gives the ball *less* time to speed up, so it would hit slower, not faster.
::::

::::solution
:::steps
$$
mgh = \frac{1}{2}mv^2
$$
All of the potential energy at the top becomes kinetic energy at the bottom.

---

$$
h = \frac{v^2}{2g}
$$
Cancel the mass and solve for the height.

---

$$
h_\text{new} = \frac{(2v)^2}{2g} = \frac{4v^2}{2g}
$$
For twice the speed, swap $v$ for $2v$ and square the $2$.

---

$$
h_\text{new} = 4h
$$
That's four times the original $\frac{v^2}{2g}$.
:::
::::
:::::

## 3.5 Power

Work is the amount of mechanical energy transferred into or out of a system. Power is the rate at which work is done or the rate at which energy changes.

$$
P_{\text{avg}} = \frac{W}{\Delta t} = \frac{\Delta E}{\Delta t}
$$

Unit: watt ($\mathrm{W}$), which is one joule per second

### Example Question

A student collects the following data, determine how much power was used in the first trial to travel up the stairs.

| Trial 1          |                  |
| ---------------- | ---------------- |
| Mass of person   | $55~\mathrm{kg}$ |
| Time             | $22~\mathrm{s}$  |
| Number of stairs | $14$             |
| Step height      | $17~\mathrm{cm}$ |

:::steps{title="Power climbing the stairs"}
$$
P = \frac{mg\Delta y}{\Delta t}
$$
The work the student does is the gravitational potential energy they gain, $mg\Delta y$, and the time is $22~\mathrm{s}$.

---

$$
\Delta y = 14 \cdot 0.17 = 2.38~\mathrm{m}
$$
The total height is the number of steps times the height of each step. Convert $17~\mathrm{cm}$ to $0.17~\mathrm{m}$ first!

---

$$
P = \frac{55\cdot9.8\cdot14\cdot0.17}{22}
$$
Plug everything in.

---

$$
P = \frac{1282.8}{22}
$$
That's $1282.8~\mathrm{J}$ of work.

---

$$
P = 58.31~\mathrm{W}
$$
The student put out about $58$ joules every second on the way up.
:::

:::::quiz
Two students climb the same flight of stairs. They have the same mass, but Student A takes $10~\mathrm{s}$ and Student B takes $20~\mathrm{s}$. Which statement is true?

::::choice
Student A does more work.

---
They have the same mass and climb the same height, so they gain the same $mg\Delta y$. The work is the same.
::::

::::choice{correct}
They do the same work, but Student A has twice the power.
::::

::::choice
They do the same work, but Student B has twice the power.

---
Power is work *divided by* time. Taking longer means *less* power, not more.
::::

::::choice
Student B does more work because they were climbing for longer.

---
Work only depends on the force and the distance, not how long it took.
::::

::::solution
Work here is $mg\Delta y$. Both students have the same mass and climb the same height, so they do exactly the same amount of work.

Power is that work divided by the time. Student A does it in half the time, so Student A's power is twice Student B's.
::::
:::::

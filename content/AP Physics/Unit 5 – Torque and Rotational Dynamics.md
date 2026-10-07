---
created: 2026-04-19T16:00:00
modified: 2026-04-26T11:29:00
course: "[[AP Physics]]"
publish: true
---
# Unit 5 – Torque and Rotational Dynamics

⚠️ UNFINISHED ⚠️

## 5.1 Rotational Kinematics

**Angular displacement** is the measurement of the angle through which a point on a rigid system rotates about a specific axis. It's written as $\Delta\theta$ and its unit is radians ($\text{rad}$).

$$
\Delta \theta = \theta_{f} - \theta_{i}
$$

**Average angular velocity** is the average rate at which angular position changes with respect to time. Its unit is $\text{rad}/\text{s}$ written as omega, $\omega$.

$$
\omega _\text{avg} = \frac{\Delta \theta}{\Delta t}
$$

**Average angular acceleration** is the average rate at which angular velocity changes with respect to time. Its unit is $\text{rad}/\text{s}^2$ written as alpha, $\alpha$.

$$
\alpha _\text{avg} = \frac{\Delta \omega}{\Delta t}
$$

![[Unit 5 – Torque and Rotational Dynamics 2026-04-25 10.33.25.svg|100%]]

These graphs show an object with a constant angular acceleration. They work :explain[just like the graphs in Unit 1]{#rotational-graphs}.

::::explain{#rotational-graphs title="Same graphs, different letters"}
Everything from the position, velocity and acceleration graphs in [[Unit 1 – Kinematics#1.3 Representing Motion|Unit 1]] carries over to rotation:

- The **slope** of the $\theta$ vs time graph is the angular velocity $\omega$. Here the $\theta$ graph curves upward and gets steeper, so $\omega$ is increasing.
- The **slope** of the $\omega$ vs time graph is the angular acceleration $\alpha$. The $\omega$ graph is a straight line going up, so $\alpha$ is a constant positive number.
- That's why the $\alpha$ graph is a flat line above zero.

Going the other way, the area under the $\omega$ graph is the angular displacement $\Delta\theta$.
::::

### Kinematic Equations

Rotating objects share similar equations to that of [[Unit 1 – Kinematics#1.2 Displacement, Velocity, and Acceleration|linear equations]]. Swap $x \to \theta$, $v \to \omega$ and $a \to \alpha$.

$$
\theta = \theta_{0} + \omega_{0}t + \frac{1}{2}\alpha t^{2}
$$

$$
\omega = \omega_{0} + \alpha t
$$

$$
\omega^{2} = \omega_{0}^{2} + 2\alpha(\theta-\theta_{0})
$$

:::::quiz
A fan blade starts from rest and speeds up with a constant angular acceleration of $2~\mathrm{rad/s^2}$. What is its angular velocity after $5~\mathrm{s}$?

::::choice
$25~\mathrm{rad/s}$

---
$25~\mathrm{rad}$ is how far it *turned* in that time, $\frac{1}{2}\alpha t^2$. The question asks for the angular velocity.
::::

::::choice
$2.5~\mathrm{rad/s}$

---
This divides $\alpha$ into $t$. Angular acceleration adds $2~\mathrm{rad/s}$ *every* second, so multiply.
::::

::::choice{correct}
$10~\mathrm{rad/s}$
::::

::::choice
$50~\mathrm{rad/s}$

---
This squares the time. That only happens in the angle equation, not the velocity one.
::::

::::solution
:::steps
$$
\omega = \omega_0 + \alpha t
$$
We know the starting angular velocity, the angular acceleration and the time, so this is the one to use.

---

$$
\omega = 0 + (2)(5)
$$
"Starts from rest" means $\omega_0 = 0$.

---

$$
\omega = 10~\mathrm{rad/s}
$$
Same as $v = v_0 + at$, just with rotation letters.
:::
::::
:::::

## 5.2 Connecting Linear and Rotational Motion

Radians are a unit of measure for angles ($\theta$ theta). An angle in radians is the :explain[arc length divided by the radius]{#radians}.

$$
\theta = \frac{s}{r}
$$

::::explain{#radians title="What a radian actually is"}
One radian is the angle you get when the arc along the edge of a circle is exactly as long as the radius. Take the radius, bend it around the edge of the circle, and the angle it covers is $1~\mathrm{rad}$ (about $57.3^\circ$).

A whole circle's edge is the circumference, $2\pi r$. Divide by $r$ and you get $2\pi$, so one full turn is $2\pi~\mathrm{rad}$, which is the same as $360^\circ$.

The nice thing about radians is that $s = r\theta$ just works, with no conversion factor. That's why all the rotational equations need angles in radians, never degrees.
::::

### Example Problem

A wheel has a radius of $130.0~\mathrm{mm}$, how far will the wheel travel in one revolution?

:::steps{title="Distance in one turn"}
$$
\Delta s = r\Delta\theta
$$
Rearrange $\theta = \frac{s}{r}$. One revolution is $\Delta\theta = 2\pi~\mathrm{rad}$.

---

$$
\Delta s = 0.13~\mathrm{m} \cdot 2\pi
$$
Convert $130.0~\mathrm{mm}$ to $0.13~\mathrm{m}$ first.

---

$$
\Delta s = 0.817~\mathrm{m}
$$
That's just the circumference of the wheel.
:::

This means if you roll the wheel on the ground it will travel 0.817 meters on the ground in one revolution.

Dividing $s = r\theta$ by time connects the :explain[linear and angular speeds]{#v-r-omega}.

$$
\frac{\Delta s}{\Delta t} = r \frac{\Delta\theta}{\Delta t}
$$
$$
v = r\omega
$$
$$
a_{T} = r\alpha
$$

::::explain{#v-r-omega title="Why points farther out move faster"}
On a spinning wheel, every point turns through the same angle in the same time, so every point has the same $\omega$. But a point on the rim has a much bigger circle to go around than a point near the hub. To cover more distance in the same time, it has to move faster.

That's exactly what $v = r\omega$ says: for the same $\omega$, bigger $r$ means bigger $v$.

The same thing works for speeding up: if the wheel's angular velocity is changing at a rate $\alpha$, a point at radius $r$ speeds up along its path at $a_T = r\alpha$. The $T$ stands for *tangential*, meaning along the circle, which is different from the centripetal acceleration that points inward.
::::

### Example Problem

A bicycle wheel with a diameter of 0.4 meters rotates counterclockwise at 100 revolutions per minute.

> [!info] What is the linear speed of a point on the rim of the bicycle wheel?
>
> :::steps{title="Linear speed of the rim"}
> $$
> v = r\omega
> $$
> We need $r$ in meters and $\omega$ in radians per second.
>
> ---
>
> $$
> r = 0.2~\mathrm{m}
> $$
> The radius is half of the $0.4~\mathrm{m}$ diameter.
>
> ---
>
> $$
> \omega = \frac{100~\mathrm{rev}}{1~\mathrm{min}} \cdot \frac{1~\mathrm{min}}{60~\mathrm{s}} \cdot \frac{2\pi~\mathrm{rad}}{1~\mathrm{rev}} = 10.472~\mathrm{\frac{rad}{s}}
> $$
> Convert revolutions per minute to radians per second. Each fraction equals one, and the units cancel diagonally: minutes with minutes, revolutions with revolutions.
>
> ---
>
> $$
> v = 0.2 \cdot 10.472
> $$
> Plug both into $v = r\omega$.
>
> ---
>
> $$
> v = 2.094~\mathrm{m/s}
> $$
> :::

> [!info] What angular acceleration will the bicycle wheel have if it speeds up to 150 revolutions per minute in 20 seconds?
>
> :::steps{title="Angular acceleration"}
> $$
> \omega = \omega_{0} + \alpha t
> $$
> We know the starting and ending angular velocity and the time.
>
> ---
>
> $$
> \alpha = \frac{\omega-\omega_{0}}{t}
> $$
> Subtract $\omega_0$ from both sides and divide by $t$.
>
> ---
>
> $$
> \omega_{0} = 10.472~\mathrm{\frac{rad}{s}}
> $$
> The starting speed is the $100~\mathrm{rpm}$ we converted in the last part.
>
> ---
>
> $$
> \omega = \frac{150~\mathrm{rev}}{1~\mathrm{min}} \cdot \frac{1~\mathrm{min}}{60~\mathrm{s}} \cdot \frac{2\pi~\mathrm{rad}}{1~\mathrm{rev}} = 15.708~\mathrm{\frac{rad}{s}}
> $$
> Convert the final speed the same way.
>
> ---
>
> $$
> \alpha = \frac{15.708-10.472}{20}
> $$
> Plug everything into the rearranged equation.
>
> ---
>
> $$
> \alpha = 0.262~\mathrm{\frac{rad}{s^{2}}}
> $$
> $5.236 / 20 = 0.262$.
> :::

> [!info] Through what linear distance does the point on the rim of the bicycle wheel travel during those 20 seconds?
>
> :::steps{title="Distance traveled by the rim"}
> $$
> \theta = \theta_{0} + \omega_{0}t + \frac{1}{2}\alpha t^{2}
> $$
> First find how far the wheel turns, then turn that angle into a distance.
>
> ---
>
> $$
> \Delta \theta = \omega_{0}t + \frac{1}{2}\alpha t^{2}
> $$
> Move $\theta_0$ to the left side, since $\theta - \theta_0 = \Delta\theta$.
>
> ---
>
> $$
> \Delta\theta = 10.472\cdot20 + \frac{1}{2}\cdot0.262\cdot20^{2}
> $$
> Plug in $\omega_0$, $\alpha$ and $t = 20$.
>
> ---
>
> $$
> \Delta\theta = 261.799~\mathrm{rad}
> $$
> $209.44 + 52.36 = 261.80$. That's about $41.7$ full turns.
>
> ---
>
> $$
> s = \theta r
> $$
> Use $\theta = \frac{s}{r}$, rearranged for $s$.
>
> ---
>
> $$
> s = 261.799 \cdot 0.2
> $$
> The rim is $0.2~\mathrm{m}$ from the center.
>
> ---
>
> $$
> s = 52.360~\mathrm{m}
> $$
> :::

```graph
title: Angle the wheel has turned through
fn: 10.472x + 0.1309x^2
x: [0, 20]
xlabel: time (s)
ylabel: angle (rad)
animate: draw
points: [[20, 261.8]]
caption: The curve gets steeper because the wheel is speeding up. After 20 s it has turned 261.8 rad.
```

:::::quiz
Two kids sit on a spinning merry-go-round. One sits near the center, the other at the edge. Which statement is true?

::::choice
They have the same linear speed, but the kid at the edge has a bigger angular velocity.

---
It's the other way around. They're on the same rigid object, so they turn through the same angle in the same time.
::::

::::choice{correct}
They have the same angular velocity, but the kid at the edge has a bigger linear speed.
::::

::::choice
They have the same angular velocity and the same linear speed.

---
The kid at the edge goes around a much bigger circle in the same time, so they have to be moving faster.
::::

::::choice
The kid near the center has a bigger linear speed.

---
From $v = r\omega$, a smaller $r$ with the same $\omega$ gives a *smaller* linear speed.
::::

::::solution
Everything on a rigid spinning object turns together, so both kids have the same $\omega$. Their linear speeds come from $v = r\omega$. The kid at the edge has a bigger $r$, so they have a bigger $v$. Same angle, more distance.
::::
:::::

## 5.3 Torque

### Force Diagrams

Usually, we are working with [[Unit 2 – Force and Translational Dynamics#Free Body Diagrams|Free body diagrams]] which show all the forces that are acting on the box. Force diagrams are slightly different, they show where each force is applied on the box.

![[Unit 5 – Torque and Rotational Dynamics 2026-04-26 11.37.00.svg|center]]

### Calculating Torque

Forces cause change in motion, torque causes change in rotational motion.

$$
\tau = r_{\perp} F = r F \sin \theta
$$

Although this equation looks complicated at first, it is simply saying the torque of a force is equal to the amount of force times the distance from the center of the rotation. The radius is how far the force is from the center of the rotation. The $\sin\theta$ part means that :explain[only the perpendicular part of the force counts]{#torque-sin}.

::::explain{#torque-sin title="Why only the perpendicular part of the force counts"}
Think about opening a door. If you push straight at the hinges, the door doesn't turn at all, no matter how hard you push. If you push perpendicular to the door, it swings open easily. Pushing at an angle is somewhere in between.

$\theta$ is the angle between the force and the line from the pivot to where the force is applied. The part of the force that's perpendicular to that line is $F\sin\theta$, and that's the only part that twists.

- $\theta = 90^\circ$: $\sin 90^\circ = 1$, full torque.
- $\theta = 0^\circ$: $\sin 0^\circ = 0$, pushing straight toward the pivot, no torque at all.

The $r$ matters too. Pushing near the handle (far from the hinges) is way easier than pushing near the hinges, because a bigger $r$ gives more torque for the same force. That's why door handles are on the side opposite the hinges.
::::

When something is balanced and not rotating, the :explain[torques have to balance]{#torque-balance}.

$$
\tau_{1} = \tau_{2}
$$

::::explain{#torque-balance title="Rotational equilibrium"}
Torques that try to turn something clockwise fight against torques that try to turn it counterclockwise. If an object isn't starting to rotate, they have to cancel:

$$
\sum \tau_\text{clockwise} = \sum \tau_\text{counterclockwise}
$$

With one torque on each side, that's just $\tau_1 = \tau_2$. It's the rotational version of "the forces add up to zero" from Newton's First Law.

A seesaw is the classic example. A heavy kid close to the middle can balance a light kid far from the middle, because what matters is force *times* distance.
::::

### Example Problem

![[Unit 5 – Torque and Rotational Dynamics 2026-04-26 11.21.12.svg|100%]]

An object weighing $140~\mathrm{N}$ is set on a rigid beam of negligible mass at a distance of 3 m from a pivot, as shown.

A vertical force is to be applied to the other end of the beam (at a distance of $4~\mathrm{m}$ from the pivot) to keep the beam at rest and horizontal. What is the magnitude, $F$, of the force required?

:::steps{title="Balancing the beam"}
$$
\tau_{1} = \tau_{2}
$$
The object's weight tries to turn the beam one way and $F$ tries to turn it the other way. For the beam to stay still, the torques have to be equal.

---

$$
r_{1}F_{1} = r_{2}F_{2}
$$
Both forces are vertical and the beam is horizontal, so they're perpendicular to the beam and $\sin 90^\circ = 1$.

---

$$
F_{2} = \frac{r_{1}F_{1}}{r_{2}}
$$
Divide both sides by $r_2$ to get the unknown force by itself.

---

$$
F_{2} = \frac{3\cdot140}{4}
$$
The weight is $140~\mathrm{N}$ at $3~\mathrm{m}$, and $F$ is at $4~\mathrm{m}$.

---

$$
F_{2} = 105~\mathrm{N}
$$
It's less than $140~\mathrm{N}$ because $F$ pushes farther from the pivot, so it gets more torque per newton.
:::

:::::quiz
You push on a wrench $0.25~\mathrm{m}$ from the bolt with a force of $40~\mathrm{N}$, at a $30^\circ$ angle to the wrench handle. What torque do you apply?

::::choice
$10~\mathrm{N\cdot m}$

---
That's $rF$, which would only be right if you pushed perpendicular to the handle. At $30^\circ$, only part of the force twists the bolt.
::::

::::choice{correct}
$5~\mathrm{N\cdot m}$
::::

::::choice
$8.7~\mathrm{N\cdot m}$

---
This uses $\cos 30^\circ$. The angle is measured between the force and the handle, so the twisting part is $F\sin\theta$.
::::

::::choice
$160~\mathrm{N\cdot m}$

---
This divides the force by the distance. Torque is force *times* distance.
::::

::::solution
:::steps
$$
\tau = rF\sin\theta
$$
The angle between the force and the wrench is $30^\circ$.

---

$$
\tau = (0.25)(40)\sin 30^\circ
$$
Plug in the distance from the bolt and the force.

---

$$
\tau = (0.25)(40)(0.5)
$$
$\sin 30^\circ = 0.5$, so only half of your force is doing the twisting.

---

$$
\tau = 5~\mathrm{N\cdot m}
$$
:::
::::
:::::

⚠️ UNFINISHED ⚠️

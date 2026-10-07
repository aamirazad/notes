---
created: 2026-04-18T17:35:00
modified: 2026-04-19T13:56:00
title: "Unit 3 – Work, Energy, and Power (original)"
unlisted: true
original: true
date modified: 2026-04-19T13:56:00
course: "[[AP Physics]]"
publish: true
---
# Unit 3 – Work, Energy, and Power

## 3.1 Translational Kinetic Energy

**Kinetic energy** refers to the energy of an object's motion.

$$
K = \frac{1}{2} mv^2
$$

---

Claim: "if you double a block's speed, its kinetic energy will double"

 ![[Kinetic energy relates to mass.svg|center]]

$$
K_A = \frac{1}{2} mv^2
$$
$$
K_B = \frac{1}{2} m(2v)^2
$$
$$
K_B = 4 \cdot K_A
$$

The claim is incorrect. The block will have four times the kinetic energy.

## 3.2 Work

**Work** is **mechanical energy** transferred into or out of a system. Work is the force times the distance.

$$
W = F \cdot d \cdot \cos\theta
$$

$F$ is the force exerted on the system, $d$ is the distance over with the force is exerted, $\theta$ is the angle between the force and the distance.

The area under a Force vs Distance graph is the work.

Work is equal to the change in kinetic energy.

$$
W = \Delta K
$$

 ![[Work of gravity.svg|center]]

## 3.3 Potential Energy

### Elastic Potential Energy

**Elastic potential energy** is potential energy stored in an ideal spring.

$$
U_s = \frac{1}{2} k(\Delta x)^2
$$

$U_s$ is the scalar amount of jules. $k~\mathrm{(N/m)}$ is the spring constant. $\Delta x~\mathrm{(m)}$ is the distance the spring has been stretched or compressed from its equilibrium length.

$$
U_1 = \frac{1}{2}k(0)^2
$$
$$
U_1 = 0
$$
$$
U_2 = \frac{1}{2}(x)^2
$$
$$
U_3 = \frac{1}{2}k(2x)^2
$$
$$
U_3 = 4U_2
$$

### Local Gravitational Potential Energy

Gravitational potential energy ($U_g$) is the potential energy caused by an object's change in position in a gravitational field.

$$
U_g = mg\Delta y
$$

### Total Gravitational Potential Energy

Similar to the [[Unit 2 – Force and Translational Dynamics#2.6 Gravitational Force|Gravitational Force]] equation, the potential energy of objects very far from earth have a different equation.
$$
U_{g} = - \frac{Gm_{1}m_{2}}{r}
$$

## 3.4 Conservation of Energy

The sum of $K$, $U_{g}$, and $U_{s}$ will remain the same in a closed system.

![[Unit 3 – Work, Energy, and Power 2026-04-18 23.04.36.svg|100%]]

> [!info] How fast is the car traveling at $x$?
> $$
> K = \frac{1}{2}mv^{2}
> $$
> $$
> U_{g} = mg\Delta y
> $$
> $$
> \frac{1}{2}mv^{2} = mg\Delta y
> $$
> $$
> v = \sqrt{ 2g\Delta y }
> $$
> $$
> v = \sqrt{ 2\cdot9.8 \cdot 15 }
> $$
> $$
> v = 17.146~\mathrm{m/s}
> $$

> [!question]- How fast is the car traveling at $y$?
>
> $$
> K = \frac{1}{2}mv^{2}
> $$
> $$
> U_{g} = mg\Delta y
> $$
> $$
> \frac{1}{2}mv^{2} = mg\Delta y
> $$
> $$
> v = \sqrt{ 2g\Delta y }
> $$
> $$
> v = \sqrt{ 2\cdot9.8 \cdot 5 }
> $$
> $$
> v = 9.899~\mathrm{m/s}
> $$

### Practice Question

> [!question] A $5.0~\mathrm{kg}$ block is attached to a spring as shown below and released from rest. At point $A$, the block leaves the spring and slides over a rough surface before coming to a stop at point $B$.
>
> ![[Unit 3 – Work, Energy, and Power 2026-04-19 13.17.10.svg|100%]]
>
> > [!example]- What is the speed of the block at point A?
> >
> > $$
> > \frac{1}{2}k(\Delta x)^{2} = \frac{1}{2} mv^{2}
> > $$
> > $$
> > v = \sqrt{ \frac{k(\Delta x)^{2}}{m} }
> > $$
> > $$
> > v = 4.21~\mathrm{m/s}
> > $$
>
> > [!example]- What is the distance between point A and point B?
> >
> > $$
> > W = F\cdot d
> > $$
> > $$
> > \frac{1}{2}mv^{2} = (\mu \cdot mg) d
> > $$
> > $$
> > d = \frac{mv^{2}}{2\mu \cdot mg}
> > $$
> > $$
> > d = \frac{v^{2}}{2\mu \cdot g}
> > $$
> > $$
> > d = \frac{4.21^{2}}{2\cdot 0.35\cdot9.8}
> > $$
> > $$
> > d = 2.584~\mathrm{m}
> > $$

## 3.5 Power

Work is the amount of mechanical energy transferred into or out of a system. Power is the rate at which work is done or the rate at which energy changes.

$$
P_{\text{avg}} = \frac{W}{\Delta t} = \frac{\Delta E}{\Delta t}
$$

Unit: watt ($W$)

### Example Question

A student collects the following data, determine how much power was used in the first travel to travel up the stairs.

| Trial 1          |                  |
| ---------------- | ---------------- |
| Mass of person   | $55~\mathrm{kg}$ |
| Time             | $22~\mathrm{s}$  |
| Number of stairs | $14$             |
| Step height      | $17~\mathrm{cm}$ |

$$
P = \frac{mg\Delta y}{22}
$$
$$
P = \frac{55\cdot9.8\cdot14\cdot0.17}{22}
$$
$$
P = 58.31~\mathrm{W}
$$
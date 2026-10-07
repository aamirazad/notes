---
created: 2026-04-18T17:01:00
modified: 2026-04-25T10:57:00
title: "Unit 2 – Force and Translational Dynamics (original)"
unlisted: true
original: true
date modified: 2026-04-25T10:57:00
course: "[[AP Physics]]"
publish: true
---
# Unit 2 – Force and Translational Dynamics

## 2.1 System and Center of Mass

**Weight**: A force that gravitational field exerts on a mass. English unit is pounds.
**Equilibrium**: A state in which the total (net) force on an object is zero. The object's acceleration is zero.
**Inertia**: The property of an object that causes it to want to stay at rest or stay in motion. Depends on mass.

## 2.2 Forces and Free-Body Diagrams

### Forces

**Vector**: measurements that have magnitude and direction
**Scalar**: measurements that only has a magnitude (mass, temp)
Forces are interactions. A ball rolling on the floor has interactions with the air and floor.

### Normal Force

When two objects are touching each other, they push on each other perpendicular to the plane of their contact. This is called **normal force**. The normal force is equal to gravity ($mg$) pushing down. It prevents the object from moving though the ground to the center of the earth.

 ![[Normal force.svg|30%|center]]

### Free Body Diagrams

Forces are drawn as arrows beginning at the center of the mass and pointing in the direction of the force. The length of the arrow is relative to the magnitude of the force.

If the object is not accelerating (it is in equilibrium) then the forces must sum to zero

 ![[Free body diagram.svg|center]]

## 2.3 Newton's Third Law

For every action, there is an equal and opposite reaction.

![[Forces diagram.svg|100%]]

### Practice question

 ![[Blocks practice question.svg|center]]

> [!question] For each of these stacks of blocks, how does the magnitude of the force exerted by the top box on the bottom block compare with the magnitude of the force exerted by the bottom box on the top box?
>
> > [!example]- A. The two magnitudes are always equal in each of the stacks.
> >
> > Correct. By Newton's Third Law, the downward force of the top box is equal to the upward force by the bottom box.
>
> > [!example]- B. The two magnitudes are always different in each of the stacks.
> >
> > Incorrect. Try again.
>
> > [!example]- C. The two magnitudes are equal when the boxes have equal mass and different when the boxes have different masses.
> >
> > Incorrect. Try again.
>
> > [!example]- D. The two magnitudes are equal when the elevator is moving at constant speed and different when it is accelerating
> >
> > Incorrect. Try again.
>

## 2.4 Newton's First Law

An object in motion stays in motion and an object in rest stays in rest unless a force acts on it.

This is the equation that states this.

$$
\sum _{i}\overline{F}_{i}=0
$$

If the new force on a system is zero, the velocity of that system will remain constant.

### Practice Question

> [!question]
> ![[Multiple forces graph question.svg|100%]]
>
> An object is subject to multiple forces that result in the object having horizontal and vertical velocity components $v_x$ and $v_y$, respectively as a function of time, as shown. Which of the following diagrams could represent the forces exerted on the object?
>
>  ![[Multiple forces graph answer choices.svg|100%]]
> > [!example]- A.
> >
> > Incorrect. Graph A shows the net forces in both the $x$ and $y$ direction as $0$. This is incorrect. Try again.
>
> > [!example]- B.
> >
> > Incorrect. Graph B shows the net forces in the $x$ direction as positive. This is incorrect. Try again.
>
> > [!example]- C.
> >
> > Incorrect. Graph C shows the net forces in the $y$ direction as $0$. This is incorrect. Try again.
>
> > [!example]- D.
> >
> > Correct. The $v_x$ graph shows the object experiences no change in velocity. So net forces in the $x$ direction must be $0$. The object experiences negative change in the $y$ direction, so the net forces in the $y$ direction must be negative. Graph D shows the forces in the $x$ direction as $0$ and forces in the $y$ direction as negative.
>

## 2.5 Newton's Second Law

When the forces acting on a system is unbalanced, the system will accelerate according to the equation below.
$$
F_{\text{net}} = ma
$$

 ![[Calculating acceleration.svg|center]]

$$
F_{\text{net}} = ma
$$
$$
30 = (8)a, a=3.75~\mathrm{m/s^2}
$$
$$
F_N - mg = ma
$$
$$
F_N - 80 = 0
$$
$$
F_N = 80~\mathrm{newtons}
$$

---

![[Multiple masses.svg|center]]

$$
F_{\text{net}} = ma
$$
$$
m_1g = (m_1+m_2)a
$$
$$
a = \frac{mg}{m_1+m_2}
$$

### Atwood Machine

An Atwood machine is an ideal (massless and frictionless) pulley with a mass hanging on both sides. Both sides have the same magnitude (ignore sign) of acceleration.

$$
\sum F_{\text{sys}} = m_1g - m_2g = (m_1 + m_2)a
$$

---

![[Simple atwood pulley practice.svg|40%|center]]

An $11~\mathrm{kg}$ mass and a $15~\mathrm{kg}$ mass are attached by a string that passes over a pulley as shown above.

> [!info] Finding the acceleration of the system.
>
> $$
> m_2g - m_1g = (m_1 + m_2)a
> $$
> $$
> a = \frac{m_2g - m_1g}{m_1 + m_2}
> $$
> $$
> a = \frac{(15\cdot10)-(11\cdot10)}{11+15}
> $$
> $$
> a = 1.538
> $$
>

### Practice Question

 ![[Three mass acceleration.svg|100%]]

> [!question]- Solve for the mass of $m_2$.
>
> $$
> m_1g - m_2g\cdot\sin\theta - m_3g = (m_1+m_2+m_3)a
> $$
> $$
> m_1g - m_2g \cdot \sin\theta -m_3g =m_1a + m_2a + m_3a 
> $$
> $$
> m_1g - m_3g - m_1a -m_3a = m_2a + m_2g \cdot\sin\theta
> $$
> $$
> m_1g - m_3g - m_1a -m_3a = m_2(a+g\cdot\sin\theta)
> $$
> $$
> m_2 = \frac{m_1g - m_3g - m_1a -m_3a}{a+g\cdot\sin\theta}
> $$
> $$
> m_2 = \frac{(0.106\cdot 10) - (0.0605 \cdot 10) - (0.106 \cdot 0.128) - (0.0605 \cdot 0.128)}{(0.128 + 10 \cdot\sin 8)}
> $$
> $$
> m_2 = 0.285~\mathrm{m}
> $$

## 2.6 Gravitational Force

How do you calculate the force of gravity if you are not on Earth or really far from it?

$$
F_\text{grav} = \frac{Gm_1m_2}{r^2}
$$

$G$ is the universal gravitational constant.

$$
G = 6.67430\times 10^{-11}~\mathrm{m^3 kg^{-1} s^{-2}}
$$

## 2.7 Kinetic and Static Friction

**Static friction** is rolling non-sliding friction. **Kinetic friction** is sliding friction between two objects.

An object can be accelerating due to static friction. Imagine a car moving $20~\mathrm{mph}$ down a road, if we cut the engine, what forces are acting on it? There is gravity ($mg$) going down, but that is canceled out by normal force ($F_\text{N}$). There is one more force, the force of rolling friction is accelerating the car to a stop.

Anyway, kinetic friction is the more common form of friction. Kinetic friction is affected by the types of surfaces that are interacting. This factor is called the coefficient of friction, $\mu$. The force always points against the direction of motion.

$$
|\vec{F}_{f}|\le\mu|\vec{F}_{n}|
$$

All this equation means is magnitude of force of friction is always equal to magnitude of coefficient of friction multiplied by the normal force except when there is another force helping friction. In this case, the force of friction is less than the calculated value.

---

![[Sloped normal force and tension diagram.svg|center]]

$$
F_\text{net} = ma
$$
$$
m_2g - F_\text{f} - F_N = (m_1 + m_2)a
$$
$$
F_\text{f} = mg\cdot sin(\theta)
$$
$$
F_N = \mu \cdot mg \cdot cos(\theta)
$$
$$
m_2g-m_1g\cdot sin\theta - \mu\cdot m_1g \cdot cos(\theta) = (m_1+m_2)a
$$

## 2.8 Spring Forces

A spring constant is the property that tell us how stiff the spring is. The higher spring constant, the harder the spring will pull for the same distance.

$$
F = kx
$$

$F$ is the $k$ is the spring constant, $x$ is distance the spring stretches or compresses.

When graphing the force applied to the spring vs the distance the spring stretches, the slope of that line is the spring constant. The unit is $\mathrm{N/m}$.

## 2.9 Circular Motion

An object moving in a circle is accelerating even if it is moving at a constant speed. The direction of the accelerating is towards the center of the circular path. This is called **centripetal acceleration**. This acceleration toward the center is caused by a net force exerted on the object in the direction of the center.

The force caused by gravity that causes the moon to orbit the earth is the same force that a string pull on a ball that is spinning in a circle.

$$
a_c = \frac{v^2}{r}
$$

^7f4feb

$a_c$ is the centripetal acceleration, $v$ is the tangential speed (in a straight line), and $r$ is the radius of the circular path.

---

> [!question]- For a satellite to maintain a circular orbit $780~\mathrm{km}$ above the Earth's surface, what tangential speed must it possess? The mass of the earth is $5.972 \times 10^{24}~\mathrm{kg}$ and the radius of the earth is $6.378\times 10^6~\mathrm{m}$
>
> $$
> F_\text{net} = ma
> $$
>
> $$
> \frac{Gm_1m_2}{r^2} = m_1 \cdot \frac{v^2}{r}
> $$
>
> $$
> \frac{Gm_2}{r} = v^2
> $$
>
> $$
> v = \sqrt{\frac{Gm_2}{r}}
> $$
>
> $$
> r = 7.8\times10^5 + 6.378\times 10^6 = 7.158\times10^6~\mathrm{m}
> $$
>
> $$
> v = \sqrt{\frac{G \cdot 5.972 \times 10^{24}}{7.158\times10^6}} = 7,462~\mathrm{m/s}
> $$

> [!question]
>
> ![[Unit 3 – Work, Energy, and Power 2026-04-18 22.29.18.svg|30%|center]]
>
> > [!example]- Calculate the mass of the orbiting object
> > $$
> > \frac{Gm_{1}m_{2}}{r^{2}} = m_{2}a
> > $$
> > $$
> > \frac{Gm_{1}m_{2}}{r^{2}} = m_{2}\cdot \frac{v^{2}}{r}
> > $$
> > $$
> > \frac{Gm_{1}}{r} = v^{2}
> > $$
> > $$
> > m_{1} = \frac{v^{2}\cdot r}{G}
> > $$
> > $$
> > m_{1} = \frac{5500^{2}\cdot8.1\times10^{8}}{G}
> > $$
> > $$
> > m_{1} = 3.628\times 10^{26}~\mathrm{m}
> > $$
---
created: 2026-04-19T13:56:00
modified: 2026-04-19T15:58:00
title: "Unit 4 – Linear Momentum (original)"
unlisted: true
original: true
date modified: 2026-04-19T15:58:00
course: "[[AP Physics]]"
publish: true
---
# Unit 4 – Linear Momentum

## 4.1 Linear Momentum

Every object has momentum. Momentum is a vector, so direction matters.

$$
\vec{p} = m\vec{v}
$$

---
A $10~\mathrm{kg}$ cart moving in to the right (positive direction) with velocity $1.5~\mathrm{m/s}$.

$$
\vec{p} = m\vec{v}
$$
$$
\vec{p} = 10\cdot1.5
$$
$$
\vec{p} = 15~\mathrm{kg \cdot m/s \text{ to the right}}
$$

## 4.2 Change in Momentum and Impulse

According to [[Unit 2 – Force and Translational Dynamics#2.4 Newton's First Law|Newton's First Law]], if there is no external force present, an object's momentum will be constant.
Impulse is the change in momentum of an object.

$$
\vec{J} = \Delta \vec{p} = \vec{p_{f}} - \vec{p_{i}}
$$
Also, impulse is equal to the area under the graph of an external force vs. time.

$$
\vec{J} = \vec{F}_{\text{avg}} \Delta t = \Delta \vec{p}
$$

### Example Question

A $0.15~\mathrm{kg}$ baseball that was pitched at $41~\mathrm{m/s}$ to the right is struck back toward the pitcher at $35~\mathrm{m/s}$ as shown below. What is the magnitude and direction of the impulse imparted to the baseball by the bat?

$$
\vec{J} = 0.15\cdot-35 - 0.15\cdot41 = -11.4~\mathrm{kg\cdot m/s}
$$

## 4.3 Conservation of Linear Momentum

The total momentum of a system remains the same through collisions. The below equations says that the velocity of the center of a mass is equal to the total momentum of a system divided by the total mass of the system.
$$
\vec{v}_{\text{cm}} = \frac{\sum \vec{p}_i}{\sum m_i} = \frac{\sum m_i \vec{v}_i}{\sum m_i}
$$

### Example Problem

![[Unit 4 – Linear Momentum 2026-04-19 14.28.42.svg|100%]]

A $2~\mathrm{kg}$ mass travels at $+3~\mathrm{m/s}$ toward a $4~\mathrm{kg}$ mass traveling at $-1~\mathrm{m/s}$. For a system that includes both masses, what is the velocity of the center of mass?

$$
\vec{v}_{\text{cm}} = \frac{2\cdot3+4\cdot-1}{2+4}
$$
$$
\vec{v}_{\text{cm}} = 0.333~\mathrm{m/s}
$$

## 4.4 Elastic and Inelastic Collisions

Momentum is always conserved. In elastic collisions the total kinetic energy of a system before the collision is equal to the total kinetic energy of the system after the collision. In inelastic collisions, the total kinetic energy of the system decreases during the collision as some or all kinetic energy is transferred into thermal energy or sound. This energy is not lost, it is just dissipated out of the system.
$$
\sum K_{i} \stackrel{?}{=} \sum K_{f}
$$

![[Drawing 2026-04-19 14.35.54.svg|80%|center]]

Total kinetic energy before collision:
$$
\frac{1}{2}\cdot 2\cdot 4^{2} + \frac{1}{2} \cdot 4\cdot 0^{2} = 16~\mathrm{J}
$$
Total kinetic energy after collision:
$$
\frac{1}{2}\cdot 2\cdot3^{2} + \frac{1}{2}\cdot4\cdot1^2 = 11~\mathrm{J}
$$
This collision was inelastic as the total kinetic energy before the collision does not equal the total kinetic energy after the collision.

### Practice Question

> [!question]
> 
> ![[Unit 4 – Linear Momentum 2026-04-19 15.52.41.svg|100%]]
> > [!example]- What is the speed of the fourth object after the elastic collision? It may be easier to use $m_{1}v_1 + m_{2}v_2 = m_{1}v_1 + m_{2}v_2$ since the kinetic energy of the system is constant.
> > $$
> > m_{1}v_1 + m_{2}v_2 = m_{1}v_1 + m_{2}v_2
> > $$
> > $$
> > (4)(2) + (2)(-1) = (4)(0) + (2)(v_{2})
> > $$
> > $$
> > v_{2} = 3~\mathrm{m/s}
> > $$
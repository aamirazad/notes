---
created: 2026-04-19T13:56:00
modified: 2026-04-19T15:58:00
course: "[[AP Physics]]"
publish: true
---
# Unit 4 – Linear Momentum

## 4.1 Linear Momentum

Every moving object has momentum. Momentum is a :explain[vector]{#momentum-vector}, so direction matters.

$$
\vec{p} = m\vec{v}
$$

::::explain{#momentum-vector title="Momentum has a direction"}
Momentum points the same way as the velocity. In one dimension, we show the direction with a sign: pick one direction as positive (usually right), and anything moving the other way gets a negative velocity and a negative momentum.

That matters a lot when you add momentums up. Two identical carts moving toward each other at the same speed have a *total* momentum of zero, because one is $+mv$ and the other is $-mv$. Kinetic energy doesn't work like that: their kinetic energies are both positive and add up.

The units are just mass times velocity, $\mathrm{kg \cdot m/s}$. There's no special name for it.
::::

---
A $10~\mathrm{kg}$ cart moving to the right (positive direction) with velocity $1.5~\mathrm{m/s}$.

:::steps{title="Momentum of the cart"}
$$
\vec{p} = m\vec{v}
$$
Start with the definition.

---

$$
\vec{p} = 10\cdot1.5
$$
Mass is $10~\mathrm{kg}$, velocity is $+1.5~\mathrm{m/s}$.

---

$$
\vec{p} = 15~\mathrm{kg \cdot m/s \text{ to the right}}
$$
Always give the direction with a vector answer.
:::

:::::quiz
A $2~\mathrm{kg}$ ball moves left at $3~\mathrm{m/s}$, and right is positive. What is its momentum?

::::choice
$6~\mathrm{kg\cdot m/s}$

---
The size is right, but the ball is moving left, which we called negative.
::::

::::choice{correct}
$-6~\mathrm{kg\cdot m/s}$
::::

::::choice
$-1.5~\mathrm{kg\cdot m/s}$

---
This divides the speed by the mass. Momentum is mass *times* velocity.
::::

::::choice
$9~\mathrm{kg\cdot m/s}$

---
That's $\frac{1}{2}mv^2$, the kinetic energy (in joules). Momentum is just $mv$, with no square and no half.
::::

::::solution
$p = mv = (2)(-3) = -6~\mathrm{kg\cdot m/s}$. The velocity is negative because the ball is moving left, so the momentum is negative too, meaning $6~\mathrm{kg\cdot m/s}$ to the left.
::::
:::::

## 4.2 Change in Momentum and Impulse

According to [[Unit 2 – Force and Translational Dynamics#2.4 Newton's First Law|Newton's First Law]], if there is no net external force, an object's momentum will be constant.
Impulse is the change in momentum of an object.

$$
\vec{J} = \Delta \vec{p} = \vec{p_{f}} - \vec{p_{i}}
$$
Also, impulse is equal to the area under the graph of an external force vs. time.

$$
\vec{J} = \vec{F}_{\text{avg}} \Delta t = \Delta \vec{p}
$$

This is :explain[Newton's second law in disguise]{#impulse-second-law}.

::::explain{#impulse-second-law title="Where impulse comes from"}
Start with $F = ma$. Acceleration is the change in velocity over the time it took, $a = \dfrac{\Delta v}{\Delta t}$, so

$$
F = m\frac{\Delta v}{\Delta t} \quad\Rightarrow\quad F\Delta t = m\Delta v = \Delta p
$$

So the impulse $F\Delta t$ is just another way of saying "a force acting for some time changes the momentum".

This is the idea behind airbags, helmets and landing with bent knees. The change in momentum when you stop is fixed (you go from moving to not moving). If you make the stop take *longer* (bigger $\Delta t$), the force you feel has to be *smaller* to give the same $\Delta p$.
::::

### Example Question

A $0.15~\mathrm{kg}$ baseball that was pitched at $41~\mathrm{m/s}$ to the right is struck back toward the pitcher at $35~\mathrm{m/s}$. What is the magnitude and direction of the impulse imparted to the baseball by the bat?

:::steps{title="Impulse from the bat"}
$$
\vec{J} = m\vec{v}_f - m\vec{v}_i
$$
Impulse is the final momentum minus the initial momentum. Right is positive, so the incoming pitch is $+41$ and the hit ball (going back left) is $-35$.

---

$$
\vec{J} = 0.15\cdot(-35) - 0.15\cdot41
$$
Plug in. Keeping track of the negative sign is the whole problem!

---

$$
\vec{J} = -5.25 - 6.15
$$
Multiply out each momentum.

---

$$
\vec{J} = -11.4~\mathrm{kg\cdot m/s}
$$
So the impulse is $11.4~\mathrm{kg\cdot m/s}$ to the left, toward the pitcher. That makes sense: the bat pushed the ball back the way it came.
:::

## 4.3 Conservation of Linear Momentum

The total momentum of a system remains the same through collisions, as long as :explain[no net external force]{#isolated-system} acts on the system. The below equation says that the velocity of the center of mass is equal to the total momentum of a system divided by the total mass of the system.
$$
\vec{v}_{\text{cm}} = \frac{\sum \vec{p}_i}{\sum m_i} = \frac{\sum m_i \vec{v}_i}{\sum m_i}
$$

::::explain{#isolated-system title="Why momentum is conserved in collisions"}
When two carts collide, cart A pushes on cart B and cart B pushes back on cart A. By Newton's Third Law those forces are equal and opposite, and they last for exactly the same amount of time (the collision). So the impulses are equal and opposite too:

$$
\Delta p_A = -\Delta p_B
$$

Whatever momentum A loses, B gains. Add them up and the total doesn't change.

This only works if nothing *outside* the system is pushing on it. Friction from the track or someone giving one cart a shove would change the total. In collision problems we usually assume the collision is so quick that outside forces don't have time to matter.

Since the total momentum doesn't change, the velocity of the center of mass doesn't change either. The center of mass of the two carts keeps cruising along at the same velocity before, during and after the crash.
::::

### Example Problem

![[Unit 4 – Linear Momentum 2026-04-19 14.28.42.svg|100%]]

A $2~\mathrm{kg}$ mass travels at $+3~\mathrm{m/s}$ toward a $4~\mathrm{kg}$ mass traveling at $-1~\mathrm{m/s}$. For a system that includes both masses, what is the velocity of the center of mass?

:::steps{title="Center of mass velocity"}
$$
\vec{v}_{\text{cm}} = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}
$$
Total momentum over total mass.

---

$$
\vec{v}_{\text{cm}} = \frac{2\cdot3+4\cdot(-1)}{2+4}
$$
The $4~\mathrm{kg}$ mass is moving left, so its velocity is $-1$.

---

$$
\vec{v}_{\text{cm}} = \frac{2}{6}
$$
$6 - 4 = 2$ on top, $6$ on the bottom.

---

$$
\vec{v}_{\text{cm}} = 0.333~\mathrm{m/s}
$$
Positive, so the center of mass drifts slowly to the right, and it'll keep doing that even after they collide.
:::

:::::quiz
A $3~\mathrm{kg}$ cart moving right at $4~\mathrm{m/s}$ runs into a $1~\mathrm{kg}$ cart sitting still. They stick together. How fast do they move afterward?

::::choice
$4~\mathrm{m/s}$

---
That would mean the total momentum went from $12$ up to $16~\mathrm{kg\cdot m/s}$. The same momentum is now shared by more mass, so they have to slow down.
::::

::::choice
$2~\mathrm{m/s}$

---
This splits the speed evenly, as if the carts had the same mass. The total momentum ($12$) gets divided by the total mass ($4~\mathrm{kg}$).
::::

::::choice{correct}
$3~\mathrm{m/s}$
::::

::::choice
$12~\mathrm{m/s}$

---
$12$ is the total momentum in $\mathrm{kg\cdot m/s}$. To get a velocity, you still need to divide by the mass.
::::

::::solution
:::steps
$$
m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_f
$$
Momentum before equals momentum after. Afterward they're stuck together, so they share one velocity.

---

$$
(3)(4) + (1)(0) = (3 + 1) v_f
$$
The second cart starts at rest.

---

$$
12 = 4v_f
$$
Simplify both sides.

---

$$
v_f = 3~\mathrm{m/s}
$$
Divide by $4$. They move right at $3~\mathrm{m/s}$ together.
:::
::::
:::::

## 4.4 Elastic and Inelastic Collisions

Momentum is always conserved. In elastic collisions the total kinetic energy of a system before the collision is equal to the total kinetic energy of the system after the collision. In inelastic collisions, the total kinetic energy of the system decreases during the collision as some kinetic energy is transferred into thermal energy or sound. This energy is not lost, it is just dissipated out of the system. When the objects stick together, it's called :explain[perfectly inelastic]{#perfectly-inelastic}.
$$
\sum K_{i} \stackrel{?}{=} \sum K_{f}
$$

::::explain{#perfectly-inelastic title="Elastic, inelastic and perfectly inelastic"}
Every collision conserves momentum (if there's no outside force). The difference between the types is only about kinetic energy:

- **Elastic**: kinetic energy is conserved too. Things bounce off each other perfectly, like two pool balls (almost) or two atoms.
- **Inelastic**: some kinetic energy turns into heat, sound or bending things out of shape. Most real collisions are like this.
- **Perfectly inelastic**: the objects stick together and move as one afterward. This loses the most kinetic energy that's possible while still conserving momentum. The cart problem in 4.3's quiz was one of these.

To tell which kind you have, calculate the total kinetic energy before and after and compare, like we do below.
::::

![[Drawing 2026-04-19 14.35.54.svg|80%|center]]

A $2~\mathrm{kg}$ block moving at $4~\mathrm{m/s}$ hits a $4~\mathrm{kg}$ block at rest. Afterward the $2~\mathrm{kg}$ block stops and the $4~\mathrm{kg}$ block moves at $2~\mathrm{m/s}$. First let's :explain[check the momentum]{#check-momentum}:

::::explain{#check-momentum title="Always check momentum first"}
Before deciding whether a collision is elastic, it's worth checking that the numbers even make sense. Momentum has to be conserved, no matter what kind of collision it is.

Before: $(2)(4) + (4)(0) = 8~\mathrm{kg\cdot m/s}$

After: $(2)(0) + (4)(2) = 8~\mathrm{kg\cdot m/s}$

They match, so this collision could really happen. If the momentum before and after *didn't* match, either there was an outside force or the numbers were wrong. That's a great way to catch mistakes.

It also helps to check the order. The block in back can't end up faster than the block in front of it, or it would have passed right through it!
::::

Total kinetic energy before collision:
$$
\frac{1}{2}\cdot 2\cdot 4^{2} + \frac{1}{2} \cdot 4\cdot 0^{2} = 16~\mathrm{J}
$$
Total kinetic energy after collision:
$$
\frac{1}{2}\cdot 2\cdot0^{2} + \frac{1}{2}\cdot4\cdot2^2 = 8~\mathrm{J}
$$
This collision was inelastic as the total kinetic energy before the collision does not equal the total kinetic energy after the collision. Half of it turned into heat and sound.

### Practice Question

![[Unit 4 – Linear Momentum 2026-04-19 15.52.41.svg|100%]]

> [!question]- What is the speed of the $2~\mathrm{kg}$ object after the elastic collision?
>
> Even though it's elastic, we only need conservation of momentum to find one unknown velocity.
>
> :::steps{title="Using conservation of momentum"}
> $$
> m_{1}v_{1i} + m_{2}v_{2i} = m_{1}v_{1f} + m_{2}v_{2f}
> $$
> Total momentum before = total momentum after. $m_1$ is the $4~\mathrm{kg}$ block and $m_2$ is the $2~\mathrm{kg}$ block.
>
> ---
>
> $$
> (4)(2) + (2)(-1) = (4)(0) + (2)(v_{2f})
> $$
> Right is positive, so the $2~\mathrm{kg}$ block's starting velocity is $-1$. After the collision the $4~\mathrm{kg}$ block stops.
>
> ---
>
> $$
> 6 = 2v_{2f}
> $$
> $8 - 2 = 6$ on the left, and the $4~\mathrm{kg}$ block's term is zero on the right.
>
> ---
>
> $$
> v_{2f} = 3~\mathrm{m/s}
> $$
> Divide both sides by $2$. It's positive, so the $2~\mathrm{kg}$ block bounces off to the right.
> :::
>
> We can double check that it really is elastic: before, $K = \frac{1}{2}(4)(2^2) + \frac{1}{2}(2)(1^2) = 9~\mathrm{J}$. After, $K = \frac{1}{2}(2)(3^2) = 9~\mathrm{J}$. Same kinetic energy, so it's elastic.

:::::quiz
Two clay balls collide and stick together. Which of these is definitely true?

::::choice
Both momentum and kinetic energy are conserved.

---
Sticking together is the definition of a perfectly inelastic collision. Some kinetic energy always turns into heat and squishing the clay.
::::

::::choice{correct}
Momentum is conserved, but some kinetic energy is lost.
::::

::::choice
Kinetic energy is conserved, but momentum is not.

---
It's the other way around. Momentum is conserved in every collision (with no outside forces). Kinetic energy is the one that can change.
::::

::::choice
Neither momentum nor kinetic energy is conserved.

---
Momentum is still conserved. The two balls push on each other with equal and opposite forces for the same time, so whatever momentum one loses, the other gains.
::::

::::solution
Momentum is conserved in *every* collision as long as there's no net outside force, because the two objects push on each other with equal and opposite impulses.

Kinetic energy is only conserved in elastic collisions. When objects stick together, the collision is perfectly inelastic, so some of the kinetic energy turns into heat, sound and squished clay.
::::
:::::

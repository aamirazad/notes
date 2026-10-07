---
created: 2026-04-18T17:01:00
modified: 2026-04-25T10:57:00
course: "[[AP Physics]]"
publish: true
---
# Unit 2 – Force and Translational Dynamics

## 2.1 System and Center of Mass

**Weight**: The force that a gravitational field exerts on a mass. Weight is $mg$, measured in newtons ($\mathrm{N}$). The English unit is pounds.
**Equilibrium**: A state in which the total (net) force on an object is zero. The object's acceleration is zero.
**Inertia**: The property of an object that causes it to want to stay at rest or stay in motion. Depends on mass.

## 2.2 Forces and Free-Body Diagrams

### Forces

**Vector**: measurements that have magnitude and direction
**Scalar**: measurements that only have a magnitude (mass, temp)
Forces are interactions. A ball rolling on the floor has interactions with the air and floor.

### Normal Force

When two objects are touching each other, they push on each other perpendicular to the surface where they touch. This is called **normal force**. On a flat surface, with nothing else pushing up or down, the normal force is :explain[equal to gravity]{#normal-equals-mg} ($mg$) pushing down. It prevents the object from moving through the ground to the center of the earth.

::::explain{#normal-equals-mg title="When is the normal force equal to mg?"}
The normal force isn't *always* $mg$. It's however much push the surface needs to give so the object doesn't sink into it. For a box sitting still on a flat floor, the only vertical forces are gravity pulling down and the floor pushing up. The box isn't accelerating up or down, so those two have to cancel:

$$
F_N - mg = 0 \quad\Rightarrow\quad F_N = mg
$$

But change the situation and the normal force changes too:

- **On a ramp**, the floor is tilted, so it only has to hold up the part of gravity that points into the ramp: $F_N = mg\cos\theta$.
- **If you push down on the box**, the floor has to push back harder: $F_N = mg + F_\text{push}$.
- **In an elevator accelerating upward**, the floor has to push harder than $mg$ to speed you up, which is why you feel heavier.

So $F_N = mg$ is a special case. The real rule is "draw the free body diagram and make the forces add up to $ma$".
::::

 ![[Normal force.svg|30%|center]]

### Free Body Diagrams

Forces are drawn as arrows beginning at the center of the mass and pointing in the direction of the force. The length of the arrow is relative to the magnitude of the force.

If the object is not accelerating (it is in equilibrium) then the forces must sum to zero

 ![[Free body diagram.svg|center]]

:::::quiz
A $5~\mathrm{kg}$ box sits on a flat table. You push straight down on the top of it with a force of $20~\mathrm{N}$. What is the normal force from the table on the box? (Use $g = 10~\mathrm{m/s^2}$.)

::::choice
$50~\mathrm{N}$

---
That's just the box's weight. Your push is also pressing the box into the table, so the table has to push back harder.
::::

::::choice
$30~\mathrm{N}$

---
This subtracts your push instead of adding it. You're pushing *down*, the same direction as gravity, so they add.
::::

::::choice{correct}
$70~\mathrm{N}$
::::

::::choice
$20~\mathrm{N}$

---
That's only your push. The table is holding up the box's weight too.
::::

::::solution
Draw the free body diagram: gravity ($mg = 50~\mathrm{N}$) down, your push ($20~\mathrm{N}$) down, and the normal force up. The box isn't accelerating, so the forces balance.

:::steps
$$
F_N - mg - F_\text{push} = 0
$$
Up is positive. The normal force points up, and both gravity and your push point down.

---

$$
F_N - 50 - 20 = 0
$$
$mg = 5 \cdot 10 = 50~\mathrm{N}$.

---

$$
F_N = 70~\mathrm{N}
$$
Add $70$ to both sides. The table pushes harder than the box's weight because it's holding back your push too.
:::
::::
:::::

## 2.3 Newton's Third Law

For every action, there is an equal and opposite reaction. More precisely, if object A pushes on object B, then B pushes back on A with a force of the :explain[same size in the opposite direction]{#third-law-pairs}.

::::explain{#third-law-pairs title="Third law pairs act on different objects"}
The thing that trips most people up is that the two forces in a third law pair act on **different** objects. When you push on a wall, the wall pushes back on *you*. Your push is on the wall, the wall's push is on you.

That's why third law pairs never cancel each other out. Canceling only makes sense when you add up forces on the *same* object.

It's also why the pair is always equal, even when things are speeding up. If a truck hits a bug, the force of the truck on the bug is exactly as big as the force of the bug on the truck. The bug just has a lot less mass, so the same size force gives it a *much* bigger acceleration ($a = F/m$).
::::

![[Forces diagram.svg|100%]]

### Practice question

 ![[Blocks practice question.svg|center]]

:::::quiz
For each of these stacks of blocks, how does the magnitude of the force exerted by the top box on the bottom box compare with the magnitude of the force exerted by the bottom box on the top box?

::::choice{correct}
The two magnitudes are always equal in each of the stacks.

---
By Newton's Third Law, the downward force of the top box on the bottom box is equal to the upward force by the bottom box on the top box.
::::

::::choice
The two magnitudes are always different in each of the stacks.

---
These two forces are a third law pair (box A on box B, and box B on box A), and third law pairs are always the same size.
::::

::::choice
The two magnitudes are equal when the boxes have equal mass and different when the boxes have different masses.

---
The masses change *how big* the forces are, but not whether the two forces match. A heavier top box pushes down harder, and the bottom box pushes back up exactly that much harder.
::::

::::choice
The two magnitudes are equal when the elevator is moving at constant speed and different when it is accelerating.

---
Acceleration changes the size of the forces (both of them), but the third law holds no matter what the motion is.
::::

::::solution
The question is about "top box on bottom box" and "bottom box on top box". Those are the same interaction seen from both sides, which is exactly what Newton's Third Law is about. Third law pairs are always equal in size and opposite in direction, no matter the masses or whether anything is accelerating. So the answer is that they're always equal.
::::
:::::

## 2.4 Newton's First Law

An object in motion stays in motion and an object at rest stays at rest unless a net force acts on it.

This is the equation that states this.

$$
\sum _{i}\vec{F}_{i}=0
$$

If the net force on a system is zero, the velocity of that system will remain constant. That means the same speed *and* the same direction.

### Practice Question

![[Multiple forces graph question.svg|100%]]

:::::quiz
An object is subject to multiple forces that result in the object having horizontal and vertical velocity components $v_x$ and $v_y$, respectively as a function of time, as shown above. Which of the following diagrams could represent the forces exerted on the object?

![[Multiple forces graph answer choices.svg|100%]]

::::choice
A.

---
Graph A shows the net forces in both the $x$ and $y$ direction as $0$. With no net force, $v_y$ would stay constant, but the graph shows it going down.
::::

::::choice
B.

---
Graph B shows the net force in the $x$ direction as positive. That would make $v_x$ increase, but the $v_x$ graph is flat.
::::

::::choice
C.

---
Graph C shows the net force in the $y$ direction as $0$. That would keep $v_y$ constant, but the graph shows it decreasing.
::::

::::choice{correct}
D.

---
The $v_x$ graph shows the object experiences no change in velocity. So net forces in the $x$ direction must be $0$. The object experiences a negative change in velocity in the $y$ direction, so the net forces in the $y$ direction must be negative. Graph D shows the forces in the $x$ direction as $0$ and forces in the $y$ direction as negative.
::::

::::solution
Look at each direction separately and ask "is the velocity changing?"

- $v_x$ is a flat line, so the horizontal velocity isn't changing. No acceleration means the **net force in $x$ is zero**.
- $v_y$ goes down at a steady rate, so the vertical velocity is decreasing. That's a negative acceleration, so the **net force in $y$ is negative (down)**.

Now add up the arrows in each diagram. Only D has the left/right parts canceling out while the down arrow beats the up arrow.
::::
:::::

## 2.5 Newton's Second Law

When the forces acting on a system are unbalanced, the system will accelerate according to the equation below.
$$
F_{\text{net}} = ma
$$

 ![[Calculating acceleration.svg|center]]

An $8~\mathrm{kg}$ box on a frictionless floor is pulled with $30~\mathrm{N}$. We can look at the horizontal and vertical directions :explain[separately]{#second-law-directions}.

::::explain{#second-law-directions title="One equation per direction"}
$F_\text{net} = ma$ is really two equations at once, one for left/right and one for up/down. Forces that point sideways can only cause sideways acceleration, and forces that point up and down can only cause up and down acceleration.

**Horizontally**, the only force is the $30~\mathrm{N}$ pull, so it's the whole net force. That gives us the acceleration.

**Vertically**, the box isn't jumping off the floor or sinking into it, so the vertical acceleration is $0$. That tells us the normal force has to exactly cancel gravity ($8 \cdot 10 = 80~\mathrm{N}$).

Splitting it up like this is the move for almost every force problem: pick your directions, write $F_\text{net} = ma$ for each one, and solve.
::::

:::steps{title="Horizontal direction"}
$$
F_{\text{net}} = ma
$$
The only horizontal force is the $30~\mathrm{N}$ pull.

---

$$
30 = (8)a
$$
Plug in the net force and the mass.

---

$$
a=3.75~\mathrm{m/s^2}
$$
Divide both sides by $8$.
:::

:::steps{title="Vertical direction"}
$$
F_N - mg = ma
$$
Up is positive, so the normal force is positive and gravity is negative.

---

$$
F_N - 80 = 0
$$
$mg = 8 \cdot 10 = 80~\mathrm{N}$, and the box doesn't accelerate vertically, so $a = 0$.

---

$$
F_N = 80~\mathrm{N}
$$
Add $80$ to both sides.
:::

---

![[Multiple masses.svg|center]]

A hanging mass $m_1$ pulls a mass $m_2$ across a frictionless table. If we treat :explain[both masses as one system]{#system-trick}, we only need one equation.

::::explain{#system-trick title="Treating connected masses as one system"}
The two blocks are tied together, so they move together: same speed, same size of acceleration. That lets us draw a circle around *both* of them and call it one system.

Here's the nice part: the tension in the string is pulling $m_2$ toward the pulley and pulling $m_1$ upward, and inside the system those two tension forces cancel out. They're internal forces. So we never need to know the tension.

What's left?

- The weight of $m_1$, $m_1 g$, is what makes everything move.
- The weight of $m_2$ is cancelled by the table's normal force, so it doesn't speed anything up.
- The thing being accelerated is the *total* mass, $m_1 + m_2$.

So $F_\text{net} = ma$ becomes $m_1 g = (m_1 + m_2)a$.
::::

:::steps{title="Acceleration of the two masses"}
$$
F_{\text{net}} = ma
$$
Start with Newton's second law for the whole system.

---

$$
m_1g = (m_1+m_2)a
$$
The only force that isn't cancelled is the weight of the hanging mass, and it has to accelerate both masses.

---

$$
a = \frac{m_1 g}{m_1+m_2}
$$
Divide both sides by $m_1 + m_2$.
:::

### Atwood Machine

An Atwood machine is an ideal (massless and frictionless) pulley with a mass hanging on both sides. Both sides have the same magnitude (ignore sign) of acceleration.

$$
\sum F_{\text{sys}} = m_1g - m_2g = (m_1 + m_2)a
$$

Here $m_1$ is the heavier mass, so it's the one that falls.

---

![[Simple atwood pulley practice.svg|40%|center]]

An $11~\mathrm{kg}$ mass and a $15~\mathrm{kg}$ mass are attached by a string that passes over a pulley as shown above.

> [!info] Finding the acceleration of the system.
>
> :::steps{title="Atwood machine"}
> $$
> m_2g - m_1g = (m_1 + m_2)a
> $$
> The $15~\mathrm{kg}$ mass ($m_2$) is heavier, so it falls and pulls the $11~\mathrm{kg}$ mass up. Its weight drives the system and the lighter one's weight fights it. Both masses get accelerated.
>
> ---
>
> $$
> a = \frac{m_2g - m_1g}{m_1 + m_2}
> $$
> Divide both sides by the total mass.
>
> ---
>
> $$
> a = \frac{(15\cdot10)-(11\cdot10)}{11+15}
> $$
> Plug in the masses and $g = 10$.
>
> ---
>
> $$
> a = \frac{40}{26}
> $$
> $150 - 110 = 40$ and $11 + 15 = 26$.
>
> ---
>
> $$
> a = 1.538~\mathrm{m/s^2}
> $$
> The $15~\mathrm{kg}$ mass speeds up going down and the $11~\mathrm{kg}$ mass speeds up going up, both at about $1.5~\mathrm{m/s^2}$.
> :::

### Practice Question

 ![[Three mass acceleration.svg|100%]]

> [!question]- Solve for the mass of $m_2$.
>
> :::steps{title="Solving for the mass on the ramp"}
> $$
> m_1g - m_2g\cdot\sin\theta - m_3g = (m_1+m_2+m_3)a
> $$
> Treat all three masses as one system moving with $m_1$ going down. $m_1$'s weight pulls the system forward. $m_3$'s weight pulls back, and so does the part of $m_2$'s weight that points down the ramp, $m_2 g\sin\theta$. The ramp is frictionless, so that's it.
>
> ---
>
> $$
> m_1g - m_2g \cdot \sin\theta -m_3g =m_1a + m_2a + m_3a
> $$
> Distribute the $a$ on the right side so we can find every term with $m_2$ in it.
>
> ---
>
> $$
> m_1g - m_3g - m_1a -m_3a = m_2a + m_2g \cdot\sin\theta
> $$
> Move all the $m_2$ terms to the right side and everything else to the left.
>
> ---
>
> $$
> m_1g - m_3g - m_1a -m_3a = m_2(a+g\cdot\sin\theta)
> $$
> Factor $m_2$ out of the right side.
>
> ---
>
> $$
> m_2 = \frac{m_1g - m_3g - m_1a -m_3a}{a+g\cdot\sin\theta}
> $$
> Divide both sides by $(a + g\sin\theta)$ to get $m_2$ by itself.
>
> ---
>
> $$
> m_2 = \frac{(0.106\cdot 10) - (0.0605 \cdot 10) - (0.106 \cdot 0.128) - (0.0605 \cdot 0.128)}{(0.128 + 10 \cdot\sin 8^\circ)}
> $$
> Plug in $m_1 = 0.106~\mathrm{kg}$, $m_3 = 0.0605~\mathrm{kg}$, $a = 0.128~\mathrm{m/s^2}$, $\theta = 8^\circ$ and $g = 10$.
>
> ---
>
> $$
> m_2 = \frac{0.4337}{1.5197}
> $$
> Top: $1.06 - 0.605 - 0.0136 - 0.0077 = 0.4337$. Bottom: $\sin 8^\circ \approx 0.139$, so $0.128 + 1.392 = 1.520$.
>
> ---
>
> $$
> m_2 = 0.285~\mathrm{kg}
> $$
> It's a mass, so the unit is kilograms.
> :::

:::::quiz
Two blocks are connected by a string over a pulley like the Atwood machine above: $3~\mathrm{kg}$ on one side and $5~\mathrm{kg}$ on the other. What is the acceleration of the blocks? (Use $g = 10~\mathrm{m/s^2}$.)

::::choice
$10~\mathrm{m/s^2}$

---
That's freefall. The lighter block is pulling back on the heavier one, so it falls slower than if it were alone.
::::

::::choice{correct}
$2.5~\mathrm{m/s^2}$
::::

::::choice
$4~\mathrm{m/s^2}$

---
This is $\frac{(5-3)\cdot 10}{5}$, dividing by only the heavier mass. The net force has to accelerate *both* blocks, so divide by the total mass.
::::

::::choice
$6.25~\mathrm{m/s^2}$

---
This is $\frac{5 \cdot 10}{8}$, which only counts the heavier block's weight. The lighter block's weight pulls the other way, so subtract it.
::::

::::solution
:::steps
$$
m_2 g - m_1 g = (m_1 + m_2)a
$$
The heavy side's weight pulls one way, the light side's weight pulls the other way, and the total mass gets accelerated.

---

$$
50 - 30 = 8a
$$
$5 \cdot 10 = 50$, $3 \cdot 10 = 30$ and $3 + 5 = 8$.

---

$$
a = 2.5~\mathrm{m/s^2}
$$
$20 / 8 = 2.5$.
:::
::::
:::::

## 2.6 Gravitational Force

How do you calculate the force of gravity if you are not on Earth or really far from it?

$$
F_\text{grav} = \frac{Gm_1m_2}{r^2}
$$

$G$ is the universal gravitational constant, and $r$ is the distance between the :explain[centers of the two objects]{#r-is-center}.

::::explain{#r-is-center title="r is center to center"}
The $r$ in Newton's law of gravitation is measured from the center of one object to the center of the other, not from the surface.

That matters a lot for planets and satellites. A satellite $780~\mathrm{km}$ above the ground isn't $780~\mathrm{km}$ away from the Earth as far as gravity is concerned. It's $780~\mathrm{km}$ *plus* the radius of the Earth ($6378~\mathrm{km}$) away from the Earth's center. We use exactly that in the orbit problem in 2.9.

Also notice the $r^2$ on the bottom. If you double the distance, the force drops to a quarter. Triple it and the force is a ninth. That's called an inverse-square law.
::::

$$
G = 6.67430\times 10^{-11}~\mathrm{m^3 kg^{-1} s^{-2}}
$$

:::::quiz
Two asteroids pull on each other with a gravitational force $F$. If the distance between their centers is doubled, what is the new force?

::::choice
$2F$

---
Gravity gets weaker as things get farther apart, not stronger.
::::

::::choice
$\frac{F}{2}$

---
The distance is squared in the bottom of the formula, so doubling it divides the force by $2^2$, not just $2$.
::::

::::choice{correct}
$\frac{F}{4}$
::::

::::choice
$F$

---
The $r$ is in the formula, so changing the distance definitely changes the force.
::::

::::solution
:::steps
$$
F = \frac{Gm_1m_2}{r^2}
$$
Start with the original force.

---

$$
F_\text{new} = \frac{Gm_1m_2}{(2r)^2}
$$
Swap $r$ for $2r$. Nothing else changes.

---

$$
F_\text{new} = \frac{Gm_1m_2}{4r^2}
$$
$(2r)^2 = 4r^2$. The $2$ gets squared too!

---

$$
F_\text{new} = \frac{1}{4}\cdot\frac{Gm_1m_2}{r^2} = \frac{F}{4}
$$
Pull the $\frac{1}{4}$ out front and what's left is the original force.
:::
::::
:::::

## 2.7 Kinetic and Static Friction

**Static friction** is the friction between two surfaces that are *not* sliding against each other. A tire rolling without skidding uses static friction, since the bottom of the tire isn't sliding on the road. **Kinetic friction** is sliding friction between two objects.

An object can be accelerating due to static friction. When a car speeds up, the engine spins the wheels, and the road's static friction on the tires is the force that actually pushes the car forward. Imagine a car moving $20~\mathrm{mph}$ down a road and we cut the engine. What forces are acting on it? There is gravity ($mg$) going down, but that is canceled out by normal force ($F_\text{N}$). What's left is :explain[rolling resistance]{#rolling-resistance} and air resistance, which slowly decelerate the car to a stop.

::::explain{#rolling-resistance title="What actually slows a coasting car"}
When a car is coasting, the tires are rolling, not sliding, so kinetic friction from skidding isn't involved. The car slows down for two main reasons:

- **Rolling resistance.** Tires squish a little where they touch the road and spring back as they roll. That squishing and un-squishing wastes a bit of energy every turn, and it acts like a small backward force.
- **Air resistance (drag).** The car has to push air out of the way, and that gets a lot bigger the faster you go.

Neither one is something we usually calculate in AP Physics 1, but they're why a car doesn't coast forever like Newton's First Law might make you expect.
::::

Anyway, kinetic friction is the kind we deal with most in these problems. Both kinds depend on the types of surfaces that are interacting. This factor is called the coefficient of friction, $\mu$. Kinetic friction always points against the direction of sliding.

$$
|\vec{F}_{f}|\le\mu_s|\vec{F}_{N}| \qquad |\vec{F}_{f}| = \mu_k|\vec{F}_{N}|
$$

The first one is for **static** friction. Static friction is only as strong as it :explain[needs to be]{#static-friction-max} to keep things from sliding, up to a maximum of $\mu_s F_N$. The second is for **kinetic** friction. Once something is sliding, the friction is always exactly $\mu_k$ times the normal force.

::::explain{#static-friction-max title="Why static friction is an inequality"}
Picture pushing on a heavy couch. At first you push gently and it doesn't move. Static friction is pushing back on the couch exactly as hard as you're pushing, so the net force is zero.

Push a little harder, and static friction pushes back a little harder too. It keeps matching you, but only up to a point. That limit is $\mu_s F_N$. Once your push is bigger than that, friction can't keep up and the couch starts to slide.

So $\mu_s F_N$ isn't "the" static friction force. It's the **most** static friction can ever be. The actual force is whatever's needed to stop sliding, which is why it's written with $\le$.

Once the couch is sliding, kinetic friction takes over and it's just $\mu_k F_N$, no matter how hard you push. $\mu_k$ is usually a bit smaller than $\mu_s$, which is why it's easier to keep something sliding than to get it started.
::::

---

![[Sloped normal force and tension diagram.svg|center]]

$m_1$ sits on a ramp with friction and is connected over a pulley to the hanging mass $m_2$. There are :explain[two forces along the ramp]{#ramp-components} pulling back on $m_1$: the downhill part of its weight and friction.

::::explain{#ramp-components title="Splitting gravity on a ramp"}
On a ramp we tilt our axes so one points along the ramp and one points straight out of it. Gravity still points straight down, so it gets split into two parts:

- **Along the ramp:** $m_1 g\sin\theta$. This is the part trying to slide the block down the ramp.
- **Into the ramp:** $m_1 g\cos\theta$. The ramp pushes back against this, so the normal force is $F_N = m_1 g\cos\theta$.

A quick way to remember which is which: if $\theta = 0$ (flat ground), nothing should pull the block sideways, and $\sin 0 = 0$. All of gravity goes into the floor, and $\cos 0 = 1$.

Friction depends on the normal force, so $F_f = \mu F_N = \mu m_1 g\cos\theta$. Friction points opposite to the way the block slides, which here is back down the ramp.
::::

:::steps{title="Acceleration up the ramp"}
$$
F_\text{net} = ma
$$
Treat both masses as one system. Positive is the direction they move: $m_2$ falling and $m_1$ sliding up the ramp.

---

$$
m_2g - F_{g\parallel} - F_\text{f} = (m_1 + m_2)a
$$
$m_2$'s weight drives the system. Two forces fight it: the part of $m_1$'s weight that points down the ramp, $F_{g\parallel}$, and friction, $F_\text{f}$.

---

$$
F_{g\parallel} = m_1g\sin\theta
$$
The downhill part of $m_1$'s weight.

---

$$
F_\text{f} = \mu F_N = \mu \cdot m_1g\cos\theta
$$
Friction is $\mu$ times the normal force, and on a ramp the normal force is $m_1 g\cos\theta$.

---

$$
m_2g-m_1g\sin\theta - \mu\cdot m_1g \cos\theta = (m_1+m_2)a
$$
Substitute both into the system equation. Divide by $(m_1 + m_2)$ to get the acceleration.
:::

:::::quiz
A box is sitting still on a floor. The coefficient of static friction is $\mu_s = 0.5$ and the normal force is $100~\mathrm{N}$. You push sideways with $20~\mathrm{N}$ and the box doesn't move. How big is the static friction force?

::::choice
$50~\mathrm{N}$

---
$50~\mathrm{N}$ is the *maximum* static friction could be. Right now it only needs to cancel your push.
::::

::::choice{correct}
$20~\mathrm{N}$
::::

::::choice
$0~\mathrm{N}$

---
If there were no friction, your $20~\mathrm{N}$ push would make the box slide. Something has to cancel it.
::::

::::choice
$70~\mathrm{N}$

---
Friction doesn't add onto your push. It points the other way, and it's only as big as it needs to be.
::::

::::solution
The box isn't moving, so the net force on it is zero. The only sideways forces are your $20~\mathrm{N}$ push and static friction, so friction must be exactly $20~\mathrm{N}$ the other way.

The $\mu_s F_N = 0.5 \cdot 100 = 50~\mathrm{N}$ number tells you the most static friction *could* push back. Since $20 < 50$, the box stays put. You'd need to push with more than $50~\mathrm{N}$ to get it sliding.
::::
:::::

## 2.8 Spring Forces

A spring constant is the property that tells us how stiff the spring is. The higher spring constant, the harder the spring will pull for the same distance.

$$
F = kx
$$

$F$ is the force the spring exerts, $k$ is the spring constant, $x$ is distance the spring stretches or compresses. The spring always pulls or pushes back toward its natural length, which is why you'll sometimes see this written as $F = -kx$. This is called :explain[Hooke's law]{#hookes-law}.

::::explain{#hookes-law title="Reading the spring graph"}
If you hang more and more weight on a spring and measure how far it stretches each time, the force vs stretch graph comes out as a straight line through the origin. That's what $F = kx$ says: double the stretch, double the force.

The slope of that line is $\dfrac{\Delta F}{\Delta x} = k$. Its units are newtons per meter, so a spring with $k = 200~\mathrm{N/m}$ needs $200~\mathrm{N}$ to stretch it one meter (or $2~\mathrm{N}$ to stretch it one centimeter).

The minus sign in $F = -kx$ just means the spring's force is opposite to the stretch. Pull it to the right and it pulls back to the left. Squish it and it pushes back out. When you only care about the size of the force, you can drop the minus sign.
::::

When graphing the force applied to the spring vs the distance the spring stretches, the slope of that line is the spring constant. The unit is $\mathrm{N/m}$.

```graph
title: Force vs stretch for two springs
fns:
  - fn: 200x
    label: k = 200 N/m
  - fn: 80x
    label: k = 80 N/m
x: [0, 0.5]
y: [0, 110]
xlabel: stretch (m)
ylabel: force (N)
caption: The stiffer spring has the steeper line. Same stretch, more force.
```

:::::quiz
A spring stretches $0.10~\mathrm{m}$ when you hang a $2~\mathrm{kg}$ mass on it. What is its spring constant? (Use $g = 10~\mathrm{m/s^2}$.)

::::choice
$20~\mathrm{N/m}$

---
$20~\mathrm{N}$ is the force. To get $k$, you still have to divide by how far it stretched.
::::

::::choice
$2~\mathrm{N/m}$

---
This divides the force by $10$ instead of by $0.10$. Stretching only a tenth of a meter means the spring is stiff, so $k$ should be big.
::::

::::choice{correct}
$200~\mathrm{N/m}$
::::

::::choice
$0.2~\mathrm{N/m}$

---
This multiplies force and stretch. $k$ is force *divided by* stretch.
::::

::::solution
When the mass hangs still, the spring's upward force cancels the mass's weight, so $F = mg$.

:::steps
$$
kx = mg
$$
The spring force balances the weight.

---

$$
k(0.10) = (2)(10)
$$
Plug in the stretch and the weight.

---

$$
k = \frac{20}{0.10} = 200~\mathrm{N/m}
$$
Divide both sides by $0.10$.
:::
::::
:::::

## 2.9 Circular Motion

An object moving in a circle is accelerating even if it is moving at a constant speed, because its :explain[direction keeps changing]{#circular-accel}. The direction of the acceleration is towards the center of the circular path. This is called **centripetal acceleration**. This acceleration toward the center is caused by a net force exerted on the object in the direction of the center.

::::explain{#circular-accel title="Constant speed, but still accelerating"}
Acceleration is the change in *velocity*, and velocity has a direction. If you're going around a circle at a steady $10~\mathrm{m/s}$, your speed isn't changing, but the direction you're moving is changing every instant. That change in direction counts as acceleration.

Which way does it point? Imagine swinging a ball on a string. If you let go, the ball flies off in a straight line, tangent to the circle. To keep it on the circle, the string has to keep pulling it *inward*, toward your hand. So the acceleration (and the net force causing it) points toward the center.

"Centripetal" literally means "center-seeking". It isn't a new kind of force, it's a job that some force has to do: tension for the ball on a string, gravity for the Moon, friction for a car turning a corner.
::::

The gravity that keeps the moon in orbit around the earth plays the same role as the tension of a string pulling a ball that is spinning in a circle. Both are the force pointing to the center.

$$
a_c = \frac{v^2}{r}
$$

^7f4feb

$a_c$ is the centripetal acceleration, $v$ is the tangential speed (in a straight line), and $r$ is the radius of the circular path.

---

> [!question]- For a satellite to maintain a circular orbit $780~\mathrm{km}$ above the Earth's surface, what tangential speed must it possess? The mass of the earth is $5.972 \times 10^{24}~\mathrm{kg}$ and the radius of the earth is $6.378\times 10^6~\mathrm{m}$
>
> :::steps{title="Orbital speed"}
> $$
> F_\text{net} = ma
> $$
> The only force on the satellite is Earth's gravity, and it's providing the centripetal acceleration.
>
> ---
>
> $$
> \frac{Gm_1m_2}{r^2} = m_1 \cdot \frac{v^2}{r}
> $$
> On the left is the gravitational force. On the right, $m_1$ is the satellite and the acceleration is $\frac{v^2}{r}$.
>
> ---
>
> $$
> \frac{Gm_2}{r} = v^2
> $$
> Divide both sides by $m_1$ (the satellite's mass cancels!) and multiply both sides by $r$.
>
> ---
>
> $$
> v = \sqrt{\frac{Gm_2}{r}}
> $$
> Square root both sides. Notice the answer doesn't depend on how heavy the satellite is.
>
> ---
>
> $$
> r = 7.8\times10^5 + 6.378\times 10^6 = 7.158\times10^6~\mathrm{m}
> $$
> $r$ is measured from the center of the Earth, so add the Earth's radius to the height above the surface.
>
> ---
>
> $$
> v = \sqrt{\frac{G \cdot 5.972 \times 10^{24}}{7.158\times10^6}} = 7462~\mathrm{m/s}
> $$
> Plug in and calculate. That's about $27{,}000~\mathrm{km/h}$!
> :::

> [!question]
>
> ![[Unit 3 – Work, Energy, and Power 2026-04-18 22.29.18.svg|30%|center]]
>
> An object $m_2$ orbits a much bigger object $m_1$ at $5500~\mathrm{m/s}$, $8.1\times10^{8}~\mathrm{m}$ from its center.
>
> > [!example]- Calculate the mass of the object being orbited
> >
> > :::steps{title="Mass of the central object"}
> > $$
> > \frac{Gm_{1}m_{2}}{r^{2}} = m_{2}a
> > $$
> > Gravity from $m_1$ is the net force on the orbiting object $m_2$.
> >
> > ---
> >
> > $$
> > \frac{Gm_{1}m_{2}}{r^{2}} = m_{2}\cdot \frac{v^{2}}{r}
> > $$
> > It's moving in a circle, so its acceleration is centripetal.
> >
> > ---
> >
> > $$
> > \frac{Gm_{1}}{r} = v^{2}
> > $$
> > Cancel $m_2$ from both sides and multiply both sides by $r$.
> >
> > ---
> >
> > $$
> > m_{1} = \frac{v^{2}\cdot r}{G}
> > $$
> > Multiply both sides by $r$ and divide by $G$.
> >
> > ---
> >
> > $$
> > m_{1} = \frac{5500^{2}\cdot8.1\times10^{8}}{6.674\times10^{-11}}
> > $$
> > Plug in the speed, the distance and $G$.
> >
> > ---
> >
> > $$
> > m_{1} = 3.671\times 10^{26}~\mathrm{kg}
> > $$
> > $5500^2 = 3.025\times10^{7}$, times $8.1\times10^8$ is $2.450\times10^{16}$, and dividing by $G$ gives the mass in kilograms.
> > :::

:::::quiz
A ball on a string is swung in a horizontal circle at a constant speed. If the string snaps, which way does the ball go?

::::choice
Straight outward, away from the center.

---
There's no force pushing the ball outward. Once the string snaps, nothing is pushing or pulling it sideways at all.
::::

::::choice
Toward the center.

---
The string was what pulled it toward the center. Without the string, nothing is pulling it in.
::::

::::choice{correct}
In a straight line along the direction it was moving (tangent to the circle).
::::

::::choice
It keeps moving in a circle for a little while, then flies outward.

---
The circle only happens because a force keeps pulling the ball inward. Take away the force and the circle stops right away.
::::

::::solution
While the ball is going around, the string pulls it toward the center, and that's the only thing bending its path into a circle. The moment the string breaks, there's no horizontal force at all. By Newton's First Law, the ball keeps moving with the velocity it had at that instant, and that velocity points along the circle, tangent to it. So it flies off in a straight line in the direction it was already going.
::::
:::::

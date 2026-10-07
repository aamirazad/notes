---
created: 2026-04-19T16:00:00
modified: 2026-04-26T11:29:00
title: "Unit 5 – Torque and Rotational Dynamics (original)"
unlisted: true
original: true
date modified: 2026-04-26T11:29:00
course: "[[AP Physics]]"
publish: true
---
# Unit 5 – Torque and Rotational Dynamics

⚠️ UNFINISHED ⚠️

## 5.1 Rotational Kinematics

**Angular displacement** is the measurement of the angle through which a point on a rigid system rotates about a specific axis. Its unit is $\theta$

$$
\Delta \theta = \theta_{f} - \theta_{i}
$$

**Average angular velocity** is the average rate at which angular position changes with respect to time. Its unit is $\text{rad}/\text{s}$ written as omega, $\omega$.

$$
\omega _\text{avg} = \frac{\Delta \theta}{\Delta t}
$$

**Average angular acceleration** is the average rate at which angular velocity changes with respect to time. Its unit is $\text{rad}/{s^2}$ written as alpha, $\alpha$.

$$
\alpha _\text{avg} = \frac{\Delta \omega}{\Delta t}
$$

![[Unit 5 – Torque and Rotational Dynamics 2026-04-25 10.33.25.svg|100%]]

### Kinematic Equations

Rotating objects share similar equations to that of [[Atlas/Notes/Unit 1 – Kinematics#1.2 Displacement, Velocity, and Acceleration|linear equations]].

$$
\theta = \theta_{0} + \omega_{0}t + \frac{1}{2}\alpha t^{2}
$$

$$
\omega = \omega_{0} + \alpha t
$$

$$
\omega^{2} = \omega_{0}^{2} + 2\alpha(\theta-\theta_{0})
$$

## 5.2 Connecting Linear and Rotational Motion

Radians are a unit of measure for angles ($\theta$ theta)

$$
\theta = \frac{s}{r}
$$

### Example Problem

A wheel has a radius of $130.0~\mathrm{mm}$, how far will the wheel travel in one revolution?

$$
\Delta s = 0.13~\mathrm{m} \cdot 2\pi
$$
$$
\Delta s = 0.817~\mathrm{m}
$$

This means if you roll the wheel on the ground it will travel 0.817 meters on the ground in one revolution.

$$
\frac{\Delta S}{\Delta t} = r \frac{\Delta\theta}{\Delta t}
$$
$$
v = r\omega
$$
$$
a_{T} = r\alpha
$$

### Example Problem

A bicycle wheel with a diameter of 0.4 meters rotates counterclockwise at 100 revolutions per minute.

> [!info] What is the linear speed of a point on the rim of the bicycle wheel?
>
> $$
> v = r\omega
> $$
> $$
> r = 0.2~\mathrm{m}
> $$
> $$
> \omega = \frac{100~\mathrm{rev}}{1~\mathrm{min}} \cdot \frac{1~\mathrm{min}}{60~\mathrm{\sec}} \cdot \frac{2\pi~\mathrm{rad}}{1~\mathrm{rev}} = 10.472~\mathrm{\frac{rad}{\sec}}
> $$
> $$
> v = 0.2 \cdot 10.472
> $$
> $$
> v = 2.094~\mathrm{m/s}
> $$
>

> [!info] What angular acceleration will the bicycle wheel have if it speeds up to 150 revolutions per minute in 20 seconds?
>
> $$
> \omega = \omega_{0} + \alpha t
> $$
> $$
> \alpha = \frac{w-w_{0}}{t}
> $$
> $$
> w_{0} = 10.472~\mathrm{\frac{rad}{\sec}}
> $$
> $$
> w = \frac{150~\mathrm{rev}}{1~\mathrm{\min}} \cdot \frac{1~\mathrm{\min}}{60~\mathrm{\sec}} \cdot \frac{2\pi~\mathrm{rad}}{1~\mathrm{rev}} = 15.708~\mathrm{\frac{rad}{\sec}}
> $$
> $$
> \alpha = \frac{15.708-10.472}{20}
> $$
> $$
> \alpha = 0.262~\mathrm{\frac{rad}{\sec^{2}}}
> $$

> [!info] Through what linear distance does the point on the rim of the bicycle wheel travel during those 20 seconds?
>
> $$
> \theta = \theta_{0} + \omega_{0}t + \frac{1}{2}\alpha t^{2}
> $$
> $$
> \Delta \theta = \omega_{0}t + \frac{1}{2}\alpha t^{2}
> $$
> $$
> \Delta\theta = 10.472\cdot20 + \frac{1}{2}\cdot0.262\cdot20^{2}
> $$
> $$
> \Delta\theta = 261.799~\mathrm{rad}
> $$
> $$
> \theta = \frac{s}{r}
> $$
> $$
> s = \theta r
> $$
> $$
> s = 261.799 \cdot 0.2 
> $$
> $$
> s = 52.360~\mathrm{m}
> $$

## 5.3 Torque

### Force Diagrams

Usually, we are working with [[Atlas/Notes/Unit 2 – Force and Translational Dynamics#Free Body Diagrams|Free body diagrams]] which show all the forces that are acting on the box. Force diagrams are slightly different, they show where each force is applied on the box.

![[Unit 5 – Torque and Rotational Dynamics 2026-04-26 11.37.00.svg|Unit 5 – Torque and Rotational Dynamics 2026-04-26 11.37.00.svg]]

### Calculating Torque

Forces cause change in motion, toque causes change in rotational motion.

$$
\tau = r_{\perp} F = r F \sin \theta
$$

Although this equation looks complicated at first, it is simply saying the torque of a force is equal to the amount of force times the distance from the center of the rotation. The radius is how far the force is from the center of the rotation. The $\sin$ part establishes that the force must be perpendicular to the object.

$$
\tau_{1} = \tau_{2}
$$

### Example Problem

![[Unit 5 – Torque and Rotational Dynamics 2026-04-26 11.21.12.svg|100%]]

An object weighing $140~\mathrm{N}$ is set on a rigid beam of negligible mass at a distance of 3 m from a pivot, as shown.

A vertical force is to be applied to the other end of the beam (at a distance of $4~\mathrm{m}$ from the pivot) to keep the beam at rest and horizontal. What is the magnitude, $F$, of the force required?

$$
\tau_{1} = \tau_{2}
$$
$$
r_{1}F_{1} = r_{2}F_{2}
$$
$$
F_{2} = \frac{r_{1}F_{1}}{r_{2}}
$$
$$
F_{2} = \frac{3\cdot140}{4}
$$
$$
F_{2} = 105
$$

⚠️ UNFINISHED ⚠️
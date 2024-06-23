---
layout: page
name: mount and orient controller
sidebar: other_sidebar
categories: "assembly"
tags: [drones, hardware]
summary: ""
excerpt_separator: <!--more-->
permalink: drone_mount_and_orient_controller.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/
excerpt_separator: <!--more-->
updated: 2021-10-06 7:50 AM 
---
# Mounting the Flight Controller

## Orientation

Almost all Flight Controllers have a *heading mark arrow* (shown below).
The controller should be placed on the frame top-side up, oriented so that the arrow points towards the front of the vehicle (on all aircraft frames - airplane, multirotor, VTOL, ground vehicles etc.).

![FC Heading Mark](images/drones/qgc/setup/sensor/fc_heading_mark_1.png)

![FC Orientation](images/drones/qgc/setup/sensor/fc_orientation_1.png)

:::note
If the controller cannot be mounted in the recommended/default orientation (e.g. due to physical constraints) you will need to configure the autopilot software with the orientation that you actually used: [Flight Controller Orientation](../config/flight_controller_orientation.md).
:::

## Vibration Isolation

Flight Control boards with in-built accelerometers or gyros are sensitive to vibrations.
Some boards include in-built vibration-isolation, while others come with *mounting foam* that you can use to isolate the controller from the vehicle.

![Pixhawk Mounting foam](images/drones/hardware/mounting/3dr_anti_vibration_mounting_foam.png)
*Vibration damping foam*

You should use the mounting strategy recommended in your flight controller documentation.

:::tip
[Log Analysis using Flight Review > Vibration](../log/flight_review.md#vibration) explains how to test whether vibration levels are acceptable, and [Vibration Isolation](../assembly/vibration_isolation.md) suggests a number of possible solutions if there is a problem.
:::

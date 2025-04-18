---
layout: page
name: quick start cube
sidebar: other_sidebar
categories: "drones"
tags: [drones]
summary: ""
excerpt_separator: <!--more-->
permalink: drone_quick_start_cube.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/
excerpt_separator: <!--more-->
updated: 2021-10-06 7:50 AM 
---
# Cube Wiring Quick Start

:::warning
PX4 does not manufacture this (or any) autopilot.
Contact the [manufacturer](https://cubepilot.org/#/home) for hardware support or compliance issues.

Note also that while [Cube Black](../flight_controller/pixhawk-2.md) is [fully supported by PX4](../flight_controller/autopilot_pixhawk_standard.md), support for [Cube Yellow](../flight_controller/cubepilot_cube_yellow.md) and [Cube Orange](../flight_controller/cubepilot_cube_orange.md) is [Experimental](../flight_controller/autopilot_experimental.md).
:::

This quick start guide shows how to power the *Cube*<sup>&reg;</sup> flight controllers and connect their most important peripherals.

<img src="images/drones/flight_controller/cube/orange/cube_orange_hero.jpg" width="350px" /> <img src="images/drones/flight_controller/cube/cube_black_hero.png" width="350px" /> <img src="images/drones/flight_controller/cube/yellow/cube_yellow_hero.jpg" width="150px" />

:::tip
The instructions apply to all Cube variants, including [Cube Black](../flight_controller/pixhawk-2.md), [Cube Yellow](../flight_controller/cubepilot_cube_yellow.md) and [Cube Orange](../flight_controller/cubepilot_cube_orange.md).
Further/updated information may be available in the [Cube User Manual](https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual) (Cube Docs).
:::

## Accessories

Cube comes with most (or all) of the accessories you will need when [purchased](../flight_controller/pixhawk-2.md#stores). 

![Cube Accessories](images/drones/flight_controller/cube/cube_accessories.jpg)

The exception is that some kits do not include a GPS, which will have to be purchased separately ([see below](#gps)).


## Wiring Overview

The image below shows how to connect the most important sensors and peripherals. We'll go through each of these in detail in the following sections.

![Cube - Wiring Overview](images/drones/flight_controller/cube/cube_wiring_overview.jpg)

1. [Telemetry System](#telemetry) — Allows you to plan/run missions, and control and monitor the vehicle in real time. Typically includes telemetry radios, tablet/PC and ground station software.
2. [Buzzer](#buzzer) — Provides audio signals that indicate what the UAV is doing
3. [Remote Control Receiver System](#rc_control) — Connects to a hand-held transmitter that an operator can use to manually fly the vehicle (shown is a PWM receiver with PWM->PPM converter).
4. (Dedicated) [Safety switch](#safety_switch) — Press and hold to lock and unlock motors. Only required if you are not using the recommended [GPS](#gps) with inbuilt safety switch.
5. [GPS, Compass, LED, Safety Switch](#gps) — The recommended GPS module contains GPS, Compass, LED and Safety Switch. 
6. [Power System](#power) — Powers Cube and the motor ESCs. Consists of LiPo battery, power module, and optional battery warning system (audio warning if battery power goes below a predefined level). 

:::note
The port labeled `GPS2` maps to `TEL4` in PX4 (i.e. if connecting to the port labeled `GPS2`, assign the [serial port configuration parameter](../peripherals/serial_configuration.md) for the connected hardware to `TEL4`). 
:::

:::tip
More information about available ports can be found here: [Cube > Ports](../flight_controller/pixhawk-2.md#ports).
:::

## Mount and Orient Controller

Mount the Cube as close as possible to your vehicle’s center of gravity, 
ideally oriented top-side up and with the arrow pointing towards the front of the vehicle (note the *subtle* arrow marker on top of the cube)

![Cube Mount - Direction of Front](images/drones/flight_controller/cube/cube_mount_front.jpg)

:::note
If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: [Flight Controller Orientation](../config/flight_controller_orientation.md).
:::

The Cube can be mounted using either vibration-damping foam pads (included in the kit) or mounting screws. 
The mounting screws in the Cube accessories are designed for a 1.8mm thick frameboard. 
Customized screws are supposed to be M2.5 with thread length inside Cube in range 6mm~7.55mm.

![Cube Mount - Mounting Plate](images/drones/flight_controller/cube/cube_mount_plate_screws.jpg)


<a id="gps"></a>
## GPS + Compass + Safety Switch + LED

The recommended GPS modules are the *Here* and [Here+](../gps_compass/rtk_gps_hex_hereplus.md), both of which incorporate a GPS module, Compass, Safety Switch and [LEDs](../getting_started/led_meanings.md).
The difference between the modules is that *Here+* supports centimeter level positioning via [RTK](../advanced_features/rtk-gps.md). Otherwise they are used/connected in the same way.

:::warning
The [Here+](../gps_compass/rtk_gps_hex_hereplus.md) has been superseded by the [Here3](https://www.cubepilot.org/#/here/here3) a [UAVCAN](../uavcan/README.md) RTK-GNSS that incorporate a compass and [LEDs](../getting_started/led_meanings.md) (but no safety switch).
See [UAVCAN](../uavcan/README.md) for documentation on how it should be connected.
:::

The module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference). It must be connected to the `GPS1` port using the supplied 8-pin cable.

The diagram below shows a schematic view of the module and its connections. 

![Here+ Connector Diagram](images/drones/flight_controller/cube/here_plus_connector.png)

:::note
The GPS module's integrated safety switch is enabled *by default* (when enabled, PX4 will not let you arm the vehicle).
To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).
:::

:::tip
If you want to use an old-style 6-pin GPS module, the kit comes with a cable that you can use to connect both the GPS and [Safety Switch](#safety_switch).
:::

<a id="safety_switch"></a>
## Safety Switch

The *dedicated* safety switch that comes with the Cube is only required if you are not using the recommended [GPS](#gps) (which has an inbuilt safety switch).

If you are flying without the GPS you must attach the switch directly to the `GPS1` port in order to be able to arm the vehicle and fly (or via a supplied cable if using an old-style 6-pin GPS).

## Buzzer

The buzzer plays [tones and tunes](../getting_started/tunes.md) that provide audible notification of vehicle status (including tones that are helpful for debugging startup issues, and that notify of conditions that might affect safe operation of the vehicle).

The buzzer should be connected to the USB port as shown (no further configuration is required).

![Cube Buzzer](images/drones/flight_controller/cube/cube_buzzer.jpg)


<a id="rc_control"></a>
## Radio Control

A [remote control (RC) radio system](../getting_started/rc_transmitter_receiver.md) is required if you want to *manually* control your vehicle (PX4 does not require a radio system for autonomous flight modes). 

You will need to [select a compatible transmitter/receiver](../getting_started/rc_transmitter_receiver.md) and then *bind* them so that they communicate (read the instructions that come with your specific transmitter/receiver). 

The instructions below show how to connect the different types of receivers.


### PPM-SUM / Futaba S.Bus receivers

Connect the ground(-),power(+),and signal(S) wires to the RC pins using the provided 3-wire servo cable.

![Cube - RCIN](images/drones/flight_controller/cube/cube_rc_in.jpg)


### Spektrum Satellite Receivers

Spektrum DSM, DSM2, and DSM-X Satellite RC receivers connect to the **SPKT/DSM** port.

![Cube - Spektrum](images/drones/flight_controller/cube/cube_rc_spektrum.jpg)

### PWM Receivers

The Cube cannot directly connect to PPM or PWM receivers that have an *individual wire for each channel*. 
PWM receivers must therefore connect to the **RCIN** port *via* a PPM encoder module, 
which may be purchased from hex.aero or proficnc.com.


## Power

Cube is typically powered from a Lithium Ion Polymer (LiPo) Battery via a Power Module (supplied with the kit) that is connected to the **POWER1** port.
The power module provides reliable supply and voltage/current indication to the board, and may *separately* supply power to ESCs that are used to drive motors on a multicopter vehicle.

A typical power setup for a Multicopter vehicle is shown below.

![Power Setup - MC](images/drones/flight_controller/cube/cube_wiring_power_mc.jpg)

:::Note
The power (+) rail of **MAIN/AUX** is *not powered* by the power module supply to the flight controller.
In order to drive servos for rudders, elevons, etc., it will need to be separately powered.

This can be done by connecting the power rail to a BEC equipped ESC, a standalone 5V BEC, or a 2S LiPo battery.
Ensure the voltage of servo you are going to use is appropriate!
:::

<a id="telemetry"></a>
## Telemetry System (Optional)

A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).

The communication channel is via [Telemetry Radios](../telemetry/README.md). The vehicle-based radio should be connected to the **TELEM1** port (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).

![Telemetry Radio](images/drones/flight_controller/cube/cube_schematic_telemetry.jpg)



## SD Card (Optional)

SD cards are highly recommended as they are needed to [log and analyse flight details](../getting_started/flight_reporting.md), to run missions, and to use UAVCAN-bus hardware.
Insert the Micro-SD card into Cube as shown (if not already present).

![Cube - Mount SDCard](images/drones/flight_controller/cube/cube_sdcard.jpg)

:::tip
For more information see [Basic Concepts > SD Cards (Removable Memory)](../getting_started/px4_basic_concepts.md#sd_cards).
:::

## Motors

Motors/servos are connected to the **MAIN** and **AUX** ports in the order specified for your vehicle in the [Airframe Reference](../airframes/airframe_reference.md). 

![Cube - Motor Connections](images/drones/flight_controller/cube/cube_main_aux_outputs.jpg)

:::note
This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type). 
:::

:::caution
The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.
:::

## Other Peripherals

The wiring and configuration of optional/less common components is covered within the topics for individual [peripherals](../peripherals/README.md).

:::note
If connecting peripherals to the port labeled `GPS2`, assign the PX4 [serial port configuration parameter](../peripherals/serial_configuration.md) for the hardware to `TEL4` (not GPS2).
:::


## Configuration

Configuration is performed using [QGroundContro](http://qgroundcontrol.com/). 

After downloading, installing and running *QGroundControl*, connect the board to your computer as shown.

![Cube - USB Connection to Computer](images/drones/flight_controller/cube/cube_usb_connection.jpg)

Basic/common configuration information is covered in: [Autopilot Configuration](../config/README.md).

QuadPlane specific configuration is covered here: [QuadPlane VTOL Configuration](../config_vtol/vtol_quad_configuration.md)

<!-- what about config of other vtol types and plane. Do the instructions in these ones above apply for tailsitters etc? --> 

### Bootloader Updates

If you get the [Program PX4IO(../getting_started/tunes.md#program-px4io) warning tone after flashing PX4 firmware, you may need to update the bootloader.

The safety switch can be used to force bootloader updates.
To use this feature de-power the Cube, hold down the safety switch, then power the Cube over USB.


## Further information

- [Cube Black](../flight_controller/pixhawk-2.md) 
- [Cube Yellow](../flight_controller/cubepilot_cube_yellow.md)
- [Cube Orange](../flight_controller/cubepilot_cube_orange.md)
- Cube Docs (Manufacturer):
  - [Cube Module Overview](https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview)
  - [Cube User Manual](https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual)
  - [Mini Carrier Board](https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board)

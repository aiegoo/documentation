---
layout: page
name: quick start durandal
sidebar: other_sidebar
categories: "drones"
tags: [drones]
summary: ""
excerpt_separator: <!--more-->
permalink: drone_quick_start_durandal.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/
excerpt_separator: <!--more-->
updated: 2021-10-06 7:50 AM 
---
# Durandal Wiring Quick Start

:::warning
PX4 does not manufacture this (or any) autopilot.
Contact the [manufacturer](https://shop.holybro.com/) for hardware support or compliance issues.
:::

This quick start guide shows how to power the Holybro [Durandal](../flight_controller/durandal.md)<sup>&reg;</sup> flight controller and connect its most important peripherals.

![Durandal](images/drones/flight_controller/durandal/durandal_hero.jpg)

## Unboxing

Durandal is sold bundled with a number of different combinations of accessories, including power modules: *PM02 V3* and *PM07*, and the *Pixhawk 4 GPS/Compass* ( u-blox NEO-M8N).

The content of the box with the *PM02 V3* power module is shown below (the box also includes a pinout guide and power module instructions).

![Durandal Box](images/drones/flight_controller/durandal/durandal_unboxing_schematics.jpg)

## Wiring Chart Overview

The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs).
We'll go through each of these in detail in the following sections.

![Durandal Wiring Overview](images/drones/flight_controller/durandal/durandal_wiring_overview.jpg)

:::tip
More information about available ports can be found here: [Durandal > Pinouts](../flight_controller/durandal.md#pinouts).
:::

## Mount and Orient Controller

*Durandal* should be mounted on the frame positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.

![Mounting/Orientation](images/drones/flight_controller/durandal/orientation.jpg)

If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: [Flight Controller Orientation](../config/flight_controller_orientation.md).

:::tip
The board has internal vibration-isolation.
Do not use vibration-isolation foam to mount the controller (double sided tape is normally sufficient).
:::

## GPS + Compass + Buzzer + Safety Switch + LED

Durandal is designed to work well with the *Pixhawk 4 GPS module*, which has an integrated compass, safety switch, buzzer and LED.
It connects directly to the [GPS port](../flight_controller/durandal.md#gps) using the 10 pin cable.

The GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).

![Connect compass/GPS to Durandal](images/drones/flight_controller/durandal/connection_gps_compass.jpg) 

:::note
The GPS module's integrated safety switch is enabled *by default* (when enabled, PX4 will not let you arm the vehicle).
To disable the safety press and hold the safety switch for 1 second.
You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).
:::

## Power

You can use a power module or power distribution board to power motors/servos and measure power consumption.
The recommended power modules are shown below.

<span id="pm02_v3"></span>
### PM02 v3 Power Module

The [Power Module (PM02 v3)](https://shop.holybro.com/power-modulepm02-v3_p1185.html) can be bundled with *Durandal*.
It provides regulated power to flight controller and sends battery voltage/current to the flight controller.

Connect the output of the *Power Module* as shown.

![Durandal PM02v3 Power connections](images/drones/flight_controller/durandal/connection_power.jpg)


- PM voltage/current port: connect to [POWER1](../flight_controller/durandal.md#power) port (or `POWER2`) using the 6-wire GH cable supplied.
- PM input (XT60 male connector): connect to the LiPo battery (2~12S).
- PM power output (XT60 female connector): wire out to any motor ESCs.

:::tip
As this power module does not include power distribution wiring, you would normally just connect all the ESCs in parallel to the power module output (the ESC must be appropriate for the supplied voltage level).
:::

:::tip
The 8 pin power (+) rail of **MAIN/AUX** is not powered by the power module supply to the flight controller.
If it will need to be separately powered in order to drive servos for rudders, elevons etc., the power rail needs to be connected to a BEC equipped ESC or a standalone 5V BEC or a 2S LiPo battery.
Ensure the voltage of servo you are going to use is appropriate.
:::

The power module has the following characteristics/limits:
- Max input voltage: 60V
- Max current sensing: 120A Voltage
- Current measurement configured for SV ADC Switching regulator outputs 5.2V and 3A max 
- Weight: 20g 
- Package includes: 
  - PM02 board
  - 6pin MLX cable (1)
  - 6pin GH cable (1)

:::note
See also [PM02v3 Power Module Manual](http://www.holybro.com/manual/Holybro_PM02_v3_PowerModule_Manual.pdf) (Holybro).
:::

<span id="pm07"></span>
### Pixhawk 4 Power Module (PM07)

The [Pixhawk 4 Power Module (PM07)](https://shop.holybro.com/pixhawk-4-power-module-pm07_p1095.html) can be bundled/used with *Durandal*.
It acts as both a power module and power distribution board, providing regulated power to flight controller and the ESCs, and sending battery voltage/current to the flight controller. 

This is wired up in the same way as described in the [Pixhawk 4 Quick Start > Power](../assembly/quick_start_pixhawk4.md#power) documentation.

It has the following characteristics/limits:
- PCB Current: total 120A outputs (MAX)
- UBEC 5V output current: 3A
- UBEC input voltage : 7~51v (2~12s LiPo)
- Dimensions: 68*50*8 mm
- Mounting Holes: 45*45mm
- Weight: 36g
- Package includes:
  - PM07 board (1)
  - 80mm XT60 connector wire (1)

:::note
See also [PM07 Quick Start Guide](http://www.holybro.com/manual/PM07-Quick-Start-Guide.pdf) (Holybro).
:::

### Battery Configuration

The battery/power setup must be configured in [Power Settings](../config/battery.md).
For either Power Module you will need to configure the *Number of Cells*.

You will not need to update the *voltage divider* unless you are using some other power module (e.g. the one from the Pixracer).


## Radio Control

A remote control (RC) radio system is required if you want to *manually* control your vehicle (PX4 does not require a radio system for autonomous flight modes).

You will need to [select a compatible transmitter/receiver](../getting_started/rc_transmitter_receiver.md) and then *bind* them so that they communicate (read the instructions that come with your specific transmitter/receiver). 

The instructions below show how to connect the different types of receivers to *Durandal*:


- Spektrum/DSM receivers connect to the [DSM RC](../flight_controller/durandal.md#dsm-rc-port) input.
  
  ![Durandal - DSM](images/drones/flight_controller/durandal/dsm.jpg)

- PPM and S.Bus receivers connect to the [SBUS_IN/PPM_IN](../flight_controller/durandal.md#rc-in) input port (marked as RC IN, next to the MAIN/AUX inputs).
  
  ![Durandal - Back Pinouts (Schematic)](images/drones/flight_controller/durandal/durandal_pinouts_back.jpg)

- PPM and PWM receivers that have an *individual wire for each channel* must connect to the **PPM RC** port *via a PPM encoder* [like this one](http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html) (PPM-Sum receivers use a single signal wire for all channels).

For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: [Remote Control Transmitters & Receivers](../getting_started/rc_transmitter_receiver.md).


## Telemetry Radios (Optional)

Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).

The vehicle-based radio should be connected to the [TELEM1](../flight_controller/durandal.md#telem1_2_3) port as shown below using one of the 6-pos connectors (if connected to this port, no further configuration is required).
The other radio is connected to your ground station computer or mobile device (usually by USB).

![Durandal/Telemetry Radio](images/drones/flight_controller/durandal/holybro_telemetry_radio.jpg)


## SD Card (Optional)

SD cards are highly recommended as they are needed to [log and analyse flight details](../getting_started/flight_reporting.md), to run missions, and to use UAVCAN-bus hardware.
Insert an SD card into the *Durandal* where indicated below.

![Durandal SD Card](images/drones/flight_controller/durandal/durandal_sd_slot.jpg)

:::tip
For more information see [Basic Concepts > SD Cards (Removable Memory)](../getting_started/px4_basic_concepts.md#sd_cards).
:::

## Motors

Motors/servos control signals are connected to the **I/O PWM OUT** (**MAIN OUT**) and **FMU PWM OUT** (**AUX**) ports in the order specified for your vehicle in the [Airframe Reference](../airframes/airframe_reference.md). 

![Durandal - Back Pinouts (Schematic)](images/drones/flight_controller/durandal/durandal_pinouts_back.jpg)

The motors must be separately [powered](#power).

:::note
If your frame is not listed in the airframe reference then use a "generic" airframe of the correct type.
:::

:::tip
*Durandal* has 5 AUX ports, so cannot be used with airframes that map AUX6, AUX7, AUX8 to motors or other critical flight controls.
:::

## Other Peripherals

The wiring and configuration of optional/less common components is covered within the topics for individual [peripherals](../peripherals/README.md).

## Pinouts

[Durandal > Pinouts](../flight_controller/durandal.md#pinouts)

<span id="configuration"></span>
## PX4 Configuration

First you will need to install [PX4 "Master" Firmware](../config/firmware.md#custom) onto the controller using *QGroundControl*.

:::note
Durandal support will be in the *stable* PX4 release that follows PX4 v1.10.
:::

Further general configuration information is covered in: [Autopilot Configuration](../config/README.md).

QuadPlane specific configuration is covered here: [QuadPlane VTOL Configuration](../config_vtol/vtol_quad_configuration.md)


## Further information

- [Durandal Overview](../flight_controller/durandal.md)
- [Durandal Technical Data Sheet](http://www.holybro.com/manual/Durandal_technical_data_sheet.pdf) (Holybro)
- [Durandal Pinouts](http://www.holybro.com/manual/Durandal-Pinouts.pdf) (Holybro)
- [Durandal_MB_H743sch.pdf](https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/durandal/Durandal_MB_H743sch.pdf) (Durandal Schematics)
- [STM32H743IIK_pinout.pdf](https://github.com/PX4/PX4-user_guide/raw/master/assets/flight_controller/durandal/STM32H743IIK_pinout.pdf) (Durandal Pinmap)

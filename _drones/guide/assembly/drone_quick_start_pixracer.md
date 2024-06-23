---
layout: page
name: quick start pixracer
sidebar: other_sidebar
categories: "drones"
tags: [drones]
summary: ""
excerpt_separator: <!--more-->
permalink: drone_quick_start_pixracer.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/
excerpt_separator: <!--more-->
updated: 2021-10-06 7:50 AM 
---
# Pixracer Wiring Quick Start

:::warning
PX4 does not manufacture this (or any) autopilot.
Contact the [manufacturer](https://store.mrobotics.io/) for hardware support or compliance issues.
:::
  
:::warning
Under construction
:::

This quick start guide shows how to power the [Pixracer](../flight_controller/pixracer.md) flight controller and connect its most important peripherals.

<img src="images/drones/flight_controller/pixracer/pixracer_hero_grey.jpg" width="300px" title="pixracer + 8266 grey" />


## Wiring Guides

![Grau pixracer double](images/drones/flight_controller/pixracer/grau_pixracer_double.jpg)

### Main Setup 

![Grau setup pixracer top](images/drones/flight_controller/pixracer/grau_setup_pixracer_top.jpg)

![Grau setup pixracer bottom](images/drones/flight_controller/pixracer/grau_setup_pixracer_bottom.jpg)


### Radio/Remote Control

A remote control (RC) radio system is required if you want to *manually* control your vehicle (PX4 does not require a radio system for autonomous flight modes). 

You will need to [select a compatible transmitter/receiver](../getting_started/rc_transmitter_receiver.md) and then *bind* them so that they communicate (read the instructions that come with your specific transmitter/receiver). 

The instructions below show how to connect the different types of receivers:

- FrSky receivers connect via the port shown, and can use the provided I/O Connector.
  
  ![Grau b Pixracer FrSkyS.Port Connection](images/drones/flight_controller/pixracer/grau_b_pixracer_frskys.port_connection.jpg)

  ![Pixracer FrSkyS.Port Connection](images/drones/flight_controller/pixracer/pixracer_FrSkyTelemetry.jpg)

- PPM-SUM and S.BUS receivers connect to the **RCIN** port.

  ![Radio Connection](images/drones/flight_controller/pixracer/grau_setup_pixracer_radio.jpg)
  
- PPM and PWM receivers that have an *individual wire for each channel* must connect to the **RCIN** port *via a PPM encoder* [like this one](http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html) (PPM-Sum receivers use a single signal wire for all channels).

### Power Module (ACSP4)

![Grau ACSP4 2 roh](images/drones/flight_controller/pixracer/grau_acsp4_2_roh.jpg)







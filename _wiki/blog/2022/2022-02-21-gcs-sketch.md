---
layout: post
title: "brainstorming session prior to setting out on gcs development"
name: "gcs-sketch"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-21-gcs-sketch.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "gcs jdlab brainstorm sketch"
summary: "Mon, Feb 21, 22, pool resources and ideas into one single gcs you can develop"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-02-21T17:13:09 +0900
updated: 2022-02-21 17:13
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## stm32 debugger tools
- [20-10ping-adapter](https://www.11st.co.kr/products/3203938140?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zS2ruvucoYHWOZCkYNUXqGGhE8QuLCsa-2YhtScPl5plKdheVR8onRoCbGAQAvD_BwE&utm_term=&utm_campaign=%B1%B8%B1%DB%BC%EE%C7%CEPC+%C3%DF%B0%A1%C0%DB%BE%F7&utm_source=%B1%B8%B1%DB_PC_S_%BC%EE%C7%CE&utm_medium=%B0%CB%BB%F6)
- [adapter-datasheet](https://www.farnell.com/datasheets/1683722.pdf)
- [debugger-seller](https://kr.element14.com/stmicroelectronics/st-link-v2/icd-programmer-for-stm8-stm32/dp/1892523?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zR5O790H8YRQRKfMU1WzH8Rqy-tvh97qBVTzUhHFHEP60f97wS5GMxoCVtsQAvD_BwE&mckv=_dc%7Cpcrid%7C519456541117%7Cpkw%7C%7Cpmt%7C%7Cslid%7C%7Cproduct%7C1892523%7Cpgrid%7C119732683897%7Cptaid%7Cpla-293946777986%7C&CMP=KNC-GKR-GEN-SMART-SHOPPING)
- [stlinkv2](https://www.digikey.com/htmldatasheets/production/825009/0/0/1/st-link-v2-user-manual.html#pff)
## Old school years
![image](https://user-images.githubusercontent.com/42961200/154914920-8a817f4a-d5a8-4602-b599-75200ccbd30e.png)

![image](https://user-images.githubusercontent.com/42961200/154915126-bc1a9d07-f195-4ff4-b578-957920d5535b.png)

![image](https://user-images.githubusercontent.com/42961200/154915225-60e210e5-aec2-45fd-8613-5a36aa098715.png)


## Fixed Wing Landing

PX4 enables autopilot-controlled fixed-wing (FW) landing in [Missions](../flying/missions.md), [Land mode](../flight_modes/land.md), and [Return mode](../flight_modes/return.md). 

The landing logic has several phases, as shown below. In the first phase the vehicle will follow a fixed trajectory ([FW_LND_ANG](#FW_LND_ANG)) towards the ground. At the flare landing altitude ([FW_LND_FLALT](#FW_LND_FLALT)) the vehicle will start to follow a flare path (the curve is based on the value of [FW_LND_HVIRT](#FW_LND_HVIRT)).

![Fixed Wing - Landing Path](../../assets/flying/fw_landing_path.png)

The flare landing altitude is relative to the altitude that the FW vehicle "thinks" is ground level. In [Land mode](../flight_modes/land.md) the ground altitude is not known and the vehicle will use assume it is at 0m (sea level). Often the ground level will be much higher than sea level, so the vehicle will land in the first phase (it will land on the ground before it reaches the flare altitude).

In a mission, [Return mode](../flight_modes/return.md), or if the vehicle has a range sensor fitted then ground level can be accurately estimated and landing behaviour will be as shown in the preceding diagram.

Landing is further affected by the following parameters:

Parameter | Description
--- | ---
<span id="FW_LND_ANG"></span>[FW_LND_ANG](../advanced_config/parameter_reference.md#FW_LND_ANG) | Landing slope angle prior to flaring
<span id="FW_LND_HVIRT"></span>[FW_LND_HVIRT](../advanced_config/parameter_reference.md#FW_LND_HVIRT) | Virtual horizontal line/altitude used to calculate the flare trajectory.<br>This represents the sub-ground altitude that the flare-path curve asymptotically approaches.
<span id="FW_LND_FLALT"></span>[FW_LND_FLALT](../advanced_config/parameter_reference.md#FW_LND_FLALT) | Landing flare altitude (relative to landing altitude)
<span id="FW_LND_TLALT"></span>[FW_LND_TLALT](../advanced_config/parameter_reference.md#FW_LND_TLALT) | Landing throttle limit altitude (relative landing altitude). The default value of -1.0 lets the system default to applying throttle limiting at 2/3 of the flare altitude.
<span id="FW_LND_HHDIST"></span>[FW_LND_HHDIST](../advanced_config/parameter_reference.md#FW_LND_HHDIST) | Landing heading hold horizontal distance
<span id="FW_LND_USETER"></span>[FW_LND_USETER](../advanced_config/parameter_reference.md#FW_LND_USETER) | Use terrain estimate (ground altitude from GPS) during landing. This is turned off by default and a waypoint or return altitude is normally used (or sea level for an arbitrary land position).
<span id="FW_LND_FL_PMIN"></span>[FW_LND_FL_PMIN](../advanced_config/parameter_reference.md#FW_LND_FL_PMIN) | Minimum pitch during flare. A positive sign means nose up Applied once `FW_LND_TLALT` is reached
<span id="FW_LND_FL_PMAX"></span>[FW_LND_FL_PMAX](../advanced_config/parameter_reference.md#FW_LND_FL_PMAX) | Maximum pitch during flare. A positive sign means nose up Applied once `FW_LND_TLALT` is reached
<span id="FW_LND_AIRSPD_SC"></span>[FW_LND_AIRSPD_SC](../advanced_config/parameter_reference.md#FW_LND_AIRSPD_SC) | Min. airspeed scaling factor for landing. Comment: Multiplying this factor with the minimum airspeed of the plane gives the target airspeed the landing approach. `FW_AIRSPD_MIN x FW_LND_AIRSPD_SC`

## sensor-selection
# Sensors

PX4-based systems use sensors to determine vehicle state (needed for stabilization and to enable autonomous control). The vehicle states include: position/altitude, heading, speed, airspeed, orientation (attitude), rates of rotation in different directions, battery level, etc.

The system *minimally requires* a gyroscope, accelerometer, magnetometer (compass) and barometer. A GPS or other positioning system is needed to enable all automatic [modes](../getting_started/flight_modes.md#categories), and some assisted modes. Fixed wing and VTOL-vehicles should additionally include an airspeed sensor (very highly recommended).

The minimal set of sensors is incorporated into [Pixhawk Series](../flight_controller/pixhawk_series.md) flight controllers (and may also be in other controller platforms). Additional/external sensors can be attached to the controller.

Below we describe some of the sensors. At the end there are links to information about [sensor wiring](#wiring).


<span id="gps_compass"></span>
## GPS & Compass

PX4 supports a number of global navigation satellite system (GNSS) receivers and compasses (magnetometers). 
It also supports [Real Time Kinematic (RTK) GPS Receivers](../gps_compass/rtk_gps.md), which extend GPS systems to centimetre-level precision.

:::note
[Pixhawk-series](../flight_controller/pixhawk_series.md) controllers include an *internal* compass. 
This *may* be useful on larger vehicles (e.g. VTOL) where it is possible to reduce electromagnetic interference by mounting the Pixhawk a long way from power supply lines.
On small vehicles an external compass is almost always required.
:::

We recommend the use of an external "combined" compass/GPS module mounted as far away from the motor/ESC power supply lines as possible - typically on a pedestal or wing (for fixed-wing).

Common GPS/compass hardware options are listed in: [GPS/Compass](../gps_compass/README.md).

![GPS + Compass](../../assets/hardware/gps/gps_compass.jpg)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

---
layout: post
title: "flgith controller F405-wing"
name: "jdlab-matek"
tags: [fc]
tagName: fc
permalink: 2022-02-10-jdlab-matek.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "fc mp"
summary: "목,  2월 10, 22, jdlab first fc connection with mp"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-02-10T10:36:42 +0900
updated: 2022-02-10 10:36
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## matek f405 wing
[official](http://www.mateksys.com/?portfolio=f405-wing#tab-id-6)

![image](https://user-images.githubusercontent.com/42961200/153321311-3edb458d-1d94-4c1d-a64e-eabfa1c3d09c.png)

![image](https://user-images.githubusercontent.com/42961200/153321727-fa7fbbef-8706-4194-89f0-73db5b3069c9.png)


Specifications
==============

-  **Processor**

   -  STM32F405RGT6 ARM (168MHz)


-  **Sensors**

   -  InvenSense MPU6000 IMU (accel, gyro)Specifications
==============

-  **Processor**

   -  STM32F405RGT6 ARM (168MHz)


-  **Sensors**

   -  InvenSense MPU6000 IMU (accel, gyro)
   -  BMP280 barometer (later models use DPS310)
   -  Voltage & current sensor


-  **Power**

   -  9V ~ 30V DC input power


-  **Interfaces**

   -  6x UARTS
   -  10x PWM outputs
   -  1x RC input PWM/PPM, SBUS
   -  I2C port for external compass and airspeed sensor
   -  USB port
   -  Built-in OSD


-  **Size and Dimensions**

   - 56mm x 36mm x 15mm
   - 25g

See mateksys.com for more `detailed specifications <http://www.mateksys.com/?portfolio=f405-wing#tab-id-2>`__ and `wiring diagrams <http://www.mateksys.com/?portfolio=f405-wing#tab-id-3>`__.
   
Default UART order
==================

- SERIAL0 = console = USB
- SERIAL1 = Telemetry1 = USART1
- SERIAL2 = empty
- SERIAL3 = GPS1 = USART3
- SERIAL4 = GPS2 = UART4
- SERIAL5 = USER = UART5
- SERIAL6 = USER = USART6
- SERIAL7 = USER = USART2 (only if BRD_ALT_CONFIG =1)

Serial protocols can be adjusted to personal preferences.

Dshot capability
================

All motor/servo outputs are Dshot and PWM capable. However, mixing Dshot and normal PWM operation for outputs is restricted into groups, ie. enabling Dshot for an output in a group requires that ALL outputs in that group be configured and used as Dshot, rather than PWM outputs. The output groups that must be the same (PWM rate or Dshot, when configured as a normal servo/motor output) are: 1/2, 3/4, 5/6, 7/8/9 , and 10.

.. note:: PWM9 is a solder pad, and PWM10 is marked as "LED"

Outputs
=======

The first 8 servo/motor outputs are marked on the board: M1,M2,S3-S8 . S9 is a solder pad on the board, and S10 is connected to the pin marked LED in ArduPilot's definition. Using S10 allows the easy grouping for odd numbers of motors with a common DShot or PWM frequency without sacrificing the use of an output for servo use due to rate issues (see above Dshot discussion).


RC Input
========

The SBUS pin, is passed by an inverter to R2 (UART2 RX), which by default is mapped to a timer input instead of the UART, and can be used for all ArduPilot supported receiver protocols, except CRSF which requires a true UART connection. However, bi-directional protocols which include telemetry, such as SRXL2 and FPort, when connected in this manner, will only provide RC without telemetry. 

To allow CRSF and embedded telemetry available in Fport, CRSF, and SRXL2 receivers, the R2 pin can also be configured to be used as true UART2 RX pin for use with bi-directional systems by setting the `BRD_ALT_CONFIG<BRD_ALT_CONFIG>` to “1” so it becomes the SERIAL7 port's RX input pin.

With this option, `SERIAL7_PROTOCOL<SERIAL7_PROTOCOL>` must be set to "23", and:

- PPM is not supported.

- DSM/SRXL connects to the R2  pin, but SBUS would still be connected to SBUS.

- FPort requires connection to T2 and R2 via a bi-directional inverter. See `common-FPort-receivers` .

- CRSF also requires a T2 connection, in addition to R2, and automatically provides telemetry.

- SRXL2 requires a connection to T2 and automatically provides telemetry.  Set `SERIAL6_OPTIONS<SERIAL6_OPTIONS>` to "4".

Any UART can be used for RC system connections in ArduPilot also, and is compatible with all protocols except PPM (SBUS requires external inversion on other UARTs). 

Battery Monitor Configuration
=============================
These settings are set as defaults when the firmware is loaded  which needs to be changed from the default value). However, if they are ever lost, you can manually set the parameters:

Enable Battery monitor.

`BATT_MONITOR<BATT_MONITOR>` =4

Then reboot.

`BATT_VOLT_PIN<BATT_VOLT_PIN>` 10

`BATT_CURR_PIN<BATT_CURR_PIN>` 11

`BATT_VOLT_MULT<BATT_VOLT_MULT>` 11.0

`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` 31.7 

   -  BMP280 barometer (later models use DPS310)
   -  Voltage & current sensor


-  **Power**

   -  9V ~ 30V DC input power


-  **Interfaces**

   -  6x UARTS
   -  10x PWM outputs
   -  1x RC input PWM/PPM, SBUS
   -  I2C port for external compass and airspeed sensor
   -  USB port
   -  Built-in OSD


-  **Size and Dimensions**

   - 56mm x 36mm x 15mm
   - 25g

See mateksys.com for more `detailed specifications <http://www.mateksys.com/?portfolio=f405-wing#tab-id-2>`__ and `wiring diagrams <http://www.mateksys.com/?portfolio=f405-wing#tab-id-3>`__.
   
Default UART order
==================

- SERIAL0 = console = USB
- SERIAL1 = Telemetry1 = USART1
- SERIAL2 = empty
- SERIAL3 = GPS1 = USART3
- SERIAL4 = GPS2 = UART4
- SERIAL5 = USER = UART5
- SERIAL6 = USER = USART6
- SERIAL7 = USER = USART2 (only if BRD_ALT_CONFIG =1)

Serial protocols can be adjusted to personal preferences.

Dshot capability
================

All motor/servo outputs are Dshot and PWM capable. However, mixing Dshot and normal PWM operation for outputs is restricted into groups, ie. enabling Dshot for an output in a group requires that ALL outputs in that group be configured and used as Dshot, rather than PWM outputs. The output groups that must be the same (PWM rate or Dshot, when configured as a normal servo/motor output) are: 1/2, 3/4, 5/6, 7/8/9 , and 10.

.. note:: PWM9 is a solder pad, and PWM10 is marked as "LED"

Outputs
=======

The first 8 servo/motor outputs are marked on the board: M1,M2,S3-S8 . S9 is a solder pad on the board, and S10 is connected to the pin marked LED in ArduPilot's definition. Using S10 allows the easy grouping for odd numbers of motors with a common DShot or PWM frequency without sacrificing the use of an output for servo use due to rate issues (see above Dshot discussion).

Specifications
==============

-  **Processor**

   -  STM32F405RGT6 ARM (168MHz)


-  **Sensors**

   -  InvenSense MPU6000 IMU (accel, gyro)Specifications
==============

-  **Processor**

   -  STM32F405RGT6 ARM (168MHz)


-  **Sensors**

   -  InvenSense MPU6000 IMU (accel, gyro)
   -  BMP280 barometer (later models use DPS310)
   -  Voltage & current sensor


-  **Power**

   -  9V ~ 30V DC input power


-  **Interfaces**

   -  6x UARTS
   -  10x PWM outputs
   -  1x RC input PWM/PPM, SBUS
   -  I2C port for external compass and airspeed sensor
   -  USB port
   -  Built-in OSD


-  **Size and Dimensions**

   - 56mm x 36mm x 15mm
   - 25g

See mateksys.com for more `detailed specifications <http://www.mateksys.com/?portfolio=f405-wing#tab-id-2>`__ and `wiring diagrams <http://www.mateksys.com/?portfolio=f405-wing#tab-id-3>`__.
   
Default UART order
==================

- SERIAL0 = console = USB
- SERIAL1 = Telemetry1 = USART1
- SERIAL2 = empty
- SERIAL3 = GPS1 = USART3
- SERIAL4 = GPS2 = UART4
- SERIAL5 = USER = UART5
- SERIAL6 = USER = USART6
- SERIAL7 = USER = USART2 (only if BRD_ALT_CONFIG =1)

Serial protocols can be adjusted to personal preferences.

Dshot capability
================

All motor/servo outputs are Dshot and PWM capable. However, mixing Dshot and normal PWM operation for outputs is restricted into groups, ie. enabling Dshot for an output in a group requires that ALL outputs in that group be configured and used as Dshot, rather than PWM outputs. The output groups that must be the same (PWM rate or Dshot, when configured as a normal servo/motor output) are: 1/2, 3/4, 5/6, 7/8/9 , and 10.

.. note:: PWM9 is a solder pad, and PWM10 is marked as "LED"

Outputs
=======

The first 8 servo/motor outputs are marked on the board: M1,M2,S3-S8 . S9 is a solder pad on the board, and S10 is connected to the pin marked LED in ArduPilot's definition. Using S10 allows the easy grouping for odd numbers of motors with a common DShot or PWM frequency without sacrificing the use of an output for servo use due to rate issues (see above Dshot discussion).


RC Input
========

The SBUS pin, is passed by an inverter to R2 (UART2 RX), which by default is mapped to a timer input instead of the UART, and can be used for all ArduPilot supported receiver protocols, except CRSF which requires a true UART connection. However, bi-directional protocols which include telemetry, such as SRXL2 and FPort, when connected in this manner, will only provide RC without telemetry. 

To allow CRSF and embedded telemetry available in Fport, CRSF, and SRXL2 receivers, the R2 pin can also be configured to be used as true UART2 RX pin for use with bi-directional systems by setting the `BRD_ALT_CONFIG<BRD_ALT_CONFIG>` to “1” so it becomes the SERIAL7 port's RX input pin.

With this option, `SERIAL7_PROTOCOL<SERIAL7_PROTOCOL>` must be set to "23", and:

- PPM is not supported.

- DSM/SRXL connects to the R2  pin, but SBUS would still be connected to SBUS.

- FPort requires connection to T2 and R2 via a bi-directional inverter. See `common-FPort-receivers` .

- CRSF also requires a T2 connection, in addition to R2, and automatically provides telemetry.

- SRXL2 requires a connection to T2 and automatically provides telemetry.  Set `SERIAL6_OPTIONS<SERIAL6_OPTIONS>` to "4".

Any UART can be used for RC system connections in ArduPilot also, and is compatible with all protocols except PPM (SBUS requires external inversion on other UARTs). 

Battery Monitor Configuration
=============================
These settings are set as defaults when the firmware is loaded  which needs to be changed from the default value). However, if they are ever lost, you can manually set the parameters:

Enable Battery monitor.

:ref:`BATT_MONITOR<BATT_MONITOR>` =4

Then reboot.

:ref:`BATT_VOLT_PIN<BATT_VOLT_PIN>` 10

:ref:`BATT_CURR_PIN<BATT_CURR_PIN>` 11

:ref:`BATT_VOLT_MULT<BATT_VOLT_MULT>` 11.0

:ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` 31.7 

   -  BMP280 barometer (later models use DPS310)
   -  Voltage & current sensor


-  **Power**

   -  9V ~ 30V DC input power


-  **Interfaces**

   -  6x UARTS
   -  10x PWM outputs
   -  1x RC input PWM/PPM, SBUS
   -  I2C port for external compass and airspeed sensor
   -  USB port
   -  Built-in OSD


-  **Size and Dimensions**

   - 56mm x 36mm x 15mm
   - 25g

See mateksys.com for more `detailed specifications <http://www.mateksys.com/?portfolio=f405-wing#tab-id-2>`__ and `wiring diagrams <http://www.mateksys.com/?portfolio=f405-wing#tab-id-3>`__.
   
Default UART order
==================

- SERIAL0 = console = USB
- SERIAL1 = Telemetry1 = USART1
- SERIAL2 = empty
- SERIAL3 = GPS1 = USART3
- SERIAL4 = GPS2 = UART4
- SERIAL5 = USER = UART5
- SERIAL6 = USER = USART6
- SERIAL7 = USER = USART2 (only if BRD_ALT_CONFIG =1)

Serial protocols can be adjusted to personal preferences.

Dshot capability
================

All motor/servo outputs are Dshot and PWM capable. However, mixing Dshot and normal PWM operation for outputs is restricted into groups, ie. enabling Dshot for an output in a group requires that ALL outputs in that group be configured and used as Dshot, rather than PWM outputs. The output groups that must be the same (PWM rate or Dshot, when configured as a normal servo/motor output) are: 1/2, 3/4, 5/6, 7/8/9 , and 10.

.. note:: PWM9 is a solder pad, and PWM10 is marked as "LED"

Outputs
=======

The first 8 servo/motor outputs are marked on the board: M1,M2,S3-S8 . S9 is a solder pad on the board, and S10 is connected to the pin marked LED in ArduPilot's definition. Using S10 allows the easy grouping for odd numbers of motors with a common DShot or PWM frequency without sacrificing the use of an output for servo use due to rate issues (see above Dshot discussion).


RC Input
========

The SBUS pin, is passed by an inverter to R2 (UART2 RX), which by default is mapped to a timer input instead of the UART, and can be used for all ArduPilot supported receiver protocols, except CRSF which requires a true UART connection. However, bi-directional protocols which include telemetry, such as SRXL2 and FPort, when connected in this manner, will only provide RC without telemetry. 

To allow CRSF and embedded telemetry available in Fport, CRSF, and SRXL2 receivers, the R2 pin can also be configured to be used as true UART2 RX pin for use with bi-directional systems by setting the :ref:`BRD_ALT_CONFIG<BRD_ALT_CONFIG>` to “1” so it becomes the SERIAL7 port's RX input pin.

With this option, :ref:`SERIAL7_PROTOCOL<SERIAL7_PROTOCOL>` must be set to "23", and:

- PPM is not supported.

- DSM/SRXL connects to the R2  pin, but SBUS would still be connected to SBUS.

- FPort requires connection to T2 and R2 via a bi-directional inverter. See :ref:`common-FPort-receivers` .

- CRSF also requires a T2 connection, in addition to R2, and automatically provides telemetry.

- SRXL2 requires a connection to T2 and automatically provides telemetry.  Set :ref:`SERIAL6_OPTIONS<SERIAL6_OPTIONS>` to "4".

Any UART can be used for RC system connections in ArduPilot also, and is compatible with all protocols except PPM (SBUS requires external inversion on other UARTs). See :ref:`common-rc-systems` for details.

Battery Monitor Configuration
=============================
These settings are set as defaults when the firmware is loaded (except :ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` which needs to be changed from the default value). However, if they are ever lost, you can manually set the parameters:

Enable Battery monitor.

:ref:`BATT_MONITOR<BATT_MONITOR>` =4

Then reboot.

:ref:`BATT_VOLT_PIN<BATT_VOLT_PIN>` 10

:ref:`BATT_CURR_PIN<BATT_CURR_PIN>` 11

:ref:`BATT_VOLT_MULT<BATT_VOLT_MULT>` 11.0

:ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` 31.7 
RC Input
========

The SBUS pin, is passed by an inverter to R2 (UART2 RX), which by default is mapped to a timer input instead of the UART, and can be used for all ArduPilot supported receiver protocols, except CRSF which requires a true UART connection. However, bi-directional protocols which include telemetry, such as SRXL2 and FPort, when connected in this manner, will only provide RC without telemetry. 

To allow CRSF and embedded telemetry available in Fport, CRSF, and SRXL2 receivers, the R2 pin can also be configured to be used as true UART2 RX pin for use with bi-directional systems by setting the :ref:`BRD_ALT_CONFIG<BRD_ALT_CONFIG>` to “1” so it becomes the SERIAL7 port's RX input pin.

With this option, :ref:`SERIAL7_PROTOCOL<SERIAL7_PROTOCOL>` must be set to "23", and:

- PPM is not supported.

- DSM/SRXL connects to the R2  pin, but SBUS would still be connected to SBUS.

- FPort requires connection to T2 and R2 via a bi-directional inverter. See :ref:`common-FPort-receivers` .

- CRSF also requires a T2 connection, in addition to R2, and automatically provides telemetry.

- SRXL2 requires a connection to T2 and automatically provides telemetry.  Set :ref:`SERIAL6_OPTIONS<SERIAL6_OPTIONS>` to "4".

Any UART can be used for RC system connections in ArduPilot also, and is compatible with all protocols except PPM (SBUS requires external inversion on other UARTs). See :ref:`common-rc-systems` for details.

Battery Monitor Configuration
=============================
These settings are set as defaults when the firmware is loaded (except :ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` which needs to be changed from the default value). However, if they are ever lost, you can manually set the parameters:

Enable Battery monitor.

:ref:`BATT_MONITOR<BATT_MONITOR>` =4

Then reboot.

:ref:`BATT_VOLT_PIN<BATT_VOLT_PIN>` 10
Specifications
==============

-  **Processor**

   -  STM32F405RGT6 ARM (168MHz)


-  **Sensors**

   -  InvenSense MPU6000 IMU (accel, gyro)Specifications
==============

-  **Processor**

   -  STM32F405RGT6 ARM (168MHz)


-  **Sensors**

   -  InvenSense MPU6000 IMU (accel, gyro)
   -  BMP280 barometer (later models use DPS310)
   -  Voltage & current sensor


-  **Power**

   -  9V ~ 30V DC input power


-  **Interfaces**

   -  6x UARTS
   -  10x PWM outputs
   -  1x RC input PWM/PPM, SBUS
   -  I2C port for external compass and airspeed sensor
   -  USB port
   -  Built-in OSD


-  **Size and Dimensions**

   - 56mm x 36mm x 15mm
   - 25g

See mateksys.com for more `detailed specifications <http://www.mateksys.com/?portfolio=f405-wing#tab-id-2>`__ and `wiring diagrams <http://www.mateksys.com/?portfolio=f405-wing#tab-id-3>`__.
   
Default UART order
==================

- SERIAL0 = console = USB
- SERIAL1 = Telemetry1 = USART1
- SERIAL2 = empty
- SERIAL3 = GPS1 = USART3
- SERIAL4 = GPS2 = UART4
- SERIAL5 = USER = UART5
- SERIAL6 = USER = USART6
- SERIAL7 = USER = USART2 (only if BRD_ALT_CONFIG =1)

Serial protocols can be adjusted to personal preferences.

Dshot capability
================

All motor/servo outputs are Dshot and PWM capable. However, mixing Dshot and normal PWM operation for outputs is restricted into groups, ie. enabling Dshot for an output in a group requires that ALL outputs in that group be configured and used as Dshot, rather than PWM outputs. The output groups that must be the same (PWM rate or Dshot, when configured as a normal servo/motor output) are: 1/2, 3/4, 5/6, 7/8/9 , and 10.

.. note:: PWM9 is a solder pad, and PWM10 is marked as "LED"

Outputs
=======

The first 8 servo/motor outputs are marked on the board: M1,M2,S3-S8 . S9 is a solder pad on the board, and S10 is connected to the pin marked LED in ArduPilot's definition. Using S10 allows the easy grouping for odd numbers of motors with a common DShot or PWM frequency without sacrificing the use of an output for servo use due to rate issues (see above Dshot discussion).


RC Input
========

The SBUS pin, is passed by an inverter to R2 (UART2 RX), which by default is mapped to a timer input instead of the UART, and can be used for all ArduPilot supported receiver protocols, except CRSF which requires a true UART connection. However, bi-directional protocols which include telemetry, such as SRXL2 and FPort, when connected in this manner, will only provide RC without telemetry. 

To allow CRSF and embedded telemetry available in Fport, CRSF, and SRXL2 receivers, the R2 pin can also be configured to be used as true UART2 RX pin for use with bi-directional systems by setting the `BRD_ALT_CONFIG<BRD_ALT_CONFIG>` to “1” so it becomes the SERIAL7 port's RX input pin.

With this option, `SERIAL7_PROTOCOL<SERIAL7_PROTOCOL>` must be set to "23", and:

- PPM is not supported.

- DSM/SRXL connects to the R2  pin, but SBUS would still be connected to SBUS.

- FPort requires connection to T2 and R2 via a bi-directional inverter. See `common-FPort-receivers` .

- CRSF also requires a T2 connection, in addition to R2, and automatically provides telemetry.

- SRXL2 requires a connection to T2 and automatically provides telemetry.  Set `SERIAL6_OPTIONS<SERIAL6_OPTIONS>` to "4".

Any UART can be used for RC system connections in ArduPilot also, and is compatible with all protocols except PPM (SBUS requires external inversion on other UARTs). 

Battery Monitor Configuration
=============================
These settings are set as defaults when the firmware is loaded  which needs to be changed from the default value). However, if they are ever lost, you can manually set the parameters:

Enable Battery monitor.

:ref:`BATT_MONITOR<BATT_MONITOR>` =4

Then reboot.

`BATT_VOLT_PIN<BATT_VOLT_PIN>` 10

`BATT_CURR_PIN<BATT_CURR_PIN>` 11

`BATT_VOLT_MULT<BATT_VOLT_MULT>` 11.0

`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` 31.7 

   -  BMP280 barometer (later models use DPS310)
   -  Voltage & current sensor


-  **Power**

   -  9V ~ 30V DC input power


-  **Interfaces**

   -  6x UARTS
   -  10x PWM outputs
   -  1x RC input PWM/PPM, SBUS
   -  I2C port for external compass and airspeed sensor
   -  USB port
   -  Built-in OSD


-  **Size and Dimensions**

   - 56mm x 36mm x 15mm
   - 25g

See mateksys.com for more `detailed specifications <http://www.mateksys.com/?portfolio=f405-wing#tab-id-2>`__ and `wiring diagrams <http://www.mateksys.com/?portfolio=f405-wing#tab-id-3>`__.
   
Default UART order
==================

- SERIAL0 = console = USB
- SERIAL1 = Telemetry1 = USART1
- SERIAL2 = empty
- SERIAL3 = GPS1 = USART3
- SERIAL4 = GPS2 = UART4
- SERIAL5 = USER = UART5
- SERIAL6 = USER = USART6
- SERIAL7 = USER = USART2 (only if BRD_ALT_CONFIG =1)

Serial protocols can be adjusted to personal preferences.

Dshot capability
================

All motor/servo outputs are Dshot and PWM capable. However, mixing Dshot and normal PWM operation for outputs is restricted into groups, ie. enabling Dshot for an output in a group requires that ALL outputs in that group be configured and used as Dshot, rather than PWM outputs. The output groups that must be the same (PWM rate or Dshot, when configured as a normal servo/motor output) are: 1/2, 3/4, 5/6, 7/8/9 , and 10.

.. note:: PWM9 is a solder pad, and PWM10 is marked as "LED"

Outputs
=======

The first 8 servo/motor outputs are marked on the board: M1,M2,S3-S8 . S9 is a solder pad on the board, and S10 is connected to the pin marked LED in ArduPilot's definition. Using S10 allows the easy grouping for odd numbers of motors with a common DShot or PWM frequency without sacrificing the use of an output for servo use due to rate issues (see above Dshot discussion).


RC Input
========

The SBUS pin, is passed by an inverter to R2 (UART2 RX), which by default is mapped to a timer input instead of the UART, and can be used for all ArduPilot supported receiver protocols, except CRSF which requires a true UART connection. However, bi-directional protocols which include telemetry, such as SRXL2 and FPort, when connected in this manner, will only provide RC without telemetry. 

To allow CRSF and embedded telemetry available in Fport, CRSF, and SRXL2 receivers, the R2 pin can also be configured to be used as true UART2 RX pin for use with bi-directional systems by setting the :ref:`BRD_ALT_CONFIG<BRD_ALT_CONFIG>` to “1” so it becomes the SERIAL7 port's RX input pin.

With this option, :ref:`SERIAL7_PROTOCOL<SERIAL7_PROTOCOL>` must be set to "23", and:

- PPM is not supported.

- DSM/SRXL connects to the R2  pin, but SBUS would still be connected to SBUS.

- FPort requires connection to T2 and R2 via a bi-directional inverter. See :ref:`common-FPort-receivers` .

- CRSF also requires a T2 connection, in addition to R2, and automatically provides telemetry.

- SRXL2 requires a connection to T2 and automatically provides telemetry.  Set :ref:`SERIAL6_OPTIONS<SERIAL6_OPTIONS>` to "4".

Any UART can be used for RC system connections in ArduPilot also, and is compatible with all protocols except PPM (SBUS requires external inversion on other UARTs). See :ref:`common-rc-systems` for details.

Battery Monitor Configuration
=============================
These settings are set as defaults when the firmware is loaded (except :ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` which needs to be changed from the default value). However, if they are ever lost, you can manually set the parameters:

Enable Battery monitor.

:ref:`BATT_MONITOR<BATT_MONITOR>` =4

Then reboot.

:ref:`BATT_VOLT_PIN<BATT_VOLT_PIN>` 10

:ref:`BATT_CURR_PIN<BATT_CURR_PIN>` 11

:ref:`BATT_VOLT_MULT<BATT_VOLT_MULT>` 11.0

:ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` 31.7 
:ref:`BATT_CURR_PIN<BATT_CURR_PIN>` 11

:ref:`BATT_VOLT_MULT<BATT_VOLT_MULT>` 11.0

:ref:`BATT_AMP_PERVLT<BATT_AMP_PERVLT>` 31.7 

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

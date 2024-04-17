---
title: "backend of smartfarm"
tags: [smartfarm iot]
tagName: smartfarm
permalink: smartfarm-backend.html
sidebar: mydoc_sidebar
folder: aigenerative
keywords: "smartfarm tyeng iot"
summary: "Tue, Apr 16, 24, backend architecture"
toc: true
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## github repositories
[mcuFirmware](https://github.com/aiegoo/mcu-firmware)

## mongodb error

```diff
mongod -f /data/data/com.termux/files/home/.termux/mongod.conf
about to fork child process, waiting until server is ready for connections.
forked process: 24236
ERROR: child process failed, exited with 1
To see additional information in this output, start without the "--fork" option.
```

## MongoDB debug console

- instructions to set up the control app and debugging console [g-slide](https://docs.google.com/document/d/1PGr1F04OucKGg20mPiyVXIgzAnePCR5A--EWR-xEvN4/edit?usp=sharing)
- example

```php
Checking CRC :6FD4
CRC Ok
functionCode 3
READEEPROM address 42
0000803F
READEEPROM address 46
00000000
isOnDemand true
voltage is 0xAD1CB03F
formulaType 01
READEEPROM address 82
65938442
READEEPROM address 86
00C085C2
Checking CRC :6FD4
CRC Ok
functionCode 3
READEEPROM address 42
0000803F
READEEPROM address 46
00000000
        isOnDemand true
voltage is 0x4035B03F
formulaType 01
```

- Mongodb compass filtering
![mongod-compass](https://user-images.githubusercontent.com/42961200/223020517-723aff1a-e680-4850-ac4f-10c56e6f574f.png)


## Hydroponic system with two hubs
[BOM-HOMODB](https://github.com/aiegoo/mcu-firmware/issues/5#issuecomment-1463708526)
[googledoc](https://docs.google.com/spreadsheets/d/1WRdulFFVmN9InQkxm0iTSXRfDLUab3F8/edit#gid=991513083)

```php
                +---------------------+
                |      Raspberry Pi    |
                |       (Master)       |
                +----------+----------+
                           |
                           |
             +-------------+-------------+
             |                           |
             v                           v
+-------------------+         +-------------------+
|      Arduino      |         |      Arduino      |
|     (Node #1)     |         |     (Node #2)      |
+-------------------+         +-------------------+
|   Temperature     |         |    Nutrient       |
|    & Humidity     |         |    Dispenser      |
|    Sensor         |         |    Pump           |
|   Relay Control   |         |    Relay Control  |
+-------------------+         +-------------------+
          |                             |
          |                             |
          v                             v
+-------------------+         +-------------------+
|   LED Lighting    |         |     Air Pump      |
|   System          |         |     Control       |
|   Relay Control   |         |    Relay Control  |
+-------------------+         +-------------------+
          |                             |
          |                             |
          v                             v
+-------------------+         +-------------------+
|     Home          |         |     Home          |
|   Assistant       |         |   Assistant       |
|   Integration     |         |   Integration     |
+-------------------+         +-------------------+

```
### initial requirements

1. Container: This will be used to hold the water and nutrient solution that the plants will grow in. You can use a plastic container or a large plastic bucket.

2. Growing medium: This is the material that supports the plant roots and helps with water and nutrient retention. Examples include coconut coir, rockwool, perlite, and vermiculite.

3. Water and nutrient solution: This will be the primary source of nutrients for the plants. You can either purchase pre-made nutrient solutions or make your own by mixing the necessary minerals and elements.

4. Water pump: This will be used to circulate the water and nutrient solution to the plants.

5. Air pump: This is needed to provide oxygen to the plants' roots.

6. pH meter: This will be used to monitor and adjust the pH level of the nutrient solution to ensure optimal plant growth.

7. EC/TDS meter: This will be used to measure the electrical conductivity (EC) or total dissolved solids (TDS) of the nutrient solution, which can give you an indication of nutrient levels.

8. Temperature and humidity sensor: This will be used to monitor the environmental conditions inside the growing area.

9. Lighting: Depending on the type of plants you are growing, you may need to provide supplemental lighting. LED grow lights are a popular choice for indoor hydroponic systems.

10. Microcontroller board: A microcontroller board, such as an Arduino or Raspberry Pi, can be used to control the water and air pumps, as well as the lighting and environmental sensors.

11. MQTT broker: You will need an MQTT broker to handle the messaging between the microcontroller and the various sensors and actuators. Node-red

12. RS485 communication module: You will need an RS485 communication module to enable communication between the microcontroller and the various sensor nodes in the system.

- For a hydroponic system prototype, you will need the following materials:
  - pH sensor
  - Temperature and humidity sensor
  - EC/TDS sensor
  - CO2 sensor
  - Water pump
  - Air pump
  - LED grow light
  - Tubing and connectors
  - Nutrient solution
  - Growing medium
  - Arduino
  - Raspberry Pi 4
  - Breadboard and jumper wires
  - Power supply
- Start by setting up the physical system, connecting the sensors and actuators to the Arduino, and testing them individually.
- Use the Raspberry Pi as the control node and set up the MQTT server and clients to communicate between the sensor and actuator nodes.
- Write code for the Arduino and Raspberry Pi to read sensor data, control the water and air pumps, and adjust the LED grow light.
- Implement a simple control algorithm based on the sensor data to automate the hydroponic system.
- Monitor the system performance and adjust the control algorithm as needed to optimize plant growth.


[good-reading](https://www.safewater.org/fact-sheets-1/2017/1/23/tds-and-ph)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

---
title: Sample 5 Topic
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: p2_sample5.html
simple_map: true
map_name: usermap
box_number: 5
folder: product2
youtubeID: pfHjs5ZuGpk
youtubeID1: h67RtzKW6a4
---

## SmartAP Autopilots
![image](https://user-images.githubusercontent.com/42961200/151693413-377b913d-5b29-41f8-bb94-e81e747a4605.png)

SmartAP PRO and SmartAP MAX are Sky-Drones' flagship flight controllers.


## SmartAP MAX
![image](https://user-images.githubusercontent.com/42961200/151693424-30e0c793-e838-4e36-9be4-5c3c84011dbc.png)

SmartAP MAX Autopilot is the latest generation flight control system for multirotor Unmanned Aerial Vehicles of various configurations and sizes aimed at a wide range of applications.

The main feature of the system is its capability of fully autonomous flight including take off, waypoints flight, landing and much more. The core is based on a powerful 32-bit microcontroller ST Microelectronics® STM32F4 and 9-axis Inertial Measurement Unit. The latest UBlox® GPS module with integrated 3-axis magnetometer and pressure sensor can be connected externally for autonomous flight capabilities as well as possessing a wireless telemetry module for system configuration, mission planning and control, and in-flight monitoring via the purpose-designed SmartAP Ground Control Station and Configuration Tool.

SmartAP MAX supports any type of multirotor UAV with outstanding flight performance, reliability, navigation and control precision. Its compact size and weight makes integration of the system fast and easy, and its various I/O interfaces allows the creation of applications for interaction with 3rd party electronics and payloads.

### Included in your Set
![image](https://user-images.githubusercontent.com/42961200/151693450-ef27aa05-2408-4ca7-902e-dffa317de884.png)

1. SmartAP MAX flight controller
2. GPS / GLONASS satellite navigation module with integrated 3-axis magnetometer
3. Telemetry kit (air and ground module with antennas and connection cable)
4. DC-DC Power module and current / voltage sensor
5. MicroSD card with adapter
6. Electromagnetic sounder

{{site.data.alerts.hr_shaded}}

### Description
#### Flight performance
Extremely stable flight in stabilize (user control), position hold (semi-autonomous control) and autonomous (navigation and control) modes
Vibration dampened multiple redundant temperature stabilized IMU
Aluminium case for EMI protection
Native support of SmartAP Ground Control Station and Configuration Tool
Accurate GPS position hold (up to 40cm), accurate altitude hold (up to 10 cm)
Fully autonomous waypoints flight
Return to home mode
Failsafe detection and event triggering
Plus much more...

#### General
Powerful microcontroller 32 bit 168 MHz STM32F4 ARM Cortex M4
Compatible with GPS/GLONASS receiver (UBlox® NEO8, GPS/GLONASS, up to 24 sats, 10 Hz) active antenna
Integrate OSD (On-Screen Display)
Up to 12 PWM I/O support (5V out)
USB interface for configuration / firmware update
Various communication lines (UART, I2C, SPI)
MicroSD, 4-bit SDIO interface for data-logging / parameters storage
Backup battery for RTC
2x ADC inputs for battery voltage / current monitoring
Electromagnetic sound audio indicator
3-channels LED support (up to 500mA / ch)
2-channels solid state relay

#### Processor
ST Microelectronics STM32F427VI
32 bit 168 MHz ARM Cortex M4
Hardware FPU
2 MB Flash
192 kB RAM

#### Sensors
Vibration dampened multiple redundant temperature stabilized IMU
2x 9-axis IMU InvenSense MPU-9250 (accelerometer, gyroscope, magnetometer)
2x Pressure sensor MS5611 (integrated and external)
1x 3-axis magnetometer HMC5883 (external)
1x UBlox® M8N GPS module (external)

#### Flight Modes
Stabilization
Altitude hold
GPS position hold
Loiter
Return to home
Autonomous waypoints flight
Guided / follow me
Take off
Landing

#### Interfaces
12x PWM I/O
1x PPM / SBUS input
1x SBUS output
1x power input port
1x LED output port
3x UART
2x I2C
1x SPI
2x CAN
1x camera input
1x camera output
1x USB Mini-B

#### Size and Weight
Length: 63mm
Width: 43mm
Height: 16mm
Weight: 21g

## Installation

{% include youtubePlayer.html id=page.youtubeID %}

### Autopilot
The underneath of the autopilot has double-sided foam anti-vibration tape. Remove the protection layer of the anti-vibration tape and mount the autopilot in any direction you like, the actual direction can be selected during configuration procedures later. It’s recommended to mount the autopilot as close to the centre of gravity as possible.
![image](https://user-images.githubusercontent.com/42961200/151693563-b98be579-35a7-4fb2-82c2-c94c8af8e425.png)

 {% include note.html content="'FRONT' arrow indicates the original flight direction. This can be changed in the settings later." %}
 
{{site.data.alerts.hr_shaded}}

#### GNSS / MAG
[GNSS / MAG]() provides positioning information to the system and is sensitive to EMI noise. Make sure to place the GNSS module as far away as possible from:
* Main body of the airframe
* RF emitting devices, such as video transmitters
* High-current cables (ESC / motors power supply)

It’s recommended to use GPS mast for GNSS positioning. Connect the cable and put the GPS on the mast.
![image](https://user-images.githubusercontent.com/42961200/151693645-d1bdb41a-dcdd-4675-a8da-c43153a35c7a.png)

{{site.data.alerts.hr_shaded}}

### Connecting Peripherals
#### Metal case version
Ports pinout for the front and rear panels
![image](https://user-images.githubusercontent.com/42961200/151693670-49f2e13a-fa05-454a-9a7c-99052e48b7ef.png)

Front panel connectors pinout:
![image](https://user-images.githubusercontent.com/42961200/151693674-2e359ea0-b125-46f2-bbd1-09ee7cf66ff8.png)

Rear panel connectors pinout:
![image](https://user-images.githubusercontent.com/42961200/151693680-e24438c0-0562-4007-b687-a22215a33013.png)

#### Plastic case version
Front panel connectors pinout:
![image](https://user-images.githubusercontent.com/42961200/151693697-08674ff0-13b6-4cc6-a021-e7957c9e6f98.png)

Rear panel connectors pinout:
![image](https://user-images.githubusercontent.com/42961200/151693706-06e18e8b-f3a0-4488-a0d0-53f410e0dbc2.png)

{{site.data.alerts.callout_warning}}
Make sure NOT to mix up polarity. GND line (black) is always nearer the edge (bottom)
{{site.data.alerts.end}}

### RC Receiver
Connect PPM / SBUS output on the RC receiver to PPM / SBUS input port on SmartAP.
![image](https://user-images.githubusercontent.com/42961200/151693751-d98589fc-6c6f-42b8-b271-3c45d6c3f6a1.png)

{{site.data.alerts.hr_shaded}}

### ESC / Motors PWM
Connect ESC cables to SmartAP PWM outputs 1-12 depending on the number of motors your airframe has. The first motor is always front or front-right, and its spinning direction is CCW. Supported airframe types and motor numbers / spinning direction are shown below.
![image](https://user-images.githubusercontent.com/42961200/151693771-30680397-c2ba-48a7-92e8-d656d6215fad.png)

 PWM signals is the top wire, GND is the bottom one.
{{site.data.alerts.callout_primary}}
If you can’t find your airframe in the list above, please, let us know and we’ll add your airframe!
{{site.data.alerts.end}}]

{{site.data.alerts.hr_shaded}}

### GNSS / MAG
Connect the one side of the cable to the GNSS module and the other one to the GPS / MAG port on the autopilot as shown in the images below:
![image](https://user-images.githubusercontent.com/42961200/151693830-768724ce-170e-4160-8c2f-b75b9cba3738.png)

{{site.data.alert.hr_shaded}}
### Telemetry Module
Connect the one side of the cable to the air telemetry module and the other one to the RADIO port of the autopilot as shown in the images below:
![image](https://user-images.githubusercontent.com/42961200/151693837-f6f447e3-b75b-4d68-8fbd-b5ce1df42f53.png)

### Power Module
Connect the power supply cable (10-36 V, 3S – 8S) to the main power distribution board of the UAV.
![image](https://user-images.githubusercontent.com/42961200/151693849-2d81898b-2756-49e0-85e1-636397714212.png)

{{site.data.alerts.hr_shafed}}

### Electromagnetic sounder
![image](https://user-images.githubusercontent.com/42961200/151693870-63d4c8e2-87f7-40b5-bf8b-dd6d8aa0263f.png)

{{site.data.alerts.hr_shaded}}

### Camera trigger
SmartAP MAX supports automated camera triggering interface:
* PWM output - if you want to use PWM output, simply connect the camera trigger activator into any free PWM channel and configure the port number later in the settings.
* Relay commutation - if you want to use relay, connect the pins (these should be shorted / unshorted depending on activation) to relay pins RCOM and ROUT (marked yellow):
* ![image](https://user-images.githubusercontent.com/42961200/151693895-6b5d8b60-47d9-4354-b0b0-bbde5cefb6b1.png)

If you would like to use camera feedback at the exact moment the photo was taken (for log file and precise geotagging later), then you need to connect CS and GND pins marked above to the signal and ground of the interface, thus providing camera feedback.

{{site.data.alerts.hr_shaded}}

### Assembled System
Fully assembled and mounted system should look as follows:
![image](https://user-images.githubusercontent.com/42961200/151693903-73e6e12c-7441-4deb-b6e5-8044e4a3022a.png)


### CAD Model
Download STEP files of  for integrating into your own design:
[SmartAP-MAX-STEP.zip](https://github.com/aiegoo/sky-drones/blob/master/3d/SmartAP-MAX-STEP.zip)

## SmartAP PRO
Introduction
[smartAP PRO]() Autopilot is the latest generation of professional flight control systems for multirotor Unmanned Aerial Vehicles, capable of fully autonomous flight.
The system has a powerful microcontroller, multiple redundant 9-axis Inertial Measurement Unit (IMU) (Gyroscopes, Accelerometers, Magnetometer) with temperature stabilization, integrated telemetry module, and an external  module with an integrated magnetometer. SmartAP supports any type of multirotor UAV with outstanding navigation and precision control.
![image](https://user-images.githubusercontent.com/42961200/151693930-d85c31b5-69a2-4aa9-8bc0-dd0f7c0d6ed1.png)
{{site.data.alerts.hr_shaded}}

### Set Includes
![image](https://user-images.githubusercontent.com/42961200/151693949-af4466d6-f2d5-4f9c-9303-f2dc2e3c5fe3.png)

1. SmartAP PRO Flight Controller main board
2. External GNSS / Magnetometer module
3. Ground telemetry module
4. Onboard telemetry antenna
5. High-gain ground telemetry antenna
6. Power input cable
7. MicroSD card with SD card adapter

{{site.data.alerts.hr_shaded}}

### Description
#### Capabilities
Outstanding flight stability in all modes - manual (user control), position hold (semi-autonomous control) and auto (fully autonomous navigation and control)
Temperature-stabilized IMU
Fully compatible with  Ground Control Station for configuration and mission planning
Integrated OSD (On-Screen Display for FPV)
Accurate GPS position hold (up to 40cm with good GNSS reception quality)
Accurate altitude hold (up to 10 cm), manual altitude override option
Return to home flight mode
Fully autonomous waypoints flight mode
Guided flight mode
Various failsafe events configuration and triggering
Operating temperature -40...+85C
![image](https://user-images.githubusercontent.com/42961200/151693976-c6a4ff74-9f15-43d4-b1e1-bda9afc5774b.png)
![image](https://user-images.githubusercontent.com/42961200/151693978-7c74a222-c605-4333-8b52-766fba10161b.png)

#### General
Powerful microcontroller 32 bit 168 MHz STM32F4 ARM Cortex M4
Compact board size of 8x8 cm (3.15"x3.15"), weight 60g, 6 layers PCB design
Power supply from the main LiPO battery (3S - 14S) support, up to 60 volts
Power supply from BEC 5V support
12V, 5V, 3.3V generated onboard
Integrated GNSS receiver UBlox NEO M8N, GPS/GLONASS, up to 24 sats, 10 Hz), active antenna
Exnternal GNSS module support (primary configuration)
Integrated 500 mW telemetry module (primary configuration)
External telemetry module support
Integrated OSD module
Up to 24 PWM I/O support (5V out, high-power)
SBUS input support
FrSky S.Port output support
USB interface for configuration / firmware update
Various communication lines (UART/USART, RS232, I2C, SPI)
6-pin JTAG port for programming / debugging
MicroSD card driven by 4-bit SDIO interface for data-logging / parameters
Backup battery for real-time clock and GNSS receiver
Integrated main LiPo battery voltage monitoring
4 ADC inputs, battery voltage / current monitoring
Electromagnetic sounder
3-channels bright LED support (up to 300mA/ch)
RGB LED support
2-channel solid state relay

#### Sensors
IMU: InvenSense MPU-9150
Magnetometer: Honeywell HMC5983L
Pressure sensors: MS5611

#### Flight Modes
Stabilization
Altitude hold
Position hold
Return to home
Autonomous waypoints flight
Guided
Follow me
Take off
Landing

#### Size and Weight
Length: 80mm
Width: 80mm
Height: 17mm
Weight: 39g

### Installation

{{site.data.alerts.callout_warning}}
WARNING!
1. Do not power on the board without GPS and wireless telemetry module antennas connected!
2. Do not disconnect antennas when the board is powered on!
Both of the above can void warranty on the device,
{{site.data.alerts.end}}

### Mounting the board
Mount your board on your copter airframe. It's highly recommended to mount the board as close to the geometrical centre of the copter as possible. Mounting should be done with four 3 mm nylon screws. Add rubber spacers to reduce motor vibration noise.

{% include note.html content="Note the "FWD" arrow during instillation - FWD = Forward" %}

### Connections
Connect the general peripherals as shown on the diagram below:
![image](https://user-images.githubusercontent.com/42961200/151694043-c38b89ea-4890-41af-8aee-821984a3ceff.png)

YOUTUBE

### External GNSS / MAG
If you’re using external GNSS / Magnetometer module board, the connection should be as following:
#### SmartAP PRO 0.2 and later
The GNSS / Magnetometer cable goes to its dedicated GNSS / MAG port with 6 wires (GND, SDA, SCL, RX, TX, 5V).
![image](https://user-images.githubusercontent.com/42961200/151694071-effbfb28-e2fa-4128-96bc-ed8065c150e4.png)

#### SmartAP PRO 0.1 and Earlier
The GPS cable (4 wires: GND, 5V, RX, TX) goes to its dedicated GPS port, whilst the magnetometer cable (I2C: SCL, SDA) goes to the dedicated magnetometer port as shown in the picture above.
![image](https://user-images.githubusercontent.com/42961200/151694078-aec3df0e-677b-453e-bf12-bac3f7af2039.png)

Make sure to place the GPS module as far as possible from:
* Main body of the airframe
* RF emitting devices such as transmitters
* High-current cables (ESC / motors power supply)

### GPS Receiver
Connect the GPS antenna to its designated GPS antenna port. Note: this is only for versions with the integrated GNSS module.
### RC Receiver
After mounting the board you need to connect the cables from the RC receiver to SmartAP PPM / SBUS input.
![image](https://user-images.githubusercontent.com/42961200/151694105-e7f9f023-fdae-485c-acca-97a347fd57b9.png)

You can also connect FrSky S.Port from FrSky receiver and get real-time telemetry on your FrSky transmitter (e.g. Taranis) screen. Simply connect the S.Port wire from the receiver to the Tel pin next to SBus input.

Channel assignments should normally be as follows:
Input channel 1 – Roll
Input channel 2 – Pitch
Input channel 3 – Throttle
Input channel 4 – Yaw
Input channel 5 – Mode selection
Input channel 6 – RTH Mode
Input channel 7 – Auto Mode

Modes can be remapped in the configuration software later.

### RSSI Monitoring
If you want the flight controller to read the information about RSSI (Received Signal Strength Indicator) from RC receiver - simply connect the RSSI output and GND from your RC receiver to PWM I/0 #13 for the flight controller. RSSI information will appear in the  and also on the OSD screen.

### Motors ESC
Connect ESC inputs to SmartAP PWM outputs 1-12. The first motor is always front or front-right, its spinning direction is CCW.
![image](https://user-images.githubusercontent.com/42961200/151694121-ac34c119-d4c1-4300-9c33-51457f37d666.png)

{{site.data.alerts.callout_warning}}
Be sure NOT to mix up polarity!
GND line (black) is near the edge, +5V line (red) in the middle, signal line (yellow) is on the upper row.
{{site.data.alerts.end}}

### Telemetry Module
Connect the telemetry antenna to the telemetry antenna port. If you would like to use a external telemetry module, connect GND, 5V, RX, TX pins of the telemetry port to your external telemetry module. Later, you will need to disable the onboard telemetry module within  configurator software.

### OSD Video
SmartAP has a integrated OSD (On-Screen display) module. This means that you can connect your camera output to the autopilot (instead of directly connecting to the video transmitter) and then connect the video output from the flight controller to the video transmitter. In this case, the autopilot will relay the flight information (mode, altitude, speed, battery status, etc.) on the screen. Connect the video camera to the video IN port on the autopilot (GND, 12V, VIN). Connect the video transmitter to the video OUT port on the autopilot (GND, 12V, VOUT).
![image](https://user-images.githubusercontent.com/42961200/151694150-5c8a0692-6b59-431c-a7b9-65af13a77dc0.png)

SmartAP OSD supports both PAL and NTSC video standards with automatic detection and configuration.

Installation
​
WARNING!
1. Do not power on the board without GPS and wireless telemetry module antennas connected!
2. Do not disconnect antennas when the board is powered on!
Both of the above can void warranty on the device,
Mounting the board
Mount your board on your copter airframe. It's highly recommended to mount the board as close to the geometrical centre of the copter as possible. Mounting should be done with four 3 mm nylon screws. Add rubber spacers to reduce motor vibration noise.
Note the "FWD" arrow during instillation - FWD = Forward
Connections
Connect the general peripherals as shown on the diagram below:
YOUTUBE
External GNSS / MAG
If you’re using external GNSS / Magnetometer module board, the connection should be as following:
SmartAP PRO 0.2 and later
The GNSS / Magnetometer cable goes to its dedicated GNSS / MAG port with 6 wires (GND, SDA, SCL, RX, TX, 5V).
SmartAP PRO 0.1 and Earlier
The GPS cable (4 wires: GND, 5V, RX, TX) goes to its dedicated GPS port, whilst the magnetometer cable (I2C: SCL, SDA) goes to the dedicated magnetometer port as shown in the picture above.
Make sure to place the GPS module as far as possible from:
Main body of the airframe
RF emitting devices such as transmitters
High-current cables (ESC / motors power supply)
GPS Receiver
Connect the GPS antenna to its designated GPS antenna port. Note: this is only for versions with the integrated GNSS module.
RC Receiver
After mounting the board you need to connect the cables from the RC receiver to SmartAP PPM / SBUS input.
You can also connect FrSky S.Port from FrSky receiver and get real-time telemetry on your FrSky transmitter (e.g. Taranis) screen. Simply connect the S.Port wire from the receiver to the Tel pin next to SBus input.
Channel assignments should normally be as follows:
Input channel 1 – Roll
Input channel 2 – Pitch
Input channel 3 – Throttle
Input channel 4 – Yaw
Input channel 5 – Mode selection
Input channel 6 – RTH Mode
Input channel 7 – Auto Mode
Modes can be remapped in the configuration software later.
RSSI Monitoring
If you want the flight controller to read the information about RSSI (Received Signal Strength Indicator) from RC receiver - simply connect the RSSI output and GND from your RC receiver to PWM I/0 #13 for the flight controller. RSSI information will appear in the  and also on the OSD screen.
Motors ESC
Connect ESC inputs to SmartAP PWM outputs 1-12. The first motor is always front or front-right, its spinning direction is CCW.
Be sure NOT to mix up polarity!
GND line (black) is near the edge, +5V line (red) in the middle, signal line (yellow) is on the upper row.
Telemetry Module
Connect the telemetry antenna to the telemetry antenna port. If you would like to use a external telemetry module, connect GND, 5V, RX, TX pins of the telemetry port to your external telemetry module. Later, you will need to disable the onboard telemetry module within  configurator software.
OSD Video
SmartAP has a integrated OSD (On-Screen display) module. This means that you can connect your camera output to the autopilot (instead of directly connecting to the video transmitter) and then connect the video output from the flight controller to the video transmitter. In this case, the autopilot will relay the flight information (mode, altitude, speed, battery status, etc.) on the screen. Connect the video camera to the video IN port on the autopilot (GND, 12V, VIN). Connect the video transmitter to the video OUT port on the autopilot (GND, 12V, VOUT).
SmartAP OSD supports both PAL and NTSC video standards with automatic detection and configuration.
Check the voltage ratings for your video camera and video transmitter! SmartAP outputs 12V and normally camera and video TX require a 12V power supply, however, some of the cameras / transmitters need 5V or other specific voltage levels. Check this carefully and provide the required voltage level. Otherwise, it can damage your camera / video TX!

### Electromagnetic ounder
Connect your electromagnetic sounder to the BUZ port of SmartAP.

### Power Supply
Connect the power supply cable from your main power distribution board on the UAV:
SmartAP PRO 0.1 and earlier: 10-36 V, 3S – 8S
SmartAP PRO 0.2 and later: 10-60 V, 3S – 14S

### LED & Buzzer
Buzzer: 12V, 0.2A (included in the kit) LED 1-4: 12V, 0.2A per each channel (enough to power an LED strip of 25cm in length)

### Pressure Sensor Foam
The pressure sensor is highly sensitive to the air pressure noise generated by the props and sunlight. It’s highly recommended to add foam coverage on the pressure sensor to decrease the noise effect and improve measurements. This will result in more precise altitude hold positions. For example:
![image](https://user-images.githubusercontent.com/42961200/151694221-a110444f-57e5-4f00-a9d3-8d5541ac3d77.png)

### Dimensions
Dimensions of the board are 80x80mm. Diameter of mounting holes is 3mm, and distance between the centre of the mounting holes and board edges is 4.5 mm.
![image](https://user-images.githubusercontent.com/42961200/151694225-1c3dfebb-c236-44bb-9655-0504eac91082.png)

SmartAP PRO v .2 pinout
SmartAP PRO v .1 pinout
![image](https://user-images.githubusercontent.com/42961200/151694231-5eccf80b-08a0-4c0e-8e03-60a6172670d1.png)

SmartAP PRO v .0 pinout
![image](https://user-images.githubusercontent.com/42961200/151694237-276e3ef2-8391-41fb-9d22-520c8f53da13.png)

Dimensions of the board are 80x80mm. Diameter of mounting holes is 3mm, and distance between the centre of the mounting holes and board edges is 4.5 mm.
SmartAP PRO v .2 pinout
SmartAP PRO v .1 pinout
SmartAP PRO v .0 pinout

## Drivers
Occasionally the operating system can not detect the drivers or detects the drivers incorrectly. If you're experiencing any issues with connecting to the flight controller or firmware update procedure then you should reinstall the driver.
{{site.data.alerts.callout_primary}}
It's recommended to uninstall all previous drivers associated with the autopilot before proceeding to the next steps.
{{site.data.alerts.end}}

First of all go to the Device Manager and delete the existing drivers if they are already installed. Then plug the flight controller into the USB port. You'll see a message that the new device has been discovered:
![image](https://user-images.githubusercontent.com/42961200/151694270-36e8061d-a074-4984-98d6-025933e99ac5.png)

If you click on the message you'll see more detailed information. The operating system is trying to find the driver for SmartAP Autopilot and its bootloader.
![image](https://user-images.githubusercontent.com/42961200/151694277-1cd16c81-36da-4e60-94cd-a36403152061.png)

It is unlikely that the driver will be found automatically, so you'll need to go to Device Manager and set the correct driver. When you open Device Manager you'll see SmartAP as an unknown device.
{{site.data.alerts.callout_info}}
If you cannot see SmartAP bootloader in the devices list it's probably because the devices is hidden. To make the bootloader device visible (not only for the initial three seconds after power up but for the foreseeable) you can enable hidden devices in windows device manager using the steps below.
{{site.data.alerts.end}}
* Open CMD as administrator
* Run SET DEVMGR_SHOW_NONPRESENT_DEVICES=1
* Type devmgmt.msc into the open device manager
* Click View > Show hidden devices
More information and further details on the steps above can be found [here]()
![image](https://user-images.githubusercontent.com/42961200/151694289-306015e9-ca0b-485f-a2a7-fb438df0b02e.png)

Right click on it and choose Update Device Driver.
![image](https://user-images.githubusercontent.com/42961200/151694328-7e31f6be-f181-4519-a29e-7dec0332f20b.png)

Then choose Browse my Computer for Driver Software. Go to the  section of the Sky-Drones website and get the driver .inf file for the autopilot. Specify the location of the driver in the Browse menu.
![image](https://user-images.githubusercontent.com/42961200/151694332-d3accf19-fdc6-4c6d-b21e-0ad6a94dcc5d.png)

When the below pop up window comes choose Install this driver software anyway
![image](https://user-images.githubusercontent.com/42961200/151694336-48b6045b-0463-42fe-9d9c-0c29f98be6b4.png)

The process might take a few minutes.
![image](https://user-images.githubusercontent.com/42961200/151694338-b81fdd62-50d6-43e3-8ee2-5008200fbabe.png)

Once it's completed you can see the message that the driver was successfully installed.
![image](https://user-images.githubusercontent.com/42961200/151694343-ba1615ff-9b42-4721-9c62-5a4fb387996a.png)

Unplug and plug in the USB cable of the autopilot to reboot the board. When you next go to Device Manager you'll see that the driver is now installed successfully:
![image](https://user-images.githubusercontent.com/42961200/151694346-5e917274-3f74-4d7c-853e-29ee31ac8c65.png)


## Getting the Software
Go to  to download the all new [SmartAP GCS]() .
![image](https://user-images.githubusercontent.com/42961200/151694386-1b766095-7bba-4ee5-9f1c-d5ca60e2807d.png)

Please refer to [SmartAP GCS signup section]()

## General Configuration
It's recommended to use USB connection instead of wireless telemetry connection for the steps below.
{% include youtubePlayer.html id=page.youtubeID1 %}

First of all, connect to the flight controller using the links management menu in the top-right corner. Then, click the gear icon in the left side of the toolbar: flight controller settings will appear.
{{site.data.alerts.hr_shaded}}

### General
The general tab provides major information about the hardware you're using, installed firmware version, and unique ID of the flight controller.
![image](https://user-images.githubusercontent.com/42961200/151694514-953be2c8-43f9-4552-b57c-bd7b0947f54c.png)

### Airframe
The airframe tab allows you to configure your vehicle type.
![image](https://user-images.githubusercontent.com/42961200/151694521-f45c91f4-e302-43c7-814b-229e65755fc4.png)

Click AIRFRAME and choose your airframe from the list. If you can’t see your airframe there – feel free to  and we’ll add your specific airframe type for you.
![image](https://user-images.githubusercontent.com/42961200/151694526-13d7f951-e247-44da-90dd-c5278de4b1ae.png)

Channel mapping and propeller rotations are shown on the corresponding images.

### System Orientation
You can choose the desired orientation of the flight controller and GNSS module from corresponding orientation menus.
![image](https://user-images.githubusercontent.com/42961200/151694543-37a3ca22-387e-4d0c-9195-8e137aaff333.png)

### Landing Gear
SmartAP allows you to configure automatic control of retractable landing gear. Simply select the output channel where your servo is connected to and adjust the minimum/maximum values as you desire. You may apply reverse if needed.

### Motors IDLE Speed
If you want the motors slightly spinning when the system is armed you can set motors IDLE speed to the desired value.
![image](https://user-images.githubusercontent.com/42961200/151694558-0b8b4490-8e1c-4cc7-9506-0ce4b7b05514.png)

### Radio
Go to the RADIO tab and choose the RC receiver protocol corresponding to the one you’re using. SBUS or PPM receivers are recommended. This change will take effect after the system is has been reset. Therefore, you will need to reboot the autopilot and connect again if you have made such changes so as to ensure the changes are applied immediately.
![image](https://user-images.githubusercontent.com/42961200/151694571-a9b9f8d1-cf95-40fb-9c78-62f263800ee6.png)

Go to Settings > RADIO and make sure that your RC radio is turned on. You’ll see the sposition of the sticks displayed. Press theCALIBRATE button and move all sticks to their end points. Switch off the radio.
![image](https://user-images.githubusercontent.com/42961200/151694579-21e6b3e7-d497-44fe-952c-9a24b418c766.png)

When it’s done – press the STOP button to stop calibration and save parameters. You can remap any action to the desired channel and apply reverse if needed.
![image](https://user-images.githubusercontent.com/42961200/151694583-57ae8ff4-4b6d-4b4d-be7a-9291fae3daa5.png)

### Sensors
Sensors configuration tab allows users to perform accelerometer, gyroscope and magnetometer calibrations which are very important for heightened flight performance.
![image](https://user-images.githubusercontent.com/42961200/151694587-b0a4fdf1-0cb0-4564-9a40-bdf55646f947.png)

### Accelerometer Calibration
Click theCALIBRATE button near accelerometer data. Click START and follow the instructions shown after the procedure has begun.
![image](https://user-images.githubusercontent.com/42961200/151694591-cd46a34f-6447-4c8f-8c97-423134d0d705.png)

For accelerometer calibration you’ll have to place the autopilot in 6 positions:

* Top side up
* Top side down
* Left side down
* Front side down
* Right side down
* Rear side down
{{site.data.alerts.callout_info}}
It’s highly important to hold the system still in each position during the calibration. In each step the axis should be aligned with g-acceleration vector as precise as possible.
{{site.data.alerts.end}}

### Gyroscope Calibration
Click the CALIBRATE button near gyroscope data. Keep the board vert still and click START. Follow the instructions shown once the procedure has begun.
![image](https://user-images.githubusercontent.com/42961200/151694617-a978b3c4-8bfc-4612-9bf0-2180b90f2a51.png)

### Magnetometer
Magnetometer calibration is highly important for precise position hold and autonomous flight modes. Make sure that you’re outdoors and don’t have any metals around you or in your pockets (e.g. keys, cell phones, etc) before calibration.

Press CALIBRATE near magnetometer data and follow further instructions. You will need to rotate the vehicle around three major axes (roll, pitch, yaw). After 60 seconds, the magnetometer calibration will be automatically completed and the pop-up calibration message will disappear.
![image](https://user-images.githubusercontent.com/42961200/151694621-dbcfc85f-47c5-4459-ac89-3ad317a846f3.png)

### GNSS Configuration
{{site.data.alerts.callout_info}}
Make sure that the GPS module is connected to the autopilot before proceeding to this step. Also, make sure that the green LED indicating power supply of the module is solid green (NOT flashing)
{{site.data.alerts.end}}

The sensors tab allows users to configure the GNSS module with the default parameters and messages required to work in unison with SmartAP Autopilots. Click theCONFIGURE button near GNSS data. Click CONFIGURE in the new window again and configuration changes will take an effect after system reboot.
![image](https://user-images.githubusercontent.com/42961200/151694644-d03bd0d9-632e-4476-aa44-5dbc9d4d0b8d.png)

### Battery
Set battery sensor type. The system supports several battery sensors, including:

Generic power module
SmartAP PDB
SmartAP 3.x internal monitoring
Custom
![image](https://user-images.githubusercontent.com/42961200/151694651-0c5d54fd-a847-4776-91c0-8fa071ec00f6.png)

Set battery cells number and capacity. The system will notify you when the charge is too low.

If you're using a custom sensor then select Custom and provide the scalers for voltage and current. The scale value can be calculated as follows:

SCALE VALUE = SENSOR RANGE / 4096

### Tuning
SmartAP Autopilot is based on P-PID control algorithm. It means that the stabilization (the ability to stay in the air) and navigation (the ability to follow a desired trajectory) control algorithms include two loops: angle and rates control and position and velocity control. By default the gains (PIDs) are set to be the average for the majority of airframes, configurations, etc. Of course the parameters can be tuned precisely for better flight performance.
![image](https://user-images.githubusercontent.com/42961200/151694670-b2d4c487-93ab-4a52-944b-5f980062a3fb.png)

Here is a brief guide for PID tuning:

1. Set all values to default.
2. It's very important to tune the stabilization loop as precisely as possible since navigation is based on stabilization, so if not done properly, the vehicle will not hover and fly waypoints as precisely as you might like.
3. The most important parameters are Stabilization Rate Roll / Pitch. Increase it until you see high-frequency oscillations or decrease it if you can already see them. Normally, this value is in between 0.1 – 0.2 depending on your airframe size, motors, ESC, props and vibration levels.
4. If you can see low-frequency oscillations – it means that your Stabilization Angle Roll / Pitch is too high and you need to decrease it. This value lays in range between 3 - 6.

Navigation gains can be tuned using the same approach, however, this is not essential as the values are fine by default for the majority of vehicle types.

More information on default gains is available in the  section of this documentation.

### Control
Control tab allows users to manual configure control sensitivity, horizontal and vertical speed limits in various modes, and failsafe actions.
![image](https://user-images.githubusercontent.com/42961200/151694701-48dba4a8-8c6f-4b60-b46e-e3676168007d.png)

### OSD
The OSD tab provides settings for On-Screen Display module configuration.
![image](https://user-images.githubusercontent.com/42961200/151694710-a627b776-0f5a-433c-b37b-60877e23911c.png)

In OSD settings you can:

Enable / disable the OSD module
Select either metric or imperial units depending on your preference
Narrow the overlay area to fit the information on the screen
Choose specific parameters you would like to be shown

OSD supports both PAL and NTSC video standards with auto-detection and selection. A typical information layout is shown on the images below:

PAL Layout
![image](https://user-images.githubusercontent.com/42961200/151694730-1b51ae68-0ed4-46ea-be3d-2880c29ad520.png)

NTSC Layout
![image](https://user-images.githubusercontent.com/42961200/151694736-4c3c4b8c-7161-4a5d-90a7-e0fddc72d90e.png)

The actual layout on the screen typically looks as follows:
![image](https://user-images.githubusercontent.com/42961200/151694740-90eecfa5-7c79-45a4-8c35-11b6135a6b4f.png)
![image](https://user-images.githubusercontent.com/42961200/151694744-471a2445-aa46-41a3-8d56-e3965166ba06.png)

### Camera
The camera tab allows you to configure the camera gimbal and shutter control settings.
![image](https://user-images.githubusercontent.com/42961200/151694752-a24d0c4a-e944-4f4d-ada2-096f673700de.png)

Gimbal: the system supports 3-axis gimbal stabilization with flexible configuration for minimum and maximum output angles as well as minimum and maximum raw output values on the physical layer (PWM is used). As an option, the output can be reversed.
![image](https://user-images.githubusercontent.com/42961200/151694757-c5f55281-c757-4d18-a0df-ac65758b2eb8.png)

Shutter: shutter configuration has settings for minimum and maximum output values for the triggering pulse. Interval is the length of time the pulse should be in an active state to initiate the shutter of the camera to trigger.
![image](https://user-images.githubusercontent.com/42961200/151694761-2141feb6-735a-4774-be3d-ac4c05bf22f8.png)

### Parameters
The parameters tab gives you direct access to all parameters available in the system.
![image](https://user-images.githubusercontent.com/42961200/151694765-10a8b3f3-88a6-4c07-9786-b40610d772f8.png)

## Firmware Update
DANGER!
NO BATTERY, USB CONNECTION ONLY!
Do not connect the main battery for the steps below. Use USB connection only!
Latest firmware installation
If you can see an exclamation mark icon ( ! ) when pulling out the left-hand toolbar, it means that there is a firmware update available.
Click Firmware and you will see the pane containing all the necessary information about the latest firmware, the upgrade button, and a progress indicator.
You can click WHAT'S NEW if you want to learn more about the features introduced in the latest update, or click UPGRADE to begin the procedure. The firmware will be downloaded from Sky-Drones Cloud platform.
Sometimes after pressing the button you might see the reboot request. Simply plug out and then plug in flight controller USB cable.
If the upgrade procedure still has not started, make sure you don't have any other serial (COM port) devices connected to your computer.
Once the procedure has begun, you will see a progress notification and status update like the image below. Usually, an update takes between 30 to 60 seconds.
After upgrading, you will see this confirmation message:
Custom firmware upload
If you want to upload custom firmware you may do that by clicking the "Options" icon (three dots) in the top-right corner. Simply click Custom Firmware File, select the file you want to flash and follow further instructions.
Getting the Log
If you're struggling during the firmware upgrade you might want to see the logs to further understand the issue or provide this information to our support team if you choose to contact us for assistance. Simply click the "Options" icon (three dots) in the top-right corner and select Show Update Log.


## Standard PID Presets
This section includes default parameter examples for various configuration types. You can find the airframe that most suits you and have parameter values for reference during tuning.
MicroDrones MD4-1000 Quadcopter
​

​
T960 Hexacopter
​

​
F450 Quadcopter
​

​
3DR Hexacopter
​


## Flashing Bootloader
Tools Required
Manufactured boards come WITHOUT bootloader pre-installed. You can easily flash them yourself. The tools needed include:
ST-Link v2 ARM JTAG Debugger
ARM JTAG Mini connector 1.25 mm pitch
Connections
ST Link debugger looks something like this:
You will need to connect the ST-Link pins to your SmartAP Pins.
The reference for ST Link pins:
The reference for SmartAP JTAG pins (view from top):
Your connection should look like the below:
Your autopilot and ST Link debugger should be powered via USB only.
Flashing
Open STM ST Link Utility and then go to Target > Program and Verify:
Select the bootloader file to flash:
Finally, press Start
Once completed you'll see the following:
If you now see the board LEDs flashing, congratulations! Bootloader has been successfully flashed! Now you're able to install the firmware.


## SmartAP PDB
Introduction
SmartAP PDB (Power Distribution Board) allows users to transfer power from the battery to ESCs / motors, and generate a power supply for the flight controller and other peripherals with different voltage levels.
PDB provides the functionality for battery voltage / current measurements. SmartAP PDB makes high-power line connections easier and much more reliable.
Features
Size: 65x65 mm, 4no. 3mm mounting holes
Input voltage up to 60 Volts (14S)
Capability to handle extremely high currents (peak current up to 400A)
Power input from the main battery, possibility to connect up to 4 independent batteries
12 pairs of pads (6 top, 6 bottom) for powering up to 12 motors (all possible airframe configurations supported)
Integrated voltage and current sensors
Integrated DC-DC converter from 10-60 V input (up to 14S battery) to 5V output to power peripherals
Integrated DC-DC converter from 10-60 V input (up to 14S battery) to 12V output to power peripherals
5V and 12V power output terminals (standard 2.54mm/0.1" connectors)
Integrated loud electromagnetic sounder (buzzer)
Power output for the flight controller (both 5V and battery VIN)
Fully compatible with all ​
For further information, please refer to the  section.
Manufacturing process
At Sky-Drones, we pay extremely high attention to the design of our hardware including manufacturing, inspection and quality control. The reliability of your drone is directly affected by the quality and reliability of the hardware inside, so it's our responsibility to you to take extra are. Take a look at the video below: it demonstrates the essential steps in our hardware production process in our UK factory before being shipped worldwide to our customers.

### Installation
SmartAP PDB (Power Distribution Board) is used for batteries and ESC connection. The board has integrated voltage and current sensors, buzzers, and 5V and 12V outputs.https://youtu.be/h67RtzKW6a4
High input voltage recommendations
WARNING: When input voltage is higher than +35V (8S+ battery) then it's highly recommended to attach Aluminum Electrolytic Capacitor to the power input pads with the rating of at least 100 uF / 100V.
Recommended part number: B41851A9227M000 or similar specs
Pinout
The SmartAP PDB pinout diagram is shown below. The larger pads in the rear side are intended for the main battery connection. Up to 4 independent batteries can be connected using the thick wires (e.g. 8-10 AWG). The thick wires are essential to be able to handle high current loads. Both top and bottom, and left and right sides have pads for a ESC power supply connection. Therefore, up to 12 ESCs can be connected.
Soldering
NOTE: It's strongly recommended to use a powerful solder iron (at least 80W). A weaker soldering iron produces a high chance of a cold joint which can significantly reduce the reliability of the elements.
Soldered Power Distribution Board should look as follows:
​
Powering the autopilot
SmartAP PRO
​ autopilot is capable of receiving power directly from the main battery, therefore, specially dedicated solder terminals can be used. If you require the autopilot to receive the current sensor (integrated in PDB) readings, simply connect the GND, 5V, CURRENT signals of the PDB using a standard cable to the flight controller.
WARNING: SmartAP gets power directly from the PDB which is connected to the main battery, therefore, supply voltage is the same as your battery voltage. This means that it can be up to:
36V (8S) for SmartAP 3.0
36V (8S) for SmartAP 3.1
SmartAP MAX
SmartAP MAX gets its power and voltage / current readings from the PDB using a standard 6-pin cable with Molex PicoBlade connectors. Simply connect the cable to the PWR connector of the autopilot.
Buzzer support
SmartAP PDB has an integrated electromagnetic buzzer (sounder) which is used for audio notifications, alerting users to the system status. Simply connect the BUZZER and GND signals of the flight controller to BUZZER and GND signals of the PDB.
Voltage and current sensors
SmartAP PDB has integrated voltage and current sensors. The current sensor is located on the bottom side of the PDB. For the correct scale / offset configuration, please now and we'd be happy to help!

## Standard GNSS
Specifications
SmartAP GNSS is a compact GPS/GLONASS module with an integrated active antenna, UBlox Neo-M8N chipset and 3-axis magnetometer (compass). Fully compatible with .
Features
UBlox NEO M8N chipset based
Integrated SAW and LNA
25mm ceramic patch antenna
GPS / GLONASS support
Up to 24 satellites
18 / 10 Hz update rate (GPS / GPS + GLONASS)
Rechargeable 3V lithium backup battery
Ultra-Low noise 3.3V regulator
Power and fix indicator LEDs
Exposed RX, TX, 5V and GND pads
Integrated magnetometer - HMC5883L
Footprint for pressure sensor - MS5611-01BA03
UART port for GPS interface
Diameter 75 mm
Weight 18g
Fully compatible with ​
Package includes
GNSS module
Connection cable
Dimensions

## RTK GNSS
Specifications
This GNSS (GPS + GLONASS) module is base on RTK technology and was specially developed for  and is intended to be used in applications where precise positioning really matters. It's based on the latest and most precise UBlox Neo M8P chipset which provides outstanding position accuracy. The set includes a base station module with external active patch antenna, an airborne module with integrated patch antenna, and a set of cables.
Real Time Kinematic (RTK) satellite navigation is a technique used to enhance the precision of position data derived from satellite-based positioning systems (global navigation satellite systems, GNSS). It uses measurements from a phase of the signal carrier waves, rather than the information content of the signal, and relies on a single reference station or interpolated virtual station to provide real-time corrections, providing up to centimetre-level accuracy.
Features
Centimeter‑level GNSS positioning
Integrated Real Time Kinematics (RTK)
Smallest, lightest, and energy‑efficient RTK module
Complete and versatile solution due to base and rover variants
World‑leading GNSS positioning technology
UBlox NEO M8P chipset based
25mm ceramic patch antenna
GPS / GLONASS support
Up to 24 satellites
18 / 10 Hz update rate (GPS / GPS + GLONASS)
Rechargeable 3V lithium backup battery
Ultra-Low noise 3.3V regulator
Power and fix indicator LEDs
Exposed RX, TX, 5V and GND pads
Integrated magnetometer on airborne module - HMC5883L
UART port for GPS interface
USB for base station module
Airborne module cable length 30cm
Fully compatible with ​
Package includes
Base station module
Active patch antenna for base station module
Airborne module with integrated patch antenna
Connection cable

## Updating GNSS Module
In the event there is a need to update the configuration of GNSS receiver, this can be done for both airborne and ground module (RTK GNS). The latest configuration files, as well as the configuration tool, can be found in the downloads section on the Sky-Drones website ​
Getting U-Center
First of all you need to download and install UBlox U-Center utility. After completing the installation, run the program.
RTK GNSS Configuration update
Plug in RTK GNSS Module to the USB port of your computer and make sure that the green LED is solid (NOT flashing).
Go to U-Center utility and set up the connection in the top-left corner: choose the right COM port and set the baud rate to 115200.
Then go to Tools > GNSS Configuration and select the configuration file. SetStore configuration into BBR / Flash checked.
Press File > GNSS button, the update process should start.
If the messages dialog closes itself and you cannot see any error messages or reports, this means that the configuration of the GPS receiver has been successfully updated.
SmartAP PRO Onboard GNSS module update
Connect your FTDI cable to the GPS port of the flight controller as follows:
GND <-> GND
TX <-> RX
RX <-> TX
Do NOT connect 5V and/or power supply pin from FTDI cable to the flight controller! Flight controller will get the power from the USB cable. Set the boot switch in UPD (“Update”) mode, connect your USB cable to the flight controller and connect the FTDI cable to your computer. Your setup should look as follows: ![](../.gitbook/assets/smartap-gps-ftdi.png)
​
Once connected, proceed with the update steps described above.
Troubleshooting: if it seems that there is no connection to the GPS module, try changing the TX and RX pins of the FTDI cable connected to your flight controller. Note that sometimes the colours changing means the elements have been swapped.
Do not forget to put the switch back to the RUN position!

## CAD Model
Download the STEP files of SmartAP GNSS to integrate it into your own design:


## revision history
1.3.0
05.03.2018
- Updated SmartAP GNSS module information
1.2.9
03.01.2018
- Added OSD Layout image
1.2.8
01.11.2017
- Added camera settings to Configurator
1.2.7
28.08.2017
- SmartAP MAX Added
1.2.6
20.08.2017
- Added RSSI section
1.2.5
08.08.2017
- Added logs processing info
1.2.4
21.06.2017
- Added standard PID presets section
1.2.3
09.06.2017
- Info about the foam for pressure sensor updated
1.2.2
06.06.2017
- Added more information on SmartAP 3.2
1.2.1
02.06.2017
- Minor updates on index page
1.1.9
24.05.2017
- Added section about creating Region based waypoints
1.1.8
21.05.2017
- OSD information updated
1.1.7
15.05.2017
- Added SmartAP 3.2 pinout
1.1.6
12.04.2017
- Minor updates and support of offline PDF version
1.1.5
06.04.2017
- SmartAP GNSS v2 and v3 dimensions added
1.1.4
04.04.2017
- SmartAP 3.x dimensions image added
1.1.3
30.03.2017
- SmartAP Autopilot drivers installation section added
1.1.2
18.02.2017
- SmartAP 3.x PDB connections scheme added
1.1.1
17.02.2017
- SmartAP OSD extended documentation
1.1.0
12.02.2017
- SmartAP RTK GNSS information added
1.0.9
28.01.2017
- SmartAP OSD configuration info added
1.0.8
15.01.2017
- SmartAP PDB specifications added
1.0.7
02.10.2016
- SmartAP GCS for autonomous flight section added
1.0.6
29.03.2016
- Firmware update, GPS module update instructions
1.0.5
15.12.2015
- DFU generation section removed
1.0.4
13.12.2015
- GPS firmware update description
1.0.3
01.10.2015
- External GPS / Magnetometer connections
1.0.2
03.08.2015
- Added pinout description, PID tuning hints
1.0.1
09.12.2014
- Minor fixes in all sections
1.0.0
06.12.2014
- Initial release of the Guide
28.08.2017
- SmartAP MAX Added
1.2.6
20.08.2017
- Added RSSI section
1.2.5
08.08.2017
- Added logs processing info
1.2.4
21.06.2017
- Added standard PID presets section
1.2.3
09.06.2017
- Info about the foam for pressure sensor updated
1.2.2
06.06.2017
- Added more information on SmartAP 3.2
1.2.1
02.06.2017
- Minor updates on index page
1.1.9
24.05.2017
- Added section about creating Region based waypoints
1.1.8
21.05.2017
- OSD information updated
1.1.7
15.05.2017
- Added SmartAP 3.2 pinout
1.1.6
12.04.2017
- Minor updates and support of offline PDF version
1.1.5
06.04.2017
- SmartAP GNSS v2 and v3 dimensions added
1.1.4
04.04.2017
- SmartAP 3.x dimensions image added
1.1.3
30.03.2017
- SmartAP Autopilot drivers installation section added
1.1.2
18.02.2017
- SmartAP 3.x PDB connections scheme added
1.1.1
17.02.2017
- SmartAP OSD extended documentation
1.1.0
12.02.2017
- SmartAP RTK GNSS information added
1.0.9
28.01.2017
- SmartAP OSD configuration info added
1.0.8
15.01.2017
- SmartAP PDB specifications added
1.0.7
02.10.2016
- SmartAP GCS for autonomous flight section added
1.0.6
29.03.2016
- Firmware update, GPS module update instructions
1.0.5
15.12.2015
- DFU generation section removed
1.0.4
13.12.2015
- GPS firmware update description
1.0.3
01.10.2015
- External GPS / Magnetometer connections
1.0.2
03.08.2015
- Added pinout description, PID tuning hints
1.0.1
09.12.2014
- Minor fixes in all sections
1.0.0
06.12.2014
- Initial release of the Guide

{% include links.html %}

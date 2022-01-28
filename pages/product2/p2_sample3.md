---
title: Sample 3 Topic
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: p2_sample3.html
simple_map: true
map_name: usermap
box_number: 3
folder: product2
youtubeID:pOlX6_TUv1w
---

## SmartLink
SmartLink is a broadband digital datalink with an integrated onboard computer. Two HD video channels, telemetry and control with ultra-low latency and a range of up to 20 km.
![image](https://user-images.githubusercontent.com/42961200/151624340-a9195014-e734-484b-b71d-99981acee473.png)

SmartLink Launch Webinar
Recording of the LIVE webinar hosted by Sky-Drones Founder & CEO Kirill Shilov demonstrating the most advanced drone connectivity unit - SmartLink.

{% include youtubePlayer.html id=page.youtubeID %}

Description
Air module
​ Air is based on a powerful quad-core ARM Cortex A53 SoC (system-on-chip) computer running Linux. The system is capable of handling two real time HD video streams from cameras (CSI and HDMI), autopilot telemetry and control. It has an abundant supply of resources for user applications with various interfaces including USB, UART, I2C, and SPI allowing users to connect their desired payloads and tightly integrate it with their flight controller and / or ground control station. LTE connection is also available and is operated by plug and play technology.
Ground module
Ground module is extremely compact and lightweight. It has a micro USB connector to interact with any kind of device - laptops, smartphones, tablets, and desktop computers are all supported. All you need to do is connect it and open the  application. Ground module features an active cooling system which allows the module to withstand high ambient temperatures making it even more reliable in harsher environments. 2x2 MIMO technology provides higher bandwidth, lower latency and longer range.
How it works
Included in your set
SmartLink Ground Module
SmartLink Air Module
2x Air Module antennas
2x Ground Module antennas
CSI Camera
Telemetry cable
HDMI cable
Air Module power cable
Ground Module power cable
Interfaces
Software
SmartLink was specifically designed to be used with  - our powerful cross-platform ground control station.  supports:
2x HD video streams display
Full camera controls
Video recording on microSD card
Image capture on microSD card
Radio settings configuration
Drone control joystick
Payload control joystick
​ can be used on any platform and operating system including MacOS, Windows, iOS, Android and Linux. The software provides all status information on radio link including RSSI, SNR and allows you to dynamically change all major settings. For instance, operating frequency, bandwidth or power can be changed with one click. Remote module configuration is done automatically via the ground module.
Throughput and signal strength
Range, km
Modulation
Throughput, Mbps
Sensitivity, dBm
0 - 0.3 km
64QAM_5/6
27.8
-81
0.3 - 1 km
64QAM_3/4
25.5
-83.5
1 - 2 km
64QAM_2/3
22.8
-85
2 - 4 km
16QAM_3/4
17.1
-90
4 - 8 km
16QAM_1/2
11.6
-92
8 - 12 km
QPSK_3/4
8.8
-96
12 - 15 km
QPSK_1/2
5.9
-98
15 - 20 km
BPSK_1/2
3
-99.5

## Interfaces
This page describes general information and interface location for SmartLink Air and Ground modules.
Air Module
Top
Antenna SMA connectors
Left
5V DC power input socket
Reset button
CSI camera Port
USB for firmware upgrade
SPI 0 / 1
I2C 0 / 1
UART 0 / 1 (console and autopilot telemetry)
SPI 1
​
​
​
​
​
5V OUT
SPI1 SCLK
SPI1 MISO
SPI1 MOSI
SPI1 CS0
GND
I2C 0 / 1
​
​
​
​
​
5V OUT
I2C1 SCL
I2C1 SDA
I2C2 SCL
I2C2 SDA
GND
UART 0 / 1
​
​
​
​
​
GND
TEL TX
TEL RX
DBG TX
DBG RX
5V OUT
SPI 0
​
​
​
​
​
GND
SPI0 CS0
SPI0 MOSI
SPI0 MISO
SPI0 SCLK
5V OUT
TEL (Telemetry) port: TTL 3V3, Baudrate 57600
DBG (Debug) port: TTL 3V3, Baudrate 9600
Front
Front side has an integrated fan. It is important to have a clear space to allow for air flow circulation in front of this side.
Right
Mini HDMI input
Micro SD card slot
Camera status LEDs
Rear
USB A connectors for peripherals connection, for instance:
4G / LTE modem
Rockblock satellite communication system
FLARM ADSB system
Bottom
Ground Module
Top
The front side has an integrated fan. It's important to have a clear space to allow for airflow circulation in front of this side.
Left
TX: blinking when packets are being transmitted
RX: blinking when packets are being received
LNK: ethernet / USB link established
CPU: module operating
RSSI: signal quality
Front
SMA antenna connectors
Right
Reset button
Rear
USB to connect to computer / tablet
Power supply, 7-35V DC
Bottom


## Set content
Everything you need to setup and start using SmartLink
Unboxing video
SmartLink unboxing video
Set contents
SmartLink set includes everything needed to setup wireless communication for video, telemetry and control. A standard set contains:
SmartLink Ground module
SmartLink Air module
2x Air Module antennas
2x Ground Module antennas
CSI camera
Telemetry cable
HDMI cable
Air module power cable
Ground module power cable

## Installation
Preparing Air module
First of all, attach your antennas to the air module:
WARNING: DO NOT power up any of the modules without antennas! Powering up the modules without antennas may cause malfunction of the amplifier and permanent damage. Powering up without antennas voids warranty.
Then attach the power supply cable and autopilot telemetry cables:
Power supply goes to 5V DC connector
Autopilot telemetry cable goes to UART connector
What the air module should look like with power and telemetry cables connected:
Red cable in the autopilot telemetry cable is 5V power supply from SmartLink to Autopilot. If your autopilot is powered from its own power supply then remove the red cable. In this case you should only used black (GND) and yellow / green (Data TX / RX). By default, the whole cable is supplied without the red cable.
Connect CSI camera to camera socket. Use a small sharp tool to unlock the crimp:

## Manual Control
SmartLink allows users to transmit a manual control signal from any USB device (e.g. joystick, gamepad or RC radio with USB port) along with other messages when connected to ground control station.
In this demonstration we demonstrate how to setup manual control using FrSky Taranis radio in USB joystick mode. First of all, open  and go to Settings.
Then switch to the Joystick tab. Make sure your joystick is connected and selected from the dropdown menu.
Once you've selected the joystick you will be able to assign the channels according to your preferences. Make sure that Enable pilot joystick for control is checked, otherwise manual control messages will not be sent.
Additionally, you can connect a second joystick which will be used for payload control.
After that, if you go back to the World pane you will see a green joystick icon on toolbar. This means that the joystick has been configured successfully and is emitting a manual control signal.

## Change Settings
Accessing Settings Menu
SmartLink has various settings which you may change to optimize the performance. To get to 's settings menu click on the Wireless Connection icon on top toolbar:
Changing Radio settings
Radio tab allows you to change radio settings as well as observe current RSSI and SNR values for connection.
SNR - Signal Noise Ratio, the ratio of signal power to the noise power, expressed in decibels.
RSSI - Received Signal Strength Indication, a measure of the energy observed by an antenna when receiving a signal
It's recommended to keep output TX power for both air and ground module at low values when working with the system on the ground. 7 dBm is the minimum and recommended value. Use higher values when flying. Using high values over long periods of time near the human body might cause health problems due to radiation.
After changing any parameter click Save. It might take a few seconds to save changes applied. The system may loose connection when changing any parameter.
Changing Security settings
Security tab allows you to assign network name and encryption key. Connection is AES encrypted.
Make sure that both air and ground modules have the same network name and encryption key. Otherwise, the modules are not considered to be paired and won't connect to each other.

## API and SDK
​ system allows real time HD video, telemetry and control from one unmanned system.  features are fully integrated into  and are compatible with most of the popular ground control station software such as QGroundControl, Mission Planner, etc.
Find out more on using SmartLink with other GCS devices here: ​
Thanks to Sky-Drones' extensive API on the system, users can take advantage of its features in any third party software too!
Telemetry
To access telemetry on the ground module use the following connection:
Type: UDP
Host: smartlink.local
Port: 14555
​ will forward all autopilot telemetry to this port.
There are two other connections available for interacting with onboard computers, other peripherals and 3rd party applications:
First:
Type: TCP
Host: smartlink.local
Port: 14556
Second:
Type: UDP
Host: smartlink.local
Port: 14557
Video
To access the video on the ground module use the following address:
Type: RTSP
HDMI Input 1: rtsp://smartlink.local:8554/camera/0
HDMI Input 2: rtsp://smartlink.local:8554/camera/1
To check the video stream using a standard GStreamer pipeline use the following command:
gst-launch-1.0 rtspsrc location=rtsp://smartlink.local:8554/camera/0 ! rtph264depay ! avdec_h264 ! autovideosink sync=false
Manual Control
Manual control comes as a part of other MAVLink telemetry messages. MANUAL_CONTROL message from MAVLink specification is recommended but not exclusive. You may use any manual control messages according to your specification.  will act as a transparent transfer layer just like any other telemetry module.

## Other AP / GCS Support
QGroundControl
Follow these next steps to configure QGroundControl for :
Configuration settings
Connection type: UDP
Host: smartlink.local
Port: 14555
Autopilot UART: 57600 8N1 3V3 TTL
Mission Planner
Configuration settings
Connection type: UDP
Host: smartlink.local
Port: 14555
Autopilot UART: 57600 8N1 3V3 TTL
Telemetry
Make sure to select UDPCI as the connection type and click Connect:
Type in SmartLink IP address (192.168.168.100) or host name (smartlink.local) and click OK:
Type in SmartLink port number (14555) and click OK:
The connection will be established and Mission Planner will start reading parameters:
Video
Right click on the primary flight display and select Video > Set GStreamer source:
Use the following GStreamer pipeline to start the real time video in Mission Planner:
rtspsrc location=rtsp://smartlink.local:8554/camera/0 ! rtph264depay ! avdec_h264 ! videoconvert ! video/x-raw,format=BGRA ! appsink name=outsink sync=false
In case your system doesn't support local DNS (smartlink.local addressing) you will need to change smatlink.local to the static IP address of SmartLink: 192.168.168.100
Click OK to start the video feed:
After a few seconds the video feed will appear:

## Firmware Update
Using Ubuntu:
Get USB Boot Utility (only needs to be done once)
First of all, you will need USB boot utility which will force the system transition into bootloader state.
Download the USBBoot tool here: ​
Force SmartLink Bootloader Mode
Once you have the boot tool, let's start it and flash the firmware.
Open command line and locate USBBoot
Start bootloader tool
sudo ./usbboot
Connect USB cable, turn on power supply (make sure to connect USB cable before providing power)
After a few seconds the terminal will show that bootloader mode has been successfully enabled. Then you can proceed to flashing or saving the image file
Flash SmartLink Image from File
Enable bootloader mode as described in the steps above
Use lsblk or df -h to find out the mounting point of the unit (look for 3.9GB unit since eMMC of SmartLink has this amount of flash memory)
Locate the firmware file
To flash image from file (make sure to set correct filename and sdX):
gunzip --stdout IMAGE_NAME.img.gz | sudo dd bs=4M of=/dev/sdX status=progress
Upload process may take up to 15 minutes. Progress will be displayed on the screen.
 After upload process is complete, power off SmartLink before disconnecting the USB cable.
Save Current SmartLink as Image to File
You can save the entire eMMC of  to image file and later flash this to another  unit. Please follow these steps:
Enable bootloader mode as described in the steps above
Use lsblk or df -h to find out the mounting point of the unit (look for 3.9GB unit since eMMC of SmartLink has this amount of flash memory)
To save currently installed image to file (make sure to set correct sdX):
sudo dd bs=4M if=/dev/sdX status=progress | gzip > smartlink.img.gz
 After download process is complete, power off SmartLink before disconnecting the USB cable.
Using Windows / MacOS:
Get Boot Tool utility for forcing the bootloader
Please ensure you are not writing to any USB devices whilst the installer is running.
Download and run the  to install the drivers and boot tool.
Once the driver installation is complete, run the exe tool that was previously installed.
Plug micro USB cable into the micro USB socket marked USB on SmartLink.
Plug the other side of the USB cable in your computer.
Power up SmartLink. It's important to plug in the USB cable first and only then power up SmartLink.
After a few seconds, the SmartLink eMMC will pop up under Windows as a disk (USB mass storage device).
Get balenaEtcher for flashing the image
Download the Windows installer from ​
Run balenaEtcher and select the SmartLink OS image file
Select the correct storage drive (SmartLink)
Finally, click Burn to write the SmartLink OS image
You'll see a progress bar. Once complete, power down SmartLink first and only then unplug the USB cable.
Recovery procedure
If your  unit is not responding and you think eMMC might be corrupted / the device seems to be bricked, you will need to re-flash the image to eMMC. Please contact us  and we'll provide you with the link to the latest SmartLink image file.
Recovery images
Click below to download the recovery image. Make sure to the select the one which suits your SmartLink version:
​​
​## Troubleshooting
Unable to detect LAN network from ground module
In case you can't see that the LAN network from ground module was detected and established, then you would need to install the driver:
LAN Driver - Windows 8.1
LAN Driver - Windows 10
LAN Driver - Linux
LAN Driver - Mac OS
You can find the latest drivers from Realtek available .
In some cases you might need to disable ’system integrity protection’ and then instal the driver For instance,  is the demo video on how to disable SIP on Mac OS.
Unable to Ping smartlink.local - Unknown Host
Some operating systems might not have local DNS, resulting in the inability to access the system using the name (smartlink.local). This is known for all Android platforms and some Windows platforms. In case you can't ping smartlink.local or similar:
ping: cannot resolve smartlink.local: Unknown host
You'll need to find out the IP address for SmartLink. There are numerous ways to do this, we'll use the NMAP tool in this example. First of all, download and install NMAP tool using the relevant links below:
Linux
sudo apt-get install nmap
Mac OS
brew install nmap
Windows
Go to the official website for NMAP tool:
Select Latest stable release self-installer: nmap-7.80-setup.exe or similar. Download and install it.
Make sure to select Install Npcap in WinPcap API-compatible mode during the installation.
After installation is complete, open command line and go to NMAP folder:
cd "C:\Program Files (x86)\Nmap"
Looking up SmartLink's IP Address
Execute IP addresses scan within the required range, in our case it will be:
nmap 192.168.168.*
As a result of this command you'll see IP addresses in this range. You'll have 192.168.168.1 which is, as a rule, configured as air module, 192.168.168.2 which is usually configured as ground module and 192.168.168.x (x: 0-255) which is the IP address for SmartLink. You should use this IP address - 192.168.168.x for direct connection instead of smartlink.local.
No Internet Connection when SmartLink is Plugged into USB Port
Sometimes you might not be connected to the internet after SmartLink is plugged into the USB port and detected. SmartLink is identified as LAN connection and sometimes the operating system expects this to be a primary connection for accessing the internet. It is in fact not. You still have to use your LAN / WLAN for internet access and this has to be set in the operating system.
Do the following actions to enable internet access while SmartLink is connected:
Windows
Follow the steps from this tutorial to change the MTU value for network connections:
​​
A lower MTU value means higher priority for the interface. Therefore, you need to have the MTU value set lower for your LAN / WLAN network than for SmartLink networks
Linux
Open command line and execute the following command:
sudo ip route del default
Mac OS
Go to network connections menu and make sure that the Service Order is set higher for your LAN / WLAN connection but not SmartLink:

## Installation hints
Antenna Orientation
Orientation of the antennas is vital. Ground module has high gain 5 dBi antennas with a vertical plain radiation pattern is ~40 degrees. Therefore, antennas on the ground module should be placed vertically. If you want the system to be less reliant on antenna orientation then antennas should be changed to lower gain antennas (2-5 dBi). They will yield a lower range but will be less dependent on the orientation of antennas.
The image below demonstrates the relation between antenna gain, radiation pattern and range:
For a solid connection the copter should stay in the blue area. In this example, the range is anywhere in the 2 dB antenna blue circle. 9 dB antenna has a reduced area but a longer range for certain directions. Same rules are applied to antennas on copters, whose antennas are 3 dBi by default and should be placed vertically down (cable from antenna facing up to the sky). Another thing to consider for longer range - ground module should be placed higher off the ground. At least one meter is required but there is a significant difference between 1 meter and 2 meters off the ground; the higher the better! 1.50 - 2.00 meters is recommended.
Frequencies
The system operates at 2.4 GHz, therefore, it's recommended to keep 2.4 GHz band free from other devices.

## cad model

## FAQ
A selection of FAQs asked by our customers.
When will SmartLink be available to purchase?
SmartLink is already available! Just go to the  and head to the  section where you can find the full range of Sky-Drones products, including the SmartLink set.
Where can I find the product description?
This can be found on our website. For a generic product description, head to the . If you cannot find what you are looking for, we have a detailed description and setup instructions in our .
Is there PDF documentation available for SmartLink?
Whilst we do not have a dedicated PDF document, we do have the online portal that holds all the detailed documentation for the entire range of Sky-Drones products. All this documentation can he found .
How can I connect cameras to SmartLink?
SmartLink has 2 camera ports, 1 is CSI and 1 is HDMI. The CSI camera is included in the SmartLink set for your convenience, so camera connections are initiated by simple plug-and-play technology.
What about the software? How can I use the mission computer?
Our software is easy to access, set up, and configure. However we are more than happy to work with our partners and customers to provide a full step-by-step system setup. You can count on the support of the development team if you have any questions regarding software use, just drop us an email and we'll get back to you or schedule a call to talk you through it: info@sky-drones.com.
What is the achievable range with SmartLink?
It is possible to achieve an unlimited flight range with SmartLink. This depends on a variety of independent variables such as the antennas, instillation, environmental conditions, etc. but for example:
When using CE regulations which are 20dBm/100mW, the range would be between 4km and 6km
When using FCC which assumes 20dBm, you can reach up to 20km in range
How do I achieve an unlimited flight range?
For a range beyond 20km, we recommend using LTE connectivity as this has an unlimited range providing the drone remains in the LTE coverage area. If there is no 4G coverage you can use higher range antennas which will aid in extending the range for up to several dozen kilometres. These can be purchased from our .
What is Sky-Drones' manufacturing capability?
This is completely dependant on your requirements, but as a base point we can easily manufacture SmartLink units in the hundreds per month. Is it possible for us to manufacture the units in the thousands per month with prior notification from our clients.  to find out more.
Where is SmartLink manufactured?
SmartLink, and all hardware product in the Sky-Drones product range, are manufactured in a UK factory to ensure a high-quality product and production process throughout. Our materials come from specialised and certified vendors that we are proud to be doing business with.
Is it possible for clients to manufacture their own SmartLink units?
In short, yes. If you are a large volume manufacturer, Sky-Drones can help you with setting up licensing, materials, and the production processes to manufacture SmartLink yourself inhouse. It could save you time, resources, and money to do this so if it is something you are interested in,  with us to discuss your needs.




{% include links.html %}

---
title: Sample 2 Topic
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: p2_sample2.html
simple_map: true
map_name: usermap
box_number: 2
folder: product2
youtubeID: 8Q0s2Cpmm3Y
---



## Telemetry system
AIRLink Telemetry provides broadband AES-256 encrypted private channel for 20km.

{% include youtubePlayer.html id=page.youtubeID %}

### Set content
![image](https://user-images.githubusercontent.com/42961200/151568536-d0c82fcd-9cfd-4d81-99a2-16ccdec5a9d2.png)

- SmartAP AIRLink Telemetry set content
* 1x Ground module
* 1x Air module
* 2x Ground module antennas
* 2x Air module antennas
* 1x Telemetry cable
* 1x Ground module power cable

### General specifications
- Radio

|---
| Parameter | Value
| Technology | 2x2 MIMO
| Frequency | 2402 - 2477 MHz
| Power | up to 30 dBm / 1W
| Bandwidth | 4 / 8 MHz
| Encryption | AES-256
| Data rate | 25 Mbps
| Latency | < 100 ms
| Range  | 20 km

- Environmental

|---
| Parameter | Value
| Visibility | Direct, line of sight
| Ambient temperature | -40...+50°C

### Air module specifications
![image](https://user-images.githubusercontent.com/42961200/151568723-c6605444-31b5-4e68-a73f-742f852d0009.png)


- AIRLink Telemetry Air module
|---
| Parameter | Value
| Power input | 5V DC, 2A min
| Antennas | x2 SMA Omni 3dBi, 50 cm cable
| Interfaces | Ethernet, cooling fan output
| Dimensions | 50x50x30 mm
| Weight | 50 g

### Ground module specifications
![image](https://user-images.githubusercontent.com/42961200/151568832-f6701080-9efd-4c06-bddf-0355fea534fd.png)

AIRLink Telemetry Ground module

|---
| Parameter | Value
| Power input | 7-40V DC, 1A min
| Antennas | x2 RP-SMA 5dBi
| Interfaces | USB, power supply
| Dimensions | 72x46x23 mm
| Weight | 83 g

### Throughput and signal strength

|---
| Range, km | Modulation | Throughput, Mbps | Sensitivity, dBm
| 0 - 0.3 km | 64QAM_5/6 | 27.8 | -81
| 0.3 - 1 km  | 64QAM_3/4 | 25.5 | -83.5
| 1 - 2 km | 64QAM_2/3 | 22.8 | -85
| 2 - 4 km | 16QAM_3/4 | 17.1 | -90
| 4 - 8 km  | 16QAM_1/2  | 11.6 | -92
| 8 - 12 km | QPSK_3/4  | 8.8 | -96
| 12 - 15 km | QPSK_1/2 | 5.9 | -98
| 15 - 20 km | BPSK_1/2 | 3 | -99.5


### Interfaces
This page describes the general information and interfaces location of AIRLink Telemetry Module.

> Front side
![image](https://user-images.githubusercontent.com/42961200/151568937-31be709a-be86-4fd5-b43c-d0b328d9e4b9.png)

Front side

> ETHERNET - JST GH SM08B-GHS-TB

|---
| Pin number | Pin name | Direction | Voltage level | Function
| 1 | 5V | OUT | +5V | Radio module power supply
| 2 | 5V | OUT | +5V | Radio module power supply
| 3 | ETH_TXP | OUT | +3.3V | Ethernet transmit positive
| 4 | ETH_TXN  | OUT|---ive
| 5 | ETH_RXP | IN | +3.3V | Ethernet receive positive
| 6 | ETH_RXN | IN | +3.3V | Ethernet receive negative
| 7 | GND |  Ground
| 8 | GND |  Ground

{{site.data.alerts.callout_info}}
The ethernet interface is decoupled with capacitors. Ethernet cable should be twisted to reduce EMI noise. Shorter cables are recommended for increased performance and higher bandwidth of the interface.
{{site.data.alerts.end}}

- FAN - JST GH SM06B-GHS-TB

|---
Pin number | Pin name | Direction | Voltage level | Function
| 1 | 5V | OUT | +5V | Fan output
| 2 | Reserved | ​| ​ |
| 3 | Reserved | ​ | ​ | ​
| 4 | Reserved | ​ | ​ | ​
| 5 | Reserved | ​| ​| ​
| 6 | GND | ​| ​| Ground

> Left side
![image](https://user-images.githubusercontent.com/42961200/151569239-476bd0e1-a0ec-44a1-bf8d-188237d26346.png)

> Left siide

SMA Antenna connector

> Right side
Right side
![image](https://user-images.githubusercontent.com/42961200/151569386-fcb2930f-11d9-4c36-8464-8a6ec6981d23.png)

SMA Antenna connector
Reset button
> Rear side
> ![image](https://user-images.githubusercontent.com/42961200/151569455-4368698e-036a-4fc0-af01-567eac76604b.png)

Rear side
TX LED - Transmission activity
RX LED - Receiving activity
LINK LED - Link activity
CPU LED - CPU activity
PWR LED - Power enabled
RSSI LEDs - Received signal strength indication
RSSI LEDs status:
Blinking in turn: searching for pair
Blinking all at once: RF disabled
Solid: RF connection established, pair found

> Top side
> ![image](https://user-images.githubusercontent.com/42961200/151569573-f3061405-3a60-41e5-ab0b-a1b456f1d207.png)

Top side
The top side has an enclosure-integrated heatsink.
{{site.data.alerts.callout_primary}}
AIRLink telemetry module is designed to work standalone (no cooling fan) without overheating at maximum output power with ambient temperatures of up to 50° C.
In case there is a chance of overheating in your application - the module has 4x M3 mounting holes for the cooling fan.
{{site.data.alerts.end}}

> Bottom side
> ![image](https://user-images.githubusercontent.com/42961200/151569646-2cb87da0-009b-4f99-a914-9db5fae61942.png)

Bottom side

### Ground module interfaces
You can find ground module interfaces
![image](https://user-images.githubusercontent.com/42961200/151569775-5599fec5-ddc7-4b7d-9b70-bea41ffdfcb4.png)


### Installation
Installation
Let's wire up and connect AIRLink Telemetry

#### Ground module
Take the ground module, antennas and power cable:
![image](https://user-images.githubusercontent.com/42961200/151680803-da5e6a02-1639-4e4d-b58f-6c56d1446cfb.png)

Attach the antennas to the ground module. Connect the power cable.
{{site.data.alerts.callout_danger}}
DANGER: DO NOT POWER ON THE MODULE WITHOUT ANTENNAS, THIS WILL CAUSE PERMANENT DAMAGE AND IS NOT COVERED BY THE WARRANTY
{{site.data.alerts.end}}

#### Air module
Take air module and air module antennas:
![image](https://user-images.githubusercontent.com/42961200/151680817-be0f2b80-ab0a-41a9-bf45-088fec8346af.png)

Connect air module antennas:
![image](https://user-images.githubusercontent.com/42961200/151680820-c34eb93a-8a67-48f3-92df-ebd68d3fad0e.png)

Take Ethernet telemetry cable and connect it to the Ethernet port of Air module:
![image](https://user-images.githubusercontent.com/42961200/151680822-7c4d9447-29fb-4316-bfd3-6e12d58c656a.png)

Fully assembled Air module will looks as follows:
![image](https://user-images.githubusercontent.com/42961200/151680838-d1a166d7-398f-465d-af33-f64addbc276d.png)

#### Connecting to AIRLink
Connect Air module Ethernet cable to Ethernet port of AIRLink:
![image](https://user-images.githubusercontent.com/42961200/151680846-2755b2f5-3d07-45be-8f04-1e821af93a32.png)

{{site.data.alerts.callout_primary}}
It's recommended to twist Ethernet cable to increase the EMI sustainability.
{{site.data.alerts.end}}

The assembled systems should looks as follows:
![image](https://user-images.githubusercontent.com/42961200/151680853-61fd338d-0dfe-42ee-8ab9-275f38d5c6ab.png)


### CAD Model
For tight integration in your design
![image](https://user-images.githubusercontent.com/42961200/151666918-50eda13f-70e6-4227-a4c3-f7cdbdb0636c.png)

Download STEP files of SmartAP AIRLink Telemetry for integrating into your own design:
[AIRLink-Telemetry-Air-Module-STEP.zip](https://github.com/aiegoo/sky-drones/blob/master/3d/AIRLink-Telemetry-Air-Module-STEP.zip)


## Software
### Advanced drone software
The Sky-Drones Platform helps to integrate drones in custom end-to-end workflows with lots of enhanced features for advancing our enterprise customers:

Real-time digital HD video streaming
Real-time payload data processing (e.g. computer vision)
Real-time flight control (e.g. target tracking, collision prevention, and obstacle avoidance)
In-flight telemetry and payload data streaming directly to customer’s cloud
Drone-to-drone communications
Running custom apps directly on the drone (edge computing)
Safely performing autonomous BVLOS missions with real-time control

You have all the necessary infrastructure to develop your own drone software as well as use advanced software from Sky-Drones partners.

### SmartAP AIRLink software
[SmartAP AIRLink]() has two computers: an AI mission computer and a flight control system.

#### AI Mission Computer software
OS is Ubuntu 18.04. Full [SSH access]() to the system.
The AIRLink package contents is responsible for multimedia. It enables HD video streaming, cloud connectivity, etc.
Mission computer communicates with GCS and Cloud via standard MAVLink protocol.
[Exposed UDP ports]() allow access to all telemetry data (from localhost or remote host) via MAVLink protocol.
RTSP allows [access to real-time video]() feeds.

All AI Mission Computer software is an open-source software except the Sky-Drones AIRLink package.

#### Flight Control System software
Flight control system design and software are based on the popular widely adopted industry standards.


## Software development
Learn more about developing the software with AIRLink and running your own custom apps.

### Accessing AIRLink Mission Computer with SSH
Open Terminal and access AIRLink Mission Computer with SSH using the following command:

ssh smartap@airlink.local

You will be asked for the password, the default credentials are:
Login: smartap
Password: smartap

If you log in successfully you will see the following welcome page:
![image](https://user-images.githubusercontent.com/42961200/151573358-e5202a94-e79e-4aa8-8d9e-4b97bf8deedd.png)

If you are connected to AIRLink using WiFi Access Point mode and your computer doesn't support local DNS, you would need to use IP address 10.42.0.1 instead of airlink.local.
That's all you need for the development and we assume now you know what to do :)
Root access
SSH root access is not available as standard for security and safety reasons. However, this can be provided by Sky-Drones upon request. Please  to get an access.

### Read / Write MAVLink Telemetry data
SmartAP AIRLink provides user access for MAVLink telemetry stream which is useful for 3rd party applications development where you need to have access to the data from / to Autopilot and to / from Ground Control Station.
AIRLink supports 3 ports for user applications: 2 absolutely independent UDP ports and 1 TCP port for third party apps access:
```yaml
#
Type
Host
Port
Protocol
1
UDP
127.0.0.1
14560
MAVLink
2
UDP
127.0.0.1
14561
MAVLink
3
TCP
127.0.0.1
14556
```
MAVLink
For developer's convenience we offer code samples for reading and writing MAVLink messages. This example displays how to read HEARTBEAT message from the other MAVLink nodes and send HEARTBEAT from our example.

### UDP Example
```yaml
Read / write MAVLink using UDP connection:
#!/usr/bin/python3
# Usage example of MAVLink UDP port for user applications
# To execute:
#     python3 heartbeat_example_udp.py
# or
#     python3 heartbeat_example.py 127.0.0.1:14560 35
#     in this case: 127.0.0.1:14560 - address and port of mavlink source,
#                                     now available 14560 and 14561 udp ports
#                                     for user applications
#                   35 - system-id for signature
#
```
```python
import pymavlink.mavutil as mavutil
from pymavlink.dialects.v20 import common as mavlink
import sys
import time
from threading import Thread
​
​
if len(sys.argv) != 3:
    # use default arguments if no arguments given from command line
    srcSystem = mavlink.MAV_COMP_ID_USER1
    remote_address = "127.0.0.1:14560"
else:
    # use arguments from command line
    srcSystem = int(sys.argv[2])
    remote_address = sys.argv[1]
​
# create connection
mav = mavutil.mavlink_connection(
    'udpout:' + remote_address, source_system=srcSystem)
​
​
def sender_loop():
    while True:
        mav.mav.heartbeat_send(mavlink.MAV_TYPE_GENERIC,
                               mavlink.MAV_AUTOPILOT_INVALID,
                               mavlink.MAV_MODE_FLAG_CUSTOM_MODE_ENABLED,
                               0,
                               mavlink.MAV_STATE_STANDBY)
        time.sleep(2)
​
​
send_thread = Thread(target=sender_loop)
send_thread.daemon = True
send_thread.start()
​
while True:
    msg = mav.recv_match(blocking=True)
    if msg.get_type() == 'HEARTBEAT':
        print("HEARTBEAT from %d: %s" % (msg.get_srcSystem(), msg))
```
​
Run this example with:
```bash
python3 heartbeat_example_udp.py
```

### TCP Example
Read / write MAVLink using TCP connection:
```bash
#!/usr/bin/python3
# Usage example of MAVLink TCP port for user applications
# To execute:
#     python3 heartbeat_example_tcp.py
# or
#     python3 heartbeat_example.py 127.0.0.1:14556 35
#     in this case: 127.0.0.1:14560 - address and port of mavlink source,
#                                     now available 14556 tcp port
#                   35 - system-id for signature
#
```
```python
import pymavlink.mavutil as mavutil
from pymavlink.dialects.v20 import common as mavlink
import sys
import time
from threading import Thread
​
​
if len(sys.argv) != 3:
    srcSystem = mavlink.MAV_COMP_ID_USER2
    remote_address = "127.0.0.1:14556"
else:
    srcSystem = int(sys.argv[2])
    remote_address = sys.argv[1]
​
mav = mavutil.mavlink_connection(
    'tcp:' + remote_address, source_system=srcSystem)
​
​
def sender_loop():
    while True:
        mav.mav.heartbeat_send(mavlink.MAV_TYPE_GENERIC,
                               mavlink.MAV_AUTOPILOT_INVALID,
                               mavlink.MAV_MODE_FLAG_CUSTOM_MODE_ENABLED,
                               0,
                               mavlink.MAV_STATE_STANDBY)
        time.sleep(2)
​
​
send_thread = Thread(target=sender_loop)
send_thread.daemon = True
send_thread.start()
​
while True:
    msg = mav.recv_match(blocking=True)
    if msg.get_type() == 'HEARTBEAT':
        print("HEARTBEAT from %d: %s" % (msg.get_srcSystem(), msg))
```
​
### Run the example
Run the example with the following commands:
```bash
# Login via SSH
ssh smartap@airlink.local
​
# Make sure that you have the example
# file in your home directory and run it with
python3 heartbeat_example_udp.py
```
Once you run the example above you should expect the following output. This is the Heartbeat message coming from the Flight Controller:
![image](https://user-images.githubusercontent.com/42961200/151573808-a67d6995-0eda-448d-8694-6a7b797a1512.png)

If you connect with the Ground Control Station software you will also see the heartbeat coming from the GCS:
![image](https://user-images.githubusercontent.com/42961200/151573839-20420550-a635-4297-984d-0e4dba316c7c.png)

Feel free to use these code samples for your custom apps development using SmartAP AIRLink and MAVLink communication protocol.

### Get Video feed
AIRLink provides video feed access via RTSP either locally (127.0.0.1) or remotely (airlink.local). Currently, we support integrated CSI camera and HDMI input as well as  cameras over Ethernet:
```yaml
#
Video feed
Type
Host
Port
Address
1
CSI Camera
RTSP
127.0.0.1 or airlink.local
8554
rtsp://airlink.local:8554/camera/0
2
HDMI Input
RTSP
127.0.0.1 or airlink.local
8554
rtsp://airlink.local:8554/camera/1
3
NextVision Camera
RTSP
127.0.0.1 or airlink.local
8554
rtsp://airlink.local:8554/camera/2
```
To check the video stream using a standard GStreamer pipeline use the following command:
gst-launch-1.0 rtspsrc location=rtsp://airlink.local:8554/camera/0 ! rtph264depay ! avdec_h264 ! autovideosink sync=false
If you have any other questions related to the software development with AIRLink please get in touch with our support team

## Firmware updates
### SmartAP AIRLink firmware update on the one drone
The firmware update process is simple and automated. When  finds a new firmware in , it asks the user for approval and uploads new firmware to the drone mission computer. Mission computer updates its firmware and the firmware of the flight control computer.
### Drone fleet firmware update
You can see firmware versions and update the firmware of your whole drone fleet or one single part using . After you choose drones, the task scheduler will gradually update the firmware as soon as these drones are connected to the .

## Update autopilot bootloader
In some cases you might need to update the autopilot bootloader to get it to the latest version or to recover the unit.
### Download Bootloader file
First of all, you would need to download the bootloader file and save it on your computer. You can get the most recent bootloader file with the link below:
SmartAP AIRLink Bootloader

### Copy bootloader file on a microSD card of the autopilot
Take the microSD card from your autopilot, plug it into your computer and copy smartap_airlink_bootloader.bin into the foot folder. After that, plug in the microSD card back into the AIRLink FMU microSD card slot.

### Run update procedure
Connect SmartAP AIRLink to your computer using FMU USB port and open Terminal in QGC.
Locate the microsd card folder:
cd fs/microsd
List the files to make sure that there is a required bootloader file:
ls
You would see the following output:
![image](https://user-images.githubusercontent.com/42961200/151574066-59917a00-ef5e-4fbb-9419-133beee9aa03.png)

Run bootloader update procedure:
bl_update smartap_airlink_bl.bin
You should expect the following output:
![image](https://user-images.githubusercontent.com/42961200/151574084-2531556d-d9d2-4a7a-a52e-f92aeddd79fc.png)

Autopilot bootloader update has been successfully completed.

## Troubleshooting
### Unable to access airlink.local
Usually AIRLink dashboard is available at  address, however, this is browser and router dependent and not all routers support the technology needed for this (local DNS). If your router does not support the Local DNS technology, then you can find the assigned address on the settings page of your router and access AIRLink with the IP address (this is usually 192.168.1.X).
To identify the IP address you will need to go to your router dashboard, login and find the connected devices list. Usually, it looks as follows:
![image](https://user-images.githubusercontent.com/42961200/151574132-c0cd119a-1141-4dff-89e8-60b0ec0eda5f.png)

In our case we found our that the IP address of the AIRLink in the home / office network is 192.168.0.19
Therefore, if we go to 192.168.0.19 in the web browser we will see the same welcome page.
![image](https://user-images.githubusercontent.com/42961200/151574159-b650fc87-278b-4ab1-beb8-a1b73dbb8bf1.png)


## Firmware recovery
Steps to recover the firmware in case something doesn't go right
### Get the firmware
Contact Sky-Drones Technologies using this to get the firmware.

### Prepare microSD card
You will need an empty micro SD card with at least 32GB capacity to flash the firmware image onto it.

### Download and install the flashing tool
Download  software, this will help to prepare the bootable SD card and flash an image onto it. After the download is completed, install the software and open it.

### Flash the image onto SD card
![image](https://user-images.githubusercontent.com/42961200/151574314-b396f0ee-2db3-451f-b2b4-5b36aa291303.png)

Select an image file you have just downloaded
Select the Target (your 32 GB SD card)
Make sure that you have selected the correct target which corresponds to the microSD card. Selecting the wrong target will result in the target being overwritten and lost data.
Click Flash!
The process will take approximately 20 minutes. Make sure to safely unmount SD card before unplugging it from the card reader.
### Flash image in AIRLink

1. Insert the SD card into CPU SD card slot
2. Connect the main Power supply to the AIRLink, the system is powered on.
![image](https://user-images.githubusercontent.com/42961200/151574379-701d675f-af8c-4105-b700-229bf38faf49.png)

Firmware upgrade process will be started and will include the following key milestones:
1. In approximately 5 minutes, the blue CAM LED will light up. This means that the start of the firmware upgrade process has been successfully initiated.
2. In approximately 15-20 minutes CAM LED will start flashing slowly. This means that the firmware process has been completed and the verification stage is in progress.
3. In approximately 2-5 minutes after the start of CAM LED flashing, the AIRLink will turn itself off automatically. This means that the firmware upgrade process has been successfully completed.
![image](https://user-images.githubusercontent.com/42961200/151574556-d9d111d3-dffd-4c7f-b373-e800f15eeb78.png)

CAM LED Status light (Blue)
After that, you need to turn off the power and remove the microSD card. On the next power up the AIRLink will boot in standard operating mode.
WARNING: DO NOT DISCONNECT THE POWER SUPPLY OF AIRLINK DURING THE UPGRADE PROCESS
Don't forget to remove the microSD card from the slot. Otherwise, the firmware update process will be started again on the next power up.

## CAD model
![image](https://user-images.githubusercontent.com/42961200/151574940-b1cc2d96-1453-485c-8dfd-961b9e535e73.png)

[SmartAP-AIRLink-CAD-Model-STEP.zip](https://github.com/aiegoo/sky-drones//blob/master/3d/SmartAP-AIRLink-CAD-Model-STEP.zip)

## FAQ
A selection of questions put forward by our consumers. If you require any more information, do not hesitate to contact us today!

> When is AIRLink available to purchase?
Right now! We have ramped up production of AIRLink units and it's easy to order one from our sales team by completing our  on the ​

> Where can I find detailed specifications for AIRLink?
Slightly more generic information is available on our website on the , and we have our detailed  that has a more in-depth collection of data on AIRLink

> Where can I find the setup and installation information for AIRLink?
Via our , or follow docs.sky-drones.com - this is our online documentation portal and contains all the detailed information for all our hardware and software products

> Does AIRLink support payload connections? How can I connect my payload to AIRLink?
AIRLink has two camera ports. One is a CSI and the other is HDMI. We include a CSI camera in every AIRLink set, alongside a mini-HMDI to micro-HDMI cable for connecting your payload camera immediately. USB cameras or IP-based cameras are also attachable, just  and we can talk you through it!

> Can I run my own software on AIRLink?
Yes! We can give you full access to the mission computer and autopilot so you can deploy your own applications through AIRLink. This is something we can work on with you, so make sure to ​

> Is AIRLink open source?
AIRLink uses widely adopted drone industry standards so modifying the software is doable. The hardware is not open source but for our large volume manufacturers we can provide you with the reference design and help you set up your own production process. This will allow you to control your own volume of AIRLink sets

> Is AIRLink powerful enough to run AI algorithms and machine learning?
Yes! AIRLink quite literally stands for 'Artificial Intelligence and Remote Link'. This means that you have the computing power to run complex algorithms onboard

> How can I connect AIRLink to my computer?
AIRLink has both integrated WiFi and LTE connectivity. WiFi can be used as the access point to connect AIRLink to your router, and LTE connectivity means that AIRLink comes to you with the internet already enabled. You need only set up or log into your account and enable the data plan.

Alternatively, use your own carrier and data plan and manage this yourself if you'd prefer.

Finally, AIRLink has an ethernet port for IP datalink integration. Stay up to date with Sky-Drones for more information!

> What is your manufacturing capability?
AIRLink is manufactured in the hundreds per month, but if required we can manufacture thousands per month with a prior requirement notification. AIRLink is manufactured in the United Kingdom using genuine and quality-assured materials. All units are tested before being shipped to customers

{% include links.html %}

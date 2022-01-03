---
layout: post
title: "dronekit application based on pymavlink"
name: "dronekit-udemy"
tags: [drones]
tagName: drones
permalink: 2021-12-30-dronekit-udemy.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "pymavlink dronekit udemy uav"
summary: "Thu, Dec 30, 21, integrate udemy drone course with dronekit.md of this documentation site"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-12-30T04:37:42 +0900
updated: 2021-12-30 04:37
youtubeID: jk-CFKyHqZY
youtubeID1: ZI_a-fmDvGw
youtubeID2: RYrHzdQ3xyc
youtubeID3: JGAF2UraZUM
youtubeID4: 7sIKzSTfPJI
youtubeID5: hsjv1SdNLZk
youtubeID6: BkKuUxFzAQU
youtubeID7: 9HNYw4b8Q_k
youtubeID8: cJpQZ8u2yTg
youtubeID9: Fg8h73yZYSA
youtubeID10: gGCcEVFUai8
youtubeID11: m1i26ofIxMw
youtubeID12: 5IIv1p_Vn_0
youtubeID13: n4dRZZLRl-0
youtubeID14: _U_wOGcLe3U
youtubeID15: ylp-ZKjsPiE
youtubeID16: 3tUdgiBscNU
youtubeID17: jk-CFKyHqZY
youtubeID18: qE8dyCeUg64
youtubeID19: Z3Yn2qZBhqo
youtubeID20: gDHL4UgI6Lk
youtubeID21: kxnXwIwKto4
youtubeID22: iI4gBJo9L5E
youtubeID23: 7LIrF4-dMBc
youtubeID24: eDR69qklf1U
youtubeID25: OsNICMJ4Cpg
youtubeID26: DJc_jFvng20
youtubeID27: 677mWDAT8xc
youtubeID28: BhR-Myl3dYw
youtubeID29: N4rH9JTPKQA
youtubeID30: kr1NKgEp_e4
youtubeID31: IAJoQK8eQLU
youtubeID32: NZTzPQugYK4
youtubeID33: ATBbcc3VH6c
youtubeID34: 3rTQIzFuLnQ
youtubeID35: 0c95pR3AbOI
youtubeID36: 7eKJKGGj4rk
youtubeID37:
youtubeID38: 1epRvKDbgz0
youtubeID39: 3WFf4Sx6VtU
youtubeID40: fkjWanK6R4U
youtubeID41: E0AKCclOYtI
youtubeID42: 8CksQ-mAfFw
youtubeID43: xSUX98q_XPc
youtubeID44: xiDD0eygOPA
youtubeID45: pIUASjslbC8
youtubeID46: -k9D8edMgCU
youtubeID47: pIUASjslbC8
youtubeID48: B9BYkA5-7LQ
youtubeID49: iqYLS5YLIJA
youtubeID50: cfivx15eksQ
youtubeID51: U0myrr1GfEk
youtubeID52: Y5oSYm4iWP8
---
[youtube-playlist](https://www.youtube.com/playlist?list=PLUaCOzp6U-RryKTJDDzYU3xHhMf_wgeeh)
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## dronekit.md
### Using DroneKit to communicate with PX4

[DroneKit](http://dronekit.io) helps you create powerful apps for UAVs. These apps run on a UAV’s Companion Computer, and augment the autopilot by performing tasks that are both computationally intensive and require a low-latency link (e.g. computer vision).

DroneKit and PX4 are currently working on getting full compatibility. As of DroneKit-python 2.2.0 there is basic support for mission handling and vehicle monitoring.

1. Python and Android implementation of MAVlink commands in the form of functions.
2. Gives us high level access to the low level drone autopilot firmware (ardupilot and PX4)
   1. Enabling our drones like an API.Simple read/understand functions can be used to  command/move the drones, without requiring immense knowledge of the drone's autopilot software.
   2. This is helpful, since the Ardupilot codebase is 7000,000 lines of code.

## Setting up DroneKit with PX4

Start by installing DroneKit-python from the current master.

```sh
git clone https://github.com/dronekit/dronekit-python.git
cd ./dronekit-python
sudo python setup.py build
sudo python setup.py install
```

Create a new python file and import DroneKit, pymavlink and basic modules

```C
# Import DroneKit-Python
from dronekit import connect, Command, LocationGlobal
from pymavlink import mavutil
import time, sys, argparse, math

```

Connect to a MAVLink port of your drone or simulation (e.g. [JMavSim](../simulation/jmavsim.md)).

```C
# Connect to the Vehicle
print "Connecting"
connection_string = '127.0.0.1:14540'
vehicle = connect(connection_string, wait_ready=True)

```

Display some basic status information

```C
# Display basic vehicle state
print " Type: %s" % vehicle._vehicle_type
print " Armed: %s" % vehicle.armed
print " System status: %s" % vehicle.system_status.state
print " GPS: %s" % vehicle.gps_0
print " Alt: %s" % vehicle.location.global_relative_frame.alt
```
### using a vm and scripts for udemy

[VM IMAGE](https://drive.google.com/open?id=1T8wIekL-DHIm9JGZ1sq8gdVNIEyPItMz)

Username/Password for Preconfigured VM: dronedojo/dronedojo

[DRONEKIT SCRIPTS:](https://drive.google.com/open?id=1kTmBE4VTdLUTKgkn9t-0cyBkTXYIMjyp)

////////////////////////VIDEO SUMMARY////////////////////////////////
Setup our Ubuntu virtual machine in VirtualBox
/////////////////////////////////////////////////////////////////////
MAKING NEW VM IN VBOX:
1. New
2. Name it/Type (Linux) Version (Ubuntu 64 bit)
3. RAM/Memory size. Depends on computer. ~2 gb should work
4. Choose harddrive (Create a virtual hard drive now)
5. Hard drive file type (VDI)
6. Storage on physical hard drive (Dynamically Allocated)
7. VM hardrive disk space ~30-50 gb should be lower safe amount.

THIS CREATES A NEW MACHINE IN THE VBOX LIST, but need to install the ubuntu
.iso image to this machine in VBOX

1. Click on settings of the newly created machine
2. Enable shared clipboard (CP/Paste sharing of host OS and VM OS)
3. Drag and drop (Bidirectional
4. Can alter things like amount of cores allocated to VM

POINT THE UBUNTU IMAGE (.iso file) TO THE VM
Sotrage>Controller
Click on CD symbol, choose virtual CD/DVD disc file and select the iso file
download earlier (UBUNTU Xenail Xerus)
Click OK
Start VM and the installation process will start

Finally, your virtual machine will typically reserve all the RAM you give it,
 whenever it is running.
 When the virtual machine is turned off, suspended, hibernated, or otherwise not running,
 this RAM will not be in use.
 For example, I have about 10 virtual machines, most of which have 1 GB of RAM,
 on a host machine with 4 GB of RAM.
 This is not a problem; it just means I can only run up to a few of them at a time.

Don’t allocate too much RAM to your VM, because windows still needs some RAM to operate.
 Try starting out with 2 gb or 45% of your computers RAM

### issues
- when unable to switch betweeen modes

1. open the terminal from courseRoot/apm/ardupilot/modules

2. type "pip uninstall pymavlink"

3. type "pip install pymavlink==2.4.8

## Full mission example

The following python script shows a full mission example using DroneKit and PX4. Mode switching is not yet fully supported from DroneKit, we therefor send our own custom mode switching commands.

```C
################################################################################################
# @File DroneKitPX4.py
# Example usage of DroneKit with PX4
#
# @author Sander Smeets <sander@droneslab.com>
#
# Code partly based on DroneKit (c) Copyright 2015-2016, 3D Robotics.
################################################################################################

# Import DroneKit-Python
from dronekit import connect, Command, LocationGlobal
from pymavlink import mavutil
import time, sys, argparse, math


################################################################################################
# Settings
################################################################################################

connection_string       = '127.0.0.1:14540'
MAV_MODE_AUTO   = 4
# https://github.com/PX4/PX4-Autopilot/blob/master/Tools/mavlink_px4.py


# Parse connection argument
parser = argparse.ArgumentParser()
parser.add_argument("-c", "--connect", help="connection string")
args = parser.parse_args()

if args.connect:
    connection_string = args.connect


################################################################################################
# Init
################################################################################################

# Connect to the Vehicle
print "Connecting"
vehicle = connect(connection_string, wait_ready=True)

def PX4setMode(mavMode):
    vehicle._master.mav.command_long_send(vehicle._master.target_system, vehicle._master.target_component,
                                               mavutil.mavlink.MAV_CMD_DO_SET_MODE, 0,
                                               mavMode,
                                               0, 0, 0, 0, 0, 0)



def get_location_offset_meters(original_location, dNorth, dEast, alt):
    """
    Returns a LocationGlobal object containing the latitude/longitude `dNorth` and `dEast` metres from the
    specified `original_location`. The returned Location adds the entered `alt` value to the altitude of the `original_location`.
    The function is useful when you want to move the vehicle around specifying locations relative to
    the current vehicle position.
    The algorithm is relatively accurate over small distances (10m within 1km) except close to the poles.
    For more information see:
    http://gis.stackexchange.com/questions/2951/algorithm-for-offsetting-a-latitude-longitude-by-some-amount-of-meters
    """
    earth_radius=6378137.0 #Radius of "spherical" earth
    #Coordinate offsets in radians
    dLat = dNorth/earth_radius
    dLon = dEast/(earth_radius*math.cos(math.pi*original_location.lat/180))

    #New position in decimal degrees
    newlat = original_location.lat + (dLat * 180/math.pi)
    newlon = original_location.lon + (dLon * 180/math.pi)
    return LocationGlobal(newlat, newlon,original_location.alt+alt)





################################################################################################
# Listeners
################################################################################################

home_position_set = False

#Create a message listener for home position fix
@vehicle.on_message('HOME_POSITION')
def listener(self, name, home_position):
    global home_position_set
    home_position_set = True



################################################################################################
# Start mission example
################################################################################################

# wait for a home position lock
while not home_position_set:
    print "Waiting for home position..."
    time.sleep(1)

# Display basic vehicle state
print " Type: %s" % vehicle._vehicle_type
print " Armed: %s" % vehicle.armed
print " System status: %s" % vehicle.system_status.state
print " GPS: %s" % vehicle.gps_0
print " Alt: %s" % vehicle.location.global_relative_frame.alt

# Change to AUTO mode
PX4setMode(MAV_MODE_AUTO)
time.sleep(1)

# Load commands
cmds = vehicle.commands
cmds.clear()

home = vehicle.location.global_relative_frame

# takeoff to 10 meters
wp = get_location_offset_meters(home, 0, 0, 10);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_TAKEOFF, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)

# move 10 meters north
wp = get_location_offset_meters(wp, 10, 0, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)

# move 10 meters east
wp = get_location_offset_meters(wp, 0, 10, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)

# move 10 meters south
wp = get_location_offset_meters(wp, -10, 0, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)

# move 10 meters west
wp = get_location_offset_meters(wp, 0, -10, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)

# land
wp = get_location_offset_meters(home, 0, 0, 10);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_LAND, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)

# Upload mission
cmds.upload()
time.sleep(2)

# Arm vehicle
vehicle.armed = True

# monitor mission execution
nextwaypoint = vehicle.commands.next
while nextwaypoint < len(vehicle.commands):
    if vehicle.commands.next > nextwaypoint:
        display_seq = vehicle.commands.next+1
        print "Moving to waypoint %s" % display_seq
        nextwaypoint = vehicle.commands.next
    time.sleep(1)

# wait for the vehicle to land
while vehicle.commands.next > 0:
    time.sleep(1)


# Disarm vehicle
vehicle.armed = False
time.sleep(1)

# Close vehicle object before exiting script
vehicle.close()
time.sleep(1)

```
## stm32

|---
|FC basic |
| setup | Matek bec pdb
|   | GPIO Led
|   | TIM Buzzer
|   | UART init
| Interface |
|   | BNO080 9 axis AB Angle SPI
|   | ICM 20602 Angle Speed SPI
|   | LPS22HH Altitude SPI
| GPS data |
|   | ublox M8N U-center
|   | M8N UBX UART
|   | UBX protocol
|   | UBX data parsing
|   | M8N setting
| Data Rx |
|   | FlySky Fs-i6 FS-A6B binding
|   | FS-iA6B iBus UART
|   | iBus data logging
|   | iBus data parsing code
|   | Failsafe code
| Frame setting |
|   | Motor & ESC
|   | BEC and FC
|   | Peripherials
| Powerup |
|   | ESC Oneshot Multishot Dshot
|   | Oneshot125 PWM TIM-PWM Fr. Resolution
|   | FS-i6 motor sync
|   | ESC calibration
|   | Pitch analysis
| Comm and sensors |
| Wireless data tx/rx |
|   | 3DR telemetry Radio config
|   | tx/rx protocol
|   | roll, pitch, yaw, alt. positioning
|   | RC data
|   | Battery ADC
|   | PID gain
| Aux |
|   | EEPROM PID gain save
|   | Voltage check and alarm
|   | Gyro bios calib on bootup
| Safety |
|   | Motor cancel on bootup
|   | Arming on minimum throttle
|   | Sensor check on bootup
|   | Fail-safe
| Flight control |
| Roll/Pitch |
|   | PID Single/double PID
|   | BNO080 + ICM20602
| Guided |
|   | Alt. holding LPS22HH
|   | ublox M8N

#### video 1
- hardware list
- FC 전원 연결 및 디버그 LED 점멸(GPIO)

{% include youtubePlayer.html id=page.youtubeID1 %}

```diff
I uploaded a STM32F4 tutorial video course few years ago. and now I'm getting started a new video course again.

The name of this course is "STM32 Drone Programming A to Z: From Sensor I/F to Flight Control"

The last course is a tutorial that is covering the basic functions of STM32F4.

This is a course that explains the application of STM32 using its basic functions.

In this course, I'll explain how to program the drone's FCC(Flight Control Computer or FC) that corresponds to the brain of the drone using STM32F4 as the main MCU.

There are various drone development courses on the internet.

They are usually about drone assembly using commercial FC or PIXHAWK or how to setup and fly. But this class is not using such commercial FC.

In this class, uses the FC designed by M-HIVE and directly programs the FC firmware without any open-source.

So, it’s completely different from the class I mentioned above.

It is not a simple assembly lecture, but a lecture developed by yourself. So basically, this course may requires some firmware development experiences.

You may think it's a bit difficult but my course is easier than using open source drones like ArduPilot (APM).

Because, drone open source is designed for general use in a variety of hardware and various aircraft types,

so it is difficult to analyze because the body of the source code is very large and the structure is a little complicated.

So, beginners thought it would be easy because it was open source, but they gave up because of the vast amount of source code.

But in this course, we will only implement the source code of the hardware used in MH-FC and the necessary functions,

so we can program the firmware with a relatively simple structure. Thus it will be easier to implement.

So, I will explain these things in a way that is as easy to understand as possible through sufficient lecture materials and pictures.

However, this does not mean that we are making low-performance drones.

The purpose of this class is to make high level drones that can be used as reference even in university-level lectures.

So if you follow along this course, you will be able to make a drone with good flying performance, as introduced in the intro.

To follow this course, firstly you must have an intermediate or higher level skills of C programming language.

Which means that it might be a bit difficult to follow at the level of what you learned once in school or academy.

And then this class is for those who have worked on projects using this microcontroller such as ATMEGA, STM32 or whatever any kind of MCU.

So, if you don't have these skills, it's better to do pre-learning.

You need to be able to handle both the C language and micro controller so that you can develop embedded applications like this drone.

But it is not impossible to follow even if you don't have enough skills because I'll explain all source code in this course.

Then, let’s get to the main point, this time, I'll introduce the parts to be used in this course and the contents order of this course.

The parts shown in this photo will be used in this drone course. Let me briefly explain,

4 ESCs(Electronic Speed Controller) are needed. and BLDC motors 2 clockwise and 2 counterclockwise, so a total of 4 are needed.

So the type of aircraft is a rotary-wing quadcopter.

And this mount will be used to fix the fc to the drone frame.

As you can see, this black part is made of rubber

It reduces some noise generated by the drone's motor rotating.

It acts as a physical low pass filter.

Obviously, attaching this has the effect of reducing the noise of the sensor, so I recommend this.

We need 2 propellers clockwise and 2 counterclockwise, a total of 4, and the standard is 5045.

The battery is 3 cells 11.1V lithium polymer.

The batter on picture is 1500mAh, but it's ok between 1500 to 2200mAh.

30C or higher discharge rate is required.

And in addition, It is recommended to have extra batteries.

Because we will write source code with connecting the battery to the FC. I have 2 more extra batteries.

This is a transmitter and receiver.

First of all, the final goal of my course is to build a drone flight controller that can fly stable MANUALLY.

But maybe there are some people who want to take my class and build an automatic flight function.

Even if you build automatical flight system, you need to implement it so that you can fly completely stably from manual flight before that.

Sometimes there are people who do not consider manual flight because they build auto flight and do not use such a transmitter and receiver.

First, manual flight is fully implemented, and then automatic flight is implemented as next step.

So this transmitter and receiver is absolutely necessary.

The drone frame is QAV210.

The 210 means the distance between the diagonal motors facing each other. 210mm so it is 21cm.

Telemetry module will be used when transmitting and receiving data wirelessly.

It will be used for data communication between drone and PC(GCS).

Status of the drone like battery voltage and sensor values are trasmitting from FC to the PC

and PID control gain from PC to the drone.

And GPS, as I said earlier, the final goal of this course is manual flight, so GPS is not necessary.

However, MH-FC has a GPS connector, so can interface with the GPS.

And BEC PDB module outputs three type of voltages: 5V, 12V and battery voltage.

So ESC will be conneted to the BEC to battery voltage line and FC to 5V line.

This table summarizes the model names and manufacturers of the components described earlier.

The frame is QAV210.

For BLDC motors, mt2204 and 2300kv from a company called Ready to Sky will be used.

Needs two clockwise two counterclockwise.

For ESC, 30A BLHeli-s firmware from a company called LittleBee will be used.

It has from 2 to 6 cells input voltage range.

For BEC, PDB from a company called Matek will be used.

Input voltage is 3 to 4 cells, output is 5V 12V and the size is 36mm x 36mm.

This size is the standard used for the QAV210 racing drone frame.

The propeller size is 5045 and the 3 blades. Also, needs two clockwise two counterclockwise.

The mount will be used for fixing FC to the frame. It is M3 and height is 7mm.

It is recommended that it is made of rubber for anti-vibration.

The transmitter and receiver are fs-i6 and fs-iA6B. It is a product of a company called FLYSKY.

The B in the back is the product that the transmitter signal is output as a digital serial signal.

When we write source codes, we're going to receive and process serial data.

Of course, this receiver has 6 pwm and ppm signal outputs, but we will not use them.

And for GPS, the most commonly used GPS is UBLOX's NEO-M8N.

We will not build automatic flight function in the course, but this course includes receiving latitude and longitude information from the UBLOX M8N GPS.

For 3DR telemetry radio transceiver, you can choose one of the 433MHz and 915MHz frequency bands.

Select the band allowed by your country.

Using an unacceptable band may result in paying a penalty. Please check the communication laws of your country.

Also, even in this allowed frequency band, if the output exceeds a few mW, you may have to report.

But we're going to be using a low output power, so there won't be a big problem. You must buy a telemetry transceiver in the allowed frequency band.

Batteries can be purchased with a capacity of between 1500 and 2200 mAh with 3 cells 30 coulombs or higher.

And as I said, it is better to have a few extra batteries.

I bought all these things I explained earlier on AliExpress,

There is a Ready to sky brand mall in AliExpress.

You can find them all in the AliExpress website and you can buy every parts there.

The total amount seems to be around $200, but the price changes every day.

They are delivered from China.

So this is the model name and manufacturer of the parts listed in this table, and it's an explanation of where to buy.

For the batteries, it seems that sales are currently suspended due to shipping problems. (As of January 2021)

Therefore, batteries must be purchased in the country of residence where you live.

And now let me explain more about FC. The left one on the picture is the MH-FC V2.2 that will be used in this course.

I am going to sell this myself, and the sales method has not been decided yet.

Preparing to sell through Amazon.

When it's ready and start selling, I will announce it in the introduction to this course. Please check the introduction page of this course from time to time.

And we will use ST-Link/v2 to upload the firmware after writing and building the source code.

ST-Link/v3 has been recently released.

but ST-Link/v3 is expensive, so you can purchase it as v2.

This is the details of MH-FC V2.2.

The right one is a bare PCB and the left one shows all the parts assembled on the PCB.

The left one is a prototype that I made to check whether the PCB works well by hand-soldering , so it's a bit messy.

But you don't have to worry about the FC for sale because all parts are assembled in manufacturing time.

The size of FC is 36mm x 36mm width and height, and it is the same size as BEC.

It was made in a size that fits the QAV210 frame.

So, you can fix it by attaching it to each of the four corner holes using M3 rubber mount.

And then, this is a detailed view of FC, I will explain each part in detail.

Components are marked by color.

Marked in yellow indicates connectors that connect external devices from the outside.

The red is the sensor, green is the MCU and sky blue is the LED display.

To explain in more detail,

5-pin 2.54mm pitch pinheader on the top is connector to ST-Link to download firmware.

The below pinheader is the fs-iA6B receiver connector.

And on the right is for gps connection. 1.27mm pitch 5-pin connector. (NOT 2mm PITCH!)

Below is the connector where PWM signal is output.

The three horizontal pins are one PWM output channel.

There are total 6 channels of PWM are output.

Since it is a quadcopter, we will only use 4 outputs.

Other devices can be connected to the two remaining PWM channels.

Below that is a 3DR telemetry radio transceiver connector, and also a 1.27mm pitch 5-pin connector. (NOT 2mm PITCH!)

There is a 2.54mm pitch 4-pin debug UART connector at down below.

In embedded programming, to debug, usually connecting the device to the PC and exchange data via UART, and check the value of variables or status by outputting to a PC monitor.

And pins on the bottom-left are power connectors, not pin headers, but pad types. So they are connected by hand soldering.

The 5 volt and ground pad are used to supply power to the entire system of the FC board.

And connecting the + terminal of the battery to the +VBAT pad on the left, it will enter the ADC pin of STM32 through the circuit on the bottom of the FC.

Therefore, STM32 can measure the voltage of the battery.

And the part in the center is the main controller STM32F405RG.

And there are three LEDs for display. LEDs for debug, each is red green blue.

And now the most important are the sensors in the red area.

The sensor on the top is a barometer(LPS22HH) used to measure barometric altitude

Usually this barometer is used for automatic hovering,

but in this tutorial we will not implement the automatic flight function, so may not actually need this barometer.

But I think there are some people who want to implement auto flight, so I put it on the FC.

In this course, I will explain how to interface with this barometer and receive data.

And the two sensors at the bottom are important. The one on the left is the 6-axis sensor(ICM-20602), and the right one is 9-axis sensor(BNO080).

Later, we will use these two sensors together to control the drone's attitude.

This was the explanation of the parts on the top.

And this is the bottom side of FC.

This is the EEPROM and we will use it to store the PID gain.

When performing PID control, PID gain is needed, so EEPROM will be used to store the PID gain.

And here is the logo of my company and the version of FC. "MH-FC V2.2" is marked for sale.

And the bigger part here is the passive buzzer.

The use of this buzzer is also for debugging. The simplest way to debug during development is to use LEDs.

With LED, you can see with your eyes what status the MCU is.

For example, let's assume that you wrote a program to turn on the LED when receiving the sensor value. If the LED is on, you can expect that the sensor value is received.

However, since the drone is usually far away from you, you can't see the LED status.

Also, after the drone is assembled, the LED will not be visible because it is covered.

In this case, if you use the buzzer, you can check the status of the drone with the sound of the buzzer.

In this course, buzzer will be used for that purpose, such as making a sound when the battery voltage drops below a few volts.

So, there is also a purpose for debugging, and there is also a purpose for telling the state of the drone by sound.

And the opamp and voltage divider circuit for battery voltage ADC are implemented in this part.

I explained all the parts on the top and bottom side of FC.

This is a table that summarizes the model names and manufacturers of the parts on the FC.

Firstly, the MCU is STM32F405RGT6 and has TQFP 64 pin package.

The manufacturer is ST microelectronics.

And 9-axis sensor is probably many people see this sensor the first time.

BNO080 is the part number and the manufacturer is Bosch.

Bosch makes things like electric drills, but also makes sensors for cars. The BNO080 is a sensor made by Bosch sensortec.

This sensor is a 9-axis sensor, so it has built-in 3-axis gyro, 3-axis accelerometer and 3-axis magnetometer.

and additionally has built-in cortex m0 micro controller.

So, depending on the sensor configuration, BNO080 outputs the raw data of the gyro, accerelometer and magnetometer.

Or, the internal processor calculates the quaternion with the sensor information and outputs the result.

We will use the quaternion to convert into a rotation angle and use it to PID control.

It is the reason for adopting this sensor.

Since the ICM-20602 only outputs the raw data of the sensor, it is needed to calculate the quaternion using such as Madgwick algorithm or rotation angle using a complementary filter.

But BNO080 does this itself.

So from this point of view, the processing resources of MCU can be saved. Because BNO080 does the calculation.

We're going to take the quaternion result from this sensor and do some calculation and convert it to rotation angle.

Therefore, the amount of computation of the MCU will be relatively reduced.

It hasn't been long since this sensor was released, so there wasn't much information on google. And I haven't seen any drones using this sensor yet. (As of May 2019)

I made a drone with BNO080 before this course, and it shows stable flight performance,

so I decided to use this sensor in the course.

However, the weak point of this sensor is that the quaternion output rate is a bit slow. It is 400Hz.

These days, the technology is so advanced that 400hz is slower rate.

So that's why I added an additional 6-axis sensor.

To summarize again, BNO080 is a sensor that calculates and outputs a quaternion from the information of the internal 9-axis sensor.

With that quaternion, MCU will calculate the actual rotation angle.

However, the output rate of this sensor is too slow that if use only this BNO080, the drone may fly a little unstable.

So we will use a ICM-20602 6-axis sensor as an auxiliary.

ICM-20602 is made by TDK InvenSense.

This company is famous for MPU6xxx, MPU9xxx series IMU sensors. But in the website, they say that the MPU series is not recommended.

I think the MPU series will be discontinued

And this series of sensors named ICM has been released. ICM series has much higher specifications than the MPU series.

However, when I browse the web forum, it seems that users' opinions are divided into good and bad.

Some people says MPU6050 has better performance than ICM-20602.

However, I don't think the performance difference is not that much big in this course.

Anyway, in this class, we will use these two sensors together.

Using these two together, it showed pretty stable flight performance. (Self-leveling mode)

BNO080 will be used for angle control, ICM-20602 will be used for angular velocity control.

And the reason why ICM-20602 has better performance than other MPU series is

I'll explain later again while looking at the datasheet.

ICM-20602 has 32kHz maximum sensor output rate. It is extremely high.

But the MPU series has maximum 8 kHz output rate, so the ICM-20602 is four times faster than that.

Since the BNO080's output rate is low, the flight control may become a little unstable, so icm20602 will compensate that.

In conclusion, rotation angle from BNO080 and angular velocity from icm20602 are used in one PID control.

And LPS22HH barometer is also not a commonly used sensor. (As of May 2019)

Usually, bmp and ms5611 barometers are mainly used.

I tend to monitor the new sensors.

LPS22HH is also a new sensor, and it has a slightly higher specification among barometers.

The barometric pressure resolution was a bit high. So I adopted this sensor.

The manufacturer of LPS22HH is ST microelectronics.

So this was the most important part.

For EEPROM, it is a non-volatile memory and will be used to store the PID gain.

And the LED will be used when debugging for external display purposes,

and the buzzer is also for external indication.

The LED indicates visually and the buzzer indicates audibly.

It was the description of all parts on the MH-FC V2.2.

Below that is a description of the connectors.

And you need some other equipments.

These are equipments for soldering and some hand tools.

You need a soldering iron for hand-soldering.

Wrapping wire is needed because wire soldering is required.

Wires lower than awg 22 standard are required. In general, you can use awg 22.

If the number is lower, the thickness becomes thicker, and if the number is higher, the thickness becomes thinner.

However, it is not recommended that the number is higher than awg 22. It means that it shouldn't be thinner than awg 22.

Because this wrapping wire will be used as a power supply wire.

It would be nice to have red and black colors respectively but it doesn't matter if you don't have one color.

And the length should be over 3~4cm. Since the length of the ESC line is long, you can cut it and use it. 3 wires required.

And since we're going to use a battery, we need a battery charger too.

You should have a lithium polymer battery charger that supports balance charging.

And you should have a sharp tool like tweezers.

This may be necessary when connecting the GPS and telemetry connectors.

If you buy GPS and Telemetry, it will probably be connected to a 2mm 6-pin connector.

But the MH-FC V2.2 board has two 5-pin connector.

Of the 6 pins, the actual pins used are 4 pins, and we will use them by changing into a 5-pin connector.

That 5-pin connector will be included in GPS and Telemetry package.

You may have to disassemble the 6 pin connector, in this time, you need something sharp like tweezers.

And you'll need a nipper or wire stripper to cut the wire.

The cable ties will be used to fix the esc to the frame and will require 4 or more.

And jumper wires are needed when connecting ST-Link. F/F, M/M and F/M each needed 5 wires or more.

And you need hook and loop fasteners to hold the battery.

Hexagon wrenches (Hex key or Allen key) is essential.

It is recommended a Hex key set that includes several types.

It will be used to assemble the drone frame.

Double-sided tape can be used for fixing receivers and telemetry to drones.

You can also fix it with a cable tie instead of double-sided tape and it is stronger.

And you should have a usb to uart module for debugging.

It will be used to monitor the data of fc in pc.

Lastly, you need a USB micro type cable.

It is needed when connecting 3DR telemetry to PC. It's better if you have two.

It was a description of all hardwares.

Next time, I will explain the contents of this course and how to download and install STM32CubeIDE.

Then I'll explain it next time. Thank you.
```

#### video 2
- STM32CubeIDE install

{% include youtubePlayer.html id=page.youtubeID51 %}
stm32cubeide install only

{% include youtubePlayer.html id=page.youtubeID2 %}
Generating tone with a buzzer

```diff
Hello. This is ChrisP from M-HIVE. Last time, I introduced the drone hardware components for this course.

The website links are organized in tables to make it easy to purchase these parts. Please check the attached file.

Clicking on the link will open the AliExpress page directly. These are the exact parts we will use in this course. It is recommended using the same parts.

If the ESC, remote controller, receiver or gps are different, the source code may not work. Thus, it should be the same components.

This time, we will download and install STM32CubeIDE. And I'll explain the course contents.

First, we will download STM32CubeIDE. I used to use two separate programs, TrueSTUDIO and CubeMX, in my provious STM32F4 tutorial class.

Recently, ST combined these two programs into one and launched a new one under the name STM32CubeIDE. So, if you install the STM32CubeIDE, you can use both programs.

TrueSTUDIO is an integrated development environment that writes, builds, and downloads firmware source code. CubeMX is a program that automatically generates code that initializes the peripherals inside STM32.

So, in this course, we will use CubeIDE to write the source code. STM32CubeIDE v1.0 is newly released (as of June 2019).

CubeIDE uses CubeMX version 5 UI. In my previous course, I used CubeMX version 4. But the CubeMX in CubeIDE is a bit different because it is version 5's UI.

However, it is not very different, so you can follow it slowly. But if you don't use CubeIDE and you use a third-party IDE such as IAR or KEIL,

Install not this CubeIDE but the CubeMX. Because if you generate initialization code using CubeIDE and export the project, you will be able to select only the project for TrueSTUDIO.

You may not be able to export to IAR or KEIL projects. So, those who want to use a third-party IDE must download CubeMX.

And we will use the HAL (Hardware Abstraction Layer) driver and the LL (Low Level) driver the hardware level libraries together.

In the previous course, I used only the HAL driver. These days, ST provides both HAL and LL drivers.

Both are hardware level libraries. In the past, ST provided SPL (Standard Peripheral Libraries) and HAL drivers.

However, SPL is no longer supported and LL driver is provided. And SPL and LL have similar internal structure.

In this course, we will mainly use the LL driver.

Now, let’s install CubeIDE. Run your web browser.

And enter www.st.com, and you will see this on the first page.

If you don't see this right away, you can find it by searching "CubeIDE".

Click to enter and you will see an overview of CubeIDE.

Scroll down and you can download it from the Get Software section. Download windows linstaller. Because this lecture is based on Windows OS.

After that, ACCEPT the License Agreement. Then the Lonin page will appear. If you have an account, you can log in.

If you don't have one, please fill in the First Name, Last Name, and E-mail address below, and a verification email will be sent to that email address.

Open that email and follow the url link to download it.

I've downloaded it already.

If you download it, there will be a zip file. When you unzip it, the installation file is included. Run that file.

Click the Next button. This is to set the installation path, preferably in English path.

I will install to the default path. And a window appears for selecting a device driver.

Select everything and install.

We are going to use ST-Link to debug and download the firmware.

Install it.

I will explain the course contents while installing. This lecture is largely composed of 4 parts.

In the first part, I will explain the most basic part of FC. It starts with LED blinking, receives sensor data, drives the motor, and so on.

In the second part, we'll implement some of the features you need to prepare before flying. We will send and receive data wirelessly, store PID gains in EEPROM, and implement some functions for safety.

After all of these are ready, I will explain the PID control in the third part.

So, in this third part, you can finally fly drones.

And in the last fourth part, it's the part that uses barometer and gps to automatically fly outdoors,

But this part is not included in this video course. After this lecture is over, it will be produced as a sequel lecture.

It's a bit tricky to implement automatic flight in part 4. You have to go outside and do flight tests, you have to charge the battery.

You'll need a laptop to write the source code, and 220V (or 110V) power to charge the laptop, but it's hard to find a flight location with such an environment.

Because of these reasons, I think it will take a lot of time to make it into a lecture. so I excluded it.

Anyway, if all the functions are implemented up to the part 3, you can fly perfectly manually.

And if manual flight is fully implemented, you can also automatically control altitude and position using the barometer and gps.

The contents in Part 4 need to be developed while flying outdoors, so it takes more time to develop than the content in Part 1 2 3.

To explain more about the details of each part,

Firstly, in Chapter 1. We will start building a debug environment for developing embedded applications.

There are two types of indicator, one is LED and the other is buzzer for visual and sound indication.

Also, we will do UART communication for the purpose of checking the value of the variable while sending and receiving data with the PC.

Chapter 2 describes the sensor interface. There are three sensors on the MH-FC V2.2.

We will initialize these three sensors, receive data, and check the data rate of the sensors. We will also check wheter the sensor works well using graphs and texts.

So, in fact, the contents in this chapter 2 are the most basic and important for drones. That's because the drone's flight control is based on these sensors.

And for the barometric altimeter, altitude holding is not done in this course, but I will try to receive and check sensor data.

In chapter 3, we are going to connect GPS and receive data. And for the GPS, also position holding is not done in this course,

but we will see how to set up the UBLOX NEO-M8N GPS, what data protocol is and how latitude and longitude data comes in.

In Chapter 4, we will do a protocol analysis of how the data from the fs-ia6b receiver comes in and how to parse the i-bus serial data.

Also, I will explain how to configure the fs-i6 transmitter like fail-safe.

In Chapter 5, we will assemble the drone components. We will install the motor and ESC on the QAV210 frame and connect the wires.

It is a preparation for motor driving.

In Chapter 6 we will drive the motors.

It needs to use ESC to drive the motor, I will explain how to signal ESC to drive the motor.

There are several esc protocols. For example, oneshot, multishot, dshot, proshot and so on.

I will simply explain these protocols, and we will use oneshot125 protocol among them.

The oneshot125 protocl is a PWM protocol. To generate PWM, we need to use timer peripheral(TIM).

We will check that the motor works well when generating PWM using the timer of STM32. To adjust the motor rotation speed, we will use the joystick data from the FS-i6 transmitter we did in Chapter 4.

And I will also explain how to calibrate the ESC. This is the content of Part 1.

In Part 2, we will use the 3DR telemetry radio module to transmit the drone's status data wirelessly. Transmitting joystick values, battery voltage and sensor values ​​to a PC and receiving PID control gains from the PC.

In order to communicate each other(drone and PC), the data structures have to be defined first. This is called defining a communication protocol.

When the drone firmware developers do the PID control, they usually put the PID gain as a constant in the source code. and when they change the gain, they change the value of the constant and download the firmware.

This is the common mistakes. It's very complicated to change the gain in this way. The propellers may hurt your hand at that time because you have to connect ST-Link cable to the FC. It also takes a long time.

This is very inefficient. So, if the gain can be changed wirelessly, it is safe and the time to find the appropriate gain is greatly reduced.

And in Chapter 8, we will implement additional functions that it is not necessary, but convenient.

If the PID gain remotely transmitted, it must be stored in FC. However, if you use a local or global variables, even if you change the gain, the gain will be rolled back to previous gain if you power off the FC and then turn it back on.

So we will store PID gains into the non-volatile memory EEPROM to prevent this phenomenon.

Also, when the power is turned on, the gain value is read from the EEPROM again and used for control.

And there is a risk of falling if the battery becomes low while flying, so if the battery voltage drops below a certain level, make the buzzer beeps.

So we can check the low battery status with the sound of the buzzer.

Lastly, there are some cases where the gyro sensor has a dc offset. When the gyro is not moving, the output should be 0, but sometimes its values are not.

So, if the sensor data is used for PID control, the attitude of the drone may be tilted as much as the offset.

so we will put the source code for gyro DC offset removal.

The functions that will be described in Chapter 9 are really important functions.

These are functions for safety. It seems that some novice drone developers overlook the contents of this chapter 9, causing a lot of accidents.

What are the functions, firstly, if you turn on the drone with the throttle stick raised, the motor may suddenly rotate. This is the most dangerous situation.

To prevent this, if the throttle value is high at first boot, the motor will be forced to stop so that it does not rotate. Also, when the motor is arming, it will only be possible when the throttle is minimal.

Motor arming means that the motors start spinning.

Also, sometimes the sensor is not recognized when booting up.

The 9-axis and 6-axis sensors are used for attitude control, so you should not fly unless the sensor is recognized.

If you don't check it and start raising the throttle, the drone may suddenly overturn or rush at people.

So, you need to check whether the sensor is connected well and that the sensor data is coming in.

And for the case of connection lost with the transmitter, for example, if the drone is too far away from the trasmitter, or if the transmitter battery is fully discharged, you cannot control the drone.

Therefore, if the connection is lost, a dangerous situation can occur. So we will put in a function to motor force stop for fail-safe.

However, be careful when flying outdoors, as forcing the motors to stop may fall on people.

In that case, you could add a function that slows down the motor speed and lands automatically.

However, in this tutorial, we will not implement that function, and we will force to stop the motors.

Therefore, we will check the fail-safe has occurred and implement a motor force stop in fail-safe situation in chapter 9.

So this is what I will explain in Part 2.

Part 2 has only 3 chapters, but there are a lot more things to implement than Part 1.

And in the final part 3, Since the basic functions and safety functions of the drone have been implemented in Part 1 and 2, it is time to do flight control in Part 3.

First, I will briefly explain the PID control theory. And we will first control the roll and pitch axis using the 6 axis sensor and 9 axis sensor.

Roll pitch control will use cascade PID control.

It is a double loop PID controller. Cascade PID control has better performance than single loop PID control in high speed control.

And yaw axis control will use single loop PID controller. Also, the yaw axis control will use two separate single loop controls.

One is to control the angular rate of the yaw axis using only the gyro sensor.

Another is to control the rotation angle using a magnetometer.

However, in this case, since it uses a magnetic field, it may be affected by the surrounding magnetic field.

If there are somthing who generates magnetic fields around, the sensor value may be output abnormally.

Which means while the drone is still, the sensor value may change by itself, and this causes the yaw axis control to malfunction.

Also, even if the magnetometer's calibration is not properly done, yaw axis may be controlled abnormally.

In the lecture, I will explain both angle control and angular rate control.

This is the overall contents of this course, and the number of lectures will be about 50.

Currently, all courses have been completed, and English subtitles will be added sequentially. It will be added one or two per a week.

And when the subtitle production is finished, I would record the contents of Part 4 as a sequel course.

Altitude control and position control will be produced as follow-up lectures, and there is no specific plan yet.

And also after that, I would make a course for simple GCS programs using Visual C#.

It is a program that marks the location of the drone on Google Maps and displays status of the drone such as sensor data and battery voltage. I want to make everything as a lecture, but I think it will be a long-term project.

Let's see the content of the course. This course is for developing drones, but the actual drone flight control is in the last part 3.

The contents of Part 1 and Part 2 are more about the basics of unmanned vehicles, rather than about drone development.

These are functions that can be used for all unmanned vehicles.

So the contents in Part 1 and Part 2 in the blue square are basic functions.

The contents in Part 3 in the red box are applied technology for drones.

The contents of Part 1 and Part 2 can be applied to drones, as well as balancing robots or unmanned vehicles.

Usually, novice drone developers overlook the contents of Part 1 and Part 2, and start with PID motor control in Part 3. This is the most common error.

If the drone development is finished and the flight is not working well, at that moment, the easiest thing to do is to change the PID gain.

If they're lucky, the flight performance might be better, but in most cases, flight performance does not improve.

Then they will be wondering it is a not problem of PID gain. Then come back and they're wondering is it a problem with the algorithm? not a gain?

Then, will search and experiment with various PID control open sources.

But they may also not be able to find the problem.

Then they will come back and check if there is a problem with the sensor value.

However, checking through the texts, it's not possible to see how much the noise level and output latency is. Therefore, it is better to check through the real-time graph or sensor log.

In conclusion, you should always check that there are no functional problems while implementing the functions of Part 1 and Part 2. If you don't go through that process, it might not be possible to fly a drone, and even if something goes wrong, it will take more time to solve it.

There is also a high probability that bugs are hiding.

So no matter what project you are working on, You need to take a lot of effort to implement the basic functions.

Looking at my drone lecture, there are a lot of things to prepare in Part 1 and Part 2 before PID control.

Although this course is about drone development, Controlling the motor and flying the drone is only a small part.

Without PID control, of course, drones cannot fly, but the amount of PID control part is not much.

The reason I emphasize this is that engineers have to go through a lot of trial and error in the process to make a product, and a lot of thought.

From the lowest level, from building a debug environment or receiving sensor data, you need to make a habit of going to the next step after verifying previously implemented features.

So my drone development course will explain these development processes. This is what makes my lecture different from the other drone course.

So, the final goal of this course is to develop a drone flight stable, but your goal is to learn what steps are required to develop a single embedded application called a drone. For you, learning those processes is more important than flying a drone.

There are something more to talk about this lecture.

1. This course is not about the basics of C programming language and MCU.

So basically, you should be able to do these two things at an intermediate level or higher. So I won't answer very basic questions.

For example, those who do not know the difference between "call by value" and "call by reference" should study pointers in C language.

Also, it is better to search on Google before asking a question.

However, in this course, all the source code is explained, so even if you are at the basic level of C language, there is no big problem in following this course.

And 2. Improve the ability to design structures of project. You should be able to draw the big picture, and you should be able to implement detailed functions as well.

And you should also be possible to modularize each function. What features are needed to develop a drone, you should be able to design the structure of what detailed functions are needed.

For example, if you change one sensor and you have to rewrite all the source code. This is the wrong design and wrong modularization.

When you change something, you must change that part without changing other parts. This is the good system structure.

And 3. In this tutorial, we will write code at the firmware level without using the OS. We will use the HAL driver and LL driver provided by ST.

4. The flight mode in this course is Self-leveling (Angle control) mode.

There are two flight control modes: Self-leveling and Acro mode. Self-leveling is that the joystick value is to be the target angle for roll, pitch. Automatic flight is not covered in this course.

5. There is a commonly used open source algorithm for calculating angles, the Madgwick algorithm.

There are 6-axis and 9-axis algorithms. Looking inside this algorithm, the quaternion is calculated using the raw data of the sensor, and the final rotation angle is calculated with the quaternion.

But in MH-FC, BNO080 sensor calculates and outputs the quaternion internally,

so we don't need to use the Madgwick algorithm, just calculate the rotation angle with quaternions.

But using the quaternions, the range of the rotation angle is limited. If the drone tilt beyond that range, it may behave strangely and dangerously.

In this case, if necessary, you can use Complementary filter with gyro and acc of the ICM-20602. When using the Complementary filter, there is no limit to the range of rotation angles. But the yaw angle may be inaccurate.

In this course, we do not use the Complementary filter. Also neither the Madgwick's algorithm. Just quaternions to angle algorithm will be used.

6. The source code I explain in this course is not the best drone code.

Obviously, there is better drone open source code than my lecture.

So, if you find a better code, you can use it. And seeing a lot of source code written by others is better for improving your programming skills.

However, it is a good to write the source code myself and compare how the code I wrote and the code written by others are different.

Writing the source code written by others without thinking is absolutely not helpful in the study stage.

7. The outcome is important, but the development process is more important.

During development, you should consider how the source code will work and whether there are any bugs.

And no matter how much you think about the source code, it cannot be without bugs.

However, if you write the source code roughly and if bugs occur, you fix the bugs. If you do like this, it causes more bugs.

So, this course will be a more in-depth course on these development processes.

8 is very important, don't blindly believe what I explained in the lecture.

Of course, I will explain to make sure it works safely and without bugs as possible. But I don't guarantee 100% bug-free.

So, you must wear safety equipments in a safe space when performing a flight test. I am not responsible for any accidents.

Make sure to secure enough space when have flight tests specially indoors. If possible, wear a helmet and gloves.

And when flying outdoors, don't fly high and far. Fly only in permitted areas.

Make sure there are no people around the drone. Because there are always risks of accidents.

9. Notices will be posted on the course introduction page. Sorry but I don't have my own website. If you have any questions, please contact me through Udemy.

10. The complete source code and MH-FC V2.2 schematics are not provided yet. It will not be provided for now, but I will notify when it is decided.

To purchase MH-FC V2.2, please contact me directly.

The reason for this decision is that this course has an educational purpose,

If I provide all source code, you can fly the drone even if you just skip the lecture. you can fly the droen right away by building and downloading that source code.

However, it is more important to learn each of these contents and implement them yourself than to fly drone.

So I won't provide the source code and schematics yet, but I'll explain them all in the lecture. And some driver source code is provided.

So, if you follow the lecture carefully, you can make a drone just like me, and you can fly drone very stable.

Then you will be able to easily apply it to other projects.

Before purchasing the course, watch the free videos of Chapters 1 and 2. Now course overview is over, let's go back to the STM32CubeIDE installation.

Installation is complete. Click Next and Finish.

And when you run the CubeIDE, a window will appear. It asks you to set the workspace path. I will create a new folder on the desktop.

The folder name is CubeIDE Workspace.

And you choose this one, it's good to check the checkbox at the bottom left. If not checked, CubeIDE will keep asking you every time you run it.

Installation is complete. Launch the CubeIDE. This is the first time CubeIDE was launched.

And next time, we will build the debug environment in earnest. In Chapter 1, I will explain the functions of LED, buzzer and UART communication.

So next time is the beginnig of the drone development. See you next time.

```

### Ch1 Set-up
#### video 3
- Powering up, debug UART

{% include youtubePlayer.html id=page.youtubeID3 %}

```diff
Now I'm going to do FC programming in earnest. This is Chapter 1 of Part 1. In this time, I will explain how to set up debug & development environment.

how to connect power to the FC, to create a project with CubeIDE and to write source code for LED blinking with GPIO.

Usually, when doing low-level coding and debugging at the firmware level, simply use LED and UART communication,

we will use a buzzer so that we could know the status of the FC by sound.

In particular, this buzzer will be very useful. Now, I will explain how to power on the FC first in order to drive these devices.

BEC is used to power the FC. This BEC is called PDB xt-60 from MATEK.

The xt-60 is the name of connector type, so be sure to purchase the battery with xt-60 connector.

When you first open the BEC, the BEC board and the xt-60 connector are separated. So, you have to solder this connector to the BEC board. Pay attention to the direction of the connector.

If the direction is wrong soldered, BEC may burn or the battery may explode when connecting the battery. Therefore, be sure to check the direction before soldering.

The polarity of the each terminal is marked on the edge of the connector.

When soldering, you will do it on the back side, At this time, put an enough amount of solder wire.

And beware of cold solder joint problem.

The cold solder joint is one where the solder did not melt completely. It sometimes looks soldered well but not properly attached and unrelibale. The solder bond will be poor.

This is mainly due to insufficient heat being applied during soldering. Therefore, in order to prevent this, you must apply sufficient heat to the iron and soldering pad.

At this time, the whole BEC board will be getting very hot. If you are unfamiliar with soldering, it is better to wear gloves to prevent getting burned.

This BEC outputs 3 voltage types when a LiPo 3~4 cell battery is input.

There are 7 +VBAT ports that output the battery voltage. It is marked in red.

And +12V and +5V will be output one by one. We will use +5V for FC power supply and not use +12V.

And to check the battery voltage, we will also connect +VBAT to FC, which we will read the battery voltage through the ADC.

And later, we will connect ESC to this BEC as well.

So, please connect +VBAT, GND and +5V lines like this picture. The polarity of each terminal is marked on the FC. Make sure to connect them to the correct position.

And it is a solder connection, not a plug-in connection. Be careful when soldering.

After that, connect the battery and both power indicator LEDs on the FC board will turn on. One is 5V power indicator LED and the other is 3.3V which is generated inside the FC board.

If there is no problem, both of these LEDs should be turned on.

If you have connected the battery and either LED does not turn on, remove the battery immediately and check the power connection is correct.

There is a high probability of a problem with the power connection, and in the worst case, the battery power is shorted.

At that time, there is a risk of battery explosion, so you must remove the battery immediately and find the problem.

When connecting the wire, you can connect it with a wire about awg 22 thickness.

You don't need to buy this wire, and you can cut the ESC power line and use it.

The length should be about 4cm, and one of them should be 0.5cm shorter. That short wire will be used to connect to +VBAT.

So, if you connect each of the three lines like this, they are twisted and connected like this. To be sure again, connect to the correct pad. very important.

And when the battery is connected, each 2 red LEDs on both BEC and FC must be turned on.

I have all the wire connections done. I have two types of batteries. One is the 3S 11.1V 1500mAh battery listed in the parts list table.

It will also be used for actual flight after the course is complete.

And the other is what I bought for use in development, and the capacity is 5200mAh, so it is very big and heavy. But this is not necessary for you.

Then I will connect the battery.

Now, both power LEDs on FC and BEC are all turned on.

All of this must be turned on, so that the power is supplied and operating with no problem.

And these three LEDs blinking are debug LEDs. We'll write the source code to control them this time.

And when powering up the FC, a buzzer sounds, which I have implemented in advance for testing purposes.

The buzzer operation will be explained next time.

And we'll use ST-link to write source code and download firmware. Now, let's write the source code.

Run the STM32CuebeIDE that was downloaded and installed last time.

The first time you run it, you will see a screen like this. Click Start new STM32 project.

Then something will be loaded.

After loading is complete, a window will appear like this. At first, we have to select the chip we use.

The chip we will be using is STM32F405RGT. Type 405rg in the search bar. There is one result, and this is the main MCU we will develop and use in this course.

Click Next button. Type the project name "1-1. Debug LED" and click Finish button.

Then a window will pop up. Click Yes.

Also, when loading is complete, the chip shape will appear. This is the CubeMX and this is the beginning for FC development. Here you can configure each GPIO pins, core clock, and peripherals and generate initialization code.

This is the UI of CubeMX v5. When I uploaded the stm32 tutorial class before, I used CubeMX v4 and the UI is a little different.

The first thing we need to do is the clock configuration. To configure the clock, expand the System Core tab and select RCC.

Then, a new tab appears on the right, and HSE and LSE are disabled by default. Select HSE as the crystal/ceramic resonator.

Then, in the right Pinout view, the two pins will be selected in green. The MH-FC V2.2 board has an 8MHz crystal connected to these two pins.

Then select the Clock Configuration tab at the top. The default input frequency is 25MHz, so change this to 8MHz.

Then choose HSE, not HSI. After that, change the HCLK clock frequency to 168MHz and press Enter. When a window pops up, click ok.

Then, the setting is automatically changed, select HSE again. Then HCLK is changed to 84. Please change back to 168.

So, all clock configuration is complete. You must configure the clock the same as this course.

Go back to the Pinout & Configuration tab. Now, we will initialize the GPIO pins which the LEDs are connected. To do that, we need to first check the schematic.

This is the circuit diagram of the debug LED. On the MH-FC V2.2 board, three LEDs are connected to STM32 like this.

Each LED is connected to PC0, PC1, PC2 respectively.

The LED is active high. In other words, the high signal from the pin turns on and low signal turns off the LED.

So now we are going to initialize these pins in CubeMX. First, let's configure the GPIO.

PC0, PC1, PC2 pins should be set as GPIO output. They are side by side in the middle of the left.

Left-click on PC0 and select GPIO_Output. PC1 and PC2 as GPIO_Output as well.

Now we are done with this, open the Project Manager tab. The project name and location of the project are set and cannot be changed here.

If you use CubeMX separately, you could change everything by changing the settings. but for CubeIDE, the project path is fixed when you first create the project, and you cannot change the settings.

Similarly, this toolchain/IDE is also fixed as STM32CubeIDE and cannot be changed.

Therefore, it is not possible to create a project for third-party IDE such as KEIL or IAR.

As explained in the previous time, those who want to use a third-party IDE should download CubeMX separately, not CubeIDE.

Now enter the Code Generator tab and check the first item in the Generated files group.

Then enter to the Advanced Settings. The RCC clock settings and GPIO settings will be generated as source code. The default driver is HAL.

But you can change it to LL driver.

As I said last time, we will use HAL and LL driver together and mainly LL driver.

First of all, let's make a quick comparison between the two. For now, I'll use HAL.

It's done setting up in CubeMX. Select Generate Code in the project menu.

A window will pop up and the code will be generated. If you expand the src(or core) folder, you can see that all files have been generated.

Let's open the main.c file.

Look at the source code, it is not very different from the STM32 tutorial course I did before.

At that time, I used CubeMX to create a project, and wrote source code using HAL driver.

Since GPIO was configured with CubeMX, MX_GPIO_Init() function is called. F3 is the shortcut to the function definition. Press F3.

Then the GPIO.C file is opened and the screen cursor moves to the definition of the function.

PC0, PC1 and PC2 pins are initialized as outputs respectively.

And it has been initialized to output a low signal. GPIO_PIN_RESET means to output low signal.

Back in main.c, let's build and download this code first. To download, you need to connect the ST-Link to the FC.

The connector of the ST-Link is a 20 pin box connector. So you can't plug this into FC right away.

You can download the firmware using this 5-pin 2.54mm pitch connector on the top of the MH-FC V2.2.

So you have to connect 5 pins of the 20 pin box connector to the FC.

As shown in the picture, connect with male to female jumper cables.

Connect the NRST pin of FC to the NRST pin of the 20-pin box connector of ST-Link.

Connect the SWDIO and SWCLK pins according to the pin description decribed in the picture.

And you have to connect +3.3V and ground pin respectively. All lower pins except the left are ground, and the two leftmost pins are +3.3V.

I have already connected the cable as the picture.

Connect the other end of this jumper cable to the 5-pin connector of FC. Must be careful to connect the pin pairs.

Please connect USB to the PC. If the FC is powered on at this time, diconnect the +3.3V pin of the FC.

After that, connect the battery. We are now ready to download. Come back to CubeIDE and build/download. The shortcut key is F11.

You can also push the bug icon at the top. So I'm going to press F11.

When clicking it, a new window appears. Select STM32 MCU C/C++ Application below and click OK.

Then the build process is running like this.

When this window appears, click OK again.

The build process is finished and a new window appears, which will keep appearing every time you build. So check Remember my decision at the bottom left and press Switch button.

Now download is complete and the CubeIDE have entered the debug mode. You can run the code line by line by pressing Step into or Step over at the top.

I'm just going to Terminate debug mode. We will not use this debug mode in the future. The Terminate hotkey is ctrl+F2 or you can click this red button.

Now, the download is completed and the firmware is running. Look at FC, all debug LEDs are off.

Come back to the CubeIDE and look at the source code again. The main function only has the code to initialize clock and GPIO.

And there is nothing to do inside the main while loop. And inside the MX_GPIO_Init() function, low signals are output to PC0, PC1, and PC2.

That's why all of the LEDs are off. So now, this is the code generated in the HAL driver, and let's try to blink the LED.

I'm going to add some code inside the while loop. Write "HAL_GPIO" and press ctrl+space.

Then, a list of candidates starting with HAL_GPIO is displayed by the code completion.

Select HAL_GPIO_TogglePin().

The first argument is the port name. Write GPIOC.

And the second argument is which pin to toggle. Write "GPIO_PIN_0 | GPIO_PIN_1 | GPIO_PIN_2" to toggle them.

And needs some delay to see the LED blinking. Call HAL_Delay() function. The argument is milli seccond unit.

So I'm going to put 1000 to toggle it every second.

Lets do this and download again. Press F11.

And if you edit and build the source code, a window will appear asking if you want to save the modified source code.

This message appears everytime when you build after edit the source code, So check the box below and OK.

Build and download is complete.

Let's run and check that the LED blinks every second.

When I ran it, the LEDs are blinking every second as the source code we wrote.

Now, I used the HAL driver to control the GPIO. This time, let's switch to LL driver instead of HAL driver. Again open CubeMX by double clicking on the 1-1. Debug LED.ioc file.

Change the HAL to LL in GPIO peripheral in the Advanced Settings of the Project Manager tab. Don't change anything else.

After Generate Code again, let's see the contents of the source code.

When the code is generated, open the main.c file again. The content of main.c has not changed. Now let's open the gpio.c file.

The source code in the MX_GPIO_Init() has changed a little. The MX_GPIO_Init() function has the same name, but the source code in the function have been slightly changed, and LL_ is added in front of the function like this.

When using the HAL driver, there was HAL_ in front. However, the code structure of GPIO are so simple that nothing has changed significantly.

Let's go back to the main.c file. Now, to control the GPIO, we need to call the function of the LL driver, not the HAL driver.

Write "LL_GPIO" and press ctrl+space. Then, a list of candidates starting with LL_GPIO is displayed.

There is a LL_GPIO_WriteOutputPort() and also a LL_GPIO_TogglePin() function. I call this. The first argument is also port name. GPIOC.

And the second argument is also pin name to toggle. I will use the one written above.

And then build it again. If you get a build error at this time, try "LL_GPIO_PIN_0 | LL_GPIO_PIN_1 | LL_GPIO_PIN_2".

When run, it operates the same as before. The LEDs are blinking once every second.

The source code is not much diffrent now, it is because we just have implemented very simple operation.

For complex peripherals, the HAL driver and LL driver have very different source code structures.

So, in such a case, the code may vary a lot depending on whether you are using the HAL driver or the LL driver.

In particular, in the case of the HAL driver, the method of handling the interrupt service routine is a little complicated. On the other hand, the structure of the code of the LL driver is less complex, but you have to write all the code yourself.

HAL driver is more complex and difficult to analyze the code inside.

But it is general-purpose and has good error handling. I prefer simple code, so I will proceed with mainly the LL driver.

So this time, we simply tried to blink LED with GPIO using both HAL and LL driver.

We have also created a project with CubeIDE and initialized the STM32 chip peripheral with CubeMX.

Next time, we will use a timer to generate a buzzer beep.

See you next time. Thank you.

```


#### video 4
- Buzzer setting 쿼터니언 회전각도 계산

{% include youtubePlayer.html id=page.youtubeID4 %}

```diff
Last time we used the GPIO to blink the LEDs, and briefly compared the HAL driver and LL driver.

At that time, I explained something wrong, so I will correct it first.

Please open the main.c that we wrote the source code in last time, the LL driver was used to toggle GPIO.

The function takes two arguments, the first is the port name and the second is pin number of the port.

If you build this source code, a build error may occur. The error message is that GPIO_PIN_0, GPIO_PIN_1 and GPIO_PIN_2 are not declared of defined.

But I could build without any errors, and it worked well after downloading.

The reason is, when I press F3 to go to the definition, the stm32f4xx_hal_gpio.h file opens and they are defined as a macro.

Probably, those who only uses the LL driver is not be able to open this file because this file does not exist.

I could open this file because I first created the project with the HAL driver.

So, since stm32f4xx_hal_gpio.h file was added to a folder in this project, no error occurred.

The path to that folder is Drivers - STM32F4xx_HAL_Driver. If you open this folder, those who created the code only with the LL driver will not have the stm32f4xx_hal_gpio.h file in this folder.

Since I created the project once with the HAL driver, that file exists in the folder.

So I could build without any errors, and if this file doesn't exist, you need to change the source code a bit.

If you use LL driver, put LL_ in front of GPIO_PIN_x.

That is, not GPIO_PIN_0, but LL_GPIO_PIN_0. Now you can build without errors. Let's go to the definition. Press F3.

Another file was opened this time. It is stm32f4xx_ll_gpio.h file, LL driver file.

So, to use the LL driver, you have to write the code as I do now.

And in the future, I will mainly use the LL driver. If you are using the HAL driver, you can comment out this code now and use the code above.

Now let me explain what to do this time. This is the 1-2. Generating Tone with a Buzzer (TIM-PWM).

We're going to drive the buzzer, one of the output devices. We will write and implement the source code so that the sound of a specific frequency we want is output when the power is up.

And from now on, I will show a demonstration of the result of the course at the beginning of each video.

The buzzer used in MH-FC V2.2 is a passive buzzer. This is a device that outputs a beep sound when an AC signal of a specific frequency is input.

So, we need to generate this AC signal and input it into the buzzer, and we will use the PWM signal. The frequency of PWM should be the same with the beep tone to be output.

And the width of the pulse doesn't affect to the amplitude or frequency of beep tone. So we can fix it with a duty cycle of about 50%.

The driving method is a little different from the active buzzer. The active buzzer outputs a sound immediately when a DC signal is input, and the frequency of the tone cannot be changed.

But passive buzzer can produce all the frequencies we want. So the passive buzzer is adopted for MH-FC V2.2.

To generate a PWM signal on the STM32, we should use a TIMER, which can be used to determine the period and width of the pulse.

If you need a detailed explanation, you can listen to it in the TIM chapter of my another STM32 tutorial course.

It explains the basic concept of generating PWM using a timer.

First, let me explain the buzzer circuit. The buzzer uses PB1 pin.

This is channel 4 pin of timer 3. The yellow circle is the buzzer, but PB1 is not connected directly to the buzzer, but is connected through a transistor.

This buzzer operates at 5V, but the PWM signal from STM32 is 3.3V,

so if you connect this to the buzzer, the buzzer sound will be low. Therefore, in order to drive 5V with a 3.3V signal, it is driven through a transistor.

That's the role of the transistor in MH-FC V2.2.

And the resonant frequency of this buzzer is 4kHz.

This means that the dB is the highest around 4 kHz, that is, the sound is the loudest, at other frequencies, the volume is slightly lower.

So what we will do this time is to generate a PWM with 4 kHz period and 50% duty cycle on TIM3-CH4.

When the system clock is 168MHz, timer 3 operates at 84MHz. To determine the frequency of the PWM, we should put some values ​​into PSC (Prescaler) and ARR (Auto Reload Register).

To generate a frequency of 4kHz, PSC = 1000 and ARR = 21 respectively. But this is not the only way to generate a 4kHz PWM.

The value divided by PSC and ARR at 84MHz becomes the frequency of the PWM. Therefore, you can change the two values ​​of PSC and ARR according to the calculation formula.

And put 10 in CCR to make 50% pulse width. That's half of the ARR.

Since all registers must be put in integer form, you can put 10 or 11.

All these basic concepts are explained with picture in the STM32 tutorial course, so if you are curious, please take a look.

Then, before doing the code generation, I will explain how to manage the project version first.

If you know better way to manage project version, you can use it. This is how I do it.

First, copy and paste the folder you were working on before.

And rename this copied folder to "1-2. Debug Buzzer".

And copy the folder name, also rename the .ioc file in the folder to be the same as this folder name.

This .ioc file is a CubeMX project file, but if the name of this file is different from the parent folder name, it cannot be opened.

After that, delete the .elf.launch file. Delete the Debug folder as well.

After doing this, run CubeIDE by double-clicking the .project file.

When it runs, a window pops up like this and asks for something. Click Yes.

Then, another window pops up and asks, also click OK.

Then, all the project trees in the Project Explorer tab on the left will be deleted.

If there are any remaining projects, please close them. Likewise, close all open files in this source code editor window.

Now, we are going to import the project in the folder we copied earlier. Click Import projects.. or select file - Import.. from the top menu.

This window appears, select Existing Projects into Workspace and click Next.

Then click Browse... Select the "1-2. Debug Buzzer" folder we copied a while ago.

Then, the selected project is added to the item like this, and when you click Finish, the import is completed.

It has been added to the left Project Explorer tab. Expand the project and run the 1-2. Debug Buzzer.ioc CubeMX file. Double click the file.

Now the CubeIDE is running. As you can see, the settings that we made last time remain.

So, from now on, we will copy the folder we worked in the previous time and use it. And I deleted the .elf file and the Debug folder,

Those are created again when we build the project after writing the source code. So I deleted it. If that file remains, it gets a little complicated when building the source code.

This CubeIDE is based on Eclipse, but it is difficult for me to use.

In particular, it seems to be a little complicated to manage the project version by folder.

Anyway, if you know a better version management method, you can use it.

Then, let's configure the timer peripheral in earnest.

First, select Timers from this category tab.

And here choose timer 3.

Mode and Configuration items have been expanded. First, select Internal Clock as Clock Source in Mode item.

Then, menus that we should set in the Congifuration item are expanded. Select Channel 4 as PWM Generation CH4.

Then we are done setting up in the Mode tab. Look at the Configuration tab below, there are Prescaler and Counter Period.

Prescaler is PSC and Counter Period is ARR (Auto Reload Register). Using these two, we can select the frequency of the PWM and the pulse width should be after that.

In the course material, I explained that PSC = 1000, ARR = 21 to generate 4kHz PWM.

But the actual value is -1 from that value.

Therefore, we could put 999 instead of 1000 in PSC. For ARR, put 20 instead of 21.

Counter Mode can be left as it is Up. Leave the Internal Clock Division as it is No Division.

And Enable the auto-reload preload. There will be a difference, but I don't think that is big.

You should find in the reference manual for the exact difference. Enable it.

And since we're not using the Trigger Output, so skip it. In PWM Generation Channel4, leave the PWM Mode as mode 1,

Below that, the Pulse is the CCR (Capture Compare Register) explained in the course material.

Putting about 10, which is half of the ARR, in this CCR, the width of the pulse becomes 50%.

Put 10 in the Pulse item.

And we're going to use the Fast Mode as well. I don't think there's a big difference either.

And leave the CH Polarity as High. Now the setting is done here. PB1 is well selected as TIM3_CH4.

Then go to the Project Manager tab and check the Project Name and Location. It is well set up.

Select the Advanced Settings. TIM has been added. The default setting is HAL driver.

We are going to use LL, so change HAL to LL.

Okay, now that the TIM3 configurations are all over, let's generate the code. Select Project - Generate Code.

Code generation is complete. If you are curious about what I did not explain, please look for the reference manual.

So let's move on to working with the source code. Open the main.c file in the scr folder.

Scroll down a bit, the MX_GPIO_Init() function that was done last time remains, and the MX_TIM3_Init() function was newly called under it.

Also, the source code that I wrote in the while loop last time remains.

First, I should explain this. When writing source code, you must write it between /* USER CODE BEGIN */ comment block and /* USER CODE END */ pair.

Otherwise, if you generate Code with CubeMX, the code will be erased.

If this code is written outside of the comment block pair, it will be removed by Generate Code in CubeMX.

Therefore, when writing code, be sure to write inside the comment block pair.

Now let's check the inside of the MX_TIM3_Init() function.

Press F3 to go to the definition. The tim.c file in the src folder is opened. This file is automatically generated by CubeMX.

And inside the function, the TIM3 is initialized as previously set using the LL driver.

First of all, I'll build and download it. F11 is the build/download shortcut.

Connect ST-Link to FC, turn on power, and press F11. Then a new window pops up. Select stm32 and click OK.

The build is complete. Another window appears asking something. After checking the contents, click the OK button.

Download is complete. Click the Terminate button to exit debug mode. Then FC enters run mode.

Now FC is running, but there is no sound from the buzzer.

Even after reset, there is no sound, but the code in the while loop is being executed and the LEDs are blinking.

That's because timer 3 is initialized, but not running.

We need to add some code to make the timer work, and let's write those code.

Write LL_TIM_ and press ctrl+space. Be sure to write between USER CODE BEGIN and END comment block.

Looking at the candidates, there is LL_TIM_EnableCounter() function.

Please select that function, this function has one argument, which timer to enable. Write TIM3 as an argument.

When this function is called, the timer is getting started, but the PWM is not output yet.

Let's go back to the definition of the MX_TIM3_Init(). Since OCState is disabled, PWM is not output. This should be enabled.

So, we have to add another code to enable this. After writing LL_TIM_, press ctrl+space again.

Select LL_TIM_CC_EnableChannel() function. This function takes two arguments, and the first one is timer number. Write TIM3.

The second argument is which channel of that timer to be enabled.

We're going to use Channel 4, but we should not just pass number 4. Let's go to the definition of the LL_TIM_CC_EnableChannel() function.

This time the file stm32f4xx_ll_tim.h was opened. It is explained that this function can come as a second parameter like these.

Among them, we use channel 4, so copy LL_TIM_CHANNEL_CH4 and write it in the second argument like this.

So now the timer will start running and the PWM output will be enabled, so the buzzer will sound.

Let's build it. Press F11.

The build has been complete, and the buzzer started to sound.

Let’s check that this sound is exactly 4 kHz. This app measures the frequency of the sound used when tuning a guitar.

It is showing exactly 4000Hz. I'm going to power off the FC for a moment.

Now we have generated a PWM with 50% pulse width at 4 kHz frequency as configured.

This PWM signal will be used later to drive motors, and then we will observe the actual signal with an oscilloscope.

This time, we simply checked with a buzzer and also measured the frequency of the tone. So now it should be able to change the frequency of the PWM.

Let me explain an easy way to adjust the frequency of the PWM.

First, write TIM-> like this. TIM3 is a pointer to a structure defined as a macro,

and if you write code like this, you can access the member variables of the structure. Let's see the course material again,

I explained earlier that the period of PWM is determined by the PSC and ARR values.

However, changing the ARR value during runtime may cause the PWM output to stop.

Therefore, in order to change the period of PWM during runtime, the PCS must be changed without changing ARR.

Among the member variables of TIM3, there is PSC, which is the Prescaler that we put the value 999 in CubeMX.

To change the frequency of the PWM, I will put 2000 to TIM3->PSC. And give a 100 ms delay once,

After that, put 1500 in TIM3->PSC and give 100ms delay again,

Lastly, put 1000 and give 100ms one more time.

Let's think about the result of this code. First, when putting 2000 in PSC,

according to the f = 84MHz / PSC / ARR formula, 2kHz PWM will be generated. So, 2kHz tone will sound, When the PSC is set to 1500, a slightly higher frequency, about 2.6 kHz, is output.

And finally putting 1000 in the PSC, and at this time, about 4kHz sound is output.

In other words, frequency tones of 2 kHz, 2.6 kHz and 4 kHz are output. And after each tone is output, a delay of 100ms is given.

First, let's build&download this and see how it works.

I will power on the FC again and download it.

After downloading and running, the buzzer works like this and doesn't stop sounding. But we want to stop.

This is because PWM is not disabled after enabling. To turn off the buzzer, the PWM signal need to be disabled.

There is an EnableChannel function also DisableChannel function too. EnableCounter function enables TIM. And EnableChannel function enables PWM output.

What we should do is to disable not TIM but PWM output.

After writing up to LL_TIM_CC_, press ctrl+space. We can find LL_TIM_CC_DisbaleChannel() in the list.

The arguments are the same as EnableChannel function. Write TIM3 and LL_TIM_CHANNEL_4 as each argument.

Let's do this and build again.

Terminate the debug mode and run.

Now, the beep sound is output, and the sound stops as this DisableChannel function is executed.

So now we can generate PWM and change the period and disable it in this way.

The period of PWM can be calculated by the values ​​of PSC and ARR using the equation f = 84MHz / PSC / ARR.

If you are curious about where this equation came from, please watch my STM32 Tutorial.

This time, we operated the buzzer using PWM, and by changing the value of this PSC, we can make sounds of various frequencies.

So, we used TIM3 to generate a PWM and set the period and pulse width as desired.

And this time, the pulse width is fixed at 50%. To do that, just put half of the ARR value, 10, into the CCR.

That is, You can put the code. TIM3->CCR4 = TIM3->ARR/2;

However, we have already set up CubeMX as it is, and it is automatically code generated. CompareValue = 10 This code has the same effect as the TIM3->CCR4 = 10 code.

And since 10 is half of the ARR value, it will be the same as TIM3->CCR4 = TIM3->ARR / 2 again.

Since the pulse width is fixed at 50%, this CCR value does not need to be changed. We will change the value of CCR in the motor driving chapter.

Next time, we will do UART communication and exchange data with PC.

See you next time. Thank you.

```


#### video 5
- PC connection UART

{% include youtubePlayer.html id=page.youtubeID5 %}

```diff
This is the last time of Chapter 1. This time, we will try to do data communication with PC through UART.

If we do this, we can check the value ​​of sensors on FC, such as angular speed and rotation angle, on a PC through UART.

This makes it easier to debug during development. You don't have to do this with UART, you can do it with a debugger like ST-link or J-link,

I prefer to do it with this UART, So, I made a UART port for debug in FC.

What we're going to do today is,

When data is sent from PC to FC through the terminal program, the value is sent back to PC and print to the terminal program.

And when a specific value comes in, we'll turn on and off the LED and buzzer on FC board.

Sending 0 like this will toggle the LED of FC,

Sending 1 will turn on the buzzer, sending 2 again will make the buzzer turn off.

And FC will send the received value back to PC so that to print on terminal program like this. And finally, we will print the value of the variable using the printf function.

There is a lot to do this time, so I'll explain it quickly.

UART for debug uses UART channel 6, When FC is placed like this, the connector is a 2.54mm pitch 4pin pinheader on the bottom side.

The pin is 3.3V output(1), ground(2), rx(3), tx(4) from left pin.

So, we're going to send and receive data to and from the pc through UART channel 6. To do that, firstly, we need to connect with the USB to UART module.

USB to UART module can be used with whatever you have. Commonly used is PL2303, cp210x, ft232 and you need to install the chipset driver for your module.

And now, in order to communicate between fc and USB to UART module, you need to connect lines.

In this case, tx should be connected with rx and rx should be connected with tx.

You must also connect the ground. But DO NOT CONNECT 3.3V with this vcc pin here.

Usually 5V is output from USB to UART module. But the debug UART connector is 3.3V, so if you connect it, it may cause a short circuit and cause overcurrent.

Then, the USB to UART module or FC may get serious damage.

Therefore, never connect it and it is recommended that you supply the power to FC from the battery through the BEC.

Now let's set UART channel 6 with CubeMX. Tx and rx is connected to PC6 and PC7 respectively.

And UART will be used in asynchronous mode. As for the parameters, 8 bit for data bit, no parity, 1 bit for stop bit and 921600bps for communication speed.

So, if we set up the FC and the terminal program in the same parameters, we will be able to communicate in both directions.

So, let's configure UART6 parameters with CubeMX.

Copy the "1-2. Debug Buzzer" worked on last time and rename this folder to "1-3. Debug UART".

And copy the name of this folder, and come into the folder.

Change the name of the .ioc file to the same name, and delete the .elf file and Debug folder.

Then run CubeIDE. Double-click the .project file.

if there are other projects open in this project explorer tab, please close it first. Likewise, close all open files in the source code editor.

Then click on the Import project and select Existing Projects into Workspace.

Then click the Browse.. button and select the "1-3. Debug UART" folder we just copied.

Then it was added to the Projects: item. Click Finish.

Import is complete. Now run CubeMX by double clicking on this ioc file.

CubeMX has been launched. In the bottom right corner, an Updates Available notification has appeared.

When I first started this drone development course, I used CubeIDE 1.0.0,

It was recently updated to a new version, so it seems that version 1.0.1 has been released.

Therefore, it is a notification window asking me to update, but first, I will proceed with version 1.0.0.

Now, we will initialize UART channel 6. First, expand the Connectivity tab and click USART6.

The mode and configuration menu appears. Select Mode Asynchronous.

Then, menus to be set appear in the Configuration tab as well. First, change the Baud Rate to 921600.

Others can be used as the default settings. Data length is 8 bits, No parity, 1 stop bit. And leave everything else as it is.

And when receiving data from PC, it will be treated as receive interrupt. Come to the NVIC Settings tab.

You can see the Enabled is not checked, check this.

PC6 and PC7 are well-selected for GPIO. Then, we're done here, come to the Project Manager tab and check the contents here.

In Advanced Settings, change HAL to LL driver for USART peripheral. So, everything is done with CubeMx.

Then click on the project at the top and generate Code. Now that we have finished generating the code, let's open the main.c file in the src folder.

Please scroll down. This code that I worked on before remains,

Newly UART channel 6 initialization function has been called. Press f3 to go to the function definition.

The usart.c file in the src folder has been opened and the cursor moved to the definition of the function.

It was initialized with the LL driver, and the parameter setting code was well generated as set in CubeMX.

Come back to main.c. Now UART6 TX RX has been activated.

But we haven't activated the receive interrupt yet. we'll write that code a bit later.

Then, let's transmit the data first. Comment out the code written in the previous time,

We'll send data to PC through UART6. Write "LL_USART_" and press crtrl+space.

There are LL_USART_TransmitData8() and LL_USART_TransmitData9() functions. Select LL_USART_TransmitData8() function because it is 8-bit data length.

The first argument is the channel number to send to the UART. Write "USART6". And the second is the data to be sent.

We will send the data 'A' once every second.

Write the code same as the course and build it. Press f11. When the window pops up, select STM32.

Also, a window like this appears. My PC's performance is bad, so the screen looks weird.

Just check the contents and click OK button at the bottom.

Download is complete.

After exiting the debug mode, the letter 'A' will be received once every second and printed on the terminal.

The terminal program I use is Terminal 1.9b. You can easily find it on Google.

Even if you use a different terminal program, you can use it. Be sure the UART parameters of the terminal must also be set the same.

Now the program is running and data 'A' was received once a second like this.

As now, you can use the LL_USART_TransmitData8() function to send.

And when receiving data through UART, there are polling method and interrupt method. Usually, interrupt method is used.

Come back to the UART initialization function. This NVIC functions initialize UART interrupt.

Currently, only USART6 global interrupt is enabled, To use interrupt, we must enable USART6 receive interrupt separately.

So let's write that code enabling rx interrupt. After writing LL_USART_, press ctrl+space.

There is a function called LL_USART_EnableIT_RXNE() in the list.

In addition to this, there are a number of other named functions that start with LL_USART_EnableIT, all of which are different types of UART interrupts.

RXNE interrupt can be regarded as a receive complete interrupt. We will use the receive complete interrupt, so select LL_USART_EnableIT_RXNE().

This function has one parameter, which UART channel receive interrupt to use. Write "USART6".

If we do this, a receive interrupt is requested when data is received.

And when an interrupt is requested, the ISR(Interrupt Service Routine) function will be called. That function is defined in the stm32f4xx_it.c file. Let's open it.

Scroll down, there is a function called void USART6_IRQHandler(void) at the bottom.

Now this function will be called no matter what interrupt of USART6 is requested. In this function, we have to first find out which interrupt is requested among USART6 interrupts.

So we'll write code to check it.

Between BEGIN and AND block comment, After writing "if(LL_USART_", press ctrl+space. There are several functions that start with "IsActiveFlag",

and these are functions that check the flag which interrupt is requested.

We should check whether the receive complete interrupt is requested, so we use the LL_USART_IsActiveFlag_RXNE() function.

The argument of this function is also "USART6".

Now this way, if any USART6 interrupt is requested, the USART6_IRQHandler() ISR function is called first. In that function, it checks whether it is a receive interrupt or not,

and if it is, the data has been received.

In this if statement, the RXNE flag must be cleared first. "LL_USART_ClearFlag_RXNE (USART6);" Write this code inside the if statement.

In the future, when handling interrupts with the LL driver, you must clear the flag in the ISR first as we do now.

When using the HAL driver, a function is called inside USART6_IRQHandler() ISR. And the flag is automatically cleared in it.

But using the LL driver, you have to write a code to clear the flag yourself as we do now.

Now, we will define a variable and store the received data there. That variable should be used in main.c as well, so it should be declared as a global variable.

Scroll to the top and declare it in the Private variables area. Declare "uint8_t uart6_rx_flag = 0;" for rx flag.

And declare "uint8_t uart6_rx_data = 0;" for rx data as well. Declare two global variables like this.

Come down again.

We will store the received data in a variable "uart6_rx_data".

To do that, we have to call the UART receiving function. There is a function called LL_USART_ReceiveData8().

Pass "USART6" as an argument to this function. If we write this, the received data will be saved in that variable.

Then, let's send it back to the PC to check whether the received data is correct.

To do that, we can send the received data back to USART6. We can call "LL_USART_TransmitData8()" function.

The first argument is "USART6", and the second would be the value of the variable received and stored. Write "LL_USART_TransmitData8(USART6, uart6_rx_data);".

Then, when the data is received, we are going to do something in the main function.

To check whether the data has been received in main.c, we should store the state when the data has been received. So we declared a flag variable earlier. We can set the flag variable to 1 in USART6_IRQHandler() ISR.

Write "uart6_rx_flag = 1;". Then come to main.c, first, comment out all the code in the while loop,

In the while loop, if the flag value is 1, 1byte data is received. Then we need to do something once.

First, clear the flag to 0 in the if statement to avoid repeatedly entering this if statement. And now we will call the UART transmission function in the main function not the USART6_IRQHandler ISR function.

When data is received, the data must be transmitted back only once at that time. So, we can call it inside the if statement.

If I do this and build, a build error will occur. As you can see, I got an error now.

Seeing the error message, "uart6_rx_flag" and "uart6_rx_data" two variables could not be found.

Because the two variables are global variables declared in the stm32f4xx_it.c file, so other files cannot directly access them,

Therefore, it must be defined as extern where you want to access in.

So, I will define in the Private variables area at the top of main.c. Copy these two variables and paste them into main.c.

Add "extern" before each declaration. Note that extern variables cannot be initialized. This is the basic syntax of the C language, so I will not explain it in depth.

This will allow main.c to access the two global variables declared in the stm32f4xx_it.c file.

Now it would work without any errors. I will build it.

Build and download is complete. Terminate debug mode.

Now let's think about the process flow.

First, when data is received, this USART6_IRQHandler() interrupt function will be called, and the received data is stored in the "uart6_rx_data". After that, the "uart6_rx_flag" is set to 1. These are what are done in the USART6() function.

Meanwhile, in the main function, the while loop continues repeating regardless of that.

Initially, this flag variable is 0, but it will change to 1 when data is received.

Then, as it enters this if statement, the flag variable is cleared to 0, And the received data is sent back to USART 6.

In other words, we made an echo program.

Let's see the result. After sending '2', it is received as it is and is being printed.

I'm going to send other texts as well.

Also, the transmitted data is received as it is.

Now when certain data is received, for example '0', the LED is toggled, it turns on the buzzer when '1' is received, and turns off the buzzer when '2' is received.

This is making a simple application using UART.

First, write "switch" in the if statement, If the received data is '0', we do something,

if it is '1', we do something again, and if it is '2', we also do something.

When it is '0', toggle the LED. Duplicate the GPIO toggle code above.

When it is '1', we will turn on the buzzer, but now the buzzer is off. We can turn it on by enabling PWM again.

Duplicate the PWM enable code as well. When it is '2', this time we will turn off the buzzer.

So we should disable PWM here. So that's it. Build again and run.

Look at the FC. The LEDs are off right now. Let's send '0'. LEDs are being toggled like this. It turns off when you send '0' again.

And the echo is well received, so it's printed on terminal program.

And sending '1' turns on the buzzer.

Sending '2' also turns off the buzzer.

So, we made a very simple application that controls hardware with UART.

Now, lastly, I will explain how to print a variable using the printf function.

If I use the printf function it doesn't work yet. In order to use printf, we need to redirect the device to be printed first.

To do that, we need to define a function. We will define a function at the top of main.c.

The name of the function is "int _write()".

This function has 3 parameters: int file, char* p, and int len.

To explain this function briefly, when you call the printf function, the string to be printed is passed to the _write() function.

So this pointer "char* p" points to that string. Also the length of the string is stored in "int len".

We can ignore the "int file".

We should send the string to USART 6 for that length. So, in the function, first write a for loop,

Write "for(int i=0;i<len;i++)" to repeat from i = 0 to len.

In the for loop, every byte should be repeatedly sent to USART6. So, we call the "LL_USART_TransmitData8()" function in the loop.

The first argument is "USART6", And this "LL_USART_TransmitData8()" function is a function that only transmits 1 byte,

If the length of the string is 10 bytes, it is not sending 10 bytes at once, but sending 1 byte 10 times.

So, we can send the value wherever this pointer p points. Write "LL_USART_TransmitData8(USART6, *(p+i));"

If you do not understand this, you should study pointers in C language. And it seems to be able to transmit well when some delay is given below it.

Give a 1ms delay. Then it is working without any problem.

Then finally "return len;".

Now, if we call printf function, data is sent to USART6.

Comment out the code written a while ago. Let's print "Hello". Write "printf("Hello\n");"

Print it once every second. Now I'll build it. I'm wrong here. Written in uppercase. Correcting it.

I will build again. When the build is complete and run, you can see that printf works well like this.

Now, let's print out the value of the variable.

There is no issue to print integer variables. Let's define an integer variable. "int count = 0;".

And when printing with printf(), you can use %d. Write "printf("%d\n", count++);".

Then, it will be printed increasing by 1.

But the problem is that the floating point variable is not printed well.

Let's define another float variable. "float f = 1.234;". I will print the value of the float variable using %f.

Write "printf("%d %f\n", count++, f+=0.001);".

After building, the integer type variable has been printed increasing by 1, but the float variable has not.

If you want to print floating point variables using printf, you need to do some settings first. Right-click on the project name in the Project Explorer tab and choose Properties.

Expand the C/C++ Build tab and select Settings. Select Tool Settings. And select MCU GCC Linker-Miscellaneous.

Add something to the Other flags. Click the Add.. button, and write "-u _printf_float" like this. I have already been added.

Be sure it must be exactly the same. Click OK and Apply. Then build again. Run after build.

Now, some values ​​are printed, but the value of float variable is a bit strange.

What I printed out was the initial value of 1.234, and I tried to print it in increments of 0.001. But the wrong value is being printed.

You may not face this problem. The updated version of CubeIDE seems to have fixed this problem. If it prints well, you can just skip it.

However, those who have strange outputs like me have to solve it. I looked for the cause of this.

When I searched for "CubeIDE printf float" on Google, other people seemed to be having this problem. I opened the second one.

Ethan HUANG posted the answer. He replied, "The linker script is wrong. I changed it to _estack=0x20020000; instead of _estack=0x2001ffff; and it works fine."

So, when I edited it like this, the problem solved. The linker script file is STM32F405RGTX_FLASH.ld.

If you open this file and scroll it down a bit,

"_estack = 0x2001ffff;" this value is a little wrong.

So change it to "_estack = 0x20020000;". I will build it. Download is complete.

When I ran it, now it is printed well, increasing from 1.234 to 0.001 as we desired.

However, this way of changing the linker script code doesn't seem to be a good way for users.

This is because the critical error may occur if you change other content incorrectly of the linker script.

And also, to understand these, you have to study things like the internal memory map of the chip. This is a bit complicated, so I don't recommend this. If possible, print the integer form.

I will roll back to the original.

And, as I said earlier, this problem seems to be solved from CubeIDE version 1.0.1.

If you write the code like this and add "-u _printf_float" in the project setting, and if float variables are printed without any error, just skip it.

But for those of you who have a strange value output like me, Open the STM32F405RGTX_FLASH.ld file, change the value of _estack to 0x20020000 and build it, and the output will be fine.

This method is not recommended, and it would be better to print it in integer format.

If you need to print a variable in the form of a float number, it would be better to multiply a large number such as 1000 and print it in the form of an integer.

Now, this is the end of the contents I will explain today. In this chapter 1, we tried driving a total of three devices for debugging: LED, buzzer, and UART.

In a way, what we've done is close to preparation for development.

No matter what embedded system you are developing, LEDs and UARTs will often be used for debugging.

From the next time, we'll start Chapter 2. In Chapter 2, we will interface 3 sensors on FC ​​and output the sensor data.

See you next time. Thank you.

```

### Ch2 Sensor Interface
#### video 6
- Rotation angle SPI 쿼터니언 회전 각도 계산

{% include youtubePlayer.html id=page.youtubeID6 %}

```diff
In the last chapter, we were driving the LED and the buzzer for debugging, and transmitting the variable values to the PC through UART communication.

So what we did in Chapter 1 is the preparation stage for embedded system development.

From this time, I will explain the necessary functions for drone development in earnest.

This time is the beginning of the Chapter 2. Sensor Interface.

There are three sensors in MH-FC V2.2. Firstly, I will explain the BNO080 sensor among them.

BNO080 sensor has 3-axis gyros, 3-axis accelerometers and a 3-axis magnetometers. So, it is a 9DOF sensor.

It also has a built-in CORTEX M0 microcontroller, which performs its own calculations inside the sensor and then outputs it as a quaternion.

So, we will receive the value of that quaternion and calculate the roll, pitch, and yaw 3-axis rotation angle.

And after that, we'll check the result of the rotation angle with a 2D graph.

And we are not going to write the driver source code to interface BNO080 sensor ourselves, but we will use open source.

This graph shows 3-axis rotation angle converted from the quaternion of BNO080 to Euler angle.

This graph plotter program is a Serial Plotter that is provided by Arduino Sketch IDE.

This is the Arduino Sketch IDE. If you select Tools - Serial Plotter here, this graph will appear.

When developing a drone, there are some people who check the rotation angle with a 3D model rather than a 2D-line graph.

However, with a 3D model, you can not see the flow of changes in the sensor value. And it is difficult to check the sensor noise level.

Therefore, it is recommended to check with 2D-line graphs during the development stage.

Let me show you a demonstration. When the FC is tilted back and forth, the red graph changes like this.

and tilted left and right, the blue graph changes like this.

The graph shows the rotation angle. So if you keep the sensor tilted, the value stays as it is.

Also, if you keep the sensor tilted to the left like this, the blue graph will also keep that value.

The value is multiplied by 100. Therefore, it seems to be about -60 degrees.

And the green line is the rotation angle of the yaw axis.

So today, we will calculate the rotation angles of Roll, Pitch, and Yaw as we do now and check them with 2D lines.

There is a few things that must be considered when performing high speed control.

In the case of sensors, such as data output rate, resolution, response time, and noise level should be considered.

This time, we'll briefly check these things.

And there are other important things, such as the cycle of PID control, that is, how many times per second to be controlled,

Also, the resolution of the motor drive signal, that is the number of steps to adjust the motor speed are very important issues.

Of course, the faster the control cycle and the higher the step to adjust the motor speed is the better.

These things are dependent on the specifications of the hardware, so we can't just increase them as we want.

And also, if they are increased above a certain level, the performance improvement is not that significant.

However, if the control cycle is too low or the step of adjusting the motor speed is too low, a problem occurs.

In this case, the result is only one. The drone is going to fly unstable.

Then you have to find out what's the problem, but there are so many things that could be a problem in this case.

As I mentioned before, even if the sensor output rate is too slow, it would be unstable.

Or, even though the sensor output rate is fast enough, it is unstable even if the sensor noise is huge.

Also, if there is a sensor output lag, for example, if response time is 0.5 seconds, the flight will become unstable.

Or there is no problem with the sensor. But the PID control cycle is too slow. For example, 100 times per second. The flight performance will be poor,

Or, if the motor speed can only be adjusted in 10 steps, it will also be impossible to fly.

I've given some examples of how drone flight can become unstable. But there would be more.

However, there is only one result that the flight performance is unstable.

Then you have to find out why the flight is unstable, but there are so many things that can cause problems so it is difficult to find.

So, between the stages of development, you should always verify the implemented functions.

Of course, it may be impossible to verify all the processes.

Also it is difficult to have an environment for verification and it is not easy to verify objectively.

There are also some things that need to find out experimentally because there are no standards.

However, you have to verify as much as possible and move on to the next step.

In my experience, if the PID control cycle is more than 400 times per second and the motor resolution is higher than 5,000 steps, the flight seems to be stable.

However, this is my subjective opinion.

Depending on other factors, the flight may be unstable even if these are higher, and conversely, may be stable even if lower.

Sorry. I talked a lot before entering the class. Let's start the class.

This is a simplified block diagram of the drone's attitude control process.

In order for a quadcopter to fly, the rotation speed of four motors must be controlled, and the rotation speed of each motor must be adjusted according to the drone's attitude.

Therefore, the most basic function for flight control of a quadcopter drone is measuring the drone's attitude. In this case, an inertial sensors such as gyro and accelerometer are used.

In this course, we will control the drone using the rotation angle and angular rate.

We will use the quaternion of the BNO080 sensor to calculate the rotation angle, and the ICM-20602 sensor to measure the angular velocity.

PID control is a method to reach the set point while narrowing the difference between the set point and the present value.

In self-leveling mode, PID controller controls the rotation angle, The transmitter stick will be input to the target rotation angle to control.

For example, if you raise the pitch stick of the transmitter, the target angle of the drone becomes 30 degrees.

So, transmitter stick becomes the set point of rotation angle for PID control.

In summary, the stick value from transmitter received from the FS-iA6B goes into the target of PID control,

And the rotation angle and angular rate of the BNO080 and ICM-20602 will be entered to the PID controller as current state.

PID control is repeatedly performed to control the rotation speed of the motor. The result of this PID control will come out as a numerical value.

Since the motor will be driven with the Oneshot125 PWM signal, and finally, the result value of the PID controller will be used to adjust the pulse width of the PWM.

I mentioned that the faster the PID control cycle is the better, but in this course, the PID control cycle is 1000 times per second.

The reason is that we will configure the sensor output rate is to be 400Hz for BNO080 and 1kHz for ICM-20602,

so the PID control cycle is to be 1kHz to match the faster rate among 400Hz and 1kHz.

In this case, it is useless even if the control cycle is faster thank 1kHz. For example, it is meaningless that the sensor output rate is 1 kHz and PID control cycle is 2k times per second.

In order to perform PID control 2000 times per second, the sensor output rate should also be 2 kHz.

And if you want to increase the control cycle, you have to check if the MCU can operate it at that cycle.

This figure will be explained again in the PID control chapter.

Now, I will explain the BNO080 sensor. This picture was taken from the Bosch website below.

This sensor includes a 3-axis gyro, 3-axis accelerometer and 3-axis magnetometer. And unlike other sensors, it has a built-in Cortex M0+ microcontroller.

What the microcontroller does is to convert 3-axis orientation into quaternions using gyro, accelerometer and magnetometer and with its own sensor fusion algorithm.

That firmware is embedded in this sensor.

Using a typical 9-axis sensor, the host controller needs to convert to rotation angle through complex calculations such as the Madgwick algorithm.

However, this sensor calculates such complex algorithm inside the sensor.

So all we have to do is convert the quaternion to Euler angle in STM32. Then we can get the 3-axis rotation angle. Also, the amount of computation of STM32 can be reduced a little.

And as I said last time, if using the Madgwick algorithm, it needs to set gain constants. It's not easy to find them.

But with this BNO080, we don't need to do those things. So, for these reasons, I chose this sensor,

When I tested the sensor, the noise wasn't big and the response time was quite good. That's why I chose it in this course.

This sensor supports three communication methods: I2C, SPI, and UART to interface with the host controller.

I2C and UART are relatively slow communication methods, so they are not suitable for high speed communication.

So, in this class, we're going to interface with SPI.

This table is referenced in the BNO080 datasheet.

Depending on how we configure the sensor output, BNO080 gives raw data of gyro, accelerometer and magnetometer

or the result of the sensor fusion algorithm as a quaternion.

The "rotation vector" is one of the sensor output using the fusion algorithm.

The resolution of the "rotation vector" is about 0.00006104. But I couldn't find the unit of that value.

It doesn't seem to be a degree[º] unit, it's probably a radian.

Anyway, we have to convert this quaternion to 3-axis rotation angle, and the resolution of that angle is high enough.

Normally, when controlling the angle, if the resolution of the angle is higher than 0.01 degrees, the drone can fly stably,

but this sensor has higher resolution than that.

This is about the output latency of the BNO080.

Unlike other sensors, this sensor performs fusion algorithms inside, so the output latency seems to be a bit important, so I put an explanation.

In order BNO080 to output a single data, the internal processor reads the sensor data, performs some processing and fusion algorithm and then transmits the data to the host controller.

The typical latency to perform these processes is provided in figure.

When using rotation vector, 6.6ms latency @ 100Hz data rate and 3.7ms latency @ 200Hz data rate.

However, not described at 400Hz data rate. I guess it will be about 2ms.

That 2ms latency doesn't seem to be a big issue to flight control.

And this is also important. This is a description of the data output rate.

The maximum output rate of rotation vector is 400Hz.

And since this is a sensor fusion method using gyro, accelerometer and magnetometer, it is described that the rotation vector is the most accurate method among the various sensor outputs.

In addition, since the magnetometer is used, the absolute heading of the magnetic north can be obtained. This will be very useful if the drone is automated flying with waypoints.

And lastly, the interface methods with host controllers are described. We are going to use SPI.

To select the SPI, put high signals on both the PS1 and PS2 pins as shown in this table.

SPI is already selected in the circuit of MH-FC V2.2. Therefore, it is impossible to change the interface method.

And it seems that it supports boot mode for the BNO080's firmware update, but we do not use it.

This is the end of the BNO080 overview.

Now let me explain about the circuit diagram. The pins used for SPI communication are MISO, MOSI, CS and SCK.

and BNO080 uses 3 more pins.

I explained that the PS0 pin is used to enter the SPI mode,

It also has a WAKE function, so it is connected to the GPIO pin of STM32. RST pin is used to reset the BNO080 sensor.

The INT pin is used to inform to the host controller(STM32) that the data is ready.

So, the pins used for SPI communication have been connected to PB14, PB15, PB12, PB13 respectively. And the other pins have been connected to PA8, PC9 and PC8 respectively.

What is labeled GPIO-O can be set as an output, and GPIO-I can be set as an input.

We need to set SPI parameters with CubeMX and they are described in the datasheet. This is very important, so be sure to check it out.

The maximum clock frequency of SPI is 3MHz,

I wrote that Clock Polarity is High in yellow but not described in datasheet.

If you look at the timing diagram, you can see that the clock polarity is high.

In this diagram, the data transmission part is where the clock is switched, and if the clock stays high or low, no data transmitted.

The clock polarity is determined depending on whether the clock is high or low where there is no data transmission.

As you can see, in the non-trasmission part, this clock keeps high. Therefore, the clock polarity is high.

And clock phase means that on which edge of the clock the data is transmitted.

Since the clock polarity is high, it keeps high when not communicating. When communication starts, the clock will start switching.

At this time, there are two clock edges, the first edge will be the falling edge and the second edge will be the rising edge.

And looking at the diagram, you can see that data is transferred on the rising edge of the clock. But, it is expressed as 1 or 2 edge not rather than a rising or falling edge.

This is because it is related to the clock polarity.

First of all, now that the clock polarity is high, the first edge will be the falling edge and the second edge will be the rising edge.

And the data is transferred at the rising edge. Since the data is transferred at the second edge(rising edge), it is expressed as 2 edge.

If the clock polarity is high and data transfer occurs on the falling edge, then it will be 1 edge.

That's why the clock phase is 2 edge.

And the order of data transmission, as you can see in the diagram, data bit 7 is transmitted first.

So this means MSB first.

Also, the data length is described in the diagram that it is 8 bits, we have to set the data length to 8 bits.

So, when you see a table or a timing diagram like this, you should be able to understand these parameters. You should be familiar with these tables and diagrams.

No matter what communication method you use, you will see these tables and diagrams.

At that time, you need to be able to figure out how to set the communication parameters.

So, I organized the SPI parameters like this. Now, we're going to configure the SPI parameters with CubeMX and write the source code.

So, let's move on to working with the source code.

Copy the "1-3. Debug UART" folder we worked on last time and rename the folder to "2-1. BNO080".

Then copy the folder name and rename the .ioc file in the folder to be the same as this folder name. "2-1. BNO080. ioc"

And delete the .elf.launch file and also the debug folder. And launch CubeIDE.

The project that is open now is the one we worked on last time.

We're not going to write source code right here. First, close all open projects.

Right-click and select Delete. A window pops up. Click the OK button. At this time, if you check it, all the files will be deleted. So never check it.

And if there are open files in the source code editor window, you must close them all as well.

Then select the Import project and choose Existing Project into Workspace.

Then click the Browse button and select the "2-1. BNO080" folder copied earlier.

After confirming that the project is well selected, click the Finish button.

After loading the project, expand the project tree. "2-1. The BNO080" project has been opened.

Double-click the .ioc file to launch CubeMX.

Now let's set up SPI2 parameters.

First, expand the Connectivity tab,

select SPI2, and select Mode as Full-Duplex Master.

Then, SPI parameters to be set are displayed in the Configuration tab below. And in the pinout view on the right, the pins used in SPI2 are selected in green.

First of all, to set up these GPIO pins, the pins to be used for SPI2 are PB12, PB13, PB14, and PB15.

However, the GPIO pins set as default of SPI2 are not the pins we use, so we need to change them.

Only PB14 is well selected. Left-click on PB15 and select SPI2_MOSI.

Left-click on PB13 and select SPI2_SCK.

For PB12, when SPI2_NSS is selected, the CS pin is controlled by hardware.

But we will control it by software, so we select it with GPIO_Output.

These 4 pins are the pins to be used in actual SPI communication, and 3 more pins are used.

Both PA8 and PC9 should be set to GPIO output, PC8 should be set to GPIO input.

If you are having trouble finding a pin name, you can search it in the search bar at the bottom right. Write PA8 on the search bar and you can see the corresponding pin is blinking.

Set PA8 to GPIO_Output. And the rest of the pins are also placed next to each other.

Set PC9 to GPIO_Output and set PC8 to GPIO_Input. GPIO pin setting is complete.

Now let's configure the SPI parameters.

There are three options to choose for the Hardware NSS Signal.

When controlling the NSS(CS) pin by hardware, you can select one of the two below, but we will control by software, so select Disable.

If it is difficult to understand what I explained, I recommend you to watch the SPI chapter in my STM32 Tutorial Course.

And the rest of the parameters can be set the same as described in the course material.

Data Size: 8bits, Prescaler: 16

Clock Polarity: High, First bit: MSB First, Clock Phase: 2 Edge.

Other items I didn't mention will be used as the default settings. Frame Format: Motorola

There are 8bits and 16bits for the data size. Select 8bits. There are MSB first and LSB first for the first bit. Select MSB First.

Select 16 for Prescaler. Then the bit rate is calculated as 2.625Mbps.

SPI communication is transmitted one bit per a clock. Therefore, the units of bps and Hz are the same for SPI.

And for Clock Polarity, select High, Select 2 Edge for Clock Phase.

Leave other items as the default settings. Now all parameter congifuration for SPI is complete.

Check if there is anything wrong with Project Settings in the Project Manager tab.

Change SPI to LL driver in Advanced Settings.

Now all configuration is complete. Generate the code. Select Project - Generate Code from the top menu.

Source code generation is complete.

The protocol for the BNO080 sensor interfaces is a bit complicated. So, we will use open source instead of writing the interface source code ourselves.

Launch a web browser and enter "https://github.com/ChrisWonyeobPark"

Select BNO080-STM32F4-SPI-LL-Driver. There are 4 files. Using these driver source codes, we will receive data from BNO080 and calculate the rotation angle.

The original BNO080 driver library for Arduino is created by Nathan Seidle from SparkFun.

And I modified it to suit my course. as STM32 SPI using LL driver.

If you go to SparkFun github, BNO080.cpp and BNO080.h files are provided as libraries for Arduino. I ported the BNO080 Arduino library to run with the STM32F4 SPI LL Driver.

So if you open the file and look at the first comment, there is SparkFun GitHub website address and some of the original author's comments.

And below that, I have added my comment that I modified the original library to STM32F4 SPI LL driver.

Now you can download it here, The original files are on SparkFun github and this is provided as open source.

When you modify and use open source, you are obligated to disclose the code as well.

Therefore, I also released the modified code on github.

Download BNO080.c .h and Quaternion.c .h 4 files. I have already downloaded them.

Let's add these files to the project.

To add to the project, drag and drop the BNO080.c and Quaternion.c source files to the Src folder.

Select Copy files. Both files have been added to the Src folder well.

And in the same way, add the BNO080.h and Quaternion.h header files to the Inc folder. Likewise, select Copy files.

Now all necessary files are added. Let's open the main.c file.

Scroll down and go to the main function.

The source code written last time remains, and the SPI2 initialization function has been called.

Press F3 to come to the definition, the parameters set in CubeMX are initialized.

Now open the gpio.c file.

Here, 3 additional GPIO pins PA8, PC9 and PC8 are input/output initialized.

But if you open the BNO080.c file that we just added, the GPIO and SPI initialization codes exist as well.

So, in fact, we didn't have to do the SPI initialization and GPIO initialization that we did in CubeMX a while ago.

I did it to explain how to parameter configurations.

Also, if you initialize it with CubeMX, the pins you use are marked in green, so it's easy to recognize which pins are used.

Then come back to main.c.

Now let's add some code to main.c.

First, when the BNO080 Initialization() function in the BNO080.c file is called, the BNO080_GPIO_SPI_Initialization() function is called, and the GPIO and SPI are initialized in it.

After that, the BNO080 sensor is initialized. So, what we have to do first is to call the BNO080_Initialization() function once.

Copy the name of the function, and call that function once in main.c.

In order to call a function defined in another file, you have to include the header file.

Write #include "bno080.h" at the top of the main.c. Write #include "quaternion.h" as well. Include two header files like this.

Now coming back down, calling the BNO080_Initialization() function performs both SPI2 initialization and BNO080 sensor initialization.

So the next thing to do is to set the sensor output period and which sensor report to output. Come back to the BNO080.c file.

There are a lot of functions defined in this file. These functions are defined in the original library provided by SparkFun.

I have ported these functions so that they can be used with the STM32F4 SPI LL Driver.

Put cursor the #include "BNO080.h" and press F3 to open the header file. The header file contains the definitions of the functions.

If you go down a little, the functions that select which output among the various sensor reports are to be enabled have been defined.

Among them, we are going to use a rotation vector, so we need to call the BNO080_enableRotationVector() function.

This function has one parameter and you just need to pass in what to set the output time interval to. The unit is microseconds in integer form.

Now copy the name of this function and call it under the initialization function in main.c.

And since we are going to set it to 400Hz output rate, it will be 2500us. Pass 2500 as an argument to the function.

This way, now the BNO080 sensor will start outputting rotation vectors 400 times per second.

Then, we should read the data and the read operation should be performed repeatedly in the while loop.

First, comment out the previously written code in the while loop.

Now we need to read the data inside the while loop.

When I explained the course material earlier, I explained that the INT pin is falling from high to low when the data is ready.

Which means BNO080 tells host controller to read out the sensor data. So we just need to check the state of the INT pin, and the function is defined.

Come back to the BNO080.h file. Since int BNO080_dataAvailable() is defined, we can use this function.

Let's take a look inside the function. Press F3. When INT pin is high, data is not ready, and when INT pin goes low, data is ready.

So, if the INT pin is high, it means that there is no data to read. So it returns 0 and terminates this function.

And if the INT pin is low, the code below will be executed. Then, right after that, a function called BNO080_receivePacket() is called within the if statement, and checking the return value of the function is 1 or not.

Looking at the definition of the BNO080_receivePacket() function, it reads data from BNO080 through SPI communication in this function.

If there is no data to read, it returns 0 again and terminates the function, otherwise it performs the data reading.

The SPI2_SendByte() function sends data and receives data at the same time.

And when the data is received, it returns 1 and the function exits.

Then again, if the return value of this BNO080_receivePacket() function is 1, it means that the data has been received.

Then it comes into the if statement, using these two functions, the received data is parsed into a predefined variable.

In other words, in this BNO080_dataAvailable(), it checks whether the data is ready,

and if there is data to be read, the data is read and parsed into a variable.

But I think it's better to separate each function. Since the name of the function is BNO080_dataAvailable(),

This function is better to check only if there is data to be read, and I think it is better to define each separate function to receive and parse the data.

However, since the library provided by SparkFun is already defined in this structure, we will use it as it is in this course.

Now back to main.c. Write if() statement in the while loop.

After calling the BNO080_dataAvailable() function in parentheses of the if statement, check whether the return value is 1.

When the return value is 1, which means there is data to be read and the data has been received.

So, we should do something with the data inside if statement.

The received data is raw data that has not been converted, so it is necessary to convert it into quaternions.

So, we use 4 functions, BNO080_getQuatI, J, K and Real() functions that convert raw data into quaternions.

Copy the name of the function and call them in the if statement.

The functions return quaternion's I, J, K and Real, respectively, and we need to define variables to store the results.

We will declare them as local variables at the beginning of the main function. Declare float q[4]; an array.

Store the return value of BNO080_getQuatI() in q[0], and store the results of all other functions in q[1], q[2], and q[3] respectively.

And there is a function called BNO080_getQuatRadianAccuray(). I'm not sure if this should be called,

but in the example provided by SparkFun, it seems to be called. So, I will call it the same in this course.

This function seems to be a function that returns the accuracy of the Quaternion Radian. We also need a variable to store the result.

Declare float quatRadianAccuracy;

And store the return value of that function. Now, reading the data from the sensor and converting raw data into the quaternions is complete.

Now the data will be received at 400Hz.

In this way, the four values ​​of each quaternion are stored in the float q[4] array, so we need to pass those values ​​to the void Quaternion_Update(float* q) defined in Quaternion.c.

Copy the name of this function and com back to main.c. And call that function right below.

In this case, we're going to pass an array to the function, so we should pass the address of the first element of the array.

Inside the Quaternion_Update(), a calculation is performed to convert these quaternions into Euler angles,

and when this calculation is completed, the rotation amount is stored in angle units in the BNO080_Pitch, Roll, and Yaw variables, respectively.

So that's all we're going to do. Let's check that the rotation angles are well stored in these three variables.

These variables are declared as global variables in quaternion.c file, And they are defined as extern variables in quaternion.h.

Because we have included the quaternion.h in main.c, so we can access them. Then let's print the values using the printf().

We will print 3 values, and the each rotation angle is stored in a float type variable.

In last time, I explained that printing a float type value with the printf() function is complicated,

and it is better to print it in integer form as much as possible. So, we will print it in integer form using format specifier %d.

Write printf("%d,%d,%d\n", And print out the Roll, Pitch, and Yaw angles respectively.

Write up to printf("%d,%d,%d\n", BNO080_, and if you don't remember the name of the variable, press ctrl+space.

Then you will see lists starting with BNO080_. Write printf("%d,%d,%d\n", BNO080_Roll, BNO080_Pitch, BNO080_Yaw);

However, since these variables are float type and the format specifier is %d integer type, so strange values ​​are printed.

So the variable must be converted to an integer type explicitly by type casting to int.

Write printf("%d,%d,%d\n", (int)(BNO080_Roll), (int)(BNO080_Pitch), (int)(BNO080_Yaw));

However, if you write this way, the fractional part is cut off and only the integer value is visible.

Multiply by 100 to print the second decimal place. Complete printf("%d,%d,%d\n", (int)(BNO080_Roll*100), (int)(BNO080_Pitch*100), (int)(BNO080_Yaw*100));

Now, we have written all the source code that I will explain today. Complete all source code to be the same as mine.

Build and download this source code. Press F11.

Select STM32 MCU C/C++ Application and click OK.

When such a window appears, check the contents and click OK.

Download is complete. Exit debug mode. Now the rotation angle will be printed through the printf() function.

Last time, we wrote code so that when printf() is called, it is printed via UART6.

Run a terminal program. This is the terminal program I use.

Now I'm using the usb to uart module to communicate with the PC, it is connected to debug UART port, UART6.

When open the serial port, the data starts to be printed. Since we used printf function, it is printed in ASCII.

However, outputting as texts, you can see the number changes when the sensor is tilted, but you can't check how much it has changed and how much the noise level is.

So, it's better to check with something like a 2D-line graph, I will use the serial plotter of Arduino Sketch IDE that I mentioned earlier.

Download and run Arduino Sketch IDE, and select comport from the Tool-Port menu on the top menu. I use comport4.

After that, select Serial Plotter. Check the baudrate on the bottom right.

And after resetting the FC board, I'll tilt the FC.

When tilted back and forth, the red graph is responding, and when tilted left and right, the blue graph changes.

Because I am holding and moving with my hand, the other axes are changing as well.

And putting it on the floor and rotating the yaw axis, the green graph changes. Turning clockwise increases the value, and counterclockwise decreases the value.

We checked whether the calculation of the 3-axis rotation angle was successful, but you may be wondering if the output rate is 400Hz.

And it is also a very important issue in PID control, so I think we should check it as well.

To check that, the method I use is to toggle the output of the GPIO pin whenever data is received and check the toggle period.

First of all, comment out the printf(). printf() functions will not be used later.

Because the printf() function takes a long time to execute, so if it is executed at runtime, it badly affects the system operation cycle.

And in the if statement, I'll simply toggle LED1. You don't need to write this code.

LED1 is connected to PC0, so I'll toggle PC0.

LL_GPIO_TogglePin(GPIOC, LL_GPIO_PIN_0); When this code is excuted, PC0 is toggled.

Now, in the while statement, only this if statement will be repeated, and PC0 will be toggled whenever data is received.

So we just need to check how many times this LED toggles per second. I will check this through an oscilloscope.

Then I will download this code first.

The download is complete and I will run it. I have an oscilloscope ready. If you don't have, just watch my course.

And look at the source code for a second,

the code in this if statement will be executed repeatedly, which will be executed 400 times per second.

And every time it is executed, PC0 will be high once and then low, and it will be repeated over and over again.

Therefore, if this if statement operates at 400Hz, the PC0 will toggle at 200Hz, which is half that.

Let's check it out.

Checking the electrical signal of LED1 connected to PC0,

about 197, 198 are displayed at the bottom of the oscilloscope.

And if you look at the waveform, you can see that it is not fixed at 200Hz, but oscillates a little, so the output rate does not seem to be exactly 400Hz.

Anyway, it was confirmed that the average output rate is about 400Hz.

I usually measure the output period of the sensor or the repeat period of the loop using this way.

In addition to this method, measurements can also be made using a timer.

For example, using the STM32's internal timer, storing the timer counter each time this loop is repeated,

and then calculating the increment of the counter in the next loop, you will be able to measure the loop time.

However, it can be more complicated because you have to run the timer and write the source code. So I measure using an oscilloscope like this.

If you don't have an oscilloscope, you can use a timer to measure it.

And I passed 2500 as an argument of the BNO080_enableRotationVector() function, but since this is in microsecond, it doesn't matter if the value is higher than 2500.

But if you pass a number lower than 2500, for example 1000, this is 1000us, that is, 1000Hz, which is impossible.

When I explained the course material earlier, the maximum output rate of the rotation vector is 400Hz.

Therefore, passing a value lower than 2500 may cause the BNO080 sensor to behave strangely.

If this is 5000, the output rate will be 200Hz.

So, to summarize what we did this time, it is the most important and fundamental thing in drone flight control. That is to calculate the rotation angle and check the sensor output period.

The things I've explained today are really important, so these steps must be taken. In particular, be sure to check the stability of sensor data, noise level, and output cycle in this way and proceed to the next step.

It's best to have a step-by-step verification like this.

The data sheet provides a description of the direction of orientation. But as of yet, it is not that important.

Each rotation angle is already stored in the BNO080_Roll, Pitch, and Yaw variables, so you can use it as it is.

There is one very important thing.

when drone assembly is done, when the FC is placed like this, vertical direction will be the Roll and horizontal direction will be the Pitch direction.

The range of the roll angle is +- 90 degrees and the pitch is +- 180 degrees.

if the roll is rotated more than +-90 degrees, the pitch and yaw angle is changed as well very strangely.

Therefore, you should never control the roll angle beyond +-90. Be very careful, as dangerous situations can occur.

When we do flight control later, it will be in self-leveling mode, and we will set the target angle to about +-30 degrees. So we are not going to control the drone to tilt more than 90 degrees.

If you are curious, use the graph to check how the angle of the other axis changes when the roll angle exceeds +-90 degrees.

In addition, the BNO080 sensor provides a calibration mode. In particular, the rotation vector output is used with a magnetometer,

so the yaw angle may be affected by the surrounding magnetic field. Therefore, the yaw angle can be different when tested indoors and outdoors.

In that case, it is better to calibrate the sensor at the place of flight. How to calibrate the BNO080 sensor will be explained later in Chapter 7.

Currently, I have uploaded the Sensor Calibration Source Code to my github. I modified it slightly to suit my course by referring to the Sensor Calibration Example in the SparkFun library.

Basically, however, you can achieve stable flight without sensor calibration. You don't need to have sensor calibration for now.

In summary, there are a lot of things to prepare for flight control.

Today, the first of them, we used the BNO080 9-axis sensor to calculate and check the 3-axis rotation angle. Also checked the sensor output rate.

Next time, we will receive the 3-axis gyro value of the ICM-20602 via SPI communication, check the angular rate with a graph, and check the sensor output rate.

See you next time. Thank you.

```



#### video 7
- ICM 20602 gyro SPI

{% include youtubePlayer.html id=page.youtubeID7 %}

```diff
Now, I will explain the ICM-20602 6-axis sensor that will be covered this time.

ICM-20602 is a 6-axis sensor which has 3-axis gyro 3-axis accelerometer. It is a sensor made by Invensense, famous for its MPU series.

This graph shows the angular velocity of a 3-axis gyro. The unit is degree/sec, and it is multiplied by 100.

Since it is an angular velocity, 0 should be output when it is stopped like this, but as you can see, there is a slight offset.

Since this offset can affect flight control, we will write code to remove it in the future.

When putting the sensor in this direction, If rotating it back and forth, the blue graph changes like this,

and rotating it left and right, the blue graph changes like this, When it is stopped, the angular velocity is outputted as 0.

And when putting it on the floor and rotate around the Yaw axis, the green graph changes.

In this course, we will not use the accelerometer.

And the software that draws this graph is a program called serial plotter of Arduino Sketch IDE, which I explained in the previous time.

If you have other 2D line graphing software, you can use it.

ST also provides programs such as Serial Wire Viewer and you can use it.

And now I set my FC's USART6 baudrate to 921,600bps, but there is no 921,600 in Arduino settings.

Therefore, it must be set to 1,000,000.

This time, we will receive the ICM-20602's 3-axis gyro data, convert it to an angular velocity, and check it with a 2D-line graph.

The BNO080 also has gyro and accelerometer, so I think some people might ask why we use one more gyro.

In fact, I think it is possible to fly with only the BNO080, and even if we use ICM-20602 alone, it can also calculate the rotation angle and fly.

But why do we use two together, In the case of BNO080, since the sensor itself calculates the rotation angle,

I thought that if you learned how to use this sensor, there would be many applications, so I wanted you to try it.

And in the case of ICM-20602, since it is a sensor that is used in the recent commercial FC,

I wanted to cover these latest sensors in this course.

And compared to other similar sensors, this ICM-20602 seems to have better characteristics.

And I think the trend of FC will also change toward using the latest sensors.

So, in this course, we are going to use these latest sensors.

This picture, which was explained last time, is a simplified picture of the process for flight control.

Since last time, we have been doing sensor interface, the most basic step of flight control.

Last time, I explained about the BNO080 9-axis sensor, and this time, I will explain the ICM-20602 6-axis sensor.

ICM-20602 is a 6-DOF sensor with 3-axis accelerometer and 3-axis gyro. The maximum output data rate of the gyro is 32 kHz and the accelerometer is 4 kHz.

As I said last time, usually the higher data rate is better, but higher than a certain level, in fact, it doesn't affect the flight performance significantly.

And MCU needs to receive and process thd data as fast as the sensor data rate.

And ironically, the higher data rate might cause the worse the noise.

So, increasing the output data rate requires better noise reduction.

Anyway, in this course, the flight control cycle will be set to 1kHz,

so the data rate will be set to 1kHz same as the control cycle even the max data rate is 32kHz.

Last time, I mentioned that it is meaningless even if the output data rate is faster than the PID control cycle.

Now, I will explain more about the ICM-20602 sensor.

This sensor has a 3-axis gyro and 3-axis accelerometer, and the size of the chip is very small, 3mm x 4mm x 0.75mm.

Since it is an LGA package, it very hard to solder with an iron.

And the noise level described in the data sheet was a bit lower compared to other MPU series sensors.

1kB FIFO is built-in, but we won't use this.

Both the gyro and accelerometer have 16bit resolution. Therefore, the sensor raw data has a range from -32768 to +32767, and is output in the form of an integer.

It has an internal digital low pass filter(DLPF), so we can use it through the filter configurations.

I2C and SPI interfaces are supported and we will use SPI communication.

This table shows the gyro specifications of ICM-20602 and MPU6000.

The left is the the data sheet for ICM-20602 and the right is the MPU-6000/6050.

The ZERO-RATE OUTPUT (ZRO) is the noise that is output when the sensor is stopped.

ICM-20602 has ±1DPS (degree per sec) ZRO when the sensor is stopped and MPU-6000 has ±20DPS ZRO. DPS is a unit that indicates how much degrees rotate per second.

In other words, the ZRO of the ICM-20602 is 20 times smaller than that of the MPU-6000. I don't think the MPU-6000 is so noisy, but the datasheet describes so.

In addition, the total RMS noise is also lower in the ICM-20602 compared to the MPU-6000.

And the output data rate can be set to a maximum of 8 kHz when in low noise mode.

If not using the low noise mode, it can be selected up to 32 kHz. Regardless of that, the MPU-6000 can output at up to 8 kHz.

After comparing the characteristics of the gyro briefly, ICM-20602 is a little better than the MPU-6000.

And there is also a commonly used 9-axis sensor called MPU-9250, and I compared the data sheet again.

MPU-9250 has a higher noise level than the MPU-6000. You can compare the characteristics through their data sheets.

However, 5 years ago(in 2016), I used the MPU-9250 to control drone flight 500 times per second, and the flight was stable.

At that time, I even did a GPS waypoint automatic flight, and it was successful. Anyway, these Invensense sensors seem to be easy to use and have good performance.

And this time, it is a table comparing the accelerometer of ICM-20602 and MPU-6000.

Likewise, the ICM-20602 has a lower noise level than the MPU-6000.

Therefore, ICM-20602 seems to be a bit better for the accelerometer, Also, the MPU-9250 is worse than the MPU-6000.

However, the MPU-9250 is not a bad sensor, and the noise level is relatively high.

To understand these parameters accurately, you need to read the datasheet carefully, but I won't do that in this class.

Of course, the sensor who has a lower noise level is a better sensor.

And if you go to Invensense's website, there are sensors of the recently released ICM series and sensors of the MPU series that were released before.

However, the MPU series are Not Recommended for New Designs, and Recommended Products are all ICM sensors.

Probably, in my guess, Invensense will discontinue the MPU series. So it seems that old sensors are Not Recommended.

Previously, the MPU series was mostly used for FC, but recently, it has been replaced to the ICM series.

When a new chip is released like this, the existing chip may be discontinued, and then a new system have to be designed for the new chips.

Therefore, at the stage of study, it is better to try new chips rather than using only familiar chips that were used before.

And if you're an engineer, of course you should. Otherwise, it will be difficult to keep up with the change.

These two tables show the sensitivity of the ICM-20602's gyro and accelerometer.

First, all the gyro and accelerometer are output in 16bit. So, the range of the output sensor value is from -32768 to +32767.

In the case of a gyro, the sensitivity can be selected from ±250, ±500, ±1000, and ±2000dps. The unit is dps (degree per sec).

If we set it to ±250dps, it means that when the sensor value changes by 1, the angular velocity changes by 0.00763dps.

or if we set it to ±2000dps, when the sensor value changes by 1, the angular velocity changes by 0.06098dps.

In the case of a accelerometer , the sensitivity can be selected from ±2, ±4, ±8, and ±16g.

If we set it to ±2g, when the sensor value changes by 1, the acceleration changes by 0.00006104g.

Or if we set it to ±16g, when the sensor value changes by 1, the acceleration changes by 0.00048830g. (Course material error)

No matter how it is set, the range of the sensor value is output from -32768 to +32767,

According to the sensitivity, the angular velocity or acceleration is different when the sensor value changes by one.

So the conclusion is, by lowering Full-Scale Range, even very small changes can be measured, but the maximum measurement range will be smaller.

On the contrary, by increasing Full-Scale Range, the sensor feels a little dull because it cannot measure small changes, but the maximum range that can be measured increases.

Full-Scale Range can be set appropriately according to the application. In this course, we are going to set the gyro to ±2000dps, i.e. the scale range to the maximum, and not going to use an accelerometer.

Because the accelerometer is usually used to calculate the rotation angle of the roll and pitch,

since we had already calculated all the three axis rotation angles with the BNO080 sensor, there is no need to use the accelerometer of the ICM-20602.

If you don't use the BNO080 and only want to use with this ICM-20602, you must also enable the accelerometer of ICM-20602.

And the reason for maximizing the scale range of the gyro is, what if we set to lower scale range, very small vibrations can be measured,

so even very small vibrations might make flight control more unstable. To avoid this, I think it's better not to measure the small vibrations at all.

I'm not saying that the sensor parameters I set are the best answers. There was a lot of my subjective opinion.

And also, among the things described in the datasheet,

The tables show the gyro and accelerometer output data rate and the internal DLPF.

The table above is the description of gyro and below is accelerometer. If set as the blue part, the sensor will operate as indicated in the green part.

In the case of the gyro, we will set it up as indicated by the red square, At that time, the cutoff frequency of the internal DLPF is 20Hz,

and the noise frequency bandwidth is 30.5Hz. And the sensor data rate is 1kHz.

ICM-20602 also has a built-in temperature sensor. The cutoff frequency of the temperature sensor's DLPF is 20 Hz.

There are 6 options to set the output data rate to 1 kHz.

At that time, all DLPF cutoff frequencies are different, but in my course, we set it to 20Hz.

If lower this to 5Hz, when the sensor changes rapidly, it can be considered noise and filtered out.

In other words, if this cutoff frequency is lowered too much, if a situation occurs in which the drone is rotated rapidly for some reason, The sensor may not be able to measure it.

Therefore, if the cutoff frequency is lowered too much, it becomes difficult to cope with sudden changes. Conversely, if the cutoff frequency is increased too high, the actual noise may not be removed well.

So, you have to select an appropriate value for this cutoff frequency as well.

In this class, we are going to use 20Hz, and when I did that, the flight performance wasn't bad.

And a while ago, when in low noise mode, I explained that the maximum data rate of the gyro is 8 kHz.

If you look at this table, it can be selected to 32kHz maximum data rate.

At that time, the DLPF cutoff frequency is 3 kHz or 8 kHz. So this is almost no filtering.

If the data rate is set to 32 kHz, you can see the very noisy sensor output.

Even if it is very noisy, it can be used up to 32 kHz if your system requires a high data rate.

But I'm not sure if there is such a system. 8 kHz data rate would be sufficient I think.

Anyway, we are going to set the DLPF cutoff frequency to 20Hz in the 1kHz data rate.

Since the accelerometer is not used, I will skip this explanation.

And now, at the end of the datasheet description, it is how to interface ICM-20602 sensor.

ICM-20602 provides two interface methods, I2C and SPI. We are going to use SPI.

To interface with SPI, first of all, there is a CS pin among the pins used for SPI communication.

If do communication while this CS pin keeps high, it interfaces in I2C mode. On the contrary, if communicate while this CS pin keeps low, it interfaces in SPI mode.

Therefore, no additional settings are required.

Now, let me explain the circuit diagram. ICM-20602 is connected to SPI1.

And BNO080 has been connected to SPI2. Basically, SPI is a way to communicate with multiple devices in a single channel,

so both BNO080 and ICM-20602 can be interfaced with sinle SPI channel together. However, the reason why I connected to a separate channel is that the SPI parameters of BNO080 and ICM-20602 are different.

The maximum SPI clock for the BNO080 was 3 MHz and the ICM-20602 was 10 MHz.

In order to communicate with both sensors in one SPI channel with their maximum clock speed, it needs to change the clock speed of the SPI from time to time.

If STM32 has insufficient GPIO pins, both BNO080 and ICM-20602 will need to communicate with one SPI channel,

but according to the MH-FC V2.2 schematic, the pins of STM32 are sufficient.

That's why I connected it to a separate SPI channel. The ICM-20602 uses 5 pins to interface with SPI.

Four pins are used for SPI communication, and like BNO080, INT pin is a pin that informs to the host controller that sensor data is ready.

Therefore, this INT pin is connected to PC5 of STM32, we can set it as GPIO input. And the CS pin is the Chip Select pin, and we will control it by software, so we can set it as the GPIO output.

This is a description of the SPI characterization of the ICM-20602.

This is a familiar picture that we could see when explaining BNO080 in last time. First, the maximum SPI clock rate is 10MHz.

When not communicating, the polarity of the clock is kept high. And the MSB is transmitted first,

it is described explicitly that the data transfer takes place on the "rising edge" of the clock.

Since the clock polarity is high, the rising edge will be the second edge. Therefore, the clock phase can be set to 2 edges.

And this purple square is a description that how to distinguish read instruction or write instruction.

It is classified according to whether the most significant bit of the first sending byte is 1 or 0. If it is 1, it is read instruction, and 0, it is write instruction.

And the rest 7 bits of the first byte is the address of the register.

When reading data, send 1 msb with 7-bit register address and then send dummy data to read. When writing data, send 0 msb with 7-bit register address and then send data to write.

Therefore, we can set the SPI parameters as described above with CubeMX. Mode: Full-Duplex Master, To control the CS pin with software, NSS Signal: Software control

Data Size: 8Bits, Clock Polarity(CPOL): High Clock Phase(CPHA): 2 Edge, First bit: MSB First

And I explained that the maximum SPI clock is 10MHz, but for stable communication, it is better to set it lower than the maximum clock.

We are going to set the Prescaler to 8. So the SPI clock is 10.5MHz, which is slightly higher than 10MHz. However, this seems to be the acceptable clock speed for ICM-20602.

In the case of BNO080, the maximum clock was 3MHz, but if the actual clock is set higher than this, communication is impossible at all.

However, in the case of ICM-20602, communication works well even if the clock speed is set higher than 10MHz. I tested the communication by raising the clock speed to 42MHz, and the communication worked well.

However, if it is too high, communication may become unstable, so in this course, we will set the Prescaler to 8 as the communication speed to 10.5 MHz.

Now that I'm done explaining.

Since last time, I have been explaining the specifications of the chips described in the datasheet.

The reason I explain this in this way is that people who develop drones or other embedded applications usually tend to develop using an open source.

Sometimes I do too.

Usually, when developers use a new sensor, they usually look for open source first. This is because it can reduce the development time.

However, if you do not look for the specifications or characteristics of the chip yourself, but only use open source, it does not improve the your abilities.

It is difficult to become an engineer more than a developer.

To become a good engineer, you need to be able to analyze data sheets one by one like this. It is important to know characteristics such as communication parameters or sensor specification and so on.

And usually datasheets are in English, so it's good to be familiar with documents in English.

Otherwise, you will have to follow what others have made. If the chip doesn't have open source, you won't even be able to run it.

I wanted you to experience these things in my course. That's why I'm briefly explaining the data sheet.

This is the difference between other courses and mine. Instead, it takes a long time to explain.

Anyway, even if it takes long time, I will explain the sensor interface and GPS reception chapter with the data sheet.

Now, we're going to configure the SPI parameters with CubeMX and write the source code. So, let's move on to working with the source code.

Duplicate the "2-1. BNO080" folder you worked on last time.

Rename this folder to "2-2. ICM20602".

Then copy the folder name, enter the folder and rename the .ioc file to the same as the folder name.

Delete the .elf file and the Debug folder. Then launch CubeIDE.

First, close all open projects. Select Delete. When a new window appears, do not check and press the OK button.

Click Import projects. Select Existing Projects into Workspace and click Next.

Click the Browse... button and select the folder just copied.

Then click the Finish button. When the import is complete, launch CubeMX by double-clicking on the .ioc file.

It's done. First, let's set up SPI1. Expand Connectivity and select SPI1.

Select the mode as Full duplex master,

In the Configuration tab below, select 8 Bits for data size and MSB First. Select Prescaler as 8. Baudrate is calculated at 10.5 Mbps.

Select High for Clock Polarity (CPOL) and 2 Edge for Clock Phase (CPHA).

SPI1 Parameter setup is complete. Next, we have to set CS pin and INT pin GPIO settings.

CS pin is connected to PC4 and can be set as output, and INT pin is connected to PC5 and you can set it as an input.

Left click on PC4 and select GPIO_Output, Also, left-click on PC5 and select GPIO_Input.

And these three pins used in SPI communication can be used as the initial setting.

They are PA5, PA6 and PA7. PA5, PA6, PA7 are well selected as default in Pinout view.

Now come to the Project Manager tab and select Advanced Settings.

Change HAL to LL driver of SPI1. Now that all the settings are done, let's generate the code.

Code generation is also complete. We are not going to write the code to interface and drive the ICM-20602.

Just like what we did in the previous time, we will use library files that I uploaded to my Github.

Launch a web browser and go to "https://github.com/ChrisWonyeobPark" Select the ICM20602-STM32F4-SPI-LL-Driver here.

There are two files. Click the Clone or download button and select Download ZIP to download.

I have downloaded it in advance. Of the two files, add the .c file to the src folder, and the .h file to the inc folder.

Now that all the configuration is done, it's time to write the source code. Open the main.c file and scroll down.

The SPI1 initialization function has been called, let's press F3 to go to the definition.

The code has been generated just as I set in the CubeMX.

And open the gpio.c file, PC5 used as INT pin is set as an input.

But when open the ICM20602.c file, you can see the SPI initialization code exists, just like in BNO080.

So, when ICM20602_GPIO_SPI_Initialization() is called, the parameters set in the CubeMX are initialized.

The reason why I set it up with CubeMX was to indicate the used pins in the Pinout view.

What we are going to do now is to call a function to initialize the ICM-20602 in main.c.

Scrolling down a little, you can see the function int ICM20602_Initialization(void) is defined.

Inside this function, what is done first is to initialize the SPI and GPIO by calling the ICM20602_GPIO_SPI_Initialization() function. This is the initialization for SPI communication.

Subsequently, there is some code to check whether the sensor connection is successful. In fact, the sensor connection check code is also contained in the BNO080 initialization function.

If you look inside the initialization function in BNO080.c,

there is a part to check if BNO80 connection is well. I didn't mention it last time, but this is an important thing.

It is very important to check that the peripheral devices are connected and working well. We will write code to check the sensor connection status in the future.

This time, we will simply do initialization with no connection check.

Returning to the ICM20602.c again, if the ICM-20602 is well connected, then initialize the sensor by writing data to the registers inside the sensor.

These codes, as explained in the course material, are the codes that set the sensor data rate, the DLPF cutoff frequency, and the sensor sensitivity.

Firstly, reset the sensor once, and then the temperature sensor is enabled.

If the temperature sensor is not enabled, the output of the gyro will be abnormal. Below that, the output of the gyro and accelerometer is set.

Since the accelerometer is not used, it is disabled, and the gyro is enabled.

And there is a part to set the sample rate below that, which is related to the sensor data rate, and to check the details, we have to browse the data sheet, so I will skip it.

Below that, the DLPF cutoff frequency of the gyro is set to 20Hz, data rate is set to 1kHz, and the sensitivity is set to ±2000dps.

The two below are the accelerometer setting code, but it is not used, so it's meaningless code.

Below that, there is code for a setting for the INT pin. When the data is ready, it is indicated by the INT pin after this setting is done.

If this setting is not done, it will not be output to the INT pin. We will be using the INT pin to check if the sensor data is ready, so this setup must be done.

This is the ICM-20602 internal initialization code.

Now what we're going to do is to call ICM20602_Initialization() once in the main function. Copy the name of the function, come back to main.c and called it under the BNO080 initialization function.

To call the function, we need to include the header file. Come to the top of the main.c

Since I wrote #include "bno080.h" and #include "quaternion.h" outside of the /* USER CODE BEGIN */ and /* USER CODE END */ blocks last time, that code has been removed when generating code with CubeMX.

All user code must be written in the /* USER CODE BEGIN */ and /* USER CODE END */ blocks.

Write #include "bno080.h" and #include "quaternion.h" again between the comment block.

And write #include "icm20602.h" to do today.

Initialization of the ICM-20602 is complete. Then, let's write the code to read the sensor data.

In the while loop, the code that is commented out is for UART and LED toggle, so we will not use it anymore. Delete it.

And the code that was written last time, that receives BNO080 data and calculates the rotation angle, will be used later, so leave it as a comment.

And now, like the BNO080, we need to check if the sensor data is ready first.

Open the ICM20602.c file again. Scroll down to the bottom, there is a function called "int ICM20602_DataReady(void)". Copy the name of this function.

Then call it in the parentheses of the if statement in the while loop. If the return value of this function is 1, the data is ready, and then we can read the data in the if statement.

In the case of BNO080, BNO080_dataAvailable() includes not only data check but also read instruction. But in the case of ICM-20602, the data read function is defined separately.

And we will only use gyro, so we can use "void ICM20602_Get3AxisGyroRawData(shot* gyro)". Copy the name of the function.

Call that function inside the if statement. The parameter of this function is a short* pointer.

We just need to pass the variable address to store all 3-axis gyro data.

When you scroll to the top, the Struct_ICM20602 structure type variable is declared. Press F3 to move to the structure definition.

However, it seems that can't find the structure definition because I have not built the project yet. Open the ICM20602.h file.

If you scroll down, a structure named Struct_ICM20602 is defined. This structure has short type members to store the raw data of the sensor,

and also has float type members to store values that is converted in units of dps and units of g.

First, we will store the raw data of the sensor in a short type member variables. Just pass the address of "ICM20602.gyro_x_raw" member variable as a parameter of the function.

Since it is a member variable of a structure, the address of the variable is connected in the order of variable declaration.

Write ICM20602_Get3AxisGyroRawData(&ICM20602.gyro_x_raw); Then raw data of each axis will be stored into separate member variable.

This is similar to passing the address of an array. This way, all raw data of gyro will be stored in each variable,

Let's print it out using the printf() function. Write printf("%d,%d,%d\n", ICM20602.gyro_x_raw, ICM20602.gyro_y_raw, ICM20602.gyro_z_raw);

They are raw data of the x, y, and z axes.

First, let's build this code. Press F11.

An unknown error occurred when I built it, but it seems that because the main.c file was not saved. First, save the main.c file. Press Ctrl+s.

Build again. Press F11 again. When this window appears, click OK.

Exit the debug mode. First, let's check using a terminal program.

Run the terminal program. When the COM port is opened, sensor data starts to be printed.

It's being printed out in text, and you can see that the value changes, but you can't see how it changes. So it is difficult to check if the sensor value is output well.

So let's check it with 2D-line graph using the Arduino serial plotter program just like last time. Checking through the graph, it became easier to see how the sensor value is changing.

The blue graph changes when the sensor is tilted back and forth. and the red graph changes when tilted left and right.

Also the green graph changes when rotated on the yaw axis.

This graph shows the raw data of each axis of gyro. In other words, the data received from the sensor is output as it is without any conversion,

and the range of the value is from -32768 to +32767. (16bits resolution)

In general, when using a gyro or an accelerometer, usually it converts sensor data into dps units for gyro or gravity acceleration in g units for accelerometer.

Therefore, we will convert it into dps and g units as well. And we will store the conversion result in float type member variables.

Again in the if statement, we need to store a value that is converted to dps unit to the ICM20602.gyro_x variable.

To convert to dps, first, multiply the raw data by the sensitivity. The sensitivity we set was 2000. So multiply it by 2000.

And it divides the range of sensor value, that is, a bit resolution. Since it is 16bit, it is signed, so it is divided by 32768.

However, if writing the code like this, all operands are in integer type, so the result of the operation is also in integer type. So we have to explicitly cast to a real number. Otherwise, numbers after the decimal point are truncated.

Write ICM20602.gyro_x = ICM20602.gyro_x_raw * 2000.f / 32768.f; Now after this, the unit of the converted result is dps.

Do same for y and z-axis the same way.

Then, I will print it out with printf() again to check if the conversion was successful.

Just write the code same as the course.

However, these variables are float type, so we have to explicitly cast them to integer type as I explained last time.

And if we do this, only the integer part is printed and the part after the decimal point is cut off, so multiply by 100 to print to the second decimal place. Write printf("%d,%d,%d\n", (int)(ICM20602.gyro_x*100), (int)(ICM20602.gyro_y*100), (int)(ICM20602.gyro_z*100));

And rebuild.

The unit of the graph currently being printed is dps and is multiplied by 100

Now I'll rotate back and forth.

When rotating at this speed, the angular rate is slightly less than 800 dps.

The actual angular rate can be calculated by dividing the output value by 100.

In fact, it doesn't mean much to convert it to dps. It's like simply multiplying the scale factor.

However, if you accumulate this angular rate to calculate the rotation angle, you must convert it to dps as now.

But we're not calculating the rotation angle, so it's not really important to convert it to dps.

Today, we received the value of the 3-axis gyro of the ICM-20602 and checked it with a graph.

Only the gyro is now enabled, but if you want to use the accelerometer, you should enable the accelerometer in the ICM-20602 initialization function.

And you can set the parameters like sensor data rate and sensitivity as you want.

In that case, I recommend you to browse the data sheet yourself. Then, finally, let's check whether the data rate is really 1kHz.

As in the last time, I will toggle the GPIO pin every time data is received and check the waveform with an oscilloscope.

Add the GPIO toggle code inside the if statement. Last time I toggled PC0 but this time I will toggle PC1. It is the second LED.

Write LL_GPIO_TogglePin(GPIOC, LL_GPIO_PIN_1);

And commented out the printf(). I will build and download it.

Build is complete.

The oscilloscope is ready.

Before running the program, guess what will happen, if ICM20602 send data at 1kHz, the waveform of PC1 will be 500Hz that is half of 1kHz.

Let's check it with the oscilloscope. I checked the waveform of PC1(LED2) now, and 499.287Hz is displayed at the bottom right.

Unlike the BNO080, the we can check the frequcency of the waveform is almost fixed.

The data rate of the BNO080 was not exactly 400 Hz, but slightly fluctuated, and the ICM-20602 was fixed at exactly 1 kHz.

So we also checked the data rate of the sensor. Now coming back to the course materials,

The direction of rotation of the ICM-20602 sensor is indicated. When the FC board is placed in this direction, roll increases when tilted forward,

pitch increases when tilted left, and yaw increases when rotated counterclockwise.

In the case of the BNO080, yaw increased when rotated clockwise, but the ICM-20602 has the opposite yaw direction.

But right now, the direction is not very important. These are things that can be modified by software.

At this stage, it doesn't really matter if the direction of rotation is positive or negative.

Later, we only need to change the sign according to the direction before PID control. This will be explained in detail in the PID control chapter.

And if you use a library other than the one used in my course, or if you modify the library code, the rotation direction may different than my course.

Anyway, rotation direction doesn't matter right now. And this is the time line I explained at the beginning of the video.

It took 137.5us to interface with the BNO080 and calculate the rotation angle, and it took about 16us to interface with the ICM-20602 and convert to angular rate.

These processing time is measured before the course filming in a similar way to the method of measuring the sensor data rate.

As you can see from the timeline, the ICM-20602 takes very little time compared to the BNO080.

It takes about 153us to perform the operation for the BNO080 and ICM-20602. During the remaining time of the total 1000us, many other functions have to be performed,

and the processing time to interface the LPS22HH barometer will be included in this. In my opinion, all sensor interfaces will be processed within 200us, even if it takes a lot of time.

All the rest of functions, such as PID control, remote data reception, safety functions, etc should be performed within the remaining 800us. I think there is enough time.

So I'm going to record the processing for each functions in this timeline.

So it's done today, and next time, we are going to interface LPS22HH barometer and calculate barometric altitude.

The next time is the last time of the Chapter 2 sensor interface. See you next time. Thank you.

```



#### video 8
- LPS22HH barometer SPI

{% include youtubePlayer.html id=page.youtubeID8 %}

```diff
Until last time, we calculated the 3-axis rotation angle and angular rate using the BNO080 and the ICM-20602,

and we even checked the results using the 2D-line graph.

At that time, it took about 137.5us for BNO080 and 16us for ICM-20602 respectively to interface and calculate.

In order to operate at a total of 1kHz, all functions must be performed within 1000us, it took 153 us to process these two,

and all other functions must be performed within the remaining 850 us.

This time, I will explain about the barometric pressure sensor. The barometric pressure sensor is usually used to measure altitude,

and unlike these two sensors I explained earlier, it tends to have slow output data rate and is less accurate.

Most of barometers have similar characteristics regardless of the manufacturer.

In this course, we will use a barometric pressure sensor called LPS22HH, and the sensor data rate is up to 200Hz, but we will set it to 50hz.

And in this tutorial, I'll explain how to get data and convert it to altitude, but we're not going to implement "altitude control".

However, since the LPS22HH barometric pressure sensor is built-in on the FC board, those who want to do altitude control in the future can achieve by implementing the algorithm yourself.

Today is the last time of Chapter 2 Sensor Interface, and I will explain how to interface the LPS22HH and get the barometric altitude.

I prepared two cameras. The blue line on the graph is the barometric altitude converted from air pressure.

The unit is meter. So dividing the number on the left by 100, it's in cm.

First of all, as you can see from the blue graph, the barometric pressure sensor has a lot of high frequency noise.

So, in general, the barometric pressure sensor is used after filtering.

This red graph shows the result of a simple digital low pass filter.

But the problem is the barometric pressure sensor has not only high frequency noise but also low frequency noise together.

High frequency noise is relatively easy to filter, but low frequency noise is difficult to remove.

Low frequency noise is a noise that changes values slowly, and sometimes it's called as drift.

if you look at the graph, the sensor value is fluctuating up and down even though the sensor is still left on the desk.

Maybe the actual air pressure changes like that. Anyway, I'll move the sensor up and down.

This is a 30cm ruler. The sensor is on the desk right now.

And I'll try to lift it up 30cm. And I'll repeat moving up and down a few times.

After repeating, the altitude printed on the graph increases and decreases repeatedly, but the value does not change constantly.

And now I put it on the desk again, but the altitude is not the same as when it was on the desk for the first time.

So, when the barometric altitude changes, it is difficult to know if the actual altitude has changed or it is low frequency noise.

This is the same for all barometric pressure sensors. Barometric pressure is actually a little different between indoor and outdoor,

and it may change depending on weather, temperature and season.

Also, since it is the altitude of the air pressure based on the sea level, the air pressure seems to change every moment.

So I think the barometric pressure sensor is a bit difficult to handle.

Barometric pressure sensor is largely affected by wind, so they are usually shielded with a sponge or something.

However, sponge shielding may be difficult because there is no hard case for MH-FC V2.2.

The LPS22HH is released by the ST microelectronics that made STM32 that we use as mcu.

This is also a new sensor released a year ago. (as of 2019) Other drone FCs usually use the BMP series and MS5611,

but LPS22HH has a smaller error range and a higher air pressure resolution, so I chose this sensor.

In addition to the LPS22HH, there are also LPS22HB and LPS22HD series released by ST.

Among them, LPS22HH is selected because it has the best specifications.

The LPS22HH has a built-in barometric pressure sensor and a temperature sensor, and the size is very small at 2x2x0.73mm.

It's hard to solder by hand because it's an LGA package.

And the sensor output data rate can be selected from 1 Hz to 200 Hz.

The bit resolution of barometric pressure is 24bits and temperature is 16bits.

Like the ICM-20602, the internal digital LPF can be enabled, and there are two options to select the cutoff frequency.

It supports I2C, SPI and MIPI I3C interfaces. I have not used MIPI I3C, and in this course we will use SPI interface.

This table shows the characteristics of the sensor. The table describes the barometric pressure resolution is 4096LSB/hPa.

I couldn't understand this part when I looked at the data sheet.

In other words, when the digital value of the sensor changes by 1, the barometric pressure changes 0.00024414 hPa,

Converting this to the height is 0.002M that is 0.2cm.

However, I don't know if there is an air pressure sensor measuring in units of 0.2 cm in the world. I may have misunderstood the data sheet,

but anyway, it seems that the number written on the data sheet is calculated that way.

And it's explained that the Relative accuracy over pressure is about ±20cm(0.025hPa), and the sensor RMS noise level is about 5cm(0.0065hPa).

And when ST was launching this sensor, ST introduced LPS22HH is a most precise barometric pressure sensor with 5cm noise level.

Anyway, among the existing barometric pressure sensors, the error seems to be quite small.

But due to the characteristics of the barometer, it is not possible to accurately measure altitude.

If doing altitude control using only the barometer, the altitude will not remain constant and will fluctuate up and down.

If you watch the videos on YouTube about altitude control with only a barometric pressure sensor, you'll see similar symptoms.

So when doing altitude control with a barometer, it's difficult to control in few cm, I think it would be good to control it by 50cm or M unit.

In the past, I saw the multiwii open source and it seems that the accelerometer is used together.

Usually, at low altitude, sensors that can measure in units of several cm, such as ultrasonic, infrared, or laser sensors are used together.

When seeing the dji drone flying, it's still hovering without moving, I think dji has really great technology.

I've been looking for dji job postings before, and it seems that only doctoral level or higher is required when recruiting R&D personnel.

Anyway, And the resolution of the temperature sensor is 100LSB/℃,

which means that when the sensor value changes by 1, the temperature changes by 0.01℃.

Usually, barometer has temperature sensor together.

The reason is to compensate with the temperature because the air pressure may change depending on the temperature.

So, we will use a temperature compensated barometric altitude calculation algorithm later.

This table is the same as the previous page. The output data rate can be used from a min of 1Hz to a max of 200Hz,

and one of these items can be selected. Among them, we will use 50Hz.

Last time, I said that the faster output data rate is better, but the reason why we will use 50Hz is,

When controlling the attitude, even if the attitude changes a little, it needs to react quickly so the sensor needs to be output as quickly.

When controlling the altitude, there is not much of a sudden change in altitude. So it's okay to output relatively slowly,

And if increasing the output data rate of the LPS22HH, the noise level becomes much larger.

In addition, this sensor supports a low noise mode but it cannot be used from an output data rate of 100Hz or higher.

For that reason, I chose 50Hz, and we will also use 50Hz ODR for the temperature sensor.

This is a description of the sensor interface. We will use SPI among the three communication methods.

Like the ICM-20602, if putting CS pin to low, it communicates in SPI mode, or putting CS pin to high, it communicates in I2C mode,

We're going to use SPI, so we can communicate putting the CS pin as low.

The LPS22HH also has an internal DLPF, and one of the two filter cutoff frequencies can be selected.

ODR means the Output Data Rate, and the cutoff frequency can be selected either ODR/9 or ODR/20.

In this course, we will use ODR/20.

Also we will use 50Hz ODR so the filter cutoff frequency will be 2.5Hz (=50Hz/20).

And below that, it is explained that the ODR must be lower than 100Hz to use the low noise mode.

We're going to set it to 50Hz so we can use the low noise mode.

This is how to convert the measured sensor data into barometric pressure in hPa. Raw data of barometric pressure is output in 24bits (3bytes).

If this barometric pressure data is read three times by 1 byte each from the low address, it is received in the order of the lower byte (XL), the middle byte (L), and the upper byte (H),

and is expressed as a 24-bit signed number (in 2's complement). But the atmospheric pressure is positive, so the negative part is meaningless.

For example, if the data were 0x8D, 0xF5 and 0x3F from the lower address. Leave the lower byte (XL) as it is,

bitwise shift left by 8bits the middle byte (L) and bitwise shift left by 16bits the upper byte (H).

and bitwise-or each results and then the result is 0x3FF58D. (4191629 in decimal) dividing it by 4096, it's finally air pressure in hPa.

So the air pressure is 1023.3 hPa.(=4191629/4096)

And the raw data of temperature is output in 16bits (2bytes) signed integer.

For example, if the data were 0xC4 and 0x09 from the lower address, similary, Leave the lower byte as it is,

bitwise shift left by 8bits the higher byte bitwise-or and bitwise-or each results, dividing it by 100, it's finally temperature in ℃.

So the temperature is 25.00℃.(=2500/100)

Now let me explain the circuit diagram. The LPS22HH is connected to SPI3.

MH-FC V2.2 has 3 sensors built-in, which are separately connected to SPI1, SPI2 and SPI3.

This sensor uses five pins for SPI interface. four of them are the pins used for communication,

and the DRDY (INT) pin, like the previous sensors, is used to inform the host that the data is ready.

These pins are connected to PB4, PB5, PB6, PB3, and PB7, respectively.

This is a description of the SPI parameters. This table and timing diagram appears three times in a row.

There are such tables and timing diagrams in the datasheet of any device that does digital communication.

So, through these, you can check which communication is used and what its parameters are.

The maximum SPI clock for this sensor is 10MHz. At the bottom of the table, it says that 8MHz is recommended for the max SPI clock,

but we will set it to 10MHz. (10.5MHz exaclty)

And the clock polarity is high and the MSB is transmitted first.

The data length is 8bit and the data is transmitted on the rising edge of the clock. Therefore, the clock phase can be set to 2 edge.

And like ICM-20602, data read/write operation is classified according to whether the highest bit of the first byte is 1 or 0.

So, we are going to configure SPI3 on ​​CubeMX. Full-Duplex Master and we will control CS pin by software,

And we will set the data length is 8bit, the prescaler is 4 and the SPI clock is 10.5MHz.

And clock polarity is set to High, clock phase is set to 2 edge, First bit is set to MSB First.

And like the other sensors, we will use the driver library. If you go to this address, the library is uploaded to my github.

Launch the web browser and access "https://github.com/ChrisWonyeobPark/LPS22HH-STM32F4-SPI-LL-Driver" Click the green Clone or Download button to download it.

After downloading and extracting the files, LPS22HH.c and LPS22HH.h files are created.

However, these libraries were written myself, so they contain only the necessary functions used in my course.

Now, let's interface the sensor and calculate the barometric altitude using this library.

Duplicate the "2-2. ICM20602" folder that we did last time. And rename the folder to "2-3. LPS22HH".

And after copying the folder name, come into the folder. Rename the .ioc file to be the same as the folder name.

And delete the .elf file and debug folder.

Then launch the CubeIDE.

After launching, close all open projects.

When a new window pops up, don't check it and click OK.

Then click Import project and select Existing Projects into Workspace.

Click Browse and select the "2-3. LPS22HH" folder you copied right before. Then click Finish.

Import is complete. Expand the project tree and double-click on the .ioc file to launch CubeMX.

Now let's set up SPI3. Expand Connectivity and select SPI3.

Select Mode as Full-Duplex Master and then come down.

Select Prescaler as 4. Then the Baud Rate is calculated as 10.5MHz. (=42MHz/4)

And select Clock Polarity as High and Clock Phase as 2 Edge.

And since the SPI3 default pins are different from the actual connected pins, so we need to change them.

We use PB3, PB4, PB5, PB6 and PB7.

First, set PB3 to SPI3_SCK, PB4 to SPI3_MISO and PB5 to SPI3_MOSI.

And set PB6 to GPIO_Output and PB7 to GPIO_Input as well.

In fact, what we have configured now are already included in the library. However, the reason I explained is to show you how to configure them in CubeMX.

In addition, it's easy to see at a glance which pins are used.

Then come to the Project Manager tab.

Change SPI3 to LL Driver in Advanced Settings. Now all configuration is complete with CubeMX. Generate the code.

Code generation is also complete. Now let's add these two library files into the project.

Drag LPS22HH.c and drop to the src folder. Select Copy file.

And in the same way, add LPS22HH.h to the inc folder.

It's done. Now open the main.c file.

Scroll down and the SPI3 initialization function is called in the main function.

Press f3 to go to the definition of the function, and the spi.c file has opened.

Inside this function, there is some code that initializes the SPI parameters that we configured in CubeMX a while ago.

But the GPIO input/output are not initialized here. If you open the gpio.c file, PB6 and PB7 are initialized as output and input respectively.

Then, let's open the LPS22HH.c file.

First of all, SPI and GPIO initialization function is defined to interface with the LPS22HH.

We're going to use this function, so we didn't actually need to configure SPI and GPIO on CubeMX.

I just showed you the configuration processes.

And come down below that, SPI3_SendByte() is a function that communicates with SPI,

And below that, some functions to interface with LPS22HH through SPI communication are defined.

And if you come down again, this LPS22HH_Initialization() is the function we will use.

The first thing to do inside this function is to call the GPIO and SPI initialization function.

and check the sensor ID to check if the sensor is well connected below that.

In fact, BNO080 and ICM-20602 also had these processes. I explained it once last time.

We will write code for checking whether the sensors are well connected in the future.

But not at this stage.

If the sensor is well connected, starts to set the sensor parameters this time.

First, sets the sensor output data rate to 50Hz,

And sets the DLPF cutoff frequency to ODR/20.

And ignore the Enable Block Data Update part.

Below that, enables the Low Noise Mode,

and finally, enables INT pin output when the data is ready.

So what we're going to do is to call the LPS22HH_Initialization() once in the main function. Copy the function name and return to the main.c.

And call it under the ICM-20602 initialization function.

This initializes the SPI and GPIO to interface with the sensor, and the internal settings of the sensor too.

Then, we just need to receive the data inside the while loop.

Scroll down and come to the while loop. First, comment out the previously written code in the while loop.

Inside the loop, we must check whether the sensor data is ready first.

Open the if statement. And in the library, a function to check the state of the INT pin has been defined.

Return to LPS22HH.c and scroll down, and the LPS22HH_DataReady() exists.

Copy the function name, go back to main.c, and call it inside the parenthesis of the if statement. If the return value of the function is 1, the data is ready.

Then just need to read the data inside the if statement. The data receiving function is also defined, so we will use that function.

Come to the LPS22HH.c again, LPS22HH_GetPressure() and LPS22HH_GetTemperature() are defined.

So we're going to read pressure and temperature data using these functions.

The parameter of LPS22HH_GetPressure() is the address of a 32bit variable to store the raw data of the barometric pressure.

And in this function, LPS22HH data is read, and 3 bytes air pressure data are stored in the memory pointed to by this pointer.

The same for temperature. The parameter of LPS22HH_GetTemperature() is the address of a 16bit variable to store the raw data of the temperature.

and stores 2 bytes temperature data in the memory pointed to by the pointer.

We just need to call this function and pass the address of a variable as an argument.

The the address of a variable to pass is,

First of all, come to the top of the LPS22HH.c file, a "Struct_LPS22HH" structure variable declared, and this structure is defined in the LPS22HH.h header file.

Put the cursor on the header file and press F3 to open it. Scroll down and the Struct_LPS22HH structure is defined.

This structure has 4 members, the first two variables are to store the raw data of each sensor,

and the "float baroAlt" is a variable to store the altitude converted into meter unit,

and the "float baroAltFilt" variable below is a variable to store the filtered result because the barometric altitude is very noisy.

Now what we are going to do is to call the LPS22HH_GetPressure() and LPS22HH_GetTemperature() inside the if statement. Copy the name of LPS22HH_GetPressure().

Call it inside the if statement. Since the parameter is the address of the variable, so write & first.

Then write LPS22HH_GetPressure(&LPS22HH.pressure_raw);

This structure variable is declared in the LPS22HH.c and it is defined as extern in the LPS22HH.h,

so if includes this LPS22HH.h file and we can access the structure variable where it is included.

Therefore, include the LPS22HH.h in the main.c. Go to the top and write #include "LPS22HH.h"

It must be written between /* User Code BEGIN */ and /* User Code END */. We can now access the variables and functions defined in LPS22HH.h in the main.c.

Also, let's get temperature data.

Copy the name of the LPS22HH_GetTemperature() from the LPS22HH.c and call it inside the if statement.

Again, pass the address of the variable as a parameter of the function. Write LPS22HH_GetTemperature(&LPS22HH.temperature_raw);

Then the air pressure and temperature data will be stored in each variable respectively.

However, this is the raw data received from the sensor and needs to be converted into hPa and ℃ units.

To convert to hPa, divide the pressure_raw by 4096, and to convert to ℃, divide the raw temperature_raw by 100.

Now, let's calculate the altitude with these air pressure and temperature.

Return to the LPS22HH.c and scroll down to the bottom, there are two functions, getAltitude1() and getAltitude2().

getAltitude1() is a function that calculates altitude using only pressure data, and getAltitude2() is a function that calculates altitude with temperature compensation.

We are going to use getAltitude2(). Copy the name of the function.

After that, call it in the if statement. This function takes two parameters. The first is the barometric pressure in hPa and the second is the temperature in ℃.

Since we received the temperature and pressure data right above, the first argument is the pressure data divided by 4096.(in hPa)

In this case, if both operands are integers, the decimal point is truncated, so it must be divided by 4096.f.

And the second argument is the temperature data divided by 100.f (in ℃).

Write getAltitude2(LPS22HH.pressure_raw/4096.f, LPS22HH.temperature_raw/100.f);

Then this function returns the altitude in meters, and the result should be stored in a variable.

Lets's store the result in LPS22HH.baroAlt among the members of the structure. Then the temperature compensated barometric altitude is stored.

Now we are done to get baormetric altitude using the barometer.

Now, let's print out whether the altitude is well calculated. I will print it in integer form by multiplying by 100.

Write printf("%d\n", LPS22HH.baroAlt*100);

Since multiplied by 100, now it will be printed in cm.

However, since the result of calculating LPS22HH.baroAlt*100 is in float type, you need to explicitly cast it to integer form. Complete writing printf("%d\n", (int)(LPS22HH.baroAlt*100));

Now writing all the code is complete. First save this main.c file.

Then press F11 to build.

When the download is complete, terminate the debug mode.

The altitude is displayed in the graph and the value is very different from the demo at the beginning of this video.

The demo was filmed yesterday, and the writing source code is being filmed after a day,

as the day passed, the barometric altitude value changed like this.

The barometer seems to be a bit difficult to handle for these reasons.

And when I explained at the beginning of the video, it was in cm when multiplied by 100. But the default unit of the displayed value now is cm.

Now let's move it up and down.

It is now on the desk. And now I've raised about 30cm, I'll repeat it several times.

I repeated it a few times, and even I raised about just 30cm, the value changes so clearly.

However, I mentioned that it is difficult to tell if this is a sensor drift or if the actual altitude has changed.

In fact, if you leave the sensor still for a few hours like this, you can see that the altitude changes a lot.

And as you can see from the graph, there is a lot of high frequency noise. However, this high frequency noise is easier to filter out.

Now, let me explain how to implement a simple digital filter.

Before that,

getAltitude1() is a function that calculates the altitude using only air pressure, and getAltitude2() is a function that calculates the altitude with temperature compensation.

If you go to this website, you can find the formula to calculate them.

And you can calculate the altitude by entering the barometric pressure and temperature from these two websites below it.

So if you want to check if the barometric altitude calculated in my code is correct or not, you can check it here.

So now let me explain the simple digital filter. The filter I will explain is a simple LPF (1st order IIR filter),

and I will only explain how to implement it without explaining the concept, but those who are curious about the concept should study digital signal processing.

It may be difficult to understand if you are new to it.

IIR stands for Infinite Impulse Response, and the opposite concept, FIR filter, also exists.

The IIR filter has good filter performance even with a low order, but has a disadvantage that the phase response is nonlinear.

Conversely, FIR has a linear phase response, but in order to increase the performance of the filter, the order must be increased, which requires a lot of CPU computation and memory.

The study of digital signal processing is difficult, but it is fun and useful.

If you study 2D signal processing, you can also do image processing. If you are a college or university student, I recommend taking a signal processing class.

So let's write the filter code. Scroll down and come to the while loop.

The altitude has been stored in LPS22HH.baroAlt, but there is a lot of high frequency noise. After filtering, the result should be stored in a variable.

the "baroAltFilt" variable is also defined in the structure.

So we're going to store the filtered result in LPS22HH.baroAltFilt, write the code exactly like me.

First, multiply LPS22HH.baroAltFilt by SOMETHING (???) and add ANOTHER SOMETHING to it, and store the result to LPS22HH.baroAltFilt itself.

The ANOTHER SOMETHING is a value that the original signal with a lot of noise multiplied by SOMETHING ELSE.

This time, it is multiplied by 1 minus this SOMETHING (???). This SOMETHING (???) will be a constant.

This will store the filtered results to LPS22HH.baroAltFilt. Now the SOMETHING (???) is an unchanging constant, so let's define it as a macro.

Let's name the macro X. This X should be a value between 0 and 1, but I will set it to 0.90f.

Now replace ??? with the X.

This constant is also considered to be a weight parameter, and this is the basic form of the IIR filter.

The original value is multiplied by 1 minus weight parameter and the filtered value is multiplied by weight parameter,

The results of the two calculations are added together and stored in the filtered value back again. It is named IIR because the filtered signal recursively stored to itself after some calculations.

For digital filters such as IIR or FIR filters, the sampling period is a very important factor. Filter characteristics and sampling period are closely related.

Here, the sampling period can be regarded as the period in which this operation is repeated, that is, the period that comes into the if statement.

In the source code I wrote now, it comes into the if statement at 50Hz cycles.

If I do not change this source code and only change the sensor output data rate to 100Hz,

In other words, even if the source code is the same, the filtered result will be different if the sampling period is changed.

The first chapter of the study of digital signal processing explains sampling theory because it is the basis of digital signal processing.

And this constant X, the closer to 1, the more high frequency components are removed, and the closer to 0, the weaker the filtering.

But increasing this number does not only improve filtering performance, but cause some time delay.

This means that the higher the number causes the slower the response. When the altitude changes rapidly, there is a time delay in the result of the filtered output.

So we can't blindly increase this number. It needs to use an appropriate value, and I'll use 0.9.

If you are curious about how the filtering result changes when you change this value, try changing the value and see the result yourself. That's the best way.

Now, let's print out the result and check it.

Let's compare the two signals by outputting the unfiltered signal and the filtered signal together.

Write printf("%d,%d\n", (int)(LPS22HH.baroAlt*100), (int)(LPS22HH.baroAltFilt*100));

All source is complete. Write the code exactly same as the course and build it. And if you search for Simple LPF on Google, you will find a lot of filters in the form above.

So, this is a type of filter that can be used for any digital signal.

I'm sorry I missed comma.

When the download is complete, exit debug mode.

The red line is the filtered result on the graph.

You can see that there is some time delay. It means that the response is a little slower.

However, a lot of high frequency noise has been removed. If a system requires a low time delay, it may not be able to use this filter.

Or it needs to lower the filter coefficient that is set to 0.9. However, if lower this value, the filtering performance will be weaker.

So you have to find a proper value. All digital filters have similar characteristics.

Anyway, we could check the filter is working. Now, everything in Chapter 2 is complete.

It took about 21.5us to perform what implemented this time, and it took about 175us to perform all functions in Chapter 2.

The other functions should be performed in the rest of the 825us.

And the output data rate of BNO080 is 400Hz, ICM-20602 is 1kHz and LPS22HH is 50Hz.

But these three are not all executed together in every loop.

For the ICM-20602, since the output data rate of ICM-20602 and loop cycle has the same cycle(1kHz), so it is executed every loop,

but in the case of the other two sensors, they are not excuted in some loop.

So, if this is the first loop, all operations will be performed in the first loop, but BNO080 and LPS22HH will not be performed in the next loop.

This is because these two sensors update their sensor data after a few loops later.

So, in conclusion, what we calculate now is the time it takes when all functions are executed in one loop, but it takes that time not every loop.

Anyway, calculating the maximum execution time is good in terms of time management. So the all contents of chapter 2 is complete.

I'm now focusing on how to implement quickly, and to develop it more properly, you need to verify the sensor.

It is good to have an environment to verify objectively how accurate the sensor is and how much error it is, and make comparisons with proven equipment.

However, it is difficult for individual developers to have such an environment. It is difficult for research institute or lab as well.

But in my personal opinion, in order to improve drone technology, a verification system must be established.

However, my courses proceed without this verification.

My course is more focused on the process of developing embedded systems.

Anyway sensor interface that is the most basic and important functions for drones is now finished.

It's a part that drone developers usually overlook and just skip over, but I've covered it in detail.

From the next time, I will explain about the GPS. See you next time. Thank you.

```


### Ch3 GPS data
- data rx
#### video 9
* u-center install

{% include youtubePlayer.html id=page.youtubeID9 %}

```diff
Until last time, we have finished the Chapter 2 sensor interface.

We calculated the 3-axis rotation angle with the quaternion algorithm using the BNO080 9-axis sensor,

the 3-axis angular velocity with the ICM-20602 6-axis sensor, and finally the altitude with the LPS22HH barometric pressure sensor.

Unlike the other two sensors, the barometric pressure sensor is difficult to handle because it has a lot of low and high frequency noises, and slow response time.

We will use BNO080 and ICM-20602 for attitude control, but these two sensors have little noise and almost no output delay.

And we checked them through real-time 2D line graphs. I think we can check the actual flight performance when we do attitude control later.

And if you're going to calculate the attitude in a different way than I explained in my class,

after finding the rotation angle by yourself and then use the graph to compare the noise level and the response time to my lecture.

And when I was explaining the LPS22HH last time, I just mentioned the output at 50Hz, and I didn't show it through an oscilloscope.

However, it is output well at 50Hz, and if you are curious, you can check it through the oscilloscope or timer.

This is the FC's total timeline for flight control.

In the last chapter, since all communication was in polling method, therefore, no other operations couldn't be performed during the sensor communication.

However, we will receive data from the GPS in interrupt mode, so receiving data from the GPS doesn't take that much time.

And if using DMA together, can save the time for receiving data and storing it in a buffer. Because all processes are handled by hardware.

There are many advantages to using DMA. However, the concept of DMA is complex and difficult to explain, so DMA is not used in this course.

If you are curious about what DMA is, try Googling. It is also recommended to find out how to implement it.

I uploaded a course on ADC using DMA in my STM32F4 Tutorial. It will help you to understand. So please watch it.

Anyway, to summarize, GPS data reception time is negligible because it uses the interrupt mode.

When the data is received, we will store it into a temporary buffer and then parsed into each variable. We'll only count the time. And in fact, it doesn't take much time either.

And the first content in the GPS chapter is ublox M8N configuration (using u-center) on the course contents order,

but changing the order, I'll explain it next time.

Now it's a beginning of chapter 3. GPS data receiving and parsing.

The GPS is actually very complicated because it is a "system". So, what I'm going to explain in my course will be a very small part of the many features of GPS.

In this course, I'll only cover how to setup the M8N GPS module to receive latitude and longitude information and how to classify the data. And that's the most important part for us.

GPS outputs latitude and longitude and other data as well,

but there are so many types of data that we won't cover all of them. If you need them, you can implement the code yourself after taking my course.

So this time is the first time of GPS, we will receive NMEA protocol messages with ublox M8N GPS and check the meaning of those data.

And I will explain how to install and use u-center, a configuration software provided by ublox.

And as I said before, we will implement receiving GPS data, but the drone's position control using GPS is not explained in this course.

In addition, we downloaded and used the open source library in the Chapter 2 sensor interface,

but from this chapter we will not use the open source but write all source code ourselves.

Today, we will check whether GPS data is well received through the NMEA protocol with the terminal program.

In addition, we will analyze the meaning of the received messages.

This software is u-center provided by ublox.

This program visualizes GPS data like this, prints it out as text,

and helps to configure GPS settings.

So this software includes a terminal function like this, and it also includes a function to visualize it on the right side when GPS data is received.

It displays the marker on the map with the received latitude and longitude. Republic of Korea(south Korea) is now marked.

And now I have put the GPS outside the window so the data is coming in.

If GPS is placed indoors, the satellite cannot be detected and invalid data is received from the GPS module.

So, when valid data and invalid data come in, we will compare what's different.

In the GPS module we will use, only the red power LED is turned on when no satellite is detected,

and when the satellite is detected and its location is found, the blue LED around it starts blinking.

So, you can check whether the satellite is detected or not with the blue LED.

The GPS module we use in my course is ublox NEO-M8N,

and it is a basic GPS module with an error of about 10 meters. And to be precise, it's not GPS, it's GNSS. GPS is the name of the satellite.

There are 4 satellites available: GPS, Galileo, GLONAS and BeiDou.

The picture on the right is the module we will be using made by Readytosky, and the module has the M8N chipset.

There are many similar-looking GPS modules manufactured by other companies, but fake models also exist.

I don't know if we use fake or not, but it works well.

The diameter of this module is about 55mm, and the patch antenna is installed integrally on the module.

And this M8N chipset supports 4 interfaces, but modules like this usually support two methods, UART and I2C.

And we will interface with UART among them.

I'm not sure if GPS data is output by I2C. It may be used for other purpose.

And the three types of message protocol supported: NMEA, UBX, and RTCM. Among them, I don't know what RTCM is.

The default is set to NMEA protocol.

But next time, we will change it to UBX protocol and use it for future.

Anyway, NMEA is a popular protocol, so I will briefly explain this protocol today.

And the position refresh rate is configurable up to 30Hz in the datasheet, but this is only available when High Navigation Rate is used.

We are going to use 5Hz or 10Hz and I used 10Hz before.

But on the data sheet, it is explained that it will work well even if it is used at 1Hz.

But it seems a little slow, so we'll set to 5Hz or 10Hz. The default is 1Hz.

And ublox provides a software called u-center, which is a configuration program.

And FYI, RTK high-precision GPS such as M8P and F9P have also been released.

When I searched it on YouTube, the error level seemed to be about several cm. I want to try it later, but it seems to be about $200, so it's too expensive to use for now.

Someday, if the price drops under $100, I'll try it.

If you look at the back of this module, 4 screws are fastened, and you can disassemble it by loosening them.

There is a PCB like this in the plastic case. The red square on the top left is the M8N chipset.

And there are two other IC chips. One seems to be the HMC5883 compass sensor, and I don't know exactly what this green color is.

The chip name has been erased. I guess it's flash memory, And there is a coin cell battery at the bottom left,

And there is a 6-pin connector that can interface with the host controller, and host can interface with UART and I2C through this connector.

And the bottom right is the top side of the PCB, as you can see, the patch antenna is installed,

there are 4 LEDs on the edge of the board, and one more LED is on the bottom left. The 4 LEDs are blue LEDs that blink when satellites are detected,

and the LED at the bottom left is red LED for power indication.

And looking at the opposite side of the connector, 4 of the 6 pins are connected to one connector, and the other 2 pins are connected to the other connector.

The connector with 2 pins connected seems to be an I2C output, and it seems to be used when using the built-in HMC5883 compass sensor,

but we don't need to use this because the BNO080 outputs the heading information.

So, we're going to use only a connector with 4 pins. At first these 4 pins would be connected to 6-pin connector.

But it should be replaced to a 5-pin connector. Therefore, you need to seperate all the wires and move them to the 5-pin connector as shown in the picture,

You may need a sharp tweezer or something. Please be careful of hand injuries when separating the wires.

And when moving the wires, be sure to pay attention to the pin order. If the order of the pins is wrong, it may not work or it may get electrical damages.

For each line color, red is 5V, yellow is UART Rx, green is UART Tx and the black is GND. MUST be sure to move them in this order.

After that, you need to plug this 5-pin connector into the FC. The position is a 1.27mm 5-pin connector marked with J4 on the upper right when FC is placed as shown in the picture.

And the GPS is connected to UART4. UART4 RX of STM32 is PC11 and UART4 TX is PC10.

Now, we are going to display data received from the M8N on u-center.

To do so, the M8N module and the PC must be connected to each other. You can connect through the USB to UART module between PC and M8N.

Usually this USB to UART module has a 2.54mm connector, so it will be probably difficult to connect right away.

Because the connector of M8N module is a 1.27mm connector.

And if connect M8N to PC with USB to UART module, it is hassle to repeat plugging and unplugging the USB to UART module.

To make this easier, we will connect an FC between the USB to UART module and M8N, and send and receive data between the PC and the M8N module through the FC.

In Chapter 1, we have already implemented the debug UART to communicate with the PC,

so the data from the PC can be transferred to the M8N via FC,

and the data from the M8N can be sent to the PC via FC.

In other words, it can be seen that FC acts as a passageway between the PC and M8N,

and PC and GPS exchange data through FC in the middle.

Communication with PC by UART6 has been already implemented, so now we can configure UART4 to interface M8N and write communication code.

First, we need to configure UART parameters to communicate with GPS.

The default setting of UART of M8N is Async mode, 8bit data length, 9600bps, No parity and 1 stop bit. And the message protocol is NMEA.

I will explain about NMEA protocol in detail after initializing UART in CubeMX and implementing the source code to check if GPS data comes in well.

In the past, we already have configured UART6. We will use this parmeters as they are.

And now we're going to configure UART4 parameters in CubeMX as described right before. and we will use the interrupt method to receive data.

And, as I said earlier, we're going to write code for data receiving and parsing ourselves.

And if you understand the code, you will be able to use it in other projects. In particular, I'm sure the message parsing code will be very useful.

Before launching CubeMX, let's download u-center first. Open a web browser and go to www.u-blox.com

Select Support - Evaluation software at the top menu. Then there is u-center among the 4 items below. Choose it.

Select u-center for Windows. Other OS doesn't seem to be supported.

Click it and downaload a .zip file.

and when you unzip it, there is one installation file. Just install it.

Now, I will explain how to configure UART4 with CubeMX and write interrupt code.

After duplicate the folder we worked on last time and rename the folder to "3-1. M8N PC Interface".

And copy the folder name and then come into the folder and rename the .ioc file to be the same as the folder.

Delete the Debug folder and the .elf file. After that, launch CubeIDE.

Close the open project first.

And import the folder you just copied.

Select Import projects - Exsiting Projects into Workspace - Browse - "3-1. M8N PC Interface" Then click Finish.

Import is complete. Double-click the .ioc file to launch CubeMX.

Now let's configure UART4. Select Connectivity - UART4.

Select Asynchronous mode and come down.

Since it needs to communicate with the GPS module, set the baud rate to 9600bps same as the initial setting. And leave the rest as they are.

And the default GPIO pin for UART4 is different. UART4 Tx is PC10 and Rx is PC11 respectively on the MH-FC V2.2 board. So, let's change the pin.

PC10 is located on the upper right. Set this to UART4_TX. Next to it, set PC11 to UART4_RX as well.

And if you set it like this, those pins are labeled UART4_TX and UART4_RX.

But you can change the label by right-clicking on the pin and choosing Enter User Label.

If it is labeled UART4 like now, it is difficult to know at a glance which device it is communicating with.

At this time, it is easy to know at a glance if change the label like M8N_RX4.

If changes the label like this and generates code, the pin name is defined as a macro according to this label.

I'm going to change the label UART4_TX to M8N_TX4. The number 4 here means the channel of UART.

Now select the NVIC Settings tab. Since we are going to use RX interrupt, check Enable of UART4 global interrupt.

Then come to the Project Manager tab. Change HAL to LL driver for UART4 in Advanced setting.

And come back to the Pinout & Configuration tab and click System view - NVIC in the upper right corner.

Here, the enabled interrupts are being added to the list. UART4 global interrupt has been also enabled.

Now all configurations are done. Generate the code.

When the code generation is complete, open the main.c file.

When scrolling down, the UART4 initialization function is called in the main function.

Let's go to the definition by pressing F3. As we configured in CubeMX, code for 9600bps, 8bit data length, 1 stop bit and no parity are generated.

And UART4 global interrupt is also enabled.

And as we changed the pin label, the GPIO pin names were changed to M8N_RX4_pin and M8N_TX4_pin.

Press F3 and go to the definition. They are defined as a macro.

We're done to check it out here. Come back to main.c.

Now we're going to write source code. Actually, we don't have much to do.

This time, nothing works inside the while loop, so comment out all code inside the while loop first.

The shortcut of comment out is "ctrl + /".

Then all selected lines are commented out. To uncomment is same. After selecting a commented line, press "ctrl + /" again to uncomment it.

And now what we will do is to transfer the data received from UART6 to UART4 through the FC as it is,

and on the contrary, to send the data received from UART4 to UART6. We will do this in the UART rx interrupt.

Currently, only global interrupt of UART4 is enabled, and rx interrupt must be enabled separately.

When I was explaining the debug UART, I explained how to enable rx interrupt.

Duplicate LL_USART_EnableIT_RXNE (USART6); the code below it. After that, change the argument "USART6" of the function to "UART4".

Now, when data is received via UART4, the UART4 rxne interrupt starts to be requested. And then the ISR function will be called, which is defined in the stm32f4xx_it.c file.

Double-click the stm32f4xx_it.c file to open it. Scroll down and the code we wrote in the USART6 IRQ handler remains as it is.

And just above that, the UART4 IRQ handler function has been newly generated. From now on, when UART4 interrupt is requested, UART4_IRQHandler() function is called.

First of all, copy the code in USART6 IRQ hanlder to UART4 IRQ hander.

And change all the arguments of the function from "USART6" to "UART4".

And some are USART and some are UART without S. Depending on the UART channel, some support synchronous mode and some do not.

USART supports both sync and async mode, but UART only supports async mode.

Then, change the variable name from "uart6" to "uart4" as well. In the past, we declared as global variables.

Scroll up to the top and duplicates the two previously declared global variables.

Change the name "uart6" to "uart4". And come down again.

Now, when data is received through UART4, UART4_IRQHandler() is called and the codes in it are being executed.

Likewise, when data is received through USART6, USART6_IRQHandler() is called as well.

What we will do is send the data received from UART4 to USART6, and send the data received from USART6 back to UART4.

So, we should write that code in the each IRQHandler() seperately. To call uart transmit function, write up to "LL_USART_Trans" and press ctrl + space.

Two items appear, select LL_USART_TransmitData8(). Since the data received by UART4 needs to be bypassed to USART6,

the first argument will be USART6, and the second argument is the variable where the data received from UART4 is stored.

Write LL_USART_TransmitData8(USART6, uart4_rx_data);

Conversely, data received from USART6 is sent to UART4. Write LL_USART_TransmitData8(UART4, uart6_rx_data);

Now, we have finished writing the code. This program forwards the data received from the PC to GPS and the data received from the GPS to PC.

Then let's build and download. Save these files and press F11.

When a new window appears, select the second item. It seems that it has only been built and has not been downloaded.

This happens often, and then just rebuild it.

When a new window appears again, click OK.

Download is complete.

Before running, this is the GPS module that will be used in this course.

but it has not been powered up yet, and the original 6-pin connector has been replaced with a 5-pin connector.

You have to replace it with a 5-pin connector so you can plug it into MH-FC V2.2

When you put the FC in this direction, just plug it into the male connector on the top right. Just plug it in the correct direction.

When plugging in, the GPS powers up and the red LED lights up.

And the blue LEDs on the edge are not blinking because it is located indoor and the satellites are not detected.

And even if it's outdoors, it couldn't be detected right away.

When I test the GPS, I put the GPS outside the window, but sometimes it needs time to detect the position.

And now let's run the FC.

The position is not detected right now, but that does not mean that the data does not come in, and some data starts to be received.

So let's check the data. Run the terminal program.

This is a software called Terminal 1.9b that I use,

Select the comport of the USB to UART module.

Now we need to set the baud rate. Even we configured 9600bps for UART4(GPS) on CubeMX, it must be set 921600bps.

Because FC is communicating with PC via USART6(PC).

so we have to set it at 921600bps, which was the baud rate of USART6(PC) that was set in the debug UART chapter before.

Select 921600bps for baud rate.

After that, connect the comport and some data will start to be received. This data protocol is the NMEA protocol.

The data is received in once every second.

but invalid data is received because the satellites are not currently detected.

As you can see, only those numbers like 99 are being received. Therefore, you should never use this invalid data to control the position of the drone.

Now we have verified that the communication works well, let's check it with u-center software as well.

A zip file was downloaded. If extract it, there is an .exe file. Install it and launch u-center.

I have installed it. Launch the u-center.

First, you need to set the comport, select the port number in the upper left corner,

and select baudrate on the right. Select 921600 as well, which is the baudrate when communicating with a PC.

And I use COM4. The comport you use may be different. Select the COM port number you use.

Then it will be connected automatically. But no information is displayed on u-center. Click the Binary Console and Text Console buttons at the top menu.

Something was being received, but it was invalid data, so it wasn't graphically displayed on the right windows.

And NMEA protocol data is being received in the console window.

Now let me briefly explain what the NMEA protocol is.

NMEA stands for National Marine Electronics Association, I think it is an American navy related organization.

NMEA protocol is a standard for communication between electronic devices established by the organization.

There are several versions of this NMEA protocol, and our M8N module uses the 0183 version,

there are versions like 0182, 0180, and there are also 2000 versions as the version has been updated recently.

However, we are not going to use this protocol. I just give you an information about NMEA protocol.

Let me briefly explain the NMEA 0183 version. The NMEA protocol consists of three layers: the physical layer, the data link layer, and the application layer.

The physical layer is a standard for electrical communication, For example, whether it is wired or wireless communication, if it is wired communication, what voltage it communicate with,

how long the communication distance is guaranteed, and what is the physical characteristic of the transmission line.

For the data link layer, the table above indicates the data link layer, which is simply the UART parameters. It defines the data length, baud rate and how to detect errors in the data.

Finally, the application layer defines the message structure of the data. For example, it defines such as whether the data is in ASCII or binary, what informations are included in the message and how checksum is calcuated.

Any communication protocol has these things defined, but we have been developing without considering it.

The most representative one is the "OSI 7 layer", which is the structure of TCP/IP communication,

and it has very complex structure because there are as many as 7 layers. Each layer has a complex definition, so it takes a lot of time to study.

However, the structure of NMEA is relatively simple because it only has 3 layers.

I tend to talk about common sense(?) like this and if you know a lot of miscellaneous things, they all become abilities and skills for you.

However, please study deeply about one of them so that you can do better than other people.

Anyway, this NMEA protocol sends and receives data through asynchronous UART communication, The typical baud rate is 4800bps, 8bit data bits, No parity and 1 stop bit.

And no handshake means no communication flow control. Since this is a protocol defined a long time ago, the typical baud rate is very low.

However, the UART parameters depend on the module manufacturer. The baud rate of M8N module we use is basically 9600bps.

And the baud rate can be changed by the configuration of the module. Therefore, these UART parameters can be considered meaningless.

And about the message structure, it is described that all data is in ASCII and these special symbols has an independent meaning.

For the comma, it is called Field delimiter, and it separates each information. Also, the $ is labeled Start delimiter, and is the start byte indicating the start of the message.

I recommend you to read this table and explanations below it.

There are a lot of standards defined and pretty difficult to understand. So long story short, the NMEA 0183 protocol is,

It is a communication protocol that 1. interfaces via UART 2. the message starts with $GP??? in ASCII 3. consist of GPS informations.

Since the received data is in ASCII format, if print it with a terminal program, the text data is displayed as shown in the upper right.

At the beginning of this video, I showed you this message is being received. This data contains GPS information such as latitude and longitude.

If you would like to learn more about the NMEA protocol, search on wiki pedia. It is very well explained and will be easy to understand.

And this is Korean Wikipedia, which explains the meaning of these messages.

Looking at the messages in NMEA protocol,

They all start with $GP and after that it depends on the type of the message.

Also, depending on the type of the message, the informations included are different.

Among them, GPGGA, GPGSV, and GPRMC seem to be the most commonly used messages.

GPGGA contains information such as time, latitude, longitude, altitude, and number of satellites used in the calculation.

GPGSV contains all the satellite information the module can receive. And the GPRMC contains the minimum recommended data: time, reliability (whether it is reliable data), latitude and longitude,

as well as speed, direction, date and compass information. However, our M8N module does not include compass information.

Like this, on Wikipedia, you can see what messages exist and what information they contain.

So, I powered up and analyzed the data received from the GPS. When powering up the GPS, the data in this green part is received once.

Looking at this information, this message is the own message of the ublox M8N module,

and GPS information such as latitude or longitude is not included. There is the url of ublox website, firmware version and protocol version information.

Here, this protocol version is different from the NMEA protocol, and is the version of ublox's own message protocol.

Depending on the protocol version, the message type seems to be different,

I'm going to explain it by looking at the data sheet next time.

After that, GPS information such as latitude and longitude starts to be received.

It is received in ASCII and follows the NMEA protocol.

And looking at the NMEA protocol message format, the first starts with the start delimeter $, and message ID GPxxx,

after which the address and value are subsequently received, and each item is separated by a comma, and after the value ends, checksum comes next, and finally the message ends with end sequence .

I said the message starts with $GPxxx, but as you can see the received data, it starts with $GNxxx.

But other than that, the message structure seems to be the same. So, you can ignore it.

The data received now is a message when GPS does not detect the position. We checked this before.

And this is the message when I left the GPS module out of the window for a while and then the GPS detected its location.

The GNRMC message is the recommended minimum data, and analyzing this information one by one,

First, the number "132648.00" was received, then the capital letter "A", and then a lot of data was received in order.

Each information is separated by comma ",". Let's check what each data means.

This red number "132648.00" is the current time in Greenwich Mean Time. (UTC of position fix)

And then the capital letter "A"(Active) means that it's reliable data. If this value is "V"(Void), it is invalid data.

For example, if the satellite is not detected, this value is outputted to "V".

And "3733.34122" is the latitude.

This is information in units of 37 [degrees] and 33.34122 [minutes], and converting it into degrees becomes 37.555687 [degrees].

To convert to degree unit, divide the minute by 60. (33.34122/60 = 0.555687)

The next capital letter "N" stands for North latitude.

And "12655.65876" is the longitude in 126 [degrees] and 55.65876 [minutes], which is also 126.927646 [degrees].

The next capital letter "E" stands for East longitude.

And "1.116" is the speed in [knots]. At this time, even though my GPS module was in a still state, the speed is not zero.

Probably because of the error of the GPS.

To convert [knots] to [km/h], multiply [knots] by 1.8. So 1.116 [knots] x 1.8 = about 2 [km/h]. In other words, it can be seen as almost stationary.

After that, there is a " " blank between the comma, which is the angle of the direction of travel. A blank means there is no information.

I think that the direction of travel is not displayed because it is stopped.

And, "290719" means the current date. (DDMMYY)

And there are two blanks and a capital "A". I couldn't analyze the meaning of this capital "A".

And the last "*6A" is the checksum.

Checksum is a commonly used message error detection code.

Wikipedia also explains how to calculate this checksum, so check it out if you're curious.

Latitude and longitude information is the most important for us, so when I took these coordinates on Google Maps, it showed up near my office.

However, there is several meters error. Anyway, we checked that M8N works fine, and this map software is also a program made by myself in Visual C#.

It was designed to display the location on the map by entering the latitude and longitude.

It can also be displayed on the actual online Google Map.

After accessing Google Map from a browser, enter https://www.google.com/maps/@LATITUDE,LONGITUDE to move the map to that coordinate.

In my case it is https://www.google.com/maps/@37.555687,126.927646

However, the longitude and latitude must be entered in degree unit. If you do this, the map moves to that coordinate. But markers are not displayed in coordinates.

Anyway, it's around here.

And we analyzed the GNRMC message that were received earlier. and the GNGGA message contains more detailed information.

GNGGA contatins time, latitude, longitude, direction of latitude, direction of longitude and additional informations.

The number "1" is, first, 0 means invalid data because the satellite is not detected,

1 means using only the basic satellite, and 2 means using DGPS.

The next number "04" means the number of satellites used to calculate the coordinates. In this case, the position is calculated using 4 satellites.

Then "10.64" is Horizontal dilution of precision information, I don't know exactly what it means.

And up to "34.2,M" is one information. It is orthometric height which is the mean sea level altitude in M ​​units.

This can be compared with the barometric altitude using barometer on FC.

When I developed a drone before, I compared the altitude of this GPS to the barometric altitude, and the altitude was pretty similar.

Although there was a difference in response delay, it showed almost the same pattern. So I think it doesn't matter if use the altitude information of GPS outdoor.

Anyway, this is the altitude calculated using not the barometric pressure sensor but the satellite.

And then, "18.3,M" is geoidal separation. It is the height difference between the ellipsoidal surface and the geoid model's surface.

The next blank means there is no information, but it seems that something is output when using DGPS.

There is no information because we don't use DGPS. The last "*4D" is also a checksum.

In this way, we briefly analyzed the information about these two messages. As you can see, this NMEA protocol message is in ASCII.

Data communication in ASCII has the advantage that human can read it,

but it also has the disadvantage that the data length is long and variable. And if the data length is variable, the code to parse the message is also complicated.

Therefore, ublox supports a message protocol called ubx developed by itself,

and the ubx protocol is in binary, not ASCII, so you cannot read the message with such a terminal program,

but the data length is relatively short, and all the same messages have the same length. So it's easy to parse the message.

So, in the future, we will use the ubx protocol, not the NMEA protocol,

and in order to do that, we need to change the settings of the M8N module. So next time, we will use u-center to change the message protocol, UART baud rate and etc.

And I will also explain what the ubx protocol is.

To summarize this time, we prepared for receiving M8N data and briefly explained the NMEA protocol.

In fact, it is not important because we are not using the NMEA protocol, but I thought it would be good to know, so I explained.

Then see you next time. Thank you.

```


#### video 10
- M8N setup UBX message

{% include youtubePlayer.html id=page.youtubeID10 %}

```diff
The MH-FC V2.2 production is completed and being prepared for global sales.

When it's ready to sell, I'll explain how to purchase it on the udemy course introduction page.

When I tested the newly manufactured FC, I could find there was a slight offset in the 3-axis rotation angle calculated with the BNO080.

The FC board I checked had about 8 degrees offset in the roll angle.

The offset of the rotation angle is a component that directly affects attitude control, so it is recommended to remove it.

The simple way to remove the offset is to subtract that amount in software coding. But that doesn't seem to be a fundamental solution.

I'm going to check whether it is possible to solve with sensor calibration or not, and if it is solved by doing so, I will explain how to calibrate the BNO080 in the Chapter 7. Add-on functions.

If you already have MH-FC V2.2, please follow Chapter 2. Sensor Interface and check there is an offset in the roll and pitch angle.

Each sensor is different, so some may or may not have an offset. And if there is an offset, it is better to remove it.

And when I removed the offset by software coding and tested the flight, the flight performance was well.

It has also been confirmed that the rest of the functions work well without any problems.

When it is ready for sale, it will be announced on the introduction page of this course so please check it.

Now, let's begin the class.

Last time, I briefly explained the NMEA protocol,

and received the NMEA messages from the M8N GPS and analyzed the message structure.

But in the future, we will use UBX protocol instead of this NMEA protocol.

Therefore, this time, I will show how to change the M8N settings to output in UBX protocol through the u-center software.

This time, we are only changing the M8N settings, so there is not much to do. And the UBX protocol will be explained in detail next time.

Now, this is the data received from M8N in UBX protocol. Looking at the data, unlike the NMEA protocol, it can't be read what kind of data it is.

The NMEA protocol was in ASCII format, so the received message could be read directly.

In the UBX protocol, since data comes in binary form, it cannot be read directly, and must go through decoding and parsing processes.

To briefly explain what the UBX protocol is, This is the description in the M8N manual,

To put it simply, UBX protocol is, 1. Interface with UART (or I2C, USB, SPI, usually UART).

2. Starts with 0xB5('μ') and 0x62('b'). 3. Communication protocol created by ublox containing GPS informations.

And we are going to interface with UART. Comparing UBX to the NMEA protocol,

First, we checked some messages of the NMEA protocol last time. The NMEA protocol was output in ASCII and could be read directly,

but I mentioned that the length of the message may be different even for the same type of message, so it is difficult to write parsing code.

However, in the UBX protocol, the same message type has the same length, so it is relatively easy to write decoding and parsing codes.

The message frame of the ubx protocol is structured as shown in the figure. This message frame structure is very important as it is essential when writing parsing code.

Comparing the message structure of NMEA to UBX protocol, In the case of NMEA, all data is in ASCII format.

A message starts with '$', followed by the three letters after the 'GP' to identify which message it is.

And the data field contains the actual GPS related information. Each piece of information is separated by commas(',').

And after '*', there is two-letter checksum information. Finally, the frame ends with <CR> and <LF>.

For the UBX, message starts with two bytes 0xB5 and 0x62 in hexadecimal, which are the two letters 'μ' and 'b' of in ASCII.

And identifies what kind of message it is by CLASS and ID,

And there is 2 bytes of data length information, and next, payload is the actual GPS information.

The message frame ends with the two bytes checksum.

Actually the message frame structure of NMEA and UBX has not big differences. One big difference is that it is ASCII or Hex(Binary)

So, comparing NMEA to UBX as a whole, NMEA is a general-purpose protocol established by this organization called NMEA,

so all GPS supports the NMEA protocol regardless of the manufacturer.

The data is in ASCII format, interfaced with UART, and the length of the message is variable.

And each information is separated by commas.

The advantage of the NMEA protocol is that data can be directly read without any conversion process. But I'm not sure if this is a big plus.

The disadvantage is that the message length is long and parsing code is relatively complex.

The UBX protocol is a protocol created by ublox itself, and the data is in hex (binary), so it cannot be read directly.

And it supports 4 interfaces - UART, I2C, USB, SPI and the data length is the same for the same message ID.

Each piece of information is separated by byte order. There is no delimiter in the UBX protocol.

The advantage is that the message is short and easy to parse. Because of this advantage, we will use the UBX protocol in the future.

The disadvantage is that only ublox's GPS supports the UBX protocol. and since it is a hex format, data can be read only after decoding.

I received the NMEA and the UBX messages each with a terminal program and compared them.

The NMEA messages were in ASCII text and could be read right away. We checked it last time.

However, if prints the UBX messages in ASCII, it is not possible to read what kind of data it is.

I said that UBX messages start with 0xB5 0x62, that is, 'μ' and 'b' in ASCII.

Look at the picture, the first data received is 'μb', Then, since the data comes in as hex (binary) now, it cannot be read in ASCII,

Then, 'μb' is printed when the next message starts again.

Therefore, in order to read UBX messages, decoding and parsing are required in the manner set by ublox.

Now we will use u-center to change the M8N configurations.

To do this, first, we need to transmit the setting command from u-center (PC) to the M8N module.

Last time, when communicating between PC and FC, we set the baud rate to 921600bps,

but after doing this, some problems occurred when setting up the M8N, so lower the baud rate.

Let's change it from 921600bps to 9600bps.

In other words, the communication speed between PC and FC is being set to 9600bps.

Now, let's change the baud rate of FC with CubeMX.

This time, we will only change the UART6 baud rate, so we're going to use the "3-1. M8N PC Interface" folder that we worked on last time.

First, run CubeIDE.

If the project you worked on last time remains, like me, close the project first and import it again.

Right click and select Import and Existing Projects into Workspace. Select "3-1. M8N PC Interface" we worked on last time.

After importing, double-click the .ioc file to run CubeMX.

Expand the Connectivity tab and select UART6 that communicates with the PC. Change the Baud Rate to 9600.

There are no other settings to change. Then Generate Code.

After code generation, build and download.

Open the main.c file and press F11.

Exit debug mode after download. Then, open a terminal program and check the NMEA message is displayed properly when set to 9600bps.

The NMEA message should be output like this. Now, I will explain how to use u-center.

First, launch the u-center.

When you launch it, you will see a screen like this.

You may have a different position of top buttons than mine, and for these visualizations on the right. But it doesn't matter.

Just look at the image of the buttons and follow the course.

The red squares are buttons to show setting or terminal window.

And the green square on the right is the part that visualizes the received data,

and the center part is the area where a new window appears when the above buttons are pressed.

These two are the buttons to set parameters for communication with M8N.

You can set the baud rate by pressing the right arrow of the right button. Select 9600.

And you can select the COM port by pressing the arrow of the left button.

Since another terminal program is using COM4, ​​so it has to be closed it first before use it.

First, disconnect the COM port used by other programs. So COM4 is now available.

If the COM port is connected, the icon turns to green. If the communication parameter settings are correct, data will start to be received.

Also, something is starting to show up in the visualization part on the right.

After that, we will check the received data via binary console window.

You can press one of these two buttons, and select Binary Console among them.

Of these two, the left button is the binary console.

When data is received, hex (binary) data is displayed on the left and the ASCII is displayed on the right.

And comparing the text console to binary console, binary console shows both binary and ASCII, but text console shows ASCII only.

Since UBX messages are in binary form, we will use the binary console.

When checking the received data via binary console, the purple square on the left is the data offset, and it is in hex.

The green square is the data received from M8N, and it is also in hex. The ASCII of that data is displayed on the right.

As the M8N module is initially configured with NMEA protocol, as you can see, NMEA messages are being received.

Next, we will change the M8N settings, we use the Message View on the left of the two.

The right button is the Configuration View, and its all functions are included in the Message View on the left.

So we use the Message View to change the settings.

Press the left Message View of these two buttons.

Now with this, we will change the M8N settings.

First, select UBX as shown in this picture and select CFG(Config) in it.

Now NMEA is expanded, Collapse it and expand the UBX menu. There is a CFG item inside.

In the UBX protocol, each menu is the CLASS of the message, and there are several items in the CLASS. These are the message IDs.

I explained that identifies the type of messages by classes and IDs, and this is it.

That is, there are these kind of classes, and there are also these message IDs in that class.

Now we will change the settings of the M8N, so select CFG Class.

First, let's change the message protocol to the UBX protocol. Select PRT (Ports) ID.

The initial settings will be as shown on the screen. Change this setting like the green square.

Briefly, Target - UART1 means the UART channel of the M8N itself, note that it's not a UART of FC.

Protocol in can be UBX or UBX+something, but choose UBX anyway.

However, Protocol out must be set to UBX. And leave the rest, including Baudrate.

Leave UART1 as is, and change Protocol in to UBX.

And, importantly, change Protocol out to UBX as well. Leave the rest as is.

And then you have to click the Send button at the bottom to set the settings.

Look at the binary console window, NMEA messages are still being printed because I didn't press the Send button yet.

However, after clicking the Send button to change the settings to UBX protocol, no data is printed anymore.

What we set up now is to input and output data in UBX protocol at 9600bps via UART1 of M8N. That command was sent to the M8N.

But when I set it up like that, no data comes in at all and it stopped.

So the next thing to do is to choose which UBX messages to be printed.

Now, in the same class called CFG, I changed the PORT settings using PRT(Ports) ID right before,

but this time, select MSG(Messages). It is above.

If this window appears when selecting MSG, click Yes. Now, select which message among UBX messages to output.

First, select 01-02 NAV-POSLLH.

And we have to choose which interface method to output this message. Select UART1 as we set up earlier.

After making these settings, click the Send button to apply these settings. Data is not coming in because the settings have not been applied yet,

NAV-POSLLH messages start to be output after the Send button is pressed.

After clicking the Send button, a message starts to come in once every second like this.

And if you press this button at the bottom of this message view window, a new field appears at the bottom and unknown values were on it.

And if you come back to the CFG ID setting menu again, the values below are different.

What the values below means that in order to change the settings of the M8N as above, you just need to send those values to the M8N module.

Now, we are changing these settings through this u-center, but we can change them by sending the following values to M8N without u-center.

This means that if you know the exact structure of this message, you can change the M8N settings without using u-center.

So, at the end of this chapter, we will change the settings by sending these messages directly from FC to M8N without using u-center.

Anyway, we have finished setting up the message to be printed and confirmed that the message is being received in UBX protocol.

This time, I only explain how to change the settings, and I will explain what the NAV-POSLLH message is in the next video.

We set what message to print with the UBX protocol, and then the data comes in like this.

Looking at the binary console window, data is still being received, and all messages are starting with 'μb'.

The next thing to set is,, I said that we'll set the GPS output cycle as 5Hz, let's do it.

Similarly, select the RATE(Rates) ID in the CFG Class. You can find below.

The Measurement Frequency is initially set to 1Hz, in order to set to 5Hz, change the Measurement Period to 200ms.

This will change the Measurement Frequency to 5Hz. Click the Send button to apply these settings.

Now, it is before the Send button is pressed, so the output is 1Hz as the initial setting, and if you press Send button, the data will be output 5 times per second. Press it.

Data is now starting to be received at 5Hz. In this way, you can change the message output cycle.

FYI, in the UART parameter setting section, we used the baudrate as 9600bps now, but it seems that it can be used up to 921600bps.

I plan to change this later. At that time, we are going to change the settings by sending commands by writing source code without using u-center.

I will explain that in the last video of this chapter.

Up to now, we have changed some settings using u-center.

But the problem is, if you unpower the M8N and power on it back, the settings will be initialized to default.

I will unplug the power of my M8N and put it back on.

I turned it off now,.. and turned it back on. As you can see, it was back to the NMEA protocol as default setting.

Then you have to change the settings again. Let's set it up again. Set PRT and click Send button.

Then the data is not coming in. Set to output NAV-POSLLH message to UART1 in MSG ID.

Now UBX messages are received at 1Hz cycle. And change the output period to 5Hz.

Now data is output 5 times per second. Now we need to save the settings we have made so far.

To do this, there is a CFG message ID in the CFG class. Choose this.

Scroll up a bit, there is a CFG (Configuration) ID inside the CFG class.

First, select all devices in the Devices section on the right. Then select Save current configuration and click Send.

Now all these settings are stored inside the M8N. Now, if turn off and then on the power back, the settings are maintained.

When I unplugged the power and put it back in,

As I set right before, UBX messages are outputting at 5Hz.

So, you can save the settings as I do now, but there is another problem. When the M8N is unpowered for a few days and powered up, it may return to default settings.

Maybe it's because the settings are stored using coin cell battery of the M8N module in my guess.

So what we're going to do next is,

If you turn off the M8N and power up few days later, the settings return to original state, so it can be a bit cumbersome to use u-center to change the settings each time.

Therefore, we're going to change settings directly by FC without u-center. When FC sends these command data to M8N, the M8N is set immediately.

Therefore, I will explain how to write source code to set M8N in the last video of this chapter. After that, there is no need to use this u-center.

In this video, we learned how to change M8N settings using u-center,

Next time, we will analyze the UBX protocol and write source code to decode and parse UBX messages.

Then see you next time. Thank you.

```

#### video 11
- UBX message

{% include youtubePlayer.html id=page.youtubeID11 %}

```diff
In the last video, you learned how to change the output message to UBX protocol using u-center.

In this video, I will explain in more detail what the UBX protocol is.

I will only explain the concept this time, and work on the source code next time.

To recap what the UBX protocol is,

it is ublox's own communication protocol that interfaces with UART, starting with 0xb5 and 0x62, and contains GPS information.

And I mentioned that the message frame structure of the ubx protocol on the right is important.

A data frame is a unit of one piece of information in data communication.

The basic unit of communication is a byte, and the unit of information transmitted in one block or packet is called a frame.

This is the ubx message frame structure.

First, the first two bytes start with 0xB5 and 0x62 in hexadecimal, respectively,

This is a SYNC CHAR indicating the start of the frame. 0xB5 is 'μ' for micro and 0x62 is 'b' in ASCII.

The 3rd byte is a CLASS for message group classification. And the 4th byte is an ID that identifies the type of message in that class.

In other words, the CLASS is a major category, and the ID as a minor category. So these CLASS and ID represent the type of message.

The 5th and 6th bytes are combined to one piece of information, indicating the LENGTH of the data.

Note that it is the length of the PAYLOAD only. For example, if LENGTH is 10, it means that the length of the PAYLOAD is 10 bytes.

And then the PAYLOAD is the actual data of this message.

If the message is about GPS information, the informations such as latitude and longitude will be included in PAYLOAD.

Or, if it is an M8N configuration message, the configuration values ​​will be in the PAYLOAD.

And the last two bytes coming in are the CHECKSUM. Finally, one message frame ends with this CHECKSUM.

Checksum is one of the simple methods of detecting communication errors.

So, when the M8N sends data to FC in ubx protocol, it is sent according to this structure.

Similarly, when sending data such as configuration data ​​from FC to M8N, it must be sent according to this structure as well.

Since the input and output protocol were all set to ubx protocol last time, data is exchanged according to this ubx protocol.

So, we can distinguish what kind of message it is with this CLASS and ID, and decode and parse the actual information contained in the PAYLOAD.

The length of the payload may vary for each type of message. And the other data have same length.

And I said last time that the same ubx messages have the same length, but I found some messages are not. Such messages are tricky to parse.

But the message we will use in this course is easy to parse because the length is always the same.

The first 2 bytes of the UBX message are named SYNC CHAR, which means the start of a message frame.

So, if these 0xB5 and 0x62 two bytes are received consecutively, it can be seen a message frame is started.

And the last 2 bytes CHECKSUM is not a fixed value, so it is impossible to check when the message ends with this CHECKSUM.

So we need to find out with LENGTH information. But if the message length is fixed, we don't need to figure it out. So parsing is easy.

So now we know roughly what the others mean, but we still don't know exactly what a checksum is.

Checksum is one of the methods of detecting errors whether there is a problem or missing data in data communication between two devices.

How to detect an error with a normal checksum,

for example, assuming that this device_1 sends 5 bytes to device_2 instead of just sending these 5 bytes,

the result of summation all these 5 bytes is sent with one more byte at the end. In this case, overflow is ignored.

This calculated value is called a checksum.

Then the actual data is 5 bytes, but since the checksum is sent with one byte at the end, the device_1 will send a total of 6 bytes.

The device_2 will receive these 6 bytes and sum up the first 5 bytes to calculate checksum as well.

which means that device_2 also calculates checksum itself.

Finally check if the result of that calculation is equal to the last byte of received data.

If the result is the same, it means that the data was successfully received without any error.

If the result is different, the data could be discarded because there is a problem with the received data. (Data loss or incorrect etc.)

So this is called a one-byte checksum. The way to calculate the checksum is to sum up all the bytes.

Most checksums are like this.

However, each company has a different method of calculating the checksum.

Also, each manufacturers define checksums differently.

In some cases, checksums are not sent at all. However, in such a case, the data would be unreliable.

Anyone can define their own checksum calculation method.

Since we use the ubx protocol, we should know how to calculate the checksum defined by ublox.

The ubx checksum consists of checksum_a and checksum_b which has one byte each.

It is positioned at the end of a message frame. Calculating the ubx checksum may seem a bit complicated.

The first 2 bytes of the message frame are fixed start bytes,

so the rests of the frame are the checksum calculation range which include CLASS, ID, LENGTH and PAYLOAD.

The checksum calculation method is described below. This is the pseudo code from the M8N datasheet.

Pseudo code is conceptual code, not actual one.

The variables ck_a and ck_b that the checksum is to be calculated are unsigned 8-bit unsigned char variables, respectively.

And assume that all data except SYNC CHAR are stored in buffer array in byte unit.

First, the two variables ck_a and ck_b are initialized to 0, ck_a adds ck_a itself and the first byte of the buffer array and stores the result to itself,

and ck_b adds ck_b itself and the ck_a calculated right before and stores the result to itself as well.

And in the next loop, the operation is performed using the next byte of the buffer array,

and this process is repeated during this checksum calculation range. And if an overflow occurs during the calculation, it is ignored.

When all loops are finished, the two values ​​stored in ck_a and ck_b are appended to the end of the message frame and sent.

Then, after receiving the message frame, the receiver calculates ck_a and ck_b in the same way, and compares it with the last two bytes received.

It looks a little complicated, but it's actually very easy. We will also write the checksum calculation code next time.

And in the next chapter, we'll be receiving flysky's receiver data using i-bus protocol, and it has also checksum.

However, the checksum calculation method of i-bus is slightly different from that of ubx. But the concept is very same.

So, checksum is a frequently used error detection method, so I made a long explanation to help you grasp the concept.

Now, let me explain what CLASS and ID mean in ubx protocol.

M8N GPS is a single system and there is a lot of informations that this GPS module outputs.

So, it is this CLASS and ID that categorizes the information. CLASS can be said as a major category, and there are a total of 14 types of classes.

And within each CLASS, there are sub-classifications of various IDs. Among them, the message CLASS we will use is NAV that is the first one.

NAV class includes Navigation Results Messages that contains information such as latitude, longitude, speed, time and etc.

In this class, there are message types with various IDs. This is explained in the next page.

Since this class is about GPS information, the direction of communication will be sent from M8N to FC.

And if you look at the other classes,

Last time we set the protocol to the ubx and changed the output cycle, etc. such configuration commands are also defined as a ubx messages.

If you look here, it is defined in the CFG class. I'll explain this a little later.

Other than that, there are various messages. You have to go through the datasheet to check them all.

However, because there are so many types of messages, it takes a lot of time to see them all,

so just check what information you need, and figure out how to get that information.

I don't think you need to see all of this.

Anyway, we need latitude and longitude information, so we just need to check how to get it.

Now, in this NAV class, there are messages with so many IDs.

Among them, we sould find out which message contains the latitude and longitude information we need.

The message type we will use in this course is POSLLH ID message in NAV CLASS. This message contains position information as an ellipsoid,

and it is the simplest kind of message that outputs latitude and longitude. And besides this, there is another message that contains position information in the NAV class.

If you look at the content of the PVT message just below, it sends out more information, including position information.

It also contains the current date and time. And, of course, the more information it contains, the more amount of the data will be.

And some message gives information such as satellite connection status.

But if you want to decode and parse all these messages, the code will be very complicated.

In this course, I'm only going to show you how to parse a POSLLH message,

so you can get latitude, longitude and altitude information. If you need more informations, please write your own code by applying this course.

And 0x01 and 0x02 mean the number of CLASS and ID respectively.

If you look at the M8N manual, it is explained what information this POSLLH message contains.

First, the description of the POSLLH message is about Geodetic Position Solution.

This can be seen as a message about position information as an ellipsoid.

Below that, the protocol version is described, and I briefly explained the message that is output when the M8N module is powered on,

At that time the protocol version was 15.00. That is M8 protocol version 15.

Some messages are supported from version 19 and later of this protocol.

Such messages are not supported by the M8N module we are using now.

And if you look at the message structure below, it starts with SYNC CHAR 0xB5 0x62,

And the CLASS and ID of the message are 0x01 and 0x02.

Then, over 2 bytes, the decimal number 28 comes in little-endian.

where the number 28 means the length of the PAYLOAD part after this. And after that, the PAYLOAD will come in 28 bytes length.

And after that, finally the last 2 bytes of the checksum come in and the message frame ends.

Now PAYLOAD part which is the most important are explained in the table on the right.

A total of 28 bytes of payload, the first 4 bytes are information about iTOW. This is presumably information about time. The unit is milliseconds.

And if you look at the description, it says GPS time of week.

Please visit the website below for this detailed time calculation method.

And the number format is U4, where U means an unsigned integer and the number 4 means 4 bytes.

So U4 stands for 4-byte unsigned integer.(uint32)

After that, longitude information starts to come out. This is the information we need from here.

The number format is I4, where I represents a signed integer and number 4 also means 4 bytes.

So I4 stands for 4-byte signed integer.(int32)

The important thing is that the unit of longitude and latitude is degree.

Usually longitude and latitude are expressed in real numbers, but in this case, note that they are integers multiplied by 10 to the 7th power.

So it needs to be divided by 10 to the 7th power after receiving this data to get the actual longitude and latitude.

So that's what scaling means. The next 4 bytes are latitude information.

Next, the altitude is information about the altitude as an ellipsoid, also in the form of a 4-byte signed integer, and the unit is mm.

Below that, hMSL is an altitude information based on mean sea level. Also, the unit is mm.

Then hAcc and vAcc is estimate of the accuracy in the horizontal and vertical directions, respectively, in the form of a 4-byte unsigned integer in mm unit.

If you want to know the exact meaning, please search on Google.

So, this is the information included in the POSLLH message.

It has the latitude and longitude information we need. And it also has altitude information.

Since we measure barometric altitude with a barometer, it would be good to compare the barometric altitude with the GPS altitude.

You can compare it by storing the data together.

This is the POSLLH message received. This is the output when the GPS found the position.(GPS locked)

Among them, I tried decoding/parsing this last message.

This is the last message.

First of all, these numbers are all in hex and the first two bytes are 0xB5 0x62 which are the Sync char.

And the next one byte 0x01 means NAV CLASS, and the next one byte 0x02 means POSLLH ID.

Then, two bytes are combined to represent a LENGTH information.

The important thing is that 0x1C 0x00 was received and this is a little endian byte ordering.

Little-endian is when the least significant bytes are stored before the more significant bytes,

So it's actually 0x001C instead of 0x1C00 which is 28 in decimal.

Any data received after that is also in little endian byte order.

And after that, the actual payload data begins. The first 4 bytes that came in first are the iTOW information.

It's also in little endian, so it should be interpreted it backwards in the order it was received.

In other words, it is not 0x78021403, but 0x03140278.

Converting this to decimal gives 51643000. Note that this is a 4-byte unsigned integer.

The next 4 bytes represent longitude information in little endian. But this is a signed 4-byte format.

Since it is in little endian, if it is expressed in reverse order, it becomes 0x4BA79102, and it is 1269272834 in decimal.

Since the longitude and latitude had been multiplied by 10 to the 7th power, the we must divide it by 10 to the 7th power.

That would be 126.9272834 longitude.

Likewise, latitude information can be represented in the same way.

Converting 0x166285CC to decimal and dividing by 10 to the 7th power gives 37.5555532 latitude.

When I displayed that latitude and longitude on the map, the location near my office was well marked.

And then signed 4 bytes of altitude information as an ellipsoid comes in. It is 13881 in decimal. However, this is multiplied nothing.(No scaling)

The next information is altitude at mean sea level. This 0xFFFFEE95 is in the form of a signed 4-byte integer.(I4)

If the most significant bit of signed integer is 1, it represents a negative number and is in 2's complement.

So, converting this number to decimal gives the value -4459.

also calculated hAcc and vACC, and gives 41801 and 256601 in decimal.

So, so far we have decoded/parsed the PAYLOAD of POSLLH message, now let's calculate the checksum.

This is the same data set right before.

In this data set, the range where the checksum is to be calculated is marked. Excluding the first two bytes and the last two bytes.

So we just need to calculate the checksum of the center marked range. We need to write this pseudo code in C language.

And as you can see, pseudo code is very similar to C language, so it is easy to write in C language.

This is C code for checksum calculation.

The data set of the checksum calculation range is stored in an array.

And two variables to calculate the checksum are each declared as unsigned char and initialized to 0.

And the checksum calculation is done inside the for loop, and this code is real C code from the pseudo code.

After execute this code,

I got this result.

The result is 0x20(CK_A) and 0xF2(CK_B) respectively. And they are consistent with the last two bytes of received data.

Therefore, this data can be regarded that is reliable.

So far, we have received POSLLH messages, decoded/parsed it, and finally calculated the checksum.

so now we are going to store these data into separate variables.

At this time, the data management will be easier if define a structure to store each information of POSLLH message.

Next time we'll write the reception and parsing code and also define this structure.

As you can see, there are many things to get the GPS data. That's why the contents about GPS are organized into a separate chapter.

In fact, when receiving sensor data in the chapter 2, these steps were necessary too.

However, if I explain all in this way, this course can be complicated and boring, so I explained using library code to check the sensor value in the chapter 2.

If you want to become a true engineer, you must understand all of these processes.

And you have to know these concepts so that you can change the output protocol, configure the settings, and analyze the data as you want.

Even now, it may not be fun, but I thought I had to explain these processes at least one time.

Now, let's simply check how the POSLLH message is different when the GPS is not locked.(No position found)

This is the message received when the GPS is not locked. As you can see, there are a lot of 0x00 in the received data.

But the problem is, if calculate the checksum with this data, it is correct even when the GPS is not locked

The latitude and longitude information is invalid but the checksum is correct. Because the message keeps the ubx protocol correctly.

it's not possible to figure out whether the GPS is locked or not by comparing the checksum.

Therefore, if you directly do waypoint flight with this information, the drone may fly away to a strange position.

This is very dangerous, so you should be very careful.

To prevent this, if the latitude and longitude information is 0, you'll have to either turn off waypoint control or keep the drone its position.

Be sure to put exception handling code like this. This is very important stuff.

Last time, we changed the message protocol to ubx protocol using u-center and changed many other settings.

As I said, we can change these configurations without u-center as well.

To do this, we just need to send setting commands to M8N according to the ubx protocol.

Among the classes, there is a CFG class, and we can change configurations using it. Let me explain about that.

If you look at the description, the CFG class is about configuration messages like baud rate setting, etc.

Also, since it is an M8N setting command, the data direction is from FC to M8N.

The number of the CFG class is 0x06, and there are several sub messages in it. Among them, the ones we set last time were four messages(PRT, MSG, RATE, CFG).

We set the output protocol to UBX(default NMEA) with UART interface with PRT message.

also set to output a POSLLH message with the MSG message, changed the GPS output cycle to 5Hz(default 1Hz) with the RATE message,

And finally, saved previous settings with the CFG message.

I will briefly explain how to set these settings by FC programming without using u-center.

First of all, if you look at the description of PRT message of CFG class in the datasheet, you can see these tables.

In the table of payload contents on the right, there are Number Formats that start with X such as X2 or X4.

which means that each bit has a specific meaning. So you have to check everything in the datasheet to see what those bits mean.

It will take a lot of time to check it all out. Therefore, we will use an easy way.

Last time, when setting M8N using u-center, I mentioned that the command message for such setting is represented below.

If just send the data in the blue rectangle to the M8N and the parameters in the green rectangle above will be set.

If using this way, we can change configurations without the datasheet. So it is very convenient.

And this message also follows the message structure of UBX protocol.

Looking at the configuration message, you may understand SYNC CHAR, CLASS, ID, LENGTH and CHECKSUM but it is difficult to understand the PAYLOAD

To understand this, you need to read the datasheet to see what each bit means.

However, since u-center automatically generates the data set as we set the configurations, I don't think it's necessary to do that.

It's kind of similar to how we use CubeMX to automatically generate STM32 initialization code.

Anyway, it is important that if we send the above data set to M8N, the parameters is set up as shown in the table below.

And since it follows the UBX protocol, the checksum calculation must be done in the same way.

However, checksum has been already included in the data set generated by u-center. And header information as well.

So we can just send this data as is.

There is no need for us to calculate and append the checksum ourselves. u-center automatically calculates and generates the entire message.

So, when this data set is sent to the M8N module, the M8N internally calculates and checks whether this checksum is correct,

and if it is correct, it sets the internal configurations according to this setting values.

We set M8N to output POSLLH message via UART1 with MSG message last time,

and in order to configure the setting, just need to send the data set below as it is to the M8N module.

Then, to change the GPS output cycle to 5Hz, we can send the data below to M8N as it is as well.

The same goes for saving settings.

So, to configure the settings of M8N, first make these settings with u-center, check the data set of configuration message,

and then transmit the data set to the M8N as it is through FC UART.

Transmitting the configuration commands through UART is very easy so writing source code is simple.

Now, to recap today's video, the reason for using GPS is for waypoint control.

To do that, we need to receive data from GPS and find out latitude and longitude.

However, it was difficult to write parsing code for NMEA messages, so we changed it to the ubx protocol to make it easier,

and then the data was sent using the communication protocol defined by ublox itself. Since we have to use the data received from M8N, we have to follow the ubx protocol,

so I explained how to receive, decode/parse, and classify the desired information.

So, next time, we will write all code for receiving data from M8N, parsing it, calculating the checksum, and comparing the checksum to figure out the data is reliable.

Then see you next time. Thank you.

```


#### video 12
- UBX message parsing

{% include youtubePlayer.html id=page.youtubeID12 %}

```diff
I 've provided a detailed explanation of the structure of the UBX message frame last time.

In this lecture, we will cover receiving POSLLH from a UBX message and parsing to variables by coding.

So, this can be a long journey including writing source code.

However, the source code will be simple actually. I will put more time to explain the principles of the source code.

If you thoroughly understand the principles, you can also apply them to FS-iA6B receiver data parsing in the next chapter.

So, this will be a very important lecture!

We need to figure out the UBX message structure first for parsing them, so let's review the contents I gave you last time briefly.

The first 2 bytes must start with a preamble of 0xB5 0x62.(SYNC CHAR)

Then 3rd byte for CLASS, 4th byte for ID information of the CLASS, 5th and 6th bytes for the information of PAYLOAD length,

The actual data(PAYLOAD) begins from 7th byte as long as the PAYLOAD length information.

The last 2 bytes for CK_A and CK_B(Checksum A&B) and the first frame is finished.

We will use "POSLLH" message in "NAV" class among various messages from M8N.

The message structure is like this.

The header starts with 0xB5 and 0x62 as we just did, Class is 01, ID is 02 and length is 2-bytes equals to 28.

And then 28 bytes of PAYLOAD which is actual information. The contents of the payload are described in the table.

4 Bytes for each of iTOW, Longitude, Latitude, height and accuracy. Total 28-Bytes are coming in.

And lastly, 2 bytes of Checksum and message finished.

So, a total length of the POSLLH message frame is 36 bytes including PAYLOAD.

We analyzed the message structure and calculated checksum of the received message last time.

This is the POSLLH message that came from GPS when it's fixed, and we got the results here.

Now we can see and analyze the received message, but the more important thing is to save them to seperate variables we want and use for flight control.

We need to learn how to receive the message in a temporary buffer, checking it, and combine data separated in bytes into an actual information.

We usually manage this with a struct like this, We will define a struct including CLASS, ID, Length, and PAYLOAD information all together.

Look at this terminal here.

These messages are POSHLL messages received in UBX protocol and finished checksum check and parsing.

These are the codes below.

When a message is received in a frame, it comes into the if statement and verifies checksum.

And the message received in bytes parsed and stored to the struct variables if the checksum is correct.

And the members of the struct is being printed. The code below is working now.

Let's check whether the parsing code is well functioning by marking a point on a map with longitude and latitude information.

This is the map program I am using, and I will mark the last information on it.

Putting 37.5556176 for latitude and 126.9277228 for longitude, we could see the position on the map. It's Hongdae, Seoul, South Korea where I am.

and it is very close to my office here. So, data receiving, parsing, and storing are completed without any issue.

We will receive a total of 36 bytes size of POSLLH message including SYNC CHAR and CHECKSUM.

Let's call the 1st-byte "Byte 0".

The process of message receiving and storing is,

Check the first 2 bytes are 0xB5 and 0x62, and if correct, store all other data including 2 bytes of SYNC CHAR to a temporary buffer.

After that, once 36-bytes of a message frame are received, parse and store the data to a struct if checksum is correct.

Please be aware of these three premises here. 1. Frames must start with a fixed value(SYNC CHAR).

2. The length of a frame(message) should be fixed. 3. We use a receive interrupt and it is requested every 1 byte.

The basic concept of receiving a message frame is count the order of received byte. And counting starts from 0.

When the count is 0, increment the count by 1 if the received data is 0xB5, or keep the count if it is not.

Then, when the count is 1, increment by 1 again if the received data is 0x62, or clear the count to "0" if it is not 0x62.

It means that a message frame started if the first two bytes are correct, so store data into temp buffer whenever each byte received from the 3rd byte.

If the count finally becomes 35, store the received byte to a temp buffer and reset the count to "0" to prepare to receive next message frame.

Now we just completed receiving one message frame. So we should calculate checksum with the temp buffer who is storing entire message frame.

And compare the checksum and the last 2 bytes CK_A and CK_B of the received message frame.

If those are correct, there is no issue on the received data. So we can parse and store data to variables we want.

It is a simple concept but not easy to write the code for beginners. I will give you useful tips soon.

Now the next step is message parsing. There are also 3 premises for parsing.

1. All data should be stored into a temp buffer in the designated orders.

2. All data should be little-endian or big-endian. 3. Data in Floating-point should be expressed 32 bit or 64 bit as defined in IEEE-754.

But we don't need to consider it because float type variable is expressed in IEEE-754. If you want to know more about Floating-point bit expression, just google it.

For message parsing, we will combine data into one meaningful one and store it to the struct variable.

This includes reading data from the temporary buffer as the same size of data to each struct member variable, and process bitwise operation.

I recommend using a pointer if there are data in a floating-point format in PAYLOAD. Because it is impossible to process bitwise operations for floating point variable.

But the POSLLH message has no floating point data.

For example, longitude and latitude information is in floating-points. But those are expressed in integer with 10 to the power of 7 multiplied.

Finally, we are ready to write source code now. I will give you more explanations while writing source code.

Duplicate 3-1. M8N PC Interface folder, and change the folder name to 3-4. UBX Parsing.

Copy the name and change the name of .ioc file in the folder.

Also delete Debug folder and .elf file. And then launch cubeIDE.

Delete the former project,

and import 3-4. UBX Parsing folder which we just duplicated.

Import completed. Double click .ioc file to run CubeMX.

You will see this alert if you updated the cubeIDE version, then just click migrate.

This is CubeMX launched.

There is nothing to do with CubeMX because we have initialized UART4 for M8N already. Let's open main.c file for source code.

Reviewing the progress we made last time,

We have initialized UART4 for interfacing with GPS, and also initialized UART5 for interfacing with PC for debug purpose.

All are using rx interrupt which requests interrupt every 1 byte received.

The interrupt service routine(ISR) will proceed once an interrupt is requested. It is defined stm32f4xx_it.c file.

If you scroll down, you can see the definition for UART4_IRQHandler() and UART6_IRQHandler() here.

UART4_IRQHandler() is requested when data received from M8N, And we wrote the code for transmitting the received data to UART6 PC.

Also, we wrote code to transmit data received from PC to UART4 M8N in UART6_IRQHandler().

UART4_IRQHandler() is called means that it received data from GPS, so we will declare a temp buffer and save the received data in it.

So let's declare a buffer array to store M8N data as a global variable.

Scroll to the top, and find global variables we made last time.

The type is uint8_t and the variable name is m8n_rx_buf.

The array size of 36 bytes which is the same size as 1 message frame. uint8_t m8n_rx_buf[36];

And make one more flag variable which shows receiving completed.

Declare a flag variable and initialize to 0. uint8_t m8n _rx_cplt_flag = 0; (cplt.= complete)

We declared these variables in global variables to access in the other files like main.c, too.

Let's move to the bottom. We will store received data to a temp buffer per byte within the interrupt function.

First, in the ISR function, we will check whether the message frame starts with 0xB5 and 0x62,

and if correct, save the next received data to buffer array in order.

And we will define each function for verifying checksum and parsing data separately.

Now let's check SYNC CHAR and store received data to a buffer array.

I explained that we will count order of the received byte for a message frame reception. So, we need a variable for counting.

Delare "unsigned char cnt = 0;" between comment block and it is a local variable. Be careful that local variable is initialized whenever the function is called.

Therefore, must add "static" keyword to prevent initialization. "static" as a local variable means to keep the value whenever the function is called.

Complete "static unsigned char cnt = 0;"

Then we will store received data to a temp buffer using this count variable.

First, the code works according to the value in (cnt). Write "switch(cnt)",

The static variable "cnt" starts with 0 when the first time the ISR is called. So write "case 0:" in the switch-case statement.

And check if the received data is 0xB5 or not in the case 0.

The received data has been stored in "uart4_rx_data". So write "if(uart4_rx_data == 0xB5)" to check whether the data is 0xB5,

And if correct, store the data to the temp buffer. We have declared the buffer array "uint8_t m8n_rx_buf[36];" before.

Store the received data to the first element(index 0) of the buffer array. But "cnt" is 0 now.

So write "m8n_rx_buf[cnt] = uart4_rx_data;"

Then increase the count variable by 1. Write "cnt++;"

This is the end of "case 0".

Let's review what we just did. We checked whether the first received data is 0xB5,

If true, stored the data to "m8n_rx_buf[0]" and increase "cnt" by 1.

Or if false, the code inside the if-statement is not executed. So the "cnt" is kept as 0 and the ISR exits.

Now move to "case 1". Case 1 means that the next received data is 0x62 after the last data is 0xB5 in case 0.

We check whether the next data is 0x62 in case 1, and if true, repeat the same process in case 0.

Or if false, initialize "cnt" to "0" this time. We didn't change cnt to 0 in case 0 because it is already 0.

And here we start again from the first stage if the second data is not 0x62. Now case 1 is completed.

If both are true, it means that we have received 0xB5 and 0x62 well.

We will receive CLASS, ID, LENGTH, and PAYLOAD information from case 2.

We will not check them here but store them to a temp buffer right away.

We just store the received data to buffer array sequentially from case 2 to case 34 which is the buffer array size - 1

We can use "default" keyword for convenience not use from case 2 to case 34 each. Write "default:" , and it works when no case matches.

In this case, store data to temp buffer array one by one without checking. And increase cnt by 1.

Finally, we will have cnt 35 which is the last byte of a total of 36 bytes.

Store the received byte to the last element of the temp buffer array, and clear the cnt to 0.

And be ready to check 0xB5 and 0x62 from the beginning. Add "break" here,

So this code is a message frame reception code to check SYNC CHAR 0xB5 and 0x62, and if correct, store all 36 bytes data in a temp buffer array.

Once all data is received, set flag variable as "m8n_rx_cplt_flag = 1;" to indicate that a message frame reception is complete.

And normally "default" is at the end of switch-case statement. Let's move it to the bottom.

We just completed a code to receive UBX message protocol. Pause and write code same as mine.

We will check whether the code is working properly at main.c.

Scroll up and see these 2 global variables which we will use at main.c, too.

Let's fix a simple misspelling here, it is "cplt" not "clpt", sorry.

And copy them and come to main.c. Scroll up and find "extern" variable declaration here.

Paste and put "extern" keyword as well and delete initializer here,

Scroll down and find while loop.

In the while loop, let's blink an LED if the UBX message frame is received well.

Keep the comment remains we made before like this.

The flag variable becomes 1 if the message frame is received well. So we should check the value of the flag is whether 1 or not.

Write "if(m8n_rx_cplt_flag == 1)" and let's blink an LED in this if statement.

The first thing have to do is to clear flag to 0. And toggle LED2 which is connected to PC2 among PC0, PC1 and PC2.

Write "LL_GPIO_Toggle" and Ctrl+space to autocomplete.

The first argument is "GPIOC" and second one is "LL_GPIO_PIN_2".

Now we are ready to check! Build this and click the second one on the pop-up window,

Click OK to proceed.

Ignore this message because we have not changed any configurations at CubeMX.

Yes to all others,

Build and download completed.

For your reference, I am using version 1.0.2 now after updating from version 1.0.0. Versions do not make any difference in my lecture. Don't worry.

Let's see here, the LED is blinking and it means that the code we made is operating properly.

If the LED doesn't work, check the data using Binary Console on u-center first. Maybe you are receiving NMEA message not UBX.

This M8N module sometimes automatically initializes its setting if the power is off for a few days.

If you have the same issue, you need to re-do the UBX protocol settings by revisiting the section 3-2.

The messages are printed on PC because we set the code for sending data from UART4 to UART6 and UART6 to UART4 already.

These 2 codes are just for checking in the development stage and those will be deleted later.

You can change M8N configuration using u-center now without code modification.

And now we checked that the code we wrote is working.

Blinking LED means that we have received 36 bytes of data starting with 0xB5 and 0x62.

But we are not sure if the data has no issue yet, because we haven't checked the CHECKSUM yet.

We only checked these 2 SYNC CHAR.

So, now we're going to do is to check reliability of the received data by checking the CHECKSUM.

We're creating a new file and defining a function to calculate and verify checksum

Before we proceed, GPS is not fixed since we are indoors although LED is blinking. But UBX message is coming in proper UBX protocol.

We used open-source libraries from the github in Chapter 2. Sensor Interface. But this time we will create a library file and define functions by ourselves.

Let's create a new file first. Right-click source folder. (Src)

Choose "New" and click "Source File". Put "M8N.c" for the file name.

And "Finish" to create a file. Right-click "Include(Inc)" folder and choose "File".

And name it "M8N.h".

It's added here.

We will define separate functions for checksum checking and data parsing in M8N.c source file.

And declare a prototype of the functions and define a struct to store POSLLH data in M8N.h header file.

We will define a function to verify checksum from now on. Define the input and output of the function first and then the body.

Name the function as "M8N_UBX_CHKSUM_Check". A parameter of this function is the temp buffer array that stored the received data.

And the function calculates and verifies CHECKSUM and returns 1 if CHECKSUM matches or returns 0 if not.

We should use a pointer for the parameter to point the temp buffer array. So, write the first parameter "unsigned char* data".

The second parameter indicates the size of the temp buffer array.

Write the second parameter "unsigned char len" from length.

This function returns 1 or 0 according to the checksum verification. So the return type can be "unsigned char".

Now we just completed the prototype definition and move to the function body definition.

Let's declare two variables to calculate and store CHECKSUM A and B.

Declare "unsigned char CK_A = 0;". And declare one more "unsigned char CK_B = 0;"

Be careful that both variables must be initialized to 0.

Now create a loop for CHECKSUM calculation.

Write up to " for(int i " and let's think about which number we should take as initial value of i.

Hint, the pointer "data" points an address of the first element of temp buffer array. And all 36 bytes of data including SYNC CHAR 2 bytes are stored to the array.

And you remember that SYNC CHAR is not in a range of CHECKSUM calculation. So, the index i must start from the 3rd byte.

The index i starts with 2 which is an index for the 3rd byte.

And let's think about the number of iterations.

You also remember that the last two bytes of the temp buffer are checksum bytes. And they are not in a range of CHECKSUM calculation as well.

So, the loop must iterates until length-2. Write "for(int i=2;i<len-2;i++)"

Then we do checksum calculation in the loop.

CK_A is CK_A itself plus the byte value of the i-th element of temp buffer. Write "CK_A = CK_A + data[i];"

And CK_B is CK_B itself plus CK_A. Write "CK_B = CK_B + CK_A;"

Please revisit the last video to check CHECKSUM calculation method. We have completed CHECKSUM calculation code here.

And let's check whether the result is the same with the 35th and 36th bytes of the temp buffer array.

This function returns 1 if both CK_A and CK_B match with data[34] and data[35]. And returns 0 if one of them does not match.

Compare CK_A to data[34]. 34 means 2nd byte from back of 36 bytes buffer array. So data[34] can be replaced data[len-2] here.

Similarly, compare CK_B to data[35]. 35 means the last byte of 36 bytes buffer array. So data[35] can be replaced data[len-1] here as well.

The result will be "1" if both are true, and "0" if any of them is not true.

We just completed the function for CHECKSUM verification.

Let's verify the CHECKSUM with this function now.

Put "#include M8N.h" at the top of M8N.c,

Copy the prototype of this function and come to M8N.h.

Declare the function prototype like this and save both file.

And come back to main.c and include M8N.h header file at the top. Put "#include "M8N.h".

And now we can call the function defined in M8N.h.

Copy the function name,

Come down to the if statement where checks the m8n_rx_cplt_flag. Open a new if and call this function within the condition check statement.

The first argument should be the starting address of the buffer array. Let's pass the address of the first element of the buffer array.

Write up to "if(M8N_UBX_CHKSUM_Check(&m8n_rx_data[0], )"

The size of this temp buffer array is 36 bytes. So pass 36 to the second argument.

The CHECKSUMs are correct if the return value is 1. So let's move the LED toggle code to the if body.

And we will find out whether it works properly. Build the project.

Download completed. Terminate debug mode.

As we can see, the blue LED is blinking as before.

It means that the CHECKSUM verification is well done.

The LED is toggling when a full message frame is received well and the CHECKSUM is correct.

So the CHECKSUM verification code is well functioning.

The next step is to decode/parse the received data and store to the struct member variables.

First of all, we need to define a struct. Move to "M8N.h" file.

Please refer to struct definition in the course material. I already made one so I will simply copy it here.

I recommend you pause this video for a while and write your code first same as mine.

One thing to explain is that I put "typedef" keyword in the actual code.

The advantage of "typedef" with struct is that the we can omit "struct" keyword when declaring a struct variable.

I.e. we can use "M8N_UBX_NAV_POSLLH" instead of "struct _M8N_UBX_NAV_POSLLH" when declare a struct variable.

Now that we have defined a structure, let's declare a struct variable in M8N.c.

Copy "M8N_UBX_NAV_POSLLH" here, and go to M8N.c file.

Paste it here and declare a struct variable. Name the variable "POSLLH".

Copy this and go back to M8N.h file.

Paste it here and put "extern". This process is to access the struct variable in main.c.

And come back to M8N.c. Lastly, we will define a function to parse to the struct variable.

Name the function "M8N_UBX_NAV_POSLLH_Parsing".

It's good to make intuitive names for functions or variables. This will help you to know what this is about right away.

Back to the definition, this function decodes/parses the data stored in the buffer array into each member of the struct.

It need 2 parameters.

One is a pointer to a temp buffer array and another one is also pointer to a struct variable.

The first parameter type can be "unsigned char*" pointing to the temp buffer array. Write "unsigned char* data" for the first parameter.

And the second parameter type can be "M8N_UBX_NAV_POSLLH*" to point struct variable.

Name the pointer "posllh" Write "M8N_UBX_NAV_POSLLH* posllh" for the second parameter.

In this funtion,

data is read from the temp buffer array pointed by "*data" as much as the byte size of each struct member,

if necessary, bitwise operation is performed, and combined into one piece of information and stored in the each struct member.

It looks so complicated but this will be much simpler when you see the code.

We will store certain data to "posllh->CLASS" which is first member of the M8N_UBX_NAV_POSLLH struct.

The "certain data" is from temp buffer array.

Keep in mind that this buffer array has the 36 bytes entire message frame including SYNC CHAR and CHECKSUM.

So CLASS information has been stored from index 2, skipping 2 bytes for SYNC CHAR(0 and 1) from the 36 bytes.

Therefore, write "posllh->CLASS = data[2];".

I put only one byte data "data[2]" because the CLASS is 1 byte unsigned char.

Likewise, Put "data[3]" for ID which is also 1 byte as well. Write "posllh->ID = data[3];"

And POSLLH length has two bytes size because it's unsigned short. So data[4] and data[5] have to be combined to one information.

You remember that I emphasized the byte ordering early. It is little endian format.

It means that the least significant byte(LSB) is stored lower address and the most significant byte(MSB) is stored upper address of the temp buffer array.

Therefore, it shifts the MSB of the upper address left by 8 bits. Combine with LSB by OR operation.

Write "posllh->LENGTH = data[4] | data[5]<<8;" We can apply this process to all others.

I will just copy and paste the code I already wrote.

Again, pause the video for a while and write your code first. And must be careful that each array index must be correct.

Also, you can see that I defined 2 more double format variables on struct definition. You already know the CLASS, ID, Length, and PAYLOAD, but why others are needed?

You remember latitude and longitude are coming in 4 bytes integer format multiplied by 10^7.

But sometimes it needs to be converted to floating-point for flight control depends on the controller algorithm. But not essential.

We need floating-point variables to store the actual longitude and latitude. And as you can see they are not "float" but "double" type.

To get the actual value, we should divide the value of lon and lat by 10^7. But the "float" type cannot represent the exact value.

"float" type is 4 byte size and it has single precision so float type cannot accurately represent up to 7 decimal places.

You can see the unprecise value with error if you store the actual lon and lat to the float variable.

So, that's why I took double format for precise representation.

Then let's store the actual longitude and latitude to them. Write "posllh->lon_f64 = posllh->lon / 10000000.;"

And make sure that you have a dot(.) at the end of the number. If you forget the dot, the result becomes an integer.

It's because an integer divided by an integer. Therefore you will lose the Floating-point part.

Also, do the same process to longitude. Write "posllh->lat_f64 = posllh->lat / 10000000.;"

I will comment out this because we will not use this here.

And it takes more time to process floating-point operation than integer one. Also, the STM32F4 has a single precision FPU(Floating-Point Unit) inside.

This makes floating-point operation faster for the single precision format (float) with its hardware processing.

But not for the double precision format. The double format is processed in software, and it takes a much longer time.

So I recommend you use float for floating-point operation.

Some high-end model such as STM32F7 or H7 has double precision FPU inside so double format can be processed in hardware.

Anyways, we are using STM32F4, it is better to operate floating-point in float format.

This is the end of function definition! It does not need return value because this is a function just to parse and store.

So put the return type "void" here, and copy function prototype and go to M8N.h.

And declare the function prototype here.

Now we will process parsing with this function. Copy the function name.

Go to main.c and call the function here.

It has 2 parameters, and the first one is a pointer to point a temp buffer array. So pass "&m8n_rx_buf[0]".

The second one is a struct pointer to point a posllh struct. So pass "&posllh" which is an the struct variable.

Complete "M8N_UBX_POSLLH_Parsing(&m8n_rx_buf[0], &posllh);"

This function is now can parse data in a temp buffer array and store them to each of these struct members.

Let's check the result by printing each member. We will check latitude, longitude, and height among all information with "printf".

Put "LAT: %ld". should use "%ld" because it is in 4 bytes integer format.

And add '\t' for tab offset. Add the same thing to longitude and height.

And add new line '\n' for line break. And variables to print are "posllh.lat", "posllh.lon" and "posllh.height".

Complete "printf("%ld\t%ld\t%ld\n", posllh.lat, posllh.lon, posllh.height);"

Scroll up to the top before building, in _write() function, we gave some delays because I was confused to HAL driver.

This is not a good way. So let's modify it a bit. Delete delay and add this code here.

Please pause the video and write this code same as mine. "while(!LL_USART_IsActiveFlag_TXE(USART6));"

This is to check whether the tx buffer is empty before transmitting data to UART.

I recommend using this because it is better than the delay method.

Also, change LENGTH to length in M8N.c because we have defined it in lower case.

And we will block some codes for printing information we need only.

Go to stm32f4xx_it.c file and scroll down to UART4_IRQHander(). This is a code to send data from M8N GPS to PC.

Comment out this code to prevent printing ubx message from M8N. And press F11 to build.

Download completed and run it. Launch any terminal software.

Open and print in ASCII. We have all "0" for longitude, latitude, and height.

This is because the GPS is indoors. I will let it out and wait until GPS fixes its postition.

(Few minutes later...)

Now GPS is fixed and we have all information correctly. This is not a height in barometer but a height as an ellipsoid calculated by GPS.

Anyway, let's check by printing on google map.

I will print the location on the map software that I made for test.(Gmap .net for C#) Note that both lon and lat are multiplied by 10^7.

So divide them by 10^7,

and here. And check the location on the map.

The result is marked (+) and my office is across the road. It seems that it is not that accurate today.

Anyway, POSLLH message receiving, Checking CHECKSUM, and parsing are working well.

Now data looks good.

But it is helpful to simulate with the wrong SYNC CHAR or CHECKSUM and see how the codes are working.

Create an imaginary data set and check the code operation one by one. You can understand the operation easier in this way.

However, the code we wrote today is working even if the received data has problem.

Also, we saw a case that we had all 0 for latitude and longitude when the GPS is not fixed.

But sometimes it was not 0 coming in even though the GPS is not fixed.

It can be dangerous if drone is in a waypoint flight mode, so make sure that you have exception handling first.

The last two information of POSLLH message are information about accuracy.

So I suggest checking the value in hAcc and vAcc.

And I have explained only POSLLH message in this course. It is the simplest message including latitude, longitude, and height information.

There is another message format called PVT and gives more information including lon and lat and height.

I also recommend checking PVT message, too. Though I will not cover them in my lecture, you can make it if you apply what we have learned today.

Further simulation and application will help you to understand and study deeper.

I measured the processing time taken to CHECKSUM check and parse through functions.

The result is 7.7 μs for CHECKSUM and 3.2μs for parsing. Total 11μs.

You might notice that data receive time is not included, but no CPU clock is needed here because we have used rx interrupt.

However, CPU clock is consumed when the IRQHandler is in execution.

But we can ignore the execution time of UART4_IRQHandler() because only simple operations are done in it.

So it is not included in this time line.

Total 186us processing time was taken including chapter 2 and today's process.

It's just 1/5 of the 1000us. And there are functions not operating every period.

Only this ICM-20602 sensor works at 1 kHz every period and the other functions have slower periods.

My calculation is based on the case of all functions are working in a single cycle.

This is all I have prepared for today. I cannot say that the source code we made are the only correct answer.

There could be faster or more memory-effective codes exist.

In a word, there is no correct answer for codes. You might be able to make a better one if you have experienced various projects.

In this lecture, I am focusing more on a better understanding of concepts and fundamentals than efficiency.

So, maybe my code is not effective one. To make it more effective, the structure of the code becomes more complicated.

So I recommend you focus on understanding the concept and make the process we went through to your own knowledge.

Of course, I can give you complicated explanations to make more efficient code. But it does not have dramatic impacts like 10~20 time improvement or something.

Let's finish this course. Do you remember when you turned off and on to M8N module, then settings are initialized?

And we re-set by using u-center and it is a huge inconvenience.

So, in the next video, we will make code to send setting values directly to M8N from FC without using u-center.

This will help you save time and energy. All you need is just to connect GPS to FC and power up so that FC changes M8N settings by itself.

It took a long time today because the content was very very important. Thank you for your concentration and see you next time.

```


#### video 12
- ubs data parsing

{% include youtubePlayer.html id=page.youtubeID %}

```diff
I 've provided a detailed explanation of the structure of the UBX message frame last time.

In this lecture, we will cover receiving POSLLH from a UBX message and parsing to variables by coding.

So, this can be a long journey including writing source code.

However, the source code will be simple actually. I will put more time to explain the principles of the source code.

If you thoroughly understand the principles, you can also apply them to FS-iA6B receiver data parsing in the next chapter.

So, this will be a very important lecture!

We need to figure out the UBX message structure first for parsing them, so let's review the contents I gave you last time briefly.

The first 2 bytes must start with a preamble of 0xB5 0x62.(SYNC CHAR)

Then 3rd byte for CLASS, 4th byte for ID information of the CLASS, 5th and 6th bytes for the information of PAYLOAD length,

The actual data(PAYLOAD) begins from 7th byte as long as the PAYLOAD length information.

The last 2 bytes for CK_A and CK_B(Checksum A&B) and the first frame is finished.

We will use "POSLLH" message in "NAV" class among various messages from M8N.

The message structure is like this.

The header starts with 0xB5 and 0x62 as we just did, Class is 01, ID is 02 and length is 2-bytes equals to 28.

And then 28 bytes of PAYLOAD which is actual information. The contents of the payload are described in the table.

4 Bytes for each of iTOW, Longitude, Latitude, height and accuracy. Total 28-Bytes are coming in.

And lastly, 2 bytes of Checksum and message finished.

So, a total length of the POSLLH message frame is 36 bytes including PAYLOAD.

We analyzed the message structure and calculated checksum of the received message last time.

This is the POSLLH message that came from GPS when it's fixed, and we got the results here.

Now we can see and analyze the received message, but the more important thing is to save them to seperate variables we want and use for flight control.

We need to learn how to receive the message in a temporary buffer, checking it, and combine data separated in bytes into an actual information.

We usually manage this with a struct like this, We will define a struct including CLASS, ID, Length, and PAYLOAD information all together.

Look at this terminal here.

These messages are POSHLL messages received in UBX protocol and finished checksum check and parsing.

These are the codes below.

When a message is received in a frame, it comes into the if statement and verifies checksum.

And the message received in bytes parsed and stored to the struct variables if the checksum is correct.

And the members of the struct is being printed. The code below is working now.

Let's check whether the parsing code is well functioning by marking a point on a map with longitude and latitude information.

This is the map program I am using, and I will mark the last information on it.

Putting 37.5556176 for latitude and 126.9277228 for longitude, we could see the position on the map. It's Hongdae, Seoul, South Korea where I am.

and it is very close to my office here. So, data receiving, parsing, and storing are completed without any issue.

We will receive a total of 36 bytes size of POSLLH message including SYNC CHAR and CHECKSUM.

Let's call the 1st-byte "Byte 0".

The process of message receiving and storing is,

Check the first 2 bytes are 0xB5 and 0x62, and if correct, store all other data including 2 bytes of SYNC CHAR to a temporary buffer.

After that, once 36-bytes of a message frame are received, parse and store the data to a struct if checksum is correct.

Please be aware of these three premises here. 1. Frames must start with a fixed value(SYNC CHAR).

1. The length of a frame(message) should be fixed. 3. We use a receive interrupt and it is requested every 1 byte.

The basic concept of receiving a message frame is count the order of received byte. And counting starts from 0.

When the count is 0, increment the count by 1 if the received data is 0xB5, or keep the count if it is not.

Then, when the count is 1, increment by 1 again if the received data is 0x62, or clear the count to "0" if it is not 0x62.

It means that a message frame started if the first two bytes are correct, so store data into temp buffer whenever each byte received from the 3rd byte.

If the count finally becomes 35, store the received byte to a temp buffer and reset the count to "0" to prepare to receive next message frame.

Now we just completed receiving one message frame. So we should calculate checksum with the temp buffer who is storing entire message frame.

And compare the checksum and the last 2 bytes CK_A and CK_B of the received message frame.

If those are correct, there is no issue on the received data. So we can parse and store data to variables we want.

It is a simple concept but not easy to write the code for beginners. I will give you useful tips soon.

Now the next step is message parsing. There are also 3 premises for parsing.

1. All data should be stored into a temp buffer in the designated orders.

2. All data should be little-endian or big-endian. 3. Data in Floating-point should be expressed 32 bit or 64 bit as defined in IEEE-754.

But we don't need to consider it because float type variable is expressed in IEEE-754. If you want to know more about Floating-point bit expression, just google it.

For message parsing, we will combine data into one meaningful one and store it to the struct variable.

This includes reading data from the temporary buffer as the same size of data to each struct member variable, and process bitwise operation.

I recommend using a pointer if there are data in a floating-point format in PAYLOAD. Because it is impossible to process bitwise operations for floating point variable.

But the POSLLH message has no floating point data.

For example, longitude and latitude information is in floating-points. But those are expressed in integer with 10 to the power of 7 multiplied.

Finally, we are ready to write source code now. I will give you more explanations while writing source code.

Duplicate 3-1. M8N PC Interface folder, and change the folder name to 3-4. UBX Parsing.

Copy the name and change the name of .ioc file in the folder.

Also delete Debug folder and .elf file. And then launch cubeIDE.

Delete the former project,

and import 3-4. UBX Parsing folder which we just duplicated.

Import completed. Double click .ioc file to run CubeMX.

You will see this alert if you updated the cubeIDE version, then just click migrate.

This is CubeMX launched.

There is nothing to do with CubeMX because we have initialized UART4 for M8N already. Let's open main.c file for source code.

Reviewing the progress we made last time,

We have initialized UART4 for interfacing with GPS, and also initialized UART5 for interfacing with PC for debug purpose.

All are using rx interrupt which requests interrupt every 1 byte received.

The interrupt service routine(ISR) will proceed once an interrupt is requested. It is defined stm32f4xx_it.c file.

If you scroll down, you can see the definition for UART4_IRQHandler() and UART6_IRQHandler() here.

UART4_IRQHandler() is requested when data received from M8N, And we wrote the code for transmitting the received data to UART6 PC.

Also, we wrote code to transmit data received from PC to UART4 M8N in UART6_IRQHandler().

UART4_IRQHandler() is called means that it received data from GPS, so we will declare a temp buffer and save the received data in it.

So let's declare a buffer array to store M8N data as a global variable.

Scroll to the top, and find global variables we made last time.

The type is uint8_t and the variable name is m8n_rx_buf.

The array size of 36 bytes which is the same size as 1 message frame. uint8_t m8n_rx_buf[36];

And make one more flag variable which shows receiving completed.

Declare a flag variable and initialize to 0. uint8_t m8n _rx_cplt_flag = 0; (cplt.= complete)

We declared these variables in global variables to access in the other files like main.c, too.

Let's move to the bottom. We will store received data to a temp buffer per byte within the interrupt function.

First, in the ISR function, we will check whether the message frame starts with 0xB5 and 0x62,

and if correct, save the next received data to buffer array in order.

And we will define each function for verifying checksum and parsing data separately.

Now let's check SYNC CHAR and store received data to a buffer array.

I explained that we will count order of the received byte for a message frame reception. So, we need a variable for counting.

Delare "unsigned char cnt = 0;" between comment block and it is a local variable. Be careful that local variable is initialized whenever the function is called.

Therefore, must add "static" keyword to prevent initialization. "static" as a local variable means to keep the value whenever the function is called.

Complete "static unsigned char cnt = 0;"

Then we will store received data to a temp buffer using this count variable.

First, the code works according to the value in (cnt). Write "switch(cnt)",

The static variable "cnt" starts with 0 when the first time the ISR is called. So write "case 0:" in the switch-case statement.

And check if the received data is 0xB5 or not in the case 0.

The received data has been stored in "uart4_rx_data". So write "if(uart4_rx_data == 0xB5)" to check whether the data is 0xB5,

And if correct, store the data to the temp buffer. We have declared the buffer array "uint8_t m8n_rx_buf[36];" before.

Store the received data to the first element(index 0) of the buffer array. But "cnt" is 0 now.

So write "m8n_rx_buf[cnt] = uart4_rx_data;"

Then increase the count variable by 1. Write "cnt++;"

This is the end of "case 0".

Let's review what we just did. We checked whether the first received data is 0xB5,

If true, stored the data to "m8n_rx_buf[0]" and increase "cnt" by 1.

Or if false, the code inside the if-statement is not executed. So the "cnt" is kept as 0 and the ISR exits.

Now move to "case 1". Case 1 means that the next received data is 0x62 after the last data is 0xB5 in case 0.

We check whether the next data is 0x62 in case 1, and if true, repeat the same process in case 0.

Or if false, initialize "cnt" to "0" this time. We didn't change cnt to 0 in case 0 because it is already 0.

And here we start again from the first stage if the second data is not 0x62. Now case 1 is completed.

If both are true, it means that we have received 0xB5 and 0x62 well.

We will receive CLASS, ID, LENGTH, and PAYLOAD information from case 2.

We will not check them here but store them to a temp buffer right away.

We just store the received data to buffer array sequentially from case 2 to case 34 which is the buffer array size - 1

We can use "default" keyword for convenience not use from case 2 to case 34 each. Write "default:" , and it works when no case matches.

In this case, store data to temp buffer array one by one without checking. And increase cnt by 1.

Finally, we will have cnt 35 which is the last byte of a total of 36 bytes.

Store the received byte to the last element of the temp buffer array, and clear the cnt to 0.

And be ready to check 0xB5 and 0x62 from the beginning. Add "break" here,

So this code is a message frame reception code to check SYNC CHAR 0xB5 and 0x62, and if correct, store all 36 bytes data in a temp buffer array.

Once all data is received, set flag variable as "m8n_rx_cplt_flag = 1;" to indicate that a message frame reception is complete.

And normally "default" is at the end of switch-case statement. Let's move it to the bottom.

We just completed a code to receive UBX message protocol. Pause and write code same as mine.

We will check whether the code is working properly at main.c.

Scroll up and see these 2 global variables which we will use at main.c, too.

Let's fix a simple misspelling here, it is "cplt" not "clpt", sorry.

And copy them and come to main.c. Scroll up and find "extern" variable declaration here.

Paste and put "extern" keyword as well and delete initializer here,

Scroll down and find while loop.

In the while loop, let's blink an LED if the UBX message frame is received well.

Keep the comment remains we made before like this.

The flag variable becomes 1 if the message frame is received well. So we should check the value of the flag is whether 1 or not.

Write "if(m8n_rx_cplt_flag == 1)" and let's blink an LED in this if statement.

The first thing have to do is to clear flag to 0. And toggle LED2 which is connected to PC2 among PC0, PC1 and PC2.

Write "LL_GPIO_Toggle" and Ctrl+space to autocomplete.

The first argument is "GPIOC" and second one is "LL_GPIO_PIN_2".

Now we are ready to check! Build this and click the second one on the pop-up window,

Click OK to proceed.

Ignore this message because we have not changed any configurations at CubeMX.

Yes to all others,

Build and download completed.

For your reference, I am using version 1.0.2 now after updating from version 1.0.0. Versions do not make any difference in my lecture. Don't worry.

Let's see here, the LED is blinking and it means that the code we made is operating properly.

If the LED doesn't work, check the data using Binary Console on u-center first. Maybe you are receiving NMEA message not UBX.

This M8N module sometimes automatically initializes its setting if the power is off for a few days.

If you have the same issue, you need to re-do the UBX protocol settings by revisiting the section 3-2.

The messages are printed on PC because we set the code for sending data from UART4 to UART6 and UART6 to UART4 already.

These 2 codes are just for checking in the development stage and those will be deleted later.

You can change M8N configuration using u-center now without code modification.

And now we checked that the code we wrote is working.

Blinking LED means that we have received 36 bytes of data starting with 0xB5 and 0x62.

But we are not sure if the data has no issue yet, because we haven't checked the CHECKSUM yet.

We only checked these 2 SYNC CHAR.

So, now we're going to do is to check reliability of the received data by checking the CHECKSUM.

We're creating a new file and defining a function to calculate and verify checksum

Before we proceed, GPS is not fixed since we are indoors although LED is blinking. But UBX message is coming in proper UBX protocol.

We used open-source libraries from the github in Chapter 2. Sensor Interface. But this time we will create a library file and define functions by ourselves.

Let's create a new file first. Right-click source folder. (Src)

Choose "New" and click "Source File". Put "M8N.c" for the file name.

And "Finish" to create a file. Right-click "Include(Inc)" folder and choose "File".

And name it "M8N.h".

It's added here.

We will define separate functions for checksum checking and data parsing in M8N.c source file.

And declare a prototype of the functions and define a struct to store POSLLH data in M8N.h header file.

We will define a function to verify checksum from now on. Define the input and output of the function first and then the body.

Name the function as "M8N_UBX_CHKSUM_Check". A parameter of this function is the temp buffer array that stored the received data.

And the function calculates and verifies CHECKSUM and returns 1 if CHECKSUM matches or returns 0 if not.

We should use a pointer for the parameter to point the temp buffer array. So, write the first parameter "unsigned char* data".

The second parameter indicates the size of the temp buffer array.

Write the second parameter "unsigned char len" from length.

This function returns 1 or 0 according to the checksum verification. So the return type can be "unsigned char".

Now we just completed the prototype definition and move to the function body definition.

Let's declare two variables to calculate and store CHECKSUM A and B.

Declare "unsigned char CK_A = 0;". And declare one more "unsigned char CK_B = 0;"

Be careful that both variables must be initialized to 0.

Now create a loop for CHECKSUM calculation.

Write up to " for(int i " and let's think about which number we should take as initial value of i.

Hint, the pointer "data" points an address of the first element of temp buffer array. And all 36 bytes of data including SYNC CHAR 2 bytes are stored to the array.

And you remember that SYNC CHAR is not in a range of CHECKSUM calculation. So, the index i must start from the 3rd byte.

The index i starts with 2 which is an index for the 3rd byte.

And let's think about the number of iterations.

You also remember that the last two bytes of the temp buffer are checksum bytes. And they are not in a range of CHECKSUM calculation as well.

So, the loop must iterates until length-2. Write "for(int i=2;i<len-2;i++)"

Then we do checksum calculation in the loop.

CK_A is CK_A itself plus the byte value of the i-th element of temp buffer. Write "CK_A = CK_A + data[i];"

And CK_B is CK_B itself plus CK_A. Write "CK_B = CK_B + CK_A;"

Please revisit the last video to check CHECKSUM calculation method. We have completed CHECKSUM calculation code here.

And let's check whether the result is the same with the 35th and 36th bytes of the temp buffer array.

This function returns 1 if both CK_A and CK_B match with data[34] and data[35]. And returns 0 if one of them does not match.

Compare CK_A to data[34]. 34 means 2nd byte from back of 36 bytes buffer array. So data[34] can be replaced data[len-2] here.

Similarly, compare CK_B to data[35]. 35 means the last byte of 36 bytes buffer array. So data[35] can be replaced data[len-1] here as well.

The result will be "1" if both are true, and "0" if any of them is not true.

We just completed the function for CHECKSUM verification.

Let's verify the CHECKSUM with this function now.

Put "#include M8N.h" at the top of M8N.c,

Copy the prototype of this function and come to M8N.h.

Declare the function prototype like this and save both file.

And come back to main.c and include M8N.h header file at the top. Put "#include "M8N.h".

And now we can call the function defined in M8N.h.

Copy the function name,

Come down to the if statement where checks the m8n_rx_cplt_flag. Open a new if and call this function within the condition check statement.

The first argument should be the starting address of the buffer array. Let's pass the address of the first element of the buffer array.

Write up to "if(M8N_UBX_CHKSUM_Check(&m8n_rx_data[0], )"

The size of this temp buffer array is 36 bytes. So pass 36 to the second argument.

The CHECKSUMs are correct if the return value is 1. So let's move the LED toggle code to the if body.

And we will find out whether it works properly. Build the project.

Download completed. Terminate debug mode.

As we can see, the blue LED is blinking as before.

It means that the CHECKSUM verification is well done.

The LED is toggling when a full message frame is received well and the CHECKSUM is correct.

So the CHECKSUM verification code is well functioning.

The next step is to decode/parse the received data and store to the struct member variables.

First of all, we need to define a struct. Move to "M8N.h" file.

Please refer to struct definition in the course material. I already made one so I will simply copy it here.

I recommend you pause this video for a while and write your code first same as mine.

One thing to explain is that I put "typedef" keyword in the actual code.

The advantage of "typedef" with struct is that the we can omit "struct" keyword when declaring a struct variable.

I.e. we can use "M8N_UBX_NAV_POSLLH" instead of "struct _M8N_UBX_NAV_POSLLH" when declare a struct variable.

Now that we have defined a structure, let's declare a struct variable in M8N.c.

Copy "M8N_UBX_NAV_POSLLH" here, and go to M8N.c file.

Paste it here and declare a struct variable. Name the variable "POSLLH".

Copy this and go back to M8N.h file.

Paste it here and put "extern". This process is to access the struct variable in main.c.

And come back to M8N.c. Lastly, we will define a function to parse to the struct variable.

Name the function "M8N_UBX_NAV_POSLLH_Parsing".

It's good to make intuitive names for functions or variables. This will help you to know what this is about right away.

Back to the definition, this function decodes/parses the data stored in the buffer array into each member of the struct.

It need 2 parameters.

One is a pointer to a temp buffer array and another one is also pointer to a struct variable.

The first parameter type can be "unsigned char*" pointing to the temp buffer array. Write "unsigned char* data" for the first parameter.

And the second parameter type can be "M8N_UBX_NAV_POSLLH*" to point struct variable.

Name the pointer "posllh" Write "M8N_UBX_NAV_POSLLH* posllh" for the second parameter.

In this funtion,

data is read from the temp buffer array pointed by "*data" as much as the byte size of each struct member,

if necessary, bitwise operation is performed, and combined into one piece of information and stored in the each struct member.

It looks so complicated but this will be much simpler when you see the code.

We will store certain data to "posllh->CLASS" which is first member of the M8N_UBX_NAV_POSLLH struct.

The "certain data" is from temp buffer array.

Keep in mind that this buffer array has the 36 bytes entire message frame including SYNC CHAR and CHECKSUM.

So CLASS information has been stored from index 2, skipping 2 bytes for SYNC CHAR(0 and 1) from the 36 bytes.

Therefore, write "posllh->CLASS = data[2];".

I put only one byte data "data[2]" because the CLASS is 1 byte unsigned char.

Likewise, Put "data[3]" for ID which is also 1 byte as well. Write "posllh->ID = data[3];"

And POSLLH length has two bytes size because it's unsigned short. So data[4] and data[5] have to be combined to one information.

You remember that I emphasized the byte ordering early. It is little endian format.

It means that the least significant byte(LSB) is stored lower address and the most significant byte(MSB) is stored upper address of the temp buffer array.

Therefore, it shifts the MSB of the upper address left by 8 bits. Combine with LSB by OR operation.

Write "posllh->LENGTH = data[4] | data[5]<<8;" We can apply this process to all others.

I will just copy and paste the code I already wrote.

Again, pause the video for a while and write your code first. And must be careful that each array index must be correct.

Also, you can see that I defined 2 more double format variables on struct definition. You already know the CLASS, ID, Length, and PAYLOAD, but why others are needed?

You remember latitude and longitude are coming in 4 bytes integer format multiplied by 10^7.

But sometimes it needs to be converted to floating-point for flight control depends on the controller algorithm. But not essential.

We need floating-point variables to store the actual longitude and latitude. And as you can see they are not "float" but "double" type.

To get the actual value, we should divide the value of lon and lat by 10^7. But the "float" type cannot represent the exact value.

"float" type is 4 byte size and it has single precision so float type cannot accurately represent up to 7 decimal places.

You can see the unprecise value with error if you store the actual lon and lat to the float variable.

So, that's why I took double format for precise representation.

Then let's store the actual longitude and latitude to them. Write "posllh->lon_f64 = posllh->lon / 10000000.;"

And make sure that you have a dot(.) at the end of the number. If you forget the dot, the result becomes an integer.

It's because an integer divided by an integer. Therefore you will lose the Floating-point part.

Also, do the same process to longitude. Write "posllh->lat_f64 = posllh->lat / 10000000.;"

I will comment out this because we will not use this here.

And it takes more time to process floating-point operation than integer one. Also, the STM32F4 has a single precision FPU(Floating-Point Unit) inside.

This makes floating-point operation faster for the single precision format (float) with its hardware processing.

But not for the double precision format. The double format is processed in software, and it takes a much longer time.

So I recommend you use float for floating-point operation.

Some high-end model such as STM32F7 or H7 has double precision FPU inside so double format can be processed in hardware.

Anyways, we are using STM32F4, it is better to operate floating-point in float format.

This is the end of function definition! It does not need return value because this is a function just to parse and store.

So put the return type "void" here, and copy function prototype and go to M8N.h.

And declare the function prototype here.

Now we will process parsing with this function. Copy the function name.

Go to main.c and call the function here.

It has 2 parameters, and the first one is a pointer to point a temp buffer array. So pass "&m8n_rx_buf[0]".

The second one is a struct pointer to point a posllh struct. So pass "&posllh" which is an the struct variable.

Complete "M8N_UBX_POSLLH_Parsing(&m8n_rx_buf[0], &posllh);"

This function is now can parse data in a temp buffer array and store them to each of these struct members.

Let's check the result by printing each member. We will check latitude, longitude, and height among all information with "printf".

Put "LAT: %ld". should use "%ld" because it is in 4 bytes integer format.

And add '\t' for tab offset. Add the same thing to longitude and height.

And add new line '\n' for line break. And variables to print are "posllh.lat", "posllh.lon" and "posllh.height".

Complete "printf("%ld\t%ld\t%ld\n", posllh.lat, posllh.lon, posllh.height);"

Scroll up to the top before building, in _write() function, we gave some delays because I was confused to HAL driver.

This is not a good way. So let's modify it a bit. Delete delay and add this code here.

Please pause the video and write this code same as mine. "while(!LL_USART_IsActiveFlag_TXE(USART6));"

This is to check whether the tx buffer is empty before transmitting data to UART.

I recommend using this because it is better than the delay method.

Also, change LENGTH to length in M8N.c because we have defined it in lower case.

And we will block some codes for printing information we need only.

Go to stm32f4xx_it.c file and scroll down to UART4_IRQHander(). This is a code to send data from M8N GPS to PC.

Comment out this code to prevent printing ubx message from M8N. And press F11 to build.

Download completed and run it. Launch any terminal software.

Open and print in ASCII. We have all "0" for longitude, latitude, and height.

This is because the GPS is indoors. I will let it out and wait until GPS fixes its postition.

(Few minutes later...)

Now GPS is fixed and we have all information correctly. This is not a height in barometer but a height as an ellipsoid calculated by GPS.

Anyway, let's check by printing on google map.

I will print the location on the map software that I made for test.(Gmap .net for C#) Note that both lon and lat are multiplied by 10^7.

So divide them by 10^7,

and here. And check the location on the map.

The result is marked (+) and my office is across the road. It seems that it is not that accurate today.

Anyway, POSLLH message receiving, Checking CHECKSUM, and parsing are working well.

Now data looks good.

But it is helpful to simulate with the wrong SYNC CHAR or CHECKSUM and see how the codes are working.

Create an imaginary data set and check the code operation one by one. You can understand the operation easier in this way.

However, the code we wrote today is working even if the received data has problem.

Also, we saw a case that we had all 0 for latitude and longitude when the GPS is not fixed.

But sometimes it was not 0 coming in even though the GPS is not fixed.

It can be dangerous if drone is in a waypoint flight mode, so make sure that you have exception handling first.

The last two information of POSLLH message are information about accuracy.

So I suggest checking the value in hAcc and vAcc.

And I have explained only POSLLH message in this course. It is the simplest message including latitude, longitude, and height information.

There is another message format called PVT and gives more information including lon and lat and height.

I also recommend checking PVT message, too. Though I will not cover them in my lecture, you can make it if you apply what we have learned today.

Further simulation and application will help you to understand and study deeper.

I measured the processing time taken to CHECKSUM check and parse through functions.

The result is 7.7 μs for CHECKSUM and 3.2μs for parsing. Total 11μs.

You might notice that data receive time is not included, but no CPU clock is needed here because we have used rx interrupt.

However, CPU clock is consumed when the IRQHandler is in execution.

But we can ignore the execution time of UART4_IRQHandler() because only simple operations are done in it.

So it is not included in this time line.

Total 186us processing time was taken including chapter 2 and today's process.

It's just 1/5 of the 1000us. And there are functions not operating every period.

Only this ICM-20602 sensor works at 1 kHz every period and the other functions have slower periods.

My calculation is based on the case of all functions are working in a single cycle.

This is all I have prepared for today. I cannot say that the source code we made are the only correct answer.

There could be faster or more memory-effective codes exist.

In a word, there is no correct answer for codes. You might be able to make a better one if you have experienced various projects.

In this lecture, I am focusing more on a better understanding of concepts and fundamentals than efficiency.

So, maybe my code is not effective one. To make it more effective, the structure of the code becomes more complicated.

So I recommend you focus on understanding the concept and make the process we went through to your own knowledge.

Of course, I can give you complicated explanations to make more efficient code. But it does not have dramatic impacts like 10~20 time improvement or something.

Let's finish this course. Do you remember when you turned off and on to M8N module, then settings are initialized?

And we re-set by using u-center and it is a huge inconvenience.

So, in the next video, we will make code to send setting values directly to M8N from FC without using u-center.

This will help you save time and energy. All you need is just to connect GPS to FC and power up so that FC changes M8N settings by itself.

It took a long time today because the content was very very important. Thank you for your concentration and see you next time.



```

#### video 13
- writing M8N configuration code

{% include youtubePlayer.html id=page.youtubeID13 %}

```diff
Until last time, we wrote source code for receiving POSLLH messages in ubx protocol,

checking the checksum and finally decoding/parsing the messages.

However, there is an issue that M8N is sometimes reset to the initial setting when the power is removed and then put back again.

It is very inconvenient to set up again through u-center every time.

So, this time, let's write a code so that FC can set M8N by itself.

After this course is completed, FC will set M8N outputs messages in UBX protocol without u-center.

Also, since there is no need to connect FC to PC plug in a connector, which is very convenient.

Since the USB to uart module and M8N module have different pin pitch so they interfaced through FC.

And we have changed some settings so that ubx messages are output using u-center,

a total of 4 settings: CFG-CFG, CFG-MSG, CFG-PRT, and CFG-RATE.

They are the messages defined in the CFG class, and each message configures independent functions of M8N.

First, we've set M8N to output messages in the ubx protocol, and also set the UART parameters.

The command for this configuration is 28 bytes of data shown below.

And on the right, the 28-byte data is classified according to the ubx message structure.

The configuration messages follow the ubx protocol, so the first two bytes start with 0xB5 and 0x62, which are SYNC CHAR,

and then there is one byte CLASS information 0x06 (CFG Class) and one byte ID 0x00 (PRT).

Two bytes LENGTH, 20 bytes PAYLOAD and lastly message ends with 2 bytes CHECKSUM.

It follows the structure of the ubx message exactly. Here, this PAYLOAD contains the actual configuration informations.

You'll have to go through a lot of things in the datasheet to interpret the meaning of each.

It takes much time, so if you use this u-center, you can easily change the settings without the datasheet.

If the above configuration is changed, the payload data corresponding to the configuration is changed.

After making these configurations, these settings are applied by clicking the Send button,

That "applied" means that all of these configuration data have been sent to the M8N.

And then we've set the type of message to be output.

We've set to output POSLLH message to UART1 of M8N, and the configuration data are arranged on the right.

If you want to change the type of message to be output, you can do it using u-center. You can change the Message item.

Then the config data below will be replaced with the corresponding message to be output.

Then, the message output cycle was set to 5Hz, and the config data are also arranged on the right.

And lastly, we've set this setting to save the all configurations we made.

However, even if we save the configurations like this now, if power off the M8N for 1-2 days and turn it back on, the settings may be reset.

In other words, it seems that these configurations are not saved well.

My guess is that it uses a coin cell battery to store it, but I don't know exactly.

But it's a pretty big issue. And what we're going to do today is actually because of this problem.

Even if the configs are reset, the FC will automatically make configs itself after powering on.

Anyway, we've made a total of 4 settings like this, because there are many other setting options besides that.

If you're curious, it's a good idea to look at the datasheet to find out what options are available.

You may be worried that you will not be able to roll back if you change the settings incorrectly,

but I think it doesn't matter because it returns to the original settings after power off a while.

And if you have any questions, the best way to study is to try them yourself. So, if you are curious, I recommend that you change the settings in various ways.

So far, we have used u-center to set up M8N.

What u-center does is to send the config data to the M8N to make configurations.

In other words, if you know the config data exactly, you can set up M8N the way you want by sending the data to M8N without u-center.

So, what we are going to do this time is to transfer the config data set from FC directly to M8N without u-center.

To do this, we just need to send each config data set via UART4 which is connected to M8N.

So the way is simple.

And if we do this, FC will automatically set the M8N when powering on the FC and M8N, so u-center is no longer needed.

So, I summarized the four configuration command datasets we made earlier.

And to define them in the form of an array, we can declare and initialize them like this.

Now, let's define the M8N initialization function in the M8N.c and M8N.h created last time and call it in the main.c to make configuration for M8N.

You can watch full videos including writing source code on udemy and only the conceptual video has been uploaded on YouTube,

In fact, if you understand the basic concepts, you can actually implement them by yourself.

Now let's move on to writing the source code.

Duplicate "3-4. UBX Parsing" folder and change the folder name to "3-5. M8N Configuration".

Then copy the folder name, come inside the folder and rename the .ioc file to same as the folder name.

Delete the Debug folder and the .elf file. After that, launch CubeIDE.

After closing all open projects, import the folder duplicated just before.

Select the "3-5. M8N Configuration" folder and press the Finish button.

Import is done.

There is nothing to configure with CubeMX, so let's open the main.c file right away.

Scroll down bit.

Last time we wrote source code for receiving ubx messages and checksum calculation and decoding/parsing the POSLLH message if the checksum is correct.

We defined the functions to calculate checksum and decode/parse in the M8N.c.

In this time, we will define a function that transmits the M8N config data set to UART4 and write the code to actually set it up using that function.

What we need to do first is to declare arrays in which the config data is stored, and transmit these arrays to UART4.

So let's first declare these arrays.

I already have a code I wrote in advance, so I'll use it.

I'll upload this as a lecture material so you can use it too.

For those of you writing your own, pause the screen now and declare the arrays the same.

Now, let's define a function that transmits the config data sets stored in these arrays to M8N via UART4.

Set the function name M8N_TransmitData().

We will define this function to take two parameters,

The first parameter is a pointer to an array. Write "unsigned char* data" as the first parameter.

The second parameter is the length of the array. Write "unsigned char len" as the second parameter.

And since this function doesn't seem to need a return value, set the return type is void.

In the function, a loop will be needed so that transmit the array data pointed by the pointer via UART4,

Open a for loop first. Write up to "for(int i="

Similar to receiving ubx messages, when sending ubx messages, data set must follow the ubx message structure.

Therefore, all data sets must also start with 0xB5 0x62 and CLASS, ID, LENGTH, PAYLOAD and CHECKSUM must all be transmitted.

And if you look at these data sets now, each message follows the ubx message structure.

All arrays start with 0xB5 0x62 and contain CLASS, ID, LENGTH, PAYLOAD and the last 2 bytes of CHECKSUM information in that order.

So we just need to transmit this array from the first byte to the last byte to M8N.

So the loop need to iterate for the length of the array. So the index i starts from 0 and increases by the length of the array.

Complete iteration condition. "for(int i=0;i<len;i++)"

And within this loop, the data in the array needs to be transmitted one by one.

Come to the top of the main.c.

Here, we wrote the UART transmission code when we defined the _write() function to use printf() earlier.

I'll use this code we wrote here before.

After copying these two lines, return to M8N.c again, paste it in the for loop, and change all arguments "USART6" to "UART4".

Note that it is UART4, not USART4.

And change "p" to "data" of the second argument of LL_USART_TransmitData8().

We completed the definition of the function body.

The next step is to send each config data set contained in each array using the function we just defined.

So let's define a new function for it.

This time, set the function name M8N_Initialization().

Since this function is a function that makes M8N configurations, it doesn't need any parameters and return value.

So, they are all defined as void type.

Now, inside this function, we will use the M8N_TransmitData() defined just before to transmit the data in each array.

First, call the M8N_TransmitData(). In the first call, we should send the data contained in the first array.

Copy the name of the first array UBX_CFG_PRT.

The first parameter of this function is a pointer to an array.

So pass the address of the first element of the array. Write "&UBX_CFG_PRT[0]" as the first argument.

The second parameter is the length of the array.

We can easily find out the length of the array using the sizeof() keyword.

Write "sizeof(UBX_CFG_PRT)" as the second argument.

Repeat this process for every array.

Copy the code wrote just before and paste it 3 more times. And send each of these command arrays one by one.

In this way, we wrote source code to transmit each of these config data sets to M8N.

But when I did this, the setting was not applied immediately.

So, I checked the problem and it seems that it needs a time delay between sending each data sets.

In my experience, a delay of 100ms seems to be ok. Let's put a 100ms delay before sending the next data set.

Put "HAL_Delay(100);" between each transmission like this.

The definition of the M8N_Initialization() is now complete.

Now, we need to call this function once in the device initialization area before the while loop begins in the main function.

But if you use the M8N.c and M8N.h library files in other projects besides this class,

since M8N interfaces via UART, it will be more convenient if UART initialization is included in this library.

Therefore, we will also define the UART4 initialization function separately for future use.

So let's define a new function for UART4 initialization.

The name of the function is M8N_UART4_Initialization().

This function does not seem to need any parameters and return value as well, so all are defined as void type.

In this function, we need to initialize UART4, and the code is defined in usart.c file.

Let's open the usart.c file.

Source codes inside the void MX_UART4_Init(void) is the code automatically generated by CubeMX.

We will re-use this code. Copy these codes. Go back to M8N.c and paste it inside the M8N_UART4_Initialization().

BTW, Ctrl + I is the auto-indent shortcut.

And then, call M8N_UART4_Initialization() inside the M8N_Initialization() function.

In this way, if M8N_Initialization() is called once in the main function, it initializes UART4 and transmits all M8N configuration data sets.

And this will make it easier to use the M8N.c library in other projects.

And the reason I write code in such a way that I keep defining new functions and calling them is that it makes more efficient to manage source code.

So, it is good for you to adopt this habit as well.

Now, writing the source code in the M8N.c is finished.

So, let's declare function prototypes in M8N.h.

Open the M8N.h file. Here declare the prototypes of the three functions we defined just before.

We are now ready to use the library functions. We're going to call the M8N_Initialization() in the main.

Copy the function name and return to the main.c file.

And call the function once before the while loop begins.

Now, when the program is executed, the M8N_Initialization() function is called once.

When the function is called, it will initialize UART4 first, and then transmit all config data sets to the M8N.

So, first of all, we finished writing the code as we were going to do.

Then let's build and download it. Press F11.

When this window appears, select the second item.

There are no errors after the build now, but there are supposed to be some errors.

The reason there is no error probably because the files we have worked on are not saved.

Therefore, save all files first and then build again.

A new window will appear, click OK.

When I build again, 36 errors occur. Press Cancel.

So, I looked for where so many errors occurred, and M8N.c is marked with an x. Let's open the M8N.c file.

As you can see, the UART4 initialization codes we just copied from usart.c are marked as having a problem.

These error occurs because structures or functions used here have not been defined.

To avoid theses build errors, 1) they are defined in this file, or 2) in M8N.h where M8N.c is including, or

3) the file in which these are defined must be included.

Now, none of those three are satisfied, so these errors occurred.

We have copied source code from usart.c. But errors occurred only in M8N.c, not in usart.c.

The reason is, if you open the usart.h file, the main.h is included without being defined directly in it.

This time, if you open the main.h, LL driver libraries are included in it and they are defined in this LL drivers.

Therefore, if we include the main.h in M8N.h too, no more error will occur.

After copying the top part of the uart.h, return to M8N.h and paste it at the top.

Then copy the bottom part of the uart.h again and paste it at the bottom of M8N.h too.

And replace __usart_H with __M8N_H.

And replace it at the bottom even it is a comment.

So now that the main.h is included, it should now build without errors.

Then, to briefly explain #ifdef, #define, and #endif,

it is usually used for prevention recursive inclusion as described.

And again #ifdef __cplusplus, extern "C" means to follow the rules of not C++ but C language when building and linking this file.

This is sort of a preprocessor option for compiler.

This is not really important in this class. Now, we finished all source code work today.

Let's check if able to build without any errors.

Firstly, disconnect the M8N from FC before doing build.

My M8N module has been reset to default settings. So, when the power is on, NMEA message is output as the default setting.

Let's assume how it will work before we download it. When the program begins, the M8N initialization function will be executed.

In that function, UART4 of FC is initialized, and then config messages will be transmitted to M8N through UART4.

If the configuration is well done, from then on, UBX messages will be output instead of NMEA.

When a UBX message is received inside the while loop, and if checksum is correct,

After decoding/parsing the message, latitude, longitude and altitude are output to the PC.

So let's build it now. Press F11.

Now the build complete with no errors. Let's run it.

Since the M8N is not connected right now, of course, no messages are received and the LED is not toggled.

Also, even if the M8N is powered on, the NMEA message will be output, so even if the M8N is connected to the FC, the LED will not blink.

The program is being executed now, but M8N was not connected when the M8N_Initialization() was executed.

That is, the ubx message output setting has not been applied yet.

Therefore, M8N is outputting NMEA message at the moment. Now I'm going to reset FC board.

Let's think about what happens after reset. The program re-start from the beginning.

M8N configs will be applied well because M8N is being connected when the M8N_Initialization() function is executed.

After that, POSLLH message is received when while loop is iterating.

And if there is no problem with the checksum, the LED will be toggled and the GPS information will be output to the PC.

So, I'll reset now.

Now, after resetting the FC, the LED starts blinking. That means the POSLLH message was received and the checksum was correct.

Then, let's check whether the GPS information is printed properly through the terminal.

Messages are being printed but all information is 0 because it has been placed indoor.

To summarize, M8N has been well set up to output POSLLH message in ubx protocol, and the LED is blinking because the ubx message is received well,

but the values are 0 because the GPS is not fixed.

So far, we have written the source code so that FC could directly setup the M8N without u-center,

and all contents of chapter 3. GPS data reception has been completed.

The topics covered in this chapter are really, really important.

It's important that how to analyze the message structure, how the GPS outputs data, and how to receive and decode/parse the data.

Knowing this, you can use it for various serial protocol including what we will do in the next chapter.

So I hope you understand what we've done in this chapter.

The reason for using GPS is, of course, to do outdoor waypoint flights.

However, this course will not cover waypoint flight control, and will cover getting latitude and longitude information needed for that.

Also, to do waypoint flight, we need more than just receiving GPS data.

We also need to set the waypoint coordinates and send the flight command to the FC. We'll need a ground control station for that.

Commercial FC usually uses GCS such as QGroundControl or Mission Planner.

And it communicates with the drone through a communication protocol called Mavlink.

But in my course, we use self-defined communication protocol and GCS. (Actually I defined)

This is explained in depth in Chapter 8.

So far, we have measured the state of the FC through Chapter 2 and Chapter 3,

and with this information, attitude control, altitude control, and waypoint flight can also be performed.

From next time, Chapter 4 begins.

In order to remotely control the drone, we will receive remote control data from Flysky receiver,

analyze the data protocol, and also decode/parse it.

I will also explain how the data changes when manipulating joysticks on the remote controller.

```

### Ch4 Radio Data
#### video 14
- FS IA6b iBus data

{% include youtubePlayer.html id=page.youtubeID14 %}

```diff
Until last time, we have completed Chapter 3. GPS data receiving and parsing.

In Chapter 3, we received and analyzed the ubx message of the M8N GPS, parsed and stored into the structure variable we defined.

And we wrote M8N setting code so that FC can directly set M8N without u-center.

Chapter 2 sensor interface took about 175us, and chapter 3 GPS data reception took about 11us.

I explained that because the rx interrupt was used when receiving data,

the time to actually receive data was negligible, so it was excluded from the timeline.

If DMA is also used together,

CPU resources are not consumed at all because the process of receiving data and storing it in a temporary buffer is handled in hardware.

This makes possible the CPU to perform other operations in the meantime.

However, we have not used DMA in the data receiving part until now, and we will not use it in this Chapter 4.

Maybe we might use DMA later in Chapter 7. radio data communication. Because FC will send a bunch of data continuously.

If it is used, then I will explain in detail what DMA is.

So anyway, the contents of Chapters 2 and 3 took about 190us in total,

and there is still plenty of time left for the whole process to operate at 1kHz.

In this chapter, we will see later how long it takes to receive, calculate checksum and parse the FS-iA6B receiver data.

What we're going to do in this chapter is similar to the last chapter 3, so it will probably take about the same amount of time as the last chapter.

This time is the first time of Chapter 4.

In this chapter, we will use FLYSKY's transmitter and receiver to remotely control the drone.

I will explain how to set the functions of the radio controller,

and how to bind the transmitter and receiver, and receive data from the radio controller.

When we receive data, we will use a serial protocol called i-BUS, and this serial protocol has more advantages than PWM or PPM.

So most of the latest receivers support the serial protocol.

The serial protocol differs slightly from company to company, but they are all almost the same.

In the last chapter, we used the UBX protocol for the M8N GPS, and if you understand it well, you can apply any serial protocol.

FLYSKY's receiver outputs data to FC using a serial protocol called i-BUS.

And FUTABA and FRSKY use a serial protocol called S-BUS, and other types of protocols are also used depending on the manufacturer.

But you understand one of them clearly, you will be able to understand the rest as well.

This is the beginning of chapter 4, we will set up FLYSKY's FS-i6 transmitter and bind it with FS-iA6B receiver.

Then, from then on, receiver outputs data from the radio controller in PWM, PPM, or serial data.

Among them, we will use the serial protocol(i-Bus) to receive data through UART.

This represents the basic concept of data flow.

When operating gimbals(sticks) or switches on the radio controller, the data is remotely transmitted to the receiver.

And the receiver sends the data to FC,

Among the methods of transferring data to FC,

PWM and PPM have been mainly used in the past, and the trend is to use serial method these days.

So we will also get data using serial interface.

The left one is FS-i6 transmitter and the right one is FS-iA6B receiver.

Although this transmitter/receiver set is low-cost, it has all the necessary features. So this is often used for beginners.

One thing to be aware of is that only the model with 'B' at the end like FS-iA6'B' outputs data in serial.

Besides this, there is just FS-iA6, which only outputs PWM and PPM. That means there is no serial output.

However, in this class, data will be received in serial protocol, so if you use FS-iA6, you cannot follow this course.

Be sure to pay attention to the model name when purchasing.

Now, let me explain about each specification,

First, the FS-i6 transmitter transmits 6 channel data out of a total of 10 control channels.

The radio frequency range is the ISM band of 2.4GHz and the bandwidth is 500kHz.

There are various configurations we can make, so I will explain only the necessary functions in this class.

Battery voltages are displayed on the screen. Transmitter and receiver battery voltages are displayed separately,

and transmitter is powered by 4xAA batteries.

And transmission range which is really important is not described in the manual.

So I had a range test during the outdoor flight,

communication was available about 300m far, and I wanted to try it further, but to do that, I had to cross the Han River, so I couldn't.

I found a video on YouTube about that communication was possible up to 2km in the open areas.

But I don't think it would be possible, and I guess that it is possible to go up to about 4-500m.

However, I strongly recommend you to fly within 300m, and it would be better to fly closer than this.

Because it is difficult to see and control the drone in a far distance. For your safety, fly close to you.

And finally, if updates the firmware of transmitter, all 10 channels are available.

If it's possible to use all 10 channels, it's a great value for the price. But I haven't tried it.

For those of you who want to try, search for FS-i6 firmware update on YouTube and you will find many related videos.

Just watch and follow the one of them.

But it doesn't seem to be the official firmware supported by FLYSKY.

Therefore, if something goes wrong, you may have to roll back, but I did not find a way to do that.

Therefore, YOU MUST BE CAREFUL WHEN UPDATING THE FIRMWARE!! In the worst case, you will have to buy the transmitter again.

In this class, there is no need to update the firmware because we use only 6 channels.

There are 4 channels of 2 sticks, 2 channels each on the left and right, and 4 switches A, B, C, and D and 2 variable resistors A and B at the top,

So there are a total 10 of control channels.

Channels here means a switch or a gimbal that can be controlled independently. That means there are 10 physical switches or gimbals that can be manipulated.

However, FS-i6 sends only 6-channel data to the receiver.

Left and right gimbals are fixedly assigned to 4 channels, 2 channels each. Then, 2 channels are left among 6 channels,

and user can select and assign 2 of the switches or variable resistors to those 2 channels.

Finally, in this class, we will use switch A and C. I'll explain how to assign channels a little later.

So the conclusion is that only 6 channels out of 10 channels can be assigned. But if you update the firmware, it is able to use all 10 of them.

And now let me explain the FS-iA6B receiver. This receiver supports 3 types of output: PWM PPM and Serial.

If you look at the pin out first, there are 6 PWM output pins,

and in the PWM method, 6 pins are used for 6 channel because each channel wave is physically output to a separate pin.

And there is one pin where PPM is output.

Since PPM is a method that can output multi-channel information with one pin, all 6-channel information are output through one single pin.

PPM output can be enabled or disabled, and the initial setting is Off.

And lastly there is one serial output pin and it is output in UART. The name of the serial protocol is i-Bus.

I will explain i-Bus protocol in detail in the next section.

The operating voltage is 4.0-8.4V.

We use 5V output from the BEC to supply power the receiver.

And the data output rate of i-Bus is about 7.5ms.

That is, data is received 133 times per second.

And it supports fail-safe which is very important,

If fail-safe is enabled by the transmitter, data is changed when the transmitter and receiver are disconnected.

Therefore, FC can detect whether the datalink between the transmitter and receiver is good or lost through the received data.

This is very closely related to safety, so I will explain it in a separate video at the end of this chapter.

Now, to explain the pins of the receiver, the red square is the +Vcc and the black one is GND.

And the 6 pins in blue square are PWM output pins.

If PPM output is enabled, PPM is output from the first pin marked in yellow not PWM.

And as mentioned earlier, the default PPM output is disabled.

And the pin marked in orange is used for binding with the transmitter.

And the pin we will use is marked in green, and i-Bus serial data is output from this pin.

And the SENS pin marked purple is probably used to send data back to the FS-i6 transmitter.

I'm not sure because I haven't used this function before, but, conversely, receiver could send sensor data to transmitter by configuration.

If you are curious, search for the FS-iA6B SENS PIN on Google.

Now, let mel explain how to connect the receiver and FC with jumper wires.

UART5 of FC is used for the receiver and it is connected to here (J5).

This connector is a 2.54mm 4-pin connector.

Each pin is arranged in order from left to right of FC: GND, +5V, RX and TX.

RX5 is connected to PD2 and TX5 is connected to PC12.

We're going to set UART parameters same as the receiver's. (8N1-115200)

We use the three pins in the upper right. It is GND, +Vcc and i-Bus serial output order from left.

The receiver and FC are connected as shown in the figure.

FC will only receive data from the receiver, so only RX5 pin of FC is used and TX5 is not.

Be sure to pay attention to the connection order when connecting cables! You can connect with a female to female jumper cable.

If you accidentally connect +Vcc and GND in reverse, about 3A overcurrent will suddenly occur.

Therefore, you must be careful not to connect them in reverse. Mis-connection may cause great damage to the receiver.

Connection is done like this. The rightmost pin of the FC is not connected to any pins.

Now, before to configure the transmitter and bind it to the receiver, let's first check the firmware version of the transmitter and do a factory reset.

Power on the transmitter first.

Note that transmitter and receiver have not been binded yet. When powered on, TX battery meter is shown above and also as a voltage below.

This is the transmitter's battery voltage.

If you press and hold the OK button, configuration menu appears.

And there are two main menus. You can select it using the UP/DOWN button.

First, enter the system setup on the left. Press OK button to enter.

And press the DOWN button several times, you can find a firmware version item on the next page.

If you enter, you can check the version like this.

The version of the transmitter I'm using is 2.0 and 16-Aug-2017 seems to be release date.

Even if the version is different from mine, it doesn't seem to be much difference in using it.

Now let's do a factory reset.

Press the Cancel button to return to the System Setup menu. Down a bit more and you will see an item called Factory Reset.

Select it and press OK button and it asks really want to do a factory reset.

Select YES and press OK.

Then, you will hear a high-frequency beep, which means that the setting has been applied.

Transmitter's been factory reset. After factory reset done, binding is released.

So, let's proceed transmitter configurations step by step from binding procedure.

Now let me explain how to bind the transmitter and receiver. First, turn off both transmitter and receiver.

I'm turning transmitter off and my receiver is already powered off.

Then, power on the receiver while plugging in the bundled jumper cable to the B/VCC port as shown in the picture on the right.

When you purchase the receiver, it will come with a binding jumper cable. Check the picture for the location of the B/VCC port.

After plugging the jumper cable into the B/VCC port like this, connect the power.

When power is on, the LED on the receiver flashes rapidly.

That means the receiver has now entered binding mode.

Now we're going to put the transmitter into bind mode as well. Turn it on while holding down the BIND button.

Let's do it. When binding is complete, the message RXBind OK is displayed on the screen.

And the LED on the receiver will stop flashing and be solid.

It means that it is bound and connected to the transmitter.

Rx battery voltage appeared on the screen. The battery meter is shown above and the voltage is shown below.

After binding is complete, remove the jumper cable. And turn the transmitter off again.

Now the LED on the receiver blinks slower than before. This means there is no connection with the transmitter.

Turn the transmitter on again. Once the binding is done, then connection is immediately established.

No need to bind again.

It doesn't matter if the order in which entering bind mode is changed.

You can put transmitter into bind mode first and put receiver later.

Now let's assign the stick and switch channels.

As I explained before, both left and right stick use 2 channels each, for a total of 4 channels.

The stick mode is default mode 2.

In mode 2, the horizontal direction is channel 1 and the vertical is channel 2, of the right stick

vertical direction is channel 3, and the horizontal is channel 4 of the left stick.

If changing the mode, the channel number of each directions of the each stick is changed.

To check this, enter the set up menu and select System setup on the left, you can find an item called Sticks mode.

When you select the item, it is now in mode 2, but you can change the mode with the UP/DOWN buttons.

There are a total of 4 modes, and only the location of the assigned channel varies depending on each mode.

and it is same that the sticks use a total of 4 channels.

We're going to use the default mode 2 as it is.

Even if we change the mode here, we can change it later through the source code as well.

So the stick mode doesn't really matter now.

So now we have 2 out of 6 channels left. Let's assign the remaining two channels.

After entering the setup menu again, this time select Functions setup on the right.

Select Aux. channels.

Channel 5 and 6 are assigned to VrA and VrB by default. They are the variable resistors in the upper center.

We'll re-assign this.

By pressing the UP/DOWN button, you can change the switch to be assigned. Choose SwA to channel 5.

And press the OK button once to select channel 6. Then channel 6 is selected. Choose SwC.

When the setting is complete, we have to save the setting.

But if you press OK button, just the other channel is selected.

Pressing and holding the OK button does not respond, and pressing CANCEL cancels the setting.

Ironically, you have to press and hold the CANCEL button to save the setting.

And then high-frequency beep sounds once and it turns back to the menu.

If enter again, the setting we made has been applied well.

We have completed all transmitter settings. In addition to this, there are many other functions,

so if you are curious, it would be good to make various configurations.

However, you should be careful when changing the transmitter settings after completing this lesson.

In particular, changing the channel settings can cause strange controls.

For example, yaw axis is rotating even moving the throttle stick, etc.

Therefore, it is recommended not to change the "Aux. channels" setting once it is set.

Now let's check if the settings we have made are working.

Press and hold the OK button to enter the setting menu. Select Functions setup on the right and select Display item.

Then, the movement of the sticks and switches assigned 6 channels is displayed as a bar graph.

If you move the right stick in horizon direction, the graph of channel 1 changes.

And the vertical direction is channel 2,

the vertical direction of the left stick is channel 3, and the horizontal direction is channel 4.

And channels 5 and 6 are assigned to SwA and SwC.

Moving SwA changes the graph of Ch5. The bar graph of Ch5 changes.

The graph does not change even if you move the switches that are not assigned such as SwB.

And SwC has been assigned to channel 6. SwC is a 3-stage switch. So, three operations are possible: top, middle, and bottom.

Now it is located top.

Moved to middle,

and bottom.

The graph of Ch6 changes as it is moved.

SwD is also not assigned, so the graph doesn't change even if you manipulate it.

In this way, we checked that everything we set up works well.

Now, the stick movement data is output to i-Bus, and we need to check whether the data is received well in FC.

One thing to say before that, when you turn on the transmitter, throttle stick and all switches must be in their default positions.

If you turn on the transmitter in a non-default position, a warning message is displayed and connection is not established.

The default position is with all switches at the top and the throttle stick at the bottom.

I'll turn the transmitter off and turn it on back with the throttle stick is a bit raised.

When I turn on while putting the throttle stick up a bit, an error message appears and the buzzer beeps.

And connection is not established. The LED on the receiver is also blinking.

Now I'm going to lower the throttle down to its default position. Then, the connection now established.

Again, I will turn the power off and put the SwA down and turn on the power back.

Again, a warning message appears and the connection is not established. I put SwA up back to the default location and the connection was established.

The reason for this is that if you turn on the transmitter with the throttle stick raised, motors may unexpectedly rotate and cause an accident.

The same for switches, usually these switches are used to give commands to the drone,

for example, assuming the power is turned on with auto-flight commands enabled,

the drone can switch to auto-flight as soon as the transmitter is turned on. Because of these reasons, transmitter has its own safety functions.

So, FS-i6/iA6B has good features even though its low-cost. Therefore, it is really good for beginners.

The FS-iA6B receiver is connected to UART5 of FC. UART parameters are async mode, data length 8 bits, baud rate 115200bps,

no parity and, stop bit is 1 bit. And we will use rx interrupt when receiving data.

And since we will only receive i-Bus messages, we will enable not tx, but rx.

And UART6 is a channel to communicate with PC and has already been configured in Chapter 1.

But we lowered the baud to 9600bps to interface with the GPS in the past.

But this time we will change it to 115200bps same as UART5. So, all UART parameters need to be configured as shown in the screen.

Now, we're going to receive i-Bus data to FC, and then transfer the data back to the PC as it is.

and check it with the terminal software how the data rules and forms are.

This time will be also very fun. So now let's write the source code.

Duplicate the "3-5. M8N Configuration" folder we worked on last time. Name the new folder "4-1. FS-iA6B PC Interface".

And after copying the folder name, go into the folder and rename the .ioc file to the same as the folder name.

And delete the .elf file and Debug folder. After that, run CubeIDE.

First, close all open projects and files, and select Import project.

Select Exsiting projects into workspace and select the 4-1 folder just duplicated.

And click the Finish button.

When the import is complete, double-click the .ioc file to launch CubeMX.

Expand the Connectivity tab and select UART5.

Select asynchronous mode. And open Parameter Settings tab below.

Nothing to change Basic Parameters,

and in the Advanced Parameters below, we will only receive data, so select the Data Direction as Receive Only.

And since we will use rx interrupt, go to NVIC Settings tab and check Enable UART5 global interrupt.

Looking at the right Pinout view, PD2 and PC12 are selected.

Since the Tx pin will not be used, PC12 will not be connected.

Now move to the Project Manager tab and Advanced Settings. Change UART5 from HAL to LL.

And back to the Pinout & Configuration tab,

we've set the baud rate of UART6 to 9600bps in the last chapter, but change it to 115200bps this time.

Now we made all configurations in CubeMX. Let's generate code.

After the code generation is complete, let's open the main.c file.

Scroll down.

UART5 initialization function is called in the main().

And we called "LL_USART_EnableIT_RXNE()" to enable UART4 and UART6 rx interrupt before.

Since we will use rx interrupt of UART5 as well for i-Bus data reception, we call it once more.

And pass "UART5" as an argument. And scroll down further.

In the while() loop, the code that receives the ubx message and checks the checksum will not be used this time, so let's comment out them.

Now, FS-iA6B sends data to FC in i-Bus, and FC receives the data through UART5.

So, what we are going to do this time is to send the received data directly to the PC and check the data on PC.

In other words, we will make a program that transfers data from UART5 to UART6 .

We did the very same thing in Chapter 3 to check M8N GPS data.

Open the stm32f4xx_it.c file. If you scroll all the way down, UART5 interrupt handler function has been generated.

Now, when data is received from UART5, this interrupt handler will be called. We just need to write some source code that sends the received data back to UART6.

The source code have been written in USART6_IRQHandler(). Copy the source code in that function and paste it into UART5_IRQHandler() as it is.

Then replace all "USART6" with "UART5". Note that there is no 'S'.

When rx interrupt is requested, the data must be stored in a temporary variable first.

Replace all "uart6_xxx" with "uart5_xxx". These two variables have not been declared yet, so let's declare them.

Scroll up to the top. Declare "uint8_t uart5_rx_flag = 0;" and "uint8_t uart5_rx_data = 0;"

I think the flag variable will not be used, but we'll declare it anyway.

Come down again,

Now that the received data needs to be transmitted as it is to USART6,

"USART6" should be passed as the first argument of LL_USART_TransmitData8(),

and "uart5_rx_data" in which the received data is stored should be passed as the second argument. Complete "LL_USART_TransmitData8(USART6, uart5_rx_data);"

And before calling "LL_USART_TransmitData8()", we need to check if the Tx register is empty.

This is a mistake I made before.

When using HAL, the transmit function checks whether the tx register is empty itself, but when using LL, you have to write your own checking code yourself.

Let's return to main.c and scroll up to the top.

we newly added "while(!LL_USART_IsActiveFlag_TXE(USART6));" in "int _write()" last time.

Copy this and back to stm32f4xx_it.c, and paste it right above "LL_USART_TransmitData8()".

And in "USART6_IRQHandler()", the source code that transmits the data received from USART6(PC) to UART4 remains,

paste the same code here to check if the Tx register is empty. And replace the argument with "UART4".

And since this code is not going to be used, comment it out. There is nothing to do when data received from the PC.

So, we wrote all source code today. Now, let's think about what happens.

The data sent from FS-i6 transmitter will be received to UART5 of FC through FS-iA6B receiver,

and the data is stored in a temporary variable and sent back to the USART6 as it is.

Since USART6 is connected to the PC, that is, we built a program that transfers data from FS-iA6B to the PC.

So now let's build and download this code. Press F11.

If build isn't performed at once, try to build again.

When this window pops up, click OK.

Download is complete. Run it.

First, remove the power of both transmitter and receiver. Turn off the transmitter and also remove the battery from FC.

Then, turn only the FC on again.

FC and receiver have been powered on.

And the connection between receiver and transmitter has not been established yet since powered on.

And then, run the terminal software.

We changed baud rate of USART6 to 115200bps for PC, so select 115200bps and connect comport.

Com port connected, but no data is printed yet.

This means that the receiver is not sending data to the FC. Also, the connection between transmitter and receiver has not been established.

Here if I turn on the transmitter, transmitter starts sending data to the receiver,

and if the data is received via UART5, it will be delivered to the UART6(PC) and printed on terminal.

Now I'm turning on the transmitter.

As soon as the power is turned on, data started to be printed! A lot of data come in. I'm going to disconnect comport.

And now I'm just going to turn off the transmitter again.

Then, unlike before, receiver has been disconnected after once connection established with transmitter.

Remember that. And looking at the received data, some data are being received repeatedly.

The reason the data was received repeatedly is because I did not operate any stick or switch.

If I operate them, the data will be changed.

This picture was captured while moving the stick of the radio controller.

Each line is the one single i-Bus message, and if you look at the received data, the data is slightly different.

First of all, all messages start with 0x20 0x40 are the same.

And the data that came in after that was a little different. Then, the same data is received again from 0xE8 0x03,

and the values ​​of the last two bytes are different. All data is hexadecimal.

Now, I will briefly explain the message structure of the i-Bus protocol. And deep explanation will be given in the next time.

i-Bus messages start with 0x20 0x40. This is almost equivalent to 2 bytes of SYNC CHAR in the UBX protocol.

After that, the channel data comes in successively. And the last two bytes are the checksum.

And then a total of 14-channel data are received, but I explained that the FS-i6 transmits only 6-channel data.

That is, only the first 6-channel data are valid.

i-Bus protocol seems to be defined so that a total of 14 channels can be transmitted. We only use the first 6-channel data.

If you update the firmware of FS-i6 transmitter, you might be able to use 10 channels. Then you should use 10-channel data from the beginning of channel data.

I'll give you more information about i-Bus protocol next time. And I have one more thing to explain.

I told you to remember that receiver has been disconnected after once the connection established with transmitter.

Since the transmitter's been turned off, of course the connection is lost. The LED on the receiver also started blinking slowly.

At the first time, when the receiver was turned on with connection not established, data wasn't sent to the FC at all.

No data was printed to the terminal.

However, like now, if the receiver and transmitter are disconnected after connection established, the receiver keeps sending data to FC.

If connecting comport again, the data is being printed even the connection has been lost.

Let's check. When I connect, the data keeps coming in.

This is the condition that failsafe can be activated.

Because the connection between transmitter and receiver was established and then suddenly lost.

The receiver does not know why the connection was lost,

but the condition for failsafe activation is met because it has lost its connection with the transmitter.

However, because we haven't enabled failsafe yet, it will not be activated.

To enable failsafe, we should set up the failsafe function on the transmitter. That will be explained at the end of this chapter.

With failsafe enabled, if the connection is lost after connection established for any reason, some of the data is changed.

This means that if FC detects the data is changed, FC can also detect that communication has been lost.

But now, there is no change in the data because we did not enable the failsafe function.

After that, the FC should perform some kind of safety functions such as auto landing.

But in this class, we will write source code to check whether failsafe is triggered or not at the end of this chapter.

To recap, this time we set up the transmitter and made binding with the receiver.

we also checked the received i-Bus data through the terminal. Then, in the next video, I will explain in detail what this data means.

Then see you next time. thank you.

```

### Ch4 Radio Data
- data parsing
#### video 14
- iBus message

{% include youtubePlayer.html id=page.youtubeID %}

```diff
Until last time, we have completed Chapter 3. GPS data receiving and parsing.

In Chapter 3, we received and analyzed the ubx message of the M8N GPS, parsed and stored into the structure variable we defined.

And we wrote M8N setting code so that FC can directly set M8N without u-center.

Chapter 2 sensor interface took about 175us, and chapter 3 GPS data reception took about 11us.

I explained that because the rx interrupt was used when receiving data,

the time to actually receive data was negligible, so it was excluded from the timeline.

If DMA is also used together,

CPU resources are not consumed at all because the process of receiving data and storing it in a temporary buffer is handled in hardware.

This makes possible the CPU to perform other operations in the meantime.

However, we have not used DMA in the data receiving part until now, and we will not use it in this Chapter 4.

Maybe we might use DMA later in Chapter 7. radio data communication. Because FC will send a bunch of data continuously.

If it is used, then I will explain in detail what DMA is.

So anyway, the contents of Chapters 2 and 3 took about 190us in total,

and there is still plenty of time left for the whole process to operate at 1kHz.

In this chapter, we will see later how long it takes to receive, calculate checksum and parse the FS-iA6B receiver data.

What we're going to do in this chapter is similar to the last chapter 3, so it will probably take about the same amount of time as the last chapter.

This time is the first time of Chapter 4.

In this chapter, we will use FLYSKY's transmitter and receiver to remotely control the drone.

I will explain how to set the functions of the radio controller,

and how to bind the transmitter and receiver, and receive data from the radio controller.

When we receive data, we will use a serial protocol called i-BUS, and this serial protocol has more advantages than PWM or PPM.

So most of the latest receivers support the serial protocol.

The serial protocol differs slightly from company to company, but they are all almost the same.

In the last chapter, we used the UBX protocol for the M8N GPS, and if you understand it well, you can apply any serial protocol.

FLYSKY's receiver outputs data to FC using a serial protocol called i-BUS.

And FUTABA and FRSKY use a serial protocol called S-BUS, and other types of protocols are also used depending on the manufacturer.

But you understand one of them clearly, you will be able to understand the rest as well.

This is the beginning of chapter 4, we will set up FLYSKY's FS-i6 transmitter and bind it with FS-iA6B receiver.

Then, from then on, receiver outputs data from the radio controller in PWM, PPM, or serial data.

Among them, we will use the serial protocol(i-Bus) to receive data through UART.

This represents the basic concept of data flow.

When operating gimbals(sticks) or switches on the radio controller, the data is remotely transmitted to the receiver.

And the receiver sends the data to FC,

Among the methods of transferring data to FC,

PWM and PPM have been mainly used in the past, and the trend is to use serial method these days.

So we will also get data using serial interface.

The left one is FS-i6 transmitter and the right one is FS-iA6B receiver.

Although this transmitter/receiver set is low-cost, it has all the necessary features. So this is often used for beginners.

One thing to be aware of is that only the model with 'B' at the end like FS-iA6'B' outputs data in serial.

Besides this, there is just FS-iA6, which only outputs PWM and PPM. That means there is no serial output.

However, in this class, data will be received in serial protocol, so if you use FS-iA6, you cannot follow this course.

Be sure to pay attention to the model name when purchasing.

Now, let me explain about each specification,

First, the FS-i6 transmitter transmits 6 channel data out of a total of 10 control channels.

The radio frequency range is the ISM band of 2.4GHz and the bandwidth is 500kHz.

There are various configurations we can make, so I will explain only the necessary functions in this class.

Battery voltages are displayed on the screen. Transmitter and receiver battery voltages are displayed separately,

and transmitter is powered by 4xAA batteries.

And transmission range which is really important is not described in the manual.

So I had a range test during the outdoor flight,

communication was available about 300m far, and I wanted to try it further, but to do that, I had to cross the Han River, so I couldn't.

I found a video on YouTube about that communication was possible up to 2km in the open areas.

But I don't think it would be possible, and I guess that it is possible to go up to about 4-500m.

However, I strongly recommend you to fly within 300m, and it would be better to fly closer than this.

Because it is difficult to see and control the drone in a far distance. For your safety, fly close to you.

And finally, if updates the firmware of transmitter, all 10 channels are available.

If it's possible to use all 10 channels, it's a great value for the price. But I haven't tried it.

For those of you who want to try, search for FS-i6 firmware update on YouTube and you will find many related videos.

Just watch and follow the one of them.

But it doesn't seem to be the official firmware supported by FLYSKY.

Therefore, if something goes wrong, you may have to roll back, but I did not find a way to do that.

Therefore, YOU MUST BE CAREFUL WHEN UPDATING THE FIRMWARE!! In the worst case, you will have to buy the transmitter again.

In this class, there is no need to update the firmware because we use only 6 channels.

There are 4 channels of 2 sticks, 2 channels each on the left and right, and 4 switches A, B, C, and D and 2 variable resistors A and B at the top,

So there are a total 10 of control channels.

Channels here means a switch or a gimbal that can be controlled independently. That means there are 10 physical switches or gimbals that can be manipulated.

However, FS-i6 sends only 6-channel data to the receiver.

Left and right gimbals are fixedly assigned to 4 channels, 2 channels each. Then, 2 channels are left among 6 channels,

and user can select and assign 2 of the switches or variable resistors to those 2 channels.

Finally, in this class, we will use switch A and C. I'll explain how to assign channels a little later.

So the conclusion is that only 6 channels out of 10 channels can be assigned. But if you update the firmware, it is able to use all 10 of them.

And now let me explain the FS-iA6B receiver. This receiver supports 3 types of output: PWM PPM and Serial.

If you look at the pin out first, there are 6 PWM output pins,

and in the PWM method, 6 pins are used for 6 channel because each channel wave is physically output to a separate pin.

And there is one pin where PPM is output.

Since PPM is a method that can output multi-channel information with one pin, all 6-channel information are output through one single pin.

PPM output can be enabled or disabled, and the initial setting is Off.

And lastly there is one serial output pin and it is output in UART. The name of the serial protocol is i-Bus.

I will explain i-Bus protocol in detail in the next section.

The operating voltage is 4.0-8.4V.

We use 5V output from the BEC to supply power the receiver.

And the data output rate of i-Bus is about 7.5ms.

That is, data is received 133 times per second.

And it supports fail-safe which is very important,

If fail-safe is enabled by the transmitter, data is changed when the transmitter and receiver are disconnected.

Therefore, FC can detect whether the datalink between the transmitter and receiver is good or lost through the received data.

This is very closely related to safety, so I will explain it in a separate video at the end of this chapter.

Now, to explain the pins of the receiver, the red square is the +Vcc and the black one is GND.

And the 6 pins in blue square are PWM output pins.

If PPM output is enabled, PPM is output from the first pin marked in yellow not PWM.

And as mentioned earlier, the default PPM output is disabled.

And the pin marked in orange is used for binding with the transmitter.

And the pin we will use is marked in green, and i-Bus serial data is output from this pin.

And the SENS pin marked purple is probably used to send data back to the FS-i6 transmitter.

I'm not sure because I haven't used this function before, but, conversely, receiver could send sensor data to transmitter by configuration.

If you are curious, search for the FS-iA6B SENS PIN on Google.

Now, let mel explain how to connect the receiver and FC with jumper wires.

UART5 of FC is used for the receiver and it is connected to here (J5).

This connector is a 2.54mm 4-pin connector.

Each pin is arranged in order from left to right of FC: GND, +5V, RX and TX.

RX5 is connected to PD2 and TX5 is connected to PC12.

We're going to set UART parameters same as the receiver's. (8N1-115200)

We use the three pins in the upper right. It is GND, +Vcc and i-Bus serial output order from left.

The receiver and FC are connected as shown in the figure.

FC will only receive data from the receiver, so only RX5 pin of FC is used and TX5 is not.

Be sure to pay attention to the connection order when connecting cables! You can connect with a female to female jumper cable.

If you accidentally connect +Vcc and GND in reverse, about 3A overcurrent will suddenly occur.

Therefore, you must be careful not to connect them in reverse. Mis-connection may cause great damage to the receiver.

Connection is done like this. The rightmost pin of the FC is not connected to any pins.

Now, before to configure the transmitter and bind it to the receiver, let's first check the firmware version of the transmitter and do a factory reset.

Power on the transmitter first.

Note that transmitter and receiver have not been binded yet. When powered on, TX battery meter is shown above and also as a voltage below.

This is the transmitter's battery voltage.

If you press and hold the OK button, configuration menu appears.

And there are two main menus. You can select it using the UP/DOWN button.

First, enter the system setup on the left. Press OK button to enter.

And press the DOWN button several times, you can find a firmware version item on the next page.

If you enter, you can check the version like this.

The version of the transmitter I'm using is 2.0 and 16-Aug-2017 seems to be release date.

Even if the version is different from mine, it doesn't seem to be much difference in using it.

Now let's do a factory reset.

Press the Cancel button to return to the System Setup menu. Down a bit more and you will see an item called Factory Reset.

Select it and press OK button and it asks really want to do a factory reset.

Select YES and press OK.

Then, you will hear a high-frequency beep, which means that the setting has been applied.

Transmitter's been factory reset. After factory reset done, binding is released.

So, let's proceed transmitter configurations step by step from binding procedure.

Now let me explain how to bind the transmitter and receiver. First, turn off both transmitter and receiver.

I'm turning transmitter off and my receiver is already powered off.

Then, power on the receiver while plugging in the bundled jumper cable to the B/VCC port as shown in the picture on the right.

When you purchase the receiver, it will come with a binding jumper cable. Check the picture for the location of the B/VCC port.

After plugging the jumper cable into the B/VCC port like this, connect the power.

When power is on, the LED on the receiver flashes rapidly.

That means the receiver has now entered binding mode.

Now we're going to put the transmitter into bind mode as well. Turn it on while holding down the BIND button.

Let's do it. When binding is complete, the message RXBind OK is displayed on the screen.

And the LED on the receiver will stop flashing and be solid.

It means that it is bound and connected to the transmitter.

Rx battery voltage appeared on the screen. The battery meter is shown above and the voltage is shown below.

After binding is complete, remove the jumper cable. And turn the transmitter off again.

Now the LED on the receiver blinks slower than before. This means there is no connection with the transmitter.

Turn the transmitter on again. Once the binding is done, then connection is immediately established.

No need to bind again.

It doesn't matter if the order in which entering bind mode is changed.

You can put transmitter into bind mode first and put receiver later.

Now let's assign the stick and switch channels.

As I explained before, both left and right stick use 2 channels each, for a total of 4 channels.

The stick mode is default mode 2.

In mode 2, the horizontal direction is channel 1 and the vertical is channel 2, of the right stick

vertical direction is channel 3, and the horizontal is channel 4 of the left stick.

If changing the mode, the channel number of each directions of the each stick is changed.

To check this, enter the set up menu and select System setup on the left, you can find an item called Sticks mode.

When you select the item, it is now in mode 2, but you can change the mode with the UP/DOWN buttons.

There are a total of 4 modes, and only the location of the assigned channel varies depending on each mode.

and it is same that the sticks use a total of 4 channels.

We're going to use the default mode 2 as it is.

Even if we change the mode here, we can change it later through the source code as well.

So the stick mode doesn't really matter now.

So now we have 2 out of 6 channels left. Let's assign the remaining two channels.

After entering the setup menu again, this time select Functions setup on the right.

Select Aux. channels.

Channel 5 and 6 are assigned to VrA and VrB by default. They are the variable resistors in the upper center.

We'll re-assign this.

By pressing the UP/DOWN button, you can change the switch to be assigned. Choose SwA to channel 5.

And press the OK button once to select channel 6. Then channel 6 is selected. Choose SwC.

When the setting is complete, we have to save the setting.

But if you press OK button, just the other channel is selected.

Pressing and holding the OK button does not respond, and pressing CANCEL cancels the setting.

Ironically, you have to press and hold the CANCEL button to save the setting.

And then high-frequency beep sounds once and it turns back to the menu.

If enter again, the setting we made has been applied well.

We have completed all transmitter settings. In addition to this, there are many other functions,

so if you are curious, it would be good to make various configurations.

However, you should be careful when changing the transmitter settings after completing this lesson.

In particular, changing the channel settings can cause strange controls.

For example, yaw axis is rotating even moving the throttle stick, etc.

Therefore, it is recommended not to change the "Aux. channels" setting once it is set.

Now let's check if the settings we have made are working.

Press and hold the OK button to enter the setting menu. Select Functions setup on the right and select Display item.

Then, the movement of the sticks and switches assigned 6 channels is displayed as a bar graph.

If you move the right stick in horizon direction, the graph of channel 1 changes.

And the vertical direction is channel 2,

the vertical direction of the left stick is channel 3, and the horizontal direction is channel 4.

And channels 5 and 6 are assigned to SwA and SwC.

Moving SwA changes the graph of Ch5. The bar graph of Ch5 changes.

The graph does not change even if you move the switches that are not assigned such as SwB.

And SwC has been assigned to channel 6. SwC is a 3-stage switch. So, three operations are possible: top, middle, and bottom.

Now it is located top.

Moved to middle,

and bottom.

The graph of Ch6 changes as it is moved.

SwD is also not assigned, so the graph doesn't change even if you manipulate it.

In this way, we checked that everything we set up works well.

Now, the stick movement data is output to i-Bus, and we need to check whether the data is received well in FC.

One thing to say before that, when you turn on the transmitter, throttle stick and all switches must be in their default positions.

If you turn on the transmitter in a non-default position, a warning message is displayed and connection is not established.

The default position is with all switches at the top and the throttle stick at the bottom.

I'll turn the transmitter off and turn it on back with the throttle stick is a bit raised.

When I turn on while putting the throttle stick up a bit, an error message appears and the buzzer beeps.

And connection is not established. The LED on the receiver is also blinking.

Now I'm going to lower the throttle down to its default position. Then, the connection now established.

Again, I will turn the power off and put the SwA down and turn on the power back.

Again, a warning message appears and the connection is not established. I put SwA up back to the default location and the connection was established.

The reason for this is that if you turn on the transmitter with the throttle stick raised, motors may unexpectedly rotate and cause an accident.

The same for switches, usually these switches are used to give commands to the drone,

for example, assuming the power is turned on with auto-flight commands enabled,

the drone can switch to auto-flight as soon as the transmitter is turned on. Because of these reasons, transmitter has its own safety functions.

So, FS-i6/iA6B has good features even though its low-cost. Therefore, it is really good for beginners.

The FS-iA6B receiver is connected to UART5 of FC. UART parameters are async mode, data length 8 bits, baud rate 115200bps,

no parity and, stop bit is 1 bit. And we will use rx interrupt when receiving data.

And since we will only receive i-Bus messages, we will enable not tx, but rx.

And UART6 is a channel to communicate with PC and has already been configured in Chapter 1.

But we lowered the baud to 9600bps to interface with the GPS in the past.

But this time we will change it to 115200bps same as UART5. So, all UART parameters need to be configured as shown in the screen.

Now, we're going to receive i-Bus data to FC, and then transfer the data back to the PC as it is.

and check it with the terminal software how the data rules and forms are.

This time will be also very fun. So now let's write the source code.

Duplicate the "3-5. M8N Configuration" folder we worked on last time. Name the new folder "4-1. FS-iA6B PC Interface".

And after copying the folder name, go into the folder and rename the .ioc file to the same as the folder name.

And delete the .elf file and Debug folder. After that, run CubeIDE.

First, close all open projects and files, and select Import project.

Select Exsiting projects into workspace and select the 4-1 folder just duplicated.

And click the Finish button.

When the import is complete, double-click the .ioc file to launch CubeMX.

Expand the Connectivity tab and select UART5.

Select asynchronous mode. And open Parameter Settings tab below.

Nothing to change Basic Parameters,

and in the Advanced Parameters below, we will only receive data, so select the Data Direction as Receive Only.

And since we will use rx interrupt, go to NVIC Settings tab and check Enable UART5 global interrupt.

Looking at the right Pinout view, PD2 and PC12 are selected.

Since the Tx pin will not be used, PC12 will not be connected.

Now move to the Project Manager tab and Advanced Settings. Change UART5 from HAL to LL.

And back to the Pinout & Configuration tab,

we've set the baud rate of UART6 to 9600bps in the last chapter, but change it to 115200bps this time.

Now we made all configurations in CubeMX. Let's generate code.

After the code generation is complete, let's open the main.c file.

Scroll down.

UART5 initialization function is called in the main().

And we called "LL_USART_EnableIT_RXNE()" to enable UART4 and UART6 rx interrupt before.

Since we will use rx interrupt of UART5 as well for i-Bus data reception, we call it once more.

And pass "UART5" as an argument. And scroll down further.

In the while() loop, the code that receives the ubx message and checks the checksum will not be used this time, so let's comment out them.

Now, FS-iA6B sends data to FC in i-Bus, and FC receives the data through UART5.

So, what we are going to do this time is to send the received data directly to the PC and check the data on PC.

In other words, we will make a program that transfers data from UART5 to UART6 .

We did the very same thing in Chapter 3 to check M8N GPS data.

Open the stm32f4xx_it.c file. If you scroll all the way down, UART5 interrupt handler function has been generated.

Now, when data is received from UART5, this interrupt handler will be called. We just need to write some source code that sends the received data back to UART6.

The source code have been written in USART6_IRQHandler(). Copy the source code in that function and paste it into UART5_IRQHandler() as it is.

Then replace all "USART6" with "UART5". Note that there is no 'S'.

When rx interrupt is requested, the data must be stored in a temporary variable first.

Replace all "uart6_xxx" with "uart5_xxx". These two variables have not been declared yet, so let's declare them.

Scroll up to the top. Declare "uint8_t uart5_rx_flag = 0;" and "uint8_t uart5_rx_data = 0;"

I think the flag variable will not be used, but we'll declare it anyway.

Come down again,

Now that the received data needs to be transmitted as it is to USART6,

"USART6" should be passed as the first argument of LL_USART_TransmitData8(),

and "uart5_rx_data" in which the received data is stored should be passed as the second argument. Complete "LL_USART_TransmitData8(USART6, uart5_rx_data);"

And before calling "LL_USART_TransmitData8()", we need to check if the Tx register is empty.

This is a mistake I made before.

When using HAL, the transmit function checks whether the tx register is empty itself, but when using LL, you have to write your own checking code yourself.

Let's return to main.c and scroll up to the top.

we newly added "while(!LL_USART_IsActiveFlag_TXE(USART6));" in "int _write()" last time.

Copy this and back to stm32f4xx_it.c, and paste it right above "LL_USART_TransmitData8()".

And in "USART6_IRQHandler()", the source code that transmits the data received from USART6(PC) to UART4 remains,

paste the same code here to check if the Tx register is empty. And replace the argument with "UART4".

And since this code is not going to be used, comment it out. There is nothing to do when data received from the PC.

So, we wrote all source code today. Now, let's think about what happens.

The data sent from FS-i6 transmitter will be received to UART5 of FC through FS-iA6B receiver,

and the data is stored in a temporary variable and sent back to the USART6 as it is.

Since USART6 is connected to the PC, that is, we built a program that transfers data from FS-iA6B to the PC.

So now let's build and download this code. Press F11.

If build isn't performed at once, try to build again.

When this window pops up, click OK.

Download is complete. Run it.

First, remove the power of both transmitter and receiver. Turn off the transmitter and also remove the battery from FC.

Then, turn only the FC on again.

FC and receiver have been powered on.

And the connection between receiver and transmitter has not been established yet since powered on.

And then, run the terminal software.

We changed baud rate of USART6 to 115200bps for PC, so select 115200bps and connect comport.

Com port connected, but no data is printed yet.

This means that the receiver is not sending data to the FC. Also, the connection between transmitter and receiver has not been established.

Here if I turn on the transmitter, transmitter starts sending data to the receiver,

and if the data is received via UART5, it will be delivered to the UART6(PC) and printed on terminal.

Now I'm turning on the transmitter.

As soon as the power is turned on, data started to be printed! A lot of data come in. I'm going to disconnect comport.

And now I'm just going to turn off the transmitter again.

Then, unlike before, receiver has been disconnected after once connection established with transmitter.

Remember that. And looking at the received data, some data are being received repeatedly.

The reason the data was received repeatedly is because I did not operate any stick or switch.

If I operate them, the data will be changed.

This picture was captured while moving the stick of the radio controller.

Each line is the one single i-Bus message, and if you look at the received data, the data is slightly different.

First of all, all messages start with 0x20 0x40 are the same.

And the data that came in after that was a little different. Then, the same data is received again from 0xE8 0x03,

and the values ​​of the last two bytes are different. All data is hexadecimal.

Now, I will briefly explain the message structure of the i-Bus protocol. And deep explanation will be given in the next time.

i-Bus messages start with 0x20 0x40. This is almost equivalent to 2 bytes of SYNC CHAR in the UBX protocol.

After that, the channel data comes in successively. And the last two bytes are the checksum.

And then a total of 14-channel data are received, but I explained that the FS-i6 transmits only 6-channel data.

That is, only the first 6-channel data are valid.

i-Bus protocol seems to be defined so that a total of 14 channels can be transmitted. We only use the first 6-channel data.

If you update the firmware of FS-i6 transmitter, you might be able to use 10 channels. Then you should use 10-channel data from the beginning of channel data.

I'll give you more information about i-Bus protocol next time. And I have one more thing to explain.

I told you to remember that receiver has been disconnected after once the connection established with transmitter.

Since the transmitter's been turned off, of course the connection is lost. The LED on the receiver also started blinking slowly.

At the first time, when the receiver was turned on with connection not established, data wasn't sent to the FC at all.

No data was printed to the terminal.

However, like now, if the receiver and transmitter are disconnected after connection established, the receiver keeps sending data to FC.

If connecting comport again, the data is being printed even the connection has been lost.

Let's check. When I connect, the data keeps coming in.

This is the condition that failsafe can be activated.

Because the connection between transmitter and receiver was established and then suddenly lost.

The receiver does not know why the connection was lost,

but the condition for failsafe activation is met because it has lost its connection with the transmitter.

However, because we haven't enabled failsafe yet, it will not be activated.

To enable failsafe, we should set up the failsafe function on the transmitter. That will be explained at the end of this chapter.

With failsafe enabled, if the connection is lost after connection established for any reason, some of the data is changed.

This means that if FC detects the data is changed, FC can also detect that communication has been lost.

But now, there is no change in the data because we did not enable the failsafe function.

After that, the FC should perform some kind of safety functions such as auto landing.

But in this class, we will write source code to check whether failsafe is triggered or not at the end of this chapter.

To recap, this time we set up the transmitter and made binding with the receiver.

we also checked the received i-Bus data through the terminal. Then, in the next video, I will explain in detail what this data means.

Then see you next time. thank you.

```


#### video 15
- iBus message

{% include youtubePlayer.html id=page.youtubeID15 %}

```diff
And we made channel configurations for transmitter and checked i-Bus message reception.

Now, this time, I will explain the structure of i-Bus message in detail, and write the source code that receives the i-Bus message and verifies the checksum.

Message parsing and storing into a structure variable will be done next time.

First of all, it is a bit difficult to find a document where the i-Bus protocol is defined.

Even in the Flysky's website, I couldn't find any description of i-Bus. There doesn't seem to be an official document for i-Bus on the internet either.

Therefore, I would like to point out that what I'm going to explain about i-Bus may not be 100% accurate.

The i-Bus protocol is similar to the ubx protocol in Chapter 3, but has a simpler structure.

The i-Bus protocol also uses UART interface. UART parameters are 8bit length, no parity, 1 stop bit and 115200bps baud rate.

To briefly define i-Bus protocol, it's a serial communication protocol developed by Flysky,

Each message frame has 32 bytes data length and starting with two fixed bytes 0x20 0x40.

It contains joystick and switch movement data of the transmitter.

If the transmitter remotely sends the joystick and switch data to the receiver, receiver passes the information into FC in one of PWM, PPM or serial methods,

and the name of the serial communication protocol is i-Bus.

Let me explain the i-Bus message structure. The first 2 bytes start with 0x20 0x40. They are fixed values ​​and indicate the start of a message frame.

After that, channel information starts coming in in order, and a total of 14 channels from channel 1 to channel 14 are received.

Each channel has 2 bytes size and is an unsigned integer.

And each channel has little endian byte order which is the first received byte is the lower byte.

When all 14 channel data is received, finally 2 bytes of checksum are received.

These 2 bytes are combined to form one checksum and it has also little endian byte order.

And the transmitter sends only 6-channel data to the receiver,

but the receiver sends a whole 14-channel data to FC. However, channels 7 to 14 are meaningless data that is not used.

These unused channels are fixed at 0x05 0xdc.

An i-Bus message consists of the first 2 bytes SYNC CHAR, 28 bytes channel data and the last 2 bytes checksum. So it has a total length of 32 bytes.

I said that the first 2 bytes have a fixed value of 0x20 0x40.

After some searching on the internet, I could find that the first byte 0x20 is 32 in decimal, which represents the length of the message,

and the second byte 0x40 is the message ID. But it's not described in the official documentation, so I'm not sure.

Anyway, you understand that the first 2 bytes 0x20 0x40 come in as a fixed value.

And regardless of the number of channels of the transmitter, the channel data of the i-Bus message is fixed to 14 channels.

Since we only use 6 channels, the remaining 8 channel data is unused data,

and if updating the transmitter firmware to use 10 channels, the last 4 channel data will be unused.

It seems that the i-Bus protocol was made to support up to 14 channels.

And the last 2 bytes are combined to form a checksum.

Even in the ubx protocol, the checksum was 2 bytes long as well, but they were two separated single-byte checksums.

So i-Bus checksum is a bit different from the ubx's. The checksum calculation method is either different too.

Each channel data is represented by two bytes 16 bits.

Among them, the lower 12 bits are the stick data of the remote controller, and the upper 4 bits seem to indicate the status of the receiver.

Therefore, when moving joystick, the channel data is expressed in 12 bits, so the value range ​​is from 0 to 2047.

But by default, it has a value between 1000 and 2000.

It seems that the range can be used a little wider than 1000~2000 through the transmitter settings,

but we use the default settings in this class.

And I couldn't confirm exactly what state these flag bits represent because there was no manual.

But the important thing is that these flag bits change slightly when Fail-Safe is triggered.

So by checking that, we can check if the radio connection is lost or not.

I'll explain the failsafe function later, and we'll see how these bits change when failsafe is triggered.

Now let me explain how to calculate the checksum of i-Bus.

The checksum calculation range of ​​i-Bus is all data except the last two byte.

The checksum calculation is performed by subtracting SYNC CHAR and all channel data from 0xffff, byte by byte.

So it's easy to calculate. The code structure is also very simple.

First, suppose that this "Buffer[]" array contains all the data of the i-Bus message in bytes.

Then, declare the variable to calculate the checksum as a 2-byte unsigned integer, set the initial value to 0xffff,

and continue subtracting the data stored in the array from 0xffff one byte at a time while repeating the loop.

Then, the result will also be 2 bytes. Among them, compare whether the lower byte is equal to the 31st data of the i-Bus message, that is, the LSB of the checksum,

and the upper byte is equal to the 32nd data.

So I have explained all about the i-Bus protocol. Compared to the ubx protocol, it is rather simpler than ubx.

However, since what I explained is not in the official document, I may be wrong.

If there is something wrong, please leave a comment and I will correct it in the future.

And I try to implement all myself before filming the course, search for materials, and then explain.

But I couldn't find any official document about i-Bus, so I searched on Google, and found a relatively detailed explanation on the two websites below.

The website at the bottom of the two doesn't explain the i-Bus in detail, but it explains various techs, communication protocols and ESC protocols for drone.

so you can study and understand overall drone techs.

I recommend that you visit and check it out.

This is the i-Bus message I received while operating joysticks in hexadecimal. Each line is one i-Bus message.

As you can see, all messages start with 0x20 0x40. Let's see the first message among them.

The first 2 bytes are header indicating the start of the message, and channel data starts coming in every 2 bytes after that.

For channel data, a total of 28 bytes are received from channel 1 to channel 14, of which we will only use the first 6 channel information.

So, after analyzing some information from channel 1 to channel 6,

Channel 1 data is 0x63 and 0x04, but this is little-endian, so the actual value is 0x0463.

Converting 0x0463 to decimal is 1123.

Channel 2 data is 0x54 0x04, but it is also little-endian, so the actual value is 0x0454 and 1108 in decimal.

All other channels are the same. So now, this data was received while moving the sticks,

and all channel data has a value between 1000 and 2000. So the values ​​received are between 1000 and 2000.

In the transmitter settings, there is a menu called endpoint settings.

you can change the range of values wider from 900 to 2100.

We will use the default settings so when we move sticks, a value between 1000 and 2000 comes in.

And for unused channel values, 0xDC 0x05 is fixed. This is 1500 in decimal.

Each channel data can be expressed in binary like the far right.

I mentioned that the lower 12 bits are information about the movement of the stick, and the upper 4 bits are the flag bits indicating the status.

As you can see, the upper 4 bits of all channels are all 0. However, it is difficult to find out what these mean because there is no official docs.

We just need to know that when we move sticks, the value of the lower 12 bits changes and the ranges from 1000 to 2000.

The median value would be 1500. (0x05DC)

Later, we will convert this from -30 to +30 degrees to the drone's angle setpoint. Therefore, the range of value ​​is very important.

This will be explained in detail in PID Control chapter later.

Now let's calculate the checksum of this message.

Checksum is calculated by subtracting every single byte except the last 2 bytes from 0xffff in bytes.

The code to calculate should be written like this: First of all, i-Bus message is stored in bytes in an array "unsigned char iBus_message[32]".

And declare a variable to calculate checksum in unsigned short type and initialize it to 0xffff.

After that, a loop iterates from the first byte to the 30th byte,

and in the loop, every value in the "iBus_message[]" is subtracted from the "checksum" in bytes, and then stored in itself.

The important thing is that even the channel information is expressed in 2 bytes, the 2 bytes are not subtracted at once, but must be subtracted one byte at a time.

So, after calculating like this and checking the result,

the hexadecimal number 0xf51f was finally stored in the variable "chksum".

Here, we just need to check if the low byte 0x1f matches the 31st byte, and check the high byte 0xf5 matches 32nd byte which is the last byte of the message.

The results match. So we completed checksum calculation and verification.

Now that i-Bus message received without any problems, we can parse and store the channel data in the separate variable.

We will define a structure to parse and save data as shown on the left, and parse each channel information and store them in the corresponding variable.

The process of receiving and parsing the message is almost the same as receiving the ubx message in Chapter 3.

First, check if the first 2 bytes match 0x20 0x40 which is SYNC CHAR.

If they match, then store next 30 bytes coming in into a temporary array. Then one message frame has been received and stored.

After that, we need to verify whether there is a problem with the received data through a checksum check.

If the checksum matches, the message has been received without any problem. After that, we can parse and store each channel data in each separate variable.

Data reception proceeds by counting the number of received data, as in the previous chapter 3.

To do this, we need some prerequisites: First, the data frame must start with fixed value and one message frame also must have a fixed length.

Data reception will be handled within a receive interrupt, and an interrupt should be requested every time a byte is received.

And lastly, it says that the message must be streamed continuously. This means that messages should continue to be received without making any requests.

I added the last one that was not explained in the last chapter.

And concept of data reception explained on the right.

First, the count starts from 0. If received data is equal to 0x20 which is the first SYNC CHAR when the count is 0, increments the count by 1.

And then if received data is equal to 0x40 which is the second SYNC CHAR when the count is 1, increments the count by 1,

and if not, clear the count to 0 this time.

This is to prepare to receive the next message.

And if all 2 bytes of SYNC CHAR matched, the next incoming data is first stored in a temporary array.

When a total of 32 bytes are received, the SYNC CHAR check and message reception are complete.

This is the process of receiving a message frame.

And then, we need to check the checksum to verify the data. It requires checksum calculation as previously described.

If the checksum matches, the message was received successfully and the data is reliable.

Then, we can parse and store each channel data in separate structure variable after that.

The process described so far is almost the same as in Chapter 3.

So, if you have a good understanding of what we did in the last chapter, you will be able to do this chapter very easy.

Then let's write the source code that receives the message and verifies the checksum.

Writing the parsing code will be done next time. So let's move on to the source code work.

Duplicate the "4-1. FS-iA6B PC Interface" folder that we worked last time. This time we will receive i-Bus messages and verify checksum,

so change the folder name to "4-2. i-Bus Checksum".

After that, copy the folder name and come inside the folder.

Rename the .ioc file to the same as the folder, and delete the .elf file and the debug folder.

And run CubeIDE.

First, close all open project.

Then select "Import Projects" and "Existing Projects..." Select the 4-2 folder we just copied.

In this time, we will check SYNC CHAR and store all message data in a temp array. And then we will verify checksum.

We will use the RX interrupt to receive the message. And to verify checksum, we will define a function in a new file and call it.

There is nothing to make configurations with CubeMX this time. So let's open main.c right away.

Scroll all the way down.

We set UART5 using CubeMX last time and the initialization function was called. And below, we wrote RX interrupt enable code like this.

And we didn't write any code inside the while loop. Let's open the stm32f4xx_it.c file.

Scroll all the way down too.

A UART5 interrupt handler function has been created like this.

And we have written code that if rx interrupt was requested, first store the received data in a temporary variable and then send it back to UART6, that is, PC.

However, we're not going to transfer data to the PC this time, so comment out the two lines below.

When data is received, we will store the data in a temporary array, so we need to declare the temporary array variable first.

Scroll to the top.

We have declared two variables when receiving ubx message from last chapter. "uint8_t m8n_rx_buf[36];" and "uint8_t m8n_rx_cplt_flag = 0;".

Similar to this, declare "uint8_t ibus_rx_buf[36];" and "uint8_t ibus_rx_cplt_flag = 0;"

When an i-Bus message is received, it will be temporarily stored in this array.

Change the size of the array to 32 so that it is the same length as the i-Bus message frame.

And flag variable is a variable that will be used to indicate the status when the message reception is complete.

Scroll down again.

First, let's create a variable to count how many times this interrupt handler has been called.

Declare unsigned char cnt and set init value as 0. Write "unsigned char cnt = 0;".

This is a local variable. So every time the function is called, cnt is initialized back to 0.

So we add the keyword "static" in front of it. With this, even if this function is called anew, cnt retains the previously saved value.

After that, add a switch statement inside the if statement. This switch statement should perform different actions depending on the value of cnt.

First of all, cnt starts at 0. When cnt is 0 (case 0:), it must be checked whether the received data is the first SYNC CHAR.

Since the received data is stored in uart5_rx_data, it is checked whether the value in the variable is equal to 0x20, the first SYNC CHAR,

and if it matches, the data is stored in the temporary array that was just declared.

Copy the name of the temporary array.

The data need to be stored in ibus_rx_buf[0] which is the first element of the array, and cnt is now 0.

So, we can write "ibus_rx_buf[cnt] = uart5_rx_data;". After that, increment cnt by 1. Write "cnt++;".

This is the end of case 0. Write "break;".

Then, when the next interrupt handler is called, it enters the switch statement with cnt is 1 that has already been incremented by 1.

When cnt is 1 (case 1:), we need to compare whether the received data is equal to 0x40, which is the second SYNC CHAR this time.

First, open if() and compare whether the value of the received data is equal to 0x40.

If it is correct, the data is stored in the index 1 of the temporary array,

otherwise, reset cnt to 0 this time, discarding this message, and preparing to receive the next message.

This is the end of case 1.

From then on, each received data is stored in a temporary array and the cnt is incremented by 1.

So, when data is received, it is first stored in a temporary array in order and the cnt is incremented by 1 from case 2(index 2) to the case 30(index 30) which is last previous data.

And when the last data(index 31), the received data is also stored in a temporary array, and in this case, the cnt must be reset to 0 to prepare to receive next message.

Here, "case 2" to "case 30" are handled by "default" to simplify the code. And lower the default to the bottom.

So far, we have written the i-Bus message receiving code. Now that i-Bus message reception is complete, we can set the flag variable to 1.

Copy name of the flag variable.

In case 31, i-Bus message reception is complete, so set "ibus_rx_cplt_flag" to 1 in case 31.

Now, let's toggle the LED in the main function, when this flag variable is 1, that is, when data reception is complete.

We will use both flag and buf array in the main, so copy these two variables, come to main.c and paste them to the top.

And since these two variables are external variables, add the extern keyword.

extern variables cannot be initialized here.

Now, come into the while statement.

If the flag variable is 1 in this while statement, the 32-byte i-Bus message has been received.

So we can toggle the LED in this if statement. Firstly the flag variable need to be cleared to 0.

and use the code written above to toggle the LED. Copy and paste the LED toggle code.

But since this message comes in 133 times per second, it looks like the LED is on continuously.

So let's give a little delay.

Now we have to confirm it visually, so we're giving delay but we'll remove all the delay later.

Let's give 100ms delay.

Now that the i-Bus message receiving code has been completed first, let's check it out.

Press F11 to build.

When this window appears, select the one below.

If build doesn't work at once, try again.

When this window appears, confirm and click OK. Terminate debug mode and execute the program.

As you can see, I ran it, but the LED is not yet toggled.

The reason is that this receiver has not yet been bound to the transmitter after power on.

Therefore, the receiver is not yet sending an i-Bus message to the FC,

and binding is made as soon as the transmitter is turned on, and the receiver will start sending an i-Bus message to the FC.

So let's check it out.

When I turned on the transmitter, the LED started blinking like this.

LED blinking means that 2-byte SYNC CHAR is correct and 32 bytes of data have been successfully received.

The next thing to do is to verify the checksum to see if there is any problem with the data.

Let's create a new file and define a function in it to check the checksum. First, let's create a new file.

Right-click the Src folder and select New - Source File. Name the file to be created FS-iA6B.c.

This will create the file and open it.

Then create a header file. Right-click the Inc folder and select New - File.

Name the file FS-iA6B.h this time.

The file was created successfully.

Now let's define a body of the function in .c file and the prototype in .h file.

Name the function "iBus_Check_CHKSUM()" that will verify the checksum.

This function takes two parameters. The first parameter is the address of an array where i-Bus message is stored.

Define the first parameter as "unsigned char* data".

And the second is the size of the array. Define as "unsigned char len".

This function will calculate the checksum ,check whether the checksum is correct or not and finally return the result.

Therefore, the return type can be "unsigned char".

To calculate the checksum, subtract all data in byte except the last 2 bytes of the temporary array from 0xffff.

First, declare a 2-byte unsigned integer variable to calculate and store the checksum.

The type is "unsigned short". Let's name the variable "chksum". And initialize it to 0xffff.

Now, by iterating a loop, each value of the array can be subtracted from chksum from the first element.

Open for statement. Index i starts from 0 because SYNC CHAR need to be subtracted as well.

And this loop has to iterate for the length of the array except for the last 2 bytes.

The length of this array is stored in the len variable, so the loop should iterate until "len-2".

In the loop, the values ​​in the array should be subtracted from the chksum variable and stores it back to chksum itself.

Write "chksum = chksum - data[i];"

So far we have done the checksum calculation.

After the loop, the variable "chksum" contains the result of the checksum calculated. So we should compare "chksum" with the last 2 bytes of the array.

But there is something to note here,

The second byte from the back of the array is the LSB of the checksum, and the last byte is the MSB of the checksum.

Write "return". And check the LSB of the checksum first.

This "chksum" is 2-byte size, so to remove the MSB while leaving only the LSB, bit-wise AND operation with 0x00ff is required.

We have to do "chksum&0x00ff" to leave only the LSB. Compares this result to the second last byte of the array, i.e. "data[30]".

We can check LSB of checksum like this. "((chksum&0x00ff)==data[30])".

To check the MSB, the result of shifting the chksum right by 8 bits is compared to the last byte of the array, i.e. data[31]. "((chksum>>8)==data[31])"

Finish "return ((chksum&0x00ff)==data[30]) && ((chksum>>8)==data[31]);"

We have now completed the function that calculates and checks the checksum.

If the LSB of chksum is equal to the 31st byte of the array and the MSB of chksum is equal to the 32nd last byte of the array, 1 is returned,

otherwise 0 is returned.

That is, if the return value is 1, it means that the checksum matches and there is no problem with the received data.

Now let's verify the checksum using this function and toggle LED.

The code will be written in main.c .

Copy the function prototype and come to the FS-iA6B.h header file to declare the function prototype.

And include the header file in FS-iA6B.c. #include "FS-iA6B.h".

And then first save these files. And come back to main.c and include the header file as well. #include "FS-iA6B.h".

So now we can use the function in main.c. Copy the name of the function and return to main.c.

Earlier, we wrote code to toggle LED when an i-Bus message is received. Open a new if() inside the if statement and call the function.

This function takes two arguments, the first argument is the starting address of the buffer array.

Copy the name of the array, "ibus_rx_buf".

Write "&ibus_rx_buf[0]" to pass the starting address. And the length of the array. Pass 32 as a second argument.

If the return value of this function is 1, it means that the message was received successfully and the checksum matches.

Then step inside the if statement and toggle LED inside it.

Move the LED toggle code inside the if statement. All source code work is now complete. So let's check the results.

Build and download. Run the application.

Look at the results. The LED is blinking the same as before.

But before, we only checked SYNC CHAR and received i-Bus messages. Now we have even verified the checksum to make sure the messages are reliable.

Blinking LED means that the message is reliable, so now we can define a structure, parse the data into member variables, and store them.

Next time, we will define a structure and parsing function, and see how these variable values ​​change when the joystick is moved.

This is it. See you next time.

```


#### video 16
- ibus parsing

{% include youtubePlayer.html id=page.youtubeID16 %}

```diff
Last time I explained the structure of the i-Bus message, and even calculated and verified the checksum.

In this time, we will define a structure to store each channel data of the transmitter, and write code to parse it into each member variable.

First, I will show you a demonstration of what data is output when moving joysticks of the transmitter.

The values ​​being printed now are output from channels 1 to 6 of the transmitter in order from the left.

If I move the sticks, the values ​​change, and the range of values ​​is between 1000 and 2000.

Channel 1 is assigned to the horizontal direction of the right stick. Now, if moving the right stick horizontally, the value of channel 1 is changing.

CH2 is the vertical direction of the right stick,

CH3 is the vertical direction of the left stick,

and CH4 is the horizontal direction of the left stick.

And CH5 and CH6 are assigned to switch A and switch C.

So now the value of channel 5 is 1000, but if operating switch A, the value changes to 2000.

Also the value of channel 6 is 1000, but switch C is a 3-way switch, so it can be adjusted in 3 steps.

When the value is 1000 when it is moved up, 1500 on the middle and 2000 when it's pushed down.

This is what we're going to implement this time.

In order to parse a message frame, you first need to know the exact structure of the message frame, which I explained last time.

To briefly review, i-Bus message starts with fixed two-byte SYNC CHAR 0x20 0x40 representing the start of a frame,

and then the channel data starts coming in next.

Channel data is received sequentially from CH1 to 14, and each channel data has a length of 2 bytes.

And it has little-endian byte order, so the lower byte is received first.

A total of 28 bytes of channel data are received and then finally a 2 byte checksum is received, and one message frame ends.

So the length of the message frame is 32 bytes in total.

Last time we checked the SYNC CHAR, stored a message frame in a temporary array, and even verified the checksum.

Each channel data is expressed in 2 bytes (=16 bits),

the lower 12 bits are information about the stick movement, and the upper 4 bits are information indicating the status of the trasmitter I think.

One thing is certain, when communication is lost, the value of the upper 4 bits are changed by triggering fail-safe.

This can be checked by activating transmitter's fail-safe setting, and fail-safe will be explained in the next session.

This time, I will explain how to parse and decode the lower 12 bits of stick movement data.

To parse channel data, we first need to know what channel each stick and switch is assigned to.

We checked the stick mode ealier, the default is Mode2 as in the picture on the right, and this mode can be changed.

As I said, we use Mode2 as the default setting in this course.

And the Aux channel can be used by selecting two of the switches A to D and the variable resistors A and B.

We have assigned switches A and C as Aux channels.

Since this transmitter is a 6-channel transmitter, only 2 Aux channels can be used, and it seems that all 10 channels can be used if the firmware is updated.

Then you can use all switches and variable resistors, so you can put more various functions.

So in conclusion, CH1 is the horizontal direction of the right stick, CH2 is the vertical direction of the right stick,

CH3 is the vertical direction of the left stick, and CH4 is horizontal direction of the left stick.

The transmitter we are using has no spring in the vertical direction of the left stick (Mode2). And we will use this as a throttle stick in the future.

And CH5 and 6 are switches A and C respectively.

Channels 7 to 14 are unused channels.

If you look at the channel order of the i-Bus message, the channel data starts to come in from channels 1 to 14 right after the first 2 bytes of SYNC CHAR.

After that, the data comes in in the order described above. For example, the channel1 data is the data of horizontal direction of the right stick.

If not mode 2 but other mode is used, the assigned channel order is changed.

And channels 7 to 14 are unassigned channels, and the data is 0xdc and 0x05, which is a value of 1500 in decimal.

Now we need to store the channel data in variables, each channel data is 12 bits long, so we need unsigned 16-bit variables.

Data management is more efficient if we define a struct.

The struct would be defined like this. First, we will create all the variables to store all channel data.

If you update the firmware, you may use all 10 channels. So it's better to define it like this.

And I changed the name of the variable to store the stick movement data.

Instead of Roll, Pitch, Yaw and Throttle,

RH means the Right stick Horizontal direction, RV for the Right Vertical direction, LV for the Left Vertical and LH for the Left Horizontal.

Variables to store all switches and variable resistors are also made for the future. And lastly, a variable to store the fail-safe state is also created in advance.

Last time we wrote code for checking SYNC CHAR, receiving messages, and checking the checksum. It's number 1, 2 and 3.

And after verifying the checksum, it was confirmed that there is no problem with the received data. So this time, we will parse the data. It's number 4.

The data parsing method I will explain in this course requires some prerequisites. First of all, an entire message frame must be stored in a temporary buffer array.

All data must have little-endian byte order.

Most are little-endian, but sometimes big-endian.

If it is big-endian, only need to change the byte order. i-Bus has little-endian byte order.

And since i-Bus doesn't have floating-point data, you don't need to consider about number 3.

And to parse the i-Bus message, We need to read 2-byte channel data at a time from the temp buffer where the message is stored,

and if necessary, perform bitwise operation on the data, then combine them into one and store it in the corresponding structure variable.

It's easier to understand with source code. Let's move on to the source code work.

Duplicate the "4-2. i-Bus Checksum" folder that we worked on last time. Rename the folder "4-3. i-Bus Parsing" this time.

Copy the folder name and rename the .ioc file in the folder to the same as the folder name. And delete the .launch file and Debug folder.

After that, launch CubeIDE.

Close all open projects. Import the folder copied right before.

Import projects - Existing Projects into Workspace - Browse - "4-3. i-Bus Parsing".

There is nothing to configure with CubeMX this time, so let's open the main.c file right away.

And then scroll down.

Last time we wrote code that checking SYNC CHAR when a message was received, and if it matches, the 32-byte message frame was first stored in a temporary array.

Then, the "ibus_rx_cplt_flag" variable becomes 1 and if statement is executed. And then if the checksum is verified, the LED is toggled.

The code to receive i-Bus message was written in the UART rx interrupt service routine, so let's open stm32f4xx_it.c.

If you scroll all the way down, inside the UART5 interrupt function,

checking the first received 2-byte SYNC CHAR, and if it matches, all the incoming data after that is first stored in this temporary array.

If the checksum is verified, it means that there is no problem with the data.

So first, we need to parse and store each channel data into the structure within this if statement.

Now let's define the structure.

The structure will be defined in the FS-iA6B.h header file. Open it.

You can open the header file by putting the cursor on the "FS-iA6B.h" and pressing F3.

The structure will be defined in this way to store all the information of sticks, switches, and variable resistors,

of which we only use the sticks(RH, RV, LV and LH) and switch A and C.

I have a structure defined in advance, so I will copy it and use it.

First of all, please pause this screen and write this source code the same.

We have defined the structure, so now we need to declare the structure variable. The structure variable will be declared in the FS-iA6B.c source file.

After copying the structure name, come to the FS-iA6B.c and declare it as a global variable. Name the structure variable "iBus".

Now let's define a function that parses i-Bus messages stored in a temporary array into this structure variable.

Name the function "iBus_Parsing".

This function takes two parameters, the first is the address of the temp array where an i-Bus message is stored,

and the second is the address of the structure variable we just declared.

Define the first parameter as "unsigned char* data" to point to the address of the temp array,

and the second parameter as "FSiA6B* iBus" to point to the structure variable.

And this function doesn't need to return anything. Therefore, the return type is defined as void.

If you have done so far, first save both source file and header file.

Now let's define the body of the function. Select the first member variable of the iBus structure. iBus->RH.

If you have not saved these files before, autocomplete may not work.

In iBus->RH, 2-byte channel 1 data stored in temp array should be stored.

SYNC CHAR is stored in the first 2 bytes, and then channel 1 data is stored in array index 2 and 3.

So we can do a bitwise OR of data[2] and data[3].

However, since they are stored in little-endian byte order, data[2] is low byte and data[3] is high byte.

Shift data[3] to the left by 8 bits and then bitwise OR data[2].

The lower 12 bits of this 16-bit data are the stick movement data.

Therefore, to use only the lower 12 bits, a bitwise AND operation should be performed on this result and 0x0fff.

In this way, channel 1 data parsing is completed. Repeat for the rest of the channels.

The next channel is the vertical direction of the right stick. iBus->RV.

Copy and paste the code above. And replace the indexes of each array with 4 and 5.

And repeat the rest channels in this way. I have pre-written code, so I'll use it.

This is the code to parse all channels. Please pause the screen and write code the same first.

When writing this, you must pay attention to the order of the indexes.

In this way, the code to parse the data of the right horizontal and vertical, left vertical and horizontal directions of sticks, and switches A and C is completed.

Now that we have defined the body of the function, we declare the function prototype in the header file.

Copy the function prototype and declare it as a header file.

And like chapter 3, we will define the UART5 init function where FS-iA6B receiver is connected.

In fact, since the UART5 init function is generated by CubeMX, there is no need to define it again.

However, when using this library file in other projects, if the UART initialization function is defined, it will be convenient to use.

Return to the FS-iA6B.c file.

we will define an UART initialization function just below. Name the function "FSiA6B_UART5_Initialization()" .

And no parameter and return value is needed, it is defined as void.

In this function, UART5 is being initialized, and the code are defined in usart.c file.

Open usart.c file.

After copying the code in the void MX_UART5_Init(void) function, return to FS-iA6B.c and paste it into the body of the function.

And align indents. And then we need to declare a prototype for this function.

Copy the prototype and declare it in FS-iA6B.h header file.

Now, we're going to parse the message in main.c using the iBus_Parsing() function.

A structure variable to store channel data has been declared in the fs-ia6b.c file.

But since we need to access this variable in main.c, we need to declare extern. Copy this variable declaration code, come to the fs-ia6b.h header file, and declare extern.

This also can be done in main.c then it is accessable only in main.c.

However, if we declare extern in the header file like this, it is accessable wherever this header file is included.

So let's do it like this. And fs-ia6b.h has already been included in main.c.

Then copy the "iBus_Parsing()" and come to main.c and call it inside the if statement.

Pass the address of a temporary array where i-Bus messages are stored as the first argument.

We can just use the code above as it is. It is "&ibus_rx_buf[0]".

And pass the address of the structure variable to store the parsed data as the second argument.

Just pass the address of the structure variable that we just declared as extern. It is "&iBus".

If we write code like this, when the message is received, the checksum is calculated, and if it is verified, the message is parsed and stored in a structure variable respectively.

Then, let's print the result using printf() below that. Call printf().

To output 6-channel data, write "%d" 6 times. Each data is separated by '\t'.

At the end, put a newline character '\n'.

And let's output them in channel order. CH1 is iBus.RH,

CH2 is iBus.RV,

CH3 is iBus.LV,

and CH4 is iBus.LH.

And CH5 is iBus.SwA, and the last CH6 is iBus.SwC.

And this time, we'll check it with a line graph, not text. If you want to check it in text, it will be better to see giving it a delay of about 100ms.

Or if you want to check it in a graph, it is better to lower the delay a bit. Lower it to 30ms. No delay is ok, too.

The software for graph drawing is serial plotter of Arduino sketch, which we used before.

Now that we have finished writing the code. Build and download it. Press F11.

If the build is not completed at once, build again.

When building, an error occurred in the FS-iA6B.c file.

Press Cancel button and open FS-iA6B.c. If you scroll down a bit, the line where the error occurred is underlined in red.

This error is the same error that occurred in the previous chapter. In the last chapter, I explained the things to be careful about when creating a library file yourself.

To briefly explain the reason for the error once again, the error occurs because the file where the LL driver function or structure is defined is not included.

First, open the M8N.c file. And open the M8N.h file again.

To solve this, we have included main.h in this M8N.h. And besides that, we have added codes like #ifdef on top of that.

Likewise, we will add the same codes to FS-iA6B.h. After copying the code of this part, paste it at the top of FS-iA6B.h.

Also, copy the code at the bottom of M8N.h and paste it again at the bottom of FS-iA6B.h as well.

And replace M8N with FSIA6B. Usually these macros are usually written in uppercase.

Also replace M8N with FSIA6B in the comments at the bottom.

Save the file. And then build it again.

The build is done well with no errors. Run it.

Run serial plotter in Arduino sketch IDE.

The graph has started to print. First, let's move the right stick horizontally (CH1). Then the blue line changes like this.

Values ​​range is from 1000 to 2000.

And channel 2 is the vertical direction of the right stick. Also it has a value between 1000 and 2000.

CH3 is the vertical direction of the left stick and CH4 is the horizontal direction of the left stick.

And CH5 is switch A.

Now, when switch A is up, the value is 1000, and when toggling it down, the value changes to 2000.

And finally, CH6 is switch C and it's a 3-way switch.

The value is 1000 when pushing it up, it's 1500 in the middle and it's 2000 when pushing it down.

So we completed receiving and parsing i-Bus messages.

Now let me turn off the transmitter power.

It's turned off.

Now look at the red LED on this receiver. It is blinking slowly to indicate that the wireless connection has been lost.

Of course, the connection is lost, so moving the stick doesn't change any graph.

But now, if you look at the FC's LED, it keeps blinking.

Blinking of FC's LED means that i-Bus messages are continuously being received.

I said that if the connection is lost like this, the value of the upper 4 bits changes. And that indicates the fail-safe status.

But we can't check it at the moment because we didn't check upper 4 bits of channel data.

However, next time, we are going to check how the value of the upper 4 bits changes when the receiver and transmitter become wirelessly connected and then lost.

That's all for today's. See you next time.

```


#### video 17
- ch4-4 failsafe setting

{% include youtubePlayer.html id=page.youtubeID17 %}

```diff
00:15
구조체 채널 데이터를 각각 8시간 것까지 했었습니다
00:19
8시까지 했으면 이제 송 수신기를 사용할 수 있게 된 거구요
00:23
값에 범위가 첨부터 2004 이었고 중간 값은 1500 이었습니다
00:27
이 값에 범위는 나중에 제어할 때 좀 중요하게 사용될 개념이 라서 기억을
00:32
하고 계시는게 좋아요
00:33
이제 이번 시간에 할 거는 필수적인 내용은 아니지만 안전 이란 관련이
00:38
있는 기능인 페일 세이프 에 대해서 설명드리겠습니다
00:41
안전 이란 관련된건 정말 너무너무 중요한 내용이니까 운을 하는 내용
00:45
반드시 꼭 구현을 해 보시고 테스트도 직접 해 보셔야 되요 그럼 이번
00:50
시간엔 fsi 육성 신계에 페일 세이프 설정을 하는 방법이랑 설정을 한
00:55
후에 실제 페일 세이프 가 발동이 되면 그걸 확인하는 코드를 작성하는
01:00
방법을 설명드리겠습니다
01:08
먼저 fc 랑 수신기 의 전원을 넣었는데
01:11
지금 수신기는 전원이 들어간 후에 아직 한번도 송신기 랑 연결이 안된
01:15
상태 적
01:16
그래서 통신은 끊겨 있긴 하지만 페일 세이프 가 발동이 된 상태는
01:19
아닙니다
01:20
펜 세이프 는 수신기의 전원이 들어간 후엔 숨쉬기 라 연결이 되고 나서
01:25
그 후에 어떤 이유에서든 이 둘 간의 연결이 끊기면 그 때 발동되는
01:29
거예요 그럼 이제 성 신기전 을 켜 보겠읍니다
01:34
이제 연결이 된 상태고 아이 퍼스 메시지가 fc 로 보여주면서 값들이
01:38
출력이 되고 있죠
01:40
이것까지 지난 시간에 한거구요
01:42
지금 터미널에 출력되고 있는 값들은 채널 1번부터 6번까지 의 모든
01:47
값들을 다 출력하고 있는 상태구요
01:49
지난 시간에는 각 채널 들의 하위 cb 비트 조종기 조장 냥의 값들 만
01:54
출력을 했었는데 지금은 상위 4비트 를 포함해서 16bit 를 전체다
01:59
출력하고 상태입니다
02:01
송신기 라는걸 돼 있을 때는 지금 보시면 상위 4비트 의 값이 다영이
02:06
어서 이 값들이 지난 시간이 랑 다를게 없죠 그래서 연결이 잘 있으니깐
02:12
조작을 하면 또 값들 이렇게 바뀔 거구요
02:15
그리고 또 이 송신기는 지금 페일 세이프 가 설정이 되어 있는 성 되구요
02:20
지금 상태에서 이 송신기의 천 원을 빼면 3일 세이프 가 발동이 될겁니다
02:27
이제 생식이 전원을 뺐더니
02:30
그때 출력된 값들이 이렇게 받기 전 그리고 부 저의 소리로 도 세이프 의
02:35
상태를 확인할 수 있도록 해놨습니다
02:38
당연히 지금 상태에서 조종기를 조작해 도 값들이 안 변할 거구요
02:42
다시 송신기 전원을 넣으면 둘 간의 연결이 되면서 3 1 세이프 가
02:46
해제되고 통신이 잘 될겁니다
02:49
다시 연결해 보겠습니다
02:52
연결했더니 이 값들이 원래대로 돌아 왔고 부 저도 거 졌구요
02:57
이제 지금 상태에서 조작하면 당연히 게 값들이 변하죠
03:00
그래서 이번 시간에는 이렇게 페일 세이프 의 상태를 확인하고
03:04
페일 세이프 가 발동되면 외부 출력 장치인 부저를 통해서 상태를 확인할
03:09
수 있도록 코드 작성 까지 해보도록 하겠습니다
03:12
펜 세이프 는 기계 고장 같은걸로 시스템이 오작동 하거나 동작하지 않을
03:17
경우를 대비한 안전 장치라고 보시면 되구요
03:20
일종의 예외처리 같은 개념이라고 생각하면 쉽습니다
03:24
통신에서는 보통 또 통신이 끊겼을 때 사용되는 안전장치 의미로 사용되고
03:28
드론 에서는 성 수직 연결을 끊기 면 위험한 상황이 발생할 수 있어서
03:33
보통은 펜 3 2% 정지 비행을 한다거나 자동 착륙 같은 거라 줘 내게
03:37
또 업체마다 다를 수 있는데
03:39
플라이 스카이 같은 경우는 이제 저희가 사용하는 이 제품 같은 경우는
03:43
송수신기 연결이 끊김 연 이 수신기에서 아이 퍼스 프로토콜로 fc 의
03:49
데이터를 보내 줄 때 특정 비트의 값을 바꿔서 보내 주는 방법으로 연결이
03:54
끊어졌다는 걸 알려줍니다
03:56
그러면 우리는 데이터를 받아서 8시까지 했으니까 그 비트의 값들을 확인해
04:01
보면 연결 상태를 알 수 있게 되는 거죠
04:04
fsi 6의 페일 세이프 기능을 사용하려면 송신기 설정 을 먼저 해야
04:08
되는데
04:09
6채널 각각 을 다 페일 세이프 기능을 사용할 수 있구요
04:13
그중에 저희는 채널 6번 만 활성 할 겁니다
04:16
pwm 이나 ppm 을 사용할 때는 펜스의 그 동작이 완전히 달라서 제
04:20
수업에서는 따라할 순 없고요
04:22
제 사업에서는 아이 퍼스 기준으로 설명드리겠습니다
04:26
먼저 송신기 전원을 켜 하시구요
04:29
ok 키를 길게 눌러서 메뉴로 들어가겠습니다
04:33
왼쪽 시스템 3 갑 을 선택하시구요
04:36
밑으로 쭉 내리시면 rx 셋 업 이란 메뉴가 있는데 오케이 에서
04:40
선택하시고
04:41
또 밑으로 내리시면 세이프 란 메뉴가 있습니다
04:44
역시 오케이 에서 들어오시면 지금 저는 채널 6번이 미리 설정을 해놓은
04:49
상태라서 - 100% 로 표시가 되어 있는데 처음 하신 분들은 다 5%
04:53
표시가 되어 있을 겁니다
04:55
채널 6번을 선택하시고 ok 에서 안으로 들어오시면
04:59
지금 상태에서 업다운 키를 누르시면 온 오프를 바꿀 수 있게 되요
05:03
5% 되어있는걸 온으로 바꾸시고
05:06
그리고 지금 채널 6번은 2 스위치 씨의 할당이 됐는데 지금 상태에서
05:11
세츠 씨를 도착하시면 이 게이지가 바뀌어요
05:14
내면이 로 올린 상태로 ok 하면 뒤로 돌아 오는데
05:19
지금처럼 - 100% 로 표시가 되어 있을 겁니다
05:23
만약에 스위치를 중단으로 둔 상태에서
05:26
오케이 하시면 이렇게 0% 로 들어올 거구요
05:30
다시 스위치를 하단으로 내린 상태에서 오케 하지만 플러스 100% 로
05:34
바뀔 거에요
05:36
4 그래서 맨 위로 올리신 후엔
05:39
오케이 에서 - 100% 이렇게 설정을 하시고
05:42
지금은 설정을 변경 마는 거고 아직 저장을 한 건 아닙니다
05:46
저장을 하려면 캔 쓰기를 길게 놓으세요
05:50
그러면 이렇게 약간 고주파음이 한번 들리고 뒤로 돌아 오는데
05:54
다시 ok 눌러서 확인해 보겠습니다
05:57
이제 지금처럼 - 100% 로 표시가 돼 있으면 설정이 잘 된겁니다
06:02
설정 데스 명선 조정기 전화 끊겠습니다
06:07
이렇게 해서 펜 세이프 를 온 시켰고 그리고 퍼센트 지를 - 100% 로
06:11
해놨는데
06:13
우선 조종기 의 조 장량 범위가 첨부터 2004 이점 그리고 펜 세이프
06:17
설정이 - 100% 부터 플러스 100% 사이의 값을 설정할 수
06:22
있었습니다
06:23
그래서 - 100% 가 조종기 값으로는 천이 되는거고 플러스 100% 가
06:28
2002 된단 말이에요
06:29
그리고 0% 는 1502 되겠죠 제가 지금 채널 6번 설정을 - 100%
06:35
로 했는데 이렇게 설정해 놓으면 3일 세이프 가 발동이 되면 어떻게
06:39
동작하면
06:41
먼저 6번 채널의 상위 4비트 의 값이 좀 바뀝니다
06:44
그리고 1위 12 비트의 값이 조 장량이 값이
06:48
- 100% 인천으로 같이 바뀐다 는 말입니다
06:52
그래서 제가 만약에 들은 조정을 하면서 채널 6번 스위치 c 를 조작해서
06:58
값을 1500 으로 바꾸었다고 했을 때 그 때 조정기 통신이 끊겨서 페일
07:03
세이프 가 발동이 되면 상위 4비트 값도 바뀌고 하위 12 bit 의
07:07
값이 1500 에서 지금 설정한 - 100% 인천으로 바뀐다는 소리입니다
07:13
그래서 이건 이따가 소스 코드까지 다 작성한 후에 확인을 한번 해볼
07:17
거에요 그래서 결론은 펜 세이프 가 발동이 되면 설정한 채널의 값이 그
07:23
퍼센트 티즈 대로 같이 바뀐 단 말이구요
07:26
이건 pwm 이나 ppm 을 사용할 경우에는 2% 의 값이 엄청 중요한데
07:32
저희는 아이 버스를 쓸 거라서 창이 4bit 의 값이 중요한 거고 2%
07:36
즈는 큰 상관은 없습니다
07:39
4 개념을 좀 알고 계시는게 좋을 것 같아서 이걸 설명 드린 거구요
07:42
수업에서는 2% 값을 이용해서 뭔가 하지는 않을 겁니다
07:46
센 세이프 가 발동되면 fc 에서 그걸 알 수 있느냐 없느냐가 정말
07:50
중요합니다
07:51
pwm 이나 ppm 을 사용한 경우에는 fc 에서 그 상황을 아기가 조금
07:55
어렵구요
07:57
하려면 별도의 채널을 1 전용으로 할당해서 사용해야 되고 그럼 그 채널은
08:02
3일 세이프 를 확인하는 용도로만 사용됩니다
08:05
i 버스처럼 그 한 채널에 상위 4비트 이가 상태 정보 그리고 하위 12
08:10
bit 가 조종기 정보
08:12
이렇게 사용하는게 아니고 나의 한 채널을 통으로 페일 세이프 를 확인하는
08:17
용도로만 사용해야 되는 소리예요
08:20
그리고 좀전에 설명드렸던 퍼센트 즈 설정한 애로우 pwm 이랑 피핀 값이
08:25
바뀌고 요
08:26
스로틀을 50% 로 유지 해라 같은 단순한 동작만 가능합니다
08:31
물론 fc 에서 연결이 끊겨 있는지를 알 수 있으면 소스코드를 구현하면
08:36
복잡한 동작들로 다 구현할 수 있게 하는데
08:38
4 좀 전에 말씀드린 것처럼 채널 하나를 페일 세이프 전용으로 사용해야
08:43
되서
08:44
아이 버스를 사용할 때보다 이 pwm 이나 ppm 을 사용할 경우에는
08:48
뭔가 좀 제안 저기요 근데 아이 버스를 사용하는 경우에는 펜 세이프 가
08:53
발동되면 fc 에서 확인하기가 쉽구요
08:56
별도의 채널을 따로 할당을 필요가 없습니다 그리고 fc 에서 바로 상태
09:01
확인이 되니까
09:02
단순한 동작을 당연히 가능하고 정지 비행이나 자동 착륙 같은 것도 코드
09:07
로 구현하면 할 수 있습니다
09:09
4세 수업에서는 그거 까지는 다루지 못하고 아까처럼 단순하게 부저를
09:14
올리는 걸 해 볼 거고 그리고 4
09:17
다다음 제퍼 때 모터 동작까지 들어가면 그 때는 펜 세이프 가 발동이
09:22
되면
09:23
모터를 강제로 꺼버리는 그런 코드를 작성할 겁니다
09:27
그럼 기체가 추락할 테니깐 실내에서 테스트에 비행하는 단계에서는 그게 좀
09:31
안전 할 거구요
09:33
만약에 이제 개발이 끝나고 실로에 서핑을 할 때 그때 그냥 추락하면
09:38
그것도 좀 위험하긴 한데 근데 사람없는 공터에서 비행을 하며 는
09:44
그때 그냥 추락을 하면 그래도 들어온 망가지는 거 외에는 큰 사고가 날
09:48
일이 없을 테니까 좀 덜 위험하게 쪄요
09:51
정지 비행을 하거나 서서히 착륙하는 것을 하려면 고도 센서 랑 gps 를
09:55
이용해서 제어를 해야 될텐데
09:58
우선 gps 란 고도 센서 데이터 받아오는 것은 챕터 2 챕터 3 때 다
10:02
하긴 했었으니까 구현은 활약을 할 수 있습니다 제 없고 대만 작사 하면
10:06
되니까 이제 페일 세이프 가 발동되면 아이 퍼스 데이터가 어떻게 바뀌는지
10:12
를 설명드리겠습니다
10:13
지금 여기에 출력된 모든 값들은 팜 22 비트의 조 장량 데이터 란
10:18
거기에 상위 4비트 의 상태 데이터를 합쳐서 16bit 데이터를 다
10:22
출력한 값들이 고요
10:24
이 왼쪽 데이터는 조종기 랑 수신기 연결이 돼 있을 때
10:28
채널 1번부터 6번까지 값들을 출력한 거고 페일 세이프 가 발동하기 전에
10:31
섬 이 상태에서 채널 4 5 6의 데이터를 봤더니 1499 천천히 런
10:37
값이고
10:38
이건 비트 구조로는 이런 구조를 가지고 있습니다
10:42
봤더니 상위 4비트 에 같은 탈 영웅이란 값은 에요
10:46
그리고 채널 123 도 지금 1,500 1,500 1,000 이런 값을
10:50
있는데 이것도 상위 4비트 의 값들을 보면 다영 이에요
10:54
지금 상태에서 제가 송신기의 전원을 껐습니다
10:57
영선 이성 신기에 페인 세이브 설정은 채널 6번 만 - 100% 로
11:02
설정한 상태구요
11:04
이때 데이터를 봤더니 채널 1 2 3에 값은
11:08
셀 쉐이크가 발동하기 전이랑 같은 값인데 채널 4 5 6 의 값이
11:12
변했습니다
11:14
이 변환 값들의 비트 구조를 봤더니 역시 하위 12 비트의 값들은 센터가
11:20
발동하기 전이랑 같은 값을 가지고 있는데
11:23
상위 4비트 의 값이 변했어요 펜 세이브가 발생하기 전에는 4 기사
11:28
비트의 값이 타 0 이었는데
11:30
페일 세이프 가발 동 햇더니 이상이 4bit 의 값들은 변해 줘 하위
11:34
12bit 난 * 했는데 또 그 중에서 채널 6번을 보시면
11:39
상위 4비트 의 값이 0 0 0 0 2 어떤게
11:42
영령 일념으로 변했습니다 근데 이 4개의 비트 중에 정확히 어떤 비트가
11:47
펭 세이프 를 나타내는 건지는 못찾았어요
11:50
그리고 저는 채널 6번 만 페일 세이프 를 활성화 시켰는데
11:54
어쩜 약간 이상한 것은 채널 4번 이랑 채널 5번의 값도 같이 변했습니다
11:59
이것도 이유를 모르겠어요 구글에서 아무리 검색을 해봐도
12:03
i 버스의 페일 세이프 에 대한 설명이 안 나오더라구요
12:07
어쨌든 확실한 거는 채널 6번을 설정 했으니까 채널 6번의 상위 4비트
12:11
값이 펜 세이프 발동 전에는 0000 이 어떤게
12:16
발동 후에는 값이 달라진다는 거죠 그래서 이 재 이 상위 4비트 의
12:21
값들을 확인 하면 연결이 끊어져 있는 지 아닌 지를 알 수 있게 되는
12:25
겁니다
12:26
그러니까 코드 작성할 때도 이런 식으로 작성할 거예요
12:30
그리고 또 중요한 게 저는 6번 채널만 - 100% 로 벨 세입 설정을
12:35
해놨는데
12:36
면이 6번 채널이 아닌 다른 채널을 사용한다면
12:39
펜스 f8 동 했을 때 상위 4비트 의 값이 조금 달라지는 것 같습니다
12:44
뭐 그건 은 어쨌든 상위 4비트 값이 변하니까 상관이 없는데
12:49
근데 문제는 페일 세이프 설정을 6번 채널이 랑 다른 채널을 같이 온
12:54
시켜서 확인을 해봤는데
12:56
그때 펜 세이프 가 발동을 해도 모든 채널의 상위 4비트 값이 변하지
13:01
않는 경우가 있었습니다
13:03
즉 페일 세이프 가 발동하게 전에 상위 4비트 값이 0 0 0 0 2
13:08
어떤게 페일 세이프 가발 동해도 상위 4비트 값이 그냥 그대로 0000
13:14
이 어떠한 소리에요
13:15
그러면 통신이 끊긴 걸 알 수가 없다는 말입니다
13:18
그래서 결론은 i 버스로 베인 세이프유 를 사용한 경우에는 반드시 재수
13:23
앞 이랑 똑같이 설정을 하시는게 좋구요
13:26
메뉴얼이 없어서 이제 저는 실험 으로만 확인 한거라 향이 4bit 의
13:30
의미를 정확히 알 수가 없었습니다 그래서 조심 하셔야 되고
13:35
다르게 설정하면 절대 안되고 페일 세이프 확인이 안되면 사고가 날 수
13:40
있기 때문에 정말 주의하셔야 됩니다
13:43
그럼 제가 페일 세이프 에 대해서 이렇게 별도의 영상으로 따로 설명
13:47
들으면서 계속 중요하다고 강조하고 있는데 만약에 뺀 세이퍼 를 사용하지
13:51
않으면 대체 무슨 일이 벌어지 길래 이렇게 까지 강조를 하는지 좀 설명을
13:56
드리자면
13:57
자 이제 들어온 개발이 다 끝나서 비행을 한다고 가정해 보겠습니다
14:01
처음에 바닥에 등을 놓고 배터리 전원을 넣게 쪄요
14:04
그리고 이룩하기 위해서 쓰 로드를 조금 높였습니다
14:07
스스로 틀은 채널 3번 을 사용 할 거니까
14:10
천에서 1285 로 좀 높인 상태가 된거죠
14:14
이때 들어오니 막 상승하기 시작한다 고 하겠습니다
14:17
그러다가 무슨 이유에서 가 연결이 끊었어요
14:20
송신기 수신기 연결이 끊어 졌는데 이 때 페인 세이프 를 사용하지 않으면
14:24
이 오른쪽 부분을 보시면 이게 페일 세이프 를 사용하지 않았을 텐데
14:29
연결이 끊김 연 어 데이터가 안들어 오는게 아니고 데이터가 들어 옵니다
14:35
들어오는데 연결이 끊기기 직전에 데이터들이
14:38
계속 들어요 송신기 랑 수신기 연결이 끊어 졌는데 도 수신기는 fc 로
14:44
계속 데이터를 보내 주는데 그 값이
14:47
마지막 연결 끊기기 전에 그 데이터를 계속 보내주는 소리입니다
14:52
fc 에서는 연결이 끊겨 있는지 알 수가 없고요 데이터는 계속 1285
14:57
이 값이 들어오니까
14:58
조정도 안되는 상태에서 계속 상승 만 한단 소리가 됩니다
15:03
차라리 아예 데이터가 안 들어가 버리면
15:06
얼마동안 데이터가 안들어오면 통신이 끊겨 따고 판단해서 어떤 뭐 펜스의
15:10
기능을 활성화 시키거나 할 수 있을텐데 이건 그것도 아니죠
15:13
동시에 끊겼는데 데이터는 계속 들어오고 있고 fc 는 통신이 끊겨
15:18
있는지도 모르는 상태가 되는 거니까
15:21
배터리가 다 될 때까지 그냥 계속 상승 만 하는 거죠 정도 안 되고
15:24
그러면 진짜 위험한 상황이 발생하게 되는 거죠
15:28
근데 페일 세이프 를 사용하게 되면
15:32
조종기 랑 수신기 소통 신이 끊기며 이렇게 데이터가 어떤 값이 바뀌게
15:37
되고 그걸 확인 하면 연결이 끊겨 있는지를 알 수 있으니까
15:42
2절을 울리면서 모터를 끈다 던지 이런걸 해서 더 큰 사고가 발생하는 걸
15:47
방지할 수 있게 되는 겁니다
15:49
그래도 사고의 우려가 있으니까 나중에 개발 다 끝나고 비행할 때는 꼭
15:54
사람없는 뻥 뚫린 공간에 서 핑 하셔야 되요 그럼 이제 페일 세이프 를
15:58
확인 하려면 설정을 어떻게 해야 되고 페일 세이프 가 발동되면 데이터
16:02
어떻게 바뀌는지
16:03
그리고 펜 세이프 를 사용하지 않으면 통신이 끊겨 쓸 때 얼마나 위험한
16:08
상황이 발생할 수 있는 지도 설명을 들었으니까
16:11
이제 실제로 소스 코드를 작성해서 통신 연결 상태를 확인해보고 통신이
16:15
끊겨 쓸 때 부저를 올리면서 상태를 외부로 나타내 주는 걸 구현해 보도록
16:19
하겠습니다
16:20
그럼 이제 소스 코 작업으로 넘어가겠습니다

```
{% include youtubePlayer.html id=page.youtubeID %}

<h4 class="text-center mt-3 mt-2">[STM32CubeIDE를 이용한 STM32F4 자작드론 개발하기] 4-4강. i-Bus Fail-safe 설정 및 파싱</h4><div class="paragraph">지난 시간까지 아이 버스 메시지를 수신하고 구조체 채널 데이터를 Parsing까지 했었습니다. 이제 송 수신기를 사용할 수 있게 된 거구요 값에 범위가 1000부터 2000 이었고 중간 값은 1500 이었습니다 이 범위는 나중에 제어할 때 좀 중요하게 사용될 개념이 라서 기억을 하고 계시는게 좋아요 이제 이번 시간에 할 거는</div><div class="paragraph">필수적인 내용은 아니지만 안전 이란 관련이 있는 기능인 페일 세이프 에 대해서 설명드리겠습니다 안전 이란 관련된건 정말 너무너무 중요한 내용이니까 반드시 꼭 구현을 해 보시고 테스트도 직접 해 보셔야 되요 그럼 이번 시간엔 fsi radio 페일 세이프 설정을 하는 방법이랑 설정을 한 후에 실제 페일 세이프 가 발동이 되면 그걸 확인하는 코드를</div><div class="paragraph">작성하는 방법을 설명드리겠습니다 먼저 fc 랑 수신기 의 전원을 넣었는데 지금 수신기는 전원이 들어간 후에 아직 한번도 송신기 랑 연결이 안된 상태 그래서 통신은 끊겨 있긴 하지만 페일 세이프 가 발동이 된 상태는 아닙니다 fail 세이프 는 수신기의 전원이 들어간 후엔 transmitter 연결이 되고 나서 그 후에 어떤 이유에서든 이 둘 간의 연결이 끊기면 그 때 발동되는</div><div class="paragraph">거예요 그럼 이제 radio 을 켜 보겠읍니다 이제 연결이 된 상태고 iBus 메시지가 fc 로 보여주면서 값들이 출력이 되고 있죠 이것까지 지난 시간에 한거구요 지금 터미널에 출력되고 있는 값들은 채널 1번부터 6번까지 의 모든 값들을 다 출력하고 있는 상태구요 지난 시간에는 각 채널 들의 하위 12 비트 조종기의 값들 만 출력을 했었는데 지금은 상위 4비트 를</div><div class="paragraph">포함해서 16bit 를 전체다 출력하고 상태입니다 송신기 link on 때는 지금 보시면 상위 4비트 의 값이 다 영이어서 이 값들이 지난 시간이 랑 다를게 없죠 그래서 연결이 있으니깐 조작을 하면 또 값들이 바뀔 거구요 그리고 또 이 송신기는 지금 페일 세이프 가 설정이 되어 있구요 지금 상태에서 이 송신기의 천 원을 빼면 fail 세이프 가 발동이 될겁니다</div><div class="paragraph">이제 생식이 전원을 뺐더니 그때 출력된 값들이 이렇게 받기 전 그리고 부 저의 소리로 도 세이프 의 상태를 확인할 수 있도록 해놨습니다 당연히 지금 상태에서 조종기를 조작해 도 값들이 안 변할 거구요 다시 송신기 전원을 넣으면 둘 간의 연결이 되면서 3 1 세이프 가 해제되고 통신이 잘 될겁니다 다시 연결해 보겠습니다 연결했더니 이 값들이 원래대로 돌아 왔고 부 저도</div><div class="paragraph">거 졌구요 이제 지금 상태에서 조작하면 당연히 게 값들이 변하죠 그래서 이번 시간에는 이렇게 페일 세이프 의 상태를 확인하고 페일 세이프 가 발동되면 외부 출력 장치인 부저를 통해서 상태를 확인할 수 있도록 코드 작성 까지 해보도록 하겠습니다 펜 세이프 는 기계 고장 같은걸로 시스템이 오작동 하거나 동작하지 않을 경우를 대비한 안전 장치라고 보시면 되구요</div><div class="paragraph">일종의 예외처리 같은 개념이라고 생각하면 쉽습니다 통신에서는 보통 또 통신이 끊겼을 때 사용되는 안전장치 의미로 사용되고 드론 에서는 성 수직 연결을 끊기 면 위험한 상황이 발생할 수 있어서 보통은 펜 3 2% 정지 비행을 한다거나 자동 착륙 같은 거라 줘 내게 또 업체마다 다를 수 있는데 플라이 스카이 같은 경우는 이제 저희가 사용하는 이 제품 같은 경우는 송수신기</div><div class="paragraph">연결이 끊김 연 이 수신기에서 아이 퍼스 프로토콜로 fc 의 데이터를 보내 줄 때 특정 비트의 값을 바꿔서 보내 주는 방법으로 연결이 끊어졌다는 걸 알려줍니다 그러면 우리는 데이터를 받아서 8시까지 했으니까 그 비트의 값들을 확인해 보면 연결 상태를 알 수 있게 되는 거죠 fsi 6의 페일 세이프 기능을 사용하려면 송신기 설정 을 먼저 해야 되는데 6채널 각각 을 다 페일</div><div class="paragraph">세이프 기능을 사용할 수 있구요 그중에 저희는 채널 6번 만 활성 할 겁니다 pwm 이나 ppm 을 사용할 때는 펜스의 그 동작이 완전히 달라서 제 수업에서는 따라할 순 없고요 제 사업에서는 아이 퍼스 기준으로 설명드리겠습니다 먼저 송신기 전원을 켜 하시구요 ok 키를 길게 눌러서 메뉴로 들어가겠습니다 왼쪽 시스템 3 갑 을 선택하시구요 밑으로 쭉 내리시면 rx 셋 업 이란 메뉴가</div><div class="paragraph">있는데 오케이 에서 선택하시고 또 밑으로 내리시면 세이프 란 메뉴가 있습니다 역시 오케이 에서 들어오시면 지금 저는 채널 6번이 미리 설정을 해놓은 상태라서 - 100% 로 표시가 되어 있는데 처음 하신 분들은 다 5% 표시가 되어 있을 겁니다 채널 6번을 선택하시고 ok 에서 안으로 들어오시면 지금 상태에서 업다운 키를 누르시면 온 오프를 바꿀 수 있게 되요 5% 되어있는걸</div><div class="paragraph">온으로 바꾸시고 그리고 지금 채널 6번은 2 스위치 씨의 할당이 됐는데 지금 상태에서 세츠 씨를 도착하시면 이 게이지가 바뀌어요 내면이 로 올린 상태로 ok 하면 뒤로 돌아 오는데 지금처럼 - 100% 로 표시가 되어 있을 겁니다 만약에 스위치를 중단으로 둔 상태에서 오케이 하시면 이렇게 0% 로 들어올 거구요 다시 스위치를 하단으로 내린 상태에서 오케 하지만 플러스 100% 로</div><div class="paragraph">바뀔 거에요 4 그래서 맨 위로 올리신 후엔 오케이 에서 - 100% 이렇게 설정을 하시고 지금은 설정을 변경 마는 거고 아직 저장을 한 건 아닙니다 저장을 하려면 캔 쓰기를 길게 놓으세요 그러면 이렇게 약간 고주파음이 한번 들리고 뒤로 돌아 오는데 다시 ok 눌러서 확인해 보겠습니다 이제 지금처럼 - 100% 로 표시가 돼 있으면 설정이 잘 된겁니다 설정 데스 명선 조정기 전화</div><div class="paragraph">끊겠습니다 이렇게 해서 펜 세이프 를 온 시켰고 그리고 퍼센트 지를 - 100% 로 해놨는데 우선 조종기 의 조 장량 범위가 첨부터 2004 이점 그리고 펜 세이프 설정이 - 100% 부터 플러스 100% 사이의 값을 설정할 수 있었습니다 그래서 - 100% 가 조종기 값으로는 천이 되는거고 플러스 100% 가 2002 된단 말이에요 그리고 0% 는 1502 되겠죠 제가 지금 채널 6번 설정을 - 100% 로 했는데 이렇게</div><div class="paragraph">설정해 놓으면 3일 세이프 가 발동이 되면 어떻게 동작하면 먼저 6번 채널의 상위 4비트 의 값이 좀 바뀝니다 그리고 1위 12 비트의 값이 조 장량이 값이 - 100% 인천으로 같이 바뀐다 는 말입니다 그래서 제가 만약에 들은 조정을 하면서 채널 6번 스위치 c 를 조작해서 값을 1500 으로 바꾸었다고 했을 때 그 때 조정기 통신이 끊겨서 페일 세이프 가 발동이 되면 상위 4비트 값도</div><div class="paragraph">바뀌고 하위 12 bit 의 값이 1500 에서 지금 설정한 - 100% 인천으로 바뀐다는 소리입니다 그래서 이건 이따가 소스 코드까지 다 작성한 후에 확인을 한번 해볼 거에요 그래서 결론은 펜 세이프 가 발동이 되면 설정한 채널의 값이 그 퍼센트 티즈 대로 같이 바뀐 단 말이구요 이건 pwm 이나 ppm 을 사용할 경우에는 2% 의 값이 엄청 중요한데 저희는 아이 버스를 쓸 거라서 창이 4bit 의</div><div class="paragraph">값이 중요한 거고 2% 즈는 큰 상관은 없습니다 4 개념을 좀 알고 계시는게 좋을 것 같아서 이걸 설명 드린 거구요 수업에서는 2% 값을 이용해서 뭔가 하지는 않을 겁니다 센 세이프 가 발동되면 fc 에서 그걸 알 수 있느냐 없느냐가 정말 중요합니다 pwm 이나 ppm 을 사용한 경우에는 fc 에서 그 상황을 아기가 조금 어렵구요 하려면 별도의 채널을 1 전용으로 할당해서 사용해야 되고</div><div class="paragraph">그럼 그 채널은 3일 세이프 를 확인하는 용도로만 사용됩니다 i 버스처럼 그 한 채널에 상위 4비트 이가 상태 정보 그리고 하위 12 bit 가 조종기 정보 이렇게 사용하는게 아니고 나의 한 채널을 통으로 페일 세이프 를 확인하는 용도로만 사용해야 되는 소리예요 그리고 좀전에 설명드렸던 퍼센트 즈 설정한 애로우 pwm 이랑 피핀 값이 바뀌고 요 스로틀을 50% 로 유지 해라 같은</div><div class="paragraph">단순한 동작만 가능합니다 물론 fc 에서 연결이 끊겨 있는지를 알 수 있으면 소스코드를 구현하면 복잡한 동작들로 다 구현할 수 있게 하는데 4 좀 전에 말씀드린 것처럼 채널 하나를 페일 세이프 전용으로 사용해야 되서 아이 버스를 사용할 때보다 이 pwm 이나 ppm 을 사용할 경우에는 뭔가 좀 제안 저기요 근데 아이 버스를 사용하는 경우에는 펜 세이프 가 발동되면 fc 에서</div><div class="paragraph">확인하기가 쉽구요 별도의 채널을 따로 할당을 필요가 없습니다 그리고 fc 에서 바로 상태 확인이 되니까 단순한 동작을 당연히 가능하고 정지 비행이나 자동 착륙 같은 것도 코드 로 구현하면 할 수 있습니다 4세 수업에서는 그거 까지는 다루지 못하고 아까처럼 단순하게 부저를 올리는 걸 해 볼 거고 그리고 4 다다음 제퍼 때 모터 동작까지 들어가면 그 때는 펜 세이프 가</div><div class="paragraph">발동이 되면 모터를 강제로 꺼버리는 그런 코드를 작성할 겁니다 그럼 기체가 추락할 테니깐 실내에서 테스트에 비행하는 단계에서는 그게 좀 안전 할 거구요 만약에 이제 개발이 끝나고 실로에 서핑을 할 때 그때 그냥 추락하면 그것도 좀 위험하긴 한데 근데 사람없는 공터에서 비행을 하며 는 그때 그냥 추락을 하면 그래도 들어온 망가지는 거 외에는 큰 사고가 날 일이 없을</div><div class="paragraph">테니까 좀 덜 위험하게 쪄요 정지 비행을 하거나 서서히 착륙하는 것을 하려면 고도 센서 랑 gps 를 이용해서 제어를 해야 될텐데 우선 gps 란 고도 센서 데이터 받아오는 것은 챕터 2 챕터 3 때 다 하긴 했었으니까 구현은 활약을 할 수 있습니다 제 없고 대만 작사 하면 되니까 이제 페일 세이프 가 발동되면 아이 퍼스 데이터가 어떻게 바뀌는지 를 설명드리겠습니다 지금 여기에</div><div class="paragraph">출력된 모든 값들은 팜 22 비트의 조 장량 데이터 란 거기에 상위 4비트 의 상태 데이터를 합쳐서 16bit 데이터를 다 출력한 값들이 고요 이 왼쪽 데이터는 조종기 랑 수신기 연결이 돼 있을 때 채널 1번부터 6번까지 값들을 출력한 거고 페일 세이프 가 발동하기 전에 섬 이 상태에서 채널 4 5 6의 데이터를 봤더니 1499 천천히 런 값이고 이건 비트 구조로는 이런 구조를 가지고</div><div class="paragraph">있습니다 봤더니 상위 4비트 에 같은 탈 영웅이란 값은 에요 그리고 채널 123 도 지금 1,500 1,500 1,000 이런 값을 있는데 이것도 상위 4비트 의 값들을 보면 다영 이에요 지금 상태에서 제가 송신기의 전원을 껐습니다 영선 이성 신기에 페인 세이브 설정은 채널 6번 만 - 100% 로 설정한 상태구요 이때 데이터를 봤더니 채널 1 2 3에 값은 셀 쉐이크가 발동하기 전이랑 같은 값인데 채널 4</div><div class="paragraph">5 6 의 값이 변했습니다 이 변환 값들의 비트 구조를 봤더니 역시 하위 12 비트의 값들은 센터가 발동하기 전이랑 같은 값을 가지고 있는데 상위 4비트 의 값이 변했어요 펜 세이브가 발생하기 전에는 4 기사 비트의 값이 타 0 이었는데 페일 세이프 가발 동 햇더니 이상이 4bit 의 값들은 변해 줘 하위 12bit 난 * 했는데 또 그 중에서 채널 6번을 보시면 상위 4비트 의 값이 0 0 0 0 2</div><div class="paragraph">어떤게 영령 일념으로 변했습니다 근데 이 4개의 비트 중에 정확히 어떤 비트가 펭 세이프 를 나타내는 건지는 못찾았어요 그리고 저는 채널 6번 만 페일 세이프 를 활성화 시켰는데 어쩜 약간 이상한 것은 채널 4번 이랑 채널 5번의 값도 같이 변했습니다 이것도 이유를 모르겠어요 구글에서 아무리 검색을 해봐도 i 버스의 페일 세이프 에 대한 설명이 안 나오더라구요 어쨌든</div><div class="paragraph">확실한 거는 채널 6번을 설정 했으니까 채널 6번의 상위 4비트 값이 펜 세이프 발동 전에는 0000 이 어떤게 발동 후에는 값이 달라진다는 거죠 그래서 이 재 이 상위 4비트 의 값들을 확인 하면 연결이 끊어져 있는 지 아닌 지를 알 수 있게 되는 겁니다 그러니까 코드 작성할 때도 이런 식으로 작성할 거예요 그리고 또 중요한 게 저는 6번 채널만 - 100% 로 벨 세입 설정을 해놨는데</div><div class="paragraph">면이 6번 채널이 아닌 다른 채널을 사용한다면 펜스 f8 동 했을 때 상위 4비트 의 값이 조금 달라지는 것 같습니다 뭐 그건 은 어쨌든 상위 4비트 값이 변하니까 상관이 없는데 근데 문제는 페일 세이프 설정을 6번 채널이 랑 다른 채널을 같이 온 시켜서 확인을 해봤는데 그때 펜 세이프 가 발동을 해도 모든 채널의 상위 4비트 값이 변하지 않는 경우가 있었습니다 즉 페일 세이프</div><div class="paragraph">가 발동하게 전에 상위 4비트 값이 0 0 0 0 2 어떤게 페일 세이프 가발 동해도 상위 4비트 값이 그냥 그대로 0000 이 어떠한 소리에요 그러면 통신이 끊긴 걸 알 수가 없다는 말입니다 그래서 결론은 i 버스로 베인 세이프유 를 사용한 경우에는 반드시 재수 앞 이랑 똑같이 설정을 하시는게 좋구요 메뉴얼이 없어서 이제 저는 실험 으로만 확인 한거라 향이 4bit 의 의미를 정확히 알</div><div class="paragraph">수가 없었습니다 그래서 조심 하셔야 되고 다르게 설정하면 절대 안되고 페일 세이프 확인이 안되면 사고가 날 수 있기 때문에 정말 주의하셔야 됩니다 그럼 제가 페일 세이프 에 대해서 이렇게 별도의 영상으로 따로 설명 들으면서 계속 중요하다고 강조하고 있는데 만약에 뺀 세이퍼 를 사용하지 않으면 대체 무슨 일이 벌어지 길래 이렇게 까지 강조를 하는지 좀 설명을</div><div class="paragraph">드리자면 자 이제 들어온 개발이 다 끝나서 비행을 한다고 가정해 보겠습니다 처음에 바닥에 등을 놓고 배터리 전원을 넣게 쪄요 그리고 이룩하기 위해서 쓰 로드를 조금 높였습니다 스스로 틀은 채널 3번 을 사용 할 거니까 천에서 1285 로 좀 높인 상태가 된거죠 이때 들어오니 막 상승하기 시작한다 고 하겠습니다 그러다가 무슨 이유에서 가 연결이 끊었어요 송신기 수신기</div><div class="paragraph">연결이 끊어 졌는데 이 때 페인 세이프 를 사용하지 않으면 이 오른쪽 부분을 보시면 이게 페일 세이프 를 사용하지 않았을 텐데 연결이 끊김 연 어 데이터가 안들어 오는게 아니고 데이터가 들어 옵니다 들어오는데 연결이 끊기기 직전에 데이터들이 계속 들어요 송신기 랑 수신기 연결이 끊어 졌는데 도 수신기는 fc 로 계속 데이터를 보내 주는데 그 값이 마지막 연결 끊기기</div><div class="paragraph">전에 그 데이터를 계속 보내주는 소리입니다 fc 에서는 연결이 끊겨 있는지 알 수가 없고요 데이터는 계속 1285 이 값이 들어오니까 조정도 안되는 상태에서 계속 상승 만 한단 소리가 됩니다 차라리 아예 데이터가 안 들어가 버리면 얼마동안 데이터가 안들어오면 통신이 끊겨 따고 판단해서 어떤 뭐 펜스의 기능을 활성화 시키거나 할 수 있을텐데 이건 그것도 아니죠 동시에</div><div class="paragraph">끊겼는데 데이터는 계속 들어오고 있고 fc 는 통신이 끊겨 있는지도 모르는 상태가 되는 거니까 배터리가 다 될 때까지 그냥 계속 상승 만 하는 거죠 정도 안 되고 그러면 진짜 위험한 상황이 발생하게 되는 거죠 근데 페일 세이프 를 사용하게 되면 조종기 랑 수신기 소통 신이 끊기며 이렇게 데이터가 어떤 값이 바뀌게 되고 그걸 확인 하면 연결이 끊겨 있는지를 알 수 있으니까</div><div class="paragraph">2절을 울리면서 모터를 끈다 던지 이런걸 해서 더 큰 사고가 발생하는 걸 방지할 수 있게 되는 겁니다 그래도 사고의 우려가 있으니까 나중에 개발 다 끝나고 비행할 때는 꼭 사람없는 뻥 뚫린 공간에 서 핑 하셔야 되요 그럼 이제 페일 세이프 를 확인 하려면 설정을 어떻게 해야 되고 페일 세이프 가 발동되면 데이터 어떻게 바뀌는지 그리고 펜 세이프 를 사용하지 않으면</div><div class="paragraph">통신이 끊겨 쓸 때 얼마나 위험한 상황이 발생할 수 있는 지도 설명을 들었으니까 이제 실제로 소스 코드를 작성해서 통신 연결 상태를 확인해보고 통신이 끊겨 쓸 때 부저를 올리면서 상태를 외부로 나타내 주는 걸 구현해 보도록 하겠습니다 그럼 이제 소스 코 작업으로 넘어가겠습니다</div>

#### video 18
- iBus failsafe configuration parsing

{% include youtubePlayer.html id=page.youtubeID18 %}

```diff

00:18
챕터 6 모터 구동이 끝난 후에 올리는 영상입니다
00:22
요지는 이사 다 c 사에서 펜 세이프 설명 드릴 때 아이 욕 송신기를
00:27
사용할 경우에 대해서 설명을 지었는데
00:29
4 확인을 해보니까 는 io x 버전에 송신기를 사용할 때는 해당되지
00:34
않는 내용 이었구요
00:36
근데 제 수 없든 군중 aix 버전 의 송신기를 사용하는 분이 계시기
00:39
때문에 이때 설정 하는 방법이랑 펜스 f 설정한 방법을 설명을 드리고
00:44
소스 코드도 작성해 보도록 하겠습니다
00:47
미리 확인을 하고 진행 있어야 하는데 그렇지 못한 점 죄송하다는 말씀
00:50
먼저 드리고 시작하겠습니다
00:52
2 아이유 글 쓰시는 분들은 이 영상은 안 보셔도 되는데 그래도 알아두면
00:56
나쁠건 없으니깐 보시는게 좋을것 같구요
01:00
io x 를 쓰신 분들은 반드시 영상을 보셔야 되고 그리고 이 영상을
01:04
보시기 전에 이전에 했더니 내용들
01:07
챕터 4에 차 다시 1 2 3 4에 모든 내용들을 꼭 다 보시고 구현도
01:11
직접 하시고 진행하셔야 됩니다
01:14
이전 강 이들이 i6 뻐 전에 대한 설명이 라서 조금 다를 수도 있긴
01:18
한데 그래도 큰 틀은 비슷해서
01:21
이전 했던 내용들을 그대로 사용할 거구요 그리고 이전에 설명 드려 썼던
01:25
내용들에 대해서는 단복 설명드리지 널리 겁니다
01:29
소스 코드도 이사 다시 4 때 했던 것에서 조금만 추가하고 바꾸는
01:33
방식으로 설명 드릴 겁니다
01:36
왼쪽이 i6 의 모습이 0 오른쪽이 io x 의 모습입니다
01:40
보시다시피 외형은 완전히 똑같은데 스티커 붙어 있는게 조금 다르구요
01:44
io x 라고 써져 있잖아 그리고 내부 펌웨어 버전이 다르고
01:49
가장 큰 차이는 아이유 근 최대 6채널 까지 쓸수 있는데
01:53
i6 x 는 내부 설정에 따라서 최대 10 채널을 다 사용할 수 있습니다
01:58
10 채널 다 쓰면 2 스위치 들이랑 가던 정도를 다 사용할 수 있단
02:01
소리 장
02:03
조금있다가 채널 설정 하는 방법을 설명 될 건데 그때는 10 채널 중에
02:06
저희는 7 채널을 사용할 거구요
02:09
채널 오랑 채널 6 은 이전에 설명드렸던 거랑 같이 스위치의 2
02:14
sce 를 사용 할 거고 그리고 7번 채널은 스위치 dl 당할 겁니다
02:19
여기서 조금 달라진 내용이죠 이 7번 채널을 ct 에 할당할 건데 이건
02:25
스위치 용도로 사용할 게 아니고 펜 세이프 전용 채널 로 사용할 겁니다
02:29
그러면 이제 세 개의 채널이 남는데 봉강 에서는 남는 채널들은 사용하지
02:33
않습니다
02:35
그리고 아이유 길항 채널 설정한 방법이 조금 달라서 또 다시 설명을 드릴
02:39
건데
02:40
7 채널만 사용하는 걸로 설명 될 거고 만약 10 채널을 사용하고 싶으신
02:44
분들은 10 채널로 설정에서 사용하시면 됩니다
02:48
지난 사다 c4 챕터에서 페일 세이프 설정하고 확인한 걸 했는데 이
02:52
강의를 다시 촬영하는 이유가
02:54
아이유 근 뺄셈의 채널을 전용으로 할당 하지 않아도 상위 4비트 의 값을
03:00
이용해서 회색 상태를 확인할 수 있었는데
03:02
아이유 x 는 페일 세이프 가발 통해도 2 3위 4bit 의 값이 변하질
03:07
않아요 그래서 4 다시 4 에서 했던 내용으로는 페일 세이프 를 판단할
03:12
수가 없습니다
03:13
그래서 어떻게 하나 고민을 좀 하다가 그나마 좀 괜찮은 방법을 찾아서 그
03:17
방법으로 이제 설명을 드릴 거구요
03:20
좀 전에 말씀드렸듯이 채널 수가 좀 넉넉한 이까 7번 채널을 스위치 d
03:24
에 할당하고 이걸 페일 세이프 전용 채널로 사용할 겁니다
03:29
i 퍼스 메시지 구조는 아이유 길항 ix 가동 이라구요
03:32
첫 2바이트 는 고 맥스 2040 싱크 차로 시작했고 그 후에 한 채널당
03:38
2 바이트 씩 총 14 채널의 데이터가 들어오고
03:42
마지막 두 바이트가 체크섬 였죠 다 앞에서 설명 들었었던 내용이고 체크섬
03:47
을 계산하는 방법도 같아서 이전에 작성한 코드를 그대로 사용하면 됩니다
03:52
그래서 아이 퍼스 메시지의 구조 설명 넘어 가구요
03:55
그리고 수업에서는 20 채널 중에 7 채널 까지만 사용할 건데
04:00
80 하는 코드는 이전에 6채널 파시는 것을 구현을 해 놨으니까 검사
04:05
조금만 수정해서 사용할 겁니다
04:08
io x 는 조종기 설정하는 방법이 조금 달라서 처음부터 다시 설정하도록
04:12
하겠습니다
04:13
우선 펌웨어 버전을 확인해 보도록 하겠습니다
04:18
조종기 저널 먼저 켜지고
04:21
ok 키를 길게 누르시고 왼쪽 시스템 3 앞 에서 다시 오케이 누르세요
04:26
그리고 밑으로 쭉 내리시면 두번째 페이지
04:30
펌웨어 버전에 메뉴가 있어요 그리고 ok 에서 들어가보시면
04:34
이제 이런 화면이 나타날 건데 지금 제가 쓰고 있는 이 아이 옥 x 의
04:39
펌웨어 버전은 1.0 이고
04:41
밀리지 데이트가 2018년 12월 11일 인거 같습니다
04:46
그리고 하드에 버전은 1.0 으로 되어있네요 자 저랑 같은 직 한번
04:50
확인해보시구요
04:53
버전 확인 하셨으면 이제 본 설정 들어가기 전에 먼저 공장 조개를 하도록
04:57
하겠습니다
04:58
공장 초기 하는 방법은 아니 6 때랑 똑같아요
05:03
이거 확인 하셨으면 캔슬 키 눌러서 뒤로 오신 다음에 밑으로 조금 더
05:08
내리면 다음 페이지에 팩토리 리스에 대한 메뉴가 있습니다
05:12
오케이 서 들어가 지구요 오케이 한번 더 누르시고
05:16
그 다음에 업다운 키를 이용해서 예스 노를 선택할 수 있는데 예수 를
05:19
선택하고 ok 를 누릅니다
05:22
약간 고주파 비프음이 한번 되는데 이게 설정이 적용 됐단 말이야
05:26
공장초기화 됐단 말이죠 만약에 2 공장초기화 메뉴에 들어갔을 때 이런
05:32
메시지가 안뜨고
05:33
바인딩을 먼저 해제 해라 라는 메시지가 뜨는 분이 계시다면 지금 그 때는
05:39
조종기 랑 수신기가 바인딩이 되어 있는 상태에요
05:42
먼저 파인딩 을 해제하고 공장초기화를 해라 라는 그런 메세지가 뜰 수도
05:47
있습니다
05:47
일단 바인딩 해제 하시고 하시면 되요
05:50
이제 스틱 모드를 모두 투로 설정할 건데 설정을 확인 하신다면
05:57
지금 메뉴에서 위로 조금 올리시면 스틱스 모드 라는 메뉴가 있습니다
06:01
로보킹 에서 들어가시면 모두 투로 기본 설정이 되어 있죠
06:05
업다운 키를 이용해서 모두 일부터 모드 4까지 선택해서 사용할 수 있게
06:10
되어 있고
06:11
저희는 기본 그대로 모두 트로 사용할 겁니다 모두 투는 오른쪽 수평방향
06:16
2채널 1
06:17
수직방향 채널이 왼쪽 수직방향 2채널 3
06:21
수평방향 채널 4의 할당됩니다 그리고 모두 투 대로 이전에 코드 작성을
06:25
해 놨으니까 코드는 그대로 사용하면 됩니다
06:29
이제 이후부터 재수 없 방식대로 페임 세이프 를 설정하시면 반드시 본
06:34
강의 순 사 랑 똑같은 순서로 진행해 주셔야 되요
06:37
순서를 다르게 설정하면 설정이 안되는 게 있습니다
06:40
만약에 순서 잘 못 하셨다면 당황하지 마시고 공장초기화 부터 다시 하고
06:45
처음부터 따라하시면 됩니다
06:48
지금 설명드린 것들은 fsi 6 때는 같았는데
06:51
이제 아이유 길항 조금 다른 메뉴들이 나오기 시작하니까 는 천천히 잘
06:54
따라하세요
06:56
맨 먼저 사용할 옥스 스위치 들이랑 채널의 수를 설정해야 됩니다
07:02
우선 캔슬 해서 뒤로 오시고 맨 밑으로 내리시면 옥스 스위치 스 이란
07:07
메뉴가 있죠
07:08
이 메뉴는 fsi 6 에는 없는 매깁니다
07:11
ok 에서 들어오시면
07:15
기본 스위치 abcd 가 5% 설정이 되어있고
07:19
가변 정 ap 가 온 으로 되어 있습니다 그리고 채널의 수가 6 으로
07:22
되어 있는데 이 설정들 좀 바꿀까요
07:25
모든 스위치를 다온 으로 바꿀 거고 채널 수를 7로 바꾸겠습니다
07:31
여기서 업다운 키를 이용해서 온 오프를 바꿀 수 있게 되어있구요 온 으로
07:35
바꾸시고 나머지 스위치 들도 다 이렇게 온 으로 바꿔 주시고
07:40
채널을 저희는 7로 사용 할 건데 여기서 10 채널을 사용하실 분들은 쭉
07:46
위로 올리시면 10가지 사용할 수 있게 되있어요 칩으로 해서 설정 하시면
07:50
되고
07:50
저는 7로 설정하겠습니다 됐으면 캔슬 키를 길게 눌러서 설정을 완료
07:56
하시고 설정이 잘 되었는지 한번 확인해보겠습니다
07:59
배터리 설정이 잘 됐네요
08:03
지금 설정한 것은 스위치를 할당 하는게 아니고
08:07
이따가 스위치 할당을 따로 또 해줘야 되는데 그때 스위치를 선택할 수
08:11
있게 할 거냐
08:12
메뉴의 나타나게 할 거 냐 아니냐를 설정한 겁니다 채널도 마찬가지에요
08:17
며 채널을 쓸 건지 만 설정 한거고 채널의 스위치 할당하는 건 따로
08:21
해줘야 됩니다
08:24
그 다음에 애플 사의 옥 설정할 때는 채널의 스위치 할 당하는 걸 먼저
08:28
해주고 페일 세이프 설정을 그 후 해줬는데
08:31
아이 옥 x 는 그 순서를 바꿔서 해줘야 됩니다
08:34
플레이스 입 설정을 먼저 해주고 옥스 채널의 스위치 할당하는 걸 나중에
08:39
해 줄 거예요
08:41
이제 위로 쭉 올라오시면
08:45
알엑스 3 앎 이란 메뉴가 있는데 안으로 들어 오시고 또 그 하위 메뉴의
08:50
페일 세이프 가 있죠
08:51
오케이 에서 안으로 들어옵니다 그러면 지금처럼 모든 채널이 기본 5%
08:56
설정이 되어있고
08:57
2채널 7번 이렇게 목록에 있는데 지금 이거는 좀 전에 저희가 채널 7
09:02
번까지 사용하겠다고 설정을 했기 때문에 채널 7의 목록에 있는거고 채널
09:07
6가지 사용하는 분들은 이게 목록에 없겠죠
09:10
그리고 채널 10가지 사용하시는 분들은 이 밑으로 내리면 여기에 채널 8
09:14
9 10 이 목록에 뜰겁니다
09:16
어쨌든 저희는 채널 7 번까지 있을 거고 이 7번 채널의 페일 세이프 를
09:21
활성화 시키겠습니다
09:23
자오 k4 안으로 들어오지 고 오프 되어있는걸 업다운 키를 이용해서
09:27
온으로 바꾸신 다음에 됐으면 오케이 긴 한번 더 누르시구요
09:31
이렇게 하면 설정 변경 만든거 고 설정을 저장한 건 아니에요
09:35
지금처럼 이렇게 0% 가 돼 있으면 되구요
09:39
설정을 저장하려면 캔슬 키를 길게 누릅니다
09:43
이렇게 고주파 소리가 한번 나면 설정 저장이 완료된 거고
09:47
잘 저장이 되는지 확인해 보겠습니다 이렇게 0% 로 살 태이 줘
09:52
아직 이 7번 채널의 스위치 할당이 안 돼 있는 상태기 때문에 지금
09:56
설정한 것 처럼 이렇게 0% 가 돼 있어야 돼요 이게 좀 중요합니다
10:00
꼭 0% 가 돼 있어야 되요 이게 0% 로 안되 있으신 분들은 설정
10:06
하는거에 순서가 틀려서 그런 걸 수 있으니까 다시 공장 초기화 하시고
10:10
처음부터 따라 주기 바랍니다
10:14
좀 전에 설정한 이 7번 채널의 페일 세이프 값이 있고 경우 프로가 되어
10:18
있어야 된다 고 강조했는데
10:19
이게 정말 중요한 게 이렇게 설정을 해놓고 페일 세이프 가 발동이 되면
10:24
해당하는 채널 2 7번 채널의 값이 설정한 퍼센트 대로 바뀐다고 그랬죠
10:30
그리고 또 5% 되어 있는 이 다른 채널들은 이전에 값을 유지하고 있는
10:35
다고 설명 들었었습니다
10:37
또 여기서 2% 가 이미 하는게 - 100% 면 아이 퍼스 값으로는 천이
10:42
고
10:43
0% 면 1500 100% 면 2000 이라고 설명 드려 썼구요
10:48
그래서 딱 이렇게 설정을 해놓으면 언제죠 종이라 연결이 끊겨서 페일
10:52
세이프 가 발동되면 1번부터 6번 채널 까지는
10:57
발동될 기전에 조작 값이 그대로 유지가 되고 7번 채널은
11:01
그전에 값이 뭐가 됐든 발동이 되면 0% 인 1500 이란 값으로
11:06
바뀐다는 소리입니다
11:08
그래서 이제 7번 채널의 값이 1500 이면 페일 세이프 라고 가정할
11:12
겁니다
11:13
그리고 나중에는 모터 구동 까지 할 때는
11:16
페일 세이프 가 발동되면 모터를 강제로 끈다고 그랬죠
11:20
그게 더 지금 개발한 단계에서는 안전 하니까
11:23
그래서 이 부분이 fsi 6 이랑 좀 달라지는 부분이고
11:27
fsi 6은 이 채널의 상위 4비트 의 값을 비교해서 썼는데
11:32
io x 는 상위 4비트 의 값을 비교하는 게 아니고 이 채널의 전체
11:37
값을 비교하는 거죠
11:38
상위 4비트 의 값이 안 변해요 rex 는
11:42
이제 이렇게 설정을 하고 코드도 이렇게 짧은 된
11:45
또 이렇게 하면 문제가 자 이제 페일 세이프 가 발동하면 1500 이란
11:50
값이 들어온다 그랬는데 또 1502 되면 페일 세이프 가 발동했다 고
11:54
가정 한다고 그랬는데
11:57
그러면 페일 세이프 가 발동하지 않을 때는 이 값이 절대 1502
12:01
들어오면 안 된단 소리에요
12:03
이 7번 채널의 값이 평시에는 1502 들어오면 안 됩니다
12:08
왜냐하면 1502 들어오는 펜스에 크다 라고 가정하고 모터를 꺼서
12:11
추락시킬 거잖아요 그래서 이제 바로 이 당 맥 7번 채널의 스위치 d 를
12:17
할당 할 건데 사람이 잘못해서 2 스위치 딜을 조작하다 가 운이 나쁘면
12:21
값이 1502 되면서
12:24
펜 세이브 상황이 아닌데도 모터를 끄면서 추락할 위험이 생길 수 있단
12:28
소립니다
12:29
사람이 실수 로 인위적으로 활동을 시킬 수도 있단 소리 0
12:34
다행히 스위치 d 는 2단 스위치 어서 천이나 2002 둘중에 한 해
12:40
까만 출력이 되서
12:41
뭐 이렇게 설정을 하면 위험이 좀 많이 줄어듭니다 사람이 실수 로벤
12:46
세이프 를 발동시킬 위험이 좀 줄어 들어요
12:49
이제 펜 세이프 설정이 끝났으니까 마지막으로 옥스 채널을 할당하는
12:53
살입니다
12:54
그 옥스 채널의 스위치들을 할당 할까요 이건 아이 욕설 정할 때도 했어
12:58
줘
12:59
이제
13:00
확인 하셨으면 캔슬 키를 눌러서 주로 나오시고 또 켄 쓸 캔슬을 해서
13:05
여기 메뉴까지 나오신 다음에
13:07
이번엔 오른쪽 펑션 3 더 메뉴로 들어갑니다
13:11
오케 가지고 옥스 채널이 란 메뉴가 있는데 선택하셔서 들어오시면 채널
13:17
5번 이랑 채널 6번이 기본 값 연정 a b 로 설정이 되어 있고
13:21
ok 에서 밑으로 내리면 4채널 7 많이 나올까요
13:24
생활 7번은 넌 아무것도 설정된 게 없습니다
13:28
그리고 10번 채널까지 사용하시는 분들은 이 밑에 채널 8 9 10 b
13:33
나오겠죠
13:35
그럼 다시 채널 5번의 이 스위치를 가변 저항 a 로 되어있는걸 업다운
13:40
키를 이용해서 스위치 a 로 바꿉니다
13:43
그리고 채널 6 뚝 스위츠 c 로 바꾸고 요
13:47
여기까지는 i6 설정한 건 똑같은데 채널 7이 새로 생겼죠
13:52
채널 7을 스위치 d 로 설정하시고
13:55
데 쓰는 캔슬 끼를 길게 눌러서 설정을 저장합니다
14:00
그리고 설정이 잘 됐는지 오케이 해서 다시 들어가서 보시면
14:04
설정한 대로 잘 되어 있죠 저희 아까 그 옥스 스위치 설정할 때 스위치
14:10
abcd 가 오프 데 있었던 걸 온으로 바꿨고 채널 6 으로 돼 있던 걸
14:14
7로 바꿨던 설정이 있었는데 그때 오프에 있는것을 온으로 안 바꾸면
14:20
여기에 이 설정할 수 있는 메뉴들이 안 나타낸 스위치 abcd 가
14:24
메뉴가 않나 4 난 난 설입니다 그래서 이런 다온 으로 설정을 바꿔 나기
14:28
때문에 이렇게 메뉴가 나오는 거예요
14:31
그랬으면 확인을 다 했구요 설정이 다 끝났습니다
14:36
그럼 이제 설정이 다 끝났으니까 저장이 잘 됐는지 한번 확인해보겠습니다
14:41
이제 이 바로 위에 디스플레이 라는 메뉴가 있죠
14:45
오케이 에서 들어오시면 채널의 조작한 값들이 여기 그래프로 표시가 되는데
14:49
채널 번이 오른쪽 스틱의 가로방향 잘 바뀌고 있구요
14:54
채널 이번이 세로 방향 채널 3번 2 왼쪽 스틱의 새로 가면
15:00
생활 4번이 가로방향 잘 바뀌고 있죠
15:03
그리고 채널 5 6을 지금 스위치의 이랑 스위치 씨의 할당을 했는데
15:07
shale 를 먼저 조작하면 채널 5번의 바뀌 이렇게 바뀌죠
15:12
2단 스위치 라서 지금 이렇게 내리면 플러스 100% 고 위로 올리면 -
15:18
100% 입니다 그리고 그래프로 는 이렇게 표시가 되구요
15:22
스위치 씨는 3단 스위치 라서 - 100% 0% 그리고 플러스 100%
15:27
이렇게 세 단계가 있죠
15:28
지금 1호 올린게 - 100% 그리고 중단으로 놓으면 0%
15:34
밑으로 내리면 플러스 100% 입니다
15:37
그 다음에 이제 업다운 키를 이용해서 밑으로 내리시면 채널 7번이 있는데
15:42
7번째 는 지금 3 hd 에 할당 했는데 이 티는 2단 쓰이지 입니다
15:47
그래서 위로 올렸을때 - 100%
15:49
밑으로 내렸을 때 플러스 100% 에요
15:52
아까 제가 이 펜스 2% 0% 로 설정해 놓았는데 이 스위치 뒤로 조장을
15:57
하면 0% 가 나올 수가 없다는 소리입니다
16:00
- 100% 아니면 플러스 100% 이렇게 두개 밖에 없으니까
16:05
그래서 0% 가 아예 안 나오면 좋은데 근데 이게 사람이 좀 인위적으로
16:11
억지로 힘줘서 이렇게 중간쯤에 고정을 하고 있으면 아쉽게도 0% 에 갇힌
16:16
1502 나옵니다
16:18
그니깐 사람이 잘못 조작하면 이렇게 이 상태로 데이터가 이제 받아 지면
16:23
센 세이프 가 발동했다 라고 인식하고
16:26
fc 가 모터를 꺼 버리는 상황이 발생할 수도 있단 소리 자 이건 지금
16:30
제가 이렇게 손으로 잡고 있을 때나 이런 데이터가 나오는 거고
16:34
스위치가 있 아니라서 그 데이터가 안 나와야 돼요
16:39
어쨌든 1502 나오면 안되는데
16:42
이렇게 억지로 하면 나오기는 한다 그래서 절대 억지로 하지 마시고 이제
16:47
이후부터는
16:49
스위치 딜을 그냥 조작하지 않을 겁니다
16:52
스위치 뒤에는 아무 기능도 안 넣을 거고 또 조작도 안할겁니다
16:57
잘못 조작하면 셀 세이프 가 또 실수로 발동이 될 수 있기 때문에 좀
17:01
위험한 상황이 발생할 수 있으니까 그냥 앞으로는 조작하지 마시기 바랍니다
17:07
지금까지 설명드린 방법이 그나마 최선의 방법 이라고 결론을 내려서 이렇게
17:11
설명드린 거고
17:12
fc 입장에서는 펜 세이프 가 발동 됐는지를 아느냐 가 정말 중요한데
17:17
이렇게 하면 그래도 쉽게 알 수 있죠 으 그 7번 채널의 값이 1500
17:22
이는 아니냐 만 판단하면 되니까 쉽게 알 수 있고 또 잘못해서 사람이
17:27
실수로 페일 세이프 를 발동시킬 일도 거의 없을 것 같아서 이 방법으로
17:32
설명을 드리는 거구요
17:34
만약에 0% 가 아닌 - 100% 는 플러스 100% 로 설정을 했다면
17:39
잘못하면 제 실수로 스위치 딜을 건드리면
17:42
스위치 d 는 무조건 - 100% 또는 플러스 100% 의 값이 나오니까
17:47
잘못하면 제 fc 가 실제 펜 셉 상황이 아닌데도 페일 세이프 라고
17:52
인식을 하고 강제 추락시킬 수 있는데
17:55
설정을 0% 로 해두면 스위치 딜을 건드려도 사람이 억지로 금세 지를
18:01
중간에 주고 있지 않는 이상 0% 가 안 나오니까
18:04
실수로 페일 세이프 가 발동될 일이 줄어드는 거죠 그래서 제가 왜 0%
18:09
를 강조 드리는 지 이해가 좀 되셨길 바랍니다
18:12
7번 채널의 값은 페일 세이프 가 발동될 때 만 0% 1500 이란 같이
18:17
나와야 되고 그렇지 않은 경우에는 절대 1502 나오면 안 돼요
18:22
또 지금까지 설정하게 딱 그대로 설정한 겁니다
18:25
그래서 이건 소스 코드 짜면서 한번 확인해 보도록 하겠습니다
18:29
그리고 소스 코드는 지난 살아 c4 챕터에서 작성 했던가 에 이어서
18:33
작성을 할 거고
18:35
거의 이전에 작성 썻던 코드를 그대로 다 사용할 거예요
18:39
1 몇 줄만 추가 할 겁니다 그래서 꽃 으 작업은 별로 없습니다
18:43
그러면 이제 소스 코드 작업으로 넘어가도록 하겠습니다

```

### Ch5 QAV210 frame
#### video 19
- hardware assembly

{% include youtubePlayer.html id=page.youtubeID19 %}

```diff
00:15
챕터 4에서는 fsi a6 삘이 씨바 의 아이 퍼스 데이터를 받아서
00:19
파싱을 하고
00:21
조종기를 조작해 쓸 때 그 값들이 어떻게 변하는지 더 확인해 받고
00:25
마지막으로 뺄 세이프 설정을 한 후에 통신이 끊겨 쓸 때 데이터가 어떻게
00:29
바뀌고
00:30
fc 에서는 그걸 어떻게 확인하는 직까지 설명드리고 구현해 봤습니다
00:36
이번시간은 챕터 5 의 시작 이구요 이번 챕터는 기체를 조립하고 각각의
00:40
부품들을 연결하는 방법에 대해서 설명드리겠습니다
00:43
이번 챕터는 설명들 게 별로 없어서 영상 하나로 끝날 것 같아요
00:49
이번 시간에 이렇게 기체를 조립하고 뭐 터라 esc esc 랑 b 씨를
00:53
나 빼면서 연결해 볼 거구요
00:55
그리고 fc 도 이렇게 프레임 가운데 고정 알겁니다
00:58
그래서 이번 챕터 까지 하면 쿼드 로터 의 모습이 갖춰질 거예요 그래서
01:02
이제 진짜 들어온 개발한 느낌이 좀 나죠
01:05
그리고 이게 끝나면 센서가 또 다시 한번 확인해 볼 겁니다 왜냐면 챕터
01:09
2 해서 확인했을 때는 fc 를 손에 들고 센서 값을 확인해 본 거라
01:13
손떨림 a 1 노이즈가 그대로 센서 출력의 같이 나와서 값의 노예 제가
01:18
좀 있는 것처럼 보였을 텐데 이렇게 다 고정을 해 놓고 확인을 하면
01:22
손떨림 엔야 노이즈가 안 낄 테니깐 좀 더 깔끔한 데이터를 확인할 수
01:26
있겠죠
01:27
그리고 센서에 오프셋 같은 것도 더 확실하게 확인할 수 있을 겁니다
01:31
지금이 오른쪽에 출력하고 있는 그래프가 bn 5080 센서에 3 축 회전
01:36
각도를 출력하고 있는 상태구요
01:38
모든 값들은 곱하기 100 된 값입니다
01:41
파란색 빨간색 그래프가 롤 피치 0
01:44
초록색이 요 축의 회전 각도 입니다 먼저 유 축 회전 각도를 영도로 좀
01:49
해서 를 시키고 요
01:52
그리고 출력된 값들을 봤더니 지금 들어오는 이 평평한 책상 위에 올라가
01:57
있는 상태라서
01:58
물 피치의 값이 0이 나와야 되는데 약간의 오프 3조 묶여 있죠
02:02
특히 파란색 그래프는 지금 이 값이 곱하기 100대 있는 값이 니깐
02:07
1.8 또 정도의 오프셋이 껴 있는게 확인됐습니다
02:11
이 정도의 오프 셋은 센서에 오프 세질 수 있고 이 책상이 좀 기울었던
02:15
지 아니면 fc 고정할 때 좀 기울어져서 고정이 되어 있을 수도 있어서
02:19
이 정도의 oss 는 그리고 무시해도 될 정도의 옵 세제 요 네 제가
02:25
efc 말고 다른 몇 개 fc 를 더 확인해 봤는데 어떤 것은 오프셋이
02:31
7도 팔도 이렇게 깨어 있는게 확인이 된 적이 있었습니다
02:34
그 정도의 of 셋은 자세 제어 할 때 바로 영향을 미치는 수준이라서
02:38
제거를 해줘야 되요
02:40
그정도 프 3선 조정기를 중간에 가만히 놔둬도
02:43
들어오니 혼자 한쪽 방향으로 계속 클럭 않은 정도의 오프셋 입니다
02:48
그래서 제거를 해줘야 되는데 저번에 말씀드렸듯이 그냥 소프트웨어 적으로
02:52
그 값을 빼서 제거할 수도 있고 좀더 근본적으로 제거하려면 센서에
02:56
캘리브레이션을 해줘서 제거할 수도 있을 것 같은데 이건 제가 한번 확인을
03:00
해보고 캘리브레이션 으로 제거가 되면 나중에 파트에서 부가기능 챕터 때
03:07
설명드리도록 하겠습니다
03:09
그래서 우선 본인의 fc 의 오프셋이 얼마정도 되는지 를 나중에 이거 다
03:14
끝나고 한번 확인해보세요
03:16
지금 상태에서 울 피치에 값을 기울이면
03:19
우선 앞뒤로 기능 피치 젊 빨간 세계의 그래프가 편하구요
03:24
변하고 있죠 그리고 롤은 좌우 이렇게 기울이면 파란색의 그래프가 바랍니다
03:33
에 그래서 노이즈의 수준도 좀 더 확인하기가 슈아 이렇게 고정을 해 놓고
03:37
확인 하면
03:39
이번 시간엔 조립하고 답해 많은 내용이라서 도구 둘이 좀 필요할 겁니다
03:44
특히 육각 렌치 가 필요한데 사이즈의 종류가 두가지가 필요해요 근데 제가
03:48
정확한 그 사이즈 규격 을 몰라서
03:51
인터넷에서 육각 렌치 말고 볼렌치 라고 검색을 하시면
03:56
6종세트 9종세트 이런 걸 판매하고 있습니다
04:00
그래서 어그 포탈에서 이렇게 볼렌치 라고 검색하면 쇼핑 으로 들어오시면
04:06
이렇게 여러가지 종류들을 판매하고 있는데
04:09
가격대는 1 3천원에서 4천원 사인 까 괜찮은거 같고 너무 비싼건 살
04:14
필요는 없을것 같습니다 이렇게 만원 없는것도 있는데
04:17
5만원짜리 있네요
04:20
네 저는 요거 이 모델을 클릭해서 열어봤더니 회사이름 이렇게 공개되는 좀
04:25
조심스럽게 한데 어쨌든
04:28
옵션에서 육각 렌치 이렇게 판매하고 있어요
04:32
그리고 구성품을 좀 봤더니
04:36
이 1번 왼쪽 건데 별렌치 가 아니에요 볼렌치 입니다 볼렌치
04:41
볼 엔진은 우선 그냥 육각 이랑 다른게 그냥 육각 렌치 는 이쪽 면이랑
04:46
이쪽 면이랑 같은 모양으로 돼 있는데
04:48
볼렌치 는 이쪽은 그냥 육각 처럼 생겼고 반대쪽 이렇게 둥그렇게 좀 블록
04:53
튀어나 있는 형태입니다
04:55
그래서 이게 있으면 조립하기 가 조금 더 편해요
04:58
그래서 이런 볼렌치 를 하는 구입하시면 편을 거고
05:02
꼭 이걸 사셔야 된다는 거 아니에요 그런 편한 데서 구입하시면 됩니다
05:06
그렇게 몇 좀 세트 이렇게 있는게 좀 편할 거에요
05:10
잘못하면 규격이 안 맞을 수도 있으니까 꼭 이렇게 세트로 된걸 구매하시기
05:14
바랍니다
05:15
그리고 납땜을 할 거라서 인도 길항 나비 또 필요할 거고 그리고 이제
05:21
납땜을 할 때 선이 조금 두꺼워서 열을 올해가 해줘야 되는데
05:25
선을 손으로 잡고 있으면 선이 엄청 뜨거워서 화상을 입을 수도 있습니다
05:30
그래서 핀 색 같은게 있으면 이제 핀셋으로 잡고 어선을 손으로 안잡고
05:35
핀셋으로 잡음 되니까 좀 화상 입을 위험이 줄어 되겠죠
05:39
그래서 핀 3 또 하나 있으면 좋을 것 같습니다 그리고 선을 자르고 또
05:43
피복 또 벗겨야 되니까 이 디퍼 랑 와이어 스트리퍼 도 있어야 되겠죠
05:48
이건 첫 시간에 설명드렸던 구성품 들인데
05:51
오늘은 이 중에서 모터 랑 esc 를 나 빼면서 연결 할 거고 또 esc
05:55
랑 b 씨를 납 되면서 한계를 겁니다
05:58
그리고 이것들을 이 프레임의 고정도 할거구요
06:01
그래서 이번 시간에 사용할 것들은 esc 가 필요할 거고 모터도
06:05
필요하구요
06:06
또 fc 를 고정하기 위해서 2 안티 바이브레이션 마운트 이것도 필요할
06:10
거고 그리고 b 씨도 필요한데 지금 b 씨는 fc 랑 납땜 데서 연결이
06:15
되어 있는 상태죠
06:17
그리고 gps 는 제 수업에서는 사용하지는 않을 거라서 데이터를 받아
06:20
봤지만
06:22
웨이포인트 핑을 하지 않을 거라서 이거는 앞으로 연결 할 일은 없을 것
06:25
같구요
06:26
텔레 메트리 는 지금은 연결하지 않을 겁니다
06:29
그리고 프로펠러는 절대 연결 하지만 안되요 나중에 제어 들어갈 때
06:33
그때서야 연결 할 거라서
06:35
지금 연결하면 사고날 위험이 있습니다 절대 연결하지 마시고
06:39
그리고 또 이 아이의 6기 수신기 도 f 에 연결이 되어 있는 상태죠
06:45
먼저 q&a v1 0 프레임 키트 란 그리고 안티 바이브레이션 마운트를
06:49
준비해 주시고요
06:51
2 프레임 키트에 포장을 뜯으면
06:53
이런 것들이 들어 있을 겁니다 먼저 메인프레임 트론 에 본체가 된거고
06:58
그리고 이거는 위에 덮개로 사용된 프레임 이구요
07:01
그리고 또 이런 프레임 들이 있는데 이거는 fpv 카메라를 이 들어온 에
07:06
설치할 때 그걸 고정하는 용도로 사용되는 거라 저희는 사용하지 않을
07:10
겁니다
07:11
그리고 얄루 민 윰 재질로 된 마운트가 있는데 이 이벤트는
07:16
이 메인프레임 이랑 상판을 고정할 때 사용한 거고 그리고 9mm 짜리에
07:22
에 볼트 랑 7 일자리 볼트가 되어 있습니다
07:28
이번 저희 진동방지 마운트는 q&a 브 1 0 그 키트에 포함된 건
07:32
아니고 별도로 구매한 거죠
07:34
제 네이버 카페 부품 목록 정리 해서 올린 파일이 있는데 거기에 이
07:38
목록도 같이 들어 있습니다
07:40
그래서 이거를 사서 보시면 마운트 랑 고무 링이 같이 들어있구요 각각
07:45
4개씩 필요합니다
07:48
마운트는 나사 선이 있는 이 부분의 길이가 한 5mm 정도 되고
07:52
그리고 이 밑에 있는 부분의 길이가 7 밀리 정도 되는데 이 부분이
07:56
고무로 되어 있어요 그래서 충격 같은 걸 좀 완화 시켜주는 그런 작용을
08:00
하죠
08:01
그리고 이제 이 사진에서 안 보이지만 이 밑부분에 나사 선이 있어서
08:06
밑에서 볼트를 고정할 수 있게 되어 있습니다
08:08
그래서 이것들은 규격이 m3 이구요
08:11
어 이제 이걸 용도는 프레임의 fc 를 고정할 때 사용할 겁니다
08:16
그리고 이제 프레임 키트에 들어 있는 것들인데
08:19
그 플레인 마운트가 들어있는 포장을 뜯으면 이런 것들이 들어 있습니다
08:24
알루미늄 마운트가 김 게 6개 있고 짤 공개 내 개가 있는데 그중에서
08:28
있는 긴거 만 사용할 거구요
08:30
역시 사진에 안 나와있지만 2 위 아래 부분을 보시면 나사 홈이 나
08:34
있어서 볼트를 고정할 수 있게 되어 있습니다
08:37
그래서 이거는 프레임 본체 프레임 덮개를 고정할 때 쓸 거고 그리고
08:42
pcb 마운트 랑 또 너트가 4개씩 들어 있는데 이 중에 또 역시 저희는
08:47
이것만 사용 할 거고 이건 플라스틱 재질이 구요
08:50
fc 고정할 때 사용할 겁니다 나사 규격 은 다 m3 이에요
08:55
m3 이라고 하면 나사 지름이 3판 이라는 소립니다
09:01
그리고 볼트가 두 종류가 있는데 이 9mm 짜리가 15 개 있고 7 밀리
09:07
자리가 10개 가 있습니다
09:09
이거는 다 쓰진 않고 약간 몇 개가 남을꺼예요
09:12
역시 규격은 다 m3 이구요
09:15
그리고 이 각각 볼트 들의 머리 부분을 보시면 이 부분이죠
09:19
이 부분에 육각 홈 이나 있어서 이 볼트를 조일 때 6강 렌즈가 필요해요
09:24
볼렌치 가 있은 편안할 거고 그래서 이렇게 까지 가 쉐이브 210 키트에
09:29
들어있는 것들입니다 그리고 esc 가 4개가 필요하구요 esc 는
09:34
bales 라는 펌웨어가 올라가 있습니다
09:38
그래서 esc 를 구동할 때 원샷 125 라는 신호로 구동 할 거고 이건
09:43
다음 챕터 빽 챕터 6 모터 구동 때 자세히 설명드리도록 하겠습니다
09:49
bldc 모터 역시 4개가 필요하구요
09:52
이 모터를 보시면 유이의 캡 부분이 은색으로 된 게 있고 검은색으로 된
09:57
게 있는데 이 음색은 반 시계방향으로 회전시켜 야 되구요
10:02
검은색은 시계방향으로 회전 시켜야 됩니다
10:06
그래서 시계 반시계 방향이 각각 2개씩 필요하구요
10:10
그리고 또 이 모터 포장을 뜯어보면 각각 모터 마다 이 볼트가 4개씩
10:15
들어가 있을 거에요
10:16
이 볼트는 들어온 프레임의 모터를 고정할 때 사용 될 거고
10:21
규격은 이 길이가 6mm 고 2 또 머리부분이 6가 홈이 파져 있습니다
10:27
4 촘 전에 설명드렸던 2호 밀항 규격의 좀 달라요 그래서 아까 제가
10:32
세트로 된걸 구매 하시라 그랬죠
10:35
여기까지가 오늘 필요한 부품들에 대한 설명이고 이제 본격적으로 조립하는
10:39
방법에 대해서 설명드리겠습니다
10:42
기체 세팅은 이 순서대로 설명 드릴 거구요
10:45
마지막 10번 이랑 11번은 설명만 드리고 실제 조립은 안할겁니다
10:49
먼저 모터 랑이 sc 를 납땜 사용 결하고 프레임의 고정을 하고 또
10:54
esc 랑 b 씨도 납땜 에서 연결 하고 그리고 프레임 fc 를 고정을
10:59
하구요
11:00
이게 다 끝나면 fc 이런 신호선 들을 연결하는 순서로 설명 될 겁니다
11:06
이거는 제가 조립하는 순서대로 설명드린 것 꼭 이 순서대로 만 해야 되는
11:10
거 아니에요
11:12
먼저 모터의 선 길이가 좀 길어서 선을 조금 잘라 줘야 됩니다
11:17
이 모터의 몸통에서 부터 1 25mm 정도 되는 길이로 잘라 주시구요
11:22
그리고 이 끝부분에 피복을 하니 3mm 정도 벗겨줍니다
11:26
모든 4개 모터를 다 이렇게 해주세요
11:29
이제 선을 다 잘라 쓰면 메인 프레임에 모터를 고정 할 겁니다
11:33
모터 고정 하실때 모터 회전 방향의 주의해서 고정 하셔야 되요
11:38
검은새 캡이 시계방향으로 회전 해야되는 못하고
11:41
은새 캡이 반시계 방향으로 회전하는 못합니다
11:44
그래서 프레임을 이렇게 놓고 봤을 때 왼쪽 이랑 오른쪽 아래가 검은새 캣
11:50
근 시계 방향으로 도는 모터가 되는거고
11:54
오른쪽 이랑 왼쪽 아래가 은색 갭이 줘
11:57
그래서 이렇게 서로 마주보게 고정시키면 됩니다
12:00
그리고 드론의 방향은 이 위쪽이 앞 빵 양이 될 거고
12:05
밑에 쪽이 뒤로 가는 방향이 될 거예요
12:08
그리고 제가 또 임의로 모터 마다 이렇게 순서를 부여 해놨는데
12:12
여기서부터 모터 1 번이고 모터 2
12:15
모터 3 부터 4번 이에요 나중에 fc 에서 연결할때 이 순서대로 연결
12:20
할 겁니다
12:21
드론의 모터 고정 하실 때는 이 프레임 밑면의
12:25
그 모터 포장을 뜯으면 같이 들어있는 볼트 4개를 이런식으로 조여서
12:30
고정시켜 주시면 됩니다
12:32
그리고 쪼일 때 너무 빡 조이면
12:35
이 프레임이 눌리면서 콱 뚫고 들어가면서 고정이 되서 너무 힘으로 쎄게
12:40
조이진 마시구요
12:41
어느 정도 뻑뻑하다 는 느낌이 들 때까지 만 조여 주시면 됩니다
12:45
그래서 이 각각 내게 못하다 이렇게 볼트를 고정해주세요
12:50
이제 모터 랑이 sc 를 나 빼면서 연결한 차례인데
12:53
납땜 하실때 연결 순서에 주의해서 납땜 하셔야 됩니다
12:57
모터 회전 방향이 정해져 있는 게 아니고 이 선들을 어떤 순서로 연결
13:02
하느냐에 따라서 회전 방향이 결정되기 때문에 그래요 그래서 이 검은 색
13:06
캡의 모터는
13:07
선이 안고 이게 2선 순서대로 연결 하시면 되고
13:12
은색 캡은 선이 꼬이게 연결해야 됩니다
13:15
가운데서는 그냥 가운데 끼리 연결하시고
13:18
2위 아래에서는 교차 대게 이런 식으로 나 빼면서 연결 해 주셔야 되요
13:23
선 방향이 잘못되면 이 검은 색 모터가 시계방향 으로 돌아야 되는데
13:28
반시계 방향으로 돌기도 하고
13:30
2 음색 모터가 뭐 시계방향으로 돌기도 할 수 있습니다
13:34
그렇게 되면 안되는데 그렇다고 모터가 고장 나는 거 아니라서 나중에 이
13:39
회전 방향이 이상하다 잘못했다 싶으면 그때 다시 납 떼면서 방향을 바꿔
13:44
주셔도 되요
13:46
납땜 하시기 전에 납땜을 좀 편하게 하시려면
13:49
모터 2 피복 벗긴 부분에 납을 좀 미리 붙여 주시구요
13:53
여기 인두기 랑 나태 서영이 납을 좀 발라주면 말이죠 그리고 esca 답
13:58
때 많은 면에도 미래 납을 좀 무쳐 주시면 좋습니다
14:01
그리고 때 마실 때 열을 충분히 가해서 댐을 해주셔야 되고 그렇지 않으면
14:05
냉 납 현상이 발생할 수 있습니다
14:07
백납 현상은 납땜이 잘 된 것처럼 은 보이지만 실제로 잘 안 된 상태고
14:12
그걸 확인 하시려면 여기 모터 납땜 다 하신후에 모터 선을 잡고 좀
14:17
흔들어 보세요
14:18
조금 세게 흔들어 보시고 이게 냉 나비 된거 는 그 연결된 부분이 금방
14:23
툭 떨어질 겁니다
14:25
이렇게 때 마시면 위험 하구요 그렇기 때문에 한 채로 비행을 하면 이
14:29
모터 진동 같은거 에 의해서 맥락 된 부분이 금방 쪽 떨어질 거예요
14:33
그러면 모터가 이제 정지하고 들어온 추락하게 쬲
14:37
위험한 상황이 발생할 수 있으니까 이렇게 때 마시면 안되고
14:41
이런 현상이 안생기게 하려면 납땜 하실 때 열을 좀 충분히 골고루 가
14:45
해주시면 되요
14:47
그리고 납을 바르실 때 도 쪼끔만 묻히지 말고 이렇게 넉넉하게 골고루 펴
14:52
발라 주시는게 좋구요 제 사진에서 봐도
14:55
납을 엄청 지금 볼록하게 이렇게 넉넉하게 팔려는 상태죠
14:59
그리고 답장 하실 때 선이 뜨거워질 수 있으니깐 핀 색 같은 도구로 선을
15:03
잡고 있으면 좋습니다
15:05
이제 이게 모터 4개의 각각 esc 를 납 되면서 연결한 모습 이구요
15:10
좀 전에 말씀드린 것처럼 이 검은색 캡 에 붙어 붙어 1번 이랑 부터
15:15
3번은
15:16
이 선이 꼬이지 않게 순서대로 바로 연결 한거고
15:20
그리고 은색 모터 모터 이번 이랑 모터 4번 2장
15:24
이 모터는 가운데서는 바로 연결하고 다른 선들이 이렇게 교차 되도록
15:29
보이게 해서 납땜 에서 연결한 상태입니다
15:33
다시 한 번 말씀드리지만 이 선 순서에 주의해서 납땜 하셔야 되고 그리고
15:37
모터의 위치도 다시 한번 확인해 주세요
15:40
검은색 포터가 왼쪽이 오른쪽 밑 그리고 은색 모터가 오른쪽 위 왼쪽 밑에
15:46
있습니다
15:48
지금 이 사진이 좀 전에 있는 가운데 사진은 크게 다시 한번 이렇게
15:52
보여드린 거고 뭐 터라 esc 랑 다 연결이 돼 있으면 지금처럼 약간
15:57
지저분하게 연결이 돼 있는 상태가 돼 있을 겁니다
16:01
이제 프레임의 bc 를 보장할 건데
16:04
이때 필요한게 당연히 이 bc 가 있어야 될 거고 지금 b c 랑 fc
16:08
는 이런 식으로 납땜이 돼서 연결되어 있는 상태라 같이 따라 다니죠
16:13
그리고 진동방지 바우트 4개 랑 고무링 4개를 준비 하시구요
16:17
9mm 짜리 볼트 내게 랑 플라스틱 마운트 내게도 준비합니다
16:22
먼저 프레임의 가운데 부분에 보시면 이렇게 볼트를 끼울 수 있는 홈이
16:26
4개가 나 있습니다
16:29
거기에 9mm 짜리 볼트를 밑에서 위로 올라오도록 가깝고 자 주시고요
16:33
구멍이 조금 작아서 육각 렌치로 돌려서 깨야 될 수 있습니다
16:37
같은 다 끼쳤으며 니 그림처럼 볼트가 위로 이렇게 튀어나와 있을꺼예요
16:43
그리고 나서 그 위에 바로 bc 를 올립니다
16:46
중간에 먹기는 거 없이 바로 올리시면 되고 이때 bc 방향의 주의해서
16:50
올리셔야 되는데 이 사진처럼 배터리 커넥터 가 왼쪽으로 오도록 올리시면
16:55
됩니다
16:56
올리고 나면 아직 이렇게 볼트가 위로 살짝 튀어나와 있을텐데
17:00
또 그 예 이렇게 고무 링을 껴 줍니다
17:03
됐으면 그 위에 진동방지 마운트를 돌려 섞어주세요
17:08
역시 너무 힘으로 쎄게 돌리지 마시고 어느정도 뻑뻑해 졌다 싶을 때
17:12
까지만 돌려주면 됩니다
17:14
그래 다 됐으면 이렇게 b 씨가 프레임에 고정 이 됐을 겁니다
17:19
이제 이 b 씨는 이 상태로 고정이 될 거구요
17:22
여기 asc 의 전원을 납땜 해서 연결을 해줘야 되는데 esc 선이 또
17:27
좀 길어요
17:28
그냥 길게 쓰고 싶으신 분들은 그 기로 바론 앞 떼면서 연결 해 주시면
17:32
되고 그래서 저는 선을 길이에 맞게 다 잘라서 사용 할 거고
17:36
esc 있는 선을 잘 하실 때 아까 모터 선 자를 때 처럼 딱 정해진
17:40
길이대로 짜르면 안될겁니다
17:42
그래서 자를때 어떻게 하냐면 입이 씨랑 esc 랑 납땜 되는 부분에 선을
17:48
대 보시고 그 길이에 맞게 잘라 주시는 게 좋습니다
17:52
그때 플러스 마이너스 방향의 주의해서 성기를 제 절 되구요
17:57
빨간색 써니 플러스 구요 검은색 써니 - 에 납땜 될겁니다
18:03
그리고 이 선은 너무 타이트하게 자르면 잘못하면 선이 너무 짧아서 납땜을
18:08
못하게 될 수 있으니까 이렇게 돼 보신 후에 그 길이 보다 한 1cm
18:12
정도의 여유를 두고 잘해주는 걸 추천드립니다
18:17
이제 선을 자르자 쓰면 또 b 씨의 납땜을 해주셔야 될 텐데 역시 피복을
18:22
벗기고 그 부분에 납을 미리 좀 붙여주세요
18:25
납을 안 묻히고 때문에 하면 지금처럼 선이 막 갈라질 텐데 이게 잘못하면
18:30
갈라진 선행 두 가닥이 옆부분에 낙태한 부분에 닿을 수도 있습니다
18:36
4
18:38
납땜 되는 부분을 보시면 2+ 의 옆부분이 면 - 줘 로 - 요 부분이
18:44
면 플러스 줘
18:45
그래서 이게 옆 부분에 닿는 단말은 배터리가 그냥 쇼트 난단 소리에요
18:50
배터리의 플러스 마이너스가 그냥 붙어 버릴 수 있단 소립니다
18:53
땜 조금 잘못한거 에 의해서 그러면 스파크가 막 튀면서 잠깐 배터리가
18:58
터질 수 있다는 거죠 그래서 납땜 하기 전에 이렇게 피복 바뀌니 부분에
19:05
납을 이렇게 미리 좀 무쳐 주시면 갈라지는 현상을 좀 방지할 수 있습니다
19:10
그래서 모든 esc 선에 이렇게 피복 바뀐 부분에
19:13
납을 좀 미리 다 발라 주시구요 그리고 역시 bbcn 앞 테마는 면에도
19:18
미리 납을 이렇게 좀 충분히 골고루 펴 발라주시면 납땜 연애가 편하구요
19:23
이렇게 답을 받으셨으면 이제 실제로 esc 서 능력이 납땜을 해주시면
19:27
되는데 빨간색 써는 플러스 부분에 납땜을 해주시면 되구요
19:32
검은색 쏘는 - 부분에 납땜 해주시면 됩니다
19:35
특히 - 부분 이 부분이 그라운드 인데 특히 그라운드에 납땜 하실때 냉
19:40
나 편 상을 주의하셔야 되요 이게 그라운드 패턴 이라서
19:44
2 - 부분이 보두 전체의 쫙 퍼져 있는 형태라
19:49
열을 보두 전체에 다 발산을 시켜 버려서 열이 잘 안올라 옵니다
19:53
그래서 때문에 직접 해보면 아시겠지만
19:56
이상하게 다른 부분 때 말 땐 약간 플러스 랑 뭐 esc 랑 모터
20:00
연결하는 이런 부분 때 말 때는 앙 그랬던게
20:03
2 - 부분 때 말 때만 나비 금방 굳어 버리고
20:07
인도 기가 막 나베 들러 붙고 그런 현상이 생길 거에요 그래서 2 -
20:13
부분에 검은 선 때 말 때는 열을 더 많이 가 해 주셔야 되구요
20:18
맥락 현상이 실제로 이 부분에서 자주 발생합니다
20:21
주의해서 댐을 하시고 댐을 다 하셨으면 냉 날인지 아닌지 또 이 때만
20:26
선을 잡고 한번 흔들어 보세요
20:28
냉 날이면 또 금방 뚝 떨어질 겁니다 다시 댐을 하셔야 되고 그리고
20:33
때마다 끝났으면 또 선 몇 가닥 임학역 부분에 다 있는게 없는지 그것도
20:38
한번 확인해보시구요
20:40
그리고 이 부분은 뗌 하실때 보드 전체가 다 뜨거워 질 거에요 그래서
20:44
화상의 반드시 주의 하시면서 땜 하셔야 될겁니다
20:48
땜 할 때 선이 뜨거워 지니까 이런식으로 핀셋으로 선을 잡고 댐을 하시면
20:53
화상의 위험이 줄어들 거구요
20:55
2 플러스 - 방향 잘못 연결 하시면 bc 나 esc 가 고정 할 수
20:59
있습니다
21:00
방향 주의해서 납땜 하셔야 되고 그리고 이 고무 마운트 가 바로 옆에
21:06
있다 보니깐 잘못하면 인도계 닿을 수 있는데 역시 안 닿게 조심해서 납땜
21:10
해주세요
21:12
그래서 이렇게 해서 bc 랑이 s 씨도 연결이 끝났구요
21:16
이렇게 가 납땜 할건 끝입니다 납땜 하시느라 고생하셨고 성 길이도 길이에
21:21
맞게 당한 짤라 냈더니 좀 깔끔해 졌죠
21:25
이제 이 진동방지 마운트 위에 fc 를 올려서 고정을 차례입니다
21:30
fc 는 이 방향으로 이렇게 올려주시면 되구요
21:33
올리고 나면 2대 모서리에 볼트가 약간 위로 튀어나와 있을까요
21:38
그 위에 이 플라스틱 pcb 마운트 를 돌려서 고정해줍니다
21:43
이때는 좀 빡빡해서 잘 안 들어갈 때까지 돌려서 고정시켜주세요
21:48
이게 fc 까지 고정이 다 완료된 모습입니다
21:51
이게 u 에서 본 모습이고 이게 정면에서 본 모습이죠
21:55
지금까지 제가 설명 되는걸 잘 달 하셨으면 이런 모습이 되어 있을거예요
22:01
이제 중요한 건 거의 끝났구요 지금 상태에서 여기 배터리를 꽂으면 fc
22:05
에 도전 원이 들어가고 모터 까지 다 전원이 들어가게 되는 거죠
22:10
이제 그 다음에 프레임 n 알루미늄 마운트를 고정합니다
22:14
2 35 mm 짜리 김 거 6개 랑 그리고
22:18
볼트 9 mm 짜리 6개를 각각 이 6개의 홈에 4 조여서 고정을 시켜
22:25
주시고요
22:26
다 되면 이제 이런 모습이 되겠죠 역시 위에서 본 모습이고 정면에서 본
22:30
모습입니다
22:32
이 jsc 3핀 커넥터를 이 pwm 출력 커넥터 에 꽂아 주시면 되는데
22:37
우선 pwm 출력 커넥터 는
22:40
6 채널이 나와있구요 세로로 3개의 핀이 각각 하나의 채널입니다
22:46
저희는 그 중에 왼쪽에 4개 채널을 쓸 거고
22:49
오른쪽 두 개의 채널이 남 젊 이 남는 채널에는 서버 같은 것도 살 수
22:53
있구요 아니면 모터 6개 짜리 헥사 로터 도 개발을 할 수 있겠죠
22:59
esc 에 3핀 커넥터를 보시면 이렇게 놓고 봤을 때 왼쪽 검은 선이
23:04
그라운드 구요
23:05
오른쪽 흰 선이 pwm 입력 입니다 가운데 선 비어 있어요
23:09
그래서 이 커넥터를 fc 에 꽂아 주시면 되는데
23:13
검은색 써니 그라운드에 고도로 꺼주시고
23:16
그리고 흰색 써니 2 pwm 출력 에 오도로 꽂아 주시면 됩니다
23:20
또 코즈 실 때 모터 순서에 주의하셔야 되고
23:23
왼쪽부터 모터 1 모터 2 모터 3 모터 살아 순서로 꺼주시면 됩니다
23:28
그리고 들어온 이렇게 놓고 봤을 때 모터 1위
23:31
이외 왼쪽 위 이구요 모터 2 모터 3 모터 4 센서 져
23:36
그 순서대로 여기 이렇게 꽂아 주시면 된다는 소립니다
23:39
그리고 fc 에는 이 가운데 핀이 5 볼트 라고 되어있는데 이건 지금
23:43
현재 상태에서 높은데 있는 상태구요
23:46
근데 제 2의 11 이라고 되어 있는 이 부분 이 패드 로 되어 있는 이
23:50
부분을
23:51
납땜 해서 연결을 해주시면 여기에 o 볼트가 출력됩니다
23:57
실제 모습으로 봤을 때는 이 부분이 점 이 두 부분을 납땜을 해서 연결을
24:01
해주시면
24:02
가운데 있는 입히니 5 볼트 가 출력이 되요
24:06
만약에 서보모터 같은것을 다실 때 5 볼트 전원이 필요할 수도 있을텐데
24:10
그러려면 이 부분 납땜 해서 사용하시면 됩니다
24:13
근데 별로 추천드리지 않아요 가급적이면 제 수업에서 사용하는 장치 들만
24:17
연결 하시기 바랍니다
24:20
굉장 이렇게 해서 esc 선 들도 다 연결해 봤습니다
24:24
이 사진은 선 정리도 좀 한 모습이에요 esc 3핀 그 선동 길이가 좀
24:29
길어서 그거는 짤라서 쓰려면 좀 복잡해져서
24:33
저는 이 마운트 이렇게 감아서 연결했습니다
24:36
그래서 선 정리를 좀 한 모습이고
24:41
근데 됐으면
24:42
fn 싸이의 6 삐 수신기를 연기에 연결을 해 주시구요
24:46
gps 는 연결 하진 않을 거고 그리고 개발하면서 데이터를 확인 해야
24:51
되니깐 디버그 u 아트 여기 연결 해 주시고 그리고 3d r 텔레 매트
24:56
리모 둘은 여기에 연결 할 건데 지금은 연결하지 않고 파트 투 에서
25:00
데이터 손수진 할 때 연결하도록 하겠습니다
25:04
그리고 코드 다운로드 해야 되니깐 st 링크 선도 여기에 연결 해야겠죠
25:10
그리고 저는 케이블타이로 esc 랑 프레임을 이렇게 고정을 해 놓았구요
25:15
그리고 수신기 도 고정을 해 놨습니다 저는 비행 테스트를 좀 해야 되니까
25:19
이렇게 고정을 해 놨는데
25:21
여러분들은 아직 수신기는 고정을 할 필요가 없을 것 같아요
25:24
나중에 텔레 매트 리모 둘이랑 같이 고정을 겁니다
25:27
그때 들어오네 뒷부분에 이 부분 양면테이프 한 케이블 타이로 고정 을 할
25:32
거구요
25:33
앞부분은 이렇게 비어 놨습니다 왜냐하면 혹시나 나중에 fpv 카메라를
25:39
달아야 할 수도 있을 텐데 그때 카메라를 앞에 나라야 되죠 그래서 앞에
25:44
달려고 이 부분은 비어 놨습니다
25:48
이제 조림이 다 끝났구요 끝났으면 뚜껑을 닫아야 겠죠
25:51
뚜껑은 이 모습으로 이렇게 이 방향대로 달면 되구요 근데 아직 우린
25:55
개발하게 많이 남아있어서 뚜껑을 닫으면 또 계속해 울어야 돼서 지금은
25:59
닷지 마시구요 그냥 안 잃어버리게 잘 보관해 두세요 그리고 2위 프레임을
26:05
고정하지 라면 이 여섯 개 나사를 또 연결 해주셔야 되는데
26:09
나사 남아있는 거 아무거나 끼시면 됩니다 어차피 다 m3 같은 가격이랑
26:13
아무거나 깨져도 다 맞아요 그래서 이게 위에서 본 모습이고
26:17
이게 밑에서 본 모습입니다 조림이 다 끝난 모습이죠
26:23
이제 이렇게 하고 다 끝났으면 프로펠러 달고 위에 배터리 올리시면 되는데
26:27
지금 당연히 프로펠러 다시면 안되고
26:29
프로펠러 달 때는 프로펠러 방향이 있어서 그 방향의 유의해서 달아야 되고
26:34
그것은 프로펠러 달 때 되서 다시 설명을 드릴 겁니다
26:37
그래서 지금 절대 이 프로펠러 달고 전원 넣지 마시구요
26:41
그래서 이제 설치는 이렇게 끝났습니다 이제 소스 코드를 한번 넣어보고
26:45
센서가 가스 한번 확인해 보도록 하겠습니다

```

### Ch6 BLDC motor
#### video 20
- ESC protocol PWM One/multi-shot Dshot Proshot

{% include youtubePlayer.html id=page.youtubeID20 %}

```diff
00:10
안녕하세요 m5 크리스피 입니다 지난 시간에 2 챕터 5에서 q&a 브
00:15
1 0 들어온 기체를 세팅하는 방법에 대해서 설명 졌구요
00:18
그때 뭐 터라 esc 그리고 fc 를 납땜 하고 기체 설치까지 다 완료
00:23
했습니다
00:24
그래서 이제 드론의 모습이 갖춰져 있고 지금 상태에서 전원을 넣으면
00:28
esc 랑 모터 까지 다 전원이 들어가는 상태가 된거죠
00:32
그래서 예전 보다 배터리가 좀 더 빨리 소모될 겁니다
00:35
모터 까지 구동을 하면 더 빨리 다 알겠죠 3 3 리튬 폴리머 배터리
00:39
기준으로 10 볼트 미만으로 떨어지면 배터리 뭐 쓰게 될 수 있으니까
00:43
배터리 전압 확인 을 자주 해주시고 충전도 1 10 볼트 쯤 되면
00:48
해주세요
00:50
이번 시간부터 챕터 6의 시작 이구요
00:53
어 파트 원 fc 의 기초에 마지막 챕터 정
00:57
그래서 이번 챕터 까지 끝나면 비행 제어 시스템의 기초를 다 다른 겁니다
01:03
이번 챕터에서는 모터를 구동하기 위한 esc 프로토콜 들에 대해서
01:06
간단하게 설명을 드리고 그 중에 저희가 사용할 원샷 125 pwm 신호를
01:11
생성하고
01:12
마지막으로 esc 캘리브레이션 까지 해서 실제 모터를 구동시켜 보도록
01:17
하겠습니다
01:19
이번시간은 챕터 6 에 첫 번째 시간 이구요
01:22
모터를 구동 시키기 위해서 esc 에 어떤 진호를 전달해 줘야 되는지 그
01:26
신호의 종류 들에 대해서 설명드리도록 하겠습니다
01:29
그래서 이번 시간은 설명 만들 거고 소스 코드 작업은 없습니다
01:33
그리고 오늘 설명이 조금 이해하기 어려울 수 있는데
01:37
근데 이런게 있구나 하고 가볍게 들으시면 되요
01:39
나중에 저희가 사용할 프로토콜의 대해서만 잘 이해하시면 됩니다
01:44
이건 예전에 한번 설명 지어 썻던 그림 점
01:47
자세 제어를 위해서 데이터가 어떤 식으로 올라가는지 를 간단하게 블럭으로
01:51
나타낸 그림입니다
01:53
우선 pid 제어는 현재 상태는 목표 값에 차이를 조금씩 좁혀 가면서
01:57
목표 의 수렴하는 제어 방식 입니다
02:00
그래서 pad 제어를 하려면 입력과 출력이 정의가 되어 있어야 되는데 꼭
02:04
pid 제어 뿐만이 아니고 다른 어떤 제와 방식이든 입력 출력의 저희가
02:08
돼 있어야 되요
02:10
그래서 저희 시스템에서는 필요한 입력은 현재의 각도 그리고 각 속도가
02:15
있을거구요
02:17
이것들이 현재의 상태가 되는 거고 목표 값은
02:20
목표로 하는 드론의 자세 각도 가 될 겁니다
02:24
그래서 각각 bn 5080 센서로 현재 각도 ic 미국 및 공의로 현재
02:30
각 속도를 측정 했구요
02:31
그리고 이 fsi 에 6기 아이 버스 데이터를 받았는데 그게 제어의 목표
02:37
각도 로 변환이 돼서 들어가게 될겁니다
02:39
그래서 이렇게 가 이제 수송 으로 조정할 때 제어 입력으로 들어가게 될
02:44
거구요
02:45
이제 출력은 여기서 받아온 목표 각도의 수렴 하도록 들어오네 자세를 제어
02:50
해야 되니까
02:51
쿼드 로터 의 경우는 모터의 속도를 이용해서 자세를 조절 하니까 최종
02:56
출력은
02:57
인해 모터의 회전 속도가 될겁니다
03:00
그래서 2대 모터의 속도를 각각 개별적으로 조절할 수 있으면 롤 빛이요
03:05
그리고 고도를 제어할 수 있게 되는 거죠 그래서 입력으로 들어가는 것들은
03:10
챕터 2 3 4 때 다 했었어요 근데 기압계 랑 gps 는 제외 에서는
03:15
안 쓰 정
03:16
수신기에서 받아온 값을 나중에 실제 제어할 때 목표 각도 로 변환 될
03:20
겁니다
03:21
그래서 입력은 이렇게 끝났고 이 입력 뜰을 이용해서 pid 제어
03:26
알고리즘을 통해 계산된 결과를 출력단에 전달해 주면 되구요
03:30
그 출력의 모터로 들어가게 될 테니깐 먼저 모터를 구동 해야겠죠
03:35
그래서 이번 챕터에서 하는 것까지 끝나면 사실 바로 제어 알고리즘을
03:39
들어갈 수 있어요
03:40
저는 제어의 들어가기 전에 파트 투 에서 부가적으로 필요한 몇 가지
03:45
기능들
03:46
완전에 대한 기능들 같은 거를 설명을 더 드리는 거죠
03:51
예 fc 는 모터를 구동 시키기 위한 신호를 생성하고 그걸 esc 로
03:55
보내 줘야 됩니다
03:57
수업에서 사용하는 이 fc 는 총 6개 pwm 출력 이고
04:01
저희는 쿼드로 털 할꺼니까 모터를 내게만 쓰니깐 이 중에 네 개만 사용할
04:06
겁니다
04:07
이 pwm 신호를 또 모터로 바로 전달하는 게 아니고 중간에 esc 를
04:12
거쳐서 모터를 구동 하게 되죠 그래서 실제 모터를 구동하는 주체는 fc
04:17
가 아닌 esc 가 되는 거고 또 이 애쓰시는 자기가 혼자 못할 구동
04:22
시킨 게 아니고
04:23
외부에서 입력받은 시너를 이용해서 모터를 구동 하지요
04:27
그래서 fc 에서 esc 로 보내주는 그 신호가 중요한데
04:31
신호의 종류들이 원샷 멀티샷 dz 프로작 같은 것들이 있는 겁니다
04:37
그리고 esc 가 모터를 구동할 때는
04:40
삼상 아날로그 신호로 구동합니다
04:43
그래서 지난 챕터에서 esc 랑 모터 연결할 때 선 세계를 납땜 생각을
04:48
했죠 그래서 esc 가는 일은
04:51
fc 에서 pwm 같은 신호를 보내주면 그걸 입력받아서 실제 모터를
04:56
구동하는 삼상 아날로그 신호로 변환하는 역할을 하는 겁니다
05:01
bldc 같은 모터는 이 3003 볼트 pwm 신호로 바로 구성된 게
05:05
아니에요
05:06
그래서 대부분의 esc 는 입력받은 신호를 실제 모터 구동 않은 신호로
05:11
변환해 주기 위한 마이크로 컨트롤러가 내장되어 있습니다
05:15
그리고 당연히 전류 증폭회로 같은 것도 들어 있겠죠
05:17
또 마이크로 컨트롤러가 들어 있으면 그 안에 펌웨어가 들어가 있을 텐데
05:22
그 펌웨어가 흔히 사용되는 게 bl 이란 펌웨어가 있고 싸이 멍 k
05:28
키스라는 펌웨어 종류도 있습니다
05:30
이게 펌웨어의 이름 이라고 보시면 되요
05:33
언제 저희가 쓰는 esc 에는 bl 이 s 라는 펌웨어가 올라가 있는데
05:37
이게 또 버전이 몇 가지로 나뉘는 것 같습니다
05:41
그냥 비해 갤리 도 있고 bales bl 이 32 이런 버전도 있는 것
05:46
같습니다
05:47
여튼 이 펌웨어 종류에 따라서 입력받을 수 있는 이 신호에 종료 들이
05:52
달라진 것 같고 그 신호의 종료 들을 이 해서 c 프로토콜 이라고 하구요
05:58
이건 펌웨어 마다 다르기 때문에 사용하는 esc 가 무슨 펌웨어가 올라가
06:02
있고 어떤 예수 c 프로토콜을 지원하는 지를 꼭 확인해 봐야 됩니다
06:06
그리고 제가 어디서 본건데 242 멍 k 펌웨어는 현재는 버전 업데이트가
06:11
사람 되서 잘 사용되지는 않는 것 같고
06:14
br 헨리는 꾸준히 업데이트가 되서 어 지금 현재 가장 많이 쓰이는 퍼맨
06:19
것 같고 키스는 약간 고가의 esc 에서 사용되는 펌웨어 인 것 같습니다
06:25
그래서 정리를 좀 하자면 이 모터를 구동 하려면
06:29
f 스 에서는 esc 가 받아들일 수 있는 신호를 보내 줘야 되는데
06:33
esc 마다 펌웨어가 달라서 받아들이는 신호의 종류가 다르기 때문에
06:39
esc 가 받아들일 수 있는 프로토콜의 종류 를 꼭 확인해 보셔야 된다는
06:43
거죠
06:45
저희가 사용을 위해 애쓰시는 fet 리틀 비 30a 다시 s 라는 이름이
06:50
고 먼저 외관을 좀 보시면 페이버 리 상 esc 에 제조사의 이름인 것
06:56
같고
06:57
bales 펌웨어가 들어가 있다고 표시가 되어 있죠 이걸 리틀 비 는 이
07:02
제품의 모델명 인것 같습니다
07:04
30a 는 3:30 페어로 이미 하구요
07:07
어 esc 는 리튬폴리머 배터리 2 셀에서 6세까지 전원을 입력 받구요
07:13
저희는 3셀 배터리를 사용합니다
07:15
배터리 셀 수가 높아지면 모터의 출력 또 같이 높아 되는데 그래서 보통
07:19
레이싱 들어오는 4 세리나 5 셀 배터리 정도를 사용하는 것 같아요
07:23
그리고 대형 기체는 6세 이상 을 쓰는 것 같습니다
07:27
그리고 출력 전류는 3g 방패를 보장한다 고 되어 있는데 이게 스펙이
07:31
약간 좀 높여서 이렇게 표기를 해 놓는 것 같아요
07:35
어쨌든 이렇게 써져 있고 mcu 는 쌓인 렉사 의 이런 모델의
07:40
마이크로 컨트롤러가 들어가 있고 48 메가 헤르츠 로 동작한다고 합니다
07:45
펌웨어는 bales 가져가 있고 그리고 중요한 esc 프로토콜이 원
07:50
425 원작 42
07:53
멀티 산 프로토콜을 지원한다 고 되어 있습니다
07:56
그리고 그 중에 저희는 원 420 모를 쓸 거구요
07:59
원 차신 데도 이름이 또 원자 - 15 42 이런식으로 나눠져 있죠
08:03
여튼 그거에 대한 자세한 설명은 조금 있다 드릴 거고 그리고 이 안에 그
08:09
펌웨어를 업데이트할 수 있게 부트로더가 올라가 있는 것 같습니다
08:12
저는 펌웨어 업데이트를 해 보진 않았어요 인턴을 찾아보니까 펌웨어
08:16
업데이트를 하는 그런 영상들도 있더라구요
08:19
그럼 궁금하신 분들은 타는 좀 찾아 보시기 바랍니다
08:23
이 jsc 프로토콜이 뭔지에 대해서 좀 설명드리겠습니다
08:27
esc 프로토콜이 란 esc 가 모터를 제어 하기 위해서 입력으로 받아
08:32
들이는 신호의 종류라고 보시면 되구요
08:35
예전에 설명 들었었던 nama 프로토콜 유비 x 프로토콜 그리고 아이
08:39
퍼스 프로토콜 이런 것들을 설명 들었었는데
08:42
이런 것들 보다는 아주 단순합니다
08:45
esc 프로토콜은 크게 pwm 방식 디지털 방식으로 난 이구요
08:49
pwm 방식이 주로 사용되는 방식이고
08:53
디지털 방식은 아직은 흔하게 사용되는 방식은 아닌 것 같습니다
08:58
우선 pwm 방식은 예전부터 사용 됐었던 방송이고 스탠다드 pwm 이
09:02
예전 방식의 500 헤르츠 1b 타우린 방식이고
09:06
원 삭 멀티 자 또 pwm 방식의 하나입니다
09:09
그리고 d 샷 프로 자시 디지털 방식의 속하고 요 그래서 esc 가
09:14
이중에 어떤 프로토콜을 지원 하는지에 따라서
09:17
fc 에서는 그 프로토콜의 맞는 신호를 생성하고 esc 로 보내져 이겠죠
09:22
저희가 사용할 es 시간 원작 그리고 멀티샷 를 지원한다고 되어 있는데
09:28
당 pwm 신호 중에 하나입니다
09:31
우선 pwm 방식은 고정된 주기 안에서 하이 와 ro 의 비율 즉 펄 3
09:38
폭을 조절하면서 모터 속도를 제어하는 방식입니다
09:41
pwm 은 펄 3주기 랑 폭으로 정해 할 수 있구요
09:45
이 펄스 폭을 가 변하면서 모터의 회전 속도를 조절하는 데
09:49
모터의 최소 랑 최대 회전 속도가 정해져 있는게 아니고 그걸 esc 마다
09:54
캘리브레이션 해서 사용해야 됩니다
09:57
한마디로 이 정도 8 스포 길 때 모터를 최소 출력으로 해 랄까 멈춰라
10:02
라고 설정을 하고
10:04
이정도 8 스포 길 때 최대의 속도로 회전 해라 라는 것을 설정 하는
10:09
거라고 생각하시면 되요
10:11
그래서 이 설정한 폭 싸이에서 8 스포 글 조절하면 오타 속도가 그 펄스
10:17
폭에 비례하게 단 합니다
10:19
이 캘리브레이션 해준 그 최소 펄스 폭보다 작아지거나 아니면 최대 펄스
10:24
폭보다 커지게 펄스를 넣어주면 모터와 동작 안할 수도 있습니다
10:29
그래서 캘리브레이션 해준 이범희 안에서만 펄스 폭을 조절 해야 되요 근데
10:35
pwm 방식 또 아까 스탠다드 bwm 원샷 멀티샷 이런게 있다고
10:39
말씀드렸는데
10:41
그거에 따라서 이 펄스에 주기 랑 펄스에 최대의 최소 포기 다 달라요
10:47
그래서 해당하는 프로토콜에 맞게 펄스에 주기 랑 펄스 폭을 조절해 줘야
10:51
됩니다
10:53
그리고 그 최소 랑 최대 펄스 폭 의 간격을 이 사이의 간격을 몇 단계로
10:57
쪼개 건지 가 중요한데
10:59
저희는 만 단계의 정도로 쪼갤 거구요
11:02
esc 가 인식할 수 있는 단계가 정해져 있는 거 같은데 그건 찾아봐도
11:05
나오지 않더라구요
11:07
네 어서 본건데 최소 2천 단계 이상 정도면 된다고 본 것 같습니다
11:12
저희는 만 단계로 하니까 넉넉하지 점 이 pwm 방식의 신호들을 좀 표로
11:17
정리해봤습니다
11:18
우선 스탠다드 pwm 같은 경우는 예전 방식의 pwm 이고 보통 5배
11:23
캣츠의 주기를 갖고 그 안에서 펄스 폭을 가변 합니다
11:27
원 425 방식은
11:29
이 듀티 사이클을 수치들을 보시면 스탠다드 pwm 보다
11:33
주기가 8배 정도 빠르구요 원샷 42 는 또 원 425 당 주기가 3배
11:40
정도 빠르고
11:41
멀 티 샷을 또 원 차 42 보담
11:44
3.4 배 정도 더 빠릅니다 그래서 밑으로 내려 갈수록 주기가 더
11:49
빨라지자 밑으로 내려 갈수록 더 최근에 나온 방식이구요
11:52
pwm 주기가 빨라 진다고 모터 회전 속도가 빨라진 게 아니고
11:57
모터에 회전속도를 갱신하는 주기가 빨라 진단 소립니다
12:01
더 고속으로 자세 제어를 하기 위해서 이렇게 계속 더 빠른 중에 프로토콜
12:06
들이 나온 거예요
12:08
이게 무슨 말이냐면 예를 들어 스탠다드 pwm 500회 르트 pwm 으로
12:12
모터를 구동 한다고 했을 때
12:14
제어를 2킬로 내려 지로 한다면 이 한 pwm 주기 안에
12:19
제어가 4번 반복되게 될겁니다
12:22
근데 모터에 속도는 pwm 의 1주기 새로운 주기 때마다 굉장히 되니깐
12:28
결국 제어를 아무리 빨리 해봤자 500회 루즈 로 제어는 효과가 되는
12:32
거죠
12:33
근데 이 제어 알고리즘 죽인 똑같이 킬로 헤르츠 로 하고
12:38
esc 프로토콜을 원 차 125 4킬로 헤르츠 의 pwm 으로 바꾸면
12:42
제어 알고리즘 2 수행 되자 마상 바로 모터 속도를 갱신 할 수 있게
12:47
되는 겁니다
12:48
그래서 제어 알고리즘의 반복 주기 보단 pwm 신호의 주기를 더 빨리
12:53
해줘야 효과가 있다는 거예요
12:56
그리고 피터 불린 방식 안에서 이렇게 여러 가지 프로토콜이 있는데
12:59
차이점은 단순하게 pwm 의 주기 랑 퐁 만 다른 겁니다
13:04
그래서 크게 다른건 없구요 그걸 좀 쉽게 국은 하려고 이렇게 각각의
13:08
이름을 붙인 것 같습니다
13:10
자세한 설명은 밑에 있는 이 웹 사이트에 가보시면 설명이 잘 되어 있어요
13:13
영어로 되있어서 이야기가 조금 어려울 수 있는데 한번 가서 보시길
13:17
추천드립니다
13:19
그리고 저는 좀 여러 웹 사이트를 들어가서 자료를 찾아봤는데
13:23
여기 주 t 사이트에 있는 이 수치들이 펄스에 폭 인지 펄 3주기 인지에
13:28
대해서는 정확한 설명을 못찾았습니다
13:31
이중에 저희가 사용할 건 원샷 125 프로토콜인 데
13:35
그래서 다음 시간 실제 pwm 신호를 만들건데
13:38
2킬로 헤르츠 의 주기 랑 펄스 폭을 최소 125 최대 250 마이크로
13:43
색으로 만들겁니다
13:44
근데 이게 만약에 줄이 라면 2킬로 헤르츠 의 pwm 은 이 범위 안에
13:49
안 들어오죠
13:51
근데 그렇게도 잘 인식이 되고 모터도 잘 동작합니다
13:54
그래서 제생각엔 칼같이 주기 랑 펄스 폭을 맞춰야 되는 건 아닌 것
13:59
같아요
14:00
예를 들어 사케 인데 4.1 kl 즈의 포터블 만들면 인식이 안되는 게
14:05
아니란 소리 에요 그래서 pwm 방식이면 어떤 주기 랑 어떤 펄스 폭을
14:09
갖던 g
14:10
적어도 500회 듣질 보다 빠르고
14:13
이사 10킬로 헤르츠 일보다 느리면 인식이 되는 것 같아요
14:17
어쨌든 저희는 2킬로 헤르츠 pwm 을 만들 겁니다
14:22
그리고 디지털 방식은 또 종류가 크게 두 가지가 있는데
14:26
d 샷이 랑 프로 샷 쓰이구요 그중에 d4 방식은 그 안에서도 d4
14:31
150 300 600 1200 같이 이렇게 버전이 여러가지가 있습니다
14:36
그리고 디지털 방식이 니까 16비트 데이터 로 구성이 되어 있고 그중에
14:41
11 비트가 모터 회전 속도에 대한 정보 9
14:44
1 비트가 텔레 메들리 퀘스트 4 비트가 cr 지정 보라고 하네요
14:48
pwm 방식은 펄스에 최소 최대 폭을 캘리브레이션을 해줘야 모터 속도 가
14:55
그 캘리브레이션 해준 펄스 폭에 따라서 바뀌는데
14:59
d 샷은 캘리브레이션 이 필요가 없습니다
15:02
그냥 디지털 값으로 0이면 모터가 정지 9
15:06
그리고 11b 테니깐 최대 2047 이 줘
15:09
디지털 값으로 2004 17일 때는 모터가 최대 속도로 회전 해요
15:13
이 자세한 설명 역시 이 웹 사이트에 들어가시면 다 확인할 수 있습니다
15:18
꼭 들어가서 확인 해보시기 바래요
15:21
그리고 마지막으로 2% 샷은 d 4시 랑 비교했을때
15:25
b 샷을 이 16개의 펄스가 각각 1비트 시계 정보를 담고 있는데 그걸
15:30
4개의 벌수 로 줄인 겁니다
15:32
그래서 이 각각의 펄스 들이 4비트 시계 정보를 담고 있고요
15:37
그래서 4 bit 씩 4개 발생 에서 총 16bit 의 정보가 되는 거죠
15:42
역시 2% 샷의 에 대한 자세한 정보는 이 웹 사이트 들어가서 보시면
15:46
프로 샷이 랑 d 샷을 비교한 동영상이 있어요 펄스를 오실로 스코프로
15:51
출력을 하면 4 비교한 동영상이 있어서 그걸 보시면 조금 더 이해가 쉽게
15:56
될 겁니다
15:57
4 아직까지는 이 디지털 방식보다는 pwm 방식이 많이 사용되는 것
16:02
같구요
16:03
d 샷은 그래도 좀 사용이 되는데 프로 샷은 아직 많이 사용되는 것 같진
16:07
않습니다
16:08
그리고 제 주관적인 생각으로는 pwm 신호는 fc 에서 생성 하기가
16:13
쉽습니다
16:15
타이머 이용해서 초기 설정 몇 가지만 해주면 바로 신호가 나오고요
16:19
펄스 폭을 가변 하는 것 그러니까 모터 속도를 제어하는 거죠
16:23
그것도 엄청 쉬워요 근데 디지털 방식은
16:26
이 두가지 디지털 방지 비 사실을 프로 샷은
16:29
저희가 흔히 사용하는 디지털 통신 방식이 모유 아트 spices
16:34
이런것들이 있는데 그런 방식이 아니고
16:38
esc 프로토콜을 개발하는 어떤 단체가 있을텐데 그 단체에서 자체적으로
16:43
정의한 방식을 사용합니다
16:46
즉 그 말은 디지털 신호의 0과 1을 9분하는 방식이 우리가 아는 방식이
16:51
랑 조금 다를 수도 있다는 소리에요
16:53
그래서 d4 지난 프로샵 같은 신호를 생성하는 게 조금 어려울 수
16:57
있습니다
16:58
그리고 pwm 같은 경우는 fc 에서 하드웨어적으로 또 생성할 수 있어서
17:02
우리가 소프트웨어 적으로 코드를 막 잘 알아야 되는 건 아닌데 이
17:06
방식들은 조금 소프트웨어 적으로 코드를 복잡하게 짜야 될 수 있다는
17:10
소리에요
17:12
역시 또 이 신호들을 생성을 하려면 그 프로토콜의 스택을 또 정확하게
17:17
알아야 되는데 그 스펙이 정확히 설명이 된 걸 찾기가 조금 어렵더라구요
17:23
뭐 그런 이유에서인지 모르겠지만 어쨌든
17:25
원사 시란 멀티 잣 같은 pwm 방식의 프로토콜이 많이 사용되는 것
17:31
같습니다
17:32
이제 이렇게 몇가지 esc 프로토콜 들을 간단하게 설명 드렸는데
17:37
대체 뭐 통하나 돌리는데 왜 이렇게 많은 종류의 신호들이 개발이 되고 또
17:41
사용이 되는지 좀 궁금해 지죠
17:44
과거에는 거의 5배 캣츠 pwm 이 구정 적으로 사용 됐어요
17:48
그때는 센서에 출력도 느렸고 마이크로컨트롤러 도 8비트 에다가 동작 클럭
17:54
또 16 내가 이렇지 20 내가 이렇지 정도의 느린 클럭을 가지고 있어서
17:59
제어를 빠르게 하고 싶어도 할 수 있는 하드웨어적인 스펙이 안됐습니다
18:04
근데 이제는 센 써도 엄청 빠른 주기로 출력을 해 주고
18:07
마이크로컨트롤러 도 수백 내가 에르 치 로 동작하는 것들이 가격도
18:11
저렴하게 나오면서 고속으로 제어가 가능 하게 됐죠
18:16
그래서 고속으로 제어를 하는데 문제는 모터 속도 를 갱신하는 주기가
18:21
예전에는 500회 lg pwm 을 사용했기 때문에 그 주기에 맞게 제어
18:26
주기가 동기화가 되버린 단소리 약 고속 비더 g 을 인식하는 esc
18:30
프로토콜이 필요해 지기 시작한 겁니다
18:33
그래서 원 425 가 나오고 또 그거보다 더 빠른 원 찾 42
18:38
그리고 멀티 잔 같은 프로토콜이 계속 발전된 형태로 나오게 된겁니다
18:43
이제 그러다가 pwm 방식 이 주기가 또 너무 빨라 지면서 문제가
18:47
나타나기 시작했는데 이게 주기가 빨라 진다는 말은 펄스에 폭이 좁아진
18:52
단소리 자 그 펄스 폭이 워낙 좁아 지다 보니까 펄스에 포기 조금만
18:58
흔들려도 모터에 속도에 크게 영향을 미치기 시작한 겁니다
19:02
fc 에 클럭 소스를 크리스탈이 는 오실레이터 같은걸 쓰는데 이게 또
19:07
약간의 오차를 포함하고 있어요 온도에 따라서도 발진 주기가 조금씩
19:11
달라지고 요
19:12
그런 것들 때문에 펄스 폭 이 조금씩 흔들릴 수 있다는 소리에요
19:16
그 조금의 흔들림이 또 엄청난 모터 회전 속도에 영향을 미치고
19:21
그러면서 디지털 신호가 필요해 지기 시작한 겁니다
19:25
그래서 d 4g 랑 프로샵 같은 디지털 방식이 신호가 개발이 된거구요
19:30
이건 제 주관적인 견해도 좀 들어 있는거구요
19:32
구글에서 검색을 좀 해 보시면 이런 그 새로운 프로토콜 들이 왜 텐 생
19:37
하게 됐는지 찾아 보실 수 있을꺼예요
19:40
이렇게 새로운 기술들이 왜 탄생 하게 됐는지를 알면 또 재미 있죠
19:44
그리고 엔지니어 라면 이런 내용들은 소설처럼 재미있게 읽어볼 만 할
19:48
겁니다
19:48
같이 식도 되는거구요 마찬가지로 흔히 사용되지만 개념 이해가 좀 어려운
19:53
통신 방식들이 있죠 예를 들면 캔 통제는 이더넷 통신
19:57
그리고 usb 동신 이런거는 개념이 너무 복잡해서 그걸 다 이야기가 좀
20:01
어려워요
20:02
그런데 이런 통신 기술들이 왜 탄생하게 되었는지
20:05
이전에 존재하던 기술들이 어떤 한계점을 가지고 있는지 그 배경 같은 걸
20:10
좀 알고 나면 개념 이해가 좀 더 쉬워집니다
20:13
esc 펌웨어 랑 프로토콜은 계속 업데이트가 되고 있는데 들어온 업계로
20:18
나 가실 분들은 이런 최신 기술들을 꾸준히 모니터링 하시는게 좋을겁니다
20:23
이제 마지막으로 수업에서 사용할 pwm 방식에 대한 설명이고
20:28
저희는 그 중에 원 402 지고 프로토콜을 사용할 겁니다
20:32
아까 에 또 말씀드렸다시피 펄스에 죽이는 2킬로 헤르쯔 로 할거구요
20:38
그리고 펄스에 폭은 최소 125 마이크로 색 최대 250 마이크로 색으로
20:44
만들겁니다
20:45
그리고 또 이 최소 랑 최대 펄스 폭 싸이의 단계를
20:49
만 단계 정도로 할거구요 이렇게 4개의 진호를 각각 만들어서 그 esc
20:56
d 에게 각각 또 넣어주고
20:57
이 펄스 폭 때로 캘리브레이션을 해주면 그 다음부터는
21:02
저희가 225 마이크로 스에게 펄스를 만들어 넣어 주면 모터가 정제 하게
21:07
될거고
21:07
250 마이크로 세계 8 스 를 넣어주면 모터가 최대 속도로 회전할
21:12
겁니다
21:13
그럼 이제 다시 그림으로 돌아와서 제어 시스템의 모든 입력과 출력이
21:18
다정이 됐습니다
21:19
pid 제어는 1킬로 헤르쯔 할거구요
21:22
아까 말씀드렸듯이 pwm 의 주기는 그것보다 빨라야 되는데
21:27
저희는 2킬로 헤르쯔 로 만들 거고 그럼 최종적으로는 pwm 주기보다
21:32
제어 주기가 느리니 까 이 모터 속도 에 갱신 주기는 제어 죽인 1kg
21:37
의 제 동기가 되겠죠
21:39
그래서 다음 시간에는 stm 에 타이머를 이용해서 pwm 신호를 생성하는
21:44
방법을 설명 드리고
21:45
어떻게 하면 펄스에 주기 랑 폭을 원하는 대로 설정할 수 있는지 설명을
21:50
드린 후에 실체 신호를 생성해서 오실로 스코프로 확인까지 해보도록
21:54
하겠습니다

```


#### video 21
- ch6-2 PWM generation

{% include youtubePlayer.html id=page.youtubeID21 %}

```diff
00:14
몇가지 esc 프로토콜 들에 대해 설명드렸습니다
00:18
esc 프로토콜은 크게 pwm 방식 이랑 디지털 방식으로 9분되고 각
00:22
방식 뜰의 개념이 랑 차이점에 대해서도 설명 들었었죠
00:26
이제 수업에서 사용할 esc 프로토콜은 pwm 방식 중의 하나인 원샷
00:31
125% 또 그리구요 펄스의 폭을 최소 125호 마이크로 색 최대 250
00:37
마이크로 색으로 만들고
00:39
죽이는 최대 4키로 헤르츠 일까지 가능한데 저희는 2킬로 lg 로 만들
00:44
겁니다
00:46
화면을 보시면 두개의 pwm 신호 가 출력되고 있구요
00:50
위의 신호는 2킬로 헤르츠 주기에 125 마이크로 세계 펄스 폭을 갖는
00:54
pwm 고정으로 출력이 되고 있고 밑에 신호는
00:58
죽이는 2킬로 헤르츠 로 똑같은데 펄스 폭을 125 마이크로 세계에서
01:03
250 마이크로 3 까지 증가 시키는 걸 반복하고 있습니다
01:07
2 제 2의 펄스 폭 이 실제로 저희가 모터를 구동할 때 사용할 펄스
01:11
폭에 범위가 된거죠
01:13
그래서 오늘은 이렇게 pwm 신호를 생성하고
01:16
실제 오실로 스코프로 확인까지 해볼 거구요 실제로는 pwm 이 되게 해
01:20
가 출력이 되고 있는데 제 오실로스코프 가 2채널 자리라서
01:25
2개만 확인할 수 있어서 이렇게 출력해 봤습니다
01:28
pwm 이 어떻게 출력되는 지 이제 확인 해 봤으니까 실제 피타 불린
01:32
신호들을 생성하는 방법에 대해서 설명드리겠습니다
01:36
우선 pwm 을 생성하기 전에 타이머의 개념에 대해서 얘를 좀 해주셔야
01:41
됩니다
01:42
마이크로컨트롤러 에서는 pwm 신호를 생성하기 위해서 타이머 를
01:45
사용합니다
01:47
pwm 신호는 죽 이란 펄스 폭으로 저희가 되는데 이게 전부다 시간이란
01:51
관련 있는 것들이기 때문에 그래요 그래서 먼저 타이머의 대해서 설명을
01:55
드린 후에 그 다음 pwm 을 생성하는 방법을 설명드리겠습니다
02:00
개념이 조금 복잡할 수 있는데 어려운 개념은 아니니깐 천천히 해보시구요
02:05
특히 이번 챕터에서 설명드린 내용은 좀 중요한 거라서 이해를 반드시
02:09
해주셔야 됩니다
02:11
그리고 오늘 설명드릴 내용은 제 stm32 따라하기 강조해 타이머 랑
02:15
pwm 부분을 보시면 자세한 설명이 되어 있으니까
02:18
이해가 안되신 분들은 그 부분을 좀 보시고
02:21
그래서 이 강좌에서는 자세하게 설명 드리지 않고 간단하게 설명드리도록
02:25
하겠습니다
02:27
stm 의 타이머의 대해서 이해를 하시려면 먼저 몇 가지 용어 란 개념들
02:31
부터 이해 하셔야 됩니다
02:33
디지털 시스템에서 타이머 라고 하면 시간을 되는거예요
02:36
그럼 식을 어떻게 되느냐 디지털 시스템은 또 항상 클럭에 개념이 같이
02:41
따라 단장
02:42
이 클럭이 몇 번 들어 왔는지를 세면 시간을 낼 수 있습니다
02:46
그럼 이 클럭이 들어오는 질을 어떻게 알고 새 냐 면 타이머의 레지스터
02:50
중에 클럭을 새는 전용 레지스터가 있습니다
02:53
타이머 카운트 레지스터 라고 하구요 이 레스터는 타이머의 클럭이 들어올
02:58
때마다 값이 자동으로 1씩 증가하는 레지스트 입니다
03:02
그렇게 쭉 증가하는데 무한히 증가 할 순 없고 16bit 타임 하얀
03:06
32비트 타이머 4 따라서 살 수 있는 최대값 사는데
03:10
16 bit 는 최대의 6만 5천 정도 까지 살 수 있구요
03:13
32bit 는 최대 43억 정도까지 살 수 있습니다
03:17
그 최대 값 보다 넘어가면 더 살 수 없으니까 오버플로 가 발생하고 요
03:22
그렇게 클럭이 들어올 때마다 1씩 증가 하다가 어떤 특정한 값이 되면 버
03:28
증가는 게 아니고 0으로 떨어진 다음에 다시 0부터 새는 걸 반복하게
03:32
되는데 그 특정한 값을 오오토리 엘로드 레지스터 arr 이라고 합니다
03:38
역시 16bit 냐 32비트 냐에 따라서 최대값이 다르고요
03:43
그래서 클럭이 들어올 때마다
03:45
이카운트 레지스터가 1씩 증가 하다가 ar 아리랑 값이 같아지면 다시
03:50
0으로 떨어지고 0부터 새는 걸 반복한다 고 생각하시면 되고요
03:55
그 같아지는 순간엔 타이머 업데이트 인터럽트를 발생 시킬 수 있습니다
04:00
그래서 어떤 기능을 주기적으로 동작시킬 하면
04:03
2타임 업데이트 인터럽트를 사용하면 되구요
04:06
이건 나중에 pid 제어 할 때 저희는 제어 죽일 1khz 할 건데 그때
04:11
2타임 업데이트 인터럽트를 사용할 겁니다
04:14
그래서 이 cnt 랑 arr 에스터 개념은 설명을 드렸고
04:19
좀전에 클럭을 샌다고 오래 쓰면 되는데 그럼 이 클럭에 주기는 어떻게
04:22
되느냐 를 또 정확히 알아야겠죠
04:25
우선 저희가 사용하는 시스템 클럭을 수업 첫 시간에 rcc 클럭 설정할
04:30
때
04:31
168 메가 헤르츠 로 해놨습니다
04:34
이건 시스템 클럭이 되는거고 타이머로 공급되는 클럽은 타이머의 채널의
04:39
따라서
04:40
apb 1 타이머가 있고 ep.2 타이머가 있는데
04:44
apb 1 타이머는 시스템 클럭에 다닌 83회 가 헤르츠 를 사용하구요
04:50
ape 타이머는 시스템 클럭을 그대로 168 메가 헤르츠 를 사용합니다
04:55
근데 이 클럭이 너무 빨라서 클럭을 좀 느리게 하기 위해서 프리 스케일러
04:59
라는 개념이 나오고요
05:01
어플이 스캐너는 타이머의 클럭을 프리 스케일러 만큼 나눈 값을 실제
05:06
카운트 레지스터를 1씩 증가 시키는 그 클럭으로 사용하는 겁니다 그걸
05:11
카운터 클럭 이라고 하겠습니다
05:14
그래서 좀 전에 2 83회 가 헤르츠 또는 168 메가 헤르츠 의 클럭을
05:19
프리 스케일러 만큼 나눈 게
05:21
실제 카운터 클럭이 되는거고 이 카운터 클럭이 들어올 때마다 카운트
05:26
레지스터가 1씩 증가 한 날 이렇게 이해하시면 됩니다
05:31
stm32 f4 이는 타이머가 최대 14개가 있는데 각각의 타이머가
05:36
apb 1에 속하는 gap be 에 속하는 지를 확인을 해야 되요
05:41
왕 예를 들어 파이 뭐 클럭이 84 외가 헤어지고 프리스케일 너를 천으로
05:46
한다면 카운터 클럭은 83 애가 나누기 천인 84 ka 7 가 되겠죠
05:53
이게 어카운트 레지스터에 증가되는 그 주기가 됩니다
05:58
시간은 당연히 그거에 역수 1 거구요
06:01
예를 하나 들자면 우선 저희가 사용할 타이머는 타이머 5번을 쓸 거구요
06:06
이 타이머는 32비트 타이머 0 타이머 클럭은 84 메가 헤르츠 입니다
06:11
이 타이머를 2킬로 헤르츠 을 주기로 업데이트 해보도록 하겠습니다 먼저
06:15
프리스케일 너를 1로 두면
06:18
카운터 클럽은 이 타이머 클럭 나누기
06:20
프리스케일 나오니까 83회 가해 배치가 그대로 카운터 클럭이 되는거고
06:25
시간은 그걸 역술인이 84 배가 분 의 인 초가 되겠죠
06:30
그게 이카운트 레지스터가 1 증가하는 데 걸리는 시간이 되는 거고 그걸
06:35
4만 2천 번 세면 시간으로는 0.5
06:39
mcc 얘기 될 겁니다 이게 2킬로 헤르츠 의 주기가 되는 거죠
06:43
프리스케일 너를 1 그리고 a 알라를 42,000 으로 놓으면 2킬로
06:48
헤르츠 일마다 반복이 되는 거야 이 주기가 타이머가 반복되는 주기가
06:53
되는거고
06:54
그리고 업데이트 인터럽트를 사용한다면 역시 그 업데이트 인터럽트가
06:58
호출되는 주기가 되고 또 중요한 조금있다가 생성할 pwm 신호의 주기가
07:04
되는 겁니다
07:06
그래서 결론은 이 프리스케일 너랑 ar 알에 값으로 타이머의 주기를
07:10
결정할 수 있게 된거죠
07:12
이렇게 가 stm32 의 타이머의 기본동작 개념입니다
07:17
이 타이머 개념을 확실하게 이해 하셔야 되요 근데 또 막상 보면 별거
07:21
아니죠
07:22
타이머의 대해서 설명 들었으니까 이제 pwm 에 대해서 설명드리겠습니다
07:27
앞에서도 말씀드렸듯이 pwm 은 타이머의 기능 중에 하나라서 타이머를
07:31
이해 하셔야지 pwm 도 이해할 수 있어요
07:34
pwm 은 펄스에 포기 랑 주기로 저희가 되고 이 두가지를 원하는 대로
07:39
조절할 수 있어야 됩니다
07:41
우선 좀전에 로 들었더니 타이머를 다시 한번 보시면 타이머 오버클럭이
07:45
84 외가 헤르츠 고 프리스케일 어른 1로 했을 때 이렇게 타임 을
07:49
동작시키면 카운트 레지스터가 1 증가하는 데 걸린 시간이 84 외가 분
07:55
의 1초가 되죠
07:57
이때 arr 레지스터를 42,000원 했다면 카운트 레지스터는 증가하다가
08:03
42,000 이 되면 0으로 떨어지고 다시 증가하는 걸 반복하니 까 이
08:08
주기는 시간으로는 0.5 밀리게 될 겁니다
08:12
그리고 이 주기가 또 pwm 의 주기가 되는거구요
08:16
그래서 pw 의 주기는 이렇게 정의할 수 있는데 펄스에 폭은 어떻게
08:20
저년은 야 여기서 새로운 개념이 하나 더 나오는데 캡처 컴페어 레지스터
08:25
ccr 이라는 개념이 나옵니다
08:28
이 시야를 뭐냐면 좀전에 카운트 레지스터가
08:32
증가하다가 arr 과 같아지면 0으로 떨어져서 다시 증가하는 걸 반복한다
08:38
그랬는데 이 증가하다가 ccr 과 만나는 시점에 pwm 출력 에 극성
08:45
변화가 일어납니다
08:46
즉 pwm n 한 주기가 시작되면 매 주기마다 이렇게 하이로 시작되는데
08:51
카운트 레지스터가 증가하다가
08:55
ccr 과 같아지는 이 시점에 로우 로 신호 의 극성이 바뀐다는 말이에요
09:01
cnt 는 그래도 계속 증가하다가 ar 아리랑 만나면 영어로 떨어지고
09:07
그때 pwm 에 한 주기가 다시 시작되니까
09:10
출력은 하이가 출력이 살 거고 또 증가하다가 실시 아리랑 만나는 시점에
09:15
네로로 떨어진다는 말이죠
09:17
이걸 매 주기마다 반복합니다 예를 들어 이 실시할 값을 지금처럼만
09:22
500으로 했다고 하면 우선 이카운트 레지스터가 1 증가하는 데 걸린
09:27
시간은 84 메가 분의 1초 가 되죠 그래서 일람 기 83 애가
09:34
이렇게 해주면 카운터 레지스터 1 증가한 데 걸리는 시간 이고
09:38
그게 만 500번 증가하는 동안 pwm 신호는 하이를 유지 할 겁니다
09:44
그래서 펄스에 폭은 이하이 상태일 때를 8세 폭으로 얘기를 하니까
09:49
이거는 초로 따지면 곱하기 10,500 을 해주면 되요
09:53
곱하기 10,500 해주면 펄스 폭은 125 마이크로 쓰이게 됩니다
10:00
만약에 펄스 폭을 250 마이크로 3기 거에 두 배로 하고 싶다 그러면
10:04
실시할 값을 이 두 배인 21,000 으로 하는 되겠죠
10:09
그리고 이스 씨알은 0부터 arr 사이에서 왔다 갔다 해야 되니까
10:14
최대값은 arr 까지가 될겁니다
10:18
그거 보다 커 받자 펄스 폭은 100%
10:21
즉 쭉 하이 상대가 되는 거죠 그래서 pwm 도 별로 안 어렵죠
10:28
그래서 정리하자면 프리스케일 너랑 arr 이 두 개의 레지스터로 펄스에
10:33
주기를 결정하고
10:34
ccr 레지스터로 펄스에 폭을 조절할 수 있다고 기억하시면 됩니다
10:39
펄 3 죽이는 2킬로 헤르츠 로 고정이 되어 있으니까 이 두 개의
10:43
레지스터는 한 번 초기 값을 넣으면 그 다음에 바꿀 일이 없을 거구요
10:47
그리고 펄스에 폭에 따라서 모터 회전 속도가 결정되기 때문에 이 c 씨의
10:52
레지스터는 드론이 비행하면서 값을 계속 바꿀 거야
10:56
최종적으로 pid 제어 까지 다 끝나면 그 결과를 이 ccr 레지스터에
11:00
집어 넣을 겁니다
11:02
이렇게 하면 모터 회전 속도가 죄가 되는 거죠
11:05
지금까지 설명드린 내용은 정말 중요하니까 이에 안되신 분들은 다시 한번
11:09
천천히 보시면서 일을 꼭 하세요
11:12
이 표는 stm32 f4 의 타이머 에 대해서 간단히 정리한 표입니다
11:17
이건 제가 만든건 아니고 이 출처 에서 따온 거구요
11:20
이 사이트의 는 stm32 f4 개발 관련된 자료들이 많이 있으니까
11:25
에스팀 공부하시는 분들은 가서 보시면 좋을 겁니다
11:29
stm32 f4 에는 타이머 1 부터 14 까지 총 14개 타이머가
11:34
있구요
11:34
그중에 저희는 타이머 5번 을 사용합니다
11:37
타임 5번은 32비트 타임 하고 카운트 레지스터가 이애 32 승인 최대
11:43
43억 정도까지 살 수 있고요
11:46
보시면 타이머 이번 5번이 32비트 0
11:49
나머지 타이머는 다 16비트 줘 그리고 프리 스케일러 는 32비트 타임
11:55
얻은 16비트 타이머 든 관계없이 모두 다 최대 16 비트
12:00
즉 65,000 정도까지의 값을 가질 수 있습니다
12:04
그리고 채널이 라고 되어있는게 pwm 모드 에서는 출력 채널 수를 의미
12:09
하구요
12:10
타이머 5번이 채널이 4개가 있는거고 타이머 이번도 4개가 있다
12:14
이렇게 보시면 되고 그리고 ape 를 사용하구요
12:18
타이머 클럭은 시스템 클럭에 반인 84 메가 헤르츠 입니다
12:23
보시면 a pve 를 사용한 사이먼은 시스템 클럭을 그대로 사용하게 되죠
12:29
그리고 이 오른쪽 표는 각 타이머 마당 pwm 신호가 어떤 핀으로
12:34
출력되는 지를 정리한 표 9 0
12:37
수업에서 사용한 fc 는 타이머 5번에 출력 4개를 다 사용하구요
12:43
각각 a 포트 0번 리포트 1번 2번 3번
12:47
이렇게 연결되어 있습니다 그리고 fc 에는 그 두 개의 출력 팬이 더
12:52
있죠 총 6개 pwm 출력 핀 있으니까 그건 타이머 이번에 출력 3번
12:59
4번 을 사용합니다
13:00
그래서 b 포트 10번 11번 피는 연결되어 있습니다
13:04
그래서 제 수업에서는 이 두 개의 피는 사용하지 않을 건데 만약에
13:07
사용하실 거라면 타이머 이번에 주기 랑 8 스포 글
13:12
좀전에 설명드린대로 설정에서 사용하시면 되요
13:15
타이머 2번은 우버 니랑 출력 핀은 다르고 나머지는 다 똑같습니다
13:21
32bit 의 클럭 또 똑같이 84 메가 헤르츠 자
13:26
이번 시간에는 타이머 5번으로 4개의 pwm 을 생성할 건데 이 4개의
13:30
pwm 연 같은 타이머 안에 출력 채널만 다른 거라서
13:34
기본적으로 죽이는 같습니다 타임 5번의 설정을 그대로 공유 하구요
13:39
그리고 펄스 폭은 4개를 독립적으로 조절할 수 있는데 그때 ccr 일부터
13:43
실시할 4까지
13:45
4개의 시야를 독립적으로 바꾸면 됩니다
13:48
즉 각각의 펄스에 죽이는 같지만 폭은 독립적으로 동작한다는 말이에요
13:53
그래서 아까처럼 타이머 5번이 84 메가 헤르츠 클럭에 프리스케일은 1
13:59
그리고 a 알라를 42,000 으로 하면 이 4개의 pwm 죽이는 다
14:04
똑같이 2킬로 헤르츠 가 되는 거고 그 안에서 ccr 이를 10,500
14:09
ccr 이를 21,000 시셀 3을 31,500
14:14
이렇게 하면 퍼센트로 는 각각 25% 50% 75% 의 펄스 폭 이 될
14:20
거구요
14:21
그리고 마지막 실시한 사는 이제 저희는 실제로는
14:25
펄스 폭을 125 마이크로 세계에서 250 마이크로 색 사이에 펄스 풍만
14:30
사용 할 거니까
14:31
실시할 값으로는 마노 100부터 21,000 까지의 값을 좀 바꿔 보면서
14:37
펄스 폭 이 실제로 어떻게 변하는지를 확인해 보겠습니다
14:40
아까 동영상 첫 부분에 오실로 스코프로 보여드렸던 그 거죠
14:45
그리고 이 단계가 펄스 폭 의 조절 단계가 됩니다
14:49
내가 지난 시간에 원 425 프로토콜을 설명 드릴 때 펄스 폭 조절
14:54
단계를 만 단계 정도로 한다고 말씀드렸는데 실제로는
14:58
10,500 단계 곡은 a 값의 범위가 된거죠
15:03
pwm 출력 은 fc 를 이렇게 놓고 봤을 때
15:07
esc 커넥터의 검은색 써니 여기 그리고 흰색 써니 이 밑에 오도록
15:12
꽂으면 됩니다
15:14
그리고 왼쪽부터 타이머 5번의 채널 1번 2번 3번 4번 순 이구요 이게
15:19
ccr 1234 순 이란 같아요
15:23
그리고 오른쪽 두개의 이 채널은 타이머 2 번이고 pwm 출력 은 채널
15:28
3번 4번 입니다
15:30
근데 제 수업에 선이 2개를 사용하지 않죠
15:33
그리고 이 sc 커넥터 꽂을 때 2채널 순서에 반드시 주의하셔서 꽂이
15:39
해야되는데
15:40
드론을 이렇게 놓고 봤을 때 채널 1번을 왼쪽 위부터 그리고 채널 2번을
15:46
왼쪽 밑에 채널을 3번은 오른쪽 밑에 채널 4번은 오른쪽 위의 순서대로
15:52
1234 순으로 꺼주시면 됩니다
15:55
이거 잘못 꽂으면 나중에 제어할 때 모터 방향이 좀 이상하게 되서 위험
15:59
할 수 있어요
16:01
그리고 이번 시간에는 pwm 을 확인만 하고 모터를 돌리는 않을 거라서
16:06
아직은 이 커넥터를 꽃지 나는 겁니다 esc 캘리브레이션을 하고 실제
16:11
모터를 돌리는 건 다음 시간 할꺼예요
16:14
그리고 모터가 워낙 빨리 되기 때문에 프로펠러 안 달아도 손에 다음은
16:18
다칠 수 있으니까
16:19
절대 이 커넥터는 아직 꽂지 마세요
16:23
이제 큐브의 맥스로 타이머 5번 설정하고 소스 코드 작성을 할 건데 먼저
16:27
파라미터 들은 타이머 클럭은 인터널 블럭 그리고 채널은 채널 출력
16:32
채널에서 1234 를 다 pwm 모드 로 사용한다
16:36
그리고 프리스케일 너를 제가 아까 1위 라고 말씀드렸는데
16:39
실제 값은 그거 에서 1 뺀 값 즉 0을 넣어 줘야 됩니다
16:44
이 arr 도 마찬가지구요 그리고 카운트 모드는 업 카운트 모드 다운
16:49
카운트 모드가 있는데 제가 예로 설명 드렸던 것은 없 카운트 기준으로
16:53
설명드렸습니다
16:55
그리고 인터널 클럽 티비 저는 노 디비전 이렇게 하고 그리고 이 앞 밑에
16:59
있는 부분이 pwm 각각 출력 채널에 대한 설정이 돼 있다 이것은 실제로
17:05
큐브의 믹스로 설정하면서 다시 한번 설명 드리도록 하겠습니다
17:09
그럼 이제 소스코드 작업으로 넘어가겠습니다

```


#### video 22
- ESC calib and motor drive

{% include youtubePlayer.html id=page.youtubeID22 %}

```diff
00:15
네이버 카페에 올려 놓을 테니까 강의를 들으신 분들은 수시로 공지사항을
00:20
확인을 좀 해주세요
00:22
이제 지난 시간에 타이머 기능을 이용해서 pwm 신호를 만들어 썼고
00:25
pwm 의 주기 랑 펄스 폭을 어떻게 원하는 대로 설정할 수 있는지도
00:30
설명드렸습니다
00:31
그리고 죽이는 갖고 펄스 폭은 독립적인 4개의 pwm 등을 만들어서
00:36
2킬로 헤르츠 주기에 125 마이크로 색부터 250 마이크로 3까지 의
00:41
펄스 폭을 가변 도 했었구요
00:43
이제 이번 시간에는 이 4개의 pwm 신호로 esc 캘리브레이션을 하고
00:47
실제 모터를 구동시켜 보도록 하겠습니다
00:50
그리고 펄스 폭을 조절하기 위해서 fsi 옥 조종기 의 신호를 입력으로
00:55
사용하는 방법도 설명드리겠습니다
00:57
마지막으로 내 모터의 회전속도를 간단히 비교도 해볼 거구요
01:02
그래서 이번 시간이 챕터 이게 마지막 시간이고 또 파트 원 의 마지막에
01:05
되겠죠
01:08
이번시간 asc 캘리브레이션을 할껀데
01:10
이 캘리브레이션 모드로 들어가기 위해서 조종기 에 스위치 c e 스위치
01:14
줘
01:15
이 스위치를 사용할 거구요 조종기를 키고 스위치 씨를 내린 다음에 드론
01:21
의 전원을 넣으면 캘리브레이션 모드로 진입하고 또 fc 가 알아서 esc
01:26
캘리브레이션 까지 하도록 소스 코드를 작성할 겁니다 그게 끝나면 왼쪽
01:31
수직 방향의 스틱을 이용해서 이 방향이 스틱을 이용해서 펄스의 폭을
01:35
가벼운 돼 볼 거고 도프 신호로 모터 회전 속도도 제어 해볼 겁니다
01:40
그래서 잠깐 보여드릴 자는
01:43
조종기 전원을 키고 요 그리고 스위치 씨를 내린 채로 들어온 의 전원을
01:48
넣으면 캘리브레이션 모드로 진입합니다 보여드릴께요
01:53
지금 캘리브레이션 모드로 들어간 상태 0
01:57
지금같은 비프음이 좀 5일 텐데 그 비프음 은 모터에서 나는 소리에요
02:03
그리고 캘리브레이션 하는 동안에는 조금 기다려야 된다
02:09
이 소리까지 끝나면 캘리브레이션 이 완료가 된 겁니다
02:12
그리고 지금 들리고 있는 입이 톰은 fc 의 9 저의 선아는 제품이고
02:18
그건 제가 이렇게 소리가 나도록 프로그래밍을 현 상태구요
02:22
지금 기쁨의 상태로 어떤 상태인지를 알 수가 있어요
02:25
예 그 조금있다 설정 되도록 하겠습니다
02:28
킬레이션 이 끝나면 다시 스위치를 원상 복구 시키면
02:33
이제 동작 모드로 진입을 한거 고향
02:36
지금 상태에서 왼쪽에 이 수직 방향의 스틱을 이용해서 펄스 폭을 조절할
02:40
수 있는데 그러면 모터 회전속도 같이 밖에요
02:44
한번 보여드리겠습니다 지금은 맨 밑으로 내려 쓸때가 최소 8 스벅 이나
02:48
모터가 정제 있는 상태고
02:50
지금 상태가 제가 펄스 폭을 높았던 이 더 회전하고 있어
02:57
다시 최대의 펄스 폭 한번 높여 볼게 모터가 좀 빨리 돌아서 시끄러운데
03:02
높여 보겠읍니다
03:06
기분상 세럼
03:08
최대 펄스 폭 까지 올렸다가 다시 내린 상태고 그래서 펄스 폭에 비례해서
03:13
모터 회전 속도도 변화 정
03:16
지금은 캘리브레이션 모드로 들어가서 또 캘리 미션이 끝나고 모터 회전속도
03:21
펄스의 폭을 조절하는 걸 보여 드리는데
03:23
일반 동작 모드로 들어가는 어떻게 동작하는지 한번 보여드리겠습니다
03:27
다시 다 전원을 끄고 요
03:31
굉장히 조정기 전원을 키고 이번에는 스위치 씨를 내리지 않고 맨 위로
03:36
올린 상태에서 들어오네 전화는 넣겠습니다
03:38
그러면 캘리브레이션 모드로 들어가지 않고 바로 기본 동작 모드로 들어가요
03:48
엘리베이션 과정이 없죠 그리고 지금 상태에서 또 이 스틱을 조작하면
03:53
모터에 펄스 펄스 폭 이 바뀌면서 모터가 회전을 시작할 겁니다
03:57
싸 랑 똑같이 해줍니다
04:01
이렇게 가 오늘 할거고 캘리브레이션을 한번 하면 그 다음부터는 할 필요는
04:06
없습니다
04:07
모터를 동작 시키려면 먼저 esc 캘리브레이션을 해야 되니까 그 방법부터
04:11
먼저 설명 되겟습니다
04:13
esc 캘리브레이션을 하려면 첫째로 esc 의 전원을 넣고 그 다음에
04:18
바로 pwm 펄스 폭을 최대로 넣어 주제로 한 7초 정도 기다립니다
04:24
최대 8 스포 근 이백 오십 마이클 색이죠
04:27
그리고 기다리는 동안은 최대 8 스포 글 유지하고 있어야 됩니다
04:32
그 후에 이번에는 반대로 펄스 폭을 또 최소로 한 후에 최소 는 이제
04:37
125 마이클 색인데
04:38
225 마이크로 색으로 나오 준 채로 또한 8초 정도 기다립니다
04:43
역시 기다린 동안 최소 8 스포 글 유지 해야 되고요
04:46
그게 끝나면 esc 캘리브레이션 이 완료가 된거예요
04:49
그 후부터는 펄스 폭에 비해 해서 못한 속도가 바뀝니다
04:53
그리고 아까도 보셨듯이 캘리브레이션 하는 과정에서 모터 자체에서 비품을
04:58
해 주는데 이게 동작 상태를 나타내요
05:01
각각의 비프음 마다 의미가 있습니다 그래서 그 비프음 의 의미에 대해서
05:05
설명드리겠습니다
05:08
이 그림들은 시간에 따른 비품 출력을 나타낸 그림 이구요
05:12
가로축 이 시간이고 세로축 2
05:15
비프음 의 주파 속 의 의미 의 높낮이를 나타냅니다
05:18
이 그림은 제가 그린건 아니고 bl 헨리 s 매뉴얼에서 따온 겁니다
05:23
먼저 esc 에 전원이 들어가면 전원이 들어왔다 는 의미로 이런 패턴으로
05:28
비프음이 한 번 올리구요
05:30
그 후에 우리는 바로 펄스 폭을 최대로 넣어 줄 건데 그때 부품을 먼저
05:35
pwm 신호가 인식됐다 는 의미의 저주파 비프음이 길게 한번 올릴께요
05:41
그 후에 최대 펄스 폭을 측정하고 있다 는 고주파 비프음 1
05:45
이렇게 여러번 올립니다 이건 측정하는 동안 계속 올리구요 한 6번 정도
05:49
였던것 같아요
05:51
최대 8 스포츠 직장이 끝나면 다시 이런 비프 이렇게 3번 반복 되서
05:56
올리는데
05:57
이 빅 뿡 까지 들리면 esc 에 최대 펄스 보기 저장 된겁니다
06:01
이 과정까지 가한 7초 정도 걸리구요
06:06
그 후에 이번에는 pwm 펄스 폭을 최소로 넣어주면
06:09
최소 펄스 폭을 측정하고 있다는 의미에 저주파 b 붐 이렇게 여러번
06:13
올리고요
06:14
역시 측정한 동안 계속 글입니다 최소 펄스 폭 측정이 끝나면 다시 이런
06:19
패턴의 비프음이 이렇게 3번 울리는데
06:21
여기까지가 esc 캘리브레이션 과정이 끝난 겁니다
06:25
이제 이후부터는 esc 가 최소 랑 최대 80 폭을 인식하게 된 거예요
06:30
그 다음에 다시 pw 인식 됐다는 저주파 비프음이 길게 한번 또 올리고
06:36
됐으면 마지막으로 모터가 동작할 준비가 됐다는 고주파 비품이 길게 한번
06:42
올립니다
06:43
이 고주파 비품 모터 레디 비프음이 우리면
06:46
모터 구동을 준비까지 끝난거예요 이후부터 가 좀 조심하셔야 되는데
06:51
이후부터 펄스 폭을 조절하면 모터가 바로 돌기 시작합니다
06:54
모터 돌기 시작하면 프로펠러 에뛰드 남기는 사고가 발생할 수 있기 때문에
06:58
반드시 조심하셔야 됩니다
07:00
캘리브레이션 한번 하면 그 다음부터는 할 필요는 없구요
07:03
켈리 미 전 모드로 들어가는 것은 이따 코드 작성할 때 다시 설명 적이
07:07
있습니다
07:09
쫌 전에 설명드린 내용은 캘리브레이션 모드로 들어갔을 때 설명이 얻고
07:13
캘리브레이션 모드가 아닌 기본 동작 모드로 동작하면
07:16
이런식으로 비프음이 들립니다 먼저 전원이 들어갔다는 기쁨이 이런 패턴으로
07:21
한 번 올리고요
07:23
그 다음에 pwm 신호가 인식됐다 는 저주파 비프음이 길게 한번 올리고
07:27
마지막으로 모터가 구동 할 준비가 했다는 고주파 비품이 길게 한번
07:32
올립니다
07:33
역시 기본 동작 모델에서도 이 마지막에는 모터 레디 비프음 고주파 소리가
07:37
길게 한번 들리는데 그 후부터는 또 펄스 폭을 바꾸면 모터가 돌아요
07:42
지금까지 설명드린 이 비프음 은 제 fc 에 달려있는 부정에서 난 소리가
07:46
아니고 모터 자체에서 난 소립니다
07:49
그리고 이따가 fc 의 부저를 통해서 캘리브레이션 모드가 아닌 fc 에
07:54
내부의 동작 상태를 나타낸 걸을 간단하게 코드 작성 해 볼 겁니다
08:00
이렇게 캘리브레이션 하는 방법을 설명 되었는데 정리를 좀 하자면 우리가
08:04
할 것은 esc 의 전원을 넣자마자 pwm 펄스 폭을 최대로 넣고 한
08:09
7초 정도 기다리고 요
08:11
그 다음에 펄스 폭을 최소로 넣고 한 8초 정도 기다리면 캘리브레이션 은
08:16
끝입니다
08:17
이걸 읽다가 코드로 작성하면 되요 그리고 캘리브레이션 모드가 아닌 일반
08:21
동작 모드를 진입하려면
08:23
전원을 넣고 pwm 펄스 폭을 최소로 넣으면 바로 일반 모드로 진입합니다
08:29
esc 캘리브레이션 설명은 그렇게 마치고 이제 조종기 신호로 펄스 폭을
08:33
조절하는 방법을 설명드리겠습니다
08:35
우선 이걸 하는 이유는 esc 캘리브레이션 이 끝나서 이제 모터를 한번
08:39
돌려 봐야되는데
08:41
지난시간 처럼 단순히 소스 코드로 만 일정하게 펄스 폭을 증가시켜서
08:45
모터를 회전시킬 수도 있어요
08:47
근데 그건 너무 단순 아니깐 조종기 의 입력 신호를 이용해서 모터의
08:51
회전속도를 직접 조종해 보려고 하는 겁니다
08:54
우선 지난 시간에 설명드렸던 내용을 다시 간다 정치 보면 pwm 을
08:58
생성하기 위해서 타이머 5번을 사용 했었구요
09:01
타이머 5번은 84 메가 헤르츠 클럭으로 동작하고
09:05
그때 프리 스캐너를 1 우토 릴 로드 레지스터 ar 날 값을 42,000
09:10
으로 해서 2킬로 헤르츠 의 타이머 주기를 만들었습니다
09:13
실제 값은 1씩 빼준 0 그리고 4만 1999 를 넣어져 썼구요
09:19
죽이는 그렇게 정했고 펄스 의 폭은 캡처 컴페어 레지스터 ccr 값을
09:24
이용해서 정했는데
09:26
ccr 은 1부터 4까지 이 네개가 각각 독립적으로 동작 했었고
09:30
10,500 을 넣었을 때 펄스 폭 225 마이크로 색 최소 였고 그리고
09:35
21,000 을 넣었을 때 최대 팔수도 250 마이클 섹 이었습니다
09:40
이 펄스 폭에 범위가 엄청 중요한데 앞으로 펄스 폭 이 이범희 안에서만
09:44
움직여야 돼요
09:46
그래서 나중에 ccr 값이 이 최소 랑 최대 를 벗어나지 않도록 또
09:50
코드를 넣기 날겁니다
09:52
그리고 이번 시간에 이렇게 esc 캘리브레이션을 해주면 ccr 값으로
09:55
모터의 속도를 조절할 수 있게 됩니다
09:58
그 말은 강의 맨 마지막에 pid 제어를 한 결과를 이 ccl
10:03
이 레지스터의 넣어 주면 된다는 얘기에요 그렇기 때문에 이 값의 범위가
10:07
매우 중요한 겁니다
10:10
이제 조종기 의 신호로 펄스 폭을 조절하는 걸 할꺼니까
10:13
이전에 챕터 4 회사 설명 들었었던 fsi 에 6기 수신기의 아이 퍼스
10:17
프로토콜의 대해서도 다시 한번 간단히 짚고 하겠습니다
10:21
i 퍼 센터는 조종기 의 모든 채널 데이터 가 각각 이렇게 16비트로
10:25
들어와 썼구요
10:26
그중에 합의 12 bit 가 조종기 조 장량에 값이 얻고 조 장량 범위가
10:30
첨부터 2004 이였습니다
10:33
역시 이것도 값의 범위가 중요합니다 그리고 상위 4비트 가 송수신기 의
10:38
상태를 나타내는 비트 라고 말씀드렸는데
10:40
이게 메뉴얼이 없어서 정확하지는 않은 내용이구요 또 확인을 해보니까
10:44
fsi 6 버전의 송신기 에만 해당되는 내용 내용이었고 fsi 6x
10:50
버전도 있는데 그 버전의 송신기는 해당되지 않는 내용이었습니다
10:54
그래서 아까 제가 카페 공지사항을 좀 확인해 달라고 말씀 드린 게 지금
10:58
이 내용을 공지사항에 올려 나는데
11:00
제사 다 c4 챕터에 뺀 세이프 기능은 fsi 6 버전의 송진 기만
11:04
구현할 수 있구요
11:05
fsi ux 는 지금은 구현 하실 수가 없습니다
11:09
그래서 fsi ux 의 성 신기로 벤 3 이 불쾌한 하시려면 펠 세이프
11:13
전용으로 채널을 1
11:15
별도로 할당해서 사용해야 될 것 같아요 그 내용은 이번 챕터 6기 끝나면
11:19
별도의 영상으로 올리도록 하겠습니다
11:22
확실히 찾아보고 진행을 했어야 되는데 그러지 못한 점 죄송하다는 말씀
11:25
드리겠습니다
11:27
제가 앞에서 값에 범위 들을 왜 강조 있냐면
11:30
이 조종기 값에 범인 첨부터 2004 2까지 값으로 펄스 폭에 범인 마노
11:36
100부터 21,000 까지 ccr 에 값을 바꿀 거라서 그래요
11:39
우선 조종기 왼쪽 수직 방향의 스틱을
11:43
맨 밑으로 내렸을 때 값이 천 인데 그 땐 펄스 폭이 최소 10502
11:48
되도록 할 거고 또 스틱을 맨 위로 올리면 값이 2002 되죠
11:53
그때 펄스 폭이 최대 2만 천 이 되도록 할 겁니다
11:58
이제 소식 하나를 만들어서 조종기 가 추천 일대 수식의 결과가 10502
12:02
되도록 하면 되고
12:03
조정이 값이 2001 땐 결과는 21,000 이 되도록 하는 됩니다
12:07
그래서 조종기 값을 이 수식의 입력으로 넣구요 계산의 결과 를 실시할 에
12:12
넣으면 되요
12:13
그래서 최종적으로 는 수식 은 이렇게 맨 밑에 있는 이것처럼 저희가
12:17
될거고
12:18
여기서 아이 퍼스 젊 lv 가 조종기 값이 구요
12:21
이 값의 거미가 첨부터 이 참 사이가 되는 거고 수식의 결과가 실시 알에
12:25
들어가는가
12:27
마노 100부터 21,000 까지 값이 되겠죠
12:30
예를 들어 이 조종기 데이터의 천을 넣은 1000 - 1000 곱하기
12:34
10점 가까이 부분 0이고
12:36
0 + 마노 백해 서 계산에 결과는 10502 될거구요
12:40
그리고 조종기 데이터가 2001 대 2100 2000에서
12:44
이 값은 천 잊어 처음 곱하기 10.5 해서 10502 되고 10,500
12:49
덕이 10,500 해서 계산 의 결과는 21,000 이 됩니다
12:53
그래서 이번 시간에 이렇게 하나의 조종기 스틱을 이용해서
12:56
4개의 pwm 을 전부 똑같이 가 변하도록 할꺼구요
13:00
코드 작성 도매 밑에 있는 20만 작성하면 되서 쉽습니다
13:06
이 그림은 오늘 구현할 내용의 플로우차트 구요
13:08
이따가 이 플로우차트 대로 소스 코드를 작성할 겁니다
13:12
먼저 전원을 넣으면 바로 페리 페럴 들이랑 주변 장치들을 초기 하는데
13:16
여기 엔써 쪼개 와도 있을거고 뉴아트 동시는 타이머 같은 쪼개 아들도
13:21
포함됩니다
13:22
그리고 이때 모터 pwm 시노드 를 끈 채로
13:26
즉 쭉 로 신호가 출력 되도록 초기 할 거에요 그래서 여기서 하는
13:31
내용들은 사실 이전에 2선 챕터 들에서 다 구원한 내용들이 자 그다음에
13:37
조정기 랑 수신기가 연결 되었는지를 확인합니다
13:40
조종기 가 연결되지 않으면 연결될 때까지 대기합니다
13:44
이 말은 조종기 가 연결되지 않으면 다음 단계로 넘어가지 않고 여기서
13:48
계속 기다린 단 소리에요
13:50
그래서 조종기 가 연결이 되면 이제 조종기 데이터가 들어오겠죠
13:54
그때 조종기 의 스위치 씨의 상태가 맨 아래로 내려가는 g 를 검사합니다
13:59
2 스위치 자 그 스위치를 검사해서 스위치가 밑으로 내려 같다면 이
14:04
안으로 들어 오구요
14:05
이에 스켈링 멘션 모드로 들어오고 그게 아니라면 이 내용을 건너뛰고 일반
14:10
동작 모드로 들어가 자 우선 캘리브레이션 모드로 들어오면 캘리브레이션을
14:14
하고 그게 끝나면
14:17
지금은 스위치 시를 맨 아래로 내려서
14:20
이 모두의 로 들어온 상태 니깐 스위치 씨를 다시 위로 올려서 이
14:24
캘리브레이션 모드에서 빠져나오도록 할 겁니다
14:27
그래서 스위치 c 를 올려서 킬레이션 모습까지 다 빠져 나오면 그 다음에
14:33
기본 동작 모드로 진입을 하게 되는데 바로 진입하는 게 아니고 중간에
14:37
쓰로틀 l 스틱 2 왼쪽 수직 방향의 스틱이 맨 밑으로 내려가 있는
14:43
상태인지를 검사합니다
14:46
이게 되게 중요한데 쓰로틀 키를 맨 밑으로 내 빙 상태가 아닌 중간 쯤
14:51
올린 상태에서 일반 모드로 진입을 하게 돼 버리면
14:54
모터가 갑자기 확 돌 수 있는 상황이 발생할 수 있기 때문에 그래요
14:57
그래서 안전장치를 두는 거죠
15:00
그 다음에 와 1 문으로 들어가서 이제 반복문을 수행합니다
15:03
그래서 2와 1로 프로 들어가기 전에 이런 단계들을 거치고 상태들을
15:08
검사하고 2st 캘리브레이션 같은거 를 수행하게 할 거에요
15:12
그리고 fc 에는 부저가 있으니까 이 단계들을 사이사이 마다 부저를
15:17
이용해서
15:18
지금 어떤 상태인지를 소리로 알 수 있도록 해 볼 겁니다
15:22
그래서 이게 조금 복잡해 보이지만 이렇게 플로우 차트를 잘 정리해 놓으면
15:26
그대로 구연 만 하는데요
15:28
어렵진 않습니다 그리고 보통 많은 개발자들이 이런 플로 차트 같은거 없이
15:33
그냥 머리속에 떠오르는 대로 구현을 하는데 그렇게 하면 코드 정리가 잘
15:37
안 될 수도 있어요
15:38
팀 프로젝트 할 때도 안 좋고
15:40
이렇게 플로우차트 같은걸 정리한 습관을 들이시면 좋습니다
15:44
제 강의에서는 지금까지는 워낙 기본적이고 단순한 내용들이라 플로우 차트를
15:48
안 그리고 설명을 줬었는데
15:50
아마 다음 챕터 부터가 프로그램 구조가 조금 복잡해 질 거라서
15:55
그때부터는 계속 프로 사들 그리면서 설명 될 것 같아요
16:00
이제 소스 코드를 작성하고 실제 모터를 돌려 볼 건데
16:03
위험한 상황이 발생할 수 있어서 이렇게 경고 문구를 빨간색 배경으로
16:06
넣었습니다
16:07
첫째로 지금 모터가 돌 수 있는 상태가 된거 기 때문에 절대로 프로펠러를
16:13
끼시면 안됩니다
16:14
아직 pid 제어가 안 들어 왔기 때문에 지금 프로펠러 끼면 100%
16:18
사옥 않아요
16:19
사람이 나체 든 물건이 부러지는 무조건 사가 날 테니까
16:22
절대로 프로펠러는 지금 끼지 아셔야 됩니다
16:26
나중에 pid 제 할 때 그때 길 거에요 그리고 둘째로 프로펠러를 앉기
16:30
더라도 아까 보셨듯이 모터가 워낙 빨리 그렇기 때문에
16:34
모터가 회전할 때는 모터에서 늘 되지 마셔야 돼요
16:37
모터도 는 중에 톤을 되면 손이 심하게 다칠 수도 있어요
16:41
정말 주셔야 됩니다 그래서 절대 손을 대지 마시고
16:45
마지막으로 아까 모터 레디 비프음이 난 후에는 펄스 폭에 따라서 모터가
16:49
이 제도는 게 된거죠
16:52
그때 펄스 폭을 갑자기 확 틔어 버리면 모터가 또 갑자기 확 될 수 있기
16:56
때문에 역시 사고의 위험이 있습니다
16:59
그래서 주의하셔야 됩니다 어쨌든 이번 시간 이후부터는 모터가 실제로 돌기
17:04
때문에 사고가 발생할 여지가 생긴 거죠 그래서 첫째도 안전 둘째도 안전
17:09
셋째도 안전입니다
17:11
전 최대한 안전하게 개발할 수 있도록 설명을 드리지만 그렇다고 100%
17:14
안전합니다 라고 는 말씀을 드릴 수가 없으니까 코드 작성 하시다가 도
17:18
이런 뭔가 사고가 발생할 것 같다
17:21
그럼 생각이 들면 한번 소스 코드 다시 한번 천천히 보시고 시뮬레이션
17:25
같은걸 해보세요
17:26
사고가 발생하면 100% 본인 책임 이니깐 정말 주의하셔야 됩니다
17:30
그러면 이제 설명은 이렇게 마치고 소스 코드 작업으로 넘어가도록
17:33
하겠습니다

```


#### video 23
- Option ESC calib

{% include youtubePlayer.html id=page.youtubeID23 %}

```diff
00:13
지난 시간에 esc 캘리브레이션을 하고
00:16
조종 게 왼쪽 수직 방향의 스틱으로 pwm 펄스 폭을 가 변하면서 모터를
00:21
회전시켜 봤죠
00:23
이번 시간에는 fsi 에 6기 수 징계 아이 퍼스 데이터가 받아 졌는지
00:27
확인하고
00:28
조종기 의 스위치를 이용해서 esc 캘리브레이션 모드로 진입하고 록 할
00:33
거고 그리고 fc 의 부저를 이용해서 현재 상태를 소리로 도 확인해 볼
00:37
겁니다
00:38
그리고 그게 다 끝나면 아주 간단한 방법으로 모터의 회전속도를
00:42
비교해보겠습니다
00:46
지난 시간에는 esc 캘리브레이션 아는 거랑
00:49
그리고 메인 반복문 시작하기 전에 스로틀을 키가 최소로 내려가 있는지
00:53
검사하는 걸 구현 했었죠
00:55
이번 시간에는 지난 시간에 이어서 바로
00:58
구현하지 못했던 것들 i 퍼스 데이터가 수신 됐는지를 검사하고 수신이
01:03
됐다면 스위치 c 의 상태가 맨 밑으로 내려가 있으면 캘리브레이션 모드로
01:08
진입하고 캘리브레이션 이 또 다 끝나면 다시 스위치 씨를 맨 위로 올려서
01:13
캘리브레이션 모드에서 빠져나온 걸 변하게 씁니다
01:17
그리고 이 단계들을 사이사이 마다 부저를 이용해서 현재 상태를 소리로 알
01:22
수 있도록 해보겠습니다
01:23
그래서 이번 시간에는 설명할 건 없고 시원을 하고 바로 소스 코드 구현
01:28
으로 넘어가겠습니다
01:31
오늘 구현할 것들을 좀 보여드리자면 먼저 조종기 의 전원이 꺼진 채로
01:35
드론의 전원이 들어가면
01:37
수신기는 지금 조종기 랑 연결이 안된 상태 정 그럼 연결이 될 때까지
01:41
대기하도록 할 겁니다
01:43
부 저의 소리 로드할 수 있도록 할 거구요 지금 조종기 의전원 꺼져 있는
01:47
상태고
01:48
들어온 의전원 없겠습니다
01:52
성능 넣었더니 이런 부저 소리가 올리고 있는데 이 부자 소리는 fc 에
01:57
부정에서 올리고 있는 소리고
01:59
지금 2부 저의 상태로 조종기 라 연결이 안 되는지를 알 수 있습니다
02:03
지금 상태에서 조종기 에 저는 키면 부저가 멈추고 기본 동작 모드로
02:07
제가요
02:09
저는 켰더니 기본 동작 모드로 들어가서 이제 메인 반복문 시작 된거죠
02:14
메인 와인 문이 시작 된거고
02:16
와인 물 안에는 지난 시간에 작업해 썻던 이외 왼쪽 수직 방향의 키로
02:20
펄스의 폭을 조절하는 코드가 들어 있으니까 지금 상태에서 익힐 움직이면
02:25
8 스토리 변하며 모터 회전 하겠죠
02:29
잘 동작하고 있습니다
02:33
아씨 이제 장을 다 끄고
02:39
이제 조종기를 키고 3일째 씨를 맨 밑으로 내린 상태에서 드론의 전원이
02:44
성하면
02:45
예수 c 캘리브레이션 모드로 들어가게 할 거구요 그때 또 부 저의 소리로
02:49
상태를 알 수 있게 될 겁니다
02:50
캘리브레이션 이 끝나면 다시 스위치 씨를 맨 위로 올려서 캘리브레이션
02:55
모드에서 빠져 나오도록 할 겁니다
02:57
지금 조정기 가 켜져 있고 스위치 씨가 밑으로 내려가 인 상태죠
03:00
드론의 전 없겠습니다
03:04
지금 부저 소리가 캘리브레이션 모드로 들어갔다는 걸 알려준 거고 q
03:08
메이션 이 진행되고 있죠
03:16
켈리 메이션 이 끝났습니다
03:20
굉장히 제 다시 이런 부정 소리가 들리면서 스위치 시를 위로 올릴 때까지
03:24
대기하고 있어요
03:26
지금 상태에서는 다른 키드 를 조작해 도 아무 반응이 법장
03:30
지금 상태에서 스위치를 다시 원래대로 대로 올리면
03:34
기분 동상 모드로 진입을 하고 메인 반복문이 수행되고 있는 상태입니다
03:38
역시 이 방향의 스틱을 이용해서 모터의 회전 속도를 조절할 수 있죠
03:44
다시 널 다 크게 씁니다
03:50
이제 조종기를 키고 쓰로틀 키는 이번에는 좀 높여 놓은 상태에서 드론 의
03:54
전원을 나오면 경고음이 울리면서 스로틀 키를 랜 밑으로 내릴 때까지
03:58
대기하도록 할 겁니다
04:00
이거 사실 지난 시간에 부연 했는데 경고음이 올리는거 아직 우연한 했죠
04:04
그건 드러내 전원을 넣어보겠습니다
04:09
자 전원을 넣었더니 이런 경고음이 울리면서 쓰로틀 키를 m l 내릴
04:13
때까지 대기하고 있는 상태입니다
04:16
지금은 좀 위험한 상황이 발생할 수 있는 상태라서 이렇게 약간 날카로운
04:20
경고음을 넣었구요
04:22
다시 스로틀 키를 밑으로 내리면
04:24
기본 동작 모드 로 진입하면서 다시
04:27
이제 목사를 회전할 수 있게 됐죠
04:35
이제 마지막으로 기본 동작 모드로 바로 진입한 걸 보여드리겠습니다
04:39
기본 동작 모드는 조종 익히고
04:42
왼쪽 스틱은 냄새로 내리고 또 스위치 씨는 위로 올린 상태에서 들어온
04:47
전원을 나오면
04:48
기본 동작 모드로 들어가게 할 거에요
04:53
바로 기본 동작 모드 들어갔죠 그래서 또 이 스틱을 이용해서 펄스 복을
04:58
확인할 수 있습니다
05:00
그래서 지금 보여드린 것들이 오늘 구현할 것들이에요

```


###  Ch7 add-on functions
#### video 24
- Read/write data to AT24C08 EEPROM

{% include youtubePlayer.html id=page.youtubeID24 %}

```diff
00:15
내용이 끝났고 이번 시간부터 새롭게 퍼트 투에 내용이 시작됩니다
00:20
파트 2에서는 필수적인 내용은 아니지만 구현 해 두면 도움이 되는
00:23
기능들에 대해서 설명 될 겁니다
00:26
먼저 챕터 7에서 는 잎이 롬에 데이터를 읽고 쓰는 것을 거고 그 때
00:30
pid 개인을 ep 롬 에 저장한 걸 하게 될 거구요
00:34
그리고 배터리 전압을 체크 해서 저전압 일대 경고음을 출력하는 걸 하고
00:39
그 다음에 센서에 의 바이어스가 껴 있으면 제어할 때 영향을 미치기
00:43
때문에 이걸 제거하기 위해서 센서에 캘리브레이션을 하는 방법을 설명 드릴
00:48
겁니다
00:49
챕터 8에서는 fc 랑 gcs 간의 통신 하는걸 할거고
00:54
이때 3d r 무선 텔레 배틀이 모듈을 이용해서 fc 의 상태 정보 예를
00:59
들면 센서에 데이터나 조종기 에 데이터를 지시 스에 보내서 ccs 에서
01:05
그 정보를 확인해 볼 거고
01:07
반대로 질 씨에스 에서는 fc 로 pid 제어 개인을 보내는 걸 할
01:11
겁니다
01:12
그래서 pid 개인을 gcs 에서 fc 로 무서운 으로 보내는 거죠
01:17
그 다음 마지막 챕터 9 에서는 일어날 수 있는 사고를 방지하기 위해서
01:20
안전에 관련된 몇 가지 기능들을 가능할 겁니다
01:24
사실 챕터 6 2 모터 구동 할 때도
01:27
안전을 위한 몇가지 기능들을 구현해 썼었죠
01:30
그래서 이렇게 가 이제 퍼트 투에서 하게 된 내용이고
01:34
파트 2에는 챕터가 세 개밖에 없는데 설명드릴 양은 파트 1 때랑 비슷할
01:38
것 같구요
01:39
또 진행하면서 필요에 따라서 여기 적혀있는 이 세부적인 내용이 추가되거나
01:45
변경될 수 있을 것 같습니다
01:47
어쨌든 파트도 재미있게 진행해 보도록 하겠습니다
01:51
이번시간은 챕터 7의 시작 이구요
01:53
먼저 b 발성 메모리 입이 로메 단순히 데이터를 읽고 쓰는 걸 이번
01:58
시간에 할거고
01:59
다음 시간에 이어서 이 필요 메 어떤 데이터를 어떤 순서로 저장을 건지에
02:03
대해서 설명 될 겁니다
02:05
그래서 잎이 롬을 2시간에 걸쳐서 설명 드릴 거에요
02:09
fc 의 뒷면을 보시면 8핀 짜리 집에 하나 달려 있는데 그게 저희가
02:13
사용할 at 24c 08 이라는 ep 롬 입니다
02:18
이필용 은비 발성 메모리 중에 하나고
02:20
b 발상 메모리는 전원 공급이 끊겨도 내용을 기억하고 있죠
02:24
또 데이터를 빈번하게 6곳은 은 용도로 사용하는 메모리는 아닙니다
02:29
그럴 때는 보통 렘 을 쓰 잡 이 필요는 수명이 있어서 너무 자주 쓰기
02:34
동작을 하면 나중에 뭐 쓰게 되요
02:36
내 수명이 이 데이터 스탠은 쓰기 횟수는 100만 밭 그리고
02:42
기간은 100년 이렇게 되어 있긴 해서 거의 반 영구적 이라고 볼 수
02:46
있긴 합니다
02:47
그리고 잎이 롱은 대표적으로 느린 메모리에 속하죠
02:50
그리고 저희가 사용할 2 파트 넘버가 at 4 c0 8인 데
02:55
뒤에 숫자 0 파리 의미하는게 메모리의 크기 구요
02:58
바이트 단위 가 아니고 kbit 다닙니다
03:02
그래서 저희가 쓴게 뒤에 08 이렇게 있으니까
03:04
8 kbit 가 되고 바이트로 는 1 킬로바이트 가 되겠죠
03:10
1킬로 가이 트면 용량이 꽤 큰 편에 속하고 요
03:13
제 수업에서는 pid 개인 정도만 저장을 거라서
03:16
굳이 이렇게 큰 용량이 필요 한건 아닌데 그래도 용량이 넉넉하면 필요에
03:20
따라서 다른 정보들도 저장을 수 있을 테니까
03:22
용량이 작은거 보다는 낫겠죠 제 수업에서는 많아봤자 베개 에서 200
03:27
바이트 정도 사용할 것 같습니다
03:29
그리고 메모리 크기가 1킬로 가이 텐데 이게 또 내부적으로 페이지 단위로
03:33
9분 됩니다
03:35
한 페이지당 16 바이트의 크기로 구성되고 요 그렇게 총 64개 페이지가
03:40
있습니다
03:41
근데 이게 용량에 따라서 조금씩 다르구요
03:44
저는 이제 수업에서 사용할 at 24c 08
03:48
1킬로 바이트의 입이 롬 기준으로 설명 드리는 겁니다
03:52
다른 용량을 사용하신다면 재 설명 이랑 다를 수 있으니까 그 때는 반드시
03:56
데이터 시트를 보시고 가셔야 되요
03:59
ep 롱은 아이 skse 로 인터페이스 싸고 최대 클럭 속도는 400
04:03
ka 칩니다
04:05
그리고 외부 핀으로 쓰기 금지 모두를 지원합니다
04:08
나중에 이 쓰기 금지 도 사용을 할 거고 그리고 조금전에 ep 롬 내부
04:13
저장 영역이 16 바이트 단위의 페이지 들로 이루어져 있다고 말씀
04:17
드리는데
04:18
읽다가 실제로 입이 롬에 데이터를 읽고 쓰고 할 때 페이지 단위로 접근
04:23
할 겁니다
04:25
내부 메모리에 영역을 9분하기 위해서 메모리의 주소 개념이 나옵니다
04:29
모든 메모리는 저장 영역의 주소를 가지고 있죠
04:32
주소 개념이 나오면 조금 어려워 하는 분들도 계신데 주소랑 게 사실 별거
04:36
없어요
04:37
우선 모든 메모리 조선은 1번지 마다 1 바이트의 공간을 같습니다
04:42
즉 0 번지 주소의 한 바이트를 저장할 수 있구요
04:45
그다음 바이트의 데이터를 자세 한다면 거기는 주소로 는 1번지 가 된
04:49
식이에요
04:50
그래서 주소 라는 것은 수많은 저장 영역을 9분하는 개념이라고 보시면 될
04:55
것 같구요
04:56
1 바이트 당 주소로 1번지 를 찾아 한다는 게 중요합니다
05:00
우리가 사용하는 at 이사 c0 팔은 1 킬로바이트 1024 바이트 의
05:06
크기를 같구요
05:07
1바이트 당 한 번 째 주소로 가지니까 내부 메모리 영역은 총 0번
05:12
지부터 1023 방지 까지 존재합니다
05:15
그래서 메모리 주소를 표현하기 위해서 10 bit 가 필요하겠죠
05:19
스피트 는 0부터 1023 까지 표현할 수 있구요
05:23
그리고 2 바이트 단위로 이루어져 있는 메모리 영역을
05:27
16 바이트 씩 묶어서 페이지 단위로 9분합니다
05:31
설명이 조금 복잡해 보이는데 주소 개념이 중요한 거고 페이지 개념은
05:36
16 바이트 를 묶어서 한 페이지로 관리 한다고 생각하시면 쉬워요
05:40
페이지 번호는 중요하지 않구요
05:43
아까도 말씀드렸듯이 이딴 데이터를 읽고 쓰고 할 때 페이지 단위로 읽고
05:48
쓰고 할 거라서 16 바이트 단위로 잡은 할거구요
05:51
그때 이 페이지 번호로 잡고 난 게 아니고 주소 단위로 접근해 됩니다
05:56
특히 데이터 쓰기 동작을 할 때 페이지에 시작부터 16 바이트 단위로
06:01
써야 되는데 만약에 페이지 일에 데이터를 쓴다고 하면 그 때 무조건
06:07
1페이즈 의 시작 주소인 16번지 부터 페이지에 끝일 31번지 까지
06:14
데이터를 써야 되요
06:16
이 규칙을 안지키면 이상하게 동작합니다 그 설명은 조금 있다가 한번 더
06:20
드리겠습니다
06:22
저희가 사용할 입이 롬은 8핀 ts sop 백희 스타일이구요
06:27
1 2 3번 피는 외부에서 넣어주는 입력 피고 잎이 4 정기적으로 하이
06:31
또는 로호 신호를 넣어주면
06:33
그거에 따라서 칩의 장치 주소가 결정됩니다
06:37
좀전에 메모리의 주소 개념을 설명 드렸는데 이번엔 장치 주소 라는 새로운
06:41
개념이 또 나오죠
06:43
아이 스퀘어 c 로 통신하는 모든 장치들은 고유의 장치 주소를 갔는데
06:48
이건 통신할 대상을 선택하는 개념 이구요
06:51
내부 메모리 주소는 좀전에 설명드렸던 한 번 지상 1 바이트의 공간을
06:56
갖는 다는 그 개념입니다
06:58
이 장치 조선은 한번 결정되면 사실 그 후부터는 바뀔 일이 별로 없어서
07:02
별로 고려하지 않아도 되는 내용인데 이 내부 메모리 조선은
07:07
메모리에 접근할 때마다 계속 이 주소를 바꿔 가면서 접근할 거라서 이
07:12
내부 메모리 주소 개념이 중요해요
07:15
장치 주소는 디바이스 어드레스 라고 표현하고
07:18
내부 메모리 조선은 이 데이터 이스트 상에는 워드 어드레스 라고
07:22
표현합니다
07:23
그래서 두 가지 종류의 주소 개념이 나오는데 헷갈리지 마시고
07:27
그리고 저희가 사용하는 at 이사 시공 팔은
07:31
장치 주소를 설정 않으니 3개의 핀 중에 실제 장 주소를 결정한 피는
07:36
에이 이거 하나고 a0 a1 은 장치 주소의 관여하지 않습니다
07:43
그래서 데이터 시트를 보면 입힌 들은
07:46
연결 하지 않거나 그라운드에 연결하고 되어 있습니다
07:49
그리고 5번 6번 pei 스퀘어 c 동 신 할 때 쓰는 편이고 7번 핀이
07:54
wp 입히니 쓰기 금지 모드 를 설정한 핍니다
07:58
입힌 의 하이 신호가 들어가면 쓰기 금지가 되고 로우 신호가 들어가면
08:04
허용됩니다
08:05
이따가 입히는 stm 에 gpio 에 연결해서 쓰기 금지 모드 를
08:09
제어하는 데 사용할 겁니다
08:12
장치 주소에 대한 설명이 좀 더 나오는데 우선 지금 제가 설명드린 걸 이
08:16
하시려면 아이 스퀘어 c 통신의 개념에 대해서 일을 하고 계셔야 됩니다
08:21
isc 개념을 잘 모르시는 분들은 jst m32 따라하기 강조해서 isk
08:26
아씨 통신의 개념 부분을 보시면 이해하는데 좀 도움이 될겁니다
08:30
우선 이 장치로 라는게 보통은 아이 스퀘어 실버 스 에 연결되어 있는
08:34
장치 중에 어떤 장치 랑 통신 할 건지
08:37
통신할 대상을 9분하는 용도로만 사용이 되는데
08:40
ep 롬 같은 경우는 개념이 좀 섞여 있어요
08:44
그래서 잘 생각하면서 들으시기 바랍니다
08:46
저희가 사용하는 at 이사 c0 팔에 경우는
08:50
장치 주소를 표현하는 7 비트 중에 상위 5 비트는 실제 장치 주소를
08:56
표현하는 데 사용되고
08:58
그럼 두 비트가 남 젊 아까 내부 메모리 영역이 0번째 부터 천 23번지
09:04
까지 총 1024 바이트 이라고 했구요
09:07
1 바이트 당 주소를 1씩 가지니까 이 모든 메모리의 주소를 다
09:11
표현하려면 10 bit 가 필요합니다
09:14
즉 내부 메모리에 접근할 때 메모리의 주소를 이용해서 접근하게 되는데
09:18
그때 10 bit 로 주소를 표현해야 된다는 소리 에요
09:22
근데 아 이스 키아 c 통신에서 메모리 주소를 표현하는 워드 어드레스가
09:27
10 bit 가 아니고 8비트 공간을 같습니다
09:31
그러면 이 8비트 만 가지고는 내부 메모리 영역을 다 표현을 못하죠
09:35
두 비트가 더 필요한데 그 두 비트를
09:38
장치 주소의 여기 두 개의 비트를 사용합니다
09:42
그래서 이 장치 주소를 표현하는 이 한다 이 테는 obt 의 장치 주소의
09:47
개념도 들어 있고 이 비트의 메모리 주소에 개념을 좀 포함하고 있어요
09:52
그리고 마지막 한 바이트 는 데이터를 읽을 건지 쓸 건질 편한 비트 구요
09:58
그래서 모든 메모리 영역에 다 접근하려면 지금 제가 설명드린 개념을 좀
10:02
확실하게 이해를 하고 계셔야 되요
10:04
이건 또 아이 스퀘어 c 통신의 개념이 랑도 연관이 돼 있어서 그걸 다
10:09
아셔야 됩니다
10:10
지금 당장은 이거 좀 안 될 수 있는데 이따가 코드 작성을 할 때 제
10:14
설명을 들으시면 확실히 이해가 되실거예요
10:18
그리고 사실 이 필요는 크게 중요한 내용은 아니니까
10:21
정 이해가 안 된다면 우선 구현 부터 따라서 하시고 천천히 하셔도 됩니다
10:27
이제 데이터 쓰기 동작의 된 설명을 드리겠습니다
10:31
저희가 사용하는 잎이 롬에 데이터를 쓰는 방식이 두가지가 있는데
10:35
하나가 바이트 단위로 쓰는거구요 다른 하나가 페이지 단위로 쓰는 겁니다
10:41
수업에서는 페이지 단위로 데이터를 쓸 거구요
10:44
이때 꼭 알아두셔야 하는게 데이터를 쓰다가 페이지를 넘어가면 다음
10:49
페이지에 이어서 써진 게 아니고 같은 페이지에 처음부터 덮어 쉬워지면서
10:54
써 저요
10:56
제가 아까 그 페이지 단위로 데이터를 쓸 때 규칙을 지키지 않으면
10:59
이상하게 동작한다고 설명된 게 있는데 그게 이겁니다
11:03
이걸 롤 오버 현상 이라고 하고 데이터 이스트의 명시가 되어 있어요
11:08
이 부분에 이렇게 명시가 되어 있죠 제가 처음에 이거 몰라서 데이터가
11:12
이상하게 써진 데 이유를 못 찾은 적이 있었는데 역시 답은 데이터 시트에
11:16
나와 있었습니다
11:18
그래서 이게 대체 무슨 현상인지 예를 좀 들어서 설명을 드리면
11:22
메모리에 0 번지 부터 19번지 까지 각각 일부터 21 1 데이터 총
11:27
20 바이트를 페이지 단위로 쓴다고 했을때 제가 이동건 이렇게 0 번지
11:32
부터 15번지 까지 데이터는 1부터 16까지 쭉 써진 후에 남은 데이터는
11:38
다음 페이지에 이어서 이렇게 써진 거였습니다
11:43
근데 영 번지는 첫 페이지의 첫 번째 유소정 페이지 쓰기 모드 니까
11:48
여기서부터 16 바이트 를 써야 되는데 20 바이트를 쓰라고 했으니까
11:52
우선 첫 16 바이트 는 0 번지 부터 15번지 까지 잘 써지고 요
11:57
그 다음 남은 4개의 마 이드가 다음 페이지에 이어서 써진 게 아니고
12:02
다시 그 페이지의 처음부터 덮어씌워 지면서 써 진단 말입니다
12:07
그래서 제가 의도한 것은 이렇게 데이터가 써진 것 같지만 실제 결과는
12:11
이렇게 된다는 소리 자 그래서 잘못하면 이렇게 의도하지 않게 동작할 수
12:16
있으니까
12:17
이걸 방지하려면 16 바이트 단위로 접근해서 쓰는게 좋구요
12:21
20 바이트를 싸야 된다면 한꺼번에 20 빠이 들쭉 쓰지 말고
12:26
0 번지 부터 15번지 까지 16 파이트를 먼저 쓰고 그 다음 다시
12:32
16번지 부터 19번지 까지 4개 바이트를 그후에 한번더 쓰는 지금 하면
12:38
됩니다
12:39
이건 좀 주의하셔야 되요 잎이 롬 할 때 가장 주의해야 되는 부분입니다
12:44
그리고 이따 코드 잘 때는 이런 현상을 방지하기 위해서 16 바이트
12:47
단위로 만 데이터 있을 거예요
12:51
이건 페이지 단위로 쓰기 동작을 할 때 sda 핀의 정기적인 시퀀스를
12:56
나타낸 그림입니다
12:57
isc 통신은 기본적으로 개념이 좀 복잡해요
13:01
장치 주소의 개념도 있고 내부 메모리 주소 개념도 있구요
13:05
읽기 랑 쓰기가 동작이 다르고 그리고 바이트 단위로 ack 라는 걸
13:11
확인하는 과정도 있습니다
13:13
그리고 원래는 이 모든 과정을 다 코드로 작성을 해 줘야 되요
13:17
예를 들어 통신 시작할 때 스터 틈 이틀을 보낸 코드를 자구 그 다음에
13:21
장치 주소랑 쓰기 인지 1기 인지를 나타내는 한 바이트를 보내고 또
13:25
ack 를 대기한 코드도 짜야 되구요
13:28
에이스 k 가 들어오면 그 다음 메모리 주소 보내고 또 hk 기다리고
13:33
이런식으로 상태 검사 하는 코드를 직접 닿아 짜야 됩니다
13:37
그래서 또 이거 다 짤려 면 아이 스퀘어 c 통신을 완벽하게 이해를 하고
13:41
있어야 되요
13:42
그리고 코드도 복잡해지고 요 이걸 l 드라이버로 작성하면 지금 말씀드린
13:46
걸 다 하나씩 직접 편해야 되는데
13:49
할 드라이버는 그걸 구현 1 함수를 제공합니다
13:53
센터가 코드 작성할 때 아이 스퀘어 씨는 할 드라이버를 사용할 거에요
13:58
우리가 기억하고 있어야 될거 는 내부 메모리 주소가 10 bit 로
14:02
표현되는데
14:03
is k 씨의 통신이 시퀀스 상 2 워드 어드레스 부분이 8bit 로
14:08
구성돼 있어서
14:09
메모리 주소에 하위 8bit 가 이 부분의 표현이 되고 상위 이 비트가
14:15
디바이스 어드레스의 1번 2번 비트 이 영역에 표현된다는 것 이게
14:20
중요합니다
14:21
그리고 좀전에 설명드린 롤 오버 현상 것도 중요하구요
14:25
그래서 이렇게 두가지를 잘 기억하고 계시면 되요
14:28
그리고 장치의 주소는 이상이 5 비트 이 부분은 고정 이라고 그랬죠
14:33
예를 들어 메모리 주소 0번째 접근하게 따 그러면
14:37
워드 어드레스시 피트가 다영이 되는거고
14:41
그중에 하위 8개 비트가 워더 드레스 2 8 bit 에 표현이 되고 상위
14:46
2개 비트가
14:47
디바이스 어드레스의 1번 2번 비트 이 부분의 표현이 된다 그랬죠
14:52
그래서 워드 어드레스는 다영이 될거고
14:55
디바이스 어드레스는 상위 5개 비트는 고정 값이 0
14:59
그 다음 두 개의 비트가 이 워 드레스의 창이 두개 비트가 여기에 편이
15:04
되고 마지막 비트는 읽기 냐 쓰긴 야동 장의 따라서 값이 바뀌는 거라서
15:09
우리는 크게 신경쓸 필요없습니다
15:11
예를 하나 더 들어 드리면 이번에 메모리 주소 250 6번지에 접근
15:16
하겠다 그러면
15:18
10bit 표현은 01 00 00 00 00 이렇게 편이 될 거고 또 이
15:23
중에 하위 8개 비트가 워드 어드레스 부분이니까
15:26
워드 어드레스는 똑같이 다영 이네요 그리고 상위 2개 비트의 값 7명
15:31
일로 바뀌었죠
15:32
그래서 이 영 일이 디바이스 어드레스의 여기 여기에 각각 들어가게 될
15:36
거고 그러면 디바이스 어드레스는 최종적으로 상호 빚은 똑 같은 값이고
15:41
그다음 2개 비트의 값이 이 두 개 값이 여기 들어간 단소리 장 마지막
15:45
비튼 역시 신경쓸 필요없습니다
15:48
이따가 할 드라이버 함수를 호출해서 잎이 롬에 데이터를 읽고 쓰는 걸 할
15:52
건데 함수의 매개변수가
15:54
디바이스 어드레스 랑 워드 어드레스가 있어요
15:57
각각 한 바이트 식으로 표현이 되고 지금 설명드린 이 두 개 값들을
16:02
함수의 매개변수로 전달 주면 됩니다
16:04
그래서 여기까지 이해가 좀 잘 되셨으면 좋겠네요
16:07
이따가 코드 작성할 때 이해가 더 잘 될 거에요 그때 다시 한번
16:11
설명드리겠습니다
16:13
이제 읽기 동작에 대해서 설명을 드릴 건데
16:16
읽기 동작은 쓰기 동작 처럼 그렇게 반드시 꼭 고려해야 되는 게 있는 건
16:20
아닙니다
16:21
물론 읽기 동작도 롤 오버 현상이 있기는 한데
16:24
쓰기 동작 처럼 페이지 단위의 롤 오버 현상이 아니고
16:28
메모리 전체 단위의 롤 오브 한 생이 있어요
16:31
즉 천 23번지 메모리에 끝까지 읽고 그 다음에 더 읽으려고 하면
16:36
메모리에 맨 처음인 0 번지 부터 데이터가 일으킵니다
16:40
이건 메모리 전체 단위의 롤 오버 현상이 라서 크게 고려할 건 아니고
16:45
근데 그냥 일기도 쓰기 처럼 페이지 단위로 16 바이트 씩 있긴 할
16:49
겁니다 통일한 게 낫죠
16:52
그래서 앞으로 잎이 롬에 데이터를 읽거나 쓸 때 다테 2g 의 첫 주소
16:57
부터 16 바이트 단위로 접근하도록 할 겁니다
17:01
역시 읽기 동작의 시퀀스 인데 저희는 할 드라이버를 쓸 거라서 이 그림이
17:05
크게 중요하지 않고요
17:07
중요한거는 메모리 주소가 총 10 bit 로 표현이 되는데 그중에 8
17:11
비트를 2 워드 어드레스 이 부분에 표현을 하고 상위 두 개의 비트를
17:16
디바이스 드레스 이 부분에 나누어서 표현한다
17:19
그게 중요한 거죠 그래서 이 그림은 넘어가겠습니다
17:24
앞에서 말씀드렸듯이 아이 스퀘어 시 통신은 할 드라이버로 작성할 거구요
17:28
일단 큐브 mx 레코드 생성할 때 하에 드라이버로 생성할 겁니다
17:32
그리고 잎이 롬 내부의 메모리에 접근할 때는 바이트 단위로 접근하게 될
17:37
텐데 내 코드를 짜다 보면 뭐 인 트 형 플롯 형처럼 여러 바이트가
17:42
하나의 정보를 담고 있는 게 있죠
17:44
그런 정보를 저장할 때는 바이트 단위로 쪼개서 저장해야 됩니다
17:48
정세운 그냥 비트 연산으로 쪼갤 수 있는데 실수 형태는 비트 연산 이
17:52
안되죠
17:53
그래서 실수 형태의 데이터를 바이트 단위로 쪼갤 때 주의하셔야 되구요
17:58
나중에 pid 개인을 ep 롬 에 저장하게 될 텐데 그때 4바이트 실수
18:03
형태를 4개 바이트로 쪼개서 저장 할 겁니다
18:06
그거는 그때되면 설명드리도록 하겠습니다

```


#### video 25
- EEPROM data

{% include youtubePlayer.html id=page.youtubeID25 %}

```diff
0:13
지난 시간에 할 드라이버를 사용해서 아이 스퀘어 c 통신으로 잎이 롬에
00:17
데이터를 읽고 쓰는 걸 설명 드려 썼구요
00:20
특히 쓰기 동작에서 롤 오버 현상이 발생하면 어떤 일이 생기는지 도
00:24
확인해 봤읍니다
00:25
2 롤 오버 현상을 방지하기 위해서 앞으로 각 페이지의 첫 번째 주소
00:29
부터 16 바이트 단위로 데이터를 읽고 쓴다 고 설명 드렸죠
00:33
이번 시간에는 ep 롬 에 데이터를 저장하고 관리하기 위한 프로토콜을
00:37
정의하고 그 프로토콜 대로 데이터를 읽고 쓰는 라이브러리 함수 질 도자기
00:42
하도록 하겠습니다
00:44
우선 지난 시간에 sta is qc 통신으로 잎이 롬 내부의 원하는
00:51
주소의 접근해서 데이터를 읽고 쓰는 걸 썼는데
00:54
아직 어떤 데이터를 어디에 어떤 순서로 저장을 지는 정의 하지 않았죠
00:59
지난 시간에는 그냥 단순하게 특정 번제 데이터를 나열하면서 저장 하는걸
01:04
한거고
01:04
이렇게 저장을 하면 대체 저장한 데이터가 무슨 데이터 고 또 어떤 의미를
01:09
갖는지 알 수가 없습니다
01:11
그래서 아무리 간단한 데이터 라도 이게 무슨 데이터 고 저장한 순서가
01:15
어떻게 되는지에 대한 약속을 해야 되요
01:18
그런걸 프로토콜 이라고 하고 이미 지난 챕터 들에서 유비 x 프로토콜이
01:23
랑 아이 퍼스 프로토콜 이런걸 했었죠 근데 그때는 이미 정해져 있는
01:27
프로토콜을 사용한 거였고
01:29
이필용 데이터를 관리하는 것은 정해져 있는 프로토콜을 사용하는 게 아니고
01:33
직접 정의해서 사용 하도록 할 겁니다
01:35
그래서 프로토콜이 라고 해서 막 거창한 게 아니고 정해진 방식대로
01:39
데이터를 주고 받거나 혹은 정상을 한다면 그런걸 다 프로토콜 이라고
01:43
합니다
01:44
이필용 데이터를 관리하기 위한 프로토콜은 크게 데이터를 인터페이스 하는
01:49
방법에 대한 정의가 있을 거구요
01:51
그리고 데이터를 어떤 순서로 저장 할 건지에 대한 저희가 있을 겁니다
01:56
2 데이터 인터페이스 는 지난 시간에 했던 아이스큐 c 통신으로
02:00
원하는 조서에 데이터를 읽고 쓰는 거라고 보시면 될 거구요
02:04
데이터 저장 하는 순서에 대한 정의는 아직 안 했죠 그래서 이번시간에는
02:08
먼저 저장할 데이터의 종류랑 저장 순서를 정해 할거구요
02:13
그리고 나중에 ep 롬 에 pid 개인을 저장 할 건데 이 개인이 잘못
02:18
저장 됐거나
02:19
엉뚱한 데이터를 읽어 왔다 던지 하면 이 개인을 가지고 비행 제어를 하게
02:24
될텐데 그 때 큰 사고가 날 수 있으니깐 데이터에 문제가 있는지 없는지를
02:28
검사하기 위한 체크섬 도장이 하도록 하겠습니다
02:33
이 프로토콜은 이필용 데이터를 관리하는 프로토 버리니까
02:36
이름을 ep 프로토콜 이라고 하겠습니다
02:40
이 프로토콜에 대해서 간단하게 요약을 하자면 먼저 아이 스퀘어 씨로
02:44
인터페이스 하고
02:45
메시지의 한 프레임 2 0 x 450 x 움 아스키 로는 대문자 잎이
02:51
이렇게 시작하고 pid 제어 개인정보가 담긴 16 바이트 길이의
02:57
ep 롬 데이터 관리 프로토콜 이라고 전하겠습니다
03:01
이건 제가 이렇게 정향 거에요 메시지의 구조는 총 16 바이트 중에 첫
03:06
2바이트 싱크 차 이렇게 되어 있는게 헤더 정보 고 값은 고정 이고요
03:11
그다음 바이트가 이 메시지의 종류를 나타내는 id 정보 입니다
03:16
그 다음부터 cb 바이트의 실제 데이터를 저장한 약이 있고 여기에 pid
03:22
개인 정보를 저장할 겁니다
03:24
마지막으로 한 바이트가 났는데 여기에 체크섬 을 저장할 거에요
03:28
이 체크 섬으로 정체 메시지 프레임 에 문제가 있다 없다를 판단할 겁니다
03:33
이렇게 해서 메시지의 단위는 총 16 바이트 가 될 거고 이건 페이지에
03:36
길이랑 갖게 한 겁니다
03:39
저희가 사용하는 ep 롬 at 이사 시공 팔에 페이지 크기가 16 바이트
03:44
젊
03:44
꼭 페이지 길이랑 갖게 해야 되는 건 아닌데
03:48
롤 오버 현상 때문에 16 바이트 단위로 읽고 쓰고 하기로 했으니까
03:52
메시지의 프레임도 그거랑 갖게 일치시킨 겁니다
03:56
그래서 봤더니 이 정의는 이전에 썼던 유비 x 난 아이 버스 프로토콜이
04:00
랑 비슷한 구조적 이해하기 편하시라고 일부러 좀 비슷하게 정이란 거고 꼭
04:05
이렇게 정의해야 되는건 아닙니다
04:08
사실 모든 프로토콜은 다정의 하기 나름이에요
04:11
그리고 저는 pid 게임 많이 필요에 자전을 건데 다른 정보를 저장
04:15
하시려면 어떤 정보를 어떤 순서로 저장을 건지를 정리하시면 됩니다
04:21
메시지의 프레임 구조에 대해서 좀더 자세히 설명 드리면 우선 첫 2바이트
04:26
는 한 프레임에 시작을 알린 헤더 정보 0
04:29
그 다음에 1 바이트의 id 정보가 있는데 이게 메시지의 종류를
04:32
의미합니다
04:33
pid 개인이 하나만 있는게 아니고 롤 피치 5 가 각각 pid 개인이
04:38
따로 있구요 또 나중에 더블 pid 제어를 할 건 된 이게 내부의 부
04:42
pid 제어가 나눠져 있고 그거 마다 개인이 달라져요
04:46
그래서 개인의 종류가 여러 개가 있어서 그 종류를 이 아이디에 나타날
04:50
겁니다
04:51
아이디는 1바이트 로 표시된 이 깐 총 256가지의 메시지로 정리할 수
04:55
있는데 실제 사용할 메시지 종류는 6개 정도가 될 것 같습니다
05:00
이 아이디에 다른 메시지 종류는 조금있다가 다시 설명드리겠습니다
05:04
그리고 그 다음부터 12 바이트 실제 개인 데이터가 나오구요
05:09
pid 가 순서대로 가정 되고 각 개인은 4byte 의 실수 형태로
05:14
저장할 겁니다
05:15
낮은 바이트가 낮은 자리 수를 가도록 리틀 nd 언 방식으로 편할겁니다
05:21
그래서 실제 데이터 영역은 16 바이트 중에 12 바이트가 되는거고
05:25
마지막 1 바이트의 체크 성을 저장하고 프레임이 끝납니다
05:29
그래서 이렇게 저장 하려고 봤더니 실제 우리가 저장을 데이터는 pid
05:33
개인 이니까
05:34
22 바이트의 정보만 필요하죠
05:37
근데 그 12 바이트를 저장하기 위해서 앞에 헤더 정보 2바이트 그리고
05:41
id 체크섬 이렇게 해서 4개 바이트를 더 저장하는 데 어떻게 보면
05:46
불필요한 근해 바이트를 같이 저장한 꼬리 장 메모리 낭비가 조금 있긴한데
05:52
그래도 이런 게 없으면 데이터 관리가 좀 어려워 져요
05:55
데이터에 에러가 있는지도 검사기 힘들고요
05:58
그래서 이렇게 16 바이트의 메시지의 프레임 단위로 관리 할 겁니다
06:04
이제 체크섬 에 대해서 설명드리겠습니다 체크섬 도 예전에 아이 퍼스
06:08
프로토콜이 랑 비슷하게 정의 있구요
06:10
그때는 체크섬 이 2바이트 했는데 이번에 한방이 들어 정 햇죠
06:14
계산도 아이 퍼스 때는 거의 동일하게 할 겁니다
06:17
우선 체크섬 개선 영역은 총 16 바이트 의 이 메시지 프레임 중에 맨
06:22
마지막이 체크섬 바이트 를 제외한 앞에 15 바이트가 되구요
06:27
0xff 에서 모든 데이터를 바이트 단위로 뺀 결과를 체크 섬으로 장애
06:33
할겁니다
06:34
빼는 과정에서 언더 플로어 가 발생하면 무시합니다
06:38
그래서 체크섬 계산 쉽죠
06:40
그리고 제가 예전에 말씀을 안 들인 게 있는데 체크섬 계산을 해서 일치
06:45
한다고 하면 그 메시지의 문제가 없을 확률이 높은 거지
06:49
100% 이 메시지는 문제가 없다고 할 순 없어요
06:52
그렇다고 해서 체크 썸을 안 두면 아예 문제가 있는지 없는지 검출을 할
06:57
수가 없습니다 그래서 이렇게 한 바이트 라도 꼭 체크 섬을 넣어주는게
07:02
좋습니다
07:03
당연히 체크섬 의 바이트 수가 많으면 데이터에 문제가 없을 확률이
07:06
높아지겠죠
07:08
id 에 따른 메시지 종류는 이 표처럼 정해 할 겁니다
07:12
우선 제 수업에서 사용할 pid 제어 방식에 대해서 간단히 설명을 좀
07:16
드려야 될 것 같은데
07:18
제 수업에 최종 비행 방식은 수동 조정 방식이 될 거구요
07:21
조종기 로 드론의 각도를 제안은 방식의 될 겁니다 이걸 앵글 모두 라고
07:26
하죠
07:27
물이랑 피치에 제가 방식은 더블 pid 방식이 될 거고 이 더블 pd 는
07:32
급격하게 변하는 걸 제가 해야 될 때 유리한 방식입니다
07:35
떠블 pid 는 회전 각도를 제어 하는 방식이고
07:40
각 속도를 제어하는 방식이 있는데 이 두 개가 합쳐진 형태가 더블 pid
07:45
방식이에요
07:46
이때 각도 제어가 외부 pid 가 되고 각 속도 제어가 내부 pid 가
07:51
되는 식이고
07:52
그래서 내부의 부가 각각 다른 pad 개인이 필요합니다
07:56
id 0 번이 올해 내부 pid 개인정보가 되고 ide 롤의 외부 pid
08:03
개인 정보가 될겁니다
08:04
그리고 id 2번 3번이 각각 피치에 내부의 브 pid 개인 정보가 될
08:09
거구요
08:10
그리고요 제어 방식은 물 피츠 량 좀 다른데
08:13
요는 롤 피치 처럼 급격하게 제어 해야 되는게 아니라서
08:17
싱글 pid 제어 방식을 쓸 거구요 근데 싱글 pig 도 두 가지 방식을
08:21
혼용해서 사용하는 데
08:23
하나가 헤딩 방향을 제어하는 방식 이곳도 하나가 헤딩 회전속도를 제어하는
08:29
방식이 있습니다
08:30
이건 조종기 의 조작 상태에 따라서 요 스틱이 중간에 놓여 있을 경우는
08:35
현재 헤딩 방향을 목표로 하는 헤딩 죄가 될 거구요
08:40
요 스틱이 중간이 아닐 경우는 회전속도를 목표라는 각속도 제어가 될겁니다
08:46
그래서 헤딩 제 10항 회전 속도 제어가 각각 다르구요
08:49
id 4번이 헤딩 제의 pid 개인 정보 9
08:53
id 5번이 회전 속도 제어의 개인 정보가 될겁니다
08:57
지금은 아직 제어가 안 들어가서 뭔가 좀 복잡해 보이는데 자세한 설명은
09:01
맨 마지막에 제어 파트에 들어가면 드릴 거구요
09:04
지금은 이렇게 id 에 따라서 저장되는 개인의 종류가 다르구나 정도만
09:09
알고 계시면 됩니다
09:10
그리고 아이디랑 페이지 번호가 숫자 같은데 이건 무슨 말이냐면
09:15
0번 아이디에 정보는 잎이 롬에 0번 페이지
09:19
즉 ep 로맨 0 번지 부터 15번지 까지 데이터를 저장 한다는 것을
09:24
의미합니다
09:25
그래서 이 표가 꽤 중요하니까 이 정의를 잘 기억해 2시기 바랍니다
09:31
그래서 이 jp 롬에 개인 정보들을 저장하면 이런식이 되겠죠
09:35
0 번지 에서부터 15번지 까지는 모래 내부 pid 개인 정보를 저장할
09:40
건데
09:41
첫 2바이트 는 메시지의 종류에 상관없이 0 x 450 x 502 될
09:45
거고 그 다음 id 는 0 이구요
09:49
그 후부터 각각 4byte 씩 피게 인 아 이게 인 디 개인을 저장한
09:53
후에 맨 마지막에 체크섬 을 찾아낼 겁니다
09:57
그래서 저장은 이렇게 할 거고 그 후에 데이터를 읽어들일 때 우선 0
10:01
번지 에서부터 16 바이트의 데이터를 읽어 온 후에
10:05
앞에 15 바이트 를 이용해서 체크섬 계산 하구요
10:08
그 계산된 결과 랑 마지막 바이트가 일치하는지 확인합니다
10:13
그게 일치한다면 메시지의 문제가 없다고 판단하고
10:17
이 pid 개인들을 파싱해서 원하는 변수에 저장 하면 되겠죠
10:21
그래서 이제 이것들을 코드로 직접 구현해 볼 거고
10:24
예전에 했던 유비 x 나이 퍼스 프로토콜 파싱 코드 한 거랑 비슷한
10:28
구조로 함수들을 정리할 겁니다
10:30
그럼 이 강의의 맨 마지막에는 잎이 롬에 개인들이 저장되어 있겠죠 그러면
10:35
드론의 전원이 들어가면 메인 와 1 문이 시작되기 전에 하드웨어 초기화
10:40
같은걸 하고
10:42
조종기 연결 상태 검사 같은걸 한 후에 마지막으로 ep 롬 에서 개인
10:47
정보를 읽어와서 실제 제어하는데 그 값들을 사용하면 될 겁니다 그러면
10:51
설명은 이렇게 마치고 소스 코드 작업으로 넘어가겠습니다

```


#### video 26

{% include youtubePlayer.html id=page.youtubeID26 %}

```diff
00:13
지난 시간에 2시간에 걸쳐서 at 이사시 불발에 우리 가정이 하니 p
00:18
프로토콜 대로 kid 개인을 읽고 쓰는 방법에 대해서 설명드렸습니다
00:22
그래서 앞으로는 우리가 정향 2 함 속 잎이 pid 개인 라이트 랑 미드
00:27
함수를 사용해서 이필용 데이터를 관리할 거구요
00:31
각각의 함수가 서행 되는데 걸리는 시간을 측정해 봤더니 쓰기 음수가
00:35
2mm 색 정도 걸렸구요
00:37
읽기 함수는 440 마이크로 색 정도 걸렸습니다
00:41
임 1 2 3 이렇게 걸린 것은 엄청 많은 시간이 걸린 건데 사실 그
00:45
중에 1.5 밀샙 정도는
00:47
이 함수 내부에서 딜레이 함수 호출 했는데 그 딜레이 함수가 소모하는
00:51
거고
00:52
실제로 통신 하는데 걸리는 시간은 읽기 나 쓰기 나 둘다 400 에서
00:57
500 마이크로 생 정도가 걸립니다
00:59
근데 이거 자체만으로도 엄청 긴 즉 아니죠
01:02
저희는 첫 마이크로 세관에 모든 기능들이 다 동작해야 되는데
01:06
2mm 3 이렇게 걸리면 1킬로 헤르츠 로 제어가 불가능 해집니다
01:10
근데 이 타임 라인에 있는 이 기능들은 들어오니 비행할 때 수행되는
01:15
것들이고
01:16
이 필요에 pid 개인을 읽고 쓰는 것은 들어오니 비행 하지 않을 때 할
01:21
거라서 사실은 이 타임라인에 는 아무 영향을 미치지 않습니다
01:27
이번 시간에는 adc 를 이용해서 배터리 전압을 측정하고
01:30
배터리 전압이 얼마 이하로 낮아지면 알람이 울리도록 구현해 보겠습니다
01:36
이제 파워서플라이 로 들어온 애정 넣어줄 거에요
01:38
아직은 전환 넣은 상태고 그리고 fc 는 이 bc 로 입력된 전압을
01:43
adc 를 해서 그 결과를 유 어 트 로 출력하게 한 상태입니다
01:47
그럼 번져 넓혀 보겠읍니다
01:51
전화 켰고 터미널 창을 보시면 두 종류의 숫자가 출력이 되고 있는데 왼쪽
01:57
숫자 3160 점도 출력된 숫자가 adc 를 한 결과 구요
02:02
오른쪽 숫자가 그 adc 결과를 전압으로 변한 겁니다
02:06
단위는 볼트 구요 그래서 지금 파워서플라이는 11.4 볼트를 공급해 주고
02:11
있는데 오른쪽 숫자 를 보시는 11.4 345 이렇게 왔다갔다 하고 있죠
02:17
벌초 오차가 좀 있긴 하지만 잘 측정이 되고 있습니다
02:21
전압을 조금 바꿔보면 조금 높였던 2
02:24
파워서플라이는 12.3 볼트를 공급해 주고 있구요
02:28
그리고 측정된 정합 은 12.3 에서 12.3 이 일을 왔다고 타고
02:33
있네요
02:34
역시 살 출력이 되고 있습니다 그리고 지금 코드는 전압이 10 볼트
02:37
밑으로 떨어지면 구조가 울리게 해 놓은 상태입니다
02:41
그래서 전압을 10 볼트 bit 로 낮춰 떵 2
02:45
이렇게 9.3 볼트를 입력했더니 부저가 올리면서 또 전업 측정은 9.23
02:52
이사 이렇게 잘 측정이 되고 있습니다
02:55
다시 생업을 높이는 10 볼트 이상되면 부저가 거 지구요
03:00
10 볼트 이하로 떨어지면 부저가 올리도록 설정했습니다
03:04
지금 9.9 골드 되니까 부족 어울리죠
03:08
저희는 3셀 배터리를 사용할 건데
03:10
2 3 3 배터리 기준으로 10 볼트 정도로 전압이 떨어지면 배터리를 뭐
03:14
쓰게 될 수 있기 때문에 이렇게 알람을 통해서 배터리의 전압 상태를 알
03:19
수 있도록 할 겁니다
03:21
배터리 전압은 stm 에 adc 기능을 사용해서 측정을 겁니다
03:25
edc 를 통해서 측정된 결과가 전압 땅위로 나오면 편한 된
03:30
그렇게 나오지 않죠 그래서 측정된 값을 가지고 전압을 역으로 계산 해
03:34
줘야 되요
03:35
그때 vref 라고 하는 기준 전압이 랑
03:39
adc 의 레졸루션 의 개념이 나오고요 stm 의 경우는 기준 전압은
03:44
3.3 볼트 까지 입력할 수 있고 이번 외부에서 vref 핀의 넣어주는
03:49
전화 비고
03:50
강의에서 사용하는 fc 에는 3.3 볼트가 입력되어 있습니다
03:54
그러면 0 볼트 부터 이기준 전 앞까지 adc 를 입력 받을 수 있구요
03:59
그리고 adc 레졸루션 은 이 기준 전압을 몇 단계로 나눠서 측정을
04:04
건지에 대한 비트 해상도 라고 보시면 되구요
04:07
stm32 f4 는 adc 레졸루션 을 6 비틀 8비트 cp 트
04:13
12bit 중에 하나를 선택해서 사용할 수 있게 되고 그 중에서 있는
04:17
12 bit 를 사용할 겁니다 이건 큐브 mx 에서 선택할 거예요 그러면
04:22
측정된 디지털 값에 범위는 0부터 4095 사이가 되겠죠
04:27
그래서 이 측정된 값을 전업으로 계산하는 것은 이해를 보시면
04:32
adc 의 결과가 1502 나왔을 때 이 값의
04:37
0.008 06 을 곱해 주면 됩니다
04:40
그러면 환산하면 전화번호는 1.2 공고 볼트가 되겠죠
04:45
그리고 stm adc 는 컨티뉴 s 모드를 지원 하구요
04:49
또 dma 모드도 지원합니다 저희는 이 두 모드를 달 사용 할 거고 이
04:53
두 가지에 대해서는 조금 있다가 설명드리겠습니다
04:57
배터리 전압은 3세의 기준으로 9.6 볼트 에서 12.6 볼트 사이가 될
05:02
텐데 이건 바로 adc 를 하기엔 전압이 너무 높아서
05:06
전업을 낮추기 위해서 이런 회로가 fc 에 들어 있습니다
05:10
이 회로는 배터리 전압을 체크 하기 위한 가장 간단한 회로 구요
05:14
이 왼쪽 부분을 보시면 전압을 낮춰 주는 전업 분배 회로가 있고 그게
05:19
버퍼 헤 로랑 로 패스 필터를 거쳐서 stn adc 로 입력됩니다
05:25
이 전화 분배 회로를 보시면 전화 분대 법칙에 따라서 이 부분에 전압이
05:29
배터리 전압의 4.49 분의 1로 낮아지고 요
05:34
버퍼에 로랑 로 베스 필터는 전화 비랑 상관이 없어서 그 전화 best
05:39
mad c 로 들어가게 됩니다
05:41
그래서 배터리가 최소 부 점 6 볼트 1대 2 4.49 분의 1로 낮아진
05:46
전압은 2.13 8 볼트 정도 되고 이걸 adc 하면 결과는 2654
05:53
정도가 될 겁니다
05:54
그리고 배터리가 최대 12.6 볼트 일대 낮아진 장합은 2.8 06
06:00
볼트가 되고 또 옛 2시 결과는 3482 정도가 될 겁니다
06:06
그래서 또 예로 이 회로를 거친 전압을 adc 햇더니 결과가 3002
06:12
나왔다면 아까 그 식에 의해서
06:14
전압은 2.41 8 볼트가 될거구요
06:18
이건 전업 분배로 낮아진 전압이 니까 이걸 다시 배터리 전압 으로
06:22
계산하려면 여기에 4점 사고 를 곱해 주면 되겠죠
06:26
그러면 배터리 전압은 10점 857 볼트가 될겁니다
06:31
그래서 계산하려면 이런 과정들이 필요한 된
06:33
이걸 다 계산하면 최종적으로는 adc 의 결과에 0.003 619 를
06:40
곱해 주면 되요
06:41
이 3천에 0.003 619 를 곱해 주면 10.8 5 7이 나오자
06:47
그래서 읽다가 이 식대로 실제 배터리 전압을 계산 할 겁니다
06:52
그리고 이 회로는 3셀 배터리 기준으로 만들어진 거고
06:55
4 셀 이상부터는 범위가 넘어가서 측정할 수가 없구요
06:59
그리고 배터리 셀 당 전압이 3.2 볼트 이하로 내려가면 배터리를 못
07:04
쓰게 될 수도 있습니다
07:06
근데 저희는 3당 전압을 측정한 게 아니고 정체 전압을 측정한 거라서 3
07:10
세리 니깐 10 볼트 이하로 내려가면 배터리를 충전해 주는 게 좋아요
07:15
그정도로 전압이 떨어지면 전압이 떨어지는 속도도 엄청 빨라 지니까 주위를
07:19
좀 하셔야 됩니다
07:20
저흰 아까 쉬운 때처럼 10불 디아로 떨어지면 부저를 올려서 상태를 알
07:25
수 있도록 구현 할 겁니다
07:28
이제 dma 에 대해서 간단히 설명드리겠습니다
07:31
dma 는 다이렉트 메모리 엑세스 의 약자 고용
07:35
어떤 메모리에 저장되어 있는 값을 다른 데다 복사할 때 cpu 가
07:38
개입하지 않고 자동으로 복사 하는 기능이라고 보시면 되고
07:42
그래서 dma 는 잘만 쓰면 cpu 에 부담을 확 줄일 수도 있는 기능이
07:46
랑 엄청 좋은 기능중 하나입니다
07:49
그래서 예를 들면 이런건데 이번 시간에 우리가 이렇게 adc 의 결과를
07:53
이용해서 배터리 전압을 측정한 건데 그러면 이 adc 결과를 먼저 변수에
07:59
저장을 해야겠죠
08:00
그럼 그 변수에 저장하는 코드를 작성해야 될 거고 그게 실행이 되는
08:05
시점은 그 변수에 저장이 될 겁니다
08:08
4 dma 를 사용하면 저장하는 코드를 작성하지 않아도 자동으로 그
08:12
변수에 저장이 되게 할 수 있어요
08:15
물론 어떤 데이터를 어디다가 저장 할 지에 대한 초기 설정이 필요하긴
08:18
한데 한번만 초기 설정을 해놓으면 그 다음부터는 데이터가 자동으로
08:23
복사됩니다
08:24
stm32 투사의 dma 는 3가지 전송 모드가 있는데 테리 페럴 투
08:29
메모리 메모리 2 페리 폐를
08:32
메모리 투 메모리 이렇게 있구요 여기서 페리 페러 른 adc 모아이
08:37
스퀘어 ceo 트
08:39
이런 칩 내부 기능들을 페리페라 으려고 하구요
08:42
메모리는 우리가 선언한 변수 들 이라고 보시면 됩니다
08:46
그래서 adc 의 결과를 변수에 저장 해야 되니까 페리 패럴 투 메모리
08:50
모델 생활 거구요
08:52
전송이 완료되면 전송 완료 인터럽트 요청 할 수 있는데 그건 사용하지
08:56
않을 겁니다
08:57
그리고 dma 마당 스트림과 채널이 여러개가 있는데 이 스트림 이랑
09:02
채널마다 지정할 수 있는 페리 페러 리 정해져 있습니다
09:06
그럼 데이터 시트를 보시면 나와 있구요 그것까지는 설명드리지 않겠습니다
09:11
그래서 간단하게 블럭으로 좀 나타내 보면 st mfa 이런 회로 들이
09:16
있구요
09:17
배터리 전압이 이 전화 분 맵의 로랑 버퍼로
09:21
그리고 로 패스 필터를 거쳐서 stm 에 adc 입력 핀으로 들어갑니다
09:27
그러면 stm 내부에서는 adc 변화를 하고 그게 끝나면 그 결과가
09:32
adc dr 이라고 하는 데이터 레지스터 의 먼저 장이 되고 그 값을
09:37
우리가 원하는 변수 adc 밸리 5 라는 변수에 저장 하려면
09:42
dma 모드를 사용하지 않을때는 이렇게 코드를 작성해 줘야 겠죠
09:46
그러면 실제 복사가 되는 시점은 cpu 가 이 코드를 수행하는 시점이
09:51
됩니다
09:52
즉시 필요가 복사의 개입을 하는 거죠
09:55
근데 이걸 dma 를 사용하게 되면 먼저 dma 초기 설정할 때 어떤
10:00
데이터를 어디다가 몇 바이트 복사 할 건지를 설정한 게 있어요
10:04
그래서 adc 데이터 레지스터 있는 값을
10:07
우리가 선언한 변수인 adc 밸류 이 변수에 복사 해라 라고 초기 설정을
10:12
해놓으면 그 다음부터 adc 변환이 완료되면 자동으로 이 dma 컨트롤러
10:18
가 그 값을 이 변소에 복사해 줍니다
10:22
아까처럼 복사하는 코드를 수행하는 게 아니고
10:24
dma 컨트롤러 가 자동으로 복사를 해 주니까 cpu 는 아예 복사의
10:29
개입하지 않고 그 동안 다른 일을 할 수 있게 되는 거죠 그래서 그만큼
10:33
cpu 에 효율이 좋아지는 효과가 있는 겁니다
10:36
그래서 이 dma 는 대량의 데이터를 복사할 때 종회 이고 사실 adc
10:41
1 변환해서 저장하는 건 큰 효과는 없어요 그래서 dma 를 안 써도
10:46
되긴 하는데 그래서 이 개념을 잘 알고 있으면 다른데 에다가 도서 먹을
10:50
수 있을 테니깐 강의에서도 한번 써 보는 거구요
10:54
그래서 tma 개념은 잘 잡아 주시는게 좋습니다
10:57
adc 랑 dma 에 기능이 잘 이해가 안되시는 분들은
11:00
stm32 따라하기 강조해 ad cdma 부분을 보시면 그림으로 잘
11:05
설명되어 있으니까 그걸 한번 보시길 추천드립니다
11:09
괴로운 엄청 간단해서 아까 앞에서 설명 다 드렸구요
11:13
adc 입력 은비 포트 0 범피 늘 사용하구요
11:16
adc x 의 8번 입력 이렇게 돼 있는데 여기서 ex 는 adc 의
11:22
번호를 의미합니다
11:23
stm32 부산은 adc 123 이렇게 3개가 있구요
11:28
그중에 저희는 1번을 사용할 겁니다
11:31
이제 큐브 mx 로 이대로 adc 랑 dma 를 설정하고 실제 코드도
11:36
작성해 보도록 하겠습니다
11:37
그럼 소스 코드 작업으로 넘어가겠습니다

```


#### video 27
- ch7-4 bno080 calibration

{% include youtubePlayer.html id=page.youtubeID27 %}

```diff
00:13
지난 시간에 배터리 전압을 체크 하고 저전압 알람을 울리는 것 까지 9
00:17
해봤죠
00:18
이제 자세 제어에 사용되는 센서가
00:21
bn 5080 이랑 icm 2060 이 이렇게 두개가 있는데 이 두 개의
00:26
센서를 수평으로 가만히 놔두면 비누 080 의 롤 피치 각도가 0이
00:31
나와야 되고요 또 ic 에 미국 602
00:34
자이로 값도 0이 나와야 됩니다 그런데 어떤 센서들은 영이 나오지 않는
00:38
경우가 있어요
00:39
그래서 그때 센서를 보정하는 방법 에 대해서 설명을 드리도록 하겠습니다
00:44
먼저 이번 시간에는 bn 5080 센서를 캘리브레이션 하는 방법에 대해서
00:48
설명 드릴 거구요
00:50
원래는 이 내용은 따로 설명을 안 들이고 그냥 넘어갈까 있었는데
00:53
근데 가끔 똑같은 센서 라도 센서 값이 차이가 좀 큰 경우가 있었어요
00:58
예전에 제가 확인해 본 것 중에 팔도 정도의 오차가 있는 경우도 있었는데
01:02
이 정도 차는 비행하는 데 영향을 좀 많이 미치는 수준이어서 따로
01:07
캘리브레이션 하는 방법을 설명 드린 게 낫다고 판단해서 이 영상을 찍는
01:10
거구요
01:12
그래서 본영 상대로 캘리브레이션을 하기 전에 먼저 fc 를 평평한 곳에
01:16
놔둔 채로 롤 피치 각도가 몇 도가 나오는지 확인을 해보시구요
01:21
또 요추 각도는 바닥에 놓고 90도 단위로 회전을 해 보시면서
01:26
각동 안살 나오는지 부터 확인을 해보시기 바랍니다
01:29
롤 피치 오차 가 일도 미만이고 유축 또 잘 나온다는 굳이 캘리브레이션을
01:34
해줄 필요는 없어요
01:36
4 주변 환경이 바뀌면 출력되는 각도도 좀 바뀔 수도 있기 때문에
01:40
그땐 캘리브레이션을 해주는게 좋습니다 그래서 이번 시간에는 bn 5080
01:45
캘리브레이션을 하는 코드를 작성할 하구요
01:48
예전에 esc 캘리브레이션 할 때처럼 조종기 의 스위치를 이용해서
01:52
캘리브레이션 모드로 진입할 수 있도록 할 겁니다
01:55
그래서 실로 에서도 pc 없이 들어온 이랑 조종기 만 있으면 그 자리에서
02:00
바로 캘리브레이션을 할 수 있도록 구현 할 겁니다
02:04
저는 썩 준비하면서 제 fc 에 비해 노 080 캘리브레이션을 먼저 해
02:08
놓구요
02:09
캘리브레이션 하기 전이랑 후에 센서 값을 미리 촬영을 좀 해 놨습니다
02:14
그래서 지금 보시는 이 영상이 캘리브레이션을 하기 전에 센서 값을 출력해
02:18
본 거고 빨간색 그래프가 피치 각도 그냥 파란색 1호 로 바꿉니다
02:22
단위는 도 다닙니다 지금 평평한 책상 위에 올려 놓은 상태인데 이
02:27
보시다시피 이 파란색 롤 각도가 약간 오차가 꽤 있죠
02:32
1.6 또 1.7 도 이렇게 출력이 되고 있습니다
02:36
그래서 이 상태에서 캘리브레이션을 하고 다시 출력을 해봤더니
02:40
지금 이 영상이 캘리브레이션을 한 후에 영상이고
02:44
오차가 둘다 0.5 2 비만으로 줄었죠
02:47
제거 같은 경우는 캘리브레이션 하기 전에도 오차가 이도 밖에 안돼서 5차
02:51
그렇게 큰 편은 아니었는데
02:53
그래서 캘리브레이션 했더니 둘다 0.5 2 미만으로 차가 줄었습니다
02:58
수업 따라 하시는 분들중에 오차가 삶도 보다 큰 경우가 있을 수도 있어요
03:02
그 분들은 이 수업을 듣고 캘리브레이션을 해주는게 좋겠죠
03:06
그래서 이번 시간에는 영상처럼 캘리브레이션을 하고 나서 캘리브레이션 전
03:11
후에 센서 값을 비교해 볼 겁니다
03:14
우선 피해도 080 은 센서 내부의 구축 센서를 1 코어 텍스 m0
03:19
마이크로 컨트롤러가 포함되어 있다고 설명되어 썼구요
03:22
그래서 이 센서가 자체적으로 센서 의회 전량을 쿼터 년으로 계산해서
03:27
출력을 해 줬어 짜
03:28
즉 센서는 펌웨어가 들어가 있는데 이 펌웨어 기능 중에 이렇게 각도를
03:32
출력해 주는 기능이 있는 거고 또 센서를 캘리브레이션 하는 기능도 들어
03:36
있습니다
03:37
그래서 저희가 1건은 센서에 다가 캘리브레이션 모드 를 켜라 라는
03:41
명령어를 전달 해 주면
03:43
센서가 캘리브레이션 모드로 진입을 하고요 그 다음에 저희는 실제 fc 를
03:47
회전시키면서 캘리브레이션을 수행을 하고 그게 다 끝나면 다시
03:51
캘리브레이션을 종로 해라 라는 명령어를 또 센서에 전달 해 주면 센서는
03:56
이제 캘리브레이션을 종료하고
03:58
그 캘리브레이션 한 결과를 자체 플래시의 저장합니다
04:02
그래서 주변 환경이 바뀌지 않는 캘리브레이션 은 한번 해주면 다시 할
04:06
필요가 없을 거에요 그래서 오늘 우리가 할 것은 이런 명령어들을 센서에
04:09
전달해주는 겁니다
04:11
이 센서가 캘리브레이션을 쉽게 할 수 있도록 이런 기능들을 제공해 주는
04:14
거죠 그래서 이런 것들을 보면 이 센서가 여러모로 쓰기가 좀 편한 생성
04:18
것 같습니다
04:19
센서가 좀 비싼 편인데 그 비싼 만큼 값을 하는 것 같아요
04:24
이빈 5080 은 캘리브레이션 하는 방법에 대한 문서를 따로 제공해 주고
04:28
요
04:29
천 다시 4044 이게 문서번호 고 주인 1점이 가 이 문서의 버전입니다
04:36
그래서 이건 구글링 해보시면 찾을 수 있구요 제 강의자료 있는 이
04:39
설명들은 다 이 문서에서 따운 거고
04:42
중요한 내용에 대해서는 좀 짚고 넘어가도록 하겠습니다 먼저 캘리브레이션
04:47
소개에 대한 내용이 나오는데 이건 크게 중요한 건 아니니까 넘어가도록
04:50
하겠습니다
04:53
이 내용은 마그네 토 m 자기장 센서를 사용하는 로테이션 벡터 같은
04:58
경우는 캘리브레이션 이 중요하다
05:00
이런 내용이고 저희는 로테이션 벡터를 사용하니깐 이 내용은 좀 받아야
05:04
겠죠
05:05
그리고 밑에 있는 이 내용은 마그니토 m 캘리브레이션을 할 때 주변에
05:10
배터리는 스피커 같이 자기장을 발생시키는 장치가 있으면 그 환경에 맞춰서
05:14
캘리브레이션 이 되니깐
05:16
이 센서를 동작하는 환경이 바뀐다면 그 환경에 맞춰서 캘리브레이션을 다시
05:21
해주는게 좋다
05:22
그런 내용입니다 우리는 들어오는 밖에서 날리게 될 텐데
05:25
바뀌다 보니까 주변에 자기장이 크게 발생되는 장치가 있을 일이 별로
05:30
없겠죠
05:31
그래서 밖에서 캘리브레이션을 한번 해 두면 그 다음부터는 유 축 회전
05:36
각도 출력이 이상해질 일도 별로 없을 거에요
05:40
그리고 이 내용은 캘리브레이션을 할 때는 높은 자기장이 발생할 수 있는
05:45
금속제 가구나 pc 이런 것들이 랑 좀 떨어진 곳에서 수행하는 게
05:49
이상적이다 이런 말이구요
05:51
이 가이드라인을 안지키면 주변에 환경적인 그런 간석 뜰을 보상하는 요소가
05:57
같이 저장된다
05:59
이런 말도 있습니다
06:01
앞에 나온 내용들은 캘리브레이션 할 때 주변 환경의 주의해라 그런
06:05
내용이었고
06:06
지금 나오는 내용부터 가 실제 캘리브레이션을 하는 방법 이라서 좀
06:09
중요합니다
06:11
먼저 캘리브레이션을 준비를 해야되는데
06:14
가속도 랑 사이로 그리고 자기장 센서 에 다이나믹한 레이 션 모두 를
06:18
활성화 시키고 요 그리고 게임 로테이션 벡터 출력을 활성화 시키고
06:25
마지막으로 자기장 센서 의 출력을 활성화 시키려고 했습니다
06:29
이건 이 기능들을 활성화 시키는 함수가 정의가 되어 있어요
06:32
그래서 흔히 각각의 기능들을 활성화 시킨 함수를 호출하면 됩니다
06:36
코드로 짜면 되요 그리고 자기장 센서 출력 을 활성화시키면 이 맨
06:41
밑부분에 이상명
06:43
그 후부터 상태 비트 값이 같이 받아 지는데 그 값이 영웅 부터 삶
06:48
사이의 값을 가지고 요
06:50
0이면 신뢰할 수 없는 같이 고 3이면 정확도가 가장 높은 상태라는 걸
06:55
나타냅니다
06:57
굉장히 캘리브레이션 과정에 대한 설명이 나오구요
07:00
캘리브레이션 순서는 가속도 자이로 자기장 센서 순으로 진행합니다
07:06
먼저 1번 이 센서를 자기장이 없는 환경에 위치 시키라고 되있구요
07:11
이번은 그 좀전에 0부터 342 까지 의 값을 갖는 그 상태 비트를 관찰
07:17
하라고 되어 있습니다
07:18
그래서 이거를 확인 하려면 상태 비트를 계속 출력해서 봐야 되어 그
07:22
코드도 작성을 할 꺼구요
07:24
그리고 3번 부터가 이제 실제 가속도 센서 캘리브레이션을 진행하는 거구요
07:29
우선 이 센서가 이렇게 정육면체 안에 있다고 가정합니다
07:34
그 다음에 이 그림들 처럼 센서를 회전시키면서 각 면을 바닥에 놓은 채로
07:40
1초 동안 기다리고 요
07:42
이렇게 놓은 채로 1조 기다리고 90도로 돌려서 이렇게도 문제로도 1초
07:46
기다리고
07:47
이렇게 코일 쳐 기다리고 이걸 모든 6 면을 반복합니다
07:52
네꼬 꺄 선 면을 다 할 필요는 없고 4개에서 5면 정도만 해도
07:56
충분하다고 되어있구요
07:57
또 정확히 이렇게 수직으로 할 필요는 없다고 되어 있습니다
08:01
그리고 회전하는 순서도 상관이 없구요
08:04
근데 이왕 하는거 6 면을 다 하는게 좋을거 같고 가능하면 또 정확히
08:09
90도 단위로 회전하는 게 좋겠죠
08:11
그래서 이렇게 가 가속도 센서 캘리브레이션 하는 방법입니다
08:16
그다음 자이로 센서가 엘리베이션 아는 건데 이건 움직이면 사는게 아니고
08:20
그냥 책상에 가만히 가든 제로 한 이 삼 초를 기다리면 됩니다
08:25
자유로 센서에 이게 끝이구요
08:27
이제 마지막으로 자기장 생선은 롤 피치 오이 3개 축을 각 층마다
08:33
180도를 회전하고 다시 원래 자리로 돌아 와라 이렇게 되어 있는데
08:37
그냥 360도 회전 시키면 되요 그래서 올 죽을 360도 회전 시키고
08:42
다시 피치 360도 유축 360도 이렇게 회전 시키면 됩니다
08:47
회전 속도는 축 땅 2초 정도가 적당한데
08:50
완벽하게 그 속도에 맞출 필요는 없다고 되어 있습니다
08:54
너무 빠르게 만한 돌리면 되요 그리고 회전하면서 아까 그 상태 비트를
08:59
확인하면서 값이 이나 3이 나올 때까지 반복하라 고 되어 있습니다
09:04
역시 상태 비트를 확인한 코드를 작성할 거에요
09:08
그래서 이렇게 센서를 회전시키고 그러는 동안에 센서 내부에서 캘리브레이션
09:13
이 수행이 되는 거구요
09:15
이 과정들이 끝나면 마지막으로 2 세이브 dcd 나우 라는 명령어를
09:19
센서에 보내면 그 캘리브레이션 안 결과가 센서 내부 플래시 에 저장된다
09:24
고 되어 있습니다
09:25
플래쉬 에 저장을 하니까 플래시는 b 발성 메모리 니까
09:30
한 번 캘리브레이션을 하면 다시 할 필요는 없는 거죠
09:35
그리고 센서를 구동하는 환경이 바뀌면 그 때마다 해주는게 좋다고 되어
09:39
있는데
09:39
그렇게까지 자주 해 줄 필요는 없을 것 같고 한번 캘리브레이션을 해서
09:44
들어오니 잘 달면 그 다음부터는 안 해줘도 될 겁니다
09:47
근데 살 날다가 다른데서 달렸더니 좀 이상하게 난다 그러면 그때 또
09:51
해주면 되겠죠
09:53
그래서 밖에서도 쉽게 캘리브레이션을 할 수 있도록 조종기 의 스위치를
09:57
이용해서 캘리브레이션 모드로 진입한 으로 구현 할 겁니다
10:01
이제 코드를 작성할 건데 캘리브레이션 모드로 진입하고 캘리브레이션 하는
10:06
동안 상태 비트 출력하고
10:08
또 끝나면 결과 저장하고 하는 코드를 직접 다 작성하려면 시간이 좀 걸릴
10:12
것 같아서
10:13
제기 터 베이 캘리브레이션 하는 코드를 함수로 만들어서 올려 놨습니다
10:18
그래서 직접 작성하지 않고 중요한 코드도 아니니깐
10:22
이 라이브러리를 다운받아서 사용 하도록 하겠습니다 먼저 웹브라우저를
10:27
하시구요
10:28
자 이 주소로 들어오면 이렇게 하면 이틀 건데
10:32
비해도 080 stm32 f4 이걸로 들어 오시구요
10:37
여기 들어오시면 원래 비해서 080 씨랑 쿼터 니 1c 이렇게 4개
10:41
파일만 있었는데 지금 어저께 3가 이걸 올렸는데 이 파일을 먼저 다운로드
10:46
받으세요
10:48
그리고 이 캘리브레이션 하는 예제가 아두이노 로 된 예제가 있는데 그게
10:53
스파크 퍼 4 공개가 되어 있구요 저는 그 예제를 참고해서 4 제 강의의
10:57
맞게 약간 수정해서
11:00
그 함수를 정의해서 에게 올려 놓은거 고 원본을 보실 분들은 여기에
11:04
들어가서 한번 보시면 됩니다
11:06
이그잼 플 9번을 보시면 캘리브레이션 하는 예제가 들어 있어요
11:10
그래서 이거 원본 보실 분들 한번 보시구요
11:14
이게 예전에 드론 의 전원을 넣을 때
11:17
스위치의 씨의 상태에 따라서 진입 모드를 선택할 수 있게 모두들 9분해
11:21
놓은 플로 차트 구요
11:23
실제 시를 위로 올린 채로 시작하면
11:26
모드들을 들어가지 않고 바로 기본 모드로 들어가게 낮고
11:29
밑으로 내리고 시작하면 esc 캘리브레이션 모드로 진입하게 낫죠
11:34
근데 이 스위치 씨가 3단 스위치 라서
11:37
아직 중 다닐 때 뭘 할 지에 대해서 안정 했는데 그때 비해 노 금발 0
11:42
캘리브레이션 모드로 진입하고 록 하겠습니다
11:45
그래서 이게 그렇게 구현 했을 때 플로우차트 구요
11:49
간단하게 설명을 좀 드리면 먼저 들어온 에 전원을 넣으면 테리 페럴 이랑
11:53
센서를 초기화를 하구요
11:55
그 다음에 조종기 가 연결될 때까지 계속 되게 하고
11:59
조종기 가 연결 됐다면 스위치 씨의 상태를 확인하는데
12:03
3rd 씨가 맨 위로 올라가 있을 때 그때 값은 천 이고 그 때는
12:07
캘리브레이션을 안하고 그냥 바로 밑으로 내려오고 요
12:10
쉴즈 씨가 이번에는 맥 미칠 때 값으로 미 2001 때 esc
12:15
캘리브레이션 모드로 진입합니다
12:17
그래서 여기까지는 다 구현을 한 거였고 이번에는 스위치 씨가 1501 때
12:22
중 다닐 때 비해 노 080 캘리브레이션 모드로 진입하게 할 겁니다
12:28
그래서 이 때 아까 설명드렸던 센서를 회전시키면서 실제 캘리브레이션을
12:32
수행을 하구요
12:34
다시 스위치 씨를 맨 위로 올리는 캘리브레이션 모드에서 빠져나오게 할
12:38
겁니다
12:39
그 다음에 안전을 위해서 쓰 로트리 맥 밑으로 내려갈 때까지 대기하고
12:43
있는데 이것도 그걸 해야죠
12:45
그래서 이 플로우차트 대로 코드 작성을 하구요 또 캘리브레이션 코드
12:48
설명을 좀 드리고
12:50
실제 캘리브레이션 도 수행해 보도록 하겠습니다
12:53
그럼 소스 코드 작업으로 넘어가겠습니다

```


#### video 28
-  7-5. ICM-20602 Gyro DC Bias Removal

{% include youtubePlayer.html id=page.youtubeID28 %}

```diff
00:13
지난 시간에 비해 노 080 의 가속도 자이로 자기장 센서 캘리브레이션
00:18
하는 코드를 추가하고
00:20
실제 캘리브레이션 않은 방법도 설명 드렸었죠
00:23
2 센서 캘리브레이션을 해 준 이유가 센 서 데이터가 제어에서 가장
00:28
기초가 되기 때문에 이 센서 값이 정확하게 출력되는 게 제어 성능에
00:32
있어서 가장 중요한 요소라고 볼 수 있는데
00:36
근데 가끔은 똑같은 센서는 데도 불구하고 출력 값의 차이가 좀 발생한
00:40
경우가 있어요
00:41
그래서 이걸 캘리브레이션을 통해서 교정을 좀 해 주는 거죠 그래서
00:45
캘리브레이션을 한 후에는
00:47
물 피치는 수평으로 닫았을 때 정확히 영도가 나올 순 없고 1도 정도
00:53
보다 좀 작으면 될 것 같습니다
00:55
그리고 유축 각도는 자기장을 이용해서 계상하는 거라서
00:59
주변 자기장 환경에 따라서 각도가 좀 틀어져 있을 순 있어요
01:04
근데 몰 피치는 제어를 급격하게 해줘야 돼서 1리 더 오차가 자세제어 의
01:09
영향을 좀 크게 미치는 편인데 요 쭉 제어를 할 때는 급격하게 할게
01:14
아니라서
01:15
5차 조금 있어도 들어오니 낙 급격하게 불안정해지는 알 거에요 그래서
01:20
요추 각도는 쪼금 이상하게 나온다고 하더라도 큰 걱정은 안하셔도 됩니다
01:25
앞으로 들어온 비행 자야 할 때 비해 는 080 의 각도 랑 또 icm
01:30
2060 2 의 각속도 데이터를 같이 사용한다 고 했죠 그래서 지난 시간
01:35
abn 5080 센서의 정확도를 높이기 위해서 캘리브레이션을 해준 거고
01:40
이번 시간에는 icm 2060 1 자이로 센서 값을 확인해 보고
01:45
dc 오프스 껴 있으면 이걸 제거하는 방법에 대해서 설명드리겠습니다
01:49
오늘은 할게 별로 없어서 금방 끌릴 까요
01:54
아 또 미리 촬영을 좀 해 놓았구요 지금 이 그래프는 들어오는 책상에
01:59
가만히 뒀을 때 오프셋을 제거하기 전에 자이로 센서가 치고 이 출력되는
02:05
것들은 센서에 로우 데이터입니다
02:07
그래서 단위는 무시하셔도 되요 보시면 센서를 가만히 놔 뒀00:13
지난 시간에 esc 캘리브레이션을 하고
00:16
조종 게 왼쪽 수직 방향의 스틱으로 pwm 펄스 폭을 가 변하면서 모터를
00:21
회전시켜 봤죠
00:23
이번 시간에는 fsi 에 6기 수 징계 아이 퍼스 데이터가 받아 졌는지
00:27
확인하고
00:28
조종기 의 스위치를 이용해서 esc 캘리브레이션 모드로 진입하고 록 할
00:33
거고 그리고 fc 의 부저를 이용해서 현재 상태를 소리로 도 확인해 볼
00:37
겁니다
00:38
그리고 그게 다 끝나면 아주 간단한 방법으로 모터의 회전속도를
00:42
비교해보겠습니다
00:46
지난 시간에는 esc 캘리브레이션 아는 거랑
00:49
그리고 메인 반복문 시작하기 전에 스로틀을 키가 최소로 내려가 있는지
00:53
검사하는 걸 구현 했었죠
00:55
이번 시간에는 지난 시간에 이어서 바로
00:58
구현하지 못했던 것들 i 퍼스 데이터가 수신 됐는지를 검사하고 수신이
01:03
됐다면 스위치 c 의 상태가 맨 밑으로 내려가 있으면 캘리브레이션 모드로
01:08
진입하고 캘리브레이션 이 또 다 끝나면 다시 스위치 씨를 맨 위로 올려서
01:13
캘리브레이션 모드에서 빠져나온 걸 변하게 씁니다
01:17
그리고 이 단계들을 사이사이 마다 부저를 이용해서 현재 상태를 소리로 알
01:22
수 있도록 해보겠습니다
01:23
그래서 이번 시간에는 설명할 건 없고 시원을 하고 바로 소스 코드 구현
01:28
으로 넘어가겠습니다
01:31
오늘 구현할 것들을 좀 보여드리자면 먼저 조종기 의 전원이 꺼진 채로
01:35
드론의 전원이 들어가면
01:37
수신기는 지금 조종기 랑 연결이 안된 상태 정 그럼 연결이 될 때까지
01:41
대기하도록 할 겁니다
01:43
부 저의 소리 로드할 수 있도록 할 거구요 지금 조종기 의전원 꺼져 있는
01:47
상태고
01:48
들어온 의전원 없겠습니다
01:52
성능 넣었더니 이런 부저 소리가 올리고 있는데 이 부자 소리는 fc 에
01:57
부정에서 올리고 있는 소리고
01:59
지금 2부 저의 상태로 조종기 라 연결이 안 되는지를 알 수 있습니다
02:03
지금 상태에서 조종기 에 저는 키면 부저가 멈추고 기본 동작 모드로
02:07
제가요
02:09
저는 켰더니 기본 동작 모드로 들어가서 이제 메인 반복문 시작 된거죠
02:14
메인 와인 문이 시작 된거고
02:16
와인 물 안에는 지난 시간에 작업해 썻던 이외 왼쪽 수직 방향의 키로
02:20
펄스의 폭을 조절하는 코드가 들어 있으니까 지금 상태에서 익힐 움직이면
02:25
8 스토리 변하며 모터 회전 하겠죠
02:29
잘 동작하고 있습니다
02:33
아씨 이제 장을 다 끄고
02:39
이제 조종기를 키고 3일째 씨를 맨 밑으로 내린 상태에서 드론의 전원이
02:44
성하면
02:45
예수 c 캘리브레이션 모드로 들어가게 할 거구요 그때 또 부 저의 소리로
02:49
상태를 알 수 있게 될 겁니다
02:50
캘리브레이션 이 끝나면 다시 스위치 씨를 맨 위로 올려서 캘리브레이션
02:55
모드에서 빠져 나오도록 할 겁니다
02:57
지금 조정기 가 켜져 있고 스위치 씨가 밑으로 내려가 인 상태죠
03:00
드론의 전 없겠습니다
03:04
지금 부저 소리가 캘리브레이션 모드로 들어갔다는 걸 알려준 거고 q
03:08
메이션 이 진행되고 있죠
03:16
켈리 메이션 이 끝났습니다
03:20
굉장히 제 다시 이런 부정 소리가 들리면서 스위치 시를 위로 올릴 때까지
03:24
대기하고 있어요
03:26
지금 상태에서는 다른 키드 를 조작해 도 아무 반응이 법장
03:30
지금 상태에서 스위치를 다시 원래대로 대로 올리면
03:34
기분 동상 모드로 진입을 하고 메인 반복문이 수행되고 있는 상태입니다
03:38
역시 이 방향의 스틱을 이용해서 모터의 회전 속도를 조절할 수 있죠
03:44
다시 널 다 크게 씁니다
03:50
이제 조종기를 키고 쓰로틀 키는 이번에는 좀 높여 놓은 상태에서 드론 의
03:54
전원을 나오면 경고음이 울리면서 스로틀 키를 랜 밑으로 내릴 때까지
03:58
대기하도록 할 겁니다
04:00
이거 사실 지난 시간에 부연 했는데 경고음이 올리는거 아직 우연한 했죠
04:04
그건 드러내 전원을 넣어보겠습니다
04:09
자 전원을 넣었더니 이런 경고음이 울리면서 쓰로틀 키를 m l 내릴
04:13
때까지 대기하고 있는 상태입니다
04:16
지금은 좀 위험한 상황이 발생할 수 있는 상태라서 이렇게 약간 날카로운
04:20
경고음을 넣었구요
04:22
다시 스로틀 키를 밑으로 내리면
04:24
기본 동작 모드 로 진입하면서 다시
04:27
이제 목사를 회전할 수 있게 됐죠
04:35
이제 마지막으로 기본 동작 모드로 바로 진입한 걸 보여드리겠습니다
04:39
기본 동작 모드는 조종 익히고
04:42
왼쪽 스틱은 냄새로 내리고 또 스위치 씨는 위로 올린 상태에서 들어온
04:47
전원을 나오면
04:48
기본 동작 모드로 들어가게 할 거에요
04:53
바로 기본 동작 모드 들어갔죠 그래서 또 이 스틱을 이용해서 펄스 복을
04:58
확인할 수 있습니다
05:00
그래서 지금 보여드린 것들이 오늘 구현할 것들이에요는데 출력이
02:12
0이 아니죠
02:13
이게 각 속도를 측정한 거라서 지금처럼 센서를 가 많이 줬을 땐
02:17
이론상으로는 값이 0이 나와야 되는데 그렇지가 않습니다
02:22
지금처럼 약간의 오프셋이 끼어 있는데 이걸 dc 바이어스 라고도 하구요
02:27
그래서 이렇게 오프셋이 깨어있는 상태에서 바로 제어를 하면 들어오니
02:31
한쪽으로 계속 흐르는 현상이 발생할 수도 있습니다
02:36
그리고 지금 영상은 그 오프셋을 다 제거한 후에 다시 가 많이 얻었을 때
02:40
출력이 고
02:42
보시다시피 3 쪽이 다영이 잘 나오고 있죠
02:46
센서가 없이 1 이싱 이렇게 피고 있는데 이거는
02:49
각 속도 단위 로 변환하면 아주 미세한 수준이라서 무시하셔도 됩니다
02:54
그래서 지금처럼 오프셋을 제거를 해 주는게 좋은데
02:57
제거하는 방법은 사실 별거 없어요 원래 센서가 카페에서 아까 그 오프셋
03:02
만큼 계속 빼 주기만 하면 됩니다
03:05
그걸 소프트웨어적으로 계속 돼 줄 수도 있는데
03:08
icm 2060 이는 센서 내부의 그 기능을 제공해줍니다
03:12
그래서 이제 그 자이로 오프셋을 제거하는 기능을 어떻게 사용하는지에
03:16
대해서 설명드리겠습니다
03:19
우선 이 내용은 icm 2060 의 데이터 시트 에서 다운 내용이고
03:24
이게 문서번호 곳 위에 1.0 이 문서의 버전입니다
03:28
2 데이터 이스트의 레지스터 부분을 보시면
03:31
자이로 옵셋 entra 지 스 터 라고 있구요
03:35
이게 뭔가 하고 봤더니 이 밑에 있는 설명을 보시면 센서 출력의 dc
03:39
바이어스 가 껴 있으면 그걸 제거하기 위해서 사용되는 레지스터 라고
03:43
되있고
03:44
이 레지스터 있는 값이 센서가 업소에 더해져서 최종 센서 데이터
03:49
레지스터에 저장된다 이렇게 되어 있습니다
03:52
즉 한마디로 말하면 센서 출력 에 더해지는 값이라고 보시면 되구요
03:57
그래서 이 레지스터의 어떤 값을 넣어주면 그 값이 더해져서 최종 센서
04:02
끝으로 출력됩니다
04:03
센서 값에는 음수가 있을 수 있는데 음순은 이에 보수 형태로 나타냅니다
04:08
이에 보수는 컴퓨터가 은 외 정수를 표현하는 방법이죠
04:13
그리고 센서가 없은 16bit 인데
04:15
레지스터는 8비트 산 이어서 상위 팔 미트 하위 8비트 이런식으로 나눠져
04:21
있습니다
04:22
근데 중요한 건 픽 nd 안 방식이에요
04:25
제가 이전에 수업하면서 리틀 nd 언 에 대해서는 몇 번 설명을
04:29
들었었는데
04:30
리 트렌디 어는 낮은 번지가 낮은 자리 수를 가는거고 비겐 디어 는 그
04:35
반대입니다
04:36
낮은 번지가 높은 자릿수를 같죠
04:39
그래서 총 16 비트 중에 상위 파일이 트가 이하 2바이트 이상 위
04:45
8bit 가
04:46
주소로 는 낮은 번지 23번째 0 x 13번지
04:51
여기에 저장이 되고 하위 8비트 로우 바이트가
04:55
번지로 는 높은 번지 0 x 14번지 에 저장됩니다
05:00
그래서 있다가 코드 짤 때 이걸 좀 주의를 해야 되요
05:04
그리고 또 중요한게 하나 더 있는데 이 레지스터의 값을 저장할 때 곱하기
05:10
2를 한 값을 넣어줘야 됩니다
05:12
예를 들어 이제 책상에 가만히 나섰을 때 센서 값이 - 시기 나왔다면
05:18
이 레지스터의 10 을 넣어주면 이제 이게 더 해 지니까 출력이 0이
05:22
되겠죠
05:24
그래서 레지스터에 10 을 넣어주는 게 아니고
05:27
2
05:27
를 곱한 20 을 넣어 줘야 됩니다 이건 왜 그런지 데이터 시트를
05:31
찾아봐도 설명이 없더라구요 그래서 정확한 이유는 찾지는 못했고
05:37
이것은 정말 그런지 있다가 코드 작성할 때 한번 확인해 보도록 하겠습니다
05:41
좀전에 설명 드린 게 x 축의 자유롭 3 descent 레지스터에 설명
05:47
이었고 이 내용은 y 축의 그 레지스터 설명이고 내용은 x 축 이란 갖고
05:52
주소만 다릅니다
05:54
0 x 15 06 16 빵 지구
05:57
그리고 이거는 젝트 축에 대한 설명이고 또 내용은 갖고 주소가 도
06:02
다릅니다 0 x 17 0 x 18
06:04
이렇게 돼 있죠 그래서 결론은 먼저 각 축에 오프셋을 확인한 다음에
06:10
거기에 부호를 바꾸고 또 이를 곱해야 되니까 그냥 - 이렇게 꼽혀 주면
06:15
되겠죠
06:16
그래서 x 축 계산한 이 결과에 상위 8 비트를 0 x 13번지 에
06:22
저장하고 하위 8 비트를 01x 14번째 저장합니다
06:26
y 축 z 축 또 똑같이 반복하는데
06:29
저장하는 주소가 달라지죠
06:32
근데 주의해야 될 것은 이 값은 센서 내부의 레지스터에 넘는 같이 라서
06:37
센서에 전원을 뺐다 넓거나 리셋을 하면 갑시다 0으로 초기화 되어
06:41
버립니다
06:43
그래서 리세 탈 때마다 그 오프셋 값들을 다시 이 레지스터 들에 넣어주면
06:47
되요
06:48
bn 5080 같은 경우는 내부의 플래시가 있어서 그 플래시에 저장을
06:53
하니까 리셋을 해도 결과가 저장이 되어 있는데 이건 그게 좀 다르죠
06:57
그리고 부호의 주의해서 넣어주면 되고
07:00
밑에 있는 두 가지 낚아 설명드렸습니다
07:05
이제 흐름도를 보시면 지난 시간에 비해 노 080 캘리브레이션 했던것은
07:10
필요에 따라서 선택적 으로 해주면 되고 또 한 번 해주면 그 결과가 센서
07:16
내부의 저장이 되서 전원을 뺐다 너도 그 값이 저장되어 있기 때문에
07:20
부팅 때마다 이걸 매번 해줄 필요가 없어요
07:24
esc 캘리브레이션 도 마찬가지구요 그래서 이 두가지는 스위치 c 를
07:29
이용해서 선택적 으로 수행할 수 있게 해놨는데
07:32
자이로 오프셋을 제거하는 것은 전원을 뺐다가 넣으면 그 값들이 다 초기화
07:37
된다 그렇죠 그래서 선택적 으로 하는게 아니고 매번 부팅할 때마다 해줘야
07:42
됩니다
07:43
그래서 그거는 장치 초기화하는 부분이 부분에 추가 해주면 될 겁니다
07:48
그래서 설명은 이렇게 마치고 실제 오프셋을 한번 확인해 보고 그걸 아까
07:53
오프 3 제거하는 레지스터 들을 이용해서 제거도 해보도록 하겠습니다
07:58
그러면 소스 코드 작업으로 넘어가겠습니다

```

### Ch8 Radio data
#### video 29
- ch8 radio telemetry

{% include youtubePlayer.html id=page.youtubeID29 %}

```diff
00:14
이제 이번 시간부터 챕터 8의 시작 이구요 이번 챕터 설명을 좀 드리면
00:18
챕터 8에서는 fc 와 dcs 간의 무선으로 데이터 주고 받는걸 구현 할
00:23
겁니다
00:24
여기서 치 cs 는 그라운드 컨트롤 스테이션 의 약자 0
00:28
지상에서 들어 오늘 모니터링하고 제어하는 프로그램이라고 보시면 됩니다
00:33
그래서 이번 챕터에서는 fc 랑 gcs 간에 데이터를 주고 받으면서
00:37
pc 에서 드론의 상태를 모니터링할 수 있도록 해 볼 겁니다
00:41
이제 마지막 카드가 줘 2 3d l 텔레 매트 림 우선 통신 모듈을
00:45
사용해서
00:46
비행하는 중에도 fc 의 상태를 실시간으로 pc 해서 확인을 하고 또 그
00:51
정보들을 저장할 수 있도록 해 볼 겁니다
00:54
챕터 팔은 이 순서대로 진행 할 거구요
00:57
이번 시간에 먼저 무선 통신 모듈을 설정을 하고 fc 에 걸 연결 해서
01:02
무선으로 pc 란 fc 간의 데이터가 잘 주고 받아 지는지 부터 확인해
01:06
볼 겁니다
01:08
이제 fc 입장에서는 데이터를 보내는 게 있고 또 받는 게 있을텐데 그
01:12
중에 송신이 보내는 데이터는 이런 데이터들을 보내게 될 거구요
01:17
이건 제가 정해 한거고 우선 a 에서 보낸 데이터가
01:21
bn 5080 의 롤 피치 요 회전 각도가 있고
01:25
lp se hh 기압 센서에 기압 고도 정보도 있고
01:30
fsi 6 조종기 의 스틱 정보가 있는데 이 스틱 정보는 바로 보내지 날
01:35
거고
01:36
나중에 pid 제어 하 의 목표 값으로 변환 해서 사용한다 그렇죠 그래서
01:41
그렇게 변환된 목표 롤 피치 요 데이터를 같이 보낼 겁니다
01:46
그래서 ea 에서 보내는 정보들이 pid 제어 할 때 필요한 현재 값과
01:50
목표까지 되는거고
01:52
이 정보들은 gcs 에서 그래프로 확인할 겁니다 그러면 제어 의 상태를
01:57
한 눈에 확인할 수 있겠죠
01:59
근데 고도 제어는 따로 하지는 않을 거라서 이건 그냥 현재 고도를
02:03
확인하는 용도로만 사용하게 될 것 같습니다
02:06
그래서 이렇게 가 하나의 메시지 프레임 단위가 될 거구요
02:10
그다음 ap 에서는 gps 에 위도 경도 정보 배터리 전압 정부 fsi
02:16
6 조종 개의 이번에는 스위치 정복 3 it's a 랑 실제 c 를
02:20
사용하죠
02:21
그 스위치 정보들이 랑 마지막으로 페일 세이프 해 상대를 묶어서 또
02:26
이렇게 를 하나의 메시지에 프레임 단위로 보내줄 겁니다
02:30
그리고 마지막으로 pid 제어 해서 중요한 파라미터 져
02:34
이 pid 개인을 gcs 로 보내서 없고 또 확인할 수 있게 볼 겁니다
02:39
그래서 이렇게 가 제가 정리한 좀 중요하다고 생각하는 드론의 상태정보
02:43
드리구요
02:44
이걸 비행 하면서도 실시간으로 눈으로 확인을 하던지
02:48
로그를 저장할 수 있게 할 건데 이걸 시각화 해 주고 데이터를 저장해
02:52
주는 것은 출시 s 에서 해 주는 거고
02:55
우리가 구현해야 될 것은 주 cs 에서 알아들을 수 있는 프로토콜 대로
02:59
정해진 순서 랑 형태에 맞게 데이터를 보내 주기만 하면 됩니다
03:04
그래서 이렇게 가 이제 성심 때 보낼 데이터들이 자 이제 수시는 사실
03:09
수동으로 비행을 하면 gcs 에서 fc 로 데이터를 보내 줄게 별로
03:13
없어요
03:14
4 개발하는 단계에서 pid 개인을 바꿔야 될 일이 좀 많을 텐데 그
03:19
때마다 그걸 코드로 짜서 다운로드를 해줘도 되는데 그렇게 하면 개인 하나
03:23
바꾸는데 시간도 오래 걸리구요 또 st 링크 선을 꼈다 뺐다 하다가
03:28
잘못하면 제 프로펠러의 손이 다칠 수도 있고 그런 일이 생길 수 있어서
03:32
무선으로 pad 갱을 바꿀 수 있게 구해 낼 겁니다
03:36
그리고 또 그 개인은 gcs 에서 보내 줄 거에요
03:39
이제 개발을 해보신 분은 아시겠지만 들어온 개발할 때 이 pid 개인
03:43
찾는게 좀 어려워요
03:44
시간이 오래 걸리는 작업이 기도하고 또 위험하기도 하구요
03:48
근데 이 개인을 무선으로 바꿀 수 있게 나면 개인 찾는 시간이 정말 많이
03:52
줄어듭니다 3분의 1 4분의 이렇게 줄어들어요
03:55
그리고 또 들어오네 손을 대지 않고도 멀리서 갱을 바꿀 수 있으니까
03:59
아무래도 코드로 다운로드 하는 것보다 사고가 날 위험이 좀 줄어 들겠죠
04:04
그래서 gcs 에서 마우스 클릭 몇번 하면 개인을 바꿀 수 있게 할 건데
04:08
문제는 gcs 에서 fc 로 개인을 보내면
04:12
fc 내부의 개인이 잘 바뀌었는지 확인을 할 수가 없잖아요 그래서 fc
04:17
는 ccs 에서 pid 개인 설정 값을 받으면
04:20
우린 개인을 ep 롬 에 저장할 거니깐 우선 그 값을 ep 롬 에 저장을
04:24
하고 바로 다시 그 값을 e 필요해서 읽어와서 gcs 로 보내줄 겁니다
04:29
그러면 gcs 에선 또 그걸 표시를 해 주니까
04:33
pad 개인이 우리가 설정한 대로 잎이 롬에 살 저장이 됐는지를 확인할
04:37
수 있겠죠
04:38
그래서 그게 2에서 할꺼구요 그리고 비는
04:42
좀전에 의해서 한거랑 비슷한데 a 에서 처럼 개인을 바꾸는 건 아니고
04:47
지금 fc 가 가지고 있는 개인이 뭔지를 요청만 하는 기능입니다
04:52
즉 gcs 가 fc 한테 지금 가지고 있는 갱을 알려 줘 라고 요청을
04:56
하는 거죠 그러면 fc 는 요청을 받았을 때 자기가 가지고 있는 개인을
05:00
보내주도록 또 구현을 해야 겠죠 그래서 이렇게 fc 에 저장된 개인
05:05
값들을 확인할 수 있게 해 볼 겁니다
05:08
역시 cs 에서는 정해진 프로토콜 데로 fc 의 이 데이터들을 보내줄
05:12
거구요
05:13
그럼 fc 는 이 프로토콜 대로 8 쌩 을 해서 pid 개인정보 라면
05:17
그걸 e 필요에 저장을 하면 되고
05:20
개인을 알려 달라고 요청하는 거면 그에 따른 데이터를 응답해 주면 됩니다
05:25
그래서 사실 fc 랑 gcs 간의 통신 프로토콜을
05:29
저같은 경우는 제가 둘다 직접 개발 하니까 제 마음대로 프로토콜을
05:33
정의해서 쓸 수 있어요
05:34
근데 수업을 들으신 분들은 fc 만 저랑 같이 개발한 거고
05:39
gcs 는 제가 맞는걸 쓰셔야 되니까 어쩔 수 없이 gcs 에서 데이터를
05:43
주고받는 프로토콜을 따라야 됩니다
05:46
이전에 했던 유비 x 나니 버스 프로토콜 같은게 그런 거죠
05:49
이미 만들어져 있는 프로토콜을 써야 되니까 저희는 어쩔 수 없이 그걸
05:53
따라서 써야 되는 거죠 그래서 이것들을 하기 전에 먼저 프로토콜을 알아야
05:57
되는데 그걸 이 앞에서 설명 드릴 겁니다
06:01
ccs 를 소개해 드리면서 프로토콜 설명을 같이 드릴 거에요 그래서
06:05
이렇게 가 이번 챕터 8에서 설명을 드린 내용 드리고
06:09
이걸 다 구현에 놓으면 이제 진짜 들어온 개발하는 느낌이 좀 되실겁니다
06:13
설명이 좀 길었는데 그렇게 복잡한 내용은 아니고 하나씩 차근차근 설명
06:17
드리도록 하겠습니다
06:20
이번 시간에는 3d 안 텔레 매트의 무선 모듈을 소개를 좀 드리고
06:24
이거 설정 프로그램인 3d raid5 컴 피그 이 프로그램을 사용해서
06:28
레브 파라미터들을 설정 하는 방법을 설명 될 겁니다
06:32
그리고 그게 다 끝나면 fc 의 이 무선 모듈을 연결해서 실제 데이터를
06:36
주고 받는 것도 확인해보겠습니다
06:39
이게 수업에서 사용할 3d r 텔레 매트 림 우선 모드 이구요
06:43
2개가 세트로 되어 있습니다 밑부분을 보시면
06:47
usb 마이크로 5핀 커넥터 가 있고 이 케이블을 연결해서 pc 에
06:52
연결할수 있게 되어 있습니다
06:54
이 케이블은 같이 동봉되어 있지 않으니까 별도로 준비 해 주셔야 되요
06:58
그리고 전원을 넣으면 이렇게 초록색 led 가 깜빡 할 텐데 이건 아직
07:03
연결이 안 됐던 소립니다
07:05
뭐 아직 전원이 안 들었기 때문에 연결이 안되죠
07:08
그리고 저는 드라이버가 설치가 됐기 때문에 지금 바로 컴포트 로 잡혀
07:12
있는 상태에요
07:13
터미널 프로그램을 열고 확인해봤더니 컴포트 6번으로 샀죠
07:19
그리고 커넥트 를 하면 이제 이 텔레 매트 리모 2장 pc 랑 연결이 된
07:23
상태죠
07:24
그리고 기본 디폴트 보 레이트 가 57,600 으로 되어있습니다 그래서
07:28
는 설정을 바꿔 지금 115,200 으로 되어 있고 이건 따라 실 분들은
07:32
우선 5760 공으로 연결하시면 되요
07:36
그리고 또 하나가 더 있는데 역시 마이크로 5핀 커넥터 로 연결할수 있게
07:41
되어있구요
07:42
음 똑같이 pc 의 연결을 한 상태고
07:47
터미널 프로그램을 하나 더 실행을 시키면
07:50
이제 이번에는
07:52
저같은 경우는 컴포트 7번으로 잡혔네요
07:57
그래서 이 왼쪽 텔레 매트를 모듈이 이외 왼쪽 터미널 창에 연결이
08:02
생성되고 컴포트 6번의 연결이 되어 있구요 또 오른쪽 텔레 매트를 모듈은
08:07
2 오른쪽 터미널 창 그리고 컴포트 7번에 연결된 상태입니다
08:11
그리고 전원을 연결하면 기본적으로 둘간의 바로 연결이 되게 돼 있어요
08:15
그래서 지금 보시면 led 가 깜빡 거리는게 멈추고 이렇게 계속 켜져
08:19
있죠
08:20
그럼 둘 간의 연결이 되어있다는 걸 나타냅니다
08:23
지금 상태에서 이 왼쪽에 있는 데이터로 이제 무선으로 데이터를 보내면 이
08:28
오른쪽에 있는 텔레 매트를 그걸 받아요 그래서 여기에 출력을 해 줄
08:31
겁니다
08:32
한번 데이터를 보내 보겠습니다 여기서 이렇게 데이터를 보내면 그
08:37
데이터들이 여기에 출력이 되고 있죠
08:39
또 반대로 이 오른쪽에 있는 텔레 매트를 모듈이 왼쪽에 데이터를 보내면
08:45
그게 또 여기 뜰겁니다 헬로 이런걸 치면 여기에 사용 뜨죠
08:50
둘중에 이제 해나를 fc 에 연결할 건데
08:53
둘중에 어떤걸 연결해도 상관없습니다 두 개가 완전히 똑같습니다
08:57
그래서 이번 시간에는 이렇게 둘 간의 통신이 되는 지도 한번 확인해보고
09:02
통신사 요 된다면 문제가 없다면 이제 fc 의 연결에서 fc 랑 pc
09:07
간의 무선으로 되게 좀 주고 받는걸 해보겠습니다
09:10
이게 제 수업에서 사용할 3d l 텔레 매트 림 우선 모듈이 구요
09:14
이게 v2 가 있고 v1 있는 것 같은데 반드시 v2 를 사셔야 됩니다
09:19
제 카페인을 링크를 타고 가서 구매하시면 v2 에요
09:22
v1 은 이 몸체가 조금 두꺼워서 제 수업에서 쓰는 드러내는 안
09:26
올라갑니다
09:27
이 모델은 주파수 때가 433 매가 117 그리고 915 메가 헤르츠
09:31
이렇게 두가지가 있는데
09:33
찾아보니깐 둘다 국내에서는 사용할 수 없는 주파수 대역 이라고 합니다
09:38
실내에서 개인적인 연구 용도로는 쓸 수 있겠지만
09:41
씨를 위해서 비행 하실 때는 가급적이면 이 모듈의 전원을 빼시고 비행
09:46
하시길 추천드립니다
09:47
이게 신고 들어오면 과태료를 내야 될 수도 있어요
09:50
그리고 설명에는 최대 통신 거리가 약 2.5km 라고 되어있는데 제
09:55
생각이 이렇게 멀리까지 안될것 같고 한 500m 정도 까지는 되지 않을까
09:59
싶습니다
09:59
물론 주변 환경에 따라서 달라 지기도 하니까 비행할 때 너무 멀리
10:03
보내지면 안되고
10:05
한 100m 안에서 비행 하세요 또 너무 멀리 보내면 눈으로 잘 안보여서
10:08
비행하다 사고날 확률이 높습니다
10:11
가까운데서 비행을 하시는게 좋고 출력 파워 는 500mm 마트 라고 되어
10:16
있습니다
10:17
그리고 사실에 이렇게 2대가 한 세트로 되어 있는데 하나는 들어오네 같이
10:21
올려서 비행을 할 거고 다른 하나는 pc 에 연결해서 사용할 겁니다
10:25
그때 fc 랑 인터페이스 할 때는 뉴아트 로 하고요
10:29
그리고 pc 에는 아까처럼 usb 로 연결 합니다
10:33
2 모듈 내부에는 cp 1 0
10:35
x usb tu 아트 브릿지 라는 칩이 내장되어 있구요
10:39
이 칩을 이용해서 usb 마이크로 케이블로 pc 에 연결하면 바로 pc
10:43
에서 컴포트 로 잡혀요
10:45
이때 드라이버를 최신 걸로 설치 해주는게 좋구요
10:48
드라이버 버전이 낮아서 이제 구 버전의 드라이버를 쓰는 경우는 가끔 덮어
10:53
링이 좀 시 말들이 있습니다 이 최신 드라이버 설치하는 것은 조금 이따가
10:56
설명드리겠습니다
10:59
그리고 마 블링크를 지원한다고 했는데 이 마블링 크는 우선 제 수업에서는
11:03
사용하지 않을 거라 설명은 안 될 건데 이게 뭔지 궁금 하신 분들은 여기
11:08
들어가서 한번 보세요 설명이 잘 되어 있습니다
11:11
그리고 설정 전용 프로그램을 제공해 주고요
11:14
이거 다운받고 프로그램을 통해서 또 내부 파라미터 들 설정도 좀 바꿔 볼
11:19
겁니다
11:20
그리고 이거 pc 로 연결할때 아까처럼 usb 마이크로 5핀 케이블로
11:24
연결 해야 되는데 이게 동봉이 되어 있는 줄 알았는데 안 돼 있더라구요
11:28
그래서 가지고 계신 케이블이 있으면 그걸 쓰시구요 없으면 구매를 좀
11:33
하셔야 될 것 같습니다
11:34
두개가 있으면 좋을 것 같고 그리고 가끔은 또 어떤 싸구려 케이블은
11:38
데이터 통신이 안되는 경우가 있어요
11:41
전원만 공급해주고 통신이 안되는 케이블이 있는데 그건 사용하시면 안됩니다
11:46
반드시 데이터 통신이 되는 케이브 려야 되요
11:49
2개가 한 세트로 되어 있는데 하나는 fc 에 연결하고 다른 하나는 pc
11:54
에 연결해서 쓸 겁니다
11:55
두 개가 완전히 똑같기 때문에 뭘 어디에 연결할 지는 상관없습니다
12:00
이제 외관을 한번 보시면 2개가 똑같이 생겼구요
12:03
앞면에 보시면 주파수가 적혀 있고 밑에는 핀 이름이 적혀 있죠
12:07
이 플라스틱 케이스를 열어 보시면 안에 집들이 여러개 있는데 무슨 칩이
12:11
들어 있는지는 중요하지 않고
12:13
밑면에는 usb 마이크로 5핀 커넥터 가 있고 위에는 안테나를 연결하는
12:18
커넥터가 있습니다
12:20
그리고 모듈이 랑 같이 동봉된 케이블이 3개정도 있을텐데
12:24
이중에 양쪽이 2 단 1.27mm 6p 남농 커넥터로 되어있는게 있을
12:30
거에요
12:31
이제 이 케이블로 fc 의 이 모듈을 연결 할 거구요
12:34
그래서 이걸 먼저 무선 모듈의 연결하도록 하겠습니다
12:38
모듈은 둘 중 아무거나 연결하시면 됩니다
12:40
케이블을 보시면 한쪽은 빨간색 커넥터로 되어 있고 다른 쪽은 흰색
12:45
커넥터로 됐을 텐데 이 무선 모듈의 꽂을 때는 반드시 빨간색 커넥터로
12:50
되어있는 부분을 꼬 주셔야 됩니다
12:52
요즘 중요해요 흰색으로 된 부분을 꼬지마 안되요
12:55
그리고 꽂을 때 깍고 줘야 되는데 지금 이 사진이랑 이 사진처럼 헐렁하게
13:00
끼시면 안되고
13:01
2 오른쪽 밑에 있는 사진처럼 쏙 들어가게 꼬 주셔야 됩니다
13:05
이게 끼가 좀 어려울 거에요 그래서 는 케이스를 벗긴 다음에 롱노우즈 로
13:09
이 부분을 눌러서 꽉 꼈는데
13:12
그렇게 하면 조금 편할 겁니다 그리고 이거는 한번 꽂으면 빼기가 좀
13:15
어려워요
13:16
이쪽은 이렇게 꽂아 놓으면 너 다 쓸 때 일일이 없을 건데
13:20
반대쪽은 fc 에 꽂아야 되는데 그 쪽은 때 딱 갓다 할 일이 조금 있을
13:24
수도 있습니다
13:25
근데 뺄때 선만 잡아당기면 커넥터가 분리된 게 아니고 이 선만 끊어지는
13:31
경우가 있을 수 있습니다
13:33
그럼 아예 이걸 뭐 쓰게 될 수 있으니까 조심해서 커넥터를 분리해 줘야
13:36
됩니다
13:37
그래서 우선 이 빨간색 커넥터 부분을 무선 모듈의 꽈 끼우면 됩니다
13:43
잘 되셨으면 이제 반대쪽 흰색 커넥터를 보시면 처음 사신 분들은 6핀
13:49
커넥터 연결이 돼 있을 거에요 이걸 5핀 커넥터 로 바꿔 깨야 됩니다
13:54
5 핀 커넥터 는 같이 동봉되어 있습니다
13:56
제프 씨가 5핀 커넥터 로 되어 있어서 이걸로 바꿔 계셔야 되요
14:00
fc 크기를 줄여야 되서 5pin 을 하게 됐구요
14:03
그래서 예전에 gps 했을 때처럼 커넥터를 바꿔서 달아 주셔야 되는데
14:07
순서도 gps 때 랑 똑같습니다 그래서 이렇게 놓고 봤을 때 교체하기
14:13
전에 4번 5번 비니 비어 있는데
14:16
5 핑 커넥터의 1 2 3번은 그대로 똑같이 여겨서 다시 고요 그리고
14:21
교체하기 전에 6번의 연결되어 있는 이 핀을
14:24
5 핑 커넥터의 5번의 연결해 주시면 됩니다
14:27
그리고 4번 키는 이제 비어 있죠 방향도 반드시 이 방향대로 깨져야 되요
14:32
입힌 연결할때 순서 틀리면 모듈이 고장 나거나 혹은 fc 가 나갈 수도
14:37
있으니깐 반드시 주의해서 끼 시기 바랍니다
14:40
그리고 이게 핀 피치 가 작아서 여기서 선을 분리하는 게 조금 어려울수도
14:44
있어요
14:45
그때 날카로운 핀셋을 이용하면 좀 편할 거 구요
14:48
그때 손님이 안 닫히도록 조심하시기 바랍니다
14:51
이제 usb 마이크로 케이블 준비하시구요 pc 한번 연결해 보겠습니다
14:58
음 연결하시면 드라이버가 잡힌 분도 계실 거고 아닌 분도 계실텐데
15:03
우선 잡히진 분들은 현재 설치된 드라이버의 버전을 한번 확인해보세요
15:08
장치 관리자 를 여시고 포트를 열어 보시면 이렇게 실리콘 렉스 cp
15:14
10x 라고 잡혀 인데 있을겁니다
15:17
우클릭해서 속성으로 가지고요 드라이버를 와서 보시면 저는 윈도우 세븐 을
15:22
쓰고 있고 윈도우 세븐 의 최신 드라이버 버전은 6.7 점 6.2 130
15:28
입니다
15:28
이렇게 드라이버 버전을 확인하시고 4 최신 드라이버를 다운로드 한 방법을
15:33
설명드리겠습니다
15:34
구글 검색창에 cp 10x 띠고 드라이버 이렇게 검색하시면
15:40
항목 중에 실리콘 랩스 홈페이지로 연결 된 항목이 있을겁니다
15:44
내가 클릭해서 들어가시면 이런 화면이 나타날 거구요
15:47
이게 이제 그 화면인데 밑으로 조금 내리시면 윈도우 텐 을 쓰신 분들은
15:52
10점 1.8 버전 이 버전의 드라이버를 받으시면 되구요
15:57
윈도우 세븐 이는 에이스 를 쓰신 분들은 이 버전의 드라이버를 받으시면
16:00
됩니다
16:01
저는 이미 최신버전을 설치를 해 놓은 상태고 또 윈도우 세븐 을 쓰고
16:05
있기 때문에
16:06
아까 드라이버 버전이 6.7 점 6 점 2130 이었죠
16:10
그게 이 최신 버전의 드라이버입니다 그래서 이걸 다운받고 압축을 푸시면
16:16
이런 폴더가 하나 생길 거 구요 안으로 들어오시면
16:20
실행 파일이 두개가 있는데 본인이 사용하시는 그 윈도우 의 비트 수가
16:25
32비트 면 x86 을 설치하시면 되구요
16:28
64비트 5 했으면 x 육사를 설치하시면 됩니다
16:33
그리고 설치하신 후에 다시 드라이버 버전을 확인 하시면
16:36
아까 저처럼
16:40
자 윈도우 세븐 같은 경우는 6.7 점 6.2 1302 이렇게 설치가 잘
16:44
되어 있으면 됩니다
16:45
구버전 드라이버를 쓰시면 데이터 주고 받고 할 때 특히 수신 할 때
16:49
버퍼링이 좀 심한 경우가 있어요
16:52
그러니까 꼭 최신버전으로 설치 하시기 바랍니다
16:55
설치 다 하셨으면 장치관리자에서 2 버전 한 번 꼭 확인해보세요
17:00
드라이버 설치가 잘 되셨으면 아까처럼 불다 pc 에 먼저 연결을 해서 둘
17:05
간의 통신이 잘 되는지 모듈의 문제가 없는지 부터 확인해 보겠습니다
17:10
저는 케이블이 2개가 있어서 이렇게 연결을 할수가 있는데
17:13
하나만 있으신 분들은 지금 하는 것은 그냥 보기만 하고 넘어 가셔도
17:16
되구요
17:17
나중에 fc 라 연결해서 데이터 통신이 잘 되는지를 확인 하시면 됩니다
17:22
이제 pc 에 연결하면 가상 컴포트 로 잡힐 거고
17:25
초기 설정은 데이터 길이 8비트 페리 티 없고 원스타 피트 통신 속도는
17:32
57,600 bps 로 되어 있습니다
17:35
지금 저는 1개만 연결 해 놓은 상태고 터미널 프로그램을 먼저 실행 시켜
17:40
주고요
17:41
그리고
17:43
연결된 컴포트 를 봤더니 왼쪽 모듈이
17:46
지금 컴포트 6번의 연결되어 있죠 그리고 지금 통신 속도가 저는 내부
17:52
설정을 좀 바꿔서 115 200 pps 로 되어 있는데 처음 하시는
17:56
분들은 5 7 6 0 0 으로 선택하고 커넥트 하시면 되요
18:00
그렇게 하고 커넥트 를 하시구요 그리고 다른 모듈도 1 또
18:05
음 이렇게 pc 에 연결 하시고 또 터미널 프로그램을 하나 더
18:10
실행시킵니다
18:11
그리고 잡힌 포트를 봤던 이번엔 컴포트 7번으로 잡혀 쬲
18:17
그리고 커넥트 를 하시고 역시 5 7 6 0 0 으로 하시고 하셔야 되요
18:21
근데 저는 설정을 바꿨기 때문에 둘 다 1155 200 으로 설정합니다
18:26
그리고 이렇게 저널 연결했을때 둘다 led 가 깜빡 거리지 가 않아야 돼
18:31
이렇게 계속 켜져 있어야 됩니다
18:33
이 상태를 보시고 둘다 이 상태가 맞다면 이제 서로 데이터를 주고 받을
18:38
수 있는 그 환경이 갖춰진 거고
18:40
한번 실제로 데이터를 주고 받았을 때 잘 표시가 되는 지
18:44
여기서 보낸 데이터가 여기 표시가 되고 또 여기서 보인 데이터가
18:50
왼쪽이 수신 창에 잘 표시가 되면 됩니다
18:53
이렇게 되면 이 둘 간의 무선으로 데이터를 주고 받는게 문제없이 잘
18:57
동작하는 거예요
18:59
그리고 가끔 이 모듈을 usb 에 연결하면
19:02
마우스 스크롤이 혼자 막 왔다갔다 하거나 혹은 마우스 클릭이 막 혼자서
19:07
되는 경우가 있는데 이유는 모르겠지만 그런 현상이 생기면 pc 에서 이걸
19:12
분리 해 주시면 됩니다
19:14
이제 설정 하는 프로그램을 다운받고 내부 파라미터들을 설정 하는 방법을
19:18
설명드리겠습니다
19:20
구글 검색창에 3d r 라디오 컴퓨트 2 2 라고 검색하시고
19:25
그러면 이런 검색 항목 이 나타날 텐데 이걸 눌러서 들어가시면 이런
19:29
화면이 뜰 거에요 그게 이 화면이 구요
19:32
밑으로 쭉 내리시면 3d r 라디오 컴팩트 2 일하고 있고 여기에
19:37
다운로드 받을 수 있는 링크가 있는데 이걸 눌러서 들어가시면
19:41
제가 강의 준비 하기 전에는 여기서 바로 다운로드 받을 수 있게 돼
19:45
있었는데 지금 강의 찍으면서 보니깐 이 페이지 접속이 안되는 것 같아요
19:49
그래서 현재는 여기서는 다운받을 수가 없고 이거 설정 하는 프로그램이
19:54
이거 외에도 한 두가지 정도가 더 있는데 이 프로그램이 딱 설정 하는
19:59
기능만 가지고 있어서 좀 가볍구요
20:01
그 외에 다른 2개는 지 씨에스 기능이 포함되어 있어서 좀 무거운
20:05
편입니다
20:06
저희는 설정만 하면 되니까 이걸 다운로드 받으면 되는데 여기서 받을 수가
20:11
없어서
20:12
다른데서 받을 수 있나 또 찾아봤는데 없는 것 같아요
20:15
그래서 우선 저는 강의를 해야 되니까 먼저 네이버 카페에 올려 놨습니다
20:21
제 네이버 카페에 59
20:24
stm32 동영상 강좌에 자료실 이란 항목을 제가 만들어 놨어요
20:28
여기 들어가서 보시면 자 이런 항목이 있죠
20:32
제 업로드한 파일이 고 눌러서 들어가시면 첨부 파일로 받을 수 있게
20:36
되었습니다
20:37
pc 저장 에서 저장을 하시면 압축파일이 받아 줄 거고 그 압축을 푸시면
20:44
이런 폴더가 생길까요
20:47
폴더 안에 들어오시면 sik 라디오 라는 exe 파일이 있습니다
20:52
실행파일 더블클릭해서 실행해 보겠습니다
20:56
실행하시면 이런 창이 될 거구요 이제 이걸로 설정을 좀 바꿀 건데 이건
21:01
잘못 설정하면 통신이 안 될 수 있으니까 이제 설명을 잘 듣고 따라
21:05
하시기 바랍니다
21:07
먼저 2 모듈 중에 하나만 pc 에 연결 하시구요
21:10
음
21:13
됐으면 컴포트 를 눌러보시면 현재 연결한 그 장치가 컴포트 로 잡힐
21:18
거예요 전 컴포트 6번으로 잡혔고
21:20
사역을 선택하시고 그리고 기본 보 레이트 가 여러분들은 5 7 6 0 0
21:25
으로 되어 있을 거고 저는 설정을 바꿔 나서
21:28
1 2로 200 으로 바꾸고 진행하겠습니다
21:31
여러분들은 그냥 5760 공으로 두고 하시면 되요 됐으면 로드 세팅을
21:35
누릅니다
21:37
이걸 누르면 이제 이 왼쪽에 콘솔창에 로딩하는 그 과정들이 이렇게 쭉
21:42
메시지로 표시가 되구요
21:43
조금 기다리시면 로드가 완료돼 요 네 로딩이 완료 됐고 현재 설정 값들이
21:49
이외 왼쪽 로컬 부분에 이렇게 표시가 잘 될겁니다
21:54
여러분들은 초기 설정 값이 이런 값들이 저장이 되 있을 거고
21:58
먼저 포 레이트 부터 받고 있습니다 기본 57 로 되어있는데 이건 킬로
22:03
bps 다니구요
22:04
이걸 115 로 바꾸면 115,200 bps 가 되는 거죠 그리고 그
22:10
밑에 에어 스피드 가 64 로 되어 있는데 역시 킬로 bps 다니고
22:15
이걸 250 으로 바꾸겠습니다
22:18
2 볼에 이트는 무선 모듈 이랑 pc 간의 인터페이스 하는 속도 혹은
22:22
무선 모듈 이랑 fc 간의 인터페이스는 속도로 의미 하구요
22:27
에어 스피드 는 2 모듈 간 의 무선으로 데이터를 주고받는 속도를
22:31
의미합니다
22:33
그래서 이 에어 스피드 는 보 레이트 보다 높게 해 주시면 되요
22:36
에어 스피드 가 낮으면 데이터가 좀 끊겨서 들어올 수도 있어요
22:41
그리고 그 밑에 있는 4 id 를 잘 보셔야 되는데
22:44
체커 같은 경우는 초기 설정이 25 로 되어있구요
22:48
아마 여러분들도 25로 초기 설정이 되어 있을 겁니다
22:51
그리고 모듈이 두개가 있는데 2 모듈이 일치 해야 되요 이게 일치하지
22:56
않으면 통신이 안 될 수 있습니다
22:58
근데 문제가 이제 제가 이렇게 설정을 해놓고 밖에서 달리다가
23:02
우연히 똑같은 모듈을 사용하는 사람이 제 옆에서 같이 비행을 하게 되면
23:06
id 까지 같으면 혼선이 발생할 수 있습니다
23:10
그래서 id 는 적당히 원하는 값으로 바꾸시면 되는데
23:14
단 두 대를 다 똑같이 맞춰 주셔야 됩니다
23:17
그래서 는 25 그냥 그대로 하고 넘어가 구요 그리고 그 밑에 tx
23:21
파워는 성신 거리 란 관련 있을 텐데 이 파워를 높이면 더 멀리 통신이
23:26
되겠지만 배터리가 좀 더 빨리 살겠죠
23:29
저는 기본 11 그대로 놓고 사용합니다
23:32
그리고 2시 씨는 에러 코렉팅 코드의 약자 구요
23:36
이건 설명을 좀 보니깐 데이터를 2번 보내서 에러가 있으면 그걸 교정하는
23:41
뭐 그런 용도로 사용한 것 같은데 이걸 사용하면 대신 통신 속도가 반으로
23:46
낮아지는 그런 효과가 있는 거죠 그래서 굳이 사용하지 않아도 될 것
23:51
같습니다
23:51
그래서 체크해제 있고요 그 다음에 마블 링크를 사용할 건지 안 할 건지를
23:56
설정할 수가 있는데 저는 이걸 사용하지 않고 로 데이터 로 바꿔서 사용
24:01
한다 그래서 노우 데이터 이렇게 바꿨고
24:04
그리고 마블 링크는 제가 다 정확히 알고 있는건 아니고 이걸 사용하려면
24:09
아까 막을 링크에 대한 설명이 정리된 웹 사이트가 있다고 설명 드렸는데
24:13
그 내용들을 좀 확인을 해 봐야 될 것 같습니다
24:17
제 예상으로 마 블링크를 쓰면
24:20
이제 데이터를 보낼때 앞뒤에 우리가 알지못한 데이터 들이 붓는 것 같아요
24:25
네 그게 이제 통신이 조금 느려질 수 있을것 같아서 저는 그런 프로토콜
24:28
안쓰고 그냥 아무 데이터도 안 붙는 로우 데이터로 설정 에서 사용하는
24:33
거죠 그래서 이렇게 로우 데이터 로 설정하면 딱 제가 보내는 데이터만
24:37
왔다갔다 하는것 같아요
24:38
그리고 그 밑에 op.12 센드 동 아까 2위 acc 랑 조금 비슷한 것
24:44
같은데
24:44
설명을 보면 데이터 패킷을 2번 보내고 뭐 이런 내용이 있습니다
24:49
저희는 사용하지 않을 거라서 설명 넘어가고 역시 사용 하지 않으니깐 체크
24:54
해제했습니다
24:55
그리고 그 외에 나머지 것들은 바꿀 필요는 없는것 같아요
24:59
그래서 이렇게 가 설정이 끝난 거고 설정이 다 끝났으면
25:02
여기 세이브 셋팅 버튼을 누릅니다 근데 주의해야 될 것은 이렇게 설정하고
25:07
저장을 하면 그 후부터는 브 레 이 트 가 115,200 으로 바뀌었기
25:12
때문에 다시 로드를 하려면 포 레이트를 저처럼 제 115,200 으로
25:17
바꿔서 로드를 하셔야 되요
25:19
설정 저장 잘 하셨으면
25:23
이제 이거 제거 가지고 또 다른 모듈을 하나 더 있으니까
25:27
이거 연결하신 다음 n 지금 설명드린 대로 똑같이 설정합니다 됐으면 또
25:32
역시 세이브 세팅 하시구요
25:34
이 설정을 한번 하면 다시 바꿀 필요는 없고 밑에 있는 이 내용들 주
25:38
이상 한번 읽어 보시구요
25:40
그리고 이 각각 설정 항목들이 어떤 내용인지 좀 궁금 하신 분들은 이
25:45
비테 있는 이 웹 페이지에 들어가시면 설명이 잘 되어 있어요
25:48
영어로 되있어서 조금 해석이 어려울 수도 있는데
25:52
궁금하신 분들은 한번 가서 보시길 추천드립니다
25:55
그리고 아까 설정 하는 프로그램이 좀 전에 설명드린 그 프로그램 외에도
25:59
2개가 더 있다고 말씀드렸는데
26:01
그것들로 설정 하실 분들은 이 아도 파일럿 웹 페이지에 들어가셔서
26:06
다운로드 를 눌러보시면 미션 플래너 혹은 apm 플래너 이렇게 두가지가
26:11
있는데
26:12
둘중에 하나를 다운받아서 하시면 됩니다
26:15
먼저 미션 플래너로 하실분들은 미션 플래너 다운받아서 실행하시면 재 이런
26:20
화면이 나타날 거구요
26:21
여기서 초기 설정을 누르고 또 왼쪽에 싸이 k 라디오 를 누르시면 똑같은
26:26
함에 나타날까요
26:28
아까 좀 전에 그 저희가 사용한 프로그램이라 완전 똑같은 하면 2조
26:32
사용한 방법도 똑같습니다 컴포트 확인 하시고
26:36
동신 속도 확인 하시고 연결이 아니고 로드 세팅을 누르면 또 초기 설정된
26:41
값들이 여기 로드가 될 거에요 그러면 제가 좀전에 설명드린 그 내용대로
26:46
값들 바꾸시고 세이브 세팅에서 저장하시면 됩니다
26:50
그리고 apm 플래너로 설정 하실 분들은 또 다운받아서 실행하시면 이런
26:54
프로그램이 실행 될 거고
26:56
이미 설 셋 업 에서 3d r 라디오 를 선택하시면
26:59
좀 전에 그 하면 양 똑같은 화면이 나타날 겁니다 컴포트 랑 도 레이트
27:04
설정 잘 맞춰주시고 로드 세팅 하신다음에
27:06
항목들 잘 바꿔서 세입 셋팅 하시면 됩니다
27:10
이제 설정을 좀 바꿔 쓰니깐 지금 설정에서도 통증이 잘 되는지 다시 한번
27:14
확인을 해봐야겠죠
27:17
아 똑같이 음 연결하시고
27:23
컴 포트 연결 하시구요 이번엔 115,200 으로 바꿔 쓰니까 보 레이트
27:27
잘 맞춰서 연결 해 주시고 또 다른 것도 연결에서 확인해보겠습니다
27:35
두개를 실행 시켰구요
27:37
하나는 컴포트 욕하는 컴포트 7로 회사 연결했고 동 115,200 으로
27:41
다 바꿨죠
27:42
이렇게 쓸 때 데이터가 여기 잘 출력이 되면 되요
27:46
저희 것 까지 확인이 됐으면 이제 다음 단계로 넘어가겠습니다
27:49
통신 확인이 끝났으니까 이제 fc 의 무선 모듈을 연결 할 건데
27:54
연결을 뉴아트 1번 채널의 라구요
27:57
fc 를 이렇게 놓고 봤을 때 오른쪽 밑에 j3 이라고 써진 1.27
28:03
밀리오레 5핀 커넥터 연결 하시면 됩니다
28:06
2와트로 인터페이스 니깐 tx rx 가 엇갈려 사람들 될거고
28:10
astm 입장에서 뉴아트 1번 r xp 닝 a 포트 10번 핀 이구요
28:16
그리고 tx 핀이 a 포트 9번 빈의 연결됩니다
28:20
그래서 이제 이것까지 연결하면 fc 의 모든 하드웨어 연결이 다 끝난
28:24
거예요
28:25
사실 완성이 되어가고 있는 것 같죠
28:28
이제 큐브 mx 로 이어트 1번 초기화 1차례 구요
28:31
예전에 어쩌면 이번 챕터에서 dma 를 쓸 수도 있을 것 같다 고 언급
28:36
드린 적이 있는데 dma 를 안 써도 다 처리가 되는 것 같아서 사용하지
28:39
않겠습니다
28:40
여태까지 유아 틀을 많이 사용을 했었죠 근데 그 때는 주로 수신 위주로
28:45
했었는데 이번에는 주로 데이터를 짓으로 보내주는 걸 하게 될겁니다
28:49
물론 수심도 있긴 하지만 드론의 상태 정보들을 계속 실시간으로 보내줘야
28:54
되니까 송진 할게 좀 더 많겠죠
28:56
근데 아직 송신 인터럽트 는 안 써봤어요 그래서 이번 시간에 그걸 써볼
29:00
예정입니다
29:01
송신 인터럽트 가 수신 인터럽트의 비해서 조금 생각해야 될 게 더 많아요
29:06
우선 수중 인터럽트는 데이터가 1 바이트 수심이 되면 발생하는 인터럽트
29:10
다 라고 알고 계실텐데
29:12
송신 인터럽트 는 종류가 2가지가 있습니다
29:15
하나는 총신 레지스터가 비어있을 때 요청되는 tx 인터럽트가 있구요 또
29:21
하나는 송신이 완료되면 발생하는 tc 인터럽트가 있습니다
29:26
저희가 보낼 데이터가 좀 많아서 송신하는 코드를 그냥 일반 송진 함수를
29:30
쓰면 데이터 생신 하는 데 시간이 너무 오래 걸려서
29:34
1킬로 헤르쯔 로 들어오는 제어를 못하게 될 수도 있어요
29:38
그런데 이 두 개 인터럽트를 잘 사용하면 데이터 성신 하는 것도 우리 그
29:43
1킬로 헤르츠 타임라인에 흐르네 거의 영향을 미치지 않도록 시스템을
29:47
구현할 수가 있습니다
29:49
근데 그러려면 이투 인터럽트가 어느 시점에 발생하는 지 정확하게 이해하고
29:54
또 그 인터럽트 서비스 루틴 안에서 코드를 작성 해 줘야 되는데 ll
29:59
드라이버로 코드를 자면 그걸 다 직접 짜 줘야 해서 그럼 설명도 좀
30:03
복잡해 지고 코드도
30:05
떨어지니까 좀 쉽게 사용하기 위해서 이번에는 8 드라이버 를 사용하도록
30:10
하겠습니다
30:11
할 드라이버는 인터럽트 방식으로 송신하는 그 코드를 한줄만 짜면
30:16
나머지는 할 드라이버 안에서 다 처리 해 줘요 그래서 코드가 엄청 쉬워
30:20
집니다
30:21
좀전에 설명드린 두가지 송신 인터럽트 tx 인터럽트 랑 tc 인터럽트가
30:27
걸리는 시점을 찾아봤는데
30:29
우선 이 그림은 밑에 있는 이 레퍼런스 매뉴얼에서 따온 그림 이구요
30:33
보시면 tx 이 플래그가 하이가 되는 시점이 tx 인터럽트가 발생된
30:39
시점이 9
30:40
또 tc 플래그가 하이가 되는 시점이 tc 인터럽트가 발생 되는
30:46
시점입니다
30:47
2 1 프레임이 메시지 1 바이트를 보내는거 0 여러 바이트를 보냈을 때
30:52
tx 인터럽트 랑 그리고 tc 인터럽트가 언제 발생하는 지를 알 수 있죠
30:57
이걸 확실히 하시려면 위 아트의 개념을 좀 자세히 아셔야 되요
31:01
이건 우리가 지금 할 건 아닌것 같아서 그냥 넘어가겠습니다
31:05
우리가 알아야 될 것은 할 드라이버로 함수를 잘 같았으면 cpu 에
31:09
클럭을 최소한으로 쓰면서 데이터를 보낼 수 있다는 거고 그 함수는
31:14
좀있다가 코드 자면서 설명드리도록 하겠습니다
31:16
궁금하신분은 2표 보시구요 그리고 또 레퍼런스 매뉴얼에 뉴하트 의 상태
31:22
레지스터에 tx 이 플래그에 대한 설명 그리고 tc 플래그에 대한 설명이
31:27
있는데 이 설명을 좀 읽어 보시면 이 앞에 있는 그림이랑 같이 이해
31:32
보시면 조금 이해하는데 도움이 될 겁니다 그럼 이제 설명은 이렇게 마치고
31:37
뉴아트 1번 초기화하고 무선으로 데이터 주고 받는 것을 확인해 보도록
31:40
하겠습니다
31:41
그럼 소스 코드 작업으로 넘어가겠습니다

```



#### video 30
-ch8-2 gcs introduction

{% include youtubePlayer.html id=page.youtubeID30 %}

```diff
00:15
모듈을 하난 fc 한거라고 다른 하는 pc 암거 래서 둘 간의 데이터
00:19
주고 받는걸 맞죠
00:20
이제 이번 시간에는 앞으로 강해서 사용할지 실수에 대해서 설명을 좀
00:24
드리고요
00:25
fc 랑 gcs 간에 어떤 식으로 데이터를 주고 받아야 ucc 를 사용할
00:29
수 있는지 통신 프로토콜의 대해서도 설명 드리도록 하겠습니다
00:33
그래서 이번 시간은 설명 만들 거고 소스 코드 작업은 없습니다
00:37
먼저 질 씨스 부터 다운 받도록 하겠습니다
00:40
웹브라우저를 하나요 지구요 2 동영상 오른쪽 하단에 my 브레이브 카페로
00:44
오시면 이런 화면이 나타날 텐데 밑으로 조금 내리시면 stm32
00:49
동영상강좌 라는것 있고 그 안에 자작 들어온 개발하기 자료실 이란 항목이
00:54
있습니다
00:55
놀라서 들어 오시구요 m5 그라운드 스테이션 버전 0.9 점 6 이란
01:00
글이 있죠
01:01
역시 눌러서 들어오시면 첨부파일로 다운로드 받을 수 있게 하세요
01:05
내 pc 저장 이걸 누르시면 되고 이걸 다운받으시면 압축 파일이 하나
01:09
받았을 텐데 그 압축을 푸시면 재 이런 파일들이 나타날 겁니다
01:13
이 안에는 실행파일이 하나 있고 이걸 눌러서 이제 실행 시키면 되는데 이
01:18
폴더안에 이 3개의 dll 파일이 같이 존재해야 지정이 됩니다
01:23
그렇지 않은 실행이 안될까요 그리고 닷넷 프레임 어 4.0 이상 버전부터
01:27
돌아갈 거고
01:29
윈도우에서 만들어가고 윈도우 세븐 이랑 윈도우 텐 에서는 잘 동작하는 게
01:33
확인이 됐고 그 외에 버전은 확인하지 못했습니다
01:36
먼저 강의용 gcs 를 진행시키는
01:42
이런 화면이 나타날 거구요 이게 이제 앞으로 이 강좌가 끝날 때까지 계속
01:47
사용을 지시했습니다
01:48
it's 씨스 버전은 0점 9.62
01:51
제가 공개한 첫 번째 버전입니다 이번 비주얼 시 샵으로 개발했는데 제가
01:56
윈도우 프로그래밍 이랑 도시 샵을 잘 다룰줄 몰라서
01:59
최적화도 좀 안 되는 편이고 버그도 좀 있어요 근데 사용하는데는 큰
02:03
문제는 없을 겁니다
02:05
그럼 이제 gcs 사용법에 대해서 설명드리도록 하겠습니다
02:09
이지 cs 는 맵 기능이 가운데 있구요
02:11
밑에는 3가지 탭이 있는데 첫번째가 컴포트 랑 터미널 설정한 기능이 9
02:17
두번째가 pid 개인을 설정한 기능이 있고 마지막 탭에는 센서가 애플을
02:22
출력한 기능이 있습니다
02:24
그리고 맨 왼쪽 이 부분을 보시면 시리얼 클로즈드 라고 되는 이 두 개의
02:28
텍스트 레이블이 통신 연결 상태를 표시해주는 부분이구요
02:33
그 밑에 배터리랑 고도를 출력해 주는 부분이 있고
02:36
조종기 의 스위치 상태 랑 또 페일 세입 상태를 기록해 주는 부분이
02:40
있습니다
02:41
그 밑에는 알람을 켜고 끄는 기능이 체크 박스로 되어 있죠
02:45
이제 이 기능들이 각각 어떻게 동작하는지 하나씩 보여드리는 4
02:48
설명드리겠습니다
02:50
먼저 pca 3d r 모듈을 usb 로 연결하시면 컴포트 로 잡힐 겁니다
02:55
지난 시간에 드라이버 설정이나 않죠 그리고 그 컴포트 가 이 목록에 뜰
03:00
건데 만약에 목록에 안된다면 리 스캔 버튼 한번 누르시면 되요
03:04
눌렀더니 컴포트 유기 새로 잡혀 쪄요
03:07
이렇게 했는데도 목록에 안 나타나신 분들은 드라이버 설치가 잘 안 된 걸
03:11
수도 있으니까
03:12
장치관리자에 들어가셔서 장치가 잘 인식이 됐는지 한번 확인해 보세요
03:16
장치 관리자는 이 버튼을 누르는 실행되게 넣습니다
03:20
장치관리자에서 포트를 확장 하시면 이렇게 잡혀 있으면 되요 만약에 이게
03:24
안 잡혀 있으신 분들은 이 목록에 도안 나타날 겁니다 그러면 드라이버
03:28
설치를 다시 하시면 될꺼예요
03:31
이제 컴포트 랑 볼에 이트 알맞게 설정을 하시고 이 무선 모듈 볼에
03:35
이트는 지난 시간에 115,200 으로 설정 지났죠
03:39
다른 뉴아트 파라미터는 데이터 길이 8비트 페리 티 없고 원스타 비트가
03:43
기본설정 이구요 바꿀 수 없습니다
03:46
테스는 이제 커넥트 버튼을 누릅니다 그럼 이치 cs 프로그램 이란 pc
03:51
에 연결된 텔레 매트 리무 줄이 연결이 된 상태고
03:54
아직 들어온 이라는 연결이 되지 않은 상태죠
03:58
이제 들어온 의 전원을 넣을 건데 그럼 무선 모듈 끼리 먼저 연결이 될
04:01
거구요
04:03
그리고 지금 제 드러내는 드론의 상태를 성취한 코드가 들어 있어요
04:07
나직 여러분들은 이 코드가 안 들어 있어서 지금 들어오네
04:10
전원 넣어봐 짠 아무 동작도 하지 않을 겁니다 그러니까 우선 책의 설명을
04:13
들으시면서 ccs 에 어떤 기능들이 있는지 만 먼저 이해하시기 바랍니다
04:18
그럼 이제 드론 의 전원을 넣어보겠습니다
04:25
전원을 넣었더니 지실 3 뭔가 데이터들 출력이 되고 있죠
04:29
그럼 먼저 맵기 는 부터 설명 드리도록 하겠습니다
04:33
사실 맵은 * 기능이 없어요 만약에 gps 웨이포인트 비행 같은걸 한다면
04:38
2 맵 기능이 조금 중요할 수 있겠지만 제 수업에 선 그건 다르지
04:41
않으니까
04:41
매끼니 크게 중요하지 않을 거 같습니다 그냥 현재 들어온 의 위치가
04:45
어딘지 확인하기 위한 등도 라고 보시면 될 것 같아요
04:49
우선 맵을 마우스 왼쪽 클릭하시면 해당 위치에 좌표가 표시되도록 해
04:54
놓았구요
04:54
우클릭 으나 먹이는게 없습니다 그리고 좌 클릭하고 드래그 하시면 맵
04:59
이동을 하실 수 있고 마우스 휠로 확대도 는 축소할 수 있습니다
05:04
또 드러내자 표를 맵상에 이렇게 표지를 하는데 현재 좌표가 빨간색 화살표
05:09
구요
05:10
이전에 수신된 20개 좌표가 파란색 점으로 표시됩니다
05:14
이동하는 패턴을 좀 확인할 수 있게 이렇게 해놨어요
05:18
그리고 이 빨간색 화살표는 센서에 헤딩 값에 따라서 같이 회전합니다
05:24
보시면 지금 들어 오늘 헤딩을 회전시키면 저 빨간색 화살표 도 같이 회전
05:29
하 죠
05:30
그리고 옆에 위도 경도 고도 정보가 같이 표시되도록 해놨습니다
05:36
그리고 왼쪽 부분을 보시면 들어온 중앙고 정 이라는 체크박스가 있는데
05:40
이걸 체크를 하시면 현재 수신된 드러내 위치를 맵 중앙으로 고정시킵니다
05:47
지금 제프 씨는 가상의 위도 경도 정보를 조금씩 바꿔가면서 출시했을 보내
05:51
주고 있구요
05:52
좌표 표시가 잘 되는걸 지금 보여드리고 있는 거죠 그래서 여기까지가 맵
05:57
기능인데 그냥 현재 위치를 표시하는 용도의 요 그리고 참고로 이 맵을
06:02
로드 할 때는 인터넷 연결이 필요합니다
06:05
만약에 밖에서 노트북 같은걸로 작업을 하신다면
06:08
노트북에 못해 더링 같은거 에서 인터넷 연결을 해야 된다 말씀이에요
06:13
이제 gcs 메뉴 탭을 보시면 이 안에 하위 탭 이 3개가 있는데 선택
06:18
하시려면 탭의 제목을 클릭하시면 되요
06:22
그리고 2 전체 탭을 숨기지 라면 쥬 cs 메뉴 이 부분을 클릭하시면
06:26
전체가 다 밑으로 내려갑니다 그리고 다시 클릭하시면 제 확장이 되구요
06:31
그럼 이제 첫번째 태빈 컴포트 랑 터미널 기능에 대해서 설명드리도록
06:35
하겠습니다
06:37
이 왼쪽 컴포트 부분은 아까 설명 드렸으니 까 더 설명 드릴 건 없고
06:41
오른쪽 부분에 터미널 기능을 넣었는데 이건 좀 쓸 때가 있을 것 같아 더
06:45
넣어 났구요
06:46
기본적으로 터미널에 출력하는 부분이 비활성화되어 있습니다
06:50
이걸 키면 수신된 데이터가 이 텍스트 박스에 표시가 되는데
06:54
근데 전체 프로그램이 조금 느려져요 그래서 필요한 경우에만 활성 알 수
06:58
있도록 체크 박스를 넣었습니다
07:00
기본은 * 성 되어있구요 그리고 수신된 데이터는 아스키 랑 104 중에
07:05
선택해서 출력할 수 있도록 하였습니다
07:07
근데 이걸 활성을 하면 이제 수신된 데이터가 여기 표제가 되고
07:10
104 를 선택하면 그 때부터는 헥사 로 데이터가 출력이 되죠 그리고
07:15
송신 도 아스키 랑 헥사 중에 또 선택해서 송신할 수 있도록 해놓았고
07:20
작은 크게 씁니다 그리고 아스키 는 여기에 데이터를 쓰면 써진 데이터가
07:26
그대로 아스키 형태로 보내지는 데이 샌드 버튼을 누른 보내시구요
07:30
그렇게 맨 마지막에 줄바꿈 문자를 추가할 것인지를 선택할 수 있게
07:35
났습니다
07:35
이걸 선택하고 샌들 하면 이 뒤에 줄바꿈 문자가 포함되어 서 이제 전통이
07:41
된거죠
07:42
그리고 헥사 를 선택하면 이미 텍스트 박스가 활성화 되는데 여기에는
07:47
0부터 9까지 숫자 란 그리고 팩 쓰니깐 a b c d e f 까지 쓸
07:53
수 있습니다
07:54
16 쨍 서니까 그 외의 기들은 입력이 안되요
07:58
앞에 접두어 0 x 는 붙이지 않습니다
08:01
예를 들어 0xff 이라는 값을 보내려면
08:05
여기 ff 이렇게 쓰시고 샌드 버튼을 누르시면 되요
08:10
여러 바이트를 보내려면 보낼 바이트 사이에 띄어쓰기 로 9분해 주시면
08:14
됩니다
08:15
0xff 랑 0 x 2로 이런걸 보낸다 그러면
08:18
ff 띠고 1봉 이렇게 보내면 된다는 말입니다
08:23
근데 버그가 좀 있는데 이 중간에 띄어쓰기가 조금 많거나 는 부분
08:27
앞에 띄어쓰기가 있거나 뒤에 띄어쓰기가
08:31
이렇게 들어있으면 샌드 버튼을 누를 때 에러 창이 뜰 수가 있어요
08:35
그때는 보낼 데이터 앞뒤에 띄어쓰기를 다 없애고 하시면 될거예요
08:41
아 스킨은 그런거 없습니다 그냥 이 띄어쓰기 같은거 드는 그 끼어 쓰기
08:45
포함해서 다 전송됩니다
08:48
아까도 말씀드렸듯이 이 수신 창을 활성화 시켜 놓으면 전체 프로그램이 좀
08:52
들여 지니까 필요할 때만 켜서 확인하도록 가지고 다 확인했으면 다시
08:57
비활성 하시기 바랍니다
08:59
이 터미널이 조금 편할 거에요 이거 없으면 터미널 프로그램 따로
09:03
실행시켜서 확인하고 뭐 그래야 될 일이 있을 수도 있는데 저는 이제
09:07
그렇게 쓰다가 그게 좀 불편해서 그냥 2 출시 s 에 터미널 기능도 같이
09:11
넣어 놨습니다
09:12
그러면 그 다음에 이제 pid 개인 설정 하는 기능을 설명 드리도록
09:16
하겠습니다
09:18
pad 개인 설정 탭의 는 두 가지 영역이 있는데 왼쪽에 있는 이 부분이
09:23
설정할 개인을 적고 샌드 버튼을 눌러서 이 개인들을 fc 로 전송한
09:28
부분이구요
09:29
오른쪽 부분은 fc 에서 수신 받은 개인을 표시 해주는 부분입니다
09:34
먼저 왼쪽을 보시면 개인 종류가 롤 피치 요가 따로 이고
09:39
울 비치는 더블 pid 제어 방식을 쓸 거고 내부 외부 pad 개인이
09:43
따로 있다고 했죠 그래서 이 부분이 롤의 내부 pid 개인을 설정한
09:49
부분이고
09:50
이 밑부분이 롤의 외부 pid 개인입니다
09:53
설정한 값들을 여기 적고 샌드 버튼을 누르면 이 값들이 fc 로
09:57
보내집니다
09:59
그리고 요 는 싱글 pid 방식을 할 건데 요 의 조종기 스틱이 중간에
10:04
있느냐 아니냐에 따라서 헤딩 각도 제어 또는 각속도 제어를 따라온다
10:08
그렇죠 그래서 그 때 사용할 각각의 개인 드립니다
10:12
역시 개인을 여기다가 쓰고 샌드 버튼을 누르면 fc 로 보내집니다
10:17
이 개인을 입력하는 부분에 는 숫자 랑 소숫점 그리고 부분만 입력
10:21
가능합니다
10:22
영문자 나모 특수문자 이런건 입력이 안되요
10:26
그리고 이 위에 rp 커플링 이렇게 되어있는 것은 보통 로리 라는 피치가
10:30
개인이 거의 같아요
10:32
그래서 이걸 체크를 해 놓으면 롤 개인을 바꾸는
10:36
이렇게 피치 개인도 같이 바뀌죠 또는 피치 개인을 바꾸면 뭘 개인이 같이
10:41
바뀌는 기능입니다
10:42
이거 체크 해제하면 각각 을 따로 따로 설정할 수 있습니다
10:47
그리고 이렇게 해서 샌드 버튼을 누르는 개인들이 점성이 될텐데
10:51
전송한 개인들은 파일로 따로 저장이 되구요
10:54
그 파일을 보시려면 오픈 폴더 버튼을 누르시면 그 폴더가 열립니다
10:59
이 개인을 파일로 저장하는 것은 들어온 개발할때 개인을 바꿔가면서 비행
11:05
성능을 테스트를 해야 될 일이 있을 수 있는데 그러면 개인을 바꿀 때마다
11:09
어디다가 그 개인들을 기록을 해 놔야 되는데 그걸 좀 편하게 하려고
11:13
이렇게 자동으로 저장하는 기능을 만들었습니다
11:16
저장이 될 때 개인을 바꾼 날짜랑 시간 도 같이 자정 되도록 해 놨습니다
11:22
그리고 마지막으로 왼쪽 부분에 이렇게 마지막으로 적응 캔들은 별도의
11:26
파일로 따로 저장이 되구요
11:29
gcs 를 껐다가 다시 실행하면 지금 이 숫자들이 그대로 다시 로드
11:33
되도록 해 놨습니다
11:35
4탄 파일로 저장하는 모든 기능들은 7시 예수를 종료 시켜야지 파일 저장
11:39
도 완료됩니다
11:41
이제 오른쪽 부분은 fc 가 자신의 pad 개인은 출시 s 로 보내주면
11:46
그걸 여기에 출력해 줍니다
11:48
이 버튼들은 fc 현재 개인을 알려 달라고 요청한 갱 이구요
11:53
각각의 개인들을 이렇게 따로 요청할 수도 있고 아니면 이유있는 리퀘스트
11:57
올 개인 버튼을 누르면 모든 개인을 다 알려 달라고 요청할 수도 있습니다
12:03
그리고 이 카피 버튼은 그렇게 해서 수신된 개인이 여기 이제 표시가
12:07
되는데 이 개인들을
12:08
여기에 그대로 다시 복사하고 싶을 때 이제 개인을
12:13
이런식으로 하나씩 적어도 되지만 그렇게 하려면 거다 적으려 면 좀 시간이
12:18
오래 걸리니까 이 버튼을 누르면 여기에 있는 개인들이 여기에 그대로 다
12:21
다시 표시가 되요
12:23
눌러 보겠습니다 눌렀던 이야기 개인들이 다 이렇게 표시가 됐죠
12:27
이 기능 말고 딴거 없어요 뭐 개인을 전송 한다거나 그런 기능은 없습니다
12:32
이제 대충 설명을 드렸는데 지금 제 드러내는 개인을 저장하고 보내주는
12:37
기능이 다 들어있어요
12:39
그리고 처음 들어온 의 전원을 넣으면 개인을 gcs 로 보내 주는 기능도
12:42
들어 있습니다
12:44
그래서 2개 인수 신부의 지금 뭔가 값들이 출력이 되어 있죠 그래서
12:48
어떻게 동작하는지 조금 보여 드리면 우선 개인을 조금 바꿔보겠습니다 예를
12:53
들어 1.1
12:54
2.2 3.3 자 이렇게 개인을 보낼 건데 이렇게 적은 후에 샌드 버튼을
13:00
누르면
13:01
지금 fc 에서는 이 값들을 받으면 그걸 파싱해서 입이 롬에 저장하고 요
13:07
다시 그 값을 입욕 에서 읽어와서 질 실수로 보내줍니다
13:11
그러면 gcs 에서는 받은 개인을 여기에 표시해준다 그렇죠 그래서 보내진
13:16
값이 잘 받아 졌는지 를 확인할 수 있게 해놓은 겁니다
13:19
개인정보는 제 10대 정말 중요한 바람이 따라서 반드시 꼭 이렇게 잘
13:23
저장이 됐는지 확인을 해 봐야 되요
13:26
자 눌렀더니 지금 좀 버그가 있는데 다시 눌렀더니
13:30
자 보낸 값이 이렇게 잘 출력이 돼 짜 이 말은 fc 가 개인 데이터를
13:34
문제없이 잘 받았고 또 그게 ep 롬 에 저장 도 잘 됐다 는 말입니다
13:40
그리고 요청하는 기능 또 잘 동작하는지 보여 드리면 우선 드론 의 전원을
13:44
다 빼고 gc 했어도 종료 하겠습니다
13:48
했고 들어오네 전원도 다 빼고 양
13:53
그 다음에 드론 의 전원을 다시 넣구요
13:59
ccs 를 다시 키고
14:04
우선 컴 포트 연결 하고요 그리고 pid 개인 설정 탭의 어떤 이 자의
14:10
전에 마지막으로 여기 적었던 개인들이 잘 노드가 됐죠
14:14
그리고 아직 들어온 에서는 자기 개인을 주 cs 로 보내주지 나는
14:18
상태입니다
14:19
이제 fc 한테 저장된 개인 을 요청 해 보겠습니다
14:22
이거 하나씩 다 눌러도 되구요 한번 눌러 보겠습니다
14:25
이렇게 스트 햇더니 지금 fc 가 가지고 있는 롤의 내부 pid 개인
14:31
약이 잘 표시가 했죠
14:33
또 롤의 of pid 개인이 잘 표지가 됐습니다
14:36
그리고 리퀘스트 올 개인 을 누르면 이제 모든 개인을 한꺼번에 다 요청한
14:40
기능이에요
14:42
했더니 지금 fc 에서 자기가 가지고 있는 모든 개인들을 다 주 cs 로
14:46
보내 줬죠
14:48
드론의 전원을 뺐다가 넣었는데도 이전에 값을 잘 기억하고 있습니다
14:52
그래서 여기까지가 개인 설정 탭에 대한 설명이고
14:56
이제 센서 그래프 출력 기능에 대해서 설명드리겠습니다
15:01
이제 이 부분이 그래프가 그려진 부분 이고 오른쪽이 부분이 어떤 데이터를
15:05
그래프로 그릴 것인지 선택하는 부분입니다
15:08
이 중 하나를 선택하면 그에 따른 그래프가 여기 그려진 거죠
15:12
출력할 수 있는 센서 데이터는 bn 5080 에롤 빛이요 각도가 있고
15:17
그리고 mp se ha 체에 기압 고도 가 있습니다
15:21
먼저 로 를 선택하고 드론을 좌우로 기울이면
15:26
이렇게 센서 갑시다 변하고 있죠 으 그래프도 잘 그려지고 있습니다
15:31
그리고 또 피치를 선택하고
15:33
이번엔 앞뒤로 기울이면 이렇게 잘 변하고 있죠
15:38
지금 출력되는 이 값에 부호는 중요하지 않아요
15:41
돈은 나중에 pid 제어 하기 전에 일치시켜 죽인 할 건데 지금은 큰
15:46
의미는 없습니다 그래서 그냥 넘어가시면 되요
15:49
그리고 롤 피치를 똑같이 출력할 수 있도록 해 놨는데
15:53
파란색 빨간색 그래프가 같이 출력이 되고 있죠
15:56
자 이렇게 그랬더니 롤 피치가 같이 저녁 되고 있습니다
16:00
그리고 요는 헤딩 회전 각도는 된
16:03
역시 헤딩을 회전 시키면 이렇게 잘 변하고 있죠
16:10
지금 출력되고 있는 롤 피치 5 에 다니는 도 다니구요
16:15
그리고 분해 능은 0.01 또 로 출력되고 있습니다
16:19
그리고 알트 를 선택하고 이번엔 이제 호도를 좀 출력을 해 보려고 하는데
16:24
고 던지 금속 값이 출력되고 있네요
16:27
기압 고도 라서 음수가 출력이 될 수도 있어요
16:30
그리고 이 아래로 조금씩 움직여 같다니
16:36
쪼끔 값이 변하고 있겠나요 줌을 조금 더 땡겨 보겠습니까
16:42
이렇게 하고 위아래로 움직였더니
16:45
값이 이렇게 좀 변하고 있긴 한데
16:48
네 지금 끽해야 제가 뭐 30cm 위아래로 움직이고 있는 거라서 값이
16:53
크게 변하지는 않아요
16:55
그리고 지금 출력되고 있는 이 고도의 다니는 m 다니구요
16:59
분해 는 0.1 m 입니다
17:02
그리고 이 밑에 로리 랑 3 p 이렇게 됐는데 여기서 3 포인트는
17:07
나중에 pid 제어 할 때 목표 각도 가 될 겁니다
17:11
그 목표가 또는 조종기 의 키 값이 목표 각도 로 변환 대사 사용한다
17:16
그랬죠
17:17
4 조종기 값이 예전에 확인했을 때 최소 가천 최대 가 2000년 는데
17:23
이걸 롤 비치는 플러스 마이너스 60도 이런식으로 변환해서 사용할 겁니다
17:28
그리고 그 코드가 지금이 fc 에 들어 있어요
17:32
그래서 로리 랑 3 포인트를 출력해서 보면
17:36
이제 조정 계정을 키고 롤은 오른쪽 스틱에 좌 우 정
17:41
이거를 이렇게 왼쪽으로 보냈더니
17:49
사실 왼쪽으로 보냈더니
17:52
60도 가 나하고 그리고 맨 오른쪽 으로 보내면
17:55
- 60도 이렇게 출력되고 있습니다 60도 간 요즘 50도 가 출력
18:00
되겠네요
18:01
그래서 이렇게 변환해서 사용하도록 할 꺼구요
18:05
이게 pid 제어의 목표 각도 가 될 겁니다
18:08
그리고 센서가 압도 또 같이 출력이 되니까 이제 음 예를들어 pid
18:13
제어를 한다고 했을 때 이 조종기를 왼쪽으로 이렇게 떴을 때 목표 각도가
18:19
플러스 50도 가 된거죠 그러면
18:21
들어온 도 그거에 따라서 같이 이렇게 50도 로 기울어 지게 될 거란
18:25
소립니다
18:26
그래서 그거를 좀 출력해 보려고 이 두가지를 같이 그래프로 출력하면
18:31
pid 제어의 상태를 좀 확인할 수 있어요
18:34
이렇게 같이 출력을 하게 해 놓은 겁니다
18:37
그리고요 제어는 두가지 싱글 pid 제어가 상황에 따라서 각각 따로따로
18:42
돌아 갈 거라
18:43
출력되는 값도 상황에 따라서 좀 바꿀 수도 있을 것 같아요
18:47
예를 들어 요에 조종기 값이 준비를 때
18:50
요는 이제 각도 제어 가 될 텐데 그때는 bn 5080 회전 각도를
18:55
출력을 하고 그리고 조종기 갑질 중 미리 아닐 때는
18:59
각속도 제가 되니까 그때는 ic 에 미국 및 02 센서에 각속도 값을
19:04
출력을 하게 될 수도 있을 것 같습니다
19:07
이건 아직 확실치 않고 우선은 회전 각도를 출력하는 게
19:11
어 아마 될 것 같아요 그렇게 출력을 해서 진행하게 될 거 같습니다
19:15
그리고 고도는 pid 제어를 하게 아니라서 3 p 로 출력되는 값이
19:19
없습니다
19:21
이것은 예 알트 랑 3 p 를 출력하게 했는데 지금
19:26
er 트에 3 p 는 그냥 역만 출력이 되고 있죠
19:30
실제 고도는 이 파란색 그래프 구요 2 3 포인트는 3 p 가 없기
19:35
때문에 그냥 0으로 초기화 해서 출력하고 있는 상태입니다
19:38
그리고 여기서 그려지는 이 데이터들은
19:41
fc 에서 이 데이터들을 프로토콜에 맞게 정해진 순서와 형태대로
19:45
보내주는데
19:46
cs 에서는 그 데이터들을 또 역으로 정해진 순서가 형태에 맞게 8시
19:51
해서 이렇게 그래프로 그려 주고 있는 거예요 그래서 만약에 fc 에서
19:56
그 프로토콜 대로 보내주지 않고 다른 데이터를 보내면 그게 그대로 여기에
20:00
출력이 될 겁니다
20:02
그랬으면 이제 스타트를 로그 버튼은 수신된 데이터를 파일로 저장하는 기능
20:08
이구요
20:08
오픈 폴더를 누르면 그 저장된 폴더가 열립니다
20:13
뭐 전화 좀 해 보겠습니다 스타크의 를 눌렀더니
20:16
이제 버튼의 이름이 스타 블로그 버튼으로 바뀌었죠
20:19
그리고 지금 이 파일로 저장되고 있는 상태고
20:24
야구를 피치를 조금씩 한번 기울여 보면서 이렇게
20:29
값을 주고 바꿔 받고 이제 저장이 다 끝났으면 스타 블로그 버튼이 버튼
20:34
다시 누르시면 되요
20:36
자 그럼 이제 저장이 끝난 거고 오픈 폴더 를 누르시면 그 저장된
20:40
데이터가 이렇게 깍깍 파일로 따로 따로 저장이 되는데 이게 어떻게
20:46
저장되는 지는 있다가 설명을 드릴 거에요 그래서
20:49
저장된 데이터를 열어봤더니 이런 값들이 이렇게 텍스트로 저장 되어 있죠
20:59
그래서 이렇게 파일 저장하는 기능이 들어 있고 그리고 그래프 크게 보기
21:03
버튼을 누르면 그러니까 좀 크게 그려 줍니다
21:08
멀리서 보면 이제 이렇게 크게 보는게 조금 보기가 편하겠죠
21:13
이런 기능도 산정 않았구요
21:15
다시 짧게 보기 를 누르면 짜 가지고 그리고 오토 스케일은
21:19
이 출력되는 값들의 최대 최소값을 에 따라서 이 스케일이 자동으로 바뀌는
21:24
경입니다
21:25
그리고 클릭하시면 이렇게
21:30
보시는 그래프의 스케일의 자동으로 변화 작
21:33
으 음식은 들어오는 가 많이 나갔는데
21:37
sk 링 이 부분으로 바뀔까요
21:41
이렇게 스케일이 계속 변하고 있는 상태고 그리고 오토 스케일을 끄시고
21:46
이 그래프의 마우스 올리시고
21:49
휠 을 위아래로 왔다갔다 하면 그래프를 줌인줌아웃 할 수 있구요
21:54
그리고 마우스 우클릭을 한 채로 드래그를 하시면 상 하로 이동할 수
21:59
있습니다 좌우로는 이동이 안되요
22:01
상하로 많이 이동할 수 있습니다 그래서 이렇게 까지 가 그래프 기능
22:06
입니다
22:08
그럼 이제 마지막으로 이 상태 표시 부분에 대한 설명을 드리고 제 씨의
22:11
설명을 마치겠습니다
22:13
먼저 이 위에 있는 두 개의 큰 것이 는
22:15
위에 글씨가 컴 포트 연결 상태를 나타내고 요
22:19
그 아래 글씨는 fc 에서 데이터가 잘 받아 지고 있는지 fc 와 의
22:23
무선 연결 상태를 나타냅니다
22:25
만약에 무슨 이유에서든지 fc 에서 데이터가 3초 이상 안 들어오면 이
22:30
글씨가 바뀌고 알람이 울리게 되어 있어요
22:33
그 알람이 울리게 할 건지는 체크 박스로 선택할 수 있게 되어 있습니다
22:37
기본은 통신두절 알라는 꺼져 있는 상태입니다
22:41
그리고 그 밑에 배터리 전압을 표시했는데
22:44
전화 빈 c 폴트 이하로 떨어지면 역시 알람이 울리고 그 알람이 울리게
22:47
할 건지는 체크 박스로 선택할 수 있고 기본은 또 꺼져 있는 상태입니다
22:52
그리고 고도 정보도 표시했는데
22:54
이건 맵상에 이 마커로 도 표시가 되고 있고 도 그래프로 확인할 수
22:58
있지만 art 그래프를 보시면 여기서 확인할 수 있습니다
23:02
그리고 그 밑에 조종기 의 스위치 a 랑 스 씨의 상태를 표제 놨고 또
23:08
그 밑에는
23:09
fsi 6 조종기 랑 아이의 6배 수신기의 연결이 끊어져 않는지
23:13
펜 세이프 의 상태를 출력해 주는 부분이 있구요
23:16
이 페일 세이프 활성화 되면 여기 경고 메시지가 좀 크게 뜨고
23:20
그리고 알람이 올리는데 2 3일 세이프 는 되게 위험한 거라서 기본 켜져
23:24
있게 해놨습니다
23:26
그리고 들어온 중앙 고정을 아까 설명 드렸죠
23:29
그러면 동작하는 것을 잠깐 보여 드리도록 하겠습니다
23:32
확인 해야 되니깐 알람을 먼저 사키 구요
23:36
요 지금은 들어온 이랑 송신기 다 전원이 켜져 있는 상태인데
23:40
지금 상태에서 이 드론의 선언 을 빼면 fc 데이터를 못 받으니까 그땐
23:44
이 메시지가 바뀌고 또 알람이 울릴 겁니다
23:47
한번 확인해보겠습니다
23:51
저는 뺐더니 ccs 에서
23:54
입에 cg 가 이렇게 바뀌고 또 알람에 어울리죠
23:57
그리고 얄라 믈 끌려면 통신도 절 경고음이 체크박스를 체크하시면 되요
24:03
으 다시 들어온 에 전원을 넣으면 4
24:06
[음악]
24:08
자 이제 데이터가 사실이 잘 들어온다 이렇게 표시가 되고 알람이 꺼져 쬲
24:13
그리고 이제 페일 세이프 상태의 한번 확인해보겠습니다
24:16
지금 들어오는 전원이 켜져있고 송신기 에 채널 끄면 조종기 랑 수신기의
24:21
연결 끊기면서 펜 세이프 상태가 된거죠
24:24
한번 확인해 보겠습니다
24:27
참 이뻤던 2
24:30
글씨가 이렇게 바뀌었고 그리고 펜 세이프 알람에 지금 올리고 있는
24:34
상태입니다
24:35
지금 되게 위험한 거라서 이렇게 좀 글씨로 큰 글씨로 이렇게 표준
24:39
해놨습니다
24:40
사시미 조종기 정해 키면
24:43
페일 세이프 가해 제가 됐고 이제 다시 원래대로 돌아왔죠
24:47
그래서 이렇게 해서 이것들을 확인을 해 봤고
24:49
그리고 스위치 이랑 스위치 c 의 상태를 이제 또 확인해볼 건데 지금
24:55
둘다 맨 위로 올라가 있는 상태고 올라가 있으면 0이고
24:59
s 위치에 있는 내리면 일로 바뀝니다
25:02
뭐 해 볼게요 내렸다는 일이 돼 점 다시 올리면 용
25:07
이렇게 해서 바뀌게 될까요 그리고 스위치 7 씨는 3단 3 진데 위로
25:12
올렸을때 0 중단으로 내리면 인 밑으로 내리면 입니다
25:16
그래서 0이고 중단으로 어떤 일로 바뀌었고 뺀 밑으로 되었던 e 로
25:21
바뀌었죠
25:23
이렇게 해서 이것도 확인을 해 봤구요
25:25
그리고 배터리 전압은 지금 이 배터리 전압을 제가 임의로 바꿀 수가
25:29
없어서 하려면 파워서플라이 연결해 써야 되는데 그럼 너무 복잡해져서
25:33
그거는 보여 드리지 않고 이제 실제 이걸 사용하시면 배터리 전압이 10
25:38
볼트 미만으로 떨어졌을 때 어떤 현상이 생기는지 한번 직접 확인해 보시기
25:42
바라겠습니다
25:44
여기까지가 지시해서 설명 이구요 이게 gcs 에 모습이고
25:48
그리고 ccs 안에 있는 기능들을 이렇게 정리를 해 놨는데
25:52
좀전에 시원하면서 다 설명드린 내용이라 넘어가겠습니다
25:56
보실분들은 일시 정지 하시고 한번 읽어보세요
25:59
그리고 다시 폴더를 보시면 중요한 두 개의 파일이 더 있는데
26:03
emt still eula 점 tadpole 이 두개가 좀 중요한
26:09
내용이라서 한번 열어서 읽어보시기 바랍니다
26:12
ccs 에도 이 오른쪽에 라이센스 라는 버튼이 있는데 여기 있는 내용이
26:17
정리되어 있는 파일의 요 그래서 꼭 한번 읽어보시기 바랍니다
26:22
이제 치실 스에 무슨 기능이 들어 있고 어떻게 동작하는지 설명을 드렸는데
26:27
기능들을 봤더니 fc 에서 받은 데이터를 그래픽적으로 혹은 텍스트로
26:32
출력해 주는 기능이 대부분 이죠
26:35
즉 gcc 량 fc 랑 데이터를 주고받는 프로토콜이 약속이 되어 있는
26:39
거고
26:40
실제로 그렇게 데이터를 주고 받고 있는 상태입니다
26:43
그래서 원하는 데이터 드리지 시스의 잘 출력이 되고 있는 거죠 그러면 이
26:47
둘 간의 어떤 식으로 데이터를 주고 받아야 되는 지를 알아야 됩니다
26:51
fc 는 gcs 한테 이런 데이터들을 보내고 반대로 출시 쓴 fc 한테
26:56
이런 데이터들을 보내주고 있는 거예요 그래서 자세한 프로토콜을 표로
27:00
정리해 놓았습니다
27:02
다운로드 받은 파일 중에 pdf 파일의 나 있을텐데
27:06
이걸 열어서 보시면 어떤 데이터들을 어떤 순서와 형태로 주고받는 지가
27:11
정리가 되어있어요
27:12
근데 딱 보시면 한눈에 잘 이해가 안 되실 거에요
27:15
그래서 원래는 이번 시간에 다 설명을 들려 그랬는데 지금 설명이 좀
27:19
길어져서 다음 시간에 설명을 하나씩 천천히 드리도록 하겠습니다
27:24
이지 cs 를 사용하기 전에 좀 알아두셔야 할게 있는데 먼저 hcs 는
27:29
제 자작 들어온 개발하기 동영상 강 에서 사용하려고 만든 거구요
27:33
보시면 버전이 0점 9.62 줘
27:36
버전 1 보다 작다는 것은 정식버전이 아니란 소리 에요
27:40
즉 버그도 좀 있고 최적화도 안 돼 있단 말입니다
27:43
근데 강의에서 사용하게 큰 문제는 없을 거구요
27:46
그리고 gcs 가 그라운드 컨트롤 스테이션에 약산 돼
27:50
사실 들어 오늘 컨트롤 하는 기능이 제지 실세는 없어서 그냥 그라운드
27:55
스테이션 이라고 보는게 맞을것 같습니다
27:58
이지 cs 는 드론의 상태를 눈으로 확인하기 위한 용도로 만들어진 거고
28:04
데이터를 저장해서 그걸 가지고 분석 알고리즘 같은걸 돌리기는 적합하지
28:08
않습니다
28:09
저장된 데이터를 가지고 뭔가 연구를 하려면 데이터 저장 주기가 충분히
28:13
빨라야 되요 근데 보셨듯이 lg cns 는 최대 50 페루 찔 까지
28:18
저장이 되니까 포스트 프로세싱 같은걸 하기엔 좀 느린 죽입니다
28:23
그냥 비행하면서 데이터가 이렇게 바뀌었군요 정도만 보실 수 있을 거에요
28:28
그래도 파일로 저장하는 기능이 없는 것보다 있는 게 좋을 거 같아서 구현
28:31
해 놓았구요
28:33
이 프로그램은 비쥬얼 시 잡 닷넷프레임워크 4.0 환경에서 개발되었습니다
28:39
아마 윈도우 세븐 이상의 os 에서는 왠만하면 다 돌아갈까요
28:43
그리고 사용된 라이브러리 는 주님의 4
28:46
제드 그래프 bs 윈도우 폼 이렇게 있습니다
28:50
그래서 아까 압축풀면 dll 파일이 몇 개가 같이 들어 있었는데 그
28:53
파일이 없으면 실행이 안될까요
28:56
이 각각의 라이브러리 들은 구글링 하시면 금방 사지를 수 있을거구요 또
29:00
이 api 를 사용한 오픈 소스 도 많이 공개가 되어 있으니까
29:04
저처럼 직접 ccs 를 구현 하실 분들은 이 api 를 사용한 좀 편할
29:08
거에요
29:10
그리고 제주시 s 는 윈도우에서 만들어 가구요
29:13
아까도 말씀드렸듯이 리듬이 랑 이유에는 2점 txt 파일은 중요한
29:18
내용이니까 한번 읽어보시기 바랍니다
29:21
지금 강의에서 설명드린 내용들이 그 안에 다 정리가 되어있어요
29:25
2주 cs 는 비영리 목적으로 는 어디에서 사용하셔도 상관 없고 영리적
29:30
으로 사용할 수 없다고 되어 있는데 사실 영리적 으로 쓰긴 기능이 너무
29:33
없죠
29:35
그리고 중요한 etcs 를 사용하다가 어떤 문제가 발생을 하게 된다면
29:40
그것은 제가 책임지지 않습니다
29:42
예를 들어 개인을 잘못 입력하고 그걸 fc 에 전달해서
29:46
전달하면 비행 하다가 사고 같은게 날 수 있겠죠
29:50
그리고 그 외에도 쥬 cs 를 사용하다가 또 다른 문제들이 발생할 수
29:54
있을 텐데 그것은 다 사용자의 책임입니다
29:57
이 내용은 gcs 에그 라이센스 버튼을 누르면 창이 하나 뜨면서 설명이
30:01
나오는 레이크 안에도 들어 있는 내용입니다
30:04
근데 물론 저는 당연히 설명 드릴 때 최대한 사고가 나지 않도록 설명을
30:07
드리긴 할 거에요
30:10
그리고 이게 정식버전이 아니다 보니까 자잘한 버그들이 좀 숨어있을 수도
30:13
있는데 제가 개발하면서 발견된 몇 가지 버그 들은 최대한 해결을 하고 또
30:18
최적화도 시켜봤는데
30:19
그래도 버그가 좀 있긴 합니다 근데 동작하면서 크게 문제가 되지 않는
30:24
버그 들은 그냥 무시 하겠습니다
30:25
일단 큰 버그가 발견되서 도저히 사용이 불가능한 경우라면 그 버그를
30:30
수정해서 업데이트 하도록 하겠습니다
30:33
그리고 2주 cs 는 딱 이 강의 용도로만 사용을 걸어서
30:37
이외에 기능을 더 추가할 계획은 없습니다
30:40
그리고 맥 로드할 때 아까 인터넷 필요하다 고 말씀드렸는데
30:44
밖에서 테더링 같은거 하면 당연히 데이터 요금이 발생 하겠죠
30:49
그리고 맵 기능이 쥐 메대 그 라이브러리에서 제공하는 구글 맵을 쓰고
30:54
있는데 이게 최 신화는 계속 되고 있는 것 같은데 그래도 정확하지는 않을
30:58
수 있어요
30:59
건물 이름이 나도록 모양 이런게 정확하지 않을 수 있단 말이죠 그리고
31:03
마지막으로 센서 데이터를 저장하면
31:06
각각의 항목들은 탭으로 9분 2 되구요 그리고 그 다음 데이터가 받아주면
31:10
다음 줄에 저장됩니다
31:12
이것은 데이터 저장 하고 그 파일을 열어 보시면 바로 아실 거에요
31:17
이제 제가 개발하면서 발견한 몇 가지 버그 들에 대해서 설명을 좀 드리면
31:22
먼저 usb 를 연결하고 컴포트 를 커넥트 한 후에 강제로 usb 를
31:26
제거를 하면 그 후엔 디스커넥트 가 안됩니다
31:30
그래서 디스커넥트 가 안되면 usb 가 빠져 있을 수 있으니까 다시
31:34
usb 를 꼽고 디스커넥트 를 하시던가 아니면 그냥 ccs 를 껐다가
31:39
키면 됩니다
31:40
터미널 기능을 활성화 시키면 전체 프로그램이 좀 느려진 영상 있다 그리고
31:45
그리고 터미널로 핵 싹 값을 상승할 때 그 폰 l 데이터 앞뒤에 빈칸이
31:50
쓰면 에러가 날 수 도 있는데 이건 거의 해결을 해 놨는데 그래도 가끔
31:54
에러가 나는것 같습니다
31:56
그때는 앞뒤에 빈칸 들 다 없애고 보내시면 되구요
31:59
그리고 데이터 수신이 너무 빨리 되면 그래프가 느려집니다
32:04
예제가 50hz 로 는 테스트해봤는데 50회 때까지는 문제없이 잘
32:08
동작하는 이까
32:09
fc 에서도 최대 50 페루 주로 데이터를 보내 주면 되요
32:13
다음 시간엔 이제 그 다음 시간 부터 실제 코드 작성을 할 건데 그때
32:17
50hz 주기로 데이터를 보낼 겁니다
32:20
그리고 pid 개인 소진할 때 가끔 이상한 데이터가 출력이 되는데 원인은
32:26
아직 못찾았습니다
32:28
만약에 이상한 데이터가 소신이 돼서 그게 표시가 되면 반드시 다시 개인을
32:32
요청해서 fc 의 개인이 정상적으로 들어 있는지를 꼭 확인을 하셔야
32:36
됩니다
32:37
그래서 이렇게 가 제가 개발하면서 발견한 버그 드리고
32:41
이외에도 더 있을 수도 있는데 큰 버그가 있으면 말씀을 해주시면 제가
32:45
확인을 해보고 수정할 수 있으면 수정해서 다시 업로드 하도록 하겠습니다
32:50
그런 설명이 또 많이 길어졌는데 이번 시간은 더 이렇게 주 씨의 설명을
32:54
마치고 다음 시간에 이제 통신 프로토콜에 대해서 설명 드리고 또 그 다음
32:59
시간부터 실제 코드로 구현하도록 해보겠습니다
33:02
그러면 이번 시간에 이렇게 마치겠습니다 감사합니다

```



#### video 31
- ch8-3 fc gcs comm protocol

{% include youtubePlayer.html id=page.youtubeID31 %}

```diff
00:13
지난 시간에 gcs 설명에 이어서 이번 시간에는 fc 랑 gcs 간에
00:18
어떤 식으로 데이터를 주고 받아야 gcs 에서 그래프도 그리고 또 상태도
00:21
표시할 수 있는지 통신 프로토콜에 대해서 설명드리도록 하겠습니다
00:26
그래서 이번 시간도 설명 만들어가고 역시 소스 코드 작업은 없습니다
00:31
이건 지난 시간에도 한번 설명 드렸던 그림인데
00:34
gcs 랑 fc 간의 어떤 데이터들을 주고 받는 지를 간략하게 나타낸
00:37
그림입니다
00:39
우선 fc 에서는 bn 5080 의 롤 빛이요 회전 각도 랑 lp se
00:44
ah ha 고도 정보
00:46
그리고 조종기 st 값을 pad 목표 값으로 변환한 데이터를 50hz
00:52
주기로 보낼 거구요
00:54
그리고 gps 위도 경도 정보 배터리 전압 정보
00:58
조종기 의 스위치 상태 랑 3일 세이프 상태를 실패를 째 주기로 보낼
01:03
겁니다
01:04
마지막으로 현재 입이 롬 에 저장되어 있는 pid 개인들도 보내 줄 건데
01:08
이건 주기적으로 보내 준 건 아니고
01:11
주 cs 에서 요청을 했다 거나 혹은 fc 의 전원이 처음 들어갔을 때
01:15
보내 줄 겁니다
01:17
그리고 gcs 에서는 pid 개인 설정 값들을 보내주고 요 그리고 pid
01:22
개인을 요청할 수도 있습니다
01:24
이 요청하는 것도 하나의 요청 데이터를 프로토콜에 맞게 fc 로 보내주는
01:28
거예요
01:30
그리고 이 각각의 메시지들은 ccs 에서 버튼을 누르면 보내지게 되어
01:34
있습니다
01:35
그래서 이렇게 가 데이터 주고 받을 동료들에 대한 설명이고
01:39
인천이 각각 이 어떤 순서와 형태로 주고 받아지는 지에 대해서
01:42
설명드리겠습니다
01:45
이제 이번에 설명들은 efc 랑 gcs 간 통신 프로토콜은
01:49
예전에 아이 버스랑 유비 x 토토 골드 했었고 또 이필용 데이터 관리
01:53
프로토콜을 직접 정해서 썼는데 그 것들이란 크게 다르지 않고요
01:57
제가 직접 정한 프로토콜입니다 이 프로토콜에 대해서 간단히 정리를 좀
02:01
하자면
02:02
fc 랑 gcs 가는 3d r 텔레 매트 림 우선 모듈로 통진 하구요
02:07
각각의 텔레 매트 립 모듈은 연결된 장치 랑 u 아트로 인터페이스 싸죠
02:12
그리고 fc 에서 주실 수록 보낼 때는 0 x 460 역사 3 으로
02:16
시작하고
02:17
반대로 gcs 에서 fc 로 보낼 때는 0 x 470 x 고 3 으로
02:21
시작하는
02:22
론의 상태의 및 명령 정보가 담긴 20 바이트 단위의 양방향 통신
02:28
프로토콜 이라고 정의 하겠읍니다
02:31
그래서 데이터 길이는 양방향 다 20 빠이 듯 아니구요
02:34
그 중에 첫 2 바이트가 헤더 정보 9 통신 방향에 따라서 값이 좀
02:39
다르죠
02:40
그 다음 한 바이트가 id 정보 구요
02:43
이 메시지가 어떤 정보들이 인지를 나타내는 메시지의 id 입니다
02:48
그 후에 페이로드 16 바이트가 실제 데이터 들이 들어 있는 부분이고
02:52
이 부분이 이 id 에 따라서 다른 정보들이 들어 있는 거죠
02:57
맨 마지막 한 바이트는 체크섬 정보입니다
03:00
체크섬 은 예전에도 많이 했었는데 이필용 데이터 관리 할 때 썼던 체크
03:05
선 방식이 랑 동일하게 계산 할 겁니다
03:08
그리고 id 에 따라서 메시지의 종류들이 달라지는데 그 내용이 주 cs
03:12
다운 받으면 같이 첨부되어 있는 pdf 파일의 정리되어 있습니다
03:16
별도 표로 정리를 한거구요 2바이트 이상으로 이루어진 모든 정보들은 리틀
03:22
nd 언 표현 방식을 따릅니다
03:25
낮은 바이트가 낮은 주소를 갖는 거죠 그리고 체크섬 4 대한 설명은 바로
03:29
다음 장에 이어서 드리겠습니다
03:33
이 체크 싸움은 1 바이트 로 이루어져 있구요 체크섬 계산 방법은
03:37
0xff 에서 이 메시지 프레임 총 20 바이트 중에 앞에 19 바이트의
03:43
값들을 바이트 단위로 다 뺀 결과를 체크섬 으로 정의합니다
03:48
빼는 과정에서 언더 플로우가 발생하면 무시합니다
03:52
그렇게 해서 계산된 체크섬 은 메시지의 맨 마지막에 싫어서 같이 보내 줘
03:56
그러면 받는 쪽에서는 체크 싸움을 또 따로 계산해서 그게 받아진 메시지의
04:02
맨 마지막 데이터와 일치하면 입에 cg 가 잘 받아 증거 고 아니라면
04:06
메시지의 문제가 있다고 판단하고 그 메시지는 버립니다
04:10
체크섬 계산 은 양방향 다 같은 방식으로 계산합니다
04:14
다 이전에 설명드리고 구현도 했었던 내용이죠 코드도 엄청 간단 했었습니다
04:19
이제 이 프로토콜에서 제일 중요한 각각의 아이디에 다른 메시지의 종류에
04:24
대해서 설명드리겠습니다
04:26
이 표가 그 pdf 파일에 정의되어 있는 편대 fc 랑 gcs 간
04:31
주고받는 데이터의 종류 순서 그리고 형태를 정리한 표 구요 프로토콜의
04:36
버전은 0점 9.1 입니다
04:39
ccs 는 버전이 0점 9.6 이었고 그 gcs 는 통신 프로토콜 버전
04:45
0.9 점 이를 따라 데이터를 8시 하게 되어 있습니다
04:49
그래서 이 표가 제일 중요한 거예요 사실 제가 따로 설명 안드려도 이
04:53
표를 보시면 그 내용들이 여기다 설명이 돼 있긴 합니다
04:56
그니깐 지금 이 표를 보시면서 제 설명을 한번 들으시면
05:00
나중에는 제 설명 없어도 이 표만 가지고 혼자서도 코드를 구현 하실 수
05:04
있을 거에요
05:06
그럼 이제 입에 시즈 들이 어떤 종류가 있는지 하나씩 설명드리겠습니다
05:11
우선 데이터통신 방향을 보셔야 되는데 먼저 fc 에서 gcs 로 보내는
05:15
데이터가 나옵니다
05:16
fc 입장에서는 송신하는 데이터 조 모든 메시지는 총 20 바이트 길이를
05:21
가지고 있고
05:22
먼저 송진을 데이터의 헤더 정보는 고 맥스 460 x 4 3
05:27
아스키 로는 대문자 f c 이렇게 2바이트 가 있고 그 다음에 이
05:32
메시지의 아이디가 한 바이트가 있는데 0x1 022 메시지 id 를
05:36
의미합니다
05:37
아이디가 1 바이트 로 표현된 이 깐 총 메시지는 250 6가지를 정의할
05:41
수 있고 그중에 8개 아이리 만 사용할 겁니다
05:45
먼저 0 x 1 0 id 에 메시지는 어떤 정보를 담고 있는 하면
05:49
페이로드 의 첫 2바이트 는 롤의 회전 각도 입니다
05:53
뒤에 슛 0 숏 1 이렇게 돼 있는 것은 부호 있는 2바이트 정수영 대로
05:58
이미 하구요
05:59
그럼 값의 범위는 - 32768 부터 플러스 32767 까지 가 되겠죠
06:08
그리고 뒤에 괄호 안에 곱하기 10의 2 이렇게 되어 있는건 스케일 팩터
06:13
를 의미 하구요
06:14
10a 승 즐 100을 곱한 가치라는 것을 의미합니다
06:18
예전에 챕터 2 해서 bn 5080 회전 각도를 4바이트 실수 형태 즉
06:23
블록형 변수에 저장을 했었죠 그래서 그 변수에 등 값은 도 단위의 값이
06:28
었는데 그 값에 곱하기 백한 후에 2바이트 정수 형태로 변환해서 보낸다는
06:35
말입니다
06:36
그러면 소숫점 이야 2 자리까지 정보만 짓으로 보내 주겠죠
06:40
그래서 그 2바이트 중에 하위 바이트를 2바이트 3에 넣고 상위 바이트를
06:45
다 이 트 4 에 넣어서 보내는 겁니다
06:47
리 트렌디한 표현방식이 자 그러면 gcs 는 이 값을 받아서 나누기 백을
06:53
해서 그래프로 그려 줍니다
06:54
피치 각도 도 마찬가지구요 이렇게 2바이트 정수 형태 로 변환하면 아까
07:00
값에 범위가 - 32768 부터 플러스 32767 까지라고 그랬는데
07:07
곱하기 100을 해서 보내니까 도 단위로 는
07:10
- 320 7.68 도 부터 플러스 320 7.67 도까지 보낼 수
07:16
있다는 말입니다
07:18
근데 울 피치는 끽해야 값의 범위가 - 180도 부터 플러스 180도까지
07:23
라서 이렇게 변환해서 보낼 수 있는거예요
07:26
요 회전 각도는 0부터 360도 까지 의 양수 값이 어서 부 없는
07:31
2바이트 정성 대로 보냅니다
07:34
쇼 신데 앞에 육아 붙어 있죠 이게 언사 인들을 의미합니다
07:38
값의 범위는 0부터 65535 까지 구요
07:42
스케일 팩터 는 백입니다 100 곱해 진 값을 보낸다는 소리고
07:46
이건 도 단위로 는 0부터 650 5.3 5도까지 보낼 수 있단 말 장
07:52
그래서 롤 피치 5에 회전 각도는 이런식으로 보냅니다
07:56
그 다음에 기압 고도 는 lps eh 의 기압 고도 구요
08:00
이건 음속 값이 나올 수가 있어서 두고 있는 2바이트 정정택 5
08:05
역시 - 32768 부터 플러스 32767 까지 의 값을 가질 수 있는데
08:11
이건 스케일 팩터 가쉽 이니까
08:13
실제 보내줄 수 있는 고도는 - 3200 76.8 부터 플러스 3270
08:19
6.7 까지가 될 거고 이건 m 다니니까 km 단위로 는
08:24
- 3.2km 부터 플러스 3.2 km 까지 가 표시될 겁니다
08:29
만약에 이 범위를 넘어서 보내면 오버플로우 도는 언더 플로어 가 발생할
08:33
수 있습니다
08:34
그래서 여기까지가 센서 데이터 구요 icm 2060 의 자리로 데이터는
08:39
아직은 보내지는 않을 겁니다
08:42
그리고 그 다음부터 보내는 정보 앞에 목표가 붙어 있는데 이 말은 pid
08:47
제어의 목표를 의미합니다
08:49
pid 젤 기본 개념이 목표 의 값과 현재 값에 차이를 줄여 나가면서
08:54
목표에 수렴 하도록 하는 방식이죠
08:56
그래서 여기 목표가 붙어 있는 것들이 각 충 마다 제어 의 목표 가치
09:01
되는 정보도 입니다
09:02
먼저 목표 롤 가기 pid 롤 축 제어의 목표 회전 각도 0
09:08
역시 부호 있는 2바이트 정세영 되고요
09:11
스케일 팩터 는 백입니다 2 목표 값은 조종기 의 스틱으로 조절할 수
09:16
있도록 할 건데
09:17
조종기 스틱 값이 첨부터 2000 사이의 값이 였죠
09:20
그래서 이걸 플러스 - 50도 이런식으로 변환 할 건데 변한 과정은
09:24
간단합니다
09:25
그 변환 하는건 코드 짤 때 설명 드릴 거구요
09:29
그래서 그렇게 변환된 도 단위의 값에 100을 곱하고 그걸 2바이트 정수
09:34
형태로 보내면 됩니다
09:36
피치 도 마찬가지고요 요 도 마찬가지인데
09:40
부 없는 언사 인드라는 것에 주의하시면 됩니다
09:44
그리고 마지막 목표 기압 보도는 고도 제어를 하지 않을 것이기 때문에 이
09:48
정보는 사용하지 않습니다
09:50
그냥 2바이트 다 영을 채우면 됩니다 근데 gc 쓰는 이 값을 받으면
09:54
그래프로 출력을 하게 돼 있어요
09:57
그래서 이렇게 가 꼭 넥스 1 0 id 에 페이로드 정보 구요
10:02
맨 마지막 한 바이트는 체크섬 입니다 책상 계산은 좀전에 설명 드렸죠
10:07
지금 잘 이해가 안되시는 분들은 다시 돌려 보시면서 천천히 한번
10:10
생각해보세요
10:12
그리고 코드 작성할 때 또 간단히 설명을 드리긴 할 겁니다
10:15
아 그때는 다 이해가 되실 거니까 지금 이해가 안되더라도 크게 걱정하지
10:19
않으셔도 됩니다
10:21
그래서 이렇게 하면 0 x 1 0 id 에 메시지 프레임이다 정애가
10:24
된거죠
10:25
그래서 이 메시지를 gcs 로 보내면 이제 gcs 에서는 똑같이 이 순서
10:30
랑 형태에 맞게 파싱해서 그래프로 도 그려주고 표시도 해주는 거예요
10:34
그래서 우리가 할 것은 fc 에서 이 데이터들을 보내 주면 되는데 이
10:39
데이터들은 50hz 주기로 보낼 겁니다
10:43
그리고 gcc 에 파일 저장 기능이 있다고 설명 드렸는데
10:48
데이터 가 수신되면 이 스타트로 그 버튼을 누르면 파일이 저장이 됐었죠
10:53
저장된 폴더를 보시면 두개의 파일이 따로 저장이 되는데 지금 설명드린
10:58
20x 1 0 라잇 이에 메시지가 수신되면
11:01
그 데이터가 hrs 점 txt 파일에 저장이 되구요
11:05
뒤에 있는 이 숫자들은 저장한 날짜랑 시간 입니다
11:09
그리고 이제 좀 이따 0x1 1 id 메시지를 설명 될 건데 그 데이터는
11:14
gps 점 txt 파일에 분리되서 저장됩니다
11:17
id 별로 파일도 9분해 놓은 거에요 그럼 다시 돌아와서
11:22
우리는 1킬로 헤르쯔 로 제어를 할 거 잖아요 근데 5 실패를 어찌
11:26
이렇게 느리게 보내는 이유는
11:28
ccs 에서 이 데이터들을 가지고 눈으로만 확인을 하고 표시만 하는 거지
11:34
이걸 가지고 지수 s 에서 실시간으로 다른 뭔가를 하는게 아니기 때문에
11:38
그렇습니다
11:39
즉 눈으로만 볼 거기 때문에 50hz 보다 천천히 보내도 사실은 큰
11:44
상관은 없다는 말이에요
11:46
그리고 더 빨리 보내면 jh cs 에서 데이터가 너무 빨리 들어오는
11:50
처리를 못합니다
11:52
그래서 최대의 50hz 까지만 보내는게 좋을 것 같습니다
11:56
그래서 중요한 것은 데이터는 이렇게 50회를 주로 천천히 보내지만
12:00
fc 내부에서는 그거에 상관없이 1khz 로 제어가 되도록 시스템을 구현
12:06
해야 된다는 거죠
12:07
제어 주기가 느려지면 비행 성능이 떨어질 수 있기 때문에
12:11
수업에서는 목표로 했던 1킬로 헤르츠 주기로 비행 제어 가 되도록 설계
12:15
할 겁니다
12:17
그리고 또하나 궁금할 수 있는게 왜 이런 데이터들을 4바이트 실수 형태의
12:22
정보를 그대로 안보내고 2바이트 정수 형태로 변환해서 보내느냐
12:26
이것도 궁금할 수 있죠 이번 통신할 데이터 양을 줄이기 위해서 이렇게
12:30
보내는 거구요
12:32
만약에 이렇게 변환하지 않고 4바이트 실수 형태를 그대로 보낸다고 하면
12:36
하나 보낼 때마다 4byte 씩 필요하니까 총 페이로드 는 32 바이트가
12:41
필요해 질 겁니다
12:43
그럼 통신 하는데 시간도 오래 걸리고 어떻게 보면 불필요하게 데이터를
12:47
많이 보내는 꼬리 라서
12:48
데이터를 줄일 수 있으면 최대한 줄이는게 좋아요 근데 줄인다고 무턱대고
12:53
막 줄이면 데이터의 손실이 발생할 수 있습니다
12:56
사실 지금도 하나의 정보를 4바이트 실수 에서 2바이트 정수로 줄여서
13:01
보내는데
13:02
바이트 수가 줄면서 데이터의 손실 도 같이 생겼죠
13:06
소숫점 이야 두자리 까지만 보낼 수 있고 또 보낼 수 있는 값에 범위도
13:11
많이 줄어들었습니다
13:12
그래서 때에 따라서는 이렇게 줄여서 보내면 안되는 경우도 있을 수 있는데
13:16
제 수업에서는 줄여서 보내도 상관 없어서 이렇게 보낼 겁니다
13:21
gcs 는 그냥 눈으로 확인하기 위한 프로그램 1 뿐이라서 소숫점 이어
13:25
3rd 자리까지 는 볼 필요가 없어서 그래요
13:29
이제 송진 할 데이터의 0x1 1 id 에 메시지 프레임 입니다
13:34
저두 바이트 헤더는 똑같구요 이번엔 아이디가 0x1 일이죠
13:39
입에 cg 페이로드 에 첫 4바이트 가 gps 에 위도 정보인데 롱이
13:44
라고 되어 있는건 부호 있는 4바이트 정수 형태를 의미하고 요
13:48
뒤에 숫자 0 1 2 3은 바이트 순서를 의미합니다
13:52
역시 리틀 4년 표현 펌 장 스 케 이펙터는 10의 7승 입니다
13:57
보통 위도 경도 정보는 소숫점 이하 7번째 자리까지 가 유효한 정 보여서
14:02
이렇게 보낸 거예요
14:04
그리고 그 후에 4바이트 또 바로 경도 정보가 똑같이 있구요
14:08
그다음 배터리의 전압 정보를 보내는 데 이번에는 부호 없는 2바이트 정쟁
14:13
되고 스케일 팩터 는 백입니다
14:16
그 후부터 조종기 sha1 ohc 페일 세이프 상태가 1 바이트 수
14:22
있는데
14:23
스위치의 이는 이단 소리 치고 위로 올리면 0
14:27
내리면 이를 보낼 거구요 스위치 씨는 3단 스위치 고 위로 올리면 0
14:33
중단 1대 1 내리면 이를 보낼 겁니다
14:36
이전에 아이 버 스 파 이 팅 할 때 스위치를 조작하면 지금처럼 값이 0
14:41
1 0 1 2 이런게 받아준 게 아니고 1000 1500 2000
14:46
이런게 받았었죠 그래서 그걸 그대로 보내려면 또 이스 위치정보 1 번 할
14:51
때마다 각각 2바이트 가 필요해요
14:53
1 바이트로 는 0부터 255까지 밖에 표현할 수가 없죠 그래서 이것도
14:59
데이터 양을 줄이려고
15:00
0 1 0 1 2 이런식으로 변환해서 보내줄 겁니다
15:05
그리고 페일 세이프 의 상태는 정상 동작할 때는 영을 보내고 페일 세이프
15:09
가 발동되면 이를 보낼 겁니다
15:12
그리고 이가 또 있는데 우선 뺄 세이프 는 정상이거나 발 뽕 되거나
15:17
이렇게 두가지 경우 밖에 없잖아요
15:19
그럼 00일 이렇게 표현하면 되는데 이는 뭐냐면
15:23
이거는 페일 세이프 가 발동된 게 아니고 수신기 로부터 데이터 자체가
15:28
수신되지 않은 경우에 이라는 값을 보낼 예정입니다
15:32
이전에 페일 세이프 했던 것도 생각을 해보시면 페일 세이프 가 발동되면
15:36
그 발동됐다 는 정보를
15:38
fsi 에 6기 수신기가 fc 로 봉 해주죠
15:42
즉 그때는 수신기 랑 fc 는 연결이 잘 되어있다는 것을 의미합니다
15:47
근데 문제는 수신기 랑 fc 의 연결이 잘 안 돼서 데이터가 안 받아 질
15:52
수도 있잖아요
15:53
예를 들어 수신기 랑 fc 라는 2.54mm 커넥터 로 연결 하는데 이
15:58
커넥터가 좀 헐렁하게 깨졌다고 는
16:01
아니면 비행 하다가 이선희 빠졌다고 나라면 fc 로 아이 퍼 센터가 아예
16:06
안 들어올 테니까
16:07
마치 페일 세이프 가 발생한 것처럼 조종이 불가능한 상태가 될 텐데
16:12
근데 아직은 지금 우리가 짠 코드에서는 이거
16:14
나의 인식하지 못합니다 지금 우리가 짠 코드는
16:18
수신기가 fc 한테 페일 세이프 상태다 아니다 라는걸 알려주면 fc 에선
16:24
그걸 알 수 있었던 건데
16:25
수신기 랑 fc 랑 연결이 끊어져 버리면 fc 는 아예 알 수가 없는
16:29
상태가 되는 거 자
16:31
그게 가장 위험한 상황이라고 그랬고 혼자 제어는 되고 있는데 조종이 안
16:35
되는 상태가 가장 위험한 상태입니다
16:37
그래서 그걸 확인하는 코드를 다음 챕터에서 구현을 할 거구요
16:42
그 상황이 되면 주 cs 로 페일 세이프 상태를 이라는 값을 보낼 거에요
16:47
fc 에서는 아직 그건 구현 하진 않았지만 gcs 에서는 그걸 표시하는
16:51
걸 미리 구해 놨습니다
16:53
다음 챕터에서 이거 구현할 때 한 2초 동안 수신기 로부터 데이터가 안
16:57
받아주면 페일 세이프 라고 인식하도록 할 거고 그 때 이 이라는 값을
17:02
7시 쓸어 보내고 모터를 강제로 끄는 코드를 작성할 겁니다
17:07
그리고 이 밑에 리저브 드 이렇게 되어 있는건 예약된 바이트 라는걸
17:11
나타내는데 그냥 사용하지 않는 바이트 해요
17:14
앞으로 이 이후에도 리저브 바이트가 많이 나올텐데
17:17
다 사용하지 않을 거라서 영을 채워서 보내면 됩니다
17:21
언젠가는 gcs 버전도 업데이트가 되고 또 이 프로토콜 버전이 올라가면
17:26
리저브 바이트를 쓰게 될 날이 올 수도 있겠죠 근데 아직은 그럴 계획은
17:30
없습니다
17:31
이곳도 역시 마지막 한 바이트는 체크섬 입니다
17:35
이렇게 해서 또 0x1 1 id 메시지 설명이 끝나고
17:39
이고 맥스 1 1 아이디에 메시지는 초당 10번씩 보낼 겁니다
17:44
왜 아까 0x1 곰은 50hz 로 보내면서 이거는 실패를 g 로 보내면
17:49
여기 있는 이 데이터들은 사실 막 빠르게 데이터를 보낼 필요가 없는
17:53
것들이에요 그래서 실패를 주로 보내는 겁니다
17:56
이제부터 pid 개인 값을 성실한 게 나오는데 이건 fc 에 저장돼 있는
18:01
개인을 짓으로 보내서 확인 하는 용도입니다
18:04
좀전에 설명드린 메시지들은 아이디가 0 x 100 x 1 일이었는데
18:08
개인은 0x0 0 부터 시작합니다
18:12
먼저 id 0x0 0 2 모렐 내부 pid 개인 이구요
18:17
id 0x0 일이 롤의 외부 pad 게임입니다
18:21
id 외에는 다 똑같으니까 0x0 0 알게 하나만 설명드리겠습니다
18:26
먼저 페이로드 첫 4바이트 가 롤의 내부 pid 에피 개인 이구요
18:31
4바이트 실 상태 즉 플롯 형태입니다
18:34
실수는 항상 부어 가 있죠 플롯 유혜영 123
18:39
이렇게 되어 있는건 바이트 순서 고리 트랜디한 방식입니다
18:43
4개 바이트를 1 바이트 씩 쪽에서 낮은 바이트 부터 바이트 3456
18:48
순서로 보낸 거죠
18:50
실수 형태는 이렇게 바이트 단위로 쪼개는 게 정성태 랑은 좀 달랐죠
18:55
예전에 유니언 이런걸 써서 바이트 단위로 쪼개 썼는데 이번에는 새로운
18:59
방법을 설명 드릴 예정입니다
19:01
그리고 개인정보 같은 경우는 스케일 팩터 가 없어요
19:05
즉 플롯 형태의 개인 값을 그대로 보낸 거죠
19:08
그 다음에 개 바이트가 롤 내부 pid 에 아이 개인 이구요
19:12
또 그다음 4개 바이트가 롤의 내부 pid 의 디게 인입니다
19:17
마지막 4개 바이트는 사용하지 않습니다
19:20
왜 아까 롤 피치 요 의 회전 각도는 2바이트 정수 형태로 변환해서
19:25
보내는데
19:26
이번에 pid 개인은 4바이트 줄 수 형태를 그대로 보낸다면
19:30
아까 2바이트 정소 로 변환하는 과정에서 소수점 이하의 사리가 잘려
19:34
나간다 고 말씀드렸는데
19:36
pid 개인은 그게 잘려 나가면 제어 성능에 영향을 미칠 수 있기 때문에
19:40
원본 데이터 그대로 보내는게 좋을 것 같아서 변환하지 않고 그대로 보내는
19:45
겁니다
19:47
그 다음 아이디 고 맥스 콩이가 피치에 내부 pid 개인 이구요
19:52
id 0x0 3의 피츠 에 웨브 pid 게임입니다
19:55
그 외에는 앞에 설명드린 내용은 같으니까 설명을 생략하고 넘어가겠습니다
20:01
그 다음 id 0 맥스 공사가 요 의 각도 제어 pid 게 인구
20:06
꼭 맥스 공모가 각 속도 제가 pad 게임입니다
20:10
전에도 말씀드렸듯이 요 같은 경우는 제어 방식이 롤 피치 랑 좀 다른데
20:15
롤 피치는 하나의 더블 pid 제어 만 사용하는 거고
20:18
요는 두 개의 싱글 pid 가 각각 다른 상황에서 동작한다고 말씀드렸죠
20:24
그 이유가 나중에도 한번 설명을 거긴 한데
20:27
우선 롤 피치 같은 경우는 저희는 앵글 모두 로 제어를 할 거라서 각도를
20:32
제어하는 방식입니다
20:33
즉 조종기 의기 값이 체어에 목표 각도 가 되는 거죠 예를 들어 조종기
20:39
스틱을 중간 해두면 롤 피치가 영도 즉 수평을 유지해야 되구요
20:44
스틱을 좀 움직이다가 다시 중간으로 돌려놓으면 들어온 도 다시 영도로
20:49
돌아와야 되죠
20:51
근데요 같은 경우는 스틱을 중간에 두면 현재 각도를 유지하다가
20:55
스틱을 움직이면 헤딩 도 변 할 건데
20:58
그러다가 다시 스틱을 중간에 되면 헤딩이 원래대로 돌아온 게 아니죠
21:03
현재 헤딩을 유지해야 됩니다 그래서 스틱이 중간 일대 현재 헤딩을
21:07
유지하는 각도 제어를 할 거고
21:10
중간이 아닐 때는 각 속도 제어 방식을 쓸 거에요 그게 또 각각 싱글
21:15
pid 로 동작하게 될 겁니다
21:17
근데 각각 을 씽 들이 아니고 또 더불 pid 로 할 수도 있어요
21:21
그러면 개인이 이렇게 두종류가 아니고
21:24
각도 제어의 내부 외부 각 속도 제어의 내부의 뭐 이렇게 총 4종류의
21:29
개인이 필요하겠죠
21:30
근데 헤딩 제 와 같은 경우는 급격하게 제어를 할 게 아니라서 싱글
21:34
페이지 만으로도 충분히 제가 될것 같아서 둘다 싱글 pid 를 쓸 겁니다
21:39
근데 이 방식 말고도 더 좋은 요 제가 방식이 있을 수도 있어요
21:43
룰 빛이 도 마찬가지구요 더 좋은 방식이 있다면 그걸 쓰셔도 무방 한데
21:48
우선은 제 수업 때로 똑같이 따라한 후에 제어가 잘 되서 비행 까지 잘
21:53
되고 나면 그 후에 이제 제어 방식을 바꾸실 분들은 바꿔도 상관 없을 것
21:57
같습니다
21:58
대신 제어 방식을 바꾸려면 안전대책을 충분히 세우고 나서 하셔야 되요
22:04
제어 알고리즘을 바꾸면 개인을 또 찾아야 되는데 그때 위험 할 수도 있기
22:08
때문에 그래요
22:09
제 수업을 따라하시면 이제 코드도 저랑 똑같이 짤 거고 개인도 제가
22:13
알려드린 개인을 쓰실 테니까
22:15
저랑 완전히 똑같은 비행 성능을 가진 드론을 만드실 수 있을 겁니다
22:20
그래서 여기까지가 fc 에서 gcs 로 보내는 메시지에 종류들이 얻습니다
22:25
그래서 fc 에서는 이 데이터들을 지 실수로 보내주는 코드를 작성 해
22:29
주면 되요
22:30
런치 cs 에서는 이 값들을 수진 받아서 센서 데이터 같은 경우는
22:34
그래프나 텍스트로 표현 해 주고요
22:36
개인정보 같은 경우는 개인 설정 탭에서 텍스트로 표시해줍니다
22:41
씨스 a 데이터들 파싱 하고 표시해주는 코드가 다 들어 있는 거죠 그럼
22:46
이제 반대로 fc 입장에서 수신 받는 메시지 종류에 대해서
22:51
설명드리겠습니다
22:53
이제 주 cs 에서 fc 로 보내는 데이터 fc 입장에서는 수신할
22:57
메시지들이 나오는데
22:59
근데 제 강의에서 개발한 들어오니 자동 비행 기능도 없고 특히 웨이포인트
23:03
비행 기능이 없어서
23:05
쥬 cs 에서 fc 로 데이터를 보낸 게 별로 없습니다
23:08
또 설명을 드리면 이번에는 데이터의 방향이 ccs 에서 fc 로 보내는
23:13
거고 이 메시지의 첫 2바이트 는 또 헤더 정보 인대 안의 내용이
23:18
달라집니다
23:19
아까 송진 할 때는 0 x 460 x 432 얻는데 수시는 공매 x
23:24
470 x 532 이렇게 2바이트 구요
23:28
아스키 로는 각각 대문자 쥐 랑 대문자 애씁니다
23:32
이 수신에 메시지의 이 아이디가 0x0 0 이랑 곰 x 01 이 각각 2
23:38
롤의 내부의 외부 pid 게임 값이 0
23:41
아까 송신 때랑 똑같이 4바이트 실수 형태의 스케일 팩터 는 없구요
23:46
그리고 pid 순서 곡 나머지 사용되지 않는 4바이트 가 맨 밑에 있고
23:51
마지막 체크섬 한 바이트가 있는데 역시 계산한 방법도 똑같습니다
23:57
지난 시간에 gcs 에서 개인 설정할 때 샌드 버튼을 눌러서 개인을
24:01
보내는데 그 버튼을 누르면 그 주 cs 에 설정하려고 적은 개인들이
24:06
이런식으로 fc 한테 보내 진단 얘기에요
24:10
그럼 fc 는 이 순서대로 역으로 데이터를 받아서 체크섬 검사하고
24:15
일치한다면 원하는 변수에 80 하면 됩니다
24:18
예전에 유비 x 나이 버스 80 할때랑 데이터 구조가 또 거의 같아서
24:22
코드도 1 8 90% 는 같을 거예요 그래서 코드 자는건 그렇게 어렵진
24:27
않을겁니다
24:28
그다음 또 수신한 메시지의 아이디가 0 x 0 2 0 약스포 있는 3일
24:32
메시지들은 피치에 내부의 보 pid 개인 정보 입니다
24:37
나머지는 같으니까 넘어가겠습니다
24:40
그리고 또 id 국내 x0 사랑 공 x 콩 녹아 각각 요 의 각도 제
24:45
여긴 각 속도제어 개인 이구요
24:48
역시 설명 같으니까 생각하겠습니다
24:51
그래서 좀 전에 설명드린 ccs 에서 fc 로 개인을 보내는 것은
24:55
여기는 이 각각의 샌드 버튼을 누르면 해당하는 메시지 프레임에 맞게
24:59
데이터가 fc 로 보내 줍니다
25:02
그러면 fc 는 그 데이터를 받아서 8 싱 을 해서 입이 롬에 저장을
25:06
하고 또 다시 그 값을 이 필요해서 읽어와서 gcs 로 보내 주면 되요
25:11
그러면 그 값들이 2 오른쪽 이 부분에 다시 표시가 되는 거 자 이제
25:16
마지막으로 쥬 cs 에서 fc 로 pid 개인을 요청하는 메시지가 있는데
25:21
id 곰 x 102 개인을 요청하는 메시지 구요
25:25
보시면 바이트 3의 개인 종류라고 돼 있죠
25:29
fc 는 개인의 종료가 롤의 내부 외부 그리고 피치 내부 외부 요 의
25:35
각도 각속도 이렇게 총 6가지 종류의 pid 개인이 있습니다
25:40
그 중에 어떤 개인을 알려 달라고 요청 할 건지를
25:43
여기에 다 실어서 보내는 거예요 그리고 나머지 바이트 들은 사용하지 않기
25:47
때문에 영을 재워서 보입니다
25:50
이 메시지는 지시 스에 개인을 요청하는 이 버튼들을 누르면 요청할 메시지
25:55
종료를 바이트 3회 싫어서 fc 로 보내 줍니다
25:59
버튼은 총 7가지가 있고 어떤 버튼을 누르는 지에 따라서 요청하는 개인의
26:03
종류가 달라집니다
26:05
그럼 fc 에서는 이 메시지를 수신 받으면 그 안에 바이트 3회 값이 0
26:10
부터 6가지의 값이 들어오는데 그 중에 어떤 같은 지에 따라서 해당하는
26:15
개인 을 보내 주면 되요
26:17
fc 가 짓으로 개인을 보내 줄 때는 아까 설명드린 송신 메시지 프레임
26:21
대로 보내주면 됩니다
26:23
그리고 바이트 3 의 값이 유기 면 모든 개인을 다 보내 주면 되요
26:28
그래서 여기까지가 efc 랑 gcs 간 통신 프로토콜 버전 0.9 점
26:33
이라 에 정의된 내용들이 고 이 파일이 gcs 다운 받으면 같이 첨부되어
26:38
있는 이 pdf 파일이 줘
26:40
그래서 뭔가 좀 많고 복잡한 것 같은데 실제 코드를 잡으면 그렇게
26:44
복잡하지는 않습니다
26:45
그냥 데이터를 지금 설명드린 이 순서대로 보내고 또 순서대로 받아서
26:50
80만 해주면 되요
26:52
그래서 실제 fc 송신 코드 작성하는 것을 다음 시간부터 설명드리도록
26:56
하겠습니다
26:58
그러면 이번 시간에 이렇게 마치겠습니다 감사합니다

```



#### video 32
- fc data transmission blocking mode 1/2

{% include youtubePlayer.html id=page.youtubeID32 %}

```diff
00:14
지난 시간까지 강의용 제시에서 사용법이 랑 fc 랑 gcs 간 통신
00:18
프로토콜에 대해서 설명을 드렸구요
00:20
이제 이번 시간부터 실제 데이터를 주고받는 코드를 작성을 할 거고 그
00:25
중에 fc 의 송신 레시 중에 0 x 1 0 id 롤 빛이요 고도의
00:31
정보랑 조종기 조 장량은 pid 목표 각도 로 변환해서 송 취한 방법에
00:36
대해서 설명드리겠습니다
00:37
그리고 이번 시간엔 그 외에도 정말 중요한 블로킹 모드 랑 넌 블로킹
00:42
모드의 개념에 대한 설명을 좀 드리구요
00:44
또 50hz 주기로 입에 cg 를 성실한 은 방법에 대해서도 설명 될
00:48
겁니다
00:49
이 두 가지 개념은 전체 시스템의 흐름 이란 관련이 있어서 반드시 이해를
00:53
하셔야 되요
00:54
유 아트로 메시지 송신 하는 것보다 훨씬 중요한 개념 드립니다
00:58
일단 설명을 들으시면 좀 이해가 가질 거예요 그래서 이번 시간은 구현할
01:02
건 별로 없는데 설명 드릴 게 좀 많습니다
01:06
이 ccs 는 다시 한번 말씀드리지만 제가 강의에서 사용하려고 만든
01:10
7시에 쓰고요
01:11
동영상 오른쪽 하단에 2 네이버 카페로 오시면 다운받을 수 있게 났습니다
01:15
8 다시 이 동영상을 보시면 다운로드 방법이랑 사용법을 자세하게 설명을
01:20
해 놨으니까 안보신 분들은 그 영상을 보시면 되요
01:24
이제 이번 시간에 할 거는 0 x 1 0 메시지를 프로토콜에 맞게 2 7
01:28
실수 로 보내주면
01:29
7s 에서는 그걸 그래프로 표시해 주고 또 이 상태 표시 부분의 텍스트로
01:34
도 표시해줍니다
01:35
그래서 좀 보여드리면 먼저 pc 에 연결되어 있는 이 3d r 텔레 매트
01:40
리모 둘의 컴포트 를 확인하시고
01:42
전 컴포트 6번으로 잡혀 있구요 그리고 볼에 이트는 115,200 으로
01:46
해 놓았죠
01:47
이렇게 하고 커넥트 를 하고 들어온 의 전원은 없겠습니다
01:53
어 전원을 넣었더니 이렇게 둘 간의 연결이 잘 됐구요
01:58
이제 센서가 그래프 탭에서 각각 센서 들의 그래프가 어떻게 출력되는 지
02:02
한번 확인해보겠습니다
02:04
이제 롤은 들어오네 좌우 회전 각도 젊
02:08
좌우로 기울였던 이렇게 회전 각도가 잘 바뀌고 했구요
02:13
그리고 피치는 앞뒤로 기울였을 때 감
02:16
이번엔 앞뒤로 이렇게 길렀다 니 값이 잘 변하고 있습니다
02:21
그리고 요는 헤딩 회전 각도 적
02:24
헤딩을 이렇게 회전 시켰더니 그 값이 잘 변하고 이것도 그래프로 도 잘
02:28
출력이 되고 있습니다
02:31
마지막으로 알트 는 고도 정보인데
02:34
지금 알트 는 - 20도 라는 값이 출력이 되고 있어서 그래프로 바로 안
02:38
보이는 것처럼 보이는데 밑으로 좀 내리면 출력이 되고 있어요
02:42
오토 스케일을 활성화 시키면 좀 확인 아내가 편할겁니다
02:46
이렇게 하고 위아래로 움직 어떤 값이 변하고 있죠
02:51
근데 아까 롤 피치 처럼 이렇게 부드럽게 변하는 건 아니고 지금처럼 계단
02:56
현상이 좀 나타나고 있는데 지금 출력되고 있는 이 고독 값은 0.1 m
03:02
즉 10cm 단위로 출력하고 있는 상태라서 지금처럼 이렇게 계단현상이 좀
03:07
보일 거에요 근데 이건 ccs 에서 출력하는 값만 이런거 0
03:11
fc 내부에는 소수점 둘째 짜리 이하도 잘 값이 보존되고 있는 상태고
03:17
근데 그래봤자 이 기압 고도 자체가 cm 단위로 정밀한 값이 아니기
03:22
때문에 사실은 큰 의미는 없습니다
03:25
그럼 이제 조종기 에조 장난감 또 한번 확인해보겠습니다
03:29
조종기 전화로 키 구요
03:32
그리고 로리 랑 3 p 값을 출력을 해봤더니
03:38
값이 지금 2개 가 출력되고 있는데 먼저 뭘 값이 이렇게 파란색 그래프로
03:43
출력이 되고 있구요
03:45
빨간색 그래프는 2조 종기에 오른쪽 스틱에 좌우 방향의 값입니다
03:51
좌 우의 키값을 이렇게 움직였더니
03:54
값을 잘 바뀌고 있죠 그리고 피치는
03:57
조종기 에 오른쪽 스틱에 위아래 값입니다
04:01
없이 또 같이 살펴 나고 있는데 이 각각의 스틱에 값은 첨부터 2000
04:07
사이에 값인데 그걸 지금 - 50부터 플러스 50가지 값을 바꿔 놓은
04:12
상태에요
04:14
그리고요 의 조종기 값은 0부터 364 2 로 설정이 않습니다
04:19
그래서 왼쪽 스틱을 왼쪽으로 움직였더니 0이라는 값이 출력이 되고 있고
04:24
맨 오른쪽으로 움직였더니 360 이랑 값 실력 되고 있죠
04:29
근데 2호 제어는 두 가지 방식을 때에 따라서 각각 따로따로 사용할 거라
04:33
사실 이 목표 값 빨간색 그래프의 값은 나중에 좀 바뀔 수도 있어요
04:39
지금은 큰 의미는 없습니다
04:41
그리고 마지막으로 이 고도제한 은 본 강의에서는 고도 제어는 사용하지
04:45
않을 것이기 때문에
04:46
목표 고독 값은 없습니다 그러나 스로틀을 게 10일 움직여도
04:51
빨간색 그래프가 변하지 않고 있죠
04:56
그리고 아직 gps 정보랑 배터리 전압
04:58
그리고 종기에 2 스위치 상태의 정보는
05:02
0 x 1 0 메시지의 는 포함 되지 않아서 gcs 에도 출력되지 낳는
05:07
상태입니다
05:08
그래서 이번 시간엔 이렇게 고 맥스 1 0 메시지를 보냈을 때 출시 s
05:12
에서 이렇게 표시가 되도록 구현해 볼 겁니다
05:16
이번 챕터 첫 시간에 텔레 매트 림 우선 모듈 설정을 했었는데 그 중에
05:20
설정을 1 바꾸겠습니다
05:22
설정 프로그램을 여 지구요 컴포트 랑 프레이트 잘 맞춰서 로드 세팅
05:27
버튼을 누르시면
05:29
지난번에 설정했던 값들이 이렇게 노드가 될 거구요
05:32
그중엔 x 윈도우를 보시면 131 로 설정이 되어 있을 겁니다 이걸 33
05:37
으로 바꾸겠습니다
05:39
130 1로 했을 때 약간 딜레이가 있는것 같은데
05:42
33 일색으로 바꾸면 딜레이가 좀 줄어드는 것 같아요
05:46
바꿨으면 세이브 셋팅 버튼을 눌러서 설정 저장을 하시구요
05:50
다 됐으면 다른 모듈도 마찬가지로 설정을 바꿔줍니다
05:55
이번 시간에는 fc 입장에서 송신 아니 세 가지 배씨 중에 첫번째 미시즈
06:00
인 이 정보들을 gcs 로 생신 하는 방법을 설명 될 거구요
06:04
이 메시지는 gcs 에서 따로 요청하지 않아도
06:07
fc 자체적으로 50hz 주기로 수시로 송신할 겁니다 이건 지난 시간에
06:13
설명드렸던 메시지의 프레임의 구조 구요
06:16
다시 한번 간단히 설명드리면 먼저 fc 에서 주 cs 로 상징하는 모든
06:20
메시지의 첫 2바이트 는 0 x 460 x 4 3 고정된 값을 시작하고
06:25
그 뒤엔 1 바이트의 아이드 정보가 있죠
06:29
20x 1 0 메시지의 페이로드 는 이런 정보들이 있는데 먼저 2바이트
06:34
롤 회전 각도가 있고 이건 100을 곱한 부호 있는 2바이트 정수 형태로
06:39
보낼 거고 그 다음 피치 각도 도 마찬가지입니다
06:43
요 각도는 100을 곱한 후 없는 2바이트 정성 대로 버릴 겁니다
06:49
그리고 기압 고도 는 10을 곱한 부호 있는 2바이트 정제 형태로 보낼
06:53
거구요
06:54
그래서 이렇게 가 센서 데이터 였고 이 밑에서
06:57
pid 제어 해서 목표로 하는 각도를 보낼 건데
07:01
먼저 목표 롤 각은 조종기 스틱에 오른쪽 수평 방향의 키값이 첨부터
07:07
2004 2까지 값인데 이걸 플러스 - 50% 변환해서 볼 거고 거기에
07:13
100을 곱한 부호 있는 2바이트 정 상태로 보낼 거고
07:18
목표 피치가 근 오른쪽 수직 방향의 키값을 변화 해서 말 겁니다
07:23
그리고 목표가 근 왼쪽 수평 방향 키 값을 영웅 부터 360도 로
07:28
변환해서 보낼 겁니다
07:30
목표 기압 고도 는 사용하지 않을 꺼라 서영을 재워서 보낼 겁니다
07:35
그리고 마지막이 체크섬 안 바이트는 0xff 에서
07:39
바이트 0부터 파이트 18 까지 의 모든 값들을 바이트 단위로 뺀 결과를
07:44
마지막에 싫어서 보낼 겁니다
07:47
그래서 이번 시간에 이 메시지를 송신하는 코드를 작성할 거에요
07:51
데이터를 보낼 때는 이 텔레 매트 리모델 로 무선으로 보낼 거구요
07:56
이건 fc 뉴아트 1번 채널의 연결되어 있고 또 유틸 번 큐브 mx 로
08:00
설정 하는 것은 지난 시간에 해봤죠
08:03
그리고 이번에는 ll 드라이버가 아닌 할 드라이버를 사용하는 데 그
08:07
이유가 할 드라이버에서 제공하는 인터럽트 방식의 송신 엄 소를 사용할
08:12
것이기 때문입니다
08:14
그러면 인터럽트 방식을 사용하지 않고 생신을 하면 무슨 일이 생기 길래
08:18
이렇게 할 드라이버를 써가면서 인터럽트 방식으로 성신 하는지도
08:22
설명드리겠습니다
08:24
이제 코드 작성을 하면서 설명을 드릴 건데
08:27
먼저 0 x 102 메시지를 인터럽트 방식이 아닌 일반 성진 함수를
08:32
이용해서 정성을 해보구요
08:34
그때 무슨 문제가 생기고 그걸 해결하려면 왜 인터럽트 방식을 사용해야
08:39
하는지 또 같이 설명을 드리겠습니다
08:41
이번에는 코드 작성을 먼저 좀 하고 또 개념 설명을 좀 더 드리고 다시
08:45
코드 작성을 하고 이런 식으로 진행할 겁니다
08:48
그럼 코드 작성 으로 넘어가겠습니다

```

#### video 33
- ch8-4 fc data trx nonblocking mode 2/2

{% include youtubePlayer.html id=page.youtubeID33 %}

```diff
00:14
지난 시간까지 강의용 제시에서 사용법이 랑 fc 랑 gcs 간 통신
00:18
프로토콜에 대해서 설명을 드렸구요
00:20
이제 이번 시간부터 실제 데이터를 주고받는 코드를 작성을 할 거고 그
00:25
중에 fc 의 송신 레시 중에 0 x 1 0 id 롤 빛이요 고도의
00:31
정보랑 조종기 조 장량은 pid 목표 각도 로 변환해서 송 취한 방법에
00:36
대해서 설명드리겠습니다
00:37
그리고 이번 시간엔 그 외에도 정말 중요한 블로킹 모드 랑 넌 블로킹
00:42
모드의 개념에 대한 설명을 좀 드리구요
00:44
또 50hz 주기로 입에 cg 를 성실한 은 방법에 대해서도 설명 될
00:48
겁니다
00:49
이 두 가지 개념은 전체 시스템의 흐름 이란 관련이 있어서 반드시 이해를
00:53
하셔야 되요
00:54
유 아트로 메시지 송신 하는 것보다 훨씬 중요한 개념 드립니다
00:58
일단 설명을 들으시면 좀 이해가 가질 거예요 그래서 이번 시간은 구현할
01:02
건 별로 없는데 설명 드릴 게 좀 많습니다
01:06
이 ccs 는 다시 한번 말씀드리지만 제가 강의에서 사용하려고 만든
01:10
7시에 쓰고요
01:11
동영상 오른쪽 하단에 2 네이버 카페로 오시면 다운받을 수 있게 났습니다
01:15
8 다시 이 동영상을 보시면 다운로드 방법이랑 사용법을 자세하게 설명을
01:20
해 놨으니까 안보신 분들은 그 영상을 보시면 되요
01:24
이제 이번 시간에 할 거는 0 x 1 0 메시지를 프로토콜에 맞게 2 7
01:28
실수 로 보내주면
01:29
7s 에서는 그걸 그래프로 표시해 주고 또 이 상태 표시 부분의 텍스트로
01:34
도 표시해줍니다
01:35
그래서 좀 보여드리면 먼저 pc 에 연결되어 있는 이 3d r 텔레 매트
01:40
리모 둘의 컴포트 를 확인하시고
01:42
전 컴포트 6번으로 잡혀 있구요 그리고 볼에 이트는 115,200 으로
01:46
해 놓았죠
01:47
이렇게 하고 커넥트 를 하고 들어온 의 전원은 없겠습니다
01:53
어 전원을 넣었더니 이렇게 둘 간의 연결이 잘 됐구요
01:58
이제 센서가 그래프 탭에서 각각 센서 들의 그래프가 어떻게 출력되는 지
02:02
한번 확인해보겠습니다
02:04
이제 롤은 들어오네 좌우 회전 각도 젊
02:08
좌우로 기울였던 이렇게 회전 각도가 잘 바뀌고 했구요
02:13
그리고 피치는 앞뒤로 기울였을 때 감
02:16
이번엔 앞뒤로 이렇게 길렀다 니 값이 잘 변하고 있습니다
02:21
그리고 요는 헤딩 회전 각도 적
02:24
헤딩을 이렇게 회전 시켰더니 그 값이 잘 변하고 이것도 그래프로 도 잘
02:28
출력이 되고 있습니다
02:31
마지막으로 알트 는 고도 정보인데
02:34
지금 알트 는 - 20도 라는 값이 출력이 되고 있어서 그래프로 바로 안
02:38
보이는 것처럼 보이는데 밑으로 좀 내리면 출력이 되고 있어요
02:42
오토 스케일을 활성화 시키면 좀 확인 아내가 편할겁니다
02:46
이렇게 하고 위아래로 움직 어떤 값이 변하고 있죠
02:51
근데 아까 롤 피치 처럼 이렇게 부드럽게 변하는 건 아니고 지금처럼 계단
02:56
현상이 좀 나타나고 있는데 지금 출력되고 있는 이 고독 값은 0.1 m
03:02
즉 10cm 단위로 출력하고 있는 상태라서 지금처럼 이렇게 계단현상이 좀
03:07
보일 거에요 근데 이건 ccs 에서 출력하는 값만 이런거 0
03:11
fc 내부에는 소수점 둘째 짜리 이하도 잘 값이 보존되고 있는 상태고
03:17
근데 그래봤자 이 기압 고도 자체가 cm 단위로 정밀한 값이 아니기
03:22
때문에 사실은 큰 의미는 없습니다
03:25
그럼 이제 조종기 에조 장난감 또 한번 확인해보겠습니다
03:29
조종기 전화로 키 구요
03:32
그리고 로리 랑 3 p 값을 출력을 해봤더니
03:38
값이 지금 2개 가 출력되고 있는데 먼저 뭘 값이 이렇게 파란색 그래프로
03:43
출력이 되고 있구요
03:45
빨간색 그래프는 2조 종기에 오른쪽 스틱에 좌우 방향의 값입니다
03:51
좌 우의 키값을 이렇게 움직였더니
03:54
값을 잘 바뀌고 있죠 그리고 피치는
03:57
조종기 에 오른쪽 스틱에 위아래 값입니다
04:01
없이 또 같이 살펴 나고 있는데 이 각각의 스틱에 값은 첨부터 2000
04:07
사이에 값인데 그걸 지금 - 50부터 플러스 50가지 값을 바꿔 놓은
04:12
상태에요
04:14
그리고요 의 조종기 값은 0부터 364 2 로 설정이 않습니다
04:19
그래서 왼쪽 스틱을 왼쪽으로 움직였더니 0이라는 값이 출력이 되고 있고
04:24
맨 오른쪽으로 움직였더니 360 이랑 값 실력 되고 있죠
04:29
근데 2호 제어는 두 가지 방식을 때에 따라서 각각 따로따로 사용할 거라
04:33
사실 이 목표 값 빨간색 그래프의 값은 나중에 좀 바뀔 수도 있어요
04:39
지금은 큰 의미는 없습니다
04:41
그리고 마지막으로 이 고도제한 은 본 강의에서는 고도 제어는 사용하지
04:45
않을 것이기 때문에
04:46
목표 고독 값은 없습니다 그러나 스로틀을 게 10일 움직여도
04:51
빨간색 그래프가 변하지 않고 있죠
04:56
그리고 아직 gps 정보랑 배터리 전압
04:58
그리고 종기에 2 스위치 상태의 정보는
05:02
0 x 1 0 메시지의 는 포함 되지 않아서 gcs 에도 출력되지 낳는
05:07
상태입니다
05:08
그래서 이번 시간엔 이렇게 고 맥스 1 0 메시지를 보냈을 때 출시 s
05:12
에서 이렇게 표시가 되도록 구현해 볼 겁니다
05:16
이번 챕터 첫 시간에 텔레 매트 림 우선 모듈 설정을 했었는데 그 중에
05:20
설정을 1 바꾸겠습니다
05:22
설정 프로그램을 여 지구요 컴포트 랑 프레이트 잘 맞춰서 로드 세팅
05:27
버튼을 누르시면
05:29
지난번에 설정했던 값들이 이렇게 노드가 될 거구요
05:32
그중엔 x 윈도우를 보시면 131 로 설정이 되어 있을 겁니다 이걸 33
05:37
으로 바꾸겠습니다
05:39
130 1로 했을 때 약간 딜레이가 있는것 같은데
05:42
33 일색으로 바꾸면 딜레이가 좀 줄어드는 것 같아요
05:46
바꿨으면 세이브 셋팅 버튼을 눌러서 설정 저장을 하시구요
05:50
다 됐으면 다른 모듈도 마찬가지로 설정을 바꿔줍니다
05:55
이번 시간에는 fc 입장에서 송신 아니 세 가지 배씨 중에 첫번째 미시즈
06:00
인 이 정보들을 gcs 로 생신 하는 방법을 설명 될 거구요
06:04
이 메시지는 gcs 에서 따로 요청하지 않아도
06:07
fc 자체적으로 50hz 주기로 수시로 송신할 겁니다 이건 지난 시간에
06:13
설명드렸던 메시지의 프레임의 구조 구요
06:16
다시 한번 간단히 설명드리면 먼저 fc 에서 주 cs 로 상징하는 모든
06:20
메시지의 첫 2바이트 는 0 x 460 x 4 3 고정된 값을 시작하고
06:25
그 뒤엔 1 바이트의 아이드 정보가 있죠
06:29
20x 1 0 메시지의 페이로드 는 이런 정보들이 있는데 먼저 2바이트
06:34
롤 회전 각도가 있고 이건 100을 곱한 부호 있는 2바이트 정수 형태로
06:39
보낼 거고 그 다음 피치 각도 도 마찬가지입니다
06:43
요 각도는 100을 곱한 후 없는 2바이트 정성 대로 버릴 겁니다
06:49
그리고 기압 고도 는 10을 곱한 부호 있는 2바이트 정제 형태로 보낼
06:53
거구요
06:54
그래서 이렇게 가 센서 데이터 였고 이 밑에서
06:57
pid 제어 해서 목표로 하는 각도를 보낼 건데
07:01
먼저 목표 롤 각은 조종기 스틱에 오른쪽 수평 방향의 키값이 첨부터
07:07
2004 2까지 값인데 이걸 플러스 - 50% 변환해서 볼 거고 거기에
07:13
100을 곱한 부호 있는 2바이트 정 상태로 보낼 거고
07:18
목표 피치가 근 오른쪽 수직 방향의 키값을 변화 해서 말 겁니다
07:23
그리고 목표가 근 왼쪽 수평 방향 키 값을 영웅 부터 360도 로
07:28
변환해서 보낼 겁니다
07:30
목표 기압 고도 는 사용하지 않을 꺼라 서영을 재워서 보낼 겁니다
07:35
그리고 마지막이 체크섬 안 바이트는 0xff 에서
07:39
바이트 0부터 파이트 18 까지 의 모든 값들을 바이트 단위로 뺀 결과를
07:44
마지막에 싫어서 보낼 겁니다
07:47
그래서 이번 시간에 이 메시지를 송신하는 코드를 작성할 거에요
07:51
데이터를 보낼 때는 이 텔레 매트 리모델 로 무선으로 보낼 거구요
07:56
이건 fc 뉴아트 1번 채널의 연결되어 있고 또 유틸 번 큐브 mx 로
08:00
설정 하는 것은 지난 시간에 해봤죠
08:03
그리고 이번에는 ll 드라이버가 아닌 할 드라이버를 사용하는 데 그
08:07
이유가 할 드라이버에서 제공하는 인터럽트 방식의 송신 엄 소를 사용할
08:12
것이기 때문입니다
08:14
그러면 인터럽트 방식을 사용하지 않고 생신을 하면 무슨 일이 생기 길래
08:18
이렇게 할 드라이버를 써가면서 인터럽트 방식으로 성신 하는지도
08:22
설명드리겠습니다
08:24
이제 코드 작성을 하면서 설명을 드릴 건데
08:27
먼저 0 x 102 메시지를 인터럽트 방식이 아닌 일반 성진 함수를
08:32
이용해서 정성을 해보구요
08:34
그때 무슨 문제가 생기고 그걸 해결하려면 왜 인터럽트 방식을 사용해야
08:39
하는지 또 같이 설명을 드리겠습니다
08:41
이번에는 코드 작성을 먼저 좀 하고 또 개념 설명을 좀 더 드리고 다시
08:45
코드 작성을 하고 이런 식으로 진행할 겁니다
08:48
그럼 코드 작성 으로 넘어가겠습니다
```

#### video 34
- ch8-5 fc data trx gps message

{% include youtubePlayer.html id=page.youtubeID34 %}

```diff
00:13
지난 시간에 0 x 1 0 메시지를 50hz 주기로 송신하는 것을 설명
00:18
드려 썼구요
00:19
그때 넌 블로킹 방식이 랑 타이머를 써서 그런 했었습니다
00:23
이제 이번 시간에는 0x1 이 메시지를 이번에는 실패 루즈 로 송신을
00:28
할거구요
00:29
이 안에는 gps 위도 경도 정보 배터리 전압
00:33
그리고 종기의 스위치의 이랑 씨의 상태 마지막으로 조종기 에펠 세 잎
00:37
상태가 들어 있습니다
00:39
그리고 지난 시간에 넌 블로킹 방식으로 성진 하기 위해서
00:43
할 드라이버에서 제공하는 인터럽트 방식 의 송진 함수를 사용 했었는데 이
00:47
함수도 잘못쓰면 우리가 원하는 대로 동작하지 않을 수가 있어서 그 이후
00:52
랑 해결방법에 대해서 설명을 드릴 겁니다
00:55
근데 이건 지난 시간에 강조 드린 것처럼 전체 프로그램 흐름에 영향을
00:59
미치는 그런 건 아니어서 간단히 만 설명 드릴 겁니다
01:05
이번 시간에 걸 좀 보여드리면 ccs 커넥트 하고
01:09
드론의 전원을 넣구요
01:13
지금 fc 는 고객 승 7 메시지를 50회를 주로 성질을 하고 있고 또
01:18
0x1 1매 치지도 실패를 주로 같이 성신 하고 있는 상태입니다
01:22
먼저 0x1 공매 시 부터 확인을 해보면
01:26
센서가 래프 탭에서 올 피치 회전 각도를 출력해 봣더니 잘 진행되고 있죠
01:32
그리고요 회전 각도 도 잘 출력이 되고 있고
01:35
고도
01:38
잘 출력이 되고 있습니다
01:41
그리고 이제 조종기 의 상태를 도 촬영을 해봤더니 조종기 전원을 키고
01:47
룰의 목표 값 또는 출력해 봤습니까
01:51
살 변하고 있고 또 피치 잘 바뀌고 있구요
01:55
요도 잘 출력이 되고 있습니다 이렇게 해서 0 x 1 0 메시지는 확인이
01:59
됐고 이제 0x1 이는 메시지를 또 확인해 보면 먼저 gps 정보는
02:05
지금은 실내 어서 gps 가 안잡혀서 가짜 gps 정보를 보내 줘 된
02:10
상태입니다
02:11
그래서 맵상에 지금 표시가 되고 있는데 이 표시되고 있는 마커는 가짜
02:16
gps 정보 라고 보시면 되고
02:18
좌표가 변해도 맵상에 잘 출력이 되는지 확인 하려고 이렇게 움직이도록 해
02:22
놨습니다
02:23
이따가 코드 잘되는 실제 gps 정보를 보낼까요
02:27
그리고 배터리 정보는 왼쪽 윗부분에 텍스트로 표시가 되고 있습니다
02:31
11.1 볼트 정도 출력이 되고 있네요
02:35
그리고 이제 스위치 상태 먼저 스위치 a 가 위로 올라가 있을 때는 0
02:40
이구요 그대로 내리면 1 이렇게 바뀌자
02:42
그리고 스위치 씨도 위로 올렸을때 0이고
02:46
중단으로 두면 1 밑으로 내리면 이 이렇게 바뀝니다
02:50
잘 표시가 되고 있고 마지막으로 펜 세이브 상태는
02:54
조종기 전원을 끄면 제펜 세입 상태로 들어가죠
02:58
그래서 전원을 꺼 보겠읍니다
03:01
전원을 꺼 써니 펜스에 그 상대가 여기 표시가 되고 있고
03:05
출시 x 자체에서 경보음을 울리고 있습니다
03:08
이경 고음은 체크박스를 체크하면 경고 꺼져요
03:13
그리고 들어온 자체 부저 에서 소비품 해드리고 있죠
03:16
쓰 시끄러우니까 쓰죠 그런 전화를 좀 해야겠습니다
03:21
그래서 이게 지금 다 확인을 한 거고 배터리 전압이 만약에 10 볼트
03:25
이하로 떨어지면 그때 또 경고음이 올리구요
03:28
그리고 데이터가 fc 로부터 3초간 안 받아줘 도 경고음이 울리는 데
03:33
그건 기본적으로 꺼져 있는 상태 이자 그래서 이번시간에는 이렇게 0x1
03:38
인 메시지를 보내서 쥬 cs 에서 그걸 확인해 볼 겁니다
03:42
이번 시간에는 이 송신할 3가지 베시 중에 두번째 미 시즌 2 정보들을
03:47
지 실수 로 송신하는 방법을 설명 될 거구요
03:50
이 메시지 역시 주 cs 에서 따로 요청하지 않아도 실패로 쭉 1호
03:54
수시로 송신할 겁니다
03:57
콩 x11 메시지 구조를 또 간단히 설명드리면
04:01
첫 2바이트 똑같이 공매 x 460 x 4 3으로 시작하고 그 듀엣 id
04:06
한 바이트가 이번에는 0x1 입니다
04:09
이 메시지의 페이 보드는 먼저 4바이트 에 gps 위도우 정보가 나오구요
04:14
이건 10의 7승을 곱해서 보낼 건데
04:17
근데 예전에 gps 데이터 수신 할 때 기억해 보시면
04:20
gps 에서 보내준 위도 경우도 자체가 이미 10의 7세기 곱해 진정 수
04:26
형태로 받았었어요 그걸 우리는 롱 형태의 변수에 저장을 했었죠 그래서
04:30
위도 경도 정보를 보낼 때는 따로 10의 7 생을 앙 곱해 줘도 됩니다
04:36
그냥 비트 연산 같은거 에서 이 4개의 바이트 쪽에서 보내주시면 하는데요
04:41
역시 이해가 잘 안 가진 분들은 있다 코드 보시면 바로 이해가 가실겁니다
04:45
경도 정보도 마찬가지구요 그 다음 두 바이트가 배터리 전압 정본 돼 이건
04:51
지금은 실수 형태의 변수에 저장을 해 놓은 상태구요
04:54
거기에 100을 곱한 북어 없는 2바이트 정서 형태로 보낼 겁니다
04:59
코드는 지난 시간처럼 작성하면 될 겁니다
05:02
이제 스위치의 이랑 스위츠 c 상태를 각각 한 바이트 싶어 낼 건데
05:06
스위치 갚지 위로 올리면 첫 내리면 2000 이런 값이 0
05:11
이걸 0 이런식으로 바꿔서 보낼 겁니다
05:15
그 이유가 1000 2000 이런 값을 보내려면 한 바 있 으로 표현이
05:19
안되서 두바이 들어 보내야 돼요 그럼 바이트 낭비가 심해 질 간 1
05:22
바이트 로 표현하기 위해서 00일 이렇게 보내는 거고
05:25
스위치 같은 경우는 연속된 값이 아니고 1000 2000 이렇게 딱
05:29
정해진 값이 나서
05:30
영이를 이렇게 변환해서 보낼 수 있는 겁니다
05:33
그리고 그 다음 한 바이트가 조종기 페일 세이프 상태인데
05:37
정상일 때는 0 델 세이프 가 발동 됐을 때는 이를 보낼 겁니다
05:42
그리고 fc 란 수신기의 선 연결이 잘못돼서
05:46
아예 데이터가 안 받아 질 경우에 그 때 이라는 값을 9분해서 보낼 건데
05:51
이건 아직 구현이 안 돼 있어서 다음 챕터에서 구현 할 거구요
05:55
그래서 이번 시간에는 0 또는 1 만 보낼 겁니다
05:59
그 다음 3개의 바이트는 사용하지 않을 거라 서영을 채워서 보낼 거구요
06:03
마지막 책상 1 바이트 는 또 역시 0xff 해서
06:06
이전의 모든 값들을 바이트 단위로 뺀 결과를 보낼 겁니다
06:10
그래서 이번 시간에 이 메시지를 c 패드 지로 송신한 코드를 작성하도록
06:14
하겠습니다
06:16
우선 지난 시간에 0 x 10ah rsc 송신할 때 타임라인은 이렇게
06:22
됐었습니다
06:23
1mm 생 마다 모든 동작이 반 복수 행 되구요
06:27
그리고 0x1 곡 메시지 성취하는 것은
06:30
20mm 쌩 마다 반복 됐죠 메시지의 송신 않은지 간이 1700 마이크로
06:35
색 정도가 걸렸는데 도의 게 가능했던 게 첫번째가 송신할 때 넌 블럭 킹
06:40
방식을 사용해 썼고 또 하나가 딜레이를 사용안하고 타이머 인터럽트를
06:45
사용했기 때문에 전체 1mm 색 동작의 흐름은 큰 영향을 받지 않았습니다
06:51
이게 정말 중요하다 고 했죠 이런 프로그래밍 기법 은 이수아 뿐만이
06:55
아니고 모든 프로그래밍 관련된 분야에서는 다 해당되는 내용이니까
06:59
어떤 프로젝트를 하시더라도 이런 것들은 꼭 고려하면서 개발 하셔야 됩니다
07:05
이제 이거는 이번 시간에 구현하려고 하는 곡 넥스 7 메시지를 항공
07:10
x12 는 메시지를 같이 성진 할 경우에 타임라인 입니다
07:14
1mm 생 마다 모든 동작이 반복 쌩 되는 건 똑같고 또 0 x 1 0
07:19
메시지의 송신 하는 것은
07:21
20mm 생 마다 반복되는 게 똑같잖아
07:24
그리고 0x1 1 메시지는 100 밀리 색 마다 반복 송진 되도록 할
07:29
겁니다
07:30
그래서 100 밀리 쓸 때 보내고 200mm 색 때 보내고 300mm 색
07:34
때 보이고 이런식이 되겠죠
07:36
지난 시간에 타이머 인터럽트를 1mm 색 주기로 발생 하도록 해 놓았구요
07:41
그걸 20번 세서 20mm 의 색을 만들어서 점
07:44
이제 100 밀리 색을 또 만들어야 되는데 또 이 1mm 씩 타이머를
07:48
100번 세는 방식으로 100년이 색을 만들 겁니다
07:51
이렇게 하면 타이머 하나로 20mm 의 세기 랑 100 밀리 색을 같이
07:56
만들 수 있는 거죠
07:57
근데 무조건 이렇게 할 수 있는건 아니고 어떤 경우엔 이런 방식이
08:00
불가능할 수도 있어요
08:02
그때는 타이머를 하나 더 돌려 될 수 있습니다
08:05
우리가 사용하는 stm32 f4 의 타이머가 총 14개가 있는데 그래서
08:11
타이머가 이렇게 많은데 굳이 이렇게 하나로 해야되나 할 수 있을 텐데
08:15
근데 사실 하드웨어적인 리소스는 줄일 수 있으면 최대한 줄이는게 좋습니다
08:19
또 그런 습관을 들이는 게 좋아요
08:22
그리고 이런 방식을 알아두면 타이머의 개수가 부족한 마이크로 컨트롤러를
08:26
사용할 경우의 예를 들면 뭐 8bit mcu 같은 경우는 타이머가 4개의
08:31
몸 않으면 6개 이렇게 밖에 없죠
08:33
그때는 이런 식으로 구현하면 도움이 좀 될 겁니다
08:38
이제 코드 작성할 때는 아마 이런 식으로 할 겁니다
08:41
우선 이 코드는 실제 코드 가 아니고 개념적인 코드 즉 추도 코드 장 이
08:47
루프가 메인 와 인물이 될 거고 이 안에서 먼저 20mm 생 마다
08:52
곡 맥스 1 0 hrs 메시지를 상징하는 것은 이런 식으로 구현해
08:56
났었습니다
08:58
이때 넌 블로킹 함수인 인터럽트 방식 의 송수남 주었어 짜
09:03
이제 100 밀리 생 마당 또 0x1 1
09:06
gps 메시지를 상징 할 건데 그때는 2위에서 한 것처럼 비슷하게 이렇게
09:11
코드 작성을 하겠죠
09:12
아주 직관적이고 또 문제가 없어 보입니다
09:16
이렇게 하면 20mm 생 마다 hrs 메시지를 보낼 거고 100 밀리 생
09:21
마다
09:22
gps 메시지를 보내게 될 거에요 그리고 100 밀리 쌕 죽이는 또
09:26
20mm 쌕 죽이라는 겹치니 깐
09:29
100 밀리 쐐기 됐다면 그게 또 이 16세기 중 2가 되는 거죠
09:32
즉 100 밀리 색 때는 20 밀레 세계 이 코드가 수행이 되고 바로 이
09:38
다음에 100 밀리 세계 이 코드가 수행이 될 겁니다
09:41
그래서 그때 우리가 원하는 것은 이 타임라인 처럼 hrs 메시지가 먼저
09:47
상식이 되고
09:48
gps 메시지가 그 뒤에 이어서 바로 송진이 된거죠
09:52
근데 여기서 문제가 발생하는데 이렇게 코드를 작성하면 우리가 원하는 대로
09:58
수행이 안되고
09:59
이 뒤에 보낸 gps 메시지가 송신이 안되는 문제가 발생합니다
10:05
왜 그런 문제가 생긴다면 이하 에서 제공하는 넘 블로킹 방식 의 성신
10:10
함수는
10:11
이어서 성신 해주는 기능이 없어요 이 함수가 먼저 호출이 되면 hrs
10:16
메시지가 성신이 되기 시작하는데
10:18
송신하는 데 1700 마이크로 3 정도가 걸린다 그렇죠 근데 넌 블로킹
10:23
모드는
10:24
이 함수가 호출되면 그 안에서 메시지를 다 보내는 게 아니고 송진 할
10:28
메시지를 대결에 먼저 올리고 그 동안 다른 동작들이 수행이 되다가
10:33
데이터를 보낼 준비가 되면 그 때마다 인터럽트가 발생하면 서 1 바이트
10:37
씩 보내는 방식 이라고 설명드렸습니다
10:39
그러면 다른 동작이 수행이 되니깐 그 말은 바로 밑에 있는 이 코드들이
10:44
이어서 수행이 된단 말이에요 그래서 또 gps 를 보내려고 바로 이
10:48
함수가 호출이 될겁니다
10:51
즉 이전에 보내려고 했던 이 메시지들이 아직 타 송신이 안된 상태에서 또
10:57
밑에 있는 이 함수가 호출이 된단 소리에요
10:59
그런 경우에는 이 함수가 무시 된다 고 지난 시간을 살짝 언급을
11:04
들었었습니다
11:05
그래서 이 뒤에 있는 메시지가 성신의 안 되는 거예요 덤블러 킹 방식을
11:09
쓰면 1khz 로 제어가 되는 내지 4
11:12
이 뒤에 메시지를 보내는 게 송신이 안 될 수가 있습니다
11:16
근데 만약에 블럭 킹 방식을 썼다면 이런 문제는 생기지 않는데
11:20
대신 아예 1khz 로 제어가 불가능해지자
11:23
그래서 블로킹 방식을 쓰면 무선 무조건 안되요
11:27
그리고 이게 이제 이하 에서 제공하는 넌 블로킹 함수를 썼을 때 그 때
11:32
발생하는 어떻게 보면 유일한 문제인것 같습니다
11:36
이 함수에 사용법이 그렇게 정해져 있기 때문에 이걸 새롭게 정의해서
11:39
사용할 게 아니라면 어쩔 수 없이 그 함수의 사용법을 따라야 되겠죠
11:44
이 문제는 지난 시간에 강조 드린 것처럼 그렇게 큰 문제는 아니구요 그냥
11:49
단순히 이 메시지만 송신이 안 되는 거고 프로그램의 전체 흐름을 깨뜨리기
11:54
거나 하는 그런 문제가 없습니다
11:56
그래서 큰 문제는 아니지만 어쨌든 이 정보들을 주 cs 에서 확인 하려면
12:00
해결을 해야겠죠
12:03
그럼 이건 어떻게 해결 하느냐
12:05
안타깝게도 할 드라이버에서 또 다른 함수를 제공 해 주는건 아니구요
12:09
어쩔 수 없이 함수는 이걸 그대로 써야 되고 대신 이 타이머로 주기적으로
12:15
처리하는 방식을 조금 바꾸면 해결할 수 있습니다
12:18
크게 달라지는 건 아니고 또 제가 설명드리는 방법만 써야 되는 건
12:22
아니고요
12:23
다른 더 좋은 방법이 있을 수 있습니다 제가 설명드릴 방법은 아주
12:27
간단해요
12:29
100 밀리 색 주기마다 ahr s 랑 gps 메시지를 같이 점성을 해야
12:33
되는데 그걸 함수 2번으로 따로따로 보내면서 문제가 생기는 거니까 그냥
12:39
이 두 배 cg 를 함수 호출 한 번으로 다 보내주는 겁니다
12:44
코드를 보면 이해가 좀 쉬울 거에요 자 우선 2 hrs 메시지는
12:49
20mm 쌕 주기로 보내서 20mm 3 40mm 색 60 80 이렇게
12:54
보낼 겁니다
12:55
20 바이트 씩 보내는 거죠 그러다가 100 밀리 쓰게 되면 위의 함수
13:00
한 번 밑에 함수 한번 이렇게 두번의 보낸 게 아니고
13:04
밑에 함수만 한 번 호출하고 그 때 이 두 개의 메시지를 같이 보냅니다
13:09
즉 이 때는 이 정보들을 40 바이트 임시 변수에 2개 메시지를 같이
13:14
저장하고 그 40 바이트를 한꺼번에 보내는 식으로 해결할 수 있습니다
13:18
그래서 이 이 부문의 조건을 조금 바꿔서
13:22
위에 있는 2분의 경우에는 20mm 쌕 죽이지만 100 밀리 세계 주기가
13:27
아닌 경우 24 10 60 80
13:30
그리고 백은 건너뛰고 다시 120 140 160 180
13:35
이러한 경우에 이 위에 있는 이 부분이 수행 되게 하구요
13:39
그 안에서 hrs 메시지 20 바이트 만성 죄를 하고 그 다음에 100
13:44
밀리 세계 죽인 경우
13:46
100 200 300 이런 경우에는 위에 있는 이 부문이 수행이 되지
13:50
않고 밑에 있는 이프 문이 수행이 되면서
13:54
ahr s 랑 gps 메시지를 같이 보내 주면 될 겁니다
13:58
그래서 이렇게 하면 아까 같은 문제가 해결이 될 거구요
14:01
이게 엄청 깔끔한 방법은 아닌것 같지만 어쨌든 우리가 원하는 대로 동작을
14:06
하게 될겁니다
14:07
이 방식은 2할 드라이버에서 제공하는 인터럽트 성신 함수를 쓰기 위해서
14:12
코드 흐름을 조금 바꾼 거구요
14:15
보통은 이런 식으로 안하고 이 앞의 예처럼 2개를 각각 따로 따로
14:20
독립적으로 처리하는 게 보통 이에요
14:24
그래서 좀 전에 방식대로 코드 작성을 하면 최종적으로 타임라인은 이렇게
14:28
될겁니다
14:29
역시 모든 동작들은 1mm 색 주기로 반복되고 요
14:33
hrs cg 상징하는 것은 20mm 쌕 주기로 반복됩니다
14:38
그러다가 100 밀리 쌕 주기가 되면 hrs 람 gps 메시지가 같이
14:44
성실을 했는데 한 번에 함수 호출로 이 두 개의 메시지가 같이 송진이
14:48
되는 거죠 그러면 어쨌든 hrs 메시지는
14:52
매 20 밀샙 주기마다 계속 형식이 되는거고
14:56
gps 메시지는 100 밀리 쌕 주기 때마다 성신이 되는 겁니다
15:01
그래서 딱 우리가 원하는 대로 동작하게 되었습니다
15:05
그리고 100 밀리 쌕 주기 때마다 성진 할 때는
15:08
이때는 40 바이트를 보내니까 송신 시간을 3400 마이크로 색 정도가
15:13
걸릴 겁니다
15:15
하지만 넘 블로킹 방식으로 보니깐 역시 1킬로 헤르츠 g n 영향을 크게
15:19
미치지 않겠죠
15:21
그러면 이렇게 설명드린대로 소스 코드 작성 하도록 하겠습니다
15:24
코드 작업으로 넘어가겠습니다

```

#### video 35
- ch8-6 fc data trx pid gain message

{% include youtubePlayer.html id=page.youtubeID35 %}

```diff
00:13
지난 지금까지 0 액스 10ah rsc 지랑 공매 x11 gps 메시지를
00:19
깍 깍 50회 107 실패 뱃지 로체 cs 에 전송하는 방법을
00:23
설명드렸습니다
00:25
이렇게 해서 드론의 대부분의 상태 정보들을 지시해서 확인할 수 있게
00:28
됐고요
00:30
이 정보들은 비행 하는 중간에도 실시간으로 확인할 수 있고 또는 파일로
00:35
저장해서 로그로 확인할 수 있을 겁니다
00:38
이제 송지나 메세지가 하나 남았는데
00:40
현재 들어오니 가지고 있는 pid 개인 값들을 점성 해서 역시 주 씨에스
00:45
에서 확인할 수 있게 할 겁니다
00:46
특히 pid 개인이 제어 있어서 상당히 중요한 부분을 차지하기 때문에
00:51
비행하기 전에 꼭 확인해 보는게 좋습니다
00:54
이 메시지의 같은 경우는 실시간으로 확인할 게 아니라서 수시로 보내는 거
00:58
아니고요
01:00
어떤 특정한 상황이 되면 그때 마다 한번씩 보내 줄 건데 이 수업에서는
01:04
그 특정 상황을 3가지로 9분할 겁니다
01:08
첫번째는 들어오네 전원이 처음 들어갔을 때 개인 정보를 보내줄 거구요
01:13
두번째는 ccs 에서 개인 설정 메시지를 보내 줄 건데 그걸 받으면 잘
01:19
받았다는 의미로 받은 개인을 다시 보내 줄 거고
01:23
마지막으로 ccs 에서 개인을 알려 달라고 요청이 오면 그때 또 보내줄
01:27
겁니다
01:28
그래서 이렇게 세 가지 상황 중에서 이번 시간에는 첫번째 드론의 전원이
01:33
들어 갔을때 보내주는 걸 구현할 거구요
01:36
나머지 2개는 지시 스에서 데이터를 수신 받았을 때 그에 대한 응답 의
01:41
의미로 보내준 거라서
01:43
그 다음 시간에 메시지 수신을 구현한 후에 응답 메시지를 보내는 걸로
01:48
변할 겁니다
01:50
이번 시간에 구현할 걸 좀 보여드리면 먼저 cs 커넥트 를 하구요
01:55
이번엔 pid 개인 탭을 알겠습니다
01:58
이제 드론 의 전원을 넣을 건데 지금 전원이 들어가면 잎이 롬 에
02:02
저장되어 있는 pid 개인을 불러와서 그걸 7 실수 로 보내주는 코드가
02:06
들어 있구요
02:07
메인 와 1 문이 수행되기 전에 한 번 보내 주게 되어 있습니다
02:11
한번 전원을 넣어보겠습니다
02:16
전원을 넣었더니 2 오른쪽 부분에 개인 값들이 표시가 됐는데 이게 ep
02:21
롬 에 저장되어 있는 현재의 개인입니다
02:24
지금은 임시로 제가 넣어놓은 값들이 들어 있는데 나중에 제어 들어가면
02:28
실제 pid 개인이 여기 표지가 될 거에요
02:32
이렇게 하는 이유가 만약에 이 개인이 이상한 값들이 저장이 되어 있으면
02:36
그 상태에서 바로 비행을 하면 사고가 날 수 있기 때문에
02:40
비행하기 전에 이렇게 눈으로 한번 확인 해 보는 겁니다
02:45
이번 시간에는 pid 개인 메시지를 gcs 로 보내 줄 거구요
02:49
이 세 가지 상황 중에서 첫번째 상황인 들어오네 전원이 처음 들어갔을때
02:53
보내주는 걸 이번 제가 할꺼구요
02:55
그리고 밑에 있는 이 두 가지 상황은 지금 당장은 권하지 않고 다음
03:00
시간이랑 그다음 지간에 ccs 메시지 수신 않은걸 닿을 텐데 그때 설명
03:05
드릴 겁니다
03:07
pid 게임 메세지는 총 6가지 종류가 있구요
03:10
각각의 종류마다 msgid 가 다 다릅니다
03:14
먼저 롤의 pid 게임 메세지는 헤더는 똑같이 공매 x 460 x 4
03:19
3으로 시작하구요
03:21
롤의 내부 pid 개인의 아이디가 0x0 0 입니다
03:26
페이로드 는 pid 개인정보가 각각 4바이트 실수형 텐데
03:31
이전에 센서 깜 이런거 보낼 때는 실수 형태 값에 곱하기 100을 하고
03:36
그걸 정수 형태로 바꾸는 그런 과정이 있었는데 그때는 소숫점 이아 둘째
03:41
자리까지 만 확인하면 돼서 그런 식으로 보여줬던 거구요
03:45
이 개인정보는 소숫점 이야 몇째 자리까지 가 유언 정보인지 정해진 게
03:50
아니어서
03:51
실수 형태의 값을 그대로 보내주게 해서 페이로드 를 이렇게 실수 형태로
03:56
정했습니다
03:57
그리고 페이로드 마지막 에 바이트는 사용하지 않아서 영을 채워서 보내주면
04:02
되고 마지막 체크 섬은 또 0xff 에서 바이트 0부터 바이트 18 까지
04:08
모든 값들을 뺀 결과를 채워서 보내주면 됩니다
04:12
그래서 이게 롤의 내부 padam 4 쓰시구요
04:15
롤의 외부 pid 개인 메세지는 아이디가 0x0 1 이고 나머지는
04:21
똑같습니다
04:22
그다음 피치 pid 게임 메세지는
04:25
내부 pid 개인이 아이디가 0x0 이구요
04:29
외부는 0x0 3입니다 나머지는 좀 자는 설명드렸던 로리 랑 똑같으니까
04:34
설명은 넘어가겠습니다
04:37
그다음 마지막으로 유에 pid 게임 메시지는 먼저 요 제어는 방식이 두
04:42
가지가 있다 그렇죠
04:44
요 의 각도 제어 pid 게인이 아이디가 0x0 사구요
04:49
각 속도제어 pad 개인 id 가 0x0 o 입니다
04:53
역시 나머지는 똑같으니까 설명은 생략하겠습니다
04:58
이 표는 예전에 ep 롬 에 pid 개인 저장할 때 한번 설명을 드렸었죠
05:02
잎이 롬에 개인을 저장하는 함수 를 정해서 사용 했었고 그때 각각의
05:07
개인마다 이렇게 id 를 부여해서
05:10
입이 롬에 저장된 개인이 어떤 개인 인지를 9분 했었습니다
05:14
즉 시스의 보내주는 개인의 아이디도 이 아이디랑 갖게 정해 났어요 그래서
05:19
코드 작성에 도 좀 쉽게 해놨습니다
05:22
pid 개인은 우선 드론 에 처음 전원이 들어갈 때 이미 이 필요 메그
05:26
개인들이 저장이 되어 있죠
05:28
그 저장된 개인 을지 실수로 보내 줘야 되는데 그러려면 랜 먼저 해야
05:33
되는게
05:33
잎이 롬 에서 이 개인들을 읽어 와야 돼요
05:37
그 다음에 그걸 20 바이트 임시 배열에 저장 해서 지 실수로 보내주는
05:41
과정이 필요할 겁니다
05:43
그래서 이 필요에서 개인을 읽어올 때 이 id 로 9분해서 개인을 읽어
05:48
와야 됩니다
05:49
설명 복잡해 보이는데 코드는 되게 간단해요
05:52
그건 이따가 코드 작성할 때 설명 되겠습니다
05:56
kd 개인을 보내주는 세 가지 상황 중에서 먼저 들어온 에 처음 전원이
06:01
들어 갈때 송진 해주는걸 이번 시간에 구원한다 고 했는데 그때 프로그램의
06:06
흐름을 정리한 플로 자 뜹니다
06:09
그래서 이건 예전에 다쿠야 했었던 거고
06:11
여기서 이 pid 개인을 보내는 걸 이번 시간에 큰 할꺼고
06:15
장치 초기화 다음에 해줄겁니다
06:18
사실 이 위치는 이 장치 초기화 이후에 어디에서 하든 상관없어요
06:23
근데 여기다가 한 이유가 이제 다음 챕터에서 안전을 위한 몇 가지 기능들
06:28
구현을 할 건데 그 중에 센서 연결 상태를 검사하는 내용도 있고 또
06:33
pad 개인이 로드가 잘 됐는지 검사하는 기능도 있어요
06:37
그래서 그것들을 한 곳에서 묶어서 갇히고 나려고 여기다가 배치했습니다
06:42
그럼 이제 이 때 해야 될 일이 세 가지 순서로 9분할 수 있을 것
06:46
같은데
06:47
먼저 ep 롬 에서 pad 개인을 불러와야 겠죠
06:51
그걸 어떤 변수에 저장한 다음에
06:54
20 바이트 임시 대열에 그 읽어들인 개인을 포함해서 메시지 프레임을
06:59
저장을 하고 마지막으로 그 임시 베어를 gcs 로 전송해 주면 될 겁니다
07:05
근데 개인의 종류가 총 6가지가 있기 때문에 이걸 여섯 번 반복해 줘야
07:10
돼요 그건 반복문을 이용해서 하면 편하겠죠
07:14
그래서 이번 시간에 코드 괜 할 것은 많지는 않을 것 같고 이제 실수
07:18
형태의 변수를 어떻게 바이트 단위로 쪼개서 임시 별의 저장을 할 건지에
07:22
대한 이슈가 있는데 예전에는 유니언 공용체 를 써서 실수 형태를 바이트
07:28
단위로 나누는 걸 설명드렸습니다
07:31
근데 이번에는 공용체 를 사용하지 않고 또 다른 방법을 설명 될 겁니다
07:35
그러면 이제 실제 코드를 작성하면 설명드리겠습니다
07:39
그럼 소스 코드 작업으로 넘어가겠습니다

```

#### video 36
- ch8-7 fc data rx pid gain setting message

{% include youtubePlayer.html id=page.youtubeID36 %}

```diff
00:13
지난 시간까지 에서 멧세지 성신이 다 끝났습니다 이제 드론의 상태정보
00:17
들이랑 pid 게임까지 다즈 cs 에서 확인할 수 있게 됐죠
00:22
이제 이번 시간부터 2시간에 걸쳐서 쥬 cs 로 부터 메세지 수신 받는걸
00:26
다를텐데
00:27
수신 받을 멧세지 종류는 두가지가 있습니다
00:30
먼저 이번 시간에는 gcs 로부터 pid 개인설정 메시지를 소진 받았을
00:35
때 그걸 ep 롬 에 저장을 하구요 다시 응답을 보내준 걸 구현할 거고
00:40
다음 시간에는 이거랑 비슷하게 ccs 에서 개인을 알려달라는 요청을
00:45
받았을 때 또 그에 대한 응답을 보내준 걸 구현할 겁니다
00:48
이 메세지 들은지 cs 에서 보내준 거니까 fc 입장에서는 수신이 되겠죠
00:53
gcs 에서 특정 버튼을 누르면 그에 따라 프로토콜에 맞게 메시지가
00:57
보내진 4
00:59
fc 에서는 또 그 메시지를 수신 받아서 씽크 차량 체크섬 검사하고
01:03
파싱을 하구요
01:04
또 멧세지 id 에 따라서 어떤 동작들을 하는 코드를 작성해 주면 될
01:08
겁니다 이건 이전에 아이 버스랑 유비 x 멧세지 수진 할 때 해봤던
01:12
것들이 니까 어렵지 않게 표현할 수 있을거구요
01:15
그래서 개념 설명도 간단히 만 드리면서 진행하겠습니다
01:20
오늘 구현할 걸 좀 보여드리면 먼저 7 cs 연결을 하고 개인 탭을 열고
01:25
지금 상태에서 들어온 의 전원을 넣으면 와 임원 들어가기 전에 입이 롬에
01:29
저장된 개인 값을 읽어서 짓으로 보내 줘 그럼 그게 여기 표시가 될겁니다
01:34
이것까지 지난 시간에 표현했던 내용이죠
01:38
전원을 넣었더니 개인 값이 잘 표지가 됐습니다 이제 fc 는 메인 와 1
01:44
문 의 진입한 상태 0
01:46
지금 상태에서 2개인 전송 버튼들을 누르면 현재 이 텍스트 박스에
01:50
적혀있는 pid 개임 값들이 fc 로 보내 지구요
01:55
그러면 fc 는 먼저 그가 수신 받아서 멧세지 문제 없는지 검사하고 또
02:00
파싱을 하고 그 개인 값들을 입이 롬에 저장합니다
02:04
근데 그렇게 저장만 하고 끝나면 개인이 잘 수진 되고 잘 저장이 되는지
02:08
알 수가 없잖아요 그래서 그걸 다시 입이 롬 에서 읽어와서
02:13
지실 스스로 보내줍니다 그럼 그게 가지 여기 표지가 되니까
02:17
우리가 전송한 개인이 잘 저장이 됐는지 확인할 수 있는 거죠 그래서 한번
02:21
이 버튼들을 눌러 보겠습니다 먼저 모레 내부 pid 개인을
02:26
자 보냈더니 이 값들이 다시 여기 표지가 됐죠 또 롤의 외국 다른 버튼
02:32
질도 눌러 보겠습니다
02:35
여기 있는 버튼들을 다 눌러 봤더니 그게 여기에 절 표지가 됐죠
02:39
잘 표지가 됐다 는 마른 잎이 로메 이 보낸 개인들이 잘 저장이 됐다는
02:43
말이에요
02:44
그러면 정말 그런지 또 한번 확인해보겠습니다
02:47
이 들어온 에 전원을 처음 나오면 이 필요에서 개인 을 읽어와서 보내
02:51
주니까
02:52
그 값을 확인해 보면 되겠죠 그래서 우선 들어온 에서 전원을 빼고
02:57
gcs 도 껏다가 다시 키고 요
03:03
커넥트 를 하고 개인 댁을 열고
03:06
이제 들어오네 다시 전원을 넣어보겠습니다
03:12
전원을 넣었더니 와 일문 들어가기 전에 개인을 한번 보내주는데 좀 전에
03:16
저희가 변경한 이 영 이란 값들이 확인이 됐네요
03:20
그래서 잎이 롬에 개인이 잘 저장이 됐는지 확인해 봤습니다
03:23
그래서 이번 시간에 이렇게 버튼들을 눌렀을 때 그 개인을 입이 롬에
03:28
저장을 하고 다시 짓으로 응답하는 걸 구현해 보겠습니다
03:33
이번 시간엔 gcs 로부터 메세지 수신 받는걸 할거구요
03:36
먼저 pid 개인설정 메시지를 쓰신 받을 건데 역시 pl 개인은 6가지
03:42
종류가 있고 개인 종류마다 멧세지 id 가 다릅니다
03:46
이번 시간에 구현할 거는 이 6가지의 pid 개인설정 메세지를 받으면
03:51
우선 그걸 fc 의 ep 롬 에 저장을 하는게 가장 먼저 할 거구요
03:56
그런데 그렇게만 하면 개인이 잘 받아 졌는지 알 수가 없잖아요
04:00
중간에 데이터와 깨져서 이상한 개인이 저장 된다면 비행할 때 사고가 날
04:04
수 있기 때문에 잘 받아 졌는지 확인 하는게 좋습니다
04:08
물론 소신 받을 때 예 fc 에서 체크 싸움으로 검사를 하긴 하지만
04:12
눈으로 그 값을 확인하는게 가장 확실한 방법이 있죠 그래서 소심 받은
04:16
개인을 우선 입이 롬에 저장을 한 후에 그걸 다시 읽어 와서 gcs 로
04:21
보내줄 겁니다
04:23
잎이 롬 에서 개인 을 읽어와서 짓으로 보내주는 것은 지난 시간에 구애를
04:26
했었죠 근데 그때는 와 1 문의 들어가기 전에 한 번만 수행을 했었고
04:32
이번에 구현할 거는 메세지 수신 받은 걸 확인하고 다시 응답을 해 줘야
04:36
되니깐 와 1 문 안에서 설 해줄겁니다
04:40
지난 시간에 개인을 송신하는 상황이 3가지가 있다고 설명 드렸는데
04:44
첫번째가 지난 시간에 한거고 이번에 개인을 수신 받고 그거에 대한 응답을
04:49
보내주는게 이 두 번째 상황이 될 거구요
04:51
세번째 마지막 상황은 또 다음 시간에 구현할 겁니다
04:55
그리고 이제 다른 프로젝트를 하실 때 그때도 이렇게 통신으로 데이터를
04:59
주고 받고 해야 할 일이 있다면 중요한 데이터는 반드시 어떤 식으로든지
05:04
데이터가 잘 받아 졌는지 확인을 해 봐야 되요 근데 물론 그것까지 다
05:08
구현을 하려면 코드가 좀 복잡해 지기 나겠죠
05:12
이것도 예전에 설명드렸던 건데 이제 데이터 수신 이니까 다시 한번 간단히
05:16
설명을 드리면
05:17
수신을 멧세지 프레임도 총 20 바이트 다니구요
05:21
첫 2 바이트가 송신할 때는 고 맥스 460 맥스 4 3으로 시작했는데
05:26
수신 메세지는 헤더 2바이트 가 다릅니다 이번에는 공유 x 470 x
05:31
구성으로 시작하고 그 다음 1 바이트의 멧세지 id 가 있고 그 후에
05:36
16 바이트 의 페이로드 영역
05:38
마지막으로 한 바이트 체크 섬으로 구성되어 있습니다
05:41
헤더 만 빼고 송신한 때랑 똑같이 정해 났어요 헤더를 다르게 정한 이유는
05:46
송신 이랑 수신 프레임을 좀 9분하기 위해서 입니다
05:49
다른 이유는 없어요 그리고 모든 데이터는 리틀 md 언 표기 라는 것도
05:54
똑같고 체크섬 계산 방법도 똑같습니다
05:57
그래서 ccs 에서 아까 그 버튼들을 누르면 이 프로토콜에 맞게 메시지가
06:01
fc 로 송진이 되는 겁니다
06:04
그럼 이제 id 에 따른 멧세지 프레임 설명을 좀 드리면
06:08
지난번 개인 송신할 때는 똑같이 0x0 0 부터 0x0 5까지 가 개인을
06:14
설정 하는 메시지입니다
06:16
먼저 수신할 첫 2바이트 는 공매 x 470 x 5 3으로 시작하구요
06:21
id 국내 x 002 로렌 에보 pid 개인입니다
06:25
그다음 페이로드 가 4바이트 시 가까 pid 개인이 순서대로 나오고 역시
06:30
리틀 md 언 표현 방식입니다
06:32
리저브 바이트는 사용하지 않으니까 영을 채워서 보내 주면 되구요
06:36
맨 마지막 한 바이트는 체크섬 인데 역시 0xff 에서 바이트 0부터
06:42
바이트 18 까지 의 모든 값을 바이트 단위로 뺀 결과입니다
06:46
그리고 id 0 0x0 길이 모레 외부 kd 개인 이고 나머지는
06:51
똑같습니다
06:53
그 다음 아이디 0x0 기 0x0 3의 각각 피치에 내부의 브 pid
06:59
개인 이고 나머지 똑같구요
07:01
마지막으로 id 0x0 사랑 0x0 5는 각각 요 의 각도 각속도 pid
07:08
개인입니다
07:09
역시 나머진 같으니깐 설명은 생략하겠습니다
07:13
이제 지실 스에서 이 샌드 버튼들을 누르면 좀 전에 설명드린 그 프로토콜
07:17
내로 20 파이트 메세지가 fc 로 전송 되구요
07:21
이 각각의 개인들은 별도로 설정할 수 있게 되어 있습니다 그리고 이 버튼
07:25
순서대로 로렌 에이브 에고 비츠 내부 외부 요 의 각도 각속도 개인
07:31
순서입니다
07:33
그래서 이렇게 pid 개인을 다 보낼 수 있게는 해봤는데
07:36
실제 제어 할 때는 이 개인들을 다 쓰지는 않을 수도 있어요
07:40
예를 들어 이 롤 제어 같은 경우는 외부는 p 제어 만 쓰고 내부는 pd
07:46
줘 이런 식으로 쓸 수 있습니다
07:48
그러면 외부의 아이랑 d 는 사용하지 않고 내부의 아이도 사용하지 않게
07:53
되는 건데 그때는 제어 알고리즘을 바꾼 게 아니고 그냥 사용하지 않을
07:58
제어해 개인을 영을 채워서 보내 주면 되요
08:02
이 게임들은 나중에 pid 제어 할 때 단순히 곱해 지는 상세 어서
08:06
영을 채워서 보내면 0이고 패지 니깐 그 제어는 사용하지 않게 되는
08:11
효과가 있습니다
08:12
그래서 자세한 것은 다음 바트 pid 제어 할 때 설명드리겠습니다
08:17
그래서 이 버튼들을 누르면 어떤 버튼을 누르는 야에 따라서 보내는 메세지
08:21
aid 부분이 이렇게 달라집니다
08:25
lcs 에서 개인 전송 버튼을 누르면
08:28
먼저 그거 에 해당하는 20 바이트 개인설정 메시지가 fc 로 전송 될
08:33
겁니다
08:34
그럼 fc 에서는 가장 먼저 20 바이트 메시지를 쓰신 하겠죠
08:38
수신하는 과정은 예전에 했던 대로 하면 됩니다
08:41
싱크 차 검사하고 그게 일치하면 20 바이트 임시 배열의 쭉 저장을
08:46
하구요
08:46
그게 다 받아주면 체크섬 검사를 해야 되는데
08:49
자체의 계산한 체크섬 이랑 수신된 데이터에 마지막 바이트 랑 일치하는지
08:54
검사하면 됩니다
08:55
체크 선까지 일치하면 멧세지 프레임이 문제없이 잘 받아 진 거고 그게
09:00
1번에서 할 일입니다
09:02
이제 수신이 잘 됐으면 그 다음에 메시지의 아이디를 확인해 봐야겠죠
09:07
수심 받은 메시지의 아이디가 0 맥스 00 이랑 0x0 5 사이라면
09:12
pid 개인설정 메시지가 받아 진 거고 그러면 우선 그 개인을 ep 롬
09:18
에 저장합니다
09:19
그게 2번에서 할꺼구요 여기까지가 개인을 수신하고 입이 롬에 저장하는 것
09:25
까지는 끝난 겁니다
09:27
그럼 이제 마지막으로 응답하는 일이 나왔죠
09:30
이제 응답을 보내 주기 위해서 다시 그 개인을 ep 롬 에서 읽어와서
09:34
그걸 20 바이트 임시 배열에 저장하고 짓으로 보내주면 됩니다
09:39
이 보내주는 것은 지난 시간에 했었으니까 그 코드를 그대로 사용하면 될
09:43
것 같습니다
09:44
그래서 이 메시지를 송신 하면 gcs 에서는 그 데이터를 수신 받아서
09:48
표시를 해 주겠죠
09:50
그래서 최종적으로는 gcs 에서 보낸 개인이 수신 장애 똑같이 표지가
09:56
되면 된겁니다
09:57
그러면 잎이 롬에 저장되고 잘 된 거죠 그래서 이 오른쪽에 있는 이
10:02
과정이 이번 시간에 fc 에서 구현할 내용들입니다
10:07
지난 시간에 구현했던 개인 송진 않은 것은
10:10
드론의 전원이 처음 들어갔을때 와 일문 들어가기 전에 한번 했었는데 오늘
10:15
구현할 내용은 이와 일문 아내의 서생 될 겁니다 그러면 또 주의해야 될
10:20
내용이 있죠
10:21
제가 전에 정말 강조 드렸던 제어 주기가 깨지는 상황이 있구요 또 비행할
10:26
때 안전에 관한 이슈가 하나 더 있습니다
10:29
그래서 이제 이와 1 문 안에서 pid 개인을 수진 하고 입이 롬에
10:33
저장할 때 발생할 수 있는 위험한 상황 두가지를 설명드리겠습니다
10:38
먼저 첫번째로 예전에 이 필요 4 데이터 1코스는 엄수정 의할 때 그
10:43
안에 딜레이 함수를 썼습니다
10:45
그리고 또 제어 하는 동안에 이 딜레이 염소가 수행이 되면 1 킬레이트
10:49
재어 주기가 깨진다고 그렇죠 그래서 비행중에 ep 롬 에 데이터를 읽고
10:54
쓴다면 그 함수 안에서 딜레이 염소가 생이 되면서 bm 이 갑자기
10:58
불안하게 될 수 있을 겁니다
11:01
그리고 또 하나는 개인은 실수로 잘못 입력했을 경우 예를 들어 개인을
11:06
1.2 사항을 입력을 해야 되는데 실수 록 12.3 을 입력을 했다고
11:11
한다면 개인이 10배가 커져버린 거죠
11:14
비행 중에 이렇게 실수 로 개인을 잘못 입력을 한다면 비행 하다가 갑자기
11:18
제어가 불안하게 되거나 최악은 들어오니 갑자기 뒤집어질 수도 있을 겁니다
11:22
그러면 또 큰 사고가 발생할 수 있으니까 이 두 번째 경우가 엄청 위험한
11:28
상황인 거죠
11:29
이런 이유들 때문에 비행중에 개인을 바꾸면 위험한 상황이 발생할 수도
11:34
있는 겁니다
11:35
그래서 이런 상황을 좀 예방하기 위해서 이 개인을 바꾸는 것은 와 일문
11:40
안에서도 제어가 안 되고 있을 때 즉 들어오니 비행을 안하고 있을 때만
11:46
변경할 수 있게 할 거구요
11:47
그중에서도 모터가 안 돌고 있는 디스 허밍 된 상태일 때만 개인 변경 이
11:52
가능하게 할 겁니다 그러면 언제 모터를 암 잉 하고 또 d3 잉 할지를
11:57
정해야 되는데 여태 그걸 안정 햇죠
11:59
그래서 이제 그걸 전하겠습니다 어떻게 정할 거냐면
12:03
조종기 s 위치에 이를 이용해서 모터 아님 또는 디스한 윙을 컨트롤
12:07
할꺼구요
12:08
스위치의 이를 위로 올렸을 때는 모터가 꺼진 디스 허밍 상태로 만들 거고
12:14
밑으로 내려야지 비행할 수 있는 상태
12:17
암이 된 상태가 되도록 구현할 겁니다
12:20
그래서 비행하고 pid 제어 하는 것은 이 스위치의 이를 밑으로 내려야
12:24
되는거고
12:25
반대로 비행하는 중에 스위치의 이를 위로 올려 버리면 모터가 다 꺼지게
12:31
만들겁니다
12:32
이건 아마 다음 챕터는 않으면 pid 제어의 첫 부분에서 구현을 할 것
12:36
같아요
12:37
지금 여러분은 구현이 안 돼 있는데 저는 좀 보여 드리면서 이해를 도와
12:41
드리려고 미리 구현을 해 놨습니다
12:43
그래서 잠깐 어떻게 동작하는지 보여드리겠습니다
12:47
지금 fc 에는 아까랑 좀 다른 코드를 넣었는데
12:50
조종기 의 스위치의 이에 상태로 모터를 아민 또는 디스한 행할 수 있게
12:55
났구요
12:56
개인설정 메세지를 쓰신 받으면 모터가 디스 아 밍 돼 있을 때만
13:00
지금부터가 꺼져 있을 때만
13:03
입이 롬에 저장하고 다시 응답하도록 해놨습니다
13:07
4 다시 gcs 연결 하 고 개인 탭을 열고 들어온 에 전원을 넣으면 와
13:12
일문 들어가기 전에 개인을 보내 주는 건 똑같구요
13:16
전원을 넣었더니 개인 여기 잘 표시가 됐죠
13:20
이제 fc 는 와 1 문 안에 들어간 상태인데 이 때는
13:24
조종 개 스위치의 이에 상태에 따라서 동작이 좀 바뀝니다
13:28
조종기 정말 키고
13:30
먼저 지금처럼 스위치의 이를 위로 올려 놓은 상태일 때는 개인이 똑같이
13:35
잘 바뀌어요
13:36
지금 이 모터가 디스한 잉 되어 있는 상태입니다 모터가 안 돌고 있는
13:39
상태 자
13:40
개인을 좀 바꿔 보겠습니다 1.12 점
13:44
3.3 이런거 한번 보내 보도록 하겠습니다
13:48
보냈더니 개인이 여기 잘 표지가 됐죠
13:51
개인을 바꿨더니 잘 받아서 따는 마른 잎이 롬에 저장되고 잘됐다는
13:55
소립니다
13:57
이제 스위치의 이를 밑으로 내리면 모터가 아 밍이 되고 회전하기
14:02
시작합니다
14:02
한번 내려 보겠읍니다
14:05
회전 하기 시작하죠 그리고 이 쓰로틀 기록 모터 rpm 을 또 조절할 수
14:10
있게 나세요
14:12
더 rpm 도 작용 조절이 되고 있습니다
14:15
이제 지금 상태에서 개인을 다시 바꿔 보겠습니다
14:18
이렇게 좀 바꿔서 1 2 3 이란 개인을 보내 보겠습니다
14:23
버튼을 눌렀는데 지금 그 보낸 값이 여기 표지가 안 되고 있죠
14:28
이 버튼을 누르면 우선은 fc 가 그 메시지를 수신을 하긴 하는데 그
14:33
다음에 ep 로 4 그걸 저장 한다거나 다시 응답을 하는 그런 동작들을
14:38
안 하게 해 놨어요
14:39
만약에 지금 이 비행하고 있는 상태 라고 가정을 한다면 지금 상태에서 이
14:45
버튼을 눌렀을 때 ep 롬 에그 데이터를 읽고 쓰고 한다면
14:48
제어 주기도 깨질 거구요 또 실수로 이 개인들을 뭐 잘못 입력 했다던가
14:53
하면 큰 사고가 날 수도 있을 겁니다
14:56
그래서 디스 아 밍 돼 있는 상태일 때는 다시 스위치의 이를 위로 올리면
15:02
더 꺼 져
15:03
다시 티 스 함이 됐고 지금 상태일 때만 개인 변경이 가능하도록 해
15:08
놨습니다
15:09
다시 이제 개인을 좀 바꿔서 보내 보겠습니다
15:14
약 보냈더니 값이 살 바뀌었죠
15:17
그래서 지금처럼 디스 허밍 된 상태일 때만 이렇게 개인을 바꿀 수 있게
15:21
할 거구요
15:22
어떻게 보면 이것도 사고가 발생할 수 있는 상황을 미리 대비한 안전 장치
15:27
같은거라고 보시면 될 것 같습니다
15:29
근데 이번 시간에는 이렇게 모터 아닌가 하는거랑 모터 돌리는 것은 안
15:33
할거고 개인설정 메시지를 수신 받고 타 싱 하고 입이 롬에 저장하고 다시
15:39
응답 까지 하는 것을 구현해 보도록 하겠습니다
15:42
그럼 이제 소스 코드 작업으로 넘어가겠습니다

```

#### video 37
- ch8-8 fc data rx pid gain request

{% include youtubePlayer.html id=page.youtubeID37 %}

```diff
0:13
지난 시간까지 ccs 에서 무선으로 pid 개인을 설정하고
00:18
또 그게 잘 받아 졌는지 응답으로 확인하는 것 까지 구원을 했구요
00:22
굉장히 마지막으로 이번 시간에는 ccs 에서 개인을 요청했을 때 또 그에
00:27
대한 응답으로 fc 의 현재의 개인을 보내주는 걸 구현할 겁니다
00:32
사실 지난 시간에 한 것 까지가 모든 기능을 다 구현한 거라고 보시면
00:35
되구요
00:36
이번 시간에 할 이 개인을 요청하는 기능은 별로 사용할 일이 없을 수
00:41
있어요
00:42
왜냐하면 드론 의 전원을 키면 따로 요청을 하지 않아도 바로 현재 개인을
00:46
지 실수로 보내주도록 예전에 구하는 해 놓았죠 근데 만약에 드론 의
00:51
전원을 먼저 키고 디스를 나중에 낀다면 보내준 개인을 놓칠 수도 있으니까
00:57
그때는 개인을 요청을 해서 다시 확인할 수 있도록 해주는 겁니다
01:01
근데 그냥 드론 의 전원을 다시 껐다가 켜도 확인할 수 있으니까
01:05
2개인 요청하는 기능은 꼭 필요한 기능은 아니지만 그래도 구현 해 두면
01:09
쓸 때가 있을 겁니다
01:11
역시 개인을 요청하는 것도 ccs 에서 개인 요청 버튼을 누를 때 요청
01:16
메시지가 fc 로 보내 지구요
01:18
fc 는 어떤 개인을 요청 받았느냐 에 따라서 그에 해당하는 개인을
01:22
응답하도록 할 겁니다
01:24
그래서 오늘 할게 챕터 8의 마지막 이구요
01:28
이따가 코드 작성할 때 지난번에 작성했던 내용에서 코드를 좀 수정할게
01:32
있는데 그건 이따가 코드 작성을 하면서 설명드리겠습니다
01:38
이번 시간에 관할 걸 좀 보여드리면 ccs 를 먼저 키고 커넥트 를
01:42
하구요
01:43
그리고 개인 설정 탭의 와서 지금 상태에서 드론 의 전원을 넣으면 fc
01:48
는 잎이 롬에 저장된 개인 을 로드하고 그걸 치 실수로 보내 주니까 그
01:52
개인이 여기 표시가 될겁니다
01:54
그러면 전원을 먼저 넣어보겠습니다
01:58
4
02:01
저는 넣었더니 개인 여기 표지가 됐죠 이것까지 가 지난 번에 다 구원을
02:05
1 내용이고
02:06
이제 다시 들어온 에서 전원을 빼구요
02:10
그리고 g6 도 끄고 지금 상태에서 드론 의 전원을 먼저 받겠습니다
02:19
지금 fc 는 개인을 지 실수로 보내 졌을 텐데
02:22
gcs 가 아직 안 켜져 있으니까 그걸 놓친 상황이 되는 거죠 그럼 이제
02:26
짓을 다 시키고 요
02:30
그리고 커넥트 를 하고 개인 설정 탭의 와도 개인이 여기 표시가 안되고
02:35
있습니다
02:36
개인을 확인 하려면 드론 의 전원을 뺐다가 다시 켜도 되는데 그러려면 또
02:41
들어온 을 가지러 가야 되고 그럴 일이 생길수도 있어서 그 이유 때문에
02:45
개인 요청하는 기능을 이렇게 따로 만들어 놨습니다
02:48
이게 혼자 개발할 때는 들어온 가질러 왔다갔다 하는것도 좀 번거로울
02:52
거에요
02:53
그리고 실제 비행할 때는 드론을 저 멀리 두고 전원을 킨 다음에 다시
02:57
pc 로 돌아와서 짓을 확인하고
02:59
그런지 글 할 텐데 그때 2개인 요청하는 기능이 좀 유용하게 쓰일 겁니다
03:04
근데 그 외에는 별로 쓸 일이 없을 것 같아요
03:08
그리고 개인을 요청하는 2버튼 들도
03:11
조종기 에 스위치 a 가 위로 올라가 있을 때만 가능하도록 구현해
03:15
봤습니다
03:16
지금은 조정기 전원이 꺼져 있기 때문에 이 버튼을 눌러도 아무 반응이
03:19
없죠
03:21
그러면 조종기 전원을 키고 그리고 cha 를 위로 울린 상태에서 개인을
03:26
요청 해 보겠습니다
03:28
하켄 요청 버튼을 눌렀더니 그 개인 여기 잘 표시가 되고 있자
03:32
cha 를 밑으로 내 빙 상태에서
03:35
개인 요청을 하면 아무 반응이 없죠
03:38
그리고 지금은 2조 종기에 쓰로틀 키를 이용해서 모터 회전 속도를 조절
03:43
할 수 있겠는데
03:44
이거 역시 이번 시간엔 구원하지 않을 겁니다 한 다음 챕터 때 구현하게
03:48
될 것 같아요
03:49
그래서 다시 스위치를 위로 올린 상태에서 갱을 요청하는 개인 상표 죄가
03:55
되고 그리고 맨 위에 있는 리퀘스트 올 개인 버튼을 누르면 모든 개인을
04:00
타 요청하는 기능입니다
04:02
눌렀더니 모든 개인 이렇게 잘 표시가 돼 짜
04:05
그리고 지난 시간에 구현했던 2 개인 설정 하는 기능들도 잘 동작하고
04:09
있구요
04:10
그리고 또 이 버튼들을 눌렀을 때 지금처럼 fc 의 부저 에서 비프음이
04:15
올리도록 고향을 해놨는데 이번 시간에는 이 부저 기능까지 구현하도록
04:19
하겠습니다
04:21
먼저 본 수업을 진행하기 앞서서 알려줄게 두가지가 있는데
04:25
첫번째로 ccs 에 버전이 업데이트 되었습니다
04:28
2 업데이트 된 버전 0.9 점 7 에서는 세 가지 변경사항 이구요
04:33
첫번째로 그래프 그릴 때 썼던 제드 그래프 라는 api 에 버전이
04:39
이전에 노점 1.5 였는데 이번에 변경되면서 5.1 점 진로 높아졌습니다
04:44
근데 크게 바뀐 내용은 없는것 같고 자세한 변경 사항은 이 주소로 가시면
04:49
확인하실 수 있습니다
04:51
그리고 gcs 실행 파일이 저장되어 있는 폴더를 보시면 그 안에 개인
04:56
로그 이란 폴더가 있고 또 그 폴더 안에
04:59
latest 점 inti 라는 파일이 있습니다
05:02
만약에 이 폴더 랑 파일이 없으신 분들은 우선 gcs 를 먼저 실행을
05:06
시키면 이 파이는 이란 폴더가 생성이 될 겁니다
05:10
이 파일에는 최근에 gcs 개인전 송창의 적었던 pid 개인이 저장이
05:15
되어 있구요
05:16
gcs 를 실행시키면 이 파일을 불러 들여서 그 개인들이 지시에 표시가
05:21
되는데 그중에 롤 피치 개인이 같은 값으로 표시되는 버그를 수정했습니다
05:26
그리고 마지막 변경 사항은 좀 중요한 내용인데
05:29
ccs 에서 수신 메시지에 체크섬 을 계산하는 부분에서 바이트 18번 의
05:34
값을 체크섬 계산 을 사용하지 않는 버그가 있었는데 그걸 수정했습니다
05:39
그래서 이 주소로 가셔서 버전 0.9 점 치이 를 다운받으시면 되구요
05:44
꼭 3 버전으로 받으셔야 되요 이전에 hrs 메세지를 보낼때 고도 제어를
05:49
안 할 거라서 페이로드 의 목표 고도 값의 영을 채워서 보냈었는데
05:54
이번 시간에는 그 부분에 쓰로틀 에 키값 정보를 같이 싫어서 버릴 겁니다
06:00
그 내용도 있다가 코드 작성 하면서 같이 설명 드릴 거구요
06:03
그때 ccs 버전 0.9 점 6은 제대로 동작하지 않으니깐 반드시 3
06:09
버전 0.9 점 7 버전으로 다시 받으셔야 됩니다
06:13
그 다음이 예전에 챕터 2 해서 lps eh eh 의 라이브러리로 기압
06:19
고도계 산 했었는데 이게 4 나는 수식 의 문제가 조금 있어서 그걸
06:23
수정했습니다
06:25
이 두 함수에 내부 코드가 조금 바뀌었구요
06:28
굉장히 바뀐 코드를 사용해서 계산을 하면 이전 이란 계산결과 조금 다른데
06:32
크게 다르진 않습니다
06:34
그리고 그 외에는 바뀐 건 없습니다
06:36
이 파일은 제 기타 업에서 다시 다운받을 줘도 되구요 아니면 지금 영상
06:41
일치 정지 하시고 이 함수 내부에 코드만 이대로 수정을 저도 됩니다
06:46
확실히 확인을 하고 진행 했어야 했는데 그러지 못한 점 죄송하다는 말씀
06:50
드리구요
06:51
그리고 문제를 지적해 주신 분들께 감사의 말씀 드립니다
06:55
다시 본 내용으로 돌아와서 이제 마지막 멧세지 인 pid 개인 요청
07:00
메시지를 수신 받았을 때 또 그에 대한 응답으로 해당하는 개인 을지 실수
07:04
로 보내주는 것을 구현할 겁니다 이게 짓으로 개인을 보내는 이 세 가지
07:09
상황 중에 마지막 상황인 거죠
07:11
메시지를 수신 받는 것은 지난 시간에 구현했던 싱크 차량 체크섬 검사한
07:16
부분은 똑같으니까 코드도 그 코드를 그대로 쓰면 될 것 같구요
07:20
이제 멧세지 아이디가 개인 요청 멧세지 라면
07:24
그에 따른 응답 을 보내 주는 것만 추가하면 될 겁니다
07:27
그리고 개인을 응답으로 보내주는 것 역시 이전의 꼬 해 놨으니까 그
07:31
코드를 그대로 쓰면 될 것 같습니다
07:34
그래서 이번 시간에는 코드 작성 할 거는 많지는 않을 것 같은데
07:38
근데 아까도 말씀드렸듯이 지난 시간에 작성했던 코드에서 조금 변경할 게
07:42
있습니다
07:43
이전에는 개인을 읽고 쓰고 할 때 임시 변수를 사용해서 개인 종류를
07:47
9분하지 않고 절 했었는데 나중에 pid 제어 들어가면 개인 종류에
07:52
따라서 그 개인들을 각각 다른 변수에 저장하고 사용하게 될 거라서
07:57
그래서 이번 시간에도 그 방식으로 코드를 좀 바꿀 거구요
08:01
그러면 코드가 조금 지저분해 질 수 있는데 자세한건 이따가 코드
08:04
작성하면서 설명드리겠습니다
08:07
이제 멧세지 구조에 대해서 좀 설명 드리면 개인 요청 메세지 역시 fc
08:12
입장에서는 수신 메세지 구요
08:14
첫 2바이트 는 공개 x 470 x 535 로 시작합니다
08:18
멧세지 아이디는 0x1 곡이고
08:21
이 메시지는 페이로드 를 한 바이트 만 사용하구요 바이트 3의 어떤
08:27
개인을 요청 할 지에 대한 id 라고 보시면 됩니다
08:30
이건 여기 이렇게 정리가 되어있고 2바이트 3회 값이 0 이라면 롤의
08:36
내부 pid 개인을 응답으로 보내 주면 되구요
08:39
1이면 모레 외부 그리고 232 각각 피치에 내부 외부 4 5가 요엘
08:46
각도 각속도 개인을 응답으로 보내주면 됩니다
08:49
그리고 이 값이 6 이라면 모든 개인을 다 보내주면 됩니다
08:54
그래서 이 1 바이트 만 사용하고 그 외에 나머지 페이로드 부분은
08:58
사용하지 않아서 영을 채워서 보내주면 됩니다
09:01
이게 어떻게 보면 사용하지 않는 바이트가 이렇게 많아서 좀 비효율적인
09:06
멧세지 구조라고 볼 수 있는데
09:08
근데 이렇게 정리한 이유가 모든 메시지는 20 바이트 첫 2바이트 가
09:13
이렇게 갖고 마지막은 체크섬 이런 구조를 가지고 있죠
09:17
이 멧세지 부조가 달라져 버리면 수심 코드를 또 각각 다르게 작성해 줘야
09:21
해서 그럼 코드가 너무 복잡해져서 강의에서 설명드리기 어려우니까
09:26
좀비 효율적이 더라도 이 방식으로 이렇게 정했습니다
09:30
dcs 에 개인 설정 탭에서 오른쪽에 있는 일이 퀘스트 버튼들을 누르면
09:35
pid 개인 요청 메시지가 fc 를 전송 되고요
09:39
지난 시간에 했던 개인설정 때랑 비슷하게 어떤 버튼을 누르는 에 따라서
09:44
요청하는 메세지의 종류가 달라지는데
09:47
맨 위에 있는 일이 퀘스트 올 개인 버튼을 누르면 요청 아이디가 0 x
09:53
0 6 2 9 0
09:54
그 밑에서 부터 순서대로 롤의 내부의 브 피츠 내부 외부 요 의 각도
09:59
각속도 개인 순서입니다
10:01
fc 는 요청받은 2 개인 id 에 따라서 그에 대한 응답을 보내주면
10:06
됩니다
10:08
역시 gcs 에서 개인 요청 버튼을 눌렀을 때 그 개인이 다시 지실 3
10:12
표시 되기까지 어떤 과정들이 있는지 간단히 설명드리겠습니다
10:16
지난 시간이랑 거의 비슷해요 지시 쎄서 개인 요청 버튼들을 누르면 먼저
10:21
그에 해당하는 20 파이트 개인 요청 메시지가 fc 로 전송됩니다
10:27
그러면 fc 에서는 또 싱크 자 검사하고 임시 배열의 쭉 저장한 후에
10:31
체크섬 검사까지 하구요
10:33
그게 1번에서 할 일이고 그리고 그 다음 메세지의 아이디를 검사하는데
10:38
지난 시간은 0x0 0 이랑 0x0 5 사이가 pid 개인설정 내세 졌고
10:45
이번에는 메세지 아이디가 0 x 1 0 입니다
10:49
그러면 그 후 한 바이트가 요청받은 개인의 id 줘
10:53
그래서 이번 에서는 그것까지 검사할 하구요
10:56
마지막 3번 에서는 어떤 개인을 알려 달라고 요청을 받 않느냐에 따라서
11:01
그 개인을 임시 별에 저장하고 다시 찔 실수 로 보내주면 됩니다
11:06
이번 시간에는 지난 번 이랑 다르게 잎이 롬에 저장하거나 로드 하는
11:10
내용이 없어요
11:11
지난 시간에는 개인을 설정 하는 거라서 스 신 받은 개인을 이 표에
11:15
저장을 하고 또 그게 잘 저장이 되었는지 확인하기 위해서 이 필요 메가
11:19
다시 읽어 들여서 그걸 지 실수로 보내 줬었는데
11:22
이번 시간에는 저장하는 게 아니고 개인을 요청만 하는거니까
11:26
이 필요에서 읽어 들일 필요 없이 개인이 저장돼 있는 변수의 값만
11:30
보내주면 될겁니다
11:32
그래서 이번 시간에는 또 2 1 2 3번을 구원을 할꺼구요
11:36
그중에 1번은 메세지의 구조가 같기 때문에 지난 시간에 구애 난걸 그냥
11:41
그대로 쓰면 될 것 같고
11:43
이번 이랑 3번은 지난 시간에 했던 부분에서 내용을 조금만 추가하면 돼서
11:48
이번 시간에는 코드 작성을 건 그렇게 많지 않을 것 같습니다
11:51
근데 아까 말씀드렸듯이 지난 시간에 작성했던 내용에서 조금 수정을 것들이
11:55
있는데 그게 내용이 조금 많을 수 있어요
11:59
역시 이번 시간에 구현할 대우도
12:01
요청을 받았을 때 그에 대한 응답을 보내 주는 거라서
12:05
지난 시간이랑 마찬가지로 이와 1 문 안에서 사용 될 거구요
12:09
이 기능 역시 스위치 a 가 위로 올라가 있을 때 모터가 꺼진 디스 허밍
12:15
된 상태일 때만 동작 되게 할 겁니다
12:19
지난 시간에 안전 이랑 관련된 내용을 좀 강조 드렸었죠
12:23
이번에는 또 다른 이슈가 하나 더 있습니다
12:25
이번 시간엔 개인을 응답할 때 인터럽트 방식이 아닌 일반 성신 함수를 쓸
12:31
거구요
12:32
이 함수는 블럭 킹 모드로 동작하는 함 살아서
12:35
20 바이트를 이 함수로 점성을 하면 1킬로 헤르츠 제어 주기가 깨지게
12:39
되어 있습니다
12:40
근데 이 개인을 송수진 않은 것은 스위치 애니가 위로 올라가 있는
12:45
상태에서만 가능하게 한다 그랬죠
12:47
즉 모터가 멈춰 있는 시점에 만 가능하게 하는 거고
12:51
모터가 멈춰 했을 때는 또 제어를 하지 않는 상태가 될 테니까
12:56
그때는 제어 주기가 깨지는 거라는 상관이 없습니다
13:00
그래서 이 함수를 사용해도 될 거구요 근데 그러면 왜 여기서는 갑자기
13:04
인터럽트 방식이 아닌 일반 송지 남들을 사용 하는지 궁금하실 텐데 그
13:09
이유는 예전에 한번 설명을 드렸던 넌 블로킹 함수는 송신이 완료되기 전에
13:13
다시 5 추리 되면 무시 된다고 했던 그 내용이랑 관련이 있습니다
13:18
자세한것은 코드 작성을 하면서 더 설명을 드리겠습니다
13:22
그럼 이제 코드 작업으로 넘어가겠습니다

```

#### video 37

{% include youtubePlayer.html id=page.youtubeID %}

```diff


```

### Ch9 Safety

#### video 38
- ch9-1 sensor pid load check

{% include youtubePlayer.html id=page.youtubeID38 %}

```diff
00:13
지난 시간까지 챕터 8의 모든 내용이 끝났구요
00:17
이제 gcs 를 이용해서 드론의 상태 정보들을 실시간으로 확인할 수 있게
00:21
됐습니다
00:22
기체 회전 각도 고독 그리고 위도 경도 같은걸 확인할 수 있고요 또
00:27
pid 개인을 무선으로 설정하고 확인도 할 수 있게 되죠
00:32
2 챕터 8의 4 했던 것들은 개발이 다 끝나고 비행 만 하는 경우에는
00:37
별로 쓸 일이 없을 수도 있어요
00:39
근데 이걸 가지고 어떤 실험 을 한다거나 아니면 다른 기능들을 추가
00:43
한다거나 하면 그때 좀 유용하게 쓰일 겁니다
00:47
그래서 들어오니 비행을 준비가 하나씩 갖춰져 가고 있죠
00:51
이번 챕터 9 에서는 비행 제어 에 들어가기 전에 마지막으로 안전에 대한
00:56
몇가지 기능들을 구현할 겁니다
00:59
그래서 이번 챕터에서는 첫번째로
01:01
들어오니 비행을 하기 위해서 센서의 값들을 실시간으로 계속 읽어 와야
01:05
되는데 만약에 이 센서가 잘 연결되지 않다 거나 아니면 어떤 다른 이유
01:11
예를 들어 들어오니 비행 하다가 추락을 했다거나
01:14
물리적인 충격을 쎄게 받았다 던가 하면 센서가 보드에서 떨어져 나올 수도
01:19
있어요
01:20
이런 이유들로 인해서 센서 인식이 안 됐을 경우 그 상태에서 바로 비행을
01:25
시작하면 100% 사고가 날 겁니다
01:28
그래서 드론의 전원이 처음 들어갔을때 센서 인식이 잘 되는지 확인을 하는
01:33
과정이 필요한데 그걸 첫 시간 이번 지간에 구현 할 겁니다
01:37
그리고 또 비행할 때 pid 제어 알고리즘 2 동작하는데
01:41
그건 다음 파트에서 끈을 할 거고 그 pid 제어 해서 개인 이란 개념이
01:46
나오구요
01:47
이게 제어 성능에 큰 영향을 미치는 거라서
01:49
반드시 비행하기 전에 확인을 해봐야 된다고 그렇죠 그래서 gcs 에서
01:54
그걸 표시도 해주는걸 9 안했었는데
01:56
근데 이 필요 메 데이터가 잘못 저장돼 있다거나 혹은 역시 또 다른 어떤
02:02
외적인 이유로
02:03
잎이 롬 내부 데이터가 손상됐을 경우 역시 비행을 하면 안되는 상황입니다
02:09
그래서 그렇게 데이터가 잘못 저장되어 있는지를 확인해야 되는데 그것도
02:12
이번 시간에 가치관을 겁니다
02:15
그리고 이 두 번째는 지난 시간에 조종기 의 스위치의 이를 암 잉 하는
02:20
용도로 사용한다 그랬죠
02:22
그래서 들어오네 처음 전원을 넣었을 때 실수로 이 스위치의 이가 내려가
02:27
있는 채로 전원을 넘는다 거는 혹은 쓰로틀 키를 위로 올려 놓은 채로
02:31
전원을 나오면
02:32
전원을 넣자마자 모터가 갑자기 확 돌 수도 있습니다
02:36
그러면 또 사고가 날 수 있으니까 이걸 방지하기 위해서 들어오네 처음
02:40
전원을 넣었을 때 스위치의 이랑 스로틀 길을 검사하는 것을 원할 겁니다
02:45
이거는 예전에 일부를 구현 해 놨었는데
02:48
와 일문 들어가기 전에 검사하는 내용을 구연 했었죠
02:52
거기서 코드를 조금 추가하는 방식으로 꽤 날겁니다
02:55
그리고 그 밑에 보시면 2위 랑 비슷한데 다른게 하나 있죠
02:59
2위는 부팅할 때 즉 들어오네 전원이 처음 들어갔을때 와 일문 들어가기
03:05
전에 검사 하는 거였는데
03:07
밑에서는 암이 갈 때 즉 들어오네 전원은 계속 켜져 있는 채로 비행을
03:13
하다가 착륙해 서 모터를 껐다가 다시 킬때 에 대한 내용입니다
03:18
그래서 2부 팀 지에 뭔가 하는 것은 와 일문 들어가기 전에 검사하는
03:23
내몽고
03:24
아 밍 시 이렇게 되어있는 것은 와 1 문 안에서 실시간으로 검사는 그런
03:29
내용입니다
03:31
그래서 이 내용들은 사용자가 의도하지 않았는데 갑자기 모터가 확 돌면서
03:36
사고가 난 그런걸 당제 하는 거라고 보시면 됩니다
03:39
그리고 그 다음에 페일 세이프 상태의 검사하는 것을 구해야 할 건데
03:43
검사하는 것 자체는 예전에 구현해 나왔었죠
03:47
이번에는 이 페일 세이프 가 발동되어 쓸 때 모터를 끄는 것도 구현 할
03:52
거구요
03:53
그리고 한 가지 상황이 더 있는데 fc 랑 수신기 의 유선 연결이
03:57
헐렁하게 됐다 거나 혹은 잘못 연결되서 데이터 자체가 안 받아지는 경우
04:02
역시 뺄 세이프 랑 비슷하게
04:05
조종이 안되는 상황이 될 겁니다 그래서 이게 진짜 위험한 상황이 거고 이
04:10
상황이 발생했다는 것을 fc 가 아는게 중요합니다
04:13
그런 상황 걸 알아야 프로그램적으로 도 대처도 할 수 있겠죠
04:17
프레임 세이프 가 발동되면 수신기가 그걸 알려주니까 그 상태는 바로 알
04:22
수 있는데 아예 수신기에서 데이터 사체가 안 받아지는 경우에는 그걸 따로
04:27
확인해야 됩니다
04:28
그래서 이번 챕터에서는 아예 아이 퍼스 데이터 수신 자체가 안되는 경우도
04:33
펜 세이프 라고 인식하도록 구현 할 거구요
04:36
본 수업에서는 이 상태가 되면 우선 모터를 강제로 끌 겁니다 그러면
04:41
들어오니 그냥 추락하게 될 텐데 역시 추락하면서 사람한테 떨어지거나 혹은
04:46
차도 아니 뭐 차 위에 떨어지면 위험하니 까
04:49
반드시 비행은 허용된 곳에서 사람없는 뻥 뚫린 곳에서 하셔야 됩니다
04:56
그리고 마지막으로 배터리 전압이 부족한 경우에는 이때는 모터를 강제로
05:01
정지 시키지 않고 그냥 부 저만 올리도록 구해야 할 겁니다
05:05
그래서 비행하다 가부좌 가 올리면 착륙시 켜서 배터리 교체 하고 다시
05:09
비행하는 되겠죠
05:10
그래서 이 내용들이 이번 챕터에서 구현할 것들이고
05:14
역시 이 기능들도 없다고 해서 비행이 불가능한 건 아니지만 이 기능들이
05:18
있으면 비행 하기 전이나 비행 중에 사고가 날 확률이 좀 많이 줄어들
05:23
겁니다
05:24
물론 또 이 기능들을 다 구연 한다고 해서 아예 사고가 안나는 건
05:28
아니니까
05:29
항상 모든 상황에 대비해서 안전하게 비행을 하셔야 됩니다
05:33
제 예상에 이번 챕터는 내용은 중요하지만 구현 할게 많은 건 아니라서
05:38
영상 3 4개의 정도에서 끝날 것 같아요 그리고 이번 챕터는 함수를 갖다
05:42
쓰는 방식으로 코드를 구현할 게 아니고 상황에 따라서 기능들이 동작하는
05:47
게 많아서 코드가 조금 지저분해 질 수 있는데
05:50
지난 지간 처럼 그렇게 심하지는 않을 겁니다 또 코드의 구조는 단순한데
05:55
흐름이 쪼끔 복잡할 수 있기 때문에 이번 챕터에서 하는 내용들은 동작
06:00
흐름을 좀 이해를 하시면서 따라 하시기 바라겠습니다
06:04
이제 이번 시간이 챕터 9 의 첫번째 시간이고
06:07
이번 시간엔 센서 연결 상태 랑 pid 개인이 잘 로드 됐는지 검사하는
06:13
기능을 꽤나 겁니다
06:14
먼저 fc 보드에는 bn 5080 구축 센서에 icm 2060 이 6축
06:20
센서가 그리고 lp seh 기압 센서
06:23
이렇게 3가지 센서가 있죠 그래서 들어온 부팅할 때 이 세가지 센서의
06:28
연결 상태를 검사하고
06:30
제대로 연결되지 않았다면 와 1 문에 들어가지 않고 강제로 프로그램을
06:35
종료시키는 코드를 꿔 날겁니다
06:37
이때는 비행이 아예 불가능한 상태이기 때문에
06:40
와 일문 진입 자체를 막아 볼 거예요
06:43
연결상태 검사는 이런 디지털 방식의 센서는
06:47
보통 센서 자체 id 를 가지고 있습니다
06:50
그 아이디는 센서와 다 정해져 있는 값이고
06:53
그 값을 읽어 드렸을 때 다른 값이 일으키거나 혹은 일으키지 않는다면
06:58
센서에 문제가 있다고 판단하고
07:00
경고음을 올리면서 프로그램을 종료시킬 겁니다 이건 하드웨어적인 문제라서
07:05
소프트웨어로 해결할 수 없는 문제구요
07:08
이런 경우는 센서를 교체 하거나 아예 fc 모듈을 교체 하셔야 되는데
07:12
근데 제가 fc 의 상태를 확인해 본 후에 보내드리기 때문에 이런 경우는
07:17
아마 없을 거구요
07:18
들어오니 크게 충격을 받는 다거나 아니면 갑자기 센서의 고 전류가 흘러서
07:23
고장나지 않는 이상 사용 하다가도 이런 문제가 생길 일은 거의 드물
07:28
겁니다
07:28
그렇지만 안전에 관련된 이런 것들은 확인을 하는게 좋겠죠
07:33
그래서 부팅할때 와 일문 들어가기 전에
07:35
장치 초기화 하는 부분에서 2 센서 연결 상태를 검사할 겁니다
07:41
그 다음에 pid 개인을 입이 롬 에서 로드 하는데 예전에 이 필요할 때
07:45
정했던 함수를 이용해서 로드 하 죠
07:48
그 함수는 ep 롬 데이터 관리 프로토콜 대로 데이터를 로드 하게 되어
07:52
있습니다
07:53
근데 만약에 데이터를 읽어 드렸는데 그 프로토콜이 랑 헤더가 다르다 던지
07:58
아니면 체크섬 이 다르면 잎이 롬에 저장된 데이터가 뭔가 잘못된 거고
08:03
역시 이 상태에서 비행을 하면 바로 추락할 수 있습니다
08:07
역시 위험한 상황이긴 한데 이때는 프로그램 종료를 시키지 않고 부저 록
08:12
0 0 만 내고 와 1 문의 지니 파도로 할 겁니다 왜냐하면 이 경우는
08:17
하드웨어에 문제가 아닐 수도 있구요
08:20
또 개인을 바꾸면 해결될 수도 있기 때문에 그 경우에는 와 1 문의
08:24
진입해서 지 스스로 개인을 바꿔줘야 할 테니깐 그냥 와 1 문의 진입하게
08:30
할거구요
08:31
만약에 드론 의 전원을 넣었을 때 이 경고음이 울리는 gcs 에서 개인
08:35
확인을 해보시고 다시 개인을 재설정 하셔야 할겁니다
08:39
역시 이 문제도 발생할 이는 거의 없을 텐데 역시 안전을 위한 기능인 칸
08:43
구현을 해 두도록 하겠습니다
08:46
이제 이번 시간에 구원을 걸 좀 보여드리면
08:49
지금 fc 가 3개가 있는데 이 안에는 다 같은 코드가 들어가 있구요
08:53
먼저 전원이 들어가면 장치 초기화를 한 후에 센서 연결 상태 부터
08:58
감사합니다
08:59
센서 인식이 제대로 안되면 부저가 올리면서 프로그램이 강제 종료 되게
09:03
났구요
09:04
센서에 문제가 없다면 그 후에 ep 롬 에서 pid 개인 을 로드하고
09:09
개인 을 로드하는 데 문제가 있으면 이번에는 강제 종료는 아니고 부저가
09:14
한 번 올리고 메인 와 1 문의 진입하게 났습니다
09:18
그러면 그 메인 와 1 문 안에서 gcs 를 통해서 pid 개인을
09:22
수정하면 되겠죠
09:24
그래서 왼쪽 께 bn 5080 센서가 인식이 안되는 모두 고
09:28
가운데가 lp seh 가 인식이 안되는 것 입니다
09:32
icm 2002 는 다 인식이 되고 있는 상태구요
09:36
그리고 이 오른쪽 보드에는 센서는 다 문제없이 인지되고
09:41
잎이 롬 자체도 문제는 없는데 이 필요 4개 이미 저장이 안 돼 있는
09:45
상태입니다
09:47
즉 이필용 프로토콜 대로 데이터 저장이 안되어 있는 상태라서 개인 로드가
09:52
제대로 안되는 상태인 거죠
09:54
이 왼쪽 2개는 제가 확인했을 때 초기 불량이 것들이었고
09:58
여러분들은 제가 다 확인을 해서 보내드리기 때문에 보드 자체에는 문제가
10:03
없을 거예요
10:04
그럼 먼저 이 왼쪽 fc 부터 전원을 넣어보겠습니다
10:08
저는 지금 문제가 있는 보드에 전원을 넣어야 되기 때문에 usb 로
10:12
전원을 넣어 줄 건데
10:14
여러분들의 있다가 들어온 에 고정한 채로 배터리로 전원을 넣으시면 되요
10:19
그리고 텔레 매트 리가 아닌 디버그 u 아트로 상태 메세지를 출력도 하고
10:24
있는 상태입니다
10:25
그럼 이제 비해 노 080 센서에 문제가 있는 보드에 전원을 넣구요
10:32
그리고 터미널 프로그램을 하나 열국 커넥트 를 하고 지금은 리셋을 누르고
10:37
있는 상태구요
10:38
리셋 키를 떼 모르겠습니다 리셋 버튼을 뺐더니
10:42
비해도 080 센서를 검사하는데
10:45
제대로 인식이 되지 않는다 라는 메세지가 출력이 됐구요
10:49
프로그램 종료 데 따른 메세지도 출력이 됐죠
10:52
그리고 fc 에 있는 부저 에서 이렇게 반복적으로 소리가 올리고 있습니다
10:57
이게 비해 녹음 탈 근 센서에 문제가 있는 모두 고
11:01
이제 그 다음 보드 lp se ha 와 또 역시
11:07
이보드 의 전원을 넣었구요 지금 또 리 스 s 를 누르고 있는 상태 구
11:11
미 세끼를 때 보겠습니다
11:15
아 또 b 1080 센서의 문제가 없고
11:19
아니 cm2 0602 에도 문제가 없는데 lp seh 에 문제가 있어서
11:24
센서 인식이 실패했고 프로그램을 종료 했다 라는 메시지가 추정돼 짜 또
11:30
역시 같은 패턴으로 비프 음이 울리고 있습니다
11:34
그럼 이제 마지막으로 pid 개인이 저장이 안되어 있는 보디 한 번
11:38
전화로 넣어보겠습니다
11:42
지금 이 보드는 하드웨어적인 문제는 없는 상태에요
11:46
잎이 롬에 데이터 저장 만 제대로 안된 상태입니다
11:49
한번 리셋을 때 보겠읍니다
11:54
이때 떠니 bn 5080 센서의 문제도 없고 icm 2060 의도 잘
11:59
인지 됐고
12:00
lp sehat 까지 잘 인식이 되었습니다
12:03
그래서 모든 센서에 문제가 없다는 메세지가 출력이 됐구요
12:07
그 후에 pid 개인 을 로드하는 데 잎이 롬 자체는 문제는 없지만
12:12
잎이 롬 내부의 데이터가 우리가 예전에 정 의 했더니 p 프로토콜 대로
12:17
저장이 안 돼 있기 때문에 개인 로드에 실패한 상태입니다
12:21
그래서 개인 모드의 실패했다는 메세지가 출력이 됐고 이번엔 프로그램 강제
12:26
종료 시키지 않고 메인 와 1 문의 진입한 상태죠
12:29
그래서 지금 상태에서 fc 에 텔레 매트 리가 연결이 되어있다면 지
12:34
실수를 통해서 개인을 바꿀 수 있는 상태입니다
12:37
근데 지금 이 보 대는 ep 롬 자체는 문제가 없는 상태지만
12:42
만약에 ep 롬 자체의 하드웨어적인 문제가 있을 수도 있잖아요 그런
12:47
경우에는 ccs 에서 개인을 바꿔도 원하는 대로 안 바뀔 수가 있기
12:51
때문에 꼭 반드시 개인 응답이 제대로 오는지를 확인하셔야 됩니다
12:56
응답이 제대로 안 오면 비행을 하시면 안돼요 그래서 이번시간에는 이렇게
13:01
센서 연결 상태 란 개인 로드 상태를 검사한 걸 구현해 볼 겁니다
13:06
먼저 본 설명 들어가기 전에 지난 챕터 까지 모든 하드웨어 연결이 다
13:11
끝났기 때문에 이제 텔레 매트 리모 둘이랑 그리고 fsi a6 삐
13:16
수신기를 드러내고 정 하겠습니다
13:19
지금 이렇게 고정이 안 돼 있어서 들고 움직이기가 조금 어려운데
13:22
이제 고정을 다하면 드론의 모습이 갖춰질 거예요
13:26
그리고 이 설명에서는 gps 는 빠져 있구요
13:29
gps 고정 하려면 위트 뚜껑도 덮어야 돼서
13:32
그거는 pid 제어 들어가기 전에 설명드리겠습니다
13:36
이제 케이블 타이를 준비하셔야 되는데
13:38
길이는 100mm 이상 이면 될거 같고 폭은 2.5 에서 3.5mm 4
13:44
이 정도면 될 것 같습니다
13:46
이렇게 두개를 준비 하시구요 그리고 드론의 밑에 쪽 부분을 보시면 이 두
13:51
부분에 작은 구멍이 나 있어요
13:53
여기에 이 케이블타이 하나를 한쪽 구멍에 넣고 그리고 다시 반대쪽
13:58
구멍으로 빠져 나오게 넣으시면 됩니다
14:02
그리고 케이블타이 사실 때는 가끔 어떤거는 이빨이 걸리는 그 클립 부분이
14:07
약해서 금방 끊어질 수도 있어요
14:09
근데 이게 비행 하다가 끊어져 버리면 또 사고가 날 수 있으니까 너무
14:14
약한 건 좀 피하시는게 좋을 것 같습니다
14:17
제가 쓰는 것은 이 제품인데 가격도 저렴하고 쓸만한 것 같습니다
14:22
아까 그 케이블 타이를 이 그림처럼 두 구멍에 관통해서 꽂아 주시구요
14:27
그리고 텔레 매트 리랑 수신기 모듈을 이렇게 겹쳐서 배치한 후에 타일을
14:32
조여 주시면 됩니다
14:34
그리고 이 모듈들을 배치할 때 방향의 좀 주의 하셔야 되는데
14:37
수신기는 이렇게 배치 하시면 되구요 텔레 메트리 같은 경우는 한쪽 면이
14:42
led 가 표시되는 명인데 그 면이 밖으로 보이도록 배치 하시는게
14:47
좋습니다 그래야 연결 상태를 led 로 확인할 수 있겠죠
14:51
케이블타이 좋으실 때는 이 모듈들이 흔들리지 않도록 최대한 꽉 조
14:55
해주시구요
14:56
롱노우즈 같은걸 이용하시면 좀더 꽉 조일 수 있습니다
15:01
고정을 다한 후에 들어오네 밑에서 보시면 이런 모습이 될 거구요
15:06
그리고 이 사진이 위에 정면에서 본 모습 왼쪽 측면에서 본 모습
15:11
그리고 오른쪽 측면에서 본 모습입니다
15:14
이렇게 해서 고정도 끝났구요 지금은 이 텔레 매트 리모 둘은 이렇게
15:18
고정을 하고 다음 파트에서 pid 실험도 할 건데
15:22
나중에 이 모듈은 쓸 일이 없어질 수도 있어요
15:25
그때는 드론 에서 아예 제거를 하고 비행 하시는게 좋을겁니다
15:30
이 텔레 매트의 모듈이 전에도 말씀드렸듯이 전력을 엄청 소모하기 때문에
15:34
이걸 달고 비행을 하면 비행 시간 좀 줄어들 거예요 그래서 gcs 랑
15:39
통신할 필요가 없어지는 시점이 되면 그때는 드론 에서 아예 빼고 비행
15:45
하시길 추천드립니다
15:47
이제 본 내용으로 들어와서 이번 시간에는 센서 연결 상태 랑 또 잎이 롬
15:52
에서 개인이 잘 일으켰는지 이 두가지를 확인해 볼 건데
15:56
드론의 전원이 들어 갔을 때 부팅 프로세스 중에 이 빨간색 네모 친
16:01
부분을 좀 생각을 해보시면
16:03
전원이 들어가고 가장 먼저 수행되는 기능들이 줘
16:07
그래서 이 안에서 수행되는 기능들을 좀 더 자세히 살펴보겠습니다
16:12
좀있다가 소스 코드를 보면서 더 설명드릴 거긴 한데
16:15
우선 이 장치 초기화가 이루어 진 부분에서는
16:19
메인 함수 가 시작되면 가장 먼저 생 되는게 칩 자체 초기화가 이루어
16:24
집니다
16:25
이 안에서는 st ml 클럭 설정 pl 설정 같은게 있고요 그 다음에
16:30
이어서 우리가 큐브의 맥스에서 설정했던 칩 내부의 페리 페럴 초기화가
16:35
이루어 지죠
16:36
그래서 gpi 오나 뉴아트 타이머 이런 기능들의 초기화가 이루어 지는데
16:41
이 1번 2번 에서 수행되는 코드들은 우리가 작성한 게 아니고 큐브의
16:47
맥스에서 자동으로 생성해 준 코드 드립니다
16:50
이제 stm 에펠이 패럴 초기화가 됐으니까 그 기능들을 이용해서 센서들이
16:55
랑 통신을 할 수 있겠습니다
16:57
그래서 그 후에 센서 초기화를 하는데 이때 bn 5080
17:02
icm 이 공유 꿈이 lp seh 각각의 초기화 함수를 호출하는 방법으로
17:08
초기화가 이루어 지죠
17:10
그 초기와 함수 안에서 각 센서의 id 가 일치하는지를 확인한다
17:15
그 코드가 이미 다 구현이 되있어요
17:18
근데 여태까지는 그 결과를 확인을 안 했었는데 이제 이번 시간에 그걸
17:23
확인해 볼 겁니다
17:24
그리고 gps 초기화도 이루어지는데 그 gps 초기화 함수 는 연결
17:30
상태를 확인하는 건 아니고 단순 초기화 만 이루어집니다
17:34
gps 의 연결 상태를 확인하려면 id 를 확인하는 게 아니고 데이터가
17:38
들어오는 g 를 확인하면 됩니다
17:41
근데 그건 책의 수업에서는 확인하지 날 거고 그래서 이 3번에서 센서
17:46
초기화를 하면서 센서에 연결 상태도 같이 검사 할 거구요
17:51
그 다음이 이 사건에서는 센서 초기화 까지 끝나면 자이로 오프셋 제거하는
17:56
내용도 있었고 pid 개인 을 로드해서 변수에 저장하는 내용도 있었습니다
18:02
이때 개인의 종류마다 각각 따로 개인 을 로드하는 함수를 호출 했었구요
18:08
그 함수 안에서는 잎이 롬 에서 데이터를 읽어와서 저희 가정이 한 그
18:13
프로토콜의 맞는지 헤더 랑 체크섬 을 검사하는 데 그때 데이터에 문제가
18:18
있는지 확인하는 내용도 이미 구현이 되겠습니다
18:22
그래서 이번 시간에는 이 두 가지 상태를 검사할 겁니다
18:26
좀전에 센서 연결 상태를 검사하는 게 이미 구현이 되어 있다고
18:29
말씀드렸는데
18:31
그러면 대체 어떤 식으로 센서 연결 상태를 검사하는 지 좀 궁금 하잖아요
18:35
그래서 간단히 데이터 시트를 보면서 설명을 좀 드리겠습니다
18:39
우선 bn 5080 의 레퍼런스 메뉴얼을 보시면 프로덕트 id 리퀘스트
18:45
라는게 있고 리스판스 라는게 있습니다
18:48
그래서 이미 우리가 사용한 그 라이브러리 함수 안에 프로덕트 아이디를
18:53
알려 달라고 요청하는 기능이 구현이 되고 또 그 때 응답이 왔을 때 응답
18:59
값이 0 x f8 인지 확인하는 부분이 이미 구현이 되어 있어요
19:04
그래서 좀 이따가 소스 코드 확인 하면서 그 내용을 같이 확인해
19:07
보겠습니다
19:09
그리고 또 icm 2060 이랑 lps 2 h 도 데이터 시트를 보시면
19:14
센서에 내부의 특정 레지스터의 값이 고정되어 있는게 있는데 그 레지스터
19:20
이름이 둘다 후에 마인 이라는 이름이 구요
19:23
icm 2060 이는 0 x 7 o 에 값을 읽어 보면
19:28
값이 0 x 1 2가 일으킨다 라고 명시가 돼 있고 또 lps eh 는
19:34
고을 x of 에 값을 읽어 오면 0 xb 사람 이란 값이 일으킨다 라고
19:41
되어 있습니다
19:42
그래서 또 이미 우리가 사용했던 그 센서를 라이브러리 함수 내부에
19:46
읽어들인 값들이 이 값들이 맞는지 검사 하는게 구현이 되어 있어요
19:51
역시 좀있다 소스코드 보면서 한번 확인해 볼 겁니다
19:55
그리고 이제 pad 개인이 잘 일으켰는지 도 확인을 해 봐야 되는데 우선
20:00
예전에 잎이 프로토콜 이라는 잎이 롬 데이터 관리 프로토콜을 정의 했었죠
20:06
이걸 프로토콜로 정의한 이유가 프로토콜을 정의해서 데이터 관리를 하지
20:11
않으면
20:12
중간에 데이터가 잘못 된게 있어도 그걸 알아 낼 수가 없기 때문에
20:16
데이터의 무결성을 보장하기 위해서 프로토콜을 정의한다 라고 설명드렸습니다
20:22
그래서 이 프로토콜을 간단하게 다시 한번 살펴 보면 잎이 롬에 데이터를
20:27
읽고 쓰는 형태를 정향 거 있구요
20:30
메세지 단위를 16 바이트 로 정 했었습니다
20:33
이게 또 ep 롬 에 페이지 다녔죠
20:36
그래서 한 멧세지 마다 개인의 id 정보랑 그리고 또 pid 개인이
20:41
순서대로 들어있었고 메세지 시작은 0 x 450 x 공으로 시작했고 맨
20:47
마지막 한 바이트가 체크 쌓였습니다
20:51
이 필요 메 데이터를 저장할 때도 이 프로토콜을 따라서 저장을 했었고
20:55
읽어올 때 역시 이 프로토콜 내로 16 바이트를 읽어 와서 헤더 랑
20:59
체크섬 을 검사 했었죠 그래서 데이터 읽고 쓰는 걸 함수로 정의를 했어
21:04
썼구요
21:05
특히 읽어 우는 함수를 호출 했을 때 이 프로토콜 대로 데이터가 일치하지
21:10
않으면 에러를 l 내주도록 정의를 했었습니다
21:14
예전에 다꾸 요샌 왔었어요 그래서 역시 그 코드도 확인을 해 보면서
21:19
설명드리겠습니다
21:21
그래서 예전에 이미 다 구현을 해 놨던 함수들을 갔다 왔을 거라서 사실
21:25
이번 시간에 구현할 내용은 그렇게 많지는 않을 것 같습니다
21:29
그냥 함수의 리턴 값이 0인 야 일 이냐 만 확인하면 되요
21:33
그리고 뭔가 연결 상태가 이상하다고 판단이 됐을 때 에러 메세지를
21:38
출력하고 부저를 올린다 던지 프로그램을 종료시키는 걸 구현하면 됩니다
21:43
그래서 설명은 이렇게 마치고 이제 소스 코드 작업으로 넘어가겠습니다

```

#### video 39
- ch9-2 joystick swa position, throttle check

{% include youtubePlayer.html id=page.youtubeID39 %}

```diff
00:13
이번 챕터 9 에서는 안전을 위한 기능들을 설명 드리고 있구요
00:17
지난 시간에 이 두 가지에 대해서 설명 드렸는데
00:20
먼저 센서 연결 상태를 검사해서 연결이 잘 안 돼 있을 경우에는 그 때는
00:25
비행이 불가능한 상태기 때문에 아예 모터 회전 도 안 되도록 와 1 문의
00:29
진입을 못하게 했었고 2nd ep 롬 에서 pid 개인을 읽어 되었을 때
00:34
개인이 제대로 안 일으켰을 경우에는 바로 비행을 하면 안되지만 개인을
00:40
다시 설정에서 비행할 수 있도록 경고음을 올린 후에 와 1 문의 진입하게
00:44
씁니다
00:45
와인 문의 진입한 이후에는 반드시 gcs 에서 개인을 꼭 새로 설정을
00:49
해야 된다 고 강조 되었죠 그래서 지난 시간에 설명 드렸더니 내용들은
00:54
사실 발생할 일이 거의 없는 경우 구요
00:57
이건 들어오니 비행하기 전에 하드웨어 연결 상태 같은걸 검사하는 기능이
01:01
반면에
01:02
앞으로 남은 이 내용들은 비행 하려고 할 때 또는 비행 중에 발생할 수
01:07
있는 사고 들을 예방하는 기능입니다
01:10
그래서 앞으로 설명드릴 내용들이 정말 중요한 기능들이 에요 그래서 글씨도
01:14
이렇게 빨간 되기 줘
01:16
이번 시간에는 이 중에 이 두가지 일을 설명 드릴 거구요
01:19
사용자가 의도하지 않았는데 모터가 갑자기 돌 수도 있는 상태를 당제 하기
01:24
위한 기능이라고 보시면 되구요
01:27
그 중에 첫번째 상황은 부팅할 때 즉 들어온 의 전원을 처음 넣을때
01:32
스로틀을 높인 상태에서 건강 스위치의 이를 밑으로 내린 상태에서 들어온
01:38
의 전원을 나오면 전원을 넣자마자 모터가 갑자기 확 돌 수도 있습니다
01:42
또 전원을 넣을 때는 사람이 들어온 을 잡고 있는 상태를 테니까 그때
01:48
모터가 갑자기 돌면 사람이 다칠 수도 있어요
01:51
그래서 처음 전원을 넣을 때 쓰로틀 키랑 스위치의 이에 상태를 검사해서
01:56
경고음을 울리는 기능을 구현 할 거구요
02:00
예전에 이건 일부는 구현을 좀 해 났었어요 근데 주석으로 막 않았었죠
02:04
그리고 이 두 번째는 들어온 에는 전원이 들어가 있고
02:08
아 밍 을 하려고 스위치의 이를 밑으로 내렸을 때 그 때 또 쓰로틀 기가
02:13
위로 올라가 있는 상태라면 아 밍 을 하자마자 모터가 갑자기 돌면서
02:17
사고가 발생할 수도 있을 겁니다
02:19
그래서 아 밍 할 때 쓰 로 트 리 맨 밑으로 내려가 있는 상태인지
02:23
검사를 하고 경고음을 울리는 기능을 가치관을 겁니다
02:27
참고로 아 밍 한 후에는 스로틀을 급격히 높이면 무슨 일이 발생할 지
02:32
모르기 때문에 그렇게 해주면 절대 안되고 쓰로틀 높일 때는 천천히 노페
02:36
됩니다
02:37
그 내용들은 나중에 개발이 다 끝나고 비행하기 전에 주의해야 될 사용을
02:42
정리해서 한번 설명 될 건데 그때가 c 설명드리겠습니다
02:46
이제 이번 시간에 구현할 걸 좀 보여 될 건데 이번 시어는 안전장치가
02:51
없는 경우에 그 때 정상 동작할 때 랑 또 위험한 상황이 발생할 수 있는
02:56
2가지 경우로 보여드리고 요
02:58
그 후에 안전장치를 구현 했을 때 그 때 또 정상동작 이랑 위험한 상황이
03:03
발생할 경우 를 보여드리겠습니다
03:05
한번 비교를 해 보시라는 거예요 지금 f 시에는
03:09
우선은 여러분들의 예로 좀 돕기 위해서 위험한 상황이 발생할 수 있는 몇
03:13
가지 경우를 넣어놨습니다
03:15
그리고 메인 와 1 문의 진입한 후에는
03:18
조종기 에 스위치의 1호 못함 잉 을 하고
03:21
암이 된 상태에서 쓰로틀 길을 조작하면 모터 회전 속도를 가변 할 수
03:25
있게 해놓은 상태입니다
03:27
아직 오늘 설명드릴 안전장치는 구현하지 않은 상태에요
03:31
그럼 먼저 이 상태에서 아무 문제 없이 정상 동작하도록 해보겠습니다
03:36
정상동작 가려면 조종기 전원을 먼저 키고
03:41
그리고 스위치의 이를 위로 올리고 스로틀 길을 내린 제로 들어온 의
03:45
전원을 넣으면 문제 없이 동작할 겁니다
03:48
전월 넣어보겠습니다
03:54
부팅 잘 됐고 와 1 문의 진입했다는 부품도 주셨죠
03:57
이제 스위치의 이를 내리면 모터가 아닌 되고
04:01
모터 아 밍 은 모터에 시동을 거는 거라고 생각하시면 되요
04:04
모터 암행 을 해야지 들어온 조정할 수 있는 거죠 스위치의 이를 내렸더니
04:09
내 모터가 천천히 회전을 하고 있고 지금 상태에서 쓰로틀 길을 조작하면
04:14
모터 회전속도 가산합니다
04:17
그래서 드론을 조종하는 거라고 생각하시면 되구요
04:20
다시 스위치를 위로 올리면 모터가 디스하는 되고 모터가 이렇게 꺼집니다
04:26
이 상태에서는 조종기 조작을 해도 모터가 반응하지 않습니다
04:31
그래서 이게 가장 기본적인 동작 방식이 될 거구요
04:35
지금처럼 이 사용 법대로 정확히 조작을 하면 의도 할 때만 모터가
04:39
동작하게 할 수 있어요
04:41
근데 실수 로 들어온 에 전원을 넣을 때 스위치의 이를 내리고 쓰로틀
04:46
키를 이렇게 올린 채로 들어온 의전원 넣었다고 하면
04:50
전원을 넣자마자 갑자기 모터가 박 또는 상황이 생길 수도 있습니다
04:55
그래서 그걸 한번 보여 드리면 먼저 전원을 다 빼구요
05:01
이제 다시 전원을 넣을 건데 조정기 전원을 키고
05:05
실수로 제가 스위치의 를 데리고 스로틀 길을 약간 위로 올린 채로
05:09
들어오네 전화로 넘었다고 가정해 보겠습니다
05:18
들어온 에 전원을 넣자마자 의도치 않게 모터가 급격히 회전하는 상황이
05:23
발생할 수 있는 거죠 그래서 지금 보여드린 게 이 첫번째 상황
05:27
부팅할 때 의도치 않게 모터가 갑자기 동영상을 보여 된거고
05:32
이제 두 번째로 거기서 이렇게 우선 전원을 또다시 다 빼구요
05:39
아 밍 할 때 위험한 상황이 발생하는 경우를 좀 보여드리겠습니다
05:43
다시 정상적으로 부팅을 하구요 조종기 전원을 키고
05:47
스위치를 올리고 스로틀을 내린 제로 트론 의 전 없겠습니다
05:55
정상 부팅이 됐고 또 메인 와인의 진입한 상태구요
05:58
모터도 디스 허밍 된 상태 정 이제 스위치를 내리면 아민이 될 거고 그
06:05
후에는 2를 조정 되기 시작할 겁니다
06:07
그새끼 비행을 하다가 땅에 착륙을 하고 모터도 다시 껏다가 다시 비행을
06:14
한다고 해 보겠습니다
06:15
그러면 또 다시 모터 암행 을 해야 되니까 스위치의 이를 밑으로 내려야
06:20
되는데
06:21
그런데 그때 제가 실수 로 쓰로틀 에기를 약간 위로 올린 제롬 모터 아
06:26
밍 을 걸었다고 해보겠습니다
06:29
이렇게 하면 아 밍 하자마자 또 갑자기 이렇게 모터가 급격하게 회전하는
06:34
상황이 발생하게 쬲
06:36
그래서 지금 보여드린 게 이 두 번째 상황이고 세번째 상의 자 아 밍 할
06:40
때 의도하지 않게 모터가 갑자기 회장 한 상황입니다
06:44
그래서 이 두 가지 상황이 발생하면 의도 하지 않을 때 즉 방 신의 있는
06:49
상태에서 모터가 갑자기 급격하게 회전하는 상태가 되는 거구요
06:54
이때는 사람이 근처에 있으면 거의 100% 사람이 다친 사항이 생길
06:58
겁니다
06:59
그리고 또 이때는 보통 사람이 근처에 있을 때요
07:02
그래서 반드시 이런 상황이 생기지 않도록
07:05
프로그램적으로 안전장치를 걸어 놔야 됩니다
07:08
우리는 이걸 직접 개발하는 당사자 니가 이렇게 하면 사고가 난다 라는 걸
07:13
알고 있지만 만약에 다른 사람이 제가 만든 이 드론을 조정한다고 하면
07:18
이런 상황을 모르고 조작하다 가는 사고가 날수 밖에 없겠죠
07:22
그래서 개발자들은 항상 자기가 개발한 걸 나만 쓴다고 생각하면 안 되고
07:26
실제로 사용하는 사람 입장에서 생각을 많이 해 봐야 됩니다
07:31
이건 들어온 뿐만이 아니고 모든 개발이 타 그렇죠
07:33
클라이언트 난 실제 유저 입장에서 어떻게 사용 하는지 생각을 하면서
07:38
개발해 됩니다
07:40
실제 유저들은 이렇게 하면 안됩니다 라고 해도 꼭 그렇게 하는 유저도
07:44
있기 마련 해요
07:45
그리고 또 혼자만 쓴다고 해도 사람은 항상 실수를 할 수 있기 때문에
07:49
위험한 일이 발생할 수 있는 거라면 반드시 꼭 안전장치를 구현 해 두셔야
07:55
됩니다
07:56
지금은 프로펠러가 안 달려 있어서 별로 안 위험에 볼 수 있는데 지금
08:00
보여드린 게 정말 위험한 상황이에요
08:02
그래서 위험한 상황이 발생할 수 있는 이 두가지 경우를 보여줬고
08:07
이제 오늘 할 안전 장치들을 구현을 했을 때 이게 또 어떻게 동작하고 왜
08:12
안전장치가 되는지 한번 보여드리겠습니다
08:16
이제 fc 에 코드를 좀 바뀌었구요
08:18
좀전에 시원했던 것은 위험한 상황이 발생할 수 있는 예를 좀 보여드린
08:22
거고 지금 들어 있는 코드가 이제 오늘 이 수업에서 설명 들의 안전장치가
08:27
구현된 코드입니다
08:29
그래서 먼저 또 정상적으로 한번 동작을 시켜보고
08:31
아까처럼 위험한 상황이 발생하도록 또 동작시켜 보겠습니다
08:36
정상 부팅을 하려면 조종기 전원을 먼저 키고 스위치 a 를 올리고
08:40
스로틀을 내린 제로 들어온 의 전원을 넣으면 되겠죠
08:46
전원 넣었더니 정상 부팅이 됐고 메인 와 1 문의 진입했다는 부품도
08:50
들렸습니다
08:52
이제와 1 문에 있는 상태니까 스위치로 뭐 타이밍을 하고 또 스로틀을
08:56
키로 부터 속도도 가변 할 수 있죠
08:59
지금이 비행을 하고 있는 상태라고 생각하시면 되고
09:02
비행이 끝났으면 스위치의 이를 위로 올려서 모터를 디스하는 할 겁니다
09:07
역시 모터가 꺼진 상태에서는 조종기 키에 반응하지 않고 만약에 또
09:12
지금처럼 모터가 꺼져 있는 상태에서 조종기 키에 반응을 해 버리면 그땐
09:17
또 사고가 날 수 있기 때문에 이렇게 구현을 해 둔 거고
09:20
이것도 있다가 다 구현을 할 거에요 그럼 다시 전원을 빼고
09:24
이제 위험한 상황이 발생할 수 있는 걸 좀 보여드리면
09:28
먼저 첫번째로 조종기 의 전원을 키고
09:32
실수 로 스위치의 이를 내리고 쓰로틀 좀 높인 제로 들어온 의 전원을 켜
09:37
보겠읍니다
09:38
아까는 이 상태에서 전원을 넣자마자 모터 갑자기 회전 했었죠 지금은
09:42
어떻게 동작하는지 한번 확인해 보시기 바랍니다
09:49
보시는 고주파 비프음이 반복적으로 올리면서 모터는 회전하지 않고 넘쳐
09:54
있죠
09:55
지금이 fc 부팅을 할때 와 일문 진입하기 전에
09:59
조종기 s 위치에 이에 상대 랑 또 쓰러 틀의 상태를 검사해서
10:03
이 두가지가 제 위치에 있지 않다면 이렇게 위험하단 의미로 약간 고주파
10:09
에 경고음을 내주고 있는 상태입니다
10:11
그래서 이 빅 부품이 들리면 당하지 마시고 쓰로틀 이랑 스위치의 상태를
10:15
확인해 보시고 이 두개를 재 위치 해도 오시면 되요
10:19
3 위치는 실체 이를 위로 올리고 쓰 로 트랙맨 밑으로 내리는 되서
10:25
이렇게 조작을 했더니 비프음이 멈추고 와 1 문의 진입했습니다
10:30
그래서 지금이 부팅할때 검사를 한거구요
10:33
이건 예전에 쓰로틀 상태 검사 할 때 구현을 좀 해 썼던 내용인데 그
10:37
때는 쓰로틀 상태만 검사를 했었는데 이번 시간엔 추가로 씨즈 2 상태를
10:42
같이 검사 할 겁니다
10:44
이제 와인 분의 있는 상태니까 스위치로 똑같이 못한 잉 하고 좀 더
10:49
속도가 변도 할 수 있죠
10:51
그래서 이렇게 비행을 하다가 다시 착륙하고 딥스 암이 그랬습니다 그래서
10:55
이게 부팅할 때 위험한 상황이 발생할 경우 고
10:58
이제 두 번째로 아 밍 할 땐 또 스로틀을 위로 올려 둔 죄로 그 상태
11:03
다이빙을 하면 아까는 아 밍 을 하자마자 모터가 급격히 회장의 썼는데
11:08
지금은 어떻게 동작하는 한번 보세요
11:10
지금이 fc 에 프로그램은 메인 와 1 문을 반복하고 있는 상태입니다
11:15
그래서 스로틀을 쪼끔 울린 채로 스위치의 이를 내렸더니 아까 같은
11:21
패턴으로
11:22
이렇게 부저가 올리면서 모터 아니니 또 아예 안 되고 있죠 그래서 이런
11:27
패턴의 빛 조용히 올리면 스위치의 이를 위로 올리고 쓰로틀 내리시면 되요
11:32
그럼 비프음이 해제됩니다
11:34
그래서 지금이 아민 할 때 쓰 로트리 위로 올라가 있으면
11:39
모터가 갑자기 급격히 회전하면서 사고가 날 수 있으니까 이렇게 비품을
11:44
되면서 위험한 상태라는 걸 알려주는 안전장치 입니다
11:48
제대로 동작을 하면 쓰로틀 밑으로 내린 채로 암 잉 하는 잘 동작하고 요
11:55
그리고 쓰로틀 위로 올린 채로 단위를 하면 이렇게 부저가 울리자
12:00
그래서 이번시간에는 이렇게 의도하지 않았는데 모터가 갑자기 회전하는
12:05
상황을 방지하고 경고음을 울리는 것 까지 구현해 보겠습니다
12:09
2벌 구현을 해 두면 사고가 발생할 위험이 정말 많이 줄어들 거예요
12:13
그리고 또한가지 예전에 구현을 해 둔 것 중에 들어온 의 전원을 킬때
12:17
송신기가 안 켜져 있으면 연결될 때까지 대기하는 기능이 있었는데 지금은
12:22
그거를 주석으로 막 않아서 사용을 안 했었는데 이제 그 기능도 다 사용할
12:27
거에요 그걸 또 좀 보여드리면
12:30
지금은 계속 들어온 전원 키 기 전에 조종기 전원을 먼저 봤는데 이번에
12:34
반대로 들어온 전원을 먼저 캐 보겠습니다
12:40
그랬더니 이런 패턴의 비품이 올리면서
12:42
조종기 랑 연결이 안 됐다는 걸 알려주고 있는 상태 자 이 상태에서는
12:47
조종기 정을 키시면 되요
12:51
그러면 메인 와 1 문의 잘 진입했다는 비프음이 드렸고 또
12:56
좀 작 써서 잘 하고 있는 상태입니다
12:59
이 기능도 이번 시간에 다 아 이제 사용할 거에요
13:03
이제 이 부팅 프로세스를 다시 한번 살펴 보면 이게 와 일문 들어가기
13:07
전에 플로 차트 고요 그 중에 이 맨 윗부분을 보시면
13:11
와 일문 들어가기 직전에 쓰로틀 의 상태를 검사해서
13:15
맨 밑으로 내린 상태가 아니라면 내릴 때까지 반복 되게 하는 코드를
13:19
예전에 구현해 나왔었죠
13:21
그리고 그 상태를 외부의 표시해 주기 위해서 부저 로 견공 도출
13:25
했었습니다
13:26
근데 예전에는 이 부분 포함해서
13:29
아이 버스 수신 검사하는 이 부분부터 여기까지를
13:32
주석으로 막 않았었는데 이제 주석을 다해야 할 거구요
13:36
거기에 추가로 쓰 로 틀의 상태를 검사한 부분에 이 스위치의 이 상태에도
13:41
같이 검사는 코드를 그려 낼 겁니다
13:43
이 코드는 엄청 간단하고 예전에 구현해 둔거 에서 한도 줄 정도만
13:48
추가하면 되요
13:49
그래서 이게 부팅할때 검산 부분이고요
13:52
그래서 부팅이 잘 되고 와 1 문의 진입하면 이제 이 안에서는 우리가
13:57
구현한 이 모든 기능들이 계속 반복 쌩 될텐데 이 안에서 스위치의 이를
14:02
밑으로 내리면 모터가 암이 될 거고 그 시점에 스로틀 키가 밑으로 내려가
14:07
있는지 같이 검사할 겁니다 이게 안전장치 줘
14:10
그래서 모터 암이 잘 되면 이제 그 후부터 조종기 스틱을 이용해서 드론을
14:15
조정 하고요 그러다가 스위치를 올리면 이제 모터가 다시 디스 허밍
14:20
될겁니다
14:21
그래서 이게 이제 드론을 다 완성하고 들어온 비행할 때 조종기를 조작하는
14:27
순서가 될 텐데 이렇게 하기 위해서 이번 시간에 먼저 이 세 가지
14:31
기능들을 구현할 겁니다
14:33
첫번째로 스위치의 1호 모터 아 밍 되거나 d 쌈 잉 되게 해야 될 거고
14:37
두 번째로 모터 암 잉 하는 시점에 스로틀을 상태를 검사할 해야 될
14:42
겁니다
14:43
그래서 위험한 상태라면 경고음을 올리고 모터가 회전하지 않게 할 거구요
14:49
마지막으로 아 밍이 잘 됐다면 조종기를 조작해서 드론을 조종할 수 있게
14:54
해야 겠죠
14:55
지금은 쓰로틀 키에 만 반응하게 할건데
14:58
제어 파트 들어가면 모든 키에 다 반응하도록 할 겁니다
15:02
그래서 오늘은 이걸 구현 할 거고 소스 코드 작성을 게 별로 많지는
15:06
않은데
15:07
근데 와 1 문 안에서 반복 동작할 때 코드의 흐름을 좀 생각하면서
15:11
작성해야 되는 것들이 있어요
15:13
어떤 지점에 모터를 돌릴 수 있게 할 건지
15:16
그리고 또 어떤 지점에 경고음을 올리면서 모터를 못 돌리게 할 건지 그
15:21
시점 들을 좀 잘 생각해봐야 될 겁니다
15:24
이제 모터를 좀 돌려야 되니까 예전에 모터 구동 챕터에서 했던거 다시 좀
15:29
간략히 설명드리면
15:31
타이머 5번 을 이용해서 4개의 pwm 을 만들었구요
15:35
이 타이머 5번은 32비트 타이머의 83 애가 헤르츠 로동 잡겠습니다
15:41
그리고 프리스케일 너를 일로 두고 오토 릴 로드 레지스터를 42,000원
15:46
했을 때
15:47
2킬로 헤르쯔 주기에 pwm 을 만들어 졌죠
15:50
이계원 삭 125 프로토콜의 pwm 이었고 이때 펄스 폭은 최소 125
15:57
마이크로 그리고 최대 250 마이크로 세끼 얻습니다
16:01
이게 ccl 값으로는 최소 마노 100부터 최대 2만 천 까지 값인
16:06
했었고 이전에 이제 이 안에서 펄스 폭을 왔다갔다 하면서 모터 회전
16:10
속도를 조절 해봤자
16:12
esc 캘리브레이션 도 이 펄스 폭 때로 했었습니다
16:16
그때 조종기 스틱을 조작해서 모터 속도 조절 썼는데
16:20
조종기 조 장면은 첨부터 2004 2까지 의 값이 얻고 pwm 의 ccl
16:26
레지스터 같은 마노 100부터 21,000 까지 조절해 썼었는데 그 때
16:31
이런 식을 계산을 해서 이대로 코드 작성을 썼었죠
16:35
그래서 이번에도 이렇게 비슷하게 할껀데 이번에는 암 잉 하는게 좀
16:39
필요해서
16:40
이 최종식 에서 쪼금 바꿔서 사용할 겁니다
16:43
이부분 기억이 잘 안나 g 는 분들은 챕터 6 에 모터 구동 부분을 다시
16:48
한번 보시면 기억 나실 거예요
16:51
이제 이번 시간부터 앞으로 계속 모터를 돌릴 건데 아직 프로펠러는 절대
16:55
끼시면 되고요
16:57
모터 돌때 모터의 손도 되지만 안됩니다
17:00
이전에도 한번 설명 드렸었죠 다치면 본인 책임 이니깐 꼭 주의해서 따라
17:05
지기 바라겠습니다
17:06
그럼 이제 소스 코드 작업으로 넘어가겠습니다

```


#### video 40
- ch9-3 low battery alarm and motor stop

{% include youtubePlayer.html id=page.youtubeID40 %}

```diff
00:13
지난 시간에 부팅할때 조종기 의 스로틀 키랑 스위치 a 가 제 위치에
00:18
있는지 검사하는 걸구 했었고
00:20
그리고 또 암이 할 때 스로틀 키가 최소인 지검 상에서 알람이 울리는 것
00:25
까지 변해 썼습니다
00:26
그래서 이 두가지는 사용자가 실수로 조종기 조작을 잘못해서 모터가 갑자기
00:32
돌면서 사고가 발생하는 걸 방지하는 기능이 겠죠
00:35
이제 개발이 다 끝나고 비행을 하게 되면 그때는 조종이 미숙해서 도
00:40
사고가 날 수가 있어요
00:42
근데 이거는 소프트웨어 적으로 안전장치를 둘 수가 없는 거라서 비행하기
00:46
전에 조종 연습을 충분히 하셔야 됩니다
00:49
제 수업에서 아무리 안전하게 비행할 쓸게 개발을 해도 조종을 잘못하면 또
00:54
사고가 날 수 있기 때문에
00:56
조종 연습은 충분히 하셔야 되요 저도 사실 조정을 잘 못하는 변 이어서
01:00
시간날때마다 틈틈히 비행 연습을 좀 하고 있구요
01:03
잘 만들어 놓고도 조정을 못해서 못 날리면 좀 답답할 거에요
01:08
이제 다음 챕터에서 들어온 시뮬레이터를 하나 소개해 될 건데 그걸
01:12
이용하면 밖에 나가지 않고도 그리고 실제 들어온 알리지 않고도 컴퓨터로
01:17
연습을 좀 할 수 있습니다
01:18
저도 그걸 연습을 좀 하고 실제로 밖에 나가서 달려 왔더니 확실히 도움이
01:22
좀 겠습니다
01:24
어쨌든 잘 만드는 거랑 잘 날리는 것은 별개 니깐 사고가 안 나게 핑
01:29
하려면 비행 연습을 충분히 하셔야 됩니다
01:32
이제 이번 시간이 챕터 구애 마지막이 면서 또 파트 투 의 마지막이 줘
01:37
이번 시간에는 이 세가지에 대해서 설명 드릴 거구요
01:41
첫번째로 비행중에 조종기 연결이 끊겨서 조종이 불가능해지는 상황에
01:46
대비해서
01:47
그런 상황이 발생하면 경공을 올리면서 모터를 강제 정지 시켜서 추락하게
01:52
할 겁니다
01:53
그냥 추락하면 또 위험하긴 한데 본 수업에서는 자동 호 버림 이나 위치
01:58
저를 안 다르기 때문에 그냥 강제로 추락시 키도록 할거구요
02:02
그렇기 때문에 추락해 도 큰 사고가 발생하지 않는 곳에서 만나셔야 됩니다
02:07
사람이나 차 위에서 날리면 추락할 때 또 큰 2차 사고가 발생할 수 있기
02:11
때문에
02:12
그런데서 날리지만 절대 안되고 추락해 도 4 들어온 망가지고 2차 사고가
02:17
발생하지 않는 그런 데서 만날 전입니다
02:20
그래서 이게 이 첫 번째 기능이 살 거고 이 중에 이 페일 세이프
02:24
검사에서 부저 올리는 것은 예전에 구현을 했었잖아
02:28
그래서 이번에는 모터를 정제하는 기능 좀 추가 할 겁니다
02:32
그리고 두번째는 배터리 전압을 측정해서 3셀 리튬폴리머 배터리 기준으로
02:37
10 볼트 이하로 떨어지면 경고음을 울리도록 할 겁니다
02:42
근데 이때는 모터를 끌지는 않고 조종은 가능한 상태니까 기행 하다가
02:47
배터리가 없다는 경고음이 올리면 조정을 해서 착륙을 시키면 되겠죠
02:51
10 볼트 미만으로 떨어졌는데도 비행을 더하면
02:55
우선 모터 힘이 약해지면서 계속 하강할 겁니다
02:58
그 때 억지로 비행을 더하게 되면 배터리 전압이 너무 낮아 지면서
03:02
배터리를 더 이상 뭐 쓰게 되는 상황이 발생할 수 있으니까 3세의
03:06
기준으로 10 볼트 밑으로 떨어지면 다시 충전해서 사용 하시기 바랍니다
03:11
그래서 이것도 예전에 구현을 해 놓은 거라서 그거 그대로 쓰면 되구요
03:15
이 두개는 그래도 안전이 랑 직결되는 것들이라서 빨간색입니다
03:19
특히 이 페일 세이프 가 정말 중요하구요
03:22
굉장히 마지막은 비행 하다가 스위치 씨를 맨 밑으로 내리면 부정에서
03:27
소리가 나게 할 겁니다 이건 안전 이란 관련돼 따 하기보다는 이 기능이
03:32
어떨때 좋냐 면
03:33
드론을 날리다가 숲속 이는 잔디밭 이런데 추락하면 찾으러 갈때 잘
03:38
안보여서 찾기가 힘들어요
03:40
그때 들어온 에서 소리가 나면 찾기가 좀 쉬워 질 테니까 분실 위험이
03:44
줄어들 겁니다
03:46
그래서 이번 시간에는 이 3가지 기능을 구현하도록 하겠습니다
03:50
이제 이번 시간에 변할 걸 좀 보여드릴 건데 들어온 조정이 안되는 이
03:54
두가지 경우를 먼저 보여줄 거구요
03:56
그때 안전 장치가 없을 경우 어떻게 되는지 랑
03:59
그리고 이번 시간에 변할 모터를 강제 정자는 것을 그 후에 보여드리도록
04:03
하겠습니다
04:05
우선 지금 fc 에는 지난 시간까지 구하는 코드가 들어 있는 상태구요
04:09
그 안에는 페일 세이프 가발 동 하거나 혹은 배터리 저전압 상태일 때
04:13
부조가 올리는 코드도 들어 있죠
04:15
근데 그게 지금은 원하는 대로 동작하지 않을 겁니다
04:18
그래서 지금은 통신이 끊겨 도 모터를 끄는 기능이 없는 경우 구요 한번
04:23
동작을 시켜 보겠습니다
04:25
들어온 에 전원을 넣고
04:29
그리고 조종기 의 전원을 키 0 아
04:33
와 1매 들어간 상태고 아 밍 을 하고 드론을 조정한다고 하겠습니다
04:38
이렇게 스로틀을 높아서 들어 오늘 비행을 하고 있는 상태구요
04:42
비행을 하다가 성징 길항 수신기 연결이 끊어졌다고 가정하고 지금은
04:48
조종기를 거 보겠읍니다
04:50
전원을 꺾고 지금이 페일 세이프 가 발동되는 상황인데 당연히 조정이 안
04:55
되겠죠
04:56
그리고 모터를 끄는 기능도 생각하지 않습니다
05:00
그리고 부조화가 올려야 되는데 9 저는 안 울리고 있고 모터는 계속해서
05:04
돌고 있죠 그래서 이 경우 가이 성징 길항 수신기의 유선 연결이 끊어져서
05:09
조정이 안되는 케이스가
05:11
다소 많은 좀 끄고
05:13
그래서 이게 이 1번의 경우 0 그리고 또 한 가지 조정이 안되는 경우가
05:18
더 있는데 이번
05:20
조종기 랑 수신기 연결은 되어있는데 수신기 랑 fc 연결이 이유선 점퍼
05:26
케이블 롯의 있자나요
05:27
이 연결이 끊어진 경우가 있습니다 그래서 그걸 또 보여드리면 다시 들어온
05:32
의 전원을 넣고
05:35
조종기 저는 키고 아
05:40
아 밍 을 하고 비행을 하다가 이 점 퍼 케이블이 빠질 경우 이라 한번
05:45
뽑아 보겠읍니다
05:47
자 뽑았는데 역시 조정이 안 되죠 그리고 모터를 디스 허밍 해도
05:52
동작하지 않습니다 지금 상황은 fc 가 연결이 끊어진 것도 모르고 있는
05:58
상태에요 아까이 1번의 경우는 이 둘 간의 연결이 끊어지면 fc 는
06:04
그래도 그걸 알고 있잖아요 근데 지금 상황은 그것도 아닙니다
06:08
아예 fc 가 상황을 몰라요 그래서 대처할 수 없습니다
06:13
것인지 손을 좋겠습니다
06:15
그래서 지금 보여드린 이 두가지 경우가 경우는 다르지만 둘다 조종이
06:20
안되는 상황이 되는 겁니다
06:22
이때 추락을 안시키면 왜 더 위험한 하면
06:25
조종은 안되는데 혼자 비행하고 있는 상황이기 때문에 그래요 정말 위험한
06:30
케이스 자 그래서 이제 강제로 모터 끄는 걸 구현을 하고 2 저도 잘
06:35
울리도록 해보겠습니다
06:37
이번 시간에 구현할 것들이죠 이제 fc 에 코드를 좀 바꿨어요
06:42
역시 두 가지 경우에 어떻게 동작하는지 보여드리겠습니다
06:45
똑같이 2 랜선으로 넣고
06:49
조종기 저는 키 0
06:52
아 밍 을 하고 비행을 하다가 이 1번의 경우 조종기 랑 수신기 연결이
06:59
끊어졌을 때 모터를 강제로 끄고 2 저도 올리게 났습니다
07:02
좀 넣어보겠습니다
07:05
저는 바꿨더니 원하는 대로 모터가 멈췄고 그리고 부저가 올리고 있죠
07:10
잘 동작을 하고 있고 내가 전화를 좀 끄고 요
07:13
근데 1번의 경우는 페일 세이프 가 발동이 되면 fc 가 그 상태를 알고
07:18
있어서 별로 어렵지 않게 구할 수 있습니다
07:21
근데 이번에 경우가 문제죠 우선 또 이것도 한번 보여 드리도록 하겠습니다
07:31
아 아닌가 하고 비행을 하다가 수신기 랑 fc 연결되는 이유선 점퍼
07:37
케이블을 뽑아 보겠읍니다
07:41
뽑았던 인 역시 똑같이 모터가 자는지 했고 부저가 울리자
07:46
또 전화 좀 끄고
07:48
이 이번 을 구현하려면 우선 이 수신기 랑 fc 간의 연결이 끊어졌다는
07:54
걸 판단을 해야 되는데 본 수업에서는 타임 아웃 기능을 추가 할 겁니다
07:59
이제 이 두 가지 상황이 발생하면 모터가 정지 하니까 그냥 그 위치에서
08:03
추락하게 되겠죠
08:05
그러니까 꼭 추락을 해도 들어오니 부서지는 건 어쩔 수 없는 거고 그
08:09
외에 2명이나 재산 피해가 발생하지 않는 안전한 0 역에서 만나 지셔야
08:14
되는 것 꼭 주의하시기 바랍니다
08:16
그리고 이제 다시 전원을 좀 넣구요
08:24
지금 젖어 남 알람 기능도 있고
08:28
그리고 스위치 씨로 부저 올리는 것도 있는데 저전압 알람은 지금 보여드릴
08:33
수가 없으니까 넘어가고
08:34
그건 그냥 알람 만 올리는거 고 스위치는
08:38
2 3단 스위치 서 이걸 맨 밑으로 내리면 알람이 울리게 놨습니다
08:42
뭔 열어보겠습니다 내렸더니 알람이 울리자 쏠렸던 양감이 꺼지고
08:49
지금 올리는 것은 통신이 끊어져서 알람이 울리는 게 아니고 제가 이 수위
08:53
7시 를 이용해서 의도적으로 알람이 울리게 한 경우입니다
08:58
근데 이 알람이 울리면 배터리 소모가 있으니까 필요한 경우가 아니면 아
09:02
느끼시는 게 좋아요
09:04
참고로 이 스위치 씨는 부팅할 때는 esc 캘리브레이션 이나 bn
09:08
5080 캘리브레이션 모두 로 진입하는 거 그거 선택하는 기능으로
09:13
사용되지만
09:14
와 1 문의 진입한 이후에는 지금처럼 새로운 기능을 할당할 수 있습니다
09:19
그래서 지금이 와 1 문 안에서 맨 밑으로 내렸을 때
09:23
부서가 오일리한 거죠 그리고 또 지금은 와인 문 안에 있으니까
09:27
암 잉 하고 요거 같이 못하 이렇게 구동할 수 있고 이 때 스위치를
09:33
내리면 다져 가위로
09:35
이 상태에서 똑같이 수송 세요 그리고 디스 아닌 또 모터가 이렇게 꺼지고
09:40
그래서 v 도적으로 이렇게 부저가 올리게 팔 수 있도록 이 기능도 구현할
09:44
겁니다
09:46
우선 들어온 조정이 불가능해질 수 있는 두 가지 상황을 페일 세이프 가
09:50
발동되는 상황을 좀 설명을 드리자면
09:53
첫번째는 조종기 란 수신기 간의 무선통신이 끊어지는 경우가 있을수 있구요
09:58
두번째는 수신기 랑 fc 간의 유선 연결이 끊어지는 경우가 있습니다
10:03
우선 이런 상황이 발생하면 아까처럼 들어온 조정이 안 될 거구요
10:07
그래서 이걸 놓고 났다고 하는데 이때 가 왜 위험하면
10:11
제 수업에서 만드는 들어오네 비행 모드 는 엥글 모드 이라고도 하는
10:16
셀프레벨링 모드입니다 오토레벨링 모드 이라고도 하구요
10:20
이 모드는 조종기 의 조작 값이 드론의 목표 각도가 되는거구요
10:25
이 모드에서는 조종기를 중리 불어주면 들어오니 수평을 유지하는 모드입니다
10:29
이 앵글 모드로 비행을 하다가
10:32
조종기 통신이 끊기며 넌 어떤 상황이 발생하면 통신이 끊기기 이전에
10:37
자세를 유지하면서 혼자 비행을 하는데 조종이 안되는 상황이 발생합니다
10:42
그냥 뒤집히면 서 추락을 하면 그래도 공터 같은데 라면 기체 만 부서지고
10:46
말 텐데 이건 그것도 아니죠
10:48
추억도 안하고 계속 날아가는데 조작이 안되는 상황이 되는 겁니다 배터리가
10:53
다 될 때까지 그냥 혼자 막 날라가 버린 상황이 되는 거죠 그래서 그걸
10:56
방지하기 위해서 이런 상황이 발생하면 모터를 강제로 꺼서 그 위치에서
11:01
추락시 키도록 할 겁니다
11:03
가능하면 서서히 자극하거나 제자 리빙 또는 홈으로 자동 비안 이런걸
11:08
구현하면 좋은데 이건 gps 랑 기압계 같은걸로 위치 런 고도 제어가
11:13
구현이 되어 있어야 돼요
11:14
우선 제 fc 에는 gps 랑 기압계 데이턴 받아올 수 있으니까 구현하려
11:18
난 할 수 있는데 그 전에도 말씀드렸듯이 것은 수업에서는 안 다룬다
11:23
그랬죠
11:24
그럼 이제 fc 가 지금 조정이 안되는 상태 달하는 걸 알아야지 모터를
11:29
끄거나 뭐 그럼 동작들을 할 수 있게 될 텐데 이 1번 같은 경우는
11:33
fsi 에 6기 수신기가 페일 세이프 상태라는 걸 fc 한테 알려주죠
11:39
그래서 1번 상황이 발생하면 fc 가 그걸 알 수 있게 예전에 구현을 해
11:43
났었고 이번 상황은 얘기가 좀 다릅니다
11:47
이거는 수신기가 알려준 게 아니라서 우리가 직접 알아 내야 되고 그래서
11:51
좀 있다가 그 방법에 대해서 설명드리겠습니다
11:54
그럼 이제 이 1번 상황 조종기 랑 수신기 간의 무선통신이 끊어지는
11:59
경우를 생각해보겠습니다
12:01
우선 이런 상황이 발생할 수 있는 원인이 이런 얘기죠
12:05
첫번째로 조종기 에 배터리가 다됐다 거는 아니면 실수 로 전원 스위치를
12:10
내렸다 거나
12:11
그래서 조종기 전원이 꺼지면 통신이 끊길 거구요
12:15
아니면 전파 간섭이 나 혼성 같은걸로 통신이 잘 안된다거나
12:20
이게 고압전류가 흐르는 전신주 같은게 주변에 있으면 통신이 좀 끈기
12:24
기도하는 것 같습니다
12:25
그래서 그런 경우도 있을거고 또는 너무 멀리 날려서 신호가 약해 지면서
12:31
통신이 끊기는 경우도 있겠죠
12:33
그리고 또 다른 이유가 있을 수 있는데다 주의 해야 되는 것들이고 요
12:36
그래서 이렇게 송신기 랑 수신기 간의 연결이 끊기면 송신기를 통해서
12:42
조종하는 사람이 알 수 있는 방법이 있는데 이 송신기 화면을 보시면
12:47
수신기의 연결상태를 표시를 해 줘요 그리고 또 연결이 끊김 연이 송신기
12:52
자체에서 부저 소리 같은걸 내줍니다
12:55
근데 이거는 사람이 알 수 있게 해주는거 0 중요한 거는 사람이 아는 게
13:00
아니고
13:00
fc 가 그 상태를 아는지 가 중요한 거잖아요
13:04
근데 다행히 이렇게 통신의 끈기는 경우에는 이 수신기가 fc 한테 그
13:09
상태를 알려줍니다
13:11
데이터를 보내 주자 이때는 수신기 랑 fc 간의 유선 연결이 잘 되어있는
13:16
상태구요
13:17
fc 는 그 상태가 되면 그냥 경고 물리면서 모터를 끄면 됩니다
13:21
그리고 이 중에 펜 세이프 발동되면 경고음을 울리는 것은 또 예전에
13:25
구현을 해 놨기 때문에
13:27
모터를 끄는 기능만 추가 해주면 될 겁니다
13:30
그래서 이제 이 둘간의 무선통신이 끈기 면 fc 가 페일 세이프 발동된
13:36
걸 알 수 있으니까
13:37
그때 경고음을 출력하고 모터 정지 시킨 걸 구하면 될 거구요
13:41
이거 구현하려면 이와 1 문이 수행이 되면서 아이 벗으 데이터를 스
13:46
지나고 그 데이터 안에 페일 세이프 가 발동되는 지 정보를 검사하면
13:51
될겁니다
13:52
그거까지 가 예전에 2 챕터 4에서 구현을 했었고 그래서 발동이 됐다면
13:57
경고음을 출력하면 서 모터를 끄면 되겠죠
14:00
이건 예전에 거의 구현을 해 놔서 별로 구현할 게 없습니다
14:04
이따 코드 보시면 아주 쉬울 겁니다
14:07
이제 이 두 번째 금 수신기 랑 fc 간의 연결이 끊어지면 서 데이터가
14:12
안 받아지는 경우 자 이 수신기 랑 fc 는 유선으로 연결이 되는데 그
14:17
유선 점퍼 케이블이 분량이 라든지 혹은 연결이 꽉 껴 있지 않고 헐렁하게
14:23
돼있다 금지하면 비행 하다가 진동으로 인해서 커넥터 연결이 빠질 수
14:27
있습니다
14:28
그러면 데이터 수신이 안 되면서 또 조정이 안되는 상황이 발생하는 거죠
14:33
근데 이 문제가 많이 생길 것 같진 않고요
14:35
근데 한 번이라도 이런 문제가 생기면 바로 큰 사고로 이어질 수 있으니까
14:40
미리 대비를 좀 해 두는 겁니다
14:42
근데 이 경우는 앞의 경우 랑 다르게 아예 데이터 수신 자체가 안 되죠
14:47
앞에서 설명드린 그 1번의 경우는 이 둘 간의 무선통신 끊어진 경우는
14:52
조종은 안되더라도 어쨌든 이 수신기 랑 fc 간에는 연결이 되어 있기
14:56
때문에
14:57
i 퍼스 데이터가 수신이 되고 그래서 그 수신된 데이터 로 페일 세이프
15:02
상대를 알 수 있었는데 이 이번의 경우는 아예 아이 퍼스 데이터 수신
15:07
자체가 안됩니다
15:09
그래서 이건 다른 방식으로 검사를 해야 되는데 보통 이렇게 데이터가
15:13
스트리밍 되면서 계속 수신되는 경우는 타이머 기능을 두면 되요
15:18
그래서 어떤 직을 할 거야 면 이 아이 버스 데이터가 1초에 130회
15:23
정도 소진이 되는데
15:24
수신될 때마다 f 에서는 그걸 3 구요
15:27
1초 동안 그 샌 값이 0 이라면 데이터가 안 받아지는 거니까
15:32
연결이 끊겨 따고 판단하고 펜 세이프 가 발동된 것처럼 또 경고음을
15:36
올리면서 모터를 끄면 될 겁니다 그러면 또 1초를 새야 되는데
15:41
예전에 1킬로 헤르츠 타이머를 만들어 놓았죠 그래서 그걸 사용할 겁니다
15:45
그래서 이게 말이 좀 쉬워 보이는데 직접 구현하려면 잘 안 떠오를 수도
15:49
있어요
15:50
근데 사실 실제로 구현하는 건 별로 어렵지 않습니다 그래 이따가 코드
15:54
작성 하면서 하나씩 설명드리겠습니다
15:57
예전에 수신기 랑 fc 연결할때 2.5 312 점퍼 케이블로 이 세 개의
16:02
선을 연결 했었는데 이게 케이블로 연결한 거다 보니까 접촉 불량이
16:07
생기는지 혹은 케이블이 끊어질 던지 그런 문제가 생길 수 있구요
16:12
이 3개의 선 중에 하나라도 그런 문제가 발생하면 데이터 수신이 안됩니다
16:17
그래서 우선 케이블을 좀 좋은걸 쓰시는게 좋고 아무리 좋은걸 쓰더라도
16:21
2선 연결하는 부분 에서는 문제가 생길 수 있기 때문에 그걸 대비하는 게
16:25
좋습니다
16:26
어떻게 이렇게 중요한 통신 장치 의 경우는 반드시 안전장치를 구현 해
16:30
줘야겠죠 특히 시중에서 좀 쉽게 구할 수 있는 이런 저가형 점 퍼
16:35
케이블은
16:37
연결 부분이 조금 헐렁한 경우도 많구요
16:40
그리고 가끔은 케이블 내부의 선이 끊어져 있는 경우도 있습니다
16:44
4 그런건 육안으로 확인이 불가능하고 또 그런 경우에는 연결이 될 때도
16:48
있고 안 될 때도 있고 그렇기 때문에
16:51
이거 쓰시는 분들은 조금 주의를 하셔야 되요 그래서 이제 그런 경우를
16:54
대비해서 이번 시간에 안전장치를 구현해 두는 거죠
16:58
이제 타이머를 이용해서 1초를 해야되는데
17:01
예전에 gcs 에 멧세지 송신할 때 니 타이머 7번을 썼습니다
17:05
이 타이머 7번은 83 애가 lg 로 동작하고 요 16비트 타이머 고
17:10
2때 프리스케일 너를 42,000 으로 하고 오토 릴 로드 레지스터를
17:15
1호 했을 경우 타이머 인터럽트 는 1mm 색 마다 요청이 됐어 짜
17:21
그래서 그때 큐브의 맥스로 타이머 7번 설정을 이렇게 했었구요
17:24
이제 타이머 인터럽트가 1mm 생 마다 요청이 되는데 우리는 1초가
17:29
필요한 거니까
17:30
예전에 했던 것처럼 이걸 1000번 세면 1초 라고 판단하면 될 겁니다
17:34
그래서 이 타이머 7번을 그대로 사용하겠습니다
17:38
그래서 이 수신기 란 fc 간의 연결이 끊어진 걸 어떤 방식으로 검사할
17:42
거냐면
17:43
먼저 아이 퍼스 데이터가 수신이 되면 그 때마다 그걸 1씩 3 구요
17:48
그러면 그건 계속 증가를 하게 될거고 1초마다 이 샌 값이 0 인 지
17:53
아닌 지를 확인합니다
17:54
0 이라면 데이터가 안 받아지는 거니까 그 때 경공을 내면서 모터를 정지
17:59
시키면 되겠죠
18:00
2 데이터 수신 은 챕터 4에서 예전에 했던 거고 근데 데이터 그 수신될
18:05
때마다 새는 기능이 랑 또 1초마다 그 카운트를 검사하는 기능을 추가하면
18:10
될 겁니다
18:11
그래서 지금까지 가 통신이 끊겨 서 조종이 안되는 상황을 대비해서 강제
18:16
추락시키는 기능 이었구요
18:18
이제 그 다음에 비행을 하다가 배터리 전압이 낮아져 쓸 경우에 대해서
18:22
설명드리겠습니다
18:23
저희가 사용하는 배터리는 리튬 폴리머 배터리 정 이 배터리는 셀 당
18:28
전압이 3.3 볼 디아로 떨어지면 배터리 성능이 크게 역학의 떨어집니다
18:33
그래서 그 정도 전화비 되면 꼭 충전을 해줘야 되구요
18:36
만약에 그 상태에서 배터리를 더 쓰게 되면 배터리 수명이 줄어듭니다
18:40
심한 경우에는 아예 못 쓰게 될 수 있으니깐 꼭 주의하시고
18:44
그리고 우리가 사용한 배터리는 3셀 배터리 니까
18:47
전체 전화비 10 볼트 정도로 떨어지면 더이상 비행 하면 안됩니다
18:52
그래서 이전의 10 볼트 이하로 떨어지면 경고음이 올리도록 해 놨어 줘
18:57
그래서 비행하다 가부좌 가 올리면 드론을 착륙시 키고 배터리를 교체
19:02
하셔야 됩니다
19:03
근데 가끔 비행을 하다가 이제 부저가 울리면 착륙을 하고 모터를 끄면
19:07
부저가 꺼지는 경우가 있는데 이 때는 일시적으로 배터리 전압이 좀
19:12
회복되는 경우에요
19:14
이때 더 비행을 하면 전화비 딸려서 모터가 좀 약하게 될겁니다
19:18
이때 억지로 더 비행을 하면 과 방전 되면서 배터리 뭐 쓰게 될 수
19:22
있으니까 주의하시기 바랍니다
19:24
4 이 경우는 통신이 끊겨 쓸 때처럼 그렇게 큰 사고가 날 위험이 있는건
19:28
아니라서 부저 만 울리고 모터를 강제로 정지 시키지는 않을 겁니다 그래서
19:33
비행 하다가 부저 올리면 착륙하고 배터리를 교체 하세요
19:37
배터리 전압 측정 하고 저전압 알람 울리는 것도 예전 2 챕터 7에서 다
19:42
구현을 해 났었죠
19:43
이번 시간에 또 그 코드 그대로 사용하겠습니다
19:47
이제 이번 시간에 구원할 마지막 끼는 조종기 의 스위치 c 를 이용해서
19:51
부저를 울리게 하는 거구요 할건데
19:53
아까 말씀드렸듯이 이 기능은 들어오니 어딘가에 추락해 쓸 때 분실 위험을
19:58
좀 줄이기 위한 기능입니다
20:00
이건 경험 해보신 분은 아실 건데 들어온 날리다가 나무에 걸리고 그건
20:04
잔디밭에 파묻히고 이런 경우가 좀 있어요
20:07
그때 이 기능이 있으면 분실할 위험이 좀 줄어 들 테니까 구현을 해
20:11
두도록 하겠습니다
20:13
이 기능은 되게 단순한 기능 이라서 구현도 아주 쉽구요
20:17
수신된 아이 퍼스 데이터 중에 스위치 c 의 값을 악인을 해서 내려가
20:22
있을 때 값으로는 2001 때 부저를 올리도록 하면 될겁니다
20:27
근데 아까 말씀드렸듯이 부팅할 때 이 스위치 씨는 캘리브레이션 모드로
20:31
진입하는 것을 선택하는 기능 이었는데
20:34
와 1 문의 진입한 후에는 캘리브레이션 모듈을 선택하는게 아니고
20:38
부저를 울리는 기능으로 만 사용할 겁니다
20:42
그리고 또 이 스위치 씨는 3단 스위치 라서 맨 밑으로 내려가 있을
20:46
때에만 비프음 올리는걸 할거고
20:48
맨 위에 있을 때랑 중간에 있을 때는 기능 할당 한게 없죠
20:52
혹시나 나중에 다른 기능을 추가하게 된다면 이 수위 7시에 상단이나
20:57
중단에 핥다 하면 될겁니다
20:59
그래서 이번 시간에 구현 할 것들 설명을 다 드렸구요
21:03
이제 생각해봐야 될 게 하나가 있는데 오늘 구현 할 것들이 전부다 부저를
21:07
사용하자
21:08
통신이 끊겨 도 부저 걸리고 배터리 저전압 일때도 올리고 또 이 스위치
21:12
씨로 도부 절을 올리게 할 겁니다
21:14
그래서 이렇게 부저가 올리는 경우에 종류는 여러가지 인데 이 기능들이
21:19
하나의 부저를 공유해서 사용하는 꼬리 라서
21:22
이 하나의 하드웨어 장치를 어떻게 공유 할 건지를 좀 생각해 봐야 되요
21:26
이 문제를 고려하지 않고 코드를 짜는 어떨때 부저가 물려야 되는데 다른
21:31
기능이 그 부저를 끈다 던지 하는 이상한 동작을 하게 됩니다
21:35
근데 이거는 플래그를 사용하면 조금 쉬어 지구요
21:39
지금까지 또 제 코드 자는 방식이다 플래그를 이용해서 어떤 상태를 확인할
21:43
수 있게 해 놨기 때문에 금방 변할 수 있어요
21:46
그래서 설명이 좀 길었는데 이제 설명 마치고 하나씩 구현해 보도록
21:50
하겠습니다
21:51
이제 소스 코드 작업으로 넘어가겠습니다

```

### FPV freeRider
#### video 41

{% include youtubePlayer.html id=page.youtubeID41 %}

```diff


```

### Flight test
#### video 42

{% include youtubePlayer.html id=page.youtubeID42 %}

```diff


```

### Ch10 PID control
#### video 43
- ch10-1 1khz timer generation

{% include youtubePlayer.html id=page.youtubeID43 %}

```diff
00:13
지난 시간까지 파트 투 에 모든 내용이 끝났습니다
00:17
그동안 센서 데이터 받아온 것부터 시작해서
00:20
무선 통신으로 들어온 상태 확인 하는 거랑 또 안전 기능까지 많은걸 꺼낸
00:24
왔죠
00:25
그래서 2 파트 투 까지 의 기능들이 수행 되는데 400 마이크로 색
00:29
정도가 올렸구요
00:31
이제 1khz 로 제어를 하기 위해서 600 마이크로 색 정도의 시간이
00:34
남았는데
00:36
pid 제어 까지 에서 이 모든 기능들이 다 서행 되는데 500 마이크로
00:40
세관에 처리가 가능할 것 같습니다
00:42
만약에 이 수업의 다른 기능을 추가 하실 분들은 시간 계산을 잘 하시면서
00:48
1킬로 헤르츠 제어 주기가 깨지지 않는 선에서 기능을 추가 하시면
00:51
될겁니다
00:53
그래서 지금까지 구현해 놓은 것 아이 하셨으면 그 코드를 그대로 다른
00:57
프로젝트에서 더 응용해서 사용할 수 있을 겁니다
01:00
이제 마지막 파트 줘 2 파트 3 비행 제어 에서는 pid 제어에 대해서
01:05
설명을 좀 드리고 또 제가 실험용으로 제작한 들어온 고정을 시 소지 그의
01:10
들어오는 올려서 1축 pid 제어 성능을 좀 확인해 볼 겁니다
01:15
울 피치 제어 는 그렇게 확인을 해 볼 거고
01:18
요 제어는 그게 불가능해서 비행을 좀 하면서 제어가 잘 되는지 확인해 볼
01:22
겁니다
01:24
먼저 챕터 10 에서는 pid 제어를 하기 위해서 약간의 준비가 좀
01:28
필요한데
01:29
먼저 1khz 주기로 제어를 해야 되니까 타이머로 1khz 를 만들어야
01:34
겠죠 그래서 그걸 하고 그 다음에 저희 수업에서 다루는 쿼드 타입의
01:39
회전익 2
01:40
어떤 원리로 비행을 할 수 있는지를 좀 설명을 드리고 그 다음에 센 서
01:45
회전축 이랑 제어 목표 방향 일지 와 이렇게 돼 있는데 저희가 자세 제어
01:50
할 때 쓰는 센서가 두 가지가 있잖아요
01:53
bn 5080 이랑 icm 2060 이 이렇게 있는데 이 센서의 부 거랑
01:58
또 조종기 조작 방향의 부호 까지 일체화 시키는 걸 여기서 설명 될
02:02
겁니다 그게 끝나면 pid 제어 이론 에 대해서 간단히 설명을 드리고
02:08
실제 제어 코드도 간단하게 작성해 볼 겁니다
02:11
이론 설명은 우선 pid 제어 의 기본적인 내용은 대부분 아실 테니까
02:16
간단히 만 설명들 거고 그리고 인터넷 찾아보시면 설명 잘되어 있는 게
02:21
많이 나와요
02:22
그리고 대학교 같은 데서는 pid 제어 할 때는 시스템 모델링 이란걸
02:27
하고 치밀 에이션 과정을 거쳐서 개인을 찾는 걸 배우는 데 이 수업에서는
02:32
그렇게까지는 못하구요
02:33
실험을 통해서 개인을 찾는 방식으로 진행할 겁니다
02:37
이렇게 하면 실험을 계속 가다보면 언젠가는 개인을 찾을 수 있는데 시간이
02:42
좀 오래 걸리고 위험하기도 하구요 또 학술적인 못하죠 그래서 싱글 pid
02:47
랑 더블 pid 에 대해서 설명을 좀 드리고 코드도 간단하게 작성을 좀
02:51
해 볼 거고 그 후에 코드들을 함수와 시킬 겁니다
02:56
이때 아만 라이브러리 형태로 pid 제어 코드를 드릴 것 같아요
03:00
그래서 구조체 까지 다 정의가 돼 있는 코드를 드릴 거구요
03:04
이렇게 가 챕터 10 에서 할 내용이고 여기서 pid 제어 준비를 하는
03:08
거죠
03:10
이제 챕터 11에서 는 롤 피치 제어 를 해보고
03:14
이때 그 시 소의 드론을 고정해서 제어가 잘 되는지 성능 확인도 좀 해볼
03:19
예정입니다
03:20
이때 hcs 를 이용해서 제어 상태를 그래프로 확인도 해볼 거에요
03:24
우리가 이론으로만 알고 있는 내용들이 실제 어떻게 동작하는지 를 눈으로
03:28
확인해 볼 거라 이때가 좀 재밌고 신기 할 겁니다
03:32
울 피치 제어 는 덕을 pid 제어를 할 거구요
03:35
싱글 pid 는 2위에서 설명만 드리고 실험 은 하진 않을 것 같습니다
03:40
그래서 개인을 바꿨을 때 제어 성능이 어떻게 변하는지를 실험해 볼 거고
03:46
적당한 개인이 찾으면 이걸로 한번 비행하는 것도 보여드릴 예정입니다
03:50
우선 롤 피치 제어 만 돼도 들어오니 뜨기는 뜨는데
03:54
요 제어가 안 되기 때문에 요가 막 돌면서 뜹니다
03:57
그래서 그걸 한번 살짝 보여 될 거고 그 후에 챕터 12 에서 유호
04:02
제어를 할 건데 요 제어는 스틱의 위치에 따라서 제가 방식이 2개가
04:06
다르죠
04:07
둘다 싱글 pid 를 사용 할 거고
04:10
여기서 각 속도 제어는 생각할게 별로 없는데
04:14
헤딩 각도 제어가 생각할게 조금 있습니다
04:18
그래서 그걸 각각 구현을 해 보고 또 실험도 해 볼 예정입니다
04:22
그리고 제가 비행 테스트를 좀 해보니까
04:24
이 헤딩 각도 제어가 퍼포먼스가 잘 안나온 것 같아요
04:28
이 bn 5080 에 헤딩 각도가 생각보다 깔끔하게 안 나온 것 같습니다
04:34
그래서 어쩌면 이요 제어는 각 속도제어 만 하게 될 수도 있긴 한데
04:39
그래도 각도 제어 하는 것도 설명 다 드릴 거에요
04:43
그래서 이번 파트에서는 코드 작성 할 것은 많지 나올것 같구요
04:47
실험 위주로 좀 보여드릴 것 같습니다 이것까지 다 끝나면 이제 비행이
04:52
가능해 지는 거죠
04:53
그리고 또 개인도 제가 알려드린 개인을 그대로 쓰시면 저랑 똑같이
04:57
비행하게 될겁니다
04:59
이번 파트에서는 모터를 계속 돌릴 거라서 주위를 좀 많이 하셔야 되구요
05:03
저는 설명을 들어야 되니까 프로펠러를 달고 설명을 될텐데
05:08
여러분들은 이 파트가 다 끝날 때까지는 프로펠러를 달고 모터를 돌리면
05:12
절대 안됩니다
05:14
정말 위험하기 때문에 제가 이제 프로펠러를 달고 한번 날려 보세요 하기
05:18
전까지는 절대 달지 마시길 바랍니다
05:22
이게 다 끝나면 마지막으로 이 강의에 대해서 리뷰를 간단히 한번 하고 또
05:26
주의해야 될 것들 설명을 드리고 이 강의를 마칠 예정입니다
05:31
그리고 다시 한 번 강조 드리지만 드론을 잘 만드는 거랑 잘 날리는 것은
05:35
* 되니까 꼭 시뮬레이터로 비행 연습을 꾸준히 해주시기 바라겠습니다
05:41
이제 챕터 10 l 시작이죠 먼저 타이머로 1킬로 헤르츠 주기를 만들
05:46
거구요
05:47
예전에 타이머 7번을 1mm 생 마다 인터럽트가 발생하게 해놨습니다
05:52
즉 실수로 데이터 송신 할 때 타이머 7반 하나로 20mm 색이랑 100
05:57
밀리 색 이렇게만 들었었죠
05:59
이번에도 역시 이 타이머 7번을 이용해서 또 1mm 색을 만들 겁니다
06:04
그리고 드론 에 비해 권리를 간단히 설명을 될건데
06:08
쿼드 회전익 은 4 모터의 회전속도를 이용해서 비행 방향을 결정할 수
06:12
있습니다
06:13
또 pwm 펄스 폭을 조절해서 모터 회전 속도를 증가시키거나 감소하게 해
06:19
놓았구요
06:20
몇 번 pwm 채널이 어떤 모터 인지도 다 알고 있으니까
06:24
이거 이해하지는 것은 어렵지 않을 거에요 그래서 조종기를 조작해 쓸 때
06:29
그 방향에 맞게 모터 회전 속도도 조절 되는 코드를 한번 작성해 볼
06:34
겁니다
06:35
제어는 아니고 그냥 단순히 모터만 돌리는 거죠 그래서 그게 이 두 번째
06:40
설명 될 거고
06:41
마지막으로 센서 회전 방향이 랑 조종기 조작 방향을 잃지 마 시킬 건데
06:47
예전에 챕터 2 해서 센서 데이터 확인할 때 그때는 부호는 중요하지 않고
06:53
나중에 바꿀 거다 라고만 설명을 드리고 넘어갔는데 이제 그 부호를 일체화
06:57
시키는 작업을 여기서 설명 될 겁니다
06:59
이 비에도 080 이란 icm 2060 2강 센서 회전할 때 부호가 좀
07:05
달라요
07:06
지금은 드론을 옆으로 기울였을 때
07:09
bn 5080 은 부부가 플러스 인데 icm 2060 이는 많이 넣습니다
07:14
근데 이러면 pid 제어 할 때 이상하게 동작할 수도 있어요
07:18
예를 들어 들어오니 옆으로 기울어 지면 수평으로 돌아와야 되는데
07:22
반대로 옆으로 더 기울어지는 현상이 생길 수 있는 겁니다
07:26
pid 제어 할 때 이 부호가 엄청 중요하기 때문에
07:30
부호를 잘 고려를 해야 되는데 부호를 미리 일체화 시켜 놓으면 생각할게
07:34
하나가 줄기 때문에 코드 작성에 좀 편해질 겁니다
07:38
그래서 이번 시간에는 2부 보 일치하는 것 까지 이 세가지에 대해서
07:42
설명드리도록 하겠습니다
07:45
이제 이번 시간에 걸 좀 보여드리면 이 조종기 스틱을 이용해서 근데
07:49
모터의 회전속도를 결정해야 하는데 먼저 왼쪽 수직방향 키가 쓸어 들이 줘
07:55
그래서 이걸 위로 올리면 근데 모터 회전 속도가 똑같이 증가 하구요
07:59
밑으로 내리면 감사합니다 그건 예전에 구현을 해 왔었고 단순히 이 스스로
08:04
트래킹 카
08:05
첨부터 2004 2 의 값에 얼마를 곱해서 enc 씨알의 덜 더 쓰세요
08:11
그래서 그거 부터 다시 한번 보여 드리면
08:19
아 밍 을 하고 쓰로틀 끼 를 조작하는
08:23
4 모터의 회전 속도가 똑같이 증가하거나 감소합니다
08:28
지금 모터의 테이프를 붙여 놨는데 한번 회전속도를 다시 함 보세요
08:33
쓰로틀 키를 증가했던 2 내 몸에서 몸도 가 중간 그리고 스로틀을 길을
08:38
내렸더니
08:39
내 모터 회전 속도가 똑같이 감사합니다
08:43
그리고 이거랑 유사하게 이제 피치 키를 한번 조작해 보겠습니다
08:47
오른쪽 수직방향 의기를 위로 올리면 드론이 앞으로 전진해야 되자 또
08:53
들어오니 앞으로 전진 하려면 앞으로 기울어 줘야 되구요
08:56
그러려면 4 모터 번호로 1 2 3 4번 인데 이 1번 4번 모터가 감소
09:03
해야 되구요
09:04
2번 3번이 증가하면 들어오니 앞으로 기울어지면서 앞으로 전진하게
09:09
될겁니다
09:10
그거 한번 보여 드리면 스로틀 길이 조금 높인 채로
09:14
이제 피치 키를 위로 올려 보겟습니다
09:18
그냥 올렸더니
09:20
1번 4번 모터가 감사했구요 2번 3번이 증가해 점
09:24
반대로 밑으로 내렸더니 이번에는 1번 4번 이 증가하고 2 3번이
09:30
감소했습니다
09:31
이건 마찬가지로 롤 키도 왼쪽으로 조작하면
09:35
이번엔 1번 2번이 감소하고 3번 4번이 증가 있죠
09:40
반대로 오른쪽으로 조작하면 1번 2번이 증가하고 3번 4번이 감소했습니다
09:46
자 이제 마지막으로 요키 를 오른쪽으로 조작을 하면
09:51
이번 사건이 증가하고 1번 3번이 감사하구요
09:55
반대로 왼쪽으로 조작하면
09:59
1 3번이 증가 이 4번이 감소 해줍니다
10:05
이거는 지금 제어 코드가 들어 있는건 아니구요
10:08
예전에 쓰로틀 했던 것처럼 단순히 이 조종기 의 키 값의 얼마를 곱해서
10:14
이 각각 레지스터에 더하거나 - 많은 겁니다
10:17
지금은 자세제어 가 되지는 않는 상태에요
10:20
그것은 pid 제어 할 때 설명 될 거고 지금은 그냥 인해 모터의
10:25
회전속도를 어떻게 조절해야 비행 방향을 결정할 수 있는지를 보여주는
10:30
겁니다 이걸 알아 놔야지 나중에 pid 제어 할 때 부호 이야기가 좀
10:35
쉬울 거에요 그러면 이제 또 센서 회전에 따른 센서가 앞세 구호를 좀
10:40
확인해 보겠습니다
10:42
지금 보시면 그래프를 2개를 출력되는 상태구요
10:45
이 파란색 그래프가 비해 노 080 의 피치 각도 0
10:49
빨간색이 ic 에 미국 및 02 각속도 입니다
10:53
그리고 지금 들어오는 수평으로 낙은 상태고 정지되어 있는 상태니까
10:57
둘 다 이렇게 영이 나오고 있죠 이제 들어 오늘 앞으로 기울였을 때 둘
11:02
다 플러스 방향이 돼야 되는데 한번 확인해보겠습니다
11:05
앞으로 기울이는 순간 에 값을 보시면 되요
11:08
자 지금 0이고 한번 볼 기회가 보겠읍니다
11:12
자 기울였던 2 2 다음 속과 출력이 됐죠
11:15
사실 수평으로 놔두고 다시 한번 앞으로 기울여 보겠습니다
11:19
기울였던 이 파란색 그래프도 음수가 출력 됐고 빨간색 그래프도 음수가
11:24
출력되었습니다
11:26
이제 코드를 좀 바꿔 서로를 출력하게 났구요
11:29
역시 파란색이 비해 노 080 에 롤 각도 고 빨간색이 아이스 이미
11:33
0602 각속도 입니다
11:35
또 드론을 오른쪽으로 기울였을 때 둘 다 플러스 방향이 나와야 되는데
11:39
어떤지 한번 확인해보세요
11:41
기울이는 순간 부어 를 보시면 됩니다 이건 기울여 오고 있습니다
11:45
이렇게 울었던 이 파란색 그래프가 음소 가 주력 됐구요
11:48
빨간색이 양수가 주력했지 요 다시 한번 수평으로 두고 다시 한번
11:53
해보겠습니다
11:55
기울였던 2 파란색이 음수 빨간색이 양수가 출력 됐죠
12:00
근데 아까 피치 같은 경우는 둘다 부가 반대 긴 해도 일치 했었는데
12:05
울 같은 경우는 하나는 플러스 고 하나는 - 이렇게 출력이 됐죠
12:10
그래서 이런 경우가 코드 잘 때가 조금 복잡해 줘
12:13
그래서 일치 화를 해줄려고 이렇게 각각의 부고를 확인하고 있는 겁니다
12:18
그럼 마지막으로 요도 한번 확인해 보겠습니다
12:22
이제 또 코드를 바꿔서 요 의 각도 란 각속도 를 출력하게 꽤 요
12:26
들어오니 시계방향으로 회전 했을 때 플러스 가 돼야 되고
12:30
단식의 일대의 - 가 돼야 되는데 어떤지 한번 확인해 보세요
12:34
그리고요 각도는 지금 영도가 출력되는 게 아니라서 시계방향으로 천천히
12:38
회전시켜 보겠습니다
12:40
그때 이 파란색 그래프가 증가 하는지 혹은 감소 않은지 보시면 되고 또
12:44
이 빨간색 그래프가 양손 지음 손질을 보시면 됩니다
12:48
그러 한번 시계방향으로 천천히 회전시켜 보겠읍니다
12:52
예전 시켰더니 파란색 그래프는 증가하고 있죠
12:55
그리고 빨간색 그래프는 음 소가 출력되었습니다
12:58
다시 원래대로 돌려놓고 다시 한번 확인해 보겠습니다
13:02
천천히 회전시켜 떠니 파란색 그래프는 증가하고 빨간색 그래프는 음수가
13:08
출력 됐죠
13:09
이렇게 충 마다 회전 했을 때 센서 부호가 각각 다르기 때문에 이 부호를
13:15
일치 화 시켜 주는게 좋습니다
13:17
그래서 그 일치와 시키는 것을 있다가 설명드리도록 하겠습니다
13:22
우선 아까도 말씀드렸지만 이번 챕터는 계속 모터를 돌릴 거라서 절대
13:26
프로펠러 느끼지만 안되고요
13:28
또 프로펠러를 않기 더라도 모터가 워낙 빨리 돌기 때문에 모터 돌때
13:33
손대면 다칠 수 있으니까 조심 하시기 바라겠습니다
13:36
이번 챕터에서는 계속 이 경고문구 를 보시게 될겁니다
13:40
강의 처음 시작할 때 이 그림에 대해서 한번 설명을 드렸는데
13:44
비행 제어 의 입 출력에 대해서 설명을 드렸구요
13:48
여기 있는 모든 입출력 은 이미 다 구현이 끝난 상태입니다
13:52
센 서 입력 이랑 그리고 아이 버스 입력도 닭 우연히 됐고
13:56
그리고 모터 구동 않으니 출력시 너도 다 만들어 놓았죠
14:00
이제 이 입력 뜰을 가운데 있는 pid 제어 알고리즘의 넣어주고
14:05
이 알고리즘의 이에 계산된 값을 또 모터 출력으로 넣어주면 됩니다
14:10
제어 주기에 대해서도 설명을 드렸는데 이 pid 제어를 1khz 로 한
14:15
이유가
14:16
자이로센서 갱 주기에 맞춘 거라고 그랬구요
14:19
pwm 출력 은 이 pid 제어 주기보다 빠르면 된다고 했었죠 그래서
14:25
원샷 125 프로토콜을 써서 2킬로 헤르츠 로 출력되게 났습니다
14:30
그래서 나머지는 다 구현이 된 상태고
14:33
이제 마지막으로 이 가운데 있는 pid 제어 만 구현해 주면 끝납니다
14:38
이제 타이머 7번으로 1mm 색을 만들어야 되는데 이미 이 타이머 7번
14:43
2인 밀리 쌕 주기로 인터럽트가 걸리도록 설정이 되어있기 때문에 여기서는
14:48
따로 더 추가해 줄 건 없구요
14:50
예전에 이 인터럽트를 20번 세면 20mm 색 100번 3 면 100
14:55
밀리 색 이런식으로 했었는데
14:57
한 번만 세면 인 밀리 3기 되는 거죠 그래서 지난번 했던 거랑 비슷한
15:02
방식으로 코드를 짤 꺼구요
15:04
이렇게 하면 이 1mm 3 타이머 하나로 여러 개 타이머를 돌린 효과를
15:08
볼 수 있습니다
15:09
근데 아무 때는 이렇게 할 수 있는건 아니구요
15:12
상황에 따라서는 이 방식이 불가능할 수도 있으니까 다른 프로젝트에서 이런
15:17
방식으로 이제 타이머 하나로 여러 개를 돌린 효과를 보시려면
15:21
좀 주의를 하셔야 될 수도 있어요 이제 모터 회전 방향이 좀 중요하니까
15:26
다시 한번 점검을 좀 하도록 하겠습니다
15:30
드론을 이렇게 놓고 봤을 때 왼쪽 위부터 반 시계로 1234 이렇게
15:35
번호를 매겨 났구요
15:37
이중 에 1 3번이 모터 캡이 까만 새기고
15:41
그리고 납땜 할 때 순서가 이렇게 직선으로 가까운 쪽에 납땜이 되어
15:45
있으면 됩니다
15:47
그리고 이번 4번에 모터 캡은 새기고
15:50
이건 납땜 할 때 이 끝에 있는 2 개선이 꼬아 줘서 이렇게 납땜이 돼
15:55
있으면 됩니다
15:56
이 모터 회전 방향 이랑 모터 캡 색깔이 진짜 중요해요
16:00
이게 제대로 안 돼 있으면 모터가 반대로 들과는 혹은
16:04
모터가 돌다가 프로펠러가 빠져나갈 수 있습니다
16:07
그럼 바로 사고가 날수도 있으니까 반드시 이대로 연결 하시구요
16:12
또 모터를 실제로 돌려보면서 회전 방영도 확인해 보시기 바라겠습니다
16:17
1 3번이 시계방향으로 회전 해야 되구요
16:19
그리고 2번 4번이 반시계 방향으로 회전하면 됩니다
16:24
이것도 예전에 한번 설명을 드렸던 건데 역시 다시 한번 점검을 좀 하도록
16:28
하겠습니다
16:30
이 모터 번호 순서대로 fc 케이블을 꽂아 해주면 되구요
16:34
fc 이렇게 놓고 봤을 때 위쪽에 있는 커넥터가 esc 커넥터 9
16:39
왼쪽부터 순서대로 모터 1번 2번 3번 4번 순서로 꽂아주면 됩니다
16:45
역시 이 순서가 제대로 안 돼 있으면 1번 모터가 돌아 야 되는데 이번
16:49
모터가 돌 던가 그럴 겁니다 그러면 또 비행이 내가 원하는대로 안되고
16:54
이상하게 될 수 있으니까
16:55
다시 한번 잘 꽂혀 있는 확인해보시기 바라구요
16:58
그리고 이건 커넥터를 꽂는 방식이라서 헐렁하게 꽂혀 있으면 또 비행하다
17:03
빠질 수도 있으니까
17:05
단단하게 잘 꽂혀 있는 지도 확인을 꼭 해보시기 바랍니다
17:09
근데 이 커넥터는 단단하게 잘 꽂히는 파는것 같은데
17:12
아이의 6기 수신기가 커넥터를 이제 저희가 직접 사서 꽂아야 되는데
17:17
헐렁하게 꽂히는 게 있을 수도 있어요
17:20
그런 커넥터는 거의 비행 중에 빠질 확률이 높기 때문에 그 때가 좀
17:25
주의해야 되고
17:26
그건 페일 세이프 구현을 해 놨는데 이제 그런 상황이 되면 추락을 하겠죠
17:30
그래도 추락하면 뭐 사고가 나거나 혹은 들어오니 4 부서질 수 있으니까
17:34
커넥터가 빠지지 않게 좋은 커넥터를 쓰시는걸 추천드립니다
17:40
비행 제어를 하기 위해서는 먼저 들어오니 어떤 원리로 비행을 하는지를
17:44
알아야 겠죠
17:45
이 수업에서 만드는 드론의 타입은 쿼드콥터 에 회전익 형태입니다
17:50
이 형태는 모터가 4개가 있구요
17:53
이 모터가 드론의 수직방향으로 고정돼 있어서
17:56
모터가 회전하면 들어온 동체 랑 수직 방향으로 힘이 발생합니다
18:00
그래서 이 뜨는 힘을 양력 이라고 하구요
18:04
인해 모터의 양력을 각각 따로따로 조절함으로써 비행 방향을 결정할 수
18:08
있습니다
18:10
그래서 고정이 보다는 비교적 단순한 구조를 가지고 있구요 여기서 고정익
18:14
은 앞으로 날아가는 형태의 비행체를 의미하고
18:17
고 정액은 날개 피치를 조절하면서 양력을 발생시키는 반면에
18:22
회전익 은 단순히 로터의 회전 속도에 의해서 양력과 추력을 발생시킵니다
18:28
또 모터 회전 속도는 이제 우리가 사용하는 이에 쓰시는 pwm 의 펄스
18:33
폭을 이용해서 회전 속도를 조절할 수 있죠
18:36
그래서 결론은 드론의 자세 랑 또 조종기 조장 양에 따라서 내 모터의
18:42
pwm 펄스 폭을 조절함으로써 비행 방향을 결정할 수 있게 됩니다
18:47
드로 4 프로펠러 까지 다 고정을 한 모습이구요
18:51
보시면 프로펠러 앞의 두 개가 주황색 이고 뒤의 두 개가 연두색 2장
18:56
이렇게 하는 이유가 비행을 하다가 들어오니 좀만 멀어지면 앞 께 9분이
19:00
잘 안 되요 그러면 조정의 어려워 지니까 이렇게 프로펠러 색깔로 들어오네
19:05
앞뒤 방향을 확인할 수 있게 하는 겁니다
19:08
프로펠러를 다 같은 색깔로 통일 하시면 안되요
19:11
그리고 모터 회전 방향에 따라서 프로펠러 모양도 다르죠
19:15
이 2개 각각 다른 모양이고 그래서 프로펠러 계실때 방향의 주의해서
19:19
깨져야 됩니다
19:21
근데 지금은 프로펠러는 안길 거구요 여러분들은 제가 끼 라고 할 때까지
19:24
절대 끼시면 안됩니다
19:27
그리고 이렇게 회전이 타입은 모터가 2개씩 쌍으로 같은 방향으로 회전하게
19:32
되어 있구요 또 대각선에 있는 모터 끼리 같은 방향으로 회전합니다
19:37
만약에 이 4개가 다 같은 방향으로 회전하게 된다면 그 반 작용에 의해서
19:42
들어오네요 가 계속 반대방향으로 핑핑 도는 현상이 생깁니다
19:46
그래서 이렇게 둘씩 정방향 역방향 으로 회전하는 거고 그리고 또 마주보는
19:52
모터 끼리 같은 방향인 이유가
19:55
만약에 인접한 모터 끼리 같은 방향으로 회전 한다면 비행 특성이 완전히
20:00
달라져요
20:01
그래서 우리가 원하는 대로 비행이 안됩니다
20:04
이 그림은 나중에 제 여까지 다 끝나고 비행하기 전에 다시 한번
20:07
설명드리겠습니다
20:10
이제 드론을 이렇게 놓고 봤을 때 앞 뒤 좌우 방향이 될 거구요
20:15
왼쪽 위부터 반시계 방향으로 모터 1번 2번 3번 4번 순서입니다
20:22
모터 1 3번이 시계방향으로 회전 하구요
20:25
2 4번 2단 시계 방향으로 회전합니다
20:28
이제 조종기 에 왼쪽 수직방향 키를 이용해서 들어온 상승 또는 하당 을
20:33
제어 할 겁니다
20:35
들어오니 상승 하려면 이드의 모터의 회전 속도가 동일하게 증가 하면
20:39
되구요
20:40
반대로 화강 하려면 또 회전속도가 동일하게 감소하는 됩니다
20:45
근데 이 스로틀 같은 경우는 제어가 아니라서 이 쓰로틀 길을 중간에
20:49
둔다고 해서 공중에 떠서 가만히 멈춰 있는게 아니구요 그냥 단순히
20:54
더해지는 값이라고 보시면 됩니다
20:56
그래서 실제 비행할 때는 이 쓰로틀 키를 급격하게 조작까지 면 안 돼요
21:01
이제 이 오른쪽 스틱을 이용해서 롤 피치 제어를 할 건데 이 오른쪽 스틱
21:06
같은 경우는 중간에 주면 룰 피츠 가 수평을 유지하게 할 겁니다
21:11
그리고 이 수직 방향 키를 조작해서 들어오네 피치를 제외 할거구요
21:15
이 스틱을 위로 조작하면 들어오니 앞으로 전진하게 할 겁니다 그러니
21:20
앞으로 전진 하려면 앞의 두 모터의 회전 속도가 감소하고 요
21:25
뒤에 2 모터 회전 속도가 증가하는 되겠죠 그럼 들어오니 앞으로
21:29
기울어지면서 앞으로 전진하게 될겁니다
21:32
반대로 뒤로 이동하려면 이 스틱을 아래로 내리면 되구요
21:36
이때는 앞의 두 모터가 증가하고 뒤에 2 버터가 감소하면 뒤로 기울어
21:42
지면서 뒤로 이동 하게 되겠죠
21:44
롤도 똑같아요 2 오른쪽 스틱을 왼쪽으로 조작하면 이번엔 오른쪽 두개의
21:50
모터가 증가하고 왼쪽 두 개의 모터가 감소하면서 왼쪽으로 이동하게 될
21:55
거구요
21:56
반대로 이번엔 오른쪽 스틱을 오른쪽으로 조작하는
21:59
이 1번 2번 모터가 증가하고 3번 4번 모터가 감소하면서 오른쪽으로
22:05
이동하게 될 겁니다
22:06
그래서 아 쓰로틀 리랑 몰 피치는 단순한데
22:09
요가 조금 헷갈릴 겁니다 우선 요 제어는 왼쪽 수평 방향 기로 제어를 할
22:15
거구요
22:16
이 스틱을 오른쪽으로 조작하면 요가 시계방향으로 회전 하도록 할 겁니다
22:21
그래서 이렇게 시계방향으로 회전 하려면
22:24
모터가 시계 방향 쪽에 반시계방향 두개가 있는데 그중에 반 시계 방향으로
22:29
도는 이 두 개의 모터를 증가시키고 시계 방향으로 도는 모터를 감소시키면
22:34
됩니다
22:35
제 수업 설명 기준으로 1번 3번이 시계방향 2번 4번이 반시계 방향이
22:41
자 그래서 2번 4번 모터를 증가시키고
22:44
1번 3번 모터를 감소시키면 이 들어온 에는 모터 회전 방향 단 대로
22:50
힘이 작용하면서 시계 방향으로 회전하게 됩니다
22:54
마지막으로 요 를 반 시계방향으로 회전 하려면 반대로 1번 3번 을
22:59
증가시키고 이번 4번을 감소시키면 되요
23:02
그래서 이렇게 가 들어오네 비행 방향을 결정하는 방법입니다
23:07
이제 생각을 좀 해 보시면 만약에 이 들어오네 내 모터가 똑같은 pwm
23:13
을 때 똑같은 속도로 회전하고 또 내 모터가 똑같은 힘을 발생시킨다고
23:17
하면
23:18
즉 완전 이상적인 경우라면 사실은 센서가 없어도 비행을 할 수 있을
23:23
겁니다
23:23
그런데 그렇지가 않죠 예전에 모터 회전속도 비교했을 때도 똑같은 pwm
23:29
을 넣어 줘도 약간 씩 회전속도 달랐고 또 모터 토크도 다를 거고
23:33
프로펠러 도 완전히 100% 똑같을 수가 없기 때문에
23:37
그런걸 보정해 주기 위해서 자이로 나가 속도 같은 센서를 이용해서
23:42
자동으로 제어를 하는 겁니다
23:44
그래서 지금까지 설명드린 이 내용들이
23:46
우선은 모터만 한번 돌려 보도록 하겠습니다
23:50
별로 중요한 건 아니구요 아까 시험때 보여드린 것처럼 제어 없이 그냥
23:54
단순히 모터 회전속도 만 좀 가량 해보는 거죠 그래서 그걸 한번 확인을
23:59
해보고 또 1khz 타이머 만든걸 하고 그 후에 센서 랑 조종기 조작
24:05
방향 일치 원하는 걸 설명드리도록 하겠습니다
24:08
그럼 이제 소스 코드 작업으로 넘어가겠습니다

```

#### video 44
- - Single loop pid control 1/2

{% include youtubePlayer.html id=page.youtubeID444 %}

```diff
00:14
지난 시간에 pid 제어를 위해서 1khz 주기를 만들었어요
00:18
또 센서 회전 부고 랑 조종기 조작 방향을 일치하는 것 까지 구연
00:22
했었습니다
00:24
그리고 단순히 조종기 조작 키 값을 이용해서 모터 한번 회전시켜 봤죠
00:28
그래서 드론이 비행 방향을 결정하기 위해서 어떤 모터를 증가시키고 또
00:33
어떤 모터를 감소시킬 지도 확인 했었습니다
00:36
그래서 이제 비행 제어를 하기 위한 모든 준비가 다 끝났다고 보시면
00:39
되구요
00:40
이제 이번 지금부터 본격적으로 pid 제어에 대해서 설명드리도록
00:44
하겠습니다
00:45
이번 시간에는 싱글 pid 제어 이론을 설명을 드릴 거고 또 코드도 한번
00:50
구현해 볼 겁니다
00:52
2 싱글 pid 는 기본적인 고전 pid 제어 방식이라고 보시면 되고요
00:57
다음시간에 더블 pid 에 대해서 설명 드릴 건데 이 더블 pid 는
01:01
싱글 피하게 변 형 이라고 보시면 되요
01:04
싱글 kid 는 구조가 단순하고 변형이 거의 없는 반면에 더블 pid 는
01:10
상황에 맞게 변형해 사서 이기 때문에 시스템 마다 혹은 구현하는 사람마다
01:15
방식이 조금씩 다 다릅니다
01:17
그래서 이번 시간에 싱글 pig 설명을 드리고 나중에는 더블 pid 로
01:21
바꿀 건데
01:22
먼저 싱글 pad 가 뭔지 알아야 더블 피하지도 그 안 할 수 있는
01:26
거라서
01:27
강의 순서는 싱글 kd 다음에 더 불쾌 아이들은 서로 진행합니다
01:32
이번 시간에는 시원을 보여드릴 게 좀 많은데요
01:35
먼저 dji 들어온 중에 좀 오래되긴 했지만 펜텀 툴을 시 소지 그의
01:40
올려서 1축 자세 제어 성능을 좀 확인해 볼 겁니다
01:44
어떻게 보면 우리가 최종적으로 구현할 드론의 비행 성능을 비교 아고
01:48
벤치마킹 한 거죠
01:50
그 다음에 pid 제어가 아닌 센서 피드백 없이 단순히 조종기 조작으로
01:56
만 한 번 제어를 해보고
01:57
비행 테스트 하는 것도 한번 보여드릴 겁니다 지난 시간에 그랬던 걸로
02:01
한번 비행 테스트를 해보는 거죠
02:04
마지막으로 싱글 pid 제어를 표현한 후에 실제 제어 성능이 어떤지 도
02:09
또 집에 올려서 확인을 해보고 그 상태로 비행을 했을 때 비행이 가능한
02:14
지도 확인을 좀 해볼 예정입니다
02:17
그래서 이번 파트에서는 실험하고 또 비행하는 것을 보여드릴 게 많아서 좀
02:21
재미있을 거에요
02:23
이제 우리가 최종적으로 구현 해야 될 비행 제형의 성능이 어느 정도가
02:28
돼야 되는 잘 모르잖아요 그래서 dji 팬텀 투에 자세제어 성능이 어떤지
02:33
확인을 좀 해보겠습니다
02:35
이게 좀 구식이 어도비 행성은 좋기 때문에 펜텀 툴을 벤치마킹해서 제어
02:40
성능을 우선은 주관적으로 확인을 좀 해보고
02:43
본 수업에서 개발하는 드럼도 그거랑 비슷하게 제어가 되는 걸 목표로 할
02:48
겁니다
02:49
이 영상은 몇 년 전에 찍었던 거구요
02:52
1 쭉 테스트 집에 이렇게 팬텀 틀을 고정시켜 놓고 자세 제어 성능을
02:57
확인해 본 겁니다
02:58
이 빨간색 숫자는 0.1 도 단위로 측정 되는 앵 코더 거치고 요
03:03
즉 이 숫자가 12 돼야 1도가 된거죠
03:06
그리고 밑에 이 초록색 숫자는 무시하셔도 됩니다
03:09
그래서 좀 보시면 수평 유지 하는 것은 이렇게 오차가 일도 보다 작게
03:14
유지가 됐구요
03:16
이렇게 약간 톡톡 쳐 보면서 왜 라는 좀 적었는데
03:20
이 영상은 또 다른 각도에서 증거 고
03:24
이렇게 손으로 툭 툭 쳤을 때 반응을 확인해 받고 이렇게 작은 왜란 이
03:28
들어오면 진동도 없이 다시 원래 위치로 돌아오죠
03:32
그리고 수평 유지한 채로 강제로 이렇게 한쪽을 잡아 당겼을 때 다시 원래
03:36
위치로 돌아오는 방향을 좀 확인해 봤습니다
03:39
그래서 보시다시피 출렁이는 현상은 아예 없구요
03:43
그리고 수평 보다 조금 넘어가는 오버 슈트가 이렇게 한번 발생하고 다시
03:48
원래 위치로 돌아옵니다
03:50
우버 슈트는 딱 한 번만 발생하고 다시 제 위치로 돌아오자
03:53
그래서 지금 이 상황을 대충 그래프로 그려보면 이렇게 될겁니다
03:59
먼저 주황색 그래프가 드론의 목표 각도 구요 목표는 계속 경우도 정
04:04
수평을 유지하는 게 목표고
04:06
그리고 이 파란색 그래프가 들어오네 회전 각도를 나타냅니다
04:10
이 그림은 펜텀 2 에 데이터를 받아볼 수가 없어서 좀 전에 이 영상
04:15
대로 제가 임의로 그림 그림 이구요
04:17
그래서 이 영상이랑 100% 일치하지는 않습니다 이해가 좀 쉬우 시라고
04:21
그림으로 설명을 드린 거예요
04:23
먼저 들어오는 수평을 유지하고 있고 그 때 오차가 거의 0.1 또
04:28
순이었습니다
04:29
그러다가 손으로 몇 번 톡톡 쳤는데 손으로 치는 순간 들어오네 힘이
04:33
가해진 깐 그 영향으로 이렇게 회전을 좀 하겠죠
04:37
왜 라니 좀 들어 온 거고 그 후에 제어 알고리즘에 의해서 원래 위치인
04:41
영도로 돌아갈 텐데 그때 특성을 보시면 펜텀 투는 오버 슈트가 한 번
04:47
발생 하구요
04:48
그 후에 서서히 원래 위치로 돌아옵니다
04:51
그래서 몇 번 반복했는데 그때 특성이다 같았어요 그래서 다시 이때 영상을
04:56
좀 보시면
04:58
손으로 툭 툭 쳤을 때 반대로 넘어갔다가
05:01
그리고 오버 슈트가 발생하고 서서히 원래 위치로 2 나오자
05:06
그리고 이번에는 손으로 쭉 잡아 당겼다가 몇 초 후에 손을 놨을 때
05:11
상황을 그려봤습니다
05:13
잡아 당겼을 때 는 12도 정도 기울여 같구요
05:16
손을 놓는 순간 원래 위치로 돌아오는 데 역시 바로 영도에서 멈추는 건
05:21
아니고 오버 슈트가 한번 발생 했구요
05:23
이때 -7 도 정도의 오버 슈트가 발생했습니다
05:27
그 후에 다시 영도로 천천히 수렴을 하는데
05:30
손을 논 후부터 영도로 수렴 하는데 까지 한 1초 정도의 시간이
05:34
걸렸습니다
05:35
그래서 이 때 영상을 다시 한 번 또 보시면
05:39
손으로 잡아 당겼다가 몇 초 후에 놨더니
05:42
바로 영도에서 멈춘 게 아니고 오버 슈트가 발생하고
05:46
영도로 서서히 돌아오자 같은 패턴을 보이고 있습니다
05:54
이렇게 똑같은 패턴을 보이고 있죠
05:57
그래서 이 펜텀 투에 특징 2 급격하게 반응하지 않습니다
06:02
목표 위치 녕 도로 돌아오는데 서서히 돌아오자 지금 여캐 오버 슈트가
06:07
크게 발생해 도 서서히 돌아온 패턴을 보입니다
06:10
빨리 제 위치로 돌아오면 좋겠지만 급격하게 반응 알수록 제어가 좀 불안해
06:16
지는 경향이 있어요
06:17
너무 빨리 제 위치로 돌아 오다 보면 오버 슈트가 이렇게 한번만 발생한
06:22
게 아니고 여러번 반복적으로 발생한 경우도 있구요
06:25
또는 진동이 심해 질 수도 있습니다 이런 현상이 비행을 더 불안하게
06:30
만드는 요소 고 지금 펜텀 퇴 상황을 봐도 생각보다 빠르게 반응하지 난초
06:35
대신 정확하게 제어가 되고 또 어떤 상황에도 오버 슈트는 한번씩만
06:41
발생합니다
06:42
제어를 부드럽게 하는거예요 그래서 저희도 이런 비슷한 응답을 갖는 제어
06:47
시스템을 만드는 걸 목표로 할 겁니다
06:50
이제 2중 pid 까지 다 끝나고 나서 우리 들어온 도 이렇게 비슷하게
06:55
테스트 한번 해볼 거구요
06:56
다시 그 때 이 영상이랑 비교해보도록 하겠습니다
07:01
이번 시간에는 실험을 좀 할 거라서 저는 이제 보여드려야 되니깐
07:05
프로펠러를 달고 시점을 할건데
07:07
여러분들은 절대 프로펠러의 깨지면 안되고요
07:10
또 모터 돌 때에도 선을 되지만 안됩니다
07:13
그리고 주의를 해도 다칠 위험이 있으니까 이렇게 소동 약이랑 밴드 를
07:18
구비해 주시기 바라겠습니다
07:20
1000원 마트 같은데 가시면 이렇게 구급함 을 팔고 있어요
07:24
이런거 하나 사 2시면 좋을 것 같고 혹시 사고가 난다면 이걸 응급처치를
07:29
좀 하신 후에 꼭 병원에 가서 치료를 받으시기 바라겠습니다
07:33
다치지 않게 꼭 조심하셔야 되요
07:35
이 수업에서는 이론보다 구현 이랑 실습 위주로 설명을 드릴 것 같아요
07:41
유튜브에서 들어온 pid 컨트롤 이렇게 검색을 해보시면
07:45
매틀랩 채널이 하나 나오는데 이 안에 들어가시면 설명이 잘 되어 있는게
07:50
있습니다
07:50
들어가 보시면 들어온 시뮬레이션 n 컨트롤 이란 그리고 언더 스텐딩
07:56
pid 컨트롤 이렇게 두가지 제 토 리얼이 있는데 둘다 그림을 통해서
08:01
쉽게 설명을 해 주니깐 꼭 들어가서 한번씩 보시기 바라겠습니다
08:05
설명은 영어로 되어 있구요 근데 그림으로 설명을 잘 해 주기 때문에
08:09
그림만 보셔도 충분히 이해하실 수 있을 겁니다
08:13
그리고 죽 브로 킹 이라는 유튜버 도 있는데 2분은 아두이노 으로 들어온
08:18
개발하는 영상을 올려 놓았구요
08:20
이 영상에서는 소스코드가 다 공개가 되어 있습니다
08:23
그리고 또 실험하는 영상도 있어서 이 부분이죠
08:27
그래서 pid 제어를 이해하는 데 꽤 도움이 될겁니다
08:30
근데 제 수업에서 설명드리는 내용 이라는 코드가 좀 달라요 그래서 그냥
08:35
이 영상은 참고용으로만 보이기 추천드리고
08:38
제 소스 코드는 이런 설명이 다 끝나고 있다 코드 작성할 때 설명을 드릴
08:42
거예요
08:43
그리고 참고로 2분 영상에서는 고도 제어 랑 gps 제어 까지 설명이
08:48
되어 있습니다
08:49
제 수업에서는 안 다른 부분 점 그래서 그 내용들이 궁금하신 분들은 2분
08:54
채널을 들어가서 한번 보시면 도움이 좀 될 겁니다
08:57
역시 설명은 영어로 되어 있습니다
09:00
이거는 지난번에 한번 설명 드렸던 내용이죠
09:03
다시 또 간단히 설명드리면 쿼드콥터 회전익 은 내 모터가 회전하면서
09:08
발생하는 출력으로 비행할 수 있습니다
09:11
내 모터 중에 어떤 모터 회전 속도를 증가시키고 또는 감소시키는 지에
09:15
따라서 비행 방향을 결정할 수 있죠
09:18
그리고 또 우리가 원하는 대로 모터에 회전 속도를 증가 또는 감소시킬 수
09:22
있습니다
09:24
이대 모터는 드론 에 수직으로 고정이 되어있어서
09:28
역시 힘도 수직 방향으로만 발생시킬 수 있고요 또 모터 회전 속도에
09:32
따라서 드론 에롤 빛이요 의 회전 방향을 결정할 수 있습니다
09:38
울 피치 가 회전하면 들어오니 기울어지면서 그 방향으로 전진하자
09:42
회전 속도는 불식 쌍으로 증가하거나 감소해 야 되구요
09:46
1 3번 모터가 시계 방향 그리고 이 4번 모터가 반 시게루 개선합니다
09:51
내 모터 속도를 똑같이 증가시키면 위로 상승시킬 수 있습니다
09:56
그래서 지난 시간에 단순히 조종 리키 값으로 많은 모터 속도 조절 한번
10:00
해 봤죠
10:02
이제 오픈 루프 컨트롤이 랑 그리고 클로즈드 루프 컨트롤에 대해서 간단히
10:06
설명을 좀 드리겠습니다
10:08
우선 오픈 루프 컨트롤은 측정값을 사용하지 않고 단순히 제어되는
10:13
방식이구요
10:14
예를 들면 길거리에 있는 가로등이 자동으로 켜지거나 빠지지 않아요
10:19
근데 센서가 튼 거 없이 며 씨가 되면 켜지고 며 씨가 되면 꺼져라
10:24
이런 시스템이 오픈 로브 컨트롤의 애가 될 수 있구요
10:27
우리가 지난 시간에 조종기 조작으로 모터를 제가 한 것도 어떻게 보면 이
10:32
오픈 루프 컨트롤 이라고 볼 수 있습니다
10:35
그래서 블럭도 를 보시면 현재 상태를 피드백 하는 내용이 없자 그 반대의
10:41
개념을 클로즈드 루프 컨트롤 이라고 하구요
10:44
만약에 그 가로등이 조도의 따라서 어두워지면 켜지고 밝아지면 꺼지는
10:49
시스템이라면
10:51
조도를 측정하고 그게 제어의 반영이 되기 때문에 그게 클로즈드 루프
10:55
컨트롤의 이해가 될 겁니다
10:58
그래서 이 경우에는 현재의 상태를 측정하는 센서가 있어야 되고 그게
11:03
피드백 되서 제어의 다시 반영됩니다
11:06
pid 제어 도 현재 상태에 의해서 자동으로 제가 되기 때문에
11:10
클로즈드 루프 컨트롤의 속하고 요 pid 제어 외에도 다른 제어 기법들이
11:15
있는데 이렇게 센서를 이용해서 제어 량이 다시 결정되는 모든 제어 방식은
11:20
다 클로즈드 루프 컨트롤 이라고 보시면 됩니다
11:25
그럼 이제 지난 시간에 구현했던 센서티브 100 없이 단순히 조종기
11:29
조작으로 만들어온 비행을 하면 어떻게 되는지 한번 보여드리겠습니다
11:34
조종기 입력 신호가 바로 pwm 신호로 계산이 돼서 모터를 구동하는
11:38
방식이죠
11:39
즉 아예 센서를 사용하지 않는 방식입니다
11:43
현재 이게 우리 수업에서 사용하는 들어 오늘 테스트 지구의 고정시켜 놓은
11:48
모습입니다
11:49
앞으로 코드 작성을 하고 실제 비행을 하기 전에 이 지구에 올려서
11:53
여러가지 테스트를 해볼 예정입니다
11:56
그리고 보시면 프로펠러를 돌려 되기 때문에 이렇게 장갑을 끼고 있죠
12:01
장갑도 두 겹을 긴 상태에요 모터가 워낙 빨리 그렇기 때문에 이렇게 두
12:06
겹을 껴도
12:07
프로펠러의 닿으면 피멍이 들 수 있습니다 그래서 주의를 많이 하셔야 되고
12:11
그리고 테스트할 때는 들어오네 이렇게 손이 가까워 지는 일이 좀 많기
12:15
때문에 꼭 반드시 장갑을 끼시고 테스트를 하셔야 됩니다
12:19
오똑 일파를 입고 있죠 이제 이지 그가 있으면 제어 테스트를 좀 안전하게
12:25
할수 있구요 그리고 개인 차는 것도 좀 빠르게 할 수 있는데
12:28
근데 가운데 이렇게 고정이 되어 있기 때문에 실제 비행 하는 거랑은
12:32
결과가 좀 다를 수 있습니다
12:34
저는 최대한 여기서 수평 제어가 잘 되는지 확인을 해본 후에 실제 비행
12:39
테스트 라는 방식으로 진행할 겁니다
12:41
이직 은은한 충만 테스트할 수 있구요
12:44
롤 피치 쭉 중엔 피치 죽만 테스트 할 겁니다
12:48
네로 리랑 피치는 축가는 거리가 완전히 다르지 않는 이상 거의 비슷해요
12:53
그리고 지금 fc 에는 센서를 이용해서 제거 라는 게 아니고
12:57
지난 시간에 작업해 썼던 이 조종기 조작 키 값으로 만 모터 회전 속도를
13:03
조절하게 되어 있습니다
13:04
이 상태에서 이제 제가 직접 조종기를 조작해서 수평을 잡는 걸 해봤습니다
13:11
먼저 들어온 의 선을 넣었구요 그리고 조종기를 키고
13:14
이제 조종기 조작으로 수평 제어를 시도를 하는 거죠
13:18
아아 밍 을 하고 쓰로틀 좀 높여 구요
13:22
지금은 아예 센서를 사용하지 않기 때문에
13:25
자동으로 수평을 유지하는 기능이 없습니다
13:29
보시면
13:31
센서를 사용 하지 않으니깐 아예 기울어짐 에 따른 반응이 없죠
13:39
그리고 이제 조종기를 조작해서 수평을 유지 를 하려고 하는데
13:43
보시면
13:46
이렇게 수동으로 수평을 잡아 자세를 잡아야 해서
13:51
수평 유지 가 아예 불가능합니다
14:02
4 보시면 아예 수평 유지 가 안되고 계속 앞 뒤로만 왔다갔다 하고 있죠
14:14
이렇게 수평 유지가 안 되고 있습니다
14:19
이 상태에서 한번 비행 시도를 해봤습니다
14:23
이제 여러분들은 절대 따라하시면 안되요
14:26
지금은 제어가 안 돼 있어서 아예 원하는 대로 이동을 시키는 게
14:29
불가능해요
14:30
그래서 그 영상을 한번 보여드리겠습니다 지금 예쁘 시에는 센 서
14:35
사용하는거 없이 단순히 조종 니 키 값으로 만 모터 속도 가 조절되고
14:39
있는 상태입니다
14:40
그리고 이 상태로 비행이 간에 난 지 한번 확인을 해 본 거죠
14:44
이제 조종기 에 뭘 빛이요 는 가만히 두고 쓰로틀 만 높이면
14:49
내 모터의 회전 속도가 똑같이 생각할 테니까 그 절에서 위로 상승을
14:54
하겠죠
14:55
근데 예전에도 확인 했듯이 내 모터 속도 가 100% 또 까지도 않고 또
15:00
자동으로 제어가 안 되기 때문에 왜란 이 발생하면 그거에 반응을 하지
15:04
않습니다
15:05
반응을 할 수가 없어요 그리고 적어도 에서는 특히 바람이 다시 위로 튕겨
15:10
오르는 와류 가 좀 심하기 때문에 왜 라니 엄청 심합니다
15:15
그래서 상태를 좀 봤더니 아 밍 을 하고 쓰로틀 만 높였는데 이렇게 뒤로
15:20
기울어 졌죠
15:22
그리고 몇 번 더 비행 테스트를 해봤습니다
15:30
이렇게 아예 빙 이 불가능 하죠 몇 번 더 테스트를 해봤는데 그냥 두세번
15:35
더 테스트를 해봤는데
15:37
아예 비행이 불가능했습니다
15:48
자다 실패 했죠 그러면 pid 제어 도 없이 이렇게 비행을 시도해 본
15:53
이유가 pad 자가 없으면 아예 비행이 불가능한 지 궁금할 수도 있죠
15:58
지금 받듯이 거의 비행이 불가능 했는데 그렇다고 모든 비행체가 다 그런건
16:03
아닙니다
16:05
지금 저희는 회전이 타입이 자네요 회전익 은 자세 제어를 빠르게 해줘야
16:09
해서 pid 제어가 없으면 거의 비용이 불가능한데
16:13
이렇게 앞으로 날아가는 고정이 타입은
16:16
지금같이 센서가 없어도 수동으로 비행할 수 있습니다
16:20
이 고정 익은 비행체 구조상 날개 디자인 부터가 양력을 고려해서 설계가
16:26
되기 때문에 앞으로 날아가면서 양 나기 발생 0
16:30
앞으로 나라 가기만 하면 비행을 할 수 있단 소립니다
16:33
그래서 날개 피치 조절을 천천 해줘도 비행이 가능합니다
16:38
요새는 고정 이게 돋아 fc 가 들어가서 자세에도 자동으로 제어하는 것
16:42
같은데
16:43
예전에는 fc 없이도 이 고정이 글 비행을 했었어요
16:48
수신기에서 나오는 pwm 씬 오만으로 수동 조정을 한 거죠 그래서 고정익
16:53
은 이렇게 수동 비행이 가능한 데
16:55
회전이 타입은 내 모터의 회전 속도로 만 양력이 발생하기 때문에
17:01
제어를 빠르게 해줘야 호버링 이랑 자세 제가 가능하고요
17:05
사람이 조정하면 빠르게 반응할 수 가 없어서 비행이 거의 불가능합니다
17:10
그렇기 때문에 센서를 이용한 자동 피드백 제어가 필요한 겁니다
17:14
그래서 왜 우리가 만드는 들어오는 이 피드백 제가 필요한지 설명을 드리는
17:18
거예요
17:20
이 피드백 제어 는 좀 전에 그 클로즈드 오브 컨트롤 이랑 같은 의미라고
17:25
보시면 되구요
17:26
이 피드백 제어 는 목표 값 c 랑 현재의 상태를 줄여가면서 목표 의
17:31
수렴 하도록 하는 방식입니다
17:33
제어를 하면서 변경되는 현재 상태를 다시 제어의 반영하는 방식이죠
17:39
그래서 피드백 이란 말이 붙어 있구요 이 피드백 제어 는 반드시 제어에
17:44
의해서 현재의 상태가 변해야 됩니다
17:47
그리고 또 그 현재의 상태를 측정할 수 있는 센서가 있어야겠죠
17:52
들어온 같은 경우는 이제 모터 회전 속도를 조절하면 자세가 바뀌고 요
17:57
그 바뀐 자세를 측정을 하고 그걸 이용해서 다시 모터 회전 속도를
18:02
조절하고 그런 방식입니다
18:04
만약에 자세가 바뀌었는데 모터 회전 속도를 제어하는 게 아니고
18:09
부 저의 주파수를 제 한다던가 아니면 또 자세가 아니고 뭐 온도를 측정
18:14
한다던가
18:15
이렇게 관련 없는 것들을 제어를 하거나 측정을 한다면 제어가 안되겠죠
18:21
그래서 반드시 현재 상태가 변해야 되고 또 현재 상태를 측정할 수 있어야
18:25
됩니다
18:26
그리고 피드백 컨트롤이 랑 조금 다른 개념인 피드 포워드 컨트롤 이란게
18:31
있습니다
18:32
이거는 피드백의 반대의 개념이 라기보다는
18:35
보통 피드 포워드 는 피드백 컨트롤이 랑 같이 사용됩니다
18:40
그래서 시스템이 더 복잡해요 궁금하신분들은 구글에서 한번 피드 포워드
18:45
컨트롤에 대해서 찾아 보시기 바라겠습니다
18:48
이건 좀 전에 잠깐 나왔던 가장 단순한 구조의 피드백 제어 시스템의
18:53
블록도 입니다
18:54
이 그림은 밑에 있는 이 출처 에서 따온 그림 이구요
18:58
좀 쉽게 설명을 드리기 위해서 제가 약간 수정을 가했습니다
19:02
그림을 보시면 신우의 종류들이 다 이렇게 9분이 되어있어요
19:06
이신호 의 의미가 문제 설명 좀 드리면 우선 레퍼런스가 제어의 목표
19:12
값이라고 보시면 되고
19:13
맺어도 밸류가 센서로 측정한 현재 상태라고 생각하시면 됩니다
19:18
그래서 목표 - 현재를 오차로 정의합니다
19:22
이 에러가 제어 알고리즘의 입력으로 들어가고 그 계산에 결과를 제어하지
19:28
도로 사용합니다
19:30
그래서 이 신호로 플랜트를 구동을 하는데 이 플랜트는 제어 신호 로
19:35
구동되는 장치라고 생각하시면 되고
19:37
들어온 에서는 모터가 되겠죠 이 모터가 회전하면 현재 상태가 바뀔 거구요
19:43
그 현재 상태를 측정해서 다시 다음 루프에 오차를 구하는 데 사용됩니다
19:48
그래서 이게 계속 반복되면서 목표에 점점 수렴하게 되는 거죠 이게 가장
19:54
기본적인 피드백 저의 흐름 이구요
19:56
이제 우리가 사용할 롤 피치 각도 제어 를 예로 들면
20:01
조종기 조장 양에 따라서 목표 회전 각도를 설정 한다고 했죠 그리고 bn
20:06
5028 공생 서로 현재 각도를 측정하고 그 둘의 차이를 오차로 정해서
20:12
제어 알고리즘의 입력으로 넣어줍니다
20:15
그러면 이 pid 제어 알고리즘에 의해서 출력 신호가 계산이 되는데 그걸
20:20
실시한 레지스터에 넣어주면 모터에 회전속도가 바뀔 겁니다
20:25
모터 속도 가 바뀌면 또 들어온 자세가 가치 변화 져
20:28
그걸 다시 측정에서 다시 이 계산을 반복합니다
20:31
이게 끝이에요 그럼 이제 이 다른 것은 다 정의가 됐는데
20:36
가운데 있는 이 체어 알고리즘 저희가 아는 게 점
20:39
저희는 가장 흔한 피드백 제어 방식인 pid 제어를 사용할 겁니다
20:45
이제 드디어 pid 제어에 대한 설명이 나옵니다
20:49
여태 앞에서 설명 드렸던 게 다 이 pid 제어 설명 드리려고 했던
20:52
거예요
20:53
pid 제어는 대표적인 피드백 제어 방식 중에 하나구요
20:57
이외에도 다른 제어 방식이 있을 수 있습니다
21:00
pid 제어는 오래된 제어 기법 인데도 구조가 간단하고 성능이 뛰어나서
21:05
제어가 필요한 모든 시스템에 다 사용될 수 있습니다
21:09
블록 또는 이렇게 표시가 되고 수식 은 이렇게 표시할 수 있습니다
21:14
이 pid 제어는 세 개의 항으로 9분이 되구요
21:17
비례의 1인 프로포션 어 레피 적분 아닌 인티 1월에 아니 마지막으로
21:22
미분 하긴 디버 tvt 이렇게 구성됩니다
21:25
이게 다 5 차량관련 있구요
21:28
좀전에 목표에서 현재 값을 뺀 걸 5차 라고 정 햇죠
21:32
2 5 차 크기에 비례 학예제 하는게 피재 오고
21:36
이 오차를 누 적혀 서재응 게 아이 5차 의 변화율 만큼 제 1계 dj
21:41
입니다
21:42
그래서 2호 참한 저희가 되면 모든 걸 다 계산 할 수 있고 이 각각의
21:47
계산 결과를 다 더해서 최종적으로 모터를 제어하는 신호로 사용됩니다
21:53
그래서 이게 고전적인 싱글 pid 방식의 기본 구조 구요
21:57
여기서 아이에서 5차 적분 할 때 그리고 뒤에서 미분 할 때 주의해야
22:03
되는 문제가 각각 이렇게 하시겠습니다
22:05
이건 조금 이따가 설명드리도록 하겠습니다
22:09
이 pid 제어의 각각의 역할은
22:12
먼저 p 제어는 오차의 크기만큼 재량을 결정해서 목표에 수렴하는 속도를
22:17
결정하고 요 아이 제어는
22:20
내피 제어 만하면 목표에 완전히 수렴하지 못하고
22:24
약간의 미세 오차가 발생할 수 있는데 이걸 제거해 준 역할이고
22:28
d 제어는 오차가 너무 빨리 당하면 과도하게 제어가 되면서 제어 자체가
22:33
불안해질 수 있기 때문에
22:35
제동을 걸어 주는 역할을 합니다 그래서 이 세 가지가 합쳐져서 pid
22:40
제어 라고 하구요
22:41
이때 개인 이란 개념이 나오는데 각각 pid 항 의 계산 결과의 얼마만큼
22:48
곱해 주는 상수라고 보시면 됩니다
22:51
근데 이 개인이 pid 제어의 성능이 엄청 큰 영향을 미치기 때문에 이걸
22:56
잘 구해야 되요
22:57
pid 제어의 그래프를 찾아보시면 거의 다 이런 그림들이 나올텐데
23:02
우선 이 그림은 밑에 있는 이 출처 에서 따온 그림이고
23:06
pid 제어 의 응답을 나타낸 그래프 라고 보시면 됩니다
23:11
0 에서 시작해서 목표 값인 일에 수렴하는 과정이 고
23:15
이걸 수학적으로 는 스텝 비슷한 쓰라고 합니다
23:18
그래서 목표가 일이구요 y 축에 단위는 중요하지 않고요 x 축에 단위는
23:24
시간입니다
23:25
즉 시간에 따른 시스템에 응답을 나타낸 거죠 그래서 0에서 시장을 해서
23:32
목표인 일에 수렴을 해야되는데
23:35
pr 이 제안은 이렇게 출렁 거리면서 목표에 수렴 해요
23:38
그리고 또 이렇게 각각의 구간마다 이름이 다 정해져 있습니다
23:43
이건 중요하지 않으니까 그냥 들어보세요
23:46
이제영 에서 시작해서 목표 값의 50% 가 될 때까지 시간을 딜레이
23:52
타임이 라고 하구요
23:52
딜레이 타임 그리고 10% 에서 90% 가 될 때까지 시간을 라이즈
23:58
1tym 이라고 합니다
24:00
그리고 목표 값을 넘어서 위로 한 번 올라가는 현상이 있는데 이걸 오버
24:05
슈트 라고 하고
24:06
이때를 최대 오버 슈트에 이라고 하고 그 때의 시간을 피크타임 이라고
24:12
합니다
24:13
여기 티맥스 라고 되어있는게 피크타임 이에요 그리고 그 후에 이제 이
24:17
몫보다 또 한번 낮아지는 언더 슈트가 발생하고
24:21
다시 또 위로 올라가는데 이 두 번째 오버 슈트를 오버 슈트 비라고
24:26
합니다
24:27
그리고 이렇게 진동을 하다가 진동 폭이 점점 줄어들면서 목표에 수렴하게
24:32
되는데 이 진동 폭이 목표에 플러스 마이너스 5% 안에 들어오는 시간을
24:38
3 플링 타입이라고 합니다
24:41
마지막으로 목표에 완전히 수렴하지 못하고 이렇게 약간 미세 오차가
24:45
발생하는 데 그걸 정상상태 오차 스테이지 스테이트 에러 라고 합니다
24:50
이걸 다 아셔야 되는 건 아니구요
24:52
이제 이 pid 제어를 수학적으로 분석하는 방법 중에 이런 시간들을
24:58
비교하는 방법이 있어요
25:00
그때는 이 개념들을 다 알아야 겠죠 근데 우리는 그렇게 복잡하게 할 건
25:04
아니니까 그냥 이런게 있구나 하고 넘어가시면 됩니다
25:08
그리고 이렇게 수학적으로 모델링 된 시스템을 분석하는 방법이
25:13
지금처럼 입력을 이를 넣었을 때 그 결과를 분석하는 유닛 스텟 미스 판
25:19
쓰란 기법 있구요 또 임펄스 리스판스 라는 기법도 있습니다
25:24
그것은 pid 제어 에서는 잘 안쓰는 것 같은데 개념은 무한대에 크기를
25:29
갖는 신호를 아주 짧게 입력으로 한번 넣었을 때 그때의 응답을 분석한
25:33
방법입니다
25:35
근데 제 수업에서는 그거 다 중요하지 않아요 이런거 다 몰라도 pid
25:39
제어 개념이 워낙 쉽기 때문에 그냥 구현할 수 있습니다
25:43
이제 이 pid 각각 이 의미하는게 뭔지 많이 하시면 되요
25:48
나중에 코드 작성하면서 이 개념이 랑 합쳐지면 금방 이해가 되실겁니다
25:53
이 개념들은 대학에서 제어 관련된 수업을 들으면 다 배우는 내용이구요
25:58
그러면 이런 개념들을 몰라도 제어를 할 수 있는데 이렇게 복잡하게
26:02
개념들을 정해 한 이유가
26:04
얘를 하나 들어서 누가 저보다 어떤 제어 시스템을 먼저 만들었다고 해
26:08
보겠습니다
26:09
저는 이제 그 후에 나중에 만든 거죠 그러면 그 먼저 만든 사람 것보다
26:15
당연히 재 께서 좋아야 될겁니다
26:17
그래서 더 좋게 만들었는데 이제 사람들한테 몇 개 더 좋다라고 증명을
26:22
해야 되는데 증명을 할 수가 없죠 그래서 제어가 더 빠르고 부드럽게 잘
26:27
됩니다 또 아니고 잘 되는 것 같습니다 라고 하겠죠
26:31
그래서 이 때 2 3 플링 타임 이남호 라이즈 타임
26:35
이런 것들이 각각 30% 줄었구요 우버 슈트가 20% 줄었습니다 라고
26:40
하면 뭔가 좀 신뢰성 있어 보입니다
26:43
그래서 이렇게 객관적으로 수치를 통해서 증명을 해야 대형 논문을 쓸 때도
26:48
마찬가지죠
26:49
이런 객관적인 수치가 없으면 논문을 쓸 수가 없어요 그냥 저희처럼 취미로
26:54
개발한 게 되는 거죠
26:56
어떤 제품을 만든다거나 혹은 학술적으로 증명을 하려면 어쩔 수 없이 이런
27:01
개념들을 부여를 해서 각각 수치와 할 수 밖에 없습니다
27:05
그래서 이렇게 복잡해 보이는데 도 각각 을 다 9분해 놓은 이유가 그
27:09
거냐 네 어쨌든 제 수업에서는 이런 개념들 다 모르셔도 구현할 수
27:14
있습니다
27:15
이제 앞으로 이 들어 오늘 지구의 고정해서 pid 개인을 좀 바꿔 가면서
27:20
제어 성능을 비교를 해 볼 건데
27:23
4 문제가 저희가 들어온 세팅할 때 수신기 랑 텔레 매트 립 모두를 다
27:28
들어온 뒤쪽에 설치를 해놔서 뒤가 좀 무겁습니다
27:31
그래서 최대한 배터리를 앞쪽에 배치해서 무게중심을 중간으로 잡아 주시는게
27:36
좋아요
27:37
네 꼭 그렇게 안해도 pid 제어에 의해서 어느정도 중심을 잡기 때문에
27:43
큰 걱정은 안하셔도 됩니다
27:45
너무 이 무게가 한쪽으로만 쏠리지 않게 하시면 되요
27:49
이제 pid 제어의 개념은 충분히 설명 드린 것 같으니깐
27:53
실제로 제어가 어떤식으로 이루어지는지 예를 좀 들면서 설명 중에 있습니다
27:58
먼저 들어오니 수평을 유지하고 있구요 이때 내 모터에 실시할 갑시다
28:02
13,000 이라고 해 보겠습니다
28:04
실 씨알의 범위는 마노 100부터 21,000 까지요
28:08
이때 목표 각도는 영도구 양 또 수평 이니까
28:12
현재 각도도 영도가 되겠죠 그러면 오차는 목표 - 현재 니깐 0이 될
28:18
거고 그러면 씨알의 더하거나 뺄 게 없어요
28:22
목표 랑 현재 랑 같은 상태니까 그냥 지금 상태의 그대로 유지하고 있으면
28:26
될 겁니다
28:27
그래서 내 모터가 다만 3000 을 유지하고 있습니다
28:31
4 그러다가 제가 이 뒤쪽을 좀 잡아 당겨 써요
28:35
4 잡아당겨서 목표는 그대로 0 돈데
28:39
들어오니 뒤로 기울어 지면서 현재 까치 - 20도가 됐습니다
28:43
들어온 뒤로 기울어 지면 - 줘 그러면 다시 원래 미친 영도로 복귀해야
28:48
되는데 그러려면 뒤에 있는 모터를 증가하고 앞에 있는 모터를 감소하면
28:52
될겁니다
28:54
그때 이 5차 의 크기만큼 비례해서 증가 감소 시켜 주는게 잎이 저의
28:59
역할이 자
29:00
이때 오차는 목표 - 현재 니깐 플러스 22 될거고
29:05
e12 랑 값을 뒤에 2 모터에 더해주고 앞의 두 부탁이 빼주면 되는데
29:11
근데 이 20을 그냥 그대로 더 해주면
29:14
22 랑 값인 실시할 전체 범위 안에서 너무 작은 값이 어서 생각만큼
29:19
앞으로 앙 기울어 질 거예요
29:21
아예 앞으로 안갈 수 있습니다 그래서 여기에 개인 이란 걸고 펴줍니다
29:26
이 개인은 상세 어서 계속 곱해 주는 값에 요
29:29
그래서 개인을 50으로 했더니 그 때 잎이 저의 소식에 결과가 천이
29:34
되겠죠
29:35
그 값을 뒤에 2 버터에 더해주고 앞의 두 모터에서 빼주면 됩니다
29:40
이 개인이 너무 크면 앞으로 너무 빨리 길어질 거고
29:44
너무 작으면 아예 앞으로 앙 기울어질 수 있습니다
29:47
그래서 이 개인이 엄청 중요하구요 개인 찾는게 pid 제어 에서 가장 큰
29:52
일이라고 보셔도 되요
29:54
그래서 이렇게 했더니 이제 앞으로 기울기 시작한다 고 해 보겠습니다
29:59
그러면 오차가 점점 작아 질 테니까 제어 수식의 결과도 점점 줄어들
30:03
거고요
30:04
그러다가 목표 랑 일치하게 되면 다시 오차가 0이 되면서 아까처럼 수평이
30:10
유지가 되겠죠
30:11
이게 피해 역할이 구요 그래서 이렇게 보면 p 제어 만 해도 죄가 될 것
30:16
같잖아요
30:17
근데 그게 거의 불가능합니다 특히나 회전이 까치 자세 제어를 빠르게
30:22
해줘야 되는 경우에는
30:23
제어를 빨리 하려면 잎이 개인을 높여야 되는데 도피 개인이 높아질수록
30:28
힘이 쎄 지면서 반대로 넘어가는 오버 슈트가 더 크게 발생해 요
30:33
그게 p 제어의 1개입니다
30:36
그래서 p 제어에 의해서 오차가 계속 바뀌는데
30:40
각도가 너무 빨리 변하면 또 제어가 불안해질 수 있기 때문에 b 제어를
30:44
이용해서 제동을 한다고 했죠
30:46
뒤를 먼저 설명드리고 아이를 그 다음에 설명드리겠습니다
30:51
d 제어는 5차 의 변화를 만큼 반대로 제동을 걸어 준 역할 합니다
30:56
좀전에 - 20도 였다가 이제 영도로 복귀를 하니까
31:00
- 19도 - 18 - 17 16
31:04
이렇게 계속 앞으로 기울어 지기 시작하게 짜
31:07
그래서 처음에는 - 20대 였다가
31:10
다음 pid 제어 루프 해서 - 쉽고도 가 됐다고 하면
31:14
변화 율은 현재 각도 - 이전 각도의 변화 유리 니까 그 시간만큼
31:20
나눠줍니다
31:22
여기서 시간은 pid 제어 의 주기가 되구요
31:25
우리 시스템에서는 1mm 쓰게 되겠죠
31:28
그러면 변화 율은 천이 될거고
31:32
이거 만큼 제동을 걸어 줘야 하니까 이번엔 반대로
31:36
뒤에 모터를 감소시키고 요 앞에 모터를 증가시킵니다
31:40
즉 제동 이기 때문에 피 제어 랑 부호가 반대가 된다는 소리 에요
31:47
그리고 2002 랑 값이 너무 큰거 같아서
31:50
개인을 이번에는 일보다 좀 작게 0.5 를 줬습니다
31:55
이것은 실제 개인은 아니에요 얘를 좀 들어 드린 겁니다
31:59
그래서 이렇게 했더니 앞에 모터가 쪼끔 증가했고 뒤에 모터가 쪼끔
32:04
감소했습니다
32:05
그래서 이게 루프가 반복되면서 변화 유래 크기랑 방향에 따라서 계속
32:11
작동을 하게되는 거죠 그래서 d 가 하는 일이 이렇게 상태가 급격하게
32:16
변하는 제어 가 불안정해질 수 있으니깐 천천히 변화라고 제동을 좀 걸어준
32:21
역할을 하구요
32:23
그래서 오버 슈트가 감소하는 효과가 있습니다
32:26
그리고 왜 란에 좀 강해 지기도 하구요
32:29
근데 d 개인을 이제 너무 크게 져 버리면
32:32
각도가 조금만 변해도 제동을 오히려 너무 크게 걸면서 진동이 더 심해질
32:37
수 있습니다
32:38
그리고 또 생각해 보시면 이 변화 유리 시간 변화 분 의 각도의 변화
32:44
니깐 이 자체가 각속도 가 되구요
32:48
또 icm 2060 이 자이로 센서가 각속도 를 출력해 주니깐
32:53
이 수식을 사용할 필요 없이 자유로의 값을 그냥 그대로 사용하면 됩니다
32:58
그리고 d 제어에서 고려해야 될 게 하나 있다 고 앞에서 설명을 드렸는데
33:03
그게 t 리버 티브 킥 이란 향상 이구요 이 현상은 이 변화율을 구할 때
33:08
지금처럼 각도의 변화 일이 아니고
33:11
5차 의 변화 요 를 사용하면 발생한 현상입니다
33:14
이건 조금 있다가 다시 설명드리겠습니다 그리고 보통 ed 개인은 p
33:19
개인의 2분의 1에서 10분의 1 정도의 크기를 갖습니다
33:24
이제 앞에서 설명드린 이 pd 제어 만 사용해도 어느정도 비니 가능하구요
33:30
i 제어는 앞에 pd 처럼 그렇게 크게 크게 제어하는 용도가 아니고
33:34
미세 오차를 잡는 역할이 라서 아이 제어 의 역할은 조미미 합니다
33:40
우선 제 목표가 연구도구 야
33:42
현재 각도가 - 5도 라고 하면 이것을 더해요
33:47
그리고 거기에 얼마의 개인을 곱해서
33:51
뒤에 모터에 더해주고 앞에 모터에서 빼줍니다
33:55
그러면 앞으로 좀 기울어질 거구요 얼핏 보면 p 랑 좀 비슷해 보이자
34:00
근데 이렇게 해서 조금 더 목표 에 근접했다 고 해 보겠습니다
34:05
그럼 이제 오차가 - 1호 이렇게 줄 겠죠
34:09
그 오차를 이전에 5차 인 - 오랑 또 더합니다
34:14
그러면 - 5 + - 이니깐 - 7 이 되겠죠
34:19
거기에 개인을 또 곱해서 2 제어 량에 더해주고
34:23
이걸 반복합니다 그래서 이 아이 제어는
34:26
지금 우리 들어온 같은 경우는 뒤가 좀 무겁지 않아요
34:31
그러면 똑같은 속도로 모터가 회전하면 뒤가 좀 찾을 겁니다 그걸 p
34:36
제아가 다시 0 우도가 되게 해 줘야 되는데 어느 정도 가까워지면 그
34:40
다음부터는 피해 값이 너무 약해 지면서 모터 회전 속도가 충분히 안나와요
34:46
그러면서 목표 의 수령을 못하게 됩니다 p 제어 만으로 님이 3호 자를
34:51
줄일 수가 없구요 그래서 그때 이 아이 제어를 사용하는 데 그건 이따가
34:55
시 소지 그의 올려서 한번 확인해 보도록 하겠습니다
34:59
근데 또 아이 제어해서 중요한게 아이 제어는 이렇게 오차를 계속 누적
35:03
하다 보니까 그 누적량 이 엄청 커지면 오히려 제어의 더 안좋게
35:08
작용하기도 합니다
35:10
그래서 아이 저의 개인은 또 d 개인 보다도 10분의 1에서 100분의
35:15
1 이렇게 더 작게 사용해요
35:17
근데 그래도 누적 값이 너무 커지는 현상이 생기면 불안해질 수 있습니다
35:21
아까 아이 저서도 고려해야 될 개나 있다고 설명 들었는데 그게 지금 이
35:26
현상입니다
35:27
걸 enter 와인 덕 이라고 하구요
35:30
이걸 해결해 주는 것을 안티 와인더 이라고 합니다
35:35
그럼 이제 d 제어에서 발생하는 디버 티브 킥 이란 현상에 대해서 좀
35:39
설명을 되겠습니다
35:41
이게 정식 학술 용어 인지는 잘 모르겠구요
35:44
그리고 이 그림이랑 수식 은 밑에 있는 이 출처 에서 따온 겁니다
35:48
이제 dj 의 정의가 보통은 5차 의 변화율 이라고 설명을 하는데
35:54
오차의 변화 유리면 현재 5차 - 이정 5차 의 시간을 나눈 게 되겠죠
36:00
근데 만약에 들어오는 가만히 있고 목표 값만 바꾼다고 해보겠습니다
36:06
들어오는 가만히 있으니까 제동을 걸면 안 되겠죠
36:10
2d 제어 의 수직의 결과가 0이 되는데
36:13
근데 이 5차 의 변화율을 사용하면
36:16
들어오는 그대로고 조종기 만 조작을 해도 제동이 걸리기 시작합니다
36:21
그래서 이 그래프를 보시면 이 각자 있는 사각 바가 sp 라고 되어있는데
36:25
이게 목표 값을 의미 하구요
36:28
그리고 이렇게 노이즈 처럼 타 있는게 pv 라고 되어있구요 이게 현재
36:33
값을 의미합니다
36:35
보시면 목표를 향해서 이렇게 가고 있죠
36:38
그리고 밑에 있는 이 그림이
36:40
이 수식의 결과를 나타낸 겁니다
36:44
그래서 보시면 자 목표 값이 그대로 있다가 이 순간 목표를 바꾸죠
36:50
근데 그때 이 제어 량을 보시면 스파이크 같은게 한번 발생합니다
36:56
그리고 또다시 그대로 목표를 유지하다가 다시 목표를 또 바꿨더니 그때
37:01
또다시 스파이가 이렇게 발생하자 그래서 이식을 보시면 이 상태는 그대론데
37:08
목표만 바뀌어도
37:10
이 전체의 결과가 0이 아니게 되면서 이렇게 스파이크 같은게 발생하는
37:15
거예요 이게 그대로 제어의 반영이 되면 우리가 조종기 조작할 때마다 이
37:20
스파이크 같은게 모터 실시 알에 들어가면서
37:24
모터에서 막 드르륵 하는 소리가 날겁니다 그래서 이걸 방지하려면
37:28
5차 의 변화 일이 아닌 각도의 변화 요 를 사용하면 됩니다
37:33
우리는 자이로 의 각속도 를 사용할 거라서 이 문제는 발생하지 않네요
37:38
그래서 그냥 이런게 있구나 하고 넘어가시면 됩니다
37:42
그 다음에 아이 제어에서 발생하는 인티 그럴 와인드업 현상에 대해서
37:47
간단히 설명드리겠습니다
37:48
i 제어가 오차를 누 적한 만큼 제어 량에 반영을 하는 거라서
37:53
누적 값이 커지면 오히려 제어가 더 불안하게 될 수 있어요
37:57
이 그래프는 이해를 돕기 위해서 제가 직접 그린 그림이고 손으로 좀
38:01
그래서 지저분합니다
38:03
현재 랑 목표 랑 일치 하다가 이 순간에 목표 각도를 이렇게 바꿨다고
38:09
해보겠습니다
38:11
이때 pd 제어 만하면 목표 값에 수렴을 하다가 오버 슈트라우스 온더
38:16
슈트가 몇 번 반복해서 발생하고
38:19
이렇게 진동이 생긴 후에 점점 수렴하게 될텐데
38:22
i 제어를 잘못 사용하는 이 부분에 오차도 다 누적이 되면서
38:27
이렇게 오버 슈트도 커지고 3 틀린 타임도 길어 지는 부작용이 생길 수도
38:33
있어요
38:34
그래서 이걸 방지하기 위해서 적절한 시기에 적 품 값을 0으로 초기
38:38
한다던지
38:39
적 품 값에 밍 맥스를 걸어둔다 든지 아니면 특정 시기에만 이렇게 적분
38:45
하는 방법이 있을 수 있습니다
38:47
이건 때에 따라서 자 다르게 사용될 수 있구요
38:51
저는 밍 맥스 정도만 잡을 예정입니다
38:54
이것도 초기와 잘못하고 특정 시계 접근한 것을 잘못하면 더 불안해질 수도
38:59
있어요
39:00
그래서 아이 제어가 사용하기가 조금 까다롭습니다 그래서 그거 때문에 저는
39:04
아예 아이 제어를 사용 안 하기도 합니다
39:08
pid 제어 알고리즘을 좀 정확하게 설계를 하려면
39:12
수학적으로 잡을 해야겠죠 근데 전공 지지가 없이는 그렇게 하기가 거의
39:16
불가능하고 또 그렇게 하려면 시스템을 수시 콰 하는 모델링 이란걸 해야
39:21
되는데 이때 고려 해야 될게 정말 많습니다
39:25
드론의 무게 모터 토크 프로펠러가 발생한 추력 배터리 전압 축가는 거리
39:32
그 외에도 고려해야 할게 정말 많은데 그걸 다 고려하는 것은 대학
39:36
연구실에서 도 불가능할 것 같습니다
39:39
그리고 그렇게 해서 최종적으로 최적의 pid 개인을 9 하는건데 그렇게
39:43
해서 구한 개인이 한번에 잘 동작할 이라는 보장이 없어요
39:47
즉 이론이 랑 실체라는 괴리가 좀 있는 거죠
39:51
이제 본 수업에서는 수학적 모델링 없이 경험적으로 만 찾을 건데 이건 또
39:56
저처럼 들어 오늘 고정을 장비가 없으면 하기가 어렵습니다
40:00
우선 실험하면서 찾기가 너무 위험 하구요 시간도 오래 걸려요
40:04
그래서 저는 그 이유 때문에 지금 를 제작한 거구요
40:08
이제 pid 제어는 위에 있는 이런 것들에 영향을 받을 수 있고 이것들이
40:12
달라지면
40:13
제어 코드가 똑같다고 해도 개인이 달라질 수 있습니다
40:17
근데 저랑 똑같은 하드웨어를 쓰고 개인도 똑같은 걸로 하면 거의 비행
40:22
성능의 차이가 없을까요
40:24
그래서 이 섭 다 끝나면 제가 개인을 알려드린 다 그렇죠
40:28
최대한 우리가 고려할 수 있는건 고려 하는게 좋을텐데
40:31
그래봤자 넌 배터리 좀 앞쪽에 배치해서 무게중심을 가는대로 맞추는 것
40:36
밖에 없을 겁니다 그래도 이 pid 제어는 특히 더 불편 이자는
40:41
성능이 워낙 좋기 때문에 이런 복잡한 과정 아는것 저도 정말 자연 하는
40:46
드론을 만들 수 있습니다
40:48
pid 제어는 개인이 정말 엄청 중요하구요
40:51
그 개 인구 하려고 좀전에 설명드렸던 그런 수학적 모델링을 하고 수식
40:56
계산 하고 그런건데
40:58
우리는 그냥 매뉴얼 튜닝 이라고 하는 단순 실험 으로 개인과 는걸 할
41:03
겁니다 이걸 장점이 수학이 필요하지 않다 라고 있는데 정말 큰 장점이죠
41:08
그리고 온라인 이렇게 되어있는 것은 인터넷으로 하는 그 온라인이 아니고
41:12
여기서 온라인 의미는 실시간으로 할 수 있다는 의미입니다
41:16
즉 실시간으로 개인을 바꾸고 테스트를 하고 또 다시 개인을 바꿔서
41:21
테스트를 하고 그렇게 할 수 있다는 의미 자 그리고 이 외에도 개인 을
41:25
구하는 여러가지 방법들이 존재하는 것 같구요
41:28
그중에 지글러 니콜 스는 많이 알려진 방법이죠
41:32
요 그 외에도 다른 방법들이 있다고 합니다
41:34
궁금하신분들은 위키에서 pid 컨트롤러 로 검색해보시면 2표 확인하실 수
41:39
있을 거에요
41:40
이 표는 그 위키에서 따옴표 입니다
41:44
그럼 이제 실험적인 방법으로 개인 을 구하려면
41:47
대체 pid 개인을 높이고 낮추면 제어 특성이 어떻게 변하는지를 좀
41:51
알아야 개인차는 시간이 적혀 걸리겠죠
41:54
그래서 그걸 정리를 좀 해 놓은 표입니다
41:57
역시 위 끼 에서 따옴표 고향 이 표를 정리하자면 피가 너무 높으면 목표
42:03
에 빠르게 접근 하지만 오버 슈트 랑 언더 슈트가 커지고 많아질 거구요
42:08
반대로 너무 낮으면 아예 목표에 접근도 못할 겁니다
42:12
딘은 너무 높으면 진동이 엄청 심해집니다
42:16
만약에 비행을 했는데 진동이 너무 심하다 싶으면 d 개인을 좀 줄여
42:21
보시면 될까요
42:22
그리고 너무 낮으면 제동 효과가 줄어들 테니 까 왜 라는 약해지게 짜
42:28
아이는 너무 크면 이제 진동이 크게 생길 수 있구요
42:32
잔 증 동의 막 생기는게 아니고 진동이 크게 크게 좀 쓰이고
42:36
아예 발산할 수 있습니다 그리고 아이가 너무 낮으면 미세 오차가 제어가
42:41
안 되겠죠 근데 이 pid 가 전부 독립적으로 동작하면 개인 찾기가 좀
42:47
쉬울텐데
42:48
문제는 비 개인 을 바꾸면 피해 특성도 막 같이 바뀌고 그래요 그래서 p
42:53
개인을 구해 놓고 나중에 d 게인을 추가하면 이전에 구해놓은 p 개인을
42:58
바꿔야 되는 일이 생길 수 있습니다
43:00
이래서 처음 하시는 분들이 개인 찾기가 좀 어렵고 또 저처럼 테스트 지그
43:05
가 없으면 개인 찾기가 어렵습니다
43:09
지금까지 피치 쭉 한 축에 대해서만 설명을 드렸는데
43:13
모리 랑 요 의 개념도 똑같아요 그래서 롤 피치 요 를 각각 이렇게 따로
43:18
따로 계산을 하면 되구요
43:20
그러면 pid 결과가 3개가 나온 거죠
43:24
그 결과를 내 모터의 방향에 맞게 더하고 빼고 해주면 됩니다
43:28
그래서 그거는 코드를 보시면 이해가 엄청 쉬울 거에요 그래서 설명이 좀
43:32
길었는데 이제 설명을 마치고 소스 코드 작성을 하려고 했는데 생각보다
43:37
설명이 너무 길어져 버려서 소스 코드 작성 하는 것은 다음 영상에서
43:41
이어서 설명드리도록 하겠습니다
43:44
그래서 다음 영상에서는 싱글 pid 제어 코드를 작성하고
43:48
드론을 지구의 올려서 그 코드로 한번 어 이제 수평 제가 테스트 한 번
43:53
해 보고요
43:54
마지막으로 비행이 가능한 지도 한번 실제 비행 실험도 해 보도록
43:58
하겠습니다
43:59
그러면 이번 싱글 pid 제어 설명은 이렇게 마치겠습니다 감사합니다

```

#### video 45
- Single loop pid control 2/2

{% include youtubePlayer.html id=page.youtubeID45 %}

```diff
00:14
지난 시간에 싱글 pid 로 롤 피치 각도 제어 하는 코드를 구현을
00:18
했었고 그대로 비행 테스트 도 한번 해봤습니다
00:21
근데 이 싱글 pid 가 회전이 까치 빠른 제어가 필요한 시스템에서는
00:25
제어 성능이 그렇게 좋지는 않았죠
00:28
제어가 타이트하게 돼야 되는데 그렇지 못하고 헐렁하게 제어되는
00:32
느낌이었구요
00:33
특히 저희 들어오는 뒤가 무거워서 계속 뒤로 쳐지는 현상이 있는데
00:37
싱글 pid 만으로는 이 현상을 해결할 수가 없었습니다 그래서 비행을
00:42
하려면 피치 키를 계속 앞으로 밀고 있어야지
00:45
수평 유지가 가능 했었어요 이번 시간에는 이 문제를 해결하기 위해서
00:50
더블 pid 제어 방식으로 바꿀 건데 그 전에 지금은 각도 제어 방식을
00:55
썼었는데
00:56
만약에 각도가 아닌 각 속도 제어를 한다면 어떻게 되는지 랑 또 더블
01:01
pid 가 어떤 구조로 이루어져 있고 이걸 사용하면 뭐가 좋은지를
01:06
설명드릴 예정입니다
01:07
그리고 실제 구현을 해 보고 또 지구의 올려서 실험도 해 보도록
01:11
하겠습니다
01:12
그래서 이번 시간에 설명들을 방식이 최종적으로 우리가 사용할 방식이 될
01:16
거구요
01:17
제 어코드는 제가 따로 드린다 고 그랬는데 그 내용을 이번 챕터
01:21
마지막에서 설명을 드려 그랬는데
01:24
분량이 그렇게 까지 할 필요는 없을것 같아서 다음 시간에 실제 제어 코드
01:28
작성을 하면서 설명드리도록 하겠습니다
01:30
그래서 이번 영상이 이번 챕터의 마지막 영상이 될 것 같습니다
01:35
그리고 이 더블 pid 방식이 사용하는 사람마다 조금씩 다를 수 있으니까
01:40
제 강의가 정답이다 이런게 아니고 저는 이렇게 사용을 했고 그랬더니
01:45
이렇게 비행이 됐습니다 라고 이해하시면 될 것 같습니다
01:49
그리고 이번 시간에는 설명을 좀 드리고 구현을 하고 그리고 다시
01:53
설명드리고 부연 하고 이런 식으로 진행할 예정입니다
01:57
그럼 먼저 이번 시간에 구현할 더블 pid 제어 영상부터 확인해보겠습니다
02:04
지금 드러내는 이번 시간에 구현할 더블 pid 제어 코드가 들어가 있는
02:08
상태구요
02:09
이제 더블 pid 제어의 성능이 어떤지 지구의 올려서 확인해봤습니다
02:15
커넥트 를 하고 들어온 의 전원을 넣었더니
02:18
현재의 들어온 에 저장된 게임 2 ccs 의 소식이 되고 그 개념이
02:23
이렇게 표식을 했죠
02:25
이제 내부 외부 pid 제어를 다 사용하기 때문에 피치의 6 개개인이 다
02:30
0이 아닙니다
02:32
6 개개인을 다 사용하는 거에요 그리고 아이 제어도 사용을 하고 있는데
02:36
지난 시간에 했던 각도 제어 싱글 피아 에 대해서는 이 뒤가 너무 쳐져
02:41
있어서 아이 제어가 우리가 원하는 대로 잘 동작하지 않았죠
02:45
이제 더블 pid 로 바꿨더니 제어 성능이 어떻게 바뀌었는지 그래프를
02:50
통해서 확인을 좀 해봤습니다
02:52
굉장히 제조 전기도 키고 그리고 그래프 탭에서 피치 랑 3 포인트를
02:58
출력을 하구요
03:01
그리고 피츠 키를 조작하면 빨간색 그래프가 바뀌는데 이게 목표 각도가
03:06
되는거고
03:08
잘 변하고 있죠
03:11
그리고 드론을 앞뒤로 기울이면 파란색 그래프가 변하는데 이게 피치
03:15
각도입니다
03:17
그래서 지금 출력하는 것은 지난 시간 했던건 같아요
03:20
목표 각도 랑 현재 각도를 출력하고 인상됩니다
03:24
이제 아 밍 을 하고 쓰로틀 좀 높이면 제어가 시작되는데
03:28
지난 시간에 싱글 pid 에서는 목표 각도로 아예 접근을 못 햇죠
03:32
근데 더블 pid 는 제어가 시작되면 어떻게 반응하는지 한번 보세요
03:40
아 밍 을 하고 이제 스로틀을 조금 높였던 이
03:45
제어가 시작되자 마자 바로 목표 각도 n 수렴 하자
03:49
싱글패 d 는 이 뒤가 무거워서 아예 목표 각도 인 영도에 접근을
03:53
못했는데
03:55
근데 더블 pid 를 사용하면 이렇게 오버 슈트도 없이 신속하게 목표
04:00
각도 로 접근할 수 있습니다
04:02
싱글 피해액 이란 성능차이가 진짜 어마어마 하죠
04:06
그리고 목표 각도의 얼마나 잘 수렴하고 있는지 그래프 줌을 당겨 와서
04:11
확인을 좀 해봤는데
04:14
지금은 아이 제어 까지 동작하고 있어서 목표 각도 인 영도에 점점
04:18
수렴하고 있죠 자 이정도면 미세 후 차라고 볼 수 있을것 같고
04:22
아니 제어가 금이 3호 차를 점점 줄어가고 있는 상태입니다
04:27
그래서 오차가 0.5 2 보다 작게 유지하고 있어요
04:31
현재가 c 그래프 줌 아웃을 하고
04:42
굉장히 조종기를 조작해서 목표 각도를 좀 바꿔봤습니다
04:47
그러면 들어온 도그 목표 각도 를 따라 가야겠죠
04:50
그래서 파란색 그래프가 빨간색 그래프를 따라 다니면 됩니다
04:55
이렇게 천천히 조정이 를 조작해 떠니 거의 일치 하다시피 목표를 추정하고
05:00
있죠
05:01
그리고 이때는 목표 각도를 30도 이렇게 조작을 했는데 이 지구에 막혀서
05:06
드론이 앞으로 더 못 기울어지고 있는 상태입니다
05:10
이때 이 오차가 아 이제 여기서 누적이 되면서
05:14
그 다음 목표 각도를 이렇게 낮춰 쓸 때 약간의 시간 지연이 생겼습니다
05:19
i 제어가 잘 동작하고 있다고 보시면 되고 이렇게 오차가 발생하는 시간이
05:25
길어질수록 그 누적 값도 커지기 때문에 그만큼 그 뒤에 이렇게 반응하는
05:30
시간에 더 많은 시간 지연이 생길 수 있습니다
05:33
그리고 뒤로 기울여 쓸때도
05:36
이렇게 목표 각도를 잘 추정하고 있죠 그래서 이렇게 보면 거의 뒤로
05:41
쳐지는 현상이 없어 보여요
05:45
그리고 손가락으로 톡톡 쳐 봤는데 이게 급격한 메란 이 짧게 들어갔을 때
05:49
라고 보시면 되고
05:51
보시다시피 0.1 초 0.2 초 만에 원래 위치로 돌아오자
05:56
되게 빠른 시간에 복귀를 하는 데도 진동이 거의 없습니다
06:00
펜텀 투 확인했을 때도 이런 비슷한 패턴을 보여 썼죠
06:04
오버 슈트가 딱 한 번 발생하고 원래 위치로 복귀 했었는데
06:08
우리 들어온 도 펜텀 투 랑 비슷하게 동작하는 것 같습니다
06:14
그리고 잡아당겼다 감았을 때 이 때는 왜 라니 길게 들어왔을 때 라고
06:18
보시면 되구요
06:20
이때도 진동 거의 없고 오버 슈트가 이렇게 한번 발생하고 서서히 원래
06:26
위치로 돌아오자
06:28
역시 펜텀 투 랑 비슷한 패턴을 보이긴 하는데
06:31
근데 좀 더 천천히 복귀하는 것 같습니다
06:34
이게 아이 개인이 좀 커서 그럴 수도 있구요 또 아이 누적 값에 링
06:39
맥스를 잡아주는게 통상적인 데 지금 이 드러내는 그 기능이 없어요
06:43
나중에는 답변 할 겁니다 어쨌든 지금 이 상대도 제어가 빠르고 부드럽게
06:49
되고 있죠
06:51
그래서 이렇게 하고 다시 그래프 주물 좀 담겨 봤는데 그렇게 외란 이 좀
06:56
있었어도
06:57
역시 목표 각도의 잘 수렴하고 있습니다
07:00
그래서 이 상대로 비행 테스트를 한번 해봤습니다
07:05
자아 밍 을 하고 쓰로틀 높이면 이제 제어가 시작이 되죠
07:11
근데 더블 pid 는 조금 주의하셔야 할게
07:14
셀프레벨링 모드에서는 이렇게 평평한 곳에서 비행을 시작하는 괜찮은데
07:19
바닥이 좀 기울어졌다 던가 해서 드론의 자세에도 기울어진 상태에서 비행을
07:23
시작하면
07:24
제어가 시작되자 마자 바로 수평으로 확정되기 때문에 근처에 사람이 있으면
07:29
위험 할 수 있습니다
07:31
그래서 나중에 더 한번 말씀 드리기 나겠지만 모터 암 잉 하고 이륙할
07:35
때는 반드시 사람이랑은 적어도 3m 정도는 떨어진 곳에서 비행을
07:40
시작하셔야 되요
07:42
보시면 엄청 안정적이고 부드러운 비행이 되고 있습니다
07:46
싱글 ti 이라는 확실히 비행 성능이 다른 게 보이자
07:50
싱글 켈리는 제가 좀 헐렁하게 되는 느낌이었고
07:54
출렁 된 형성도 좀 심했는데 법을 페이지로 바꿨던 힘들긴 없이 소탕을 잘
07:59
유지하고 있습니다
08:01
그리고 뒤가 무거워서 처지는 것을 싱글 ti d5 했을 때는 수평 유지
08:05
하려면 제가 피치 키를 계속 아프고 누르고 있어야 되는데 이 법을 pid
08:10
는 뒤로 처지는 걸 pid 제어가 잡아주기 때문에
08:13
피치를 중립으로 덧 5유로 처지는 현상이 거의 없습니다
08:17
이렇게 좌우 고아 피로도 이동을 좀 시켜 봤구요
08:21
지금은 요새 형아 들어가 있는 상태여서 누가 회전하지 않고 한 방향을
08:25
계속 보고 있잖아 요 제가 없으면 누가 혼자 막 그래 그러면 위험하니까
08:30
는 절대로 지금은 프로펠러를 달고 갱 하시면 안됩니다
08:42
스팸을 잘 유지하고 있구요
08:51
이거는 제가 요 를 한번 회전시켜 본다고
08:54
요가 회전 하니까 이렇게 조종을 제가 잘못해서 들어오니 좀 같이
08:59
흔들거리고 있죠 이게 제어가 잘 안되는게 아니고 제가 조정을 못하고 있는
09:04
겁니다
09:06
그래서 제어가 잘 되는 거랑 조종을 잘 하는 것은 별개 니깐
09:10
시뮬레이터로 충분히 연습을 좀 하시라고 그렇죠
09:13
조종을 잘못하면 위험한 상황이 발생할 수 있으니까
09:16
틈틈이 시간이 되는대로 시뮬레이터로 연정을 좀 하시길 바라겠습니다
09:23
이번 시간에는 이렇게 부드러운 비행이 되도록 더블 pid 제어 이렇게 해
09:27
보겟습니다
09:30
역시 이번 시간에도 절대 프로펠러는 끼지 마시구요
09:34
모터 돌 때도 손대지 마시고 특히 더블 pad 를 하면 이게 제어의
09:38
특성상 모터가 갑자기 급격하게 더운 일이 많이 생길 수도 있습니다
09:43
그니깐 특히 더 안전사고에 유의 해서 따라 하시기 바라겠습니다
09:48
우선 싱글 pid 제어를 했을 때 무슨 문제가 있었는지 다시 한번
09:52
설명드리겠습니다
09:54
우리 들어오는 뒤가 무거워서 계속 처지는 현상이 발생 했잖아요 그래서
09:58
목표 각도를 영도로 해도 이렇게 영도에 수렴하지 못하고 - 20도 정도가
10:04
계속 쳤습니다
10:06
이렇게 처지는 걸 p 제어가 잡아 줘야 되는데 그러려면 p 개인을 높여야
10:11
되구요
10:11
pda 를 높였던 이 영도로 접근했지만 되신 오버 슈트 랑 언더 슈트가
10:17
엄청 커졌고
10:18
심한 경우에는 아예 발산 했었습니다 그래서 또 그 현상을 막으려고 d
10:23
개인을 높이면
10:25
작은 진동이 심해지면서 비행이 거의 불가능 있었죠 그래서 이번에는 이
10:30
오차를 아이 제어로 잡아 보려고 했더니 오차가 너무 커서 아이 제어로 는
10:36
제거가 어려웠습니다
10:38
그래서 pid 개인을 다 엄청 낮춰서 비행 성공했는데
10:43
개인이 낮기 때문에 제어가 제대로 안되고 계속 출렁출렁 되면서 좀
10:48
불안하게 비행을 했었죠
10:50
d 게인이 낮아서 왜란 해도 반응이 거의 없었구요
10:53
또 pda 도 낮아서 조종기 조작을 해도 바로바로 반응하지 않았습니다
10:58
그래서 제가 좀 헐렁하게 되는 느낌이 얻자
11:00
그래서 이런 한계를 때문에 빠르고 부드러운 제어를 하기 위해서는 새로운
11:05
제어 개념이 필요해 지기 시작한 겁니다
11:09
지난시간 햇던 각도 제어 징글 캐디는 이런 구조를 가지고 있었죠
11:14
목표 각도 해서 현재 각도를 된걸 오차로 정 했구요
11:18
목표 각도는 조종기 조작의 따라서 사용자가 바꿀 수 있는 값이고
11:22
현재 각도는 bn 5080 센서에서 측정된 회전각 또 였습니다
11:28
이 오차를 이용해서 pid 제어 했었는데
11:30
이중에 d 제어는 5차 대신 자이로 센서의 각 속도 값을 사용 했었죠
11:36
그렇게 계산된 결과를 다 더해서 모터에 넣어 줬더니 제어가 됐었습니다
11:42
제어가 되면 각도가 변하니까 그걸 이용해서 반복적으로 제어 알고리즘 2
11:47
동작 했었죠
11:49
이때 pid 각각의 역할을 좀 생각해 보시면 피는 목표 각도로 신속하게
11:55
수렴 하도록 하는 역할이 얻고
11:57
d 는 그렇게 신속하게 변하면 오버 쇼트가 커지니까
12:02
그걸 방지하기 위해서 각속도 에 반대 방향으로 제동을 걸어 주는 역할이
12:06
얻습니다
12:07
그리고 아이는 미세 오차를 제거하는 역할이 얻고 p 랑 d 제어의 비해서
12:12
역할이 그렇게 크지는 않습니다
12:14
제어 량도 아주 작아요 이제 생각을 좀 해 보시면 이렇게 뒤가 계속
12:20
처지는 데 이걸 해결하려면 p 개인을 키워야 되죠 그리고 또 p 제어는
12:25
제어 의 전체적인 반응속도 에도 관련 했습니다
12:30
목표 값으로 빨리 수렴을 하고 또 안정적으로 수렴을 하는게 제어 성능의
12:35
기본이 되는데
12:36
빨리 수렴하게 하려면 잎이 개인을 키워야 되요
12:40
그래서 p 개인을 키우면 문제는 이 각도 제어 싱글 pid 방식은 p
12:45
제어가 목표 각도로 도달할 때까지의 제어 방연이 항상 플러스 방입니다
12:52
현재 각도가 이렇게 기울어져 있고
12:55
영도가 목표다 라고 한다면 p 제어는 이 목표로 도달하는 그 과정에서
13:01
이게 빠르게 접근 하든 천천히 접근하던 그것의 상관없지
13:05
항상 플러스 방향으로 제가 됩니다 목표 - 현재 각도로 제어를 하니까
13:09
상상플러스 가 되겠죠
13:11
그리고 빠르게 접근하면 그만큼 오버 슈트가 날 테니까
13:15
그걸 d 제어가 잡아 줘야 되는데 d 개인이 크면 진동을 발생시키기
13:19
때문에 우리가 원하는 제동 효과를 볼 수가 없어요
13:23
p 개인을 키워서 목표 각도로 수렴하게 했더니 이렇게 목표를 기준으로 위
13:29
아래로 진동이 발생 했구요
13:31
이걸 잡으려고 d 개인을 키우면 이렇게 작은 진동이 계속 생겨 썼죠
13:37
그래서 이제 이런 생각이 들기 시작했습니다
13:41
지금은 각도 제어 를 하는데 p 개인을 높이면 속도가 빠르게 간 하잖아요
13:46
근데 그 속도가 너무 크면 오버 슈트도 그만큼 커지게 되니까 그 속도를
13:51
제외 하면 어떨까라는 생각이 든 겁니다
13:54
이것은 예전에 제가 실제로 고민 했었던 것들이고 요
13:58
싱글 pid 로 각도 제어 가 너무 안 되니까
14:01
각 속도를 제어하는 방법이 없나 고민을 해본 거에요 그래서 각도 제어 가
14:06
아닌 각 속도제어 에 대해서 생각을 해봤습니다
14:10
이제 각도가 아닌 각 속도를 제외한다면 그때 pid 각각의 역할이 어떻게
14:16
되냐면 p 제어는 목표 각 속도로 수렴하게 하는 역할이 될 거구요
14:22
d 는 이제 각 속도의 변화가 되니까
14:25
각 가 속도에 따른 제동을 하겠죠
14:28
이제 가속도의 대한 개념이 나오면 살짝 생소하죠
14:31
감이 잘 안옵니다 가속도의 디제 의 역할은
14:36
가속이 붙으면 이제 드론이 너무 빨리 회전을 하게 되니깐 속도가 천천히
14:41
변하도록 하는 역할이라고 보시면 됩니다
14:44
i 제어는 목표 속도가 유지가 안되면 그 속도를 유지하도록 미세 우 차
14:49
를 제거 하는 역할이 장
14:51
그래서 각도 재앙에서 각도 대신 각 속도가 되는거고
14:55
각 속도 대신 각 가속도가 되는 거죠
14:59
즉 결론은 각 속도로 제어를 하면 목표 각 속도를 유지하면서 회전하기
15:04
때문에 우리가 원하는 속도로 회전하도록 부드럽게 제어할 수 있을 것
15:09
같습니다
15:10
속도가 막 빨리 변하면 진동도 심해지고 제어가 불안해 질 텐데
15:15
각 속도를 제외하면 그런 현상이 없어지는 거죠
15:18
이전에는 p 개인이 낮아서 뒤가 처지면서 목표 각도의 수량을 못 했었는데
15:23
각 속도로 제외하면 p 개인을 높여도 부드럽게 제어가 될 것 같습니다
15:29
그래서 이게 각 속도 제어를 할 때 구조입니다
15:33
역시 오차를 정해야 되는데 각 속도제어 니까 목표 각속도 - 현재 각
15:39
속도를 오차로 정하는 되겠죠
15:42
그러면 또 이 목표 각 속도를 어떻게 장애 하느냐
15:45
역시 조종기 조작으로 바꿀 수 있게 될 꺼구요
15:49
이전에 했던 거랑 똑같이 스틱을 중간 해두면 목표 각 속도를 0으로 하고
15:54
위아래로 조작하면 최대 플러스 - 50도 가 되도록 할 겁니다
15:59
근데 각 속도 니깐 단위는 d 그리퍼 세계 되겠죠
16:03
즉 피츠 키를 맨 위로 올리면 1초에 50도 회전하는 속도로 들어오니
16:08
기울어 질 겁니다
16:10
그리고 현재 각속도 는 icm 2060 이 자의로 값을 사용하면 될 것
16:16
같습니다
16:17
그렇게 해서 오차를 계산 하고 또 pid 계산 하구요
16:21
그 결과로 모터를 구동시키는 되겠죠
16:24
그러면 또 부터 가 회전하면서 각도 랑 각 속도가 바뀔거 고 다시 이
16:29
pid 루프가 반복되면서 제어가 될겁니다
16:33
이 방식은 아직 더블 pid 는 아니구요
16:36
싱글 pid 인데 각도 제어 가 아닌 각 속도로 제가 를 하는 거죠 그럼
16:42
우선 이렇게 했을때 코드가 어떻게 되고 또 어떻게 동작하는지 집에 올려서
16:47
확인을 해보고 그 후에 왜 더블 pid 방식을 써야 되는 지를
16:51
설명드리겠습니다
16:52
그럼 먼저 소스 코드 작업을 한 후에 이어서 설명드리겠습니다
16:58
먼저 지난 시간에 작업했던 10가지 이 폴더를 복사 하시구요
17:03
이번 시간에는 싶다 c 3 점
17:07
더블 tid
17:10
컨트롤 테스트 라고 하겠습니다
17:13
그리고 풀다 일은 복사 지구요
17:16
원의 들어와서 ioc 파일 이름 바꿔 주시고
17:19
이거 두개 삭제하시고 됐으면 큐브 아이디를 생식 했습니다
17:26
실행이 됐으면 열려있는 프로젝트 있으면 닫아 주시구요
17:29
좀전에 복사한 플래너를 임포트 하겠습니다
17:41
역시 큐브 mx 로 설정할 건 없으니까 또 바로 메인 점 c 파일을
17:44
열어보겠습니다
17:46
알렸으면 바로 지난 시간에 작성 했었던 싱글 pid 제어 코드 작성했던
17:52
부분으로 가고 있습니다
17:53
이 부분이죠 먼저 지난 시간에 작성했던 내용을 다시 한번 간단히
17:58
설명드리면 각도 제어 에서 목표 각도를 조종기 키 값으로 설정한
18:03
부분이었고
18:04
이렇게 하면 최대 플러스 - 52 되는 거죠 그래서 그 목표 각도가 이
18:08
레퍼런스 형제 저장이 될 거에요
18:10
그 후에 오차를 정했는데 목표 각도 - 현재 각도를 5 처로 정했습니다
18:16
그 다음에 이 오차의 p 개인 을 곱한 걸 p0 정 햇죠
18:22
라마이 제안은 이 5차 의 루프 타임 인 0.00 2를 곱한 걸 누적
18:27
그래서 이 변수에 저장한 후에
18:30
그리고 이 변수에 아이 개인 을 곱한 걸 아 이제 로 정했습니다
18:35
이제 d 쌓아 밍 하거나 제어가 되고 있지 않을 때는 누적 값을 0으로
18:39
초기 하시겠죠
18:41
마지막으로 d 제어는 각도의 변화 일로 제어를 하는데 그게 곧 각 속도가
18:45
되니깐
18:46
이렇게 수식을 사용해서 계산하지 않고 바로 자의로 값을 각속도 를
18:51
사용했습니다
18:52
그래서 이 각 속도의 d 개인 을 곱한 결과로 제동을 걸어 줘야 되니까
18:57
앞에 부호를 마이너스를 붙혀 짱 이렇게 해서 pid 가 다 정의가 됐고
19:03
그걸 다 더한 결과를 최종 모터 제어 하는 데 사용했습니다
19:09
그래서 이 코드가 피츠 축 각도 제어 싱글 pid 를 사용한 방식이
19:14
였구요
19:15
이번에는 각도 제어 가 아닌 각 속도를 제어하는 방법으로 코드를 다시 짜
19:19
보겠읍니다
19:20
그럼 이 각도 제어 부분은 우선 주석으로 맞구요
19:24
이 밑에 새롭게 코드 를 작성하겠습니다
19:28
먼저 지난번 각도 제어 할 때랑 똑같이 조종기 값으로 목표 각 속도를
19:33
설정할 건데 그 목표 각속도 를 저장할 변수를 피치 연가 바 레퍼런스
19:39
라고 하고요
19:41
그리고 이번에는 각 속도의 의미로 이 사이에
19:45
레이트 라는 이름을 붙이게 씁니다
19:48
역시 최대 플러스 마이너스 50이 되도록 할꺼니까
19:52
위에서 작성한 이 내용을 그대로 쓰면 될 것 같습니다 그래서 이 부분
19:55
복사해서 붙혀넣기 하겠습니다
19:58
이게 단위는 중요하진 않아요 값이 플러스 - 52 다가 중요한 거고
20:04
이걸 목표 각도 로 쓰면 단위가 도가 되는거고
20:08
목표 각 속도로 쓰면 d 그리퍼 3기 되는 거죠
20:12
이렇게 해서 목표 각 속도를 정 했구요
20:16
그 다음에 5차 정의는 또 역시 변수 이름을 피치 없나 강 레이트 언더
20:22
랑 에러 라고 하고
20:25
오차는 목표 - 현재 각 속도가 될 테니까
20:29
목표는 위에서 계산한 이 변수가 될 거고 그리고 현재 각속도 는 이제
20:35
bn 5080 이 아닌 icm 2060 이 자이로 값을 쓰면 될 겁니다
20:41
그래서 icm 2060 님
20:45
피치 축은 자이로 x 정
20:48
그래서 이걸 선택하면 되겠죠
20:51
이렇게 해서 오차도 정도 했구요
20:54
이제 p 제어는 이 오차의 p 개인 을 곱해 주면 되겠죠
20:59
그래서 급히 제어 의 결과를 저장할 변수를
21:02
빛이 언더 라 베이프 응답 앞이라고 하고 이 오차의 토픽 애인 을 곱하면
21:09
되는데 역시 츠 cs 에서 바꿀수 짧아 니깐 지난 시간에는 피치 아웃
21:16
kp 이라는 변수를 사용 했는데 이번 시간에는
21:21
아웃이 아닌 인 을 사용하도록 하겠습니다
21:25
이렇게 하면 되겠죠 이렇게 하면 쥬시 스에서 피치 내 구피 개인을 바꾸면
21:31
그 값이 여기에 저장이 될 겁니다
21:34
이렇게 해서 피해자가 끝났고 그 다음 아이 제어도 밑에서 작성해
21:38
보겠습니다
21:39
이제 아이 제어는 오차를 누적 해야 되니까 그 누적하여 변수를 피치
21:44
엠버가 레이 펀드가 에러
21:47
이런 다 봤어 미 라고 하구요 누적 이니까 자기 자신의
21:52
뭔가를 더 해서 다시 자기 자신한테 저자는 되는데 그 더해주는 값이
21:57
이 오차의
22:00
곱하기 또 루프 타임 인 0.00 2를 곱한 걸 더 해주면 되겠죠
22:06
그리고 또 이 누적 값을 초기화 해주는 게 필요하니까
22:10
그것은 위에서 작성한 이 코드를 그대로 사용을 들어가겠습니다
22:15
이렇게 하고 근데
22:17
초기화 해 줄 변수가 피치 레이트 에러 싸움이 되겠죠
22:22
이렇게 하면 될 거고 이제 아이 제어의 결과를 저장할 변수 는 피치
22:28
언더바 레이프 언더가 아이 라고 하구요
22:32
이 에러 누적 값에
22:34
또 곱하기 내부 아이 개인 을 곱해 주면 될 거 같습니다
22:39
그래서 kp 가 아닌 ki 로 바꿔 주면 되겠죠
22:45
이렇게 해서 아이즈 6 끝났고 또 이어서 d 제어도 작성해 보겠습니다
22:49
이제 t 제어는 지난번에 각도 제어 했을 때는 d 제어를 각 속도 를
22:54
사용해서 짜 나요 그래서 그때는 바로 이렇게 자의로 값을 사용할 수가
22:59
있었는데
23:00
근데 각 속도제어 에서는 각 가속도로 디젤을 해야 되기 때문에 이런
23:05
식으로 사용할 수가 없어요
23:06
각 가속도를 출력해주는 센서가 없어서 그렇습니다
23:10
그래서 직접 계산 해서 가속도를 구해야 됩니다
23:13
그래서 지난번에 살짝 언급만 드리고 사용하지 않았던 이 방식을 써야 되요
23:19
그래서 먼저 각 가속도를 구하는 걸 여기서 작성해 보겠습니다
23:24
각 가속도를 저장할 변소를 피치 언더바 레이트 언더바
23:28
d 리버티 뭐라구요
23:31
각 가속도는 현재 각속도 에서 이전 각속도 를 뺀 거 해 루프 타임 인
23:37
0.00 일을 나누어 주면 됩니다
23:39
그래서 코드 이렇게 되겠죠 우선 현재의 각속도 는 icm 2060 의
23:45
자이로 x
23:46
여기에 드는 값이 낼 거고
23:49
그러니 것 - 이정 각속도 이전 각속도 는 icm 2060 인 언더바
23:55
자이로 x
23:58
언더가 이전에 의미인 프리 vs f prev
24:03
여기에 저장되어 있다고 가정 하구요 여기에 루프 타임 인 0.00 일을
24:08
나누어 주면 됩니다
24:10
이렇게 하면 이 계산의 결과가 d 그리퍼 3 크 제곱 다니의 각 가속도가
24:15
될텐데 이 루프가 반복될 때마다
24:19
이전 각속도 를 갱신을 해줘야 되니까 그걸 이 밑에서 해주면 되겠죠
24:24
갱신 하려면 이정 값을 저장한 변색
24:28
여기에 현재 값을 넣어주면 됩니다
24:32
이렇게 하면 되겠죠
24:34
이렇게 해서 각 가 속도도 계산을 했구요
24:37
이제 이 각 가속도의 d 개인 을 곱한 게 d 저의 결과가 되니까
24:42
이 밑에서 그 결과를 저장할 변수를 피치 언더가 레이트 언더가
24:47
d 라고 하고 여기에 이각 가속도 곱하기
24:53
피치에 내부 비딩
24:57
아이가 아닌 d 로 바꿔주면 될겁니다 그리고 역시 d 제어 니깐 부호가
25:01
반대가 되야 겠죠
25:03
앞에 - 를 붙여야 겠습니다
25:06
굉장히 에피 id 각각의 계산에 다 끝났으니까
25:10
그걸 다 더해주면 최종 pid 의 결과가 될 겁니다
25:13
그래서 그 변수를 피치 언더가 리포트 한다 가 pid 라고 하고
25:19
위에서 계산한 피치 레이트 p&f 하기 that i
25:27
+ 마지막으로 p7 at
25:30
이렇게 해주면 끝납니다 그럼 이제 ep id 의 결과를 또 시 씨알의
25:35
더하거나 빼거나 해줘야 되니까
25:37
이번 복사해서 php id 대신 피치를 잎을 pad 를 이렇게 계산 해
25:44
주면 되겠죠
25:45
그리고 부호는 바꿀 필요가 없어요 예전에 불을 다 맞춰 낮기 때문에 이
25:49
부분은 건드릴 필요 없습니다
25:51
그러면 이런식으로 각 속도를 제어 했을때 어떻게 동작하는지 한번 다운로드
25:56
해보고 지구의 올려서 확인을 좀 해 볼 건데 그 전에 이제 gcs 에서
26:01
목표 각 속도 랑 현재 각속도 를 확인 해 봐야 되니까
26:05
근데 지금은 각도를 주력하고 있죠 그 부분을 각 속도로 조금 바꾸겠습니다
26:10
그거 바꾸려면 목표 각 속도는 플러스 마이너스 50으로 이전에 각도 제어
26:15
할 때랑 똑같으니까 이건 그대로 두고
26:18
이제 현재 각도 대신 현재 각 속도를 짓으로 보내주면 됩니다 그래서 그
26:22
부분은
26:23
밑으로 쭉 내리면 있죠
26:26
자 이 부분에서 출시 s 로 보내는 데이터를 각도 대신 각 속도로 보내
26:31
주면 되요
26:33
자 이 부분이 쥬 cs 로 20 바이트 fc 정보를 송신하는 부분인데
26:39
인덱스 5번 6번 2 피치 각도 정보 였고 그리고 곱하기 100 한거는
26:45
그냥 스케일 팩터 를 곱해 준 거죠 그래서 여기서 bn 5080 에 피치
26:50
대신 icm 2060 2
26:52
자이로 x 값을 보내주면 됩니다 그래서 그 부분 코드를 조금
26:56
수정하겠습니다
26:57
자 이 부분 복사 하구요 2분 지우지 않고 주석으로 맞겠습니다
27:03
그리고 이 밑에서 bn 5080 피치 대신 i came 0602
27:09
자이로 x 를 보내 주면 되죠
27:12
자 이렇게 해주면 될 겁니다
27:15
5번 6번 다 이렇게 바꿔주면 되요
27:19
그리고 이 부분이 피치 목표 각도 부분은 데
27:23
목표 각도나 각속도 난 값에 범위는 똑같이 최대 플러스 - 50 이기
27:27
때문에 그냥 이대로 사용해도 될 것 같습니다 그래 이제 마지막으로 병수
27:32
선언을 하도록 하겠습니다
27:34
맨 위로 올라오지 구요 역시 지역 변수로 선언 하겠읍니다
27:40
이 변수는 각도 제어 때 선언했던 변소 랑 종류가 같으니까
27:45
이부분 그대로 복사해서 이 밑에 붙여 넣기 해서 사용하겠습니다
27:51
그리고 변수 이름이 조금 다르죠 레이트 라는 이름이 있으니깐
27:55
여기에 레이튼 이렇게 추가하겠습니다
27:58
모든 변수에 다 이렇게 레이트를 추가하도록 하겠습니다
28:06
그리고 각속도 제어는 변수가 나 더 있었죠
28:10
이전 각속도 를 저장할 변수 가 나 더 있었습니다
28:13
그래서 필로 타 지고 그 변수가 icm 220 육봉이
28:18
좀 더 강 자이로 언더가 백승헌 더 가
28:22
prev 했었죠 자 이렇게 까지 하면 되구요
28:26
이제 다운로드 한번 해보고 각속도 제어는 어떻게 동작하는지 한번
28:30
확인해보겠습니다
28:31
그럼 다운로드 하겠습니다
28:37
창 뜨면 확인 아직 5k 하겠습니다
28:43
다운로드 가 다 됐고 실행 시키겠습니다
28:48
그럼 바로 지구의 올려서 확인을 해 볼 건데 이제 제어 방식을 각
28:52
속도제어 로 바꿔 짜 나요
28:54
각 속도제어 에서는 목표 각속도 가 0이면 드론이 움직이지 않고 현재
28:59
각도를 유지해야 될겁니다
29:01
그래서 그거를 생각을 좀 하시면서 실제로는 어떻게 동작하는지 한번 확인해
29:05
보시기 바라겠습니다
29:07
먼저 gcs 를 실행시키고 커 네트를 하구요
29:11
개인 탭을 열고 들어온 의 정령을 높겠습니다
29:22
으 개인이 수진이 됐고 지금은 외부 pid 개인은 사용 하지 않으니깐
29:27
헷갈린 이까 다 0 으로 바꾸겠습니다
29:31
이렇게 하고 그리고 내부 pid 개인을 사용을 할 건데
29:35
우선은 이것도 다 0 을 넣고 시작해보겠습니다
29:41
갔고 이제 그래프 탭에서 피치 랑 3 p 를 선택하고 요 그리고 줌
29:47
아웃을 쪼끔 땡기고
29:49
그리고 조종기 에 피치 키를 조작하면 빨간색 그래프가 받기 적 최대
29:55
플러스 마이너스 50가지 바뀌도록 코드를 짜 썼구요
29:58
조작을 했더니 우리가 원하는 대로 최대의 플러스 - 5 식으로 바뀌고
30:03
있습니다
30:04
이제 이게 목표 각 속도가 되는거예요
30:07
그리고 파란색 그래프는 이제 각도가 아닌 각 속도를 출력하고 있습니다
30:12
그래서 이렇게 들어오니 멈춰 했을 때는 각 속도가 영 이구요
30:16
움직이면
30:18
이렇게 각 속도가 바뀌고 이러다가 다시 멈추면
30:23
자세가 어떻든 각속도 는 다시 0이 됩니다
30:27
그래서 이 조종기를 조작을 하면 이 각 속도만큼 들어오니 회전을 하게
30:31
되는 거예요
30:32
지금은 개인이 0이니까 제어가 안 되고 있는 상태고
30:36
이때는 쓰로틀 게임은 반응합니다 그러면 이제
30:40
아미를 하구요
30:42
그리고 쓰로틀 기회를 좀 높이고
30:46
피 츠 키 를 조작해 도 아무 반응이 없죠
30:55
그리고 드론을 또 앞뒤로 한 번 기울여 보겠읍니다
31:03
[음악]
31:06
역시 개인이 0이니까 제어가 안 되고 있는 상태에서 아무 반응이 없습니다
31:12
그럼 이제 개인을 조금 바꿔보겠습니다
31:15
먼저 p 게임부터 바꿀 건데 얼마를 넣어야 될지 감이 안 오죠
31:19
처음에 들어오는 멈춰 있고 이때 각 속도는 00일 거구요
31:23
피치 키를 최대로 올리면 목표 각속도 가 51 테니까 오차는 목표 -
31:29
현재 해서 52 될겁니다
31:31
그때 개인을 이렇게 10 정도를 넣으면 pid 의 결과는 502 될 거고
31:36
그게 시 씨알의 더해지니 깐
31:38
들어오니 멈춰 있을 때 피 츠 키 를 최대로 올려도 실시할 값이 500
31:42
밖에 안 변하자
31:44
씨알의 범위는 마노 100부터 21,000 까지 인데 그 안에서 500은
31:48
조금 작은 것 같으니깐
31:50
개인을 20을 나오겠습니다
31:56
자 이렇게 하고 다시 확인해 보겠습니다
31:59
이제 아 밍 을 하고 스로틀을 조금 높이 구요
32:05
지금은 제어가 되고 있는 상품 등
32:08
목표 랑 헌재가 둘다 염 이어서 오차가 0 이기 때문에 즉 목표 값
32:13
속도를 유지하고 있는 상태이기 때문에 모터 회전속도 에는 변함이 없습니다
32:17
이제 피치 키를 앞뒤로 한번 조작해 보겠습니다
32:21
지금은 p 제어 만 하고 있는 상태에요 서사의 올렸고
32:26
이러면 들어오니 앞으로 기울어 줘야 되는데
32:29
뒤가 무거워서 앞으로 못 가고 있습니다 최대로 오냐고
32:34
앞으로 아니 기울어져 있죠 그래서 뒤고 찾아 있습니다
32:39
그래서 아직도 개인이 좀 작은 것 같으니깐 개인을 조금 높여 보겠읍니다
32:43
에픽 ain't 22 너무 작은 것 같으니까 이번엔 40을 넣어보겠습니다
32:50
또 암 잉 을 하고 쓰로틀 높이 구요
32:54
역시 들어오니 멈춰 있을 때는 목표 랑 현재 값 속도가 다영이 여성
32:58
모터 회전속도 늘 변함이 없죠 4 피치 키를 조장을 해봤더니
33:04
아까보다는 모터 회전 속도가 더 빨라져 없는데 역시 귀가 무거워서
33:09
앞으로 목뒤 울어 주겠죠 그래서 p 개인은 다시 한번 조금 더 높여
33:13
보겠읍니다
33:15
p 개인 42 너무 작으니까 이번에는 50을 넣어보겠습니다 5
33:23
또 암 잉 을 하고 스로틀을 좀 높이고 요
33:28
아 피치 키를 조장을 할껀데 먼저 이 그래프를 좀 확인해 보시기 바랍니다
33:33
다비치 키를 이루어져 몰랐던 목표 각 속도가 점점 높아지겠죠
33:39
거의 최대로 올려야지 등이 앞으로 기울어 줘
33:44
그리고 이번엔 뒤로 내라 보겠습니다
33:47
에 살짝 열었더니 들어오니 뒤로 키우라고 줘
33:51
그리고 이번에는 들어온 의 움직임 한 번 보세요
33:55
444
33:59
투미 앞으로 사사에 기울어지고 있구요 그리고
34:04
스킬을 미플 내렸던 또 뒤로 사사에 기울어지고 있죠
34:10
그래서 이 그래프를 보면 목표 각속도 대로 정확히 제어가 되고 있진
34:14
않아요
34:15
근데 들어오네 움직임을 보시면 이전에 각도 제어 할 때보다 움직임은 더
34:19
부드러워 보입니다
34:21
그러면 이 상태에서 p 개인을 더 높이면 어떻게 반응하는지 한번
34:25
확인해보겠습니다
34:27
지금 p 개인이 50인데 조금 더 높여서 60을 넣어보겠습니다
34:34
이제 키를 조금만 조작해 도 모터가 크게크게 편할텐데
34:38
그때 각속도 저의 장점이 나타납니다
34:41
이전에 각도 제어 할 때는 d 제어를 써야지 제동 효과를 볼 수가
34:45
있었는데 각 속도로 제어를 하면 목표 각속도 구나 빠르면
34:50
잎이 제어 하나만으로도 제동 효과를 볼 수가 있어요
34:54
그래서 어떻게 동작하는지 한번 확인해 보겠습니다
34:58
특히 를 복잡했던 2
35:02
앞으로 기울어지는 과정을 보시면 이렇게 작은 진동 처럼 보이는게 제동
35:08
효과라고 보시면 됩니다
35:09
각도 제 할 때는 피게 이 크면 큰 진동이 생기긴 했지만 이렇게 작은
35:14
진동은 없었죠
35:15
자 그럼 다시 뒤로 좀 기울일 건데
35:24
지금은 또 p 개인이 커서 이렇게 제동 효과도 커지면서 진동이 심한
35:29
것처럼 보이는데
35:30
p 개인을 좀 낮추면 진동 이렇게 커진 않아요 그래서 각속도 제어 의
35:35
장점은 이렇게 부드럽게 제어가 되고 또 p 제어 하나만으로도 약간의 제동
35:40
효과를 볼 수 있다는 겁니다
35:42
지금은 p 개인이 너무 큰 것 같으니깐 다시 50으로 줄이고
35:46
이번엔 디게 일을 좀 추가해보겠습니다 이제 p 개인을 50으로 낮추 금
35:51
그리고 이번엔 비 개인 을 넣어 볼 건데 역시 얼마를 넣어야 될지 감이
35:55
잘 안 오죠
35:57
근데 각 속도제어 에서 d 제어는 각 가속도로 재현하는데
36:02
가 속도는 엄청 민감하게 바랍니다 그래서 개인이 크면 들어온 도 정말
36:06
불안하게 제거가 되기 때문에
36:08
개인을 좀 많이 낮춰서 넣어야 되요 그래서 1호 정로 를 넣어보겠습니다
36:16
이렇게 하고 또 어떻게 동작하는지 한번 확인해 보겠습니다
36:20
또 암 잉 을 하고 쓰로틀 조금 있었는데
36:25
자 쓰로틀 만 조금 높였는데 도 가 속도가 엄청 심해지면서 이렇게
36:29
아
36:30
제어가 불가능 할 것 같습니다 이 상태로 제어를 하면 안되요
36:35
이렇게 하면 모터 에도 손상의 갈 수 있습니다
36:37
그래서 모터가 이렇게 좀 너무 민감하게 막 팍팍 변하는 것 같다 싶으면
36:42
개인이 잘못된 걸 수 있으니깐
36:44
특히 d 개인을 조금 낮춰 주셔야 될 겁니다
36:47
그래서 t 게이는 좀 낮춰 보겠습니다 지금 d 개인을 5만 넣었는데도
36:52
너무 큰 것 같으니깐 한 일 정도로 나오겠습니다
36:57
이렇게 하고 다시 확인해 보겠습니다 그래 또 암 잉 하고 쓰로틀 조금
37:02
높이고 요
37:04
이번에는 그렇게 진동 효과가 없죠
37:08
뭐 피치를 앞으로 기울여 보겠습니다
37:11
[음악]
37:15
부드럽게 변화하는 게 보이죠
37:21
부럽게 해서 나고 있습니다
37:24
이 앞으
37:26
[음악]
37:31
확실히 움직임이 엄청 부드러워 졌죠
37:35
근데 뒤가 무거운 것은 지금 계속 어쩔 수 없이 좀 피고 쳐진 현상이
37:39
있어요
37:40
제가 주 미로 중간으로 전 이동시 하고 있습니다
37:44
3
37:47
이제 중간 인데 이게 제가 각속도 를 0으로 두면
37:52
제가 너무 좋은 거군요
37:57
아 이 정도로 되면 이제 목표 각속도 가영 이어서 그닥 또 를 유지해야
38:03
되는데
38:04
쥐가 무가 와 계속 뒤로 넘어 가죠
38:07
아씨 중간으로 한 방이 있었습니다
38:11
은 상태에서 목표 각속도 가 염 이어도
38:15
뒤로 넘어가는 현상이 있습니다
38:16
[음악]
38:19
확실히 아까보다는 제어가 더 부드럽게 되고 있는 것 같죠
38:28
이번 각 속도 싱글 pid 제어 에서는 아이 제어는 하지 않겠습니다
38:33
이제 각 속도 제어를 해보니까 p 게인이 좀 커도 지난 시간에 했던 각도
38:39
제가 때처럼 그렇게 큰 진동이 생기지는 않았고
38:42
디제 할 때처럼 작은 진동이 조금 보이긴 했습니다
38:46
p 제어가 각 속도를 제어하는 거라서
38:49
목표 각속도 보다 빠르게 기울어지면 그 목표 각속도 를 유지하려고
38:54
반대로 제동을 걸어 주는 역할까지 포함 하고 있어요
38:57
그래서 그렇게 작은 진동이 좀 보인 겁니다
39:00
그리고 d 제어가 가속도 방향의 반대방향으로 제동을 걸어 주는 역할을
39:05
하기 때문에
39:06
아까처럼 d 개인을 살짝 줬더니 훨씬 더 부드러운 움직임을 보였죠
39:12
그래서 각 속도 제어가 이렇게 장점이 정말 많은데
39:15
단점이 큰 게 하나 있죠 각도 제어 할 때는 조금 기울어져도 그 각도를
39:21
유지할 수가 있었는데 이것은 각 속도 제어 하기 때문에 각도를 그대로
39:26
유지하지 못합니다
39:28
약간 처럼 목표 각속도 를 0으로 했을 때 이상적인 경우라면 속도 가
39:33
0이면 움직이지 않고 그 자세 그대로 있어야 되는데
39:37
한쪽으로 기울어 지기 시작하면 그 쪽으로 더 처지면서 쭉 더 기울어진
39:42
현상이 발생해요
39:43
물론 제 기울면서 반대방향으로 제어가 되긴 하겠지만
39:47
원래 각도 대로 돌아오지 못하고 서서히 기울게 되죠 그래서 각도 제어
39:52
해서 각도를 유지하는 특성이 란
39:55
각 속도제어 에서 부드럽게 회전하는 특성
39:58
그 두 특성이 같이 있으면 들어오네 자세제어 의 성능이 엄청 좋아 질것
40:03
같습니다
40:04
이 두 개의 특성을 잘 섞으면 원하는 대로 조종기 키값이 목표 각도 가
40:08
되면서 또 각 속도제어 처럼 부드럽게 제어 되게 할 수 있을 것 같습니다
40:13
그래서 이제 각도 제어 랑 각 속도 제어가 같이 필요해 지는 거죠 그래서
40:18
나온 개념이 각 속도 제어를 하는데 지금은 그냥 조종기 키값을 목표
40:24
각속도 로 사용 했잖아요 근데 이게 아니고
40:27
이제 현재 기울어진 각도에 따라서 각 속도를 제어 하면 될 것 같습니다
40:31
쉽게 이해하려면 기울어진 만큼 각속도 를 제어 한다고 생각하시면 되요
40:38
이제 예를 좀 들어 드리면 들어온 이렇게 기울어져서 멈춰있다 고 해
40:43
보겠습니다
40:44
지구의 올려놓고 처음 시작할때 상황인 거죠
40:48
현재 각도가 뒤로 기울어져서 - 20도 라고 하구요
40:52
멈춰 있으니깐 각 속도는 영 일 겁니다
40:55
이제 각 속도 제어를 할 건데 현재 기울어져 있는 만큼 목표 각속도 를
41:01
결정합니다
41:02
즉 이 각도의 오차가 목표 각 속도가 되는거예요
41:06
그리고 이제부터는 단위가 거의 무의미 해집니다
41:10
단위는 생각하지 마시고 숫자의 부호 랑 크기만 생각하시면 되요
41:14
그래서 - 20도가 기울어져 있으니까
41:17
각도의 오차는 목표 각도 - 현재 각도에서 플러스 이 집이 될 거고 그
41:23
크기만큼 각 속도를 제어하는 거예요 그래서 이게 목표 각 속도가 되는
41:28
거고 거기에 현재 각속도 인 0을 뺀 걸 각 속도의 오차로 정의를 하고
41:34
이걸 가지고 모터를 제외합니다
41:38
앞으로 기울어져 야 되니까 뒤에 모터를 증가시키고 앞에 모터를 감소시키면
41:43
되겠죠
41:44
이때 p 개인을 50으로 해서 이런 결과가 나와서 이제 들어오니 앞으로
41:49
기울어 진다 고 해 보겠습니다
41:51
그러다가 이제 목표 각도 인 영도가 돼서 멈춰있다 고 해 보겠습니다
41:56
그러면 목표 각도 에 도달 했으니깐 제어 값도 0이 되어야 겠죠
42:01
목표에 도달 했으니까 각도 오차는 0이 될 거고 그게 곧 목표 각 속도가
42:07
되고 또 멈춰 있으니까
42:09
현재 각속도 도영 일겁니다 따라서 제어의 결과는 0이 되겠죠
42:14
그래서 이렇게 유지를 한다고 하면 내 모터가 지금처럼 같은 속도를 계속
42:19
유지하면 될 거에요 그래서 이렇게 보면 각도 제어 할 때랑 별로 다를게
42:24
없어 보이죠
42:25
근데 - 20도에서 목표 각도 인 영도로 수렴해 가는 과정을 보시면 이
42:31
과정이 각도 제어 때라는 완전히 달라요
42:34
제가 아까 각 속도로 제외하면 부드러운 제어가 가능하다 고 있던 게 이
42:38
과정에서 나타납니다
42:40
그 다음엔 처음에 - 20도로 기울어져 있었고 또 멈춰 있었죠
42:44
뒤로 누워 있으니까 마이너스가 보죠
42:47
그래서 영도로 수렴을 해야 되는데 이때 각도 오차가 목표 각속도 가
42:53
되니까 이제 플러스 20t 그리퍼 스에게 속도로 앞으로 기울어 지기
42:58
시작할 겁니다
42:59
그러다가 다음 루프에서 - 10도가 됐어요 그럼 이 때는 목표 각속도 가
43:05
또 10t 그리퍼 쎄게 될텐데
43:07
이때 기울어지는 속도가 10t 그리퍼 색보다 빠르면 이때부터 반대방향으로
43:13
제동이 걸리기 시작합니다
43:15
그렇게 쭉 영도에 더 접근 하겠죠
43:18
이렇게 목표 각도 에 가까워질수록 목표 각 속도도 0에 가까워 지기
43:23
때문에
43:23
목표 각도 부근에서는 더 천천히 접근하게 될 거구요
43:28
그러다가 목표 각도의 일치하면 목표 각속도 도영이 되니까 이 목표에서
43:33
정제 하게 될겁니다
43:35
즉 목표에서 멀 때는 빠르게 접근 하다가
43:39
가까워질수록 천천히 접근하게 된다는 소리야
43:42
그래서 맨 처음에 시험때 보셨듯이 기울어진 채로 시작해서 아 밍 을 하고
43:47
제어가 시작되자마자 처음에 급격하게 반응 하다가 서서 의 목표 각도로
43:51
수렴 했죠
43:52
오버 슈트도 거의 없었어요 그리고 d 제어가 또 각 가속도로 제동을 걸어
43:57
두기 때문에 더욱 더 부드러운 제어가 가능해 집니다
44:01
이게 각도 제어 싱글 pid 랑 크게 다른 점입니다
44:06
이제 아까 처럼 각 속도 제어를 할 건데 좀 전의 각 속도 싱글 pid
44:12
로저 했을 때는
44:13
조종기 조작 값이 바로 목표 각속도 로 들어 같잖아요
44:17
근데 이제 각도의 오차의 따라서 목표 각속도 를 결정해야 되니까
44:22
이 레퍼런스를 정해 하는 부분이 조금 달라질 겁니다
44:25
그래서 목표 각속도 를 이제 이런 식으로 정의할 수 있겠죠
44:29
목표 각도에서 현재 각도를 뺀 각도 오차의 따라서 각 속도를 제한한
44:35
될겁니다
44:36
목표 각도는 또 종기로 조작할 수 있게 할 거구요
44:39
현재 각도는 bn 5080 에 피치 각도 를 사용하면 될 겁니다
44:44
그래서 이걸 또 소스 코드로 작성을 해 볼 건데 아직 다 끝난건 아니고
44:48
먼저 소스 코드 작성을 좀 하고 또 이어서 설명드리도록 하겠습니다

```

#### video 46
- ch 10 double loop pid control 1/2

{% include youtubePlayer.html id=page.youtubeID46 %}

```diff
00:14
지난 시간에 싱글 pid 로 롤 피치 각도 제어 하는 코드를 구현을
00:18
했었고 그대로 비행 테스트 도 한번 해봤습니다
00:21
근데 이 싱글 pid 가 회전이 까치 빠른 제어가 필요한 시스템에서는
00:25
제어 성능이 그렇게 좋지는 않았죠
00:28
제어가 타이트하게 돼야 되는데 그렇지 못하고 헐렁하게 제어되는
00:32
느낌이었구요
00:33
특히 저희 들어오는 뒤가 무거워서 계속 뒤로 쳐지는 현상이 있는데
00:37
싱글 pid 만으로는 이 현상을 해결할 수가 없었습니다 그래서 비행을
00:42
하려면 피치 키를 계속 앞으로 밀고 있어야지
00:45
수평 유지가 가능 했었어요 이번 시간에는 이 문제를 해결하기 위해서
00:50
더블 pid 제어 방식으로 바꿀 건데 그 전에 지금은 각도 제어 방식을
00:55
썼었는데
00:56
만약에 각도가 아닌 각 속도 제어를 한다면 어떻게 되는지 랑 또 더블
01:01
pid 가 어떤 구조로 이루어져 있고 이걸 사용하면 뭐가 좋은지를
01:06
설명드릴 예정입니다
01:07
그리고 실제 구현을 해 보고 또 지구의 올려서 실험도 해 보도록
01:11
하겠습니다
01:12
그래서 이번 시간에 설명들을 방식이 최종적으로 우리가 사용할 방식이 될
01:16
거구요
01:17
제 어코드는 제가 따로 드린다 고 그랬는데 그 내용을 이번 챕터
01:21
마지막에서 설명을 드려 그랬는데
01:24
분량이 그렇게 까지 할 필요는 없을것 같아서 다음 시간에 실제 제어 코드
01:28
작성을 하면서 설명드리도록 하겠습니다
01:30
그래서 이번 영상이 이번 챕터의 마지막 영상이 될 것 같습니다
01:35
그리고 이 더블 pid 방식이 사용하는 사람마다 조금씩 다를 수 있으니까
01:40
제 강의가 정답이다 이런게 아니고 저는 이렇게 사용을 했고 그랬더니
01:45
이렇게 비행이 됐습니다 라고 이해하시면 될 것 같습니다
01:49
그리고 이번 시간에는 설명을 좀 드리고 구현을 하고 그리고 다시
01:53
설명드리고 부연 하고 이런 식으로 진행할 예정입니다
01:57
그럼 먼저 이번 시간에 구현할 더블 pid 제어 영상부터 확인해보겠습니다
02:04
지금 드러내는 이번 시간에 구현할 더블 pid 제어 코드가 들어가 있는
02:08
상태구요
02:09
이제 더블 pid 제어의 성능이 어떤지 지구의 올려서 확인해봤습니다
02:15
커넥트 를 하고 들어온 의 전원을 넣었더니
02:18
현재의 들어온 에 저장된 게임 2 ccs 의 소식이 되고 그 개념이
02:23
이렇게 표식을 했죠
02:25
이제 내부 외부 pid 제어를 다 사용하기 때문에 피치의 6 개개인이 다
02:30
0이 아닙니다
02:32
6 개개인을 다 사용하는 거에요 그리고 아이 제어도 사용을 하고 있는데
02:36
지난 시간에 했던 각도 제어 싱글 피아 에 대해서는 이 뒤가 너무 쳐져
02:41
있어서 아이 제어가 우리가 원하는 대로 잘 동작하지 않았죠
02:45
이제 더블 pid 로 바꿨더니 제어 성능이 어떻게 바뀌었는지 그래프를
02:50
통해서 확인을 좀 해봤습니다
02:52
굉장히 제조 전기도 키고 그리고 그래프 탭에서 피치 랑 3 포인트를
02:58
출력을 하구요
03:01
그리고 피츠 키를 조작하면 빨간색 그래프가 바뀌는데 이게 목표 각도가
03:06
되는거고
03:08
잘 변하고 있죠
03:11
그리고 드론을 앞뒤로 기울이면 파란색 그래프가 변하는데 이게 피치
03:15
각도입니다
03:17
그래서 지금 출력하는 것은 지난 시간 했던건 같아요
03:20
목표 각도 랑 현재 각도를 출력하고 인상됩니다
03:24
이제 아 밍 을 하고 쓰로틀 좀 높이면 제어가 시작되는데
03:28
지난 시간에 싱글 pid 에서는 목표 각도로 아예 접근을 못 햇죠
03:32
근데 더블 pid 는 제어가 시작되면 어떻게 반응하는지 한번 보세요
03:40
아 밍 을 하고 이제 스로틀을 조금 높였던 이
03:45
제어가 시작되자 마자 바로 목표 각도 n 수렴 하자
03:49
싱글패 d 는 이 뒤가 무거워서 아예 목표 각도 인 영도에 접근을
03:53
못했는데
03:55
근데 더블 pid 를 사용하면 이렇게 오버 슈트도 없이 신속하게 목표
04:00
각도 로 접근할 수 있습니다
04:02
싱글 피해액 이란 성능차이가 진짜 어마어마 하죠
04:06
그리고 목표 각도의 얼마나 잘 수렴하고 있는지 그래프 줌을 당겨 와서
04:11
확인을 좀 해봤는데
04:14
지금은 아이 제어 까지 동작하고 있어서 목표 각도 인 영도에 점점
04:18
수렴하고 있죠 자 이정도면 미세 후 차라고 볼 수 있을것 같고
04:22
아니 제어가 금이 3호 차를 점점 줄어가고 있는 상태입니다
04:27
그래서 오차가 0.5 2 보다 작게 유지하고 있어요
04:31
현재가 c 그래프 줌 아웃을 하고
04:42
굉장히 조종기를 조작해서 목표 각도를 좀 바꿔봤습니다
04:47
그러면 들어온 도그 목표 각도 를 따라 가야겠죠
04:50
그래서 파란색 그래프가 빨간색 그래프를 따라 다니면 됩니다
04:55
이렇게 천천히 조정이 를 조작해 떠니 거의 일치 하다시피 목표를 추정하고
05:00
있죠
05:01
그리고 이때는 목표 각도를 30도 이렇게 조작을 했는데 이 지구에 막혀서
05:06
드론이 앞으로 더 못 기울어지고 있는 상태입니다
05:10
이때 이 오차가 아 이제 여기서 누적이 되면서
05:14
그 다음 목표 각도를 이렇게 낮춰 쓸 때 약간의 시간 지연이 생겼습니다
05:19
i 제어가 잘 동작하고 있다고 보시면 되고 이렇게 오차가 발생하는 시간이
05:25
길어질수록 그 누적 값도 커지기 때문에 그만큼 그 뒤에 이렇게 반응하는
05:30
시간에 더 많은 시간 지연이 생길 수 있습니다
05:33
그리고 뒤로 기울여 쓸때도
05:36
이렇게 목표 각도를 잘 추정하고 있죠 그래서 이렇게 보면 거의 뒤로
05:41
쳐지는 현상이 없어 보여요
05:45
그리고 손가락으로 톡톡 쳐 봤는데 이게 급격한 메란 이 짧게 들어갔을 때
05:49
라고 보시면 되고
05:51
보시다시피 0.1 초 0.2 초 만에 원래 위치로 돌아오자
05:56
되게 빠른 시간에 복귀를 하는 데도 진동이 거의 없습니다
06:00
펜텀 투 확인했을 때도 이런 비슷한 패턴을 보여 썼죠
06:04
오버 슈트가 딱 한 번 발생하고 원래 위치로 복귀 했었는데
06:08
우리 들어온 도 펜텀 투 랑 비슷하게 동작하는 것 같습니다
06:14
그리고 잡아당겼다 감았을 때 이 때는 왜 라니 길게 들어왔을 때 라고
06:18
보시면 되구요
06:20
이때도 진동 거의 없고 오버 슈트가 이렇게 한번 발생하고 서서히 원래
06:26
위치로 돌아오자
06:28
역시 펜텀 투 랑 비슷한 패턴을 보이긴 하는데
06:31
근데 좀 더 천천히 복귀하는 것 같습니다
06:34
이게 아이 개인이 좀 커서 그럴 수도 있구요 또 아이 누적 값에 링
06:39
맥스를 잡아주는게 통상적인 데 지금 이 드러내는 그 기능이 없어요
06:43
나중에는 답변 할 겁니다 어쨌든 지금 이 상대도 제어가 빠르고 부드럽게
06:49
되고 있죠
06:51
그래서 이렇게 하고 다시 그래프 주물 좀 담겨 봤는데 그렇게 외란 이 좀
06:56
있었어도
06:57
역시 목표 각도의 잘 수렴하고 있습니다
07:00
그래서 이 상대로 비행 테스트를 한번 해봤습니다
07:05
자아 밍 을 하고 쓰로틀 높이면 이제 제어가 시작이 되죠
07:11
근데 더블 pid 는 조금 주의하셔야 할게
07:14
셀프레벨링 모드에서는 이렇게 평평한 곳에서 비행을 시작하는 괜찮은데
07:19
바닥이 좀 기울어졌다 던가 해서 드론의 자세에도 기울어진 상태에서 비행을
07:23
시작하면
07:24
제어가 시작되자 마자 바로 수평으로 확정되기 때문에 근처에 사람이 있으면
07:29
위험 할 수 있습니다
07:31
그래서 나중에 더 한번 말씀 드리기 나겠지만 모터 암 잉 하고 이륙할
07:35
때는 반드시 사람이랑은 적어도 3m 정도는 떨어진 곳에서 비행을
07:40
시작하셔야 되요
07:42
보시면 엄청 안정적이고 부드러운 비행이 되고 있습니다
07:46
싱글 ti 이라는 확실히 비행 성능이 다른 게 보이자
07:50
싱글 켈리는 제가 좀 헐렁하게 되는 느낌이었고
07:54
출렁 된 형성도 좀 심했는데 법을 페이지로 바꿨던 힘들긴 없이 소탕을 잘
07:59
유지하고 있습니다
08:01
그리고 뒤가 무거워서 처지는 것을 싱글 ti d5 했을 때는 수평 유지
08:05
하려면 제가 피치 키를 계속 아프고 누르고 있어야 되는데 이 법을 pid
08:10
는 뒤로 처지는 걸 pid 제어가 잡아주기 때문에
08:13
피치를 중립으로 덧 5유로 처지는 현상이 거의 없습니다
08:17
이렇게 좌우 고아 피로도 이동을 좀 시켜 봤구요
08:21
지금은 요새 형아 들어가 있는 상태여서 누가 회전하지 않고 한 방향을
08:25
계속 보고 있잖아 요 제가 없으면 누가 혼자 막 그래 그러면 위험하니까
08:30
는 절대로 지금은 프로펠러를 달고 갱 하시면 안됩니다
08:42
스팸을 잘 유지하고 있구요
08:51
이거는 제가 요 를 한번 회전시켜 본다고
08:54
요가 회전 하니까 이렇게 조종을 제가 잘못해서 들어오니 좀 같이
08:59
흔들거리고 있죠 이게 제어가 잘 안되는게 아니고 제가 조정을 못하고 있는
09:04
겁니다
09:06
그래서 제어가 잘 되는 거랑 조종을 잘 하는 것은 별개 니깐
09:10
시뮬레이터로 충분히 연습을 좀 하시라고 그렇죠
09:13
조종을 잘못하면 위험한 상황이 발생할 수 있으니까
09:16
틈틈이 시간이 되는대로 시뮬레이터로 연정을 좀 하시길 바라겠습니다
09:23
이번 시간에는 이렇게 부드러운 비행이 되도록 더블 pid 제어 이렇게 해
09:27
보겟습니다
09:30
역시 이번 시간에도 절대 프로펠러는 끼지 마시구요
09:34
모터 돌 때도 손대지 마시고 특히 더블 pad 를 하면 이게 제어의
09:38
특성상 모터가 갑자기 급격하게 더운 일이 많이 생길 수도 있습니다
09:43
그니깐 특히 더 안전사고에 유의 해서 따라 하시기 바라겠습니다
09:48
우선 싱글 pid 제어를 했을 때 무슨 문제가 있었는지 다시 한번
09:52
설명드리겠습니다
09:54
우리 들어오는 뒤가 무거워서 계속 처지는 현상이 발생 했잖아요 그래서
09:58
목표 각도를 영도로 해도 이렇게 영도에 수렴하지 못하고 - 20도 정도가
10:04
계속 쳤습니다
10:06
이렇게 처지는 걸 p 제어가 잡아 줘야 되는데 그러려면 p 개인을 높여야
10:11
되구요
10:11
pda 를 높였던 이 영도로 접근했지만 되신 오버 슈트 랑 언더 슈트가
10:17
엄청 커졌고
10:18
심한 경우에는 아예 발산 했었습니다 그래서 또 그 현상을 막으려고 d
10:23
개인을 높이면
10:25
작은 진동이 심해지면서 비행이 거의 불가능 있었죠 그래서 이번에는 이
10:30
오차를 아이 제어로 잡아 보려고 했더니 오차가 너무 커서 아이 제어로 는
10:36
제거가 어려웠습니다
10:38
그래서 pid 개인을 다 엄청 낮춰서 비행 성공했는데
10:43
개인이 낮기 때문에 제어가 제대로 안되고 계속 출렁출렁 되면서 좀
10:48
불안하게 비행을 했었죠
10:50
d 게인이 낮아서 왜란 해도 반응이 거의 없었구요
10:53
또 pda 도 낮아서 조종기 조작을 해도 바로바로 반응하지 않았습니다
10:58
그래서 제가 좀 헐렁하게 되는 느낌이 얻자
11:00
그래서 이런 한계를 때문에 빠르고 부드러운 제어를 하기 위해서는 새로운
11:05
제어 개념이 필요해 지기 시작한 겁니다
11:09
지난시간 햇던 각도 제어 징글 캐디는 이런 구조를 가지고 있었죠
11:14
목표 각도 해서 현재 각도를 된걸 오차로 정 했구요
11:18
목표 각도는 조종기 조작의 따라서 사용자가 바꿀 수 있는 값이고
11:22
현재 각도는 bn 5080 센서에서 측정된 회전각 또 였습니다
11:28
이 오차를 이용해서 pid 제어 했었는데
11:30
이중에 d 제어는 5차 대신 자이로 센서의 각 속도 값을 사용 했었죠
11:36
그렇게 계산된 결과를 다 더해서 모터에 넣어 줬더니 제어가 됐었습니다
11:42
제어가 되면 각도가 변하니까 그걸 이용해서 반복적으로 제어 알고리즘 2
11:47
동작 했었죠
11:49
이때 pid 각각의 역할을 좀 생각해 보시면 피는 목표 각도로 신속하게
11:55
수렴 하도록 하는 역할이 얻고
11:57
d 는 그렇게 신속하게 변하면 오버 쇼트가 커지니까
12:02
그걸 방지하기 위해서 각속도 에 반대 방향으로 제동을 걸어 주는 역할이
12:06
얻습니다
12:07
그리고 아이는 미세 오차를 제거하는 역할이 얻고 p 랑 d 제어의 비해서
12:12
역할이 그렇게 크지는 않습니다
12:14
제어 량도 아주 작아요 이제 생각을 좀 해 보시면 이렇게 뒤가 계속
12:20
처지는 데 이걸 해결하려면 p 개인을 키워야 되죠 그리고 또 p 제어는
12:25
제어 의 전체적인 반응속도 에도 관련 했습니다
12:30
목표 값으로 빨리 수렴을 하고 또 안정적으로 수렴을 하는게 제어 성능의
12:35
기본이 되는데
12:36
빨리 수렴하게 하려면 잎이 개인을 키워야 되요
12:40
그래서 p 개인을 키우면 문제는 이 각도 제어 싱글 pid 방식은 p
12:45
제어가 목표 각도로 도달할 때까지의 제어 방연이 항상 플러스 방입니다
12:52
현재 각도가 이렇게 기울어져 있고
12:55
영도가 목표다 라고 한다면 p 제어는 이 목표로 도달하는 그 과정에서
13:01
이게 빠르게 접근 하든 천천히 접근하던 그것의 상관없지
13:05
항상 플러스 방향으로 제가 됩니다 목표 - 현재 각도로 제어를 하니까
13:09
상상플러스 가 되겠죠
13:11
그리고 빠르게 접근하면 그만큼 오버 슈트가 날 테니까
13:15
그걸 d 제어가 잡아 줘야 되는데 d 개인이 크면 진동을 발생시키기
13:19
때문에 우리가 원하는 제동 효과를 볼 수가 없어요
13:23
p 개인을 키워서 목표 각도로 수렴하게 했더니 이렇게 목표를 기준으로 위
13:29
아래로 진동이 발생 했구요
13:31
이걸 잡으려고 d 개인을 키우면 이렇게 작은 진동이 계속 생겨 썼죠
13:37
그래서 이제 이런 생각이 들기 시작했습니다
13:41
지금은 각도 제어 를 하는데 p 개인을 높이면 속도가 빠르게 간 하잖아요
13:46
근데 그 속도가 너무 크면 오버 슈트도 그만큼 커지게 되니까 그 속도를
13:51
제외 하면 어떨까라는 생각이 든 겁니다
13:54
이것은 예전에 제가 실제로 고민 했었던 것들이고 요
13:58
싱글 pid 로 각도 제어 가 너무 안 되니까
14:01
각 속도를 제어하는 방법이 없나 고민을 해본 거에요 그래서 각도 제어 가
14:06
아닌 각 속도제어 에 대해서 생각을 해봤습니다
14:10
이제 각도가 아닌 각 속도를 제외한다면 그때 pid 각각의 역할이 어떻게
14:16
되냐면 p 제어는 목표 각 속도로 수렴하게 하는 역할이 될 거구요
14:22
d 는 이제 각 속도의 변화가 되니까
14:25
각 가 속도에 따른 제동을 하겠죠
14:28
이제 가속도의 대한 개념이 나오면 살짝 생소하죠
14:31
감이 잘 안옵니다 가속도의 디제 의 역할은
14:36
가속이 붙으면 이제 드론이 너무 빨리 회전을 하게 되니깐 속도가 천천히
14:41
변하도록 하는 역할이라고 보시면 됩니다
14:44
i 제어는 목표 속도가 유지가 안되면 그 속도를 유지하도록 미세 우 차
14:49
를 제거 하는 역할이 장
14:51
그래서 각도 재앙에서 각도 대신 각 속도가 되는거고
14:55
각 속도 대신 각 가속도가 되는 거죠
14:59
즉 결론은 각 속도로 제어를 하면 목표 각 속도를 유지하면서 회전하기
15:04
때문에 우리가 원하는 속도로 회전하도록 부드럽게 제어할 수 있을 것
15:09
같습니다
15:10
속도가 막 빨리 변하면 진동도 심해지고 제어가 불안해 질 텐데
15:15
각 속도를 제외하면 그런 현상이 없어지는 거죠
15:18
이전에는 p 개인이 낮아서 뒤가 처지면서 목표 각도의 수량을 못 했었는데
15:23
각 속도로 제외하면 p 개인을 높여도 부드럽게 제어가 될 것 같습니다
15:29
그래서 이게 각 속도 제어를 할 때 구조입니다
15:33
역시 오차를 정해야 되는데 각 속도제어 니까 목표 각속도 - 현재 각
15:39
속도를 오차로 정하는 되겠죠
15:42
그러면 또 이 목표 각 속도를 어떻게 장애 하느냐
15:45
역시 조종기 조작으로 바꿀 수 있게 될 꺼구요
15:49
이전에 했던 거랑 똑같이 스틱을 중간 해두면 목표 각 속도를 0으로 하고
15:54
위아래로 조작하면 최대 플러스 - 50도 가 되도록 할 겁니다
15:59
근데 각 속도 니깐 단위는 d 그리퍼 세계 되겠죠
16:03
즉 피츠 키를 맨 위로 올리면 1초에 50도 회전하는 속도로 들어오니
16:08
기울어 질 겁니다
16:10
그리고 현재 각속도 는 icm 2060 이 자의로 값을 사용하면 될 것
16:16
같습니다
16:17
그렇게 해서 오차를 계산 하고 또 pid 계산 하구요
16:21
그 결과로 모터를 구동시키는 되겠죠
16:24
그러면 또 부터 가 회전하면서 각도 랑 각 속도가 바뀔거 고 다시 이
16:29
pid 루프가 반복되면서 제어가 될겁니다
16:33
이 방식은 아직 더블 pid 는 아니구요
16:36
싱글 pid 인데 각도 제어 가 아닌 각 속도로 제가 를 하는 거죠 그럼
16:42
우선 이렇게 했을때 코드가 어떻게 되고 또 어떻게 동작하는지 집에 올려서
16:47
확인을 해보고 그 후에 왜 더블 pid 방식을 써야 되는 지를
16:51
설명드리겠습니다
16:52
그럼 먼저 소스 코드 작업을 한 후에 이어서 설명드리겠습니다
16:58
먼저 지난 시간에 작업했던 10가지 이 폴더를 복사 하시구요
17:03
이번 시간에는 싶다 c 3 점
17:07
더블 tid
17:10
컨트롤 테스트 라고 하겠습니다
17:13
그리고 풀다 일은 복사 지구요
17:16
원의 들어와서 ioc 파일 이름 바꿔 주시고
17:19
이거 두개 삭제하시고 됐으면 큐브 아이디를 생식 했습니다
17:26
실행이 됐으면 열려있는 프로젝트 있으면 닫아 주시구요
17:29
좀전에 복사한 플래너를 임포트 하겠습니다
17:41
역시 큐브 mx 로 설정할 건 없으니까 또 바로 메인 점 c 파일을
17:44
열어보겠습니다
17:46
알렸으면 바로 지난 시간에 작성 했었던 싱글 pid 제어 코드 작성했던
17:52
부분으로 가고 있습니다
17:53
이 부분이죠 먼저 지난 시간에 작성했던 내용을 다시 한번 간단히
17:58
설명드리면 각도 제어 에서 목표 각도를 조종기 키 값으로 설정한
18:03
부분이었고
18:04
이렇게 하면 최대 플러스 - 52 되는 거죠 그래서 그 목표 각도가 이
18:08
레퍼런스 형제 저장이 될 거에요
18:10
그 후에 오차를 정했는데 목표 각도 - 현재 각도를 5 처로 정했습니다
18:16
그 다음에 이 오차의 p 개인 을 곱한 걸 p0 정 햇죠
18:22
라마이 제안은 이 5차 의 루프 타임 인 0.00 2를 곱한 걸 누적
18:27
그래서 이 변수에 저장한 후에
18:30
그리고 이 변수에 아이 개인 을 곱한 걸 아 이제 로 정했습니다
18:35
이제 d 쌓아 밍 하거나 제어가 되고 있지 않을 때는 누적 값을 0으로
18:39
초기 하시겠죠
18:41
마지막으로 d 제어는 각도의 변화 일로 제어를 하는데 그게 곧 각 속도가
18:45
되니깐
18:46
이렇게 수식을 사용해서 계산하지 않고 바로 자의로 값을 각속도 를
18:51
사용했습니다
18:52
그래서 이 각 속도의 d 개인 을 곱한 결과로 제동을 걸어 줘야 되니까
18:57
앞에 부호를 마이너스를 붙혀 짱 이렇게 해서 pid 가 다 정의가 됐고
19:03
그걸 다 더한 결과를 최종 모터 제어 하는 데 사용했습니다
19:09
그래서 이 코드가 피츠 축 각도 제어 싱글 pid 를 사용한 방식이
19:14
였구요
19:15
이번에는 각도 제어 가 아닌 각 속도를 제어하는 방법으로 코드를 다시 짜
19:19
보겠읍니다
19:20
그럼 이 각도 제어 부분은 우선 주석으로 맞구요
19:24
이 밑에 새롭게 코드 를 작성하겠습니다
19:28
먼저 지난번 각도 제어 할 때랑 똑같이 조종기 값으로 목표 각 속도를
19:33
설정할 건데 그 목표 각속도 를 저장할 변수를 피치 연가 바 레퍼런스
19:39
라고 하고요
19:41
그리고 이번에는 각 속도의 의미로 이 사이에
19:45
레이트 라는 이름을 붙이게 씁니다
19:48
역시 최대 플러스 마이너스 50이 되도록 할꺼니까
19:52
위에서 작성한 이 내용을 그대로 쓰면 될 것 같습니다 그래서 이 부분
19:55
복사해서 붙혀넣기 하겠습니다
19:58
이게 단위는 중요하진 않아요 값이 플러스 - 52 다가 중요한 거고
20:04
이걸 목표 각도 로 쓰면 단위가 도가 되는거고
20:08
목표 각 속도로 쓰면 d 그리퍼 3기 되는 거죠
20:12
이렇게 해서 목표 각 속도를 정 했구요
20:16
그 다음에 5차 정의는 또 역시 변수 이름을 피치 없나 강 레이트 언더
20:22
랑 에러 라고 하고
20:25
오차는 목표 - 현재 각 속도가 될 테니까
20:29
목표는 위에서 계산한 이 변수가 될 거고 그리고 현재 각속도 는 이제
20:35
bn 5080 이 아닌 icm 2060 이 자이로 값을 쓰면 될 겁니다
20:41
그래서 icm 2060 님
20:45
피치 축은 자이로 x 정
20:48
그래서 이걸 선택하면 되겠죠
20:51
이렇게 해서 오차도 정도 했구요
20:54
이제 p 제어는 이 오차의 p 개인 을 곱해 주면 되겠죠
20:59
그래서 급히 제어 의 결과를 저장할 변수를
21:02
빛이 언더 라 베이프 응답 앞이라고 하고 이 오차의 토픽 애인 을 곱하면
21:09
되는데 역시 츠 cs 에서 바꿀수 짧아 니깐 지난 시간에는 피치 아웃
21:16
kp 이라는 변수를 사용 했는데 이번 시간에는
21:21
아웃이 아닌 인 을 사용하도록 하겠습니다
21:25
이렇게 하면 되겠죠 이렇게 하면 쥬시 스에서 피치 내 구피 개인을 바꾸면
21:31
그 값이 여기에 저장이 될 겁니다
21:34
이렇게 해서 피해자가 끝났고 그 다음 아이 제어도 밑에서 작성해
21:38
보겠습니다
21:39
이제 아이 제어는 오차를 누적 해야 되니까 그 누적하여 변수를 피치
21:44
엠버가 레이 펀드가 에러
21:47
이런 다 봤어 미 라고 하구요 누적 이니까 자기 자신의
21:52
뭔가를 더 해서 다시 자기 자신한테 저자는 되는데 그 더해주는 값이
21:57
이 오차의
22:00
곱하기 또 루프 타임 인 0.00 2를 곱한 걸 더 해주면 되겠죠
22:06
그리고 또 이 누적 값을 초기화 해주는 게 필요하니까
22:10
그것은 위에서 작성한 이 코드를 그대로 사용을 들어가겠습니다
22:15
이렇게 하고 근데
22:17
초기화 해 줄 변수가 피치 레이트 에러 싸움이 되겠죠
22:22
이렇게 하면 될 거고 이제 아이 제어의 결과를 저장할 변수 는 피치
22:28
언더바 레이프 언더가 아이 라고 하구요
22:32
이 에러 누적 값에
22:34
또 곱하기 내부 아이 개인 을 곱해 주면 될 거 같습니다
22:39
그래서 kp 가 아닌 ki 로 바꿔 주면 되겠죠
22:45
이렇게 해서 아이즈 6 끝났고 또 이어서 d 제어도 작성해 보겠습니다
22:49
이제 t 제어는 지난번에 각도 제어 했을 때는 d 제어를 각 속도 를
22:54
사용해서 짜 나요 그래서 그때는 바로 이렇게 자의로 값을 사용할 수가
22:59
있었는데
23:00
근데 각 속도제어 에서는 각 가속도로 디젤을 해야 되기 때문에 이런
23:05
식으로 사용할 수가 없어요
23:06
각 가속도를 출력해주는 센서가 없어서 그렇습니다
23:10
그래서 직접 계산 해서 가속도를 구해야 됩니다
23:13
그래서 지난번에 살짝 언급만 드리고 사용하지 않았던 이 방식을 써야 되요
23:19
그래서 먼저 각 가속도를 구하는 걸 여기서 작성해 보겠습니다
23:24
각 가속도를 저장할 변소를 피치 언더바 레이트 언더바
23:28
d 리버티 뭐라구요
23:31
각 가속도는 현재 각속도 에서 이전 각속도 를 뺀 거 해 루프 타임 인
23:37
0.00 일을 나누어 주면 됩니다
23:39
그래서 코드 이렇게 되겠죠 우선 현재의 각속도 는 icm 2060 의
23:45
자이로 x
23:46
여기에 드는 값이 낼 거고
23:49
그러니 것 - 이정 각속도 이전 각속도 는 icm 2060 인 언더바
23:55
자이로 x
23:58
언더가 이전에 의미인 프리 vs f prev
24:03
여기에 저장되어 있다고 가정 하구요 여기에 루프 타임 인 0.00 일을
24:08
나누어 주면 됩니다
24:10
이렇게 하면 이 계산의 결과가 d 그리퍼 3 크 제곱 다니의 각 가속도가
24:15
될텐데 이 루프가 반복될 때마다
24:19
이전 각속도 를 갱신을 해줘야 되니까 그걸 이 밑에서 해주면 되겠죠
24:24
갱신 하려면 이정 값을 저장한 변색
24:28
여기에 현재 값을 넣어주면 됩니다
24:32
이렇게 하면 되겠죠
24:34
이렇게 해서 각 가 속도도 계산을 했구요
24:37
이제 이 각 가속도의 d 개인 을 곱한 게 d 저의 결과가 되니까
24:42
이 밑에서 그 결과를 저장할 변수를 피치 언더가 레이트 언더가
24:47
d 라고 하고 여기에 이각 가속도 곱하기
24:53
피치에 내부 비딩
24:57
아이가 아닌 d 로 바꿔주면 될겁니다 그리고 역시 d 제어 니깐 부호가
25:01
반대가 되야 겠죠
25:03
앞에 - 를 붙여야 겠습니다
25:06
굉장히 에피 id 각각의 계산에 다 끝났으니까
25:10
그걸 다 더해주면 최종 pid 의 결과가 될 겁니다
25:13
그래서 그 변수를 피치 언더가 리포트 한다 가 pid 라고 하고
25:19
위에서 계산한 피치 레이트 p&f 하기 that i
25:27
+ 마지막으로 p7 at
25:30
이렇게 해주면 끝납니다 그럼 이제 ep id 의 결과를 또 시 씨알의
25:35
더하거나 빼거나 해줘야 되니까
25:37
이번 복사해서 php id 대신 피치를 잎을 pad 를 이렇게 계산 해
25:44
주면 되겠죠
25:45
그리고 부호는 바꿀 필요가 없어요 예전에 불을 다 맞춰 낮기 때문에 이
25:49
부분은 건드릴 필요 없습니다
25:51
그러면 이런식으로 각 속도를 제어 했을때 어떻게 동작하는지 한번 다운로드
25:56
해보고 지구의 올려서 확인을 좀 해 볼 건데 그 전에 이제 gcs 에서
26:01
목표 각 속도 랑 현재 각속도 를 확인 해 봐야 되니까
26:05
근데 지금은 각도를 주력하고 있죠 그 부분을 각 속도로 조금 바꾸겠습니다
26:10
그거 바꾸려면 목표 각 속도는 플러스 마이너스 50으로 이전에 각도 제어
26:15
할 때랑 똑같으니까 이건 그대로 두고
26:18
이제 현재 각도 대신 현재 각 속도를 짓으로 보내주면 됩니다 그래서 그
26:22
부분은
26:23
밑으로 쭉 내리면 있죠
26:26
자 이 부분에서 출시 s 로 보내는 데이터를 각도 대신 각 속도로 보내
26:31
주면 되요
26:33
자 이 부분이 쥬 cs 로 20 바이트 fc 정보를 송신하는 부분인데
26:39
인덱스 5번 6번 2 피치 각도 정보 였고 그리고 곱하기 100 한거는
26:45
그냥 스케일 팩터 를 곱해 준 거죠 그래서 여기서 bn 5080 에 피치
26:50
대신 icm 2060 2
26:52
자이로 x 값을 보내주면 됩니다 그래서 그 부분 코드를 조금
26:56
수정하겠습니다
26:57
자 이 부분 복사 하구요 2분 지우지 않고 주석으로 맞겠습니다
27:03
그리고 이 밑에서 bn 5080 피치 대신 i came 0602
27:09
자이로 x 를 보내 주면 되죠
27:12
자 이렇게 해주면 될 겁니다
27:15
5번 6번 다 이렇게 바꿔주면 되요
27:19
그리고 이 부분이 피치 목표 각도 부분은 데
27:23
목표 각도나 각속도 난 값에 범위는 똑같이 최대 플러스 - 50 이기
27:27
때문에 그냥 이대로 사용해도 될 것 같습니다 그래 이제 마지막으로 병수
27:32
선언을 하도록 하겠습니다
27:34
맨 위로 올라오지 구요 역시 지역 변수로 선언 하겠읍니다
27:40
이 변수는 각도 제어 때 선언했던 변소 랑 종류가 같으니까
27:45
이부분 그대로 복사해서 이 밑에 붙여 넣기 해서 사용하겠습니다
27:51
그리고 변수 이름이 조금 다르죠 레이트 라는 이름이 있으니깐
27:55
여기에 레이튼 이렇게 추가하겠습니다
27:58
모든 변수에 다 이렇게 레이트를 추가하도록 하겠습니다
28:06
그리고 각속도 제어는 변수가 나 더 있었죠
28:10
이전 각속도 를 저장할 변수 가 나 더 있었습니다
28:13
그래서 필로 타 지고 그 변수가 icm 220 육봉이
28:18
좀 더 강 자이로 언더가 백승헌 더 가
28:22
prev 했었죠 자 이렇게 까지 하면 되구요
28:26
이제 다운로드 한번 해보고 각속도 제어는 어떻게 동작하는지 한번
28:30
확인해보겠습니다
28:31
그럼 다운로드 하겠습니다
28:37
창 뜨면 확인 아직 5k 하겠습니다
28:43
다운로드 가 다 됐고 실행 시키겠습니다
28:48
그럼 바로 지구의 올려서 확인을 해 볼 건데 이제 제어 방식을 각
28:52
속도제어 로 바꿔 짜 나요
28:54
각 속도제어 에서는 목표 각속도 가 0이면 드론이 움직이지 않고 현재
28:59
각도를 유지해야 될겁니다
29:01
그래서 그거를 생각을 좀 하시면서 실제로는 어떻게 동작하는지 한번 확인해
29:05
보시기 바라겠습니다
29:07
먼저 gcs 를 실행시키고 커 네트를 하구요
29:11
개인 탭을 열고 들어온 의 정령을 높겠습니다
29:22
으 개인이 수진이 됐고 지금은 외부 pid 개인은 사용 하지 않으니깐
29:27
헷갈린 이까 다 0 으로 바꾸겠습니다
29:31
이렇게 하고 그리고 내부 pid 개인을 사용을 할 건데
29:35
우선은 이것도 다 0 을 넣고 시작해보겠습니다
29:41
갔고 이제 그래프 탭에서 피치 랑 3 p 를 선택하고 요 그리고 줌
29:47
아웃을 쪼끔 땡기고
29:49
그리고 조종기 에 피치 키를 조작하면 빨간색 그래프가 받기 적 최대
29:55
플러스 마이너스 50가지 바뀌도록 코드를 짜 썼구요
29:58
조작을 했더니 우리가 원하는 대로 최대의 플러스 - 5 식으로 바뀌고
30:03
있습니다
30:04
이제 이게 목표 각 속도가 되는거예요
30:07
그리고 파란색 그래프는 이제 각도가 아닌 각 속도를 출력하고 있습니다
30:12
그래서 이렇게 들어오니 멈춰 했을 때는 각 속도가 영 이구요
30:16
움직이면
30:18
이렇게 각 속도가 바뀌고 이러다가 다시 멈추면
30:23
자세가 어떻든 각속도 는 다시 0이 됩니다
30:27
그래서 이 조종기를 조작을 하면 이 각 속도만큼 들어오니 회전을 하게
30:31
되는 거예요
30:32
지금은 개인이 0이니까 제어가 안 되고 있는 상태고
30:36
이때는 쓰로틀 게임은 반응합니다 그러면 이제
30:40
아미를 하구요
30:42
그리고 쓰로틀 기회를 좀 높이고
30:46
피 츠 키 를 조작해 도 아무 반응이 없죠
30:55
그리고 드론을 또 앞뒤로 한 번 기울여 보겠읍니다
31:03
[음악]
31:06
역시 개인이 0이니까 제어가 안 되고 있는 상태에서 아무 반응이 없습니다
31:12
그럼 이제 개인을 조금 바꿔보겠습니다
31:15
먼저 p 게임부터 바꿀 건데 얼마를 넣어야 될지 감이 안 오죠
31:19
처음에 들어오는 멈춰 있고 이때 각 속도는 00일 거구요
31:23
피치 키를 최대로 올리면 목표 각속도 가 51 테니까 오차는 목표 -
31:29
현재 해서 52 될겁니다
31:31
그때 개인을 이렇게 10 정도를 넣으면 pid 의 결과는 502 될 거고
31:36
그게 시 씨알의 더해지니 깐
31:38
들어오니 멈춰 있을 때 피 츠 키 를 최대로 올려도 실시할 값이 500
31:42
밖에 안 변하자
31:44
씨알의 범위는 마노 100부터 21,000 까지 인데 그 안에서 500은
31:48
조금 작은 것 같으니깐
31:50
개인을 20을 나오겠습니다
31:56
자 이렇게 하고 다시 확인해 보겠습니다
31:59
이제 아 밍 을 하고 스로틀을 조금 높이 구요
32:05
지금은 제어가 되고 있는 상품 등
32:08
목표 랑 헌재가 둘다 염 이어서 오차가 0 이기 때문에 즉 목표 값
32:13
속도를 유지하고 있는 상태이기 때문에 모터 회전속도 에는 변함이 없습니다
32:17
이제 피치 키를 앞뒤로 한번 조작해 보겠습니다
32:21
지금은 p 제어 만 하고 있는 상태에요 서사의 올렸고
32:26
이러면 들어오니 앞으로 기울어 줘야 되는데
32:29
뒤가 무거워서 앞으로 못 가고 있습니다 최대로 오냐고
32:34
앞으로 아니 기울어져 있죠 그래서 뒤고 찾아 있습니다
32:39
그래서 아직도 개인이 좀 작은 것 같으니깐 개인을 조금 높여 보겠읍니다
32:43
에픽 ain't 22 너무 작은 것 같으니까 이번엔 40을 넣어보겠습니다
32:50
또 암 잉 을 하고 쓰로틀 높이 구요
32:54
역시 들어오니 멈춰 있을 때는 목표 랑 현재 값 속도가 다영이 여성
32:58
모터 회전속도 늘 변함이 없죠 4 피치 키를 조장을 해봤더니
33:04
아까보다는 모터 회전 속도가 더 빨라져 없는데 역시 귀가 무거워서
33:09
앞으로 목뒤 울어 주겠죠 그래서 p 개인은 다시 한번 조금 더 높여
33:13
보겠읍니다
33:15
p 개인 42 너무 작으니까 이번에는 50을 넣어보겠습니다 5
33:23
또 암 잉 을 하고 스로틀을 좀 높이고 요
33:28
아 피치 키를 조장을 할껀데 먼저 이 그래프를 좀 확인해 보시기 바랍니다
33:33
다비치 키를 이루어져 몰랐던 목표 각 속도가 점점 높아지겠죠
33:39
거의 최대로 올려야지 등이 앞으로 기울어 줘
33:44
그리고 이번엔 뒤로 내라 보겠습니다
33:47
에 살짝 열었더니 들어오니 뒤로 키우라고 줘
33:51
그리고 이번에는 들어온 의 움직임 한 번 보세요
33:55
444
33:59
투미 앞으로 사사에 기울어지고 있구요 그리고
34:04
스킬을 미플 내렸던 또 뒤로 사사에 기울어지고 있죠
34:10
그래서 이 그래프를 보면 목표 각속도 대로 정확히 제어가 되고 있진
34:14
않아요
34:15
근데 들어오네 움직임을 보시면 이전에 각도 제어 할 때보다 움직임은 더
34:19
부드러워 보입니다
34:21
그러면 이 상태에서 p 개인을 더 높이면 어떻게 반응하는지 한번
34:25
확인해보겠습니다
34:27
지금 p 개인이 50인데 조금 더 높여서 60을 넣어보겠습니다
34:34
이제 키를 조금만 조작해 도 모터가 크게크게 편할텐데
34:38
그때 각속도 저의 장점이 나타납니다
34:41
이전에 각도 제어 할 때는 d 제어를 써야지 제동 효과를 볼 수가
34:45
있었는데 각 속도로 제어를 하면 목표 각속도 구나 빠르면
34:50
잎이 제어 하나만으로도 제동 효과를 볼 수가 있어요
34:54
그래서 어떻게 동작하는지 한번 확인해 보겠습니다
34:58
특히 를 복잡했던 2
35:02
앞으로 기울어지는 과정을 보시면 이렇게 작은 진동 처럼 보이는게 제동
35:08
효과라고 보시면 됩니다
35:09
각도 제 할 때는 피게 이 크면 큰 진동이 생기긴 했지만 이렇게 작은
35:14
진동은 없었죠
35:15
자 그럼 다시 뒤로 좀 기울일 건데
35:24
지금은 또 p 개인이 커서 이렇게 제동 효과도 커지면서 진동이 심한
35:29
것처럼 보이는데
35:30
p 개인을 좀 낮추면 진동 이렇게 커진 않아요 그래서 각속도 제어 의
35:35
장점은 이렇게 부드럽게 제어가 되고 또 p 제어 하나만으로도 약간의 제동
35:40
효과를 볼 수 있다는 겁니다
35:42
지금은 p 개인이 너무 큰 것 같으니깐 다시 50으로 줄이고
35:46
이번엔 디게 일을 좀 추가해보겠습니다 이제 p 개인을 50으로 낮추 금
35:51
그리고 이번엔 비 개인 을 넣어 볼 건데 역시 얼마를 넣어야 될지 감이
35:55
잘 안 오죠
35:57
근데 각 속도제어 에서 d 제어는 각 가속도로 재현하는데
36:02
가 속도는 엄청 민감하게 바랍니다 그래서 개인이 크면 들어온 도 정말
36:06
불안하게 제거가 되기 때문에
36:08
개인을 좀 많이 낮춰서 넣어야 되요 그래서 1호 정로 를 넣어보겠습니다
36:16
이렇게 하고 또 어떻게 동작하는지 한번 확인해 보겠습니다
36:20
또 암 잉 을 하고 쓰로틀 조금 있었는데
36:25
자 쓰로틀 만 조금 높였는데 도 가 속도가 엄청 심해지면서 이렇게
36:29
아
36:30
제어가 불가능 할 것 같습니다 이 상태로 제어를 하면 안되요
36:35
이렇게 하면 모터 에도 손상의 갈 수 있습니다
36:37
그래서 모터가 이렇게 좀 너무 민감하게 막 팍팍 변하는 것 같다 싶으면
36:42
개인이 잘못된 걸 수 있으니깐
36:44
특히 d 개인을 조금 낮춰 주셔야 될 겁니다
36:47
그래서 t 게이는 좀 낮춰 보겠습니다 지금 d 개인을 5만 넣었는데도
36:52
너무 큰 것 같으니깐 한 일 정도로 나오겠습니다
36:57
이렇게 하고 다시 확인해 보겠습니다 그래 또 암 잉 하고 쓰로틀 조금
37:02
높이고 요
37:04
이번에는 그렇게 진동 효과가 없죠
37:08
뭐 피치를 앞으로 기울여 보겠습니다
37:11
[음악]
37:15
부드럽게 변화하는 게 보이죠
37:21
부럽게 해서 나고 있습니다
37:24
이 앞으
37:26
[음악]
37:31
확실히 움직임이 엄청 부드러워 졌죠
37:35
근데 뒤가 무거운 것은 지금 계속 어쩔 수 없이 좀 피고 쳐진 현상이
37:39
있어요
37:40
제가 주 미로 중간으로 전 이동시 하고 있습니다
37:44
3
37:47
이제 중간 인데 이게 제가 각속도 를 0으로 두면
37:52
제가 너무 좋은 거군요
37:57
아 이 정도로 되면 이제 목표 각속도 가영 이어서 그닥 또 를 유지해야
38:03
되는데
38:04
쥐가 무가 와 계속 뒤로 넘어 가죠
38:07
아씨 중간으로 한 방이 있었습니다
38:11
은 상태에서 목표 각속도 가 염 이어도
38:15
뒤로 넘어가는 현상이 있습니다
38:16
[음악]
38:19
확실히 아까보다는 제어가 더 부드럽게 되고 있는 것 같죠
38:28
이번 각 속도 싱글 pid 제어 에서는 아이 제어는 하지 않겠습니다
38:33
이제 각 속도 제어를 해보니까 p 게인이 좀 커도 지난 시간에 했던 각도
38:39
제가 때처럼 그렇게 큰 진동이 생기지는 않았고
38:42
디제 할 때처럼 작은 진동이 조금 보이긴 했습니다
38:46
p 제어가 각 속도를 제어하는 거라서
38:49
목표 각속도 보다 빠르게 기울어지면 그 목표 각속도 를 유지하려고
38:54
반대로 제동을 걸어 주는 역할까지 포함 하고 있어요
38:57
그래서 그렇게 작은 진동이 좀 보인 겁니다
39:00
그리고 d 제어가 가속도 방향의 반대방향으로 제동을 걸어 주는 역할을
39:05
하기 때문에
39:06
아까처럼 d 개인을 살짝 줬더니 훨씬 더 부드러운 움직임을 보였죠
39:12
그래서 각 속도 제어가 이렇게 장점이 정말 많은데
39:15
단점이 큰 게 하나 있죠 각도 제어 할 때는 조금 기울어져도 그 각도를
39:21
유지할 수가 있었는데 이것은 각 속도 제어 하기 때문에 각도를 그대로
39:26
유지하지 못합니다
39:28
약간 처럼 목표 각속도 를 0으로 했을 때 이상적인 경우라면 속도 가
39:33
0이면 움직이지 않고 그 자세 그대로 있어야 되는데
39:37
한쪽으로 기울어 지기 시작하면 그 쪽으로 더 처지면서 쭉 더 기울어진
39:42
현상이 발생해요
39:43
물론 제 기울면서 반대방향으로 제어가 되긴 하겠지만
39:47
원래 각도 대로 돌아오지 못하고 서서히 기울게 되죠 그래서 각도 제어
39:52
해서 각도를 유지하는 특성이 란
39:55
각 속도제어 에서 부드럽게 회전하는 특성
39:58
그 두 특성이 같이 있으면 들어오네 자세제어 의 성능이 엄청 좋아 질것
40:03
같습니다
40:04
이 두 개의 특성을 잘 섞으면 원하는 대로 조종기 키값이 목표 각도 가
40:08
되면서 또 각 속도제어 처럼 부드럽게 제어 되게 할 수 있을 것 같습니다
40:13
그래서 이제 각도 제어 랑 각 속도 제어가 같이 필요해 지는 거죠 그래서
40:18
나온 개념이 각 속도 제어를 하는데 지금은 그냥 조종기 키값을 목표
40:24
각속도 로 사용 했잖아요 근데 이게 아니고
40:27
이제 현재 기울어진 각도에 따라서 각 속도를 제어 하면 될 것 같습니다
40:31
쉽게 이해하려면 기울어진 만큼 각속도 를 제어 한다고 생각하시면 되요
40:38
이제 예를 좀 들어 드리면 들어온 이렇게 기울어져서 멈춰있다 고 해
40:43
보겠습니다
40:44
지구의 올려놓고 처음 시작할때 상황인 거죠
40:48
현재 각도가 뒤로 기울어져서 - 20도 라고 하구요
40:52
멈춰 있으니깐 각 속도는 영 일 겁니다
40:55
이제 각 속도 제어를 할 건데 현재 기울어져 있는 만큼 목표 각속도 를
41:01
결정합니다
41:02
즉 이 각도의 오차가 목표 각 속도가 되는거예요
41:06
그리고 이제부터는 단위가 거의 무의미 해집니다
41:10
단위는 생각하지 마시고 숫자의 부호 랑 크기만 생각하시면 되요
41:14
그래서 - 20도가 기울어져 있으니까
41:17
각도의 오차는 목표 각도 - 현재 각도에서 플러스 이 집이 될 거고 그
41:23
크기만큼 각 속도를 제어하는 거예요 그래서 이게 목표 각 속도가 되는
41:28
거고 거기에 현재 각속도 인 0을 뺀 걸 각 속도의 오차로 정의를 하고
41:34
이걸 가지고 모터를 제외합니다
41:38
앞으로 기울어져 야 되니까 뒤에 모터를 증가시키고 앞에 모터를 감소시키면
41:43
되겠죠
41:44
이때 p 개인을 50으로 해서 이런 결과가 나와서 이제 들어오니 앞으로
41:49
기울어 진다 고 해 보겠습니다
41:51
그러다가 이제 목표 각도 인 영도가 돼서 멈춰있다 고 해 보겠습니다
41:56
그러면 목표 각도 에 도달 했으니깐 제어 값도 0이 되어야 겠죠
42:01
목표에 도달 했으니까 각도 오차는 0이 될 거고 그게 곧 목표 각 속도가
42:07
되고 또 멈춰 있으니까
42:09
현재 각속도 도영 일겁니다 따라서 제어의 결과는 0이 되겠죠
42:14
그래서 이렇게 유지를 한다고 하면 내 모터가 지금처럼 같은 속도를 계속
42:19
유지하면 될 거에요 그래서 이렇게 보면 각도 제어 할 때랑 별로 다를게
42:24
없어 보이죠
42:25
근데 - 20도에서 목표 각도 인 영도로 수렴해 가는 과정을 보시면 이
42:31
과정이 각도 제어 때라는 완전히 달라요
42:34
제가 아까 각 속도로 제외하면 부드러운 제어가 가능하다 고 있던 게 이
42:38
과정에서 나타납니다
42:40
그 다음엔 처음에 - 20도로 기울어져 있었고 또 멈춰 있었죠
42:44
뒤로 누워 있으니까 마이너스가 보죠
42:47
그래서 영도로 수렴을 해야 되는데 이때 각도 오차가 목표 각속도 가
42:53
되니까 이제 플러스 20t 그리퍼 스에게 속도로 앞으로 기울어 지기
42:58
시작할 겁니다
42:59
그러다가 다음 루프에서 - 10도가 됐어요 그럼 이 때는 목표 각속도 가
43:05
또 10t 그리퍼 쎄게 될텐데
43:07
이때 기울어지는 속도가 10t 그리퍼 색보다 빠르면 이때부터 반대방향으로
43:13
제동이 걸리기 시작합니다
43:15
그렇게 쭉 영도에 더 접근 하겠죠
43:18
이렇게 목표 각도 에 가까워질수록 목표 각 속도도 0에 가까워 지기
43:23
때문에
43:23
목표 각도 부근에서는 더 천천히 접근하게 될 거구요
43:28
그러다가 목표 각도의 일치하면 목표 각속도 도영이 되니까 이 목표에서
43:33
정제 하게 될겁니다
43:35
즉 목표에서 멀 때는 빠르게 접근 하다가
43:39
가까워질수록 천천히 접근하게 된다는 소리야
43:42
그래서 맨 처음에 시험때 보셨듯이 기울어진 채로 시작해서 아 밍 을 하고
43:47
제어가 시작되자마자 처음에 급격하게 반응 하다가 서서 의 목표 각도로
43:51
수렴 했죠
43:52
오버 슈트도 거의 없었어요 그리고 d 제어가 또 각 가속도로 제동을 걸어
43:57
두기 때문에 더욱 더 부드러운 제어가 가능해 집니다
44:01
이게 각도 제어 싱글 pid 랑 크게 다른 점입니다
44:06
이제 아까 처럼 각 속도 제어를 할 건데 좀 전의 각 속도 싱글 pid
44:12
로저 했을 때는
44:13
조종기 조작 값이 바로 목표 각속도 로 들어 같잖아요
44:17
근데 이제 각도의 오차의 따라서 목표 각속도 를 결정해야 되니까
44:22
이 레퍼런스를 정해 하는 부분이 조금 달라질 겁니다
44:25
그래서 목표 각속도 를 이제 이런 식으로 정의할 수 있겠죠
44:29
목표 각도에서 현재 각도를 뺀 각도 오차의 따라서 각 속도를 제한한
44:35
될겁니다
44:36
목표 각도는 또 종기로 조작할 수 있게 할 거구요
44:39
현재 각도는 bn 5080 에 피치 각도 를 사용하면 될 겁니다
44:44
그래서 이걸 또 소스 코드로 작성을 해 볼 건데 아직 다 끝난건 아니고
44:48
먼저 소스 코드 작성을 좀 하고 또 이어서 설명드리도록 하겠습니다

```

#### video 47
- ch10-3 cascade dual loop pid control

{% include youtubePlayer.html id=page.youtubeID47 %}

```diff
00:14
지난 시간에 싱글 pid 로 롤 피치 각도 제어 하는 코드를 구현을
00:18
했었고 그대로 비행 테스트 도 한번 해봤습니다
00:21
근데 이 싱글 pid 가 회전이 까치 빠른 제어가 필요한 시스템에서는
00:25
제어 성능이 그렇게 좋지는 않았죠
00:28
제어가 타이트하게 돼야 되는데 그렇지 못하고 헐렁하게 제어되는
00:32
느낌이었구요
00:33
특히 저희 들어오는 뒤가 무거워서 계속 뒤로 쳐지는 현상이 있는데
00:37
싱글 pid 만으로는 이 현상을 해결할 수가 없었습니다 그래서 비행을
00:42
하려면 피치 키를 계속 앞으로 밀고 있어야지
00:45
수평 유지가 가능 했었어요 이번 시간에는 이 문제를 해결하기 위해서
00:50
더블 pid 제어 방식으로 바꿀 건데 그 전에 지금은 각도 제어 방식을
00:55
썼었는데
00:56
만약에 각도가 아닌 각 속도 제어를 한다면 어떻게 되는지 랑 또 더블
01:01
pid 가 어떤 구조로 이루어져 있고 이걸 사용하면 뭐가 좋은지를
01:06
설명드릴 예정입니다
01:07
그리고 실제 구현을 해 보고 또 지구의 올려서 실험도 해 보도록
01:11
하겠습니다
01:12
그래서 이번 시간에 설명들을 방식이 최종적으로 우리가 사용할 방식이 될
01:16
거구요
01:17
제 어코드는 제가 따로 드린다 고 그랬는데 그 내용을 이번 챕터
01:21
마지막에서 설명을 드려 그랬는데
01:24
분량이 그렇게 까지 할 필요는 없을것 같아서 다음 시간에 실제 제어 코드
01:28
작성을 하면서 설명드리도록 하겠습니다
01:30
그래서 이번 영상이 이번 챕터의 마지막 영상이 될 것 같습니다
01:35
그리고 이 더블 pid 방식이 사용하는 사람마다 조금씩 다를 수 있으니까
01:40
제 강의가 정답이다 이런게 아니고 저는 이렇게 사용을 했고 그랬더니
01:45
이렇게 비행이 됐습니다 라고 이해하시면 될 것 같습니다
01:49
그리고 이번 시간에는 설명을 좀 드리고 구현을 하고 그리고 다시
01:53
설명드리고 부연 하고 이런 식으로 진행할 예정입니다
01:57
그럼 먼저 이번 시간에 구현할 더블 pid 제어 영상부터 확인해보겠습니다
02:04
지금 드러내는 이번 시간에 구현할 더블 pid 제어 코드가 들어가 있는
02:08
상태구요
02:09
이제 더블 pid 제어의 성능이 어떤지 지구의 올려서 확인해봤습니다
02:15
커넥트 를 하고 들어온 의 전원을 넣었더니
02:18
현재의 들어온 에 저장된 게임 2 ccs 의 소식이 되고 그 개념이
02:23
이렇게 표식을 했죠
02:25
이제 내부 외부 pid 제어를 다 사용하기 때문에 피치의 6 개개인이 다
02:30
0이 아닙니다
02:32
6 개개인을 다 사용하는 거에요 그리고 아이 제어도 사용을 하고 있는데
02:36
지난 시간에 했던 각도 제어 싱글 피아 에 대해서는 이 뒤가 너무 쳐져
02:41
있어서 아이 제어가 우리가 원하는 대로 잘 동작하지 않았죠
02:45
이제 더블 pid 로 바꿨더니 제어 성능이 어떻게 바뀌었는지 그래프를
02:50
통해서 확인을 좀 해봤습니다
02:52
굉장히 제조 전기도 키고 그리고 그래프 탭에서 피치 랑 3 포인트를
02:58
출력을 하구요
03:01
그리고 피츠 키를 조작하면 빨간색 그래프가 바뀌는데 이게 목표 각도가
03:06
되는거고
03:08
잘 변하고 있죠
03:11
그리고 드론을 앞뒤로 기울이면 파란색 그래프가 변하는데 이게 피치
03:15
각도입니다
03:17
그래서 지금 출력하는 것은 지난 시간 했던건 같아요
03:20
목표 각도 랑 현재 각도를 출력하고 인상됩니다
03:24
이제 아 밍 을 하고 쓰로틀 좀 높이면 제어가 시작되는데
03:28
지난 시간에 싱글 pid 에서는 목표 각도로 아예 접근을 못 햇죠
03:32
근데 더블 pid 는 제어가 시작되면 어떻게 반응하는지 한번 보세요
03:40
아 밍 을 하고 이제 스로틀을 조금 높였던 이
03:45
제어가 시작되자 마자 바로 목표 각도 n 수렴 하자
03:49
싱글패 d 는 이 뒤가 무거워서 아예 목표 각도 인 영도에 접근을
03:53
못했는데
03:55
근데 더블 pid 를 사용하면 이렇게 오버 슈트도 없이 신속하게 목표
04:00
각도 로 접근할 수 있습니다
04:02
싱글 피해액 이란 성능차이가 진짜 어마어마 하죠
04:06
그리고 목표 각도의 얼마나 잘 수렴하고 있는지 그래프 줌을 당겨 와서
04:11
확인을 좀 해봤는데
04:14
지금은 아이 제어 까지 동작하고 있어서 목표 각도 인 영도에 점점
04:18
수렴하고 있죠 자 이정도면 미세 후 차라고 볼 수 있을것 같고
04:22
아니 제어가 금이 3호 차를 점점 줄어가고 있는 상태입니다
04:27
그래서 오차가 0.5 2 보다 작게 유지하고 있어요
04:31
현재가 c 그래프 줌 아웃을 하고
04:42
굉장히 조종기를 조작해서 목표 각도를 좀 바꿔봤습니다
04:47
그러면 들어온 도그 목표 각도 를 따라 가야겠죠
04:50
그래서 파란색 그래프가 빨간색 그래프를 따라 다니면 됩니다
04:55
이렇게 천천히 조정이 를 조작해 떠니 거의 일치 하다시피 목표를 추정하고
05:00
있죠
05:01
그리고 이때는 목표 각도를 30도 이렇게 조작을 했는데 이 지구에 막혀서
05:06
드론이 앞으로 더 못 기울어지고 있는 상태입니다
05:10
이때 이 오차가 아 이제 여기서 누적이 되면서
05:14
그 다음 목표 각도를 이렇게 낮춰 쓸 때 약간의 시간 지연이 생겼습니다
05:19
i 제어가 잘 동작하고 있다고 보시면 되고 이렇게 오차가 발생하는 시간이
05:25
길어질수록 그 누적 값도 커지기 때문에 그만큼 그 뒤에 이렇게 반응하는
05:30
시간에 더 많은 시간 지연이 생길 수 있습니다
05:33
그리고 뒤로 기울여 쓸때도
05:36
이렇게 목표 각도를 잘 추정하고 있죠 그래서 이렇게 보면 거의 뒤로
05:41
쳐지는 현상이 없어 보여요
05:45
그리고 손가락으로 톡톡 쳐 봤는데 이게 급격한 메란 이 짧게 들어갔을 때
05:49
라고 보시면 되고
05:51
보시다시피 0.1 초 0.2 초 만에 원래 위치로 돌아오자
05:56
되게 빠른 시간에 복귀를 하는 데도 진동이 거의 없습니다
06:00
펜텀 투 확인했을 때도 이런 비슷한 패턴을 보여 썼죠
06:04
오버 슈트가 딱 한 번 발생하고 원래 위치로 복귀 했었는데
06:08
우리 들어온 도 펜텀 투 랑 비슷하게 동작하는 것 같습니다
06:14
그리고 잡아당겼다 감았을 때 이 때는 왜 라니 길게 들어왔을 때 라고
06:18
보시면 되구요
06:20
이때도 진동 거의 없고 오버 슈트가 이렇게 한번 발생하고 서서히 원래
06:26
위치로 돌아오자
06:28
역시 펜텀 투 랑 비슷한 패턴을 보이긴 하는데
06:31
근데 좀 더 천천히 복귀하는 것 같습니다
06:34
이게 아이 개인이 좀 커서 그럴 수도 있구요 또 아이 누적 값에 링
06:39
맥스를 잡아주는게 통상적인 데 지금 이 드러내는 그 기능이 없어요
06:43
나중에는 답변 할 겁니다 어쨌든 지금 이 상대도 제어가 빠르고 부드럽게
06:49
되고 있죠
06:51
그래서 이렇게 하고 다시 그래프 주물 좀 담겨 봤는데 그렇게 외란 이 좀
06:56
있었어도
06:57
역시 목표 각도의 잘 수렴하고 있습니다
07:00
그래서 이 상대로 비행 테스트를 한번 해봤습니다
07:05
자아 밍 을 하고 쓰로틀 높이면 이제 제어가 시작이 되죠
07:11
근데 더블 pid 는 조금 주의하셔야 할게
07:14
셀프레벨링 모드에서는 이렇게 평평한 곳에서 비행을 시작하는 괜찮은데
07:19
바닥이 좀 기울어졌다 던가 해서 드론의 자세에도 기울어진 상태에서 비행을
07:23
시작하면
07:24
제어가 시작되자 마자 바로 수평으로 확정되기 때문에 근처에 사람이 있으면
07:29
위험 할 수 있습니다
07:31
그래서 나중에 더 한번 말씀 드리기 나겠지만 모터 암 잉 하고 이륙할
07:35
때는 반드시 사람이랑은 적어도 3m 정도는 떨어진 곳에서 비행을
07:40
시작하셔야 되요
07:42
보시면 엄청 안정적이고 부드러운 비행이 되고 있습니다
07:46
싱글 ti 이라는 확실히 비행 성능이 다른 게 보이자
07:50
싱글 켈리는 제가 좀 헐렁하게 되는 느낌이었고
07:54
출렁 된 형성도 좀 심했는데 법을 페이지로 바꿨던 힘들긴 없이 소탕을 잘
07:59
유지하고 있습니다
08:01
그리고 뒤가 무거워서 처지는 것을 싱글 ti d5 했을 때는 수평 유지
08:05
하려면 제가 피치 키를 계속 아프고 누르고 있어야 되는데 이 법을 pid
08:10
는 뒤로 처지는 걸 pid 제어가 잡아주기 때문에
08:13
피치를 중립으로 덧 5유로 처지는 현상이 거의 없습니다
08:17
이렇게 좌우 고아 피로도 이동을 좀 시켜 봤구요
08:21
지금은 요새 형아 들어가 있는 상태여서 누가 회전하지 않고 한 방향을
08:25
계속 보고 있잖아 요 제가 없으면 누가 혼자 막 그래 그러면 위험하니까
08:30
는 절대로 지금은 프로펠러를 달고 갱 하시면 안됩니다
08:42
스팸을 잘 유지하고 있구요
08:51
이거는 제가 요 를 한번 회전시켜 본다고
08:54
요가 회전 하니까 이렇게 조종을 제가 잘못해서 들어오니 좀 같이
08:59
흔들거리고 있죠 이게 제어가 잘 안되는게 아니고 제가 조정을 못하고 있는
09:04
겁니다
09:06
그래서 제어가 잘 되는 거랑 조종을 잘 하는 것은 별개 니깐
09:10
시뮬레이터로 충분히 연습을 좀 하시라고 그렇죠
09:13
조종을 잘못하면 위험한 상황이 발생할 수 있으니까
09:16
틈틈이 시간이 되는대로 시뮬레이터로 연정을 좀 하시길 바라겠습니다
09:23
이번 시간에는 이렇게 부드러운 비행이 되도록 더블 pid 제어 이렇게 해
09:27
보겟습니다
09:30
역시 이번 시간에도 절대 프로펠러는 끼지 마시구요
09:34
모터 돌 때도 손대지 마시고 특히 더블 pad 를 하면 이게 제어의
09:38
특성상 모터가 갑자기 급격하게 더운 일이 많이 생길 수도 있습니다
09:43
그니깐 특히 더 안전사고에 유의 해서 따라 하시기 바라겠습니다
09:48
우선 싱글 pid 제어를 했을 때 무슨 문제가 있었는지 다시 한번
09:52
설명드리겠습니다
09:54
우리 들어오는 뒤가 무거워서 계속 처지는 현상이 발생 했잖아요 그래서
09:58
목표 각도를 영도로 해도 이렇게 영도에 수렴하지 못하고 - 20도 정도가
10:04
계속 쳤습니다
10:06
이렇게 처지는 걸 p 제어가 잡아 줘야 되는데 그러려면 p 개인을 높여야
10:11
되구요
10:11
pda 를 높였던 이 영도로 접근했지만 되신 오버 슈트 랑 언더 슈트가
10:17
엄청 커졌고
10:18
심한 경우에는 아예 발산 했었습니다 그래서 또 그 현상을 막으려고 d
10:23
개인을 높이면
10:25
작은 진동이 심해지면서 비행이 거의 불가능 있었죠 그래서 이번에는 이
10:30
오차를 아이 제어로 잡아 보려고 했더니 오차가 너무 커서 아이 제어로 는
10:36
제거가 어려웠습니다
10:38
그래서 pid 개인을 다 엄청 낮춰서 비행 성공했는데
10:43
개인이 낮기 때문에 제어가 제대로 안되고 계속 출렁출렁 되면서 좀
10:48
불안하게 비행을 했었죠
10:50
d 게인이 낮아서 왜란 해도 반응이 거의 없었구요
10:53
또 pda 도 낮아서 조종기 조작을 해도 바로바로 반응하지 않았습니다
10:58
그래서 제가 좀 헐렁하게 되는 느낌이 얻자
11:00
그래서 이런 한계를 때문에 빠르고 부드러운 제어를 하기 위해서는 새로운
11:05
제어 개념이 필요해 지기 시작한 겁니다
11:09
지난시간 햇던 각도 제어 징글 캐디는 이런 구조를 가지고 있었죠
11:14
목표 각도 해서 현재 각도를 된걸 오차로 정 했구요
11:18
목표 각도는 조종기 조작의 따라서 사용자가 바꿀 수 있는 값이고
11:22
현재 각도는 bn 5080 센서에서 측정된 회전각 또 였습니다
11:28
이 오차를 이용해서 pid 제어 했었는데
11:30
이중에 d 제어는 5차 대신 자이로 센서의 각 속도 값을 사용 했었죠
11:36
그렇게 계산된 결과를 다 더해서 모터에 넣어 줬더니 제어가 됐었습니다
11:42
제어가 되면 각도가 변하니까 그걸 이용해서 반복적으로 제어 알고리즘 2
11:47
동작 했었죠
11:49
이때 pid 각각의 역할을 좀 생각해 보시면 피는 목표 각도로 신속하게
11:55
수렴 하도록 하는 역할이 얻고
11:57
d 는 그렇게 신속하게 변하면 오버 쇼트가 커지니까
12:02
그걸 방지하기 위해서 각속도 에 반대 방향으로 제동을 걸어 주는 역할이
12:06
얻습니다
12:07
그리고 아이는 미세 오차를 제거하는 역할이 얻고 p 랑 d 제어의 비해서
12:12
역할이 그렇게 크지는 않습니다
12:14
제어 량도 아주 작아요 이제 생각을 좀 해 보시면 이렇게 뒤가 계속
12:20
처지는 데 이걸 해결하려면 p 개인을 키워야 되죠 그리고 또 p 제어는
12:25
제어 의 전체적인 반응속도 에도 관련 했습니다
12:30
목표 값으로 빨리 수렴을 하고 또 안정적으로 수렴을 하는게 제어 성능의
12:35
기본이 되는데
12:36
빨리 수렴하게 하려면 잎이 개인을 키워야 되요
12:40
그래서 p 개인을 키우면 문제는 이 각도 제어 싱글 pid 방식은 p
12:45
제어가 목표 각도로 도달할 때까지의 제어 방연이 항상 플러스 방입니다
12:52
현재 각도가 이렇게 기울어져 있고
12:55
영도가 목표다 라고 한다면 p 제어는 이 목표로 도달하는 그 과정에서
13:01
이게 빠르게 접근 하든 천천히 접근하던 그것의 상관없지
13:05
항상 플러스 방향으로 제가 됩니다 목표 - 현재 각도로 제어를 하니까
13:09
상상플러스 가 되겠죠
13:11
그리고 빠르게 접근하면 그만큼 오버 슈트가 날 테니까
13:15
그걸 d 제어가 잡아 줘야 되는데 d 개인이 크면 진동을 발생시키기
13:19
때문에 우리가 원하는 제동 효과를 볼 수가 없어요
13:23
p 개인을 키워서 목표 각도로 수렴하게 했더니 이렇게 목표를 기준으로 위
13:29
아래로 진동이 발생 했구요
13:31
이걸 잡으려고 d 개인을 키우면 이렇게 작은 진동이 계속 생겨 썼죠
13:37
그래서 이제 이런 생각이 들기 시작했습니다
13:41
지금은 각도 제어 를 하는데 p 개인을 높이면 속도가 빠르게 간 하잖아요
13:46
근데 그 속도가 너무 크면 오버 슈트도 그만큼 커지게 되니까 그 속도를
13:51
제외 하면 어떨까라는 생각이 든 겁니다
13:54
이것은 예전에 제가 실제로 고민 했었던 것들이고 요
13:58
싱글 pid 로 각도 제어 가 너무 안 되니까
14:01
각 속도를 제어하는 방법이 없나 고민을 해본 거에요 그래서 각도 제어 가
14:06
아닌 각 속도제어 에 대해서 생각을 해봤습니다
14:10
이제 각도가 아닌 각 속도를 제외한다면 그때 pid 각각의 역할이 어떻게
14:16
되냐면 p 제어는 목표 각 속도로 수렴하게 하는 역할이 될 거구요
14:22
d 는 이제 각 속도의 변화가 되니까
14:25
각 가 속도에 따른 제동을 하겠죠
14:28
이제 가속도의 대한 개념이 나오면 살짝 생소하죠
14:31
감이 잘 안옵니다 가속도의 디제 의 역할은
14:36
가속이 붙으면 이제 드론이 너무 빨리 회전을 하게 되니깐 속도가 천천히
14:41
변하도록 하는 역할이라고 보시면 됩니다
14:44
i 제어는 목표 속도가 유지가 안되면 그 속도를 유지하도록 미세 우 차
14:49
를 제거 하는 역할이 장
14:51
그래서 각도 재앙에서 각도 대신 각 속도가 되는거고
14:55
각 속도 대신 각 가속도가 되는 거죠
14:59
즉 결론은 각 속도로 제어를 하면 목표 각 속도를 유지하면서 회전하기
15:04
때문에 우리가 원하는 속도로 회전하도록 부드럽게 제어할 수 있을 것
15:09
같습니다
15:10
속도가 막 빨리 변하면 진동도 심해지고 제어가 불안해 질 텐데
15:15
각 속도를 제외하면 그런 현상이 없어지는 거죠
15:18
이전에는 p 개인이 낮아서 뒤가 처지면서 목표 각도의 수량을 못 했었는데
15:23
각 속도로 제외하면 p 개인을 높여도 부드럽게 제어가 될 것 같습니다
15:29
그래서 이게 각 속도 제어를 할 때 구조입니다
15:33
역시 오차를 정해야 되는데 각 속도제어 니까 목표 각속도 - 현재 각
15:39
속도를 오차로 정하는 되겠죠
15:42
그러면 또 이 목표 각 속도를 어떻게 장애 하느냐
15:45
역시 조종기 조작으로 바꿀 수 있게 될 꺼구요
15:49
이전에 했던 거랑 똑같이 스틱을 중간 해두면 목표 각 속도를 0으로 하고
15:54
위아래로 조작하면 최대 플러스 - 50도 가 되도록 할 겁니다
15:59
근데 각 속도 니깐 단위는 d 그리퍼 세계 되겠죠
16:03
즉 피츠 키를 맨 위로 올리면 1초에 50도 회전하는 속도로 들어오니
16:08
기울어 질 겁니다
16:10
그리고 현재 각속도 는 icm 2060 이 자의로 값을 사용하면 될 것
16:16
같습니다
16:17
그렇게 해서 오차를 계산 하고 또 pid 계산 하구요
16:21
그 결과로 모터를 구동시키는 되겠죠
16:24
그러면 또 부터 가 회전하면서 각도 랑 각 속도가 바뀔거 고 다시 이
16:29
pid 루프가 반복되면서 제어가 될겁니다
16:33
이 방식은 아직 더블 pid 는 아니구요
16:36
싱글 pid 인데 각도 제어 가 아닌 각 속도로 제가 를 하는 거죠 그럼
16:42
우선 이렇게 했을때 코드가 어떻게 되고 또 어떻게 동작하는지 집에 올려서
16:47
확인을 해보고 그 후에 왜 더블 pid 방식을 써야 되는 지를
16:51
설명드리겠습니다
16:52
그럼 먼저 소스 코드 작업을 한 후에 이어서 설명드리겠습니다
16:58
먼저 지난 시간에 작업했던 10가지 이 폴더를 복사 하시구요
17:03
이번 시간에는 싶다 c 3 점
17:07
더블 tid
17:10
컨트롤 테스트 라고 하겠습니다
17:13
그리고 풀다 일은 복사 지구요
17:16
원의 들어와서 ioc 파일 이름 바꿔 주시고
17:19
이거 두개 삭제하시고 됐으면 큐브 아이디를 생식 했습니다
17:26
실행이 됐으면 열려있는 프로젝트 있으면 닫아 주시구요
17:29
좀전에 복사한 플래너를 임포트 하겠습니다
17:41
역시 큐브 mx 로 설정할 건 없으니까 또 바로 메인 점 c 파일을
17:44
열어보겠습니다
17:46
알렸으면 바로 지난 시간에 작성 했었던 싱글 pid 제어 코드 작성했던
17:52
부분으로 가고 있습니다
17:53
이 부분이죠 먼저 지난 시간에 작성했던 내용을 다시 한번 간단히
17:58
설명드리면 각도 제어 에서 목표 각도를 조종기 키 값으로 설정한
18:03
부분이었고
18:04
이렇게 하면 최대 플러스 - 52 되는 거죠 그래서 그 목표 각도가 이
18:08
레퍼런스 형제 저장이 될 거에요
18:10
그 후에 오차를 정했는데 목표 각도 - 현재 각도를 5 처로 정했습니다
18:16
그 다음에 이 오차의 p 개인 을 곱한 걸 p0 정 햇죠
18:22
라마이 제안은 이 5차 의 루프 타임 인 0.00 2를 곱한 걸 누적
18:27
그래서 이 변수에 저장한 후에
18:30
그리고 이 변수에 아이 개인 을 곱한 걸 아 이제 로 정했습니다
18:35
이제 d 쌓아 밍 하거나 제어가 되고 있지 않을 때는 누적 값을 0으로
18:39
초기 하시겠죠
18:41
마지막으로 d 제어는 각도의 변화 일로 제어를 하는데 그게 곧 각 속도가
18:45
되니깐
18:46
이렇게 수식을 사용해서 계산하지 않고 바로 자의로 값을 각속도 를
18:51
사용했습니다
18:52
그래서 이 각 속도의 d 개인 을 곱한 결과로 제동을 걸어 줘야 되니까
18:57
앞에 부호를 마이너스를 붙혀 짱 이렇게 해서 pid 가 다 정의가 됐고
19:03
그걸 다 더한 결과를 최종 모터 제어 하는 데 사용했습니다
19:09
그래서 이 코드가 피츠 축 각도 제어 싱글 pid 를 사용한 방식이
19:14
였구요
19:15
이번에는 각도 제어 가 아닌 각 속도를 제어하는 방법으로 코드를 다시 짜
19:19
보겠읍니다
19:20
그럼 이 각도 제어 부분은 우선 주석으로 맞구요
19:24
이 밑에 새롭게 코드 를 작성하겠습니다
19:28
먼저 지난번 각도 제어 할 때랑 똑같이 조종기 값으로 목표 각 속도를
19:33
설정할 건데 그 목표 각속도 를 저장할 변수를 피치 연가 바 레퍼런스
19:39
라고 하고요
19:41
그리고 이번에는 각 속도의 의미로 이 사이에
19:45
레이트 라는 이름을 붙이게 씁니다
19:48
역시 최대 플러스 마이너스 50이 되도록 할꺼니까
19:52
위에서 작성한 이 내용을 그대로 쓰면 될 것 같습니다 그래서 이 부분
19:55
복사해서 붙혀넣기 하겠습니다
19:58
이게 단위는 중요하진 않아요 값이 플러스 - 52 다가 중요한 거고
20:04
이걸 목표 각도 로 쓰면 단위가 도가 되는거고
20:08
목표 각 속도로 쓰면 d 그리퍼 3기 되는 거죠
20:12
이렇게 해서 목표 각 속도를 정 했구요
20:16
그 다음에 5차 정의는 또 역시 변수 이름을 피치 없나 강 레이트 언더
20:22
랑 에러 라고 하고
20:25
오차는 목표 - 현재 각 속도가 될 테니까
20:29
목표는 위에서 계산한 이 변수가 될 거고 그리고 현재 각속도 는 이제
20:35
bn 5080 이 아닌 icm 2060 이 자이로 값을 쓰면 될 겁니다
20:41
그래서 icm 2060 님
20:45
피치 축은 자이로 x 정
20:48
그래서 이걸 선택하면 되겠죠
20:51
이렇게 해서 오차도 정도 했구요
20:54
이제 p 제어는 이 오차의 p 개인 을 곱해 주면 되겠죠
20:59
그래서 급히 제어 의 결과를 저장할 변수를
21:02
빛이 언더 라 베이프 응답 앞이라고 하고 이 오차의 토픽 애인 을 곱하면
21:09
되는데 역시 츠 cs 에서 바꿀수 짧아 니깐 지난 시간에는 피치 아웃
21:16
kp 이라는 변수를 사용 했는데 이번 시간에는
21:21
아웃이 아닌 인 을 사용하도록 하겠습니다
21:25
이렇게 하면 되겠죠 이렇게 하면 쥬시 스에서 피치 내 구피 개인을 바꾸면
21:31
그 값이 여기에 저장이 될 겁니다
21:34
이렇게 해서 피해자가 끝났고 그 다음 아이 제어도 밑에서 작성해
21:38
보겠습니다
21:39
이제 아이 제어는 오차를 누적 해야 되니까 그 누적하여 변수를 피치
21:44
엠버가 레이 펀드가 에러
21:47
이런 다 봤어 미 라고 하구요 누적 이니까 자기 자신의
21:52
뭔가를 더 해서 다시 자기 자신한테 저자는 되는데 그 더해주는 값이
21:57
이 오차의
22:00
곱하기 또 루프 타임 인 0.00 2를 곱한 걸 더 해주면 되겠죠
22:06
그리고 또 이 누적 값을 초기화 해주는 게 필요하니까
22:10
그것은 위에서 작성한 이 코드를 그대로 사용을 들어가겠습니다
22:15
이렇게 하고 근데
22:17
초기화 해 줄 변수가 피치 레이트 에러 싸움이 되겠죠
22:22
이렇게 하면 될 거고 이제 아이 제어의 결과를 저장할 변수 는 피치
22:28
언더바 레이프 언더가 아이 라고 하구요
22:32
이 에러 누적 값에
22:34
또 곱하기 내부 아이 개인 을 곱해 주면 될 거 같습니다
22:39
그래서 kp 가 아닌 ki 로 바꿔 주면 되겠죠
22:45
이렇게 해서 아이즈 6 끝났고 또 이어서 d 제어도 작성해 보겠습니다
22:49
이제 t 제어는 지난번에 각도 제어 했을 때는 d 제어를 각 속도 를
22:54
사용해서 짜 나요 그래서 그때는 바로 이렇게 자의로 값을 사용할 수가
22:59
있었는데
23:00
근데 각 속도제어 에서는 각 가속도로 디젤을 해야 되기 때문에 이런
23:05
식으로 사용할 수가 없어요
23:06
각 가속도를 출력해주는 센서가 없어서 그렇습니다
23:10
그래서 직접 계산 해서 가속도를 구해야 됩니다
23:13
그래서 지난번에 살짝 언급만 드리고 사용하지 않았던 이 방식을 써야 되요
23:19
그래서 먼저 각 가속도를 구하는 걸 여기서 작성해 보겠습니다
23:24
각 가속도를 저장할 변소를 피치 언더바 레이트 언더바
23:28
d 리버티 뭐라구요
23:31
각 가속도는 현재 각속도 에서 이전 각속도 를 뺀 거 해 루프 타임 인
23:37
0.00 일을 나누어 주면 됩니다
23:39
그래서 코드 이렇게 되겠죠 우선 현재의 각속도 는 icm 2060 의
23:45
자이로 x
23:46
여기에 드는 값이 낼 거고
23:49
그러니 것 - 이정 각속도 이전 각속도 는 icm 2060 인 언더바
23:55
자이로 x
23:58
언더가 이전에 의미인 프리 vs f prev
24:03
여기에 저장되어 있다고 가정 하구요 여기에 루프 타임 인 0.00 일을
24:08
나누어 주면 됩니다
24:10
이렇게 하면 이 계산의 결과가 d 그리퍼 3 크 제곱 다니의 각 가속도가
24:15
될텐데 이 루프가 반복될 때마다
24:19
이전 각속도 를 갱신을 해줘야 되니까 그걸 이 밑에서 해주면 되겠죠
24:24
갱신 하려면 이정 값을 저장한 변색
24:28
여기에 현재 값을 넣어주면 됩니다
24:32
이렇게 하면 되겠죠
24:34
이렇게 해서 각 가 속도도 계산을 했구요
24:37
이제 이 각 가속도의 d 개인 을 곱한 게 d 저의 결과가 되니까
24:42
이 밑에서 그 결과를 저장할 변수를 피치 언더가 레이트 언더가
24:47
d 라고 하고 여기에 이각 가속도 곱하기
24:53
피치에 내부 비딩
24:57
아이가 아닌 d 로 바꿔주면 될겁니다 그리고 역시 d 제어 니깐 부호가
25:01
반대가 되야 겠죠
25:03
앞에 - 를 붙여야 겠습니다
25:06
굉장히 에피 id 각각의 계산에 다 끝났으니까
25:10
그걸 다 더해주면 최종 pid 의 결과가 될 겁니다
25:13
그래서 그 변수를 피치 언더가 리포트 한다 가 pid 라고 하고
25:19
위에서 계산한 피치 레이트 p&f 하기 that i
25:27
+ 마지막으로 p7 at
25:30
이렇게 해주면 끝납니다 그럼 이제 ep id 의 결과를 또 시 씨알의
25:35
더하거나 빼거나 해줘야 되니까
25:37
이번 복사해서 php id 대신 피치를 잎을 pad 를 이렇게 계산 해
25:44
주면 되겠죠
25:45
그리고 부호는 바꿀 필요가 없어요 예전에 불을 다 맞춰 낮기 때문에 이
25:49
부분은 건드릴 필요 없습니다
25:51
그러면 이런식으로 각 속도를 제어 했을때 어떻게 동작하는지 한번 다운로드
25:56
해보고 지구의 올려서 확인을 좀 해 볼 건데 그 전에 이제 gcs 에서
26:01
목표 각 속도 랑 현재 각속도 를 확인 해 봐야 되니까
26:05
근데 지금은 각도를 주력하고 있죠 그 부분을 각 속도로 조금 바꾸겠습니다
26:10
그거 바꾸려면 목표 각 속도는 플러스 마이너스 50으로 이전에 각도 제어
26:15
할 때랑 똑같으니까 이건 그대로 두고
26:18
이제 현재 각도 대신 현재 각 속도를 짓으로 보내주면 됩니다 그래서 그
26:22
부분은
26:23
밑으로 쭉 내리면 있죠
26:26
자 이 부분에서 출시 s 로 보내는 데이터를 각도 대신 각 속도로 보내
26:31
주면 되요
26:33
자 이 부분이 쥬 cs 로 20 바이트 fc 정보를 송신하는 부분인데
26:39
인덱스 5번 6번 2 피치 각도 정보 였고 그리고 곱하기 100 한거는
26:45
그냥 스케일 팩터 를 곱해 준 거죠 그래서 여기서 bn 5080 에 피치
26:50
대신 icm 2060 2
26:52
자이로 x 값을 보내주면 됩니다 그래서 그 부분 코드를 조금
26:56
수정하겠습니다
26:57
자 이 부분 복사 하구요 2분 지우지 않고 주석으로 맞겠습니다
27:03
그리고 이 밑에서 bn 5080 피치 대신 i came 0602
27:09
자이로 x 를 보내 주면 되죠
27:12
자 이렇게 해주면 될 겁니다
27:15
5번 6번 다 이렇게 바꿔주면 되요
27:19
그리고 이 부분이 피치 목표 각도 부분은 데
27:23
목표 각도나 각속도 난 값에 범위는 똑같이 최대 플러스 - 50 이기
27:27
때문에 그냥 이대로 사용해도 될 것 같습니다 그래 이제 마지막으로 병수
27:32
선언을 하도록 하겠습니다
27:34
맨 위로 올라오지 구요 역시 지역 변수로 선언 하겠읍니다
27:40
이 변수는 각도 제어 때 선언했던 변소 랑 종류가 같으니까
27:45
이부분 그대로 복사해서 이 밑에 붙여 넣기 해서 사용하겠습니다
27:51
그리고 변수 이름이 조금 다르죠 레이트 라는 이름이 있으니깐
27:55
여기에 레이튼 이렇게 추가하겠습니다
27:58
모든 변수에 다 이렇게 레이트를 추가하도록 하겠습니다
28:06
그리고 각속도 제어는 변수가 나 더 있었죠
28:10
이전 각속도 를 저장할 변수 가 나 더 있었습니다
28:13
그래서 필로 타 지고 그 변수가 icm 220 육봉이
28:18
좀 더 강 자이로 언더가 백승헌 더 가
28:22
prev 했었죠 자 이렇게 까지 하면 되구요
28:26
이제 다운로드 한번 해보고 각속도 제어는 어떻게 동작하는지 한번
28:30
확인해보겠습니다
28:31
그럼 다운로드 하겠습니다
28:37
창 뜨면 확인 아직 5k 하겠습니다
28:43
다운로드 가 다 됐고 실행 시키겠습니다
28:48
그럼 바로 지구의 올려서 확인을 해 볼 건데 이제 제어 방식을 각
28:52
속도제어 로 바꿔 짜 나요
28:54
각 속도제어 에서는 목표 각속도 가 0이면 드론이 움직이지 않고 현재
28:59
각도를 유지해야 될겁니다
29:01
그래서 그거를 생각을 좀 하시면서 실제로는 어떻게 동작하는지 한번 확인해
29:05
보시기 바라겠습니다
29:07
먼저 gcs 를 실행시키고 커 네트를 하구요
29:11
개인 탭을 열고 들어온 의 정령을 높겠습니다
29:22
으 개인이 수진이 됐고 지금은 외부 pid 개인은 사용 하지 않으니깐
29:27
헷갈린 이까 다 0 으로 바꾸겠습니다
29:31
이렇게 하고 그리고 내부 pid 개인을 사용을 할 건데
29:35
우선은 이것도 다 0 을 넣고 시작해보겠습니다
29:41
갔고 이제 그래프 탭에서 피치 랑 3 p 를 선택하고 요 그리고 줌
29:47
아웃을 쪼끔 땡기고
29:49
그리고 조종기 에 피치 키를 조작하면 빨간색 그래프가 받기 적 최대
29:55
플러스 마이너스 50가지 바뀌도록 코드를 짜 썼구요
29:58
조작을 했더니 우리가 원하는 대로 최대의 플러스 - 5 식으로 바뀌고
30:03
있습니다
30:04
이제 이게 목표 각 속도가 되는거예요
30:07
그리고 파란색 그래프는 이제 각도가 아닌 각 속도를 출력하고 있습니다
30:12
그래서 이렇게 들어오니 멈춰 했을 때는 각 속도가 영 이구요
30:16
움직이면
30:18
이렇게 각 속도가 바뀌고 이러다가 다시 멈추면
30:23
자세가 어떻든 각속도 는 다시 0이 됩니다
30:27
그래서 이 조종기를 조작을 하면 이 각 속도만큼 들어오니 회전을 하게
30:31
되는 거예요
30:32
지금은 개인이 0이니까 제어가 안 되고 있는 상태고
30:36
이때는 쓰로틀 게임은 반응합니다 그러면 이제
30:40
아미를 하구요
30:42
그리고 쓰로틀 기회를 좀 높이고
30:46
피 츠 키 를 조작해 도 아무 반응이 없죠
30:55
그리고 드론을 또 앞뒤로 한 번 기울여 보겠읍니다
31:03
[음악]
31:06
역시 개인이 0이니까 제어가 안 되고 있는 상태에서 아무 반응이 없습니다
31:12
그럼 이제 개인을 조금 바꿔보겠습니다
31:15
먼저 p 게임부터 바꿀 건데 얼마를 넣어야 될지 감이 안 오죠
31:19
처음에 들어오는 멈춰 있고 이때 각 속도는 00일 거구요
31:23
피치 키를 최대로 올리면 목표 각속도 가 51 테니까 오차는 목표 -
31:29
현재 해서 52 될겁니다
31:31
그때 개인을 이렇게 10 정도를 넣으면 pid 의 결과는 502 될 거고
31:36
그게 시 씨알의 더해지니 깐
31:38
들어오니 멈춰 있을 때 피 츠 키 를 최대로 올려도 실시할 값이 500
31:42
밖에 안 변하자
31:44
씨알의 범위는 마노 100부터 21,000 까지 인데 그 안에서 500은
31:48
조금 작은 것 같으니깐
31:50
개인을 20을 나오겠습니다
31:56
자 이렇게 하고 다시 확인해 보겠습니다
31:59
이제 아 밍 을 하고 스로틀을 조금 높이 구요
32:05
지금은 제어가 되고 있는 상품 등
32:08
목표 랑 헌재가 둘다 염 이어서 오차가 0 이기 때문에 즉 목표 값
32:13
속도를 유지하고 있는 상태이기 때문에 모터 회전속도 에는 변함이 없습니다
32:17
이제 피치 키를 앞뒤로 한번 조작해 보겠습니다
32:21
지금은 p 제어 만 하고 있는 상태에요 서사의 올렸고
32:26
이러면 들어오니 앞으로 기울어 줘야 되는데
32:29
뒤가 무거워서 앞으로 못 가고 있습니다 최대로 오냐고
32:34
앞으로 아니 기울어져 있죠 그래서 뒤고 찾아 있습니다
32:39
그래서 아직도 개인이 좀 작은 것 같으니깐 개인을 조금 높여 보겠읍니다
32:43
에픽 ain't 22 너무 작은 것 같으니까 이번엔 40을 넣어보겠습니다
32:50
또 암 잉 을 하고 쓰로틀 높이 구요
32:54
역시 들어오니 멈춰 있을 때는 목표 랑 현재 값 속도가 다영이 여성
32:58
모터 회전속도 늘 변함이 없죠 4 피치 키를 조장을 해봤더니
33:04
아까보다는 모터 회전 속도가 더 빨라져 없는데 역시 귀가 무거워서
33:09
앞으로 목뒤 울어 주겠죠 그래서 p 개인은 다시 한번 조금 더 높여
33:13
보겠읍니다
33:15
p 개인 42 너무 작으니까 이번에는 50을 넣어보겠습니다 5
33:23
또 암 잉 을 하고 스로틀을 좀 높이고 요
33:28
아 피치 키를 조장을 할껀데 먼저 이 그래프를 좀 확인해 보시기 바랍니다
33:33
다비치 키를 이루어져 몰랐던 목표 각 속도가 점점 높아지겠죠
33:39
거의 최대로 올려야지 등이 앞으로 기울어 줘
33:44
그리고 이번엔 뒤로 내라 보겠습니다
33:47
에 살짝 열었더니 들어오니 뒤로 키우라고 줘
33:51
그리고 이번에는 들어온 의 움직임 한 번 보세요
33:55
444
33:59
투미 앞으로 사사에 기울어지고 있구요 그리고
34:04
스킬을 미플 내렸던 또 뒤로 사사에 기울어지고 있죠
34:10
그래서 이 그래프를 보면 목표 각속도 대로 정확히 제어가 되고 있진
34:14
않아요
34:15
근데 들어오네 움직임을 보시면 이전에 각도 제어 할 때보다 움직임은 더
34:19
부드러워 보입니다
34:21
그러면 이 상태에서 p 개인을 더 높이면 어떻게 반응하는지 한번
34:25
확인해보겠습니다
34:27
지금 p 개인이 50인데 조금 더 높여서 60을 넣어보겠습니다
34:34
이제 키를 조금만 조작해 도 모터가 크게크게 편할텐데
34:38
그때 각속도 저의 장점이 나타납니다
34:41
이전에 각도 제어 할 때는 d 제어를 써야지 제동 효과를 볼 수가
34:45
있었는데 각 속도로 제어를 하면 목표 각속도 구나 빠르면
34:50
잎이 제어 하나만으로도 제동 효과를 볼 수가 있어요
34:54
그래서 어떻게 동작하는지 한번 확인해 보겠습니다
34:58
특히 를 복잡했던 2
35:02
앞으로 기울어지는 과정을 보시면 이렇게 작은 진동 처럼 보이는게 제동
35:08
효과라고 보시면 됩니다
35:09
각도 제 할 때는 피게 이 크면 큰 진동이 생기긴 했지만 이렇게 작은
35:14
진동은 없었죠
35:15
자 그럼 다시 뒤로 좀 기울일 건데
35:24
지금은 또 p 개인이 커서 이렇게 제동 효과도 커지면서 진동이 심한
35:29
것처럼 보이는데
35:30
p 개인을 좀 낮추면 진동 이렇게 커진 않아요 그래서 각속도 제어 의
35:35
장점은 이렇게 부드럽게 제어가 되고 또 p 제어 하나만으로도 약간의 제동
35:40
효과를 볼 수 있다는 겁니다
35:42
지금은 p 개인이 너무 큰 것 같으니깐 다시 50으로 줄이고
35:46
이번엔 디게 일을 좀 추가해보겠습니다 이제 p 개인을 50으로 낮추 금
35:51
그리고 이번엔 비 개인 을 넣어 볼 건데 역시 얼마를 넣어야 될지 감이
35:55
잘 안 오죠
35:57
근데 각 속도제어 에서 d 제어는 각 가속도로 재현하는데
36:02
가 속도는 엄청 민감하게 바랍니다 그래서 개인이 크면 들어온 도 정말
36:06
불안하게 제거가 되기 때문에
36:08
개인을 좀 많이 낮춰서 넣어야 되요 그래서 1호 정로 를 넣어보겠습니다
36:16
이렇게 하고 또 어떻게 동작하는지 한번 확인해 보겠습니다
36:20
또 암 잉 을 하고 쓰로틀 조금 있었는데
36:25
자 쓰로틀 만 조금 높였는데 도 가 속도가 엄청 심해지면서 이렇게
36:29
아
36:30
제어가 불가능 할 것 같습니다 이 상태로 제어를 하면 안되요
36:35
이렇게 하면 모터 에도 손상의 갈 수 있습니다
36:37
그래서 모터가 이렇게 좀 너무 민감하게 막 팍팍 변하는 것 같다 싶으면
36:42
개인이 잘못된 걸 수 있으니깐
36:44
특히 d 개인을 조금 낮춰 주셔야 될 겁니다
36:47
그래서 t 게이는 좀 낮춰 보겠습니다 지금 d 개인을 5만 넣었는데도
36:52
너무 큰 것 같으니깐 한 일 정도로 나오겠습니다
36:57
이렇게 하고 다시 확인해 보겠습니다 그래 또 암 잉 하고 쓰로틀 조금
37:02
높이고 요
37:04
이번에는 그렇게 진동 효과가 없죠
37:08
뭐 피치를 앞으로 기울여 보겠습니다
37:11
[음악]
37:15
부드럽게 변화하는 게 보이죠
37:21
부럽게 해서 나고 있습니다
37:24
이 앞으
37:26
[음악]
37:31
확실히 움직임이 엄청 부드러워 졌죠
37:35
근데 뒤가 무거운 것은 지금 계속 어쩔 수 없이 좀 피고 쳐진 현상이
37:39
있어요
37:40
제가 주 미로 중간으로 전 이동시 하고 있습니다
37:44
3
37:47
이제 중간 인데 이게 제가 각속도 를 0으로 두면
37:52
제가 너무 좋은 거군요
37:57
아 이 정도로 되면 이제 목표 각속도 가영 이어서 그닥 또 를 유지해야
38:03
되는데
38:04
쥐가 무가 와 계속 뒤로 넘어 가죠
38:07
아씨 중간으로 한 방이 있었습니다
38:11
은 상태에서 목표 각속도 가 염 이어도
38:15
뒤로 넘어가는 현상이 있습니다
38:16
[음악]
38:19
확실히 아까보다는 제어가 더 부드럽게 되고 있는 것 같죠
38:28
이번 각 속도 싱글 pid 제어 에서는 아이 제어는 하지 않겠습니다
38:33
이제 각 속도 제어를 해보니까 p 게인이 좀 커도 지난 시간에 했던 각도
38:39
제가 때처럼 그렇게 큰 진동이 생기지는 않았고
38:42
디제 할 때처럼 작은 진동이 조금 보이긴 했습니다
38:46
p 제어가 각 속도를 제어하는 거라서
38:49
목표 각속도 보다 빠르게 기울어지면 그 목표 각속도 를 유지하려고
38:54
반대로 제동을 걸어 주는 역할까지 포함 하고 있어요
38:57
그래서 그렇게 작은 진동이 좀 보인 겁니다
39:00
그리고 d 제어가 가속도 방향의 반대방향으로 제동을 걸어 주는 역할을
39:05
하기 때문에
39:06
아까처럼 d 개인을 살짝 줬더니 훨씬 더 부드러운 움직임을 보였죠
39:12
그래서 각 속도 제어가 이렇게 장점이 정말 많은데
39:15
단점이 큰 게 하나 있죠 각도 제어 할 때는 조금 기울어져도 그 각도를
39:21
유지할 수가 있었는데 이것은 각 속도 제어 하기 때문에 각도를 그대로
39:26
유지하지 못합니다
39:28
약간 처럼 목표 각속도 를 0으로 했을 때 이상적인 경우라면 속도 가
39:33
0이면 움직이지 않고 그 자세 그대로 있어야 되는데
39:37
한쪽으로 기울어 지기 시작하면 그 쪽으로 더 처지면서 쭉 더 기울어진
39:42
현상이 발생해요
39:43
물론 제 기울면서 반대방향으로 제어가 되긴 하겠지만
39:47
원래 각도 대로 돌아오지 못하고 서서히 기울게 되죠 그래서 각도 제어
39:52
해서 각도를 유지하는 특성이 란
39:55
각 속도제어 에서 부드럽게 회전하는 특성
39:58
그 두 특성이 같이 있으면 들어오네 자세제어 의 성능이 엄청 좋아 질것
40:03
같습니다
40:04
이 두 개의 특성을 잘 섞으면 원하는 대로 조종기 키값이 목표 각도 가
40:08
되면서 또 각 속도제어 처럼 부드럽게 제어 되게 할 수 있을 것 같습니다
40:13
그래서 이제 각도 제어 랑 각 속도 제어가 같이 필요해 지는 거죠 그래서
40:18
나온 개념이 각 속도 제어를 하는데 지금은 그냥 조종기 키값을 목표
40:24
각속도 로 사용 했잖아요 근데 이게 아니고
40:27
이제 현재 기울어진 각도에 따라서 각 속도를 제어 하면 될 것 같습니다
40:31
쉽게 이해하려면 기울어진 만큼 각속도 를 제어 한다고 생각하시면 되요
40:38
이제 예를 좀 들어 드리면 들어온 이렇게 기울어져서 멈춰있다 고 해
40:43
보겠습니다
40:44
지구의 올려놓고 처음 시작할때 상황인 거죠
40:48
현재 각도가 뒤로 기울어져서 - 20도 라고 하구요
40:52
멈춰 있으니깐 각 속도는 영 일 겁니다
40:55
이제 각 속도 제어를 할 건데 현재 기울어져 있는 만큼 목표 각속도 를
41:01
결정합니다
41:02
즉 이 각도의 오차가 목표 각 속도가 되는거예요
41:06
그리고 이제부터는 단위가 거의 무의미 해집니다
41:10
단위는 생각하지 마시고 숫자의 부호 랑 크기만 생각하시면 되요
41:14
그래서 - 20도가 기울어져 있으니까
41:17
각도의 오차는 목표 각도 - 현재 각도에서 플러스 이 집이 될 거고 그
41:23
크기만큼 각 속도를 제어하는 거예요 그래서 이게 목표 각 속도가 되는
41:28
거고 거기에 현재 각속도 인 0을 뺀 걸 각 속도의 오차로 정의를 하고
41:34
이걸 가지고 모터를 제외합니다
41:38
앞으로 기울어져 야 되니까 뒤에 모터를 증가시키고 앞에 모터를 감소시키면
41:43
되겠죠
41:44
이때 p 개인을 50으로 해서 이런 결과가 나와서 이제 들어오니 앞으로
41:49
기울어 진다 고 해 보겠습니다
41:51
그러다가 이제 목표 각도 인 영도가 돼서 멈춰있다 고 해 보겠습니다
41:56
그러면 목표 각도 에 도달 했으니깐 제어 값도 0이 되어야 겠죠
42:01
목표에 도달 했으니까 각도 오차는 0이 될 거고 그게 곧 목표 각 속도가
42:07
되고 또 멈춰 있으니까
42:09
현재 각속도 도영 일겁니다 따라서 제어의 결과는 0이 되겠죠
42:14
그래서 이렇게 유지를 한다고 하면 내 모터가 지금처럼 같은 속도를 계속
42:19
유지하면 될 거에요 그래서 이렇게 보면 각도 제어 할 때랑 별로 다를게
42:24
없어 보이죠
42:25
근데 - 20도에서 목표 각도 인 영도로 수렴해 가는 과정을 보시면 이
42:31
과정이 각도 제어 때라는 완전히 달라요
42:34
제가 아까 각 속도로 제외하면 부드러운 제어가 가능하다 고 있던 게 이
42:38
과정에서 나타납니다
42:40
그 다음엔 처음에 - 20도로 기울어져 있었고 또 멈춰 있었죠
42:44
뒤로 누워 있으니까 마이너스가 보죠
42:47
그래서 영도로 수렴을 해야 되는데 이때 각도 오차가 목표 각속도 가
42:53
되니까 이제 플러스 20t 그리퍼 스에게 속도로 앞으로 기울어 지기
42:58
시작할 겁니다
42:59
그러다가 다음 루프에서 - 10도가 됐어요 그럼 이 때는 목표 각속도 가
43:05
또 10t 그리퍼 쎄게 될텐데
43:07
이때 기울어지는 속도가 10t 그리퍼 색보다 빠르면 이때부터 반대방향으로
43:13
제동이 걸리기 시작합니다
43:15
그렇게 쭉 영도에 더 접근 하겠죠
43:18
이렇게 목표 각도 에 가까워질수록 목표 각 속도도 0에 가까워 지기
43:23
때문에
43:23
목표 각도 부근에서는 더 천천히 접근하게 될 거구요
43:28
그러다가 목표 각도의 일치하면 목표 각속도 도영이 되니까 이 목표에서
43:33
정제 하게 될겁니다
43:35
즉 목표에서 멀 때는 빠르게 접근 하다가
43:39
가까워질수록 천천히 접근하게 된다는 소리야
43:42
그래서 맨 처음에 시험때 보셨듯이 기울어진 채로 시작해서 아 밍 을 하고
43:47
제어가 시작되자마자 처음에 급격하게 반응 하다가 서서 의 목표 각도로
43:51
수렴 했죠
43:52
오버 슈트도 거의 없었어요 그리고 d 제어가 또 각 가속도로 제동을 걸어
43:57
두기 때문에 더욱 더 부드러운 제어가 가능해 집니다
44:01
이게 각도 제어 싱글 pid 랑 크게 다른 점입니다
44:06
이제 아까 처럼 각 속도 제어를 할 건데 좀 전의 각 속도 싱글 pid
44:12
로저 했을 때는
44:13
조종기 조작 값이 바로 목표 각속도 로 들어 같잖아요
44:17
근데 이제 각도의 오차의 따라서 목표 각속도 를 결정해야 되니까
44:22
이 레퍼런스를 정해 하는 부분이 조금 달라질 겁니다
44:25
그래서 목표 각속도 를 이제 이런 식으로 정의할 수 있겠죠
44:29
목표 각도에서 현재 각도를 뺀 각도 오차의 따라서 각 속도를 제한한
44:35
될겁니다
44:36
목표 각도는 또 종기로 조작할 수 있게 할 거구요
44:39
현재 각도는 bn 5080 에 피치 각도 를 사용하면 될 겁니다
44:44
그래서 이걸 또 소스 코드로 작성을 해 볼 건데 아직 다 끝난건 아니고
44:48
먼저 소스 코드 작성을 좀 하고 또 이어서 설명드리도록 하겠습니다

```

### Ch11 roll/pitch control Cascade PID
#### video 48
- ch11 Roll and pitch angle cascade dual loop PID control

{% include youtubePlayer.html id=page.youtubeID %}

```diff
00:13
지난 시간까지 pid 제어 이론에 대해서 설명을 드렸구요
00:17
싱글 pid 랑 더블 pid 에 차이 그리고 싱글 pid 로 들어온 을
00:22
제어 했을 때 어떤 문제가 발생했고 또 어떤 한계가 있어서 이걸 해결하기
00:26
위해서 더블 pid 를 사용했을 때 뭐가 달라지는 지를 설명드렸습니다
00:31
그래서 싱글 pid 랑 더블 pad 코드 작성 됐었고 구조에 대해서도
00:36
설명 드렸죠
00:37
이제 이번 시간부터 최종 pid 제어 코드 작성을 할 거구요
00:42
먼저 이번 시간에는 롤 피치 더블 pid 제어 코드를 작성하고
00:46
그리고 다음 시간엔 요 축 싱글 pid 제어 코드를 작성할 겁니다
00:51
그리고 롤 피치 같은 경우는 지구의 올려서 실험을 할 수 있으니까
00:55
코드 작성을 먼저 하고 이제 새로운 실험 방법으로 피치 쭉 죄와 특성을
01:00
좀 확인해 보도록 하겠습니다
01:03
지난 시간에 들어 오늘 지구의 올려서 pid 제어 실험을 좀 해 봤었는데
01:06
그때 들어오니 수평을 유지하게 놓고 개인을 조금씩 바꿔 보면서 손으로
01:12
톡톡 찍어 나 잡아당기는 실험들 봐 썼구요
01:15
이게 왜 란을 좀 넣어 준 거였고 그리고 또 조종기를 조작해 보면서 목표
01:19
각도를 잘 추종하는 지도 확인해봤습니다
01:22
이렇게 하면 반응성 같은걸 확인할 수 있긴한데 이게 사람이 왜 라는
01:26
넣어준 것 같고 또 조종기 조작도 사람이 해주는 거다 보니까 일정하게
01:30
수령을 할 수가 없어요
01:32
성능 시험 같은 걸 할 때는 성능을 객관적으로 검증할 수 있도록 동일한
01:36
환경에서 실험을 해야 됩니다
01:38
근데 그런 테스트 환경을 갖추는 것도 엄청 큰 일이죠
01:42
이제 저처럼 시소 직을 같은 테스트베드 가 있으면 좀 더 객관적으로
01:46
실험을 할 수 있을 텐데
01:48
여러분들은 이지 그가 없을 테니깐 본 수업에서 좀 더 다양한 실험을
01:52
해보고 그 결과를 보여 드리려고 합니다
01:55
그래서 이제 지난 번 이라는 조금 다르게 새로운 방법으로 제어 성능을
01:59
한번 테스트해 보겠습니다
02:01
이제 어떻게 할 거냐 면 예전에는 목표 각도를 제가 조 종류로 직접
02:05
조작을 했잖아요 그래서 테스트 할 때마다 어떨 때는 제가 조종기 조작을
02:10
빠르게 쓸 수도 있고 아니면 더 많이 조작해 쓸 수도 있어요
02:14
테스트하는 환경이 일정하지가 않았다는 소립니다
02:17
근데 테스트를 하려면 일정한 조건으로 해야지 객관적으로 분석을 할 수
02:21
있기 때문에
02:23
조종기 조작하는 것도 일정한 각도 랑 일정한 속도로 조작을 해야 될
02:27
거구요
02:28
왜 람도 일정한 힘으로 일정한 시간동안 넣어 줘야 되겠죠
02:32
근데 왜 라는 그렇게 하려면 이제 자동으로 외란 을 넣어주는 장비가 또
02:37
필 해줄테니까
02:38
이 수업에서는 불가능할 것 같구요 대신 조종기 조작을 일정하게 할 수
02:43
있도록 시스템을 조금 바꿔봤습니다
02:46
그래서 이제 목표 각도를 조종기 조작으로 제가 직접 하는게 아니고
02:50
gcs 가 자동으로 변경하도록 해놨어요
02:54
그래서 실제로 이 테스트가 어떻게 진행되는지 한번 보여드리겠습니다
02:58
보시면 바로 이해가 되실거예요
03:01
자 먼저 드러내는 지난 직원의 실험 에 썼던 최종은 개인이 들어가 있는
03:05
상태구요
03:08
이제 이 상태로 테스트를 하는데 지금 이거는 제가 실험용으로 쓰려고
03:13
임시로 만든 기능입니다
03:15
여러분들은 지금 이 기능이 없어요 이건 무슨 기능이 냐 면 자동으로 목표
03:20
각도를 변경하는 기능입니다
03:22
먼저 쓰로틀 값을 설정할 수 있고 그리고 목표 각도 도 설정할 수 있구요
03:27
마지막이 몇 초마다 목표 각도 를 바꾸면서 실험을 반복할 건지를 설정한
03:32
기능입니다
03:33
그래서 쓰 로 틀은 1300 으로 해 놓았구요
03:36
여기서 이 스스로 틀은 조종기 키 값이 그대로 들어가니깐 최소 첨부터
03:40
최대 2천 까지 줘
03:42
그리고 목표 각도는 25도로 설정했고
03:46
시간은 2000 500mm 3 기니까 초로 는 2.5 초가 될 겁니다
03:51
그래서 이렇게 하고 실험을 하면 어떻게 동작하면
03:54
먼저 영도로 2.5 초 있다가 그 후에 25도로 또 2.5 초 있고 다시
04:00
영도로 2.5 초 그리고 - 25도로 입점 5초 동안 유지됩니다
04:06
다시 영도로 돌아온 후에 이제 25도로 짧게 0.2 초 동안 목표 각도가
04:12
바뀌고 요
04:13
다시 점 5초 후에 - 25도로 짧게 또 바뀌고 2.5 초 후에 실험이
04:19
끝납니다
04:20
이렇게 목표 각도가 일정한 시간이랑 일정한 각도로 변하게 하는 거야
04:24
그래서 어떻게 동작하는지 한번 보세요
04:29
굉장히 아아 밍 을 하고 스로틀을 조금 높이고 요
04:33
stepi 컨트롤 버튼 줄이면 시험 작품이다
04:38
눌렀고 이제 2.5 초 동안 영도를 의지하고 양 2점 쪽인지 모두 다시
04:43
형도
04:44
2.5 투구에 - 심어도
04:48
다시 영도로 돌아오고 번인 25도로 짧게 넣어주고
04:52
보고 8cm - 15 짧게 넣어주고 저술한 끝납니다
04:59
그리고 이 실험을 하는 동안 센서가 앞뜰 파일로 저장해야
05:03
그래서 오픈 폴더 를 누르고 저장된 그 파일들을 봤더니 이렇게 파일이
05:08
저장이 됐고 이 파일을 열어보면
05:14
실험 않은 동안에 fc 의 상태 정보가 저장되어 있습니다
05:18
여기에는 롤을 피치 5에 회전 각도 랑 목표 각도가 저장이 되어 있죠
05:22
이거 이제 엑셀로 불러들여서
05:25
이 파일을 열어서 확인을 해보면 이렇게 쭉 한 칸의 다 저장이 되어
05:29
있는데 이걸 텍스트 나누기 기능으로 값들을 분리할 수 있습니다
05:34
자 불리했던 이렇게 셸 별로 9분이 됐죠 이 상태에서 이렇게 셀들을
05:38
선택해서 그래프를 그릴 수 있습니다
05:44
이렇게 목표 각도 란 그때 현재 각도가 그래프로 출력이 됐죠
05:48
그래서 이렇게 보면 목표 각도 를 얼마나 잘 따라가고 있는 지를 비교해
05:53
볼 수 있어요
05:54
그리고 또 개인을 바꿔가면서 이성을 반복하면 개인을 바꿨을 때 제가
05:59
특성이 어떻게 바뀌는지 도 좀 객관적으로 한눈에 비교할 수 있겠죠
06:03
그래서 이번 시간에는 이렇게 실험을 좀 반복해 볼 거구요
06:07
실험 하기 전에 먼저 최종 몰 피치 더블 pid 제어 코드를 작성을 하고
06:12
이어서 실험을 좀 더 해보겠습니다
06:15
그리고 it's cs 버전은 잘못하면 위험할 수 있기 때문에 이 버전은
06:19
배포하지 나는 예정입니다
06:21
그럼 이제 소스 코드 작업으로 넘어가겠습니다
06:29
아까 처음에 테스트 했던 그 개인으로 실제 비행 테스트를 했을때 성능의
06:34
어떤지를 좀 확인해봤습니다
06:36
여기는 서울 강 서쪽에 있는 가양 비행장 이구요
06:39
비행이 가능한 구역입니다 아무데서나 막 날씨면 안되고
06:44
비행이 허용된 구역 인지 확인을 하고 비행을 하셔야 되요
06:47
안그러면 과태료 볼 수도 있습니다 비행이 가능한 구역 있는지 확인하는
06:51
것은 본 강의가 다 끝나고 마무리 영상에서 소개해 드릴 예정입니다
06:56
아 까지 그의 올려서 테스트 했을때는 진동이 거의 없었죠
07:01
근데 실제 비행을 했더니
07:06
이렇게 약간의 진동이 발생했습니다
07:10
아 지구에서 테스트 라면 지 그가 드론을 잡아 주고 있기 때문에 진동이
07:14
덜 발생한 것 같구요
07:16
또 지금 가 약간 뻑뻑하게 때문에 진동을 좀 억제해주는 효과가 있는 것
07:20
같습니다
07:21
그리고 또 실내에서 이베이 그대로 빙 캐프 했을 때도 진보 이 거였죠
07:26
근데 밖에서 실제 빙 패스 했더니
07:29
바람 때문에 이렇게 좀 증도에 두드러지게 나타난 것 같습니다
07:37
아 그리고 들어오니 상승할 때는 진동이 별로 안 보이는데 하강할 때
07:41
진동이 좀 더 심해져요
07:43
그게 1 수로 틀의 키 값에 따라서 스루 트리 좀 낮아지면 진동이 더
07:48
심해지는 현상이 생기는 것 같습니다
07:55
그리고 지금은 제가 눈으로 들어온 을 보면서 조종하고 있기 때문에
08:00
다이나믹한 비행을 할 수가 없어요
08:04
그리고 눕힌 아니거나 혹은 멀린 아니면
08:07
불운의 앞뒤 좌우 공간이 잘 안되기 때문에 위험할 수 있습니다
08:11
이렇게 밖에 서빙을 하신다면 충분히 시뮬레이터로 염색을 하신 후에 빙
08:16
하시기 바라겠습니다
08:19
이렇게 하고 이제 지구의 올려서 개인을 좀 바꿔 보면서 제어 성능이
08:24
어떻게 하는지 확인해봤습니다
08:30
굉 제 아까 처음에 테스트 했던 그 개인에서 외부 p 개인을 사실 뭐
08:35
에서 15 감소시킨 30으로 테스트 해봤습니다
08:47
그리고 쓸어 틀은 1300 목표 각도는 25
08:50
그리고 2.5 초마다 변경하는 것을 갖습니다 이게 같아야 좀 객관적으로
08:55
비교할 수 있겠죠
08:58
뭐 실험을 시작했구요
09:01
외부 p 게임이나 잤더니 목표가 프로의 접근하는 게 약탈 느려질 것
09:05
같아요
09:17
이렇게 테스가 끝났구요 그리고 그래프 확인하는 것은 실험이다 끝난 후에
09:23
그래프를 같이 그려보면서 확인할 거예요
09:26
그리고 이번에는 외부 p 개인을 반대로 사실 모여서 15 증가시킨
09:31
60으로 테스트 해봤습니다
09:35
그 외의 다른 조건은 역시 다 갖게 하고 테스트했습니다
09:49
실험을 시작했고
09:54
바꿔 님 외부 pda 증가했던
09:57
반응속도가 좀 싸 가 된 것 같았 목표 같고 해서 실족하게 표하고
10:01
있습니다
10:08
4 실험 2 끝났구요 이렇게 내부의 브 pid 개인을 각각 증가 또는
10:14
감소 시켰을 때 제어 특성이 어떻게 변하는지를 확인한 거예요
10:20
이제 외부 피게 이는 다시 원래대로 45 로 돌려놓고
10:24
이번엔 외부 아이 개인을 3에서 0점 으로 감소시켜서 테스트 해봤습니다
10:47
아 이게 이는 좀 감도 시켜도 크게 변화가 없죠
10:57
2 실험 2 끝났고 이번엔 외부 아이 개인을 3에서 5.5 로 증가시켜서
11:03
테스트 해봤습니다
11:24
4 같이 외부 아이 갱을 증가시켜 좀 크게 달라지는 건 없는 것 같습니다
11:32
이제 오차가 제거되는 시간이 조금 줄어들기는 한거 같아요
11:37
아 또 외부 아이 개인을 다시 원래대로 돌려놓고 이번엔 외부 d 개인을
11:43
6.5 해서 3으로 감소시켜서 테스트 해봤습니다
11:56
4 봤더니 외부 d 데이 민아 다 없다뇨
12:00
음 플럼 건 행사 님 신의 였죠
12:06
4 앞뒤로 출렁거리는 입어 슈트 원거리 통신 없습니다
12:17
이번엔 외부 d 개인을 6.5 해서 10으로 증가시켜서 테스트 해봤습니다
12:45
외부 개개인이 증가했던 조금 부드럽게 죄가 된 것 같은데
12:50
약간의 진동이 좀 더 친해진 것 같습니다
12:56
이렇게 해서 외부 pid 개인을 각각 증가 감소 시켜서 테스트 해봤구요
13:01
파일들은 다 저장이 된 상태에요
13:04
그 데이터 비교는 실험이다 끝난 후에 확인해보겠습니다
13:08
이제 이어서 내부 pid 개인을 또 증가 감소 시켜서 테스트 해봤습니다
13:13
굉장히 외부 pid 게이는 다시다 원래대로 돌려놓고 요
13:19
이번에는 내 부피 개인을 6에서 3으로 감소시켜서 테스트 되었습니다
13:31
얘 또 아멘하고 쓰로틀 조금 높이고
13:34
실험을 시작했던
13:39
내부 p 갱을 감소 시켰다면 목표 각도 로 접근하는 속도가 좀 느려서 점
13:43
그리고 오버 슈트도 좀 심해진 것 같습니다
13:53
약간 제가 좀 훌륭하게 된 거죠
13:57
이제 내 부피 개인을 반대로 구로 증가시켜서 테스트 해봤습니다
14:07
내부 폐경이 증가했던 이 반응은 빨라져 없는데 진동 시련이 어쩜
14:12
그리고 목표 각도 로 접근 하는 중간에도 이렇게 증 동의 발생했습니다
14:18
그리고 빨리 반응하는 만큼 배터리 소모가 더 심해져요
14:22
보시는 목표 각도가 바뀔 때마다 배터리 전압이 팍팍 떨어지죠
14:28
이렇게 그 기도하면 배터리 수명에 는 좋지는 않습니다
14:33
굉 zn 애 부피 게이는 원래대로 6으로 돌려놓고 이번에 내부 아이
14:37
개인을 3 감소시킨 1호 테스트에 맞습니다
14:53
4 보시면 아까 외부 아이 개인을 바꿨을 때 처럼 내부 아이에게는 좀
14:58
바꿔도 크게 달라진 건 없죠
15:08
그리고 또 아이 개인을 증가시켜서 팔로 테스트 해봤습니다
15:34
봤더니 목표 각부의 수렴한 속도가 조금 빨라진 것 같긴 합니다
15:42
굉장 다시 내부 아 이게 있는 또 원래대로 돌려 콩 이번엔 내 부디
15:47
게인을
15:48
1점이 에서 1 감소시킨 0.2 로 테스트 해봤습니다
15:56
결과를 보니까 실험이 불가능할 정도로 진동 심했죠
16:01
생각을 해보시면 d 게인이 높아지면 진동 심해질 거라고 예상을 했잖아요
16:05
근데 내부 t 게이는 오히려 낮아져 떠니 진동이 심해지는 현상이
16:10
발생했습니다
16:12
왜 그런가 생각해 보면 내 부디 제어는 각 가속도로 제동을 걸어 준
16:17
역할을 하는데 이 말은 속도가 급격히 변하는 걸 막아 중단 소리에요
16:23
그래서 개인을 낮추면 가 속도에 따른 제동 도 약해져서 오히려 속도는 더
16:28
급격히 변하게 되는 겁니다
16:30
그래서 지금처럼 내 부디 개인을 너무나 주면 속도가 더 급격히 변하면서
16:35
지금같이 진동이 심해 지는 결과가 생깁니다
16:39
그래서 이대로는 실험이 불가능할 것 같아서 개인을 조금 높여서 다시
16:42
실험했습니다
16:44
이제 다시 내 부디 게인을 1.2 에서 0.2 로 낮춰 떠니 진동이 너무
16:49
심해 쓰니까
16:51
이번엔 0점 으로 조금만 낮추고 다시 테스트 해봤습니다
17:06
이제 테스트가 가능한 수준으로 진동 좀 줄어 들었죠
17:13
근데 이전에 테스트한 것들 중에서 진동이 가장 심합니다
17:18
아마 이 상태로는 비행이 불가능할 거예요
17:20
그리고 진동 심해질수록 역시 배터리 소모도 심해지기 때문에
17:24
비행시간도 더 줄어들 수 있습니다
17:29
굉장히 마지막으로 4 보디 개인을 1.9 로 증가시켜서 테스트 해봤습니다
17:41
4 부디 개인을 증가 시켰더니 오히려 증 동의 더 줄어 들고 들어와 졌죠
17:47
3
17:58
봤더니 예전에 있던거 랑 별로 큰 차이가 없어 보여서 이번에 내 부디
18:03
갱을 좀더 키워서 다시 테스트해 봤습니다
18:06
굉장히 a 게 마지막 테스트 구요 이번엔 내 부디 개인을 좀 많이 높여서
18:11
4.2 로 하고 테스트 해봤습니다
18:18
패턴이 오히려 목표 각도 에 접근하는 시간도 길어진 것 같고
18:22
우버 쇼트 조심해 졌구요
18:27
보시면 제어가 좀 헐렁하게 되는 느낌이죠
18:31
내부 기계 인을 증가했던 2
18:33
납치의 외부 d 게임 을 감소시킨 것 같이 동작하고 있습니다
18:37
순순히 안녕
18:41
이렇게 해서 모든 테스트가 끝났구요 이렇게 테스트 하면 각각의 개인을
18:46
바꿨을 때 제어 특성이 어떻게 바뀌는지 를 금방 파악할 수 있습니다
18:51
그럼 이제 좀 자는 테스트 햇더니 모든 결과들을 그래프로 그려서
18:55
비교하면서 확인해 보겠습니다
18:58
굉장히 그래프를 확인하기 전에 먼저 좀 알아두셔야 할게
19:01
좀전에 실험한 거에 한계가 좀 있습니다
19:05
지금 실험한 결과를 파일로 저장 했는데 이 데이터를 무선 텔레 매트
19:09
리모델 로 전송 하다보니까 중간에 데이터 유실이 좀 심한 편이에요 그래서
19:14
데이터 싱크를 제가 임의로 직접 맞췄습니다
19:17
중간에 유실된 게 있으면 비결 대상도 그 데이터를 지우고 같이 그랬어요
19:22
그렇게 싱크를 맞췄고 그리고 우리의 시스템은 데이터 송신 주기가 너무 긴
19:27
편입니다
19:29
제어 죽이는 일 q&a 를 침대 데이터 송 씨는 50회 루즈하고 있죠
19:32
그래서 이렇게 저장된 데이터 로는
19:36
뭔가 수학적인 분석을 하기에는 불가능하다고 보시면 되고 그렇게 하려면
19:41
데이터 유실 도 없어야 되고 또 싱크도 잘 맞아야 되고
19:45
송신 주기도 500회 르트 이상은 돼야 될 겁니다
19:49
근데 우리는 지금 이 모든 것을 다 만족하지 않고 있어서 수학적인 의미를
19:54
찾기는 어렵습니다
19:55
단 개인을 바꿨을 때 제어 특성이 어떻게 바뀌는 구나 정도는 확인할 수
20:01
있겠죠
20:02
그래서 그걸 확인해 보려고 합니다
20:04
이게 이제 실험 결과를 비교할 그래프 구요
20:08
이 그래프의 가로축은 샘플 수를 나타내고
20:11
우리는 초당 50회 전동 하니까 샘플러 50개가 1초 정도 된다고 보시면
20:16
됩니다
20:17
그리고 세로 축은 각도를 의미 하구요
20:20
보시면 그래프가 4개가 있는데 하늘색은 목표 각도 고
20:24
주황색 그래프가 맨처음 실험 했을 때 그래프 구요
20:28
노란색 그래프는 개인을 증가시켜 쓸 때 회색은 감소시켜 쓸 때
20:32
그래프입니다
20:33
그래서 주황색 을 기준으로 개인을 높였을 때 랑 낮춰 쓸 때를 비교한
20:38
그래프 라고 보시면 되요
20:39
이 그래프는 외부 p 개인을 비교한 그래프 고요
20:43
노란색 그래프를 먼저 보시면 외부 p 개인을 증가 시켰더니 목표 각도로
20:48
빨리 접근하고
20:49
우버 슈트는 좀 작아진 것 같고 되신 목표 각도 부분에서 이렇게 약간의
20:55
진동이 발생 했습니다
20:57
그리고 목표를 짧게 바꿨을 때는 목표 각도까지 거의 접근을 했다가 다시
21:02
빠르게 원래 이치로 복귀하자 그리고 역시 목표가 또 부근에서 이렇게
21:07
진동이 발생해 씁니다
21:08
그리고 이제 외부 p 개인을 감소시켜 쓸 때는 천천히 목표로 접근하는
21:13
대신 진동 거의 없고 대신 오버 슈트가 더 크게 나타났습니다
21:19
그리고 목표를 짧게 바꿨을 때는 목표에 거의 반 정도까지만 갔다가 천천히
21:25
원래 위치로 돌아오자
21:26
그래서 결론은 외부 p 개인을 높이면 목표로 빨리 접근하고 오버 슈트가
21:32
감소하는 대신 진동이 좀 생겼고 이 개인을 낮춰 떠니 느리게 접근하고
21:36
천천히 반응하는 대신 진동은 거의 안 나타났습니다
21:41
이거는 외부 아이 개인을 비교한 그래프 구요
21:44
외부와 이게 이는 좀 높이거나 낮춰도 눈에 띄는 변화는 나타나지
21:48
않았습니다
21:49
지금 이거는 외부 아이 누적 값에 민 맥스를 앉아 봤을 때 그래프 해요
21:54
그래서 결론은 외부 아이 개인은 제어 특성 에 거의 영향을 안 미친다고
21:59
볼 수 있겠네요
22:00
그리고 이제 외부 d 개인을 비교한 그래프입니다
22:04
이건 그래프가 정말 눈에 띄게 많이 다르죠
22:07
외부 t 개인을 높였을 때 는 목표에 조금 천천히 접근했고
22:11
오버 슈트는 크게 변한 건 없는 것 같은데 목표가 잠깐 바뀐 경우에는
22:17
목표에 반 정도까지만 도달 했구요 또 영도로 복귀하는 과정에서 이렇게
22:22
작은 진동이 눈에 띄게 나타났습니다
22:25
그리고 낮춰 쓸 때는 목표에는 빨리 접근했지만
22:29
오버 슈트 라운더스 트가 엄청 크게 발생 했지요
22:32
지금 이렇게 위아래가 짤린 것처럼 보이는게 지 그의 막혀서 그런거예요
22:37
그리고 이렇게 또 오버 슈트 언더 슈트가 크게 발생한 이유는 제동 효과가
22:42
줄어서 그런겁니다
22:43
그리고 목표를 잠깐 바꿨을 때는 거의 목표를 넘어서 까지 도달 했다가
22:48
오버 슈트 언더 슈트가 또 크게 발생했지만
22:52
그래서 결론은 외부 d 개인을 높였을 때 는 목표 각도의 천천히 접근하는
22:57
대신은 작은 진동이 발생 했구요
22:59
낮춰 쓸 때는 목표에 빨리 잡고 나지만 오버 슈트 언더 슈트가 엄청
23:04
커졌습니다
23:06
이제 외부 pid 비교가 끝났구요
23:09
이어서 내부 pid 도 비교해보겠습니다
23:12
먼저 내 부피 개인을 높였을 때 는 목표로 도달하는 시간은 거의 비슷하게
23:16
걸렸는데
23:17
접근하는 과정에서 이렇게 작은 진동이 발생 햇죠
23:22
그리고 오버 슈트는 거의 안 나타나 꽁
23:25
목표를 짧게 바꿨을 때는 진동이 좀 심하게 발생했습니다
23:30
그리고 개인을 낮춰 쓸 때는
23:33
목표로 도달하는 시간은 또 역시 거의 비슷하게 걸린것 같고
23:36
대신 오버 슈트가 크게 한번 발생하고 천천히 목표 각도로 수렴해 짜
23:42
그리고 목표를 짧게 바꿨을 때도 역시 오버 슈트가 한번 발생하고 천천히
23:47
목표로 수령했습니다
23:48
결론은 내 부피 개인을 높이면 목표로 접근하는 과정에서 진동이 발생했고
23:53
개인을 낮춰 쓸 때는 목표를 넘어가는 오버 슈트 한번 크게 발생하고
23:58
천천히 작품이었습니다
24:00
그리고 둘다 목표에 접근하는 시간에는 별 차이는 없었습니다
24:05
이제 내부 아이 개인을 비교해보면 개인을 높였을 때 랑 낮춰 쓸 때 둘
24:10
다 눈에 띄게 큰 차이가 발생하지 나는 것 같습니다
24:14
이제 개입을 높였을 때 노란색 그래프를 보시면 거의 일치 하다가 이
24:19
부분에서 미세 오차가 좀 더 빨리 제가 되는거 가짜
24:23
그리고 낮춰 떠니 미세 5차 제거가 천천히 되고 있습니다
24:28
근데 목표에 접근하는 시간은 거의 영향을 안 미쳤고 요
24:32
진동 에도 영향을 미치는 것 같습니다 그래서 보시면 아이 제어는 제어의
24:37
특성에 별로 큰 영향을 미치진 않아요
24:40
이제 마지막으로 내 부디 개인을 비교해봤는데
24:44
아까 실험 했을 때 개인을 조금 높여 쓸 때는 차이가 거의 없었죠
24:48
그래프를 봐도 내 부디 게인을 1.2 로 했을 때 이 주황색 그랬더라면
24:53
그리고 조금 높여서 1.9 로 했을 때 노란색 그래프가 거의 일치합니다
24:59
그래서 내 부디 개인을 높여서 다시점 했었는데 그 그래프를
25:03
확인해보겠습니다
25:05
4 봤더니 내 부디 개인을 좀 많이 높여서 4.2 로 했을 때는
25:10
가속도 제동 도 높아지면서 오히려 속도가 급격히 안 변하게 되면서
25:16
목표에 접근하는 속도도 느려 졌고 이렇게 오버 슈트 언더 슈트도 엄청
25:20
커졌습니다
25:21
드론이 출렁출렁 되고 있다는 소리에요
25:24
그리고 반대로 내부 디게 이는 낮춰 떠니
25:27
이번엔 가속도 제동 효과가 줄어들면서 진동이 엄청 심해서 짝
25:32
목표를 짧게 바꿨을 때도 거의 목표까지 접근했다가
25:36
진동이 엄청 심하게 발생하고 점점 줄어들었습니다
25:40
이 정도면 거의 비행이 불가능한 수준을 것 같아요
25:44
그래서 결론은 내 부디 개인은 낮추면 오히려 진동이 커지고 높이면 반응이
25:50
좀 느려지는 현상이 발생했습니다
25:52
그래서 이렇게 해서 각각의 개인을 바꿨을 때 제어 특성이 어떻게
25:56
변하는지를 모두 비교 해 봤구요
25:59
이렇게 보니까 어떤 개인을 바꾸면 비행 특성이 어떻게 바뀌는지 도 그나마
26:04
좀 객관적으로 분석할 수 있었습니다
26:06
다른 실험들을 더 해보고 싶긴한데 시간 관계상 여기까지 보여 드리구요
26:11
인제 아까 2개인 대로 밖에서 실제 비행을 했을 때 진동이 좀 심했었는데
26:16
이번에 개인을 조금 바꿔서 외부 디게 이는 좀 낮추고 내부 디게 는 좀
26:21
높여서 다시 비행 해봤습니다
26:26
이제 보시면 확실히 아까보다는 진동이 많이 주는 것 같죠
26:31
근데도 진동이 조금 남아 있는 상태에요
26:35
그래서 쫌 전에 그래프로 분석한 그 결과를 토대로 개인을 좀 바꿔 보면
26:38
더 좋은 비행 성능을 얻을 수 있을 것 같습니다
26:45
그리고 내 부디 제어가 가속도로 제동 한 거다 보니까
26:49
개인을 너무 높이면 약한 중동의 돔 오타가 좀 심하게 반응합니다
26:53
그럼 못해서 열이 나면서 잘못하면 템 냄새가 날 수 있어요
26:58
나중에 요 축 제어 까지 끝나고 비행을 좀 해보지 다가
27:02
모터가 너무 뜨거워 진다 싶으면 내 부디 게인을 좀 낮춰 주는 게 좋을
27:06
겁니다
27:07
그리고 제가 코드 작성 한거 에서 dj 에 필터를 좀 걸어 왔었는데 그
27:12
필터가 그런 현상을 좀 완화시켜 줄 거에요 그래서 그 필터는 그냥 그대로
27:16
쓰시면 됩니다
27:19
이제 여러분들의 등도 이렇게 한해를 날 날이 얼마 안 남았죠
27:24
그러면 이번 시간 룰 피치 축 제어 는 이렇게 마치구요
27:28
다음시간에 유축 제어를 설명드리도록 하겠습니다
27:31
타임라인 설명을 그때 같이 드리도록 하겠습니다
27:35
올해는 이번 시간에 이렇게 마치겠습니다 감사합니다

```


### Ch12 Heading control
#### video 49

{% include youtubePlayer.html id=page.youtubeID49 %}

```diff


```

#### video 50

{% include youtubePlayer.html id=page.youtubeID50 %}

```diff


```

### Review
#### video 51

{% include youtubePlayer.html id=page.youtubeID51 %}

```diff


```

#### video 52

{% include youtubePlayer.html id=page.youtubeID52 %}

```diff


```

#### video

```diff


```

#### video

```diff


```

#### video

```diff


```

#### video

```diff


```


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

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
---
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


#### video 3
- Powering up

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
- Buzzer setting

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

### chapter 2
#### video 6
- Rotation angle SPI

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


### chapter 3
- data rx
#### video 9
* u-center install

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


#### video 14
- FS IA6b iBus data

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

### chapter 4
- data parsing
#### video 14
- iBus message

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
- failsafe setting

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

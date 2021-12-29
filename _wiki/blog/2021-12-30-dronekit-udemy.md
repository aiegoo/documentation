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

////////////////////////SUMMARY////////////////////////////////
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


################################################################################################
# @File DroneKitPX4.py
# Example usage of DroneKit with PX4
#
# @author Sander Smeets sander@droneslab.com
#
# Code partly based on DroneKit (c) Copyright 2015-2016, 3D Robotics.
################################################################################################

### Import DroneKit-Python

```C
from dronekit import connect, Command, LocationGlobal
from pymavlink import mavutil
import time, sys, argparse, math
```

### Settings

```C
connection_string       = '127.0.0.1:14540'
MAV_MODE_AUTO   = 4
https://github.com/PX4/PX4-Autopilot/blob/master/Tools/mavlink_px4.py
```

### Parse connection argument

```C
parser = argparse.ArgumentParser()
parser.add_argument("-c", "--connect", help="connection string")
args = parser.parse_args()

if args.connect:
    connection_string = args.connect
```


### Init

### Connect to the Vehicle

```C
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
```




### Listeners

```C
home_position_set = False

#Create a message listener for home position fix
@vehicle.on_message('HOME_POSITION')
def listener(self, name, home_position):
    global home_position_set
    home_position_set = True
```


### Start mission example

### wait for a home position lock

```C
while not home_position_set:
    print "Waiting for home position..."
    time.sleep(1)
```

### Display basic vehicle state

```C
print " Type: %s" % vehicle._vehicle_type
print " Armed: %s" % vehicle.armed
print " System status: %s" % vehicle.system_status.state
print " GPS: %s" % vehicle.gps_0
print " Alt: %s" % vehicle.location.global_relative_frame.alt
```

### Change to AUTO mode

```C
PX4setMode(MAV_MODE_AUTO)
time.sleep(1)

### Load commands
cmds = vehicle.commands
cmds.clear()

home = vehicle.location.global_relative_frame
```

### takeoff to 10 meters

```C
wp = get_location_offset_meters(home, 0, 0, 10);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_TAKEOFF, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)
```

### move 10 meters north

```C
wp = get_location_offset_meters(wp, 10, 0, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)
```


### move 10 meters east

```C
wp = get_location_offset_meters(wp, 0, 10, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)
```

### move 10 meters south

```C
wp = get_location_offset_meters(wp, -10, 0, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)
```

### move 10 meters west

```C
wp = get_location_offset_meters(wp, 0, -10, 0);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_WAYPOINT, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)
```

### land

```C
wp = get_location_offset_meters(home, 0, 0, 10);
cmd = Command(0,0,0, mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT, mavutil.mavlink.MAV_CMD_NAV_LAND, 0, 1, 0, 0, 0, 0, wp.lat, wp.lon, wp.alt)
cmds.add(cmd)
```

### Upload mission

```C
cmds.upload()
time.sleep(2)
```

### Arm vehicle

```C
vehicle.armed = True
```
### monitor mission execution

```C
nextwaypoint = vehicle.commands.next
while nextwaypoint < len(vehicle.commands):
    if vehicle.commands.next > nextwaypoint:
        display_seq = vehicle.commands.next+1
        print "Moving to waypoint %s" % display_seq
        nextwaypoint = vehicle.commands.next
    time.sleep(1)
```

### wait for the vehicle to land

```C
while vehicle.commands.next > 0:
    time.sleep(1)

```


# Disarm vehicle

```C
vehicle.armed = False
time.sleep(1)
```

### Close vehicle object before exiting script

```C
vehicle.close()
time.sleep(1)

```


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

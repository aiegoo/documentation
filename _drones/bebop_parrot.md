---
layout: page
name: bebop parrot
permalink: bebop_parrot.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/parrot
excerpt_separator: <!--more-->
tags: mydrone
folder: '/.'
---

## bebop parrots


|---
| Type  | Details | Type  | Details
| :---: | ---  | :---: | ---
| frame |  | FC |
| motor |  | ESC |
| RC  |  | mode |
| weight |  | class |
| battery |  | air-time |
| configurator |  |  last updated |
|===
| airframe


### bebop parrot ardupilot connection
[parrotb_bebop_autopilot](https://ardupilot.org/copter/docs/parrot-bebop-autopilot.html)

[Building_for_bebop2](https://ardupilot.org/dev/docs/building-for-bebop-2.html#building-for-bebop-2)

[Bebop_ROS](http://wiki.ros.org/action/fullsearch/bebop_autonomy?action=fullsearch&context=180&value=linkto%3A%22bebop_autonomy%22)

### hacking bebop
[autonomylab](https://github.com/autonomylab/bebop-hacking.git)
<hr>

<!--more-->
### building ardupilot for bebop2
.. _building-for-bebop-2:

Building ArduCopter for Bebop 2
===============================
Install armhf toolchain
-----------------------

Uploading the Firmware
======================

Mission Planner can now upload stable and custom versions of ardupilot to the Bebop2.

..  youtube:: Ir0DyvlbTM0
    :width: 100%

Instructions below are for the manual method of uploading

Starting ArduPilot
==================

in

Launch Copter at startup
========================

Recovery
========

For recovery, you can use the same cable as the one used on Bebop, see
:ref:`here <building-for-bebop-on-linux_recovery>`.


Flying and RC over UDP
======================

Flying and RC over UDP instructions are the same as :ref:`the ones for Bebop <building-for-bebop-on-linux_flying>`

Basic configuration and frame parameters
========================================

Additional information
======================

The loiter mode quality is very good compared to the first Bebop because
of the (much better) UBlox GPS. It is now safe to takeoff and land in
the mode you want.

There is still no support for video yet and the optical flow and sonar
are currently under development.

This is a good time to participate and help improve them!


### bebop firmware flashing with UART

Here is my procedure once you get your usb cable with PIN ID tied to 1.
Then download the 2 archives here :
https://drive.google.com/drive/folders/1EWS_rFyLK9QZU39achJWOpyjjL1K6jQP?usp=sharing 28
```bash
mkdir ~/parrot
cp Bebop_Tools.tar.gz ~/parrot
cd ~/parrot
tar -xvf Bebop_Tools.tar.gz
sudo dpkg -i parrot-tools-installer-flashtools_5.9.47_all.deb
mkdir ~/.pinstrc
cp milos_linux_installer.tar.gz ~/.pinstrc
cd ~/.pinstrc
tar -xvf milos_linux_installer.tar.gz
```

Then unplug the battery of your bebop 2, plug the special USB cable.
Type `sudo pinst_usb milos linux installer`
Press the power button on your bebop 2.
Normally you should see messages on the console telling you the flashing is currently ongoing.
Scan Parrot ROM…
```
– found device : idVendor 0x19cf - idProduct 0x5037 - bcdDevice 0x0100 –
– Product: P7 USB Boot –
,
Send parrot bootloader /home/julien/.pinstrc/milos_inst_usb_bootldr.bin…
– bootloader loading OK –

Scan ParrotBoot device…
– found device : idVendor 0x19cf - idProduct 0x1111 - bcdDevice 0x0100 –
– Product: USB Stage 1 –
,
Send installer /home/julien/.pinstrc/milos_linux_installer_installer.plf…
the transfert took less than 1 second
– installer loading OK –
```

Scan Parrot installer…
```
– found device : idVendor 0x19cf - idProduct 0x1000 - bcdDevice 0x2499 –
– Product: Gadget Serial v2.4 –
,
Send payload /home/julien/.pinstrc/milos_linux_installer_payload.plf…
– 100 % complete –
the transfert took 26 s (957 KB/s)
Waiting flashing status…
– payload flashing OK –
```

And then you are done, though your bebop has gone back to an old version so you should update it asap to a more recent firmware version.
<hr>
<hr>

### _swarming:

Swarming/Formation-Flying Interface (Beta)
==========================================

![Belkin_hub](https://ardupilot.org/planner/_images/radiohub.jpg)


![swarm_button](https://github.com/ArduPilot/ardupilot_wiki/raw/master/planner/source/images/mp_screen_with_swarming_button.png)


**Setup Procedure:**


**First Flight:**


## from other ways
Building for Bebop on Linux
Content (Show)

Upgrading the firmware
Build ArduCopter for Bebop
Install armhf toolchain
On Ubuntu from 12.04
On other Linux distributions
Download and compile ArduCopter
Uploading the firmware
Starting ArduPilot
Changing the GPS configuration
Launch Copter at startup
Recovery
Flying
Controlling the Bebop via RC over UDP on Linux
Basic configuration and frame parameters
Known limitations
These instructions clarify how to build ArduPilot for the Bebop flight controller board on a Linux machine. More details on the Bebop can be found here.

Tip:

The instructions for running ArduPilot on Bebop 2 can be found here.

Warning:

Making the changes described in this article will void your warranty! Parrot’s technical support will not help you with this hack or to recover your original software.

Warning:

Hacking a commercial product is risky! This software is still evolving, and you may well find issues with the vehicle ranging from poor flight to complete software freeze.

That said, it is almost always possible to recover a drone and members of the ardupilot dev team can likely help people hacking or recovering their Bebop on this google group. Prepare to spend some time, patience and develop some hardware/software skills.

Contents [hide]

1 Upgrading the firmware

2 Build ArduCopter for Bebop

2.1 Install armhf toolchain

2.1.1 On Ubuntu from 12.04 * 2.1.2 On other Linux distributions

2.2 Download and compile ArduCopter
3 Uploading the firmware

4 Starting ArduPilot

5 Changing the GPS configuration

6 Launch Copter at startup

7 Recovery

8 Flying

9 Controlling the Bebop via RC over UDP on Linux

10 Basic configuration and frame parameters

11 Known limitations

### Upgrading the firmware
As of Nov 2015, the Bebop ships with a version of Linux that cannot run ArduPilot and must be upgraded. In order to upgrade it, you will need to download a custom version here.

In order to upgrade to this version:

Power up your Bebop
Connect to its Wi-Fi network (BebopDrone-XXXX)
Connect to it via ftp
ftp 192.168.42.1

go to the eMMC directory
cd internal_000

Upload the update file
put bebopdrone_update.plf

Connect to the Bebop by telnet
telnet 192.168.42.1

Sync and reboot
sync
reboot

Wait for the Bebop to perform the update (this could take several minutes)
Note:

Don’t shutdown your Bebop during this time

When the update is complete you can connect again via Wi-Fi and telnet and verify the update by checking the software version indicates 0.0.0 (not an official release)
cat version.txt

### Build ArduCopter for Bebop
Tip:

You can skip this step if you just want to try out the (experimental) binary version.

The following steps show how to build a custom version of the Copter software for Bebop:

Install armhf toolchain
On Ubuntu from 12.04
Install the official arm-linux-gnueabihf toolchain
sudo apt-get install gcc-arm-linux-gnueabihf g++-arm-linux-gnueabihf

On other Linux distributions
Install the arm-gnueabihf tool chain that can be downloaded from here
Extract the tar archive (for instance in /opt)
sudo tar -xjvf gcc-linaro-arm-linux-gnueabihf-4.9-2014.07_linux.tar.bz2 -C /opt/

Add the path to the toolchain to the PATH variable
export PATH=/opt/gcc-linaro-arm-linux-gnueabihf-4.9-2014.07_linux/bin:$PATH

Download and compile ArduCopter
You need to install git first (see instructions here)
Clone ardupilot repository
git clone https://github.com/diydrones/ardupilot.git

Building the flight control firmware is nearly identical for building for the Pixhawk except the make command is:
cd ardupilot/ArduCopter
make bebop

Strip the binary to reduce the memory footprint:
arm-linux-gnueabihf-strip ArduCopter.elf -o arducopter

### Uploading the firmware
If you haven’t built the firmware as described in the previous steps you can download a binary version here
Connect again by ftp and go to the eMMC directory
Put the arducopter binary
put arducopter

Connect to the Bebop via telnet
Copy arducopter to /usr/bin and change permissions
cp /data/ftp/internal_000/arducopter /usr/bin
chmod +x /usr/bin/arducopter

Starting ArduPilot
Connect via telnet
Kill the regular autopilot
kk

Launch Copter
arducopter -A udp:192.168.42.255:14550:bcast -B /dev/ttyPA1 -C udp:192.168.42.255:14551:bcast -l /data/ftp/internal_000/APM/logs -t /data/ftp/internal_000/APM/terrain

### Changing the GPS configuration
In order to get Bebop’s GPS to send the NMEA frames that APM’s NMEA driver understands, you need to change its configuration. To achieve this you will need to stop the in-build autopilot as described previously (and don’t launch Copter yet):

Download the gps_config file here
Connect to the Bebop via ftp and go to the eMMC directory as indicated in the “Upgrading the firmware” section above
Put the config file
put gps_config.txt

Connect to the Bebop via telnet
Copy gps_config.txt in /etc/
cp /data/ftp/internal_000/gps_config.txt /etc/

Launch the GPS config updater
libgps_cli

Wait for NMEA messages to be displayed in the console
Stop libgps_cli by typing Ctrl-C

### Launch Copter at startup
It is a lot more convenient to automatically execute Copter startup than connect and do this manually. In order to do so, the startup scripts need to be hacked in the following way.

Warning:

This part is critical since you have to edit the startup script. If you do something wrong here, you could end up with a Bebop that can no longer boot properly. If this happens you will have to get a UART cable to recover.

The startup script is located at /etc/init.d/rcS. You will need to edit it to remove the lines launching the regular autopilot and replace them by launching Copter. The line in question is the following:

DragonStarter.sh -out2null &

Replace this with:

arducopter -A udp:192.168.42.255:14550:bcast -B /dev/ttyPA1 -C udp:192.168.42.255:14551:bcast -l /data/ftp/internal_000/APM/logs -t data/ftp/internal_000/APM/terrain &

In order to avoid editing the file manually, download this rcS file.

Make a copy of the original rcS file for recovery purpose
cp /etc/init.d/rcS /etc/rcS_backup

Connect to the Bebop via ftp and put the rcS file in the eMMC as described before for the other files.
Then copy it manually to overwrite /etc/init.d/rcS and change permissions
cp /data/ftp/internal_000/rcS /etc/init.d/rcS
chmod +x /etc/init.d/rcS

Sync and reboot
sync
reboot

In case you want to put your Bebop back to normal and use the normal autopilot and app again, just replace /etc/init.d/rcS with the backup file, sync and reboot
cp /etc/rcS_backup /etc/init.d/rcS
sync
reboot

Note:

If you put your software back to normal and use your Bebop with FreeFlight smartphone App, you might be asked to upgrade your software version. If you do so, you will have to repeat some of the previous steps, at least for the GPS config, copying arducopter and modifying the init scripts. Regarding the need to upgrade to a custom version, it will depend on whether some options will or won’t be available in the following release. Informations to follow…

### Recovery
In case something went wrong and you are not able to boot your Bebop anymore

The UART port is located under the Bebop’s neck on the right side (facing the front camera)

You will have to pull back the polystyrene a bit but it shouldn’t cause much damage

Get a UART cable like this one or any FTDI 3 pin cable (GND TXD RXD)

Get headers like these ones and plug them into the cable like this:

Note:

The color codes for the cable are usually:

black = GND
yellow = RXD

orange = TXD

Plug the cable into the Bebop like this:
Note:

Be careful about the pinout:

black: front
yellow: middle

orange: back

Install a UART terminal emulator like minicom and connect to a Bebop once it is powered up
Copy the backup rcS file back to its original place, sync and reboot:
mount -o remount,rw /
cp /etc/rcS_backup /etc/init.d/rcS
sync
reboot

### Flying
FreeFlight 3 is not compatible with ArduPilot and you will therefore have to use one of the supported GCS. Connect to the Bebop via Wi-Fi and just start your GCS, it should connect automatically if you setup the link to UDP (in case it is needed).

The SkyController is not compatible with apm with its regular firmware. You would need to flash an alternative version in order to be able to control your Bebop with it (information about that is coming soon…).



In order to pilot the Bebop manually, Mission Planner GCS users can use a gamepad as described here.  Alternatively use the RCOutput UDP interface on port 777 on the Bebop, with a Linux PC (or board type Raspberry Pi) and a USB gamepad.

### Controlling the Bebop via RC over UDP on Linux
In order to control the arducopter for Bebop via RC over UDP, you can either write an application using this protocol and sending a packet every 10ms
Or use joystick_remote Linux application
In order to do so, clone the git repository:
git clone https://github.com/jberaud/joystick_remote.git

Build it
cd joystick_remote
make

Plug a USB gamepad (the list of supported gamepads is explained if you type joystick_remote –help)
In case your gamepad is not supported you can easily add support for it if you know its mapping
Connect to the Bebop via Wi-FI and launch the application:
./joystick_remote -d /dev/input/js[X] -t [gamepad] -r 192.168.42.1:777

where [X] is the device number of your joystick that you can easily find, usually 0 but sometimes 1 if your laptop already includes an input device like an accelerometer and [gamepad] is one of the supported gamepads.

so for an XBox 360 gamepad mapped on /dev/input/js0 the command line becomes
./joystick_remote -d/dev/input/js0 -t xbox_360 -r 192.168.42.1:777

The flight modes have to be set in Copter’s parameters in order to use the buttons to set the flight modes


### Basic configuration and frame parameters
In order to do the basic configuration and calibration, you can use any of the GCSs and perform
Magnetometer Calibration
RC Calibration
Accelerometer Calibration
Thanks to Leonard Hall, we have a very good set of tuning parameters that you can find here

#### Known limitations
The GPS of the Bebop isn’t very good compared to a UBlox GPS and therefore the Bebop drifts significantly in Loiter, PosHold and other GPS modes
Mission run in Auto mode work reasonably well but we recommend you takeoff and land in a non-GPS mode such as AltHold or Stabilize.
Some work will be done to improve support for this GPS
The optical flow is currently under development
There is currently no support for video streaming and capture﻿﻿
Building for Bebop 2
Content (Show)

#### Building ArduCopter for Bebop 2
Uploading the Firmware
Starting ArduPilot
Launch Copter at startup
Recovery
Flying and RC over UDP
Basic configuration and frame parameters
Additional information
These instructions explain how to use ArduPilot for the Bebop2 on a Linux machine. The Bebop 2 is based on the same architecture as the Bebop with a few noticeable changes, not the least being a much better quality GPS (UBlox GPS with a bigger antenna).

Warning:

Making the changes described in this article will void your warranty! Parrot’s technical support will not help you with this hack or to recover your original software.

Warning:

Hacking a commercial product is risky! This software is still evolving, and you may well find issues with the vehicle ranging from poor flight to complete software freeze.

That said, it is almost always possible to recover a drone and members of the ardupilot dev team can likely help people hacking or recovering their Bebop onthis google group. Prepare to spend some time, patience and develop some hardware/software skills.

Contents [hide]

1 Building ArduCopter for Bebop 2
2 Uploading the Firmware
3 Starting ArduPilot
4 Launch Copter at startup
5 Recovery
6 Flying and RC over UDP
7 Basic configuration and frame parameters
8 Additional information
Building ArduCopter for Bebop 2
The instructions are exactly the same as the one used for Bebop

Uploading the Firmware
Install adb (android debug tool):
sudo apt-get install android-tools-adb

Connect to the Bebop2’s WiFi network (BebopDrone-XXXX).
Enable adb server by pressing the power button 4 times.
Connect to the Bebop’s adb server on port 9050:
adb connect 192.168.42.1:9050

If the previous command returns an error, try again (press the power button 4 times and retry).
Remount the system partition as writeable:
adb shell mount -o remount,rw /

Push the stripped arducopter binary to the Bebop2:
adb push arducopter /usr/bin/

Starting ArduPilot
Kill the regular autopilot:
kk

Launch Copter:
arducopter -A udp:192.168.42.255:14550:bcast -B /dev/ttyPA1 -C udp:192.168.42.255:14551:bcast -l /data/ftp/internal_000/APM/logs -t /data/ftp/internal_000/APM/terrain

Launch Copter at startup
As for Bebop, modify the init script /etc/init.d/rcS_mode_default. Comment the following line:

DragonStarter.sh -out2null &

Replace it with:

arducopter -A udp:192.168.42.255:14550:bcast -B /dev/ttyPA1 -C udp:192.168.42.255:14551:bcast -l /data/ftp/internal_000/APM/logs -t /data/ftp/internal_000/APM/terrain &

Enable adb server by pressing the power button 4 times.
Connect to adb server as described before:
adb connect 192.168.42.1:9050

Re-mount the system partition as writeable:
adb shell mount -o remount,rw /

In order to avoid editing the file manually, you can download this one.
Save the original one and push this one to the bebop
adb shell cp /etc/init.d/rcS_mode_default /etc/init.d/rcS_mode_default_backup
adb push rcS_mode_default /etc/init.d/

Sync and reboot:
adb shell sync
adb shell reboot

Recovery
For recovery, you can use the same cable as the one used on Bebop, see here.

Remove the two screws using a torx T6 screwdriver

Remove the neck by pulling it towards the front of the Bebop

The UART connector is located on the right side

Plug the cable with the black wire at the front

Connect to the bebop with the UART port using any terminal emulator

Copy the backup rcS file back to its place

mount -o remount,rw /
cp /etc/init.d/rcS_mode_default_backup /etc/init.d/rcS_mode_default

Sync and reboot
sync
reboot

Flying and RC over UDP
Flying and RC over UDP instructions are the same as the ones for Bebop

Basic configuration and frame parameters
The set of tuning parameters can be found here. These are not yet fully tuned for Bebop 2

In order to do the basic configuration and calibration, you can use any of the GCSs and perform:

Magnetometer Calibration

RC Calibration
Accelerometer Calibration
Additional information
The loiter mode quality is very good compared to the first Bebop because of the (much better) UBlox GPS. It is now safe to takeoff and land in the mode you want.

There is still no support for video yet and the optical flow and sonar are currently under development.

[**Preview**]({{page.link}})

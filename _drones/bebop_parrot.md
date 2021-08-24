---
layout: page
name: bebop parrot
permalink: bebop_parrot.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/parrot
---

### bebop parrot ardupilot connection
[parrotb_bebop_autopilot](https://ardupilot.org/copter/docs/parrot-bebop-autopilot.html)

[Building_for_bebop2](https://ardupilot.org/dev/docs/building-for-bebop-2.html#building-for-bebop-2)

[Bebop_ROS](http://wiki.ros.org/action/fullsearch/bebop_autonomy?action=fullsearch&context=180&value=linkto%3A%22bebop_autonomy%22)

### hacking bebop 
[autonomylab](https://github.com/autonomylab/bebop-hacking.git)
<hr>

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

========
Swarming
========

Swarming/Formation-Flying Interface (Beta)
==========================================

![Belkin_hub](https://ardupilot.org/planner/_images/radiohub.jpg)


![swarm_button](https://github.com/ArduPilot/ardupilot_wiki/raw/master/planner/source/images/mp_screen_with_swarming_button.png)


**Setup Procedure:**


**First Flight:**


[**Preview**]({{page.link}})

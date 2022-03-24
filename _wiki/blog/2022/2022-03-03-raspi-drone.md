---
layout: post
title: "firmtech7 of naver cafe raspi drone project"
name: "raspi-drone"
tags: [drone]
tagName: drone
permalink: 2022-03-03-raspi-drone.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "drone raspi joystick firmtech"
summary: "Thu, Mar 03, 22, using raspi as fc to control small drone"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-03-03T15:12:55 +0900
updated: 2022-03-03 15:12
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## environments
```bash
ssh pi@172.30.1.37 on raspi
sudo apt install -y build-essential file git sudo ruby curl
sudo apt install libavutil-dev tmux
sudo apt install rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> .bashrc
echo 'eval "$(rbenv init -)"' >> .bashrc

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
rbenv install --list
rbenv install 3.0.3
Connecting with another GCS
===========================

You can attach multiple additional ground control stations to SITL from
*MAVProxy*. The simulated vehicle can then be controlled and viewed
through any attached GCS.

First use the ``output`` command on the *MAVProxy command prompt* to
determine where *MAVProxy* is sending packets:

::

    GUIDED> output
    GUIDED> 2 outputs
    0: 127.0.0.1:14550
    1: 127.0.0.1:14551

This tells us that we can connect *Mission Planner* to either UDP port
14550 or 14551, as shown on the dialog below.

.. figure:: ../images/MissionPlanner_Connect_UDP.jpg
   :target: ../_images/MissionPlanner_Connect_UDP.jpg

   Mission Planner: Connecting to a UDPPort

.. tip::

   We could connect *APM Planner 2* to the remaining port. If we
   needed a third port, we could add it as shown:

   ::

       GUIDED> output add 127.0.0.1:14553

*Mission Planner* can then be used to control the simulated vehicle in
exactly the same way as though it were a real vehicle. We can reproduce
the previous "takeoff-circle-land" example as shown below:

#. Change to GUIDED mode, arm the throttle, and then takeoff

   -  Open the *FLIGHT DATA* screen and select the *Actions* tab on the
      bottom left. This is where we can change the mode and set
      commands.

      .. figure:: ../images/MissionPlanner_Actions_GuidedModeArm.png
         :target: ../_images/MissionPlanner_Actions_GuidedModeArm.png

         Mission Planner: Actions Tab (Set Mode, Arm/Disarm)

   -  Select **Guided** in the *Mode selection list* and then press the
      **Set Mode** button.
   -  Select the **Arm/Disarm** button
   -  Right-click on the map and select Takeoff. Then enter the desired
      takeoff altitude

      .. figure:: ../images/MissionPlanner_Map_takeoff.jpg
         :target: ../_images/MissionPlanner_Map_takeoff.jpg

         Mission Planner Map: Takeoff Command

   .. note::

      Takeoff must start within 15 seconds of arming, or the motors
      will disarm.

#. Change to CIRCLE mode on the *Action* tab and watch the copter circle
   on the map.
#. You can change the circle radius in the *CONFIG/TUNING* screen.
   Select *Full Parameters List*, then the **Find** button and search
   for ``CIRCLE_MODE``. When you've changed the value press the **Write
   Params** button to save them to the vehicle.
#. When you're ready to land you can set the mode to RTL.

Running SITL with a GCS without MAVProxy
========================================

It is also possible to interact with SITL without using *MAVProxy* at
all using **ArduCopter.elf** (in the **ArduCopter** directory).

Run the file in the *Cygwin Terminal*, specifying a home position and
vehicle model as shown below:

::

    hamis_000@XPS12ultra ~/ardupilot/ArduCopter
    $ ./ArduCopter.elf --home -35,149,584,270 --model quad
    Started model quad at -35,149,584,270 at speed 1.0
    Starting sketch 'ArduCopter'
    Starting SITL input
    bind port 5760 for 0
    Serial port 0 on TCP port 5760
    Waiting for connection ....

The command output shows that you can connect to SITL using TCP/IP at
port 5760.

In *Mission Planner* we first change the link type to TCP and then press
the **Connect** button. Click through the \ *remote host* and *remote
Port* prompts as these default to the correct values.

.. figure:: ../images/MissionPlanner_ConnectTCP.jpg
   :target: ../_images/MissionPlanner_ConnectTCP.jpg

   Mission Planner: Connecting toSITL using TCP

Mission Planner will then connect and can be used just as before.

.. tip::

   **ArduCopter.elf** has other startup options, which you can use
   using the -h command line parameter:

   ::

       ./ArduCopter.elf -h

Updating ArduPilot
==================

See advice on :ref:`this wiki page <git-rebase>` regarding how to "Rebase" on ArduPilot's master branch.

Updating MAVProxy
=================

.. warning::

   The *MAVProxy 1.4.19 *\ installer does not properly remove all
   parts of preceding installations. Before installing a new version you
   must first delete the old directory: C\ **:\\Program Files
   (x86)\\MAVProxy\\**.

`Download and Install MAVProxy for Windows <https://firmware.ardupilot.org/Tools/MAVProxy/MAVProxySetup-latest.exe>`__ (this link always points to the ​
244
    hamis_000@XPS12ultra ~/ardupilot/ArduCopter
245
    $ ./ArduCopter.elf --home -35,149,584,270 --model quad
246
    Started model quad at -35,149,584,270 at speed 1.0
247
    Starting sketch 'ArduCopter'
248
    Starting SITL input
249
    bind port 5760 for 0
250
    Serial port 0 on TCP port 5760
251
    Waiting for connection ....
252
​
253
The command output shows that you can connect to SITL using TCP/IP at
254
port 5760.
255
​
256
In *Mission Planner* we first change the link type to TCP and then press
257
the **Connect** button. Click through the \ *remote host* and *remote
258
Port* prompts as these default to the correct values.
259
​
260
.. figure:: ../images/MissionPlanner_ConnectTCP.jpg
261
   :target: ../_images/MissionPlanner_ConnectTCP.jpg
262
​
263
   Mission Planner: Connecting toSITL using TCP
264
​
265
Mission Planner will then connect and can be used just as before.
266
​
267
.. tip::
268
​
269
   **ArduCopter.elf** has other startup options, which you can use
270
   using the -h command line parameter:
271
​
272
   ::
273
​
274
       ./ArduCopter.elf -h
275
​
276
Updating ArduPilot
277
==================
278
​
279
See advice on :ref:`this wiki page <git-rebase>` regarding how to "Rebase" on ArduPilot's master branch.
280
​
281
Updating MAVProxy
282
=================
283
​
284
.. warning::
285
​
286
   The *MAVProxy 1.4.19 *\ installer does not properly remove all
287
   parts of preceding installations. Before installing a new version you
288
   must first delete the old directory: C\ **:\\Program Files
289
   (x86)\\MAVProxy\\**.
290
​
291
`Download and Install MAVProxy for Windows <https://firmware.ardupilot.org/Tools/MAVProxy/MAVProxySetup-latest.exe>`__ (this link always points to the latest version!)
292
​
293
​
294
.. _sitl-native-on-windows_next_steps:latest version!)


.. _sitl-native-on-windows_next_steps:
# in case of issues with above, follow this instruction: https://elinux.org/RPi_Ruby_on_Rails
sudo apt install dirmngr
# Install prerequisites
sudo apt-get install -y git curl zlib1g-dev subversion 
# this will take hours
curl -L get.rvm.io | bash -s stable --rails

# Additional Ruby dependencies
sudo apt-get install -y openssl libreadline6-dev git-core zlib1g libssl-dev
sudo apt-get install -y libyaml-dev libsqlite3-dev sqlite3
sudo apt-get install -y libxml2-dev libxslt-dev
sudo apt-get install -y autoconf automake libtool bison
# Install prerequisites
sudo apt-get install -y git curl zlib1g-dev subversion

source ~/.rvm/scripts/rvm

sudo apt install tmux
gem install tmuxinator

sudo apt install powerline
sudo apt install fonts-powerline

mkdir .configure/fontcofnig/

tee .configure/fontconfig/conf.d

<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <selectfont>
    <acceptfont>
      <pattern>
        <patelt name="family"><string>terminess powerline</string></patelt>
      </pattern>
    </acceptfont>
  </selectfont>
</fontconfig>

fc-cache -vf

$ sudo wiliest wlan0
# Returns list of available Wifi networks
$ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
#opens the wpa-supplicant configuration file in nano
#Go to the bottom and add:
network = {
    ssid = "wifiname"
    psk = "wifipassword"
}

# install mavproxy
sudo apt-get install python3-dev python3-opencv python3-wxgtk4.0 python3-pip python3-matplotlib python3-lxml python3-pygame
pip3 install PyYAML mavproxy --user
echo "export PATH=$PATH:$HOME/.local/bin" >> ~/.bashrc
```


## source
[source_cafe](cafe.naver.com/firtech7)

### cloning raspi usb stick

### installing joystick_remote


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

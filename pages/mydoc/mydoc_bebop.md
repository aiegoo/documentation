---
title: bebop autonomous codes
permalink: mydoc_bebop.html
sidebar: mydoc_sidebar
tags: [bebop]
last_updated: July 8, 2021
toc: true
folder: mydoc
---

| Type  | Details | Type  | Details |
| :---: | ---  | :---: | ---  |
| frame |  | FC |  |
| motor |  | ESC |  |
| RC  |  | mode |  |
| weight |  | class |  |
| battery |  | air-time |  |
| configurator |  |  last updated |   |


****************************************************************************
### bebop_autonomy - ROS Driver for Parrot Bebop Drone (quadrocopter) 1.0 & 2.0
****************************************************************************

*bebop_autonomy* is a :abbr:`ROS (Robot Operating System)` driver for `Parrot Bebop 1.0 <http://www.parrot.com/ca/products/bebop-drone/>`_ and `2.0 <https://www.parrot.com/ca/drones/parrot-bebop-2>`_ drones (quadrocopters), based on Parrot's official `ARDroneSDK3 <http://developer.parrot.com/docs/SDK3/>`_. This driver has been developed in `Autonomy Lab <http://autonomylab.org/>`_ of `Simon Fraser University <http://www.sfu.ca/>`_ by `Mani Monajjemi <http://mani.im>`_ and other contributers (:ref:`sec-contribs`). This software is maintained by `Sepehr MohaimenianPour <http://sepehr.im/>`_ (AutonomyLab, Simon Fraser University), `Thomas Bamford <#>`_ (Dynamic Systems Lab, University of Toronto) and `Tobias Naegeli <https://ait.ethz.ch/people/naegelit/>`_ (Advanced Interactive Technologies Lab, ETH Zürich).

[`Source Code <https://github.com/AutonomyLab/bebop_autonomy>`_] 
[`ROS wiki page <http://wiki.ros.org/bebop_autonomy>`_] 
[`Support <http://answers.ros.org/questions/scope:all/sort:activity-desc/tags:bebop_autonomy/page:1/>`_] 
[`Bug Tracker <https://github.com/AutonomyLab/bebop_autonomy/issues>`_] 

.. _sec-roadmap:

#### Features and Roadmap
====================

.. csv-table::
  :header: "Feature", "Status", "Notes"

  SDK Version,"3.12.6", "Since v0.7"
  Support for Parrot Bebop 1, Yes, "Tested up to Firmware 3.3"
  Support for Parrot Bebop 2, Yes, "Tested up to Firmware 4.0.6"
  Support for Parrot Disco FPV, No, "Not tested (help wanted)"
  Core piloting, Yes, ""
  H264 video decoding, Yes, "Enhancement: `#1 <https://github.com/AutonomyLab/bebop_autonomy/issues/1>`_"
  ROS Camera Interface, Yes, ""
  Nodelet implementation, Yes, ""
  Publish Bebop states as ROS topics, Yes, ""
  Dynamically reconfigurable Bebop settings, Yes, ":ref:`sec-dev-dyn`"
  Use `parrot_arsdk <https://github.com/AutonomyLab/parrot_arsdk>`_ instead of building ARSDK3 inline, Yes, "Since v0.6: `#75 <https://github.com/AutonomyLab/bebop_autonomy/issues/75>`_"
  Bebop In The Loop tests, Yes, ":ref:`sec-dev-test`"
  Joystick teleop demo, Yes, ":ref:`sec-pilot-teleop`"
  TF Publisher, Yes, "Since v0.5 (:ref:`sec-tf`)"
  Odometry Publisher, Yes, "Since v0.5 (:ref:`sec-odom`)"
  Provide ROS API for on-board picture/video recording, Yes, "Since v0.4.1 (:ref:`sec-snapshot`)"
  GPS Support, Yes, "Since v0.6 (:ref:`sec-gps`)"
  Support for 720p streaming, Yes, "Since v0.6"
  Mavlink Support, No, ""
  Binary Release, No, ""
  Support for Parrot Sky Controller, No, ""

Table of Contents
=================

.. toctree::
  :maxdepth: 2

  changelog
  installation
  running
  piloting
  reading
  configuration
  coordinates
  contribute
  FAQ
  dev
  license

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

<hr>
<hr>

************
Installation
************

### Compiling From Source
=====================

Pre-requirements:

- ROS *Indigo*, *Jade* or *Kinetic* (Only tested on *Ubuntu*)
- Ubuntu packages: ``build-esstential``, ``python-rosdep``, ``python-catkin-tools``
- Basic familiarity with building ROS packages

```bash

  $ sudo apt-get install build-essential python-rosdep python-catkin-tools
```

To compile from source, you need to clone the source code in a new or existing ``catkin`` workspace, use ``rosdep`` to install dependencies and finally compile the workspace using `catkin`. The following commands demonstrate this procedure in a newly created ``catkin`` workspace.

.. note:: Since version 0.6, `Parrot ARSDK <http://developer.parrot.com/docs/SDK3/>`_, the main underlying dependency of  *bebop_autonomy* is not build inline anymore. Instead, the slightly patched and catkinized version of it, called `parrot_arsdk <https://github.com/AutonomyLab/parrot_arsdk>`_, is fetched as a dependency during the ``rosdep install`` step below. This dramatically decreases the compile time of the package compared to previous versions (e.g. from ~15 minutes to less than a minute on a modern computer). If you are re-compiling from source, you need to clean your workspace first: ``$ catkin clean [-y]``.

```bash

  # Create and initialize the workspace
  $ mkdir -p ~/bebop_ws/src && cd ~/bebop_ws
  $ catkin init
  $ git clone https://github.com/AutonomyLab/bebop_autonomy.git src/bebop_autonomy
  # Update rosdep database and install dependencies (including parrot_arsdk)
  $ rosdep update
  $ rosdep install --from-paths src -i
  # Build the workspace
  $ catkin build 
```

<hr>
<hr>

******************
### Running the Driver
******************

You can run Bebop's ROS drivereither as a ROS `Nodelet <http://wiki.ros.org/nodelet>`_ or as a standalone ROS Node. The former is recommended if you intend to perform any kind of processing on Bebop's video stream.

.. note:: If you compile the driver form source, do not forget to source your catkin workspace prior to running the driver. (i.e. ``source ~/bebop_ws/devel/setup.[bash|zsh]``)

.. note:: Ensure that your Bebop's firmware is at least **2.0.29** and your computer is connected to Bebop's wireless network.

#### Running the driver as a Node
================================

The executable node is called ``bebop_driver_node`` and exists in ``bebop_driver`` package. It's recommended to run the Node in its own namespace and with default configuration. The driver package comes with a sample launch file ``bebop_driver/launch/bebop_node.launch`` which demonstrates the procedure.

.. code-block:: bash

  $ roslaunch bebop_driver bebop_node.launch


.. literalinclude::
  ../bebop_driver/launch/bebop_node.launch
  :language: XML
  :caption: bebop_node.launch

#### Running the driver as a Nodelet
===================================

To run the driver as a ROS Nodelet, you need to first run a Nodelet manager, then load the driver's Nodelet (``bebop_driver/BebopDriverNodelet``) in it, along with other Nodelets that need to communicate with the driver. `bebop_tools/launch/bebop_nodelet_iv.launch` is a sample launch file that demonstrates these steps by visualizing Bebop's video stream using an instance of `image_view/image <http://wiki.ros.org/image_view#image_view.2BAC8-diamondback.image_view.2BAC8-image>`_ Nodelet. Similar to `bebop_node.launch`, it also runs everything in its own namespace and loads the default configuration.

```bash

  $ roslaunch bebop_tools bebop_nodelet_iv.launch
```

.. literalinclude::
  ../bebop_tools/launch/bebop_nodelet_iv.launch
  :language: XML
  :caption: bebop_tools/launch/bebop_nodelet_iv.launch

.. literalinclude::
  ../bebop_driver/launch/bebop_nodelet.launch
  :language: XML
  :caption: bebop_driver/launch/bebop_nodelet.launch

  <hr>
  <hr>

  *************************
### Sending Commands to Bebop
*************************

.. _sec-pilot-teleop:

.. note:: ``bebop_tools`` package comes with a launch file for tele-operating Bebop with a joystick using ROS `joy_teleop <http://wiki.ros.org/joy_teleop>`_ package. The configuration file (key-action map) is written for `Logitech F710 controller <http://gaming.logitech.com/en-ca/product/f710-wireless-gamepad>`_ and is located in ``bebop_tools/config`` folder. Adapting the file to your own controller is straightforward. To teleop Bebop while the driver is running execute ``roslaunch bebop_tools joy_teleop.launch``.

#### Takeoff
=======

Publish a message of type ``std_msgs/Empty`` to ``takeoff`` topic.

.. code-block:: bash

  $ rostopic pub --once [namespace]/takeoff std_msgs/Empty

#### Land
====

Publish a message of type ``std_msgs/Empty`` to ``land`` topic.

.. code-block:: bash

  $ rostopic pub --once [namespace]/land std_msgs/Empty

#### Emergency
=========

Publish a message of type ``std_msgs/Empty`` to ``reset`` topic.

.. code-block:: bash

  $ rostopic pub --once [namespace]/reset std_msgs/Empty

#### Piloting
========

To move Bebop around, publish messages of type `geometry_msgs/Twist <http://docs.ros.org/api/geometry_msgs/html/msg/Twist.html>`_ to `cmd_vel` topic while Bebop is flying. The effect of each field of the message on Bebop's movement is listed below:

.. code-block:: text

  linear.x  (+)      Translate forward
            (-)      Translate backward
  linear.y  (+)      Translate to left
            (-)      Translate to right
  linear.z  (+)      Ascend
            (-)      Descend
  angular.z (+)      Rotate counter clockwise
            (-)      Rotate clockwise

Acceptable range for all fields are ``[-1..1]``. The drone executes the last received command as long as the driver is running. This command is reset to zero when Takeoff_, Land_ or Emergency_ command is received. To make Bebop hover and maintain its current position, you need to publish a message with all fields set to zero to ``cmd_vel``.

The ``linear.x`` and ``linear.y`` parts of this message set the **pitch** and **roll** angles of the Bebop, respectively, hence control its forward and lateral accelerations. The resulting pitch/roll angles depend on the value of ``~PilotingSettingsMaxTiltCurrent`` `parameter <./autogenerated/ardrone3_settings_param.html#pilotingsettingsmaxtiltcurrent>`_, which is specified in degrees and is dynamically reconfigurable (:ref:`sec-dyn-params`).

The ``linear.z`` part of this message controls the **vertical velocity** of the Bebop. The resulting velocity in m/s depends on the value of ``~SpeedSettingsMaxVerticalSpeedCurrent`` `parameter <./autogenerated/ardrone3_settings_param.html#speedsettingsmaxverticalspeedcurrent>`_, which is specified in meters per second and is also dynamically reconfigurable (:ref:`sec-dyn-params`). Similarly, the ``angular.z`` component of this message controls the rotational velocity of the Bebop (around the z-axis). The corresponding scaling `parameter <./autogenerated/ardrone3_settings_param.html#speedsettingsmaxrotationspeedcurrent>`_ is ``SpeedSettingsMaxRotationSpeedCurrent`` (in degrees per sec).

.. code-block:: text

  roll_degree       = linear.y  * max_tilt_angle
  pitch_degree      = linear.x  * max_tilt_angle
  ver_vel_m_per_s   = linear.z  * max_vert_speed
  rot_vel_deg_per_s = angular.z * max_rot_speed

#### Moving the Virtual Camera
=========================

To move Bebop's virtual camera, publish a message of type `geometry_msgs/Twist <http://docs.ros.org/api/geometry_msgs/html/msg/Twist.html>`_ to `camera_control` topic. ``angular.y`` and ``angular.z`` fields of this message set **absolute** tilt and pan of the camera in **degrees** respectively. The field of view of this virtual camera (based on our measurements) is ~80 (horizontal) and ~50 (vertical) degrees.

.. warning:: The API for this command is not stable. We plan to use ``JointState`` message in future versions.

.. code-block:: text

  angular.y (+)      tilt down
            (-)      tilt up
  angular.z (+)      pan left
            (-)      pan right

#### GPS Navigation
==============

Start Flight Plan
-----------------

An autonomous flight plan consists of a series of GPS waypoints along with Bebop velocities and camera angles encoded in an XML file.

Requirements that must be met before an autonomous flight can start:

    * Bebop is calibrated
    * Bebop is in outdoor mode
    * Bebop has fixed its GPS

To start an autonomous flight plan, publish a message of type `std_msgs/String <http://docs.ros.org/api/std_msgs/html/msg/String.html>`_ to `autoflight/start` topic. The ``data`` field should contain the name of the flight plan to execute, which is already stored on-board Bebop.

.. note:: If an empty string is published, then the default 'flightplan.mavlink' is used.

.. warning:: If not already flying, Bebop will attempt to take off upon starting a flight plan.

The `Flight Plan App <https://play.google.com/store/apps/details?id=com.parrot.freeflight3>`_ allows easy construction of flight plans and saves them on-board Bebop.

An FTP client can also be used to view and copy flight plans on-board Bebop. `FileZilla` is recommended:

.. code-block:: bash

  $ sudo apt-get install filezilla
  $ filezilla

Then open `Site Manager` (top left), click `New Site`:

    * `Host`: 192.168.42.1
    * `Protocol`: FTP
    * `Encrpytion`: Use plain FTP
    * `Logon Type`: Anonymous
    * Connect.

#### Pause Flight Plan
-----------------

To pause the execution of an autonomous flight plan, publish a message of type `std_msgs/Empty <http://docs.ros.org/api/std_msgs/html/msg/Empty.html>`_ to `autoflight/pause` topic. Bebop will then hover and await further commands.
To resume a paused flight plan, publish the same message that was used to start the autonomous flight (ie. to the topic `autoflight/start`). Bebop will fly to the lastest waypoint reached before continuing the flight plan.

.. note:: Any velocity commands sent to Bebop during an autonomous flight plan will pause the plan.

#### Stop Flight Plan
----------------

To stop the execution of an autonomous flight plan, publish a message of type `std_msgs/Empty <http://docs.ros.org/api/std_msgs/html/msg/Empty.html>`_ to `autoflight/stop` topic. Bebop will hover and await further commands.

### Navigate Home
-------------

To ask Bebop to autonomously fly to it's home position, publish a message of type `std_msgs/Bool <http://docs.ros.org/api/std_msgs/html/msg/Bool.html>`_ to `autoflight/navigate_home` topic with the ``data`` field set to ``true``. To stop Bebop from navigating home, publish another message with ``data`` set to ``false``.

.. warning:: The topic has changed from `navigate_home` to `autoflight/navigate_home` after version 0.5.1.

#### Flat Trim
=========

.. error:: Test fails, probably not working.

Publish a message of type ``std_msgs/Empty`` to ``flattrim`` topic.

.. code-block:: bash

  $ rostopic pub --once [namespace]/flattrim std_msgs/Empty

#### Flight Animations
=================

.. warning:: Be extra cautious when performing any flight animations, specially in indoor environments.

Bebop can perform four different types of flight animation (flipping). To perform an animation, publish a message of type ``std_msgs/UInt8`` to `flip` topic while drone is flying. The ``data`` field determines the requested animation type.


.. code-block:: text

  0       Flip Forward
  1       Flip Backward
  2       Flip Right
  3       Flip Left

.. _sec-snapshot:

#### Take on-board Snapshot
======================

.. versionadded:: 0.4.1

To take a high resolution on-board snapshot, publish a ``std_msgs/Empty`` message on ``snapshot`` topic. The resulting snapshot is stored on the internal storage of the Bebop. The quality and type of this image is not configurable using the ROS driver. You can use the official FreeFlight3 app to configure your Bebop prior to flying. To access the on-board media, either connect your Bebop over USB to a computer, or use a FTP client to connect to your Bebop using the following settings:

* Default IP: ``192.168.42.1``
* Port: ``21``
* Path: ``internal_000/Bebop_Drone/media``
* Username: ``anonymous``
* Password: *<no password>*

#### Set camera exposure
===================

It is possible to set camera exposure by publishing ``std_msgs/Float32`` message on ``set_exposure`` topic. Note that this functionality is not supported in Bebop1 Fw 3.3.0.  

* Exposure value range: ``-3.0 .. +3.0``

#### Toggle on-board Video Recording
===============================

.. versionadded:: 0.4.1

To start or stop on-board high-resolution video recording, publish a ``std_msgs/Bool`` message on the ``record`` topic. The value of ``true`` starts the recording while the value of ``false`` stops it. Please refer to the previous section for information on how to access the on-board recorded media.

<hr>
<hr>

******************
### Reading from Bebop
******************

#### Camera
======

The video stream from Bebop's front camera is published on ``image_raw`` topic as ``sensor_msgs/Image`` messages. *bebop_driver* complies with ROS camera interface specifications and publishes camera information and calibration data to ``camera_info`` topic. Due to limitations in Parrot's ARDroneSDK3, the quality of video stream is limited to **640 x 368 @ 30 Hz**. The field of view of this virtual camera (based on our measurements) is ~80 (horizontal) and ~50 (vertical) degrees.

To set the location of camera calibration data, please check this page: :doc:`configuration`. Since v0.4, the package ships with a default camera caliberation file located at ``bebop_driver/data/bebop_front_calib.yaml``. Both default node/nodelet launch files, load this file when executing the driver.

.. _sec-ros-topic:

#### Standard ROS messages
=====================

.. _sec-odom:

Odometery
---------

.. versionadded:: 0.5

* ROS Topic: ``odom``
* ROS Message Type: ``nav_msgs/Odometry``

The driver integerates visual-inertial velocity estimates reported by Bebop's firmware to calculate the odometery. This message contains both the position and velocity of the Bebop in an ENU aligned odometery frame also named as ``odom``. This frame name is configurable (see :ref:`sec-params`) The cooridnate frame convention complies with ROS REP 103 (:ref:`sec-coords`). Please not that since odometery is calculated from Bebop States (see :ref:`sec-states`), the update rate is limited to **5 Hz**.

.. _sec-gps:

GPS
---

.. versionadded:: 0.5

* ROS Topic: ``fix``
* ROS Message Type: ``sensor_msgs/NavSatFix``

Joint States (Pan/Tilt of The Virtual Camera)
---------------------------------------------

.. versionadded:: 0.5

* ROS Topic: ``joint_states``
* ROS Message Type: ``sensor_msgs/JointState``

.. _sec-tf:

### TF
==

.. versionadded:: 0.5

The driver updates the following `TF <http://wiki.ros.org/tf>`_ tree based on a simple kinematic model of the Bebop (provided by ``bebop_description``) pacakge, the current state of the virtual camera joints and the calculated odometery (if ``publish_odom_tf`` is set, see :ref:`sec-params`).

.. image:: img/tf.png

.. _sec-states:

![odom_tf](https://github.com/AutonomyLab/bebop_autonomy/raw/indigo-devel/docs/img/tf.png)
States (aka Navdata)

====================

Unlike Parrot ARDrone, Bebop does not constantly transmit all on-board data back to the host device with high frequency. Each state variable is sent only when its value is changed. In addition, the publication rate is currently limited to **5 Hz**. The driver publishes these states **selectively** and when **explicitly** enabled through a ROS parameter. For example setting ``~states/enable_pilotingstate_flyingstatechanged`` parameter to ``true`` will enable the publication of flying state changes to topic ``states/ARDrone3/PilotingState/FlyingStateChanged``. List of all such parameters and their corresponding topics and message types are indexed in the following pages:

Common States
  :doc:`autogenerated/common_states_param_topic`
Bebop-specific States
  :doc:`autogenerated/ardrone3_states_param_topic`

<hr>
<hr>

********************************
### Configuring Bebop and the Driver
********************************

.. _sec-params:

#### Driver Parameters
=================

Following parameters are set during driver's startup:

~bebop_ip
---------

Sets the IP addres of the Bebop. The default value is ``192.168.42.1``.

~reset_settings
---------------

Setting this parameter to ``true`` will reset all Bebop configurations to factory defaults. Default value is ``false``.

~sync_time
----------

Setting this parameter to ``true`` will synchronize drone time with your ROS system time. Default value is ``false``. 

~camera_info_url
----------------

Sets the location of the camera calibration data. Default is empty string. For more information check `this documentation <http://wiki.ros.org/camera_info_manager#URL_Names>`_.

.. note::

  Since v0.4, the package comes with a default camera calibration file located at ``bebop_driver/data/bebop_front_calib.yaml``.

~cmd_vel_timeout
----------------

.. versionadded:: 0.4

Sets the safety timeout for piloting ``cmd_vel`` commands in seconds. Deafult is set to **0.1** seconds (100 miliseconds). If no piloting command is received by the driver within this timeout period, the driver issues a stop command which causes the drone to hover.

~odom_frame_id
--------------

.. versionadded:: 0.5

Sets the ``frame_id`` of the odometery message (see :ref:`sec-ros-topic`) and the odometery frame used in the TF tree (see :ref:`sec-tf`). The default value is ``odom``.

~publish_odom_tf
----------------

.. versionadded:: 0.5

Enables the publishing of ``odom`` to ``base_link`` TF transform (see :ref:`sec-tf`). The default value is ``true``.

~camera_frame_id
----------------

.. deprecated:: 0.5

Sets the ``frame_id`` of camera and image messages. The default value is ``camera_optical``.

.. _sec-dyn-params:

#### Dynamically Reconfigurable Parameters for Bebop
===============================================

Following ROS parameters change Bebop's settings. They can be tweaked during runtime using `dynamic reconfigure GUI <http://wiki.ros.org/dynamic_reconfigure#dynamic_reconfigure.2BAC8-groovy.reconfigure_gui>`_. Setting `~reset_settings`_ parameter to ``true`` will reset all these settings to factory defaults.

:doc:`autogenerated/ardrone3_settings_param`


<hr>
<hr>

*****************************
### Coordinate System Conventions
*****************************

.. _sec-coords:

#### ROS Standard Message Types (i.e Twist, Odometery) - REP 103
===========================================================

+x    forward
+y    left
+z    up
+yaw  CCW

- More information: http://www.ros.org/reps/rep-0103.html

#### Bebop Velocities
================

+x    East
+y    South
+z    Down

#### Bebop Attitude
==============

+x    forward
+y    right
+z    down
+yaw  CW

#### SDK's setPilotingPCMD
=====================

+roll   right
+pitch  forward
+gaz    up
+yaw    CW

<hr>
<hr>

**************
#### Under The Hood
**************

This page contains information about the architecture of the driver and different techniques used for its development.

#### Automatic Code Generation
=========================

TBA

#### Threading Model
===============

TBA

#### Publishing the States
=====================

TBA

.. _sec-dev-dyn:

#### Configuring the Drone
=====================

TBA

.. _sec-dev-test:

#### Tests
=====

Enabling Bebop In The Loop Tests
--------------------------------

.. code-block:: bash

  $ cd /path/to/bebop_ws
  $ catkin clean --cmake-cache
  $ catkin build bebop_driver --cmake-args -DRUN_HARDWARE_TESTS=ON

Running Bebop In The Loop Tests
-------------------------------

.. warning:: Bebop in the loop tests perform live unit tests with a real robot. Please proceed with caution and execute the tests in an area with at least 5 meters of clearance radius (empty space) around the Bebop.

.. code-block:: bash

  $ cd /path/to/bebop_ws/build/bebop_driver
  $ make tests
  $ rostest --text bebop_driver bebop_itl_test.test

#### Upgrading the Bebop SDK
=======================

.. warning:: Since version 0.6, `Parrot ARSDK <http://developer.parrot.com/docs/SDK3/>`_, the main underlying dependency of  *bebop_autonomy* is not build inline anymore. Instead, the slightly patched and catkinized version of it, called `parrot_arsdk <https://github.com/AutonomyLab/parrot_arsdk>`_, is fetched as a dependency. **The following documentation needs to be updated**.

1. Update the ``GIT_TAG`` of ``ARDroneSDK3`` in ``bebop_driver/CMakeLists.txt::add_custom_target::./repo init ... -b GIT_TAG`` to your desired commit hash, branch or tag (release). The official upstream repository is hosted `here <https://github.com/Parrot-Developers/arsdk_manifests>`_.
2. Checkout (or browse) the upstream repository at the same hash used in step (1) and open ``release.xml`` file. From this file, extract the commit hash of ``arsdk-xml`` from the ``revision`` property of this XML tag: ``<project name="arsdk-xml" ... revision="" />``.
3. Open ``bebop_driver/scripts/meta/generate.py`` and update ``LIBARCOMMANDS_GIT_HASH`` variable to the hash obtained in step (2).
4. Change the working diretory to ``bebop_driver/scripts/meta``, then execute ``generate.py`` from the command line. This will regenerate all automatically generated message definitions, header files and documentations.
5. Copy the generated files to their target locations by calling ``./install.sh``.
6. In ``bebop_driver/include/bebop_driver/autogenerated/ardrone3_setting_callbacks.h`` change the following varialbles:

  - ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_MAXDISTANCECHANGED_VALUE`` to ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_MAXDISTANCECHANGED_CURRENT``.
  - ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_BANKEDTURNCHANGED_VALUE`` to ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_BANKEDTURNCHANGED_STATE``
  - ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_CIRCLINGRADIUSCHANGED_VALUE`` to ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_CIRCLINGRADIUSCHANGED_CURRENT``
  - ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_CIRCLINGALTITUDECHANGED_VALUE`` to ``ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_PILOTINGSETTINGSSTATE_CIRCLINGALTITUDECHANGED_CURRENT``

In ``bebop_driver/include/bebop_driver/autogenerated/ardrone3_state_callbacks.h`` remove the following lines:

  ``arg = NULL;
    HASH_FIND_STR (arguments, ARCONTROLLER_DICTIONARY_KEY_ARDRONE3_ACCESSORYSTATE_CONNECTEDACCESSORIES_LIST_FLAGS, arg);
    if (arg)
    {
      msg_ptr->list_flags = arg->value.U8;
    }``

In ``bebop_msgs/msg/autogenerated/Ardrone3AccessoryStateConnectedAccessories.msg`` remove the following lines:
  ``# List entry attribute Bitfield. 0x01: First: indicate its the first element of the list. 0x02: Last: indicate its the last element of the list. 0x04: Empty: indicate the list is empty (implies First/Last). All other arguments should be ignored. 0x08: Remove: This value should be removed from the existing list.
    uint8 list_flags``

These changes are required because the upstream XML file is inconsistent for a couple of variable names.

7. Remove ``build`` and ``devel`` space of your ``catkin`` workspace, then re-build it.

---
title: pixhawk tools advanced
tags: [drone, getting_started, setup]
keywords: "annotations, comments, feedback"
last_updated: "August 11, 2021"
summary: "rFlyeval project details where Matlab Mathwork Simulink were used for complete process of UAV and UAS."
sidebar: mydoc_sidebar
permalink: rfly_advanced.html
series: "RFLY series"
weight: 2
folder: rfly
---

{% include custom/series_rfly_next.html %}

=============================
1. Installation Method
=============================


1.1 Installation Package Acquisition
---------------------------------------

(1). Send Email to service@rflysim.com to inquiry and buy the desired version, you will obtain an installation package and an activation code.
(2). Use MATLAB to enter the folder of the installation package, and run “OnekeyScript” to input your activation code as shown below.

![](https://rflysim.com/en/_images/A-1.jpg)
    .. figure:: /images/A-1.jpg
        :align: center

        Fig. 4.1 RflySim registration dialog

(3). Then， click the “OK” button, and all tools and apps of RflySim platform will be installed automatically.

![](https://rflysim.com/en/_images/AutoInstall.gif)
    .. figure:: /images/AutoInstall.gif
        :align: center

        Fig. 4.2 One-key installation and configuration


1.2 Product Price List
---------------------------------------

You can read our latest document about the advanced features of RflySim platform: https://flyeval.com/doc/Lesson_13_RflySim_Platform_Advanced_Features.pdf

Please Contact with service@rflysim.com for Price.

=========================================== ============================================================================================
Content                                      PDF
=========================================== ============================================================================================
Lesson 01: Introduction                         :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_01_Introduction.pdf>` 
Lesson 02: Flight Control Experiments           :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_02_Flight_Control_Experiments.pdf>`
Lesson 03: External Control Interface           :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_03_External_Control_Interface.pdf>`
Lesson 04: Other Types of Vehicles              :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_04_Other_Types_of_Vehicles.pdf>`
Lesson 05: UE4 3D Scene Development             :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_05_UE4_3D_Scene_Development.pdf>`
Lesson 06: Vision Based Control                 :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_06_Vision_Based_Control.pdf>`
Lesson 07: UAV Swarm Control                    :download:`[pdf] <http://flyeval.com/doc/RflySim_Lesson_07_UAV_Swarm_Control.pdf>`
=========================================== ============================================================================================


1.3 Effect after Installation
---------------------------------------

You will obtain the following shortcuts on Desktop, where Python38Env is a Python environment for vison/OpenCV development, RflySim3D is our latest UE4-based 3D environment simulation program, HITLRun is an one-key script for hardware-in-the-loop simulation of multiple vehicles, and SITLRun is an one-key script for Software-in-the-loop simulation of multiple vehicles.

![](https://rflysim.com/en/_images/Advanced1.png)
    .. figure:: /images/Advanced1.png
        :align: center

These software tools along with other program installed into the system play important role in accelerate the development efficiency of control systems. Their relationships and using phase are presented in the following figure.

![](https://rflysim.com/en/_images/Advanced2.png)
    .. figure:: /images/Advanced2.png
        :align: center

Among all apps, the CopterSim is the core software for RlfySim platform. The complete UI of CopterSim after registration is mainly divided into five parts. The box (a) of the figure below is the interface for configuring the multicopter model and flight environment parameters, where readers can select propulsion system components to assemble different types of multicopters for subsequent simulations. Box (b) is the model parameter calculation and database management interface, which is mainly used to calculate the model parameters of the assembled multicopter and store the results into the database for subsequent use with convenient database management functions. Box (c) is the advanced function area, including swarm simulation, UE4 scene selection, and other functions, which will be described in detail later. Box (d) is mainly used to connect the Pixhawk autopilot and control the start and stop of the simulation. Box (e) is used to display the real-time message received from the Pixhawk autopilot as well as the position and attitude information of the simulated vehicle model.

![](https://rflysim.com/en/_images/Quan-app1-FigA.2.jpg)
    .. figure:: /images/Quan-app1-FigA.2.jpg
        :align: center

        Fig. 4.3 CopterSim interface after registration


1.4 Custom Multicopter Configuration
---------------------------------------

In the first line of the model configuration interface shown in Fig.4.3a, the configurable 
parameters include basic information such as the total weight, diagonal size,
and flight altitude. In the second to the fifth rows of Fig.4.3a, readers can select the
propulsion system components or parameters for the multicopter components, such
as motors, propellers, ESCs, and batteries. CopterSim offers two options for selecting
propulsion components. As shown in Fig.4.4, the first is to assemble a multicopter
directly from the propulsion system branded model database which covers many
common products on the market.

![](https://rflysim.com/en/_images/Quan-app1-FigA.3.jpg)
    .. figure:: /images/Quan-app1-FigA.3.jpg
        :align: center

        Fig. 4.4 Custom model parameter input interface

Since the propulsion system product database is difficult to cover all of the products in the world, CopterSim also provides a function to customize the component parameters which enables a more flexible way to configure a multicopter model. As shown in Fig.4.4a, click on the “Custom Design” option at the end of the first line to enter the component custom parameter interface shown in Fig.4.4b. In this interface, readers can customize the detailed parameters of motors (KV value, no-load voltage, internal resistance), ESCs, batteries, and propellers. In theory, by using the “Custom Design” function, readers can simulate any propulsion system components, even products that do not exist on the market.

After a multicopter model is configured, clicking on the “Calculate” button in Fig.4.3b will automatically analyze the feasibility of the inputted multicopter configuration. Unpractical multicopter configurations may cause simulation failures, such as insufficient thrust to take off, ESC and motor overheat due to excessive battery voltage, or the propeller size is too large for the fuselage. As shown in Fig.4.5, after checking the inputted multicopter configuration, CopterSim will prompt a warning dialog if the configuration is unpractical, and the reader needs to re-select a practicable multicopter configuration.

![](https://rflysim.com/en/_images/Quan-app1-FigA.4.jpg)
    .. figure:: /images/Quan-app1-FigA.4.jpg
        :align: center

        Fig. 4.5 Model configuration feasibility detection warning dialog

For beginners or readers who are not familiar with multicopter design, it is a difficult task to configure a multicopter that can work. So CopterSim also provides a convenient function to directly select vehicle configurations through a prepared model database. As shown in Fig.4.6, in the drop-down list of the “Model Database” item, the reader can select a usable multicopter configuration (or modify parameters based on it) to quickly obtain the multicopter model for simulations.

![](https://rflysim.com/en/_images/Quan-app1-FigA.5.jpg)
    .. figure:: /images/Quan-app1-FigA.5.jpg
        :align: center

        Fig. 4.6 Multicopter model selection from model database

After configuring a multicopter through the three methods mentioned above, clicking the “Add to Database” button shown in Fig.4.6 will store the new model into the model database for use in the future. Readers can also delete the current model from the database by clicking the “Delete from Database” button shown in Fig.4.6


1.5 Set Initial States
---------------------------------------

As shown in Fig.4.3c, CopterSim provides an interface to modify the multicopter initial position and altitude. As shown in Fig.4.7, readers can enter the “x” and “y” coordinates (unit: m) of the multicopter and the value of the yaw angle (unit: degree), where the x-direction and y-direction point to the front and right of the multicopter, and the yaw angle is positive when rotating to right side.

![](https://rflysim.com/en/_images/Quan-app1-FigA.6.jpg)
    .. figure:: /images/Quan-app1-FigA.6.jpg
        :align: center

        Fig. 4.7 Setting initial simulation position
=============================
2. Basic Features
=============================


2.1 HIL Simulation for One Vehicle
---------------------------------------

You can open CopterSim and RflySm3D successively to start hardware-in-the-loop (HIL) simulation, or simple click the Desktop shortcut “HITLRun” and input the com number of the Pixhawk to start HIL simulation. The introduction of RflySim advanced platform and the method to start HIL simulation for one vehicle are presented in the following video:

![](https://rflysim.com/en/_images/Advanced3.png)

    .. figure:: /images/Advanced3.png
        :align: center
        :target: https://youtu.be/3ytbk63Og5k

        RflySim: How to use hardware-in-the-loop simulation for one vehicle

2.2 HIL Simulation for Multiple Vehicles
---------------------------------------

You can also connect multiple Pixhawks to start HIL simulation for multiple vehicles, the procedure is presented in the following video:

![](https://rflysim.com/en/_images/Advanced4.png)
    .. figure:: /images/Advanced4.png
        :align: center
        :target: https://youtu.be/oZ_-yhEgebA

        RflySim Advance Function: How to use hardware-in-the-loop simulation for UAV swarm

2.3 SIL Simulation for One Vehicle
---------------------------------------

If you don’t have Pixhawk hardware, you can also run PX4 control software on Windows to form a software-in-the-loop simulation system with vehicle model in CopterSim through UDP network. The method to start a PX4&CopterSim SIL simulation for one vehicle is presented in the following video: 

![](https://rflysim.com/en/_images/Advanced5.png)
    .. figure:: /images/Advanced5.png
        :align: center
        :target: https://youtu.be/QxNGOwANy-o

        RflySim Advance Function: How to quickly perform software-in-the-loop simulation for one UAV

2.4 SIL Simulation for Multiple Vehicles
---------------------------------------

You can also start multiple SIL simulation system by the procedure in the following video:

![](https://rflysim.com/en/_images/Advanced6.png)
    .. figure:: /images/Advanced6.png
        :align: center
        :target: https://youtu.be/88dGpErxPJ8

        RflySim Advance Function: How to quickly perform software-in-the-loop (SIL) simulation for UAV swarm

=============================
3. Other Types of Vehicles
=============================


3.1 Other Multicopter Types, e.g. Hexacopter
--------------------------------------------

RflySim also supports to simulate other types of multicopters. You only need to select a desired multicopter configuration in CopterSim, and set Pixhawk to specific multicopter control mode through QGC.

In the following video, we present the procedure to use RflySim to simulate a Hexacopter. 

![](https://rflysim.com/en/_images/Advanced7.png)
    .. figure:: /images/Advanced7.png
        :align: center
        :target: https://youtu.be/bryZXxaJE5M

        RflySim Advance Function: How to simulate other types of multicopters

More detailed setting methods for other types of multicopters are presented below.


3.2 HIL Simulation for Other Types of Multicopters
-------------------------------------------------

In the previous courses, readers need to set up the Pixhawk autopilot through QGC to enter the “HIL Quadcopter X” airframe mode. This mode only supports the quadcopter X configuration, which has strong limitations in practical usage. In addition to quadcopters, CopterSim can be used to all multicopter types supported by the PX4 autopilot software. The specific steps are presented as follows.

(1). Select a multicopter airframe in QGC

  1). Correctly connect the Pixhawk autopilot with the QGC.

  2).Select a required multicopter airframe in the “Airframe” tab (see Fig.4.8), such as hexacopters, octocopters, coaxial multicopters, etc.

  3). Select a corresponding airframe size from the drop-down list of the airframe (e.g., F450, and 3DR DIY Quad).

  4). Confirm that the Pixhawk is in the selected airframe mode applying the airframe and restarting.

Through the above steps, readers can set an airframe type that can be used for
the actual flight with controller parameters matching the airframe size.

![](https://rflysim.com/en/_images/Quan-app1-FigA.12.jpg)
    .. figure:: /images/Quan-app1-FigA.12.jpg
        :align: center

        Fig. 4.8 Choosing a required multicopter airframe in QGC

(2). Set the HIL simulation mode in QGC As shown in Fig.4.9, after the QGC is properly connected to the Pixhawk autopilot, in the “Safety” tab of QGC, set the “HITL Enabled” option to “Enabled” and then re-plug the Pixhawk autopilot. After the above steps, any airframe can be set to enter the HIL simulation mode.

![](https://rflysim.com/en/_images/Quan-app1-FigA.13.jpg)
    .. figure:: /images/Quan-app1-FigA.13.jpg
        :align: center

        Fig. 4.9 Setting �쏦ITL Enabled�� option to �쏣nabled��

(3). Configure multicopter model in CopterSim There are two methods to set the multicopter airframe type in CopterSim. The first method is to select from the “Frame Type” drop-down menu (see Fig.4.10a) on the CopterSim UI; the other method is to open the “Model Parameters” dialog to set the number of arms, the number of rotors, and the head orientation.

![](https://rflysim.com/en/_images/Quan-app1-FigA.14.jpg)
    .. figure:: /images/Quan-app1-FigA.14.jpg
        :align: center

        Fig. 4.10 Setting multicopter airframe in CopterSim


(4). Start HIL simulation Taking a hexacopter as an example, set the Pixhawk airframe type to a general hexacopter in QGC (see Fig.4.8); enable the HIL mode in QGC (see Fig.4.9); then, configure hexacopter parameters in CopterSim, as shown in Fig.4.10b. Next, insert the Pixhawk autopilot into the computer, select the Pixhawk serial port in CopterSim, and click “Start Simulation” button to start the HIL simulation for the hexacopter.


Other Vehicle Types, e.g., Fixed-Wing Aircraft
-------------------------------------------------

RflySim also supports to convert any vehicle model in Simulink to a DLL model file, and imports it to CopterSim to perform HIL simulation. In the following video, we present the procedure to convert the Simulink model of a fixed-wing aircraft to Coptersim for hardware-in-the-loop simulation.

![](https://rflysim.com/en/_images/Advanced8.png)
    .. figure:: /images/Advanced8.png
        :align: center
        :target: https://youtu.be/bryZXxaJE5M

        RflySim Advance Function: How to simulate other types of multicopters

More detailed setting methods for other types of vehicles are presented below.


HIL Simulations of Other Models
-------------------------------------------------

As shown in Fig.4.8, a Pixhawk autopilot supports not only multicopters, but
also fixed-wing aircraft, vertical take-off and landing aircraft, rovers, boats, and
other types of vehicle. To support all vehicle types supported by Pixhawk autopilots,
CopterSim also provides an interface to import the Simulink model as DLL model
files to perform HIL simulations.

(1). Use DLL model files in CopterSim As shown in Fig.4.11a, copy the DLL model file generated by Simulink to the folder “CopterSimexternalmodel”. After re-opening the CopterSim, readers can see all available DLL model files in the “Use DLL Model” drop-down list in Fig.4.11b. These DLL model files can be used to simulate any aircraft or vehicles. Select a DLL model, configure the Pixhawk autopilot to the desired airframe in QGC, and finally start HIL simulation in CopterSim.

![](https://rflysim.com/en/_images/Quan-app1-FigA.15.jpg)
    .. figure:: /images/Quan-app1-FigA.15.jpg
        :align: center

        Fig. 4.11 Select DLL model for simulation

(2). Method to generate DLL model file in Simulink As shown in Fig.4.12, open the Simulink source code folder “MulticopterModel” (obtained with the serial number), and open the desired “.slx” Simulink file (multicopter, aircraft, etc.) in it. Then, modify the model parameters or replace some of the modules in Simulink to meet the simulation model requirements. Next, click the “compile” button in Simulink to generate C/C++ code. Finally, run the “GenarateModelDLLFile” command in MATLAB to generate the DLL model file in “.dll” format and copy it to the folder shown in Fig.4.11.

![](https://rflysim.com/en/_images/Quan-app1-FigA.16.jpg)
    .. figure:: /images/Quan-app1-FigA.16.jpg
        :align: center

        Fig. 4.12 Simulink source code to generate DLL model file

Since Simulink uses modular programming methods, in the provided “.slx” file, it is easy to obtain different vehicle configurations by changing parameters or some modules. For example, the multicopter types presented in Fig.4.12 can be easily applied by modifying the airframe type parameter ModelParam_uavType in the “Init.m” initialization script (see Fig.4.13) to a corresponding value. The default multicopter configuration of the previous experiment was uavType = 3, which is the conventional X-shaped quadcopter. [1] [#f1]_

![](https://rflysim.com/en/_images/Quan-app1-FigA.17.jpg)
    .. figure:: /images/Quan-app1-FigA.17.jpg
        :align: center

        Fig. 4.13 Model corresponding to uavType parameter in Simulink model



.. rubric:: Notes
.. [#f1] These configurations correspond to the multicopter models supported by the PX4 autopilot. Readers can refer to the official website: http://dev.px4.io/master/en/airframes/airframe_reference.html.


==============================
4. Customization of 3D Scenarios
==============================


4.1 Design and Import 3D Scenarios
-------------------------------------------------

RflySim3D also support to design and import your own 3D scenes, the basic principle is listed as follows:

* Create a 3D Scene in 3Ds Max (or imported from AutoCAD, SketchUp by fbx file) -> imported to UE4 -> imported to RlfySim3D
* Procedure: UE4 build and package project to files -> copy the scene folder to RflySim3D content folder -> Copy terrain files to CopterSim

In the following video, the procedure to import a quadcopter 3D model from 3Ds Max is introduced.

![](https://rflysim.com/en/_images/Advanced9.png)
    .. figure:: /images/Advanced9.png
        :align: center
        :target: https://youtu.be/mKUehJwqqsU

        RflySim Advance Function: How to import your own 3D vehicle models to the UE4-based RflySim3D program

The following figures present the built-in high-fidelity 3D scenes in RflySim3D:

![](https://rflysim.com/en/_images/Advanced10.png)
    .. figure:: /images/Advanced10.png
        :align: center

    .. figure:: /images/Advanced11.png
        :align: center

The following video presents how to use Python to send vehicle position&trajectory to RflySim3D’s city night scene to observe the light show effect.

![](https://rflysim.com/en/_images/Advanced12.png)
    .. figure:: /images/Advanced12.png
        :align: center
        :target: https://youtu.be/Chpx1uwFVkU

        RflySim Advance Function: How to use RflySim3D to simulate light show of UAV swarm flying at city night

Design and Import Vehicle 3D Models
-------------------------------------------------

RflySim3D also support to design and import your own 3D vehicle models, the basic principle is listed as follows:

* Support to import all vehicle/target/people/obstacle in UE4, then RflySim3D will detect and import UE4 model file and XML configuration file
* Create a 3D model in 3Ds Max (or imported from AutoCAD, SketchUp by fbx file), then import it to UE4 with writing an XML file, and finally recognized by RlfySim3D

In the following video, we present the procedure to import the 3D model of a quadcopter from 3Ds Max with the XML file from our template.

![](https://rflysim.com/en/_images/Advanced13.png)
    .. figure:: /images/Advanced13.png
        :align: center
        :target: https://youtu.be/mKUehJwqqsU

        RflySim Advance Function: How to import your own 3D vehicle models to the UE4-based RflySim3D program

The figures below present the build-in high-fidelity vehicle/car/people/target 3D models in RflySim3D.

![](https://rflysim.com/en/_images/Advanced14.png)
![](https://rflysim.com/en/_images/Advanced15.png)
![](https://rflysim.com/en/_images/Advanced16.png)

    .. figure:: /images/Advanced14.png
        :align: center

    .. figure:: /images/Advanced15.png
        :align: center

    .. figure:: /images/Advanced16.png
        :align: center

=============================
5. UAV Swarm Control
=============================


5.1 Distributed Simulation Framework
-------------------------------------------------

RflySim adopts totally distributed framework, you can extend to any number of computers, vehicles, observation views, etc. The basic software structure is presented in the figure below.

![](https://rflysim.com/en/_images/Advanced17.png)
    .. figure:: /images/Advanced17.png
        :align: center

The hardware structure is presented in the following figure.

![](https://rflysim.com/en/_images/Quan-app1-FigA.21.jpg)
    .. figure:: /images/Quan-app1-FigA.21.jpg
        :align: center


5.2 Key Problems and Solutions
-------------------------------------------------

| **Problem 1**: it is ineffective to create simulated vehicles&Pixhawks one by one
| **Solution**: One-key script to start and initialize all programs and parameters

| **Problem 2**: How to display all vehicles in the same 3D program
| **Solution**: we use UDP network to broadcast vehicle states, and RflySim3D dynamically create vehicle 3D model when receiving new data. Users can also create other 3D models such as obstacle, people, tracking target, checker board .

| **Problem 3**: The network become congested when vehicle number is too large
| **Solution**: we have multiple communication protocols, simplified message can be applied when vehicle number is large to improve the real-time performance of communication.

| **Problem 4**: It is too costly and inefficient to perform large scale swarm simulation with Pixhawk hardware.
| **Solution**: we provide PX4 SITL simulation mode, under which the PX4 Autopilot software is running in the windows instead of Pixhawk hardware.

| **Problem 5**: How much vehicle can be simulated on one computer?
| **Answer**: the QGroundControl and RflySim3D occupy most of the computing resource, and the CopterSim + PX4 SILT only need few computing resources. For normal high-performance PCs, we can run at least 15 vehicles with CopterSim + PX4 SITL, and at least 30 vehicles with CopterSim + PX4 HITL. The number will increase if the QGroundControl, RflySim3D, and MATLAB are not running on this computer

| **Problem 6**: Simulink will significantly slow down when too much vehicles to be controlled, which may affect the real-time performance
| **Solution**: we provide script to compile Simulink controller to exe file, which can control large-scale UAV swarm simulation system with few computing resource

| **Problem 7**: How to ensure controller can work in real system as in simulation
| **Solution 1**: All vehicle data received by Simulink is the actual data from Pixhawk through Mavlink instead of ideal data from simulator, and the output of Simulink is also Mavlink message to Pixhawk.
| **Solution 2**: Our swarm communication interfaces ensure the Simulink can control actual UAV swarm system when each UAV is connected to the same LAN through WIFI or radio telemetry. User can also generate the Simulink to C/C++ code to developing a swarm ground control system.


5.3 Simulink Control Swarm on One Computer
-------------------------------------------------

![](https://rflysim.com/en/_images/Advanced18.png)
    .. figure:: /images/Advanced18.png
        :align: center
        :target: https://youtu.be/AMZNuAtRp2w

        RflySim Advance Function: How to use Simulink to control UAV swarms in software-in-the-loop (SIL) simulation mode


5.4 Simulink Control Swarm on Multiple Computer
-------------------------------------------------

![](https://rflysim.com/en/_images/Advanced19.png)
    .. figure:: /images/Advanced19.png
        :align: center
        :target: https://youtu.be/fmzYADSQyj0

        RflySim Advance Function: How to quickly perform distributed software-in-the-loop simulation (SIL) for UAV swarm with multiple computer


5.5 Apply Control Algorithm to Real Swarm System
-------------------------------------------------

![](https://rflysim.com/en/_images/Advanced20.png)
    .. figure:: /images/Advanced20.png
        :align: center
        :target: https://youtu.be/sLIatdHL6FY

        RflySim Advance Function: How to quickly apply the UAV swarm control algorithms to real UAV systems for indoor flight tests



=============================
6. UAV Vision/AI Control
=============================


6.1 Key Problems and Solutions
-------------------------------------------------

| **Problem 1**: How to capture images from UE4-based program RflySim3D with high frame rate
| **Solution**: we use Python/C/Simulink to directly read screen images from windows API which is independent from RflySim3D, so our interface will not slow down the efficiency of RflySim3D, and we can read the images with a very high frame rate (within 5ms, more than 200Hz ) outside the RflySim3D 

| **Problem 2**: How to obtain multiple camera views in the same time
| **Solution**: users can open multiple RflySim3D windows to display different views.

| **Problem 3**: How to change the image size, camera position and angle, and select cameras on the desired vehicles.
| **Solution**: users can set these parameters through mouse and keyboard, or send commands through our UDP interface

| **Problem 4**: How to ensure the algorithm can run successfully on real vehicles？
| **Solution**: Our programming language is Python (we will support MATLAB soon) which is cross-platform, and our communication interface is based on Mavlink which can be processed by Pixhawk directly. So the algorithms can run on onboard computer without modification


6.2 Vision-based Control with Monocular Camera
-------------------------------------------------

![](https://rflysim.com/en/_images/Advanced21.png)
    .. figure:: /images/Advanced21.png
        :align: center
        :target: https://youtu.be/PvxEfY7oMq4

        RflySim Advance Function: How to use Python/OpenCV to perform vision-based control of a multicopter UAV

6.3 Vision-based Control with Binocular Camera
-------------------------------------------------

![](https://rflysim.com/en/_images/Advanced22.png)
    .. figure:: /images/Advanced22.png
        :align: center
        :target: https://youtu.be/hm6i6UCQjCI

        RflySim Advance Function: How to perform binocular vision control and apply to real multicopter system


6.4 Apply Vision Algorithm to Real Vehicle System
-------------------------------------------------

We also provide a serial of multicopter vision flight platform to ensure algorithm can be successfully applied to real vehicle systems.

![](https://rflysim.com/en/_images/Advanced23.png)
    .. figure:: /images/Advanced23.png
        :align: center

=============================
7. Future Plan
=============================

RflySim provide a unified solution for development, test and assessment of unmanned control systems, and we have more wonderful features are coming soon:

1. More high-fidelity 3D scenes and vehicle models will be released on our website with control demos for users.

2. More sensors will be supported, e.g., Lidar, depth cameras.

3. Simulink interface for computer vision and machine learning, so users can train their vehicle control algorithms on RflySim

4. More types of vehicle to be supported, e.g., driverless cars, fixed-wing aircraft, VTOL, unmanned boat, etc.

5. Standard modeling module database to quickly develop vehicle model

6. More experimental courses will be released on our website

{% include custom/series_rfly_next.html %}
 {% include links.html %}

---
title: rflysim overview
tags: [books, rflysim]
last_updated: August 30, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "RflySim is an ecosystem or a toolchain mainly for unmanned systems’ control and safety testing following Model-Based Design (MBD). MATLAB/Simulink, supporting the full design phase of MBD, is chosen as the core programming platform for control/vision/swarm algorithms. After successful implementation of Udacity projects, I find Matlab is solution for all as python is supported for top-level vision/swarm control. Besides MATLAB/Simulink and Python, the RflySim ecosystem has many open-source software and tools."
sidebar: mydoc_sidebar
permalink: books_rflyintroduction.html
folder: books
complex_map: true
map_name: rfly
box_number: 1
series: "RFLY series"
weight: 3
---

{% include custom/series_rfly_next.html %}

## What is RflySim
=============================


### About RflySim
---------------------------------------


- RflySim is a rapid development platform based on `Pixhawk <https://pixhawk.org/>`_ /`PX4 <https://px4.io/>`_ and MATLAB/Simulink for UAV education and research. 
- It is the ease of use with **one-key installation** and simulation in **Windows platforms**. 
- This platform follows the **model-based development** idea and adopts the **software-in-the-loop(SIL) simulation** and **hardware-in-the-loop(HIL) simulation** to accelerate development.
- With RflySim and MATLAB/Simulink, low-level controllers (such as attitude control, position control) and high-level applications (such as decision-making, autonomous flight) can be deployed into **Pixhawk/PX4** ecosystem directly **without accessing the C/C++** underlying code.
- Multicopter model parameters can be modified conveniently to adapt to your vehicles to verify control algorithms with SIL and HIL simulations.

.. RflySim allows developers to directly use MATLAB/Simulink to design low-level controllers (such as attitude control, position control) and high-level applications (such as decision-making, autonomous flight), and then deploy them into a multicopter autopilot system with no need to access the C/C++ underlying code.

The development based on RflySim generally includes the following five phases: 
modeling phase, controller design phase, Software-In-the-Loop (SIL) simulation 
test phase, Hardware-In-the-Loop (HIL) simulation test phase, and experimental 
test phase. By using code-generation technology by MATLAB/Simulink, the 
controller can be easily uploaded to hardware automatically for the HIL 
simulation and real test phase. 

So far, RflySim has two types, namely **education-level RflySim** and 
**commercial-level RflySim**, depending on how to perform the HIL simulation.

* The **education-level RflySim** focuses on the ease-to-access, using personal computers to run the model and the serial port for communication with the control board. 
* The **commercial-level RflySim** focuses on reliable performance, using real-time simulator with FPGA to run the models, sensors chips, and high-speed communication interfaces with the control board.


<!-- <div align="center">
      <a href="https://youtu.be/RTkOHJ0NT0k">
     <img 
      src="https://user-images.githubusercontent.com/42961200/131620900-e23bcc1e-6a60-427f-9df3-4689ce218c88.png" 
      alt="Everything Is AWESOME" 
      style="width:100%;">
      </a>
    </div>
     -->
[![rflysim](https://user-images.githubusercontent.com/42961200/131620900-e23bcc1e-6a60-427f-9df3-4689ce218c88.png)](https://youtu.be/RTkOHJ0NT0k)

.. RflySim.mp4

.. .. figure:: /images/px4psp/RflySim.png
..     :align: center
..     :height: 160px
..     :width: 320px
..     :target: https://youtu.be/RTkOHJ0NT0k

![](images/px4psp/0-1.jpg)
.. figure:: /images/0-1.jpg
    :align: center

    Fig. 0.1 Experiment process in RflySim platform

The development based on RflySim generally includes the following five phases: modeling phase, controller design phase, Software-In-the-Loop (SIL) simulation test phase, Hardware-In-the-Loop (HIL) simulation test phase, and experimental test phase. By using code-generation technology by MATLAB/Simulink, the controller can be easily uploaded to hardware automatically for the HIL simulation and real test phase.

So far, RflySim has two types, namely education-level RflySim and commercial-level RflySim, depending on how to perform the HIL simulation.

The education-level RflySim focuses on the ease-to-access, using personal computers to run the model and the serial port for communication with the control board.
The commercial-level RflySim focuses on reliable performance, using real-time simulator with FPGA to run the models, sensors chips, and high-speed communication interfaces with the control board.

![](images/px4psp/0-2.jpg)

=============================
## 2. Getting Started
=============================
First, go to Download and Support for software，then go to Configuration to install them. Thirdly, go to Usage to learn how to use the platform and finish two demo examples. Finally, go to Course to finish all experiments one by one. So far, Advanced Function is not free, only open to paying users.
Features
-------------------------------------

>Advantages of education-level RflySim platform


Compared with other simulators (AirSim, Gazebo, etc.) in the world, our 
education-level RflySim platform has the following advantages:

1). **Ease of Use** . One-key installation and simulation in the Windows platform, which is convenient and easy to use for users to focus on algorithm development and test.

2). **Distributed Structure** . As shown in Fig. 0.2, the structure of RflySim platform is completely distributed. All applications in RflySim platform can run multiple instances in the same computer or multiple computers, and each application can receive other applications�� information through UDP network. The distributed structure is flexible and reliable for large scale UAV swarm simulation tests with vision.

3). **UAV Swarm Simulation** . We provide interfaces to perform HIL/SIL simulations for multiple Pixhawk with computers in the same local area network. Mavlink communications through serial (Radio telemetry) or network (WIFI) to control Pixhawk by Simulink or C++ programs are also supported.

4). **Multiple Vehicle Types** . Compatible to different vehicle models, such as cars, fixed-wing, or VTOL aircraft. Users can build the vehicle models in Simulink with given interfaces and auto-generate DLL model files for the HIL simulation platform; then, the experimental platform can be applied to any other unmanned vehicle systems.

5). **High-fidelity 3D Environment** . We provide source code and instruction to develop 3D environments in Unreal Engine 4 (UE4), so users can quickly develop an indoor or outdoor 3D environment for simulation or vision-based algorithm development.

6). **Vision-based control** . Our 3D environments based on UE4 can send real-time images for other programs (Python/C or C++/Simulink) to process the images and feedback the control signals to HIL/SIL simulation platform to achieve vision-based control.

![](images/px4psp/0-3.jpg)



>Advantages of commercial-level RflySim platform


The commercial-level RflySim platform uses a high-performance real-time 
simulation computer to simulate the vehicle motion and use FPGA to simulate 
and replace all sensor chips on the autopilot (control) system. As shown in 
Fig. 0.3, the goal of commercial-level RflySim platform is to build a unified 
test framework for different types of vehicles and autopilot systems. The 
hardware and software structures of the commercial-level RflySim platform 
are presented in Fig. 0.4 and Fig. 0.5 respectively. Compared with the 
education-level RflySim platform or other simulators in the world, it has the 
following advantages

1). **Extensibility** : Models are developed in Simulink with module form, so by changing the parameters of specific subsystem modules, it is easy to extend to other types of vehicles, such as UAVs (multicopters, fixed-wings, VTOLs), unmanned cars or boats.

2). **Practicability** : plug and test for different autopilot products; only need to know the sensor models used by the autopilot with no requirement to access or modify the source code of control systems, then the platform can perform black-box tests for different autopilot products.

3). **Standardization** : The platform uses a modular/visual programming approach, so the system model standardization can be ensured by using certified standard modules or subsystems. Besides, the whole simulation software is obtained by automatic code generation technique, which ensures the standardization of the development process and minimizes the effect of manual differences and bugs.

4). **Automation** : With the simulation model comprehensive and accurate enough, this platform can simulate normal and failure cases of outdoor flight tests. What's more automatic testing, case traversing, and assessment can be performed to ensure system safety and reliability.

![](images/px4psp/0-4.jpg)


![](images/px4psp/0-5.jpg)


Show Results
----------------------------------------------
![](images/px4psp/PlatGif1.gif)
.. figure:: /images/px4psp/PlatGif1.gif
    :height: 160px
    :width: 320px
    :align: left
  
    Fig. 0.6 SIL simulation

![](images/px4psp/PlatGif2.gif)
.. figure:: /images/px4psp/PlatGif2.gif
    :height: 160px
    :width: 320px
    :align: right
  
    Fig. 0.7 automatic code generation

![](images/px4psp/PlatGif3.gif)
.. figure:: /images/px4psp/PlatGif3.gif
    :height: 160px
    :width: 320px
    :align: left
  
    Fig. 0.8 HIL simulation
    
![](images/px4psp/PlatGif4.gif)
.. figure:: /images/px4psp/PlatGif4.gif
    :height: 160px
    :width: 320px
    :align: right
  
    Fig. 0.9 Flight experiment

![](images/px4psp/PX4SITLSim.gif)
.. figure:: /images/PX4SITLSim.gif
    :height: 160px
    :width: 320px
    :align: left
  
    Fig. 0.10 One-key cluster SIL simulation

![](images/px4psp/AutoInstall.gif)
.. figure:: /images/px4psp/AutoInstall.gif
    :height: 160px
    :width: 320px
    :align: right
  
    Fig. 0.11 One-key installation and simulation

![](images/px4psp/AdvancedGIF1.gif)
.. figure:: /images/px4psp/AdvancedGIF1.gif
    :height: 160px
    :width: 320px
    :align: left
  
    Fig. 0.12 Indoor HIL simulation based on UE4

![](images/px4psp/AdvancedGIF2.gif)
.. figure:: /images/px4psp/AdvancedGIF2.gif
    :height: 160px
    :width: 320px
    :align: right
  
    Fig. 0.13 HIL simulation for unmanned cars

![](images/px4psp/AdvancedGIF3.gif)
.. figure:: /images/px4psp/AdvancedGIF3.gif
    :height: 160px
    :width: 320px
    :align: left
  
    Fig. 0.14 Cluster control and HIL simulation

![](images/px4psp/AdvancedGIF4.gif)
.. figure:: /images/px4psp/AdvancedGIF4.gif
    :height: 160px
    :width: 320px
    :align: right

    Fig. 0.15 One-key cross rings control

![](images/px4psp/AdvancedGIF9.gif)
.. figure:: /images/px4psp/AdvancedGIF9.gif
    :height: 160px
    :width: 320px
    :align: left
  
    Fig. 0.16 HIL simulation of motor failure


![](images/px4psp/AdvancedGIF10.gif)
.. figure:: /images/px4psp/AdvancedGIF10.gif
    :height: 160px
    :width: 320px
    :align: right
  
    Fig. 0.17 Indoor cluster flight experiment
    

### Getting Started
=============================
## 2 Getting Started
=============================

First, go to Download and Support for software，then go to Configuration to install them. Thirdly, go to [Usage](https://rflysim.com/en/3_Using/Introduction.html) to learn how to use the platform and finish two demo [examples](https://rflysim.com/en/3_Using/Examples.html). Finally, go to Course to finish all experiments one by one. So far, Advanced Function is not free, only open to paying users.



{% include custom/series_rfly_next.html %}

---
title: pixhawk tools
tags: [drone, getting_started, setup]
keywords: "annotations, comments, feedback"
last_updated: "August 10, 2021"
summary: "rFlyeval project details where Matlab Mathwor Simulink were used for complete process of UAV and UAS."
sidebar: mydoc_sidebar
permalink: rfly_starthere.html
series: "RFLY series"
weight: 1
folder: rfly
youtubeID: jBLaP-XwGE8
youtubeID2: IXglpmzFfBA
driveID: 1v8L4SaELogEU0gRyGa2b5X-WWs9NE4Ly
---

{% include custom/series_rfly_next.html %}

## 1. pixhawk4

|---
| Type  | Details | Type  | Details 
| :---: | ---  | :---: | ---  
| frame |  | FC |  
| motor |  | ESC |  
| RC  |  | mode |  
| weight |  | class |  
| battery |  | air-time |  
| configurator |  |  last updated |   
|---
|===
|


[video](images/rflysim/rflysim_1-2.mp4)

## lessons

### Course design
#### basic experiment
- open the given code example. Then, read and run its source code directly to observe and record the results.
#### analysis experiment
- Modify the given code example. Then, run the modified example program to collect and analyze the data
  
#### Design experiment
Based on the previous two experiments, complete the given design task independently
### lesson videos

{% include youtubePlayer.html id=page.youtubeID %}

|--
| pdf | outline | summary
| | :- | :-
| [lesson1](https://github.com/aiegoo/documentation/blob/edit/pdf/gcs/rfly_code/Lesson_01_Introduction.pdf) | rflysim, coptersim and unreal plugins  | course design
| [lesson2](https://github.com/aiegoo/documentation/blob/edit/pdf/gcs/rfly_code/Lesson_02_Experimental_Platform_Configuration.pdf) | sw install / hw configuration | platform config.

{% include googleDrivePlayer.html id=page.driveID %}

|--
| pdf | outline | summary
| | :- | :-
| [lesson3](https://github.com/aiegoo/documentation/blob/edit/pdf/gcs/rfly_code/Lesson_03_Experimental_Platform_Usage.pdf) | ex pf, controller design/sim platform, psp toolbox, hardware system, HIL  | Plaform usage
| [lesson4](https://github.com/aiegoo/documentation/blob/edit/pdf/gcs/rfly_code/Lesson_04_Experimental_Process.pdf) | ex process, LED control, Atti control | ex process.

{% include youtubePlayer.html id=page.youtubeID2 %}

### Project Goal

|---
|    |
| -- |
| Q1. Given a payload and flight endurace requriements, how to design a multicopter propulsion system? |
| Q2. Given a Pixhawk autopilot, how to calibrate its accelerometer and magnetometer and how to design the filter to estimate the state? |
| Q3. Based on the designed multicopter propulsion system and airframe configuration, how to establish a multicopter dynamical model? |
| Q4. Based on the dynamical model established, how to design a motor controller, a control allocator and an attitude controller? |
| Q5. Based on the designed attitude controller, how to desgin a set-position controller? |
| Q6. Based on the designed attitude controller and set-position controller, how to design a semi-autonomous controller? |
| Q7. Based on the simi-autonomous controller, how to desgin a fail-safe logic for the desgined multicopter? |
| Q8, Given a new algorithm, how to realize it by the model-based design? |
| Q9. How new functions are developed based on the platform, such as health evaluation or vision-based autonomous flight? |
| Q10, Given a group of engineers, how to organize them effectively? |
|===
|

### 🍃 pixhawk development tools
- [flightGear](http://www.flightgear.org/download)
- [FG_manual](https://github.com/aiegoo/documentation/edit/blob/pdf/gcs/rfly_code/getstart.pdf#page=59)
### 🌻 [pptx](https://github.com/aiegoo/documentation/tree/edit/pdf/gcs/rfly_code/sourcecode/)
### companion books
[multicopter_introduciton](pdf/gcs/rfly_code/multicopter_introduciton.pdf)

[multicopter_practice](pdf/gcs/rfly_code/multicopter_practice.pdf)

### Matlab + other tool boxes

-Simulink toolboxes required to install

```diff
The required MATLAB toolboxes include the following.

• MATLAB/Simulink

• Control System Toolbox

• Curve Fitting Toolbox

• Aerospace Blockset

• Aerospace Toolbox

• MATLAB Coder

• Simulink Coder

• Stateflow

• Matlab compiler

• mingw.mlpkginstall (at install or later via matlab account or through cmd?
```

[installOptions](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:51951ade-9657-4280-a79a-6c2bbd26d231#page=18)
> this will get about 900 links downloaded for building. Patience required.

🔨 log file [log_gist](https://gist.github.com/aiegoo/7415df308161ff861ac087c2e3bffcdf)

```diff
Warning: Your Windows Path variable contains the following folders that may cause Simulink failed to generate code in some cases.
C:\ProgramData\Anaconda3\Library\usr\bin\
C:\ProgramData\Anaconda3\Library\bin\
C:\Program Files\Git\usr\bin\

UserOldPath =

    'C:\ProgramData\Anaconda3;C:\ProgramData\Anaconda3\Library\mingw-w64\bin;C:\ProgramData\Anaconda3\Library\usr\bin;C:\ProgramData\Anaconda3\Library\bin;C:\ProgramData\Anaconda3\Scripts;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Python38\Scripts\;C:\Python38\;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\libnvvp;C:\Python37\Scripts\;C:\Python37\;C:\Program Files\Python37\Scripts\;C:\Program Files\Python37\;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\iCLS\;C:\Program Files\Intel\Intel(R) Management Engine Components\iCLS\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files (x86)\Brackets\command;C:\Program Files (x86)\PuTTY\;C:\Program Files (x86)\ePapyrus\Papyrus-PlugIn-web;C:\Program Files (x86)\ePapyrus\Papyrus-PlugIn-web\Addins;C:\Program Files (x86)\Yarn\bin\;C:\Program Files (x86)\Intel\Intel(R) Management;C:\Users\Owner\AppData\Local\hyper\app-3.0.2\resources\bin;C:\Program Files (x86)\GitHub CLI\;C:\Users\Owner\AppData\Local\Programs\Microsoft VS Code\bin'


SystemOldPath =

    'C:\Ruby30-x64\bin;C:\ProgramData\Anaconda3;C:\ProgramData\Anaconda3\Library\mingw-w64\bin;C:\ProgramData\Anaconda3\Library\usr\bin;C:\ProgramData\Anaconda3\Library\bin;C:\ProgramData\Anaconda3\Scripts;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Python38\Scripts\;C:\Python38\;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\libnvvp;C:\Python37\Scripts\;C:\Python37\;C:\Program Files\Python37\Scripts\;C:\Program Files\Python37\;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\iCLS\;C:\Program Files\Intel\Intel(R) Management Engine Components\iCLS\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files (x86)\Brackets\command;C:\Program Files (x86)\PuTTY\;C:\Program Files (x86)\ePapyrus\Papyrus-PlugIn-web;C:\Program Files (x86)\ePapyrus\Papyrus-PlugIn-web\Addins;C:\Program Files (x86)\Yarn\bin\;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\WiFi\bin\;C:\Program Files\Common Files\Intel\WirelessCommon\;C:\Users\Owner\AppData\Roaming\nvm;C:\Program Files\nodejs;C:\Program Files\Git LFS;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;c:\Work\전자기록뷰어;c:\Wo;k\전자기록뷰어\Pdf;c:\Wo;k\전자기록뷰어\Pdf\Addins;C:\Pr;gram Files\Docker\Docker\resources\bin;C:\Program Files (x86)\Google\Cloud SDK\google-cloud-sdk\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;%SYSTEMROOT%\System32\OpenSSH\;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;%C:\Program Files\Java\jdk1.8.0_261;C:\Program Files\MySQL\MySQL Server 8.0\bin;C:\Program Files\dotnet\;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files\Docker\Docker\resources\bin;C:\ProgramData\DockerDesktop\version-bin;C:\Program Files (x86)\dotnet\;C:\Program Files\Git\cmd;C:\Program Files\Git\mingw64\bin;C:\Program Files\Git\usr\bin'


SystemNewPath =

    'C:\Ruby30-x64\bin;C:\ProgramData\Anaconda3;C:\ProgramData\Anaconda3\Library\mingw-w64\bin;C:\ProgramData\Anaconda3\Scripts;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Python38\Scripts\;C:\Python38\;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\libnvvp;C:\Python37\Scripts\;C:\Python37\;C:\Program Files\Python37\Scripts\;C:\Program Files\Python37\;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\iCLS\;C:\Program Files\Intel\Intel(R) Management Engine Components\iCLS\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files (x86)\Brackets\command;C:\Program Files (x86)\PuTTY\;C:\Program Files (x86)\ePapyrus\Papyrus-PlugIn-web;C:\Program Files (x86)\ePapyrus\Papyrus-PlugIn-web\Addins;C:\Program Files (x86)\Yarn\bin\;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\WiFi\bin\;C:\Program Files\Common Files\Intel\WirelessCommon\;C:\Users\Owner\AppData\Roaming\nvm;C:\Program Files\nodejs;C:\Program Files\Git LFS;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;c:\Work\전자기록뷰어;c:\Wo;k\전자기록뷰어\Pdf;c:\Wo;k\전자기록뷰어\Pdf\Addins;C:\Pr;gram Files\Docker\Docker\resources\bin;C:\Program Files (x86)\Google\Cloud SDK\google-cloud-sdk\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;%SYSTEMROOT%\System32\OpenSSH\;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;%C:\Program Files\Java\jdk1.8.0_261;C:\Program Files\MySQL\MySQL Server 8.0\bin;C:\Program Files\dotnet\;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files\Docker\Docker\resources\bin;C:\ProgramData\DockerDesktop\version-bin;C:\Program Files (x86)\dotnet\;C:\Program Files\Git\cmd;C:\Program Files\Git\mingw64\bin;'
```

#### firmware version

■  Win10WSL based on the Windows Subsystem for Linux (WSL); <br>
■  (b) Msys2Toolchain based on toolchain; <br>
■  (c) CygwinToolchain based on the toolchain.

|--
| Knockoff | px4 LED | px1
| :--: | :--: | :--:
|![image](https://user-images.githubusercontent.com/42961200/131242984-6ee29299-d4dc-4763-ad43-685c5d37fc8c.png) | ![image](https://user-images.githubusercontent.com/42961200/131243002-cc641ba1-dde0-4ab0-a4a4-9c1c0475eed5.png) | ![image](https://user-images.githubusercontent.com/42961200/131242536-8bc451b2-1ad1-45b6-bbe9-2257fda344be.png) 
|---
|Above images are difference between popular and knockoff pixhawks. Don't buy knockoffs, it will be dangerous
|
|===
| Mine needs to set the magnetic compass calibration

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| ![image](https://user-images.githubusercontent.com/42961200/131267683-a84b51b5-8307-46ba-bb64-53069657b436.png) | ![image](https://user-images.githubusercontent.com/42961200/131267913-5a739b52-e028-4afb-b61f-1a8ee0bc1bc0.png) | ![image](https://user-images.githubusercontent.com/42961200/131268028-0e03434e-030b-40c4-b482-c537a9b200f6.png) | fourth cell
| ![image](https://user-images.githubusercontent.com/42961200/131267775-405262b9-e55a-4488-b3d3-0a0702da88c6.png) |![image](https://user-images.githubusercontent.com/42961200/131267927-6b981dd1-ee30-439b-879b-8eccd519b237.png) | **strong** | baz
| ![image](https://user-images.githubusercontent.com/42961200/131267804-3ef78db1-fff3-4355-b706-693b57046031.png) |![image](https://user-images.githubusercontent.com/42961200/131267969-0a38bed1-fdbf-4220-8df1-781c7f5c8c1a.png) | baz | bar
| ![image](https://user-images.githubusercontent.com/42961200/131267822-f504f24a-06f9-4f07-bfaf-5b5a1f1a960c.png) | ![image](https://user-images.githubusercontent.com/42961200/131267997-a37f1c47-465a-4c15-8e64-e5f6d93adef9.png) |  | 
|---
| Second body
| 2 line
|===
| Footer row

#### (1)PixhawkSupportPackage(PSP)Toolbox
It  is  a  Simulink  toolbox  officially  released  by Mathworks for controller design, code generation, and  firmware  upload  of  the  Pixhawk  autopilot. We  have  made  some  updates  and optimizations based   on   the   official   PSP  toolbox   to   ensure compatibility    with    the latest    Pixhawk    and MATLAB versions

#### (2) FlightGear — Flight Simulator
It is a popular open-source flight simulator that can be used  to  easily  observe  the  flight  states  of  a  simulated aerial vehicle in Simulink by receiving flight data from Simulink   via  a   User   Datagram   Protocol   (UDP) interface.
	 
![flightgear](images/px4psp/flightgear.png)

#### (3) PX4 Software — Source Code
PX4  is  an  open-source  flight  control  software  system that   runs   on   the   Pixhawk hardware   platform.   The Pixhawk   hardware   +   PX4   software   constitutes   an integrated autopilot  system,  which  is  one  of  the  most widely-used autopilot systems for aerial vehicles.
'

#### (4) PX4 Toolchain — Compiling Environment
It is used to compile the PX4 source code along with the controller algorithms generated by the PSP
toolbox into a “.px4”  format  firmware  file.  Then,  the  firmware  file  is uploaded and burnt into the Pixhawk autopilot hardware (similar to the process of reinstalling an operating system on  a  PC).  The  control  algorithm  generated  by  the  PSP toolbox will automatically run after Pixhawk restarts.

#### (5)    Eclipse    C/C++
It  is  used  to  read  and  modify  the  PX4  source  code. Eclipse  C/C++  is  a  compact  C/C++ 
IDE  with  functions similar to those of Microsoft Visual Studio.

#### (6) QGroundControl (QGC) — Ground Control Station
It  is  used  to  perform  the  pre-flight  tasks  (e.g.,  sensor calibration and parameter tuning) for the Pixhawk autopilot before the multicopter takes off. The QGC is also used to receive the light states and send the control commands of the  multicopter  through  wireless  radio  telemetry  during flight tests.

🔨 `I have a mag calibration issue especially with nose-down and belly-up position` Check this discusstion thread on the same issue [px4-autopilot](https://github.com/PX4/PX4-Autopilot/issues/17546)

#### (7) CopterSim—Real-Time Motion Simulation
It is a real-time motion simulation software developed for the Pixhawk/PX4 autopilot system. Readers can configure multicopter  models  in  CopterSim,  and  connect  it  to  the Pixhawk autopilot via the USB serial port to achieve indoor HIL simulations.

#### (8) 3DDisplay — 3D Visual Display Software
It  is  a  real-time  3D  visual  display  software.  It receives the flight data of CopterSim through UDP to display the attitude and position of a multicopter in  real-time.  CopterSim  and  3DDisplay  together constitute  an  integrated  HIL  simulation  platform. The distributed independent operation mechanism of   CopterSim   and   3DDisplay   provides   future compatibility for swarm simulations.

#### (9) Pixhawk Support Package (PSP) Toolbox3 :
 it is a Simulink toolbox officially released by Mathworks for controller design, code generation, and firmware upload of the Pixhawk autopilot. We have made some updates and optimizations based on the official PSP toolbox to ensure compatibility with the latest Pixhawk and MATLAB versions.


## Lesson 3
### Brief Introduction to Experimental Platforms

### - Platform Composition
------------------------

|---
| | |[multicopter_introduciton](pdf/gcs/rfly_code/multicopter_introduciton.pdf) |[multicopter_practice](pdf/gcs/rfly_code/multicopter_practice.pdf) |
| | | | |
| ![image](https://user-images.githubusercontent.com/42961200/135004940-4bb5d314-f19f-4ae8-9ae2-5f9245a85e8d.png) | ![image](https://user-images.githubusercontent.com/42961200/135004920-492e1e9a-1980-47c8-a153-358b7d7a004d.png) | ![image](https://user-images.githubusercontent.com/42961200/135004889-63862ef6-81db-492f-904c-e23c90b9401b.png) |![image](https://user-images.githubusercontent.com/42961200/135004854-0cd076eb-43b6-40e9-bba9-fcc608ed8df8.png) | ![image](https://user-images.githubusercontent.com/42961200/135004818-23e168ab-d965-4f64-97b2-64fd7c32ccb3.png)


The experimental platform is a rapid development platform for multicopter control
algorithm design based on MATLAB/Simulink and Pixhawk. It is mainly composed
of the following five parts: the Simulink-based Controller Design and Simulation
Platform, the HIL Simulation Platform, the `Pixhawk Autopilot System <https://docs.px4.io/master/en/flight_controller/pixhawk_series.html>`_ , [pixhawk_series.md]({{site.baseurl}}pixhawk_series.html)
the Multicopter Hardware System, and the Instructional Package.

(1). Simulink-based Controller Design and Simulation Platform

As shown in Fig. 3.1, this platform has a high-fidelity nonlinear model for simulating 
various multicopter dynamics. Furthermore, there is an interface for communicating 
with the FlightGear simulator to provide a real-time 3D display for
the flight status (e.g., trajectory and attitude) of the simulated multicopter. 
Multicopter control algorithms can be conveniently designed on this Simulink-based
simulation platform and then verified with SIL simulations. Furthermore, the
Pixhawk Support Package (PSP) toolbox can be used to generate C/C++ code
of the control algorithms, which is then compiled and uploaded to a Pixhawk
autopilot.

![](https://rflysim.com/docs/en/images/Quan-ch3-Fig3.1.jpg)

    .. figure:: /images/Quan-ch3-Fig3.1.jpg
        :align: center

        Fig. 3.1 Simulink-based controller design and simulation platform

(2). HIL Simulation Platform

![image](https://user-images.githubusercontent.com/42961200/135005022-6f429c8e-f61f-4b79-8e97-e5e766348da7.png)

The HIL simulation platform includes a real-time motion simulation software—CopterSim (see Fig. 3.2a) and a 3D visual display software—3DDisplay (see Fig. 3.2b). The simulation model of CopterSim is obtained by importing parameters from the Simulink-based simulation platform mentioned earlier. Both CopterSim and 3DDisplay must run on a computer with Windows OS (Win7 or higher, x64). They are connected with the Pixhawk autopilot through a USB cable, thereby establishing a closed-loop control system for HIL simulations.


![](https://rflysim.com/docs/en/images/Quan-ch3-Fig3.2.jpg)

    .. figure:: /images/Quan-ch3-Fig3.2.jpg
        :align: center

        Fig. 3.2 HIL simulation platform

(3). Pixhawk Autopilot System

Figure 3.3 illustrates the entire Pixhawk autopilot system that includes a
Pixhawk autopilot, an RC transmitter, an RC receiver, and a Ground Control
Station (GCS). The Pixhawk autopilot used in this book is composed of 
Pixhawk 1 (2MB flash version) [#f2]_ autopilot hardware and PX4 autopilot software.
The PX4 autopilot software [#f3]_ has a built-in Real-Time Operating System (RTOS)
to ensure basic functions, such as multi-thread scheduling, low-level drivers, and
algorithm execution. The Pixhawk autopilot uses an RC receiver to wirelessly
connect with the corresponding RC transmitter for receiving the control commands 
from the remote pilot on the ground. Further, the Pixhawk autopilot can
also wirelessly connect with GCS through a pair of radio telemetry to exchange
flight data and mission commands.


![image](https://user-images.githubusercontent.com/42961200/126034081-5bfe5ebe-d879-462d-bafb-8d0868ac3ac7.png)

    .. figure:: /images/Quan-ch3-Fig3.3.jpg
        :align: center

        Fig. 3.3 Pixhawk autopilot system

(4). Multicopter Hardware System

As shown in Fig. 3.4, a multicopter hardware system is usually composed of
an airframe system, a propulsion system, external sensors, a test stand, etc.
Combining the Pixhawk autopilot and a multicopter hardware system requires
an integrated multicopter flight platform that can be used to perform specific
flight tasks. According to the actual flight performance requirements, the 
multicopter airframe system can be designed with different configurations, such as
quadcopters, hexacopters, and coaxial octocopters. In this book, a small quadcopter 
is chosen as an example to study its hardware system design, such as
airframe design, propulsion system selection. Then, the control algorithms are
designed for the resulting multicopter hardware system.

![](https://rflysim.com/docs/en/images/Quan-ch3-Fig3.4.jpg)


    .. figure:: /images/Quan-ch3-Fig3.4.jpg
        :align: center

        Fig. 3.4 Multicopter hardware system

(5). Instructional Package

This book encompasses video tutorials, PowerPoint files, and source code examples. 
The topic is closely related to our previous book [#f8]_.

### - Platform Advantage
----------------------

This experimental platform provides interfaces for multicopter controller design in
MATLAB/Simulink. Readers (beginners, students, or engineers) can develop a rapid
design and verify the control algorithms by SIL simulation. After the control 
algorithms are well designed and verified, the platform also provides a code generation
function to generate Simulink controllers to C/C++ code. Then, the code can be 
compiled into the autopilot software firmware file; finally, it is automatically uploaded
to the Pixhawk hardware. The platform also provides a HIL simulation platform
for preliminary simulation tests on a Pixhawk autopilot system that may help in
eliminating potential problems that may exist in flight tests. After all the tests are
completed, indoor and outdoor flight tests can be carried out by assembling the Pixhawk 
autopilot onto a real multicopter hardware system. The performance of the
designed controllers can be evaluated through experimental tests.

.. rubric:: References
.. [#f2] corresponding to the circuit diagram version Pixhawk 2.4.6; for more details, please visit this website: https://docs.px4.io/master/en/flight_controller/pixhawk.html.
.. [#f3] In addition to supporting the PX4 autopilot software used in this book, the Pixhawk series autopilots also support Ardupilot open-source autopilot software; see: http://ardupilot.org/dev/index.html.
.. [#f8] Publishing House of Electronics Industry 2020 Q. Quan et al., Multicopter Design and Control Practice, https://doi.org/10.1007/978-981-15-3138-5_3



<hr>

## 2. Simulink-Based Controller Design/Simulation
To improve the design efficiency of multicopter controllers, as shown in Fig. 3.5, this book provides a high-fidelity simulation environment based on Simulink/FlightGear. The main source code file is presented in “e01.SoftwareSimExps CopterSim3DEnvironment.slx”.

![image](https://user-images.githubusercontent.com/42961200/126034282-e9ca908c-7792-441b-afee-5f388215ad7d.png)


../_images/Quan-ch3-Fig3.5.jpg
Fig. 3.5 Files in “SoftwareSimExps” folder

The following steps describe the correct way to open Simulink files (those with the file suffix “.slx”).

(1). Open MATLAB via the Windows desktop shortcut or the Windows start menu. (2). As shown in Fig. 3.6, click the “Browse Folder” button in the MATLAB User Interface (UI) to set the current directory to the folder of the “.slx” file to be opened.

![image](https://user-images.githubusercontent.com/42961200/126034306-c3a10305-f15d-433f-8c21-e7000cfd82c6.png)


../_images/Quan-ch3-Fig3.6.jpg
Fig. 3.6 Method to correctly open a Simulink slx file

(3). Double-click the “.slx” file in the “Current Folder” window (the lower-left side in Fig. 3.6) to open it.

All “.slx” files should be opened in this way to ensure that the working directory is correct and that the initialization scripts are successfully loaded.

![image](https://user-images.githubusercontent.com/42961200/126034308-0429575c-2c71-4933-aea9-d635bfc80f67.png)


../_images/Quan-ch3-Fig3.7.jpg
Fig. 3.7 Simulink SIL simulation example

Open the “CopterSim3DEnvironment.slx” file according to the above procedure; then, a SIL simulation example will appear as shown in Fig. 3.7. The SIL simulation example contains three subsystems: the “Controller” subsystem, the “Multicopter Model” subsystem, and the “FlightGear Interface” subsystem. Their key features are summarized below.

(1). The input, output, and feedback signals of the “Controller” subsystem are consistent with the available signals in a real autopilot system. For example, the input signals of the controller in Fig. 3.7 are the control commands for pitch, roll, yaw, and altitude control from a simulated RC transmitter, and the output signals are the motor PWM signals for a multicopter model.

(2). The controller uses the sensor estimated states (e.g., attitude, angular velocity, position, velocity, and other state information) to achieve stable attitude control.

(3). The input and output signals of the “MulticopterModel” subsystem are consistent with those of a real multicopter. For example, the input signals of the “Multicopter Model” subsystem are the PWM control signals of eight motors (the multicopter model will choose the actual number of motors according to the selected model) defined by the Pixhawk autopilot (the data range is 1000–2000 corresponding to a throttle command of 0–1), and the output signals are the data from various sensors.

(4). “FlightGear Interface” subsystem provides a communication interface to send the flight data to FlightGear, where the real-time vehicle attitude and flight trajectory can be observed in a realistic 3D scene.

### 2.1. Controller
Double-click the “Controller” subsystem in Fig. 3.7 yields the internal structure of the controller, as presented in Fig. 3.8. This example shows a simple attitude controller for pitch and roll angles. The controller receives the control signals from the RC transmitter and controls the multicopter to achieve the desired pitch and roll angles.

As shown in Fig. 3.8, the 1st–5th input ports are five input channels from the RC transmitter (“ch1”–“ch5”); the 6th–8th input ports are the angular velocity (“p”, “q”, “r”) from the gyroscope sensor; the 9th–10th input ports are the roll angle and pitch angles (“phi”, “theta”) estimated from the inertial sensor. As shown in Fig. 3.8, the computing process of the entire “Controller” subsystem is roughly divided into five steps.

![image](https://user-images.githubusercontent.com/42961200/126034319-a160b15b-fcc1-4586-bfc1-df62371d2783.png)

../_images/Quan-ch3-Fig3.8.jpg
Fig. 3.8 Internal structure of “Controller” subsystem

(1). The “Input Interfaces” module receives the RC transmitter signals and the multicopter state estimation signals. [1]

(2). The “RC Signal Process” module maps the five-channel signals of the RC transmitter to the desired roll and pitch angle values.

(3). The “Attitude Controller” module computes the desired force and torque values to control the multicopter to the desired attitude.

(4). The “Motor Control Signal Computation” module maps the force and torque values to the control signals (ranging from 1000 to 2000) for the four motors.

(5). The “Output Interfaces” module fills the remaining 4-dimensional control signals and generates an 8-dimensional PWM signal (there are eight PWM output ports on Pixhawk) ranging from 1000 to 2000µs. [2]

### 2.2. Multicopter Model
Double-click the “Multicopter Model” subsystem in Fig. 3.7, and the internal structure of the multicopter model is presented in Fig. 3.9. The multicopter model simulates a real multicopter system to output the flight state and sensor signals based on the motor PWM controls from the control system.

![image](https://user-images.githubusercontent.com/42961200/126034338-c744a55b-3fe7-4f86-ae93-f7694bc20e60.png)

../_images/Quan-ch3-Fig3.9.jpg
Fig. 3.9 Internal structure of “Multicopter Model” subsystem

As shown in Fig. 3.9, the “Multicopter Model” subsystem contains the following seven main modules.

(1). “Motor Model” module: it simulates the motor dynamics.

(2). “Force and Moment Model” module: it simulates all external forces and moments acting on the body, such as the propeller thrust, fuselage aerodynamics, gravity, and ground supporting force.

(3). “Rigid Body Kinematics Model” module: it calculates the vehicle kinematics of the multicopter, such as speed, position, and attitude.

(4). “Environmental Model” module: it calculates the environmental data, such as gravitational acceleration, air density, wind disturbances, and geomagnetic field.

(5). “Fault Model” module: it is mainly used to inject model uncertainties (related to mass and moment of inertia) as well as faults.

(6). “Battery Model” module: it simulates the discharge process of the battery.

(7). “Output Interface Model” module: it packs the output signals in the desired format.

The controller parameters are stored in an initialization script “e01.Software SimExpsInit_control.m”. This script will be automatically called to import all parameters into the Simulink workspace when the simulation starts. Figure 3.10 depicts how to proceed to autorun the initialization script. Readers can open the UI in Fig. 3.10 by clicking “File”—“Model Properties”—“Callbacks”—“InitFcn” in the Simulink menu within the “CopterSim3DEnvironment.slx” project. The source code of the “Init_control.m” initialization script is listed in Table 3.1.

![image](https://user-images.githubusercontent.com/42961200/126034353-82315d15-0090-439e-b2fd-dc752b2fd7b7.png)

../_images/Quan-ch3-Fig3.10.jpg
Fig. 3.10 Initialization interface for the “Init_control.m” script

All the parameters required by the “Multicopter Model” are stored in the script “e01.SoftwareSimExpsiconInit.m”. This script will be automatically called when the second line (see Table 3.1) of the “Init_control.m” script is executed. The key model parameters are listed in Tables 3.2, 3.3, 3.4, 3.5, and 3.6. By modifying the above model parameters, multicopters with different sizes and configurations (see Table 3.5) can be obtained, and flight simulations under different environments (see Table 3.6) can be performed.

### 2.3. FlightGear Interface [pdf](https://github.com/aiegoo/documentation/tree/edit/pdf/gcs/rfly_code/Lesson_03_Experimental_Platform_Usage.pdf#page=11)
As shown in Fig. 3.7, the “FlightGear Interface” subsystem has three input ports representing the multicopter position, Euler angles, and motor PWM signals, respectively. This subsystem sends multicopter flight state information to FlightGear to observe the flight attitude and trajectory of the multicopter in a 3D scene. The steps to follow are described next.

(1). Double-click the FlightGear-F450 shortcut on the desktop to open FlightGear;

(2). Click the “Run” button on the Simulink toolbar (see Fig. 3.11) to run the “CopterSim3DEnvironment.slx” file;

![image](https://user-images.githubusercontent.com/42961200/126034368-1561e59d-3a9f-4079-9c7a-c8806e7a8997.png)


../_images/Quan-ch3-Fig3.11.jpg
Fig. 3.11 Simulink “Run” button for different MATLAB versions

(3). Then, as shown in Fig. 3.12, the multicopter takes off vertically from the ground and starts flying forward at a certain pitch angle after 5 s.

![](https://rflysim.com/docs/en/images/Quan-ch3-Fig3.12.jpg)

<hr>

## 3. PSP Toolbox

![](https://rflysim.com/docs/en/images/Quan-ch3-Fig3.13.jpg)
../_images/Quan-ch3-Fig3.13.jpg
Fig. 3.13 Relationship between Simulink and Pixhawk autopilot code generation

Figure 3.13 shows the relationship among the PSP toolbox, the PX4 software, and the Pixhawk hardware. The main features of the toolbox are summarized below.

(1). The toolbox can simulate and test different multicopter models and flight control algorithms in Simulink and then automatically deploy the algorithms to the Pixhawk autopilot.

(2). The toolbox provides many practical examples, including LED control, RC data process, and attitude controller.

(3). The toolbox provides many interface modules to access the Pixhawk hardware and software components.

(4). It automatically records flight data from sensors, actuators, and controllers deployed by themselves.

(5). It can subscribe and publish uORB topic messages. All messages in the PX4 autopilot software are temporarily stored in a uORB message pool. The subscription function can read topics of interest from the message pool, and the publishing function can publish specific topics to the message pool for other modules.

The relationship between the code generated by Simulink and the Pixhawk autopilot system is summarized below.

{% include note.html content="Upload the obtained firmware file to the Pixhawk hardware; then, the Pixhawk autopilot can execute the PX4 software with the generated algorithm code. The native modules in the PX4 software may assess the same hardware outputs as the generated “px4_simulink_app” module, which may cause read and write conflicts. Therefore, in the one-key installation script, the hardware output accessing codes of the PX4 native modules have been blocked in the last option shown in Fig. 2.4. This will ensure that only the “px4_simulink_app” module can send motor control signals." %}

(1). The structure of a Pixhawk autopilot system includes two parts, namely the Pixhawk hardware (similar to the computer hardware) and the PX4 software (similar to the operating system and applications running on a computer).

(2) The PX4 software system can be further divided into several small modules, which run independently in parallel multi-thread. Each module exchanges data with other modules through the subscription and publication of uORB messages.

(3). After the algorithm code is generated by the PSP toolbox, it is embedded into the PX4 software system. This will not affect the operation of the native control modules in the PX4 software. Instead, a new independent module (with an independent thread) named “px4_simulink_app” will be created to run in parallel with other modules.

![image](https://user-images.githubusercontent.com/42961200/126034713-5931536f-3e46-48fc-8e2d-f6709009e5e8.png)

(4). As shown in Fig. 3.13, the whole code generation and deployment procedures are presented as follows.

1). The PSP toolbox generates the C/C++ code from the control algorithm designed in Simulink.

2). The obtained algorithm code is imported into the PX4 source code to generate a “px4_simulink_app” independent of other modules.

3). The PSP toolbox calls the compiling toolchain (Win10WSL, Msys2, or Cygwin) to compile all the code into a “.px4” PX4 firmware file (similar to a software installation package).

4). Upload the obtained firmware file to the Pixhawk hardware; then, the Pixhawk autopilot can execute the PX4 software with the generated algorithm code.

(5). The native modules in the PX4 software may assess the same hardware outputs as the generated “px4_simulink_app” module, which may cause read and write conflicts. Therefore, in the one-key installation script, the hardware output accessing codes of the PX4 native modules have been blocked in the last option shown in Fig. 2.4. This will ensure that only the “px4_simulink_app” module can send motor control signals.

![image](https://user-images.githubusercontent.com/42961200/126034705-09387f40-0f17-4559-9026-887c024a8d1e.png)

../_images/Quan-ch3-Fig3.14.jpg
Fig. 3.14 Relationship between PX4 native modules and module generated by Simulink

(6). The generated Simulink code can also be used to replace some of the native modules (sensors, filters, attitude controllers, etc.) of the PX4 software shown in Fig. 3.13. However, the PX4 software code needs to be manually modified to block the output interface of the corresponding native module (Another feasible way is to block the module in the startup script “FirmwareROMFSpx4fmu_commoninit.drcS”). For example, if readers want to use Simulink to replace the filter module (input sensor data, output filter data) of the PX4 software, they should manually block uORB publishing code of the PX4 “Position and Attitude Estimator” module in Fig. 3.14 to prevent it from publishing estimate data. The detailed steps are described next.

1). Open the “Firmwaresrcmodulesekf2ekf2_main.cpp” file (corresponding to the code of the extended Kalman filter module).

2). Search for the text “orb_publish_auto(ORB_ID(vehicle_attitude)” and comment out the related code.

### 3.1. Target Blocks Library of PSP Toolbox
As shown in Fig. 3.15, after installing the PSP toolbox, a “Pixhawk Target Blocks” interface module library can be found in the Simulink library browser. These modules provide interfaces to access the Pixhawk hardware I/Os and the PX4 internal messages. The “Pixhawk Target Blocks” library consists of four sub-libraries, namely “ADC and Serial library”, “Miscellaneous Utility Blocks” library, “Sensors and Actuators” library, and “uORB Read and Write” library.

![image](https://user-images.githubusercontent.com/42961200/126034695-e3f61e98-5914-40c9-b026-19278286022d.png)

../_images/Quan-ch3-Fig3.15.jpg
Fig. 3.15 Simulink PSP module library

Figure 3.16 presents several key I/O interface modules in the “Sensors and Actuators” library. These modules make it easy to acquire the sensor data or estimate data for designing flight controllers that compute output signals for the motors, LEDs, and buzzers.

![image](https://user-images.githubusercontent.com/42961200/126034692-8b0f75e5-3f20-4f40-835e-4151ed38039b.png)

../_images/Quan-ch3-Fig3.16.jpg
Fig. 3.16 Schematic diagram of PSP toolbox sensor and actuator interface library

As shown in Fig. 3.17, the PSP toolbox also provides many examples (see folder e02.PSPOfficialExps ) with an official manual (see document e02.PSPOfficialExpsPixhawk_Pilot_Support_Package.pdf for details) for readers to be quickly familiar with functions and usage methods of PSP toolbox.

![image](https://user-images.githubusercontent.com/42961200/126034686-ae93323f-50ce-47b7-a41b-2f92e41ae2f4.png)

../_images/Quan-ch3-Fig3.17.jpg
Fig. 3.17 Official examples and manuals for PSP toolbox

### 3.2. Instructions for Modules in PSP Toolbox
(1). RC input module

Figure 3.18 presents the RC input module and its parameter setting box. It is convenient to select RC channels and other information to be used by Simulink. The definition and application of each option can be viewed by clicking the “help” button of the box or by consulting the official PDF document. The PSP toolbox also provides an example ( see file e02.PSPOfficialExpspx4demo_input_rc. slx) to show how to use this module.

![image](https://user-images.githubusercontent.com/42961200/126034678-50d0be32-fade-46c8-80e5-3d9ec221204e.png)

../_images/Quan-ch3-Fig3.18.jpg
Fig. 3.18 RC input module and its parameter setting box

(2). PWM output module

Figure 3.19 depicts the PWM output module, which is used to send PWM signals to PX4IO ports to control the motor. The PWM update frequency and the number of output channels can be configured in the setting box.

![image](https://user-images.githubusercontent.com/42961200/126034671-cb1f3af7-f8cf-459f-89d6-3871b0377921.png)

../_images/Quan-ch3-Fig3.19.jpg
Fig. 3.19 PWM output module and its parameter setting box

(3). FMU output module

Figure 3.20 presents the FMU output module, which is used to send PWM signals to PX4FMU ports to control the servo deflection. The PWM update frequency and the number of output channels can be configured in the setting box.

![image](https://user-images.githubusercontent.com/42961200/126034662-b1e16820-0e0a-4b16-9834-d5a676836b39.png)

../_images/Quan-ch3-Fig3.20.jpg
Fig. 3.20 FMU output module and its parameter setting box

(4). Buzzer module

Figure 3.21 presents the Buzzer module, which is used when the buzzer is required to make a warning sound. There is an example (see file e02.PSPOfficialExpspx4demo_tune.slx) for detailed information.

![image](https://user-images.githubusercontent.com/42961200/126034652-46e10581-ca4d-4606-a6c5-65d4b9b5f41a.png)

../_images/Quan-ch3-Fig3.21.jpg
Fig. 3.21 Buzzer module and its parameter setting box

(5). RGB_LED module

This module can control the blink mode and color of the LED on Pixhawk. As shown in Fig. 3.22, the module receives two inputs, namely “Mode” and “Color” representing the mode and color of the LED. The PSP toolbox provides an example (see file e02.PSPOfficialExpspx4demo_rgbled.slx) to study this module.

![image](https://user-images.githubusercontent.com/42961200/126034646-7e664484-11ff-4e39-aed2-e6efc95009ae.png)

../_images/Quan-ch3-Fig3.22.jpg
Fig. 3.22 LED light module and its parameter setting box

(6). Sensor combination module

This module can access the sensor data available in the Pixhawk autopilot, which can then be used for controller design in Simulink. Available sensor data include magnetometers, accelerometers, gyroscopes, barometers, and timestamps. As shown in Fig. 3.23, the sample rate and the required sensor data can be configured in the parameter setting box. The PSP toolbox also provides an example (see file e02.PSPOfficialExpspx4demo_attitude_control.slx) to study this module.

![image](https://user-images.githubusercontent.com/42961200/126034636-b21c8f57-7512-46a2-bfd9-fd130c5e4da6.png)

../_images/Quan-ch3-Fig3.23.jpg
Fig. 3.23 Sensor combination module and its parameter setting box

(7). Attitude data module

As shown in Fig. 3.24, the attitude data module provides an interface to access the attitude estimate (Euler angles and quaternion). The PSP toolbox also provides an example (see file e02.PSPOfficialExpspx4demo_attitude_control.slx) to study this module.

![image](https://user-images.githubusercontent.com/42961200/126034634-3efa42e2-3a1b-495f-9227-0672aa685213.png)

../_images/Quan-ch3-Fig3.24.jpg
Fig. 3.24 Attitude data module and its parameter setting box

(8). GPS data module

This module, shown in Fig. 3.25, can be used to access the Pixhawk GPS data, which are achieved by subscribing to the uORB topic “vehicle_gps”. Therefore, in practical operation, it is necessary to ensure that the GPS module is inserted into the Pixhawk hardware and then works. The PSP toolbox also provides an example (see file e02.PSPOfficialExpspx4demo_gps.slx) to study this module.

![image](https://user-images.githubusercontent.com/42961200/126034631-74f7545b-2dae-4306-a791-a164bf446a60.png)

../_images/Quan-ch3-Fig3.25.jpg
Fig. 3.25 GPS data module and its parameter setting box

(9). Battery data module

This module, shown in 3.26, can be used to obtain the real-time status of the battery. It is implemented by subscribing to the uORB topic “battery_status”. Therefore, in practical operation, it is necessary to ensure that the power module is inserted into the Pixhawk hardware and then works correctly.

![image](https://user-images.githubusercontent.com/42961200/126034624-fb518219-d744-4145-bb7a-0c641822e1fd.png)

../_images/Quan-ch3-Fig3.26.jpg
Fig. 3.26 Battery data module and its parameter setting box

(10). uORB modules

These modules, presented in Fig. 3.27, are used to read or write uORB messages from the PX4 autopilot software. All the uORB message topics supported by the PX4 autopilot are listed in the directory “Firmwaremsg” of the software package installation directory (configured as in Fig. 2.4; the default directory is “C:PX4PSP”).

![image](https://user-images.githubusercontent.com/42961200/126034622-5118d412-5b81-483e-8c17-64f71e53925d.png)

../_images/Quan-ch3-Fig3.27.jpg
Fig. 3.27 uORB modules for message reading and writing

Double-click the “uORB Write” module in Fig. 3.27, then the obtained parameter setting box of the “uORB Write” module is presented in Fig. 3.28, where the uORB topic name and the message variables to be sent can be configured.

![image](https://user-images.githubusercontent.com/42961200/126034617-870a7be6-fc6d-401b-af6c-3a66a1761b02.png)

../_images/Quan-ch3-Fig3.28.jpg
Fig. 3.28 “uORB Write” module parameter setting box

Clicking the “Open .msg file” button in Fig. 3.28 yields the content of the select “.msg” file (see Fig. 3.29), and clicking the “Open .msg folder” button yields the list of all supported uORB messages (See Fig. 3.30).

![image](https://user-images.githubusercontent.com/42961200/126034612-e9371264-c41f-43df-bf01-353c4dc9e139.png)

../_images/Quan-ch3-Fig3.29.jpg
Fig. 3.29 uORB message file

![image](https://user-images.githubusercontent.com/42961200/126034608-49940dda-81a2-4c02-b319-8cfd6e51d38b.png)

../_images/Quan-ch3-Fig3.30.jpg
Fig. 3.30 Pop-up window of “Open .msg folder” button

There are two advanced “uORB Write” modules presented in Fig. 3.31, which provide more convenient ways to send uORB messages.

![image](https://user-images.githubusercontent.com/42961200/126034602-e5d1dac0-986c-4433-a14a-5c606c65918a.png)

../_images/Quan-ch3-Fig3.31.jpg
Fig. 3.31 Advanced “uORB Write” modules and difference between them

In fact, all modules (PWM output, RGB_LED, etc.) mentioned in this section are implemented at the underlying code by reading and writing uORB messages. Theoretically, by using the “uORB Read and Write” modules, all messages and intermediate variables used in the PX4 autopilot can be accessed by Simulink. This simplifies the implementation of more advanced functions for controller design. The PSP toolbox also provides two examples (see file e02.PSPOfficialExpspx4demo_fcn_call_uorb_example.slx, and file e02.PSPOfficialExpspx4demo_write_uorb_example.slx) to study this module.

In the PX4 development website, there are detailed documents for creating a new uORB message and receiving a new MAVLink message to communicate with external devices. In addition to the uORB modules presented in Fig. 3.27, it is convenient for the Simulink controller “px4_simulink_app” to exchange data with external devices, such as cameras, sensors, and host computers.

(11). Accessing PX4 internal parameters

For the sake of convenience for controller parameter tuning in flight tests, the PSP Toolbox also provides interfaces to access the PX4 internal parameters. In this way, the parameters of the controller generated by Simulink can be tuned online in the GCS software, instead of modifying the controller parameters in Simulink, generating code, and uploading the firmware file again. As shown in Fig. 3.32, an example of how to access the PX4 internal parameters is presented in file e02.PSPOfficialExpspx4demo_Parameter_CSC_example.slx.

![image](https://user-images.githubusercontent.com/42961200/126034593-33160d40-8ecd-4e9c-8eb2-73df40e20172.png)

../_images/Quan-ch3-Fig3.32.jpg
Fig. 3.32 Example of PX4 internal parameter reading

![image](https://user-images.githubusercontent.com/42961200/126034582-b8a07a65-5bae-4f2a-b9a6-cac6187f8b15.png)

../_images/Quan-ch3-Fig3.33.jpg
Fig. 3.33 Simulink initialization script for accessing PX4 parameters

PX4 internal parameter access is realized by using the function “Pixhawk_CSC.Parameter( {*, *})”, which needs to be called in the Simulink initialization function ( click “Simple”—“Model Properties”—“Callbacks”—“InitFcn” in the Simulink menu bar). For the example shown in Fig. 3.32, the corresponding parameter initialization script is shown in Fig. 3.33.

### 3.3. Configuration for Code Generation
(1). Preparation of the Simulink controller for code generation The preparation procedure is described below.

1). As shown in Fig. 3.7, design a controller in Simulink and verify it with SIL simulations.

2). Copy the verified controller to a new Simulink file.

3). Connect the input and output ports of the controller subsystem with the input (e.g., combined sensor module and RC input module) and output (e.g., PWM module and uORB modules) interface modules in the PSP module library presented in Fig. 3.15.

4). An example of the obtained Simulink controller file is presented in Fig. 3.34. The example file is available in e02.PSPOfficialExpspx4demo_attitude_system.slx.

![image](https://user-images.githubusercontent.com/42961200/126034577-d0142593-b9b7-4871-b159-5d7652f58023.png)

../_images/Quan-ch3-Fig3.34.jpg
Fig. 3.34 Example of Simulink controller connecting with PSP modules

(2). Open the Simulink setting panel

The new created Simulink file must be configured to support the code generation function of the PSP toolbox. First of all, as shown in Fig. 3.35, the Simulink setting panel can be opened by clicking “Simulation”—“Model Configuration Parameters” in the Simulink menu bar.

![image](https://user-images.githubusercontent.com/42961200/126034573-ff3cfc56-e60f-4417-b945-15210e2d4bde.png)

../_images/Quan-ch3-Fig3.35.jpg
Fig. 3.35 Simulink “Settings” button for different MATLAB versions

(3). Setting for PSP code generation

As indicated in Fig. 3.36, go to the “Hardware Implementation” tab and select the “Pixhawk PX4” item in the pull-down menu of the “Hardware board” option. Then, all necessary parameter setting for PSP code generation is automatically configured.

![image](https://user-images.githubusercontent.com/42961200/126034571-05d89f2c-ab6a-41fc-8e33-3ca89824eebf.png)

../_images/Quan-ch3-Fig3.36.jpg
Fig. 3.36 Selecting target hardware

(4). Source code compilation and firmware generation

Click the “Build” button in Fig. 3.37 to convert the Simulink controller into C/C++ code and then compile it into the PX4 firmware. As shown in Fig. 3.38, the code generation and compiling process can also be observed by clicking the “Diagnostics” button on Simulink.

![image](https://user-images.githubusercontent.com/42961200/126034562-ce1a082a-f93e-4bc0-8da9-cf5612292f3c.png)

../_images/Quan-ch3-Fig3.37.jpg
Fig. 3.37 Simulink “Build” button for different MATLAB versions

![image](https://user-images.githubusercontent.com/42961200/126034557-503ff834-b7f1-4ddc-a18b-ccc67fa8b440.png)

../_images/Quan-ch3-Fig3.38.jpg
Fig. 3.38 Simulink “Diagnostics” button for different MATLAB versions

A successful compiling process in the “Diagnostic Viewer” dialog is shown in Fig. 3.39, where the compiling process is finished with the following text “Successfully generated all binary outputs”. It can also be observed in Fig. 3.39 that a “Code Generation Report” document will pop up after the compiling process is finished.

![image](https://user-images.githubusercontent.com/42961200/126034546-d2097481-8ade-4142-864f-9fb33adc7802.png)

../_images/Quan-ch3-Fig3.39.jpg
Fig. 3.39 Display dialog of code generation and firmware compiling

(5). Upload PX4 firmware to Pixhawk hardware

Use the one-key upload function provided by the PSP toolbox to upload and burn the firmware to the Pixhawk hardware. The specific steps are described below.

1). Use a USB cable to connect the MicroUSB port (on the side of the Pixhawk hardware) with the USB port on the computer.

2). As shown in Fig. 3.40, for MATLAB 2017b–2019a, click “Code”—“PX4 PSP: Upload code to Px4FMU” on the Simulink menu bar, then the firmware will be automatically uploaded to the Pixhawk autopilot; for MATLAB 2019b and above, since the Simulink menu is deprecated, readers can input the “PX4Upload” command in the “Command Window” of the MATLAB interface to upload the firmware .

![image](https://user-images.githubusercontent.com/42961200/126034541-cb5d7379-8434-4305-920e-6dd6b27e6627.png)

../_images/Quan-ch3-Fig3.40.jpg
Fig. 3.40 Firmware upload methods for different MATLAB versions

3). Check the pop-up window carefully; sometimes, the Pixhawk autopilot has to be re-plugged to start the firmware uploading process.

After completing the above steps, the controller designed in Simulink has been run on the Pixhawk autopilot.

<hr>

## 4. Pixhawk Hardware System
### 4.1. HW System Composition/Connection
As shown in Fig. 3.41, the hardware components required by this book include an RC transmitter, an RC receiver, a JR signal cable (connecting the Pixhawk autopilot and the RC receiver), a Pixhawk autopilot (Pixhawk 1 is recommended for studying, and higher hardware versions are recommended for outdoor flight tests), and a MicroUSB cable (connecting the computer and the Pixhawk hardware for power supply and data transmission). The connection relationships among the above components are presented in Fig. 3.42.

![image](https://user-images.githubusercontent.com/42961200/126034950-cafad8de-f833-41b4-b122-3e1180dd5ca0.png)

../_images/Quan-ch3-Fig3.41.jpg
Fig. 3.41 Pixhawk autopilot, RC transmitter, and RC receiver

![image](https://user-images.githubusercontent.com/42961200/126034945-11c13406-29a3-426f-a6ff-becc88798f4b.png)

../_images/Quan-ch3-Fig3.42.jpg
Fig. 3.42 Connection between Pixhawk hardware and RadioLink receiver

### 4.2. RC Transmitter Basic
The RC transmitter used in this book should be set to “Mode 1”. As illustrated in Fig. 3.43, the throttle and yaw channels are controlled by the left stick on the RC transmitter, whereas the roll and pitch channels are controlled by the right stick. The roll, pitch, throttle, and yaw channels correspond to the CH1 to CH4 of the RC receiver respectively; the upper-left three-position switch corresponds to CH5 for triggering the autopilot to switch flight modes; the upper-right three-position switch corresponds to CH6 for triggering the autopilot to switch flight modes or enable other functions.

![image](https://user-images.githubusercontent.com/42961200/126034939-0bff570a-ec5c-4fb2-95bd-c0f57c45a859.png)

../_images/Quan-ch3-Fig3.43.jpg
Fig. 3.43 RC transmitter channels

The following relationships should be remembered when processing the PWM input signals from the RC system for designing a controller.

The throttle stick (CH3) moves from the bottom position to the top position, and the corresponding PWM value of CH3 received by Pixhawk changes from 1100 to 1900;
The roll stick (CH1) and the yaw stick (CH4) move from the left position to the right position, and the corresponding PWM values change from 1100 to 1900;
The pitch stick (CH2) moves from the bottom position to the top position, and the corresponding PWM value changes from 1900 to 1100;
The upper-left switch (CH5) and the upper-right switch (CH6) move from the top position (the farthest position from the user), middle position, and bottom position (the closest position from the user), and the corresponding PWM values change from 1100, 1500, to 1900.

### 4.3. Uploading Firmware Through QGC
Find the QGroundControl icon on the desktop and open the QGC software , the software UI is presented in Fig. 3.44.

![image](https://user-images.githubusercontent.com/42961200/126034930-1b88c2d1-f457-4b61-a6e8-3e84e9a7e924.png)

../_images/Quan-ch3-Fig3.44.jpg
Fig. 3.44 QGC firmware upload interface

Then, the following procedure presents the way to upload a PX4 firmware file to the Pixhawk hardware through QGC.

(1). Click the “Settings” button (the gear icon on the toolbar in Fig. 3.44) to enter the QGC setting page.

(2). Click the “Firmware” tab, and then connect the Pixhawk hardware with a USB cable. The QGC will automatically detect the Pixhawk autopilot and pop up the right tap, as shown in Fig. 3.44.

(3). Click the “Advanced settings” checkbox.

(4). Click on the “Standard Version (stable)” tab.

(5). Select the “Custom firmware file ..” option in the pop-up menu.

(6). Click the “OK” button.

(7). As shown in Fig. 3.45, select file “e02.PSPOfficialExpspx4fmu-v3_default1.7.3Stable.px4” in the pop-up file selection window, and click the “Open” button. Then, the QGC will upload and burn the firmware into the Pixhawk hardware.

![image](https://user-images.githubusercontent.com/42961200/126034924-681b2fc6-7f1e-45d9-a2f2-65d94bca1cdb.png)

../_images/Quan-ch3-Fig3.45.jpg
Fig. 3.45 QGC custom firmware selection page

### 4.4. Pixhawk Setting for HIL Simulation Mode
Open the QGC software, and connect the Pixhawk autopilot with a USB cable. Then, QGC will automatically recognize the Pixhawk autopilot and create a connection for parameter setting and data transmission. Fig. 3.46 presents the UI of QGC after connecting with the Pixhawk autopilot.

![image](https://user-images.githubusercontent.com/42961200/126034921-8c09cea3-0e17-4a87-b39c-813904ea94f7.png)

../_images/Quan-ch3-Fig3.46.jpg
Fig. 3.46 Pixhawk autopilot connected to QGC

Click the “Airframe” tab (the third item on the left side in Fig. 3.46) on the QGC setting page to confirm that the “HIL Quadcopter X” airframe mode (see Fig. 3.47) is selected by default.

![image](https://user-images.githubusercontent.com/42961200/126034918-efd05ad0-9b2a-4233-b74d-3b51f4e99a8b.png)

../_images/Quan-ch3-Fig3.47.jpg
Fig. 3.47 QGC Airframe setting page

This setting is critical for subsequent HIL simulation. Otherwise, a manual setup will be required. The airframe setting method is presented below.

(1). Select the “HIL Quadcopter X” airframe icon in Fig. 3.47.

(2). Click the “Apply and Restart” button in the upper right corner of the UI. Then, the autopilot will restart to make the new airframe available.

(3). Wait for a few seconds; QGC will connect to the autopilot again and will check whether the setting in Fig. 3.47 is correctly established.

### 4.5. RC Transmitter Setup
According to Fig. 3.42, connect the Pixhawk autopilot and the RC receiver. Then, connect the Pixhawk autopilot with the computer. Next, turn on the RC transmitter, and open QGC. After QGC connects with the Pixhawk autopilot successfully with the UI presented in Fig. 3.46, click the “Radio” item on the QGC setting page (the fourth item on the left side in Fig. 3.46) to check the connection condition with the RC transmitter.

Move the sticks of the RC transmitter and observe the trend of channels 1–6 on the right area in Fig. 3.48 (this area only appears when the RC transmitter is successfully connected). Check whether it meets the needs of this experiment. First, according to the stick and channel definition shown in Fig. 3.43, sequentially perform the following operations to check whether the setting of the RC transmitter satisfies the experimental requirements of this book.

(1). Move the throttle stick (CH3 in Fig. 3.43) from bottom to top. The third slider on the bottom-right region in Fig. 3.48 should move from left to right (the PWM value changes from 1100 to 1900).

(2). Move the roll stick (CH1) and the yaw stick (CH4) from left to right. The first and the fourth sliders in Fig. 3.48 should move from left to right (the PWM values change from 1100 to 1900).

(3). Move the pitch stick (CH2) from bottom to top. The second slider in Fig. 3.48 should move from right to left (the PWM values change from 1900 to 1100).

(4). Move the upper-left switch (CH5) and the upper-right switch (CH6) from the top position (the farthest position from the user) to the bottom position (the closest position from the user). The fifth and the sixth sliders in Fig. 3.48 should move from left to right (the PWM values change from 1100 to 1900).

If the above rules are not satisfied, it means that the RC transmitter is not set correctly, so the RC transmitter should be re-configured by the methods presented in Sect. 2.3.1. Besides, if QGC prompts a warning message saying that the RC transmitter is not calibrated, click the “Calibrate” button in the middle in Fig. 3.48 and complete the RC calibration by moving the sticks according to the instructions on QGC.

![image](https://user-images.githubusercontent.com/42961200/126034914-aab7eb9e-6992-4874-b486-a387888df3ca.png)

../_images/Quan-ch3-Fig3.48.jpg
Fig. 3.48 QGC RC transmitter setting and calibration page

### 4.6. Flight Mode Settings
After the RC transmitter is successfully calibrated, enter the “Flight Modes” setting page (see Fig. 3.49) and select “Mode Channel” as the previously tested CH6 channel. Since the CH6 channel is a three-position switch, the top position (the farthest position from the user), middle position, and bottom position (the closest position from the user) of the switch correspond to “Flight Mode 1, 4, 6” in Fig. 3.49, respectively. Also, according to Fig. 3.49, associate these three modes to “Stabilized” (the stabilized mode, only including attitude control), “Altitude” (the altitude hold mode, including attitude and altitude control), and “Position” (the loiter mode, including attitude and position control).

![image](https://user-images.githubusercontent.com/42961200/126034910-c51d5ce4-4098-4ed3-bc0d-d70843b6b5eb.png)

../_images/Quan-ch3-Fig3.49.jpg
Fig. 3.49 Flight mode setting page in QGC

<hr>

## 5. HIL Simulation Platform
The HIL simulation platform includes a Real-time Motion Simulation Software— CopterSim and a 3D Visual Display Software—3DDisplay.

### 5.1. CopterSim
Double-click the CopterSim shortcut on the Windows desktop to open the CopterSim software, whose UI is presented in Fig. 3.50. The default simulation model and parameters are the same as for the Simulink multicopter model used in the SIL simulation system (see Fig. 3.1). This is because the CopterSim is developed based on the code generation technique with the Simulink multicopter model. CopterSim needs to run on a 64-bit Windows computer platform with a serial port and a MicroUSB cable to communicate with the Pixhawk autopilot (see Fig. 3.42).

![image](https://user-images.githubusercontent.com/42961200/126034981-b9607228-2118-4a20-81d1-52c0b6cef945.png)

../_images/Quan-ch3-Fig3.50.jpg
Fig. 3.50 CopterSim main UI

CopterSim sends sensor data to the Pixhawk autopilot, and then the autopilot solves the motor PWM control signal and returns it to CopterSim. As a result, the Pixhawk autopilot can perform real-time control on the simulated multicopter in CopterSim, as well as control a real multicopter. Meanwhile, CopterSim will send the attitude and position information of the multicopter to the local network through the UDP protocol, and the 3DDisplay receives the multicopter flight information to complete the corresponding real-time 3D scene display.

As shown in Fig. 3.50, the UI of CopterSim is divided into two parts. The upper part, presented in Fig. 3.50a, is the input interface to design a multicopter by selecting popular components on the market. The lower part presented in Figs. 3.50b–e is the interface to connect with the autopilot for HIL simulation. Note that CopterSim enables by default only the basic functions required by this book. Registration is required to use many other practical functions, such as swarm simulation, high- fidelity UE4 scenes, and HIL simulations for other aerial vehicles (e.g., fixed-wing aircraft). Please, see Appendix A for more information.

Click the “Model Parameter” button in the middle of the CopterSim UI in Fig. 3.50b. The model parameter configuration dialog in Fig. 3.51 will pop up; the model parameters stored in the previous simulation will be displayed here. The parameter dialog in Fig. 3.51 mainly includes two parts: the hover information (hover endurance, throttle, output power, motor speed, etc.) and the basic multicopter parameters (total mass, the moment of inertia, size, thrust coefficient, and drag coefficient). Clicking the “Restore to Default Params” button on the dialog in Fig. 3.51 will restore the model parameters to the default values; clicking the “Save and Apply Params” button will store the current parameters to the database for subsequent HIL simulations.

![image](https://user-images.githubusercontent.com/42961200/126034985-140772e3-f018-4402-93a6-c53352f4efbb.png)

../_images/Quan-ch3-Fig3.51.jpg
Fig. 3.51 Model parameter configuration dialog

CopterSim also allows readers to directly modify the model parameters on the right page of Fig. 3.51. For example, enter the same parameters as the multicopter model used in Simulink SIL simulations (the parameters are stored in file “e01.SoftwareSimExpsiconInit.m”). Then, click the “Store and Apply parameters” button in Fig. 3.51 to store and apply the model parameters. The “noise level (0–1)” in Fig. 3.51 allows selecting the noise level of the simulated sensors, where “0” denotes that the sensor noise is not enabled, and “1” denotes that the noise level is consistent with the real Pixhawk autopilot. A noise level between 0–1 or larger than one can also be selected to represent the noise level of actual sensors. This enables the possibility of testing the anti-interference ability of the designed control algorithms.

After the multicopter parameters and the noise level are configured, as shown in Fig. 3.51, connect the Pixhawk autopilot with the computer. A few seconds later, the serial port of the Pixhawk autopilot will be listed in the “Select Pixhawk Com” dropdown menu. Select the Pixhawk serial port (usually described by the text “FMU”), and click the “Start Simulation” button to start the HIL simulation. As shown in Fig. 3.52, the messages from the Pixhawk are printed on the CopterSim UI, which indicates that the HIL simulation is running correctly. During the HIL simulation process, clicking the “Stop Simulation” button will stop the HIL simulation, and clicking the “Restart Simulation” will re-initialize the multicopter position and states to their initial values.

![image](https://user-images.githubusercontent.com/42961200/126034996-0e9f532a-1abe-4623-9111-4bfcb2a58f26.png)

../_images/Quan-ch3-Fig3.52.jpg
Fig. 3.52 HIL simulation with CopterSim

### 5.2. 3DDisplay
Double-click the 3DDisplay shortcut on the Windows desktop to open the 3DDisplay software. As shown in Fig. 3.53, the “3D Scene Viewer” on the left side of the 3DDisplay UI presents the current flight status of the multicopter in the 3D scene. The basic flight parameters are displayed in the upper right window of the 3DDisplay UI, including motor speed, position, and attitude information. The flight trajectory of the multicopter is displayed on the lower right window of the 3DDisplay UI.

![image](https://user-images.githubusercontent.com/42961200/126035005-e7bacf01-25ba-44a0-8b72-fe4f1fb3e850.png)

../_images/Quan-ch3-Fig3.53.jpg
Fig. 3.53 User interface of 3DDisplay

### 5.3. Flight Tests with HIL Simulation Platform
In the HIL simulation platform, when controlling a real multicopter, it is convenient to control the simulated multicopter with a real RC transmitter to perform basic actions, such as arming, taking off, manual flight, landing, etc. The detailed steps are described next.

(1). Push up the POWER switch to turn on the RC transmitter.

(2). Correctly connect the computer with the Pixhawk hardware system (including the Pixhawk autopilot and the RC receiver) and start the HIL simulation in CopterSim according to the procedure mentioned above.

(3). As shown in Fig. 3.54a, arm the Pixhawk autopilot by moving the left-hand stick on the RC transmitter (CH3) to the lower-right corner for 2–3 s.

![image](https://user-images.githubusercontent.com/42961200/126035011-8973abfe-1012-4e95-a3d8-a841584be5e7.png)

../_images/Quan-ch3-Fig3.54.jpg
Fig. 3.54 Arm and disarm of Pixhawk autopilot through RC transmitter

(4). Pixhawk is successfully armed when its LED turns from slow flashing to always on, [1] and the CopterSim print message “Detect Px4 Armed” is received from Pixhawk. If arming Pixhawk fails, please disconnect all hardware and software and repeat the above steps.

(5). Pull up the left-hand stick on the RC transmitter (CH3) for the multicopter to take off and fly up to a certain altitude. Next, vertically move the left-hand stick to verify the vertical motion control of the multicopter.

(6). Horizontally move the left-hand stick on the RC transmitter (CH4) to verify the yaw angle motion control of the multicopter.

(7). Vertically move the right-hand stick on the RC transmitter (CH2) to verify the pitch angle control as well as the forward and backward motion control of the multicopter.

(8). Horizontally move the right-hand stick on the RC transmitter (CH1) to verify the roll angle control as well as the left and right motion control of the multicopter.

(9). Change the position of the top-right switch on the RC transmitter (CH6) to verify the mode switching control of the multicopter.

(10). Pull down the left-hand stick on the RC transmitter (CH3) to land the multicopter to ground.

(11). As shown in Fig. 3.54b, move the left-hand stick on the RC transmitter (CH3) to the lower-left corner for 2–3 s to disarm the Pixhawk.

(12). Click the “Stop Simulation” button on the CopterSim UI to stop the HIL simulation. Then, disconnect all software and hardware connections between the computer and Pixhawk.

Notes

[1]	Higher Pixhawk hardware (e.g., Pixhawk 2/3/4/5) starts to discard LED module, so an external I2C LED module is required to observe the lighting effect.

<hr>
<hr>

## 6.Examples

### 6.1. Procedure for LED Control Experiment
The flashing frequency and color of the LED on the Pixhawk hardware can be controlled by designing controller in Simulink. This section takes a simple LED light control experiment [1] as an example to introduce the operation process of the hardware and software components of the experimental platform released with this book.

#### 🥇 6.1.1. Experimental Objective
As shown in Fig. 3.54, use two channels from CH1 to CH5 of the RC transmitter to control the LED light on Pixhawk in two different colors and two different modes.

![image](https://user-images.githubusercontent.com/42961200/126037692-b22fb24f-cd94-457c-a49b-69c99d68982a.png)

../_images/Quan-ch4-Fig4.2.jpg
Fig. 3.54 Hardware connection of LED control experiment

#### 🥇 6.1.2. Experimental Procedure
The experiment uses the “RGB_LED” module in the PSP toolbox introduced in the previous chapter (see Fig. 3.55) to control the LED light on Pixhawk.

(1). Create and open a new Simulink model file. As shown in Fig. 3.55, find the “RGB_LED” module in the “Pixhawk Target Blocks” toolbox, which is in the “Library Browser” of Simulink, and drag it to the new created Simulink file. The RC transmitter module “input_rc” in Fig. 3.55 is also dragged into the Simulink as the input signals to control the LED light. A Simulink example file completing the whole process of configuration is available in “e02.PSPOfficialExpspx4demo_input_rc.slx”.

![image](https://user-images.githubusercontent.com/42961200/126037681-dcff9f8f-de49-444f-ae34-34ded27019e0.png)

../_images/Quan-ch4-Fig4.3.jpg
Fig. 3.55 LED output interface model for PSP toolbox

(2). The RBG_LED module can be used to control the mode and color of the LED light on Pixhawk. Its mode enumeration variable “RGBLED_MODE_ENUM” includes the following seven options

SL MODE OFF
SL MODE ON
SL MODE DISABLED
SL MODE BLINK SLOW
SL MODE BLINK NORMAL
SL MODE BLINK FAST
SL MODE BREATHE.
The color variable “RGBLED_COLOR_ENUM” has the following options

SL COLOR OFF
SL COLOR RED
SL COLOR GREEN
SL COLOR BLUE
SL COLOR YELLOW
SL COLOR PURPLE
SL COLOR AMBER
SL COLOR CYAN
SL COLOR WHITE.
The above variables have been registered as MATLAB global parameters when installing the PSP toolbox so that they can be directly applied. For example, an LED light with blue color and fast blinking mode can be obtained by sending the variable “RGBLED_MODE_ENUM.SL_MODE_BLINK_FAST” with the “Constant” module to the “Mode” port of the LED module (the upper input port of the LED module), and sending the variable “RGBLED_COLOR_ENUM.SL_COLOR_BLUE” with the “Constant” module to the “Color” port (the lower input port of the LED module).

(3). Controller design. According to the introduction to the RC system provided in the previous chapter, the data range of the PWM signals received by Pixhawk is 1100–1900. As shown in Fig. 3.56, we will use two channels of the RC transmitter in this experiment to control the mode and color of the LED light. The controller design procedure is described next.

![image](https://user-images.githubusercontent.com/42961200/126037661-0827e4e6-d658-48fa-beb4-434d14366451.png)

../_images/Quan-ch4-Fig4.4.jpg
Fig. 3.56 LED controller with an RC transmitter

1). Use the CH3 channel of the RC transmitter (see the throttle channel in Fig. 3.54) to change the blink mode of the LED light. When the throttle stick is turned to the upper side, i.e., when the PWM value of the CH3 channel is higher than 1500 microseconds (abbreviated as CH3>1500), then the “Mode” port receives an “RGBLED_MODE_ENUM.SL_MODE_BLINK_FAST” variable corresponding to a fast blinking mode; when CH3≤1500, the “Mode” port receives the “RGBLED_MODE_ENUM.SL_MODE_BLINK_NORMAL” variable corresponding to a slow blinking mode.

2). Use the CH4 channel of the RC transmitter to change the color of the LED light. When CH4>1500, the “Color” port receives an “RGBLED_COLOR_ENUM.COLOR_RED” variable corresponding to red color; when CH4≤1500, the “Color” port receives an “RGBLED_COLOR_ENUM. COLOR_BLUE” variable corresponding to blue color.

#### 🥇 6.1.3. Controller Code Generation and Firmware Uploading
(1). For MATLAB 2017b–2019a, as shown in Fig. 3.57, click the “Simulation”—“Model Configuration Parameters” option on the Simulink menu bar to enter the Simulink setting dialog; for MATLAB 2019b and above, click the “Settings” button. The obtained Simulink setting window is presented in Fig. 3.58.

![image](https://user-images.githubusercontent.com/42961200/126037655-2466381f-22ab-4d03-ae39-1154e157ce6d.png)

../_images/Quan-ch4-Fig4.5.jpg
Fig. 3.57 “Model Configuration parameters” option on Simulink

![image](https://user-images.githubusercontent.com/42961200/126037646-227cd94a-fbb7-45d2-8f03-195b787e2304.png)

../_images/Quan-ch4-Fig4.6.jpg
Fig. 3.58 Simulink setting dialog

(2). Select the target hardware. As shown in Fig. 3.59, set the option “Hardware Implementation”—“Hardware Board” to “Pixhawk PX4”.

![image](https://user-images.githubusercontent.com/42961200/126037640-e40150d8-84d3-4a10-bd66-6c1e75eec4a6.png)

../_images/Quan-ch4-Fig4.7.jpg
Fig. 3.59 Setting target hardware to Pixhawk PX4

(3). Compile the model. As shown in Fig. 3.60, compile the designed controller into the PX4 firmware file by clicking the “Build” button on the Simulink toolbar. The code generation and firmware compiling process can be observed in the “Diagnostic Viewer” window of Simulink.

![image](https://user-images.githubusercontent.com/42961200/126037627-1084d906-e999-487d-af4b-18eb850cb920.png)

../_images/Quan-ch4-Fig4.8.jpg
Fig. 3.60 Button for compiling code in Simulink

For MATLAB 2017b–2019a, it can be opened by clicking on the “View diagnostics” button in the status bar below Simulink (see the lower box in Fig. 3.61) or by clicking the “View” - “Diagnostic Viewer” (see Fig. 3.61) button on the Simulink menu. For MATLAB 2019b and above, click the “Diagnostics” button to open the “Diagnostic Viewer” window.

![image](https://user-images.githubusercontent.com/42961200/126037621-8012ca38-3d29-49fe-9bf2-e91dca05ae98.png)

../_images/Quan-ch4-Fig4.9.jpg
Fig. 3.61 “Diagnostics” option in different Simulink versions

As shown in Fig. 3.62, the code and firmware are compiled successfully when the “Build process completed successfully” message appears in the “Diagnostic Viewer” window. A code generation report shown in Fig. 3.63 can also be obtained. At this point, the corresponding C/C++ code files have been generated in the folder “Firmwaresrcmodulespx4_simulink_app”, and the “make px4fmu-v3_default” command has been called to complete the firmware compilation process.

![image](https://user-images.githubusercontent.com/42961200/126037610-b005537f-3f96-42f1-83b1-b2de84aa9a39.png)

../_images/Quan-ch4-Fig4.10.jpg
Fig. 3.62 Diagnostic viewer showing “build process completed successfully”

![image](https://user-images.githubusercontent.com/42961200/126037600-215fe5f6-6a03-4a19-98a8-bf9a07bc16c4.png)

../_images/Quan-ch4-Fig4.11.jpg
Fig. 3.63 Generated report after compiling

(4). Upload the firmware. Use the one-key upload function provided by the PSP toolbox to upload the PX4 firmware file. The specific steps are presented as follows.

1). Connect the MicroUSB port of the Pixhawk hardware with the computer by using a USB cable.

2). For MATLAB 2017b–2019a, as shown in Fig. 3.64, click the “Code”-“PX4 PSP: Upload code to Px4FMU” in the Simulink menu bar; for MATLAB 2019b and above, input the “PX4Upload” command in the MATLAB “Command Window” according to Fig. 3.40b to upload the firmware.

![image](https://user-images.githubusercontent.com/42961200/126037589-dfafe9e1-4ba5-4784-88a0-4741b6e72b19.png)

../_images/Quan-ch4-Fig4.12.jpg
Fig. 3.64 Simulink firmware upload menu

3). As shown in Fig. 3.65, Simulink will automatically recognize the Pixhawk autopilot and start to upload and deploy the PX4 firmware file. The uploading and deploying process is successfully completed when the progress bar reaches 100%. Note that Pixhawk may need to be re-plugged in some cases to start the upload progress.

![image](https://user-images.githubusercontent.com/42961200/126037573-7249414f-d386-4734-9212-bada15f3d0e9.png)

../_images/Quan-ch4-Fig4.13.jpg
Fig. 3.65 Firmware is successfully uploaded

#### 🥇 6.1.4. Experimental Result
By default, when the RC transmitter does nothing, the LED light is slowly blinking in blue. As shown in Fig. 3.66, do the following steps to verify the experimental results.

(1). When the left-hand stick of the RC transmitter shown in Fig. 3.54 is placed in the upper-right position (CH3>1500 and CH4>1500), the LED light on Pixhawk is quickly blinking in blue.

(2). When the throttle stick of the RC transmitter is placed in the upper-left position (CH3>1500 and CH4<1500), the LED is quickly blinking in red.

(3). When the throttle stick of the RC transmitter is placed in the lower-left position (CH3<1500 and CH4<1500), the LED is slowly blinking in red.

(4). When the throttle stick of the RC transmitter is placed in the lower-right position (CH3<1500 and CH4>1500), the LED is slowly blinking in blue.

![image](https://user-images.githubusercontent.com/42961200/126037554-03a5a38a-0935-4c2e-906a-eb37697a4801.png)

../_images/Quan-ch4-Fig4.14.jpg
Fig. 3.66 LED experimental results (the left LED is blue, and the right is red)

### 6.2.Procedure of Attitude Control Experiment
This section uses a well-designed attitude control system as an example to introduce the basic operation process of all the controller design experiments. This example is certainly complicated than the previous LED light control experiment.

#### 👍 6.2.1. Simulink-Based Algorithm Design and SIL Simulation
(1). Step 1 : controller design

Create a new Simulink file and design a multicopter attitude controller in it. For simplicity, an example of a well-designed attitude controller is available in “e03.DesignExpExp_AttitudeController.slx”. Open it, and the controller details are presented in Fig. 3.67. The design requirements for the controller are in the following.

![image](https://user-images.githubusercontent.com/42961200/126037542-d4d9f850-f17c-4149-9b6b-e91aa0d10612.png)

../_images/Quan-ch4-Fig4.15.jpg
Fig. 3.67 Attitude controller example

1). Input data

CH1-CH5 channel signals of the RC transmitter (see Fig. 3.67), which correspond to the “ch1”-“ch5” input ports in Fig. 3.67. The actual data approximately range from 1100 to 1900, so calibration or dead zones are required in processing the RC data.
Multicopter angular velocity (corresponding to the “p”, “q”, “r” input ports in Fig. 3.67, unit: rad/s). The above three inputs represent the velocity rotating around the x-axis of the body, the velocity rotating around the y-axis of the body, and the velocity rotating along the z-axis of the body.
Multicopter Euler angles (unit: rad). Here, the roll angle and the pitch angle (corresponding to the “roll” and “pitch” input ports in Fig. 3.67) are mainly considered, and the yaw control is temporarily not considered in this experiment.
2). Output data

PWM control signals of four motors (corresponding to the “PWM” output port in Fig. 3.67). The data range is 1000–2000.
Identifier for the armed state (corresponding to the “ARM_Control” output port in Fig. 3.67). The data type is Boolean.
3). Expected effects

The throttle stick (CH3 on the RC transmitter) controls multicopters to perform the upward-and-downward movement.
Push up the pitch stick (CH2 < 1500) to control the multicopter flying forward.
Move the roll stick leftward (CH1 < 1500) to control the multicopter flying leftward.
Pull back (or down) the three-position switch (CH5 > 1500) to disarm the multicopter.
(2). Step 2 : generate the controller subsystem

Select all the components in Fig. 3.67 with the mouse (or simultaneously press the keys CTRL + A), and right-click the mouse, choosing “Create Subsystem From Selection” to pack the controller to a subsystem in Simulink. Right-click the obtained subsystem and click “Mask”—“Create Mask” to open the mask setting box in Fig. 3.68. Then, enter text “image(‘./icon/Pixhawk.png’);” in the “Icon drawing commands” input box in Fig. 3.68. Finally, click the “OK” button and adjust the positions of the input and output ports of the obtained subsystem to get a subsystem as presented in Fig. 3.69.

![image](https://user-images.githubusercontent.com/42961200/126037526-b204f3bf-233c-4769-b329-225bdb6891d0.png)

../_images/Quan-ch4-Fig4.16.jpg
Fig. 3.68 Mask setting dialog for Simulink subsystem

![image](https://user-images.githubusercontent.com/42961200/126037513-9e9e274d-ec92-4c34-82f9-f074190057c3.png)

../_images/Quan-ch4-Fig4.17.jpg
Fig. 3.69 Obtained attitude controller subsystem

(3). Step 3 : integrate the controller with the model

Open the Simulink file for SIL simulation, i.e., file “e01.SoftwareSimExpsCopterSim3DEnvironment.slx” used in the previous chapter; delete its original controller subsystem (remember to create a backup); then, copy the new controller subsystem obtained in Step 2 to replace it.

(4). Step 4 : connect and configure the inputs and outputs

As shown in Fig. 3.70, reconnect the controller to the multicopter model, where the output port “PosE” denotes the multicopter position vector in the earth frame, “AngEuler” denotes the Euler angle vector of the multicopter attitude, and “AngRateB” denotes the angular velocity vector of the multicopter. Given that the RC transmitter signals cannot be obtained in the SIL simulation phase, readers can use constant values to replace them or use the MATLAB functions to simulate the corresponding RC transmitter actions. The angular velocity input ports “p”, “q”, and “r” of the controller in Fig. 3.69 can be obtained from the “AngRateB” vector of the multicopter model; the angle “roll” and “pitch” can be obtained from the “AngEuler” vector. An example is also available in “e03.DesignExpsExp2_ControlSystemDemo.slx” whose controller and practical RC transmitter signals have been connected as presented in Fig. 3.70.

![image](https://user-images.githubusercontent.com/42961200/126037499-1948892e-0851-4f1a-a728-e9bf60f60e14.png)

../_images/Quan-ch4-Fig4.18.jpg
Fig. 3.70 Controller connected with multicopter model

(5). Step 5 : start a joint simulation

Click the FlightGear-F450 shortcut on the Windows desktop to open FlightGear, and click on the “Start Simulation” button on the Simulink UI to start the simulation. Then, it can be observed in FlightGear (see Fig. 3.71) that a quadcopter climbs up for some time and then rolls left and flies leftward, indicating that the controller has achieved the expected requirements.


![](https://rflysim.com/docs/en/images/Quan-ch4-Fig4.19.jpg)

../_images/Quan-ch4-Fig4.19.jpg
Fig. 3.71 A quadcopter in FlightGear

#### 👍 6.2.2. Code Generation and Configuration
(6). Step 6 : configuration of the code generation environment

After finishing the SIL simulation in Simulink, copy the obtained controller subsystem to file “e03.DesignExpsExp3_BlankTemp.slx” (this file has been configured with all the settings required for code generation). Readers can also create a blank Simulink file and configure it according to Fig. 3.59.

(7). Step 7 : connect the controller to the PSP modules

Extract the corresponding I/O interfaces from the Simulink PSP module library (see Fig. 3.55) and connect it to the controller obtained in Step 6. As shown in Fig. 3.72, a complete example is available in “e03.DesignExpsExp4_AttitudeSystemCodeGen.slx”. Note that the motor control signals should be sent the uORB message of “actuator_outputs” to the “uORB Write” module instead of the PWM output module. This is because the controller is currently used for HIL simulation instead of actual flight tests.

![image](https://user-images.githubusercontent.com/42961200/126037461-3c28c8ce-05dc-46ca-9a41-d110bf6b5e6c.png)

../_images/Quan-ch4-Fig4.20.jpg
Fig. 3.72 Attitude controller in Simulink for code generation

(8). Step 8 : generate code and compile the firmware

Click the “Build” button (see Fig. 3.37) on the Simulink toolbar to automatically generate code and PX4 firmware file. The result in Fig. 3.73 shows a successful compilation process.

![image](https://user-images.githubusercontent.com/42961200/126037449-c70af94e-dc09-4f60-b25f-ef3bbcaf3f2f.png)

../_images/Quan-ch4-Fig4.21.jpg
Fig. 3.73 Simulink controller compiling successfully

(9). Step 9 : upload the firmware

Connect the computer to the Pixhawk autopilot with a USB cable, then use the “PX4Upload” function (see Fig. 3.40) to upload the firmware to the Pixhawk. A successful uploading result is shown in Fig. 3.74.

![image](https://user-images.githubusercontent.com/42961200/126037445-0c54fdd0-7966-4856-9e94-d8b17d58d33a.png)

../_images/Quan-ch4-Fig4.22.jpg
Fig. 3.74 Upload firmware successfully

#### 👍 6.2.3. HIL Simulation
(10). Step 10 : hardware system connection

As shown in Fig. 3.54, connect the RC receiver to Pixhawk with a three-color JR cable, then connect Pixhawk to the computer via a USB cable. At this point, readers can observe that the LED on Pixhawk lights up and blinks slowly, [2] the LED on the RC receiver is blue and white (this is for RadioLink and green light for Futaba receiver). Then, turn on the RC transmitter, readers can observe that the LED light on the Pixhawk blinks quickly for a few seconds, indicating that the RC transmitter data has been successfully received. If there is no change for the Pixhawk LED light, indicating that the connection between the RC transmitter and the receiver is not correct, readers should check and confirm the hardware connection.

(11). Step 11 : CopterSim configuration

Double-click the CopterSim shortcut on the Windows desktop to open it. There is no need to change the model parameters (or click “Model Parameters” - “Restore Default Parameters” - “Storage and Use Parameters” to restore aerial vehicle parameters to default values). Select the serial port of the Pixhawk autopilot in the “Select Pixhawk Com” drop-down box (usually in the format “*** FMU COM*”), click the “Start Simulation” button to start HIL simulation. As shown in Fig. 3.75, the message returned by the Pixhawk autopilot will be printed on the lower-left box of the CopterSim UI.

![image](https://user-images.githubusercontent.com/42961200/126037428-8cd37e3a-3328-4657-9cc5-697ae311a7e6.png)

../_images/Quan-ch4-Fig4.23.jpg
Fig. 3.75 Model simulator software configuration in CopterSim

(12). Step 12 : 3DDisplay configuration

Double-click the 3DDisplay shortcut on the desktop to open it. This software does not require any configuration; it passively receives the flight attitude and trajectory information of multicopters sent by CopterSim and displays it in real-time. The multicopter can be controlled by the RC transmitter to verify the designed attitude control algorithm. Move the throttle stick on the RC transmitter to the lower-right corner for three seconds to disarm the Pixhawk, and pull down (or back) the CH5 stick to the rearming position to disarm the designed controller. Then, the RC transmitter is able to control the multicopter to complete the corresponding action. As shown in Fig. 3.76, the multicopter attitude and position can be observed on the left side of the 3DDisplay interface. The real-time flight data are observed in the upper-right region, whereas the multicopter trajectory is observed in the lower-right region of the 3DDisplay UI.

![image](https://user-images.githubusercontent.com/42961200/126037415-5469d8ea-3714-4dfd-a14a-370282d7650b.png)

../_images/Quan-ch4-Fig4.24.jpg
Fig. 3.76 Multicopter 3DDisplay interface

#### 👍 6.2.4. Flight Test
(13). Step 13 : mount Pixhawk onto a multicopter airframe

The multicopter used in the outdoor flight tests is an F450 quadcopter (see Fig. 3.77). The parameters of the multicopter are accurately measured and identified by the system identification methods to ensure that the multicopter simulation model is consistent with the dynamics of the real multicopter system. For outdoor flight tests, the airframe of Pixhawk should be changed from “HIL Quadcopter X” to “DJI Flame Wheel F450” in QGC, which is presented in Fig. 3.78. All sensors should also be calibrated in QGC.

![image](https://user-images.githubusercontent.com/42961200/126037401-6afa15ae-9766-42c1-b1b5-6853f69c5b85.png)

../_images/Quan-ch4-Fig4.25.jpg
Fig. 3.77 F450 airframe and its components

![image](https://user-images.githubusercontent.com/42961200/126037386-7b8cfc15-2a10-4c4b-b545-41c2adb111e7.png)

../_images/Quan-ch4-Fig4.26.jpg
Fig. 3.78 Flight test airframe in QGC

(14). Step 14 : modify the Simulink controller

Open the Simulink file in Fig. 3.72 and change the “uORB Write” module to the “PWM_out” module provided by the PSP toolbox, according to Fig. 3.79. An example with the modified motor output is presented in “e03.DesignExpsExp5_AttitudeSystemCodeGenRealFlight.slx”. Then, click the Simulink “compile” button to compile the controller into PX4 firmware and upload it to Pixhawk.

![image](https://user-images.githubusercontent.com/42961200/126037366-06b891db-aa09-4389-96cc-7dec3aaa9501.png)

../_images/Quan-ch4-Fig4.27.jpg
Fig. 3.79 Changing “uORB Write” module to PWM_output

(15). Step 15 : preparation for flight tests

Owing to the lack of complete failsafe logic for the generated control algorithm, safety should be fully considered to prevent accidents in outdoor flight tests. For example, the tests should be carried out in a relatively open area (such as a lawn) and on a nice day with good weather and low wind speed. When the above conditions are met, connect Pixhawk with the battery, and press the safety switch [3] on Pixhawk for more than three seconds. Then, control the multicopter with an RC transmitter to verify the actual performance of the controller.

(16). Step 16 : test results and analysis

Next, we will present the results from the HIL simulation and outdoor flight tests to verify the accuracy of the multicopter simulation model. Figure 3.80 presents the HIL simulation results when the sensor noise level in CopterSim is set to 1.0, where the solid line “PitchReal” represents the outdoor flight tests result, the dotted line “PitchSim” represents the simulation result, and the dashed line “PitchSP” represents the ideal expected value. It can be observed from Fig. 3.80 that the step response curves from the HIL simulation and the outdoor flight are close to each other in terms of dynamic processes and noise levels.

![image](https://user-images.githubusercontent.com/42961200/126037354-22a2952c-4a87-495b-82af-de8bf29a49f7.png)

../_images/Quan-ch4-Fig4.28.jpg
Fig. 3.80 HIL simulation result when noise level is set to 1.0

Figure 3.81 is the HIL simulation result when the noise level in CopterSim is set to 0. It can be seen that the response curve of the HIL simulation is very smooth with no noise disturbance, and the dynamic process and outdoor flight results are slightly different. Note that because the airframe “HIL Quadcopter X” is not exactly the same as the airframe “DJI Flame Wheel F450” used in outdoor flight, there are differences in the controller parameters. In addition, the data transmission speed of the Pixhawk serial port may fluctuate during the HIL simulation, thereby affectingthe real-time performance. Finally, the aerodynamics of the multicopter in the outdoor flight is very complicated, but a simplified aerodynamic model is used in the multicopter simulation model. Therefore, the error between their response curves is acceptable.

![image](https://user-images.githubusercontent.com/42961200/126037337-183a8535-ac55-4208-97aa-7e77a0220df4.png)

../_images/Quan-ch4-Fig4.29.jpg
Fig. 3.81 HIL simulation result when noise level is set to 0

Notes

[1]	Higher Pixhawk hardware (e.g., Pixhawk 2/3/4/5) starts to discard LED module, so an external I2C LED module is required to observe the experiment result.
[2]	Higher Pixhawk hardware (e.g., Pixhawk 2/3/4/5) starts to discard LED module, so an external I2C LED module is required to observe the lighting effect.
[3]	https://docs.px4.io/master/en/config/airframe.html#safety_switch


to be continued
<hr>
<hr>

## About the review process

If you're using the doc as code approach, you might also consider using the same techniques for reviewing the doc as people use in reviewing code. This approach will involve using Github to edit the files.

There's an Edit me button on each page on this theme. This button allows collaborators to edit the content on Github.

Here's the code for that button on the page.html layout for GitHub:

```
{% raw %}{% if site.github_editme_path %}

<a target="_blank" rel="noopener" href="https://github.com/{{site.github_editme_path}}/{{page.folder}}{{page.url | append: ".md"}}{% endif %}" class="btn btn-default githubEditButton" role="button"><i class="fa fa-github fa-lg"></i> Edit me</a>

{% endif %}{% endraw %}
```

and here for GitLab:


```
{% raw %}{% if site.gitlab_editme_path %}

<a target="_blank" rel="noopener" href="https://github.com/{{site.gitlab_editme_path}}/{{page.folder}}{{page.url | append: ".md"}}{% endif %}" class="btn btn-default githubEditButton" role="button"><i class="fa fa-gitlab fa-lg"></i> Edit me</a>

{% endif %}{% endraw %}
```

In your configuration file, edit the value for `github_editme_path` (or for Gitlab: `gitlab_editme_path`). For example, you might create a branch called "reviews" on your Github repo. Then you would add something like this in your configuration file for the 'github_editme_path': tomjoht/documentation-theme-jekyll/edit/reviews. Here "tomjoht" is my github account name. The repo name is "documentation-theme-jekyll". The "reviews" name is the branch.

To suppress this button, comment out the `github_editme_path` in the \_config.yml file.

## Add reviewers as collaborators

If you want people to collaborate on your project so that their edits get committed to a branch on your project, you need to add them as collaborators. For your Github repo, click **Settings** and add the collaborators on the Collaborators tab using their Github usernames.

If you don't want to allow anyone to commit to your Github branch, don't add the reviewers as collaborators. When someone makes an edit, Github will fork the theme. The person's edit then will appear as a pull request to your repo. You can then choose to merge the change indicated in the pull or not.

{% include note.html content="When you process pull requests, you have to accept everything or nothing. You can't pick and choose which changes you'll merge. Therefore you'll probably want to edit the branch you're planning to merge or ask the contributor to make some changes to the fork before processing the pull request." %}


## Workflow

Users will make edits in your "reviews" branch (or whatever you want to call it). You can then commit those edits as you make updates.

When you're finished making all updates in the branch, you can merge the branch into the master.

Note that if you're making updates online, those updates will be out of sync with any local edits.

{% include warning.html content="Don't make edits both online using Github's browser-based interface AND offline on your local machine using your local tools. When you try to push from your local, you'll likely get a merge conflict error. Instead, make sure you do a pull and update on your local after making any edits online." %}

## Prose.io

 Prose.io is an overlay on Github that would allow people to make comments in an easier interface. If you simply go to [prose.io](http://prose.io), it asks to authorize your Github account, and so it will read files directly from Github but in the Prose.io interface.
 
 {% gist aiegoo/7415df308161ff861ac087c2e3bffcdf %}
 
{% include custom/series_rfly_next.html %}

 {% include links.html %}

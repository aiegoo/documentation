---
layout: post
title: "brainstorming session prior to setting out on gcs development"
name: "gcs-sketch"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-21-gcs-sketch.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "gcs jdlab brainstorm sketch tlog missionplanner mavproxy ardupilot"
summary: "Mon, Feb 21, 22, pool resources and ideas into one single gcs you can develop"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-02-21T17:13:09 +0900
updated: 2022-02-21 17:13
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## stm32 debugger tools
- [20-10ping-adapter](https://www.11st.co.kr/products/3203938140?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zS2ruvucoYHWOZCkYNUXqGGhE8QuLCsa-2YhtScPl5plKdheVR8onRoCbGAQAvD_BwE&utm_term=&utm_campaign=%B1%B8%B1%DB%BC%EE%C7%CEPC+%C3%DF%B0%A1%C0%DB%BE%F7&utm_source=%B1%B8%B1%DB_PC_S_%BC%EE%C7%CE&utm_medium=%B0%CB%BB%F6)
- [adapter-datasheet](https://www.farnell.com/datasheets/1683722.pdf)
- [debugger-seller](https://kr.element14.com/stmicroelectronics/st-link-v2/icd-programmer-for-stm8-stm32/dp/1892523?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zR5O790H8YRQRKfMU1WzH8Rqy-tvh97qBVTzUhHFHEP60f97wS5GMxoCVtsQAvD_BwE&mckv=_dc%7Cpcrid%7C519456541117%7Cpkw%7C%7Cpmt%7C%7Cslid%7C%7Cproduct%7C1892523%7Cpgrid%7C119732683897%7Cptaid%7Cpla-293946777986%7C&CMP=KNC-GKR-GEN-SMART-SHOPPING)
- [stlinkv2](https://www.digikey.com/htmldatasheets/production/825009/0/0/1/st-link-v2-user-manual.html#pff)
or [download](https://www.st.com/resource/en/user_manual/dm00026748-st-link-v2-in-circuit-debugger-programmer-for-stm8-and-stm32-stmicroelectronics.pdf)
### example blogs
This is a short writeup/tutorial on low-level debugging a Pixhawk with Ardupilot. It’s based on an issue discussed over at Build Library for Pixhawk 4 - serial outputs can't be displayed 11, where one of the code examples (UART_test) would cause a system crash of the flight controller.

The tutorial should work with any STM32-based flight controller that has a JTAG port (i.e. Pixhawk).

- Hardware Setup

Required Hardware:

Flight controller with JTAG port
ST-Link v2 7 with 10-pin adapter 4
The Flight controller may require a small plug 8 to solder on to the JTAG port.

Plug the flight controller and ST-Link to each other via the JTAG port (noting that the little notch on the JTAG connector points towards the SD card on the Pixhawk). Plug both devices’ USB cables to your computer.
![image](https://user-images.githubusercontent.com/42961200/155273086-4de85477-1735-4e80-b464-9bc0513ff2ae.png)

hardwaresetup
hardwaresetup.jpg
826×619 71.5 KB

- Software setup

A Linux system is recommended. Windows may be possible, but I’ve not tested that.
./ArduCopter.elf -h
It is assumed that the arm-gcc compiler has already been installed. If not, see http://ardupilot.org/dev/docs/building-setup-linux.html 6

[OpenOCD](https://openocd.org0 1 is to be installed next via this command:
`sudo apt-get install libusb-1.0-0-dev libusb-1.0-0 openocd`

OpenOCD (with the ST-Link) is the bridge between GDB and the STM32 microcontroller on the Pixhawk.

- Debugging UART_test

For this example, I used the UART_test 4 example (as of 13/11/2019)[github](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL/examples/UART_test). This example produced the system crash described below. This code is in `./ardupilot/libraries/AP_HAL/examples/UART_test`

Build and upload the debug variant of the UART_test example (noting that the --board may be different if you’re using a different board)
```
./waf configure --board=Pixhawk1-1M --debug --enable-asserts
./waf --target=examples/UART_test --upload
```
Before OpenOCD and GDB are run, their configuration files need to be copied to the build folder. Note that the build folder’s name is the same at the board’s name in the waf configuration above.

1 Go to the `./ardupilot/Tools/debug` folder
2 Copy openocd.cfg to `./ardupilot/build/Pixhawk1-1M/bin`
3 Copy `.gdbinit to ./ardupilot/build/Pixhawk1-1M/examples`
4 Edit ~/.gdbinit to have the following text: `set auto-load safe-path /`

Next open up two terminals to run openOCD and GDB.

`cd ./ardupilot/build/Pixhawk1-1M/bin`
`openocd`
openocd
openocd.png
743×523 74.6 KB
`cd ./ardupilot/build/Pixhawk1-1M/examples`
`arm-none-eabi-gdb ./UART_test `
gdb
gdb.png
737×518 93.9 KB
![image](https://user-images.githubusercontent.com/42961200/155274204-91fc1f24-b709-4916-a730-0150d1dd01aa.png)

The details of the system crash will be shown in GDB:
```
0x0800542e in HardFault_Handler ()
    at ../../libraries/AP_HAL_ChibiOS/system.cpp:94
94	    save_fault_watchdog(__LINE__, faultType, faultAddress);
Breakpoint 1 at 0x800549c: file ../../libraries/AP_HAL_ChibiOS/system.cpp, line 172.
Breakpoint 2 at 0x8005404: file ../../libraries/AP_HAL_ChibiOS/system.cpp, line 69.
Breakpoint 3 at 0x801d4cc: file ../../modules/ChibiOS/os/rt/src/chsys.c, line 19
```
Now, that’s just the watchdog handler. Let’s check the threads via the info threads command in GDB:

`  9    Thread 536952680 (Name: IOMCU, State: CURRENT) 0x080076fe in HardFault_Handler () at ../../libraries/AP_HAL_ChibiOS/system.cpp:94`
So there is something in the IOMCU thread that is causing the error.

Use the `i loc` command to view the code that, when executed, caused the crash:

```
  lr_thd = 0x800bae9 <AP_Logger::WriteV(char const*, char const*, char const*, char const*, char const*, std::__va_list, bool)+28>, 
  pc = 0x800ba5c <AP_Logger::msg_fmt_for_name(char const*, char const*, char const*, char const*, char const*)+8>, 
```
The IOMCU thread is trying to write to the logfile (AP_Logger) and encountering an error.

Looking back at the UART_test code, note that AP_Logger isn’t initialised anywhere. That’s why the system is crashing when trying to refer to a (non-existent) AP_Logger.

So, IOMCU assumes that there’s a valid AP_Logger. That’s fine for a full vehicle, but not the UART_test example.

We will edit IOMCU to check if there’s a valid logger first. Make the following changes to AP_IOMCU.cpp to check for AP_Logger befure trying to write:

```cpp
    if (now - last_log_ms >= 1000U) {
        last_log_ms = now;
        if (AP_Logger::get_singleton()) {
            AP::logger().Write("IOMC", "TimeUS,Mem,TS,NPkt,Nerr,Nerr2,NDel", "QHIIIII",
                               AP_HAL::micros64(),
                               reg_status.freemem,
                               reg_status.timestamp_ms,
                               reg_status.total_pkts,
                               total_errors,
                               reg_status.num_errors,
                               num_delayed);
        }
```
So we upload the changed firmware, debug again and see what happens…

```
Reading symbols from ./UART_test...done.
0x0800542e in HardFault_Handler ()
    at ../../libraries/AP_HAL_Ch./ArduCopter.elf -hibiOS/system.cpp:94
94	    save_fault_watchdog(__LINE__, faultType, faultAddress);
Breakpoint 1 at 0x800549c: file ../../libraries/AP_HAL_ChibiOS/system.cpp, line 172.
Breakpoint 2 at 0x8005404: file ../../libraries/AP_HAL_ChibiOS/system.cpp, line 69.
Breakpoint 3 at 0x801d4d8: file ../../modules/ChibiOS/os/rt/src/chsys.c, line 198.
(gdb) i loc
ctx = {
  r0 = 0x0, 
  r1 = 0x802c928, 
  r2 = 0x802c8e4, 
  r3 = 0x0, 
  r12 = 0x0, 
  lr_thd = 0x8008b39 <AP_Logger::WriteV(char const*, char const*, char const*, char const*, char const*, std::__va_list, bool)+28>, 
  pc = 0x8008aac <AP_Logger::msg_fmt_for_name(char const*, char const*, char const*, char const*, char const*)+8>, 
  xpsr = 0x21000000, 
  s0 = 0x55555555, 
  s1 = 0x55555555, 
  s2 = 0x0, 
  s3 = 0x55555555, 
  s4 = 0x55555555, 
  s5 = 0x55555555, 
  s6 = 0x55555555, 
  s7 = 0x55555555, 
  s8 = 0x55555555, 
  s9 = 0x55555555, 
  s10 = 0x55555555, 
  s11 = 0x55555555, 
  s12 = 0x55555555, 
  s13 = 0x55555555, 
  s14 = 0x55555555, 
  s15 = 0x55555555, 
  fpscr = 0x55555555, 
  reserved = 0x55555555
}
faultAddress = <optimized out>
(gdb) info threads
[New Thread 536923896]
[New Thread 536939280]
[New Thread 536906352]
[New Thread 536912640]
[New Thread 536907424]
[New Thread 536905280]
[New Thread 536910032]
  Id   Target Id         Frame 
  2    Thread 536923896 (Name: idle, State: READY) 0x080051a4 in _port_switch_from_isr ()
  3    Thread 536939280 (Name: apm_uart, State: WTOREVT) chVTIsArmedI (
    vtp=0x20010ac4) at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  4    Thread 536906352 (Name: apm_monitor, State: CURRENT) 0x0800542e in HardFault_Handler () at ../../libraries/AP_HAL_ChibiOS/system.cpp:94
  5    Thread 536912640 (Name: apm_timer, State: SLEEPING) chVTIsArmedI (
    vtp=0x2000a2c4 <_timer_thread_wa+2452>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  6    Thread 536907424 (Name: apm_rcin, State: SLEEPING) chVTIsArmedI (
    vtp=0x20008e64 <_rcin_thread_wa+916>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  7    Thread 536905280 (Name: apm_io, State: SLEEPING) chVTIsArmedI (
    vtp=0x200085fc <_io_thread_wa+2444>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  8    Thread 536910032 (Name: apm_storage, State: SLEEPING) chVTIsArmedI (
    vtp=0x20009894 <_storage_thread_wa+2452>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243

```
Another unchecked AP_Logger reference! This time in the apm_monitor thread.

We will make a similar edit to check if there’s a valid logger first. Make the following changes to `./libraries/AP_HAL_Chibios/Scheduler.cpp`:

```cpp
            if (AP_Logger::get_singleton()) {
                AP::logger().Write("MON", "TimeUS,LDelay,Task,IErr,IErrCnt,MavMsg,MavCmd,SemLine,SPICnt,I2CCnt", "QIbIIHHHII",
                                   AP_HAL::micros64(),
                                   loop_delay,
                                   pd.scheduler_task,
                                   pd.internal_errors,
                                   pd.internal_error_count,
                                   pd.last_mavlink_msgid,
                                   pd.last_mavlink_cmd,
                                   pd.semaphore_line,
                                   pd.spi_count,
                                   pd.i2c_count);
```
}
So we upload the changed firmware, debug again and see what happens…

```diff
Reading symbols from ./UART_test...done.
_idle_thread (p=0x0) at ../../modules/ChibiOS/os/rt/src/chsys.c:72
72	static void _idle_thread(void *p) {
Breakpoint 1 at 0x800549c: file ../../libraries/AP_HAL_ChibiOS/system.cpp, line 172.
Breakpoint 2 at 0x8005404: file ../../libraries/AP_HAL_ChibiOS/system.cpp, line 69.
Breakpoint 3 at 0x801d4e4: file ../../modules/ChibiOS/os/rt/src/chsys.c, line 198.
(gdb) i loc
No locals.
(gdb) info threads
[New Thread 536923896]
[New Thread 536939280]
[New Thread 536906352]
[New Thread 536912640]
[New Thread 536907424]
[New Thread 536905280]
[New Thread 536910032]
  Id   Target Id         Frame 
  2    Thread 536923896 (Name: idle, State: CURRENT) _idle_thread (p=0x0)
    at ../../modules/ChibiOS/os/rt/src/chsys.c:72
  3    Thread 536939280 (Name: apm_uart, State: WTOREVT) chVTIsArmedI (
    vtp=0x20010ac4) at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  4    Thread 536906352 (Name: apm_monitor, State: SLEEPING) chVTIsArmedI (
    vtp=0x200089cc <_monitor_thread_wa+812>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  5    Thread 536912640 (Name: apm_timer, State: SLEEPING) chVTIsArmedI (
    vtp=0x2000a2c4 <_timer_thread_wa+2452>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  6    Thread 536907424 (Name: apm_rcin, State: SLEEPING) chVTIsArmedI (
    vtp=0x20008e64 <_rcin_thread_wa+916>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  7    Thread 536905280 (Name: apm_io, State: SLEEPING) chVTIsArmedI (
    vtp=0x200085fc <_io_thread_wa+2444>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243
  8    Thread 536910032 (Name: apm_storage, State: SLEEPING) chVTIsArmedI (
    vtp=0x20009894 <_storage_thread_wa+2452>)
    at ../../modules/ChibiOS/os/rt/include/chvt.h:243

```
No crashes this time, so this UART_test should now run fine.

Finally, build and upload a non-debug version of UART_test:
```bash

./waf configure --board=Pixhawk1-1M
./waf --target=examples/UART_test --upload

```
And the expected output:
output
output.png
1168×399 43.9 KB
![image](https://user-images.githubusercontent.com/42961200/155274627-67677afa-5028-49f2-b75b-c610a32d2f36.png)

So, with the help of low-level debugging, UART_test is fixe

### afroflight board
![image](https://user-images.githubusercontent.com/42961200/155274959-c5734f7f-b667-42c0-9f3c-e5f9865cc8eb.png)


- pinouts on pcb
![image](https://user-images.githubusercontent.com/42961200/155275032-20d8c994-4bfe-4428-9088-172d6d37e499.png)

![image](https://user-images.githubusercontent.com/42961200/155275054-18a62397-f565-44e7-8a94-3237aafa60b7.png)

![image](https://user-images.githubusercontent.com/42961200/155275071-8522dfbb-e809-460a-a3e9-a5ba6f00d6d9.png)

- MDK-ARM 과의 연결

ARM KEIL 에서

Flash 메뉴 - Configure flash tools 클릭

Debug 탭 클릭 - ST-Link Debugger 선택
![image](https://user-images.githubusercontent.com/42961200/155275126-33063f46-eebf-4b98-85ca-5ae055e08c70.png)

![image](https://user-images.githubusercontent.com/42961200/155275136-ff298f7b-1a75-4c7c-bc3b-60ba39ca69a0.png)


## Old school years
![image](https://user-images.githubusercontent.com/42961200/154914920-8a817f4a-d5a8-4602-b599-75200ccbd30e.png)


![image](https://user-images.githubusercontent.com/42961200/154915126-bc1a9d07-f195-4ff4-b578-957920d5535b.png)

![image](https://user-images.githubusercontent.com/42961200/154915225-60e210e5-aec2-45fd-8613-5a36aa098715.png)


## Fixed Wing Landing

PX4 enables autopilot-controlled fixed-wing (FW) landing in [Missions](../flying/missions.md), [Land mode](../flight_modes/land.md), and [Return mode](../flight_modes/return.md). 

The landing logic has several phases, as shown below. In the first phase the vehicle will follow a fixed trajectory ([FW_LND_ANG](#FW_LND_ANG)) towards the ground. At the flare landing altitude ([FW_LND_FLALT](#FW_LND_FLALT)) the vehicle will start to follow a flare path (the curve is based on the value of [FW_LND_HVIRT](#FW_LND_HVIRT)).

![Fixed Wing - Landing Path](../../assets/flying/fw_landing_path.png)

The flare landing altitude is relative to the altitude that the FW vehicle "thinks" is ground level. In [Land mode](../flight_modes/land.md) the ground altitude is not known and the vehicle will use assume it is at 0m (sea level). Often the ground level will be much higher than sea level, so the vehicle will land in the first phase (it will land on the ground before it reaches the flare altitude).

In a mission, [Return mode](../flight_modes/return.md), or if the vehicle has a range sensor fitted then ground level can be accurately estimated and landing behaviour will be as shown in the preceding diagram.

Landing is further affected by the following parameters:

Parameter | Description
--- | ---
<span id="FW_LND_ANG"></span>[FW_LND_ANG](../advanced_config/parameter_reference.md#FW_LND_ANG) | Landing slope angle prior to flaring
<span id="FW_LND_HVIRT"></span>[FW_LND_HVIRT](../advanced_config/parameter_reference.md#FW_LND_HVIRT) | Virtual horizontal line/altitude used to calculate the flare trajectory.<br>This represents the sub-ground altitude that the flare-path curve asymptotically approaches.
<span id="FW_LND_FLALT"></span>[FW_LND_FLALT](../advanced_config/parameter_reference.md#FW_LND_FLALT) | Landing flare altitude (relative to landing altitude)
<span id="FW_LND_TLALT"></span>[FW_LND_TLALT](../advanced_config/parameter_reference.md#FW_LND_TLALT) | Landing throttle limit altitude (relative landing altitude). The default value of -1.0 lets the system default to applying throttle limiting at 2/3 of the flare altitude.
<span id="FW_LND_HHDIST"></span>[FW_LND_HHDIST](../advanced_config/parameter_reference.md#FW_LND_HHDIST) | Landing heading hold horizontal distance
<span id="FW_LND_USETER"></span>[FW_LND_USETER](../advanced_config/parameter_reference.md#FW_LND_USETER) | Use terrain estimate (ground altitude from GPS) during landing. This is turned off by default and a waypoint or return altitude is normally used (or sea level for an arbitrary land position).
<span id="FW_LND_FL_PMIN"></span>[FW_LND_FL_PMIN](../advanced_config/parameter_reference.md#FW_LND_FL_PMIN) | Minimum pitch during flare. A positive sign means nose up Applied once `FW_LND_TLALT` is reached
<span id="FW_LND_FL_PMAX"></span>[FW_LND_FL_PMAX](../advanced_config/parameter_reference.md#FW_LND_FL_PMAX) | Maximum pitch during flare. A positive sign means nose up Applied once `FW_LND_TLALT` is reached
<span id="FW_LND_AIRSPD_SC"></span>[FW_LND_AIRSPD_SC](../advanced_config/parameter_reference.md#FW_LND_AIRSPD_SC) | Min. airspeed scaling factor for landing. Comment: Multiplying this factor with the minimum airspeed of the plane gives the target airspeed the landing approach. `FW_AIRSPD_MIN x FW_LND_AIRSPD_SC`

[Tlog](https://ardupilot.org/planner/docs/common-mission-planner-telemetry-logs.html)

## sensor-selection
### Sensors

PX4-based systems use sensors to determine vehicle state (needed for stabilization and to enable autonomous control). The vehicle states include: position/altitude, heading, speed, airspeed, orientation (attitude), rates of rotation in different directions, battery level, etc.

The system *minimally requires* a gyroscope, accelerometer, magnetometer (compass) and barometer. A GPS or other positioning system is needed to enable all automatic [modes](../getting_started/flight_modes.md#categories), and some assisted modes. Fixed wing and VTOL-vehicles should additionally include an airspeed sensor (very highly recommended).

The minimal set of sensors is incorporated into [Pixhawk Series](../flight_controller/pixhawk_series.md) flight controllers (and may also be in other controller platforms). Additional/external sensors can be attached to the controller.

Below we describe some of the sensors. At the end there are links to information about [sensor wiring](#wiring).


<span id="gps_compass"></span>

### GPS & Compass

PX4 supports a number of global navigation satellite system (GNSS) receivers and compasses (magnetometers). 
It also supports [Real Time Kinematic (RTK) GPS Receivers](../gps_compass/rtk_gps.md), which extend GPS systems to centimetre-level precision.

:::note
[Pixhawk-series](../flight_controller/pixhawk_series.md) controllers include an *internal* compass. 
This *may* be useful on larger vehicles (e.g. VTOL) where it is possible to reduce electromagnetic interference by mounting the Pixhawk a long way from power supply lines.
On small vehicles an external compass is almost always required.
:::

We recommend the use of an external "combined" compass/GPS module mounted as far away from the motor/ESC power supply lines as possible - typically on a pedestal or wing (for fixed-wing).

Common GPS/compass hardware options are listed in: [GPS/Compass](../gps_compass/README.md).

![GPS + Compass](../../assets/hardware/gps/gps_compass.jpg)

## multiple gcs

You can attach multiple additional ground control stations to SITL from MAVProxy. The simulated vehicle can then be controlled and viewed through any attached GCS.

First use the output command on the MAVProxy command prompt to determine where MAVProxy is sending packets:

```bash
GUIDED> output
GUIDED> 2 outputs
0: 127.0.0.1:14550
1: 127.0.0.1:14551
```

This tells us that we can connect Mission Planner to either UDP port 14550 or 14551, as shown on the dialog below.
![image](https://user-images.githubusercontent.com/42961200/159879563-de5330c4-e21f-4cee-8869-669c9b655d00.png)

Mission Planner: Connecting to a UDPPort

Tip

We could connect APM Planner 2 to the remaining port. If we needed a third port, we could add it as shown:

```
GUIDED> output add 127.0.0.1:14553
```

Mission Planner can then be used to control the simulated vehicle in exactly the same way as though it were a real vehicle. We can reproduce the previous "takeoff-circle-land" example as shown below

1. Change to Guided mode, arm the throttle, and the takeoff
   1. Open the Flight Data screen and select the Actions tab on the bottom left. This is where we cna change the bmode and st commands.

![image](https://user-images.githubusercontent.com/42961200/159879594-58ab9d30-55a1-48d1-ac6f-6d41ad875cfb.png)


   2. Select Gudied in the mode selection list and then press the set Mode button
   3. Select the Arm/Disarm button
   4. Right click on the ma and select Takeoff. Then enter the desired takeoff altitude
![image](https://user-images.githubusercontent.com/42961200/159879636-fc05e1be-49c3-43ac-a871-e8abe75cbd61.png)


Takeoff must start within 15 seconds of arming, or the motors will disarm.

Change to CIRCLE mode on the Action tab and watch the copter circle on the map.

You can change the circle radius in the CONFIG/TUNING screen. Select Full Parameters List, then the Find button and search for CIRCLE_MODE. When you've changed the value press the Write Params button to save them to the vehicle.

When you're ready to land you can set the mode to RTL.

### Running SITL with a GCS without MAVProxy

It is also possible to interact with SITL without using MAVProxy at all using ArduCopter.elf (in the ArduCopter directory).

Run the file in the Cygwin Terminal, specifying a home position and vehicle model as shown below

```bash

hamis_000@XPS12ultra ~/ardupilot/ArduCopter
$ ./ArduCopter.elf --home -35,149,584,270 --model quad
Started model quad at -35,149,584,270 at speed 1.0
Starting sketch 'ArduCopter'
Starting SITL input
bind port 5760 for 0
Serial port 0 on TCP port 5760
Waiting for connection ....
```

The command output shows that you can connect to SITL using TCP/IP at port 5760.

In Mission Planner we first change the link type to TCP and then press the Connect button. Click through the remote host and remote Port prompts as these default to the correct values.
![image](https://user-images.githubusercontent.com/42961200/159879716-fc2b2af5-22c2-4ddb-80fa-89fbd74fabbe.png)



Mission Planner: Connecting toSITL using TCP

Mission Planner will then connect and can be used just as before.

Tip

ArduCopter.elf has other startup options, which you can use using the -h command line parameter:


```sh
./ArduCopter.elf -h
```

## GCS on android
- Telemetry viewer [home](http://www.farrellf.com/TelemetryViewer/)
- Skydroid FPV
- SmartAP GCS [home](https://sky-drones.com/)
- Skydroid GCS [download](https://github.com/aiegoo/documentation/blob/edit/resources/Skydroid_GCS_8.1.apk)

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

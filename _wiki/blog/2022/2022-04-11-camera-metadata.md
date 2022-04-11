---
layout: post
title: "adding GPS and IMU data to photos post flight"
name: "camera-metadata"
tags: [jdlab]
tagName: jdlab
permalink: 2022-04-11-camera-metadata.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "jdlab camera dslr slr metadata exif firmware gpho2"
summary: "Mon, Apr 11, 22, perform post processing of gps/imu data or develop camera firmware lib to infuse IMU from fc to exif metadata"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-04-11T13:32:28 +0900
updated: 2022-04-11 13:32
youtubeID: nGszTJCzSMk
youtubeID2: kT4zbvChs2g
youtubeID3: rhzkxKO-40c
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Workflow ideas
kT4zbvChs2g
![image](https://user-images.githubusercontent.com/42961200/162666950-67979d5b-ff72-4a12-8519-70045cc3b452.png)


### sentera camera metadata

```
System Timestamp (ns since boot)	AP Timestamp (ms since boot)	lat	lon	alt (m)	relative_alt (m)	vx (m/s)	vy (m/s)	vz (m/s)	hdg (deg)
103704661833	100777	35.6255216	128.360851	28.63	-0.091	0	0	0.01	175.3
103814731781	100875	35.6255216	128.360851	28.63	-0.093	0	0	0.01	175.29
103904196573	100977	35.6255216	128.360851	28.63	-0.094	0	0	0.01	175.3
104001914073	101078	35.6255216	128.360851	28.63	-0.093	0	0	0.01	175.3
```
## Plan
### Camera DSLR firmware
To project IMU data(position/lat/lon/alt/relative-alt Vx Vy Vz /heading) to exif Metadata of camera module

- output
Asacii, LDI, LAS, Exif-metadata


### Android App
To interface with the on-board camera module(samsung galaxy) to blend seamlessly with logging information with the FC IMU and GPS data

이부분은 좀더 조사가 필요합니다.

### Post-processing Windows App

To add aircraft trajectory workflow and produce various outputs as described in the pdf link above "Leica Workflow"

결론: 후처리를 통한 카메라 매타데이터와 GPS, IMU 데이타를 병합하는 솔루션은 GrafNav, IPAS Pro와 같이 작동하는 앱을 개발 하는 것은 가능 합니다. 아래 Leica_workflow의 내용에 사용법이 자세히 나와 있습니다.

## Gphoto2 Lib
ref links: [gphoto.org](http://www.gphoto.org/proj/libgphoto2/support.php), [Leica-workflow](http://home.iitk.ac.in/~blohani/LiDARSchool2008/Downloads/IndiaLecture11_LeicaWorkflow.pdf), [olliew_NTCamera](http://www.olliw.eu/storm32bgc-wiki/NT_Camera), [mavlink_camera](https://mavlink.io/en/services/camera.html)


결론: gphoto2 라이브러리를 사용하는 기능은 Image Capture, Liveview, Configuration, Trigger-capture와 같은 카메라 작동과 카메라 설정 관련된 기능을 제공하도록 하는 것입니다. 이를 활용하여 만든 NT camera는 NT IMU모듈을 연결했을 때 GCS와 조정기 RC를 통해 위 4가지 기능을 제공 한다는 것입니다. (아래 첫번째 유튜브 참고) 

결론은 IMU를 탑재한 카메라 모듈을 개발 하거나 FC와 통신 하도록 하는 방법입니다. (고려사항 gps = 1 Hz, IMU = 200 Hz)

단, olliw.eu 링크의 맨 아래 씨리얼 API를 통해 시리얼 데이타 라인 응용 부분인데, 설명에는 카메라와 Raspi와의 통신을 가능 케 한다는 것으로 단순한 카메라 기능에 제한 되는 것인지, 제한되더라도 메타uorb 데이터만 불러서 (extract) IMU 데이타를 추가해 위의 센트라 카메라 데이타의 예시처럼 할 수 있는 지 여부는 좀더 알아 봐야 할 부분입니다.


<hr>

{{site.data.alerts.hr_shaded}}


[NT_camera](http://www.olliw.eu/storm32bgc-wiki/NT_Camera)

{% include youtubePlayer.html id=page.youtubeID %}

```diffuorb
1:40
food it's you a port to this NT IMU and
1:44
this gives you a couple of options for
1:47
example you can start and stop the video
1:48
of course but you also can now access
1:51
the on-screen display the OSD menu
1:55
```

### Serial API
The “Serial Api” is a special camera model, designed to inter-operate with an external computing device, such as a Raspberry Pi, Arduino, and alike, via a serial data line (in the following the example of a Raspberry Pi, denoted as RPi, is chosen). The prototypical application example would be to integrate gphoto-controlled cameras into the STorM32 system.

The RPi is connected to the UART on the STorM32 controller which is selected in the parameter Camera ComPort. The serial API camera model then provides a set of commands to exchange information between the STorM32's NT Camera functionality and the RPi. On the RPi a script is running which handles the communication, i.e., translates the commands of the serial API into the corresponding actions needed for the specific camera which shall be operated, and vice versa.

In the [GUI:Functions] tab set as follows:

```
Camera Model = “Serial Api”
Camera ComPort: Select the UART (“default” is currently not supported)
```
The serial API currently consists of the following:

"shutter\n", "videoon\n", "videooff\n": These commands correspond to the STorM32's internal SHUTTER, VIDEOON and VIDEOOFF states, and are send whenever the respective state is assumed. This can be via an input as selected in the parameter Camera Control, a serial command, a MAVLink command, or via the MAVLink Camera microservice.

"cntrl2high\n", "cntrl2low\n", "cntrl2stop\n": These commands are send according to the state of the input selected in the parameter Camera Control2.

SENDCAMTEXT: This script command sends a user-defined string to the RPi (the string is appended by a '\n' character). This allows us to use the potential of scripts for controlling the camera handled by the RPi.
An example Python script which can be run on a RPi is available in the firmware .zip file.

### UartX Configuration
The number of available UART ports on STorM32 boards is limited, especially on v1.3 boards, and it can thus happen that one is running out of them.

In such cases, the RC-0 and RC-1 input pins can be reconfigured to work as a further UART port, then named UARTX. This comes at the obvious cost that these inputs cannot be used anymore as PWM, Spektrum, SBus, and alike inputs.

For this, set:

UartX Configuration = “uartX @ 115200” (the parameter is located in the [GUI:Setup] tab)
Camera ComPort = “uartX”
The physical assignment is

RC-0 = UARTX Rx
RC-1 = UARTX Tx
For the location of the RC-0, RC-1 pins on your board please refer to Pins and Connectors.


1:59
namely that math link has what we call a
2:03
camera manager which provides you
```
![image](https://user-images.githubusercontent.com/42961200/162684196-c4e1df2c-597d-439f-adf2-733eec1c4e9b.png)

{% include youtubePlayer.html id=page.youtubeID2 %}

```
5:31
configuration but you can use the whole
5:33
thing standalone but as you can use such
5:35
a system that's such a strong gimbal
5:39
controller and Wi-Fi module to convert
5:42
your camera to a full-fledged muffling
5:45
camera and this works also for for that
```
![image](https://user-images.githubusercontent.com/42961200/162684289-64a652ae-37fd-4d1b-80e2-c3e8c8819776.png)

{% include youtubePlayer.html id=page.youtubeID3 %}
### NT camera parameters
The NT Camera is related to a number of parameters, which are located in two places in the GUI, the [GUI:Functions] tab and the [GUI:Interfaces Tool] dialog.

In the [GUI:Functions] tab we see:

Camera Control: Enables the function and selects the primary input.
Camera Control2: Selects a secondary input, which is used by some camera models.
Camera Model: Selects the camera model.
Camera Control Mode: Functions executed then the primary input value is High or Low. The default is “video - off - shutter” (usually does not need to be changed).
Camera Time Interval: Setting this to 0 (off) will result in one photo being taken. If set to other than 0 photos will be taken continuously. The time period is from the start of the first photo to the start of the second photo, and so on. This parameter is functional for all camera models, and not further discussed below.
Camera ComPort: Selects the UART port for camera models which use a serial interface.
In the [GUI:Interfaces Tool] dialog, accessible via the [GUI:Experts Only] menu, one finds further relevant parameters, which are associated with the MAVLink Gimbal and MAVLink Camera components:

Mavlink Gimbal: Enables the MAVLink Gimbal component and sets its component ID.
Mavlink ComPort: Selects the com port used for the MAVLink communication.
Mavlink System ID: Sets the system ID for both the MAVLink Gimbal and Camera components. A value of “0” enables autodetection.


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

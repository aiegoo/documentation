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
### dji metadatakT4zbvChs2g
![image](https://user-images.githubusercontent.com/42961200/162670385-16cd91f4-1d34-42dc-8712-9f691e52bca2.png)

- Autel
![image](https://user-images.githubusercontent.com/42961200/162670487-bbd7beec-7958-44eb-bb03-2131c58c45e6.png)

## Plan
### Camera DSLR firmware
To project IMU data(position/lat/lon/alt/relative-alt Vx Vy Vz /heading) to exif Metadata of camera module

- output
Asacii, LDI, LAS, Exif-metadata


### Android App
To interface with the on-board camera module(samsung galaxy) to blend seamlessly with logging information with the FC IMU and GPS data


### Post-processing Windows App

To add aircraft trajectory workflow and produce various outputs as described in the pdf link above "Leica Workflow"


## Gphoto2 Lib
ref links: [gphoto.org](http://www.gphoto.org/proj/libgphoto2/support.php), [Leica-workflow](http://home.iitk.ac.in/~blohani/LiDARSchool2008/Downloads/IndiaLecture11_LeicaWorkflow.pdf), [olliew_NTCamera](http://www.olliw.eu/storm32bgc-wiki/NT_Camera), [mavlink_camera](https://mavlink.io/en/services/camera.html)


결론: gphoto2 라이브러리를 사용하는 기능은 Image Capture, Liveview, Configuration, Trigger-capture와 같은 카메라 셋팅과 카메라 작동과 관련된 기능을 제공하도록 하는 것입니다. rhzkxKO-40c이 라이브러리를 활용하여 만든 NT camera는 NT IMU모듈을 연결했을 때 GCS와 조정기 RC를 통해 위 4가지 기능을 제공 한다는 것입니다. (아래 첫번째 유튜브 참고)

[NT_camera](http://www.olliw.eu/storm32bgc-wiki/NT_Camera)

{% include youtubePlayer.html id=page.youtubeID %}

```diff
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
through the transmitter sticks and then
1:58
there's an additional cool feature
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

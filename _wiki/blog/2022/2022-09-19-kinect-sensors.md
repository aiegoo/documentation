---
layout: post
title: "kinect hardware specs and applications"
name: "kinect-sensors"
tags: [kinect]
tagName: kinect
permalink: 2022-09-19-kinect-sensors.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "kinect kinectdk sensors xr-motion setup azure"
summary: "Mon, Sep 19, 22, kinect hardware specifications, installation and application"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-09-19T13:43:39 +0900
updated: 2022-09-19 13:43
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

##  references

### my linux

> 미니 데스크탑 워크스테이션 / HP Z2 MINI G3 RAM 32GB
> 
> NVIDIA Quadro M620이 내장된 퍼포먼스 타입
> 
> ​​
> 
> CPU : Xeon E3-1245 V5 ( 4 Core 8 Thread , 3.5GHz /Turbo 3.9GHz )
> 
> RAM : 32GB ( 16GB PC4-2666V X 2EA )
> 
> SSD : 삼성 NVMe SM961 4 tera ( MLC , Samsung MZVKW512HMJP-00L7 )
> 
> HDD : 250g
> 
> VGA : NVIDIA Quadro M620
> 
> ​아답터 : HP 정품 200W 아답터
> 
> 윈도우즈 10 정식 라이센스

Required Specs • 64-bit (x64) processor • Physical dual-core 3.1 GHz processor or faster (recommended i7)

### my windows laptop

MSI 장치 이름	xr-aiegoo
Process	11th Gen Intel(R) Core(TM) i7-11800H @ 2.30GHz   2.30 GHz
Installed RAM	16.0GB(15.7GB 사용 가능)
System type	64bit, x64
graphic: Nvidia GTX 3060 8G GDDR6

### kinect dk

[Kinect_dk](https://azure.microsoft.com/en-us/services/kinect-dk/)

![Image](https://user-images.githubusercontent.com/42961200/187614825-58202f94-2170-4d0f-a7fd-b71cdcda87dd.jpg)

### kiect v1 for windows 

Software Requirements • You will need Visual Studio 2012 or newer. This includes the Express and Community flavors. This does not include Visual Studio Code. I personally use Visual Studio Enterprise 2015 (with Update 2), and the examples have been tested with such. You can download a free copy of Visual Studio at https://www. visualstudio.com/en-us/products/visual-studio-community-vs.aspx. • You will need the Kinect for Windows SDK 2.0. You can download it at https://developer.microsoft.com/en-us/windows/kinect.
![Image](https://user-images.githubusercontent.com/42961200/187177096-ef82d2a4-59fe-4f26-874e-d782951c1482.jpg)

## Kinect Unity Packages

### sdks

#### About Azure Kinect Sensor SDK
[github_src](https://github.com/aiegoo/xr-Azure-Kinect-Sensor-SDK)

> Beginning Kinect Programming with the Microsoft Kinect SDK

This article provides an overview of the Azure Kinect Sensor software development kit (SDK), its features, and tools.

#### Features

The Azure Kinect Sensor SDK provides cross-platform low-level access for Azure Kinect device configuration and hardware sensors streams, including:

- Depth camera access and mode control (a passive IR mode, plus wide and narrow field-of-view depth modes) 
- RGB camera access and control (for example, exposure and white balance) 
- Motion sensor (gyroscope and accelerometer) access 
- Synchronized Depth-RGB camera streaming with configurable delay between cameras 
- External device synchronization control with configurable delay offset between devices 
- Camera frame meta-data access for image resolution, timestamp, etc. 
- Device calibration data access 

#### Tools

- An [Azure Kinect viewer](azure-kinect-viewer.md) to monitor device data streams and configure different modes.
- An [Azure Kinect recorder](azure-kinect-recorder.md) and playback reader API that uses the [Matroska container format](record-file-format.md).
- An Azure Kinect DK [firmware update tool](azure-kinect-firmware-tool.md).

### Sensor SDK

- [Download Sensor SDK](sensor-sdk-download.md).
- The Sensor SDK is available in [open source on GitHub](https://github.com/microsoft/Azure-Kinect-Sensor-SDK).
- For more information about usage, see [Sensor SDK API documentation](https://microsoft.github.io/Azure-Kinect-Sensor-SDK/master/index.html).


## azure kinct
25 points of rigging info is now providing 32 points of position 

## issues



![Image](https://user-images.githubusercontent.com/42961200/187845476-f6ebcfc5-9ba9-4df0-990a-e3b4ab17a9b2.png)
![Image](https://user-images.githubusercontent.com/42961200/187845477-25937d28-5fdc-49ba-aba1-025130d62302.png)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

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
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Workflow ideas


[leica_workflow](https://github.com/aiegoo/uas-reference/blob/master/drone-dev/camera_metadata.pdf)

![image](https://user-images.githubusercontent.com/42961200/162666950-67979d5b-ff72-4a12-8519-70045cc3b452.png)


### sentera camera metadata

```
System Timestamp (ns since boot)	AP Timestamp (ms since boot)	lat	lon	alt (m)	relative_alt (m)	vx (m/s)	vy (m/s)	vz (m/s)	hdg (deg)
103704661833	100777	35.6255216	128.360851	28.63	-0.091	0	0	0.01	175.3
103814731781	100875	35.6255216	128.360851	28.63	-0.093	0	0	0.01	175.29
103904196573	100977	35.6255216	128.360851	28.63	-0.094	0	0	0.01	175.3
104001914073	101078	35.6255216	128.360851	28.63	-0.093	0	0	0.01	175.3
```
### dji metadata
![image](https://user-images.githubusercontent.com/42961200/162670385-16cd91f4-1d34-42dc-8712-9f691e52bca2.png)

- Autel
![image](https://user-images.githubusercontent.com/42961200/162670487-bbd7beec-7958-44eb-bb03-2131c58c45e6.png)



{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

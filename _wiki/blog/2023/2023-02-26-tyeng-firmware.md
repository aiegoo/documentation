---
layout: post
title: "smart farming interface development based on arduino and quasar frameworks"
name: "tyeng-firmware"
tags: [arduino]
tagName: arduino
permalink: 2023-02-26-tyeng-firmware.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "arduino quasar vuejs project tyeng smartfarming"
summary: "Sun, Feb 26, 23, creating  a sample arduino project with a freelancer for smart farming basics"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2023-02-26T13:58:40 +0900
updated: 2023-02-26 13:58
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Firmware development project

[dashboard-homeServer](https://cloud.d.tyeng.com/homeServer) ==> http://193.168.100.221:1880/ for node red flow

[devenv-manual](https://docs.google.com/document/d/1tggv7zFhxVdfxmzvlKc6VOIWw3_sbGHY/edit?usp=sharing&ouid=104319167489507060997&rtpof=true&sd=true)
- for PCs,
1. Download and install Node package manager
2. Install Node Red `npm install -g --unsafe-perm node-red`
3. For node red install errors, set the Windows policy as in `Set-ExecutionPolicy RemoteSigned`
4. Install Proteus Professional as design suite [download](https://getintopc.com/)
5. Change permission privilieges for the folder and its subfolders to all privileges
6. Paste Arduino libraries into Data>Library and reopen the app to check if Arduino is visible
7. Install Arduino IDWE [download](https://www.arduino.cc/en/software) 

```php
방화벽을 허용한다.
아래의 'Programmer', 'Board Type', 'Serial 포트'를 차례로 설정한다.

ssh -p 2020 tynode@git.tyeng.com 
접속이 되는 지 확인 한다

```

8. Download dev source codes

```bash
git clone ssh://tynode@git.tyeng.com:2020/var/www/repo/tynode/arduinoRS485 \
git clone ssh://tynode@git.tyeng.com:2020/var/www/repo/tynode/fritzingProMini \
git clone ssh://tynode@git.tyeng.com:2020/var/www/repo/tynode/proteusRS485


```

9. Run the sample codes as in the devenv manual of this link.





[Android-rooting](https://docs.google.com/document/d/1ZGIil_HcZH8uR04XMYPQGnuOb_DqEiyfLPGqXYMv-Tc/edit?usp=sharing)

[control-manual](https://docs.google.com/document/d/1XLrqfBwII8xsLzYauRNsHB1o55Wr_3smxFpO9MztQYg/edit?usp=sharing)

[android-app](https://docs.google.com/presentation/d/158i3_c5WLq6u1mWdaq_PP_chTDV16TlPEXw1O-EYHk8/edit?usp=sharing)

[nh3sensor](https://docs.google.com/presentation/d/1beE3MteYxADoocpdPx1iCHMCXytXaU2osVztvCGpruE/edit?usp=sharing)

[node-dev](https://docs.google.com/presentation/d/1qBynD7hlLLe5XPuCTbKcasAS3--BkBiIbnG9ycpKybs/edit?usp=sharing)

[ivrs](https://docs.google.com/presentation/d/1BvEHbHBEI6bE7Qll0RemD1yDxuc0IvC-9UIpLsmTRDY/edit?usp=sharing)


## project overview
![image](https://user-images.githubusercontent.com/42961200/221393788-af317343-1f05-4578-a73a-74fa2c38228d.png)

![image](https://user-images.githubusercontent.com/42961200/221393805-9b513119-dee7-45fd-9c8f-c43017b110f7.png)

- NH3sensor module script for ammonia and other perception layer
[github](https://github.com/aiegoo/tyeng)


## hardware

- GSM ESP32
![ali-exp32](https://user-images.githubusercontent.com/42961200/221393719-d994391c-1207-4302-8224-d09cedcdf96c.png)
![image](https://user-images.githubusercontent.com/42961200/221393743-c7c19e6e-1a8f-49f4-9358-dc99bdd74457.png)

```diff
ESP32 Dev module
GSM 4G Module
Thermometer + Humidity module (AHT10/20)
LCD display I2C or SPI (16x2 or Graphical LCD)
Push Buttons
Relay Module (12v or 5v)
Current sensor (ACS712)
Lithium battery if ESP module support
```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

---
layout: post
title: "udemy 4g drone"
name: "java-sitl"
tags: [drones]
tagName: drone
permalink: java-sitl.html
sidebar: other_sidebar
folder: mydoc
collection: wiki
categories: school
keywords: "java sitl drone gcs python cplus"
summary: "Sun, Nov 28, 21, udemy 4g java drone simulator"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-28T16:10:51 +0900
updated: 2021-11-28 16:10
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## udemy

{:.note}
to make the control deployed on to the car and  make the software actually connected to the car's CAN bus and take control of the car is also non trivial. Same for the drone, I liked the course content, So just a bit feedback, if the hardware configuration could be included(the practical part) to make the code to run on the actual drone.

### Goals

> What you’ll learn

    - Build Low Latency Cloud App to Operate DIY Drones From Anywhere in the World
    - How to Control Drone with Python Application running on a Raspberry Pi
    - Connecting Multiple Python Applications to a Single Remote Java App
    - Managing Data Concurrently from Many Python Applications
    - Low Latency Video Streaming from Raspberry Pi to a Web Page
    - How to Have Many Active Video Streams on a Single Web Page
    - Use Protobuf in Network Communication between Java and Python Applications
    - How to Build Single Page JavaScript Application only with JQuery
    - How to Control Simultaneously Many DIY Drones From a Single Web Page
    - Using Google Maps API to Setup and Read Mission Data From a User
    - Real Time Data Visualization From the Drones on the Interactive Map
    - Use Spring Boot MVC to build Application For 4G Drone Control
    - Multithreading Application Design in Java
    - Multithreading Application Design in Python
    - Distributed Application Design
    - What are Design Requirements for a Cheap DIY 4G Drone
    - Python Dronekit Library for MavLink Communication with Autopilot

- course contents

|---
| Introduction | DIY drone hardware overview control demo
| Video steaming and front-end control | Environment setup
| Raspi hardware/network setup | Java initial app layout
| Java logging setup async | Python initial app layout
| raspi as linux service | Configuration reader setup
| video streaming app | Html video page
| js video stream client | java home controller video endpoint
| Java configuration reader | java web-socket config
| Java Video stream manager 1 2 3 | App overview demo
| Drone control center html | java backend endpoint
| js usage | js app initialization
| js update system data | Java drone info dto
| Js loading drone data | js frontend drone abstraction
| js adding a position marker | Js drone control intializer keyboard mapping
| js rendering map point | Js UI component lib
| css | java update system endpoint with mock data
| Java mission command end point | Js adding video stream to ui control
| Java rest controller functionality | java control manager server socket
| Java dronehandler init | java dronehanlder network message sd/rv thread
| Java droneHandler reading latest data | Protobuf
| Java datamapper transforming protobuf object to domain logic objects
| Java implementing network messaging protocol | Java backend application
| Java backend application | Python overview
| Python bootsraping initial app | Python Network connection monitoring
| Python data receiver thread | Python drone object vehicle abstraction
| Python network messages encoding | Python drone control panel object
| Python maintaining constant speed and direction | Python camera serve controlling thread
| Python camera server control | Python finished application logic
| Final result full distributed application | realworld flight demo

### Some of my land/air vehicle projects

- VTOL **Portal of vtol codebase** [repowiki](https://github.com/aiegoo/_mydrone-ROS-packages/wiki)
- Advanced ND project **UAV gui** [repo](https://github.com/aiegoo/_mydrone)
- GCS ground control station **GCS codebase** [repo](https://github.com/aiegoo/_mydrone-scripts) 
- RVIZ simuator **C++ GAZEBO** [repo](https://github.com/aiegoo/road_detection)
- Computer vision **Road Detection** [repo](https://github.com/aiegoo/Proj_road_detection-)
- Raspberry Pi project **LORA and sensors** [repo](https://github.com/aiegoo/django-raspi) or [here](https://github.com/aiegoo/raspi-source)
- ***Documentation site for matlab*** [click_here](https://pf3.36io.co/books_rflyintroduction.html)

> interface architecture excluding the endpoints for hardwares

![image](https://user-images.githubusercontent.com/42961200/144000697-24bac20e-52d8-4b06-91fb-337cf2d962b4.png)

### code example

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.ui.Model;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
public class BaseController {

    private final ConfigReader configurations;

    @GetMapping("/")
    public String IndexPage(){

       log.debug("opened index page");
        return "index";
    }

    @GetMapping("/v/{droneId}")
    public String getVideoFeed(Model model, @PathVariable("droneId") String droneId){

        model.addAttribute("publicIp", getPublicIpAddress());
        model.addAttribute("droneId", droneId);
        model.addAttribute("videoEndpoint", configurations.getVideoWsEndpoint());


        return "video";
    }

    private String getPublicIpAddress() {
        String ip = "";
        try {
            final URL whatismyip = new URL("http://checkip.amazonaws.com");

            try(final BufferedReader in = new BufferedReader(new InputStreamReader(whatismyip.openStream()))){
                ip = in.readLine();
            }
            } catch (Exception e) {
                log.error(e.getMessage());
            }
            return ip;

    }
}
```

- raspi lib

```shell
sudo apt update
sudo apt install libhdf5-dev
sudo apt install libhdf5-serial-dev
sudo apt install libatlas-base-dev
sudo apt install libjasper-dev
sudo apt install libqtgui4
sudo apt install libqt4-test
sudo apt install python3-opencv


sudo pip3 install netifaces psutil google-api-python-client \

```

- SITL setup envs

```bash
Environment Setup:

- Install VirtualBox and spinn Ubuntu 16.04 in it

- On first start run:
  sudo apt update && sudo apt upgrade
  sudo apt install virtualbox-guest-dkms
  And only after that click Insert Guest Addons CD

- Install Git
  sudo apt-get install git
  sudo apt-get install gitk git-gui

- Get the project
  git clone --recursive https://github.com/ArduPilot/ardupilot.git
  cd ardupilot

- Install required packages
  Tools/environment_install/install-prereqs-ubuntu.sh -y
  . ~/.profile

- Cofigure the board and build vehicle type
  ./waf configure --board fmuv3
  ./waf copter

- Go to ArduCopter directory and run simulator
  cd ArduCopter
  sim_vehicle.py --console --map --out 192.168.0.101:14553

More detailed information from:
    https://ardupilot.org/dev/docs/building-setup-linux.html#building-setup-linux





When you decide to deploy finished Java application - build it, deploy it on a VPS [or any machine with public IP]

and then run it with this command in terminal:

java -Djava.security.egd=file:/dev/urandom -jar drone-control-station-0.0.1.jar &

Wait until it starts, and then you can close the terminal and it will continue to run in the background

```

- how to deploy java app

```shell
When you decide to deploy finished Java application - build it, deploy it on a VPS [or any machine with public IP]

and then run it with this command in terminal:

java -Djava.security.egd=file:/dev/urandom -jar drone-control-station-0.0.1.jar &

Wait until it starts, and then you can close the terminal and it will continue to run in the background
```

```yml
// Create droneapp.service file with this content:


[Unit]
Description=DroneApp Service
After=multi-user.target

[Service]
Type=idle
ExecStart=/usr/bin/python3 /home/pi/{app directory name}/app.py --d /home/pi/{app directory name}/

[Install]
WantedBy=multi-user.target


{app directory name} should be replaced with the name of the folder that contains app.py main application file


Then nn RaspPi move droneapp.service to /lib/systemd/system/

Then Run

sudo systemctl daemon-reload

sudo systemctl enable droneapp.service


If you want to stop it from autoloading on Raspi startup, Run:

sudo systemctl disable droneapp.service
```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

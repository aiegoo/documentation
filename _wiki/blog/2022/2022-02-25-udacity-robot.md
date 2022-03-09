---
layout: post
title: "udacity robot software engineer nano course"
name: "udacity-robot"
tags: [ros]
tagName: ros
permalink: 2022-02-25-udacity-robot.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "ros gazebo udacity rviz"
summary: "Fri, Feb 25, 22, udacity robot software engeering"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-02-25T12:14:34 +0900
updated: 2022-02-25 12:14
youtubeID: tZPgjFSu1Jk
youtubeID2: DiD13auPObw
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

[![Udacity - Robotics NanoDegree Program](https://s3-us-west-1.amazonaws.com/udacity-robotics/Extra+Images/RoboND_flag.png)](https://www.udacity.com/robotics)

# Udacity Nanodegree: Robotics Software Engineer

## Concept
video 1 concept
{% include youtubePlayer.html id=page.youtubeID %}

```cplus
00:00
Robots perceive the world around them through the use of sensors.
00:04
You can think of robot sensors as analogous to
00:07
our human senses like sight, hearing, and touch.
00:12
There are many different types of sensors used in robotics.
00:16
Robots eyes might be analogous to cameras,
00:19
lidar, radar, or even ultrasound.
00:23
A microphone could be a robot's ears.
00:27
Giving a robot a sense of touch might be
00:29
achieved through the use of temperature or pressure sensors.
00:33
Even senses like taste and smell can be achieved using chemical analyzers.
00:39
Robots can also be equipped with sensors that have
00:42
no human analogue like GPS to establish exact position on earth,
00:47
a barometer to track altitude,
00:49
or even a magnetic field sensor with actinic.
00:52
In this program, you will gain experience with
00:55
a wide range of sensor modalities and sensor data.
```


video decision making the sensor
{% include youtubePlayer.html id=page.youtubeID2 %}

```cplus
00:00
A robot needs to make decisions based on
00:03
the data from various sensors and its own internal state.
00:07
These decisions can be as simple as answering yes or no question.
00:12
Like is the target object present on the table?
00:15
Or the decisions can be extremely
00:17
complex like deciding how to navigate an unknown environment.
00:21
In practice however, the decision-making process in robotics can require answering
00:26
many questions to decide on one course of
00:28
action from among potentially infinite possibilities.
00:32
Along the way, sophisticated techniques might be used.
00:36
For example, special tools can extract information
00:39
from images or compensate for a measurement error.
00:43
A robot needs to using
00:44
motion planning algorithm to decide how to get from one place to another.
00:49
Then, using a control algorithm to stay on track.
00:52
In this program, we'll cover
00:54
decision-making techniques to give your robots the best brains possible.
```

## Project 01: Build My World

### Directory Structure
```
. Build_my_world                  # Workspace directory
├── CMakeLists.txt
├── docs                          # Results and notes
│   ├── my_world.png
│   ├── notes
│   └── with_output.png
├── LICENSE
├── model
│   ├── metal_hawk               # Model of robot
│   │   ├── model.config
│   │   └── model.sdf
│   └── my_building              # Model of environment
│       ├── model.config
│       └── model.sdf
├── README.md
├── script
│   └── welcome_message.cpp      # Gazebo World plugin C++ script
└── world
    └── my_world                 # Gazebo main World containing models

```

### Steps to launch the simulation

#### Step 1 Update and upgrade the Workspace image
```sh
$ sudo apt-get update
$ sudo apt-get upgrade -y
```

#### Step 2 Clone the lab folder in /home/workspace/
```sh
$ cd /home/workspace/
$ git clone git@github.com:Suraj0712/Build_my_world.git
```

#### Step 3 Compile the code
```sh
$ cd /home/workspace/Build_my_world/
$ mkdir build
$ cd build/
$ cmake ../
$ make
```

#### Step 4 Add the library path to the Gazebo plugin path
```sh
$ export GAZEBO_PLUGIN_PATH=${GAZEBO_PLUGIN_PATH}:/home/workspace/Build_my_world/build
```

#### Step 5 Run the Gazebo World file
```sh
$ cd /home/workspace/Build_my_world/world/
$ gazebo my_world
```


### Output
![alt txt](docs/with_output.png)

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

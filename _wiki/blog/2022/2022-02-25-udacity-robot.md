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
youtubeID3: CUdc3CACoyg
youtubeID4: tCo-jEAcAtc
youtuebID5: urpcfbmJwO0
youtubeID6: urpcfbmJwO0
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

## Lesson2

### setup overview

- Build Robots with ROS
Building a robot used to be a long and cumbersome process. Essentially all of the components had to be built from scratch.

In this lesson, we’ll introduce the Robot Operating System, or “ROS”, which is a software framework that greatly simplifies robot development. There are many advantages to developing robots with ROS. Let’s start by illustrating some of its components and features.
![image](https://user-images.githubusercontent.com/42961200/157998700-d3e2c730-56c3-426d-b14f-0043f36d2f3e.png)

![image](https://user-images.githubusercontent.com/42961200/157998953-851a4418-71a0-4966-b80a-99ef74e9a431.png)

![image](https://user-images.githubusercontent.com/42961200/157998987-c89119f4-74c6-4ad2-b577-b0ce17fcbb03.png)

![image](https://user-images.githubusercontent.com/42961200/157999150-e91156ca-295c-4d00-b42a-958f614e169e.png)

![image](https://user-images.githubusercontent.com/42961200/157999404-3d0f1fcf-9213-4424-ad43-b6946938e184.png)

- Components and Features
ROS is an open-source software framework for robotics development. It is not an operating system in the typical sense. But like an OS, it provides a means of communicating with hardware. It also provides a way for different processes to communicate with one another via message passing. Lastly, ROS features a slick build and package management system called catkin, allowing you to develop and deploy software with ease. ROS also has tools for visualization, simulation, and analysis, as well as extensive community support and interfaces to numerous powerful software libraries.

- Summary
Summary of ROS components and features:

- Open-source!
Hardware abstraction of device drivers
Communication via message passing
Slick build and package management
Tools for visualization, simulation, analysis
Powerful software libraries
Short Documentary
Check out this awesome short documentary on ROS that Bloomberg published recently.

History
Before diving deeper, let’s take a brief tour of the history of ROS.
![image](https://user-images.githubusercontent.com/42961200/158000571-81cc8bac-a286-48e0-b52b-ca6678020a17.png)

### tutlesim
More on the history of Turtles in Robotics
As we mentioned in the video, William Grey Walter's influence is still felt today. He referred to his robots as 'turtles' and, as you will see, the moniker stuck.

The image below is William Walter's Elsie (the robot mentioned in the video) without her protective covering.


![image](https://user-images.githubusercontent.com/42961200/157999885-d54d0175-bc04-47ac-86b8-09cd190cc2e5.png)
Long after William Walter’s work with Elmer and Elsie, Dr. Seymour Papert, a professor at MIT, began to use turtle robots for education. One of the characteristics of Papert's robots was their ability to draw on paper.

In addition to being involved with the creation and development of MIT’s turtle robots, Dr. Papert is also known as the creator and evangelist for the educational programming language LOGO.

Despite being a general-purpose language, LOGO is known for its use of “turtle graphics”, a system that allows users to draw by sending simple commands to a robotic turtle. The robotic turtle mentioned here could be either a real turtle robot, or a virtual on-screen cursor within the LOGO programming environment.

The image below shows an example of Valiant Technology’s Turtle robot drawing on a sheet of paper.

![image](https://user-images.githubusercontent.com/42961200/157999915-ee61a5a5-a436-40e3-8cff-55db587a97e1.png)

![image](https://user-images.githubusercontent.com/42961200/157999937-452cde4a-babf-431d-a185-bcdcd16cdb66.png)


### project setup
Environment Setup
Before we begin using ROS in a terminal, we must first ensure that all of the environment variables are present. To do this, we must source the setup script provided by ROS


Caveat
Make sure you use the bash command source rather than ./. There’s a subtle distinction between the two commands, in that source executes the script in the current session, while ./ will start a new session, containing a copy of the current environment. When a script executed via ./ is exited, all environment variables set by it will be lost. We don’t want this. For more information on environment variables and terminal sessions, please see here.

Automatically Configuring the Environment
Setting up the ROS environment every time you open a new terminal window can be painful and tedious. To avoid the tedium, we can simply add the command to source the workspace to our ~/.bashrc file. This will cause our environment to be sourced any time a new terminal session is created. Fortunately, this command has been already added for you.

- environment setup
{% include youtubePlayer.html id=page.youtubeID3 %}

- run tutlesim

{% include youtubePlayer.html id=page.youtubeID4 %}

- run commands

{% include youtubePlayer.html id=page.youtubeID5 %}

![image](https://user-images.githubusercontent.com/42961200/158000765-b3a84bec-c116-45b4-9b42-1f315b88e8b4.png)

![image](https://user-images.githubusercontent.com/42961200/158001898-93b7787f-fab6-49cf-8e3b-50fe1586079c.png)

![image](https://user-images.githubusercontent.com/42961200/158001905-f0c38824-ecaf-4ff9-ad2d-a74816bc1ebc.png)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

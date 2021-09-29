---
name: lesson 2
layout: page
permalink: rflysim-lesson2.html
sidebar: other_sidebar
collection: wiki
summary: "rflysim course Platform Configuration"
tags: [wiki, getting_started, rflysim]
excerpt_separator: <!--more-->
date: 2021-09-29 14:40:03 +0900
updated: 2021-09-29 2:48 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/documentation/issues
complex_map: true
map_name: rfly
box_number: 4
folder: rflysim
youtubeID: jBLaP-XwGE8
youtubeID2: IXglpmzFfBA
driveID: 1v8L4SaELogEU0gRyGa2b5X-WWs9NE4Ly
next_post: rflysim-lesson3.html
previous_post: rflysim-lesson1.html
---

* TOC
{:toc}


{% include custom/series_rfly_next.html %}

## lessons

### Course design
[course_issue](https://github.com/aiegoo/portfolio/issues)
#### basic experiment
- open the given code example. Then, read and run its source code directly to observe and record the results.
#### analysis experiment
- Modify the given code example. Then, run the modified example program to collect and analyze the data
  
#### Design experiment
Based on the previous two experiments, complete the given design task independently
### lesson videos

{% include youtubePlayer.html id=page.youtubeID %}

[video](images/rflysim/rflysim_1-2.mp4)

|--
| pdf | outline | summary
| | :- | :-
| [lesson2](https://github.com/aiegoo/documentation/blob/edit/pdf/gcs/rfly_code/Lesson_02_Experimental_Platform_Configuration.pdf) | sw install / hw configuration | platform config.


### Software Package Installation 

- slide 36/61
![install_completed](https://user-images.githubusercontent.com/42961200/135217166-7fb90173-dede-4d0f-888c-4cfb1c996179.png)

> Check the project Explorer window for PX4 source code, to understand the architecture and implementation principles of PX4 alogrithms.

- slide 37/61
c:\PX4PSP\Firmware\build\px4fmu-v3_default\px4fmu-v3_default.px4 for pixhawk1 (2MB flash)

{% include tony.html content="used    to    compile    the    source    code    to    the    firmware    file    “C:\PX4PSP\Firmware\build\px4fmu- v3_default\px4fmu-v3_default.px4” for Pixhawk 1 (2MB flash). Because the PSP toolbox will automaically call this compiling command after the code is generated, the readers do not need to know how to use it. -- what does this mean? How to create and use this flash card?" %}

### Hardware Installation
#### FC RC airframe configuration 
- RADIO LINK AT9S
- Pixhawk1 or/and Pixhawk Cube
- Custom airframe

|---
| :-: |
| 1 |![fc_receiver_wiring](https://user-images.githubusercontent.com/42961200/135223146-7edad638-b3e4-4ad4-84e1-c5efca93e4d4.png)
| 2|![rc_battery](https://user-images.githubusercontent.com/42961200/135223362-36a034d4-7e5c-4071-98d3-baf8a7bc66bd.png)
| 3 |![overall_setup](https://user-images.githubusercontent.com/42961200/135223631-8d63cfcf-292c-4d03-b1fa-a62ba614bdb1.png)
| 4 |![QGC](https://user-images.githubusercontent.com/42961200/135223902-d3129deb-51db-4b1e-90f1-25ea0d05846d.png)
| 5 |![rc_configuration](https://user-images.githubusercontent.com/42961200/135224149-2118207c-55af-4ce8-b0d5-143c8b2a9e8d.png)
| 6 |![multicopter_setting](https://user-images.githubusercontent.com/42961200/135224285-e9c8583f-4fc1-445d-aadb-878d528632d7.png)
| 7 |![throttle_channel_reversing](https://user-images.githubusercontent.com/42961200/135224415-6cb2f562-42f7-42ad-92d6-a28f1293b793.png)
| 8 |![ch5_6_modeswitching](https://user-images.githubusercontent.com/42961200/135224636-0672d4ce-88ad-4733-8298-34b36ba926fc.png)
| 9 |![channel_confirmation](https://user-images.githubusercontent.com/42961200/135224973-0eb638c8-e7bd-454c-97a1-211c5e7254cc.png)

1. Channel confirmation
Move each channel stick in right figure to confirm that each channel corresponds correctly to the following rules.

   - CH1：this corresponds to the horizontal movement of the right-hand stick of the RC transmitter. The right-hand stick moves from left to right, corresponding to a PWM value that changes from 1100 to 1900 (QGC’s Channel Monitor moves from left to right).
   -	CH2：this corresponds to the vertical movement of the right-hand stick of the RC transmitter. The right-hand stick moves from top to bottom, corresponding to a PWM value that changes from 1100 to 1900 (QGC’s Channel Monitor moves from left to right).
   - CH3：this corresponds to the vertical movement of the left-hand stick of the RC transmitter. The left-hand stick moves from top to bottom, corresponding to a PWM value that changes from 1900 to 1100 (opposite to CH2, right to left in QGC’s Channel Monitor).
   - CH4：this corresponds to the horizontal movement of the left-hand stick of the RC transmitter. The left-hand stick moves from left to right, corresponding to a PWM value that changes from 1100 to 1900 (QGC’s Channel Monitor moves from left to right).
   - CH5：this corresponds to the three-position switch on the upper-left side of the RC transmitter. The switch moves from the top position (the farthest position to the user), middle position, and bottom position (the closest position to the user), corresponding to PWM values of 1100, 1500, and 1900, respectively. (left to right in QGC) 
   - CH6：this corresponds to the three-position switch on the upper-right side of the RC transmitter. The switch moves to the top position (the farthest position to the user), middle position, and bottom position (the closest position to the user), corresponding PWM values of 1100, 1500, and 1900, respectively. (left to right in QGC)

#### QGC configuration

#### Airframe setup


{% include links.html %}

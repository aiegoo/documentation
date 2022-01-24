---
layout: post
title: "instruction on connecting a thermal camera to raspi"
name: "raspi-thermal"
tags: [raspi]
tagName: raspi
permalink: 2022-01-24-raspi-thermal.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "raspi thermal camera"
summary: "Mon, Jan 24, 22, thermal camera with raspi, how to connect"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-01-24T13:47:05 +0900
updated: 2022-01-24 13:47
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## thermal camera with raspi

There are several IR camera sensors now available to electronics hobbyists that allow you to measure thermal radiation. All it takes is the addition of a microprocessor to turn an off the shelf sensor into a full-fledged thermal camera.

Keep in mind the resolution offered by these sensors is much lower than what you would find on a commercially available thermal camera. They are still sufficient enough to act as a person or animal detector, an automatic door sensor, or a contactless thermometer.

The Raspberry Pi offers adequate processing power and with its GPIO pins an easy way to connect sensors. Scripting languages such as python also run on the Pi and can be made to interface with the sensor. This combination gives a flexible testbed for creativity.

What else you'll need
This guide was written using a Raspberry Pi 3, though any Pi newer than the first generation Raspberry Pi should use the same GPIO pinout and the sensor would connect the same. The operating system used for this guide is the latest version of Raspberry Pi OS with Python 3 and Git installed.


USING A THERMAL CAMERA WITH A RASPBERRY PI:
- Selecting a Sensor
- Wiring the sensor
- Enable the I2C Bus
- Install libraries
- Run the Example Code

## selecting a sensor

![image](https://user-images.githubusercontent.com/42961200/150724777-5d9c9443-7878-4faa-9833-0105b4c2cae5.png)

Cost and ease of use were considered most when selecting a sensor for this guide. To save yourself the trouble of fabricating your own breakout circuitry and writing your own libraries it is best to make use of what is already available.

Companies such as Adafruit and Sparkfun produce breakout boards and supporting libraries for sensors such as the AMG8833and the MLX90640.

Panasonic manufactures the AMG8833, which is capable of sampling an 8x8 grid of 64 individual temperature readings up to 10 times per second. It can detect temperatures ranging from 0 to 80 degrees Celsius.

The MLX90640 is made by a company called Melexis and while costlier it is superior compared to the AMG8833. It has a resolution of 32x24 and can sample 768 temperature readings up to 64 times per second, detecting temperatures as low as -40 degrees Celsius and as high as 300 degrees Celsius.

At the time of this writing, the MLX90640 breakout board is sold out with no option to backorder, so I will demonstrate the AMG8833 breakout board produced by Adafruit, as well as the python library they provide.

## wiring it

![image](https://user-images.githubusercontent.com/42961200/150724760-feae54df-b399-4d72-a1c7-c678a11607e8.png)

Regardless of which supplier you source the sensor from it will likely come with header pins that are not pre-soldered. For our purposes, it will be necessary to solder them in place.

Something the breakout boards for the AMG8833 and the MLX90640 have in common is the I2C protocol they use to communicate with the Raspberry Pi. The protocol uses one wire for bi-directional serial data transmission and another wire to supply a clock signal.

To avoid damaging the sensor or the Pi perform the following with the Pi powered off.

Use one of the jumper wires to connect the Vin pin on the sensor to pin 1 on the Pi.
Connect the GND pin to pin 9
Connect the SDA to pin 3
Connect the SCL to pin 5 using the remaining wires.

## enabling i2c bus
A fresh install of Raspberry Pi OS has the I2C interface disabled by default. It will be necessary to turn it on.
![image](https://user-images.githubusercontent.com/42961200/150724702-8a9bb5dc-0edd-459e-8f91-3a06619a4752.png)

Open a terminal window on the Raspberry Pi and run the following:
sudo raspi-config
Select Interface Options then I2C.

Select Yes to enable the interface.

## install libraries

![image](https://user-images.githubusercontent.com/42961200/150724725-f4ebf0a2-77e9-41a2-a57e-c1bbe4b81275.png)

Next, we will install a python library that will do the heavy lifting of turning the signal input from the sensor into useful data. If you are using an MLX90640 based sensor then you may have to check with the manufacturer for the appropriate library. For the AMG8833 based sensor, we will install a library provided by Adafruit.

In a terminal window run the following:
```bash
sudo pip3 install adafruit-circuitpython-amg88xx
```
This will install the library necessary for interfacing with the sensor.

The following libraries are only needed to run the graphical example code provided by Adafruit. Run the following commands in a terminal:

```bash
sudo apt-get install python-dev libatlas-base-dev
sudo pip3 install scipy pygame colour
```
The first command installs dependencies for NumPy, which is a component of scipy.
Scipy is a data library that will be used in the example code to interpolate pixel data.
Pygame is used primarily for creating games, but here it will be used to render sensor data to the screen.
Colour is a library that simplifies the manipulation of color data.   


### running example codes
[video](video/thermal-camera-demo.mp4)
<div style="width: 100%; text-align:right;">
	<video width="100%" height="100%" align="right" src="video/thermal-camera-demo.mp4" type="video/mp4" autoplay loop muted></video>
</div>

We are almost ready to see some output.

We will fetch the example code with this command:
git clone https://github.com/adafruit/Adafruit_CircuitPython_AMG88xx
Change to the example code directory:
```bash
cd ~/Adafruit_CircuitPython_AMG88xx/examples
```
Finally, run the example:
```bash
python3 amg88xx_rpi_thermal_cam.py
```
You should see a pygame render window that shows a color representation or "heat map" of the sensor data. Cooler temperatures are represented with blue and green hues while warmer temperatures are shown with yellow, orange, and red.

In this configuration, the sensor and the Pi are acting as a low-resolution thermal camera. Take a look at some of the other scripts provided in the example folder to see how you can work this sensor into your own code and your own projects. Like what about an awesome setting up a Raspberry Pi security camera that uses thermal imaging?!

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

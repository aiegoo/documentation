---
layout: post
title: "Using quantum encryption on rf mesh with fixed wing missions"
name: "rfmesh-quantum-encryption"
tags: [encryption]
tagName: encryption
permalink: 2022-05-05-rfmesh-quantum-encryption.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: post-jdlab
keywords: "rf mesh quantum encryption decryption drone fixed wings wifi doodlelab ziilab jdlab joydrone"
summary: "Thu, May 05, 22, set up air and ground kits that will communicate in encryption over the air and in decryption between wired devices"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-05-05T14:57:26 +0900
updated: 2022-05-05 14:57
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## post-jdlab research
[mesh_manual](https://github.com/aiegoo/lx-mesh/blob/master/mesh_manual.pdf)

-- first of all, I didn't sign any NDA with any of the parties involved. All the data and documents were provided without any reservation or any warnings, verbal/written or any means of uderlying messages, which makes this past project with my former employer something I feel free to discuss and use to my advantage.

> key elements

- RF mesh to relay wifi signals that carries encryption over a long-distance. 
- Quantum board to encrypt and decrypt IMU sensor and video data.
- Network setup
- Cable and wire customization
- Control page to whitelist devices and host/air nodes
- Debugging and network 

## open source
> This source code is licensed under the Apache License 2.0 as described in the file LICENSE.

[what-you-need](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#what-you-need)

### Introduction

It introduces a quick way to build an ESP-WIFI-MESH network without a router. For another detailed network configuration method, please refer to [examples/function_demo/mwifi](../function_demo/mwifi/README.md). Before running the example, please read the documents [lx-setup](2022-04-26-lx-setup.html) and [ESP-WIFI-MESH](https://docs.espressif.com/projects/esp-idf/en/stable/api-guides/mesh.html).

![image](https://user-images.githubusercontent.com/42961200/167339843-4d863f0e-caa8-4b45-b9fe-9cf4bf372c9a.png)

## Configure

To run this example, you need at least two development boards, one configured as a root node, and the other a non-root node. In this example, all the devices are non-root nodes by default.

- Root node: There is only one root node in an ESP-WIFI-MESH network. `MESH` networks can be differentiated by their `MESH_ID` and channels.
- Non-root node: Include leaf nodes and intermediate nodes, which automatically select their parent nodes according to the network conditions.

You need to go to the submenu `Example Configuration` and configure one device as a root node, and the others as non-root nodes with `make menuconfig`(Make) or `idf.py menuconfig`(CMake).

You can also go to the submenu `Component config -> MDF Mwifi`, and configure the ESP-WIFI-MESH related parameters like max number of layers, the number of the connected devices on each layer, the broadcast interval, etc.

<div align=center>
<img src="https://user-images.githubusercontent.com/42961200/167326444-9db9c456-68d8-4b56-8f5a-47e1321514e6.png" width="800">
<p> Configure the device type </p>
</div>

## Run

1. Set the event callback function; 
2. Initialize wifi, and start ESP-WIFI-MESH;
3. Create an event handler function:
	- Non-root nodes send the data packet `Hello root!` to the root node at an interval of three seconds, and wait for its reply;
	- The root node replies `Hello node！` when it receives the data.
4. Create a timer: print at the specified time the ESP-WIFI-MESH network information about layers, the signal strength and the remaining memory of the parent node.

The root node log would look like this:

<div align=center>
<img src="https://user-images.githubusercontent.com/42961200/167326482-a0193eb5-d745-49da-8888-50a3a6086e9f.png" width="800">
<p> The root node log </p>
</div>


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

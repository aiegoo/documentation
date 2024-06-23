---
title: Lora gateway and setup
tags: [samtech,lora, hitech ]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_lora.html
folder: mydoc
---

## Narshing archicture 
[pdf]({{site.github_link}}pdf/lora_architecture.pdf)
## Lora gateway and setup


	((( Y )))
	    |
	    |
	+- -|- - - - - - - - - - - - -+        xxxxxxxxxxxx          +--------+
	|+--+-----------+     +------+|       xx x  x     xxx        |        |
	||              |     |      ||      xx  Internet  xx        |        |
	|| Concentrator |<----+ Host |<------xx     or    xx-------->|        |
	||              | SPI |      ||      xx  Intranet  xx        | Server |
	|+--------------+     +------+|       xxxx   x   xxxx        |        |
	|   ^                    ^    |           xxxxxxxx           |        |
	|   | PPS  +-----+  NMEA |    |                              |        |
	|   +------| GPS |-------+    |                              +--------+
	|          +-----+            |
	|                             |
	|            Gateway          |
	+- - - - - - - - - - - - - - -+


## Lora Packetforwarder (concntrator)

The Semtech LoRa GW reference design has been tested with a Raspberry Pi 2:
https://www.raspberrypi.org/products/raspberry-pi-2-model-b

Use an external 5.0V (>1A) to supply GW reference design power supply, do not use the 5.0V supply from Raspberry Pi board.

For basic testing, the utilities provided on the lora_gateway repository (https://github.com/Lora-net/lora_gateway) will do the job (pkt_logger, util_tx_test, etc....):
 
1. **lora_gateway**: SX1301 driver library source code (https://github.com/Lora-net/lora_gateway)

    This source code has been adapted to use the Raspberry Pi hardware SPI. Please refer to the readme.md file which is in the lora_gateway directory to get details about how to use it.

2. **packet_forwarder**: Gateway application source code (https://github.com/Lora-net/packet_forwarder)

    A LoRa packet forwarder is a program that forwards RF packets received by the SX1301 concentrator to a server through an IP/UDP link (uplinks), and emits RF packets that are sent by the server (downlinks). Please refer to the readme.md file which is in the packet_forwarder directory to get details about how to use it.

Note: lora_gateway and packet_forwarder are compatible with the two Semtech GW LoRa reference design versions (i.e. with and without FPGA). There is an automatic check which allows distinguishing the 2 different designs.

Please also note that the default configuration file “global_conf.json”, is given as an example (based on Semtech IoT starter kit reference design i.e. without FPGA) and may need to be adapted according to your design.
The configuration file to be used for “GW LoRa EU v1.5 reference design” is located in [PATH]/packet_forwarder/lora_pkt_fwd/cfg/global_conf.json.PCB_E336.EU868.*
 
## SPI connection

Raspberry Pi connector <-> J100_PC_HOST GW ref design v1.5 connector
* MOSI (Pin19) <-> MOSI_PC_HOST (Pin 2)
* MISO (Pin 21) <-> MISO_PC_HOST (Pin 3)
* SCLK (Pin 23) <-> SCK_PC_HOST (Pin 4)
* CE0 (Pin 24) <-> CSN_PC_HOST (Pin 1)
* GND (Pin 25) <-> GND (Pin 5)

## Software installation

Download a Raspbian image to be installed on Raspberry Pi's SD card, for example the "Raspbian Jessie Lite" that can be found here:
https://www.raspberrypi.org/downloads/raspbian/

Refer to following guide to setup your SD card with the downloaded image:
https://www.raspberrypi.org/documentation/installation/installing-images/

* format the SD card: https://www.sdcard.org/downloads/formatter_4/
* write the image previously downloaded on the SD card: https://sourceforge.net/projects/win32diskimager/

## Connect to the Raspberry Pi host

Once the SD card is flashed, insert it in the Raspberry Pi and choose a way to login Raspberry Pi:
* HDMI monitor and USB keyboard directly plugged on the RPi
* UART terminal (using a USB to TTL serial cable)
* SSH client through LAN connection

## Enable SPI driver on Raspberry Pi

The SPI peripheral is not turned on by default. To enable it, do the following.

* Run `sudo raspi-config`.
* Use the down arrow to select `5 Interfacing Options`
* Arrow down to `P4 SPI`.
* Select yes when it asks you to enable SPI
* Also select yes when it asks about automatically loading the kernel module.
* Use the right arrow to select the <Finish> button.
* Select yes when it asks to reboot.

The system will reboot. When it comes back up, log in and enter the following command
`ls /dev/*spi*`

The Pi should respond with
`/dev/spidev0.0  /dev/spidev0.1`

## Get the latest software for Semtech (SX1301 driver/HAL and Packet Forwarder)

The Raspberry Pi needs to have a working internet access, either through its ethernet port, or through a WiFi dongle.

* SX1301 driver/HAL:

`git clone https://github.com/Lora-net/lora_gateway.git`
* Packet Forwarder:

`git clone https://github.com/Lora-net/packet_forwarder.git`

## Compile SX1301 driver/HAL and Packet Forwarder

`cd ~/lora_gateway`

`make all`

`cd ~/packet_forwarder`

`make all`

## Run the "basic" Packet Forwarder

Before launching the packet forwarder, there are few parameters to be set in the associated configuration files, global_conf.json and local_conf.json.

#### Update the "gateway_ID":
The gateway ID is a unique identifier to identify a gateway on a server. It can be for example a EUI-64 converted from the 48-bits MAC address.
Edit the local_conf.json file and change the default "gateway_ID field" by the EUI-64 you want to assign to your gateway.

#### Use the proper flavour of global_conf.json:
Several versions of global_conf.json are provided to match with either the GW ref design 1.0 or 1.5, and to describe the desired packet forwarder flavour (basic, gps, beacon).
So depending on the board you are using, replace the global_conf.json file with:
* lora_pkt_fwd/cfg/global_conf.json.PCB_E336.EU868.basic for a basic packet forwarder on GW v1.5
* lora_pkt_fwd/cfg/global_conf.json.PCB_E286.EU868.beacon for gps+beacon packet forwarder on GW v1.0

#### Update the server address to your network server
Set the server_address field of the global_conf.json file to the IP address or hostname of your LoRa Network Server.

#### Run the packet forwarder

`cd ~/packet_forwarder/lora_pkt_fwd`

`./lora_pkt_fwd`

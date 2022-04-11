---
layout: post
title: "using openTX on radiomaster TX16s"
name: "radiomaster-tx16s"
tags: [jdlab]
tagName: jdlab
permalink: 2022-04-10-radiomaster-tx16s.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "rc reciever transmitter opentx radiomaster configuration simulation"
summary: "Sun, Apr 10, 22, rc reciever transmitter opentx radiomaster configuration simulation"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-04-10T15:52:38 +0900
updated: 2022-04-10 15:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## OpenTX

![image](https://user-images.githubusercontent.com/42961200/162606422-f5e1a23b-1a9f-4256-8496-785a67f4f1a0.png)
Fill in a profile name (we use Radiomaster TX16s)
At Radio Type, choose “Radiomaster TX16s / TX16s Hall / TX16s Masterfire”
At menu language, specify your preferred language
At build options, always choose ‘lua’ . I also use some other options like ppmus (show channel values in uS, not in percentage) & flexr9m (used for FrSky R9m modules). It is up to you what options you want. Hover over the checkboxes to see a short explanation about all the options.
Not mandatory: At SD Structure Path, choose a folder in which you will store the SD Card contents for OpenTX
Not mandatory: At Backup folder, choose a folder in which you want backups of models/firmware to be stored.
Choose your prefered default stick mode and default Channel order.
check the checkbox to “Append version number to FW file name”

### backup
If you already have created some models and you are flashing OpenTX for the first time, it’s wise and a good practice to backup your current models. Normally all models just should be kept when upgrading, but in case something goes wrong you can always restore your models by backing them up first.

Power on your Radiomaster TX16s in bootloader mode by pushing both trim buttons (T4 and T1) inwards (towards the powerbutton) while pressing and hold the powerbutton. As soon as your transmitter powers on, release the powerbutton. You will see that your transmitter is now in bootloader mode

Attach a USB-C cable to the top USB-C port of your TX16s and connect it to your computer. You will see “USB connected” on your radiomaster display.

Start the OpenTX Companion software
Click on Read/Write
Click on “Read Models and Settings from Radio”

![image](https://user-images.githubusercontent.com/42961200/162606474-b4cddf82-56e2-483d-915c-cf969a512830.png)

![image](https://user-images.githubusercontent.com/42961200/162606485-5987e8f3-47ce-4dce-b613-a5e69d36312c.png)

### Download and Install firmware
![image](https://user-images.githubusercontent.com/42961200/162606499-7a41efcf-ede4-426b-9d98-905e5fd87d85.png)

![image](https://user-images.githubusercontent.com/42961200/162606510-4539f6a7-4238-4ea2-a6ad-b8218144a0ee.png)
Click on “Check for Updates”
If a window appears that says “Firmware….do not seems to have ever been downloaded”, press Yes and choose a suitable location to download the firmware to.
If no window appears, click on “Download Firmware” and pick a suitable location on your computer

### Install firmware to TX16s
Power on your Radiomaster TX16s in bootloader mode by pushing both trim buttons (T4 and T1) inwards (towards the powerbutton) while pressing and hold the powerbutton. As soon as your transmitter powers on, release the powerbutton. You will see that your transmitter is now in bootloader mode

Attach a USB-C cable to the top USB-C port of your TX16s and connect it to your computer. You will see “USB connected” on your radiomaster display.

After being connected to your pc, install the firmware using OpenTX companion:

Click on Read/Write
Click on Write Firmware to Radio

![image](https://user-images.githubusercontent.com/42961200/162606557-60067116-da07-4318-aa1b-91e8cd89445a.png)


![image](https://user-images.githubusercontent.com/42961200/162606572-64caffc1-7ccd-4583-bf27-078dfd74bd47.png)

Click on Load
Choose the firmware file (*.bin) you downloaded in step 4

Click on “Write to TX”
Be patient while the firmware is transferred and installed to your transmitter. We have one step left to do: transferring the SD cards for the newest OpenTX version to the SD card of the Radiomaster TX16s.

### Transfer the SD card contents for the newest OpenTX to the SD card of the Radiomaster TX16s
OpenTX uses a SD card to store all kinds of data for the OpenTX operating system. Because of this, you always need to update both the firmware and the sd card of your transmitter.

It’s a good practice to always make a Backup of your SD card contents first before proceeding with the following steps. Just transfer all the files on your sd card to a folder on your pc and you’re done.

Open OpenTX Companion
Click on download (top bar of OpenTX Companion)
Click on “Download SD contents”
Download the newest “SD Contents”, in my case “sdcard-480×272-2.3V0029.zip”
Open the zip file
Go to “My Computer” or your file explorer and open the SD card of your Radiomaster TX16s (in my case USB Drive (G:).

Delete all folders EXCEPT RADIO and MODELS
In case you are wondering why you must keep the RADIO and MODELS folder on the sd-card: the RadioMaster TX16S stores model and radio settings in files inside the RADIO and MODELS folder. So always be carefull not to delete the RADIO and MODELS folder! In case you remove them by mistake, you can always restore your backup of the sd card or your companion backup.

After all files and folders (except RADIO and MODEL) are deleted:

open the newest “SD contents” (sdcard-480×272-2.3V0029.zip)
transfer all files to the sd card of the Radiomaster TX16s
![image](https://user-images.githubusercontent.com/42961200/162608113-a8b71ac1-76d3-450a-83c0-029e085d5f17.png)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

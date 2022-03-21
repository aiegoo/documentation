---
layout: post
title: "qgc custom build based on dronecode"
name: "qgc-custombuild"
tags: [jdlahb]
tagName: jdlab
permalink: 2022-03-21-qgc-custombuild.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "jdlab qgroundcontrol qgc custom build core plugin"
summary: "Mon, Mar 21, 22, A custom build allows different qgc behavior and look to meet some user needs"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-03-21T11:14:16 +0900
updated: 2022-03-21 11:14
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Custom Builds
A custom build allows third parties to create their own version of QGC in a way that allows them to easily keep up to date with changes which are being made in regular QGC. QGC has an architecture built into it which allows custom builds to modify and add to the feature set of regular QGC.

Some possibilities with a custom build

- Fully brand your build
- Define a single flight stack to avoid carrying over unnecessary code
- Implement your own, autopilot and firmware plugin overrides
- Implement your own camera manager and plugin overrides
- Implement your own QtQuick interface module
- Implement your own toolbar, toolbar indicators and UI navigation
- Implement your own Fly View overlay (and how to hide elements from QGC such as the flight widget)
- Implement your own, custom QtQuick camera control
- Implement your own, custom Pre-flight Checklist
- Define your own resources for all of the above

One of the downsides of QGC providing both generic support for any vehicle which supports mavlink as well as providing firmware specific support for both PX4 Pro and ArduPilot is complexity of the user interface. Since QGC doesn't know any information about your vehicle ahead of time it requires UI bits which can get in the way if the vehicle you fly only uses PX4 Pro firmware and is a multi-rotor vehicle. If that is a known thing then the UI can be simplified in various places. Also QGC targets both DIY users who are building their own vehicles from scratch as well as commercial users of off the shelf vehicles. Setting up a DIY drone from scratch requires all sort of functionality which is not needed for users of off the shelf vehicles. So for off the shelf vehicle users all the DIY specific stuff is just extra noise they need to look past. Creating a custom build allows you to specify exact details for your vehicle and hide things which are irrelevant thus creating an even simple user experience for your users than regular generic QGC.

There is a plugin architecture in QGC which allows for this custom build creation. They can be found in QGCCorePlugin.h, FirmwarePlugin.h and AutoPilotPlugin.h associated classes. To create a custom build you create subclasses of the standard plugins overriding the set of methods which are appropriate for you usage.

There is also a mechanism which allows you to override resources so you can change the smaller visual elements in QGC.

Also internal to QGC is the concept of an "Advanced Mode". Whereas a standard QGC builds always runs in advanced mode. A custom build always starts out in regular/not advanced mode. There is an easier mechanism in the build to turn on advanced mode which is to click the fly view button 5 times in a row fairly quickly. If you do this in a custom build you will be warned about entering advanced mode. The concept here is to hide things which normal users should not have access to behind advanced mode. For example a commercial vehicle will not need access to most setup pages which are oriented to DIY setup. So a custom build can hide this. The custom example code shows how to do this.

If you want to understand the possibilities, the first step is to read through those files which document what is possible. Next look through the custom-example source code including the README.

## Custom Build Example

To build this sample custom version:

* Clean you build directory of any previous build
* Rename the directory from `custom-example` to `custom`
* Change to the `custom` directory
* Run `python updateqrc.py`
* Build QGC

![Custom Build Screenshot](https://user-images.githubusercontent.com/42961200/159197627-dba38e56-06cd-404f-a8c2-4ed672677777.png)


More details on what a custom build is and how to create your own can be found in the [QGC Dev Guide](https://dev.qgroundcontrol.com/en/custom_build/custom_build.html).

The main features of this example:

* Assumes an "Off The Shelf" purchased commercial vehicle. This means most vehicle setup is hidden from the user since they should mostly never need to adjust those things. They would be set up correctly by the vehicle producing company prior to sale.
* The above assumption cause the QGC UI to adjust and not show various things. Providing an even simpler experience to the user.
* The full experience continues to be available in "Advanced Mode".
* Brands the build with various custom images and custom color palette which matches corporate branding of the theoretical commercial company this build is for.
* Customizes portions of the interface such as you can see in the above screenshot which shows a custom instrument widget replacing the standard QGC ui.
* It also overrides various QGC Application settings to hide some settings the users shouldn't modify as well as adjusting defaults for others.
* The source code is fully commented to explain what and why it is doing things.

> Important Note: This custom build is not automatically built each time regular QGC code changes. This can mean that it may fall out of date with the latest changes in QGC code. This can show up as the `python updateqrc.py` steps failing due to upstream resource changes. Or possibly fail to compile because the plugin mechanism for custom builds has changed. If this happens please notify the QGC devs and they will bring it up to date. Or even better, submit a pull for the fix yourself!
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

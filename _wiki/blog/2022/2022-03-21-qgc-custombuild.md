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


### Initial Repository Setup For Custom Build
The suggested mechanism for working on QGC and a custom build version of QGC is to have two separate repositories. The first repo is your main QGC fork. The second repo is your custom build repo.

Main QGC Respository
This repo is used to work on changes to mainline QGC. When creating your own custom build it is not uncommon to discover that you may need a tweak/addition to the custom build to achieve what you want. By discussing those needed changes firsthand with QGC devs and submitting pulls to make the custom build architecture better you make QGC more powerful for everyone and give back to the community.

The best way to create this repo is to fork the regular QGC repo to your own GitHub account.

Custom Build Repository
This is where you will do your main custom build development. All changes here should be within the custom directory as opposed to bleeding out into the regular QGC codebase.

Since you can only fork a repo once, the way to create this repo is to "Create a new repository" in your GitHub account. Do not add any additional files to it like gitignore, readme's and so forth. Once it is created you will be given the option to setup up the Repo. Now you can select to "import code from another repository". Just import the regular QGC repo using the "Import Code" button.


### Custom Build Plugins
The mechanisms for customizing QGC for a custom build is through the existing FirmwarePlugin, AutoPilotPlugin and QGCCorePlugin architectures. By creating subclasses of these plugins in your custom build you can change the behavior of QGC to suit your needs without needed to modify the upstream code.

QGCCorePlugin
This allows you to modify the parts of QGC which are not directly related to vehicle but are related to the QGC application itself. This includes things like application settings, color palettes, branding and so forth.

### Resource Overrides
A "resource" in QGC source code terminology is anything found in the qgroundcontrol.qrc and qgcresources.qrc file. By overriding a resource you can replace it with your own version of it. This could be as simple as a single icon, or as complex as replacing an entire Vehicle Setup page of qml ui code.

Be aware that using resource overrides does not isolate you from upstream QGC changes like the plugin architecture does. In a sense you are directly modify the upstream QGC resources used by the main code.

Exclusion Files
The first step to overriding a resource is to "exclude" it from the standard portion of the upstream build. This means that you are going to provide that resource in your own custom build resource file(s). There are two files which achieve this: qgroundcontrol.exclusion and qgcresources.exclusion. They correspond directly with the *.qrc counterparts. In order to exclude a resource, copy the resource line from the .qrc file into the appropriate .exclusion file.

Custom version of excluded resources
You must include the custom version of the overriden resouce in you custom build resource file. The resource alias must exactly match the upstream alias. The name and actual location of the resource can be anywhere within your custom directory structure.

Generating the new modified versions of standard QGC resource file
This is done using the updateqrc.py python script. It will read the upstream qgroundcontrol.qrc and qgcresources.qrc file and the corresponding exclusion files and output new versions of these files in your custom directory. These new versions will not have the resources you specified to exclude in them. The build system for custom builds uses these generated files (if they exist) to build with instead of the upstream versions. The generated version of these file should be added to your repo. Also whenever you update the upstream portion of QGC in your custom repo you must re-run python updateqrc.py to generate new version of the files since the upstream resources may have changed.

Custom Build Example
You can see an examples of custom build qgcresource overrides in the repo custom build example:

[qgcresources.qrc](https://github.com/mavlink/qgroundcontrol/blob/master/custom-example/qgcresources.exclusion)
[custom.qrc](https://github.com/mavlink/qgroundcontrol/blob/master/custom-example/custom.qrc)



{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

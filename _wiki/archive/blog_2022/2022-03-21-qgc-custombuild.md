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
A "resource" in QGC source code terminology is anything found in the [qgroundcontrol.qrc](https://github.com/mavlink/qgroundcontrol/blob/master/qgroundcontrol.qrc) and [qgcresources.qrc]{https://github.com/mavlink/qgroundcontrol/blob/master/qgcresources.qrc} file. By overriding a resource you can replace it with your own version of it. This could be as simple as a single icon, or as complex as replacing an entire Vehicle Setup page of qml ui code.

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

### Customization
The following topics explain how to customise various views and other parts of the UI.

First Run Prompts
Toolbar customization
Fly View Customization

#### First Run Prompts
When QGC is started for the first time it prompts the user to specify some initial settings. At the time of writing this documentation those are:

Unit Settings - What units does the user want to use for display.
Offline Vehicle Settings - Vehicle information for creating Plans while not connected to a vehicle.
The custom build architecure includes mechanisms for a custom build to both override the display of these prompts and/or create your own first run prompts.

First Run Prompt Dialog
Each first run prompt is a simple dialog which can display ui to the user. Whether the specific dialog has already been show to the user or not is stored in a setting. Here is the code for the upstream first run prompt dialogs:

Units Settings
Offline Vehicle Settings
Standard First Run Prompt Dialogs
Each dialog has a unique ID associated with it. When that dialog is shown to the user that ID is registered as having already been displayed so it only happens once (unless you clear settings). The set of first run prompt which are included with upstream QGC are considered the "Standard" set. QGC gets the list of standard prompts to display from the QGCCorePlugin::firstRunPromptStdIds call.

```c++
    /// Returns the standard list of first run prompt ids for possible display. Actual display is based on the
    /// current AppSettings::firstRunPromptIds value. The order of this list also determines the order the prompts
    /// will be displayed in.
    virtual QList<int> firstRunPromptStdIds(void);
```
You can override this method in your custom build if you want to hide some of those.

Custom First Run Prompt Dialogs
Custom builds have the ability to create their own set of additional first run prompts as needed through the use of the following QGCCorePlugin method overrides:

```c++
    /// Returns the custom build list of first run prompt ids for possible display. Actual display is based on the
    /// current AppSettings::firstRunPromptIds value. The order of this list also determines the order the prompts
    /// will be displayed in.
    virtual QList<int> firstRunPromptCustomIds(void);
    /// Returns the resource which contains the specified first run prompt for display
    Q_INVOKABLE virtual QString firstRunPromptResource(int id);
```
Your QGCCorePlugin should override these two methods as well as provide static consts for the ids of your new first run prompts. Look at how the standard set is implemented for how to do this and take the same approach.

Order Of Display
The set of first run prompts shown to the user are in the order returned by the QGCCorePlugin::firstRunPromptStdIds and QGCCorePlugin::firstRunPromptCustomIds with standard prompts shown before the custom prompts. Only the prompts which have not been previously shown to the user are shown.

Always On Prompts
By setting the markAsShownOnClose: false property in your prompt ui implementation you can create a prompt which will show up each time QGC starts. This can be used for things like showing usage tips to your users. If you do this it is best to make sure that this is displayed last.

#### Toolbar Customization
The toolbar can be customized in a number of ways to fit your custom build needs. The toolbar internally is made up of a number of sections from left to right:

View Switching
Indicators
App Indicators
Vehicle Indicators
Vehicle Mode Indicators
Connection Management
Branding
The Indicator section varies based on the view currently displayed:

Fly View - Shows all indicators
Plan View - Show no indicators and has its own custom indicator section for Plan status values
Other Views - Do not show Vehicle Mode Indicators
Customization Possibilities
Indicators
You can add your own indicators for display or remove any of the upstream indicators. The mechanism you use depends on the indicator type.

App Indicators
These provide information to the user which is not associated with a vehicle. For example RTK status. To manipulate the list of app indicators you use QGCPlugin::toolbarIndicators.

Vehicle Indicators
These are indicators which are associated with information about the vehicle. They are only available when a vehicle is connected. To manipulate the list of vehicle indicators you override FirmwarePlugin::toolIndicators.

Vehicle Mode Indicators
These are indicators which are associated with information about the vehicle. They require additional UI provided by the Fly View to complete their actions. An example is Arming and Disarming. They are only available when a vehicle is connected. To manipulate the list of vehicle mode indicators you override FirmwarePlugin::modeIndicators.

Modifying the toolbar UI itself
This is accomplished by using resource overrides on the qml files associated with the toolbar. This provides a high level of customization but also a higher level of complexity. The primary ui for the toolbar is in MainToolBar.qml. The main window code in MainRootWindow.qml interacts with the toolbar to show different indicator sections based on current view as well as whether the mode indicators show or not also based on current view.

If you want full control over the toolbar then you can override MainToolBar.qml and make your own completely different version. You will need to pay special attention to the interactions of the main toolbar with MainRootWindow.qml since you are going to need to replicated those interactions in your own custom version.

There are two standard indicator ui sections of the toolbar:

MainToolBarIndicators.qml
This is used for all views except Plan. It display all the indicators in a row. Although you can override this file, in reality it doesn't do much other than layout for indicators.

PlanToolBarIndicators.qml
This is used by the Plan view to show the status values. If you want to change that ui you can override this file and provide your own custom version.


#### Fly View Customization
The Fly View is designed in such a way that it can be cusomtized in multiple ways from simple to more complex. It is designed in three separate layers each of which are customizable providing different levels of change.

Layers
There are three layers to the fly view from top to bottom visually:
FlyView.qml This is the base layer of ui and business logic to control map and video switching.
FlyViewWidgetsOverlay.qml This layer includes all the remaining widgets for the fly view.
FlyViewCustomLayer.qml This is a layer you override using resource override to add your own custom layer.
Inset Negotiation using QGCToolInsets
An important aspect of the Fly View is that it needs to understand how much central space it has in the middle of it's map window which is not obstructed by ui widgets which are at the edges of the window. It uses this information to pan the map when the vehicle goes out of view. This need to be done not only for the window edges but also for the widgets themselve such that the map pans before it goes under a widget.

This is done through the use of the QGCToolInsets object included in each layer. This objects provides inset information for each window edge informing the system as to how much real estate is taken up by edge based ui. Each layer is given the insets of the layer below it through parentToolInsets and then reports back the new insets taking into account the layer below and it's own additions through toolInsets. The final results total inset is then given to the map so it can do the right thing. The best way to understand this is to look at both the upstream and custom example code.

FlyView.qml
The base layer for the view is also the most complex from ui interactions and business logic. It includes the main display elements of map and video as well as the guided controls. Although you can resource override this layer it is not recommended. And if you do you better really (really) know what you are doing. The reason it is a separate layer is to make the layer above much simpler and easier to customize.

FlyViewWidgetsOverlay.qml
This layer contains all the remaining controls of the fly view. You have the ability to hide the controls through use of QGCFlyViewOptions. But in order to change the layout of the upstream controls you must use a resource override. If you look at the source you'll see that the controls themselves are well encapsulated such that it should not be that difficult to create your own override which repositions them and/or adds your own ui. While maintaining a connection to the upstream implementaions of the controls.

FlyViewCustomLayer.qml
This provides the simplest customization ability to the Fly View. Allowing you the add ui elements which are additive to the existing upstream controls. The upstream code adds no ui elements and is meant to be the basis for your own custom code used as a resource override for this qml. The custom example code provides you with an example of how to do it.

Recommendations
Simple customization
The best place to start is using a custom layer override plus turning off ui elements from the widgets layer (if needed). I would recommend trying to stick with only this if at all possible. It provides the greatest abilty to not get screwed by upstream changes in the layers below.

Moderate complexity customization
If you really need to reposition upstream ui elements then your only choice is overriding FlyViewWidgetsOverlay.qml. By doing this you are distancing yourself a bit from upstream changes. Although you will still get changes in the upstream controls for free. If there is a whole new control added to the fly view upstream you won't get it until you add it to your own override.

Highly complex customization
The last and least recommended customization mechanism is overriding FlyView.qml. By doing this you are distancing yourself even further from getting upstream changes for free.

#### Release Process for Custom Builds [WIP Docs]
One of the trickier aspects of creating your own custom build is the process to keep it up to date with regular QGC. This document describes a suggested process to follow. But in reality you are welcome to use whatever branching and release strategy you want for your custom builds.

Upstream QGC release/branching strategy
The best place to start is understanding the mechanism QGC uses to do it's own releases. We will layer a custom build release process on top of that. You can find standard QGC release process here.

Custom build/release types
Regular QGC has two main build types: Stable and Daily. The build type for a custom build is more complex. Throughout this discussion we will use the term "upstream" to refer to the main QGC repo (https://github.com/mavlink/qgroundcontrol). Also when we talk about a "new" upstream stable release, this means a major/minor release, not a patch release.

Synchronized Stable
This type of release is synchronized with the release of an upstream stable. Once QGC releases stable you then release a version of your custom build which is based on this stable. This build will include all the new features from upstream including the new feature in your own custom code.

Out-Of-Band Stable
This a subsequent release of your custom build after you have released a synchronized stable but prior to upstream releasing a new stable. It only includes new features from your own custom build and include no new features from upstream. Work on this type of release would occur on a branch which is either based on your latest synchronized stable or your last out of band release if it exists. You can release out of band stable releases at any time past your first synchronized stable release.

Daily
Your custom daily builds are built from your master branch. It is important to keep your custom master up to date with QGC master. If you lag behind you may be surprised by upstream features which require some effort to integrate with your build. Or you may even require changes to "core" QGC in order to work with your code. If you don't let QGC development team know soon enough, it may end up being too late to get things changed.

Options for your first build
Starting with a Synchronized Stable release
It is suggested that you start with releasing a Synchronized Stable. This isn't necessary but it is the simplest way to get started. To set your self up for a synchronized stable you create your own branch for development which is based on the upstream current stable.

Starting with Daily builds
The reason why you may consider this as your starting point is because you need features which are only in upstream master for your own custom builds. In this case you will have to live with releasing custom Daily builds until the next upstream stable. At which point you would release you first Synchronized Stable. For this setup you use your master branch and keep it in sync with upstream master as you develop.

After you release your first Synchronized Stable
Patch Releases
As upstream QGC does patch releases on Stable you should also release your own patch releases based on upstream to keep your stable up to date with latest criticial bug fixes.

Out-Of-Band, Daily: One or the other or both?
At this point you can decide which type of releases you want to follow. You can also decide to possibly do both. You can do smaller new features which don't require new upstream features using out of band releases. And you can do major new feature work as daily/master until the point you can do a new synchronized stable.


#### MAVLink Customisation
QGC communicates with flight stacks using [MAVLink](https://mavlink.io/en/), a very lightweight messaging protocol that has been designed for the drone ecosystem. QGC includes the [ArduPilotMega.xml](https://mavlink.io/en/messages/ardupilotmega.html) dialect by default, which allows it to communicate with both PX4 and Ardupilot (PX4 uses common.xml, which is incuded in ArduPilotMega).

In order to add support for a new set of messages you will ultimately need to add them to ArduPilotMega.xml or common.xml, or fork QGroundControl and include your own dialect.

To do this:

Replace the pre-build C library at [/qgroundcontrol/libs/mavlink/include/mavlink](https://github.com/mavlink/qgroundcontrol/tree/master/libs/mavlink/include/mavlink).
By default this is a submodule importing [https://github.com/mavlink/c_library_v2](https://github.com/mavlink/c_library_v2)
You can change the submodule, or [build your own libraries](https://mavlink.io/en/getting_started/generate_libraries.html) using the MAVLink toolchain.
You can change the whole dialect used by setting it in [MAVLINK_CONF](https://github.com/mavlink/qgroundcontrol/blob/master/QGCExternalLibs.pri#L52) when running qmake.


PX4 Waypoint Interface
PX4 sends the desired path in TRAJECTORY_REPRESENTATION_WAYPOINTS (opens new window)messages at 5Hz.

The fields set by PX4 as shown:

time_usec: UNIX Epoch time.
valid_points: 3
Point 0 - Current waypoint type adapted by FlightTaskAutoMapper (see notes below):
pos_x[0], pos_y[0], pos_z[0]: Type adapted x-y-z NED local position of current mission waypoint.
vel_x[0], vel_y[0], vel_z[0]: Type adapted x-y-z NED local velocity of current mission waypoint.
acc_x[0], acc_y[0], acc_z[0]: NaN
pos_yaw[0]: Current yaw angle
vel_yaw[0]: NaN
command[0]: The MAVLink Command (opens new window)for the current waypoint.
Point 1 - Current waypoint (Unmodified/not type adapted)):
pos_x[1], pos_y[1], pos_z[1]: x-y-z NED local position of current mission waypoint
vel_x[1], vel_y[1], vel_z[1]: NaN
acc_x[1], acc_y[1], acc_z[1]: NaN
pos_yaw[1]: Yaw setpoint
vel_yaw[1]: Yaw speed setpoint
command[1]: The MAVLink Command (opens new window)for the current waypoint.
Point 2 - Next waypoint in local coordinates (unmodified/not type adapted):
pos_x[2], pos_y[2], pos_z[2]: x-y-z NED local position of next mission waypoint
vel_x[2], vel_y[2], vel_z[2]: NaN
acc_x[2], acc_y[2], acc_z[2]: NaN
pos_yaw[2]: Yaw setpoint
vel_yaw[2]: Yaw speed setpoint
command[2]: The MAVLink Command (opens new window)for the next waypoint.
All other indices/fields are set as NaN.
Notes:

Point 0 is the current waypoint/target modified based on the type of target. For example, it makes sense when landing to specify the target x, y coordinates and a descent velocity. To achieve this FlightTaskAutoMapper modifies land waypoints in Point 0 to set the z component of position to NAN and the z-velocity to a desired value.
Point 1 and 2 are not used by the safe landing planner.
Point 1 is used by local and global planner.
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

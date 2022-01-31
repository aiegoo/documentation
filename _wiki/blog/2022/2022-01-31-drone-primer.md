---
layout: post
title: "drone programming primer for software development"
name: "drone-primer"
tags: [drone]
tagName: drone
permalink: 2022-01-31-drone-primer.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "mavproxy mavlink ardupilot qgroundcontrol qgc dronekit gcs"
summary: "Mon, Jan 31, 22, flight stack with firmware middleware and api"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-01-31T16:32:15 +0900
updated: 2022-01-31 16:32
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## drone primer from Udemy

### overview
1. video 4:
### scripts
- video 1: course overview

```javascript
OK so in this video we're going to look at the format and content that will be covered in this lecture

series.

So there are five main sections in this course and the first section we will set up our development

environment and install any software dependencies we may need.

If you want working from a Linux machine we will set up our virtual machine with virtual box and install

Linux to it.

And this is so you can follow the course from a Windows or Mac computer if needed.

Then we will start learning from the bottom of the flight stack and work our way up.

So in the second section we'll have an introduction into the pilot flight control software then we will

take our first simulated drone flight with little supplied by the R2 pilot project.

After this the third section is going to be a look at ground control stations from my high level and

understand why they're a critical component.

Then we will learn about two different ground control stations one a command line based ground control

station called Maff proxy and the other a visually based user interface called Q ground control.

The fourth section will provide a high level introduction into the Mablean middleware and how it is

used as an inter-process or enter vehicle communications standard and finally the last section will

provide an overview of drone kit and why it's so powerful.

We will then build out various functions in Python to command and control our drone using Siddall as

our test drone.

The functions we make can be thought of as Lego blocks that can be put together in any infinite amount

of ways to produce different drone kit missions.

I'll be providing links to Linux command line in Python tutorials to get you caught up to speed if you

need such information but you won't need any python knowledge until we get the drone kit section.

The general formula of the sections in this lecture series follows the following format.

We will begin with a high level 15 minute introduction to the material followed by a lower level dive

into the content of the program we're looking at a good method of consuming this course may be to first

watch all of the high level videos at the beginning of each section to provide you with a working understanding

of the different layers of the flight deck.

Regardless we provide a system overview video that will do just that and the more condensed matter if

you just want to follow along sequentially with the videos and I will say the documentation provided

for the open source projects comprising our flight deck are very excellent for Arti pilot map link map

proxy in trone kit if you want to become an independent drone wizard understanding how to use the documentation

to both learn new things and answer questions you might have.

Is a must I'll be providing links to various documentation pages whenever necessary.

But I highly encourage you to look through the documentation on your own and last but not least please

do not hesitate to ask any questions for anything you may be confused about or respond as quickly as

possible and it may help students coming behind you to view the answers that are provided.
```

- video 2 : fulld rone system overview
```javascript
What's going on everyone in this video we're going to look at the typical drone set up from a high level

and gain an understanding of what each component of the system does.

This is a generic drone system.

The elementary subsystems are the drone itself and the ground control station that communicates with

the drone.

These are linked by a communication middleware that standardizes communication.

So each block represents a specific function that must be accounted for to produce a working drone system.

The higher blocks are more abstracted and depend on the lower level blocks to function.

There are many different ways to define these generic blocks in a specific box and we will show you

some real setups that are typically seen on drones.

So this is an example of a typical drone side stack from software to hardware starting at the bottom.

The drone hardware consists of things like ESEA G.P.A. I am you prop's motors batteries and frames among

other things.

These are things that can be commanded by higher level blocks.

All of the low level sensors and electronics then plug into the flight control hardware creating a central

hub from which the elementary components can be commanded.

Additionally they provide some of the high frequency computing power that is needed to fly the drone

in a deterministic and consistent way.

Here we have two examples of such hardware on the left we have the pics Hok which is a microcontroller

that is very popular in the open source world and on the left we have the Navya which is a hat to a

Raspberry Pi that actually runs on Linux.

Both are very different but perform the same basic functionality.

These flight control hardware devices are just raw devices though and they need some software to actually

operate the hardware.

Here we have the two primary open source flight control projects and peaks for an armed pilot but they

both perform the same basic function of all flight control firmware which is to level the drone.

These are actually very sophisticated and large projects however and they offered some pretty impressive

features like Autonomy's flight and different flight modes revering ways to control your drones hardware.

Set up this for real drones.

But what if you just want to start drone coding but don't want to build the drone.

What if you're just concerned about the software.

Well we can actually replace the hardware layers of our drone with a simulated drone called software

in the loop.

Pronounced Siddall Siddall runs the exact same code that can be running on a real drone.

So any work you may do on a Siddall drone will actually be directly transferable to the real world on

a real drone.

This gives us a sweet tool for learning about the software side of the drone and it makes it even sweeter

because a typical drone set up from the last slide may cost you anywhere from 500 to 1000 bucks.

But with Siddall we can get right to the important stuff which is learning how to program drones and

focus on the software side of things instead of the hardware.

Next we have the middleware or communication layer.

And this is essentially the communication glue that links the open source drone world together.

It is a collection of standard messages used in a standard protocol.

We will call vehicles are devices capable of communicating with each other through Magelang simply map

link nodes and here we have our ground control stations set up at the very bottom.

We have the medium through which map link messages can be sent to and delivered from the drone here

we have a telemetry module that is displayed they can do just that one is placed on the drone side with

the other on the ground control station side and they communicate through radio frequency typically

at 915 megahertz and they send maverick messages back and forth.

An alternative way to connect magnetic nodes would be simply through the TCAP or UDP protocol as well.

So that could be also that GC has hardware the ground control station software Leora can be thought

of as a user interface to the drone that uses Madlang and the drone ground control station connection

to command the drone.

Here we have pictured Q ground control A.P.M. plan or two in mission planner.

These are all visually based ground control stations and mission planner is the most popular but unfortunately

it's only available on Windows.

All of these are open source and we will be focusing on cue ground patrol in this course as it is available

on Linux.

The other program will focus a lot of time on this course as drone kit.

This is a program that uses Python functions that create and send messages to your drone allowing you

to control your drone from a Python script.

So here we can fill in our generic box with more specific set ups that can be seen in the real world.

Referring back to our original generic set up but again this could be both expensive and time consuming

to set up especially if you aren't concerned with the hardware side of drones this course we are replacing

the drones hardware with our Siddall vehicle and we will also be focusing a lot of time on drone kit

these things paired together are very exciting because combining Siddall with drone kit actually rapidly

decreases the barrier of entry to programming drones on the civil side.

We get to model our drone right on our computer and we don't have to spend weeks of time building our

own drone just to test some dangerous code that ends up crashing into your neighbor's lawn on the junket

side.

We get to take advantage of massive abstraction away from Arti pilot freeing us from the complicated

C++ and Ardie pilot and allowing us to focus on the higher level applications and software development

of drones.

We will be isolating in on each block individually in the following sections.

So so if you ever lose focus of how what you've learned fits into the grand scheme definitely refer

back to this video.

What's going on everyone in this video we're going to look at the typical drone set up from a high level

and gain an understanding of what each component of the system does.

This is a generic drone system.

The elementary subsystems are the drone itself and the ground control station that communicates with

the drone.

These are linked by a communication middleware that standardizes communication.

So each block represents a specific function that must be accounted for to produce a working drone system.

The higher blocks are more abstracted and depend on the lower level blocks to function.

There are many different ways to define these generic blocks in a specific box and we will show you

some real setups that are typically seen on drones.

So this is an example of a typical drone side stack from software to hardware starting at the bottom.

The drone hardware consists of things like ESEA G.P.A. I am you prop's motors batteries and frames among

other things.

These are things that can be commanded by higher level blocks.

All of the low level sensors and electronics then plug into the flight control hardware creating a central

hub from which the elementary components can be commanded.

Additionally they provide some of the high frequency computing power that is needed to fly the drone

in a deterministic and consistent way.

Here we have two examples of such hardware on the left we have the pics Hok which is a microcontroller

that is very popular in the open source world and on the left we have the Navya which is a hat to a

Raspberry Pi that actually runs on Linux.

Both are very different but perform the same basic functionality.

These flight control hardware devices are just raw devices though and they need some software to actually

operate the hardware.

Here we have the two primary open source flight control projects and peaks for an armed pilot but they

both perform the same basic function of all flight control firmware which is to level the drone.

These are actually very sophisticated and large projects however and they offered some pretty impressive

features like Autonomy's flight and different flight modes revering ways to control your drones hardware.

Set up this for real drones.

But what if you just want to start drone coding but don't want to build the drone.

What if you're just concerned about the software.

Well we can actually replace the hardware layers of our drone with a simulated drone called software

in the loop.

Pronounced Siddall Siddall runs the exact same code that can be running on a real drone.

So any work you may do on a Siddall drone will actually be directly transferable to the real world on

a real drone.

This gives us a sweet tool for learning about the software side of the drone and it makes it even sweeter

because a typical drone set up from the last slide may cost you anywhere from 500 to 1000 bucks.

But with Siddall we can get right to the important stuff which is learning how to program drones and

focus on the software side of things instead of the hardware.

Next we have the middleware or communication layer.

And this is essentially the communication glue that links the open source drone world together.

It is a collection of standard messages used in a standard protocol.

We will call vehicles are devices capable of communicating with each other through Magelang simply map

link nodes and here we have our ground control stations set up at the very bottom.

We have the medium through which map link messages can be sent to and delivered from the drone here

we have a telemetry module that is displayed they can do just that one is placed on the drone side with

the other on the ground control station side and they communicate through radio frequency typically

at 915 megahertz and they send maverick messages back and forth.

An alternative way to connect magnetic nodes would be simply through the TCAP or UDP protocol as well.

So that could be also that GC has hardware the ground control station software Leora can be thought

of as a user interface to the drone that uses Madlang and the drone ground control station connection

to command the drone.

Here we have pictured Q ground control A.P.M. plan or two in mission planner.

These are all visually based ground control stations and mission planner is the most popular but unfortunately

it's only available on Windows.

All of these are open source and we will be focusing on cue ground patrol in this course as it is available

on Linux.

The other program will focus a lot of time on this course as drone kit.

This is a program that uses Python functions that create and send messages to your drone allowing you

to control your drone from a Python script.

So here we can fill in our generic box with more specific set ups that can be seen in the real world.

Referring back to our original generic set up but again this could be both expensive and time consuming

to set up especially if you aren't concerned with the hardware side of drones this course we are replacing

the drones hardware with our Siddall vehicle and we will also be focusing a lot of time on drone kit

these things paired together are very exciting because combining Siddall with drone kit actually rapidly

decreases the barrier of entry to programming drones on the civil side.

We get to model our drone right on our computer and we don't have to spend weeks of time building our

own drone just to test some dangerous code that ends up crashing into your neighbor's lawn on the junket

side.

We get to take advantage of massive abstraction away from Arti pilot freeing us from the complicated

C++ and Ardie pilot and allowing us to focus on the higher level applications and software development

of drones.

We will be isolating in on each block individually in the following sections.

So so if you ever lose focus of how what you've learned fits into the grand scheme definitely refer

back to this video.
```

- video 3 : drone basics and flight jargon
```javascript
All right.

So in this video we're going to go over some basic drone pieces of knowledge.

Things like roll pitch and ya if you're already familiar with the drone jargon then you don't have to

watch this video.

This is strictly for those who are new to the drone world.

Need a bit of a drone knowledge primer.

So let's start with roll pitch and ya so we all know the 3-D coordinate system.

You have an x axis or y axis and a z axis.

All that roll pitching is is rotations about one of those axes so rotation about the x axis will be

roll rotation about the y axis will be pitch and rotation about the z axis will be your the thing to

note here is that the front of the vehicle the direction that the front of the vehicle is pointing.

In this case the nose of this airplane is always parallel to the rail access.

So if you know where the front of the vehicle is you know where the roll axis is.

So for example every time a plane is leaving the airport is pitching up because the nose is pointing

in the direction and the tail is pointing down.

So it's rotating about that y axis which is pitch and I started out with a airplane diagram of rope

pitch Njord because it's easier to see where the front of the vehicle is but the exact same mechanism

the exact same scheme works with drones.

So here even though the drone doesn't look like it has a front direction since we know that the direction

that the roll axis is pointing is always the front direction of the vehicle.

We know what direction is front and which direction is back on this drone.

Now here we can see the important distinction between planes and multi rotors with planes.

You don't really get to take advantage of the yaw access too much because it's it's difficult to rotate

about the z axis when you're an airplane with a drone.

You can easily just rotate in the z direction like it's nothing and you can stay in place and just rotate

about that singular axis.

So if you're going to be manually flying the drone you need to be able to control the roll pitch and

ya axes as well as the throttle of the drone.

Or how much juice is getting sent to the motors.

And this is done through a radio controller setup and it has standard channels for standard axes.

So for example Channel 1 is always going to control the pitch as as vehicle Channel 2 is always going

to control roll three for throttle and for free.

So we can send.

We can move the sticks of a RC controller that will output some pulse width modulation value that will

get consumed by the appellate code base and will output the appropriate thrust values to your motors.

The cool thing to note here is you can actually emulate RC input without an RC controller.

So you get through software right to channel 3.

Hey I want my throttle to be at 7300.

So you could with Maff proxy or a drone kit script you could change the RC input value to 7800 and emulate

manual control now there are easier ways to control the drone.

And this is definitely for advanced users.

But it's cool to know that it's there and heading is really simple.

The heading is just the direction that the vehicle is currently moving.

All right.

So in this video we're going to go over some basic drone pieces of knowledge.

Things like roll pitch and ya if you're already familiar with the drone jargon then you don't have to

watch this video.

This is strictly for those who are new to the drone world.

Need a bit of a drone knowledge primer.

So let's start with roll pitch and ya so we all know the 3-D coordinate system.

You have an x axis or y axis and a z axis.

All that roll pitching is is rotations about one of those axes so rotation about the x axis will be

roll rotation about the y axis will be pitch and rotation about the z axis will be your the thing to

note here is that the front of the vehicle the direction that the front of the vehicle is pointing.

In this case the nose of this airplane is always parallel to the rail access.

So if you know where the front of the vehicle is you know where the roll axis is.

So for example every time a plane is leaving the airport is pitching up because the nose is pointing

in the direction and the tail is pointing down.

So it's rotating about that y axis which is pitch and I started out with a airplane diagram of rope

pitch Njord because it's easier to see where the front of the vehicle is but the exact same mechanism

the exact same scheme works with drones.

So here even though the drone doesn't look like it has a front direction since we know that the direction

that the roll axis is pointing is always the front direction of the vehicle.

We know what direction is front and which direction is back on this drone.

Now here we can see the important distinction between planes and multi rotors with planes.

You don't really get to take advantage of the yaw access too much because it's it's difficult to rotate

about the z axis when you're an airplane with a drone.

You can easily just rotate in the z direction like it's nothing and you can stay in place and just rotate

about that singular axis.

So if you're going to be manually flying the drone you need to be able to control the roll pitch and

ya axes as well as the throttle of the drone.

Or how much juice is getting sent to the motors.

And this is done through a radio controller setup and it has standard channels for standard axes.

So for example Channel 1 is always going to control the pitch as as vehicle Channel 2 is always going

to control roll three for throttle and for free.

So we can send.

We can move the sticks of a RC controller that will output some pulse width modulation value that will

get consumed by the appellate code base and will output the appropriate thrust values to your motors.

The cool thing to note here is you can actually emulate RC input without an RC controller.

So you get through software right to channel 3.

Hey I want my throttle to be at 7300.

So you could with Maff proxy or a drone kit script you could change the RC input value to 7800 and emulate

manual control now there are easier ways to control the drone.

And this is definitely for advanced users.

But it's cool to know that it's there and heading is really simple.

The heading is just the direction that the vehicle is currently moving.
```

#### section 2
- video 4 : Different methods for workstation
```javascript
OK so we're about to get into all the exciting drone programming and stuff.

But before we can you know have an environment to code on.

We first need an environment.

And so there are two OK three different ways you could go about setting up your environment that where

you could run your drone get scripts run method number one and you're basically going to be setting

up your own dependencies your own virtual machine on your own.

Well not all on your own because throughout the lectures in this course I show you the exact commands

that you need to run to install the correct dependencies to prop up a properly run the drone kit scripts

on your environment but this method is not foolproof because maybe your Pip Python package handler has

a slightly different version on your environment than it did on mine.

And that could cause some other issues which might prevent drone get scripts from running properly.

The gist of that method one is that you might have to do some dependency resolving on your own method

number two is a little bit different.

So I have granted access to all your students access to a pre configured virtual machine has been confirmed

to work so it has all of the right dependencies and it has all the pre written drone kit scripts launched

little scripts you'll see all that later on but basically it's an environment that you know works and

you can rule out human error with your drone kit scripts because I've typed them and confirmed they

were the Khan there is that you know you're much more likely to cheat yourself if you have an environment

where you already have all of the pre written drunkest scripts.

So I recommend a mixture of both of these methods maybe you go and try and set up your own environment

with method one and then if you run into any issues you could hop on over to your pre configured confirmed

to work virtual environment and see where you might have gone wrong on your own environment or maybe

you just want to you know start coding some drone kit scripts and you don't want to have to worry about

all of the headaches of setting up the the appropriate dependencies before you get into drone kit programming.

So that would be an instance where you know just jumping right on to your pre configured virtual environment

would be beneficial because you know who wants to deal with dependency issues if you just want to write

a drone kit script and I highly recommend that you even though the scripts are already pre written and

the pre configured environment you're not going to get that muscle memory of typing and understanding

the drone kit scripts if you're not typing them up on your own.

So if you do both methods I still really recommend that you actually write out and go through the scripts

on your own.
```


- video 5 : setting up preconfigured and
```javascript
So this link right here if you go to this link and download it it's just a zip file that has all of

the pre written junket scripts in the launch style script.

So if you just wanted to download that wherever you're working from you can do that.

And here at this link I have the pre configured virtual machine environment that is confirmed to work

but you can just paste that link up in here and then click the download and then it's a pretty big file.

I think it's like four gigs but it'll take some time to download but I'll quickly show you how to install

that on virtual box right now.

So that file is going to be a dot o v a file.

And so how do you create a new virtual machine.

Well you just go over to file and then you click import appliance you click import appliance and then

now we're looking for that O V a file that we just downloaded.

So go to the location wherever you downloaded it click open.

And then next and then here is where you going to delegate the hardware of your computer to this virtual

machine.

I have 16 years on my computer so I'm just giving it 25 percent of my use.

I would you'll see in a later video my recommendations for how many CPE use and how much RAM you should

delegate to your computer so I'll I'll leave that alone here but you'll probably have to make some modifications

here and then all you have to do is oh I would click this re initialize the MAC address definitely do

that and I have to do is click import and you will have um well it's gonna take looks like maybe two

and a half minutes to to finish okay.

So that import just finished.

So I have never logged into this virtual machine before so you'll just go ahead and click that double

click that and it'll take a little bit to load.

But the user name is going to be drone dojo on this virtual machine and the password is also going to

be drone dojo all lowercase

All right.

And then I'll take a little bit to boot up.

But here we go.

This environment the one we're in right now has been confirmed to work all the dependencies are already

ready to go in here all of the scripts already here.

You'll see all these directories later on in the course.

But if we go into a course route all of the pre written scripts the drone kit scripts are under decay

underscore pre written and all of those again I know I've said this a billion times but they're confirmed

to work.

So they'll be.

So this will really help you rule out human error as you're trying to type up these scripts in your

own environment again.

Don't cheat you don't want to just download this reconfigured virtual environment and just run the scripts

and no that's not going to.

That's not going to benefit you at all.

Use this pre configured environment as a tool.

It's a it's a cheat code.

It's going to help you in developing your own environment where you're writing your own scripts.

This is the up up down down left right left right VBA select starts like start version of this course.

All right.

Let me know if you have any questions.

So this link right here if you go to this link and download it it's just a zip file that has all of

the pre written junket scripts in the launch style script.

So if you just wanted to download that wherever you're working from you can do that.

And here at this link I have the pre configured virtual machine environment that is confirmed to work

but you can just paste that link up in here and then click the download and then it's a pretty big file.

I think it's like four gigs but it'll take some time to download but I'll quickly show you how to install

that on virtual box right now.

So that file is going to be a dot o v a file.

And so how do you create a new virtual machine.

Well you just go over to file and then you click import appliance you click import appliance and then

now we're looking for that O V a file that we just downloaded.

So go to the location wherever you downloaded it click open.

And then next and then here is where you going to delegate the hardware of your computer to this virtual

machine.

I have 16 years on my computer so I'm just giving it 25 percent of my use.

I would you'll see in a later video my recommendations for how many CPE use and how much RAM you should

delegate to your computer so I'll I'll leave that alone here but you'll probably have to make some modifications

here and then all you have to do is oh I would click this re initialize the MAC address definitely do

that and I have to do is click import and you will have um well it's gonna take looks like maybe two

and a half minutes to to finish okay.

So that import just finished.

So I have never logged into this virtual machine before so you'll just go ahead and click that double

click that and it'll take a little bit to load.

But the user name is going to be drone dojo on this virtual machine and the password is also going to

be drone dojo all lowercase

All right.

And then I'll take a little bit to boot up.

But here we go.

This environment the one we're in right now has been confirmed to work all the dependencies are already

ready to go in here all of the scripts already here.

You'll see all these directories later on in the course.

But if we go into a course route all of the pre written scripts the drone kit scripts are under decay

underscore pre written and all of those again I know I've said this a billion times but they're confirmed

to work.

So they'll be.

So this will really help you rule out human error as you're trying to type up these scripts in your

own environment again.

Don't cheat you don't want to just download this reconfigured virtual environment and just run the scripts

and no that's not going to.

That's not going to benefit you at all.

Use this pre configured environment as a tool.

It's a it's a cheat code.

It's going to help you in developing your own environment where you're writing your own scripts.

This is the up up down down left right left right VBA select starts like start version of this course.

All right.

Let me know if you have any questions.
```


- video 7: virtualization check
```javascript
All right.

So before we progress and start creating our virtual machine with Virtual Box we have one step to do

beforehand and we have to make sure that virtualization is actually enabled on our host pc.

I'll show you how to do that on a Windows box now.

So what you do is hit control alt delete and we're going to boot up a task manager and real simple you

just pull up the Performance tab and look for virtualization.

If it's enabled thumbs up you're ready to go on to the next video where we'll start creating our virtual

machine if it's disabled.

Well you have a little bit of work to do but don't be afraid it's not too difficult.

You just have to boot up into the bios of your PC where you can switch on virtualization to enable.

Now I know that might sound a little bit scary but don't be afraid.

I will link to a video on YouTube that goes into the subject with great detail and it walks you through

all the various steps and after you get that enabled and you're good to go and we'll see you at the

next video where we'll start creating our virtual machine.
```


- video 8 : virtualbox install and ubuntu download
```javascript
All right so in this video we're going to install a virtual box and download our mood to image that

we'll be using in this course.

You only really need to do this if you'll be running the course from my Windows machine because all

of our content is going to be ran from a Linux environment and it won't work on a Windows machine.

And that's what virtual box will provide us with.

I still encourage you to download and use the same Linux distribution even if you already have an upper

running Linux box.

And that is just to maintain as much coherence as the lecture material as possible.

But in theory if you already have a Linux box up and running and it happens to be different from the

moon to 3:44 distro that will be using you should be good to go.

Let's start by downloading virtual box and that will be the software we'll use to store our virtual

machines.

And this course freezing Virtual Box 5.2 point one to which you can find and the other build's button

here but it shouldn't be too much difference between the distributions.

So let's go down here and go to a virtual box.

Older builds click on 5.2 and then find Virtual Box Five Point to Point 1 2 and then the appropriate

operating system that you're running on.

And this tutorial we're running from a Windows host so click on this right here download should begin.

And this should only take about 30 seconds and then pull up the file explorer and navigate to wherever

you're downloading your content from.

And you'll see this logo here which is our Virtual Box installer.

So if you double click on it it will prompt an installation window and then we can use the default settings

so.

So just click through.

Next on all of these and then click Finish when you're done and then when the installation has finished

you can navigate over here to your search bar and type virtual.

And if something pops up saying desktop app you know you successfully downloaded it and if you want

to pin it to the task bar you can right click in a pen to start or this will say pin to taskbar and

you get this right here.

So you've installed Virtual Box we need to download our Linux distribution image that we'll be using

and this course is immune to 3:44 Zini.

And you can get that from this link right here.

Here we are you have four choices here.

Make sure you're going to download the desktop image and not the server image.

And then further resolution from that is 32 bit or 64 bit.

If you don't know what processor you are running on your computer you can click to the file explorer

and then find this PC right click it and click properties and you'll see the system type and mine a

64 bit.

So I'm going to click on the 64 bit image.

If you're running 32 bit then click on that one.

And this download will take a pretty long time maybe 20 minutes.

So it's a large file that's about 1.5 gigs and then let that install and then when it's done head on

to the next video.
```


- video 9 : virtual machine setup
```javascript
All right.

So at this point we should have our virtual box all installed and ready to go.

We should have downloaded our Embu to image that we'll be using in this course.

So now let's set up our virtual machine in virtual box to go ahead and pull up virtual box

and then we're going to click on this new button we're going to configure a new virtual machine and

what we're going to do here is basically set up the hardware resources that are virtual machine is going

to use.

So let's name this let's just call it drone moon too because I'm not creative.

And then we're going to select the type.

So we're using Linux.

And then the version we're running a 64 bit machine on my desktop that might be different for you and

just a quick 32 bit tube and that applies now the memory size.

So this is a bit of a balancing act because if you go too far then the operating system the parent operating

system that is running your virtual machine will be able to function.

So yeah our virtual machine is going to have 8 gigs of RAM but Windows is going to have no RAM to deal

with.

And you don't want to go too low because if you go too low your virtual machine isn't going to be able

to run its processes with a lot of horsepower.

It's definitely a bit of a balancing act and something you might have to play with two gigs is a safe

number or 45 percent of your memory size is a general rule of thumb.

And the hard disk type Let's use create a virtual hard disk and hit create

and now the hard disk file type Let's use VDI virtual disk image storage on physical hard disk.

We have fixed size and dynamically allocated methods dynamically allocated which means that your virtual

machine is only going to take up space on your hard disk when it's needed.

So if your virtual machine only needs 5 gigs that is all that is going to be used to store your virtual

machine and then a safe minimum amount of file size to allocate to your virtual machine is probably

around 30 gigs.

You might be able to go lower but 30 gigs is a probably the lowest number that I can confidently say

would work.

And then lets it create and that should create a new machine here in our list of machines.

So here's the one we just created trone a move to now we can modify the settings of this further by

right clicking and clicking on settings.

OK so let's go to System and processor.

So here we can delegate the amount of Sipah use that our virtual machine is going to be able to use.

And just like Ram This is also a bit of a balancing act because when your virtual machine is up and

running the processors you have dedicated to your virtual machine are not going to be available to your

parent operating system.

So for that reason we could not dedicate all of our C-p to our virtual machine because then Windows

would have no processor.

The one you will probably really be enough of if you have a computer with more sleep use you should

be able to dedicate more C-p use to your virtual machine without worrying about performance like the

ram.

General rule of thumb the 40 percent rule of thumb will probably apply in this circumstance too.

But still something is going to have to play around with.

And then let's go to storage and now we're going to point the hardware that we set up our virtual machine

hardware to an operating system image that will run that hardware.

And that is the moon to image that we download it.

And the last video.

So let's click on the CD button.

And then hit choose disk

nélisse navigate to the location that we downloaded our image to and let's double click on the moon

to image that we downloaded

and there we go.

Now we have associated our operating system with our virtual machine.

Now the next time we boot up our virtual machine it will boot with boot to 3:44 Zeny desktop.

But again if some of the hardware settings that we played around with in this video isn't working for

your system you can definitely still modify the hardware resource allocations that we set up initially

by just going into settings and then playing around with the virtual machine hardware aspects.

All right.

So at this point we should have our virtual box all installed and ready to go.

We should have downloaded our Embu to image that we'll be using in this course.

So now let's set up our virtual machine in virtual box to go ahead and pull up virtual box

and then we're going to click on this new button we're going to configure a new virtual machine and

what we're going to do here is basically set up the hardware resources that are virtual machine is going

to use.

So let's name this let's just call it drone moon too because I'm not creative.

And then we're going to select the type.

So we're using Linux.

And then the version we're running a 64 bit machine on my desktop that might be different for you and

just a quick 32 bit tube and that applies now the memory size.

So this is a bit of a balancing act because if you go too far then the operating system the parent operating

system that is running your virtual machine will be able to function.

So yeah our virtual machine is going to have 8 gigs of RAM but Windows is going to have no RAM to deal

with.

And you don't want to go too low because if you go too low your virtual machine isn't going to be able

to run its processes with a lot of horsepower.

It's definitely a bit of a balancing act and something you might have to play with two gigs is a safe

number or 45 percent of your memory size is a general rule of thumb.

And the hard disk type Let's use create a virtual hard disk and hit create

and now the hard disk file type Let's use VDI virtual disk image storage on physical hard disk.

We have fixed size and dynamically allocated methods dynamically allocated which means that your virtual

machine is only going to take up space on your hard disk when it's needed.

So if your virtual machine only needs 5 gigs that is all that is going to be used to store your virtual

machine and then a safe minimum amount of file size to allocate to your virtual machine is probably

around 30 gigs.

You might be able to go lower but 30 gigs is a probably the lowest number that I can confidently say

would work.

And then lets it create and that should create a new machine here in our list of machines.

So here's the one we just created trone a move to now we can modify the settings of this further by

right clicking and clicking on settings.

OK so let's go to System and processor.

So here we can delegate the amount of Sipah use that our virtual machine is going to be able to use.

And just like Ram This is also a bit of a balancing act because when your virtual machine is up and

running the processors you have dedicated to your virtual machine are not going to be available to your

parent operating system.

So for that reason we could not dedicate all of our C-p to our virtual machine because then Windows

would have no processor.

The one you will probably really be enough of if you have a computer with more sleep use you should

be able to dedicate more C-p use to your virtual machine without worrying about performance like the

ram.

General rule of thumb the 40 percent rule of thumb will probably apply in this circumstance too.

But still something is going to have to play around with.

And then let's go to storage and now we're going to point the hardware that we set up our virtual machine

hardware to an operating system image that will run that hardware.

And that is the moon to image that we download it.

And the last video.

So let's click on the CD button.

And then hit choose disk

nélisse navigate to the location that we downloaded our image to and let's double click on the moon

to image that we downloaded

and there we go.

Now we have associated our operating system with our virtual machine.

Now the next time we boot up our virtual machine it will boot with boot to 3:44 Zeny desktop.

But again if some of the hardware settings that we played around with in this video isn't working for

your system you can definitely still modify the hardware resource allocations that we set up initially

by just going into settings and then playing around with the virtual machine hardware aspects.
```

- video 10:
```javascript
IMPORTANT!! DO NOT UPGRADE TO UBUNTU 18!!

After you install and launch Ubuntu 16 on your Virtual Machine and first login, you will at some point be prompted to upgrade to Ubuntu 18.04. DO NOT DO THIS!!!!! The course material has only been tested on Ubuntu 16.04, and you will likely run into bugs on Ubuntu 18.04. Upgrade at your own peril :)
```


- video 11: ubunut install
```javascript
Aren't so in the last video we set up our virtual machine by allocating the real hardware resources

that we will dedicate to a virtual machine and then we pointed our operating system image that will

run the hardware that we allocated to it.

And in this video we're going to boot up our virtual machine for that for the first time and install

our operating system image to the hardware.

So let's pull up virtual box

and then to launch a virtual machine that you've already configured you just find the name you want

to launch in that double click on it.

And that will pull up a window that is your visual interface into your virtual machine in go and boot

to 3:44 is booting up.

OK so now Hamoud too has booted up and it has prompted us with the installation startup.

So first screen is this going to click on install and boot into and then let's click both of these boxes

will download updates while installing a boot to and will install third party software.

So here we're going to click on erase disk install and move to.

Now this sounds scary because you might think that it will wipe out your windows machine but it's the

virtual machine is only seeing the hard disk space that we allocated to this specific virtual machine.

So those dirty gigs.

So it's saying I don't recognize any operating system.

Do you want me to make this boot to the primary operating system for that disk space allocation.

And yes that's what we want to do so click erase disk and install and boot to

and then we'll click on continue then click whatever time zone that you're located in.

Then click whatever language you're using And now let's set up some log in information so we can type

or name here and then what we want our computers name to be in our username and password and choose

to log in automatically or require password to log in and hit continue.

Now the installation has begun and this may take a little bit of time.

All right and then once the installation is complete you'll get prompted with this little window here

and you'll have to restart the virtual machine to click that button all right and then once the restart

is done you'll be prompted with the log in screen go and type in your password

and it might take some time for all of your various windows in Taskbar is to load up ok then once everything

is loaded up.

Pull up a terminal and we can do that by making sure you're in the virtual box window and hit Control

alt t..

Now let's run two commands will run sudo apt get update we'll to update the list of programs in the

repository that we have available to download and then we'll do a pseudo apt get upgrade which will

install the default applications to our virtual machine.

So first we're going to run the sudo apt get update command

after that's done.

Type pseudo apt get upgrade and this may take a little bit of time.

If you get prompted with this do you want to continue.

Type in a Y and then hit Enter.

This may take about 10 minutes.
```


- video 12:
```javascript
IMPORTANT!! DO NOT UPGRADE PIP OR USE SUDO PIP

In the video, I make two mistakes. Please follow the below instructions to modify the instructions for the next video.

1. DO NOT upgrade pip with "sudo pip install --upgrade pip"

2. I use "sudo pip ..." Do not use "sudo pip", simply use "pip", as this is the safer way to use this package handler.
```


- video 12: dependencies install
```javascript
All right.

So in this video we're going to be setting up our Linux environment that we're going to be running the

course material from.

So let's get to it on the right.

I have a terminal pulled up and we'll run this command here to run some of the applications will be

meeting later on in the course.

OK so we're installing a bunch of Python packages that Python dependencies and the vim text editor and

the Get version control program.

So then hit enter

and any time we get product with do you want to continue and why and then enter.

OK then once that's done we're going to install the python pit package handler

and then hit enter

and then why enter.

And now that we have Pipp installed let's install mabbe proxy and we're going install a specific version

to maintain coherence with this course material or run this following command.

So we're telling the pip Python packet Chandler to install the map proxy package and if you use double

equal signs and a number afterwards you're specifying the version that you want to download.

So hit enter.

All right.

And then that shouldn't take too long to download.

One thing you'll see here is you'll be recommended to update your pitte version to ten point 0.1.

Do this at your own caution because doing so is known to produce some system problems that you have

to navigate through fixing yourself and pitte version.

8. 1.1 suffices for what we need to use it for in this tutorial.

So now let's run this following command.

And then hit enter and let's remove a program that is known to cause some problems.

Hit enter and then once that's done let's make a directory that will be the parent directory for all

of our core specific material.

So I'm going to call it course route.

And it might be more convenient for you to do the same.

So you know what I'm talking about in later videos when I refer to the coarse root directory.

Make sure you're in the home slash username directory and we can do that here CD in a tale they.

So this is where our course information is going to be stored.

So it's going to be a popular directory.

So what we can do is make a shortcut variable that we can input into the cd command.

Let's do that with this following command.

So here we're saying export course route.

So this means we're going to make a new environmental variable called course route and we're setting

it equal to the directory of course.

So slash home slash whatever username you're using and this dollar sign user is going to get resolved

to whatever username that you're using.

And then of course route and then or outputting this line of text to the bash RC file which will save

our environmental variable and define it every time we open up a new terminal.

So let's hit enter and then once we have modified our bash RC file we have to source it.

So we'll type this right here.

Enter now we can navigate to our course root directory from wherever we are on the system with the following

command.

So we reference our course route variable by typing a dollar sign before the course route text.

And now if we hit Enter we can navigate to a course route from any part of the system.
```

### section 3
- video 14: Ardupilot introduction
```javascript
What's up in this video we're going to get into a little bit.

Do you pilot the history where it's going and why it's important.

So why do we even need autopilot software in the first place.

Well turns out is pretty difficult to have equal amounts of thrust on your multiple Motors to produce

a steady flying level vehicle.

This was the first quad copter and I believe it was around the early 1900s and kind of just wobbled

all over the place because there is different thrust coming out of the joint at different times and

it just didn't work.

So the technology was a band until the advent of computers and with that allowed us to do was correct

the motor outputs multiple times a second hundreds of times a second to produce the thrust required

to maintain a level steady flying drone.

And that is what your basic autopilot software does it just read your sensor inputs and changes the

outputs of your motors according to what is needed to maintain a level drone and then once you have

that core functionality you can do more cute things like have different flight modes are flying the

drone.

Have the various state estimators and stuff like that and we'll get into that later.

So what are we going to use We're going to use Arti pilot to fly our drone a little history about our

pilot.

There's this guy named Chris Anderson who built a Lego drone trying to get his kid interested in drones.

And it turns out that he got himself really interested and he went on to found the Web site called DIY

Drones which created the community that kind of joined together everyone who was interested in drones

and then people started flying drones with our Dwina hardware hence the R2 part of arti pilot software

eventually got larger and larger.

And the hardware requirements got higher and higher.

So as you can see here in this picture as time progressed the computing power of your autopilot hardware

that was available had to increase with the software A.P.M. stands for R2 pilot Maggo.

So you'll notice that up until 2012 already pilot was the same name as software as it was for hardware.

The hardware was branded with the term R2 pilot.

And then in 2013 there's no more to what happened well early on our pilot was basically hardware and

software coupled together.

The software was developed and repositories an open source community and the hardware was manufactured

and developed by a company called 3R and it was essentially made to foster the arty pilot software.

Hence the branding of our pilot on the hardware.

Well that Arti pilot 3R partnership kind of ended in 2013 when three-D are partnered with an organization

called picks for picks for has their own open source hardware and open source software.

And that is what the Pixar kids pick sock is a perfect for creation or an idea in 3D is the one of the

manufacturers of it.

So at this point the hardware software coupling of already pilot ended and now we have a bunch of different

autopilot softwares that have no that have no part of the pilot name in it but can still run the autopilot

software that opens up an interesting anecdote.

You'll notice our pilot Mega is the name of the hardware but since the software and hardware were so

tightly coupled together in the early days that even though A.P.M. hardware doesn't exist anymore it's

still used as a term to refer to Aarthi pilot in general and I have news that in this course so A.P.M.

today just refers to Ardie pilot software.

What is your pilot doing today.

Well it's pretty sophisticated code base at this point.

There's over seven hundred thousand lines of code that make up the art of pilot code base.

So it's getting to the point now or just doesn't even make sense to try and make your own flight controller

because you're not going to get the sophistication of the 700000 lines of code by your own work.

So you might as well use what's already out there and free and available to you as a bunch of other

cool stuff for instance it has a common filter which takes in as input a bunch of sensor readings from

various hardware sensors like like gyroscopes accelerometers compasses GPS Yes and it fuses all of that

data into one output estimate of where the drone is in 3-D space.

And that can be very handy for robotics also argue port seven different vehicle types in this lecture

series we're just going to be focusing on multi rotors but just know that it can work for a bunch of

other vehicles.

Another really awesome thing that is happening is the pioneering of Linux based autopilot hardware.

All of your initial heart autopilot hardwares were microcontroller based in microcontrollers are really

good at running processes extremely fast in deterministic.

So what I mean by that is if you need a process to run in five microseconds microcontrollers can do

that with consistency whereas normal computers can not do that.

And it turns out with drones you need to have that amount of dependability with your hardware because

if you if you're not running the processes that need to run your drone will just fly out of the sky

all of your original autopilots were microcontroller based.

But Linux has been developing recently and there's a new patch available called preempt Arti which makes

Linux work more like a microcontroller in that the processes become more deterministic.

It's now on a Linux box.

If I need a process to run in five microseconds and I'm using the preempt Arti patch I can do that with

more consistency.

Two every pilots started to adopt it software to running on Linux machines and that is a beautiful thing

because when you have a Linux autopilot you can interact with your trone just like it's a normal Linux

computer.

You can S-sh into your drone then you can you know SFE files to and from the drone just becomes super

convenient because your typical microcontroller is more difficult to interact with.

There's a lot of active developers in the community.

So the R&D of the hardware is being done by all these private companies like POSIX and Ira lock and

the open source community is implementing the new and awesome pieces of hardware.

And to the Republic code base for free.

So with POSIX an hour lock you can start to position your drone in 3D space with a lot more consistency.

So for example if you needed to land your drone in a 10 inch radius you could do that with either one

of those systems and the code required to make those work is already existing in the pilot code base.

One of the cool developments in the drone industrial world is matter it so matter and it is one of the

leading drone delivery companies out there in the market today and they used the autopilot codebase

to deliver a coffee to the roof of a Mercedes Benz.

So the industrial world is starting to see the power of these open source tools and they're being used

to prove out the technology in the industrial space.

So I think as time goes on much like how Linux has had a wide reach in the consumer space open source

tools like R2 pilot are going to be continually used by these private companies because then they don't

have to spend their time and resources developing something that's already pretty sophisticated and

available for free.

So autopilot software used cost like $10000 for cheap ones and a hundred thousand dollars for good ones.

And by 2012 2013 the public code base had advanced to the point where almost all of the three features

that were available in it were comparable to the expensive autopilot software.

So this is rapidly decreasing the barrier of entry into the drone space which is making the drone world

kind of go exponential in a way because you don't need to spend $100000 to make a drone company now.

And on top of that with the open source model though the community is contributing to the development

of this software and these companies aren't having to spend this money to make the the software which

makes them focus on the higher level application of drones.

And with all this I really think we're on the eve of a drone industrial boom with the open source community

and the lowering of the barrier of entry into the drone world for both developers and businesses.

The application of drones is really about to take off.

So the earlier you can learn these open source tools the more equipped you will be to handle this exciting

world in the future.
```

- video 15: ardupilot install part 1
```javascript
So in this video we're going to install and initialize the already private repository that we're going

to get from.

So let's pull up a terminal and let's go to

and let's make a new directory called A.P.M. and that's where we'll store our order repository.

It's going to A.P.M. now or in the A.P.M. directory and let's go ahead and install ARDE pilot from get

up and we can do that with this command here and we'll use it clone which will let us download the code

and just copy the code from the URL that specified that you are going to be the web address of the repository

that we're downloading from and then we can specify a particular branch that we want to down.

Raising the minus B option will use minus B and then branch we want to use is compter dastards point

by point by point to make sure we're all using the same branch in this course so that we're as close

as possible to having the same code then go ahead and enter.

And this will take probably around 10 minutes to finish downloading.

All right.

And once that download is done go ahead and test it and you'll see we have a new directory called pilot.

Let's go ahead and call in to argue pilot and once we're in here the Ardee pilot repository is actually

made up of a bunch of different sub repositories that his previous projects that were included in the

already pilot repository.

So we need to initialize those sub repositories and we can do that with the following command.

All right.

Get submodule update and then dash dash in it and then dash dash recursive.

This will look for all of the sub modules that are in the order product code base and initialize them

automatically for us.

So let's go ahead and enter and then this will take maybe about 10 to 15 minutes.

Well aren't.

And then once that's done we only have to do one more thing we need to add a particular directory to

our path environmental variable CD into tools and then auto test and we'll see a bunch of files on here

that are useful but we don't want to have to be in a directory to call the files every time.

So we want to launch some vehicle.

We don't want to have to navigate to auto test directory every time.

So what we can do is put this directory in our path environmental variable sorts type PWP and we'll

copy this

and then we'll go into our bash RC file type pseudo v. bash or C and then will type the following.

Well export path.

And then we'll put in double quotes the directory that we just copied the octet directory and then a

colon and then dollar sign and path.

So this is going to do is prepare our path environmental variable with this new directory.

So now it's going to look in this directory first.

And each time it sees an executable file puts it escaped and then shipped colon and then WQ to say now

we need to initialize our bash rc files since we just changed it.

All right.

So let's test this out.

Let's go into a directory where we don't have Simbi equal.

So now we're back in Ardit pilot.

So if we successfully added auto test to our path variable we should be able to type Symm underscore

and then hit tab and it should auto complete for us as because the auto tests successfully in our path

variable.
```


- video 16 : ardupilot install part2
```javascript
OK so in this video we're going to look around the pilot directory base a little bit.

Let's pull up a terminal and let's go to of course route

and there is A.P.M. will go to the A.P.M. directory.

OK.

We're going to be going to this directory quite a lot.

So it might be a little annoying to have to do those CDs every single time so we can do is make a new

environmental variable called A.P.M. that will point to this directory so we can just automatically

say CD to A.P.M..

It'll take us to this full path.

So go ahead and type PWT and grab the full path at the A.P.M. directory is and will copy this.

And then let's V-I into our DOT bash RC file types.

This right here.

And then hit enter

and let's go to the very bottom of the file.

Hit shift in G.

I for insert then hit enter to make some more space.

OK so now let's type export A.P.M. equals.

It's paste in that directory that we just grab.

There we go.

And now let's hit the escape key to shift colon and then WQ and this'll save the content that we just

modified.

And now we've changed the bash RC file but now I need to make it official.

So let's say

and then hit enter.

All right.

Now let's echo our new environmental variable OK.

So now I have an easy three letter variable that can take us to this directory whenever we want.

So let's go there right now.

Let's say CD dollar sign A.P.M..

Here we go.

It's going to ARTA pilot and let's list it and look around.

You'll see we have a lot of stuff in here.

Let's go over some of it.

So as mentioned previously the pilot code base can be built for many different vehicle types and you

can see that here and these directories you have antenna tracker A.P.M. Rover Arti copter plane Adisa.

All of this is human readable source code that is specific for that vehicle.

Alternatively you have this right here the library's directory in all of these vehicle types share some

code in this library directory.

So there may be some Kalman filters that are defined in the library's directory that can be applied

to any vehicle type you might have some different math libraries things like that.

And then once you compile your source code into an executable a new directory will be made and that

will be the build directory and that will be where the binary compile elation of your source code will

be stored.

But how do we compile the code.

Well the primary tool in our pilot that is used is the WAF tool and we need to specify the vehicle type

and the hardware target they are compiling to.

So the hardware target just means the specific piece of hardware that you want the pilot code to run

on.

So is it going to be running on a Pixar is it going to be running on an Aveeno.

We need to install the code uniquely to fit that piece of hardware that we're compiling to.

And you can see a list of the different hardware boards that are available to us by doing the following

command.

All right.

So you'll see these are all different hardware types that we can compile to.

We have a beagle bone black mini a beagle bone blew a pick's hawk for Navajo.

So these are all hardware.

And then the cool thing you'll see here is that our Siddall target is listed in the list board's list.

Even though it's purely a software drone.

So the autopilot codebase treats this purely software drone Siddall as its own hardware target type.

You could think of the target type as your actual computer since that is what the virtual drone will

be running from.
```

- video 17 : flight mode in ardupilot
```javascript
What is going on.

So in this video we're going to check out some of the flight modes that are available to us in the pilot

software code base.

But what exactly is flight mode.

What a great question.

So let's think of a truck a truck that might have two wheel drive.

It might have four wheel drive.

If it's a futuristic truck it might have an autonomous driving feature where you don't need a a driver

at the wheel.

So you have three different ways of driving the same truck or the same vehicle.

Well it's the same thing with our drone.

So we have the same drone hardware the same thing that can fly the same vehicle but flight modes give

us different ways to control the drone.

Here's a couple examples here.

In the stabilized flight mode is a manual flight mode that requires a pilot on the ground controlling

it with a remote controller.

So the drone is moving due to the pilot's manual input commands with the remote controller.

Now that loiter flight mode is a little bit different.

You can fly around with a remote controller like you can stabilize flight mode but if you don't provide

any RC input then the drone will lock in place.

It's kind of a whole different sensors like the barometer.

I am use to determine its place in three space and it's going to automatically try and maintain its

place in 3-D space without the necessity of a pilot.

So there's a lot of flight modes and we'll check some of them out here at this link here.

Definitely check this link out if you want to learn more about flight modes.

So there's around 20 but for US drone programmers who want to automate drones we really only have to

worry about let's say about four flight modes.

Those are the guided flight mode the auto flight mode RTL and land.

So the guided flight mode is a cool little mode.

It doesn't move at all until it receives a movement command through a map like message.

So if we have some sort of telemetry connection where we can send maverick messages to our drone for

example we could tell the drone to move from this waypoint to this waypoint.

So it is reactive to the ground control station commands.

Now the auto mode is similar in some ways in that you don't need a manual pilot to control the drone

in auto mode but it's similar in that it's not reactive like the guided mode.

So the auto flight mode is essentially a predestined flight path that the drone will take.

So you'll make this list of commands that will create a mission and then you will upload that mission

to your drone.

And then once the drone flips into auto mode then it executes on that mission.

So it's predestined and a simple mission example might be command one.

Don't take off into the air command to fly to this waypoint command 3 land the drone.

So all that will get done automatically then the RTL flight mode is pretty cool.

So if you're flying the drone around the air and you flip into RTL mode it's going to fly to a pre-determined

height which is around 15 meters but you can change this and it's going to fly back to the place that

you launch the drone from.

So that's why it's called Return to watch whenever you flew it to.

It has saved the home coordinates on the onboard computer footprint RTL mode.

They'll fly back to your home coordinates and then land the land.

Flight mode is any less sophisticated close cousin of the RTL mode because whenever you flip into the

land mode the drone just simply begins a gentle descent.

It does not fly back to the location from where you launched from.

All right.

So let's check out some of these flight most a little more detail at this link.

Again the Arti pilot documentation is amazing.

So whenever you have any questions it's probably already answered in the pilot documentation.

So here's a complete list of all the flight modes that you get to use in the Artic pilot code base.

And as you can see we have a lot of different flight modes but it's simplified for us because drone

programmers only have to worry about a couple of these.

But regardless you can if you want to find out more information about the flight mode.

You just find the flight mode click into it and then there's a dedicated page that goes into extreme

detail for that particular flight mode.
```


- video 18 : Sitl introduction
```javascript
All right so in this video we're going to launch our very first Siddall drone that is our simulated

vehicle that we can interact with as if it's a real drone but we don't have to spend a dime you know

buying in all the pieces and putting it all together and just to figure out that it doesn't work at

all.

We can directly start programming on this little drone.

In the last video we installed the Arctic code base and that comes with the sim vehicle got pi tool

and that is one way that you can launch Siddall instance.

What exactly does sim vehicle that pide do it first to text what type of vehicle that you want to build

for.

So if you are on a copter plane or rover all that sort of stuff and then step 2 it looks for a previous

build for your requested vehicle.

So there's a build directory that gets created where the binary builds are stored after you compile

for particular vehicles.

And if your requested buildings are there it'll just simply go to Step Three and launch that build.

But if the vehicle you're trying to launch doesn't have a build for it already it will start to compile

the code for you.

So take all the human readable code and compile it into the ones and zeros that can then get executed

as a actual program.

So after compiles it then launches that executable and then in step 4 it launches a map proxy instance

which gives you an interface to interact with the drone from a ground control station.

Where is this tool located it's located at the arty pilot slash tool slash auto test slash Simbi called

up high.

All right.

So let's get to it.

Let's pull up a terminal and navigate to the A.P.M. directory and they're going to ARDE pilot must go.

It's going to ARDE copter.

Now you can start some vehicle without being in the copter directory but if you're in the copter directory

that is telling some vehicle what vehicle type you want to build.

In this case the copter you could specify the vehicle type you want.

If you launch some vehicle from a different directory it's just a convenient way to launch some vehicle.

All right so some vehicles should already be in our path so he can type sim underscore and hit tab and

it should wait until we can start some vehicle with a bunch of command line parameters that is command

line arguments that change the launching behavior of some vehicle switch type dash dash map and dash

dash console dash dash map does is launch a geographical map that tracks our drones location.

So if the drone moves from one location to another you'll be able see that on the map and what dash

dash consulars is launch a little interface that reports and monitors different bits of information

about your drone in real time.

So you can see what flight mode you're in.

You can see if the drone is armed.

You can see the battery life of your drone stuff like that.

So let's hit enter.

And if you haven't ran this command before it could take 10 to 15 minutes as your computer compiles

the code into a binary executable form.

But after that the sim vehicle command should only take about 30 seconds to launch.

And that is because you don't need to compile the code more than one time.

OK so now everything is launched and ready to go.

Here's our console right here.

As stated earlier if it automatically monitors a bunch of different information for us so we can see

here what flight mode we're in and stabilize fight mode and the drone is currently not armed.

So this is in red if it was armed it would be green.

CGP is healthy again Green is good red is bad.

These are battery voltage.

You can see our altitude here.

So a bunch of cool stuff that we just get a nice little interface to automatically and then down here

we get to see firmware messages.

So as the drone is setting himself up we can see oh now the Kalman filter is using the GPS.

So we're good to go.

And then here this is our map.

It might not automatically prompt you with the map that loads.

So you can click on the View tab go to service and then right now a good map that has been working for

me is the Microsoft hybrid.

So you click on that and it will load up your location of your drone as you can see there's a little

drone emblem indicating the location of your drone.

And a little house that indicates the home or launch position of your drone.

And then last but not least our map proxy terminal is launched right here.

And this is our interface that we have to the drone to communicate with it and gather information from

it.

So without further ado let's start playing with the drone.

So and Maff proxy you can change the flight mode by typing mode.

And then the flight mode you want to be in if you want to be a guided flight mode just type guided if

you want the drone to be in land mode type land or auto mode.

So in this case we're going to change into guided mode because in guided mode the drone can accept map

link command in order to move in stabilize mode.

That's a manual flight mode where you need a RC controller in that sort of thing.

But here is when he's mapping commands to move the drones were in guided mode now will type arm throttle

and that will make the prop start spinning in a slow speed.

And this red arm will change to green and if you don't begin to take off shortly after arming the drone

the drone will automatically disarm.

This should turn red here in a little bit.

There you go.

So to take off the drone has to be armed.

And then you'll type this command takeoff and then altitude and meters that you want the drone to fly

to.

So right after we type our throttle We need to quickly type takeoff and then to the height we want the

drone to fly to and then you'll begin to see the altitude start to climb.

So let's do that again.

Let's take our throttle our drone is armed so it's type takeoff and then 10 and now you'll see our altitude

start to climb.

OK.

That indicates that our virtual drone our simulated drone is now hovering in the air and you can see

we're Polin 28 amps on this virtual drone.

And now we're in the air so we can do some cool stuff with MAP proxy here.

We'll get into that later.

But also even on the map you can say right click and say flight to stay at 10 meters

and now we're seeing the path that the drone is flying to.

You could see the little arrow of the heading that indicates the direction that the drone is traveling

in.

So this is a really neat because the tools that we're using while we're only dealing with a simulated

drone here all of our map proxy skills that we learn are going to be directly translatable to a real

drone in a real environment.

So this allows us to practice some things that can be used in the real world.

Right from our couch.

So we're going to be using this Siddall drone to test out all the various open source tools that are

available to the drone world and all of those open source tools are again like Maff proxy tools that

can be used in a real environment with a real drone So while we're practicing on this fake little drone

over here you shouldn't think of it as that you should think of this as some training period where we

get to learn all the tools we need for free because all of this is open source.

All right so in this video we're going to launch our very first Siddall drone that is our simulated

vehicle that we can interact with as if it's a real drone but we don't have to spend a dime you know

buying in all the pieces and putting it all together and just to figure out that it doesn't work at

all.

We can directly start programming on this little drone.

In the last video we installed the Arctic code base and that comes with the sim vehicle got pi tool

and that is one way that you can launch Siddall instance.

What exactly does sim vehicle that pide do it first to text what type of vehicle that you want to build

for.

So if you are on a copter plane or rover all that sort of stuff and then step 2 it looks for a previous

build for your requested vehicle.

So there's a build directory that gets created where the binary builds are stored after you compile

for particular vehicles.

And if your requested buildings are there it'll just simply go to Step Three and launch that build.

But if the vehicle you're trying to launch doesn't have a build for it already it will start to compile

the code for you.

So take all the human readable code and compile it into the ones and zeros that can then get executed

as a actual program.

So after compiles it then launches that executable and then in step 4 it launches a map proxy instance

which gives you an interface to interact with the drone from a ground control station.

Where is this tool located it's located at the arty pilot slash tool slash auto test slash Simbi called

up high.

All right.

So let's get to it.

Let's pull up a terminal and navigate to the A.P.M. directory and they're going to ARDE pilot must go.

It's going to ARDE copter.

Now you can start some vehicle without being in the copter directory but if you're in the copter directory

that is telling some vehicle what vehicle type you want to build.

In this case the copter you could specify the vehicle type you want.

If you launch some vehicle from a different directory it's just a convenient way to launch some vehicle.

All right so some vehicles should already be in our path so he can type sim underscore and hit tab and

it should wait until we can start some vehicle with a bunch of command line parameters that is command

line arguments that change the launching behavior of some vehicle switch type dash dash map and dash

dash console dash dash map does is launch a geographical map that tracks our drones location.

So if the drone moves from one location to another you'll be able see that on the map and what dash

dash consulars is launch a little interface that reports and monitors different bits of information

about your drone in real time.

So you can see what flight mode you're in.

You can see if the drone is armed.

You can see the battery life of your drone stuff like that.

So let's hit enter.

And if you haven't ran this command before it could take 10 to 15 minutes as your computer compiles

the code into a binary executable form.

But after that the sim vehicle command should only take about 30 seconds to launch.

And that is because you don't need to compile the code more than one time.

OK so now everything is launched and ready to go.

Here's our console right here.

As stated earlier if it automatically monitors a bunch of different information for us so we can see

here what flight mode we're in and stabilize fight mode and the drone is currently not armed.

So this is in red if it was armed it would be green.

CGP is healthy again Green is good red is bad.

These are battery voltage.

You can see our altitude here.

So a bunch of cool stuff that we just get a nice little interface to automatically and then down here

we get to see firmware messages.

So as the drone is setting himself up we can see oh now the Kalman filter is using the GPS.

So we're good to go.

And then here this is our map.

It might not automatically prompt you with the map that loads.

So you can click on the View tab go to service and then right now a good map that has been working for

me is the Microsoft hybrid.

So you click on that and it will load up your location of your drone as you can see there's a little

drone emblem indicating the location of your drone.

And a little house that indicates the home or launch position of your drone.

And then last but not least our map proxy terminal is launched right here.

And this is our interface that we have to the drone to communicate with it and gather information from

it.

So without further ado let's start playing with the drone.

So and Maff proxy you can change the flight mode by typing mode.

And then the flight mode you want to be in if you want to be a guided flight mode just type guided if

you want the drone to be in land mode type land or auto mode.

So in this case we're going to change into guided mode because in guided mode the drone can accept map

link command in order to move in stabilize mode.

That's a manual flight mode where you need a RC controller in that sort of thing.

But here is when he's mapping commands to move the drones were in guided mode now will type arm throttle

and that will make the prop start spinning in a slow speed.

And this red arm will change to green and if you don't begin to take off shortly after arming the drone

the drone will automatically disarm.

This should turn red here in a little bit.

There you go.

So to take off the drone has to be armed.

And then you'll type this command takeoff and then altitude and meters that you want the drone to fly

to.

So right after we type our throttle We need to quickly type takeoff and then to the height we want the

drone to fly to and then you'll begin to see the altitude start to climb.

So let's do that again.

Let's take our throttle our drone is armed so it's type takeoff and then 10 and now you'll see our altitude

start to climb.

OK.

That indicates that our virtual drone our simulated drone is now hovering in the air and you can see

we're Polin 28 amps on this virtual drone.

And now we're in the air so we can do some cool stuff with MAP proxy here.

We'll get into that later.

But also even on the map you can say right click and say flight to stay at 10 meters

and now we're seeing the path that the drone is flying to.

You could see the little arrow of the heading that indicates the direction that the drone is traveling

in.

So this is a really neat because the tools that we're using while we're only dealing with a simulated

drone here all of our map proxy skills that we learn are going to be directly translatable to a real

drone in a real environment.

So this allows us to practice some things that can be used in the real world.

Right from our couch.

So we're going to be using this Siddall drone to test out all the various open source tools that are

available to the drone world and all of those open source tools are again like Maff proxy tools that

can be used in a real environment with a real drone So while we're practicing on this fake little drone

over here you shouldn't think of it as that you should think of this as some training period where we

get to learn all the tools we need for free because all of this is open source.
```


- video 19 : DEBUG view missint from map window
```javascript
no transcript
```


- video 20: parameters in ardupilot
```javascript
What is up.

So in this video we're going to learn about parameters in our pilot.

So what exactly is a parameter.

Well as to the dictionary definition first is essentially a variable that can be set to different values

to modify the behavior of your Aarthi copter executable.

So you don't have to recompile every time you make a small little change to your drone that didn't make

any sense.

Don't worry I have an analogy in my pocket so let's say you bought this brand new fishing pole.

It was made out of gold it perfect to rely on it had a handle like a like a pillow.

There's only one problem.

The louer that came with the pole could not be removed from your pole so you're stuck with that one

louer.

What would be pretty stupid because what if you wanted to change your louer and trinkets different kind

of fish.

Thankfully that's not how fishing poles are made fishing poles are made so you can change out your Luers

whenever you want to try to catch a different kind of fish so for us the fishing pole is like the ARDE

copter executable and the Luers that we can change or like the parameters.

So when we compile our copter executable we take a bunch of files like a hundred files compile them

into one giant executable and then that executable reads parameter values that are external to the executable

file.

So that way we can change that parameter file and those changes will get read in by the Ardie copter

executable OK.

You're like oh that's nice.

What were we actually ever have to change.

Well let's get into a couple examples.

So this is a pretty handy one aren't here.

Allt this is a parameter that designates the height that the drone will fly to when it switches into

the RTL flight mode.

And it's in units of centimeters.

So you'll see later on that when you switch to RTL mode the drone will fly to around 15 meters.

Well that's because the RTL value was sent to 1300 centimeters and we could change that if we want to

we could change that to 8000 if we wanted.

And the drone would then go to 80 meters and we wouldn't have to recompile our code no one battery capacity

or that capacity is in units of milling amp hours.

Here you can tell the Arti copter software the capacity of your battery and then that can be used for

some other calculations within the code base.

Now this one is pretty powerful.

It is angled Max in senti degrees so the angle you pass in here will be the maximum angle that the drone

can rotate to.

So if you want your drone to tilt forward and start flying forward and we have this at 20 degrees it

will only be able to tilt forward at 20 degrees if you change this to 80 degrees.

Then the drone could rotate to a maximum of 80 degrees.

So you're getting some pretty drastically different behavior and a change in one simple parameter.

Now if you want to see a full list of the parameters that we have on a personal vehicle we can pull

up that terminal and check out the file.

It is called Maff dot parm and this file is created in the same directory that you launch sim vehicle

from.

And it saves all of the parameter values of your Siddall vehicle at the time that the Siddall vehicle

was closed.

So let's pull up a terminal and go to A.P.M.

R2 pilot

and we've been starting our sim vehicle from Ardi copter So it's going copter

and let's see if we can find Mabena part there we go.

Now how many how many parameters do we have.

We can do that with this command.

So we have 800 50 different parameters.

That is a lot of parameters.

This is the complete list.

So all of these work you yourself can change to whatever you feel is appropriate for whatever you're

trying to accomplish.

And let's try and I end the current value of RTL all.

All right.

So RTL was set to 4500 centimeters the last time our sim vehicle was launched from this directory.

But how would you have known that this was in units of centimeters if I was just telling you.

Well that's where the Ardi pilot documentation comes in handy.

And this link provides a brief explanation of every parameter available in our pilot.

Here's the complete ARDE pilot list of all the parameters we have for us as you could probably tell

it's a super long page.

So now you can start to search stuff if you want to get more information about it.

You can search for RTL variable or tail parameter

and there it is.

Now we get a little short description here.

The minimum altitude above home the vehicle climbed to before returning.

OK now we see a range here is between 200 and 800.

And what number is that.

What's in units of centimeters are still all variable that we checked out in the mapped file was 4500

that is fortune on or centimeters or 14 meters.

There's a bunch of other cool stuff you can check out.

Odds are if you want to change some simple functionality about your drone Oh you'll have to do is search

around for a parameter relating to the changes that you want to make.

And it probably already exists because there's a hundred fifty plus parameters it is more or less depending

on what software version you're using.
```

- video 21: parameters with sitl drone and mav proxy
```javascript
All right.

So we learned a little bit about parameters in the last video in this video.

We're going to use Map proxy to interact with our Siddall drone.

We're going to use two new commands to interact with parameters of our civil drone.

And one is going to show the value of our requested parameter and the other is going to set the parameter

to a particular value.

So in the first case where we just want to see the value of a parameter or type parameter show and then

the name of the parameter one of those 850 parameter names that we want to see the value for and then

Maff proxy.

The parameters are actually case sensitive.

So it doesn't matter if you're all uppercase or lowercase.

But then when you run this it will return the value of RTL Alt.

Now alternatively if you wanted to set the RTL parameter to a specified value you could type paradym

set the name of the parameter you want to alter and then the value you want to alter the value to you

could do pram set RTA Allt and then the number you want to change it to.

And again this is all in Maff proxy.

So this is our map proxy method of interacting with the parameters of our Siddall vehicle.

So it will get to it.

Let's pull up a terminal

and go to the APM directory pilot and our copter.

Let's launch a sim vehicle will do that with both the console and the map.

All right and everything's pulled up.

And don't forget to change the service of your map in case yours isn't loading.

All right.

So let's see the current value of art here at it's like Primm show.

And then the name of the parameter.

OK.

So our RTL parameter is currently set to 14:00.

So if we switch to RTL alt mode all the drones in the air it'll fly to 14 meters before returning home.

Let's see another one.

Supremum show grip and enable.

So this is actually really cool.

So this grip and Nabl is a boolean.

It is zero if you don't have a gripper on your drone and a gripper for like package delivery or something

and if you do have a grip on your drone you will make this a one so you can change one single parameter

to notify the arder pilot executable that it is using a gripper.

So you get to notify the article or firmware of the hardware situation by changing simple parameters

to a really cool way with enacting different pieces of hardware.

Let's check out another parameter and this one will be specific to Siddall vehicles.

So one thing that is very handy about Siddall vehicles apart from it being a virtual drone that you

can program from your from your couch is that you can easily test out software changes to the Ardie

pilot code base without having to test it on a real drone.

So if you change some stuff about the source code it would be pretty inconvenient after you have to

go out to the field every time and test it or one that wouldnt be safe in into it wouldnt be convenient.

So what you can do a lot of time with the Siddall vehicle is emulate different scenarios to see what

the firmware will do.

So we'll look at one parameter called Sim and GPS disable and it lets you emulate a bad CPS.

So right now our GPS is green indicating its in good health.

Let's see what the current value of Sims has to say is

OK so it's zero.

So let's change this to a one and we can do that by using the pram set map proxy command and then the

name of the parameter

and then the value we want to set it to.

In this case 1 when we do this we should see the GPS turn red.

There we go.

And now let's look to see what the pilot firmware reports to us in the event of having a bad guess.

Ok cool so we got this message sent to us from the pilot firmware indicating us that the EKN has stopped

aging.

This is really cool.

We got to test out what the firmware would do what the code would do on our drone in the event of having

a bad guess without actually having to test it on a real drone.

OK so let's set the GPS back to good health.

So or do Primm set and then all change simply disable back to zero.

All right let's do one more thing.

Let's set the RTA all parameter to 21:00 with the Prim's set RTL.

All the name of the parameter and then the value we want to set it to.

Let's do a pram show on RTL or just verify that we successfully change the parameter value.

OK so that's good to go.

Now let's test this out with the drone flying in the air and switching to RTL mode.

And let's verify that the drone flies to around 20 meters 21 meters before flying home.

So first thing let's change into a guided mode because we can command the drones movement with MAP proxy

and guided mode.

Now let's arm the throttle.

Now let's take a look and let's go to a height of nine meters just to irritate the OCD people.

OK.

Drone is launching into the air.

Read about nine meters and the thing to note here is this is not around the altitude that is present

presented to you on the console does not round up.

So it's probably like eight point eight meters or something like that.

OK.

So now let's fly the drone around here.

This would satisfy the CDs and go to 10 meters so a drone is now flying that way point.

Now let's switch now to the RTL flight mode.

We'll carefully observe that the drone does not move and the latitude and longitude coordinates until

it reaches the specified altitude.

And then once it reaches that specified altitude then it will begin its journey back home.

So let's hit Enter go into RTL mode.

OK.

Altitude is climbing and the drone is not moving and the latitude longitude directions.

Now we're at a height of 20 meters.

Now the drone can successfully run home because it's close to 21 meters.

So this is really cool.

We changed the behavior of our drone simply by modifying a parameter and we didn't have to recompile

any code.

So this is just scratching the surface on parameters as you've seen there's 850 other parameters and

they're each powerful in their own little way.

They're all little snowflakes.

So I'd definitely encourage you to go check out the documentation on parameters and get a better feeling

for some of the more highly used parameters because ultimately the more you know about parameters and

Arti pilot the more dangerous of a drone programmer you will be.
```

### section 4 GCS

- video 22 : intro to gcs
```javascript
All right.

So in this video we're going to go over ground control stations we've been dealing with them a little

bit to this point but in this video it's going to be a little bit of a lower level approach.

So what exactly is a ground control station.

Essentially it's some sort of computer that can connect with a drone and communicate with it.

It can be used to command the drone or monitor the drone.

Commands could be you know moved to this waypoint or return to launch or things like that and monitoring

information could be things like seeing what the current status of the GPS health is saying what the

battery levels are like seeing how fast the drone is moving.

Things like that.

And typically when people refer to the ground control station they're referring to some sort of gooey

but that doesn't necessarily have to be the case because Maff proxy is not a duty per se.

So the bare bones ground control station is just a off board computer off board from the drone that

is able to bidirectional communicate with the drone in the air.

So it was just an interface into your drone.

Here is a stupid analogy just in case you didn't get the picture from the last slide.

So let's imagine you're a customer at your favorite local store and you're trying to communicate with

the cashier Well how are you going to do that.

How are we going to solve this communication problem.

Well you're the customer you're going to start talking from a high level we're going to start talking

to the cashier.

Ok but how do we know that we're not just saying much a noise is that the cashier isn't going to know

how to interpret.

We both have to be sharing the same language.

If I'm speaking Spanish and the cashier speaks English I can be talking all I want but the cashier isn't

going to interpret anything.

So we need this common medium layer that is the language barrier and that the low level we need are

words that we're talking in English to transmit somehow to the cashier.

And that is done through sound.

So our vocal chords will create some noise and then the ears of the cashier will catch that noise the

words will be interpreted as English because we're both sharing this English layer and then our words

will get sent to the cashier's brain which will then be able to interpret our request and grab that

package of bubble gum that we are asking them for.

So here's some fancy arrows just in case you didn't get that well the same can be said for our drones

in our Grand Central Station communication.

So let's say we want the drone to land and let's start at the high level of the ground control station.

So at this high level we have mapped proxy where we could type a command telling a drone to land or

we could press a button and queue ground control that would tell the drone to land.

But either way their request for the drone to land will cause a land message in the protocol to get

created and that is message number 76 command number 21.

So this maverick message will get created all packaged up all the ones and zeros set in place and then

that package will get sent through the low level which in which could be telemetry where the magnetic

message gets sent from one telemetry module to the drones telemetry model or it could be through a TCAP

or UDP IP interface.

But that message gets sent to the drone.

But how do we interpret that message.

We're both using Map link to define our speech in this case.

So since we're both using that link we know already that the request that is coming in is more of a

link.

Message number 76 21 which means that the ground control station wants us to land.

So then that interpretation will get sent to the pilot which is like the brain of the drone and R2 pilot

will say hey we just got this maverick message telling us to land.

I'm going to go find the appropriate code that needs to get ran and the R2 pilot code base in order

to make that happen.

And this can work by directionally the drone can send us information through the same process and ground

control station can use that process.
```


- video 23 : mavproxy overview
```javascript
What's crackin.

So in this video we're going to check out Maff proxy and talk about in a little more depth.

You've been using it to this point but haven't really been talking about it too much.

So what actually is math proxy.

Well it's essentially just a command line version of a ground control station which is extremely lightweight

and written in Python.

So most of your ground control stations are little more heavyweight meaning they might have a nice visual

interface to the drone.

Might have a bunch of fancy buttons that you can press to interact with your drone.

But Matt proxies just simply a command line ground control station and it's an open source project you

can check out the documentation on a map proxy at this link.

So how do you connect a map proxy to your drone.

Well when we launch our sim vehicle tool it automatically launches and connects map proxy for us.

But if we want to do it manually This is how we would do it.

So when you're Siddall drone launches it opens up a port that is listening on and its primarily TZP

local host and then port pathy 760.

So the drone saying hey I'm going to open up this connection and wait for some Gramp patrol station

to connect to it.

So then when you start mabbe proxy you just type map proxy got pi and then you use the dash dash master

option and this dash dash master option specifies the IP address that the drone is listening on.

So a drone is listening on this IP address.

So we specify that after the master option of map proxy and then after we hit enter here we establish

a connection with our little drone and we can send and receive Madalena messages just like you could

and you ground control or mission planner or A.P.M. planner.

It's just an extremely light weight command line version of a ground control station that can use Map

link messages to communicate with your drone.
```


- video 24 : connecting mavproxy to drone
```javascript
All right so in the last video we got a short little introduction to Matt proxy and this video we're

going to manually connect a math proxy to our Siddall drone.

We've been starting Siddall so far with the sim vehicle too.

And it's a very convenient tool but the one thing that it does automatically for us is launch and connect

map proxy to the civil drone.

And in this case we want to get some experience connecting to the drone manually.

So we're going to have to start our Siddall drone a little bit differently.

So we're going to start the drone by running this giant command here.

And the only thing you'll have to change on your system is the parent directory to wherever you have

of course route which is most likely just a changing up your user name right here.

OK so let's pull up a terminal here.

Let's go to the APM directory

an the pilot

and let's list it.

We're not going to go an article this time because we're starting the Ardie copter executable manually

and that executable is stored in the build directory.

So we'll go into build every time you compile some source code for a particular vehicle.

It gets stored in the build directory.

So let's list this.

And here's our Siddall vehicle.

So we'll going to Siddall and then list it.

Now it's going to been

in here you can see our green ARDE copter executable.

This is the result of our compiled nation so we can start this like it's a normal program and we'll

do that with this giant command here.

Let's copy this in and make sure to change your directory to the copier parm file.

Let's paste this OK.

Now let's enter it cool so we have manually started our Siddall vehicle with that giant command.

And now it says waiting for a connection.

So the Siddall vehicle is waiting for a connection on port 57 60.

So let's pull up another terminal and connect it with the map proxy.

So what control t you want to type map proxy.

And then dash dash master and then the IP address that the drone is listening on so we know it's using

the TCAP protocol on port 57 60 on local host civil rights GCP Colan than our local host colon.

And then the port 57 60.

So enter and cool.

So we have established the connection.

Here's our drone terminal over here.

And here is our ground control station our map proxy terminal here.

And you can see it looks just like it does when we launch the same vehicle tool so we can do things

like change the flight mode

Rican arms.

The drone is the exact same map link interface to our drone or still drone.

And we just did everything manually in this case.

So if nothing else this will give you a greater appreciation for what the sim the actual tool does since

it launches Matt proxy for us.

But there will be some scenarios where it will be useful to know about MAP proxy and the manual way

to connect to the drone because you're not always going to be programming the Siddall vehicle when you

start programming a real drone.

You're going to need some map proxy knowledge on your own.

So hopefully this will equip you with those circumstances whenever you need to.

Back to your drone with MAP proxy on your own.

```

- video 25 : QGC install
```javascript
All right.

So we're starting to get pretty you with MAP proxy to this point.

And as stated previously it's pretty common practice to have both your your command line version of

a grand central station connect you to your drone as well as a visually base ground control station

connected to your drone.

So we have the the command line right now in MAP proxy.

Now let's install a gooey a graphical user interface version of a ground control station and we're going

to use to ground control.

It's not our open source program and we're going to download it from this link.

And then we're going to add it to a global path a global directory so that we can reference that executable

or that app image from wherever we are on our file system.

All right let's get to it.

Let's copy this link and go to the Web site right here we are.

Now let's go down to Linux and boot to Linux.

And we'll just click on this download button

and this should take about a minute and then we'll pull up a terminal.

All right.

And we'll go to course through and let's make a directory called SIRC for source.

And that's where we will store our app and mintage that we just downloaded

notes go into source and let's copy in that app image that we just downloaded.

And you can do that with this command right here aren't.

So we're copying the file that we just downloaded the Q grand control that image and then right here

we're naming the copied file.

So let's just call it what it already is.

Q On patrol the app image and her

let's list the directories let's do ls minus L OK so here is our file and you'll see here that there

are no Xs and if there's no Xs here than our file is not executable.

And since this is a program we need it to be executable code we can do is type C S.H. maade and then

plus X and then the name of the file and then enter

and then let's do ellos mines again OK now you see that we have X's for the different groups that can

call this file and that indicates that the file is now executable.

In addition to that the file is now green which also means the files executable.

So this is ready to go.

The only annoying part would be that we don't want to have to be in this whole path any time we want

to start new ground control.

So what we can do is just place this file or we can make a copy of it and place it in a directory that

is in our path environmental variable and any file that's in our path environmental variable can be

referenced directly without having to specify the complete directory.

So let's do that illustrates sudo.

Copy.

And then the name of our file.

And now we specify the directory that we want to copy it to and a common one that we can use is us or

we'll call bin OK.

And now let's do another forward slash and let's name this something different than to grab that app

image.

Let's name it something a little less verbose let's just call it Q..

GC dot app image.

And then let's hit enter.

All right.

Now we should be able to type 2 G and then hit tab and it should auto complete for us.

That indicates that from wherever we are on our file system when we have a terminal pull up you can

just type q DC to an image and we'll be able to call this program automatically.

So let's hit enter and launch it up.

All right.

Here we go.

There were a nice little user interface here.

Got the map in the background.

We have a bunch of buttons we can press interact with the drone here we can change parameters here and

we can do some route planning.

Much cool stuff we can see the current altitude of a drone.

We can see the orientation of the heading of the drone on the compass and we can see the Jones current

angles in space.

So this is a handy visual Grand Central Station to pair with the power of map proxy and a lot of the

videos from here on out we'll be using both map proxy in Q and control at the same time.
```

- video 26 : connecting qgc to sitl drone
```javascript
All right so in this video we're going to connect multiple ground control stations to a singles Sudol

vehicle.

We might do that with Maff proxy and Maff proxy has an option called dash dash out and this allows us

to stipulate a new IP address that other rock'n'roll stations can connect to.

It essentially extends its connection that it connects to with the dash dash master and shares that

connection to this new IP address that then other ground control stations can connect to.

So we're going to continue launching these Siddall vehicle manually so we can play around with MAP proxy

manually.

We'll do that with this giant command here.

And the only thing you really have to change is this portion here which is the location of your copter

parm file writhing after your pilot will stay the same.

We'll just have to change this portion.

So whatever the parent directory is to the pilot just specify that here and then everything else will

be the same.

Just pull up a terminal and get to it.

Let's go to the A.P.M. directory.

And then and then build.

It's going to settle.

And let's go into bin and there is our arty copter executable.

Let's copy this in

place to here and let's hit enter.

OK so the Siddall vehicle is currently waiting for a connection on port 57 60.

Let's pull up map proxy and connect to it.

So we know we can do that with math proxy PI and dash dash master and the IP address that the drone

is listening on.

All right.

So we have this connection here now let's say we want to connect RAF proxy in ground control pull up

another terminal and try and wants to ground control terminal crazy everybody gets terminals.

So if you type puji and then hit tab if you place the queue grab control an image in a directory that

is in your path environmental variable then you'll be able to start this like this.

If not just navigate to where you ground control at images and start it with the dot slash and then

the name of your file.

So hit enter to launch queue ground control and then will minimize this terminal.

You'll notice that when queue ground control launches it won't be able to automatically connect to our

Siddall vehicle.

That is because q grand Goetschel automatically looks for a connection on port 14 5 5 0.

Well we can make that happen with MAP proxy so we can hit Control C to kill or Maff proxy and then type

map proxy world run the same command we did last time when they will add this dash dash out and then

UDP when 2:7

And one thing to note most of your crowd control station Curie's automatically look for a vehicle connection

on port 14 5 5 0.

So once we hit enter our map proxy is going to create a new port that other ground control stations

can connect to and map proxy should immediately connect to the drone so enter and see what happens.

All right there we go.

We can see now our ground control has successfully connected to our Siddall vehicle and we did that

through Maff proxy by creating that port that you can control can't connect to.

This is a pretty common setup.

People like to have a ground control station gooey where they can easily see information presented to

them and a map proxy instance gives them an easy command interface to the drone.

Maybe you want to ground control to connect to different port other than 14 5 5 0.

So what we can do is click on this button here and then go to comm links and then if the Add button

and then all type change to TCAP and enter in our local host.

And then we know our drone is currently listening on 57 62 empathies 763

So it's 57 63 here and that is OK.

And now let's click on the communication link that we just created and connect.

And now our Q graph control should be connected on this port instead of its default 14 that the 5:0

setting.

```


- video 27 : mavproxy commands
```javascript
What is up.

So in this video we're going to take a deeper look at some of the math proxy commands we have available

to us.

These are the core commands we're going to be looking at but as we'll see later on there's many many

more we can check out.

And if you want more details on the commands you have available to you check out this link right here.

And let's get to it.

Let's pull up a terminal and we've been starting our Siddall vehicle manually over the past couple of

videos.

But that was primarily to show you how you could manually start map proxy if you wanted to.

And now that we kind of understand how that process works we can go ahead and utilize the convenience

tool of Simbi call to launch our Siddall vehicle.

So let's go to the A.P.M. directory and let's go to our pilot our new copter and this launch sim vehicle.

And we won't launch a map this time we'll just use cue.

Ground control to be our visual interface.

Remember from a video earlier that one of the things that the sim vehicle does for us is automatic start

map proxy and share its connection port to different ports.

So we'll scroll up and see what's happening.

So here we go we're starting to have proxy connecting at 57 60 and we're making some Newport's with

the dash dash out command automatically at Port 14 5 5 0 and 14 5 5 1.

So that means we should be able to pull up new ground control automatically and it'll connect.

So let's pull up another terminal so UGC and start new ground control or wherever you have it located

it enter and it should automatically launch.

OK.

Here we go.

And see here we have our drone here.

This is pretty handy.

This shows us the current attitude of the drone.

So if it moves forward you'll start to see this point down if it starts to roll to the left you'll start

to see this bar move up in this bar move down.

So it's pretty handy interface.

And this is our compass.

It's representing degrees in the absolute frame.

And you see things like altitude and it's just a really handy interface.

All right.

So let's check out some commands.

OK.

And if you want to get a list of the available map proxy commands you can type help in the map proxy

terminal and you'll see a bunch of map proxy commands that you can use definitely more than I have time

to get into.

But highly encourage you to investigate these on your own and see what they do to you or settle down

in addition to that if you find a particular commander interested in you can type the command name and

then help.

And then you can see how to use it.

So here is the last we will see how to use it.

You have to type the command velocity and then three components in X or Y and Z velocity component.

Those are all in meters per second.

Now the X corresponds to the north and south axis of the drone relative to its heading.

So not true north and south relative north and south.

And then the y component corresponds to east and west and then the z is the up and down.

And this is all in the north east down frame so North indicates positive a positive number is north

that east part of any frame indicates that the east direction is positive and the west direction is

negative for the y component and the z component and the of frame d down is positive.

So if you want the drone to move up you actually have to pass in a negative number.

So let's play with this velocity command.

But first let's get the drone up into the air.

Let's go into guided mode because we know that's a mode that can except Madlen commands for movement

and then let's arm the drone and then let's take off to five meters.

And you should see right here the altitude start to rise.

There we go.

And now let's get the drone to move in the west direction relative to its heading.

So how do you do that type zero.

We don't want to move north or so and then minus five minus 5 and then zero will type that minus five

because positive five would move it in the east direction minus 5 will move in the west direction.

So enter and see what happens.

There we go it starts to move in the west direction.

And the thing to note here is whenever you send a velocity command to your vehicle the vehicle will

only act on that command for one second.

So if you want the vehicle to continue to move in that direction you have to send that velocity command

once a second.

Now let's move the drone in the up direction with the velocity command.

And remember we have to pass in a negative number if we want the drone to move up.

So we'll hit Enter having the minus number and the last component of the velocity command you will see

the velocity start to the altitude start to rise.

That we go and it stops after about a second.

All right.

Now our second command is going to be the set your command.

So let's see what that's all about.

So set Yeah.

So we say the angle we want to rotate to the speed.

And then what mode are we in absolute or relative mode.

So an absolute mode you are rotating to the absolute degree coordinates.

So in the absolute frame 0 and 360 is true north 180 degrees is true south 270 degrees is true West

and 90 degrees is true east.

So if we type in zero and a number or an angle to rotate to rotate to a number in the global frame.

Alternatively with the relative frame if we pass it one will be in relative frame.

The drone will rotate relative to its current position.

So let's check this out.

Let's do you set.

Yeah.

And then the angle we want to rotate to what say 180 degrees.

Let's say it 5 for angular speed and then let's say and zero was moving the absolute frame.

So one hundred eighty degrees in the absolute frame is true so we should see the drone move.

True Sal in there we go drone is rotating through south.

Now let's say we want the drone to move 30 degrees relative to where it's currently at.

So it's at one hundred eighty now.

So we want to be at 210 degrees.

Well let's use the relative command this time let's say set.

Yeah.

And then 30 degrees relative to where it's at.

And let's use the relative frames.

Enter and see what happens.

And there we go.

It moved 30 degrees relative to where it was currently at so that's the set command.

Next one will do is the RC command

if you remember in the previous videos there is a standard channel that controls the roll pitch and

the axes as well as the throttle.

So one is pitch two is for roll three is for throttle and four is for ya.

So here with the RC command we can actually fake some RC input that a drone will act on.

So if we type.

RC 4 and then a pulse with modulation value to fake this is saying for Channel 4 let's pass in an RC

input value of 600 and the default values for 1300.

And if we remember 4 is JASO the drone should start to rotate because 1300 means don't rotate in any

divergence from 50 100 will cause the drone to rotate.

So hit enter here.

So we have passed in a fake RC input values or rebuying around the z axis.

Now let's change our C 4 from 6800 to 4300.

And you should see the drone rotate in the opposite direction.

Here we go.

You know if we want it to stop we'll just put it back at 1300 and there we are.

This is a pretty advanced command.

It can be a little dangerous passing in manual RC inputs to the drone because if you type in like RC

3 2000 Well you've just cranked your drone up to 100 percent throttle and is not going to stop until

you tell it to stop.

So it's just going to go straight to space.

So this is an advanced command and probably not the best use of the last one to look at is called The

Long command.

And this is actually symbolic of the command long message that is available mabbe link.

So if we type long and then a command then we can get the drone to do a bunch of different vehicle based

movements or other commands.

So long as the command and then nav land is telling the drone to land.

So we'll do that.

And you should see the drone change into land mode and the altitude will begin to decrease.

So there we go.

Now we can also switch out of the land mode manually.

Let's go back in a guided mode by taking a boat guided and we could have also just typed mode land to

change into landing mode as well.

There are multiple ways to skin this cat so will enter and the drone will begin to descend again.

So we're going to wrap up there in this video.

But like I said earlier highly encourage you to check out all the other commands and practice what they

actually do on your drone if you're interested in that.
```

### section 5 mavlink

- video 28 : itnro to mavlink
```javascript
So to this point we have been thinking and talking about Madeleine from a high level perspective.

And in this video we're going to take a lower level dive into the nitty gritty part of math.

Link So the dictionary definitions of what that link does are as follows.

It's standardizes the communication protocol for sending information.

It standardizes the types of messages that can be sent and it allows for bidirectional communication

between the ground control station and the drone.

So both can receive and send maverick messages but much like a lot of dictionary definitions this might

not have been too helpful.

So I'm going to use an analogy to try and explain this further.

So let's say we have two people trying to communicate how are we going to do this.

Well they can do this by speaking and understanding what the other person is saying.

But you know let's break down what that actually means.

So at the lowest level we have the sound layer we have a vocal chord which can create some sound and

get transmitted through space to the recipient's ears.

Who will then interpret the sound wave and the brain will discern what was received.

But we can't say just any sound and expect the other person to know what we're saying.

If this guy wanted a high five from this girl he couldn't just make any sound and attach that to his

desire.

That's where language comes in that defines a pool of words with objective meaning that also have some

characteristic sound wave pattern that we can create with our vocal chords and also understand with

our ears.

And this allows us to communicate with people that we've never even met before.

So when I say I love avocados you know what I'm trying to communicate well this is extremely similar

to what Madalena provides us when two mabbe nodes are trying to communicate with each other.

So let's do the same exercise.

How does Q ground control communicate with a flying drone.

Well it's going to do this by using the two layers of Magelang.

So similar to the sound analogy we need some consistent medium to communicate with at a low level and

that is done with the message structure of Madlang.

So each Mallik message has the exact same message structure allowing sending nodes to package information

in a consistent manner and receiving nodes to parse the incoming data in a consistent manner.

We provide variability within the consistently formatted Madlang messages by altering the message ID

message IDs are the words of the Madlang system.

So each maverick message will contain a number representing what Madalena message was sent and these

messages all have objective meaning.

So for example message ID number zero is a heartbeat message.

So when Q ground control receives a message ID of zero from the connected drone it knows that the drone

sent a heartbeat message and the drone is still active.

So we get drastically different behavior by altering the message ID of our Magelang message while maintaining

the same message structure.

So here's a closer look at Lehre one portion of the Madelin protocol.

Each Madelin message will always consist of a six byte header and the size of a maverick message can

vary anywhere from eight to 263 bytes.

And this depends on what kind of message IDs is being used.

So the first bite of any Madlang packet is always the hexadecimal number of OS X F.T. So if an incoming

packet does not start with OS X Ephie the drone knows not to interpret the message as a Madelin one

the next byte indicates the payload length and bytes and by index 2 is the packet sequence and can be

used to detect packet loss and therefore the dependability of the incoming message.

Next up we have the system id and the system ID can be analogized to the IP address of a computer each

Madlen network conventionally has the ground control station at a system idea of 255 and a system id

of one for the drone.

But these are simply conventions and can be changed to this by index and the header is stamped with

the system id of the know that sent the message.

So if the ground control station sent the message the system id portion of the header will be stamped

with the system ID number 255.

Next up we have the component ID and to go further along with our IP protocol analogy we can think of

this as the port number.

Typically this is set to 0 and it isn't widely used yet but you could in theory specify the component

ID of the specific part of the drone you want the message to go to like if you wanted the message to

go to the Gimbel or something else.

And the last bite of Madeline Ketterer is the message ID.

It is simply a number representing the type of message that is being received the receiving node can

then parse the incoming data appropriately.

So if we were sending a heartbeat message we would pay zero in this by the body of the metalink message

is the dynamic in bite sized portion of the medaling message.

The data that is passed in is directly correlated to the type of data associated with the message ID

in the byte above it.

So this is all what makes Madelin a programming language agnostic communication tool.

As long as you can make a packet with the standard structure and send the packet to the drone it doesnt

really matter what programming language you use the next video we will take a look at the message ID

and data portions of the modeling protocol for some popular messages.
```


- video 29 : mavlink message example
```javascript
OK so in the last video we got into the first layer of math link or the standard message structure in

this video we're going to look at how we can change the message ID to vary the types of messages that

are sent with the standard message structure the standard message ids will let the receiving maverick

node know how to parse the incoming data and what action should be taken.

Upon receiving the specific message ID the standard also tells the sending raveling Note how to package

up the data into a correctly formatted packets if you want to check out the list of standard Madelin

messages you can check out this link below.

But let's get into a couple of other examples.

So to this point we have been setting parameters with MAP proxy of our drone but under the hood Maff

proxy is actually creating a map like message with message ID number 23 and filling out the appropriate

fields to satisfy our Maff proxy request so message 23 has five standard fields that must be filled

out.

The first one is the target system id of the map we know that we want to set the parameter to.

This will typically be one for the system idea of the drone.

Next we can fill up the target component if applicable but this will most likely be zero.

Now we have the program ID field and we can see its type is a char array indicating to us that we should

specify the name of the parameter we want the change.

So if we wanted to modify the Arkia parameter we would place that string in this field.

After this we can fill out the value we want to set the parameter to with the brand value field.

And finally we can specify the type of the parameter and then all of this gets package together and

constitutes the data portion of the medaling message in the message ID number 23 gets mapped to the

by index number five of the map link header Hetter under Message ID.

And then this will get sent off and once received by the drone it will see Message-ID or 23 in the header

and know how to parse the data portion of the message to fulfill the request.

Let's check.

Another important Madlang message and this is command long metalink message number 76.

This is a very unique maverick message because it actually allows you to command the drone in hundreds

of different ways with the same map like message number 76 this is done by modifying the command field

of the message Mallik provides us with a map of command enim which essentially maps a number to a unique

command.

So for example the map command maps the number 21 to the command to land the drone.

So if we send a command long message with the 21 in the command field the drone will land.

There are many other commands that we can specify some of which may require some additional information

here at the top.

You can see a deeper look into command number 21.

And as you can see we have some parameter values that we can specify for the particular command.

These are not parameters like we've been talking about to this point.

These are simply parameters that define the command that we're sending.

These can be thought of as variables to define the command request.

For example if we wanted the drone to land in required precision landing mode we would write the integer

number 2 to the parameter to field and then all the data populates the command long messages before

it constitutes the data portion of the Magelang message.

So let's pull up the maverick message page that we discussed at the beginning and check out some of

the standard messages and commands with more detail.

OK so here we are at the map link Web site.

Let's check out command long.

Here we go.

So this is what we pulled from the slide and we can see again the command field.

And it uses the map command enim.

So let's look for the definition of this map command ENM and you can find it because the map command

string will be one of the first references of that string.

OK.

Now here we go.

This is the map command.

And we can see here this is the value or the number of the command that gets mapped to the specific

command.

So we can see here if we specified 16 in the command field of command long message number 76 we would

be doing a map command nav waypoint command.

So we would be telling the drone to move to a particular place and we would need to specify where the

drone should move to and that is done.

And five six and seven by specifying the latitude longitude and altitude coordinates and this map command

is a very very long either.

And each one of these numbers as stated before is indicative of a different command that we can send

to the drone.

So as you can see there's a lot of commands that we have available to us to send to the drone.

The one thing to note here is just because the maverick command is specified in the standard Madlang

message protocol does doesn't mean that the software that receives the maverick message is prepared

to appropriately handle that command.

So some of these commands might not actually be available in the Ardie pilot code base for example.

We've looked at the Magelang message number 76 command long and detail.

Let's check out some other map like messages.

OK here we go.

We're starting at the top of maverick messages and we can see here is that message number zero which

is the heartbeat message and message number one is a status message.

So we can get a bunch of information from the vehicle and one little standard message like battery voltage

current battery.

Here's Paramo request read which we've also dealt with a map proxy without knowing that we are using

magnetic message number 20 just request a parameter that we want to know the value for.

And most of them can be appropriately digested by Ardie pilot.

But remember it is dependent on the pilot code base to enact the appropriate code when receiving this

specific message to fulfill the request.

So if the pilot code base receives message number 55 it doesn't call the correct code to handle this

message.

Then it's essentially not usable Navteq is only a message standard.

It doesn't directly command the drone only tells the drone of our request it is still dependent on the

already pilot code base to enact that request by calling the correct code.

```


- video :
```javascript

```

- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```

- video :
```javascript

```

- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```

- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```

- video :
```javascript

```

- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```

- video :
```javascript

```


- video :
```javascript

```


- video :
```javascript

```
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

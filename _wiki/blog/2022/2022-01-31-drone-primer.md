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

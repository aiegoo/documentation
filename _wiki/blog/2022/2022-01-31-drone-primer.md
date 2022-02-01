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
#### video 1: course overview

```php
OK so in this video we're going to look at the format and content that will be covered in this lecture series.

So there are five main sections in this course and the first section we will set up our development environment and install any software dependencies we may need.

If you want working from a Linux machine we will set up our virtual machine with virtual box and install Linux to it.

And this is so you can follow the course from a Windows or Mac computer if needed.

Then we will start learning from the bottom of the flight stack and work our way up.

So in the second section we'll have an introduction into the pilot flight control software then we will take our first simulated drone flight with little supplied by the R2 pilot project.

After this the third section is going to be a look at ground control stations from my high level and understand why they're a critical component.

Then we will learn about two different ground control stations one a command line based ground control station called Maff proxy and the other a visually based user interface called Q ground control.

The fourth section will provide a high level introduction into the Mablean middleware and how it is used as an inter-process or enter vehicle communications standard and finally the last section will provide an overview of drone kit and why it's so powerful.

We will then build out various functions in Python to command and control our drone using Siddall as our test drone.

The functions we make can be thought of as Lego blocks that can be put together in any infinite amount of ways to produce different drone kit missions.

I'll be providing links to Linux command line in Python tutorials to get you caught up to speed if you need such information but you won't need any python knowledge until we get the drone kit section.

The general formula of the sections in this lecture series follows the following format.

We will begin with a high level 15 minute introduction to the material followed by a lower level dive  into the content of the program we're looking at a good method of consuming this course may be to first  watch all of the high level videos at the beginning of each section to provide you with a working understanding of the different layers of the flight deck.

Regardless we provide a system overview video that will do just that and the more condensed matter if you just want to follow along sequentially with the videos and I will say the documentation provided for the open source projects comprising our flight deck are very excellent for Arti pilot map link map proxy in trone kit if you want to become an independent drone wizard understanding how to use the documentation to both learn new things and answer questions you might have.

Is a must I'll be providing links to various documentation pages whenever necessary.

But I highly encourage you to look through the documentation on your own and last but not least please do not hesitate to ask any questions for anything you may be confused about or respond as quickly as possible and it may help students coming behind you to view the answers that are provided.
```

#### video 2 : fulld rone system overview

```php
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

#### video 3 : drone basics and flight jargon

```php
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
#### video 4 : Different methods for workstation
```php
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


#### video 5 : setting up preconfigured and

```php
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


#### video 7: virtualization check


```php
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


#### video 8 : virtualbox install and ubuntu download

```php
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


#### video 9 : virtual machine setup


```php
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

#### video 10:

```php
IMPORTANT!! DO NOT UPGRADE TO UBUNTU 18!!

After you install and launch Ubuntu 16 on your Virtual Machine and first login, you will at some point be prompted to upgrade to Ubuntu 18.04. DO NOT DO THIS!!!!! The course material has only been tested on Ubuntu 16.04, and you will likely run into bugs on Ubuntu 18.04. Upgrade at your own peril :)
```


#### video 11: ubunut install
```php
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


#### video 12:
```php
IMPORTANT!! DO NOT UPGRADE PIP OR USE SUDO PIP

In the video, I make two mistakes. Please follow the below instructions to modify the instructions for the next video.

1. DO NOT upgrade pip with "sudo pip install --upgrade pip"

2. I use "sudo pip ..." Do not use "sudo pip", simply use "pip", as this is the safer way to use this package handler.
```


#### video 12: dependencies install
```php
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
#### video 14: Ardupilot introduction
```php
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

#### video 15: ardupilot install part 1
```php
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


#### video 16 : ardupilot install part2
```php
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

#### video 17 : flight mode in ardupilot
```php
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


#### video 18 : Sitl introduction
```php
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


#### video 19 : DEBUG view missint from map window
```php
no transcript
```


#### video 20: parameters in ardupilot
```php
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

#### video 21: parameters with sitl drone and mav proxy
```php
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

#### video 22 : intro to gcs
```php
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


#### video 23 : mavproxy overview
```php
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


#### video 24 : connecting mavproxy to drone
```php
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

#### video 25 : QGC install
```php
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

#### video 26 : connecting qgc to sitl drone
```php
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


#### video 27 : mavproxy commands
```php
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

#### video 28 : itnro to mavlink
```php
So to this point we have been thinking and talking about Madeleine from a high level perspective.

And in this video we're going to take a lower level dive into the nitty gritty part of math.

Link So the dictionary definitions of what that link does are as follows.

It's standardizes the communication protocol for sending information.

It standardizes the types of messages that can be sent and it allows for bidirectional communication between the ground control station and the drone.

So both can receive and send maverick messages but much like a lot of dictionary definitions this might not have been too helpful.

So I'm going to use an analogy to try and explain this further.

So let's say we have two people trying to communicate how are we going to do this.

Well they can do this by speaking and understanding what the other person is saying.

But you know let's break down what that actually means.

So at the lowest level we have the sound layer we have a vocal chord which can create some sound and get transmitted through space to the recipient's ears.

Who will then interpret the sound wave and the brain will discern what was received.

But we can't say just any sound and expect the other person to know what we're saying.

If this guy wanted a high five from this girl he couldn't just make any sound and attach that to his desire.

That's where language comes in that defines a pool of words with objective meaning that also have some characteristic sound wave pattern that we can create with our vocal chords and also understand with our ears.

And this allows us to communicate with people that we've never even met before.

So when I say I love avocados you know what I'm trying to communicate well this is extremely similar to what Madalena provides us when two mabbe nodes are trying to communicate with each other.

So let's do the same exercise.

How does Q ground control communicate with a flying drone.

Well it's going to do this by using the two layers of Magelang.

So similar to the sound analogy we need some consistent medium to communicate with at a low level and that is done with the message structure of Madlang.

So each Mallik message has the exact same message structure allowing sending nodes to package information in a consistent manner and receiving nodes to parse the incoming data in a consistent manner.

We provide variability within the consistently formatted Madlang messages by altering the message ID message IDs are the words of the Madlang system.

So each maverick message will contain a number representing what Madalena message was sent and these messages all have objective meaning.

So for example message ID number zero is a heartbeat message.

So when Q ground control receives a message ID of zero from the connected drone it knows that the drone sent a heartbeat message and the drone is still active.

So we get drastically different behavior by altering the message ID of our Magelang message while maintaining the same message structure.

So here's a closer look at Lehre one portion of the Madelin protocol.

Each Madelin message will always consist of a six byte header and the size of a maverick message can vary anywhere from eight to 263 bytes.

And this depends on what kind of message IDs is being used.

So the first bite of any Madlang packet is always the hexadecimal number of OS X F.T. So if an incoming packet does not start with OS X Ephie the drone knows not to interpret the message as a Madelin one the next byte indicates the payload length and bytes and by index 2 is the packet sequence and can be

used to detect packet loss and therefore the dependability of the incoming message.

Next up we have the system id and the system ID can be analogized to the IP address of a computer each Madlen network conventionally has the ground control station at a system idea of 255 and a system id of one for the drone.

But these are simply conventions and can be changed to this by index and the header is stamped with the system id of the know that sent the message.

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

As long as you can make a packet with the standard structure and send the packet to the drone it doesnt really matter what programming language you use the next video we will take a look at the message ID and data portions of the modeling protocol for some popular messages.
```


#### video 29 : mavlink message example
```php
OK so in the last video we got into the first layer of math link or the standard message structure in this video we're going to look at how we can change the message ID to vary the types of messages that are sent with the standard message structure the standard message ids will let the receiving maverick node know how to parse the incoming data and what action should be taken.

Upon receiving the specific message ID the standard also tells the sending raveling Note how to package up the data into a correctly formatted packets if you want to check out the list of standard Madelin messages you can check out this link below.

But let's get into a couple of other examples.

So to this point we have been setting parameters with MAP proxy of our drone but under the hood Maff proxy is actually creating a map like message with message ID number 23 and filling out the appropriate fields to satisfy our Maff proxy request so message 23 has five standard fields that must be filled out.

The first one is the target system id of the map we know that we want to set the parameter to.

This will typically be one for the system idea of the drone.

Next we can fill up the target component if applicable but this will most likely be zero.

Now we have the program ID field and we can see its type is a char array indicating to us that we should specify the name of the parameter we want the change.

So if we wanted to modify the Arkia parameter we would place that string in this field.

After this we can fill out the value we want to set the parameter to with the brand value field.

And finally we can specify the type of the parameter and then all of this gets package together and constitutes the data portion of the medaling message in the message ID number 23 gets mapped to the by index number five of the map link header Hetter under Message ID.

And then this will get sent off and once received by the drone it will see Message-ID or 23 in the header  and know how to parse the data portion of the message to fulfill the request.

Let's check.

Another important Madlang message and this is command long metalink message number 76.

This is a very unique maverick message because it actually allows you to command the drone in hundreds of different ways with the same map like message number 76 this is done by modifying the command field

of the message Mallik provides us with a map of command enim which essentially maps a number to a unique command.

So for example the map command maps the number 21 to the command to land the drone.

So if we send a command long message with the 21 in the command field the drone will land.

There are many other commands that we can specify some of which may require some additional information here at the top.

You can see a deeper look into command number 21.

And as you can see we have some parameter values that we can specify for the particular command.

These are not parameters like we've been talking about to this point.

These are simply parameters that define the command that we're sending.

These can be thought of as variables to define the command request.

For example if we wanted the drone to land in required precision landing mode we would write the integer number 2 to the parameter to field and then all the data populates the command long messages before it constitutes the data portion of the Magelang message.

So let's pull up the maverick message page that we discussed at the beginning and check out some of the standard messages and commands with more detail.

OK so here we are at the map link Web site.

Let's check out command long.

Here we go.

So this is what we pulled from the slide and we can see again the command field.

And it uses the map command enim.

So let's look for the definition of this map command ENM and you can find it because the map command string will be one of the first references of that string.

OK.

Now here we go.

This is the map command.

And we can see here this is the value or the number of the command that gets mapped to the specific command.

So we can see here if we specified 16 in the command field of command long message number 76 we would be doing a map command nav waypoint command.

So we would be telling the drone to move to a particular place and we would need to specify where the drone should move to and that is done.

And five six and seven by specifying the latitude longitude and altitude coordinates and this map command

is a very very long either.

And each one of these numbers as stated before is indicative of a different command that we can send to the drone.

So as you can see there's a lot of commands that we have available to us to send to the drone.

The one thing to note here is just because the maverick command is specified in the standard Madlang message protocol does doesn't mean that the software that receives the maverick message is prepared to appropriately handle that command.

So some of these commands might not actually be available in the Ardie pilot code base for example.

We've looked at the Magelang message number 76 command long and detail.

Let's check out some other map like messages.

OK here we go.

We're starting at the top of maverick messages and we can see here is that message number zero which is the heartbeat message and message number one is a status message.

So we can get a bunch of information from the vehicle and one little standard message like battery voltage current battery.

Here's Paramo request read which we've also dealt with a map proxy without knowing that we are using magnetic message number 20 just request a parameter that we want to know the value for.

And most of them can be appropriately digested by Ardie pilot.

But remember it is dependent on the pilot code base to enact the appropriate code when receiving this specific message to fulfill the request.

So if the pilot code base receives message number 55 it doesn't call the correct code to handle this message.

Then it's essentially not usable Navteq is only a message standard.

It doesn't directly command the drone only tells the drone of our request it is still dependent on the already pilot code base to enact that request by calling the correct code.

```

### section 6 dronekit

#### video 30 : intro to dronekit

```php
OK so in this video we're going to talk a little bit about trone kit.

We're going to see first what it is and then why it's so powerful.

So what is drone kit.

Essentially it provides a list of math link and powered functions.

So with drone kit we can capitalize on the Madlib protocol by commanding the drone in Python.

And what this essentially allows us to do is treat our drone like it's an API.

So we get to capitalize on these 700000 lines of code and order pilots code base like it's a giant API.

So in one line of code for example we could tell the drone to move to a particular waypoint.

So here's an example in four lines of code and drumkit we could tell the drone to take off into the air flight to a specified waypoint and then land on four lines of code.

We don't have to deal with any of the low level Madelin creations of the messages.

We don't even have to know anything about Madlang and we don't have to know anything about ardupilot or need to know is dronekit and the high level functions like take off into the air and move to this

waypoint function and the land function and we're good to go with.

We don't have to know an immense knowledge of how our maverick messages are getting sent and interpreted by our pilot.

While it's helpful it's not required.

So this drastically lowers the barrier of entry.

So these are the four lines of code that it would take to tell the drone to take off into the air go to a specified waypoint and then land.

So at this you can start to see the power of Joan Kitt because all of this is intuitive human readable language and it's easily understandable how it affects our drone.

But it's all in powered by a map link to drive the point home.

We're going to use a computer analogy.

So at the inception of computers there is no screen or anything.

No one is worried about how to turn computers into some spider solitaire machine.

Everyone was focused in on the hardware.

So with the creation of the screen we get more abstraction.

We get to intuitively interact with our computer hardware without having to know everything about the underlying details.

And then on top of that we might get different computer languages that are more abstracted than others so the creation of things like Java.

Now we don't even have to worry about stack and heap space.

Now we can just code what we want to code and abstract all of the underlying things away from us which allows us to focus on the cool things like Spider Solitaire and so you know in the beginning everyone had to focus on hardware as abstraction started to increase eventually.

We got a firmware layer of computers that could interact with the hardware based off of human readable code.

And then with the creation of a user space that could access the firmware in an abstracted manner that is in a way where they didn't have to completely understand what the firmware was doing.

They could just make simple calls to the firmware layer which would then do the hardware communication for them.

You get some very unique applications that no one in the 50s and 60s would have thought the computers were getting applied with so you get things like electronic mail or text processors with thousands of different textiles or inability to fill out your taxes online or watch rhinos eat snow cones.

So today you can see kind of a distinction here.

You can have a couple you can have many different types of engineers you can have firmware engineers you're going to have hardware engineers you're going to have software developers.

Well the same can be seen with the drone progression of technology.

So at first we had this clunky quadcopter they couldn't fly at all and then hardware kept developing and now we have this cool quadcopter that can auto level itself.

And then we began to get these open source tools that could operate as firmware to control the hardware like our pilot picks for.

But we still don't have this high level interface into controlling the drones.

We have these large code bases.

You don't have an abstracted method to interact with our drone that utilizes our pilot and peaks for to control the drone will enter drone kit.

Junket provides us with the high level interface that lets us control our drone in very abstracted ways where we don't even have to worry about the firmware or the hardware.

So I think as abstraction keeps increasing just like computers we're going to see some forking of specified engineering fields in the Jones space.

So I bet we're going to have exclusively hardware engineers and exclusively firmware engineers.

And then I think with the advent of Joan Kitt and other things that are bound to come out like it we're going to have some application engineers.

So what could those possibly be.

Well just throwing out some examples you might have a food delivery application where some customer places a food request and you input their address and that gets transferred to a GPS waypoint all in Python and then your Python drumkit script can automatically create a route that the drone takes to deliver the food and then return back to where it launched from.

That could easily be done in drone kit.

Same for package delivery.

BLITZER You had a security or surveillance system wanted to be able to fly your drone and pre-determined paths with consistency where you could create a drum kit script that could save the missions that you wanted the drone to fly.

And whenever called upon the drone would fly those mission the same way every single time.

So you could say drone every 30 minutes fly this route a over here and then after you fly out a go fly it route be and record video for every mission.

So that I can keep tabs on these areas of interest.

Other application may be into drone communication.

So as the airspace starts to get more and more crowded with drones we're going to need a method for communicating drone drone so they can keep tabs of each other and not run into each other and drone.

It could be a way to do that.

So I hope you're starting to see some of the high level applications that drone kit can be applied to.

So as legislation catches up with the technology things like drone kit are going to be able to be used for companies to create high level applications to use their drones in the commercial space.

```

#### video 31 : dronekit install

```php
All right so in this video we're going to install the Schroen kit in drone kits Siddall packages from the Python Pipp package installer.

Peter picked a patch of pickled peppers.

So what we're going to do is type the following.

When a pseudo minus H hit install trone kit and then this equal equal.

Let's specify a particular version of the package we want to install.

And we're going to install version 2.0 9.1 will enter here.

And then the next package we're going to install is the drone kit Siddall package it's all run the same command as last time only replaced drone kit with truncates Siddall and the version will use 3.2 point zero.

And then we enter this one to stall those python packages to our system and to verify that it actually works.

We can type the following We'll type pick berries and then we'll grep drone kit and then we'll hit enter and we should see two new Python packages as well as their version numbers here.

And if you see this you're good to go when you've successfully installed drone kit to your system.

```


#### video 32 : Function to connect python script to sitl drone part1

```php
OK so in the last video we downloaded the drone kit Python packages to our system and this video we're going to start messing around drumkit a little bit and we're going to make our first function that will be designed to connect our drunk get scripts to our vehicle of interest in this function that we make will be used in all of the following scripts that we make.

So let's pull up a terminal let's navigate to course route and let's make a new directory called DK or Donkey Kong of course and let's make a new file called connection underscore template will enter into that by typing it in and the name of the file.

So here we're in our file and get it at the top.

Let's include some dependencies that will need to run our file.

So we're importing a bunch of functions from the drone kit package that we installed in the last video and we'll get into these in more detail as we use them.

And here we're we're importing a bunch of standard python packages that we'll be needing.

And then this one you might not be familiar with it's called Art parse.

It essentially allows us to input some values from the command line and use them in our drone kit script write Python script.

So let's make our function let's call it connect my cocher and the first thing we're going to do and connect my copter is capture the IP address that we want the script to connect to and we'll do that by using our parse code.

The first thing we do is make a parser object and then once we have this parser object we can make some new options that we can start this connection template file with.

So we will do parser add argument and then dash dash connect we'll call our option dash dash connect.

And what this allows us to do is specify an IP address or some string after this dash dash connect option.

We can capture that value by typing partnered up parse args and saving that to a variable called args and we can capture the specific value after dash dash connect option by typing ARGs that connect then we'll save that to this variable called connection string.

So at this point we'll have the IP address that we specified at the startup of the script.

Let's do a little mock run with an impromptu terminal.

This is my terminal here.

So this would be normally how you start a python file you just type python and the name of your python file.

But now that we've added this option we can actually start the file like this where you can add this dash dash next option and then the value that we want to pass in for this option and then we can capture

this value that we pass in by typing args connect and we'll save that value to the variable connection string.

So in this example connection string would be equal to this IP address here so once we have the IP address that we want to connect to we can use a drone kit function to connect to our vehicle and return a vehicle object.

So here's architect function that takes as input the IP address that we want to connect to and so we're specifying a connection string that we captured in the previous step and then we specify this wait ready equals true portion.

And this just means that this we don't want the script to continue in execution until it is true that we have successfully connected to our drone which is nice because maybe after this we'll have some command to tell the drone flying in the air but that won't do anything if we don't have a connection already.

And this connect function will then return a vehicle object and it's an object just like any other object oriented programming language it has a bunch of functions and methods that we can call on this vehicle object that we'll be able to control the drone and command the drone in various ways.

That's just our model vehicle in the python script.

And then we will return that vehicle object to the outside of whatever call this connect my copter function.

So let's call this connect my copter function will say vehicle equals connect to my copter and it will return a vehicle object to our vehicle variable.

So at this point we'll have the model of our drone in Python and we'll be able to do a bunch of cool stuff with it.

So let's test this script out and see if we can actually connect to a vehicle.

So let's save it and let's pull up a terminal and remember we need a Siddall vehicle to connect to.

So we'll launch a Siddall vehicle with the sim vehicle.

Cool.

Let's go to course route and then A.P.M. and R2 pilot and then R2 copter and let's call Simbi a call and remember sim vehicle is going to launch a port at 14 5 5 0 that the drone is listening on that port to specify the IP address that we want our connection template file to connect to then we can verify  that it's listening on that IP address by scrolling up to the output of the sim be a cool tool and see right here.

So this will be the IP address that we connect to.

So let's pull up another terminal and let's go to drone pit.

And if the and if that connection template file isn't there.

It's in the course root directory so we'll just move the connection template from the coarse root directory to our drumkit directory.

All right.

There it is.

OK so let's launch this python file first we're typing Python and then connection with that pie.

Now we need to specify the IP address to connect to when we use our dash dash connect our parse option and now we need the IP address and we'll use this one right here and then we'll enter ok cool.

So this script we made just successfully input this IP address to the file it connected to the vehicle and it successfully found that the Siddall vehicle we were using is using the A.P.M. copter software version three point five point five.

And also recognize that the frame pipe was a quad copter.

So this verifies that we successfully connected our script to our Siddall vehicle.

And now that we have this basic functionality we'll be able to do some cooler stuff later on in subsequent videos.

```


#### video 33 : function to connect python script to sitl drone part2

```php
Book.

So I'm back in our connection template file that we made in the last video.

And as you probably saw it might be a little annoying to have to you know externally start a Siddall vehicle every time we want to test out some code that we made in our python file so that we can actually do is use the junket Siddall Python package that we installed in the previous videos.

And what this allows us to do is launch a civil vehicle directly from our script.

So what we can do with our connect my copter function is say hey if there's an IP address that the user wants to connect to we'll look for this dash dash connect option and capture that IP address.

But if an IP address isn't specified then launch a Siddall vehicle directly from the script and we can do that with the following code.

OK.

So this is the new portion here.

So right here if we didn't pass and dash dash connect option then this connection string is going to be set equal to nothing.

So what we can do is perform some logic to that and we can say if not connection string.

So if this isn't populated with a valid argument then let's import the drone kits Siddall Python package.

Let's start a new Siddall drone right from our Python script.

And let's grab the connection string or the IP address that we need to connect to this new trone kit Siddall instance.

So the connection string will be populated with manual input here and then the drone gets a little input here.

So either way we're going to have an IP address to connect to at this point in the code that the connect function and we'll get a vehicle object that we were getting before.

But this here will make it so we don't have to manually start a Siddall vehicle if we don't want to.

So let's save this and test it out.

Pull up at terminal and go to course route and DD Kong.

Now let's start our script again by typing python in the name of the pile.

But this time was not specified dash dash connect.

And if we do this will launch a Siddall instance directly from our file and there we go our script recognize that we didn't pass in an IP address so it booted a Siddall instance for us.

And we're seeing here some information about our civil vehicle that it launched is using the A.P.M. copter version 3:43.

Also a quad copter and some various firmware information.

So this is a handy modification that we've made to the connection template so that we don't have to deal with all that manual work later on.

```


#### video 34: attributes part 1

```php
OK so now we have a function that can be used to connect our script to our drone.

And once we have that vehicle object or that model of the drone that we've connected to we can begin to do some cool stuff with it.

And one thing we now have access to after that connection are vehicle attributes so attributes essentially to find the State of the drone that you're connected to things like the battery voltage where it's at in 3-D space what are the pilot software versions being used.

And we can access all these different attributes through our vehicle object.

Do you want to learn more about attributes.

You can check out this link right here.

Don't get documentation is amazing so highly encourage you to check that out.

So let's just instead of talking about it just show you directly what I mean.

So let's pull up terminal.

Let's go to corporate directory and then decay.

Now let's copy our connection template file and let's call it a new file named actually beat that for.

And now let's get into actually.

OK so here we are.

This is where we left off in the connection template file where we have our vehicle object all ready to go.

And now we're going to use this vehicle object to access some attributes of the vehicle that we're connected to.

OK.

So here's a bunch of attributes that we have access to and where and again we're accessing all of these there are modeled compter that is our vehicle variable.

And as you can see here you can access attributes by simply dotting the vehicle and then specifying the attribute that you want to get access to.

So we have our vehicle we can dot version that and that will tell us the pilot version that we're using on our vehicle.

We can say vehicle got location that global relative frame and this will return to us a waypoint object and latitude longitude and altitude coordinates so we can see where our drones at in the world

we can say vehicle that attitude and see the current roll pitch and the status of our vehicle or maybe the velocity that our drone is moving at and the Northeast down frame by typing vehicle velocity we can get access to how long ago we received our last heartbeat message from the vehicle we're connected to.

And that will be in seconds is underscore Carnival tells us if our system is OK to start spinning the props.

So if there's any underlying system that is still setting up hours maybe a GPS isn't working or something this is honorable will return a 0 and you won't be able to start spinning your drone's props.

Here we can set the ground speed that we want our drone to move it.

So if we tell it to fly to a particular waypoint we can specify this groundspeed attribute to tell it to move it like five meters per second.

If you wanted or you could just read in the current speed that the drone will fly at and then this one is an important one vehicle that mode name or you can similarly just do vehicle that mode.

This will tell us the current flight mode that our vehicle is in.

So for unstabilized flight mode or guided flight mode we can read the current mode of the vehicle or we can set it and we'll get into the setting of attributes and the next video and vehicle that armed.

This is also settable and gettable here.

We're reading in if the vehicle is armed or not.

So we'll get return true if the drone is spinning and we'll get return false if the props aren't spinning and we'll set this value in the next video.

And here we have the EKN underscore OK attribute and essentially tells us if our state estimator is OK to go and it'll be a sure false Boolean and you don't want the drone to start flying if it's not OK.

So this is a pretty handy attribute to have access to.

But basically all of this attribute information is available in the pilot land.

And since we can think of drone kit as an API to Artie pilot we can access that already pilot information

by just specifying the attributes that we want to read.

And then at the end we can close our connection by tightening vehicle that close.

So let's save this and launch it at the command line and see what the output is.

Pull up a terminal.

Let's go to decay and then let's turn to file attribute patcher hit enter we're connecting to our drone kids Siddall and since being launched directly from our pile years or verification of connection and shortly we will see the attributes printed out to our screen ok cool.

So we see the auto pilot version.

So that is from right here auto pilot version and vehicle that version got resolve to A.P.M. copter 3.3.

So this came from the already pilot firmware that we are putting into drone kit in Python land through attributes.

We see our position and 3D space which returns our latitude longitude and altitude current coordinates and we can see where a drone is currently on the ground because the altitude is zero.

And here's our attitude attribute gives us the state of our pitch and roll and he is our velocity attribute as you can see we're not moving currently.

And the last heartbeat.

So we got our last heartbeat from our drone point eight seconds ago.

It was the vehicle article that's currently not farmable so we couldn't start the props if we want it to Mode's stabilize.

So we are in the stabilized flight mode and we access that through vehicle mode that name the drone isn't armed and the EPA is not.

OK so we grabbed all this information from the already pilot firmware.

You are drone Kate connection.

And we got access to those in the drone kit Python script.

So the next video we're going to get into setting the values of attributes instead of just reading them.
```

#### video 35 : attributes part 2

```php
All right.

So in the last video we got introduced to attributes a little bit and how he can read in attributes

that get sent values from the already pilot code base and this video we're not only going to read attribute

values but we're going to write to attribute values.

So at the end of this video we'll be able to know how to change our flight mode of the drone that we're

connected to.

So let's get started.

Pull up a terminal

and go to the course directory and let's go into the and that's copy again.

Connection template and let's call this new file mode underscore setter up PI and then we'll get it

into Mode's center that by all right.

So here we are again we have our vehicle API all ready to go into the product code base.

So we know that we can read attribute values but we can actually go one step further than that and we

can perform some logic.

All of the values of our attributes that we're reading so we know about the vehicle that is farmable

parameter and this going to be it's a boolean which is equal to true if the vehicle can be armed and

the props can start spinning and it's going to be equal to false.

If there's some subsystem that is not allowing the drone to start flying.

So we don't want our code to progress until our vehicle is good to go and it can be armed.

We can make some logic off of this to stop the script from executing further until our vehicle is Armah

Bowl OK.

So here we go.

We're saying while a vehicle that is arm of will is not equal to true then or now.

So the terminal waiting for a vehicle to become audible and wait for one second.

So this code is going to loop while his arm Bell is equal to false.

And then once it's equal to true this while block will exit out it will break and we'll be at this point.

And we know our vehicle is now our mobile now that we know that our vehicle is operable.

Let's get into setting some of the attributes to values that we want.

One of those attributes we can set is the vehicle that mode attribute.

So let's switch our vehicle from stabilized flight mode to guided flight mode and we can do that with

the following code will say vehicle up mode which is the name of our attribute set that equal to vehicle

mode and then guided in double quotes this vehicle mode was included as a part of the drone kit package

at the top.

The Apple mode here but we can't think of attributes as variables because variables you can set to a

value and immediately afterwards the value has been updated to that variable.

Such is not the case with our attributes because we're actually sending requests to the firmware to

execute on our request.

So when we say vehicle that mode set that equal to guided mode we have to do under the hood is package

up a maverick message that tells the pilot that we want our drone to be in guided flight mode.

We have to send that through our connection to the Arta pilot code base the art firmware and Arti pilot

has to parse that maverick message and then call the correct code in order to accurately switch the

drone into guided flight mode.

So all that takes some time.

But the vehicle that moët attribute won't get updated to guided until Ardi pilot sets it for us because

remember our vehicle object is an API into the pilot.

So that means that people that mode will not instantaneously get set to guided mode.

So we have to use another while block to pull the current state of the flight mode to not progress until

our request has been met.

The Arta pilot software so we can do so we can perform this while block right here which will read the

current attribute value of equal that mode every iteration.

So every iteration it's requesting from the pilot to get the latest flight mode that the vehicle is

set to and if it's not equal to guided then we're going to loop through this while loop and we're going

to wait one second.

We're out to the console every time waiting for drone to enter guided flight mode.

And then once the pilot finishes setting the vehicle flight mode to guided then vehicle mode will be

equal to guided.

And this while loop will break.

At which point the code will progress.

So we'll notify the consul arts or drone as arm of all our flight mode is now in guided mode and we

know that guided mode is a white mode that can accept Magelang commands as input for movement.

Now it's arm the drone.

Let's make the props start spinning.

We saw in the previous video that we have the vehicle that armed attribute.

So what we can do is set the attribute equal to true.

But again just like when we set the vehicle that mode equal to guided flight mode there is some latency

involved with setting the armed attribute to true cause we have to wait for the pilot firmware to execute

on our request to arm the drone.

So that means that vehicle that armed will be equal to false for a couple seconds after we set this

vehicle armed request true.

So we'll need another while block.

So we'll use this while black here to block the code downstream from this from continuing until our

vehicle armed is set equal to true.

So every iteration will read in the attribute be that armed and if it's still equal to false then we'll

stay executing in the code.

And then once the Arctic pilot firmware updates the vehicle armed attribute to true indicating that

the props are actually now spinning then this will be true and this won't be equal to false.

So this while loop will break out and we'll be able to continue with the execution of our code.

So really just want to drive this point home when you set the value of attributes.

It's it's not like a variable where the value you set it to is instantaneously updated.

You have to wait.

You are already pilot to update that attribute.

So think of setting attributes as requests not variable setting.

Let's pull up a terminal and we'll go to a corkscrew and DK and let's start our most Python script let's

say python mode setter.

All right so here we go getting connected to our drone or kept my copter function has successfully connected

to a drone.

OK so we're waiting for people to become audible.

So it's currently not armed we're in this while loop Nichols now armed

OK so we can see right here waiting for vehicle to become farmable.

So we're in this while loop for.

It looks like five iterations.

So for five seconds our vehicle was not mobile.

And then eventually firmware updated this attribute to true which broke out of this while loop and we

saw this vehicle is now arm will print to the screen.

Then we switched into guided flight mode and we waited for our pilot to satisfy our guided flight mode

request and as we can see waiting for Joan to enter guided flight mode.

So it took about one second or two pilot to set the flight mode to guided mode and then it broke out

once the vehicle mode was updated to guided by the pilot firmware.

Now that we're in guided mode and then we requested that the prop start spinning by setting the by requesting

the vehicle the arm attribute equal to true.

And it took Let's see four iterations for the pilot to actually start spinning the props.

So for four seconds the props weren't spinning.

After our initial request and then eventually vehicle the armed was equal to true this while loop was

broken and this was printed out to the console look out virtual props are spinning indicating that our

drone is now spinning its motors
```

#### video 36 : parameters in dronekit

```php
What's crackin.

So we dealt with parameters a little bit to this point already but we haven't done it in trone kit.

It's a very simple process and the parameters like always are readable and ridable and we can access them through our vehicle object and it's pretty simple you just do the cool parameters and then in square brackets you type the name of the parameter that you want to see the value for.

So you could say guess type Moel name is variable guess type set it equal to Biegel that parameters

and whatever the value of guess type parameter is now to save the GPS type.

Very easy as well you can also just write to parameters doing basically the reverse thing your vehicle

that parameters and then the pram name that you want to write and then the value.

So we get set the GPS type parameter to 3 by running this right here.

And as always you can check out the parameters at this link below.

Let's pull up a terminal and start messing around with parameters and drumkit.

Let's just copy connection template and name a new file called Parama setter and Geter.

Hi and then we'll get into that.

All right so here we are.

Let's first see with the value of our GPS type parameter is for this vehicle that we connect to we can

do that by reading in the parameter value and then we'll print out the GPS type to the console right

here.

Let's save this and let's execute our parameter and get her file and see what it's output for the GPS

type

art.

So we got a value of one for our GPS type VRAM.

We don't know what the heck that is we can always go check it out in the documentation where we can

just search type and see what the one is all about.

All right here we are GPS type and we see that a 1 means auto so the pilot firmware is then going to

automatically try to determine the type of gas that was being used on the drone So what if we wanted

to set it to empty OK.

Well we would find the value for that which is three and we would just set that in our center and get

our file

instead of reading the value we can actually write the value so up here GPS type will be one then we're

setting the value to three.

Now we're going to read the value again to see if we successfully changed our parameter value to 3 and

then we'll print out the GP type to the console and verify Let's run this again all right.

There we go.

We successfully changed the parameter value to 3.

Now the cool thing about parameters in drone kit is that you can perform logic based off of read parameters

and kind of do some setup functions and some set up scripts before your drone takes off.

So for example if you were using the GPS type of 4 and it was anything but for you could change the

GPS type to 4 as some sort of an initialization code.

So here we're just saying if the yes type parameter is not equal to 4 then we're going to set it to.

And this is cool because this for actually x is an integer and not as a string.

So we can actually perform some number a lot offer it to.

So as you get more and more advanced in your parameter knowledge you can even batched together a bunch

of initialization parameter values and a little function.

And before the drone takes off you could you know make sure that all the appropriate parameters are

set to the correct values.

So you wouldn't have to manually do this every single time.

```



#### video 37 : functions to arm and takeoff
```php
Ole Miss Amigo's in this video we're going to make a function called Armond take off that will be designed

to arm the drone and take off into the air to a specified altitude and this function in conjunction

with the connect my copter function are going to be widely used in future scripts.

So we're going to make a new file called Basic underscore template that will be used as a foundational

file that we can copy from for future scripts Let's get started let's pull up the terminal

and let's go do course route.

A.K.

and that's copy mode setter and name it basic underscore template

and then let's get it into basic template.

So we did a lot of the work that is going to be needed in the arm and take off function.

In the last video.

So let's actually copy all of this here all the while blocks and let's go above here into the function

section above the main executable section.

Let's call this function Armond take off and the passen variable is going to be the height and meters

that we want the drone to fly to.

So we'll call that target height OK now let's paste in the wild box that we copied and let's highlight

it all again and make sure to have one time for my sisters.

OK.

So the function is called arm and take off.

So all of this right here constitutes the arming portion of Armond take off.

So we already know what all this does.

We're going to check to see if Jonah's honorable James to be able to guide to flight mode and then request

that the prop start spinning by setting be called armed equal that true.

And now that the proper spinning we're at this point we want to fly the drone to the specified altitude

that is input to this function.

So we're using our vehicle object and that has available to it a function called simple underscore takeoff

with a simple takeoff.

Does is package up a map command that inputs the height that we want the drone to fly to and sends that

command to the pilot firmware through our connection.

So the drone is going to start flying into the air but our drone is kind of a perfectionist.

So if we specify 10 meters the drone is going to try to apply to 10 meters.

Exactly.

So let's say this line here indicates the height that we want the drone to fly to and my cursor is the

drone.

The drone is going to try to find to 10 meters and then it works.

So its a little bit above its going to try and fly below.

I'm a little bit below it to go above.

But we don't want the drone to fly to exactly 10 meters.

We're going to be tolerant to our drone and tell it that it only needs to apply to a certain percentage

accuracy of our requested height.

So we can monitor the drone with this while block here.

So while true sword is going to iterate with this until we break out we're going to print out the current

altitude of the drone and we're going to do that by accessing the attribute vehicle that location got

global relative frame and then drop out for altitude.

So every one second we'll print this out to the terminal and also every one second.

We're going to see how close our current altitude is to our target height.

So right here we're saying if the current vehicles altitude is greater than or equal to ninety five

percent of the target height then break out of the While loop.

So if we passed in 10 to this arm and takeoff function the drone is going to try to fly to 10 meters.

So if we get above 9.5 meters we will break out of this while block and say target altitude reached

and this Armond takeoff function is done doing what it needs to do.

So we'll return none because we don't need to return anything to whatever called this function.

And our drone now will be in the air ready for the next command.

So let's try this out in the main executable so we have our visual connection here.

Equal equals connect my copper stripe arm and take off.

And what's best five 10 meters just coat the example.

Let's save it.

So we have our two lines of code one to connect to the vehicle and then one to fly the drone to 10 meters.

So let's pull up a terminal and test it out.

OK we're in the donkey kong directory.

Let's start our basic template file by typing Python.

Basic template.

So we're connected now to our copper Siddall has been started.

So now we're waiting for the will to become our mobile So we're right here and our arm and takeoff function

are vehicles armed.

And now we are starting to fly our current altitude to zero.

So we're in this portion of the while loop where we're seeing the current altitude every iteration of

the while loop and we get to above 9.5 meters.

And this while block broke out.

We got reported that target altitude was reached and now our drone is hovering in the air at around

10 meters ready for the next command.

```

#### video 38 : script to automatically launch QGC with dronekit script part1
```php
A case or at a point now and truncate where we can connect to our Siddall vehicle or a real vehicle

at an IP address and we can arm the drone and take it off into the air which is really cool because

this would be applicable to also a real drone but you know with a real drone you get the advantage of

the excitement of seeing the drone fly in real time whereas when we're scripting on a Siddall drone

it might be a little bit anti-climactic because you're just watching text roll down the screen.

So to try to combat this we can launch new ground control every time you launch a drone get script so

that we can see what the drone is currently doing on a visual interface so our eyes can get involved

in this but it might be a little monotonous to have to start to control and make sure the right ports

are open every single time we launch our drone kit script.

So what we're going to do in the following videos is make a shell script called launch Siddall that

will do four things for us.

First thing it'll do is launch our drone kit Siddall instance then it will launch to ground control

automatically then it will start map proxy and create the additional port Sneap needed for our truncate

script to connect to the drone could Siddall instance and to ground control to connect to the get Seatle

instance and then the fourth step will launch whatever drone kit Python script that we want.

So all this will happen automatically and then once we're done with our junket get script everything

else here will close automatically for us so we can start things automatically and then we can end four

things automatically.

So this will save us a lot of time down the road where we can just use one shell script to do all this

automatically for us.
```


#### video 39 : script to automatically launch QGC with dronekit script part2
```php
All right.

So let's make our launch a little script.

We'll be able to do the poor things described in the last video and we'll use it to make our lunch whole

script.

So let's typed the following and watch the camel case make sure this is capital and let's hit enter

Let's go into launch Siddall the top let's do the following.

So what this is is a ship bang.

And when we run our launch little script as an executable it will read this and see that we want the

text in the script to be interpreted as a bash script.

So now it will interpret all our commands as a bash script once it's saved.

So we can see the pretty little colored Yeah.

OK.

So remember we're going to do four things.

And the first thing we're going to do is launch our drone kits Siddall instance and we're going to reference

the full path to the drone kits Siddall executable.

So we need to know the full path.

So let's pull up a terminal and we'll type.

Where is junket Siddall.

And we'll get this back.

So this is the path of our junket Siddall executable.

Copy that in here.

And then we'll write the following.

All right.

Copter because we want our vehicle to be a quad copter and will specify the home coordinates that we

want the vehicle to launch from.

And here we're going to use the latitude longitude and altitude coordinates obviously of the Green Bay

Packers stadium and the ampersand here is going to start this process.

The drunken Siddall process but it will throw into the background.

And if we didn't go into the background any subsequent code below this drone gets a launch wouldn't

get executed until we closed out of this program.

But since we're throwing it into the background the code in this launch little script will continue

to execute and this will exist on its own.

OK so now we have our Don't kids Siddall instant started.

The next thing we need to do is launch to ground control and we're going to reference the full path

of our app image for q ground control.

So again let's pull up a terminal and we'll type which you do see that image.

And here is where we placed our app image to make it a globally reference Apple file.

So we'll copy that full path to the app image and we'll call that pull path in our launch little script.

We'll paste that in and when we launch cuarón patrol it prints out a bunch of crap to the terminal so

we'll write this right here.

All the techs to Dev-Null.

And we'll also throw this process into the background so that code beneath it can execute without having

to depend on this being finished.

And between these two let's say sleep for five seconds and then underneath it let's sleep for another

five seconds.

Probably won't have to go to five seconds but just be safe.

And now OK we've done the first two things.

We want the script to do we have this Siddall instance up into the air.

We have to ground control launch now.

Now we need to launch map proxy to create the appropriate ports that we need to connect.

Q ground control and our drones get script.

So this is the main command we're using.

So we're starting map proxy it up by we're connecting map proxy to port at the 760 and we're specifying

two new ports that is 14:5 by zero.

And the 762 that anyone else can connect to in here we're saying screen minus DMH which this is essentially

a different way to throw the process into the background.

So now we've done three of the four things we need our script to do.

We now have map proxy up and running.

Now we need to start our drone kit Python script and well referenced the full path to the Python executable

booklet which Python and here we go or copy that.

And go back to launch Siddall.

OK so if you're not familiar with bash scripts this is essentially how we're going to start launch Siddall

let's say this is our impromptu terminal again.

We're going to have launch Siddall and they're going to specify a python file that we want to launch.

Let's say we launch basic template that by well we're starting this bash script and we're specifying

the file name that we want to get past into the bash script.

So this is the first argument that we're passing into this launch Siddall bash script.

So that is what this dollar sign one is indicating is dollar sign one will get resolved to the first

argument getting passed into the script.

So in this case this will get replaced with basic template and then we'll start a basic template with

Python.

Name of the file and then we'll connect at the specified port like we've been doing previously and we

went through this process to the background because we want the progress of this launch Siddall script

to stop at this point and we don't want anything underneath this line to execute until our iPhone script

is done executing.

So OK so now let's say our pipeline script has finished executing and we're continuing on with our code

execution here.

We have all these things in the background now that we have to close.

So let's write a bash function that can be used to close all of these processes automatically every

single time.

Our Python script is done executing.

OK so we can do that with the following code.

Here's our function that we're making sourcing function Benish and then bash scripts are very sensitive

with spaces so make sure you have a space here and then we're going to write all this beautiful stuff.

I know it looks pretty ugly but I'll try and break it down for you.

So if you're not familiar with the kill command let me provide a quick recap.

So every time we start a process like this drunk gets Siddall instance this process is going to get

a unique process ID.

So let's say after we start this the drone kits Siddall executable will have a d id they call it a process

ID and let's just say 1 1 3 4.

So this process ID is indicative of this process.

So with the kill command we can specify a process id that we want to.

And so if the process id of this truncate Siddall was 1 1 3 4 and we type kill 1 1 3 4 it would stop

the drunk get Siddall instance.

So just like when we click this red button its hilling whatever process was running.

So this is essentially the red X button only for process IDs.

What we're doing in this finished function is first finding the process IDs of anything called hugely

RTU and mabbe.

And then we're going to say will those process IDs that we found and then will kill all of the processes

that we started previously.

Be very conscious of the spaces here.

Again bash scripts in Linux commands can be a little sensitive.

And then we want to call this function right at the end of our launch Siddall script and that's what

we're doing here.

We're saying trap finished exit which means that this function will be executed only at the very end

of the script.

So let's save this.

```


#### video 40 : scrpt to automatically launch QGC with dronkit script part3
```php
OK so we're almost done with this launch style script.

You just have to do a couple more things so at the top here.

Let's go ahead and write these four lines and these are similar to the ones we have down here.

But it kills the ports that we need to use up front at the start of the script.

So we're closing down anything that's using Coogee R2 Mav and apm and let's go ahead and also add this

line.

The APM line down here into this function finish so once again at the beginning of the script we're

closing any ports we may need.

And then at the end of the script we're closing any ports that we used with these programs.

And one more thing we should probably do is copy this to our kill command outputs.

OK.

Now our script is done.

Now we just need to place it in a directory that is in our path enviromental variable so that we can

reference just the file name when we want to use it and not have to specify the whole path.

Let's go back into our terminal and go to the directory where you were making your launch style script

from AND LET'S MAKE IT executable first.

So type C H mod plus X and then launch style and then we'll list again and it should be green now.

Perfect.

And now let's place the launch little script in USAR slash local slash Bean who will do this following

line say U.S. or slash local slash bean and then we'll hit enter here.

And now we type L.A. you end and hit the tab button it should autocomplete porous.

That's good.

Now let's test out our lunch style function.

Let's write launch style and then let's launch basic template

OK.

So our Siddle vehicle has been launched up

and here is map proxy and now queue grab control window has launched.

We didn't have to launch it manually and here we can see our drunk script is now executing.

And here's our drone where the Packer stadium right the 50 yard line as security guards are coming after

us.

And here we are launching into the air with our arm and take off function.

You can see our altitude here on the screen.

We're at you know five meters.

And once the script is done everything is closed automatically for us.

So it's a pretty handy script that we can use here on out to automatically launch a bunch of stuff for

us and automatically close about.
```


#### video 41 : function to move drone to waypoints
```php
All right.

So to this point now we have our lunch Siddall convenience script that we'll be able to do a bunch of

things automatically for us and we have some Don't Get functions that can connect to a vehicle and fly

the vehicle into the air to a specified altitude.

But our drones just sitting there waiting for some commands.

So now we're going to start getting into ways to move the drone.

There are two primary ways that you can move the drone.

One is by location based movement.

That is I specify a waypoint that I want the drone to fly to and the drone flies that waypoint and the

other is velocity based movement.

So I want my drone to move forward at let's say three meters per second.

And this video we're going to focus on the former and we're going to make some functions that can be

used for location based movement.

And we're going to get introduced to waypoint objects in Python.

And if you're curious I'm grabbing my latitude longitude and altitude coordinates from this Web site

here.

All right so let's get to it.

Let's pull up a terminal

and let's go to.

Of course.

And then B.K..

Now let's copy our basic template python file and name it location underscored base underscore movement.

And then let's edit into location based movement.

So if you remember that when we launch our launch Siddall script it starts the drone at the 50 yard

line of Packer stadium.

So let's create a waypoint at the Packer pro-shop which is maybe 100 yards away from that 50 yard line

that the drone can fly to.

So we're creating this waypoint object from the location global relative function that is important

from the drone kit package.

As you can see at the top in the location global relative function in ports three arguments The first

is the latitude second is longitude and the third is altitude.

So we're saving this waypoint object.

Now how do we get our drone to fly to that or let's say go to waypoint 1 Wait a minute.

We don't have a function called go to yet where we're going to make this function.

But the first thing we have to do is make a helper function that can get the distance between two waypoints.

And here it is we'll call it get underscored distance under square meters and it will input to waypoint

objects similar to what we've done here to do some geometry magic to get the hypothenuse between two

points in space.

So we're going to return the absolute distance between two points in space.

Now this functions only going to be reliable if the two waypoints are close.

That is because the function models the two points as if they're on a two dimensional plane.

And obviously that desined gets larger and larger than that modeling of the 2-D playing it's less and

less accurate.

Plus of course you're a flat earth or now we have this helper function.

Let's start to get into the go to function see death go to and will only input one waypoint and that

is the location that we want to apply to.

Now the first thing we're going to do is capture the original distance between the current location

of the drone and the target location of the drone.

So how are we going to do that.

What we can do that with our new helper function and attributes.

So here we're making a new variable called distance to target location and then setting that equal to

the output of get distance meters.

And we're going to supply the target location the waypoint that we want to fly to and the current location

of the drone which we can get with attributes.

We called that location global relative to frame this will return some number and meters that will get

saved to this variable here.

So this will be our original distance away from the way point.

Now the next step is going to be to command the vehicle to apply to the specified waypoint the target

location and we can do that and the vehicle object that we get in drone kit supplies us with a function

called simple go to that takes the waypoint that we want to fly to the now the drone is flying to the

waypoint that we specified but similar to what we found in the arm and take off function.

Our vehicle is a perfectionist.

So it's going to try to apply to this waypoint.

Exactly.

And we don't want it to fly there exactly.

We want it to fly within a certain range.

So what we're going to do is pull the drones progress once a second in a while loop and determine if

the drone is close enough to the waypoint to call it good.

We can do that with this while back here.

So we're saying while the vehicle is in guided mode which it will be.

So it'll just continue iterating in this loop.

We're going to get the current distance of the drones location to the target waypoint.

So we're doing the same thing here but we're only taking this distance once.

So we're getting the original distance here.

And then as the drone gets closer and closer this current distance will get smaller and smaller every

iteration of the While loop.

We're going to see if the current distance is less than the original distance that the drone was away

from the target waypoint times 1 percent.

So we were originally one mile away and we get 0 1 miles away from the waypoint then we're going to

break out of this while block and return None allowing further execution of downstream code from the

go to function after it has reached its target waypoint.

So until the drone has gotten to this waypoint it won't be able to execute further.

So after the drone is at its target waypoint we can command it to land.

We'll send in the request to Aarthi pilot to change the flight mode to land mode and then it will iterate

through this while block until it's in land mode and then once it's in land mode this will break out

and we'll just right.

While true at the end so that ground control will stay up until we close our drone get script manually.

OK so let's save this and see it in action.

Let's pull up a terminal and let's use our new launch Siddall script type launch Siddall and we'll type

location based movement.

So here is the Siddall drone getting launched up in here is to ground control.

All right so the drone is at the 50 yard line.

All right so the drone is now going into the air it's in the arm and takeoff function and it's going

to get the 10 meters and now it's going to begin its flight to Packer pro-shop.

And those GPS coordinates are right over here.

It's going to go over there and get a cheese head maybe get some cheese curds.

And you can notice as we said before this go to function as a blocking function because it doesn't allow

execution of downstream code until it finishes.

And now we reached our target waypoint we have entered land mode and now we can see the drones start

to land.

```

#### video 42: auto flight mode overview
```php
What's going on everyone.

So we've been using the guiding light mode pretty heavily to this point and in this video we're going

to check out what the auto mode is all about.

So they are pretty similar.

The guided flight mode and the auto flight mode both don't require RC input from a manual flying pilot

but there is a distinction.

So let's think of the drone as being stupid when it's an guided flight mode and intelligent when it's

an auto flight mode.

That is because in the guided mode the drone does not move unless it is told to move somewhere.

So you launched the drone up into the air.

It will hover in place until it gets a movement command and will execute that movement command and then

it will hover again.

So it is dependent on some external source to command it to fly to different locations on the auto flight

mode.

It is different in the auto mode.

You compile a mission which consists of a list of commands that you then upload to the drones firmware

and then once you put the drone into auto mode the drum automatically execute on those commands sequentially

and you don't have to do anything as a pilot or you don't even need a script a drone script telling

it to fly it automatically does that stuff for you.

Now there are different reasons to be in either guided mode or auto mode auto mode would be great for

missions that you're going to fly continuously or for pretty monotonous and normal missions that you

could fly by just assembling lists of commands.

So for example if you had a field to survey and you wanted the drone to take pictures every five seconds

you could do that in auto mode pretty easily.

Another example might be if you wanted your drone to fly particular paths around an area of interest

as if you're a security or surveillance specialist we could create some missions that consisted of commands

to fly the drone around that constant area of interest.

So the auto mode is good for pre-determine flight paths essentially and mode is cool because it essentially

allows you to provide some special functionality that isn't available already and the pilot code base

if you wanted to incorporate computer vision into your drone and let the computer vision influence movement

commands you could use the guided flight mode.

You could write up the open Seabee Python script that was measuring the distance away from some object

and based off the distance away from that object you could send different velocity commands to your

drone to get it to fly in different ways that is responsive to the object that you're tracking.

So the got to bite mode is great for a sort of dynamic flight pass or dynamic missions where the flight

path isn't predestined and for using it as a way to provide some custom functionality to your drone

that isn't already available in the pilot code base.

So things like computer vision based flight.

OK so what are these commands that we can put into a list and make a mission that the drone executes

automatically.

Well we can check those out at this link.

I'm very glad you asked.

All right so here we go.

Let's check out the command supported by copter section and all of these represent different commands

that you can sequentially place into a mission that will then execute on the commands in order.

Now the conventional way to assemble a mission for auto flight mode is to make the mission through the

crowd control station gooey like ssion planner or Q ground control.

And in those circumstances all of these commands will work.

Unfortunately currently in drone kit only a few of these commands will work and that is the nav waypoint

and have returned to launch nav land and potentially a couple of other ones but they're not all supported.

Now if you want to learn more about the commands you can click into them and you know see different

parameters that you have to supply as a part of calling this command and you just get some more in-depth

information from the next video we're going to put this to practice and make a list of commands that

will upload to our drone as a mission and then we'll switch the drone into auto mode and it will execute

on an economist mission.
```


#### video 43 : autonomous dronekit mssion with auto mode
```php
What's going on.

So in this video we're going to see what the auto flight mode does in practice on our Siddall drone.

We're going to make our first auto mission that's going to fly to a couple of waypoints around the Green

Bay Packers field Thomas Lee without input from the guided flight mode and the core new drone function

we're going to be looking at is the command function.

And if you remember a mission is a list of commands.

Will these command objects that we make are going to constitute the different commands that make up

the list.

So the command takes a bunch of arguments as you can see here a lot of these though never change.

So the first three are normally always going to be zero.

That is essentially our coordinate system that we're using.

So are we using the northeast down frame where north is true north and south is true south.

Or are we using some sort of a relative frame when North is the front of the vehicle and south is the

back of the vehicle and then the next argument we pass is the Madlang command which we look at those.

And the last video we're primarily going to be looking at map command nav waypoint and map command return

to launch and then current waypoint and auto continue are typically both always zero.

And then we have these programs and as we saw in the last video the Depending on what command that we

use We're going to have some harams that we have to fill out.

So here for the map command that waypoint we have three Paramo that we have to fill out and it's 5 6

and 7 and PRAnd 5 is the latitude longitude and seven is the altitude.

So this command would tell the drone to fly to this waypoint in three dimensional space.

But pull up a terminal and go to course.

And then drumkit OK.

Now let's copy basic template and let's make a new file called auto mission OK and we'll get it into

that and then we'll go to the very top and we're going to include a function that's going to be the

command function from Joan kit.

And we're also going to say from PI Madlang import mabbe still but to understand this Mabee till let's

think back to when we learned about map link.

And we went around the standard enemies and messages that are available.

Well this map still is basically a python version of the standard messages and enemies that we saw on

the map link main web site and we'll see why that is useful through the progression of this video.

Let's make a waypoint object that is the home location of our drone before it took off.

And we remember what this is we're using attributes to record the current location of the drone and

saving that waypoint object under the weight point home variable name.

Now let's make our first command object will say CMT One equals command and then we'll set it equal

to all of the input variables that the command function takes.

OK.

These first three are going to be zero.

And then here this fourth field is going to be the frame of reference that our drone is using.

And this is where we use our map still.

So we'll say map you till that map link.

And now we're going to specify the frame of reference that we're using.

So map frame global relative Allt that will be our frame of reference.

And then a comma.

And now we specify the command that we want to use.

So again we'll say mabbe you till that map blank map command that way point and then current waypoint

and auto continue will be 0 and ram 1 through 4 will be zero.

And the only way points we have to worry about are 5 6 and 7 and we can verify that by checking the

documentation for map command that halfway point at this link right here.

OK.

Now we have our first basic command.

And I'll just make a basic simple mission out of it just for fun the first thing we have to do is download

the current list of commands from the drone that we're connected to and we do that by typing CMD or

whatever you want to name it equals vehicle that commands and then we can type in that gives us an object

and then we can download the current commands that are on our drone and then we can say wait ready.

So don't go further in the code until we have successfully downloaded those commands from our drone

and now once we have those commands we're going to clear them out with the dumb clear function.

And now that that mission has been wiped out we can add in our own commands to make our own mission.

And then we can do that with typing CMBS ad and then the command object that we made.

And then once our list of commands is set up we can just see beagle that commands upload and that list

of commands that we made will then get sent to the drones firmware and stored on the drones hardware.

And then any the drone switches into auto mode it will execute on those commands sequentially to fulfill

the mission.

But this would be a pretty boring mission.

So we'll make three more commands and we'll add a couple other waypoints that the drone will fly to

OK.

So our first command we're flying to just the current waypoint so the drone won't move at all it's just

sort of a dummy command.

And then the second command is also a Gnab waypoint command.

And we're going to actually fly to a different GPS coordinate.

We're going to raise the altitude of 15 meters and then after that we'll fly to another waypoint we'll

drop the out to back 10 meters then once we get to this waypoint we'll switch to RTL mode by using the

map command NAV return to launch command.

And that doesn't require any other parameters.

So this will be our basic mission.

And just to verify that the map command nav waypoint command only needs those three parameters.

You can go back to that Arti pilot documentation page and then quicken to map command that waypoint

again and we'll see again that ramp 5 6 and 7 represent latitude longitude and altitude.

Remember our Siddall drone will launch from the 50 yard line of Packer stadium is GPS coordinates make

the drone fly around the Packers stadium and I again found these GPS coordinates at this Web site.

I typed in the Packer address and you can click on the map and you'll get different latitude and longitude

coordinates.

And now that we've added three more commands we need to add those to our commands list.

So we'll add those here.

And at this point the complete mission command 1 through 4 will be uploaded to the drone.

But the drone won't automatically execute this mission.

We have to make sure it's an auto mode but before we switch and auto mode let's arm and take off and

guided mode to get it flying to around 10 meters and then we'll switch into auto mode once it's in the

air.

All right.

So we have our arm and take off 10.

And then once we're in the air we're after Armond take off we'll switch the vehicle mode to auto mode

and the thing to note here is our Python script gets to continue an execution while our drone is executing

its mission.

So when we're in guided mode remember we had to continuously pull where the drone was relative to where

we wanted to be.

And then the code could get executed until the location tracking while block was broken out of.

Well that is not the case when auto mode so an auto mode will switch into auto mode.

Drone will keep flying its mission and this code will get executed while the drone is doing its mission.

OK so let's save this and let's see if it works let's go back to Horseshoe DK and we'll type launch

Siddall and then we'll type auto mission.

All right.

So drone is loading up.

Hugh Grant is getting ready.

OK so now we see our drone here.

And these are our mission objects are commands that the drone will run

and we know and we remember the first command it flies to its current location.

So that's why we see a one here and the second command is to fly to this point the green.

Now we're indicating that waypoint replying to this is Command object number to and now he's made it

to this waypoint so we're flying to the third waypoint.

Our third command and our object list that shows you how the auto mode is a little different than the

guided mode because you still have the reins of your python script while the drones executing its mission.
```


#### video 44 : velocity based movement and NED sign convention
```php
All right so we're getting pretty rehearsed in the arts of location based movement be it with guided

flight mode where we specify a waypoint to fly to or with the auto flight mode where we put waypoints

we want to fly to you in a mission.

Now we're going to get into a different form of moving the drone and that is with velocity based movement.

But before we do that we have to thoroughly understand the frames of references that we use for the

drone and frames of references can just be thought of how we orient our three dimensional coordinate

system and 3-D space.

Is it global meaning relative to the earth where true north is always true north and west is our True

West and stuff like that.

Or is it local or relative to the body of the drone.

So North will be relative to where the front of the drone is.

So if that doesn't make sense I'm going to summon my inner Sal Khan to try and make sense of it with

pictures.

OK so we have this are three dimensional coordinate system here.

We have our x axis which we're going to call north south axis as well.

We have our y axis which is west east axis and we have our z axis which is our up and down axis.

Each one of these axes needs a plus and a minus side and that's where the sign convention of the Ned

comes into play.

So every letter that is represented in red represents the positive side of the axis.

So since we know North is in this direction we know this side is positive x and then going on to the

y axis.

Since he is in Ned we know that this side the east side is the positive y side and for the up down axis

the z axis we have a D here.

So we know that down is actually positive Z and B minus C.

So if we had a velocity vector here with x y and z components and we specified the following velocity.

This doesn't mean anything until we specify what frame of reference for using And here using the global

frame of reference.

And this just means that the axes are permanently oriented with respect to the earth.

So this X-axis will always represent true north and true so this y axis will always represent true east

and west and the Z axis will always represent up and down.

So now that we know our frame of reference we can draw out our components of our velocity vector here

on our coordinate system.

So we have a one for X.

And since this is a positive one we know that we are on the north side of the axis so this will be our

north side vector for the x component.

Now for the why we have a minus 1 so a plus one would be pointing to the east for the y component.

So a minus one must be pointing to the west.

So this would be our y component be pointing to the west and the last one we have minus one Brosy So

a plus one would be pointing in the down direction.

So a minus one must be pointing in the direction.

So this would be our z component OK.

Let's say we changed frames of reference and we kept the same velocity vector.

So we're no longer in the global frame of reference.

Now we're in the local frame of reference and this local frame of reference means we orient north and

south and west and east axes according to the front of the drone and here will say this black triangle

is our drone and the arrow is pointing in the direction of the drone.

So since we know that North on the local frame of reference system points to the front of the drone.

This now is north and the relative local frame making this sound and that means these wives are actually

X-ists.

So we have a minus X on this side and a plus X on this side.

OK.

Well that will make this site east in this site West OK.

So we'll change that as well.

East and we know that East means a plus Y.

So we'll Friday plus Y.

This is West

making this a minus Y and the up and down axis actually doesn't change from global to local frames of

reference so we're good there.

So now let's map our same velocity vector to a different frame of reference.

So one for X we have a positive number.

So we're pointing in the north direction.

And since we have reorganized our coordinate system to be north relative to where the drones front of

the vehicle is.

This is now our x component of the velocity.

This is north.

Now our y component.

We have a minus one.

So that means it should be pointed in the west direction.

So we have a component over here for our y component and right here the Z.

We have a minus one indicating that we go up.

So those are the two different frames of reference that we can use to move the drone around three dimensional

space.
```


#### video 45 : functions to move drone wiht velocity commands
```php
What's up with it.

So last video we got familiar with the frames of reference that we can use to command our drone in this

video we're going to actually make the functions to command our drone with velocities.

And the main thing to know is in order to maintain a steady state velocity for your drone you're going

to have to send that velocity vector every one second.

So the drone will only act on an incoming velocity command for one second.

So let's get into it.

Let's go to of course.

And then drone get and let's copy basic template and we'll make a new file called Velocity underscore

based underscore movement and then we'll edit into that.

All right so here we are.

And since we have two different frames of reference we're going to make two different functions to command

our drone with velocities in two different frames.

OK.

So here's our local velocity function calling it send a local any velocity and we input velocities and

the x y z components.

So here we're actually making Emmanuel Magelang message with the vehicle that message factory command.

And we get to populate all the different fields to get the unique behavior that we are requesting.

So here we're specifying the frame of reference to use and this will get us in the local frame of reference.

And this is where our velocities go.

So we pass and velocities at the call of the function.

And those get mapped to these fields and the message per map link that we're making.

And then that will create the message factory will create a new message that we're saving here to this

message object.

And then we can actually send the vehicle that we're connected to Maverick messages through the vehicle

that send map link function.

So we'll send this message that we just created and this will be a velocity command that the drone will

act on for one second and then we can say vehicle about plus just to make sure that we flush out any

messages that might be in our cash.

And the global velocity command is going to be very similar as you can see it's almost identical.

We have seven global med wasse in said local net velocity what they all do the same thing.

The only thing we changed was the frame of reference.

I know it's a little confusing that it's local Ned that we're using for a global velocity but it's local

to the earth.

All right so let's put these functions to the test.

So right now we have our vehicle connection and we're up in the air.

So now let's start using these commands.

OK so first let's use our local net velocity command.

And remember the first component is X and Y and Z.

So here we're talking the drone to move forward relative to the front of the drone at five meters per

second.

So this won't be true north.

Will be relative to the drones front and then also remember that the drone will only act on our velocity

command for one second.

So we're making a counter equal to zero and we're iterating the counter by one every while loop iteration

and we're sleeping for one second every iteration.

So once counter is not less than five this while loop will break out.

So this will let us fly in this direction for five seconds and then we'll sleep a little bit.

We'll sleep for two seconds and then we'll do the same thing and just change the components a little

bit to give you an idea of what's going on.

We'll switch to minus five so this will fly in the west direction relative to the drones front.

Now let's do the same thing but use the global net velocity.

So we just copy pasted what we had above and we changed the send local blossomy to send global never

lost.

And we changed our print message out from moving north to moving true north and moving through west

and then at the end let's just say while true do nothing so that we can keep new ground control up and

running and let's do one more while block to show you the z component.

So since we're only moving up and down I'm going to show you that the z axis is the same for both global

and local frames.

So if we're sending a minus five and here we're going to actually be moving up since it's positive down

and this can be a little counter-intuitive.

So I'm just going to throw this in here to kind of drive that point home.

You want that job to move up into the air.

If the pass sent a minus number and we'll do that with the local velocity command and then we'll move

down bypassing in a positive number for the z component and we'll use the global velocity to show you

that they both use the same sign convention on the up and down axis OK.

So let's save this and see what the heck happens.

And then before we launch the script let's make sure that we have imported the mabbe still function

from PI mabbe link.

Now it should be good to go.

Let's pull up terminal and launch the script.

All right.

So here is our drone it is pointing true south which means the front of the drone is pointing to south.

And since our first command tells the Jo-An to move north relative to where it's pointing then it should

start to move in the south direction with Arndt's or at our target altitude.

And there it goes moving north relative to front of drone moving through South but north relative to

the front now are moving west.

So even though this is East we're moving west because that is what the drones relative frame is now

are moving toward north relative to the earth.

And now we're moving back through West and then the last will be we move up in altitude.

You know it passed an A minus number moved up and now we're going to be moving down that we passed in

a positive number into the velocity component for the z and it.
```

#### video 46 : function to control yaw of drone
```php
OK so now we're going to figure out how to control the drones.

Yeah.

And we're going to make a function that will do just that.

But similar to the velocity based movement we have two different frames of reference that we can use

to condition the of the drone.

And believe it or not I drew this circle by hand by.

So we have this compass and let's say it's oriented with respect to the earth.

So this is true north through south west or east.

So in the global reference the top is 0 degrees south is 180 degrees west is to 70 degrees and east

is 90 degrees

and the top can also be 360 degrees.

So we can command the drone on this global frame if we want.

We can say a drone moved to 270 degrees in the true frame of reference.

We can also command the drone to move relative to where it's currently at.

So let's say the drone was currently facing this direction right here.

And let's call this one hundred forty degrees.

We could tell the drone to move 30 degrees relative to where it's currently at.

Now we're at around 170 degrees and you can tell the drone to move to a positive degree but you can't

pass in a negative number.

So you actually have to change the maverick message that we're using to rotate in the opposite direction.

What you essentially do is change a parameter to change the positive direction of movement.

For now just know that we have those two different frames of reference.

So let's pull up a terminal and start making our your function and let's copy our basic template and

call it your control and then edit into it.

Now let's go back to the very top and add Mabu to.

All right.

Now let's make our new function and let's call it condition underscore ya.

And we're going to pass in two different variables.

One is degrees and the other we'll call relative.

And this will be a one if we want to use the relative direction of travel in a G-0 if we want to use

absolute angles.

And you'll notice it looks pretty similar to when we were using the velocity functions where we have

a message factory where we're making our own Magelang message and we're saving it under the variable

name message and we're sending that message out to the drone via the send Madelin command and the degree

is we pass into the condition your function get placed right into here right there.

And the frame of reference we're using gets placed here.

So this is how our variables change the dynamics of the Mallik message that gets created.

And here you can change the direction of the positive rotation.

So we have a one here if we want clockwise rotation to be positive and we can place a negative here

if we want counter-clockwise to be the positive rotation we actually can't pass in a negative degrees.

We have to change the rotation by changing this rate here.

But for simplicity we're just going to leave it at a one Braunau And there's another weird thing about

Kit which is this condition your function won't work until we have used a dummy command to fly the drone

to the same place that it's already located.

And we'll just call this function dummy initialiser and we're essentially just making the drone fly

to where it currently is.

And then after we have called this dummy initialiser we can use our condition function normally.

OK so let's get into using it.

So here we go.

We are arming and taking off the 10 meters and we're going to call our dummy initialiser here and then

we're going to sleep for two seconds and that will let us actually be able to use our condition your

function.

All right now we're here at condition ya know we're going to pass in 30 degrees in a one so the one

means we're using the relative frame of reference.

So we're going to rotate 30 degrees relative to where we currently are.

So if we start at 180 degrees we're going to rotate at 210 degrees.

Now let's call the condition your function again but this time let's pass and a zero for the reference

system we want to use.

Now let's make the drone rotate to zero degrees which will make the drone rotate to true north.

And then just to drive the point home let's do condition again and pass and 270 degrees with the Zero

where our reference system so it should move to True West and let's save this.

And pull up at terminal and go ahead and try it out.

Type launch Siddall and then your control.

All right now our drone is launching.

Here is our drone.

We start at 180 degrees so pointed in the south direction.

So we should with our first command moved to 210 degrees because we're moving 30 degrees relative to

where we currently are rising and altitude right now.

Marine yawing to 30 degrees relative to where we were.

All right.

Perfect.

So we're at 210 degrees now.

The next stop is moving to true north as we passed in zero degrees to rotate to in the global reference.

Now we're moving to True West.

We told the drone to move between it's 70 degrees and the global reference.

And there you have it.

That is how you do basic yawning in drone kit.
```

### section 7
#### video :
```php
Congratulations you've made it through the drone programming primer for software development course.

We've covered a lot of ground and I think you now have the introductory foundation to take on more difficult

aspects of drone development.

In this video we're going to do a quick recap of everything we've learned in this course and open a

channel of suggestions to you for any lecture series you may be interested with in the future.

So we learn about the software flights stack that is commonly being used by businesses and hobbyists

alike and how all these different flights stack layers communicate with each other through math.

When we should have gained a good understanding of the necessity of each component of the flight deck.

Additionally we were introduced to the power of Siddall our simulated drone for software development.

We learned that we can start learning about the flight stack directly on the Siddall vehicle without

the requirement of testing on a real drone.

In the future you're still drone knowledge will be extremely valuable for quality assurance testing

for any software development you may do.

We also spent a lot of time building up the elementary drone Get functions that can communicate with

and command our drone to do various things we can think of these drumkit functions as like Lego blocks

that can be built into unique structures that satisfy our requirements of the script.

These Lego blocks can be used as the foundation to a higher level drone applications like package delivery

and security surveillance.

So our lowest level in the flight stack was the arty pilot code base and we learned it AXS the low level

code that directly communicates with the drones hardware allowing it to call code to produce desired

movements or behavior.

It has over 700 thousand lines of code and is one of the trailblazers of this open source drone movement.

Now we got into map proxy and learned its power as a matter link enabled command line version of a ground

control station.

From here we learned about Madlang and how its powers as a communication middleware relies on its standard

messages.

It is essentially the glue that connects the communication between vehicles and processes like Aarthi

pilot communicating with MAP proxy or a drone communicating with the ground control station.

It is used both and peaks for in our pilot code bases.

Then we finished off learning about drone kit we saw the power of drone kit and how it can be thought

of as a high level API and to Aarthi pilot with these drone kit functions and powered by Mablean we

can then develop Python scripts to make high level applications like package delivery or even a Python

program that uses open C puter vision to command movement commands of our vehicle that we're connected

to.

Considering all this knowledge that we've obtained at this point you are now equipped to go explore

this open source drone world on your own to seek areas that piqued your interest.

You can now try and develop your own drone Code application or dive deeper into a particular layer of

our flight deck or read the documentation to gain a deeper understanding of the tools.

If you have any interest in future tutorials that will build from what we've learned in this course.

Let me know we can get into things like how Arti pilot actually works.

How to make custom map like messages and implement them in our pilot in Python to perform a custom behavior.

You don't get scripts on a real drone and develop some more high level applications.

On how to build our own real custom Open-Source drone that we can then apply this flight technology

and abandon our Siddall drone or anything else you may be interested in.

Please let me know as your feedback is very important from that.

I'm excited to see what you will build with this new knowledge that you've obtained.
```


#### video 48 : build codable drone
```php
All right.

Congratulations.

Through your hard work diligence and general interest in drone software specifically open source drone

software.

You have made it all the way through this course and you've gained a lot of awesome information things

like auto pilot Matt link math proxy drone kit and a bunch of other things.

And your next steps are basically limitless.

You can go in a lot of different directions if you're interested in actually testing out your your drone

kit code on an actual physical drone instead of just your style simulated drone.

I've created a new course that will show you how to design build fly and eventually even code your own

drone.

A real drone with drone kit and what's cool about this drone is that it is drone Kate compatible and

all the stuff you learn about the software in this course is applicable to this drone.

So you know a lot about already pilot marveling math proxy and ground control stations and drone kit

now.

Well that's awesome because this drone will respond to all of that information that you spent time learning

in this course as an added cool benefit which is the drone is actually powered by a Raspberry Pi which

is pretty sweet if you are interested in making a drone as your next step after conquering this course.

Look for the link to my new course in the video description and sign up for that new course with the

promo code drone kit and you'll get a sale and you can buy the course at nine dollars and nine nine

cents.

Now stick with me in the end of this video.

I'll show you some actual footage of the drone that you will build in this course being flown autonomously

through your drone kit scripts.

And these are drone kit scripts that we have actually made in this course called take off and land and

set velocity body.

So it's neat that you'll be able to see a real drone respond to a code that you saw work on a simulated

vehicle.

Now we need to call this script in a very special manner.

We'll say python and then the name of our script take off and land and then remember the dash dash connect

option that we added to our script.

Well now we're going to feed in that I.P. address.

After that option we created we're going to type the local host IP address which is 1 2 7 0 0 1 and

then we'll type a colon and then the port number that our drone is listening on in this port number

is 1 4 5 5 0 and then when you hit enter the script is going to start.

So be very careful about when you type this out because your drone might be trying to fly up into the

air when it's sitting inside but.

All right let's go out to the field and see what happens.

So you can barely see it but there's a weight you know top left of the drone but we're going to go ahead

and launch this script and see what happens very short mission.

We'll just.

And you can see the current altitude on the consulate saying we're at 0 meters where one meter and it

reaches its target altitude and simply lands back onto the Earth

will hit enter and here's my RC controller.

I'll be just walking around with as the script is running and you can see the console output in the

top right screen here I'm just going to hold the string of the vehicle in case it goes crazy and a need

to real back my dog or my drone from attacking people.

Now it's going to the north for a couple of seconds.

Now it's flying to the south.

Now it's flying to the east and out of frame it's flying to the west.

And it's simply landing now.
```


#### video :
```php

```


#### video :
```php

```


#### video :
```php

```

#### video :
```php

```


#### video :
```php

```


#### video :
```php

```
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

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

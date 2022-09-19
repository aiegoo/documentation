---
layout: post
title: "Facemasking tryout with mock projects"
name: "pre-facemasking"
tags: [facemasking arfoundation arkit arcore unity kinect]
tagName: kinect
permalink: 2022-09-17-pre-facemasking.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: unity
keywords: "facemasking arfoundation arkit arcore unity kinect keenu"
summary: "Sat, Sep 17, 22, before creating a real facemasking app, try to implement mock projects from open source"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-09-17T16:38:34 +0900
updated: 2022-09-17 16:38
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## what to do

1)	Installing software. (Unity/ARFoundation and an IDE) 
-	Detailed instructions on steps and necessary packages. (arcore/arkit, vuforia, geo-ar)
-	Explanation of steps necessary to run your applications. 
2)	Basics of ARFoundation, Arkit, Arcore and raspi integration (mock projects that you can test and play with.) 
-	This is an opportunity to experiment with the usage of the software and its many tracking methods. Can explore the usage of plane/marker detection alongside other methods such as hand detection. 
-	ARFoundation is a very large package with a lot of in-built functionality you can take advantage of. 
3)	Facial Tracking Demo
-	Here to expand the ARFoundation demo to use Facial tracking, ending up with a version that can be tested and experimented with. 
4)	Masking Demo
-	Expand the previous demo to now allow you to place a ‘mask’ on top of the tracking points we have previously experimented with. 
-	Work on implementation to change this mask during runtime also. 
5)	Integration of AR Experience with the game engine. 
-	Here to 
demonstrate ways in which you can interact with Unity to create game elements in the real world. Here we will also explore some game-making fundamentals. 
6)	Simple AR Game demo
-	Finally, to wrap up by creating an early demo of the game you wish to create. You will have many of the building blocks at this stage and should only require support. 
7)	Final Support
-	Here please be available for questions and assistance with the project going forth.
8) Whenever necessary, implementing a code block should be done in a client pc

### from the xr-motion.html

arkit facetracking

arcore facetracking

1. animaiton of the 3d models to snap on the tracked face; lighting and rendering of the 3d models into 2d images
2. composition of the rendered cgi images with the live action footage.
3. use of google and apple sdks, or use mlvision base on raspi.

kinect connection

arecore detection with raspi

3d model

previewlab examples


archery kinect game

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

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

[project_dashboard](https://github.com/users/aiegoo/projects/3/views/1)

## what to do

1)	Installing software. (Unity/ARFoundation and an IDE)
-	Detailed instructions on steps and necessary packages. (arcore/arkit, vuforia, geo-ar)
-	Explanation of steps necessary to run your applications.
2)	Basics of ARFoundation, Arkit, Arcore and raspi integration (mock projects that you can test and play with.)
-	This is an opportunity to experiment with the usage of the software and its many tracking methods. Can explore the usage of plane/marker detection alongside other methods such as hand detection. [arkit_details](#arkit-facetracking) [arcore_details](#arcore-facetracking)
-	ARFoundation is a very large package with a lot of in-built functionality you can take advantage of. [arfoundation_detail](#arfoundation-echo3d-for-bodytracking)
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

## arkit facetracking

## arcore facetracking

1. animaiton of the 3d models to snap on the tracked face; lighting and rendering of the 3d models into 2d images
2. composition of the rendered cgi images with the live action footage.
3. use of google and apple sdks, or use mlvision base on raspi.

### face tracking
[![youtube](https://img.youtube.com/vi/SzMeRtJ8oTc/0.jpg)](https://www.youtube.com/watch?v=SzMeRtJ8oTc)

### kinect connection

### arecore detection with raspi

#### 3d model

### previewlab examples


## reference
[apple_developer](https://developer.apple.com/augmented-reality/arkit/)

[googe_facetracking](https://github.com/aiegoo/FaceTracking_google)

[googe_facetracking2](https://github.com/aiegoo/FaceTracking_google2)\

[open_pose](https://github.com/aiegoo/_openpose)

https://user-images.githubusercontent.com/42961200/190949788-f6eb0f5d-6e8a-42ca-88b2-d02c925d3212.mp4

<div style="width: 100%; text-align:right;">
	<video width="100%" height="100%" align="right" src="https://user-images.githubusercontent.com/42961200/190949788-f6eb0f5d-6e8a-42ca-88b2-d02c925d3212.mp4" type="video/mp4" autoplay loop muted></video>
</div>





### arfoundation-echo3d for bodytracking
[echo3d_api](https://console.echo3d.co/#/pages/contentmanager)


archery kinect game


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

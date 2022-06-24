---
layout: post
title: "First AR project for MICE interview"
name: "ar-starbucks"
tags: [ar]
tagName: ar
permalink: 2022-06-23-ar-starbucks.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "ar vr xr kocca ducogen joyfun"
summary: "Thu, Jun 23, 22, ar vr xr marker-based KOCCA ducogen"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-06-23T23:29:22 +0900
updated: 2022-06-23 23:29
driveId: 1gB3vZ_k2CUcn2P_LnmeOFeQDGupueRJy
driveId2: 1Sk6udx2He0Ujg0mpU6J8W-JYviNNzjoY
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## github repo
[github](https://github.com/aiegoo/ar-starbucks)

[github_issues](https://github.com/aiegoo/ar-starbucks/issues)

## process
- I first draw 3d models to use in Unity


![image](https://user-images.githubusercontent.com/42961200/175305939-5a5f6996-de0d-4573-904f-b77ae3f22ce0.png)

- 3D Max

![image](https://user-images.githubusercontent.com/42961200/175305437-5708e66d-7dc9-4f5f-a031-a42fea853bb9.png)

- Scripts is done in C# and made the camera working for image detection. In this setup, I am trying out 'marker-based AR', in which a marker called QR Code is triggering the code to send and display the 3d models.


![image](https://user-images.githubusercontent.com/42961200/175305125-45f056d0-150e-4a0d-ba71-b51b830fbc38.png)

- this is the implementation of it. POC is too big a word for this, but in a sense, it is.


![image](https://user-images.githubusercontent.com/42961200/175305602-bec74c33-0272-45af-ac6a-0e6abadea7fa.png)
- this has been very tricky and I have wasted almost two days to tackle Unity version, Package Manage and plugins. My laptop is almost 6 years old and bascialy out of date and fashion.

> This is an ARWT example fro [here](https://github.com/ToughNutToCrack/ARWT)

<h3 align="center">ARWT</h3>

<p>
ARWT is a library that allows you to <b> use Unity to build AR Web applications</b>, working as a bridge between Unity and the best AR libraries available for the Web.
Currently, we are using WebXR and ARjs.
</p>

[video](https://user-images.githubusercontent.com/11076285/123983829-74b88800-d9c4-11eb-94d9-8676813e9e8e.mp4)

{% include googleDrivePlayer.html id=page.driveId %}

{% include googleDrivePlayer.html id=page.driveId2 %}

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

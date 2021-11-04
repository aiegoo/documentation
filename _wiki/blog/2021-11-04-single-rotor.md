---
layout: post
title: "Single rotor drone"
name: "single-rotor"
tags: [drone]
tagName: drone
permalink: 2021-11-04-single-rotor.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: projects
keywords: "single rotor drone vtol"
summary: "Thu, Nov 04, 21, single rotor air vehilce with rudder and flap to navigate"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-04T21:25:54 +0900
updated: 2021-11-04 21:25
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Project overview

|---
| | |
| -- | -- |
| [report](https://github.com/aiegoo/single-rotor/blob/master/report.pdf) | [sr-vtol]({{site.github_editme_path}}pdf/sr-vtol.pdf) | [helicopter]({{site.github_editme_path}}pdf/helicopter.pdf)

## Spherical-VTOL-UAV
This paper presents the design and modeling of the UNI-Copter, a portable spherical unmanned aerial vehicle (UAV) that is powered by a single rotor. This type of single-rotor spherical UAV has many advantages over other types of multi-rotor UAVs, but the spherical external structure takes up more volume, thereby reducing its portability. We focus on designing and building the UNI-Copter to provide ease of assembly and portability while taking advantage of the existing spherical structure.
{% include image.html file="drone-resource-wiki/handbook/154-3.jpg" caption="Helicopter flight control system" %}
This paper explains our design concepts and the development process of improving the performance through various prototypes. We also verify flight stability of our new design by conducting several flight tests. To do so, a mathematical model of the UNI-Copter is derived in detail, and then we implement a state feedback controller for hovering flight. As a result, the indoor flight tests show stable performance, and the outdoor flight tests show that stable performance could also be achieved provided that the wind speed is low.
<br><b>KEYWORDS:</b>UAV, flight computer, Ground station, single rotor, VTOL
<br />
<b>Free Body Diagram</b>
[Images/FBD.jpg](https://github.com/aiegoo/single-rotor/blob/8942856a6c598fc4c8a6f4495a73b732eff8175e/Images/FBD.jpg)
{% include image.html file="https://github.com/aiegoo/single-rotor/blob/8942856a6c598fc4c8a6f4495a73b732eff8175e/Images/FBD.jpg" %}
<br />
<b>Final Working Model</b>
[finalmodel.jpg](https://github.com/aiegoo/single-rotor/blob/8942856a6c598fc4c8a6f4495a73b732eff8175e/Images/finalmodel.jpg)
{% include image.html file="https://github.com/aiegoo/single-rotor/blob/8942856a6c598fc4c8a6f4495a73b732eff8175e/Images/finalmodel.jpg" %}

<br />
<b>Test Video<b/>

[![Video](http://img.youtube.com/vi/Qa8rCbgPsRM/0.jpg)](https://www.youtube.com/watch?v=Qa8rCbgPsRM)

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

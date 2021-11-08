---
layout: post
title: "Pilot's preflight checklist FAA"
name: "mychecklist"
tags: [drone]
tagName: drone
permalink: 2021-11-09-mychecklist.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: drone
keywords: "drone preflight checklist"
summary: "Tue, Nov 09, 21, preflight checklist with data mining"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-09T02:36:33 +0900
updated: 2021-11-09 02:36
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

{{site.data.alerts.bulletin}}
my copilot in the palm of the hand!
{{site.data.alerts.ends}}

## how it began
{% include tony.html content="After successfully obtaining my pilot's license, I have yet to feel comfortable going out about flying my drones outside, even within the flyzone. By law, I am obliged to keep the flight  records and the first time I saw any actual log being kept was during the license test, where I started reading off the airframe tag number from the drone I was about to fly, to my so=called copilot. The examiner assistant doubling as my copilot would fill out the rest of the form, by observing me to conduct the preflight checks." %}

{{site.data.alerts.note}}
Properly performing the items listed on pre-flight and related checklists is crucial to identifying hazards ensuring a safe flight. A co-pilot can make sure that the pilot-in-command (PIC) does not miss any items by solely keeping track of the checklist while the PIC performs the checks.
{{site.data.alerts.end}}

### my goal
- to create a webapp to fulfill this pre-flight checks, with a db, api and ui.
- to document this process for future update and more integration needs later in this project.
### my research
I began by referring to articles of the law in fine prints, and realized that it didn't have specific format except in general terms. One form that came across was the one created by a regional government with a drone team for aerial photography. And the other is from the FAA handbook for pilot's manual. My research findings are as follows;

|---
| ![faa_checklist](images/drone-resource-wiki/handbook/49-1.jpg) | [operationrules]({{site.github_link}}pdf/gcs/fllight_rules.pdf) | [maintenancelog]({{site.github_link}}pdf/gcs/maintenancelog.hwp) | [flightlog]({{site.github_link}}pdf/gcs/flightlog.xlsx)

## idea expansion
Now that I need this form and and what' required of it, I set off to a drawing table, whoa! my usual Starbucks table and started dawdling on the ideas.

Steps to follow;
1. a preliminary write-up of project design [ProjectDesgin]({{site.github_link}}pdf/gcs/ProjectDesign.odt)
2. a db orm

<div style="width: 440px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:440px; height:480px" src="https://lucid.app/documents/embeddedchart/bfb24bd8-9df1-40f5-bcb6-7784df312c70" id="3E7pQLU7-FM8"></iframe></div>

<style>
ol li {
     counter-set: list 3;
}
</style>
3. adding more data fields
   1. flight goal, location, flight range, duration, altitude, battery stat as to fill out the form's entries of basic information
   2. integrating data mining scripts using [this](https://pf3.36io.co/images/network/data_viz.jpg)

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

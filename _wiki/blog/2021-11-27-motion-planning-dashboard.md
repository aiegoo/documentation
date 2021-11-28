---
layout: post
title: "final-project"
name: "motion-planning-dashboard"
tags: [drone]
tagName: projects
permalink: 2021-11-27-motion-planning-dashboard.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "vue django fcnd udacity pawan rapa motion planning dashboard"
summary: "Sat, Nov 27, 21, motion planning dashboard with django vue and fcnd"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-27T22:54:35 +0900
updated: 2021-11-27 22:54
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## git

- dashboard
{% highlight bash %}
deploy	git@github.com:aiegoo/fcnd-heroku (fetch)
deploy	git@github.com:aiegoo/fcnd-heroku (push)
heroku	https://git.heroku.com/motion-planning.git (fetch)
heroku	https://git.heroku.com/motion-planning.git (push)
origin	https://eggs.or.kr/root/px4-autopilot.git (fetch)
origin	https://eggs.or.kr/root/px4-autopilot.git (push)
{% endhighlight %}

- frontend

- backend

- webapp

- git log

{{site.data.alerts.details}}

* 676d54c (HEAD -> master, deploy/master)(2021-05-29) may29 mp4 testing
* 72f2258 (origin/master, origin/HEAD)(2021-02-18) timeseries visualization and datatable added
* b90aa24(2021-02-11) changed markers+lines to markers only
* dbd33e9(2021-02-11) added asyncio and done little text filtering
* 5e1df75(2021-02-11) session deletion added on frontend
* 9855640(2021-02-10) import missing icons
* 1cac94c(2021-02-10) added delete session and added waypoints path on map
* 255408d(2021-02-09) added models to admin and open vue views if no route found on django
* 90bd653(2021-02-09) added base map and start and goal position on map
* a2cf67f(2021-02-08) displaying the default base graph
* 25ea168(2021-02-08) getting sessions data in home only and added setMapData route
* 68204a1(2021-02-07) added start and goal of simulation
* e13faf4(2021-02-07) modified serializers and views
| * 20ca848 (origin/hsyyu)(2021-02-07) create .env and edit backend/settings/dev.py
|/
* 3334974(2021-02-06) adding sessions to home
* 70f895e(2021-02-06) added vuetify
* 47e58a6(2021-02-06) added timestamp to session and fixed typos
* c73d394(2021-02-06) getting session data
*   8f7b93d(2021-02-05) added some routes
|\
| * 90cf892(2021-02-05) fixed latest()
* | 679015a(2021-02-05) fixed latest()
|/
* 225197b(2021-02-05) added serializers and api endpoints
* 6724daa(2021-02-04) added missing import
* 776629d(2021-02-04) added postgres for dev environment
* 8acebf3(2021-02-04) created some database models
* ee864e3(2021-02-04) Initial commit
{{site.data.alerts.ended}}

## how it began

{:.note}
This wiki is to refresh my memory and get it started with one of my client's drone project. My project then was to create a dashboard with Django backend and Vue fron-end to connect drone's waypoints in real-time and display them on a map. Fortunately, both projects are relevant in many ways, except that mine used FCND simulator and waypoints and movements of drones were simulated inside a Unity app instead of open-source Mavlink/Simulink or even Ardupilot including QGroundControl. So here's how the dashboard was build almost one year ago.

{{site.data.alerts.bulletin}}
Be a copycat! Break someone else's code.
{{site.data.alerts.ends}}


## Django and model design

```python

from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.translation import gettext_lazy as _


class Session(models.Model):
    target_altitude = models.IntegerField("Target Altitude")
    safety_distance = models.IntegerField("Safety Distance", default=5)
    start = ArrayField(models.FloatField(), null=True)
    goal = ArrayField(models.FloatField(), null=True)
    is_finished = models.BooleanField("Is Finished", default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = _('Session')
        verbose_name_plural = _('Sessions')
        db_table = "session"


class Movement(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now=True)
    value = ArrayField(models.FloatField())

    class Meta:
        get_latest_by = 'id'
        verbose_name = _("Movement")
        verbose_name_plural = _("Movements")
        db_table = "movement"

class DroneData(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now=True)
    local_position = ArrayField(models.FloatField())
    local_velocity = ArrayField(models.FloatField())
    global_position = ArrayField(models.FloatField())
    global_home = ArrayField(models.FloatField())

    class Meta:
        get_latest_by = 'id'
        verbose_name = _("Drone Data")
        verbose_name_plural = _("Drone Datas")
        db_table = "drone_data"
```



{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

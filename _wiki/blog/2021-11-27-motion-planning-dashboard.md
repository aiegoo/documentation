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

## how to run

|---
| django-vue
| ![image](https://user-images.githubusercontent.com/42961200/120050084-1875e780-c057-11eb-80be-6fbd7c134ea6.png)
| fcnd-kalman
| ![image](https://user-images.githubusercontent.com/42961200/120050449-558ea980-c058-11eb-891b-8aeb724d9c64.png)
| unity-simulator
| ![image](https://user-images.githubusercontent.com/42961200/120050698-ca61e380-c058-11eb-8643-3cc186b1200b.png)
| simul-control keys
| ![image](https://user-images.githubusercontent.com/42961200/120051003-de5a1500-c059-11eb-9457-25e559161a7f.png)
| how to npm to sync with browser
| ![image](https://user-images.githubusercontent.com/42961200/120056494-8fbb7380-c077-11eb-8d1e-47289a397859.png) ![image](https://user-images.githubusercontent.com/42961200/120058702-c8fbdf80-c087-11eb-940f-61bdbbc160b5.png)


## GCS roadmap

{% include image.html file="webdev/webGCS.png" caption="GCS before upgrade: the motion of the aircraft is mainly controlled by the three quantities of nx, nf and γx, which respectively represent tangential overload, normal overload, and track roll angle. nx is used to control speed, nf and γx are used to control speed direction." %}

### GCS overview (by lynx)
VTOL is an autonomous unmanned aircraft (drone) and capable of performing a mission from takeoff to landing without any intervention. It is highly advised that you still monitor the aircraft during the entire flight. The GCS receives live updates regarding the aircraft through the telemetry radio. You may change flight modes or intervene with the mission while flying. Uploading a new mission(s) or modifying an existing mission in flight is also possible.

The GCS is comprised of the following distinct sections.

{% include image.html file="webdev/gcsoverview.png" %}

### Tab Selection

Used to select which tab you are on, each with a particular function. There are five tabs: Checklist, Plan, Geo-Tag, Parameters, and Settings.

    Checklist: The Checklist tab is used to perform a preflight on your VTOL prior to every takeoff.

    Plan: The Plan tab is used add waypoints, survey grids, actions, or rally points to your mission. The Plan tab is utilized during the preflight process but can also be used to modify a mission in flight.

    Geo-Tag: The Geo-Tag menu is used to geo-reference images for mapping applications that do not require high accuracy. For post-processed kinematics (PPK) tagging, the standalone GeoTagz software is used. Geotagz is included with VTOL with the PPK option.

    Parameters: The Parameters Tab is an used to modify and update parameters on the autopilot. Parameters are only to be changed if instructed to do so by SRP Aero support.

    Settings: The Settings tab is used to configure GCS, equipment, and autopilot settings. The settings tab is also used to update firmware and license keys.

### Side Menu

The side menu corresponds to what tab you are on.
Menu Buttons

Each menu has unique buttons that change depending on which tab you are on. The very top button is used to collapse or expand the entire side menu. This can be useful when you are flying as it increases the overall map area.
Top Status Bar

Displays important aircraft information.

    Gamepad: Indicates if a gamepad is connected to Swift GCS. This connection may be USB or Bluetooth. Swift GCS only recognizes XBox controllers. Note, this functionality is not fully supported at this time.

    Mode: Displays the current flight mode.

    Timer: Displays the current flight in Hours:Minutes:Seconds. The timer automatically starts on takeoff and stops when the aircraft lands and disarms. The aircraft must be restarted (turned off and on) to reset the timer.

    Battery: Displays the main battery voltage. Click on the battery icon to expand this menu. The VTOL battery voltage is displayed in the expanded menu.

    GPS: Displays the GPS and GNSS satellite count.

    Telemetry: Displays the telemetry radio’s signal strength.

    Camera: The camera icon displays photo count for cameras equipped with feedback. Feedback is essential for PPK tagging but is also helpful to see if and when the camera is taking photos.

{% include image.html file="webdev/flying1.png" %}

Flight Modes

Used to change modes and aircraft location.

    Map: The Map menu is used to configure how the aircraft icon and waypoints are displayed on the map. Under this menu is also where you can toggle the terrain view and load KML overlays.

    Mission: In the mission menu, you can change the flight mode to Auto, restart the mission, or select an individual item in your mission to fly to.

    Land: Select land to begin your planned landing or to execute an emergency landing.

    Guided: The Guided flight mode is a 'fly here' mode. In Guided, you choose a spot on the map that the aircraft flies to and circles.

    Rally: The Rally flight mode is automatically used when the aircraft completes its mission or a failsafe activates. You can also select the Rally flight mode. In this flight mode, the aircraft will navigate to the nearest Rally point and circle.

{% include image.html file="webdev/flying2.png" %}

Bottom Status Bar

Displays aircraft location and waypoint information.

    Zoom in/Out: Zooms the map area in or out. On touchscreen devices, you can also use ‘pinch-zoom’.

    Wind: Displays the wind velocity and direction that the wind is blowing.

    Aircraft Location: Current aircraft location coordinates shown in decimal degrees format.

    Next Waypoint: Displays the next waypoint number in your mission and the distance to that waypoint from the aircraft.

    Messages: The message panel displays warnings and notifications from the GCS and autopilot. A new warning will automatically expand the message panel if it was collapsed.

    Home: Shows the distance from the aircraft to home. If you have a tablet with built-in GPS, this can be toggled to show the distance from the aircraft to your location.

    Click Distance: Click distance shows the distance between your last two mouse clicks. This is a quick and useful tool for planning purposes such as determining how far away something is on the map.

{% include image.html file="webdev/flying3.png" %}

HUD

The Heads-Up Display (HUD) displays aircraft information and attitude against a horizon line.

    Roll: The aircraft’s roll in degrees (bank angle).

    Altitude: The aircraft’s altitude above the ground. The unit is displayed below the altitude reading.

    Pitch: The aircraft’s pitch in degrees.

    Heading: The aircraft’s magnetic heading.

    Horizon: The aircraft’s attitude is shown against an artificial horizon.

    Ground Speed: The speed of the aircraft relative to the ground. The unit for both ground and airspeed is displayed below.

    Airspeed: The speed of the aircraft relative to the air through which it is moving.


Map Area

The Map displays the background satellite imagery with the position of aircraft flying over it. Currently there are two sources of map imagery: Mapbox and ESRI. The map area is also where your mission items and polygons will be shown.

{% include image.html file="webdev/flying4.png" %}



    Rally Point: The Rally icon shows the location of your planned Rally points. The icon is a flag within a triangle.

    Flight Leg: The flight legs connect each waypoint in sequence. They are an approximate indication of how the aircraft will fly from one waypoint to the next. They do no account for the turning radius of the aircraft. It is normal to observe small deviations from the flight legs in windy conditions.

    Circle Radius: A dashed line will appear around certain waypoints that have a radius. Examples include the landing pattern and loiters.

    Home: Displays the home location. Home is your takeoff location.

    Waypoints: Displays the location of your planned waypoints. Each waypoint is numbered. Waypoints are used to fly to a location in the sky. The aircraft will fly through or near the waypoint and then proceed to the next item in your mission. Waypoints are automatically generated when creating a survey.

    Survey Polygon: A survey polygon displays the area on the ground that you are mapping. Survey polygons are created from the Plan tab ⇨ Survey. You can draw a new region or load a KML or KMZ (Google Earth format). Flight legs will extend past the polygon area to account for the extra space that the aircraft needs to turn around. Viewing the polygon can be toggled on/off from the Map button ⇨ Survey. Multiple survey areas can be planned into your mission.

    Aircraft Trail: The aircraft trail shows the history of the aircraft’s flight path. At a certain length, the trail will automatically begin to disappear. The trail can also be clear manually from the Map button ⇨ Clear Aircraft Trail.

    Aircraft: Displays the aircraft location and heading.


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

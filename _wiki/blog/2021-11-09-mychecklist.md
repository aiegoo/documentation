---
layout: post
title: "Pilot's preflight checklist FAA"
name: "mychecklist"
tags: [drone, django]
tagName: drone
permalink: 2021-11-09-mychecklist.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: drone
keywords: "drone preflight checklist django"
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
}echo
</style>
3. adding more data fields
   1. flight goal, location, flight range, duration, altitude, battery stat as to fill out the form's entries of basic information
   2. integrating data mining scripts using [this](https://pf3.36io.co/images/network/data_viz.jpg)
   3.
{% include image.html file="network/heatmap.jpg" caption="heatmap with 7 prior check dataset" %}

## .table
- install sqlite3 on windows 'npm install --save sqlite3` in the project directory.
> run following cli to access sqlite3 table

```diff
sqlite3 db.sqlite3
.tables

# or
python manage.py dbshell

# instead of using db client run the following;
.header on
.mode column
pragma table_info('table you are looking for');
# this will get the outputs like in far below
# for more detailed control of shell output formatting
.mode column
.headers on
.separator ROW "\n"
.nullvalue NULL
```

```diff
CREATE TABLE IF NOT EXISTS "risk_assesment_assessment" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "date" date NOT NULL, "pilot_name" varchar(50) NOT NULL, "flight_from" varchar(255) NOT NULL, "to" varchar(255) NOT NULL, "sleep" varchar(1) NOT NULL, "how_do_you_feel" varchar(1) NOT NULL, "weather_at_termination" varchar(1) NOT NULL, "how_is_the_day_going" varchar(1) NOT NULL, "is_the_flight" varchar(1) NOT NULL, "planning" varchar(1) NOT NULL, "used_computer_program_for_all_planning" varchar(1) NOT NULL, "did_you_verify_weigth_and_balance" varchar(1) NOT NULL, "did_you_evaluate_performance" varchar(1) NOT NULL, "do_you_brief_your_passangers_on_the_ground_and_in_flight" varchar(1) NOT NULL, "flight_goal" text NULL, "location" varchar(100) NULL, "flight_range" decimal NULL, "duration" bigint NULL, "altitude" varchar(50) NULL, "battery_stat" varchar(100) NULL);
```

```diff
sqlite> pragma table_info('risk_assesment_assessment');
cid         name        type        notnull     dflt_value  pk
----------  ----------  ----------  ----------  ----------  ----------
0           id          integer     1                       1
1           date        date        1                       0
2           pilot_name  varchar(50  1                       0
3           flight_fro  varchar(25  1                       0
4           to          varchar(25  1                       0
5           sleep       varchar(1)  1                       0
6           how_do_you  varchar(1)  1                       0
7           weather_at  varchar(1)  1                       0
8           how_is_the  varchar(1)  1                       0
9           is_the_fli  varchar(1)  1                       0
10          planning    varchar(1)  1                       0
11          used_compu  varchar(1)  1                       0
12          did_you_ve  varchar(1)  1                       0
13          did_you_ev  varchar(1)  1                       0
14          do_you_bri  varchar(1)  1                       0
15          flight_goa  text        0                       0
16          location    varchar(10  0                       0
17          flight_ran  decimal     0                       0
18          duration    bigint      0                       0
19          altitude    varchar(50  0                       0
20          battery_st  varchar(10  0                       0

```

## RESTful API

Please read the [restfulapi blog](/2021-11-09-django-api.html) for more details.

I have once created this serializer for Arduino sensors;

```python
import serial
#import mysql.connector
from datetime import datetime
import threading
import time
#import sqlite3
import requests

port = serial.Serial('/dev/ttyACM0',9600)
base_url = "http://172.30.1.15:9001"
#con = sqlite3.connect('sensor.db')
#def sql_insert(con, entities):
#    cursorObj = con.cursor()
#    cursorObj.execute('INSERT INTO Sensor_Detections(Server_Name, Detect_Time) VALUES(?,?)', entities)
#    con.commit()
#port.open()
if port.isOpen():
    print("already open")
else:
    print("Opening port")
    port.open()
def readarduino(ServerName):
	while True:
		try:
			data=port.readline()

			data2 = data.decode(encoding="utf-8").strip()
			print(data2)
			form_data = {"Server_Name": ServerName,"NameSpace":"namespace","Detected_Count":data2}
			url = base_url + "/sensordata/"
			resp = requests.post(url,data=form_data,json=True)
			print(resp.json())
			# if data2=="<D>":
			# 	now = datetime.now()
			# 	entities = (ServerName, now.strftime("%Y-%m-%d %H:%M:%S"))
			# 	sql_insert(con, entities)

			print("record inserted")
		except KeyboardInterrupt:
			break
		time.sleep(0.05)
	port.close()

def startread():
	thread = threading.Thread(target=readarduino, args=("RPI_1",))
	thread.start()


def main():
	startread()


if __name__ == '__main__':
    main()
```

> model.py

```python
from django.db import models

# Create your models here.

class SensorData(models.Model):
    id = models.AutoField(primary_key=True)
    Detect_Time = models.DateTimeField(auto_now=True)
    Server_Name = models.CharField(max_length=10)
    NameSpace = models.CharField(max_length=10, default="")
    Detected_Count = models.CharField(max_length=10000,default="")
```

> serializer.py

```python
from rest_framework import serializers

from .models import SensorData

class SensorDataSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SensorData
        fields = ('id','Server_Name','Detect_Time',"NameSpace","Detected_Count")
```

But in this case, it's simple input table for the CRUD operations, or whatever lacks of it.

> serializer.py

```python
from risk_assesment.models import Assessment
from rest_framework import serializers

class AssessmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Assessment
        fields = [
        'pk',
        'date',
        'pilot_name',
        'flight_from',
        'to',
        'sleep',
        'how_do_you_feel',
        'weather_at_termination',
        'how_is_the_day_going',
        'is_the_flight',
        'planning',
        'used_computer_program_for_all_planning',
        'did_you_verify_weigth_and_balance',
        'did_you_evaluate_performance',
        'do_you_brief_your_passangers_on_the_ground_and_in_flight',
        'flight_goal',
        'location',
        'flight_range',
        'duration',
        'altitude',
        'battery_stat',
        ]
        extra_kwargs = {
            'pk': {'read_only': True},
            'date': {'read_only': True}
        }
```

> models.py

```python
from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.

class Assessment(models.Model):
     date=models.DateField(auto_now_add=True)
     pilot_name=models.CharField(max_length=50,)
     flight_from=models.CharField(max_length=255,)
     to=models.CharField(max_length=255,)
     SLEEP_CHOICES = [
        ('2','Did you sleep well or less than 8 hours'),
        ('0','Slept well')
     ]
     sleep=models.CharField(
        max_length=1,
        choices = SLEEP_CHOICES,

     )
     HOW_DO_YOU_FEEL_CHOICES = [
        ('4', 'Have a cold or ill'),
        ('0', 'Feel great'),
        ('2', 'Feel a bit off')
     ]
     how_do_you_feel=models.CharField(
        max_length=1,
        choices = HOW_DO_YOU_FEEL_CHOICES,

     )
     WEATHER_AT_TERMINATION_CHOICES = [
        ('1','Greater than 5 miles visibility and 3,000 feet ceillings'),
        ('3','At least 3 miles visibility and 1,000 feet ceillings, but less than 3,000 feet ceillings and 5 miles visibility'),
        ('4', 'IMC conditions')
     ]
     weather_at_termination=models.CharField(
        max_length=1,
        choices = WEATHER_AT_TERMINATION_CHOICES,

     )
     HOW_IS_THE_DAY_GOING_CHOICES = [
        ('3','Seems like one thing after another (late, making errors, out of step)'),
        ('0','Great day')
     ]
     how_is_the_day_going=models.CharField(
        max_length=1,
        choices = HOW_IS_THE_DAY_GOING_CHOICES,

     )
     IS_THE_FLIGHT_CHOICES = [
        ('1','Day?'),
        ('3','Night')
     ]
     is_the_flight=models.CharField(
        max_length=1,
        choices = IS_THE_FLIGHT_CHOICES,

     )
     PLANNING_CHOICES = [
        ('3','Rush to get off ground'),
        ('1','No Hurry'),
        ('0','Used charts and computer to assist')
     ]
     planning=models.CharField(
        max_length=1,
        choices = PLANNING_CHOICES,

     )
     BOOLEAN_CHOICES_30 = [
        ('3','Yes'),
        ('0','No'),
     ]
     used_computer_program_for_all_planning=models.CharField(
        max_length=1,
        choices = BOOLEAN_CHOICES_30,

     )
     BOOLEAN_CHOICES_03 = [
        ('0','Yes'),
        ('3','No'),
     ]
     did_you_verify_weigth_and_balance=models.CharField(
        max_length=1,
        choices = BOOLEAN_CHOICES_03,

     )
     did_you_evaluate_performance=models.CharField(
        max_length=1,
        choices = BOOLEAN_CHOICES_03,

     )
     BOOLEAN_CHOICES_02 = [
        ('0','Yes'),
        ('2','No')
     ]
     do_you_brief_your_passangers_on_the_ground_and_in_flight=models.CharField(
        max_length=1,
        choices = BOOLEAN_CHOICES_02,

     )
     flight_goal = models.TextField(null=True,blank=True)
     location = models.CharField(null=True,blank=True,max_length=100)
     flight_range = models.DecimalField(null=True,blank=True,decimal_places=2, max_digits=10)
     duration = models.DurationField(null=True,blank=True,max_length=100)#4 days, 5:06
     altitude = models.CharField(null=True,blank=True,max_length=50)
     battery_stat = models.CharField(null=True,blank=True,max_length=100)

     def get_score(self):
         return sum([
            int(self.sleep),
            int(self.how_do_you_feel),
            int(self.weather_at_termination),
            int(self.how_is_the_day_going),
            int(self.is_the_flight),
            int(self.planning),
            int(self.used_computer_program_for_all_planning),
            int(self.did_you_verify_weigth_and_balance),
            int(self.did_you_evaluate_performance),
            int(self.do_you_brief_your_passangers_on_the_ground_and_in_flight)
         ])

     def __str__(self):
         return f"{self.date}. {self.pilot_name}, Flight from: {self.flight_from} To: {self.to}. Score ({self.get_score()})"
```

## django validation and test

```python
python manage.py test
```

to run a validation test. This test to make sure that only the selected values are valid for each question that why trying to replace each point with 50 will raise error 400)#bad request and the form will not be submitted

and check the code from test/test_view.py

```python
  count = 0
        for key in new_assessment_score:
            #test valid assesment point
            response = client.post(url,data={**test_data_1,key:50})
            self.assertEqual(response.status_code,400)#bad request
            cp = test_data_1.copy()
            del cp[key]
            #test that all assesment choice field are filled before submitting
            response = client.post(url,data=cp)
            self.assertEqual(response.status_code,400)#bad request
```

While del cp[key] `#test` that all assesment choice field are filled before submitting

```python
response = client.post(url,data=cp)
self.assertEqual(response.status_code,400)
```
to make sure that all question (point based) are required to be filled out in order to allow submit.

**ref** check both the the risk_assesment/test and api/test; also have a look at api/view.py, and api/permisssions.py

### more update on db schema change
* let user know the unit or type of data, and you can now search using any of the fields (from the three fields).

```diff
cid         name        type        notnull     dflt_value  pk
----------  ----------  ----------  ----------  ----------  ----------
0           id          integer     1                       1
1           date        date        1                       0
2           pilot_name  varchar(50  1                       0
3           flight_fro  varchar(25  1                       0
4           to          varchar(25  1                       0
5           sleep       varchar(1)  1                       0
6           how_do_you  varchar(1)  1                       0
7           weather_at  varchar(1)  1                       0
8           how_is_the  varchar(1)  1                       0
9           is_the_fli  varchar(1)  1                       0
10          planning    varchar(1)  1                       0
11          used_compu  varchar(1)  1                       0
12          did_you_ve  varchar(1)  1                       0
13          did_you_ev  varchar(1)  1                       0
14          do_you_bri  varchar(1)  1                       0
15          flight_goa  text        0                       0
16          location    varchar(10  0                       0
17          flight_ran  decimal     0                       0
18          duration    bigint      0                       0
19          battery_st  varchar(10  0                       0
20          altitude    decimal     0                       0
sqlite>

```
**see** the difference between the  changes.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

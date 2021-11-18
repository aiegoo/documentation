---
layout: post
title: "Pilot's preflight checklist FAA"
name: "mychecklist"
tags: [drone, django, database, api]
tagName: drone
permalink: 2021-11-09-mychecklist.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: drone
keywords: "drone preflight checklist django heroku orm google sheet api"
summary: "Tue, Nov 09, 21, preflight checklist with data mining, d3 visualization and google sheet implementation"
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
| ![faa_checklist](images/drone-resource-wiki/handbook/49-1.jpg) | [operation_rules]({{site.github_link}}pdf/gcs/flight_rules.pdf) | [maintenancelog]({{site.github_link}}pdf/gcs/maintenancelog.hwp) | [flightlog]({{site.github_link}}pdf/gcs/flightlog.xlsx)

## idea expansion
Now that I need this form and and what' required of it, I set off to a drawing table, whoa! my usual Starbucks table and started dawdling on the ideas.

Steps to follow;
1. a preliminary write-up of project design [ProjectDesgin]({{site.github_link}}pdf/gcs/ProjectDesign.odt)
2. a db orm

{{site.data.alerts.details}}
<div style="width: 440px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:440px; height:480px" src="https://lucid.app/documents/embeddedchart/bfb24bd8-9df1-40f5-bcb6-7784df312c70" id="3E7pQLU7-FM8"></iframe></div>
{{site.data.alerts.ended}}

<style>
ol li {
    content: "";
    counter-reset: list 3;
}
</style>
3. adding more data fields
   1. flight goal, location, flight range, duration, altitude, battery stat as to fill out the form's entries of basic information
   2. integrating data mining scripts using [this](https://pf3.36io.co/images/network/data_viz.jpg)
{% include image.html file="network/heatmap.jpg" caption="heatmap with 7 prior check dataset" %}

## .table
- install sqlite3 on windows 'npm install --save sqlite3` in the project directory.

> run these following clis to access sqlite3 table [sof](https://dba.stackexchange.com/questions/40656/how-to-properly-format-sqlite-shell-output)

```diff
sqlite3 db.sqlite3
.tables

# or
python manage.py dbshell
# or
python manage.py shell

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

### to update from shell

```bash
from risk_assesment.models import Assessment
data = Assessment.objects.all()
data.delete()
```

{% include image.html file="dbshell.png" caption="the output of the shell cli above" %}

### to dump a table to json
[output_dump](https://github.com/aiegoo/mychecklist/commit/7ac03a3d547376172691522669be66e9d544965c)

```python
python manage.py dumpdata risk_assesment --indent=2 --output=risk_assesment/fixtures/assesments.json

python manage.py dumpdata auth.User --indent=2 --output=risk_assesment/fixtures/users.json
# these two files have caused a couple of build errors with Heroku. Delete all key values except array symbol []
`from risk_assesment.gsScripts import *`, `gsPush()
# when importing it, just the scripts as in below
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py test
python manage.py loaddata assesments.json
python manage.py loaddata users.json
python manage.py runserver
```


```diff
CREATE TABLE IF NOT EXISTS "risk_assesment_assessment" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "date" date NOT NULL, "pilot_name" varchar(50) NOT NULL, "flight_from" varchar(255) NOT NULL, "to" varchar(255) NOT NULL, "sleep" varchar(1) NOT NULL, "how_do_you_feel" varchar(1) NOT NULL, "weather_at_termination" varchar(1) NOT NULL, "how_is_the_day_going" varchar(1) NOT NULL, "is_the_flight" varchar(1) NOT NULL, "planning" varchar(1) NOT NULL, "used_computer_program_for_all_planning" varchar(1) NOT NULL, "did_you_verify_weigth_and_balance" varchar(1) NOT NULL, "did_you_evaluate_performance" varchar(1) NOT NULL, "do_you_brief_your_passangers_on_the_ground_and_in_flight" varchar(1) NOT NULL, "flight_goal" text NULL, "location" varchar(100) NULL, "flight_range" decimal NULL, "duration" bigint NULL, "altitude" varchar(50) NULL, "battery_stat" varchar(100) NULL);
```

{% include copyto.html %}

```diffhttps://myfaa.herokuapp.com/assesment/results/?pilot_name=Udo%20Samuel
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

{{site.data.alerts.details}}
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
:::
{{site.data.alerts.ended}}

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

{{site.data.alerts.details}}
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
:::
{{site.data.alerts.ended}}
## django validation and test

```python
python manage.py test
```

It's the cli to run a validation test. This test is to make sure that the selected values are valid for each question. That's why trying to replace each point with 50 will raise error 400 #bad request and the form will not be submitted

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

**ref** check both the risk_assesment/test and api/test; also have a look at api/view.py, and api/permisssions.py

### more update on db schema change
* following is to let user know the unit or type of data, and you can now search using any of the fields (from the three fields).

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

## d3js

{{site.data.alerts.details}}
{% include copyto.html %}
      <template id="">
          <svg  id='' width='100%' height='100%'>
            <defs>
              <linearGradient id="grad1" x1="100%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgb(0,117,192);stop-opacity:1" />
                <stop offset="25%" style="stop-color:rgb(43,169,83);stop-opacity:1" />
                <stop offset="75%" style="stop-color:rgb(249,238,25);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(146,42,37);stop-opacity:1" />
              </linearGradient>
            </defs>
            <text id='bottom-text'  x='2.2em' y='97%' dominant-baseline="central" text-anchor="middle" fill="darkblue">Low risk</text>
            <text id='top-text' x='4em' y='2.5%'  text-anchor="middle" dominant-baseline="central" fill="red">Endangerment</text>
        </svg>

      </template>
      <div id='svg_container' class="row my-3">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js"></script>

    <script src = "https://d3js.org/d3-path.v1.min.js"></script>
    <script src = "https://d3js.org/d3.v4.min.js"></script>
    <script>

      $(document).ready(function() {
        var lineData = [];
        const makeSVG = () => {
          let parentCont = document.getElementById('svg_container');
          let size = parentCont.getBoundingClientRect();
          // console.log(size)
          let HEIGHT = size.height*0.97;
          let WIDTH = size.width*0.97;
          let y_margin = HEIGHT*0.14;
          let x_margin = WIDTH*0.06;
          parentCont.innerHTML = '';
          var temp = document.getElementsByTagName("template")[0];
          var clon = temp.content.cloneNode(true);

          parentCont.appendChild(clon);
          // console.log(parentCont.children)
          parentCont.children[0].id='visualisation';

          let vis = d3.select('#visualisation');
          x1 = WIDTH*0.01,
          barWidth = size.height*0.78,
          y1 = HEIGHT*0.08,
          barHeight = size.height*0.3,
          numberHues = 35;
            var idGradient = "legendGradient";
            var svgForLegendStuff = vis;
            svgForLegendStuff.append("rect")
                .attr("fill","url(#" + 'grad1' + ")")
                .attr("x",x1)
                .attr("y",y1)
                .attr("width",barHeight)
                .attr("height",barWidth)
                .attr("rx",20)  //rounded corners, of course!
                .attr("ry",20);

            //we go from a somewhat transparent blue/green (hue = 160º, opacity = 0.3) to a fully opaque reddish (hue = 0º, opacity = 1)
            var hueStart = 160, hueEnd = 0;
            var opacityStart = 0.3, opacityEnd = 1.0;
            var theHue, rgbString, opacity,p;

            var deltaPercent = 1/(numberHues-1);
            var deltaHue = (hueEnd - hueStart)/(numberHues - 1);
            var deltaOpacity = (opacityEnd - opacityStart)/(numberHues - 1);


            var theData = [];
            for (var i=0;i < numberHues;i++) {
            theHue = hueStart + deltaHue*i;

            rgbString = d3.hsl(theHue,1,0.6).toString();
            opacity = opacityStart + deltaOpacity*i;
            p = 0 + deltaPercent*i;
            theData.push({"rgb":rgbString, "opacity":opacity, "percent":p});
            }
            var stops = d3.select('#' + idGradient).selectAll('stop')
                .data(theData);

            stops.enter().append('stop');

            stops.attr('offset',function(d) {
                        return d.percent;
            })
            .attr('stop-color',function(d) {
                        return d.rgb;
            })
            .attr('stop-opacity',function(d) {
                        return d.opacity;
            });

            Date.prototype.addDays = function(hours,minus=false) {
                var date = new Date(this.valueOf());
                if(!minus){
                  date.setHours(date.getHours() + hours);
                }else{
                  date.setHours(date.getHours() - hours);
                }

                return date;
            }

            Date.prototype.addDays = function(days,minus=false) {
                var date = new Date(this.valueOf());
                if(minus){
                  date.setDate(date.getDate() - days);
                }else{
                  date.setDate(date.getDate() + days);
                }
                return date;
            }

          var date = new Date();
          var min_date = new Date();
          var max_date = new Date();
          if (lineData.length==0){
            min_date = min_date.addDays(days=1,minus=true);
            max_date = max_date.addDays(days=1,minus=false);
          }else{
            min_date = new Date(lineData[0][0])
            min_date = min_date.addDays(days=1,minus=true);
            max_date = new Date(lineData[lineData.length-1][0])
            max_date = max_date.addDays(days=1,minus=false);
          }
          var xScale = d3.scaleTime()
           .domain([min_date,max_date])
           .range([x_margin,WIDTH*0.88]);
          var yScale = d3.scaleLinear()
           .domain([30, 0])
           .range([(y_margin*0.8), HEIGHT-(y_margin)]);
           var xAxis = d3.axisBottom(xScale);
           var yAxis = d3.axisLeft(yScale).ticks(4);
            vis.append("g")
              .attr('transform', "translate("+x_margin+"," + 0 + ')')
             .call(yAxis);
            vis.append("g")
             .attr('transform', "translate("+ x_margin +"," + (HEIGHT-y_margin) + ')')
             .call(xAxis);
             var lineFunc = d3.line()
              .x(function(d, index) {
                return xScale(new Date(d[0]));
              })
              .y(function(d) {
              return yScale(d[1]);
              })
              .curve(d3.curveBasis);

              var path = vis.append("svg:path")
             .attr("d", lineFunc(lineData))
             .attr("stroke", "grey")
             .attr("stroke-width", 2)
             .attr("fill", "none");


             var d = vis.selectAll("dot")
              .data(lineData)
              .enter().append("circle")
              .attr("r", '0.3em')
              .attr("cx", function(d) { return xScale(new Date(d[0])); })
              .attr("cy", function(d) { return yScale(d[1]); })
              .attr("fill",
                function(d) {
                  if(d[1]<=10){
                    return '#008F8F'
                  }else if(d[1]<=20){
                    return '#8FC73E';
                  }else{
                    return '#F05723';
                  }

                });
        }
        makeSVG()
        $(window).resize(function(){
          makeSVG();
        })
        document.getElementById('assessment_form').addEventListener('input',(e)=>{
          var column_1 = 0;
          for(let el of document.querySelectorAll('.column_1 input[type=radio]') ){
            if (el.checked){
              column_1+=parseInt(el.value)
            }
          }
          document.querySelector('.column_1 input[name=col_1]').value=column_1;

          var column_2 = 0;
          for(let el of document.querySelectorAll('.column_2 input[type=radio]') ){
            if (el.checked){
              column_2+=parseInt(el.value)
            }
          }
          document.querySelector('.column_2 input[name=col_2]').value=column_2;
          document.querySelector('input[name=col_3]').value= column_2+column_1 ;
        })
        var csrftoken = Cookies.get('csrftoken');
        function csrfSafeMethod(method) {
          // these HTTP methods do not require CSRF protection
          return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }

        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
              if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
              }
            }
          });
        document.querySelector('#assessment_form').addEventListener('submit',
          function( event ) {
            event.preventDefault();
            var formValues = $(this).serialize();
            $.post('/assesment/',
                formValues,
                function(data){
                  if (data['status'] == 'ok')
                  {
                    lineData = [];
                    // console.log(data['prev_data']);
                    for(let ent of data['prev_data']){
                        lineData.push([ent['date'],ent['score']]);
                      }
                      // Clear the form fields
                    	event.target.reset();
                      makeSVG();

                  }
              }
            );
          }
        );

      });
    </script>

:::
{{site.data.alerts.ended}}

as of Nov 12, 2021, I have updated some fields and they can be found here;
[Assesment](https://github.com/aiegoo/myfaa/blob/master/risk_assesment/templates/risk_assesment/assesment.html),

[result](https://github.com/aiegoo/myfaa/blob/master/risk_assesment/templates/risk_assesment/assesments_result.html)

## googlesheet and api
<style>
.customtable tr:nth-child(odd) { background-color: #0087ff6e; }
.customtable td:nth-child(2) { color: white; background: #0087ff6e; }
.customtable tr:nth-child(3) { color: black; background: #80808026; }
.customtable td:nth-child(even) { color: black; background: #b1b0e1}
</style>

**ref**

{:.customtable}
|---
| [google_console](https://console.cloud.google.com/cloud-resource-manager?pli=1) | [client_cred](https://github.com/aiegoo/config/blob/e0e951a27be0b482e6c820a4d9e31548f73056d2/client_secret_18507158082-u2u59jf1om0jf15nl9q0kmu1l18u337j.apps.googleusercontent.com.json) | [api_evangelist](https://apievangelist.com/blog/) | [another_blog](https://medium.com/@aswinvb/how-to-use-google-sheets-as-a-database-for-your-application-254b2c6210fc#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3YzcyNjE5ZDA5MzVhMjkwYzQxYzNmMDEwMTY3MTM4Njg1ZjdlNTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2MzY1MDg1ODcsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwOTg5NDgxNTM2ODc0MDY2NTI3NSIsImVtYWlsIjoib25vZmZ0b255QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoibGluayBvbm9mZiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaFFjcDE3QzBfd1pQeS15VHViY002MFIxeXVzbXhpX1JxNy13Tkg9czk2LWMiLCJnaXZlbl9uYW1lIjoibGluayIsImZhbWlseV9uYW1lIjoib25vZmYiLCJpYXQiOjE2MzY1MDg4ODcsImV4cCI6MTYzNjUxMjQ4NywianRpIjoiYzdlODg3N2Q1ZWNjM2NlNmZlNmQzMWZlMzQ5N2Y1MTc1YWUyMjllMyJ9.ElLOsBQuGgBgpAyWS8EkFCLDGkofWkFInP9NLr-sZn2ZUj0kpxxtBtc_WqTqSfCtS7yTBPAqd-DYKTNPRbkC3ibKTSo5jlRZoFVSId-54JFFulEdSz5ZgiMA4dMm0QlMNtNRvMc1nZyOdpCvjIYZpArF_TFhXQlMFioXC75QTun5kRedHaJ4tThFO5TzpzKZEFmGLUvfHt0HOMNpCMceUpvWJhLy4RZxjIg2_F6AMPPN0C54-UYNOpPjv1mKTWMwpYz34aH7tQv3Xql6wuJ1hY63sMyqWd6j-LE8Oi3qjaT27qF6QUNNGNbbnn47zh6dIfa6p58gjw09EZhFqm6t5A) | [unito_subs](https://unito.io/integrations/google-sheets-github/)

**books**

{:.customtable}
|---
| [datacleaning](https://github.com/aiegoo/uas-reference/blob/master/data/datacleaning.pdf) | [googe_guide](https://github.com/aiegoo/uas-reference/blob/master/data/googleguide.pdf) | [googsheet-gas](https://github.com/aiegoo/uas-reference/blob/master/data/googlesheet-gas.pdf)

**other wiki here**

{:.customtable}
[googleapi](/2021-10-04-wiki-googleapi-image-search.html)
[googleAppScript](/GoogleAppsScript-Category.html)
[googlesheet](/2021-09-26-googlesheet.html)
### tl;dr
I thought it was a quick setup task for the api and googlesheet to work. A **principle** working method is to export the db to json format locally to import into google sheet, which then would be ported or pushed to the github repo for deployment.

I've been trying to find a way to make the model work smoothly with the google drive, but it seem it can't be done at least without using a commercial service such as unito (see above for the link).

For now I have two options to choose from;
-  make the app automatically update the google sheet and to upload all db to google.
-  create a json file that keeps track of the app database

see the code and setup details in the links below;

### how it's built

{% include image.html file="google/google_addkey.png" caption="manually adding key if the default steps failed to produce one" %}
{% include image.html file="google/google_service.png" caption="no key is present to the mychecklist project" %}

- with google creds and cred.json like in the settings.py, access to gsheet is granted through this cred.json file containing  contents from my cred issued by google.

|---
| Name | By | Service Name | Overview
| Google Sheets API | Google Enterprise API | sheets.googleapis.com | Reads and writes Google Sheets.

- add this script to settings.py

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
GSHEETS = {
    'CLIENT_SECRETS': BASE_DIR / 'creds.json',
    'SHEET_NAME':'mychecklist'
}
```

- I have create a script to interact Gsheet with my django app. In risk/assesment/gsScripts.py, you will find each module for CRUD methods implemented as the same way the forms.py of django app would do with its database. [code](https://github.com/aiegoo/mychecklist/blob/gh-pages/risk_assesment_project/risk_assesment/gsScripts.py)
- run `python manage.py check` and `python manage.py runserver 8099`

this will ordinarily set you up to interact with the googlesheet and default db.
If you change anything in there, make sure to pull to database before any other changes to the database, because every change to the database automatically update the json file. Don't confuse it with the assesments.json under the fixtures directory which is completely different.
If you run into issues, run `python manage.py shell`, `from risk_assesment.gsScripts import *`, `gsPush()` This will update the googlesheet. or `risk_assesment.gsScripts import *`, `gsPull()`
so you will always run gsPush() to push all record in the database to google sheet. Any new data should be automatically be updated in the google sheet too, either  via api, html form or directly created in the admin page.
{% include image.html file="google/gsScripts-running.png" caption="when gsPush is called" %}

{% include image.html file="google/google_gsPull.png" caption="when gsPull is entered in django shell" %}

{% include callout.html content="**Warning** as the gsheet is snynced with the db, any changes in format and headings will result in errors and the sync will not work  at all. For data validation,  make sure the data types are correct or it will not be loaded onto the django database" %}

### more to do
**data limit** So unfortunately, there is nothing I can do about google limit when we initially try to load data from the fixture.

## Heroku implementation
{{site.data.alerts.callout_default}}
So my original setup plan to use github Pages with a json file will not work for a non-static site like this project, as I will use this app mostly through my mobile phone, which needs to display the input html form for user data. Unless I edit the google sheet for this purpose, which would be too cumbersome task to do on site.{{site.data.alerts.end}}
[heroku_django_blog](https://realpython.com/django-hosting-on-heroku/#step-7-deploy-your-django-project-to-heroku)
{{site.data.alerts.callout_primary}}
So I decided to use a free django hosting service (AWS free tier was an option too). But I want to keep my amazon account as free as it is now. Pythonanywhere  was a good alternative. Goorm is another service I am familiar with and will make a good candidate too, otherwise.{{site.data.alerts.end}}

 {% include callout.html content="Heroku turned out that I need to add some more custom settings for gspread and oauth2client to work." %}

- how I got the dummy data back in heroku app
![image](https://user-images.githubusercontent.com/42961200/141774588-44a6b950-6a31-4df4-9937-54e182a71890.png)
- I ran the same script in the heroku console, boooom! it worked. [heeroku_console](https://dashboard.heroku.com/apps/myfaa/deploy/github?web-console=myfaa)

### now being served here

{: .warning}
- sequence of cli when updating changes to django app/db
1. (add/modify some someapp/models.py)
2. python manage.py makemigrations someapp
3. python manage.py migrate
4. git add someapp/migrations/*.py (to add the new migration file)
5. git commit -m "added migration for app someapp"
6. git push heroku
7. heroku run python manage.py migrate


{:.customtable}
|---
| [Hira Fava](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Hira%20Fava) | [Manjeet Carpentier](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Manjeet%20Carpentier) | [McKenzie Mantovani](https://myfaa.herokuapp.com/assesment/results/?pilot_name=McKenzie%20Mantovani)
| [Munashe Zilberschlag](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Munashe%20Zilberschlag) | [Naomi Derrick](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Naomi%20Derrick) | [Otobong Schubert](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Otobong%20Schubert)
| [peter](https://myfaa.herokuapp.com/assesment/results/?pilot_name=peter) | [Ratna Newell](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Ratna%20Newell) | [anthony](https://myfaa.herokuapp.com/assesment/results/?pilot_name=anthony)
| [tony](https://myfaa.herokuapp.com/assesment/results/?pilot_name=tony) | [Tafadzwa Lončartony](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Tafadzwa%20Lončar) | [Udo Samuel](https://myfaa.herokuapp.com/assesment/results/?pilot_name=Udo%20Samuel)

currently I am serving only the admin page, assessment input form and results with api actions.

<style>

.customtable2 td:nth-child(1) { color: white; background:#0087ff6e; }

</style>

{:.customtable2}
|---
| [admin_captain_mychecklist](https://myfaa.herokuapp.com/admin/login/?next=/admin/) | [api_get_post](https://myfaa.herokuapp.com/api/)

###  heroku custom command
[heroku_doc](https://devcenter.heroku.com/articles/scheduling-custom-django-management-commands)

{{site.data.alerts.details}}
```python
from django.core.management.base import BaseCommand, CommandError
from some_app.models import Book

class Command(BaseCommand):
    help = 'Prints all book titles in the database'

    def handle(self):
        try:
            books = Book.objects.all()
            for book in books:
                 self.stdout.write(self.style.SUCCESS(book.title))
        except FieldDoesNotExist:
            self.stdout.write(self.style.ERROR('Field "title" does not exist.'))
            return

        self.stdout.write(self.style.SUCCESS('Successfully printed all Book titles'))
        return

```
{{site.data.alerts.ended}}

```shell
heroku run bash -a [yourappname]
python manage.py <your_custom_command>
```
## issues tracker

{: .note}
I've been testing the app and discovered more lacking than satisfactory; for example, API search requires exact wording for it to work. Check out the views.py under `risk_assesment_project/api/views.py`

This is my solution; adjust graph, added autocomplete, use gspull and gspush to reorder. filter by partial values

```python

    @action(detail=False,
            methods=['get'])
    def names(self, request, *args, **kwargs):
        qs = set()
        if request.query_params.get('pilot_name'):
            qs = [i[0] for i in set(Assessment.objects.filter(pilot_name__icontains=request.query_params.get('pilot_name')).values_list('pilot_name'))]
        return Response({'matched': qs}
```

and some minor changes below;

```python
    def list(self,request):
        queryset = self.get_queryset().order_by('flight_date')
        if len(request.query_params):
            string = "and ".join([f"{k} LIKE UPPER('%{v.upper()}%')" for k,v in request.query_params.items()])
            queryset = Assessment.objects.raw(f"""SELECT * FROM risk_assesment_Assessment WHERE {string} ORDER BY flight_date""")
        serializer = self.serializer_class(queryset,many=True)
        return Response(serializer.data)

```
- Gsheet numbering was always hard to sort and hard to produce sensible order of data entries. I have added assesment_id field so that the default ordering is normally executed with most recent at the bottom of the data entry

```python
@admin.register(Assessment)
class AssessmentAdmin(admin.ModelAdmin):
    list_display = ['assesment_id','flight_date','pilot_name','get_score']
    list_filter = ('flight_date', 'pilot_name', 'flight_from','to')
    search_fields = ('flight_date', 'pilot_name', 'flight_from','to')
```

- risk_assesment/models.py

```python
from django.db import models
from django.core.exceptions import ObjectDoesNotExist
class OrderField(models.PositiveIntegerField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
    def pre_save(self, model_instance, add):
        qs = self.model.objects.all()
        if getattr(model_instance, self.attname) is None:
            if len(qs)==0:
                value = 1
            else:
                last_item = qs.latest(self.attname)

                _assesment_id = [i[self.attname] for i in qs.values(self.attname)]
                for i in range(1,max(_assesment_id)+2):
                    try:
                        _assesment_id.index(i)
                    except:
                        value = i
                        break
            setattr(model_instance, self.attname, value)
            return value
        else:
            return super().pre_save(model_instance, add)


# above was placed before this; class Assessment(models.Model)

# skipping
 data = [
            ins.assesment_id,
            ins.flight_date,
```

- risk_assesment/signals.py

```python


```


### other issues
{{site.data.alerts.details}}
```python
Environment:


Request Method: GET
Request URL: http://127.0.0.1:8000/admin/risk_assesment/assessment/

Django Version: 3.2.9
Python Version: 3.8.10
Installed Applications:
['django.contrib.admin',
 'django.contrib.auth',
 'django.contrib.contenttypes',
 'django.contrib.sessions',
 'django.contrib.messages',
 'django.contrib.staticfiles',
 'risk_assesment.apps.RiskAssesmentConfig',
 'rest_framework',
 'api.apps.ApiConfig']
Installed Middleware:
['django.middleware.security.SecurityMiddleware',
 'django.contrib.sessions.middleware.SessionMiddleware',
 'django.middleware.common.CommonMiddleware',
 'django.middleware.csrf.CsrfViewMiddleware',
 'django.contrib.auth.middleware.AuthenticationMiddleware',
 'django.contrib.messages.middleware.MessageMiddleware',
 'django.middleware.clickjacking.XFrameOptionsMiddleware']



Traceback (most recent call last):
  File "/home/tony/.local/lib/python3.8/site-packages/django/core/handlers/exception.py", line 47, in inner
    response = get_response(request)
  File "/home/tony/.local/lib/python3.8/site-packages/django/core/handlers/base.py", line 181, in _get_response
    response = wrapped_callback(request, *callback_args, **callback_kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/contrib/admin/options.py", line 616, in wrapper
    return self.admin_site.admin_view(view)(*args, **kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/utils/decorators.py", line 130, in _wrapped_view
    response = view_func(request, *args, **kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/views/decorators/cache.py", line 44, in _wrapped_view_func
    response = view_func(request, *args, **kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/contrib/admin/sites.py", line 232, in inner
    return view(request, *args, **kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/utils/decorators.py", line 43, in _wrapper
    return bound_method(*args, **kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/utils/decorators.py", line 130, in _wrapped_view
    response = view_func(request, *args, **kwargs)
  File "/home/tony/.local/lib/python3.8/site-packages/django/contrib/admin/options.py", line 1815, in changelist_view
    'selection_note': _('0 of %(cnt)s selected') % {'cnt': len(cl.result_list)},
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/models/query.py", line 262, in __len__
    self._fetch_all()
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/models/query.py", line 1324, in _fetch_all
    self._result_cache = list(self._iterable_class(self))
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/models/query.py", line 51, in __iter__
    results = compiler.execute_sql(chunked_fetch=self.chunked_fetch, chunk_size=self.chunk_size)
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/models/sql/compiler.py", line 1208, in execute_sql
    return list(result)
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/models/sql/compiler.py", line 1646, in cursor_iter
    for rows in iter((lambda: cursor.fetchmany(itersize)), sentinel):
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/models/sql/compiler.py", line 1646, in <lambda>
    for rows in iter((lambda: cursor.fetchmany(itersize)), sentinel):
  File "/home/tony/.local/lib/python3.8/site-packages/django/db/utils.py", line 97, in inner
    return func(*args, **kwargs)
  File "/usr/lib/python3.8/sqlite3/dbapi2.py", line 64, in convert_date
    return datetime.date(*map(int, val.split(b"-")))

Exception Type: ValueError at /admin/risk_assesment/assessment/
Exception Value: invalid literal for int() with base 10: b'11 22:10:12.630675'
```
:::
{{site.data.alerts.ended}}

### weather api app
[firebase](eggs-weather.web.app)
[source](https://github.com/aiegoo/bdook-weather2)

<style>
.wrap {width:100%; height:100%; margin:auto; background:url(images/bdook/iphone.png) no-repeat; background-size:auto 100%; position:relative;}
.tabs {border-bottom:1px solid #999; position:absolute; top:11.2%; left:7.13%; width:86%;}
.tabs > li {padding:0.75rem; width:50%; float:left; text-align:center;}
.wrap > div {width:86%; top:calc(11.2% + 3rem); position:absolute; height:calc(77.4% - 3rem); left:7.13%; }
.conts {width:100%; height:100%; overflow-y:auto; position:absolute; font-size:1rem; }
.daily {display:block;}
.weekly {display:none;}


.daily > :first-child {padding:2em; text-align:center;}
.daily #wt_icon {width:50%;}
.daily .tit {text-align:right; display:inline-block; width:30%; padding:1em;}
.daily .cont {text-align:left; display:inline-block; width:60%; padding:1em;}

.weekly > ul {border-bottom:1px solid #999;}
.weekly > ul > :first-child {width:28%; padding:2%; float:left;}
.weekly > ul > li:not(:first-child) {float:right; width:72%; padding:1%;}
.weekly span {color:rgb(30, 56, 172)}

/* Underline From Center */
.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  bottom: 0;
  background: #2098D1;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}


* Shutter Out Horizontal */
.hvr-shutter-out-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2098D1;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {
  color: white;
}
.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.clear {clear:both;}
.clear:after {clear:both; display:block; content:"";}
</style>
<div class="wrap">
		<ul class="tabs clear">
			<li class="hvr-underline-from-center">오늘의 날씨</li>
			<li  class="hvr-underline-from-center">5일간 날씨</li>
		</ul>
		<div>
			<ul class="conts daily">
				<li>
					<img id="wt_icon">
				</li>
				<li>
					<span class="tit">날씨</span>
					<span id="wt_main" class="cont"></span>
				</li>
				<li>
					<span class="tit">온도</span>
					<span id="wt_temp" class="cont"></span>
				</li>
				<li>
					<span class="tit">바람</span>
					<span id="wt_wind" class="cont"></span>
				</li>
				<li>
					<span class="tit">위치</span>
					<span id="wt_coord" class="cont"></span>
				</li>
			</ul>
			<ul class="conts weekly">
				<li><span>주간</span>날씨</li>
			</ul>
		</div>
	</div>
	<ul class="clear">
		<li><img src="" alt=""></li>
		<li class="wk_time"></li>
		<li class="wk_main"></li>
		<li class="wk_temp"></li>
		<li class="wk_wind"></li>
	</ul>
	<script src="js/weather.js"></script>


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

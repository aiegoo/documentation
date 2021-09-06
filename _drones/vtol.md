---
layout: page
name: Vtol
permalink: vtol.html
type: "APM, Mission-planner"
link: https://github.com/aiegoo/portfolio/wiki/vtol
excerpt_separator: <!--more-->
---

### Vtol with single prop

Follow up work from this [post](https://discuss.ardupilot.org/t/airspeed-sensor-noise-problems-on-large-quadplane/32941) , we decided to go for another flight to get a better tuned pitch controller, rectify airspeed sensor problems and collect more flight data before we push for TECS tuning.


A few hypotheses that we have been thinking about:

1. Vibrations from the DLE61 gas engine got to the Cube's pitch estimation, causing the dive
* Looking at the attitude graphs, the system knew that pitch was going down. It was also desiring more and more pitch as the aircraft dove downwards. 
* error_RP data from NKF4 seem to indicate small errors.
* Plane pitch controllers (set of PIDP data) also seem to indicate that PID loops are actively kicking in to bring aircraft back to level
* One thing we did notice is that there was a lot of clipping of accelerometers while aircraft is still on the ground. However, the clipping events stopped when aircraft is in the air.
* Given that we were able to do a QLOITER with an engine in idle @ 2700 RPM, we aren't sure if sensors and estimation are the cause of the problem.
<br>
<!--more-->



|---
| Type  | Details | Type  | Details 
| :---: | ---  | :---: | ---  
| frame |  | FC | 
| motor |  | ESC |  
| RC  |  | mode |  
| weight |  | class |  
| battery |  | air-time |  
| configurator |  |  last updated |   
|===
| airframe

2. GPS came loose and fell off right after transition is done
* No abrupt changes to magnetic heading and GPS lock status. 
<br>

3. Servo system failed & servo linkage arm broke in flight, right after transition is done.
* Post crash hardware tests seem to indicate otherwise. Because it was a nose dive, most of the rear of the aircraft was salvaged and test was possible. 
* Post crash mechanical checks indicated that linkage arm and servo horn was still attached.
<br>

4. Vibration matched resonance frequency of some component within the Cube, causing the Cube to send wrong signal out to MAIN2.
* We are not sure how to verify this
<br>

5. Auto trimming of servo acted in the wrong way, coupled with effects of bad vibration on pitch estimation , causing elevator to compensate in the wrong direction.
* We are also not sure how to verify this
<br>


/********************************************/

Products for this **failed flight** are as follows
* [Dataflash logs](https://drive.google.com/open?id=1-QIfIvZ6LoiI0bJM17ZKdDe374BWBOsA)
* [Tlogs](https://drive.google.com/open?id=1ryJdQBWL2OyzMR8Hx_y72ygRCGzfkSJ7) - if replaying, start from 99%
* [Parameter file](https://drive.google.com/open?id=1p6WxYoGGjIPbcVS1gPDelOehxaB8hOhJ)
* [SummarySlidespdf](https://github.com/aiegoo/portfolio/blob/master/Crash-Analysis.pdf) or [download pptx](./Crash-Analysis.pptx) - we did up a slide deck to try summarize what we think to be key graphs and make sense of what's going on
<object data="https://github.com/aiegoo/portfolio/blob/master/Crash-Analysis.pdf" type="application/pdf" width="700px" height="700px">
   <embed src="https://github.com/aiegoo/portfolio/blob/master/Crash-Analysis.pdf" type="application/pdf"> </embed>
</object>


* [Flight video from ground view](https://drive.google.com/open?id=1ALfahwWxfO_IF-AR9nXCfCwKkToLq-Wj)
* [Post crash photo](https://drive.google.com/open?id=1dekB6KR_8fftuH_hhgEoikyCn4eCmGdy)
* [FFT chart](https://drive.google.com/open?id=199wzbPtp_l9fuP1GW1b6hoTg8JXEFgfW) 

Products for previous **successful flight**
* [Dataflash logs](https://drive.google.com/open?id=1teFVrss8SAQi3K0p600gb1Le4e6z_Ceu)
* [Tlogs](https://drive.google.com/open?id=1S7ZbLJt99YH3mZlkqKG-_8TdUZWbK_oR)
* [Parameter file](https://drive.google.com/open?id=1iAA1IwzKYxWvlA7K4sJAvqdzWYXAPlu0)
* More details on this flight in [this post](https://discuss.ardupilot.org/t/airspeed-sensor-noise-problems-on-large-quadplane/32941)A few hypotheses that we have been thinking about:


/********************************************/

Products for this **failed flight** are as follows
* [Dataflash logs](https://drive.google.com/open?id=1-QIfIvZ6LoiI0bJM17ZKdDe374BWBOsA)
* [Tlogs](https://drive.google.com/open?id=1ryJdQBWL2OyzMR8Hx_y72ygRCGzfkSJ7) - if replaying, start from 99%
* [Parameter file](https://drive.google.com/open?id=1p6WxYoGGjIPbcVS1gPDelOehxaB8hOhJ)
* [Summary Slides](https://drive.google.com/open?id=1n8mZzw-WBxLUCgPJhLjCWOWOv_v1FU2WlUl27TGkWng) - we did up a slide deck to try summarize what we think to be key graphs and make sense of what's going on
* [Flight video from ground view](https://drive.google.com/open?id=1ALfahwWxfO_IF-AR9nXCfCwKkToLq-Wj)
* [Post crash photo](https://drive.google.com/open?id=1dekB6KR_8fftuH_hhgEoikyCn4eCmGdy)
* [FFT chart](https://drive.google.com/open?id=199wzbPtp_l9fuP1GW1b6hoTg8JXEFgfW) 

Products for previous **successful flight**
* [Dataflash logs](https://drive.google.com/open?id=1teFVrss8SAQi3K0p600gb1Le4e6z_Ceu)
* [Tlogs](https://drive.google.com/open?id=1S7ZbLJt99YH3mZlkqKG-_8TdUZWbK_oR)
* [Parameter file](https://drive.google.com/open?id=1iAA1IwzKYxWvlA7K4sJAvqdzWYXAPlu0)
* More details on this flight in [this post](https://discuss.ardupilot.org/t/airspeed-sensor-noise-problems-on-large-quadplane/32941)
[**Preview**]({{page.link}})

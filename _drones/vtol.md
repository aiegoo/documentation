## Vtol and flight data analysis




Hello! 

Follow up work from this [post](https://discuss.ardupilot.org/t/airspeed-sensor-noise-problems-on-large-quadplane/32941) , we decided to go for another flight to get a better tuned pitch controller, rectify airspeed sensor problems and collect more flight data before we push for TECS tuning.

We had 1 successful flight before this. Good thing is we have logs from 2 flights: 1 that flew ok. 1 that ended in a painful crash.

For this flight, we took off and had reasonable **QLOITER** performance. I then switched mode from **QLOITER** to **AUTOTUNE** @ 20 meters. We saw a good transition. However, just when transition is declared done, the aircraft, with plenty of airspeed, decided to take a nose dive over a period of ~1.5 to 2 seconds.

We have been studying the logs over the past 2 days and have not been able to identify what is happening. 

Points from on hardware that may not show on the dataflash logs
* Post crash, Cube and servo power supply components still work.
* Post crash, progressive build up of tests on servo system: all servos still work with servo tester, CAT6 cable + booster board pairs we got from ServoCity and when connected to MAIN2 of the smashed out Cube (apparently still working) in FBWA mode.
* Pre crash, CG was checked to be nose heavy prior to flight. It was well below it's design MTOW limits.
* Pre crash, we did not do an accelerometer or compass calibration after the last flight, which was 1 month ago. 
* Pre & post crash, FBWA direction of PID compensation was checked to be correct.
<br>

Key timings of this Flight
* 12:02:26 = Transition begins
* 12:02:34 = Dive begins
* 12:02:37 = Last data
<br>

A few hypotheses that we have been thinking about:

1. Vibrations from the DLE61 gas engine got to the Cube's pitch estimation, causing the dive
* Looking at the attitude graphs, the system knew that pitch was going down. It was also desiring more and more pitch as the aircraft dove downwards. 
* error_RP data from NKF4 seem to indicate small errors.
* Plane pitch controllers (set of PIDP data) also seem to indicate that PID loops are actively kicking in to bring aircraft back to level
* One thing we did notice is that there was a lot of clipping of accelerometers while aircraft is still on the ground. However, the clipping events stopped when aircraft is in the air.
* Given that we were able to do a QLOITER with an engine in idle @ 2700 RPM, we aren't sure if sensors and estimation are the cause of the problem.
<br>

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

Can we request some help from this community in evaluating the logs along with us (i.e. new ideas or hypothesis) We are still looking at the data ourselves but it is getting to a point where we're running out of ideas. 

Thank you. 

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

1. Vibrations from the DLE61 gas engine got to the Cube's pitch estimation, causing the dive
* Looking at the attitude graphs, the system knew that pitch was going down. It was also desiring more and more pitch as the aircraft dove downwards. 
* error_RP data from NKF4 seem to indicate small errors.
* Plane pitch controllers (set of PIDP data) also seem to indicate that PID loops are actively kicking in to bring aircraft back to level
* One thing we did notice is that there was a lot of clipping of accelerometers while aircraft is still on the ground. However, the clipping events stopped when aircraft is in the air.
* Given that we were able to do a QLOITER with an engine in idle @ 2700 RPM, we aren't sure if sensors and estimation are the cause of the problem.
<br>

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

Can we request some help from this community in evaluating the logs along with us (i.e. new ideas or hypothesis) We are still looking at the data ourselves but it is getting to a point where we're running out of ideas. 

Thank you. 

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
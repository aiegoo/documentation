---
layout: page
name: "autopilot_pixhawk_standard"
permalink: autopilot_pixhawk_standard.html
sidebar: other_sidebar
type: "px4 flight controller"
link: https://github.com/aiegoo/portfolio/wiki/quad
youtubeID: Y83w_n1lo2g
excerpt_separator: <!--more-->
---

# Pixhawk Standard Autopilots

[Pixhawk series](../flight_controller/pixhawk_series.md) boards that fully comply with the [Pixhawk Standard](https://pixhawk.org/) (including use of the Pixhawk trademark), and that are still being manufactured, are supported by the PX4 project.

These boards are maintained, updated, tested and otherwise supported by the PX4 project maintainers and Dronecode test team.

:::tip
For more information about PX4 project autopilot board support levels see: [px4.io/autopilots/](https://px4.io/autopilots/).
:::
<!--more-->

The boards in this category are:

- [Holybro Pixhawk 4](https://github.com/aiegoo/documentation/blob/edit/_drones/flight_controller/pixhawk4.md) (FMUv5)
- [Holybro Pixhawk 4 Mini](../flight_controller/pixhawk4_mini.md) (FMUv5)
- [Drotek Pixhawk 3 Pro](../flight_controller/pixhawk3_pro.md) (FMUv4pro)
- [mRo Pixracer](../flight_controller/pixracer.md) (FMUv4)
- [Hex Cube Black](../flight_controller/pixhawk-2.md) (FMUv3)
- [mRo Pixhawk](../flight_controller/mro_pixhawk.md) (FMUv3)
- [Holybro Pixhawk Mini](../flight_controller/pixhawk_mini.md) (FMUv3)
- [pixhawk5](http://www.holybro.com/product/pixhawk-5x/)


![image](https://user-images.githubusercontent.com/42961200/162350757-6bae051f-0f40-4969-8621-00002ac12b51.png)

{% include youtubePlayer.html id=page.youtubeID %}
[pin_out](https://github.com/aiegoo/uas-reference/blob/master/drone-dev/Holybro_Pixhawk5X_Pinout.pdf)


```
1:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:111:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:581:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:321:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:231:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:051:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits1:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then1:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f7651:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bi1:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:391:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame a1:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:581:45
pixhawk cube but it's a much lower
1:47
profile so the redundant scene here it
1:50
has three imu sensors it has two
1:52
barometers or separate buses so that
1:54
even if you have a bus hiccup that
1:56
doesn't take out all your sensors and it
1:58
allows parallel continuous operation
2:01
even in the event of a hardware failure
2:02
so it's got that kind of redundancy
2:04
stuff all built in
2:07
newly designed vibration isolation
2:09
system in here as well that's very handy
2:11
that filters out some of the high
2:14
frequency vibration and reduces some of
2:16
the noise which makes things easier to
2:18
tune and give you smoother flying
2:20
there's an ethernet interface for
2:21
high-speed mission computer integration
2:24
on here believe it or not automated
2:26
sensor calibration the imus are
2:28
temperature controlled just like the
2:30
main pixhawk stuff is with onboard
2:32
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pinnd the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pints the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
heating resistors making sure that even
2:35
if you're flying in colder conditions
2:37
the temperature drift you get with imus
2:39
is a problem in the kit there's also the
2:42
pixhawk 4 gps module this is one that i
2:45
looked at with the four
2:47
i do like the way that everything is
2:48
clearly labeled on this on the carrier
2:50
board and everything clicks in so it's
2:53
really simple to put together
2:55
the fmu processor inside the pixhawk is
2:58
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
an stm32f765
3:01
massive bag of all the cables you're
3:03
going to need so if you want to add
3:05
extra things later on and i'm going to
3:07
use this actually to make some extra
3:09
videos about how to add things like crsf
3:11
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
and others
3:13
we have a stork for the gps inside the
3:17
kit and then an extra couple of bits the
3:19
power module
3:21
is this thing here and that's going to
3:23
go in between the power distribution
3:25
board and the battery quite stiff cables
3:28
for this and that also then powers the
3:30
pixel 5 as well as provides information
3:33
on current and voltage from your flight
3:35
battery
3:37
going back to the pixel again it's a two
3:39
megabytes of memory with 512k
3:42
of ram
3:44
and the final piece in the kit is this
3:46
thing here this is a power distribution
3:48
board this looks very similar to the one
3:50
that was actually included in the kit
3:53
with the holy bro x 500 v2 frame and the
3:56
way it works is you just plug the power
3:58
distribution
3:59
board into the power module and then
4:01
that goes into the battery and there's a
4:03
cable that goes into the power connector
4:06
on the pixel and everything's done
4:09
now the manual that comes in the box is
4:11
very basic it does give you all the pin
```

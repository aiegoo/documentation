# BlueROV2 (UUV)

The [BlueROV2](https://bluerobotics.com/store/rov/bluerov2-upgrade-kits/brov2-heavy-retrofit-r1-rp/BlueROV2) is an affordable high-performance underwater vehicle that is perfect for inspections, research, and adventuring.

PX4 provides [experimental support](README.md) for an 8-thrust vectored configuration, known as the *BlueROV2 Heavy Configuration*.

![Hero](images/drones/airframes/sub/bluerov/bluerov_hero.jpg)


## Purchase

[BlueROV2](https://bluerobotics.com/store/rov/bluerov2/) + [BlueROV2 Heavy Configuration Retrofit Kit](https://bluerobotics.com/store/rov/bluerov2-upgrade-kits/brov2-heavy-retrofit-r1-rp/)


### Motor Mapping/Wiring

The motors must be wired to the flight controller following the standard instructions supplied by BlueRobotics for this vehicle .

The vehicle will then match the configuration documented in the [Airframe Reference](../airframes/airframe_reference.md#vectored-6-dof-uuv):

<img src="images/drones/airframes/types/Vectored6DofUUV.svg" width="29%" style="max-height: 180px;"/>

- **MAIN1:** motor 1 CCW, bow starboard horizontal, , propeller CCW
- **MAIN2:** motor 2 CCW, bow port horizontal, propeller CCW
- **MAIN3:** motor 3 CCW, stern starboard horizontal, propeller CW
- **MAIN4:** motor 4 CCW, stern port horizontal, propeller CW
- **MAIN5:** motor 5 CCW, bow starboard vertical, propeller CCW
- **MAIN6:** motor 6 CCW, bow port vertical, propeller CW
- **MAIN7:** motor 7 CCW, stern starboard vertical, propeller CW
- **MAIN8:** motor 8 CCW, stern port vertical, propeller CCW


## Airframe Configuration

BlueROV2 does not come with PX4 installed.
You will need to:
1. [Install PX4 Firmware](../config/firmware.md#installing-px4-master-beta-or-custom-firmware)
   :::note
   Prior to PX4 v1.12 you will need to install the "master" version.
1. [Set the Airframe](../config/airframe.md).
   You will need to select the "BlueROV2 Heavy Configuration" as shown:
   ![QGC - select airframe for BlueROV2 Heay configuration](images/drones/airframes/sub/bluerov/qgc_airframe.jpg)

<!-- what other tuning/testing/ etc? -->

## Video

@[youtube](https://www.youtube.com/watch?v=1sUaURmlmT8)

<!-- @DanielDuecker on github is good person to ask about this frame -->

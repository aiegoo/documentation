# HolyBro QAV250 + Pixhawk4-Mini Build

The [Holybro Pixhawk 4 Mini QAV250 Kit](https://shop.holybro.com/pixhawk-4-mini-qav250-kit_p1125.html) is a great way to start working with Pixhawk 4.
The kit includes a carbon-fibre QAV250 racing frame, *Pixhawk 4 Mini*, and almost all other components needed (except battery and receiver).
There are variants of the kit both with and without FPV support.

This topic provides full instructions for building the kit and configuring PX4 using *QGroundControl*.

Key information

- **Frame:** Holybro QAV250
- **Flight controller:** [Pixhawk 4 Mini](../flight_controller/pixhawk4_mini.md)
- **Assembly time (approx.):** 3.5 hours (2 for frame, 1.5 autopilot installation/configuration)

![Assembled Holybro QAV250 with Pixhawk4 Mini](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/qav250_hero.jpg)

## Quickstart Guide

[Pixhawk 4 Mini QAV250 Kit Quickstart Guide](https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/pixhawk4mini/pixhawk4mini_qav250kit_quickstart_web.pdf)

## Bill of materials

The Holybro [Pixhawk 4 Mini QAV250 Kit](https://shop.holybro.com/pixhawk-4-mini-qav250-kit_p1125.html) includes almost all required components:
* [Pixhawk 4 Mini](../flight_controller/pixhawk4_mini.md)
* [Holybro Telemetry Radio V3](https://shop.holybro.com/transceiver-telemetry-radio-v3_p1103.html)
* Power module holybro
* Fully assembled Power Management Board with ESCs
* Motors - DR2205 KV2300
* 5” Plastic Props
* Carbon fiber 250 airframe with hardware
* Foxer camera
* Vtx 5.8ghz

Additionally you will need a battery and receiver (+compatible transmitter).
This build uses:
* Receiver: [FR SKY D4R-II](http://www.getfpv.com/radios/receivers/frsky-d4r-ii-4ch-2-4ghz-accst-receiver-w-telemetry.html)
* Battery: [4S 1300 mAh](http://www.getfpv.com/lumenier-1300mah-4s-60c-lipo-battery-xt60.html)


## Hardware

This section lists all hardware for the frame and the autopilot installation.

### Frame QAV250

Description | Quantity
--- | ---
Unibody frame plate | 1
Flight controller cover plate |  1
PDB                           |  1
Camera plate                  |  1
35mm standoffs                |  6
Vinyl screws and nuts         |  4
15mm steel screws             |  8
Steel nuts                    |  8
7mm steel screws              |  12
Velcro battery strap          |  1
Foam for battery              |  1
Landing pads                  |  4

![QAV250 components for frame](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/frame_components.jpg)


### Electronics

Description | Quantity
--- | ---
Motors - DR2205 KV2300 |  4
Fully assembled Power Management Board with ESCs |  4
Holybro power module   |  1
Fr-sky D4R-II receiver |  1
Pixhawk 4 mini         |  1
Holybro GPS Neo-M8N    |  1
Holybro [Holybro Telemetry Radio V3](https://shop.holybro.com/transceiver-telemetry-radio-v3_p1103.html) | 1
Battery lumenier 1300 mAh 4S 14.8V |  1
Vtx 5.8gHz             |  1
FPV camera (Complete Kit - only) |  1

The image below shows both frame and electronic components.

![QAV250 Frame/Pixhawk 4 Mini Electronics before assembly](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/frame_and_electronics_components.jpg)



## Assembly

Estimated time to assemble frame is 2 hours and 1.5 hours installing the autopilot and configuring the airframe in *QGroundControl*.

### Tools needed

The following tools are used in this assembly:

- 2.0mm Hex screwdriver
- 3mm Phillips screwdriver
- Wire cutters
- Precision tweezers

![Tools required for assembling QAV250](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/assembly_tools.jpg)


### Frame assembly 

1. Attach arms to the button plate with the 15mm screws as shown:

   ![QAV250 Add arms to button plate](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/1_button_plate_add_arms.jpg)
1. Put the short plate over the arms

   ![QAV250 Add short plate over arms](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/2_short_plate_over_arms.jpg)
1. Put the nuts on the 15mm screws (shown next step)
1. Insert the plastic screws into the indicated holes (note that this part of the frame faces down when the vehicle is complete).
   ![QAV250 Add nuts to 15mm screws and put  plastic nuts in holes](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/3_nuts_screws_holes.jpg)
1. Add the plastic nuts to the screws (turn over, as shown)
   ![QAV250 Plastic nuts onto screws](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/4_plastic_nuts_on_screws.jpg)
1. Lower the power module over the plastic screws and then add the plastics standoffs
   ![QAV250 Add power module and standoffs](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/5_power_module_on_screws.jpg)
1. Put the flight controller plate on the standoffs (over the power module)
   ![QAV250 Add flight controller plate](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/6_flight_controller_plate.jpg)
1. Attach the motors. The motors have an arrow indicating the direction of rotation.
   ![QAV250 Add motors](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/7_motors.jpg)
1. Use double sided tape from kit to attach the *Pixhawk 4 Mini* to the flight controller plate.
   ![QAV250 Add doublesided tape](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/8_double_sided_tape_controller.jpg)
1. Connect the power module's "power" cable to *Pixhawk 4 mini*.
   ![QAV250 Power Pixhawk](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/9_power_module_power_pixhawk.jpg)
1. Attach the aluminium standoffs to the button plate
   ![QAV250 Aluminium standoffs](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/10_aluminium_standoffs.jpg)
1. Connect the Esc’s with the motors and hold. In this image shown the order of the motors and direction of the rotation.
   ![QAV250 Connect ESCs](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/11_escs.jpg)

   Connect the motors on the ESC’s, make sure the motors turns to the correct side, if the motor turns of the opposite side change the cable A to the pad C and C to the pad A of the ESC.
   
   :::warning
   Test motor directions with propellers removed.
   :::
   
   ![QAV250 Connect ESCs to Power](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/11b_escs.jpg)
1. Connect the signal ESC cables to the PWM outputs of the Pixhawk in the correct order (see previous image)

   ![QAV250 Connect ESCs to Pixhawk PWM](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/12_escs_pixhawk.jpg)
1. Connect the receiver. 
   * If using a PPM receiver connect to the PPM port.
   
     ![QAV250 Connect Receiver PPM](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/13_rc_receiver_ppm.jpg)
   * If using the SBUS receiver connect to the RC IN port
   
     ![QAV250 Connect Receiver SBUS](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/13_rc_receiver_sbus.jpg)
1. Connect the telemetry module. Paste the module with double tape and connect on the port of the telemetry.

   ![QAV250 Telemetry module](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/14_telemetry.jpg)
1. Connect the GPS module

   ![QAV250 Connect GPS](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/15a_connect_gps.jpg)

   Attach the module on the top plate (using provided 3M tape, or paste). Then put the top plate on the standoffs as shown
   
   ![QAV250 Connect GPS](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/15b_attach_gps.jpg)
1. The last "mandatory" assembly step is to add the velcro to hold the battery

   ![QAV250 Velcro battery strap](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/16_velcro_strap.jpg)


The "basic" frame build is now complete (though if you need them, you can find more information about connecting components in the [Pixhawk 4 Wiring Quickstart](../assembly/quick_start_pixhawk4.md)). 

If you have the "basic" version of the kit, you can now jump ahead to instructions on how to [Install/Configure PX4](#configure).


### FPV Assembly

The "Complete" version of the kit additionally comes with an FPV system, which is mounted on the front of the vehicle as shown.

![QAV250 FPV Attach](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_camera.jpg)

The steps to install the kit are:

1. Install the camera bracket on the frame
   ![Camera Connection](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_camera_bracket.jpg)
1. Install the camera on the bracket
   ![Camera on Bracket](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_camera_on_bracket.jpg)
1. The power module on the complete kit comes with wiring ready to connect the Video Transmitter and Camera:
   ![Connecting FPV](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_connection_board.jpg)
   - Attach the camera connector
     ![Camera Connection](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_camera_connection.jpg)
     The wires are: blue=voltage sensor, yellow=video out, black=ground, red=+voltage.
   - Connect the Video Transmitter (VTX) connector
   ![Video Transmitter Connection](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_video_transmitter_connection.jpg)
     The wires are: yellow=video out, black=ground, red=+voltage.
1. Secure the Video Transmitter and OSD board to the frame using tape.

:::note
If you have to wire the system yourself, the diagram below shows all the connections between camera, VTX and power module:
![QAV250 FPV Wiring](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/fpv_connection.jpg)
:::

<span id="configure"></span>
## Install/Configure PX4

*QGroundControl* is used to install the PX4 autopilot and configure/tune it for the QAV250 frame.
[Download and install](http://qgroundcontrol.com/downloads/) 
*QGroundControl* for your platform.

:::tip
Full instructions for installing and configuring PX4 can be found in [Basic Configuration](../config/README.md).
:::

First update the firmware and airframe:
* [Firmware](../config/firmware.md)
* [Airframe](../config/airframe.md)
  
  :::note
  You will need to select the *HolyBro QAV250* airframe (**Quadrotor x > HolyBro QAV250**).

  ![QGroundControl - Select HolyBro QAV250 airframe](images/drones/airframes/multicopter/qav250_holybro_pixhawk4_mini/select_airframe.png)
  :::
Then perform the mandatory setup/calibration:
* [Sensor Orientation](../config/flight_controller_orientation.md)
* [Compass](../config/compass.md)
* [Accelerometer](../config/accelerometer.md)
* [Level Horizon Calibration](../config/level_horizon_calibration.md)
* [Radio Setup](../config/radio.md)
* [Flight Modes](../config/flight_mode.md)

Ideally you should also do:
* [ESC Calibration](../advanced_config/esc_calibration.md)
* [Battery](../config/battery.md)
* [Safety](../config/safety.md)


## Tuning

Airframe selection sets *default* autopilot parameters for the frame.
These are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.

<!-- should state what we want them to use! -->

For general information on tuning see: [Multicopter PID Tuning Guide](../config_mc/pid_tuning_guide_multicopter.md).


## Acknowledgements

This build log was provided by the PX4 Test Team.

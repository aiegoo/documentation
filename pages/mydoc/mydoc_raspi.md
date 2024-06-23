---
title: 🔭raspberry pi project
tags: [drone, collaboration, git, getting_started]
last_updated: July 22, 2021
keywords: ai, drone, aiot
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_raspi.html
datatable: true
series: "ACME series"
weight: 4
folder: mydoc
---

## AIOT RASPI project overview
- Arduino ESP8266 drone
- Raspberry Pi integration

## Ch3. Final preparation
- ESP8266 connection

|   Pin: Function  |     |      |
| --- | --- | --- |
|  RX: It receives data VCC: Power pin (usually 3.3V maximum) GPIO 0: General purpose input output pin 0 RESET: It is a reset  | pin CH_PD: Chip power down pin GPIO 2: General purpose input output pin 2 TX: It transmits data GND: Ground pin | ![image](https://user-images.githubusercontent.com/42961200/126641477-3bc0c033-38ab-4a84-893b-a47092f751ff.png) ![image](https://user-images.githubusercontent.com/42961200/126852021-ba3063bc-3843-4201-ba02-72dc593344de.png) |
|    |  RX - 3, TX - 2, VCC - 3V, CH_PD - 3V | ![image](https://user-images.githubusercontent.com/42961200/126641671-b3497384-d728-47d6-98cf-83c39fff7282.png) |

- adding blynk library to Sketch/Include Library of IDE
[libr_git](https://github.com/blynkkk/blynk-library/releases/tag/v1.0.1)


<div markdown="1" style="max-wdith: 400px;">
<p>
  <img alt="greenlight" src="https://user-images.githubusercontent.com/42961200/126643172-bf3dfe3d-9004-4427-a7bf-d62723bd94b1.png" style="width: 200px; max-width: 80%; margin-left: 200px;" />
  </p>
</div>

- follow these steps below for initial setup
  - From the app, 1. Enter a project name, 2. Choose a device. 
  - You will receive an email assoicated with the app's account  and also the same auth token can be found in the project settings.
[token](41uIJwHrV-gCNsBJN1Tk8LqRE7-UpYXW)
![image](https://user-images.githubusercontent.com/42961200/126847091-d6a93678-b3c1-4861-9bc8-c466abee343d.png)

## Ch2. Assembling

|     |     |
| --- | --- |
|- connections|![image](https://user-images.githubusercontent.com/42961200/126628827-9d2e2567-866c-4126-9a50-dad6b6f5dabc.png)|
|- 8 types of pins on ardupilot| ![image](https://user-images.githubusercontent.com/42961200/126629293-56a5a510-b8b3-47c5-94c2-7a6543a087d2.png) |
| - cable from ESC | ![image](https://user-images.githubusercontent.com/42961200/126629604-4f843265-b74d-4e0b-9eb3-7a759ea80b84.png) (Signal/Power/Ground)|

- sensors of sonar, airspeed, voltage/current, compass
- GPS for position holding, waypoints navigations
- MUX for UART0, UART2, I2C, OSD
- mode types

|     |     |
| --- | --- |
| - RC mode types | ![image](https://user-images.githubusercontent.com/42961200/126630838-4c1332c5-683b-41e9-9f9b-3e3f9e7ffed3.png) |

- receiver connection

|     |     |
| --- | --- |
| Pin 1: Roll/aileron Pin 2: Pitch/elevator Pin 3: Throttle Pin 4: Yaw/rudder Pin 5: Auxiliary channel 1 (for example, mode switch) Pin 6: Auxiliary channel 2 | ![image](https://user-images.githubusercontent.com/42961200/126631175-c8ff7618-c2ca-4b1f-b4d1-32237f0221a5.png) |

### Binding transmitter to the receiver
1. You can bind your transmitter with at least the following things. Note taht the binding process differs from teh RC receiver's model to model. (binding cable, esc, servo motor, battery)

2. Connect the binding cable to rc receiver on the BAT pinor B/VCC

3. Tane an ESC to connect the signal, 5V and ground. (Remember, the outer pin of a row is for the ground, the middle pin is for 5V, and the inner pin is for the signal.)

### Aero-dynamics

|     |     |
| --- | --- |
| TAu, vector product of force (F), distance (r) | ![image](https://user-images.githubusercontent.com/42961200/126632875-860a1985-a54e-4cb3-b5c4-cb86ac7a0ccd.png) |
| 0 is the angle between force and distance from the center of axis  | ![image](https://user-images.githubusercontent.com/42961200/126632924-71eb802d-494c-4de6-8011-6112b66b00b1.png) |

- thrust is the product of pressure (P) and area (A), Thrust = P x A

|     |     |
| --- | --- |
| ![image](https://user-images.githubusercontent.com/42961200/126633487-c13da5f6-a842-440e-b5fa-5eebfe8a360d.png)  | ![image](https://user-images.githubusercontent.com/42961200/126633341-757efd61-f18c-4177-99c7-6fe787234a0b.png) |

Thrust (T) will be proportional to the square of the angular velocity (w) of the propellers. The thrust is perpendicular to the Z direction of the drone.

![image](https://user-images.githubusercontent.com/42961200/126633753-52ef95b0-4d27-4c53-8c6c-cf4812064854.png)

### Hovering 
![image](https://user-images.githubusercontent.com/42961200/126633873-c32409ff-3331-40c3-a29c-55b609bb10c3.png)

### Rising
![image](https://user-images.githubusercontent.com/42961200/126633936-52db4f92-8b2b-4661-8d9c-7bf787cdeb90.png)

### Dropping
![image](https://user-images.githubusercontent.com/42961200/126633984-262e3862-76d3-4652-bc95-98b4b90332ad.png)

### Yaw
Yaw is the motion of the drone in the xy plane, or the horizontal plane as shown in the previous figure. The opposite kind of pair of propellers will create reaction movements. If the sum of all the movements of each propeller is equal to each other, then there is no yaw motion. But if there is difference movements between any pair of propellers, there will be yaw motion, and the drone will move, as shown in the following figure:
![image](https://user-images.githubusercontent.com/42961200/126634068-327c6d35-0b3b-4da8-beeb-0a5b8bd12559.png)
![image](https://user-images.githubusercontent.com/42961200/126634226-949aae09-6bda-4fab-b780-ff69c6cf9b78.png)

### Pitch and roll
The pitch is the rotation of the drone in the Y direction, while the rotation along the X direction is known as roll or vice versa, depending on the front of the drone. This will happen if one pair of opposite propellers provide, thrust more than the other two propellers.

## Ch1. Background concept
[packt_book](https://onofflinkinc.slack.com/files/UHPPRAQD7/F028EF6JBHD/arduinoesp8266drone.pdf)

$\displaystyle \frac{\partial f}{\partial x}$  <img src="https://render.githubusercontent.com/render/math?math=x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2b}">

[math-writing](https://www.mathcha.io/editor)

\begin{equation*}
\left(\frac{xdx}{dy} -\frac{ydy}{dx}\right)^{2} \ ,\ [\vec{F} =m\vec{a}] \ ,\ \left| \frac{a}{b}\right| \ \left\Vert \frac{a}{b}\right\Vert \ \left< \frac{a}{b}\right> \left\{\sqrt{a+\sqrt{a+\sqrt{a}}}\rightarrow \infty \right\}
\end{equation*}

![image](https://user-images.githubusercontent.com/42961200/126624695-d4f7211d-73aa-4bb4-9295-9c63396e86f7.png)

> If P is the payload capacity of your drone (how much your drone can lift. I'll explain how
you can find it), M is the number of motors, W is the weight of the drone itself, and H is the
hover throttle % (will be explained later). Then, our thrust of the motors T will be as
follows:

![image](https://user-images.githubusercontent.com/42961200/126624917-601fbb85-7077-40ba-ae4d-a2d106c0df30.png)

> The drone's payload capacity can be found with the following equation:

![image](https://user-images.githubusercontent.com/42961200/126625107-73fa86fe-4af3-4558-b7ca-9cf06f77af22.png)

- FCs on the market

```diff
+KK 2.0
-CC3D
+Naze32
-KISS
+ArduPilot
-Vector
+3DR Pixhawk
-DJI Naza M
+LUX flight controller
-DJI A3
```

- battery
 If the current is I, battery capacity is C, and discharge rate is D, then the instantaneous current draw is`I = C X D`
 
> 5000mAh with discharging rate of 10C would be ` I = 5.0 x 10 = 50A`

{% include custom/series_acme_next.html %}

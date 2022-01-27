---
title: Sample 4 Topic
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: p2_sample4.html
simple_map: true
map_name: usermap
box_number: 4
folder: product2
---

## SmartAP GCS
Configure, plan missions, and operate your drone with our cross platform ground control station software. The LTE connectivity allows users to sync their data pre, post, or during flights, and integrated HD video streaming gives a clearer and wider image than ever imaginable.
​

## Sign Up
Go to to download the all new .
This software will allow you to configure the autopilot for your specific requirements and prepare your UAV for flight. The software will run on all popular platforms such as:
Desktops
Laptops
Tablets
Smartphones
And is available for the major operating systems:
Windows
MacOS
Android
iOS
Linux
This quick video tutorial will help you to download SmartAP GCS, create your user profile, log in and start using the app:
Follow the steps below to install the application:
First run
Run the application after installation. If you're able to see the authorization window like the one below, this means that the application was installed successfully and you may proceed to the next steps.
Create account
If you don't have an account yet you'll need to create one. Click SIGN UP and follow the simple form: provide your name, email, create a password, and you're done. You need an account to sync data across your platforms and operating systems, and exchange UTM information.
We recommend choosing a strong password containing at least 8 symbols with at least one number and special character.
World pane
Once you fill in the details click SIGN UP. If you're registered successfully you'll be taken straight into the app and will see the main pane which is called World, just like the image below:
World pane provides all the necessary information about your flight and allows you to control the flight modes and plan your missions.
Toolbar gives the following general information and control:
App menu
If you pull out the menu from the left hand side, or click the three bars button, you'll see the app menu. You can go into your account settings, log out or switch between the application panes.
UAV settings
Clicking the gear icon will open the UAV settings menu. The main tab shows information concerning hardware, installed firmware and your unique ID. Tabs to the left provide the navigation between various settings of the flight controller which will be described later on.
Links Management
In the top right-hand corner we can see the Links icon. Clicking this icon shows the connections management menu. There are a few communication types available:
Serial
UDP
TCP / IP
You can create and store a new Serial / UDP / TCP/IP connection by choosing COM Port and Baud Rate or providing IP & Port details. Connection can be established via USB or wireless telemetry.
Usually, baud rate for wireless telemetry connection is 57600.
If you are about to configure a new flight controller unit it is recommended to use USB connection instead of wireless telemetry.
First connection
Select the desired connection, click ADD and then CONNECT.
If you have successfully created a proper connection, you will see the icons changing their state and hear confirmation that the UAV has been connected and parameters are being loaded. The toolbar will show the current time, total flight time, radio connection status, GNSS satellites count and status, link health, battery information, and so on.
Sometimes you might get a message that you're using a partially incompatible version. This means that the functionality introduced recently might not be supported by your currently installed firmware and it's highly recommended that you update it.
Therefore, if you see the message above, please, proceed to "" procedure described in the next chapter.

## Video Streaming
SmartAP GCS has integrated video streaming support from 2 cameras simultaneously:
Latency vs Quality settings
​ and SmartAP GCS support user configurable video streaming parameters - the feed can be optimised for latency and for quality depending on your application requirements:
Variable bitrate and manual bitrate settings vs video quality
Latency vs quality optimisation
Buffering produces a smoother picture for broadcasting applications
Variable video bitrate
​ by Sky-Drones supports variable video bitrate which can be set manually. In this office test we show the difference in quality between 100 kbps to 10 mbps. Autopilot is moved in front of the camera to make the feed less static and to show you potential artefacts at low rates.
LTE Video streaming
This demo demonstrates LTE Video streaming:
Starting the video
SmartAP GCS allows you to see the real-time video feed right there in the application. Click on the gear icon in the bottom-left corner and select the video source you would like to use.
After the video has started, you'll see it in the bottom left corner:
You can also enable full-screen video mode by clicking on the small video window. This will swap the map and video widgets. Easily swap back by clicking on the map pane to bring the video back to full-screen.
If you can't see your video source in the list of available devices, make sure to connect the video source to your computer before starting  application.

## Radio Settings
Sky-Drones provides seamless integration of  into SmartAP GCS. This includes real-time status monitoring of RSSI and SNR as well as configuration of major RF parameters such as frequency, bandwidth and power. Security settings for changing the network ID / key are in the same popup.

## Autonomous Flights
Flights using Waypoints
Autonomous mission flights are based on waypoints navigation. To create a new mission, or to choose from your pre-planned missions, simply click the PLANNING button and then click the MISSIONS button.
To create a new mission, type the mission name followed by clicking CREATE
To choose the already existing mission, you need only click on it
The below demonstration entails creating a new mission, so we click CREATE.
After creating the mission, we can see the mission settings menu and Home point icon placed in the centre of the map automatically. You can drag your home point wherever you want.
Home point will be overwritten by the initial vehicle location upon arming the system.
To insert a new waypoint, you need only double-click on any location on the map.
Mission menu will automatically switch to Waypoint tab. Individual waypoint settings can be adjusted here.
Altitude: Altitude in meters above take-off point (home altitude)
Delay: Amount of seconds to hover before landing after reaching the waypoint
Speed: Speed of flying to the next waypoint
Heading: Heading angle in degrees to hold when flying to the next waypoint
When no waypoints are selected - those settings are returned to default values for new waypoints.
New waypoints can be added by double-clicking on the map:
Of course, waypoints can be:
Adjusted, by dragging them
Deleted, by double-clicking on them
Inserted in-between by double-clicking on the path
Waypoint parameters can be adjusted anytime after selecting the desired waypoint to be changed.
The system supports the following waypoint types (Commands) which can be changed by clicking on Command cell for a specific waypoint:
Waypoint: regular point to fly through the air
Take off: start autonomous take off
Landing: perform landing over the point
The system allows the creation of various mission scenarios, including autonomous take off and / or landing point types, or having only waypoints in the list:
In the first case the vehicle should be airborne before activating autonomous mode. After AUTO mode has been activated the vehicle will start flying to the first waypoint. If the system is not airborne then the vehicle will not allow the switching to autonomous flight mode.
In the second case the vehicle should be on the ground before activating autonomous mode. After AUTO mode has been activated the vehicle will start autonomous take off and then continue to fly to the next waypoint. If the vehicle is airborne before starting AUTO it will skip the initial take off waypoint.
After the mission has been created it can be saved and / or uploaded to the vehicle.
If you click UPLOAD you will notice the status of sending the mission in the bottom right-hand corner of the application:
Finally, you will see a "Waypoints Received" message.
Before the flight you need to arm the system. The system can be armed using the RC transmitter stick or by clicking the "ARM / DISARM" button in the Ground Control Station (GCS).
ARM command should be confirmed to make sure it wasn't clicked accidentally.
Home position (including altitude) is set on every arm event. Make sure to arm the system after it has received the stable GNSS satellite signal. Saving the valid home position and altitude is important for calculating the waypoints altitude and ensuring the safe return of your UAV.
After you arm the system you will notice the home icon might have moved on the map. This position will be used for RTH (Return to Home) mode and its altitude will be used as an altitude reference for the waypoints. If you want to change the home position manually you can simply drag & drop it.
If you don’t have the take off type on the waypoint in your list of waypoints, you’ll need to take off manually or press the TAKE OFF button on the right. After the vehicle is airborne you can press the "Fly" button or switch to auto mode using your RC transmitter. The vehicle will start flying to the first waypoint.
Flight progress and indication of the vehicle's path can be seen in real-time. After the last waypoint has been reached the vehicle will enter hovering mode and maintain the altitude and position of the last waypoint, or perform landing if it was planned to do so.
Guided flight
Guided flight mode can also be known as "Fly here" mode. This allows setting and moving the desired position of the vehicle interactively in real-time. This mode is available only if the vehicle is already flying in the air. To activate the guided flight mode, simply click the PLANNING button and then the GUIDED button.
Once you have clicked on the map the vehicle will start flying to your indicated point and you will see the cross on the map indicating the target position of the vehicle.
The altitude and speed for the guided point can be set in the "fly here" settings menu in the top-right corner:
If you want to change the position of the vehicle you can simply drag and drop the cross on the map or right-click on the map and click "fly here". Repositioning can be done any time.
Once the vehicle has achieved the target position it will start hovering at the point whilst waiting for the next waypoint or flight mode change

## Multiple Drones
An unlimited number of drones can be supported simultaneously with super easy and intuitive control through SmartAP GCS. For example, the above video shows a couple of drones participating in a autonomous survey mission while the third one is monitoring what they do.
Multiple Drones with SmartLink

## Rally Points
We pay high attention to drone flight safety during beyond visual line of sight (BVLOS) operations. Mission rally points is our latest feature introduced in the SmartAP GCS software and autopilot hardware. It allows the operator to set multiple emergency landing points along the flight path instead of a single home position.

## UTM and Airspace
Altitude Angel's airspace services are integrated into SmartAP GCS. Make sure to check your flight area in the drone control app before planning your mission!
Realtime ADSB data is available in SmartAP GCS:


## Elevation Data
Integrated elevation profile visualization is available within SmartAP GCS. This feature allows you to create missions in and around complex terrain easier and quicker than ever before.

## Camera Settings
Camera settings are very important for high quality drone photogrammetry and mission planning. Sky-Drones provides an intelligent mapping grid generator in SmartAP GCS with popular cameras supported and the option to add new ones of your choice.

## RTK GNSS
RTK (Real Time Kinematics) - technology that allows the increasing accuracy of the GNSS module to a mere few centimetres. SmartAP Autopilots support RTK GNSS based on UBlox NEO M8P modules. This article demonstrates the procedure of setting up the flight with RTK GNSS.
It is assumed that you already have the following equipment:
RTK GNSS module installed on a drone (also called Rover)
RTK GNSS module as a base station with a USB connector
Active patch antenna located on a ground plane (the middle of a car roof is a good example)
Computer with SmartAP GCS installed
Telemetry modules configured and working on both drone and ground station (telemetry is used to transfer corrections from base station module to Rover)
Locating the antenna
 RTK GNSS is very sensitive and needs to be set up with care
The base station antenna position should be fixed at all times. Please make sure that it is not able to move and has a clear view of the sky far enough from surrounding buildings. Essentially, ensure it is not shadowed by obstacles. A tripod or a car roof are good locations for the base station antenna.
Once you have located the antenna, connect the SMA cable to the ground module and plug the module into the USB port on your computer.
Solid green LED - Power is on and module is working
 Blinking blue LED - GNSS module has 3D position fixed
Connecting in SmartAP GCS
First things first, open SmartAP GCS and connect it to the drone. Then go to the RTK tab at the bottom part of the Main Window. Choose the COM port of the GNSS module and press the Connect button. Once you're connected you'll be able to see the status of the base station module.
Starting Survey-In
Once the base station has enough visible satellites, as long as solid 3D fix and position deviation is not high, you can start the Survey-In procedure by pressing the  Start Survey-In button. This procedure determines the accurate position of the base station based on the measurements. By default, it’s set to run for at least 3 minutes, and the accuracy deviation should be less than 1 meter. Note that longer measurements and smaller deviations will increase the accuracy of readings sent to the Rover. The measured accuracy and progress are shown on-screen. This process may take a few minutes.
3D Accuracy - Positioning accuracy estimation for the last measurement (single measurement) Mean 3D STD - Standard deviation of the accuracy after Survey-In process has begun
Survey-In completed
After the Survey-In process is completed SmartAP GCS will start sending corrections to the Rover. Survey-In status will change from In Progress to Completed.
If you take a look at the  status of the vehicle shown on the top panel, you'll notice the change from GNSS to D-GNSS meaning that the Rover module is receiving readings. The D-GNSS mode becomes active after a few seconds as the base station module starts sending corrections.
RTK Modes
RTK has two modes: Float and Fixed. Float mode is easier to reach as it usually becomes available in 30-60 seconds after D-GNSS mode is active, however, it's less accurate. Later, the system will automatically go to Fixed where the accuracy will be higher but the process may take a little longer to complete.
What will happen if the Rover looses connection with the base station?
The drone will continue flying. It is likely to do so with slightly less accuracy, however, if the connection has not been regained in 60 seconds, the GNSS module will go into regular mode. Once the connection has been re-established, the system will automatically go back into RTK mode.

## Logs Analysis
​ allows users to view, analyse, and export logs recorded on their SD card located in the flight controller.
To view your logs, go to the SmartAP GCS app > Plot tab in the left-hand menu.
Once you've switched to the "Plot" tab, click "Settings" in the top-right corner and select Open log file:
Select the log file you would like to analyse from the system file dialog and click Open. You will see the log with all the available parameters. Choose your desired fields to plot them:
If you would like to export the log data as an image, KML track, or CSV file for further analysis, simply click "Settings" in the top-right corner and select the preferred option:

## Geotag Images
​, along with SmartAP GCS, allows users to precisely geo tag images for further post-processing. When the camera feedback pin is connected to the autopilot, the autopilot detects the exact moment the picture was taken and engraves this information into the log file. It contains the following information:
ID - image sequence number
Latitude - latitude location of the image
Longitude - longitude location of the image
Altitude - altitude of the image (MSL - above mean sea level)
Roll - roll of aircraft
Pitch - pitch of aircraft
Yaw - yaw of aircraft
To geotag images, download the log file. Then open SmartAP GCS and open the left side menu:
And go to Plot tab:
Click the Options menu in the top-right corner and click Open log file...
You can also simply drag and drop the desired log file into the "Logs" pane. Once the file is open, locate theCAM_TRIGGER group on the right panel.
Select the checkboxes for the fields you would like to export. Normally, all fields are recommended for further processing. Once selected - click Options and click Export CSV.
Then you select the folder destination that you'd like the log file to be exported to. After that you can open the file with any file editor and check its content:
Later, this information can be used for further post processing and map stitching.

## Processing the Logs
Log files are stored on the SD card as binary files and they're encoded for security reasons. However, you can extract the data and view it in a understandable text format (CSV format which can be later exported in XLS, Matlab, or anything else for post-processing and analysis).
You'll need to use the following Python script: ​
 Python should be installed on your computer.
If you don't have Python, you can download it here , version 2.7.
To export the log, follow these simple steps:
Open command line
Go to the folder where " ulog2csv.py " script is located cd /path/to/script
Execute the command:
python ulog2csv.py filename.ulg
(filename.ulg is the path to the log file)
You'll see the folder will all log messages split in separate files
For instance, if you're interested in GNSS (GPS/GLONASS) data you would need GNSS_REPORT.csv file.


## Sky-Drones Cloud
Bringing the way you interact and work with drones online! Cloud-based web application for drone fleet management, performance monitoring, mission planning, real-time control, post-flight AI analytics
​
Sky-Drones Cloud Dashboard
With Sky-Drones Cloud we provide an "Everything is Integrated Everywhere" approach
which completely redefines the way companies build and operate commercial drones.
Everything
Sky-Drones Cloud is the place for all data when working with and operating your fleet of drones. You don't need to have your data being distributed across multiple services or excel sheets which are difficult to share and can be lost. A Sky-Drones centralized hub for all information is the key when getting drone workflow to the next level.
Integrated
Sky-Drones Cloud is tightly integrated with all hardware and software products including autopilots and SmartLinks. The data transmitted from the drone to the ground station is also available in the cloud. Data can be synced either post-flight or during the flight with LTE connectivity. Payload data gathering is integrated as well.
Everywhere
Cloud can be accessed from anywhere and anytime. Drone and operator can be at the flight location while mission managers can observe the flight sitting in a command center on the other side of the globe giving valuable advice and getting exactly what they need. This brings situational awareness of using drones to a completely new level.
Concept Diagram

### Sign up and Log in
To sign up and log in, go to  and create a new account.
Follow the video tutorial below:

### Dashboard
Sky-Drones Cloud's powerful and flexible dashboard provides all major information at a glance. General information about assets, users and flights allows you to quickly estimate fleet performance and make well-rounded decisions with confidence. Filter over a certain period of time and within a specific fleet - we provide all the necessary tools for increasing the efficiency of your drone workflows.

### Drones and Operators
Interested in which drone is used the most? Who your most experienced pilot is? The pilot the highest number of flight hours in the team? Drone and pilot analytics allows easy access to all this information, plus much more! Sky-Drones Cloud is just like Google Analytics... for Drones.

### Flight Locations
The flight locations widget allows fleet managers to understand how vehicles are being used, ensures that all operations are compliant, and that they stay within the required regulations. Filter for a certain period of time or specific fleet - all the tools needed for highlighting exactly what you need to see are readily available.

### Fleet Management
The fleet management part of Sky-Drones Cloud allows you to keep track of all your assets within the company. Data is synchronized in real-time with drones using LTE networks. Check for the currently installed software version on the vehicle and update remotely when necessary. Interested in real-time flights? Use this page to see which drone and/or pilot is online now right now.
Sky-Drones Cloud provides entire-fleet readings and status updates on one screen, with clear visuals as to where each drone has been, where its next mission is, and the type of terrain that will be encountered. Meanwhile, located in the same hub of information, flight hours, battery life, and real-time flights/flight logs provide the necessary information to maintain a vast fleet of drones.

### Flight Logs
Every flight log is stored in the cloud and is accessible when you need it, no matter where you are in the world. Detailed flight log analytics helps to ensure the best possible flight performance of your vehicle and detect potential mechanical issues before your customers or pilots become aware.
Flight logs allow the user to create a detailed history of all historic, ongoing, and future drone operations. Constant flight log monitoring ensures safe and reliable operations for the whole fleet and for each individual drone/pilot.
DroneLogbook Integration
Sky-Drones Cloud offers Dronelogbook integration for exporting the flight logs to our partner.

### 3D Mission Planning
Add waypoints interactively and view the flight plan from any perspective. Rotate, change view angle, tilt, view from the surface, then get back to the orthogonal view again before completing your mission. Adjust waypoint position and altitude interactively to achieve the best mission planning user experience.

### Integrated UTM
Sky-Drones have integrated Altitude Angel, AirMap, and High Lander UTM services into Sky-Drones Cloud. To explore drone and airspace integration using Altitude Angel, watch the video below:
Altitude Angel UTM Integration
3D Terrain and Ground Hazards data
Instead of relying on elevation profiles to plan missions, pilots get an intuitive 3D view that allows them to visually create flight paths with interactive waypoints, all in the context of high-resolution World Terrain. Terrain data is integrated with weather information and airspace data from , helping pilots avoid ground hazards, manned flights, and other airspace restrictions.
Airspace Data
Real-Time Flight Authorization
Sky-Drones Cloud supports real-time flight request and authorization with . Find your intended flight area and submit a flight plan. This airspace will be reserved for you and this will be publicly available on Altitude Angel's online Drone Safety Map.
Cylinder Flight Plan
Corridor Flight Plan

### Real-Time Flights
Enjoy real-time LTE drone control and video streaming with Sky-Drones Cloud and SmartLink. Everything is web-based - you need only your login and password, no need to install any software whatsoever.
Sign in to the Cloud, select the desired online vehicle, fly via LTE networks. We provide the necessary infrastructure for ultra-low latency flights over the internet without any additional software requirements. Fly right in your web browser with HD video alongside all major telemetry. Operate multiple drones on a single page.

### Sky-Drones API
API reference: https://cloud.sky-drones.com/swagger/



{% include links.html %}

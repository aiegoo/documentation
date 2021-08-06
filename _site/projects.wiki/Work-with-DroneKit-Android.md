# Why we need this
Tower is essentially a front-end GUI app. It generates buttons and figures and takes in the command from user touches. When it launches, it will automatically send an intent in your android system and request the launch of 3DR service app (assuming you have already installed it). 3DR service app is a client lib app that comes with DroneKit-Android build (the client lib sub-app). So when Tower talks to 3DR service app, it essentially calls the library defined by DroneKit-Android. It sends user's commands to DroneKit and it is the DroneKit that convert these commands into numbers and messages that Drone can understand and communicate with the Drone through interfaces wherein.
![](http://i.imgur.com/TK6xiIi.png)
For example, Tower generates the button "Follow-Me" and the user touches it. Tower gets the command and send it to DroneKit (3DR service app). DroneKit then generates a message and send it to the drone to initiate the "Follow-Me" mode. Then if the user touches "Lead" mode. Tower sends this command to DroneKit. DroneKit then compute the next waypoint ahead of the user and send the calculated waypoint to the Drone, which then flies to the very waypoint to realize the lead action.  
![](http://i.imgur.com/VRJl9yT.png)
So, if the developer wants to develop a new flight mode, say "Panorama", both Tower and DroneKit needs to be updated. Tower needs to be modified to include a button called "Panorama" and the associated activity file. DroneKit needs to be modified to include a script to calculate next waypoint according to the current waypoint to actually carry out the flight action.

In this way, function calls are implicitly buried all over the code. It would be better if we know how to develop Tower and Dronekit using Android Studio at the same time and constantly keep them refer to each other. This document is a tutorial on how to do it.

# Build DroneKit-Android
Assuming the developer has already fork and clone the Tower source code and successfully build it in Android, if not, please refer to [this tutorial](https://github.com/DroidPlanner/Tower/wiki/Build-Setup). Then the developer needs to fork and clone the [DroneKit-Android Repo](https://github.com/dronekit/dronekit-android) and import it into Android Studio (please make sure you import the root directory, Android Studio will automatically recognize all the sub-apps inside), as shown below

![](http://i.imgur.com/VjhsyRW.png)

Modify the code if you have already figured out what you want (in other case, don't), and hit build. Now it will automatically generate an [aar](https://sites.google.com/a/android.com/tools/tech-docs/new-build-system/aar-format) file in the directory "DroneKit-Android\ClientLib\build\outputs\aar". For example, "dronekit-android.2.5.21.aar"(the version number is programmically generated). That's the client lib dependency file Tower uses when it builds itself. In other words, whatever changes you made in Dronekit (especially client lib related changes). It should be reflected in that aar file.

![](http://i.imgur.com/g0wOujd.png)

Now hit "run" button in Android-Studio (with your Android device connected), will install the customer built 3DR service to your device. See below an example of customer built 3DR service app that calculate GCS's attitude in real time. 
![](http://i.imgur.com/or09zjx.png) 

# Link it in Tower Development
Now open Tower in Android Studio ([https://github.com/DroidPlanner/Tower/wiki/Build-Setup](tutorial)). We need to tell gradle (the build system of Android Studio) and maven (the package management system), not to download DroneKit from existing online repo, but instead, use our local customer build. 

First, in the root directory of Tower, find "build.gradle" file and open it. In the "allprojects" definition, in the "repositories" entry, add one attribute called "flatDir" and put in the path to the directory "DroneKit-Android\ClientLib\build\outputs\aar" where the DroneKit aar file is. See below for details.

![Add flatDir to build.gradle](http://i.imgur.com/qLdqmE5.png)

Then we need to tell gradle and maven to search local DroneKit build. In the Android folder, find the "build.gradle" (different from the previous one), and open it. Find the entry "compile 'com.o3dr.android:dronekit-android:2.3.xx'" and delete the whole entry. Instead, add "compile(name:'dronekit-android.2.5.21', ext:'aar')" in the line below. See below for details.

![](http://i.imgur.com/9WOM5Ci.png)

Save everything and in Android-Studio, click "tools->Android->Sync Android with Gradle Files". It will automatically search all dependency libs (including our local DroneKit build) and link it in our codes. Now try to play around your Tower code, and call some functions in your Dronekit lib (for example, the "drone" and "controlTower" class in "FlightActivity"). Below is an example of a modified Tower that fetches GCS attitude data from 3DR service app and display them in GUI.

![](http://i.imgur.com/sRSSDWh.png)
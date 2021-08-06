# Streaming raspi camera video to Tower video widget
**Note:** This wiki entry was adapted from the blog post of [Kaizu](http://diydrones.com/profile/Kaiser) on [DiyDrones](http://diydrones.com/).
The original post can be found [here](http://diydrones.com/profiles/blogs/streaming-raspi-camera-video-to-tower-video-widget?commentId=705844%3AComment%3A2259447&xg_source=msg_com_blogpost).

#### 1. Set up raspberry pi for streaming video
From the shell, type the commands in the following post or clone a repo to execute [this script](https://gist.github.com/manis404/5427116#file-gistfile1-sh)

Install gstreamer and enable hardware h264 encoding with gstreamer using [these instructions](http://theiopage.blogspot.jp/2013/04/enabling-hardware-h264-encoding-with.html?m=1)

#### 2. Enable a camera module
In the shell, enter:

_$ sudo raspi-config_

From the menu, Select "Enable camera" and then select "Enable".
If you already did it. You can move to the next step.

#### 3. Start streaming
In the shell, enter:

_$ raspivid -n -t 0 -w 640 -h 360 -fps 24 -b 6000000 -o - | gst-launch-1.0 -e -vvvv fdsrc ! h264parse ! rtph264pay pt=96 config-interval=5 ! udpsink host=192.168.3.11 port=9000_

You should configure the address and port of the host. The address is the client(an android tablet)'s IP address. You can change the port number. You can change the resolution of the video using the _-w: wide_ and _-h: height_ arguments. There are many additional parameters to control the video format.

#### 4. Show video on Tower widget
Please follow the instruction [here](https://github.com/DroidPlanner/Tower/wiki/Custom-video-stream).
You need to set the port number as same as the one specified above.
You only have video while connecting to your pixhawk. 
Now you can watch a flight data and video footage on a same screen!

**Note:** The current supply of the usb ports of a raspberry pi is limited. It is better to supply external power to wifi or 4G/LTE usb dongle or the system may hang up soon or later.
You may need to install rpicamsrc
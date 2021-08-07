Starting with **Tower v3.2.1**, you can pipe a custom video stream to the [Tower video widget](https://github.com/DroidPlanner/Tower/wiki/Tower-Widgets).


#### Notes: 
This feature has been successfully tested with [`gstreamer`](http://gstreamer.freedesktop.org/) running on an [Ubuntu](http://www.ubuntu.com/) machine, and providing a `h264` encoded video stream.
The gstreamer pipeline used is:
```
gst-launch videotestsrc ! 'video/x-raw, width=1280, height=720, framerate=(fraction)24/1' ! x264enc ! rtph264pay ! udpsink port=<device_port> host=<device_ip>
```

Where `<device_ip>` corresponds to your device's IP address, and `<device_port>` the UDP port from which to receive the video stream.


#### Tower Guide
- Navigate to `Settings` -> `User Interface`
![settings_user_interface](https://cloud.githubusercontent.com/assets/914968/10593077/78d5c2d0-7675-11e5-8fe5-a5729c37a980.png)

- Click on `Widgets Preferences`
![widgets_preference](https://cloud.githubusercontent.com/assets/914968/10593080/78d8c930-7675-11e5-9de8-02cacdf30125.png)

- Enable the **Video widget** and click on the **gear icon**
![widgets_list_screen](https://cloud.githubusercontent.com/assets/914968/10593076/78d5b1fa-7675-11e5-8dfc-7d5e3adb22bf.png)

- In the video widget preference screen, select **Custom video stream**, and enter the **UDP Port** the video is being streamed at.
![custom_video_stream_preferences](https://cloud.githubusercontent.com/assets/914968/10593078/78d5df36-7675-11e5-9091-14504f3bd952.png)

- Go back to the flight screen, and connect to your vehicle. If configured correctly, the video widget will start displaying the custom video stream!
![video_stream_example](https://cloud.githubusercontent.com/assets/914968/10593079/78d60d62-7675-11e5-8437-5d57dcc9e182.png)
---
title: 🔭sensor detection
tags: [drone, ai, matlab, slam]
last_updated: 2021-09-23 4:42 PM
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "RealSense with Open3D"
sidebar: mydoc_sidebar
permalink: mydoc_sensor_detection.html
datatable: true
folder: mydoc
---

## AIOT embedded projects with sensors

### RealSense
RealSense (`librealsense SDK v2`) is integrated into Open3D (v0.12+) and you can use it through both C++ and Python APIs without a separate `librealsense` SDK installation on Linux, macOS and Windows. Older versions of Open3D support RealSense through a separate install of `librealsense` SDK v1 and `pyrealsense`.

#### Obtaining Open3D with RealSense support
- python
 Install Open3D from PyPi(a virtual environment is recommened)

 ```
 pip install open3d
 ```

   - Complile from source (C++)
   To build Open3D from source with RealSense support, set `BUILD_LIBRAEAL_SENSE=ON` AT cmAKE CONFIG STEP. You can add other configuration options as well (eg.. `BUILD_GUI=ON` and `BUILD_PYTHON_MODULE=ON` may be useful.)
   ```
   cmake -D BUILD_LIBREALSENSE=ON -D <OTHER_FLAGS> /path/to/Open3D/source/
   ```
- Reading from REalSense bag files
  - Sample REalSense bag files
  
  You can donwload sample RealSense bag datasets with this script:
  ```
  python examples/python/reconstruction_system/scripts/downlaod_dataset.py L515_test
  ```

Check the script for more RS bag datasets.

Here is a C++ code snippet that shows how to read a RealSense bag file recorded with Open3D or the `realsense-viewer`. Note that general ROSbag files are not supported. See more details and available functionality (such as getting timestamps, aligning the depth stream to the color stream and getting intrinsic calibration) in the C++ API in the [RSBagReader_Doc](http://www.open3d.org/docs/release/cpp_api/classopen3d_1_1t_1_1io_1_1_r_s_bag_reader.html)

```C++
#include <open3d/open3d.hpp>
using namespace open3d;
t::io::RSBagReader bag_reader;
bag_reader.Open(bag_filename);
auto im_rgbd = bag_reader.NextFrame();
while (!bag_reader.IsEOF()) {
    // process im_rgbd.depth_ and im_rgbd.color_
    im_rgbd = bag_reader.NextFrame();
}
bag_reader.Close();
```

```python
import open3d as o3d
bag_reader = o3d.t.io.RSBagReader()
bag_reader.open(bag_filename)
im_rgbd = bag_reader.next_frame()
while not bag_reader.is_eof():
    # process im_rgbd.depth and im_rgbd.color
    im_rgbd = bag_reader.next_frame()

bag_reader.close()
```

### Examples
#### C++ RS bag file viewer

This C++ example that plays back the color and depth streams from a RealSense bag file. It also prints out metadata about the video streams in the file. Press <kdb>SPACE</kdb> to pause/resume and <kdb>ESC</kdb> to exit.:

```c++
make RealSenseBagReader
bin/examples/RealSenseBagReader --input L515_test.bag
```

{% include image.html file="realsense/RSbagviewer.jpg" caption="realSense bag file viewer example" %}

#### Running the scene reconstruction pipeline
You can provide an RS bag file directly to the reconstruction pipeline and colormap optimization pipelines. It will be automatically converted to a directory of depth and color frames and the camera intrinsics. Edit the examples/python/reconstruction_system/config/realsense.json file with the path to your RS bag file and leave path_intrinsic empty. Update other configuration parameters if needed (see the reconstruction pipeline documentation for more details, including other required packages):

```bash
cd examples/python/reconstruction_system/
python run_system.py --make --register --refine --integrate config/realsense.json
python ../pipelines/color_map_optimization_for_reconstruction_system.py  --config config/realsense.json
```

The reconstruction result below was obtained with the L515_JackJack dataset with the configuration changes:

```json
"path_dataset": "/path/to/downloaded/L515_JackJack.bag"
"max_depth": 0.85,
"tsdf_cubic_size": 0.75,
"voxel_size": 0.025,
"max_depth_diff": 0.03
```

<p><video id="scenario-1" class="video-js vjs-default-skin vjs-big-play-centered" controls
 preload="auto" width="467" height="350" data-setup='{}'>
  <source src="images/realsense/JackJack_colormap_opt_result.mp4" type='video/mp4'>
</video></p>

#### RealSense camera configuration, live capture, processing and recording
##### RealSense camera discovery

You can list all RealSense devices connected to the system and get their capabilities (supported resolutions, frame rates, etc.) with the code snippet below.

```c++
#include <open3d/open3d.hpp>
open3d::t::io::RealSenseSensor::ListDevices();
```

```python
import open3d as o3d
o3d.t.io.RealSenseSensor.list_devices()
```

Here is sample output when only one L515 camera is connected:

```
[Open3D INFO] [0] Intel RealSense L515: f0141095
[Open3D INFO]       color_format: [RS2_FORMAT_BGR8 | RS2_FORMAT_BGRA8 | RS2_FORMAT_RGB8 | RS2_FORMAT_RGBA8 | RS2_FORMAT_Y16 | RS2_FORMAT_YUYV]
[Open3D INFO]       color_resolution: [1280,720 | 1920,1080 | 960,540]
[Open3D INFO]       color_fps: [15 | 30 | 6 | 60]
[Open3D INFO]       depth_format: [RS2_FORMAT_Z16]
[Open3D INFO]       depth_resolution: [1024,768 | 320,240 | 640,480]
[Open3D INFO]       depth_fps: [30]
[Open3D INFO]       visual_preset: [RS2_L500_VISUAL_PRESET_CUSTOM | RS2_L500_VISUAL_PRESET_DEFAULT | RS2_L500_VISUAL_PRESET_LOW_AMBIENT | RS2_L500_VISUAL_PRESET_MAX_RANGE | RS2_L500_VISUAL_PRESET_NO_AMBIENT | RS2_L500_VISUAL_PRESET_SHORT_RANGE]
[Open3D INFO] Open3D only supports synchronized color and depth capture (color_fps = depth_fps).
```

This data can also be obtained programmatically to configure a camera based on custom specifications (e.g.: resolution less than 720p) and to independently configure multiple cameras.

#### RealSense camera configuration
RealSense cameras can be configured with a simple json configuration file. See RealSense documentation for the set of configuration values. Supported configuration options will be depend on the device and other chosen options. Here are the options supported by Open3D:

- serial: Pick a specific device, leave empty to pick the first available device.

- color_format: Pixel format for color frames.

- color_resolution: (width, height): Leave 0 to let RealSense pick a supported width or height.

- depth_format: Pixel format for depth frames.

- depth_resolution: (width, height): Leave 0 to let RealSense pick a supported width or height.

- fps: Common frame rate for both depth and color streams. Leave 0 to let RealSense pick a supported frame rate.

- visual_preset: Controls depth computation on the device. Supported values are specific to product line (SR300, RS400, L500). Leave empty to pick the default.

Here is an example json configuration file to capture 30fps, 540p color and 480p depth video from any connected RealSense camera. The video width is picked by RealSense. We also set the visual_preset to RS2_L500_VISUAL_PRESET_MAX_RANGE to better capture far away objects.

```json
{
    "serial": "",
    "color_format": "RS2_FORMAT_RGB8",
    "color_resolution": "0,540",
    "depth_format": "RS2_FORMAT_Z16",
    "depth_resolution": "0,480",
    "fps": "30",
    "visual_preset": "RS2_L500_VISUAL_PRESET_MAX_RANGE"
 }
 ```
 
 #### RealSense camera capture, processing and recording

 The following code snippets show how to capture live RGBD video from a RealSense camera. They capture the first 150 frames and also record them to an RS bag file. The bag file can be played back with Open3D tools, realsense-viewer. You can also use ROS tools such as rosbag, rqt_bag and rviz to examine, play and modify the bag file. You can adapt the snippets to your needs by processing or displaying the frames after capture.

 ```c++
 #include <open3d/open3d.hpp>
open3d::t::io::RealSenseSensorConfig rs_cfg;
open3d::io::ReadIJsonConvertible(config_filename, rs_cfg);
RealSenseSensor rs;
rs.InitSensor(rs_cfg, 0, bag_filename);
rs.StartCapture(true);  // true: start recording with capture
for(size_t fid = 0; fid<150; ++fid) {
    im_rgbd = rs.CaptureFrame(true, true);  // wait for frames and align them
    // process im_rgbd.depth_ and im_rgbd.color_
}
rs.StopCapture();
```

```python
import json
import open3d as o3d
with open(config_filename) as cf:
    rs_cfg = o3d.t.io.RealSenseSensorConfig(json.load(cf))

rs = o3d.t.io.RealSenseSensor()
rs.init_sensor(rs_cfg, 0, bag_filename)
rs.start_capture(True)  # true: start recording with capture
for fid in range(150):
    im_rgbd = rs.capture_frame(True, True)  # wait for frames and align them
    # process im_rgbd.depth and im_rgbd.color

rs.stop_capture()
```

Note that for any real time application such as live capture and processing, it is important to complete frame processing in the frame interval (~33ms for 30fps recording). You may experience frame drops otherwise. For high resolution capture, you can defer frame alignment by setting `align_depth_to_color=false` during capture and performing it while reading the bad file instead.

This is a complete C++ example that shows visualizing live capture and recording to a bag file. The recording can be paused / resumed with <kdb>SPACE</kdb>. Use <kdb>ESC</kdb> to stop capture and quit. You can use this example to capture your own dataset:

```c++
make RealSenseRecorder
bin/examples/RealSenseRecorder --config ../examples/test_data/rs_default_config.json --record test_data.bag
```

{% include image.html file="realsense/RealSenseRecorder.jpg" caption="visualizing live capture" %}
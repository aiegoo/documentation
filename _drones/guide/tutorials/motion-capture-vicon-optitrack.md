# Flying with Motion Capture (VICON, Optitrack)

:::warning
**WORK IN PROGRESS**. 

This topic shares significant overlap with [External Position Estimation (ROS)](../ros/external_position_estimation.md). 
:::

Indoor motion capture systems like VICON and Optitrack can be used to provide position and attitude data for vehicle state estimation, orto serve as ground-truth for analysis.
The motion capture data can be used to update PX4's local position estimate relative to the local origin. Heading (yaw) from the motion capture system can also be optionally integrated by the attitude estimator.

Pose (position and orientation) data from the motion capture system is sent to the autopilot over MAVLink, using the [ATT_POS_MOCAP](https://mavlink.io/en/messages/common.html#ATT_POS_MOCAP) message. See the section below on coordinate frames for data representation conventions. The [mavros](../ros/mavros_installation.md) ROS-Mavlink interface has a default plugin to send this message. They can also be sent using pure C/C++ code and direct use of the MAVLink library.

## Computing Architecture

It is **highly recommended** that you send motion capture data via an **onboard** computer (e.g Raspberry Pi, ODroid, etc.) for reliable communications. The onboard computer can be connected to the motion capture computer through WiFi, which offers reliable, high-bandwidth connection.

Most standard telemetry links like 3DR/SiK radios are **not** suitable for high-bandwidth motion capture applications.

## Coordinate Frames

This section shows how to setup the system with the proper reference frames. There are various representations but we will use two of them: ENU and NED. 

* ENU is a ground-fixed frame where **X** axis points East, **Y** points North and **Z** up. The robot/vehicle body frame is **X** towards the front, **Z** up and **Y** towards the left.
* NED has **X** towards North, **Y** East and **Z** down. The robot/vehicle body frame has **X** towards the front, **Z** down and **Y** accordingly.

Frames are shown in the image below. NED on the left, ENU on the right:
![Reference frames](images/drones/lpe/ref_frames.png)

With the external heading estimation, however, magnetic North is ignored and faked with a vector corresponding to world *x* axis (which can be placed freely at mocap calibration); yaw angle will be given respect to local *x*.

:::warning
When creating the rigid body in the motion capture software, remember to first align the robot with the world **X** axis otherwise yaw estimation will have an initial offset.
:::

## Estimator choice

### LPE and Attitude Estimator Q

### EKF2


The ROS topic for motion cap `mocap_pose_estimate` for mocap systems and `vision_pose_estimate` for vision. Check [mavros_extras](http://wiki.ros.org/mavros_extras) for further info.


## Testing

## Troubleshooting

---
title: programing robots with ros
tags: [books, getting_started]
last_updated: August 18, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "ROS systems are comprised of a large number of independent programs that are constantly communicating with each other"
sidebar: mydoc_sidebar
permalink: books_robotswithros.html
folder: books
series: "MATLAB series"
weight: 4
simple_map: true
map_name: matlab
box_number: 4
---

{% include custom/series_matlab_next.html %}
# Installation
[rosorg](http://wiki.ros.org/indigo/Installation/Ubuntu)

## the book
[doc](https://github.com/aiegoo/matlab/blob/edit/pdf/robotswithros.pdf)

- rotations, orientation, and quaternions
- introduction to simulating IMU measurements
- estimate positon and orientation of a ground vehicle
- esitamte robot pose with scan matching
- plan mobile robot paths using RRT (rapidly exploring random tree)
- implement simultaneous localization and mapping with algorithm
- perform slam using 3-d lidar point clouds

[![image](https://user-images.githubusercontent.com/42961200/129006952-8894b07f-de23-4d9f-bf39-c2a3ee532549.png)](https://kr.mathworks.com/help/nav/ug/motion-planning-in-urban-environments-using-dynamics-occupancy-grid-map.html)

[![dynamicmap](./images/MotionPlanningUsingDynamicMapExample_03.gif)](https://kr.mathworks.com/help/nav/ug/motion-planning-in-urban-environments-using-dynamics-occupancy-grid-map.html)

![](./pdf/gcs/matlab_flightsim.gif)

```cpp
#include <string>
#include <ros/ros.h>
#include <sensor_msgs/JointState.h>
#include <tf/transform_broadcaster.h>

int main(int argc, char** argv) {
    ros::init(argc, argv, "state_publisher");
    ros::NodeHandle n;
    ros::Publisher joint_pub = n.advertise<sensor_msgs::JointState>("joint_states", 1);
    tf::TransformBroadcaster broadcaster;
    ros::Rate loop_rate(30);

    const double degree = M_PI/180;

    // robot state
    double tilt = 0, tinc = degree, swivel=0, angle=0, height=0, hinc=0.005;

    // message declarations
    geometry_msgs::TransformStamped odom_trans;
    sensor_msgs::JointState joint_state;
    odom_trans.header.frame_id = "odom";
    odom_trans.child_frame_id = "axis";

    while (ros::ok()) {
        //update joint_state
        joint_state.header.stamp = ros::Time::now();
        joint_state.name.resize(3);
        joint_state.position.resize(3);
        joint_state.name[0] ="swivel";
        joint_state.position[0] = swivel;
        joint_state.name[1] ="tilt";
        joint_state.position[1] = tilt;
        joint_state.name[2] ="periscope";
        joint_state.position[2] = height;


        // update transform
        // (moving in a circle with radius=2)
        odom_trans.header.stamp = ros::Time::now();
        odom_trans.transform.translation.x = cos(angle)*2;
        odom_trans.transform.translation.y = sin(angle)*2;
        odom_trans.transform.translation.z = .7;
        odom_trans.transform.rotation = tf::createQuaternionMsgFromYaw(angle+M_PI/2);

        //send the joint state and transform
        joint_pub.publish(joint_state);
        broadcaster.sendTransform(odom_trans);

        // Create new robot state
        tilt += tinc;
        if (tilt<-.5 || tilt>0) tinc *= -1;
        height += hinc;
        if (height>.2 || height<0) hinc *= -1;
        swivel += degree;
        angle += degree/4;

        // This will adjust as needed per iteration
        loop_rate.sleep();
    }


    return 0;
}
```
{% include tony.html content="matlab tutorials and gcs.uno are the main source of learning for now" %}

{% include custom/series_matlab_next.html %}

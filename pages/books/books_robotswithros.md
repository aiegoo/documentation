---
title: programing robots with ros
tags: [books, getting_started]
last_updated: August 18, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "ROS systems are comprised of a large number of independent programs that are constantly communicating with each other, which is designed to encourage reuse of robotics sw within and outside nodes. This loosely coupled structure creates generic modules applicable to hw/sw pipelines."
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

## ROS graph
- navigation, computer vision, grasping
- security patrols, cleaning, delivery
- messages, graph nodes, edges
- roscore, rosrun, roslaunch, name, namespace, remapping
- ros_master_uri, parameter server
- catkin, workspace(catkin_ws, catkin_make), CMakeLists.txt and package.xml

![image](https://user-images.githubusercontent.com/42961200/129859786-7f3c2d80-bc8c-4121-a6af-c6e0278258c7.png)

{% include custom/tony.html content="a ROS graph node represents a software module that is sending or receiving messages, and a ROS graph edge represents a stream of messages between two nodes. Although things can get more complex, typically nodes are POSIX processes, and edges are TCP connections. Roscore is a program that allows nodes to find other nodes. Catkin is the ROS build system: the set of tools that ROS uses to generate executable programs, libraries, scripts, and interfaces that other code can use" %}

[![image](https://user-images.githubusercontent.com/42961200/129006952-8894b07f-de23-4d9f-bf39-c2a3ee532549.png)](https://kr.mathworks.com/help/nav/ug/motion-planning-in-urban-environments-using-dynamics-occupancy-grid-map.html)

[cakin_wiki](http://wiki.ros.org/catkin?distro=indigo)

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

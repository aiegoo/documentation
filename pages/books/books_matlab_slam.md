---
title: Matlab slam
tags: [books, getting_started]
last_updated: August 11, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "The SLAM Map Builder app loads recorded lidar scans and odometry sensor data to build a 2-D occupancy grid using simultaneous localization and mapping (SLAM) algorithms. Incremental scan matching aligns and overlays scans to build the map. Loop closure detection adjusts for drift of the vehicle odometry by detecting previously visited locations and adjusting the overall map. Sometimes, the scan matching algorithm and loop closure detection require manual adjustment. Use the app to manually align scans and modify loop closures to improve the overall map accuracy. You can also tune the SLAM algorithm settings to improve the automatic map building."
sidebar: mydoc_sidebar
permalink: books_matlab_slam.html
folder: books
series: "MATLAB series"
weight: 3
---

{% include custom/series_matlab_next.html %}
# Matlab implementation

## Slam
[doc](https://kr.mathworks.com/help/nav/ref/slammapbuilder-app.html)

- rotations, orientation, and quaternions
- introduction to simulating IMU measurements
- estimate positon and orientation of a ground vehicle
- esitamte robot pose with scan matching
- plan mobile robot paths using RRT (rapidly exploring random tree)
- implement simultaneous localization and mapping with algorithm
- perform slam using 3-d lidar point clouds

[![image](https://user-images.githubusercontent.com/42961200/129006952-8894b07f-de23-4d9f-bf39-c2a3ee532549.png)](https://kr.mathworks.com/help/nav/ug/motion-planning-in-urban-environments-using-dynamics-occupancy-grid-map.html)


{% include custom/series_matlab_next.html %}

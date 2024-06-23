---
layout: post
title: "setup mavros and px4"
name: "jdlab-ros-mavros"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-16-jdlab-ros-mavros.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "pixhawk ros mavros px4 gcs simulation offboard"
summary: "Wed, Feb 16, 22, setup mavros and px4"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-02-16T04:02:00 +0900
updated: 2022-02-16 04:02
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## MAVROS와 PX4 설치
이번에는 mavros와 px4의 설치에 대해서 살펴보겠습니다. 임재영님이 만들어놓으신 gitpage를 참조하시면 좋을 것 같습니다.
https://github.com/Jaeyoung-Lim/modudculab_ros

1. gazebo_ros_pkgs설치
terminal창을 키고


```bash
sudo apt-get install ros-indigo-gazebo6-ros-pkgs
```
을 입력해주시면 설치가 됩니다.


2. MAVROS 설치
우선 apt-get을 업데이트 시켜줍니다.


```bash
sudo apt-get update
```
그리고 MAVROS를 설치해줍니다


```bash
sudo apt-get install ros-indigo-mavros ros-indigo-mavros-extras
```
위 문장을 터미널 창에 입력하면 설치가 됩니다.


3. PX4 설치
이제 Pixhawk의 firmware인 PX4를 설치해줍니다


```bash
sudo add-apt-repository ppa:george-edison55/cmake-3.x -y
sudo apt-get update
sudo apt-get install python-argparse git-core wget zip \
          python-empy qtcreator cmake build-essential genromfs -y
simulation tools

sudo apt-get install ant protobuf-compiler libeigen3-dev libopencv-dev openjdk-8-jdk openjdk-8-jre clang-3.5 lldb-3.5 -y
```
이 명령은 에러가 많이 발생합니다. 이 부분에서 에러가 발생하는 것은 openjdko-8-jdk, openjdk-8-jre이 설치되지 않기 때문입니다. 그래서 이 두 개 빼고 나머지 를 설치해주시고 두 개는 따로 설치해주도록 했습니다.


```bash
sudo apt-get install ant protobuf-compiler libeigen3-dev libopencv-dev clang-3.5 lldb-3.5 -y
```
openjdko-8-jdk, openjdk-8-jre가 설치가 되지 않는 이유는 Ubuntu14.04에서 호환되는 패키지가 아니기 때문입니다. 검색해본 결과 Ubuntu14.04에서는 7버전까지 지원이 되어서 아래와 같이 바꿔서 명령을 주게 되면 Java가 설치가 됩니다.

```bash
sudo apt-get install openjdk-7-jdk openjdk-7-jre
```
혹은 다음과 같은 방법으로 Java 8을 설치할 수 있습니다.
http://tecadmin.net/install-oracle-java-8-jdk-8-ubuntu-via-ppa/#
위 페이지에 따라서 다른 방법으로 자바를 설치했습니다.


```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
하지만 저는 마지막 줄이 실행이 안되어서 다음 문장으로 대체했습니다.


```bash
sudo apt-get install oracle-java8-set-default
```
또한 다음과 같은 명령어로 설치가 된 자바의 버전을 확인할 수 있습니다.


```bash
java -version
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git submodule update --init --recursive
```
이렇게 차례대로 실행해주시면 설치가 완료됩니다



4. Iris drone gazebo test
PX4가 설치가 되었다면 PX4안의 iris drone의 model이 들어있고 그 model을 gazebo로 실행시켜봅니다. gazebo안에 iris drone이 보이면 됩니다.

```bash
cd ~/catkin_ws/src/Firmware
make posix_sitl_default gazebo
```

터미널 창에서는 많은 줄들이 지나가고 마지막으로 이렇게 되면서 gazebo가 실행됩니다

한 번 힘을 가해보았습니다. Simulator의 테스트라고 보시며 될 것 같습니다.



여기까지 Mavros와 PX4의 설치 그리고 gazebo의 test까지 살펴보았습니다.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

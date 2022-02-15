---
layout: post
title: "setup gazebo for simulation"
name: "jdlab-ros-gazebo"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-16-jdlab-ros-gazebo.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "pixhawk ros gazebo gcs simulation"
summary: "Wed, Feb 16, 22, pixhawk ros gazebo gcs simulation"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-02-16T03:48:00 +0900
updated: 2022-02-16 03:48
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Gazebo6 설치
가제보란 무엇인지에 대해서 설명해주는 홈페이지 내용입니다

http://gazebosim.org/

What is Gazebo?


Robot simulation is an essential tool in every roboticist's toolbox. A well-designed simulator makes it possible to rapidly test algorithms, design robots, and perform regression testing using realistic scenarios. Gazebo offers the ability to accurately and efficiently simulate populations of robots in complex indoor and outdoor environments. At your fingertips is a robust physics engine, high-quality graphics, and convenient programmatic and graphical interfaces. Best of all, Gazebo is free with a vibrant community.

http://cafe.naver.com/openrt
오로카 홈페이지에서는 가제보란 로봇 개발에 필요한 3차원 시뮬레이션을 위한 로봇, 센서, 환경 모델 등을 지원하고 물리 엔진을 탑재하여 실제와 근사한 결과를 얻을 수 있는 3차원 시뮬레이터라고 소개하고 있습니다. 로봇을 위한 2/3차원 시뮬레이션은 많지만 최근에 나온 오픈 진영 시뮬레이터중에서는 가장 좋은 평가를 받고 있다고 합니다. 또한 저는 ROS의 시뮬레이션 툴로서 사용하려하는 것이기 때문에 원래 ROS의 프로젝트였던 gazebo를 사용하는 것이 가장 좋은 선택이라 생각했습니다.

드론의 시뮬레이션에 이 프로그램을 사용할 것입니다. 시뮬레이션은 제품 개발의 시간을 상당시간 단축시켜주고 실재의 하드웨어가 없더라도 여러가지를 테스트 해볼 수 있으므로 중요한 것 같습니다.



Gazebo6 설치
가제보 홈페이지의 install 페이지입니다 http://gazebosim.org/tutorials?tut=install_ubuntu&ver=6.0&cat=install

우분투에서 터미널 창을 여시고 밑의 1,2,3 순서대로 입력하고 실행시켜주시면 설치가 됩니다

1. Setup your computer to accept software from packages.osrfoundation.org.

```bash
sudo sh -c 'echo "deb http://packages.osrfoundation.org/gazebo/ubuntu-stable `lsb_release -cs` main" > /etc/apt/sources.list.d/gazebo-stable.list'
```

1. Setup keys

```bash
wget http://packages.osrfoundation.org/gazebo.key -O - | sudo apt-key add -
```

1. eliminate previous gazebo and install gazebo 6
이전에 gazebo가 설치되어있다면 gazebo6가 설치되지 않습니다. 따라서 현재 ros를 설치하면서 같이 설치된 gazebo 구버전을 지워주셔야합니다.

```bash
sudo apt-get remove .*gazebo.* && sudo apt-get update && sudo apt-get install gazebo6
```
see the page https://bitbucket.org/osrf/gazebo_tutorials/issues/42/gazebo6-installation-failing-on-ubuntu


4. Run gazebo
gazebo


가제보가 돌아가는 것을 확인하시면 gazebo 6의 설치가 완료되었습니다


5. install extra package
For developers that work on top of Gazebo, one extra package

```bash
sudo apt-get install libgazebo6-dev
```

6. Possible error
(1) 우분투와 가제보가 서로 버전이 맞아야합니다. 저는 ubuntu 14.04에 gazebo6를 설치하였는데 만약 ubuntu 12.04에 gazebo7을 설치하려하면 다음과 같은 에러가 발생합니다.

```diff
sudo apt-get install gazebo7
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package gazebo7
```

이 같은 에러는 현재 ubuntu 버전에서 사용할 수 없는 package 혹은 apt-get로는 설치할 수 없는 package에 대해서 발생합니다. 앞으로 이러한 에러(unable to locate package)가 발생하였을 경우에는 버전이 호환이 되는지, 호환이 안되면 가능한 버전은 무엇인지, 또는 소스로 설치하는 방법은 없는지 알아보시고 다시 명령을 주면 됩니다.


(2) 가제보의 사양은 다음과 같습니다. http://gazebosim.org/tutorials?cat=guided_b&tut=guided_b1

Gazebo is currently best used on Ubuntu, a flavor of Linux. You will need a computer that has: A dedicated GPU, Nvidia cards tend to work well in Ubuntu A CPU that is at least an Intel I5, or equivalent, At least 500MB of free disk space, Ubuntu Trusty or later installed.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

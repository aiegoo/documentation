---
layout: post
title: "ros and px4 architecture and data flow"
name: "jdlab-ros-structure"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-16-jdlab-ros-structure.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "pixhawk ros sitl gcs px4 simulation"
summary: "Wed, Feb 16, 22, examine how data flows for user interface and drone control"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-02-16T04:26:07 +0900
updated: 2022-02-16 04:26
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## ROS와 PX4의 구조
1. ROS의 구조
지금까지 Ubuntu를 설치하고 ROS를 설치하고 Gazebo를 설치하고 PX4를 설치하고 그리고 SITL까지 해보았습니다. SITL까지 해봐서 Gazebo안에서 드론을 날리는 것까지는 해보았지만 사실 아직 ROS와 PX4에 대해서 이해가 되거나 그 구조가 그려지지 않을 것입니다. 따라서 더 진도를 나가기 전에 그 구조에 대해서 살펴보려고 합니다.

ROS의 구조에 대해서 오로카 홈페이지의 그림들을 인용하였습니다.

http://cafe.naver.com/openrt/2468

기본적으로 ROS는 마스터와 노드들, 그리고 그 사이의 통신으로 이루어져 있습니다. 노드란 프로그램을 실행 하는 기본 단위이고 마스터는 그 노드들 사이의 커뮤니케이션을 도와주는 역할을 합니다. 바로 그 노드들 사이의 커뮤니케이션(메시지통신)이 ROS의 핵심개념입니다. 다음 그림을 참고하면 이해하기 쉽습니다.

처음에 마스터가 노드1과 노드2를 연결시켜주고 서로 커뮤니케이션을 하게 하면 이제 마스터는 빠지고 노드끼리 통신하며 작업을 수행하게 됩니다.(개인적으로는 마스터가 주선자같다는 생각이 드네요) 그렇다면 마스터가 노드1과 노드2를 어떻게 연결시켜줄까요?

우리의 기억을 되짚어 보면 항상 처음에 roscore라는 명령어를 실행시켰다는 것이 기억나실텐데 그 명령어가 바로 이 마스터를 구동시키는 것입니다. 위 그림에서 나오는 XMLRPC에 대해서는 다음 위키피디아를 참고해주시기 바랍니다. 통신 프로토콜의 일종인 것 같습니다.
https://ko.wikipedia.org/wiki/XML-RPC

마스터는 노드로부터 4가지의 정보를 받습니다. 노드의 이름, 토픽 or 서비스의 이름, 메시지 타입, URI 주소 or 포트입니다. 그림은 다음과 같습니다. 구독자란 토픽에 해당하는 정보를 받아볼 노드를 의미합니다. 마스터와 노드는 위에서 언급했던 XMLRPC로 통신을 합니다.

발행자 노드로부터도 동일하게 4가지의 정보를 XMLRPC로 받습니다.

이렇게 구독자 노드와 발행자 노드가 자신의 정보를 보내는 것은 우리가 앞에서 많이 해봤던 "rosrun"혹은 "roslaunch"라는 명령어로 패키지안의 노드를 실행시켰을 때입니다.

이제 마스터는 그 발행자 노드의 정보를 구독자 노드에게 전달하면 구독자 노드가 마스터를 통하지 않고 노드1에 접속을 시도하게 됩니다. (소개팅에서 마스터가 번호와 사진 정보를 전달하면 그때부터 서로 연락하는 방식과 비슷하군요) 노드1이 그 접속시도에 응답을 하게 되면(이 과정까지는 XMLRPC로 통신합니다) 노드 1과 노드 2가 통신을 직접 하게 됩니다. 그림은 다음과 같습니다. 발행자 노드인 노드 1이 TCPROS의 서버가 되고 구독자 노드인 노드 2가 클라이언트가 되어서 노드 2가 구독을 요청했던 토픽을 정해진 메시지의 형태로 받아볼 수 있게 됩니다.



앞서 ROS indigo설치 글에서 설치를 확인하는 과정에서 사용했던 turtlesim예제에서 이러한 관계를 살펴보겠습니다. 처음에 roscore명령어를 통해서 마스터를 작동시켜줍니다. 이제 노드를 2개 실행시켜주는데 거북이가 움직이는 것을 화면으로 표시하는 turtlesim_node와 키보드로 조종하는 명령을 받아오는 turtle_teleop_key노드입니다. 키보드를 통해서 turtlesim_node에서 turtle을 조종하려면 turtlesim_node가 turtle_teleop_key노드의 정보를 받아와서 화면으로 거북이가 이동하는 것을 표시해줘야합니다.

처음 turtlesim_node를 rosrun으로 실행시켜주면 자신의 노드이름과 받고자 하는 토픽과 그 형식을 마스터에게 전달합니다. 그리고 turtlesim_teleop_key를 rosrun으로 실행시켜주면 똑같이 자신의 이름과 발행하고자 하는 토픽과 그 형태를 마스터에게 전달합니다. 여기서 그 토픽은 /turtle1/cmd_vel입니다. cmd_vel란 키보드로 들어오는 명령을 뜻할 것입니다. 마스터는 두 노드로부터 받아온 정보를 바탕으로 turtlesim_node에게 turtlesim_teleop_key의 정보를 전달하고 turtlesim_node는 turtlesim_teleop_key노드에게 XMLRPC통신으로 접속을 시도하고 상대방이 응답하면 그때부터 turtlesim_node는 키보드로부터 들어오는 command값을 받아서 자신의 노드안의 기능을 거쳐서 화면으로 표현합니다.

이 내용을 SITL에서 사용했던 ROS의 경우에 적용시켜봅시다. SITL에서 roslaunch를 통해서 실행한 노드는 두 개 입니다. mavros와 pub_setpoints_position입니다. 처음에 roscore를 실행시키고 두 개의 노드를 실행시키면 roscore를 통해서 publish와 subscribe를 하게 됩니다. pub_setpoints_position에 있는 명령들을 publish하면 mavros가 subscribe하고 그 내용들을 PX4에 전달해줍니다. 또한 mavros node가 px4의 topic들을 subscribe하기 때문에 그 내용들(센서들, 속도, 위치, 등등)을 모니터링 할 수 있습니다.



2. PX4의 구조
지금까지 ROS의 구조와 MAVROS에 대해서 살펴보았습니다. mavros는 하나의 노드로서 ROS와 PX4사이에서 다리 역할을 해서 서로 여러가지 토픽의 정보를 주고 받도록 하였습니다. ROS와 MAVROS는 어떻게 작동하는 지 알았는데 그러면 PX4 자체는 어떤 구조로 이루어져 있을까요?

PX4 consists of two main layers: The PX4 flight stack, an autopilot software solution and the PX4 middleware, a general robotics middleware which can support any type of autonomous robot.

http://dev.px4.io/concept-architecture.html
PX4 홈페이지에서는 위에서와 같이 설명합니다. PX4는 두 개의 층으로 이루어져 있는데, PX4 flight stack과 PX4 middleware입니다. PX4 flight stack은 오토파일럿 소프트웨어이며 PX4 middleware는 일반적인 robotics에 사용되는 middeware입니다.

즉, PX4내부에서 PX4 Flight Stack은 드론의 비행에 관련된 부분입니다. 앞에서 PX4가 architecture가 잘 되어있어서 사용한다고 말했었는데 그것이 바로 PX4 Flight Stack의 architecture를 언급한 것입니다.

위 그림은 그 PX4 Flight Stack의 구조를 나타내고 있는데 어떻게 보면 박스 하나 하나는 ROS안에서의 node의 개념과 비슷한 것 같습니다. 각 센서 데이터 값으로부터 자신의 위치와 자세를 추정하여 controller에 들어가면 controller에서는 명령을 mixer로 주게 됩니다. 이 mixer라는 것이 PX4 Flight Stack의 특징 중의 하나입니다.
http://dev.px4.io/concept-mixing.html  이 Mixer 또한 하나의 노드처럼 생각하며 될 것 같은데 control 명령(힘이나 토크)을 받아서 각 모터에 그 명령을 수행하기 위한 신호를 주는 역할을 합니다. 즉, 쿼드콥터가 고도를 높여야해서 위로 100N의 힘을 주어야할 때 그 100N이 mixer로 들어가면 mixer는 해당 기체가 쿼드콥터인 것을 알고 각 네 개의 모터에 PWM신호를 주게 됩니다. 이러한 mixer는 기체별로 따로 정의가 되어있기때문에 사용자는 단지 정의만 해주면 된다는 편의성이 있습니다.

그렇다면 ROS로부터 오는 명령은 어디로 들어가는 것일까요?

ROS로부터 오는 high-level mission은 위 그림의 네모인 commander와 navigator로 들어가게 됩니다. 이전의 기억을 되살려보면 이 commader와 navigator는 mavlink를 통해 그 정보를 받아옵니다. 또한 position과 attitude의 측정정보, mixer의 값이 mavlink를 통해 ROS로 전달되게 됩니다.

PX4의 나머지 한 부분인 PX4 middleware에 대해서는 다음 글을 참고해주세요.
http://dev.px4.io/concept-middleware.html

PX4 Flight Stack에서 PID계수를 보거나 Tuning을 해주고 싶으면 Q ground control을 설치하고 그 안에서 해당 내용을 확인 및 변경할 수 있습니다. https://pixhawk.org/users/parameter_guide

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

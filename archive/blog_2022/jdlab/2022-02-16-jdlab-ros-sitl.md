---
layout: post
title: "testing sitl drone"
name: "jdlab-ros-sitl"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-16-jdlab-ros-sitl.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "pixhawk ros sitl gcs simulation iris"
summary: "Wed, Feb 16, 22, process to launch sitl drone"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-02-16T04:10:58 +0900
updated: 2022-02-16 04:10
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Software In The Loop(SITL)
1. SITL
지금까지 SITL을 하기 위한 준비과정이었습니다. 이번 글에서는 gazebo를 이용해서 simulation상에서 드론을 날려보도록 하겠습니다. gazebo에서 드론이 잘 난다면 실재로도 잘 난다고 합니다.

https://bogdangradinaru.wordpress.com/2010/03/02/software-in-the-loop-and-hardware-in-the-loop-simulations-or-simply-sils-and-hils/
위 페이지에서 참고해서 설명하도록 하겠습니다.

처음 우리가 생각해야할 점은 "시뮬레이션이 왜 필요한가?"입니다. 위 페이지에서는 다음과 같이 설명하고 있습니다.

simulation is good to speed the software development lifecycle and implicitly to reduce project’s overall costs

드론에 들어가는 소프트웨어를 개발하고 있다고 생각해봅니다. 소프트웨어는 여러가지가 될 수 있습니다. 예를 들면 일정거리 이상 사용자와 멀어졌을 때 return to home하는 기능이라던지 제어 알고리즘 자체가 될 수도 있습니다. 바로 그 알고리즘을 여러분이 가지고 있는 드론에 적용시키고 비행을 하면 어떤 결과가 생길까요? test해보지 않았는데 과연 return to home할 수 있을까요? 높은 확률로 여러분의 드론을 잃어버리거나 다시는 사용 못하는 상태가 될 것 입니다. 지금은 단순히 드론이지만 전투기나 로켓이라고 생각해보시면 엄청난 돈이 test에 들어가는 겁니다. 실재로 미국에서 달에 갔던 아폴로를 개발할 때에는 실험하는데 천문학적인 돈을 사용했다고 알고 있습니다. 또한 드론을 가지고 있지 않은 경우라고 생각해보시면 관련 부품을 다 구매하고 기다리는 데만 해도 많은 시간이 걸립니다. 실재의 개발에는 이러한 이유가 적용되지 않을수도 있지만 이해는 도울 수 있습니다.

따라서 시뮬레이션을 할 수 있으면 소프트웨어 개발의 시간과 비용을 확연하게 줄여줄 수 있습니다. 또한 소프트웨어를 테스트하는데 안정성이 보장된다는 장점이 있습니다. 이렇게 시뮬레이션 하는 방법에는 두 가지가 있습니다. Software in the loop(SITL)와 hardware in the loop(HITL)입니다. 두 가지를 아예 따로 생각하기 보다는 같은 제품 개발과정에서 SITL을 한 다음에 HITL을 한다고 생각하시면 될 것 같습니다. 보통 HITL을 마친 후에 전체 시스템을 조립하고 실재로 테스트 해본다고 합니다.

두 방법의 중요한 차이는 소프트웨어를 가상의 임베디드 시스템에 올리는 건지 실재의(이 글에서는 pixhawk) 임베디드 시스템에 올리는 지의 차이입니다. 저희는 이 순서를 따라가면서 진행할 예정입니다. 이번 글에서는 가상의 보드를 통해서 gazebo에서 iris drone을 비행시켜보고, 다음 글에서는 실재 Pixhawk에 올려서 테스트 해보겠습니다.

2. Prepare for the Test
https://github.com/Jaeyoung-Lim/modudculab_ros
이 글의 마지막 부분에서부터 시작을 하겠습니다. 테스트하기 위해서 관련된 package를 설치하는 과정입니다.

첫 번째 줄만 살짝 바꾸어 주었습니다.

```bash
cd ~/catkin_ws/src
git clone https://github.com/Jaeyoung-Lim/modudculab_ros.git
catkin build modudculab_ros
```

패키지 설치가 완료되었다면 순차적으로 ROS를 구동시키면 되겠습니다. 일단 항상 기억하셔야 하는 건 ROS 를 사용하려면 첫 번째 해줘야하는 일은 roscore를 구동시키는 것입니다.

```bash
roscore
```
roscore를 구동시킬 때 다음과 같은 문제가 발생할 수 있습니다.

이 경우에는 처음에 설정해줬던 IP주소가 달라졌기 때문인데 터미널 창에서 지금 IP를 검색해서 설정파일에서 고쳐주고 다시 실행해주면 실행이 됩니다. 관련 내용은 제 2번째 포스팅을 참고 하시길 바랍니다.
http://www.modulabs.co.kr/board_GDCH80/1562

roscore를 실행한 후에 다른 터미널 창을 킨 다음에 gazebo를 실행시킵니다. 저희는 gazebo에 default로 등록이 되어있는 iris drone을 사용합니다. 3DR사의 드론으로 링크는 https://store.3dr.com/products/IRIS.

gazebo의 좋은 점은 실재 iris 드론의 물성치들이 다 입력이 되어있어서 좀 더 실재와 가까운 시뮬레이션이 가능하다는 것입니다. 가제보를 default로 실행시킵니다.

```bash
cd ~/catkin_ws/src/Firmware
make posix_sitl_default gazebo
```
그 다음에 처음에 다운받은 패키지의 launch파일을 실행시켜줘야 합니다.

```bash
roslaunch modudculab_ros ctrl_pos_gazebo.launch
```

3. Simulation of iris drone default
4.
```bash
roslaunch modudculab_ros ctrl_pos_gazebo.launch
```

다른 터미널 창을 열고 이제 iris drone을 arming시켜줍니다.

```bash
rosrun mavros mavsafety arm
```
arming이 완료되었으면 가상 보드를 작동시킵니다.


```bash
rosrun mavros mavsys mode -c OFFBOARD
```
미션은 hovering으로서 (0,0,1)위치에서 떠있으라는 명령을 주었습니다. 명령은 /src/modudculab_ros/src/pub_setpoint_pos.cpp에 다음과 같이 적혀있습니다.

이 명령을 받으면 iris drone이 다음과 같이 작동합니다.

gazebo가 상당히 좋은 점이 가상 보드로 사용하고 있는 픽스호크는 시뮬레이션에서 기압센서로 고도를 측정중인데 그 센서의 drift현상까지 표현하고 있다는 점입니다. 따라서 위와 같이 실행해놓고 시간이 좀 지나서 보면 더 위로 드론이 올라가 있는 것을 볼 수 있습니다.


4. Simulation of iris drone with optical flow sensor
http://dev.px4.io/simulation-gazebo.html
이 홈페이지에 보면 iris_drone default말고도 다른 여러가지들을 gazebo로 테스트 해 볼 수 있습니다.
다음에 해 볼 것은 Quadrotor with Optical Flow입니다. 고도측정에 사용되는 센서가 세 가지 정도인데 기압센서, 초음파센서, optical flow 센서입니다. 다음은 퓨처플레이 하드웨어 컨퍼런스에서 메모했었던 내용입니다.

기압센서 : 바람이 불 경우에 작동을 잘 하지 않는다

초음파센서 : 비행중에는 어렵다

optical flow sensor : 밑 바닥에 무늬가 없을 경우는 위치추정이 어렵다

optical flow에 대한 정의는 다음과 같습니다. https://en.wikipedia.org/wiki/Optical_flow

카메라의 이미지의 변화를 통해서 자신의 속도를 알 수 있게 해주는 센서인 것 같습니다. 즉 이전 프레임과 현재 프레임을 비교해서 각 포인트의 변화 벡터를 계산하는 형식입니다. 세계적으로 유명한 드론인 비밥드론 또한 이 센서를 사용하였습니다. 사실 저 위의 세 개의 센서를 다 사용하였습니다. http://www.parrot.com/usa/products/bebop-drone/


따라서 위에서 했던 과정에서 make posix_sitl_default gazebo 부분만 다음과 같은 명령어로 바꿔서 실행하면 기존의 iris drone에 optical flow 센서가 탑재가 되는 것인데 좀 더 고도가 정확하게 유지가 되게 됩니다.


```bash
cd ~/src/Firmware
make posix gazebo_iris_opt_flow
```

드론을 보면 뒤 쪽에 흰색이 뭔가 추가된 것을 볼 수 있는데 그게 optical flow센서입니다.


5. Altitude data comparison
실재로 데이터를 보면서 얼마나 차이가 있는지 보려고 합니다. 앞으로도 센서 데이터를 읽어오는 작업은 꼭 필요할 것이기 때문에 이 과정을 하고 넘어가도록 하겠습니다.

다시 처음으로 돌아가서 다음 명령어들을 차례로 실행시켜주고


```bash
roscore
make posix_sitl_default gazebo
roslaunch modudculab_ros ctrl_pos_gazebo.launch
rosrun mavros mavsafety arm
```
http://wiki.ros.org/ROS/Tutorials/Recording%20and%20playing%20back%20data
다음 명령어를 실행시켜주시면 현재 node사이에서 통신하고 있는 topic의 list를 볼 수 있습니다.


```bash
rostopic list -v
```

제가 기록하고자 하는 topic은 /mavros/local_position/pose 입니다. 파일이름은 -O 뒤에 적어주시고 기록하고자 하는 topic을 적어줍니다. 다음과 같은 명령어를 새로운 터미널 창에서 실행해주셔야 합니다.


```bash
mkdir ~/bagfiles
cd ~/bagfiles
rosbag record -O iris_default_1 /mavros/local_position/pose
```
그 다음에 비행모드를 OFFBOARD로 바꿔줘서 입력해 놓은 코드 대로 비행하도록 합니다.


```bash
rosrun mavros mavsys mode -c OFFBOARD
```
적당한 시간이 지난 후 record를 진행하던 터미널 창에서 ctrl+c로 record를 중지합니다. 그리고 다음 명령어를 실행해줍니다. info뒤에는 bagfiles폴더안에 기록된 파일의 이름을 적어주셔야 합니다.


```bash
rosbag info iris_default_1.bag
```
그 뒤에 다음 명령어를 실행시켜주었습니다.

rqt_bag

왼쪽 위에 빨간 점 옆의 열기버튼을 눌러서 기록한 파일을 열어주시기 바랍니다.

열기버튼 밑의 mavros/local_position/pos를 마우스 오른쪽 버튼으로 누르고 publish를 누르고 view의 plot을 눌러줍니다 그럼 위와 같은 화면이 나오는데 오른쪽 pose의 position중에서 z을 선택해주면 그래프가 plot이 됩니다. 이 것을 저장해주시기 바랍니다.


이제 optical flow sensor가 달린 iris drone도 마찬가지로 기록해줍니다.

```bash
roscore

cd ~/catkin_ws/src/Firmware
make posix gazebo_iris_opt_flow

roslaunch modudculab_ros ctrl_pos_gazebo.launch

rosrun mavros mavsafety arm

cd ~/bagfiles
rosbag record -O iris_optical_1 /mavros/local_position/pos

rosrun mavros mavsys mode -c OFFBOARD

rqt_bag
```

optical flow 센서만 사용했을 때 보다 더 정확하게 고도를 유지하고 있는 것을 볼 수 있습니다. 고도를 측정하는 센서 사이의 가중치도 qGroundControl로 조정할 수 있습니다.

## More about SITL
1. SITL의 구조와 MAVROS
저번 글에서는 SITL로 일정한 고도에 호버링하는 간단한 임무를 수행해보았습니다. 더 나아가기에 앞서 SITL이 어떻게 작동하는 지에 대해서 살펴 보려고 합니다. 다음은 PX4 documentation 페이지입니다.
http://dev.px4.io/simulation-sitl.html



위 그림과 같이 SITL은 MAVLINK라는 통신 프로토콜을 통해서 simulator에 연결합니다. 이것이 기본적인 세팅이고 SITL은 PX4에 들어있는 기능 중에 하나이기 때문에 위 그림에서 SITL을 PX4로 생각하고 simulator를 gazebo라고 생각하면 더 이해하기 쉬울 것 같습니다.

첫 번째 글에서 PX4와 mavlink와 ros와 mavros에 대한 개념을 살펴봤는데 그 상관관계는 다음과 같습니다.  간단하게 ROS가 Control center라고 생각하면 됩니다. attitude나 local position, acceleration 등의 명령을 주면 그것이 mavros라는 어떠한 다리를 통해 mavlink의 형태의 매시지로 px4에 전달이 되고 실재로 px4가 모터들을 컨트롤하고 또 반대로 센서데이터들은 mavros를 통해서 ros로 전달됩니다. 이렇게 control이 되는 것입니다. Pixhawk 보드에서 이 모든 것들을 작동시킬 수도 있겠지만 그렇게 할 경우 안전상의 문제도 있고 기능상의 문제도 생길 수 있습니다. 예를 들어서 ROS를 돌리다가 문제가 생길 경우에 픽스호크와 연결되어 있는 companion computer로부터 분리를 시키면 쿼드콥터 자체는 픽스호크만으로도 컨트롤 할 수 있기 때문에 추락하거나 하는 문제를 방지할 수 있습니다.

 따라서 현재는 노트북을 Companion Computer로 ROS를 실행시키지만 이후에는 라즈베리파이를 companion computer로 이용하여 pixhawk와 라즈베이를 같이 드론에 탑재해서 컨트롤 할 예정입니다.

이러한 상관관계속에서 원래라면 Pixhawk에서 PX4가 작동해야하는데 그러한 보드없이 가상보드에서 작동하는 것처럼 시뮬레이션하는 것이 SITL입니다. 즉 ROS에서 mavros를 통해서 명령을 px4에 전달하면 px4는 보드없이 gazebo라는 세상에서 ros의 명령을 실행하는 것입니다.

다음 그림은 SITL이 어떻게 통신하는 지를 보여주는 그림입니다.


SITL은 PX4자체의 앱중의 하나로서 처음에 PX4를 설치할 때 함께 설치됩니다. 저희는 JMAVSim대신에 Gazebo를 사용했습니다. 이 그림에서는 ROS가 따로 표시되지는 않았습니다. 들어간다면 PX4와 Mavros로 연결되는 형태로 들어갈 것입니다. qGroundConrtol은 뒤에서 Pixhawk 보드 설정할 때 다룰건데 PX4를 픽스호크 보드에 업로드하고 센서 칼리브레이션 등 여러가지 필요한 것들을 간편하게 할 수 있도록 해줍니다. Controller은 픽스호크보드에 연결된 리시버를 통해 들어오는 조종기의 값들을 의미하는 것이고 그래서 "RC channels"라고 적혀있는 것을 알 수 있습니다. 이 통신은 Serial 통신을 이용하고 있습니다.

현재 ROS는 TCP/IP를 통해서 노드끼리 통신하는데 PX4내부에서는 UDP로 통신하는 것을 볼 수 있습니다. UDP란 User Datagram Protocol을 지칭하는 말인데 TCP/IP는 상대방과 페어링이 되어야 통신이 되는 반면, UDP는 그러지 않아도 되기 때문에 데이터의 유실이 가능한 방식입니다. 자세한 설명은 위키피디아를 참조하시면 될 것 같습니다.(이 부분은 아직 잘 모릅니다) ROS 2에서는 UDP를 사용할 거라고 합니다.
https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9A%A9%EC%9E%90_%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B7%B8%EB%9E%A8_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C



2. Trajectory control
저번 글에서 SITL에서 position control을 했었는데 trajectory control도 한 번 해보겠습니다.
/home/src/modudculab_ros/src/pub_setpoints_traj.cpp를 열어주시면 다음과 같이 trajectory가 적혀있습니다.

```bash
roscore

cd ~/src/Firmware
make posix gazebo_iris_opt_flow

roslaunch modudculab_ros ctrl_pos_gazebo.launch

rosrun mavros mavsafety arm
```
위 과정에서 launch하는 과정만 바꿔주면 됩니다.

```bash
roslaunch modudculab_ros ctrl_traj_gazebo.launch
```

실행시켜보시면 위 사진과 같이 높이 2미터에서 원운동을 합니다. 단순히 원의 방정식만 명령으로 줬을 뿐인데 드론이 원의 궤도를 따라 움직이는 것을 볼 수 있는데 바로 이것이 ROS의 장점이라고 할 수 있습니다.이 이외에도 여러가지 다른 trajectory를 해 볼수 있겠지만 이 글에서는 간단하게 이 정도만 다루고 넘어가도록 하겠습니다.

SITL의 구조를 간단하게 살펴보았고 trajectory control까지 진도를 나가봤습니다. 여기서 더 나가기 전에 앞으로도 계속 사용할 ROS와 PX4의 구조에 대해서 알 필요가 있을 것 같습니다.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

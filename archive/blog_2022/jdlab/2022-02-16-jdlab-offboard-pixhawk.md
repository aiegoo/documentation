---
layout: post
title: "offboard control using pixhawk raspi mavros"
name: "jdlab-offboard-pixhawk"
tags: [jdlab]
tagName: jdlab
permalink: 2022-02-16-jdlab-offboard-pixhawk.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "pixhawk ros hitl gcs px4 mavros raspi"
summary: "Wed, Feb 16, 22, hitl setup and configuraiton using pixhawk raspi mavros and px4"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-02-16T04:30:16 +0900
updated: 2022-02-16 04:30
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Off-board Control (1) Pixhawk
1. Off-board Control
http://www.modulabs.co.kr/board_GDCH80/2961
위 글에서 언급했듯이 저희가 하려는 것은 mavros를 통해서 PX4와 ROS를 연결하고, 그로 인해 offboard control을 하는 것입니다.
![image](https://user-images.githubusercontent.com/48428378/154154874-674503de-bfc9-4a85-8844-d9dd0c80daa1.png)

위 그림 중에서 modular approach를 하려고 합니다. 라즈베리파이에 이전에 ROS설치했던 것처럼 동일하게 설치하고 그 라즈베리파이와 PX4 flgiht stack이 설치된 pixhawk를 연결해서 자율주행을 할 계획입니다. 라즈베리파이와 연결해서 사용하기 전에 pixhawk보드에 먼저 PX4를 설치를 하고 Pixhawk로만 비행을 해 보도록 하겠습니다.



2. Pixhawk 보드 설치
https://pixhawk.org/

Pixhawk에 대해서 Pixhawk 홈페이지를 참조해주시길 바랍니다.
https://pixhawk.org/

이 프로젝트를 하기 전에 아두이노 우노와 나노로 450mm frame 쿼드콥터를 만드는 과정 중에서 쿼드콥터에서 아두이노만 빼서 그대로 Pixhawk를 달고 사용하려고 합니다. Pixhawk는 준비되어 있다고 생각하겠습니다. (주문하고 배송오는 데만 시간이 많이 걸릴 겁니다.)

아두이노 드론을 만들 때 구매했던 부품 리스트는 다음과 같습니다.

- 
- Frame
- BLDC motor
- Propeller
- ESC
- Battery
- Battery Charger
- Power distribution board
- Mirco controller(Arduino)
- Gyro sensor(+Accelerometer)
- Transmitter(+receiver)

위 리스트에서 8번과 9번을 빼고 Pixhawk를 넣으면 되겠습니다. Pixhawk는 보통 세트로 오기 때문에 그 안에 텔레메트리도 있고 GPS도 있고 여러가지가 추가로 들어있습니다. 구매했던 링크는 다음과 같습니다.

해외(하비킹) http://www.hobbyking.com/hobbyking/store/index.asp

- Frame : Hobbyking SK450 Glass Fiber Quadcopter Frame 450mm 1개
- Motor : Turnigy Aerodrive SK3 - 2826-1240kv Brushless Outrunner Motor 4개
- ESC : Afro ESC 30Amp Multi-rotor Motor Speed Controller (SimonK Firmware) 4개
- Propeller : Hobbyking™ Propeller 10x4.5 White (CW) (4pcs) 1개
- Hobbyking™ Propeller 10x4.5 White (CCW) (4pcs) 1개
- Power distribution board : Hobby King Octocopter Power Distribution Board 1개
- Battery : Turnigy nano-tech 2200mah 3S 35~70C Lipo Pack 2개
- Battery Charger : IMAX B6AC V2 Professional Balance Charger/Discharger

프로펠러나 배터리같은 건 여분을 구매하시는 것이 좋고 모터랑 ESC와 배터리 프로펠러는 서로 맞는 것을 구매해야 해서 임의로 구입하지 말고 이미 검증된 조합을 구매하시는 것이 좋습니다. 위의 조합도 하비킹 직원에게 문의해서 나온 조합입니다.

조립하면 밑과 같이 되는데 조립하는 과정에 대해서는 간단하게 정리해놨던 글이 있습니다.
http://www.whydsp.org/343



여기에 Pixhawk를 설치해주시면 됩니다.

부품리스트는 다음과 같습니다.
Package Included:

- PX4 V2.4.7 Flight board x1
- safety switch x1
- Buzzer x1
- Original Case x1
- 4GB SD Card x1
- SD Card Adapter x1
- External LED light board X 1
- PPM Module w/ shell x1
- Pixhawk-I2C Splitter Expand Module X 1
- Neo-M8N Gps Module x1
- Black Gps Holder x1
- Power Module x1
- Minim OSD w/ shell x1
- 433 telemetry w/ shell x1
- DF13 4Pin Cable x1
- DF13 5Pin Cable x1
- DF13 6Pin Cable x1
픽스호크 보드 자체의 세부 사항은 다음과 같습니다.

### Processor

- 32bit STM32F427 Cortex M4 core with FPU
- 168 MHz
- 256 KB RAM
- 2 MB Flash
- 32 bit STM32F103 failsafe co-processor
- Sensors
- ST Micro L3GD20H 16 bit gyroscope
- ST Micro LSM303D 14 bit accelerometer / magnetometer
- MEAS MS5611 barometer

위 부품 리스트 중에서 픽스호크 보드에 GPS, buzzer, switch, power module, ppm module을 연결해주고 각 각 리시버, esc를 연결한 후에 쿼드콥터 프레임 위에 올려줍니다. 아래 왼쪽 그림에서 맨 왼쪽에 RC 부분에 PPM encoder를 연결해주시면 됩니다. 밑의 오른쪽 그림이 픽스호크에 PPM encoder와 ESC선들을 연결한 사진입니다. 세 줄이 있는데 제일 위 줄은 ground이고 두 번째 줄은 +이고 세 번째는 signal선입니다. 그거에 맞춰서 RC라고 써져있는 곳에 PPM encoder를 연결하고 Mainout 1,2,3,4에 ESC를 연결해주면 됩니다.

![image](https://user-images.githubusercontent.com/48428378/154154935-d1e8a273-1832-4e2f-8d0d-727147f3943a.png)




ESC를 연결하실 때 어떤 모터가 1번인지 어떤 모터가 4번인지 알아야합니다. 3D robotics의 사진을 참고해주시면 됩니다. 다른 쿼드콥터와는 달라서 헷갈리기 때문에 정확히 보시고 연결해주세요
http://www.dronetrest.com/t/pixhawk-flips-over/718
![image](https://user-images.githubusercontent.com/48428378/154154978-f69f2743-a9d4-4318-b90d-22ef3e3ccf87.png)

밑의 그림은 Pixhawk 보드의 포트 정보입니다. 참고하시면 되겠습니다.

![image](https://user-images.githubusercontent.com/48428378/154155019-c9a717c5-7622-4321-a05f-bcaf3486be3f.png)

1. Qgroundcontrol 설치
이렇게 설치가 완료되면 USB선으로 밑의 사진과 같이 컴퓨터와 픽스호크를 연결해줍니다.

이렇게 하드웨어를 준비해준 다음에 이제 소프트웨어를 준비해줍니다. 픽스호크에 올라가는 펌웨어가 PX4 flight stack이라고 말했었는데 그 PX4를 업로드하기도 하고 여러가지 쿼드콥터의 설정들(센서 칼리브레이션, 조종기 칼리브레이션, 채널 설정 등)을 할 수 있는 Qgroundcontrol을 설치하셔야 합니다. Qgroundcontrol의 홈페이지는 다음과 같습니다.
http://qgroundcontrol.org/

다음 페이지에서 linux버전을 클릭하면 다운로드가 되는데 압축파일이 다운로드가 됩니다. 다운로드가 완료가 되면 위치를 하나 정해서 압축을 풀어주시고 그 폴더안의 start.sh파일을 실행해 주시면 됩니다. https://donlakeflyer.gitbooks.io/qgroundcontrol-user-guide/content/download_and_install.html#rcbuilds
![image](https://user-images.githubusercontent.com/48428378/154155082-5effbae2-d232-4f94-9abb-75fa8713b965.png)

우분투에서는 여기에 additional package를 설치해줘야합니다. 관련페이지는 다음과 같고 명령어는 밑과 같습니다. https://github.com/mavlink/qgroundcontrol

`sudo apt-get install espeak libespeak-dev libudev-dev libsdl1.2-dev`
실행할 때에는 qgroundcontrol 폴더 내에서 다음과 같은 명령어를 실행해줍니다.

```bash
cd ~/qgroundcontrol
bash qgroundcontrol-start.sh
```
만약 여기서 에러가 생기면 다음 페이지들을 참조해주세요

* 해결 방법 1. http://askubuntu.com/questions/616517/dev-ttyacm0-permission-denied-error
* 해결 방법 2. http://websistent.com/fix-serial-port-permission-denied-errors-linux/ * 해결 방법 2 이후에는 reboot 를 해주어야 함.

정상적으로 실행이 되면 다음과 같은 화면이 나옵니다. 이제 Qgroundcontrol를 통해서 pixhawk 설정을 해보도록 하겠습니다.

![image](https://user-images.githubusercontent.com/48428378/154155118-76979c2a-49d6-4d36-b0ca-3fdd2eaa7232.png)




4. Configrations and Calibration
(1) PX4 flight stack 설치
설정을 들어가서 Firmware부분으로 들어가면 다음과 같은 화면이 나옵니다. 글을 읽어보면 USB선을 뺐다 다시 꽂으라고 되어있습니다. 그대로 해주면 오른쪽에 Firmware를 선택할 수 있습니다. 저희는 PX4 Flight Stack를 선택하고 OK를 눌러줍니다.


(2) 프레임 선택
제가 사용하고 있는 프레임은 quadcopter X이고 그 중에서 450mm 프레임을 선택하면 얼추 맞기 때문에 DJI Flame Wheel F450을 선택해주었습니다.


![image](https://user-images.githubusercontent.com/48428378/154155139-d6eca0e1-1169-4c79-a065-66954989a75e.png)



(3) Radio설정
현재 리시버와 트랜스미터를 연결한 상황에서 트랜스미터(조종기)를 캘리브레이션해주는 단계입니다. 친절하게 설명이 계속 나오므로 그 설명대로 해주시면 됩니다.
![image](https://user-images.githubusercontent.com/48428378/154155150-d5c9d37c-3874-408f-afda-35edcd67179a.png)


(4) 센서 캘리브레이션
Compass, Gyroscope, Accelerometer, Level Horizon 네 개를 calibrate 해줘야하고 하나씩 클릭해서 진행하시면 됩니다.
![image](https://user-images.githubusercontent.com/48428378/154155168-f46328a4-0cdc-4d65-8e8e-1c787930a71a.png)

Compass : 아래 그림처럼 쿼드콥터의 자세를 잡고 회전표시가 나오면 회전해주면 됩니다. 나머지 세 개도 각각 클릭해서 진행해주시면 되는데 각각 살짝 달라서 지침을 잘 읽고 그대로 따라 주시면 캘리브레이션이 완료됩니다.
![image](https://user-images.githubusercontent.com/48428378/154155188-b533ca1f-3029-447a-b3d1-f51bf2549fef.png)

(5) Flight Mode 설정
http://www.moses-modellbau.de/mediafiles/Anleitungen/DEVO/Manual%20of%20DEVO-7.pdf
보통 조종기에서는 조종기 위쪽 버튼을 통해서 여러가지 mode들을 선택할 수 있습니다. 예를 들면, auto takeoff, landing, return to home등의 기능들입니다. 저는 Gear button을 사용해서 ROS로 드론을 컨트롤 하는 모드와 손으로 조종하는 모드를 왔다갔다 하려고 합니다.  
![image](https://user-images.githubusercontent.com/48428378/154155299-0b959906-3d69-46a1-9d0f-4d407fa1a12b.png)


저는 GEAR가 channel 5이고(radio test할 때 그렇게 나옵니다) 따라서 Flight mode channel에 channel 5를 사용하고 Flight Mode 1에는 Stabilized를 선택하고 Flight Mode 2에는 offboard를 선택해줍니다. 그리고 오른 쪽"Switch Settings"에서는 세 번째 offboard switch channel에서 Channel 5를 선택해주면 Gear버튼을 위로 올리고 내리는 것에 따라서 손으로 조종하다가도 off board모드로 들어가서 라즈베리 파이에 있는 명령들로 쿼드콥터를 자율주행 시킬 수 있습니다.
![image](https://user-images.githubusercontent.com/48428378/154155335-523f28ab-9b05-4575-999c-d4b58e551711.png)


(6) ESC Calibration
Qgroundcontrol에서 ESC 칼리브레이션은 상당히 간단합니다. 왼쪽의 Power탭으로 들어가서 Calibrate를 눌러주면 battery를 연결해주라는 지침이 나옵니다. 그러면 끝입니다.

![image](https://user-images.githubusercontent.com/48428378/154155357-df937efb-bf29-4add-a691-10b945763c93.png)


5. Arming
이제 비행을 하기 위한 준비는 다 끝났습니다. Arming이라는 단어가 있는데 안전을 위한 장치라고 보시면 될 것 같습니다. 자동차에서도 키를 꼽고 돌려야 시동이 걸리듯이 쿼드콥터에서도 어떠한 행동을 해줘야 쿼드콥터로 비행을 할 수 있습니다. 보통은 조종기에서 Throttle 스틱을 오른쪽 밑으로 해주면 Arming이 되도록 설정되어있는데 Firmware마다 다를수가 있습니다. PX4가 업로드 되어있는 Pixhawk에서는 배터리를 연결하고 컴퓨터와는 연결하지 않은 상태에서 safety switch를 몇 초간 눌러주고 그 다음에 조종기에서 throttle stick을 오른쪽 밑으로 유지하면 arming이 되면서 네 개의 모터가 돌게 됩니다. arming이 될 때 왜 모터가 도는 지 의아해하는 분들이 계실 수도 있는데 모터가 돌지 않으면 arming이 되었는지 알 수 없기 때문에 쿼드콥터가 뜨지 않을 정도만 돌게 해주는 것입니다. SITL에서도 잘 보면 arming이라는 command를 주면 쿼드콥터의 프로펠러들이 도는 것을 볼 수 있었습니다.




6. Test Flight
Pixhawk가 제대로 설정이 되었고 비행이 가능한 지 확인하기 위해서 실재로 낮은 고도로 비행시켜 보았습니다. 450 Frame으로 PID계수가 맞춰져있어서 Tunning안해줘도 잘 날지만 날려본 다음에 진동을 보고서 P나 I gain을 바꿔주는 것이 좋습니다. 저는 Stabilized 모드로 비행을 했습니다. 다음 사진과 같이 쿼드콥터를 세팅해놨습니다.


https://www.facebook.com/100004068281468/videos/917401101738824/

비행 동영상 링크는 위와 같습니다.

## Off-board Control (2) Raspberry Pi

### 1. Off-board Control
쿼드콥터를 자율주행하기 위해서 Pixhawk와 Raspberry Pi를 이용할 것 입니다.Pixhawk에는 PX4 flight stack이, Raspberry Pi에는 ROS가 설치됩니다. 두 Module이 Mavlink라는 통신 프로토콜을 통해 서로 통신하면서 픽스호크는 제어를 하게 되고 라즈베리파이는 offboard control을 하게 됩니다.

따라서 전 글에서는 Pixhawk보드를 설정하고 쿼드콥터를 날리기 위한 준비를 했었습니다. 이제는 Offboard control을 위해서 Raspberry Pi를 설정해줘야합니다. 해야할 일은 다음과 같습니다.

라즈베리파이에 Ubuntu 16.04 Mate설치
라즈베리파이에 ROS kinetic설치
위 과정을 수행하기 전에 라즈베리 파이가 무엇인지, 그리고 라즈베리 파이를 사용하기 위한 기본적인 세팅을 살펴보겠습니다.



### 2. Raspberry Pi
[wiki](https://namu.wiki/w/%EB%9D%BC%EC%A6%88%EB%B2%A0%EB%A6%AC%20%ED%8C%8C%EC%9D%B4(%EC%BB%B4%ED%93%A8%ED%84%B0)   라즈베리파이란 영국 라즈베리 파이 재단에서 만든 초저가/초소형 PC입니다. 교육용 프로젝트의 일환으로 개발되었습니다. 아두이노와 함께 교육용 플랫폼의 대표 주자입니다. 아두이노와는 달리 정말 컴퓨터처럼 사용될 수 있습니다. 그렇게 컴퓨터처럼 사용되려면 몇 가지가 필요합니다.

모니터, 키보드, 마우스, 전원선, HDMI케이블, SD card

필요한 것들을 다 연결한 상태는 다음과 같습니다. 이제 라즈베리 파이에 올라갈 OS를 설치해보도록 하겠습니다.

![image](https://user-images.githubusercontent.com/48428378/154155459-9053d4f2-d061-43c1-8bb9-09a818f30b60.png)



### 3. 라즈베리파이에 Ubuntu 16.04 MATE 설치
https://ubuntu-mate.org/raspberry-pi/
Ubuntu 중에서도 라즈베리파이에 설치할 OS는 Ubuntu-MATE입니다(설치하고 나서 정식 우분투가 라즈베리파이3를 지원한다는 것을 알았습니다 문제 생기면 그 때 다시 설치하려 합니다) 데스크탑에 우분투를 설치할 때와 마찬가지로 이미지파일을 받아서 압축을 풀고 이번에는 라즈베리파이의 SD card에 이미지파일을 구워주고 그 SD card를 라즈베리파이가 꽂아주면 됩니다. 원래는 라즈베리파이 1에 라즈비안이라는 OS를 사용하고 있었는데 Mavros가 설치되지 않는 문제가 있어서 라즈베리파이 3를 구매하고 우분투를 설치하기로 했습니다.(우분투는 라즈베리파이 2부터 지원이 됩니다)

우분투 메이트 다운로드는 위 홈페이지에서 하시면 됩니다. 이미지 파일을 구워주는 것은 Win32 disc manager를 사용하였습니다.

SD 카드를 라즈베리파이에 꽂으면 다음과 같은 화면이 나옵니다.
![image](https://user-images.githubusercontent.com/48428378/154155495-f1b36a1f-c716-4707-87a4-eb42f71e7134.png)

![image](https://user-images.githubusercontent.com/48428378/154155511-3018de54-6bb1-4b68-bd5b-a20a3fad2f0a.png)

데스크탑에 설치할 때와 마찬가지로 언어(영어)를 선택해주고 살고 있는 도시인 Seoul를 입력해주면 설치가 시작됩니다.  
![image](https://user-images.githubusercontent.com/48428378/154155549-a0aea5bb-4d42-4a9e-83e6-5a15eaff8d8b.png)
![image](https://user-images.githubusercontent.com/48428378/154155574-a2960a43-4d7e-4e6d-b12c-001bfa0225b4.png)


MATE에서는 따로 파티션을 지정해주는 단계가 없습니다. 이렇게 Raspberry Pi 3에 Ubuntu 16.04 MATE를 설치 완료했습니다. 대신에 resize를 해줘야합니다. 처음 MATE가 실행되고 켜지는 창에서 저 빨간색을 선택하면 resize를 할 수 있는 항목이 있습니다. https://www.raspberrypi.org/magpi/ubuntu-mate-review/



### 4. 라즈베리파이에 ROS Kinetic 설치
ROS설치에 대해서는 ROS wiki를 참조해주시는 것이 가장 좋습니다. 링크는 다음과 같습니다.
http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Kinetic%20on%20the%20Raspberry%20Pi

Wifi를 연결하고 위 링크에 있는 명령어들을 순서대로 실행해주면 됩니다. 명령어들만 나열해 보겠습니다.
```bash
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 0xB01FA116
sudo apt-get update
sudo apt-get install ros-kinetic-desktop
sudo rosdep init
rosdep update
sudo apt-get install python-rosinstall
echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
source /opt/ros/kinetic/setup.bash
source /home/leewoongwon/ros_catkin_ws/devel/setup/bash
mkdir -p ~/ros_catkin_ws/src
cd ~/ros_catkin_ws/src
catkin_init_workspace
```
위와 같이 ROS Kinetic 완료한 후에 데스크탑에서 설치했던 때와 같이 ROSCORE를 구동시켜봅니다.
![image](https://user-images.githubusercontent.com/48428378/154155688-2da7cabc-b117-4fc4-8672-5a6475528175.png)

ROSCORE가 문제없이 잘 실행되면 거북이 예제를 실행해봅니다.

rosrun turtlesim turtlesim_node
![image](https://user-images.githubusercontent.com/48428378/154155740-fdcddf1e-9a78-40fe-b01e-4831d8257cb1.png)


rosrun turtlesim turtle_teleop_key
다른 창에서 키 노드를 활성화시켜서 키보드로 거북이를 움직여봅니다. 이로서 ROS Kinetic이 설치 완료 되었습니다.

여기까지 라즈베리파이에 Ubuntu와 ROS 설치하는 것을 살펴 보았습니다.


## Off-board Control (3) Mavros

### 1. 라즈베리파이에 Mavros 설치
sudo apt-get update
sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras
이 두 줄을 실행시키면 MAVROS가 설치가 됩니다.



### 2. modudculab_ros 설치
이제 Offboard Control을 위한 modudculab_ros package를 설치해줍니다. Package를 설치하려면 Package를 Build를 해야하는데 catkin build 명령어는 catkin_tools 패키지 안에 있습니다. 따라서 그 패키지를 설치해줘야합니다. http://answers.ros.org/question/207433/catkin-build-gives-command-not-found/

sudo apt-get install python_catkin_tools
https://github.com/Jaeyoung-Lim/modudculab_ros
그 후에 다음 명령어들을 실행해주시면 됩니다.

cd ~/ros_catkin_ws/src
git clone https://github.com/Jaeyoung-Lim/modudculab_ros.git
catkin build modudculab_ros
source /home/leewoongwon/ros_catkin_ws/devel/setup/bash

![image](https://user-images.githubusercontent.com/48428378/154155781-96d689f2-9f80-4fa6-8463-2f8f62f686f0.png)

이제 설치된 ROS 패키지를 통해 픽스호크에게 명령을 주기 위해 두 보드를 연결해야 합니다.


### 3.Pixhawk와 Raspberry Pi의 연결
(1) GPIO
아래 사진과 같이 Pixhawk의 Telem2 포트와 Raspberry Pi의 GPIO핀을 연결해야 합니다. 원래 Telemetry 포트는 지상국과의 연결을 하는 안테나를 연결하는 포트이고 그 안테나를 통해서 지상국(예를 들면 데스크탑)과 MAVLINK로 통신하는 것입니다. 아래 사진은 임재영님이 연결하신 방법입니다.
![image](https://user-images.githubusercontent.com/48428378/154155828-2d6a325a-8770-4968-b673-3f0b75755611.png)

각 연결선들이 무엇을 연결한 건지 아래 그림을 보면 알 수 있습니다. 하지만 이 방법같은 경우에는 Baudrate에 제한이 있어서 저는 usb to ttl 포트를 사용하였습니다. http://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html
![image](https://user-images.githubusercontent.com/48428378/154155905-13762016-6e6c-4ca3-b9f5-5e25d297ada9.png)

(2) USB to TTL 이 연결 같은 경우에는 따로 모듈을 하나 구매하셔야 합니다. 연결은 첫 번째 사진과 같이 하면 되고 실재로는 밑의 사진과 같이 사용하고 있습니다.

![image](https://user-images.githubusercontent.com/48428378/154155919-63b2392f-6072-42c4-b301-28158dcd0ae0.png)



### 3. MAVROS test
Mavros를 돌려보고 픽스호크로부터 토픽을 받아오는 것을 실행함으로서 라즈베리파이와 픽스호크의 연결을 테스트해보려고 합니다.

그 전에 픽스호크의 설정을 바꿔줄 것이 있습니다. 노트북에서 Qgroundcontrol을 실행시켜줍니다.

cd qgroundcontrol
bash qgroundcontrol-start.sh
메뉴 중에서 Parameters로 들어가서 System으로 들어갑니다. 밑의 그림에서 SYS_COMPANION이 companion컴퓨터와의 연결을 설정하는 것입니다. 저 부분을 눌러서 Companion Link(921600 baudrate 8N1)을 선택해줍니다. GPIO핀에 연결한 경우에는 이 baudrate를 사용할 수 없습니다.
![image](https://user-images.githubusercontent.com/48428378/154155975-b18cb897-7a7f-4f93-94a4-d0df02fef8cd.png)

다시 라즈베리파이로 돌아와서 Mavros를 구동하기 전에 Permission문제를 해결해줘야 합니다. 픽스호크와 연결되어 있는 USB포트를 확인해봅니다. 터미널 창에서 다음을 실행해주면 그 정보를 확인할 수 있습니다.

ls /dev/ttyUSB*
저는 /dev/USB0라는 결과가 돌아옵니다. 그러면 이제 터미널 창에서 다음을 입력해줍니다. 그러면 이후에 있을 permission 문제가 해결됩니다.

sudo chmod 666 /dev/ttyUSB0
Master를 실행시킵니다.

roscore
이제 Mavros를 실행시켜줍니다.
![image](https://user-images.githubusercontent.com/48428378/154156000-b0518e4f-4ba1-4273-997d-c1fecb989444.png)

rosrun mavros mavros_node _fcu_url:="/dev/ttyUSB0:921600"
Screenshot at 2016-07-29 01_32_16.png

노드 그래프를 실행시켜봅니다. 현재는 mavros 노드 하나만 있는 것을 볼 수 있습니다.

rqt_graph
![image](https://user-images.githubusercontent.com/48428378/154156026-c1eb4410-ef56-415f-8454-7de01b365e61.png)


Mavros를 통해 받아온 픽스호크의 데이터를 확인해봅니다. topic monitor에서 각각의 토픽을 통해서 데이터가 오는 것을 확인할 수 있습니다.

rqt
![image](https://user-images.githubusercontent.com/48428378/154156053-b8ea70d2-e5fc-47f8-b4ca-1f928d0d4c21.png)



### 4. modudculab_ros package test
modudculab_ros 패키지 안에서 Position control로 테스트 해 볼 겁니다. /ros_catkin_ws/src/modudculab_ros/launch안에 있는 ctrl_pos_gazebo.launch파일을 수정해줍니다. 3번 째 줄을 다음 그림과 같이 "dev/ttyUSB0:921600"으로 수정해줍니다.
![image](https://user-images.githubusercontent.com/48428378/154156108-aac87c8d-4f02-49ed-b145-b1cdcb6ac4a2.png)

roslaunch명령어를 통해서 실행해줍니다.

roslaunch modudculab_ros ctrl_pos_gazebo.launch
다음과 같이 실행이 됩니다.
![image](https://user-images.githubusercontent.com/48428378/154156123-0f23056f-7ae6-4acd-bcb9-7f6e71617020.png)

이제 위에서와 마찬가지로 node graph와 topic data들을 확인해줍니다.
![image](https://user-images.githubusercontent.com/48428378/154156145-58da15b3-066f-4f56-957b-00ed904ac270.png)

위와 같이 실행이 되면 성공한 것입니다. 노드 2개가 활성화되어 있으며 position의 명령을 주고 있습니다. 그 명령은 밑의 사진에서 /mavros/setpoint_position/local안에 pose/position z좌표 보면 1의 명령이 들어가고 있는 것을 볼 수 있습니다.
![image](https://user-images.githubusercontent.com/48428378/154156162-4bb78f09-a5ec-4ceb-a88e-15c3cbd9e5a9.png)

## Off-board Control (4) Test Flight
지금까지의 내용을 정리해보자면 저희가 하려는 것은 Pixhawk와 Raspberry Pi를 사용한 자율주행입니다. 쿼드콥터 자체의 low-level control은 Pixhawk보드에서 PX4 flight stack이라는 앱이 맡아주고 Raspberry Pi에서는 mavros를 통해서 position이나 trajectory같은 명령을 PX4에 줌으로서 드론이 스스로 비행을 하게 됩니다. 따라서
(1) 첫 번째로는 Pixhawk 보드를 세팅하고 그 자체로만 비행하는 것을 해보고
(2) 라즈베리파이에 ROS를 설치하고
(3) 둘 사이를 mavros로 연결하게 됩니다.
그리고 실재로 하드웨어적인 준비를 하고 실재로 여러 단계에 걸쳐서 시험 비행을 하게 됩니다. 따라서 이번 글의 순서는 다음과 같습니다.

Pixhawk와 Raspberry Pi의 연결
Raspberry Pi의 전원
Raspberry Pi의 Wifi 연결
Pixhawk의 flight mode 설정
Trajectory node
Test flight
### 1. Pixhawk와 Raspberry Pi의 연결
픽스호크와 라즈베리 파이의 연결은 저번 글에서도 언급했었습니다. 픽스호크의 Telem2 port(원래는 Ground Station과 통신하려는 포트, 안테나를 연결해서)에 라즈베리 파이를 연결하는 두 가지 방법이 있습니다. (1) USB port를 통해서 연결하는 방법과 (2) GPIO pin을 통해서 연결하는 방법이 있습니다.

(1) USB Port
아래와 같이 Telem 2 port와 라즈베리파이의 USB port를 연결해주는 모듈이 필요합니다. 인터넷에 USB to ttl이라고 검색해서 나오는 것을 사시면 됩니다. 저는 예전에 arduino micro를 사용하기 위해서 구매 해놓았던 micro USB to UART 모듈을 사용하였습니다. 밑 사진 중에서 왼쪽이 픽스호크와 라즈베리파이의 연결을 확인할 때 연결했 던 것이고 오른쪽이 실재로 비행을 하기 위해서 아예 납땜으로 모듈화 시켜버린 사진입니다. 연결은 아래 사진을 보시고 하시면 됩니다. (빨간선은 필요없습니다)
![image](https://user-images.githubusercontent.com/48428378/154156265-7f885a29-179d-4088-8df6-db64ce280345.png)

(2) GPIO pin
위와 마찬가지로 Telem2 port와 Rx, Tx, GND, (VCC)를 연결하면 되는데 이 연결의 경우는 Baudrate가 제한되기 때문에 추천하는 방법은 아닙니다. 대신에 VCC로 라즈베리파이의 5V를 바로 연결할 수 있는 장점이 있지만 그것도 위험한 방법이기 때문에 추천드리지 않습니다.



### 2. Raspberry Pi의 전원
현재 픽스호크는 Battery에서 Power module로 전원을 받아오고 있습니다. 라즈베리파이도 전원이 필요한데 5V의 정격전압이 필요합니다. 이것은 네 가지 정도의 방법이 있습니다.
![image](https://user-images.githubusercontent.com/48428378/154156322-43e201d8-6332-49bb-b5b9-519e6a4d449a.png)

(1) Telem2 port의 5V의 전원을 받아와서 라즈베리파이의 Power in micro usb port로 연결하는 방법
(2) ESC의 BEC에서 5V를 받아와서 라즈베리파이의 Power in으로 전원을 공급하는 방법
(3) 별도의 보조배터리를 통해서 라즈베리파이에 Power in 포트에 전원을 공급하는 방법
(4) 라즈베리파이에 GPIO핀에 5V를 공급하는 방법
사실은 픽스호크와 라즈베리파이의 전원이 완전히 분리되는 것이 가장 안전하고 좋은데 그러면 쿼드콥터의 무게가 증가하고 저 같은 경우는 별도의 보조배터리를 놓을 공간이 없어서 (1) 방법을 택했습니다. (4)번은 위에서도 언급했듯이 추천하지 않는 방법입니다.

(1) Telem2 port의 5V의 전원을 받아와서 라즈베리파이의 Power in micro usb port로 연결하는 방법
아래 왼쪽 사진처럼 micro usb선을 자르면 4개의 선이 나오는 데 전원을 공급하려는 것이기 때문에 검은색과 빨간색 선만 필요합니다. 검은색 선은 GND로서 픽스호크와 라즈베리파이의 통신에 사용되었던 USB to ttl 모듈의 GND에 연결해주었고 빨간색(VCC)선은 Telem2 포트의 5V 핀에 연결해주었습니다. http://comterman.tistory.com/1000

![image](https://user-images.githubusercontent.com/48428378/154156358-f7dbdda2-feda-41cb-9854-0e32df08b59d.png)


###  3. Raspberry Pi의 Wifi 연결
Off-board Control은 라즈베리 파이에서 roscore와 node(trajectory or positon)가 실행되고 있어서 mavros를 통해서 픽스호크에 명령을 보내고 있다가 조종기를 통해서 Off board mode에 들어가면 그 명령이 실행되는 형태로 됩니다. 따라서 라즈베리파이에서 roscore와 node를 실행해주어야 하는데 그 방법으로 저희는 wifi 공유기를 가져가서 노트북으로 라즈베리파이에 연결해서 roscore와 node를 실행해주었습니다. 그 이외에도 라즈베리파이에 전원이 들어오면 바로 정해진 것들이 실행되도록 설정을 해줄수도 있다고 합니다(해보지 않았습니다) 다음과 같은 공유기를 들고 나갔습니다. 현재 라즈베리파이 3에는 wifi module이 내장되어 있는데 통신 거리가 짧아서 wifi 동글을 달아주시는 것이 좋습니다.

![image](https://user-images.githubusercontent.com/48428378/154156412-578fe4fc-7bd4-45ca-af4a-c32ca6fc130f.png)


wifi로 라즈베리파이에 접속하기 위한 프로그램으로 Putty를 사용하였습니다. 다음 페이지를 참고해서 진행하였습니다. http://thdev.net/555

(1) ssh 설치
sudo apt-get install ssh
(2) putty 설치
sudo apt-get install putty
(3) putty 실행
putty
(4) Raspberry Pi의 IP 주소 확인
ifconfig
.png) wlan0의 inet addr입니다.

(5) Putty에 session 등록
IP주소를 입력하고 이름은 원하는 대로 작성하시고 Save를 해주시면 됩니다.
![image](https://user-images.githubusercontent.com/48428378/154156438-3e811df3-818b-48fe-b362-7cb61d2bed24.png)


(6) session실행 후 roscore실행
라즈베리파이의 user name과 password를 입력하면 연결이 되고 똑같이 roscore라고 입력해주면 roscore가 실행됩니다.

![image](https://user-images.githubusercontent.com/48428378/154156487-7cbe499b-b701-47ef-beb8-681d05a646c1.png)

![image](https://user-images.githubusercontent.com/48428378/154156509-02481783-1c4f-4b52-97eb-6e7cb8d4b202.png)


### 4. Pixhawk의 flight mode 설정
Test flight를 할 때 세 가지 mode로 날려볼텐데 (1) position hold (2) mission mode (3) offboard mode 순서대로 입니다. mode가 바뀔 때 마다 qgroundcontrol에서 픽스호크를 설정해줘야 합니다.
![image](https://user-images.githubusercontent.com/48428378/154156577-84849d22-cf9a-4023-83e1-03070ce3494a.png)

cd qgroundcontrol
bash qgroundcontrol-start.sh
제 조종기에서는 gear를 바꾸면 Flight Mode 1과 5로 왔다갔다하는데 따라서 Flight Mode 1을 Stabilized flight mode로 Flight Mode 2를 각 단계마다 position, mission, offboard로 설정해주었습니다.
![image](https://user-images.githubusercontent.com/48428378/154156599-85185d70-5fbd-4f49-8651-bb0c052234aa.png)


### 5. Trajectory node
offboard mode를 사용할 때 라즈베리파이에서 roscore를 실행하고 ctrl_traj_test.launch를 실행해줍니다. 이 ctrl_traj_test.launch파일을 살펴보시면 아래와 같이 fcu_url을 USB port로 잡아주셔야 합니다. 관련된 내용은 바로 전 글을 참조해주시기 바랍니다. 이 launch 파일은 두 개의 node를 실행시키는데 mavros와 pub_setpoints_traj를 실행시킵니다. 이 pub_setpoints_traj node에 대해서 두 가지 변수를 설정해줄 수 있는데 반지름과 각속도입니다.

![image](https://user-images.githubusercontent.com/48428378/154156637-a40cf106-17fd-4fc0-8f77-95dd81a7ad0e.png)


pub_setpoints_traj.cpp파일을 열어보면 지워주셔야 할 부분이 있는데 아래와 같습니다. 저는 이 부분을 안 지워주고 offboard 비행을 하다가 드론이 추락했습니다. 이 부분은 자동으로 offboard 모드로 바꾸고 또 자동으로 arming을 해주는 것입니다. SITL할 때 편리하기 위해서 넣어놓은 코드인데 실재 비행할 때는 있으면 안되는 부분입니다. 그 밑에 trajectory식을 보시면 고도 2m에서 원을 도는 trajectory입니다. 그 원과 관련된 r과 wn을 launch file에서 설정하는 것입니다. qgroundcontrol에서 parameters에서 maximum velocity를 설정할 수 있는데 저의 경우에는 8 m/s로 설정되어 있었습니다. 설정하기는 r = 5m, wn = 1로 설정하고 날렸습니다. 그리고 코드에서는 높이를 15m로 바꾸어 주었습니다.
![image](https://user-images.githubusercontent.com/48428378/154156690-ea23e041-e2b0-469b-a900-dd20d35e40c5.png)


### 6. Test flight
저희는 광나루 한강 공원을 오후 시간에 예약해서 쿼드콥터를 날려보았습니다. pixhawk+raspberry pi 2대, pixhawk 1대, bird 1대를 가지고 갔었습니다. 일단 도착하면 노트북에 픽스호크를 연결해서 qgroundcontrol로 sensor calibration을 해주는 것이 좋습니다.

offboard로 자율주행을 하기 전에 pixhawk만을 사용해서 GPS를 사용해서 position홀드를 해보고 qgroundcontrol로 mission을 짜서 수행해보아야 합니다. 이 두가지가 정상적으로 실행이 될 때 그 다음에 offboard mode를 실행해보았습니다.

(1) position
pixhawk에 대한 글에서 다루었듯이 픽스호크에 전원을 연결하고 보드에 초록불이 들어오면 GPS가 되는 것입니다. 그 후에 safety switch를 누른 후에 조종기의 throttle bar를 오른쪽 아래로 하면 arming이 됩니다. 처음에는 stabilized flight mode로 띄우고 적당한 거리와 적당한 높이에서 Gear를 바꾸어주면 position mode로 들어가고 GPS를 사용하여 그 때 자신의 위치에 고정되어서 hovering하게 됩니다. 이 때 Throttle은 중간에 놔주어야 합니다.

(2) mission
미션은 qgroundcontrol에서 다음과 같이 해줄 수 있는데 왼쪽 위의 +모양을 누르면 명령들을 넣을 수 있습니다. 처음에 Takeoff명령을 주고 waypoint들을 준 다음에 land명령을 줘서 하나의 mission을 형성합니다. 너무 넓게는 설정하기 말고 고도도 설정해줄 수 있고 현재는 25m로 되어있습니다. 위와 같이 바닥에 쿼드콥터를 놓고 배터리를 연결하고 arming을 한 다음에 바닥에서 mode를 바꾸어주면 이 미션을 수행하게 됩니다. 혹시나 이상이 생겼을 경우에 바로 stabilized flight mode로 바꾸어야 하니까 조종기를 들고 계시면 됩니다.
![image](https://user-images.githubusercontent.com/48428378/154156771-18e778f2-f9a6-4476-8eda-f0531cb05b53.png)

(3) offboard
위 까지 성공적으로 수행이 되었다면 이제 offboard로 비행할 차례입니다. 라즈베리파이에 전원이 들어가는 상태에서 멀리 놓고서 공유기를 통해서 wifi가 연결되었다면 노트북에서 라즈베리파이에 접속합니다. 그리고 두 개의 명령을 실행해주시면 됩니다.

roscore
roslaunch modudculab_ros ctrl_traj_test.launch
그 후에 조종기로 arming을 해주고 offboard mode로 바꾸어주면 상공 15m에서 5m 반경으로 회전하게 됩니다. 저는 위에서 언급했듯이 자동으로 offboard모드가 되고 arming이 되는 코드를 안 빼고 test flight를 해서 추락했기 때문에 한 번 더 나가서 날려볼 예정입니다.


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

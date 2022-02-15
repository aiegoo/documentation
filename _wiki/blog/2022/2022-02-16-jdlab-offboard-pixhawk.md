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

위 그림 중에서 modular approach를 하려고 합니다. 라즈베리파이에 이전에 ROS설치했던 것처럼 동일하게 설치하고 그 라즈베리파이와 PX4 flgiht stack이 설치된 pixhawk를 연결해서 자율주행을 할 계획입니다. 라즈베리파이와 연결해서 사용하기 전에 pixhawk보드에 먼저 PX4를 설치를 하고 Pixhawk로만 비행을 해 보도록 하겠습니다.



2. Pixhawk 보드 설치
https://pixhawk.org/

첫 번째 글에서 Pixhawk에 대해서 설명한 적이 있습니다. Pixhawk가 무엇인지 모르시는 분들은 Pixhawk 홈페이지를 참조해주시길 바랍니다.
https://pixhawk.org/

이 프로젝트를 하기 전에 아두이노 우노와 나노로 450mm frame 쿼드콥터를 만드는 프로젝트를 했었습니다. 그 때 사용했던 쿼드콥터에서 아두이노만 빼서 그대로 Pixhawk를 달고 사용하려고 합니다. Pixhawk는 준비되어 있다고 생각하겠습니다. (주문하고 배송오는 데만 시간이 많이 걸릴 겁니다.)

아두이노 드론을 만들 때 구매했던 부품 리스트는 다음과 같습니다.

Frame
BLDC motor
Propeller
ESC
Battery
Battery Charger
Power distribution board
Mirco controller(Arduino)
Gyro sensor(+Accelerometer)
Transmitter(+receiver)
위 리스트에서 8번과 9번을 빼고 Pixhawk를 넣으면 되겠습니다. Pixhawk는 보통 세트로 오기 때문에 그 안에 텔레메트리도 있고 GPS도 있고 여러가지가 추가로 들어있습니다. 구매했던 링크는 다음과 같습니다.

해외(하비킹) http://www.hobbyking.com/hobbyking/store/index.asp

Frame : Hobbyking SK450 Glass Fiber Quadcopter Frame 450mm 1개
Motor : Turnigy Aerodrive SK3 - 2826-1240kv Brushless Outrunner Motor 4개
ESC : Afro ESC 30Amp Multi-rotor Motor Speed Controller (SimonK Firmware) 4개
Propeller : Hobbyking™ Propeller 10x4.5 White (CW) (4pcs) 1개
Hobbyking™ Propeller 10x4.5 White (CCW) (4pcs) 1개
Power distribution board : Hobby King Octocopter Power Distribution Board 1개
Battery : Turnigy nano-tech 2200mah 3S 35~70C Lipo Pack 2개
Battery Charger : IMAX B6AC V2 Professional Balance Charger/Discharger
프로펠러나 배터리같은 건 여분을 구매하시는 것이 좋고 모터랑 ESC와 배터리 프로펠러는 서로 맞는 것을 구매해야 해서 임의로 구입하지 말고 이미 검증된 조합을 구매하시는 것이 좋습니다. 위의 조합도 하비킹 직원에게 문의해서 나온 조합입니다.

조립하면 밑과 같이 되는데 조립하는 과정에 대해서는 간단하게 정리해놨던 글이 있습니다.
http://www.whydsp.org/343



여기에 Pixhawk를 설치해주시면 됩니다.

부품리스트는 다음과 같습니다.
Package Included:

PX4 V2.4.7 Flight board x1
safety switch x1
Buzzer x1
Original Case x1
4GB SD Card x1
SD Card Adapter x1
External LED light board X 1
PPM Module w/ shell x1
Pixhawk-I2C Splitter Expand Module X 1
Neo-M8N Gps Module x1
Black Gps Holder x1
Power Module x1
Minim OSD w/ shell x1
433 telemetry w/ shell x1
DF13 4Pin Cable x1
DF13 5Pin Cable x1
DF13 6Pin Cable x1
픽스호크 보드 자체의 세부 사항은 다음과 같습니다.

Processor

32bit STM32F427 Cortex M4 core with FPU
168 MHz
256 KB RAM
2 MB Flash
32 bit STM32F103 failsafe co-processor
Sensors

ST Micro L3GD20H 16 bit gyroscope
ST Micro LSM303D 14 bit accelerometer / magnetometer
MEAS MS5611 barometer
위 부품 리스트 중에서 픽스호크 보드에 GPS, buzzer, switch, power module, ppm module을 연결해주고 각 각 리시버, esc를 연결한 후에 쿼드콥터 프레임 위에 올려줍니다. 아래 왼쪽 그림에서 맨 왼쪽에 RC 부분에 PPM encoder를 연결해주시면 됩니다. 밑의 오른쪽 그림이 픽스호크에 PPM encoder와 ESC선들을 연결한 사진입니다. 세 줄이 있는데 제일 위 줄은 ground이고 두 번째 줄은 +이고 세 번째는 signal선입니다. 그거에 맞춰서 RC라고 써져있는 곳에 PPM encoder를 연결하고 Mainout 1,2,3,4에 ESC를 연결해주면 됩니다.





ESC를 연결하실 때 어떤 모터가 1번인지 어떤 모터가 4번인지 알아야합니다. 3D robotics의 사진을 참고해주시면 됩니다. 다른 쿼드콥터와는 달라서 헷갈리기 때문에 정확히 보시고 연결해주세요
http://www.dronetrest.com/t/pixhawk-flips-over/718

밑의 그림은 Pixhawk 보드의 포트 정보입니다. 참고하시면 되겠습니다.





3. Qgroundcontrol 설치
이렇게 설치가 완료되면 USB선으로 밑의 사진과 같이 컴퓨터와 픽스호크를 연결해줍니다.

이렇게 하드웨어를 준비해준 다음에 이제 소프트웨어를 준비해줍니다. 픽스호크에 올라가는 펌웨어가 PX4 flight stack이라고 말했었는데 그 PX4를 업로드하기도 하고 여러가지 쿼드콥터의 설정들(센서 칼리브레이션, 조종기 칼리브레이션, 채널 설정 등)을 할 수 있는 Qgroundcontrol을 설치하셔야 합니다. Qgroundcontrol의 홈페이지는 다음과 같습니다.
http://qgroundcontrol.org/

다음 페이지에서 linux버전을 클릭하면 다운로드가 되는데 압축파일이 다운로드가 됩니다. 다운로드가 완료가 되면 위치를 하나 정해서 압축을 풀어주시고 그 폴더안의 start.sh파일을 실행해 주시면 됩니다. https://donlakeflyer.gitbooks.io/qgroundcontrol-user-guide/content/download_and_install.html#rcbuilds

우분투에서는 여기에 additional package를 설치해줘야합니다. 관련페이지는 다음과 같고 명령어는 밑과 같습니다. https://github.com/mavlink/qgroundcontrol

sudo apt-get install espeak libespeak-dev libudev-dev libsdl1.2-dev
실행할 때에는 qgroundcontrol 폴더 내에서 다음과 같은 명령어를 실행해줍니다.

cd ~/qgroundcontrol
bash qgroundcontrol-start.sh
만약 여기서 에러가 생기면 다음 페이지들을 참조해주세요

해결 방법 1. http://askubuntu.com/questions/616517/dev-ttyacm0-permission-denied-error

해결 방법 2. http://websistent.com/fix-serial-port-permission-denied-errors-linux/ 해결 방법 2 이후에는 reboot 를 해주어야 함.

정상적으로 실행이 되면 다음과 같은 화면이 나옵니다. 이제 Qgroundcontrol를 통해서 pixhawk 설정을 해보도록 하겠습니다.





4. Configrations and Calibration
(1) PX4 flight stack 설치
설정을 들어가서 Firmware부분으로 들어가면 다음과 같은 화면이 나옵니다. 글을 읽어보면 USB선을 뺐다 다시 꽂으라고 되어있습니다. 그대로 해주면 오른쪽에 Firmware를 선택할 수 있습니다. 저희는 PX4 Flight Stack를 선택하고 OK를 눌러줍니다.


(2) 프레임 선택
제가 사용하고 있는 프레임은 quadcopter X이고 그 중에서 450mm 프레임을 선택하면 얼추 맞기 때문에 DJI Flame Wheel F450을 선택해주었습니다.





(3) Radio설정
현재 리시버와 트랜스미터를 연결한 상황에서 트랜스미터(조종기)를 캘리브레이션해주는 단계입니다. 친절하게 설명이 계속 나오므로 그 설명대로 해주시면 됩니다.


(4) 센서 캘리브레이션
Compass, Gyroscope, Accelerometer, Level Horizon 네 개를 calibrate 해줘야하고 하나씩 클릭해서 진행하시면 됩니다.

Compass : 아래 그림처럼 쿼드콥터의 자세를 잡고 회전표시가 나오면 회전해주면 됩니다. 나머지 세 개도 각각 클릭해서 진행해주시면 되는데 각각 살짝 달라서 지침을 잘 읽고 그대로 따라 주시면 캘리브레이션이 완료됩니다.

(5) Flight Mode 설정
http://www.moses-modellbau.de/mediafiles/Anleitungen/DEVO/Manual%20of%20DEVO-7.pdf
보통 조종기에서는 조종기 위쪽 버튼을 통해서 여러가지 mode들을 선택할 수 있습니다. 예를 들면, auto takeoff, landing, return to home등의 기능들입니다. 저는 Gear button을 사용해서 ROS로 드론을 컨트롤 하는 모드와 손으로 조종하는 모드를 왔다갔다 하려고 합니다.  저는 GEAR가 channel 5이고(radio test할 때 그렇게 나옵니다) 따라서 Flight mode channel에 channel 5를 사용하고 Flight Mode 1에는 Stabilized를 선택하고 Flight Mode 2에는 offboard를 선택해줍니다. 그리고 오른 쪽"Switch Settings"에서는 세 번째 offboard switch channel에서 Channel 5를 선택해주면 Gear버튼을 위로 올리고 내리는 것에 따라서 손으로 조종하다가도 off board모드로 들어가서 라즈베리 파이에 있는 명령들로 쿼드콥터를 자율주행 시킬 수 있습니다.
(6) ESC Calibration
Qgroundcontrol에서 ESC 칼리브레이션은 상당히 간단합니다. 왼쪽의 Power탭으로 들어가서 Calibrate를 눌러주면 battery를 연결해주라는 지침이 나옵니다. 그러면 끝입니다.



5. Arming
이제 비행을 하기 위한 준비는 다 끝났습니다. Arming이라는 단어가 있는데 안전을 위한 장치라고 보시면 될 것 같습니다. 자동차에서도 키를 꼽고 돌려야 시동이 걸리듯이 쿼드콥터에서도 어떠한 행동을 해줘야 쿼드콥터로 비행을 할 수 있습니다. 보통은 조종기에서 Throttle 스틱을 오른쪽 밑으로 해주면 Arming이 되도록 설정되어있는데 Firmware마다 다를수가 있습니다. PX4가 업로드 되어있는 Pixhawk에서는 배터리를 연결하고 컴퓨터와는 연결하지 않은 상태에서 safety switch를 몇 초간 눌러주고 그 다음에 조종기에서 throttle stick을 오른쪽 밑으로 유지하면 arming이 되면서 네 개의 모터가 돌게 됩니다. arming이 될 때 왜 모터가 도는 지 의아해하는 분들이 계실 수도 있는데 모터가 돌지 않으면 arming이 되었는지 알 수 없기 때문에 쿼드콥터가 뜨지 않을 정도만 돌게 해주는 것입니다. SITL에서도 잘 보면 arming이라는 command를 주면 쿼드콥터의 프로펠러들이 도는 것을 볼 수 있었습니다.




6. Test Flight
Pixhawk가 제대로 설정이 되었고 비행이 가능한 지 확인하기 위해서 실재로 낮은 고도로 비행시켜 보았습니다. 450 Frame으로 PID계수가 맞춰져있어서 Tunning안해줘도 잘 날지만 날려본 다음에 진동을 보고서 P나 I gain을 바꿔주는 것이 좋습니다. 저는 Stabilized 모드로 비행을 했습니다. 다음 사진과 같이 쿼드콥터를 세팅해놨습니다.


https://www.facebook.com/100004068281468/videos/917401101738824/

비행 동영상 링크는 위와 같습니다.

## Off-board Control (2) Raspberry Pi
1. Off-board Control
쿼드콥터를 자율주행하기 위해서 Pixhawk와 Raspberry Pi를 이용할 것 입니다.Pixhawk에는 PX4 flight stack이, Raspberry Pi에는 ROS가 설치됩니다. 두 Module이 Mavlink라는 통신 프로토콜을 통해 서로 통신하면서 픽스호크는 제어를 하게 되고 라즈베리파이는 offboard control을 하게 됩니다.

따라서 전 글에서는 Pixhawk보드를 설정하고 쿼드콥터를 날리기 위한 준비를 했었습니다. 이제는 Offboard control을 위해서 Raspberry Pi를 설정해줘야합니다. 해야할 일은 다음과 같습니다.

라즈베리파이에 Ubuntu 16.04 Mate설치
라즈베리파이에 ROS kinetic설치
위 과정을 수행하기 전에 라즈베리 파이가 무엇인지, 그리고 라즈베리 파이를 사용하기 위한 기본적인 세팅을 살펴보겠습니다.



2. Raspberry Pi
https://namu.wiki/w/%EB%9D%BC%EC%A6%88%EB%B2%A0%EB%A6%AC%20%ED%8C%8C%EC%9D%B4(%EC%BB%B4%ED%93%A8%ED%84%B0)   라즈베리파이란 영국 라즈베리 파이 재단에서 만든 초저가/초소형 PC입니다. 교육용 프로젝트의 일환으로 개발되었습니다. 아두이노와 함께 교육용 플랫폼의 대표 주자입니다. 아두이노와는 달리 정말 컴퓨터처럼 사용될 수 있습니다. 그렇게 컴퓨터처럼 사용되려면 몇 가지가 필요합니다.

모니터, 키보드, 마우스, 전원선, HDMI케이블, SD card

필요한 것들을 다 연결한 상태는 다음과 같습니다. 이제 라즈베리 파이에 올라갈 OS를 설치해보도록 하겠습니다.




3. 라즈베리파이에 Ubuntu 16.04 MATE 설치
https://ubuntu-mate.org/raspberry-pi/
Ubuntu 중에서도 라즈베리파이에 설치할 OS는 Ubuntu-MATE입니다(설치하고 나서 정식 우분투가 라즈베리파이3를 지원한다는 것을 알았습니다 문제 생기면 그 때 다시 설치하려 합니다) 데스크탑에 우분투를 설치할 때와 마찬가지로 이미지파일을 받아서 압축을 풀고 이번에는 라즈베리파이의 SD card에 이미지파일을 구워주고 그 SD card를 라즈베리파이가 꽂아주면 됩니다. 원래는 라즈베리파이 1에 라즈비안이라는 OS를 사용하고 있었는데 Mavros가 설치되지 않는 문제가 있어서 라즈베리파이 3를 구매하고 우분투를 설치하기로 했습니다.(우분투는 라즈베리파이 2부터 지원이 됩니다)

우분투 메이트 다운로드는 위 홈페이지에서 하시면 됩니다. 이미지 파일을 구워주는 것은 Win32 disc manager를 사용하였습니다.

SD 카드를 라즈베리파이에 꽂으면 다음과 같은 화면이 나옵니다.


데스크탑에 설치할 때와 마찬가지로 언어(영어)를 선택해주고 살고 있는 도시인 Seoul를 입력해주면 설치가 시작됩니다.   MATE에서는 따로 파티션을 지정해주는 단계가 없습니다. 이렇게 Raspberry Pi 3에 Ubuntu 16.04 MATE를 설치 완료했습니다. 대신에 resize를 해줘야합니다. 처음 MATE가 실행되고 켜지는 창에서 저 빨간색을 선택하면 resize를 할 수 있는 항목이 있습니다. https://www.raspberrypi.org/magpi/ubuntu-mate-review/



4. 라즈베리파이에 ROS Kinetic 설치
ROS설치에 대해서는 ROS wiki를 참조해주시는 것이 가장 좋습니다. 링크는 다음과 같습니다.
http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Kinetic%20on%20the%20Raspberry%20Pi

Wifi를 연결하고 위 링크에 있는 명령어들을 순서대로 실행해주면 됩니다. 명령어들만 나열해 보겠습니다.

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
위와 같이 ROS Kinetic 완료한 후에 데스크탑에서 설치했던 때와 같이 ROSCORE를 구동시켜봅니다.

ROSCORE가 문제없이 잘 실행되면 거북이 예제를 실행해봅니다.

rosrun turtlesim turtlesim_node


rosrun turtlesim turtle_teleop_key
다른 창에서 키 노드를 활성화시켜서 키보드로 거북이를 움직여봅니다. 이로서 ROS Kinetic이 설치 완료 되었습니다.

여기까지 라즈베리파이에 Ubuntu와 ROS 설치하는 것을 살펴 보았습니다.


## Off-board Control (3) Mavros
1. 라즈베리파이에 Mavros 설치
sudo apt-get update
sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras
이 두 줄을 실행시키면 MAVROS가 설치가 됩니다.



2. modudculab_ros 설치
이제 Offboard Control을 위한 modudculab_ros package를 설치해줍니다. Package를 설치하려면 Package를 Build를 해야하는데 catkin build 명령어는 catkin_tools 패키지 안에 있습니다. 따라서 그 패키지를 설치해줘야합니다. http://answers.ros.org/question/207433/catkin-build-gives-command-not-found/

sudo apt-get install python_catkin_tools
https://github.com/Jaeyoung-Lim/modudculab_ros
그 후에 다음 명령어들을 실행해주시면 됩니다.

cd ~/ros_catkin_ws/src
git clone https://github.com/Jaeyoung-Lim/modudculab_ros.git
catkin build modudculab_ros
source /home/leewoongwon/ros_catkin_ws/devel/setup/bash


이제 설치된 ROS 패키지를 통해 픽스호크에게 명령을 주기 위해 두 보드를 연결해야 합니다.


3.Pixhawk와 Raspberry Pi의 연결
(1) GPIO
아래 사진과 같이 Pixhawk의 Telem2 포트와 Raspberry Pi의 GPIO핀을 연결해야 합니다. 원래 Telemetry 포트는 지상국과의 연결을 하는 안테나를 연결하는 포트이고 그 안테나를 통해서 지상국(예를 들면 데스크탑)과 MAVLINK로 통신하는 것입니다. 아래 사진은 임재영님이 연결하신 방법입니다.

각 연결선들이 무엇을 연결한 건지 아래 그림을 보면 알 수 있습니다. 하지만 이 방법같은 경우에는 Baudrate에 제한이 있어서 저는 usb to ttl 포트를 사용하였습니다. http://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html

(2) USB to TTL 이 연결 같은 경우에는 따로 모듈을 하나 구매하셔야 합니다. 연결은 첫 번째 사진과 같이 하면 되고 실재로는 밑의 사진과 같이 사용하고 있습니다.




3. MAVROS test
Mavros를 돌려보고 픽스호크로부터 토픽을 받아오는 것을 실행함으로서 라즈베리파이와 픽스호크의 연결을 테스트해보려고 합니다.

그 전에 픽스호크의 설정을 바꿔줄 것이 있습니다. 노트북에서 Qgroundcontrol을 실행시켜줍니다.

cd qgroundcontrol
bash qgroundcontrol-start.sh
메뉴 중에서 Parameters로 들어가서 System으로 들어갑니다. 밑의 그림에서 SYS_COMPANION이 companion컴퓨터와의 연결을 설정하는 것입니다. 저 부분을 눌러서 Companion Link(921600 baudrate 8N1)을 선택해줍니다. GPIO핀에 연결한 경우에는 이 baudrate를 사용할 수 없습니다.

다시 라즈베리파이로 돌아와서 Mavros를 구동하기 전에 Permission문제를 해결해줘야 합니다. 픽스호크와 연결되어 있는 USB포트를 확인해봅니다. 터미널 창에서 다음을 실행해주면 그 정보를 확인할 수 있습니다.

ls /dev/ttyUSB*
저는 /dev/USB0라는 결과가 돌아옵니다. 그러면 이제 터미널 창에서 다음을 입력해줍니다. 그러면 이후에 있을 permission 문제가 해결됩니다.

sudo chmod 666 /dev/ttyUSB0
Master를 실행시킵니다.

roscore
이제 Mavros를 실행시켜줍니다.

rosrun mavros mavros_node _fcu_url:="/dev/ttyUSB0:921600"
Screenshot at 2016-07-29 01_32_16.png

노드 그래프를 실행시켜봅니다. 현재는 mavros 노드 하나만 있는 것을 볼 수 있습니다.

rqt_graph


Mavros를 통해 받아온 픽스호크의 데이터를 확인해봅니다. topic monitor에서 각각의 토픽을 통해서 데이터가 오는 것을 확인할 수 있습니다.

rqt



4. modudculab_ros package test
modudculab_ros 패키지 안에서 Position control로 테스트 해 볼 겁니다. /ros_catkin_ws/src/modudculab_ros/launch안에 있는 ctrl_pos_gazebo.launch파일을 수정해줍니다. 3번 째 줄을 다음 그림과 같이 "dev/ttyUSB0:921600"으로 수정해줍니다.

roslaunch명령어를 통해서 실행해줍니다.

roslaunch modudculab_ros ctrl_pos_gazebo.launch
다음과 같이 실행이 됩니다.

이제 위에서와 마찬가지로 node graph와 topic data들을 확인해줍니다.

위와 같이 실행이 되면 성공한 것입니다. 노드 2개가 활성화되어 있으며 position의 명령을 주고 있습니다. 그 명령은 밑의 사진에서 /mavros/setpoint_position/local안에 pose/position z좌표 보면 1의 명령이 들어가고 있는 것을 볼 수 있습니다. 


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

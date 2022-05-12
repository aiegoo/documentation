---
layout: post
title: "using openTX on radiomaster TX16s"
name: "radiomaster-tx16s"
tags: [jdlab]
tagName: jdlab
permalink: 2022-04-10-radiomaster-tx16s.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "rc reciever transmitter opentx radiomaster configuration simulation"
summary: "Sun, Apr 10, 22, rc reciever transmitter opentx radiomaster configuration simulation"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-04-10T15:52:38 +0900
updated: 2022-04-10 15:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## OpenTX

![image](https://user-images.githubusercontent.com/42961200/162606422-f5e1a23b-1a9f-4256-8496-785a67f4f1a0.png)
Fill in a profile name (we use Radiomaster TX16s)
At Radio Type, choose “Radiomaster TX16s / TX16s Hall / TX16s Masterfire”
At menu language, specify your preferred language
At build options, always choose ‘lua’ . I also use some other options like ppmus (show channel values in uS, not in percentage) & flexr9m (used for FrSky R9m modules). It is up to you what options you want. Hover over the checkboxes to see a short explanation about all the options.
Not mandatory: At SD Structure Path, choose a folder in which you will store the SD Card contents for OpenTX
Not mandatory: At Backup folder, choose a folder in which you want backups of models/firmware to be stored.
Choose your prefered default stick mode and default Channel order.
check the checkbox to “Append version number to FW file name”

### backup
If you already have created some models and you are flashing OpenTX for the first time, it’s wise and a good practice to backup your current models. Normally all models just should be kept when upgrading, but in case something goes wrong you can always restore your models by backing them up first.

Power on your Radiomaster TX16s in bootloader mode by pushing both trim buttons (T4 and T1) inwards (towards the powerbutton) while pressing and hold the powerbutton. As soon as your transmitter powers on, release the powerbutton. You will see that your transmitter is now in bootloader mode

Attach a USB-C cable to the top USB-C port of your TX16s and connect it to your computer. You will see “USB connected” on your radiomaster display.

Start the OpenTX Companion software
Click on Read/Write
Click on “Read Models and Settings from Radio”

![image](https://user-images.githubusercontent.com/42961200/162606474-b4cddf82-56e2-483d-915c-cf969a512830.png)

![image](https://user-images.githubusercontent.com/42961200/162606485-5987e8f3-47ce-4dce-b613-a5e69d36312c.png)

### Download and Install firmware
![image](https://user-images.githubusercontent.com/42961200/162606499-7a41efcf-ede4-426b-9d98-905e5fd87d85.png)

![image](https://user-images.githubusercontent.com/42961200/162606510-4539f6a7-4238-4ea2-a6ad-b8218144a0ee.png)
Click on “Check for Updates”
If a window appears that says “Firmware….do not seems to have ever been downloaded”, press Yes and choose a suitable location to download the firmware to.
If no window appears, click on “Download Firmware” and pick a suitable location on your computer

### Install firmware to TX16s
Power on your Radiomaster TX16s in bootloader mode by pushing both trim buttons (T4 and T1) inwards (towards the powerbutton) while pressing and hold the powerbutton. As soon as your transmitter powers on, release the powerbutton. You will see that your transmitter is now in bootloader mode

Attach a USB-C cable to the top USB-C port of your TX16s and connect it to your computer. You will see “USB connected” on your radiomaster display.

After being connected to your pc, install the firmware using OpenTX companion:

Click on Read/Write
Click on Write Firmware to Radio

![image](https://user-images.githubusercontent.com/42961200/162606557-60067116-da07-4318-aa1b-91e8cd89445a.png)


![image](https://user-images.githubusercontent.com/42961200/162606572-64caffc1-7ccd-4583-bf27-078dfd74bd47.png)

Click on Load
Choose the firmware file (*.bin) you downloaded in step 4

Click on “Write to TX”
Be patient while the firmware is transferred and installed to your transmitter. We have one step left to do: transferring the SD cards for the newest OpenTX version to the SD card of the Radiomaster TX16s.

### Transfer the SD card contents for the newest OpenTX to the SD card of the Radiomaster TX16s
OpenTX uses a SD card to store all kinds of data for the OpenTX operating system. Because of this, you always need to update both the firmware and the sd card of your transmitter.

It’s a good practice to always make a Backup of your SD card contents first before proceeding with the following steps. Just transfer all the files on your sd card to a folder on your pc and you’re done.

Open OpenTX Companion
Click on download (top bar of OpenTX Companion)
Click on “Download SD contents”
Download the newest “SD Contents”, in my case “sdcard-480×272-2.3V0029.zip”
Open the zip file
Go to “My Computer” or your file explorer and open the SD card of your Radiomaster TX16s (in my case USB Drive (G:).

Delete all folders EXCEPT RADIO and MODELS
In case you are wondering why you must keep the RADIO and MODELS folder on the sd-card: the RadioMaster TX16S stores model and radio settings in files inside the RADIO and MODELS folder. So always be carefull not to delete the RADIO and MODELS folder! In case you remove them by mistake, you can always restore your backup of the sd card or your companion backup.

After all files and folders (except RADIO and MODEL) are deleted:

open the newest “SD contents” (sdcard-480×272-2.3V0029.zip)
transfer all files to the sd card of the Radiomaster TX16s
![image](https://user-images.githubusercontent.com/42961200/162608113-a8b71ac1-76d3-450a-83c0-029e085d5f17.png)

## hw config

### Fixed wings(plane : 제기 type) pixhawk 셋팅


1. Pixhawk에  Plane 펌웨어 올리기

 - Misstion Planner를 실행한다.

 - 펌웨어 설치에서 ArduPlane V3.8.3을 클릭한다.

 - USB를 Pixhawk에 연결한다.

그러면 알았어 Firmware를 올린다.

 - 마지막에 띠리링 띠리링 띠띠 하고 음악소리가 안들릴때 까지 기다린다.


그러면 펌웨어가 다 올라갔다.


그 다음 위쪽에 Auto로 하고 연결해본다.


연결될것이다.



제기 입니다.




내부에 pixhawk 넣었어요.





연결은 알았어 하시면 될것이고...재기 날개 제어할 서버를 넣는것...ch1에 오른쪽, ch2에 왼쪽, ch3에 스로틀 할당했어요.




### 조종기 INPUTS 할당


![Internet_20220513_001139_6](https://user-images.githubusercontent.com/42961200/168109380-72f83dbf-1be4-4522-99ec-c9041567eb8d.jpeg)


믹싱 Ch1과 Ch2 아래와 같이 했어요. ch3은 스로틀, ch4는 사용안하지요.






방향및 범위....



CH3 에  8 - >0 으로...





미션플래너에서...

조종기 할당된것 입니다.

유심히 볼것은 아래 엘레본 구성 입니다.^^

가만보니...Roll이 Reverse가 체크 해제 해야 할것 같네요.





### 비행 모드는

아래와 같습니다.

 



조종기에서 키 할당


SF key 와 SE key에 할당하였다.

즉, SF키는 2단, SE키는 3단 스위치 입니다.

아래 설명, 1:1단, 2:2단, 3:3단 스위치이다.


SF : 1 , SE : 1  -> manual

SF : 1 , SE : 2  -> Loiter

SF : 1 , SE : 3  -> RTL


SF : 2 , SE : 1  -> FBWA

SF : 2 , SE : 2  -> Auto

SF : 2 , SE : 3  -> manual



만약, 실내에서 시동을 걸던가 시험허려면, GPS가 안잡일 것이다.

이때는 미션플래너의 소프트웨어 구성에 갔어..

전체매개변수 리스트 클릭

하고, 오른쪽 젤 밑에 보면 탐색 창에서 gps 검색

ARMING_CHECK 가 1로 되어 있을것이다. 1은 모든센서를 체크하여 잘못된 경우 시동이 안걸린다.

이것을 해제해 줘야 시동이 걸린다. 원래는 1로 해야 되지만, 실내에서는 gps가 에러날 것이다.

이것을 0 으로 해줘야 하고..

오른쪽 메뉴 아이콘 "매개변수 쓰기 " 를 클릭하면 저장된다.

그러면 시동이 될 것이다.




###  모드 설명

> MANUAL Mode

번역 하자면...

보통 RC 제어, 안정화가 안됨. 모든 RC입력은 출력으로 바로 전달된다. 그러나, RC출력이 입력과 다른 유일한 방법은 아래와 같다.

- 비행기가 구성된 페일세이퍼가 걸렸거나, 지오펜스가 될때 제어권이 빼낀다.

- VTAIL_OUTPUT 옵션이 활성화 되고, 소프트웨어 VTAIL믹싱이 출력에 적용 될때.

- ELEVON_OUTPUT 옵션이 활성화 되고, 소프트웨어 Elevon믹싱이 출력에 적용 될때 만 제어권이 넘겨진다.


> STABILIZE Mode

간단한 안정화 RC 제어. 레바를 내버려 두면 비행기가 수평을 유지한다. 이것은 2차원 면체를 가진 많은 비행기를 타는 것과 조금 비슷하다. 안정화 모드에서 롤(Roll)과 루프(Loop) 같은 기동을 할 수는 있다. 하지만 비행기 자체가 올바르게 움직이는 경향은 이러한 기동을 어렵게 만든다. 비행기가 스스로 날아가기를 원하는 대부분의 사람들을 위해 조종사가 비행할 것을 말하면, FLY BY WIRE_A(FBWA) 모드를 사용하는 것이 좋다 .안정 모드에서 스로틀은 THR_MIN 및 THR_MAX로 설정된다.

노트 : 안정화 모드는 제어 루프 조정에 사용할 수있는 좋은 모드가 아니다. FLY BY WIRE_A(FBWA)를 사용하는 것이 훨씬 낫다.


> FBWA Mode (FLY BY WIRE_A) 

 이 모드는 비행기 보조 비행에 가장 많이 사용되는 모드이며 경험이 부족한 조종자을 위한 최상의 모드이다. 이 모드에서 비행기는 컨트롤 스틱으로 지정된 롤과 피치를 유지할 것이다.  따라서 에일러론 스틱을 오른쪽으로 밀고 있으면 비행기가 피치 레벨은 그대로 유지하고 LIM_ROLL_CD옵션(cm  단위)에 지정된 각도만큼 오른쪽으로 뱅크된다(중심에 있음).

 롤의 날개면이 LIM_ROLL_CD에 지정된 한계를 지나칠 수 없고, LIM_PITCH_MAX /LIM_PITCH_MIN 설정을 이상으로 피치의 날개면에 피치를 할 수 없다. 레벨 피치를 유지한다고해도 비행기가 고도를 유지할 수있는 것은 아니다. 특정 고도에서 비행기가 얼마나 많은 양을 얻는지는 비행속도에 달려 있는데, 이 속도는 주로 스로틀에 의해 제어된다. 따라서 고도를 높이려면 스로틀을 올리고 고도를 낮추려면 스로틀을 낮춰야 한다. 비행기가 고도 유지를 원한다면 FlyByWireB 모드를 보아야 한다.
 FBWA 모드에서 스로틀은 수동으로 제어되지만, THR_MIN및 THR_MAX설정에 의해 제한된다. FBWA 모드에서 러더(방향타)는 수동 제어와 사용자가 구성한 롤에 대한 러더(방향타) 믹싱에 모두 적용된다. 따라서 방향 조정을 위해 러더(방향타)를 사용할 수 있으며 자동으로 회전을 조정하는 데 사용된다.


> FBWB Mode (FLY BY WIRE_B)

 FBWB 모드는 FLY BY WIRE_A (FBWA)와 유사하지만 비행기는 고도를 유지하려고 시도할 것이다. Roll 컨트롤은 FBWA와 동일하며 고도는 엘리베이터를 사용하여 제어된다. 목표 비행 속도는 스로틀을 사용하여 제어된다.
 FBWB 모드에서 고도를 제어하려면 엘리베이터를 사용하여 고도를 변경하라. 엘리베이터를 중앙에두면 비행기가 현재 고도를 유지하려고한다. 엘리베이터를 움직이면 엘리베이터는 엘리베이터를 얼마나 멀리 이동하는지에 비례하여 고도를 얻거나 잃게된다. 전체 엘리베이터 편향을 위해 얼마나 많은 고도를 얻으려고하는지는 FBWB_CLIMB_RATE 매개 변수에 따라 달라지며, 기본값은 2 m/s 이다. 2 m/s는 상당히 느린 변화이므로, 많은 사용자는 고도 변화를보다 신속히하기 위해 FBWB_CLIMB_RATE를 더 높은 값으로 올리고 싶어한다.
 엘리베이터 스틱을 뒤로 당기거나 앞으로 올라갈 필요가 있는지 여부는 FBWB_ELEV_REV 매개 변수의 설정에 따라 다르다. 기본값은 엘리베이터를 당겨 비행기를 오르 내리는 것이다. 이것은 RC 모델에 대한 정상적인 응답 방향에 해당한다. 만약, 뒤집기가 더 편한 경우 FBWB_ELEV_REV를 1로 설정하면 엘리베이터가 FBWB 모드에서 반대로 전환된다.

 엘리베이터 스틱은 피치를 제어하지 않으며 목표 고도를 제어한다. 요청 된 오르막 또는 강하율을 달성하는 데 사용되는 피치의 양은 TECS 튜닝 설정에 따라 다르지만 일반적으로 자동 조종 장치는 비행기를 상당히 평평하게 유지하려고 시도 할 것이고 주로 스로틀을 높이거나 낮추어 올라갈 것이다. 이것은 FBWA 모드로 비행하는 데 익숙한 사람들에게 당황 스러울 수 있다. FBWA 모드에서는 피치를 훨씬 더 직접 제어 할 수 있다.​

 비행속도 센서가있는 경우 스로틀은 ARSPD_FBW_MIN 에서 ARSPD_FBW_MAX 까지의 범위에서 목표 속도를 제어한다. 스로틀이 최소 인 경우 비행기는 ARSPD_FBW_MIN에서 비행하려고 한다. 최대 인 경우 ARSPD_FBW_MAX에서 비행을 시도한다.

 만약 비행속도 센서가 없다면 스로틀은 비행기의 목표 스로틀을 설정하고, 비행기는 원하는 고도를 유지하기 위해 스로틀을 해당 설정 주위로 조정할 것이다. 스로틀 스틱을 사용하여 목표 스로틀을 계산 된 것 이상으로 밀어 올려 더 빨리 날 수 있다. 

 FBWA와 마찬가지로 러더(방향타)는 수동 조정과 회전 좌표에 대한 자동 조종과 결합되어 있다.
또한, 일반적으로 바람이 심한 경우, 일반적으로 FBWB보다 좋기 때문에 CRUISE 모드를 살펴 봐야한다. CRUISE 모드에서 항공기는 에일러론 스틱으로 어떤 롤도 입력하지 않을 때 날개를 평평하게하는 것과는 반대로 지상 선로를 유지한다.




> AUTO Mode

 AUTO 모드에서 비행기는 지상국이 설정 한 임무(GPS 웨이포인트 및 기타 명령)를 따른다. AUTO 모드로 전환하면 미션을 리셋하지 않는 한, 마지막으로 수행 한 미션 아이템부터 Plane이 계속된다.
 AUTO 비행에서는 기본적으로 파일럿이 "스틱 믹싱"을 사용하여 비행기의 비행에 영향을 주며 에일러론, 엘리베이터 및 러더 입력이 자동 조종 장치 제어를 무시할 수있는 방향으로 비행기를 조종 할 수 있다. 이 기능의 사용 가능 여부는 STICK_MIXING 옵션에 의해 결정된다.   기본적으로 스틱 믹싱은 FLY BY WIRE_A (FBWA) 모드와 동일하게 작동한다.
경고
"홈"위치는 항상 비행기의 실제 GPS 이륙 위치로 간주된다.
1. RTL, Loiter, Auto 또는 GPS 종속 모드가 정상적으로 작동하려면 작동하기 전에 GPS lock을 획득하는 것이 매우 중요하다.
2. 비행기에 대한 홈 위치는 비행기가 GPS lock을 획득 할 때 초기에 설정된다. 자동 항법 장치가 해제되면 계속해서 업데이트 된다.

◦ 비행기에서 RTL을 실행하면 GPS lock을 획득 한 것으로 가정 할 때 원래 위치로 돌아간다.
◦ RTL에서 시작위치로 직접 돌아 가지 않도록 랠리 포인트 사용을 고려하라.

​ 


> RTL Mode (Return To Launch)

RTL 모드에서 비행기는 원래 위치(비행기가 기동 한 지점 - GPS lock 이라 가정)로 돌아가고 다른 지시가있을 때까지 기다린다. (또는 연료 부족). AUTO 모드에서와 마찬가지로 스틱 믹싱을 사용하여 이 모드에서 항공기를 수동으로 전환 할 수도 있다. RTL 모드의 목표 고도는 ALT_HOLD_RTL 매개 변수(센티미터)를 사용하여 설정된다. 또는 홈 위치가 아닌 렐리 포인터로 돌아 오도록 비행기를 구성 할 수도 있다.
경고
"홈"위치는 항상 비행기의 실제 GPS 이륙 위치로 간주된다.
1. RTL, Loiter, Auto 또는 GPS 종속 모드가 정상적으로 작동하기 전에 GPS lock을 획득하는 것이 매우 중요하다.
2. 비행기에 대한 홈 위치는 비행기가 GPS lock을 획득 할 때 초기에 설정된다. 자동 조종 장치가 해제되면 자동으로 업데이트 된다.
◦ 비행기에서 RTL을 실행하면 GPS lock을 획득했다고 가정하고 그것이 작동되었을 때의 위치로 되돌아간다.
◦ RTL에서 시작위치로 직접 돌아 가지 않도록 랠리 포인트 사용을 고려하라.

​


> LOITER Mode

LOITER 모드에서 비행기는 로이터를 시작한 지점을 중심으로 원을 그리며 입력 한 고도에서 고도를 유지한다. 원의 반지름은 WP_LOITER_RAD 매개 변수로 제어되지만 NAV_ROLL_CD와 NAVL1_PERIOD 네비게이션 튜닝에 의해 제한된다. RTL(Return To Launch) 및 AUTO 모드와 마찬가지로 스틱 믹싱을 사용하는 경우 LOITER에서 비행기를 전환할 수 있다.
경고
"홈"위치는 항상 비행기의 실제 GPS 이륙 위치로 간주된다.
1. RTL, Loiter, Auto 또는 GPS 의존 모드가 정상적으로 작동하려면 시동하기 전에 GPS lock을 획득하는 것이 매우 중요하다.
2. 비행기에 대한 홈 위치는 비행기가 GPS lock 장치를 획득 할 때 초기에 설정된다. 자동 항법 장치가 해제되면 계속해서 업데이트된다. ​

◦ 비행기에서 RTL을 실행하면 GPS lock 장치를 획득 한 것으로 가정하고 그것이 작동되었을 때의 원래 위치로 돌아간다.
◦ RTL에서 작동 위치점으로 직접 돌아 가지 않도록 랠리 포인트 사용을 고려하라. 


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

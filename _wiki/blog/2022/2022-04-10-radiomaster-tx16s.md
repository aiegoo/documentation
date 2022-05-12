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
keywords: "rc reciever transmitter opentx radiomaster configuration simulation flying mode rtl auto manual loiter fbwa fbwb"
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

![Internet_20220513_001139_3](https://user-images.githubusercontent.com/42961200/168109394-5bbeb973-5235-4444-9b59-fe3cdcb02fa2.jpeg)



연결은 알았어 하시면 될것이고...재기 날개 제어할 서버를 넣는것...ch1에 오른쪽, ch2에 왼쪽, ch3에 스로틀 할당했어요.




### 조종기 INPUTS 할당

![Internet_20220513_001139_4](https://user-images.githubusercontent.com/42961200/168109388-c319bdba-7ed9-4a21-950f-91bcd8f53e3c.jpeg)


믹싱 Ch1과 Ch2 아래와 같이 했어요. ch3은 스로틀, ch4는 사용안하지요.

![Internet_20220513_001139_5](https://user-images.githubusercontent.com/42961200/168109383-55d5e294-3b36-42c6-8122-ad5804881c3b.jpeg)


![Internet_20220513_001139_6](https://user-images.githubusercontent.com/42961200/168109380-72f83dbf-1be4-4522-99ec-c9041567eb8d.jpeg)

방향및 범위



CH3 에  8 - >0 으로





미션플래너에서

조종기 할당된것 입니다.

유심히 볼것은 아래 엘레본 구성 입니다.^^

![Internet_20220513_001139_8](https://user-images.githubusercontent.com/42961200/168109377-3033223b-7243-4f7b-a2ea-2aa8475d47fd.jpeg)
가만보니...Roll이 Reverse가 체크 해제 해야 할것 같네요.


> 비행 모드

아래와 같습니다.


![Internet_20220513_001139_9](https://user-images.githubusercontent.com/42961200/168109370-75a8dc8f-96f8-409a-91d7-de6caf3e4bb0.jpeg)

조종기에서 키 할당

![Internet_20220513_001139_10](https://user-images.githubusercontent.com/42961200/168109374-0082ffc5-5ee9-4332-b8e6-eefee1930a62.jpeg)


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

![Internet_20220513_001139_11](https://user-images.githubusercontent.com/42961200/168109368-9f01ad49-36e7-49f8-81aa-63ed0e7435b2.jpeg)

```
€£¥₩
```

### 모드 설명


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

Plane의 지원을 받는 모드중 가장 인기있는 모드로서, 초보자들에게 가장 좋은 모드이다. 이 모드에서는 제어스틱에서 지정한 roll 과 pitch 각을 고정한다. 따라서 aileron 스틱을 오른쪽 끝까지 밀 경우, 비행기는 피치 레벨이 고정되고 [LIM_ROLL_CD]에서 지정한 각도로 오른쪽으로 기울어진다. 이 제한 각도 이상으로 비행기를 더 넘기는 것은 불가능하며, 비행기의 기수를 [LIM_PITCH_MAX], [LIM_PITCH_MIN] 설정 이상으로 올리거나 내리는 것도 불가능하다.


참고로 피치값을 0으로 유지한다고 하여 비행기가 고도를 유지하는 것은 아니다. 고도가 올라갈지 내려갈지는 기체의 속도에 달려있으며, 이는 주로 Throttle에 의 해 제어된다. 따라서 고도를 올리려면 Throttle을 밀어야 하고, 고도를 떨어뜨리려면 Throttle을 낮춰야 한다. Plan이 고도까지 알아서 처리하도록 하려면 FlyByWireB 모드를 보라.


FBWA모드에서 throttle은 수동제어되지만, [THR_MIN] 과 [THR_MAX] 이내에서만 가능하다.


FBWA 모드에서 방향타는 수동 + 미리 설정해둔 rudder 믹싱 에 의해 제어된다. 방향타를 ground streeing에 사용할수 있으며, 자동으로 조정되는 회전에도 사용된다.



> FBWB Mode (FLY BY WIRE_B)

FBWB는 FBWA와 비슷하지만, Plane에서 고도도 유지한다. Roll 제어는 FBWA와 동일하며, 고도는 승강타(elevator)로 제어된다. 목표 속도는 throttle을 사용하여 제어된다.


FBWB 모드에서 고도를 제어하려면 elevator를 사용하여 고도의 변화를 요청한다. elevator에서 손을 떼면 Plane은 현재의 고도를 유지하려고 시도한다. elevator를 이동시키면 움직인 거리에 비례하여 고도를 올리거나 내린다. elevator를 완전히 넣었을 때 얼마나 고도가 올라갈지는 [FBWB_CLIMB_RATE] 변수에 따르며, 그 기본값은 2 m/sec 이다. 참고로 2 m/sec 은 상당히 느린 변화로, 고도변화의 반응성을 높이기 위해 많은 사용자들이 [FBWB_CLIMB_RATE] 값을 올리고 있다.


elevator 스틱을 당겼을 때 고도를 올릴 것인지 스틱을 밀었을 때 고도를 올릴 것인지는 [FBWB_ELEV_REV]  변수 설정에 따른다. 기본값은 elevator를 당겼을 때 고도가 올라간다. 이는 일반적인 RC 모델의 반응 방향과 일치한다. 반대방향이 편하다면 FBWB_ELEV_REV를 1로 두면, FBWB 모드에서 elevator 가 반대로 된다.


참고로, elevator 스틱은 pitch를 제어하지 않고, 목표 고도를 제어한다. pitch의 양은 TECS 튜닝 설정에 따라 요청된 상승/하강률을 달성하는데 사용되지만, 일반적으로 비행콘트롤러는 기체를 상당히 수평으로 유지하려고 하면서 주로 Throttle을 사용해 상승 또는 하강한다. 이는 pitch를 직접 조정하는 FBWA 모드에 익숙한 사람들에게는 당황스럽다. 


airspeed 센서가 있을 경우, throttle은 목표 속도를 [ARSPD_FBW_MIN]에서 [ARSPD_FBW_MAX] 범위 내로 제어한다. Throttle의 최소로 되면 비행기는 [ARSPD_FBW_MIN] 으로 비행하려고 시도하며, Throttle이 최대로 되면 [ARSPD_FBW_MAX] 로 비행하려고 시도한다.


airspeed 센서가 없을 경우, Throttle은 기체의 목표 Throttle을 설정하고, Plane은 적절한 고도유지를 위해 이 설정 내외로 Throttle을 조정한다. Throttle 스틱은 빠른 비행을 위하여, 필요하다고 계산된 값 이상으로 목표 Throttle 이상으로 올리고자할 때 사용될 수 있다.


FBWA와 마찬가지로 rudder는 수동 제어 및 자동조정 회전(turn coordination)을 위한 자동 제어에 따른다.


You should also have a look at CRUISE mode, as it is generally better than FBWB, especially if there is significant wind. In CRUISE mode the aircraft will hold a ground track as opposed to just levelling the wings when you don’t input any roll with the aileron stick.

CRUISE 모드를 참고하라. 대체로 FBWB보다 CRUISE 모드가 더 낫다. 특히 바람이 심할 때 그러하다. CRUISE 모드에서는 aileron 스틱으로 아무런 roll을 입력하지 않을때, 단순히 날개를 수평으로 유지하는 대신 ground track을 유지하는 방식이다.


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

> AUTO 모드는 

지상국에서 설정한 미션(GPS 웨이포인트 및 기타 명령)을 따르는 모드이다. AUTO 모드에 들어가면 미션을 재설정하지 않는 이상 최종 수행했던 미션 항목으로부터 다음 항목을 수행한다.


AUTO 모드에서는 기본적으로 조종자가 "stick mixing"을 사용하여 비행에 영향을 미칠 수 있다. 즉 보조익, 승강타, 방향타 입력을 사용하여 FC의 제어를 덮어쓰는 방식으로 비행기를 조종한다. 이 기능은 [STICK_MIXING] 옵션에 의해 결정된다. 기본적으로 stick 믹싱은 FBWA 모드와 동일하게 작동된다.


주의사항 : 

"Home" 위치는 비행기의 실제 GPS 이륙 위치로 가정된다

RTL, Loiter, Auto 기타 GPS에 의존적인 모드가 정확하게 작동되려면, 시동을 걸기전 GPS 가 고정되어야 한다.


> Return to Launch(RTL)


RTL 모드는 비행기가 "Home"위치 (비행기를 시동걸었을 때의 위치)로 되돌아가서 다른 명령이 올때까지(혹은 연료가 떨어질 때까지) Loiter 하게 된다. AUTO 모드와 마찬가지로 스틱 밍식을 사용하여 기체를 수동으로 제어할 수 있다. RTL 모드의 목표 고도는 [ALT_HOLD_RTL] 로 설정한다.


> LOITER

LOITER 모드는 LOITER를 시작한 지점 주변을 선회한다. 고도는 처음 Loiter에 들어온 고도를 유지한다. 선회 반경은 [WP_LOITER_RAD] 변수로 제어하지만,  [NAV_ROLL_CD]와 :ref:NAVL1_PERIOD에 의해서 제한 받는다. RTL 및 AUTO 모드와 마찬가지로 스틱 밍식을 사용하여 기체를 수동으로 제어할 수 있다. 


> CIRCLE

LOITER 모드와 비슷하지만, 위치를 유지하려고 시도하지 않는다. 기본적으로 비상안전 모드로서, 비상안전 이벤트가 발생했을 때, RTL로 전환하기 전에 20초간 CIRCLE 모드로 대기한다.


CIRCLE 모드는 의도적으로 매우 보수적인 모드로서, GPS 위치에 의존하지 않는다. GPS가 정지되었을 때 사용되기 때문이다. 기울기 각도는 [LIM_ROLL_CD] /3 으로 설정되며, 가속도계 교정에 GPS 속도 데이터가 없이도  가능한한 안정을 유지하려고 시도한다.


CIRCLE 모드는 처음 선회를 시작한 고도를 유지하기 위해 Throttle 및 핏치 제어를 사용한다.


> GUIDED

GUIDED 모드는 미션에서 설정하지 않고 지도상의 한점으로 비행체를 날라가도록 하는데 사용된다. 대부분의 지상국은 "Click to Fly to" 기능을 지원하는데, 여기에서 지도상에 한점을 클릭하면 비행체가 그 지점으로 날라간 후 LOITER 한다.


또다른 주요한 용도는 geo-fencing이다. geo-fence 를 침범하면 비행체는 GUIDED 모드로 들어가서 미리 정해둔 geo-fence 회귀점으로 향하고, 조종자가 제어권을 받을 때까지 LOITER 선회하게 된다


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

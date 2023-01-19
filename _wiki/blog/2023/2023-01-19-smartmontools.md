---
layout: post
title: "hw monitoring tools for ubuntu"
name: "smartmontools"
tags: [ubuntu setup]
tagName: ubuntu
permalink: 2023-01-19-smartmontools.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "ubuntu sci hdd monitoring"
summary: "Thu, Jan 19, 23, monitoring ata sci hardware"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2023-01-19T12:52:03 +0900
updated: 2023-01-19 12:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## blog
[설치 및 다운로드]



여기서 소개할 tool은 smartmontool 이다 명령어로 실행될 경우 smartctl로 실행 됨.



인스톨은 http://sourceforge.net/apps/trac/smartmontools/wiki/Download#RunsmartmontoolsfromLive-system 여기 보면 자세히 기술 되어 있음.



메뉴얼 및 릴리즈 현황은 이곳에서 http://sourceforge.net/apps/trac/smartmontools/



 



일부 리눅스 시스템의 상황에 따라서 틀리기 때문에 내가 한방법을 기술합니다.



OS : CentOS 기반에 설치 함.



 



1. 패키지 다운로드



- http://sourceforge.net/projects/smartmontools/files/smartmontools/ << 다운로드는 요기서



   > 현재는 6.1 이 최신 버전이다…(2013.04.30 현재)



 



2. 설치



- 패키지를 적당한 위치에 다운로드 한다.



- 압축되어 있으니 압축을 해제 및 이동



    # tar zxvf smartmontools-6.1.tar.gz



    # cd smartmontools-6.1



- build 및 install



    # ./configure



    # make



    # make install  (root 권한이 아니면 sudo 및 su 명령어 이용해서… 제가 사용한 시스템에서는 sudo 명령어 없이 root로 로그인)



 



이렇게 해서 설치가 다 되었다.. (엄청 간단함… ㅎㅎ)



 



[사용법]



Device 명은 /dev/sda 로 가정 (장치명은 각 HDD 장치 명에 따라서 변경 해줘야 함.)



 



1. ATA Disk Report



- 전체 적인 HDD의 전체적인 리포트를 쭉 출력해 줌. 

    # smartctl -a /dev/sda



penta-np smartmontools-6.1 # smartctl -q noserial -a /dev/sda 

smartctl 6.1 2013-03-16 r3800 [x86_64-linux-2.6.29.3] (local build) 

Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org



=== START OF INFORMATION SECTION === 

Device Model:     Hitachi HDS721050CLA662



Serial Number:    JP1572JE3WJ0TK 

Firmware Version: JP2OA50E 

User Capacity:    500,107,862,016 bytes [500 GB] 

Sector Size:      512 bytes logical/physical 

Rotation Rate:    7200 rpm 

Device is:        Not in smartctl database [for details use: -P showall] 

ATA Version is:   ATA8-ACS T13/1699-D revision 4 

SATA Version is:  SATA 2.6, 6.0 Gb/s (current: 3.0 Gb/s) 

Local Time is:    Tue Apr 30 13:41:54 2013 KST 

SMART support is: Available - device has SMART capability. 

SMART support is: Enabled



=== START OF READ SMART DATA SECTION === 

SMART overall-health self-assessment test result: PASSED



General SMART Values: 

Offline data collection status:  (0x85)    Offline data collection activity 

                    was aborted by an interrupting command from host. 

                    Auto Offline Data Collection: Enabled. 

Self-test execution status:      (   0)    The previous self-test routine completed 

                    without error or no self-test has ever 

                    been run. 

Total time to complete Offline 

data collection:         ( 4769) seconds. 

Offline data collection 

capabilities:              (0x5b) SMART execute Offline immediate. 

                    Auto Offline data collection on/off support. 

                    Suspend Offline collection upon new 

                    command. 

                    Offline surface scan supported. 

                    Self-test supported. 

                    No Conveyance Self-test supported. 

                    Selective Self-test supported. 

SMART capabilities:            (0x0003)    Saves SMART data before entering 

                    power-saving mode. 

                    Supports SMART auto save timer. 

Error logging capability:        (0x01)    Error logging supported. 

                    General Purpose Logging supported. 

Short self-test routine 

recommended polling time:      (   1) minutes. 

Extended self-test routine 

recommended polling time:      (  80) minutes. 

SCT capabilities:            (0x003d)    SCT Status supported. 

                    SCT Error Recovery Control supported. 

                    SCT Feature Control supported. 

                    SCT Data Table supported.



SMART Attributes Data Structure revision number: 16 

Vendor Specific SMART Attributes with Thresholds: 

ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE 

  1 Raw_Read_Error_Rate     0x000b   098   098   016    Pre-fail  Always       -       5



       > 디스크 표면으로부터 데이터를 읽는 과정에서 문제가 있을때 (주로 물리적인 충격으로 유발됨) 

  2 Throughput_Performance  0x0005   135   135   054    Pre-fail  Offline      -       96 

  3 Spin_Up_Time            0x0007   131   131   024    Pre-fail  Always       -       176 (Average 173) 

  4 Start_Stop_Count        0x0012   100   100   000    Old_age   Always       -       149



       > 플래터가 회전하고 정지한 횟수 

  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       0



       > 섹터에 문제가 생겨서 스페어영역의 섹터로 대체한 횟수 

  7 Seek_Error_Rate         0x000b   100   100   067    Pre-fail  Always       -       0



       > 탐색 오류율 

  8 Seek_Time_Performance   0x0005   138   138   020    Pre-fail  Offline      -       31 

  9 Power_On_Hours          0x0012   100   100   000    Old_age   Always       -       5175



       > 하드디스트에 전원 On 된 시간 

10 Spin_Retry_Count        0x0013   100   100   060    Pre-fail  Always       -       0 

12 Power_Cycle_Count       0x0032   100   100   000    Old_age   Always       -       149



       > 전원 on/off 횟수 

192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       151 

193 Load_Cycle_Count        0x0012   100   100   000    Old_age   Always       -       151 

194 Temperature_Celsius     0x0002   150   150   000    Old_age   Always       -       40 (Min/Max 25/62)



      > HDD 온도 (현재 40도 – 최소 25도, 최대 62도) 

196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       0 

197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       0



       > 불안정적인 섹터로 스페어영역 섹터로 remap을 준비중이거나 읽는 과정에 문제가 생긴 섹터 (준 Bad Sector) 

198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       0



       > 읽기/쓰기에 문제가 생긴 섹터, 즉 디스크 표면이 손상됨.(Bad Sector) 

199 UDMA_CRC_Error_Count    0x000a   200   200   000    Old_age   Always       -       0  



       > 하드디스크 인터페이스를 통해 데이터 전송과정에 발생한 CRC오류 횟수



SMART Error Log Version: 0 

No Errors Logged



SMART Self-test log structure revision number 1 

Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error 

# 1  Short offline       Completed without error       00%      5173         - 

# 2  Short offline       Completed without error       00%      5173         - 

# 3  Short offline       Completed without error       00%      5173         -



SMART Selective self-test log data structure revision number 1 

SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS 

    1        0        0  Not_testing 

    2        0        0  Not_testing 

    3        0        0  Not_testing 

    4        0        0  Not_testing 

    5        0        0  Not_testing 

Selective self-test flags (0x0): 

  After scanning selected spans, do NOT read-scan remainder of disk. 

If Selective self-test is pending on power-up, resume after 0 minute delay.



2. (추가) 명령어 사용 예제



    # smartctl -i /dev/sda 



       > HDD의 정보를 출력 함.



       > 최초 i 옵션으로 체크 해서 정상적으로 안나온다면 SMART 기능이 꺼져 있을 수도 있기 때문에 아래의 –s 옵션 과같이 Smart 기능을 on 해줘야 함.)



    # smartctl –s on /dev/sda



       > SMART 기능을 enable 시킴



    # smartctl –l selftest /dev/sda



       > HDD의 기본적인 테스트를 진행



 



[중요체크 사항]



기본적인 사항은 1번의 smartctl –a /dev/sda 명령어로 체크 하면 될듯 함.



중요한 사항은 아래의 값들은 0으로 표시 되어야 한다. (음 내부 테스트 장비가 데이터 읽는 과정에서 문제가 생겼군요 ㅎㅎㅎ 5번이나 말이죠)



ID# ATTRIBUTE_NAME FLAG VALUE WORST THRESH TYPE UPDATED WHEN_FAILED RAW_VALUE 

1 Raw_Read_Error_Rate 0x000b 098 098 016 Pre-fail Always - 5



> 디스크 표면으로부터 데이터를 읽는 과정에서 문제가 있을 때 (주로 물리적인 충격으로 유발됨) 

5 Reallocated_Sector_Ct 0x0033 100 100 005 Pre-fail Always - 0



> 섹터에 문제가 생겨서 스페어영역의 섹터로 대체한 횟수 

7 Seek_Error_Rate 0x000b 100 100 067 Pre-fail Always - 0



> 탐색 오류율 

10 Spin_Retry_Count 0x0013 100 100 060 Pre-fail Always – 0



> 섹터에 문제가 생겨서 스페어영역의 섹터로 대체한 횟수 

197 Current_Pending_Sector 0x0022 100 100 000 Old_age Always - 0



> 불안정적인 섹터로 스페어영역 섹터로 remap을 준비중이거나 읽는 과정에 문제가 생긴 섹터 (준 Bad Sector) 

198 Offline_Uncorrectable 0x0008 100 100 000 Old_age Offline - 0



> 읽기/쓰기에 문제가 생긴 섹터, 즉 디스크 표면이 손상됨.(Bad Sector) 

199 UDMA_CRC_Error_Count 0x000a 200 200 000 Old_age Always - 0



> 하드디스크 인터페이스를 통해 데이터 전송과정에 발생한 CRC오류 횟수



{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

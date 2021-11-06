---
layout: post
title: "udt tcp protocol"
name: "server_protocol"
tags: [network]
tagName: network
permalink: 2021-11-07-server_protocol.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "udt tcp"
summary: "Sun, Nov 07, 21, definition of protocols"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-07T02:13:35 +0900
updated: 2021-11-07 02:13
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## server protocol
UDP (User Datagram Protocol)
- 데이터의 빠른 전달을 보장하기 위해 사용됨

- 빠른 속도 보장을 위해 대부분의 기능을 제한함: 비신뢰성, 비연결 지향성, 최소화된 Header

- 재전송시 빠른 처리를 위해 작은 단위로 데이터를 생성함:  단편화 크기(512 byte)



UDP를 이용한 Service 종류

  - 빠른 통신 속도가 필요한 서비스: 실시간 통신, 음성 서비스에 많이 사용됨

  - 정보 해석 및 전달 서비스

     DNS : UDP 53

     DHCP : UDP 67(S), UDP 68(C)

     SNMP : UDP 161, UDP 162(trap)

  - 빠른 파일 전송

     TFTP : UDP 69



UDP Header

  - Header의 크기 : (고정) 8 byte


Source Port Address (16bit)
: 출발지 port 주소 - dynamic port
Destination Port Address (16bit)
: 목적지 port 주소 - well Known Service port
Length (16bit)
: Header + payload 의 크기
Checksum (16bit)
: Datagram 전체와 3계층 정보 중 일부분에 대한 오류검사 값, shadow header를 구성하여 오류검출 수행함
TCP
- 데이터 전달의 신뢰성을 최대한 보장

- 양방향 통신 (전 이중 통신): 데이터의 송/수신을 동시에 함

- 연결 지향: 데이터를 전달할 논리적인 연결을 먼저 구성 → 3way Handshake(연결 설정 ⇢ 데이터 전송 ⇢ 연결 종료)

- 신뢰성 보장: 순차적으로 데이터를 전송하고, 확인 응답 후 재전송

- 흐름제어: 데이터 전달에 지연 현상이 발생했을 때 데이터의 양을 조절 → Sliding Window



TCP를 이용한 Service 종류

  - 정확한 데이터 전달이 필요한 대부분의 서비스

  - 대용량 파일 전송: FTP → TCP 20(data), TCP 21(Control)

  - 원격 접속 서비스: SSH → TCP 22, Telnet → TCP 23

  - Mail 서비스: SMPT → TCP 25(송신), POP3 → TCP 110(수신)

  - WEB 서비스(누구나 볼 수있는 Port): HTTP → TCP 80

  - 보안 통신 서비스(보안성으로 전달되는 Port, TCP 80으로 들어온 내용을 암호화): SSL → TCP 443 ...



TCP Header

  - Header 크기 : Option 필드의 크기에 따라 가변적 (최소 20byte ~ 최대 60byte)

  - TCP의 동작을 지시하는 메시지를 생성하여 연결상태를 제어함 → TCP Flags

  - 하나의 연결을 통해 한 단위의 Data(Application Data)를 전달


TCP Header
Source Port Address (16bit)
: 출발지 port 주소 - dynamic port
Destination Port Address (16bit)
: 목적지 port 주소 - well Known Service port
Sequence Number (4byte)
: 하나의 연결을 통해 전달되는 데이터의 순서번호
- ISN (Initial Sequence Number, 초기 순서 번호) → Random 번호
- 초기 순서번호 이후 → Segment의 시작 크기
* IP 스푸핑 (IP Spoofing)
무조건 시작하는 시퀀스 번호(Sequence Number)가 0번부터 시작하니까 이를 이용해 4시간마다 패턴을 가지고 가기 때문에 이를 가지고 IP를 속이고 외부에서 통신을 할 수 있다.
⇢ 현재는 보완하기 위해 시작하는 값을 매번 임의의 숫자를 가지고 하기로 했다.
Acknowledgment Number (4byte)
: 확인 응답 번호 → 다음에 전달받기를 기대하는 Segment의 순서 번호
- 연결 제어용 TCP 메시지의 크기는 1byte로 취급함
Offset (4bit)
: 가변적인 TCP Header의 크기 명시 (단위: 4byte)
Reserved (4bit)
: 예약 필드, 잘 사용하지 않음 (default: 0000)
TCP Flags (8bit)
: TCP의 논리적인 연결 제어 및 관리를 위해 사용됨
: TCP 메시지의 종류를 명시함 - 연결설정, 종료, 초기화, 데이터 전송 제어, 흐름제어 등을 지시하는 메시지
: 1bit씩 메시지 종류가 지정되어 있고, 해당 bit값이 설정되면 지정된 기능을 수행함
: 이곳의 내용에 따라 TCP의 내용, 의미가 달라짐
= 1   : 긍정, 일을 하고 있다.
= 0  : 부정, 일을 안하고 있다.

TCP Flags
U : 긴급데이터이므로, 다른 데이터보다 빨리 처리해야함 → Urgent Pointer을 확인함
A : 확인 응답번호를 확인해야함 → Acknowledgment Number을 확인함
P : 원래 TCP는 하나 가고 하나 받아야하는데, 이를 무시하고 보낼 데이터를 데이터를 받을 프로그램에 바로 바로 전달
    → U를 사용할때, 기본적으로 P도 함께 사용됨
R : 연결 초기화 → 재연결(서버가 갖고 있는 상태에 따라서는 재연결) / 강제 연결종료(그 외)
S : 연결 동기화, 연결 요청
F : 연결 종료 요청
Window (2byte)
: 통신의 상대방에게 버퍼의 여유 용량을 지속적으로 알림
: 능동적인 흐름제어를 위해 사용됨
Checksum (2byte)
: Segment 전체와 3계층 정보 중 일부분에 대한 오류검사 값
: shadow header를 구성하여 오류 검출을 수행함
Urgent Pointer (2byte)
: 긴급 데이터의 마지막 segment의 순서 번호
: 긴급 데이터의 마지막 위치
TCP Option (0 ~ 40byte)
: 기본적으로 필수 옵션이 사용됨
  - type → 옵션의 종류
  - length(byte) → 옵션 data의 크기
  - option data → 옵션 값

TCP Option


MSS : 초기값으로 MPU사이즈가 들어가게 됨
SACK : 양쪽다 기능이 있어야 가능하므로. option에서 먼저 확인한 후 사용함
일반 확인 응답
- 출발지에서 Segment가 전달되면 반드시 목적지에서 전달 받았음을 확인함

- 출발지는 목적지의 확인응답 TCP 메시지를 전달받아야지만, 다음 순서의 데이터를 전달할 수 있음

- Segment : ACK → 1 : 1

누적 확인 응답
- TCP 연결 설정을 통해 한번에 보낼 수 있는 Segment의 양을 약속함

- 출발지에서는 지정된 양에 해당하는 Segment를 목적지의 확인 응답이 없어도 계속 전달함

- 목적지는 지정된 양의 Segment를 전달받았을 때 하나의 확인 응답을 전달함

- Segment : ACK → N : 1

선택적 확인 응답
- 누적 확인 응답의 문제점의 해결 : 중간에 손실된 Segment가 발생하면 정상적으로 전달받은 Segment까지 재전송을 해야함

- 누적 확인 응답과 비슷하지만 확인 응답을 할 때 재전송이 필요없는 Segment의 정보를 알림으로 불필요한 재전송을 방지함



TCP는 순차적으로 입력을 받고 확인을 하는데,

만약 여기서 손실이 발생하면 정상적으로 전달받은 다른 Segment까지 재전송을 하므로 이를 방지하기 위해 '선택적 확인 응답'으로 해결



Layer 4의 오류 검출




3way Handshake



{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

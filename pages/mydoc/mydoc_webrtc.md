---
title: 🔭 Webrtc
tags: [drone, webrtc]
last_updated: July 22, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_webrtc.html
datatable: true
folder: tags
---

## webrtc overview

|   |   |   |
|  --- | --- | --- |
| [official](http://www.webrtc.org/) | [sipwebrtc](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:386bab89-bb74-428b-bcf5-310e910fafbe)  2018 | [webrtcbrowser](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:9c028ffb-d353-43da-8c5b-1d61e736ae3b)   Reiley 2015 |
| [webrtc_tutorial](https://github.com/aiegoo/documentation/raw/gh-pages/pdf/webrtc/webrtc_tutorial.pdf) | [gcuuno](https://github.com/aiegoo/gcu-uno.git) | [github_pages](https://webrtc.github.io/webrtc-org/start/)  |


### concept
#### nework layer

|  | 
| :----: |
|Teleconferencing, Video Teleconferencing/Videoconferencing, Multimedia Application Sharing, and other Applications SIP/SDP, WebRTC/SDP, RTSP/SDP, SAP/SDP, RTP/RTCP|
| TCP, UDP, SCTP, TLS, DTLS |
| IP |

|  |    
| ---- |
| generic-message    =   start-line *message-header CRLF [ message-body ]   start-line        =    |Request-Line / Status-Line 

![image](https://user-images.githubusercontent.com/42961200/127105510-49ef2813-59e8-42c6-b697-bf412bf823ea.png)

#### webrtc architecture

|  |    |
| ---- | --- |
| ![image](https://user-images.githubusercontent.com/42961200/127107253-5ed188ea-4527-40f8-8c9f-46edcd7caa67.png) | [details](https://webrtc.github.io/webrtc-org/architecture#) |
| ![image](https://user-images.githubusercontent.com/42961200/127108300-194d2dbf-588b-43d4-ab90-4119240b6a15.png) | data flow chart [article](https://github.com/aiegoo/documentation/issues/3#issue-953602858) |


- RTC peer connection object

```
var conn = new RTCPeerConnection(conf); conn.onaddstream = function(stream){
// use stream here
};
```



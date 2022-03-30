---
layout: post
title: "gStreamer vs qtAv"
name: "jdlab-qtav"
tags: [jdlab]
tagName: jdlab
permalink: 2022-03-30-jdlab-qtav.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jdlab
keywords: "jdlab drone gcs qt gstreamer qtav video movie"
summary: "Wed, Mar 30, 22, qt movie qmovie phonon video player "
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-03-30T14:07:39 +0900
updated: 2022-03-30 14:07
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## introduction

## Qt multimedia framework

QtAV is a multimedia playback library based on Qt and FFmpeg. It can help facilitate writing a player application. Features include: * Hardware decoding suppprt: DXVA2, VAAPI, VDA, CedarX, CUDA * OpenGL and ES2 support for Hi10P and other 16-bit YUV videos * Real time preview * Video capture in RGB and YUV format * OSD and custom filters * Subtitles * Transform video using GraphicsItemRenderer. (rotate, shear, etc) * Playing frame by frame (currently support forward playing) * Playback speed control * Variant streams: locale file, http, rtsp, etc. * Audio channel, tracks and external audio tracks * Dynamically change render engine when playing * Multiple video outputs for 1 player * Region of interest(ROI), i.e. video cropping * Video eq: brightness, contrast, saturation, hue * QML support as a plugin. Most playback APIs are compatible with QtMultiMedia module


이글은 제가 podovat.com의 blog 올린글(http://www.podovat.com/?p=182)에서 퍼온것입니다.

Qt에서 동영상을 처리하기 위해서는 QMovie를 이용하여 애니메이션 gif를 통해 처리를 하거나, Phonon::VideoPlayer을 이용하여야 합니다.
Phonon::VideoPlayer의 경우 동영상을 처리하기 위해서 linux에서는 gstreamer, windows에서는 DirectShow, Mac OS X에서는 QuickTime을 이용하는데, 이러한 의존성 때문에 배포등에 문제가 발생되는 경우가 있습니다.
이러한 Phonon의 단점을 극복하기 위해서 QtAV라는 오픈소스 Qt 동영상 라이브러리가 있습니다.

QtAV는 FFmpeg을 이용해서 비디오를 디코딩하고, PortAudio를 이용해서 이미지, 오디오등을 재생합니다.
따라서 QtAV를 사용하기 위해서는 FFmpeg, Port Audio 라이브러리가 필요하고, 여기에 추가적으로 Ligav가 추가적으로 필요합니다.

QtAV 빌드
QtAV를 빌드하기 위해서는 FFmpeg, PortAudio, Libav등이 미리 설치되어 있어야 합니다.
ubuntu의 경우 간단히 apt-get으로 설치를 하며 되고, 윈도우의 경우 https://github.com/wang-bin/QtAV/wiki/Compile-FFmpeg-and-PortAudio URL을 참고해서 빌드를 하면 됩니다.
추가 라이브러리가 정상적으로 잘 설치되었다면 다음과 같이 화경변수를 등록해 놓고, QtAV를 빌드할 수 있습니다.

windows
[code]
set INCLUDE=ffmpeg_path\include;portaudio_path\include;%INCLUDE%
set LIB=ffmpeg_path\lib;portaudio_path\lib;%LIB%
[/code]

Linux
[code]
export LD_LIBRARY_PATH=ffmpeg_path/lib:portaudio_path/lib:$LD_LIBRARY_PATH
[/code]

Qt Creator에서 작업을 한다면, 위의 설정을 다음과 같은 프로젝트 설정화면의 Build Environment에 등록을 해 주시면 됩니다.

[img](https://camo.githubusercontent.com/7b9ac48dc07f4a8f1e5dc86cd65141b7df608a77/687474703a2f2f77616e672d62696e2e6769746875622e696f2f717461762e6f72672f696d616765732f7174632d7365742e6a7067) 


모든 설정이 완료되었다면 QtAV소스를 열어 다음과 같이 간단하게 build를 해주시면 됩니다.

[code]
$ qmake
$ make이글은 제가 podovat.com의 blog 올린글(http://www.podovat.com/?p=182)에서 퍼온것입니다.

Qt에서 동영상을 처리하기 위해서는 QMovie를 이용하여 애니메이션 gif를 통해 처리를 하거나, Phonon::VideoPlayer을 이용하여야 합니다.
Phonon::VideoPlayer의 경우 동영상을 처리하기 위해서 linux에서는 gstreamer, windows에서는 DirectShow, Mac OS X에서는 QuickTime을 이용하는데, 이러한 의존성 때문에 배포등에 문제가 발생되는 경우가 있습니다.
이러한 Phonon의 단점을 극복하기 위해서 QtAV라는 오픈소스 Qt 동영상 라이브러리가 있습니다.

QtAV는 FFmpeg을 이용해서 비디오를 디코딩하고, PortAudio를 이용해서 이미지, 오디오등을 재생합니다.
따라서 QtAV를 사용하기 위해서는 FFmpeg, Port Audio 라이브러리가 필요하고, 여기에 추가적으로 Ligav가 추가적으로 필요합니다.

QtAV 빌드
QtAV를 빌드하기 위해서는 FFmpeg, PortAudio, Libav등이 미리 설치되어 있어야 합니다.
ubuntu의 경우 간단히 apt-get으로 설치를 하며 되고, 윈도우의 경우 https://github.com/wang-bin/QtAV/wiki/Compile-FFmpeg-and-PortAudio URL을 참고해서 빌드를 하면 됩니다.
추가 라이브러리가 정상적으로 잘 설치되었다면 다음과 같이 화경변수를 등록해 놓고, QtAV를 빌드할 수 있습니다.

windows
[code]
set INCLUDE=ffmpeg_path\include;portaudio_path\include;%INCLUDE%
set LIB=ffmpeg_path\lib;portaudio_path\lib;%LIB%
[/code]

Linux
[code]
export LD_LIBRARY_PATH=ffmpeg_path/lib:portaudio_path/lib:$LD_LIBRARY_PATH
[/code]

Qt Creator에서 작업을 한다면, 위의 설정을 다음과 같은 프로젝트 설정화면의 Build Environment에 등록을 해 주시면 됩니다.

[img](https://camo.githubusercontent.com/7b9ac48dc07f4a8f1e5dc86cd65141b7df608a77/687474703a2f2f77616e672d62696e2e6769746875622e696f2f717461762e6f72672f696d616765732f7174632d7365742e6a7067)

모든 설정이 완료되었다면 QtAV소스를 열어 다음과 같이 간단하게 build를 해주시면 됩니다.

[code]
$ qmake
$ make
[/code]


QtAV사용
QtAV를 내 프로젝트에서 사용하기 위해서는 QtAV 1.3.4이상에서는 다음과 같이 프로젝트에 추가를 해 줍니다.
[code]
CONFIG += av
[/code]

Qt5에서는
[code]
QT += av
[/code]

만약 QtAV 1.3.4보다 아래 버전이라면, 다음의 myproject 예제와 같이 추가를 해 줍니다.
myproject/myproject.pro
[code]
TEMPLATE = subdirs
SUBDIRS += libQtAV myplayer
myplayer.depends += libQtAV
libQtAV.file = QtAV/QtAV.pro
include(QtAV/root.pri)
[/code]

위와같이 project 파일에서 QtAV라이브러리에 대한 설정을 모두 마쳤다면, 코드사용은 다음과 같이 아주 쉽게 처리가 됩니다.
C++
[code=c]
WidgetRenderer renderer;
renderer.show();
AVPlayer player;
player.setRenderer(&renderer);
player.play("test.avi");
[/code]

QML
[code]
import QtQuick 2.0
import QtAV 1.3
Rectangle {
width: 640
height: 360
color: "black"
VideoOut {
id: vo
anchors.fill: parent
}
AVPlayer {
id: player
videoOut: vo
}
MouseArea {
anchors.fill: parent
onClicked: {
player.source = "test.mp4"
player.play()
}
}
}
[/code]

QtAV를 이용한 예제
[img](https://camo.githubusercontent.com/b6259ab6e8fc101d45c69071e1d93ffab88168e2/68747470733a2f2f736f75726365666f7267652e6e65742f702f717461762f73637265656e73686f742f517441562d514d4c2d5368616465722e6a7067[)

QtAV on Mac OS X
[img](https://camo.githubusercontent.com/1f09cce8013a089a3d6ce1bb32952b0cfa5081ac/68747470733a2f2f736f75726365666f7267652e6e65742f702f717461762f73637265656e73686f742f6d61632e6a7067)

[img](https://camo.githubusercontent.com/cd299ec7cd7776a0b05a847f41299164ea5534af/68747470733a2f2f736f75726365666f7267652e6e65742f70726f6a656374732f717461762f73637265656e73686f74732f69705f63616d6572612e6a7067)
[/code]


QtAV사용
QtAV를 내 프로젝트에서 사용하기 위해서는 QtAV 1.3.4이상에서는 다음과 같이 프로젝트에 추가를 해 줍니다.
[code]
CONFIG += av
[/code]

Qt5에서는
[code]
QT += av
[/code]

만약 QtAV 1.3.4보다 아래 버전이라면, 다음의 myproject 예제와 같이 추가를 해 줍니다.
myproject/myproject.pro
[code]
TEMPLATE = subdirs
SUBDIRS += libQtAV myplayer
myplayer.depends += libQtAV
libQtAV.file = QtAV/QtAV.pro
include(QtAV/root.pri)
[/code]

위와같이 project 파일에서 QtAV라이브러리에 대한 설정을 모두 마쳤다면, 코드사용은 다음과 같이 아주 쉽게 처리가 됩니다.
C++
[code=c]
WidgetRenderer renderer;
renderer.show();
AVPlayer player;
player.setRenderer(&renderer);
player.play("test.avi");
[/code]

QML
[code]
import QtQuick 2.0
import QtAV 1.3
Rectangle {
width: 640
height: 360
color: "black"
VideoOut {
id: vo
anchors.fill: parent
}
AVPlayer {
id: player
videoOut: vo
}
MouseArea {
anchors.fill: parent
onClicked: {
player.source = "test.mp4"
player.play()
}
}
}
[/code]

QtAV를 이용한 예제
[img](https://camo.githubusercontent.com/b6259ab6e8fc101d45c69071e1d93ffab88168e2/68747470733a2f2f736f75726365666f7267652e6e65742f702f717461762f73637265656e73686f742f517441562d514d4c2d5368616465722e6a7067)

QtAV on Mac OS X
[img](https://camo.githubusercontent.com/1f09cce8013a089a3d6ce1bb32952b0cfa5081ac/68747470733a2f2f736f75726365666f7267652e6e65742f702f717461762f73637265656e73686f742f6d61632e6a7067)

[img](https://camo.githubusercontent.com/cd299ec7cd7776a0b05a847f41299164ea5534af/68747470733a2f2f736f75726365666f7267652e6e65742f70726f6a656374732f717461762f73637265656e73686f74732f69705f63616d6572612e6a7067)


### stackoom

I have a working streaming device (raspberry pi with camera module - it has a tool called "raspivid"), from which I am streaming live video using netcat
```bash
raspivid -t 999999 -w 300 -h 300 -hf -fps 20 -o - | nc -l 9999
```
In Ubuntu, after connecting to the device using netcat and streaming video to mplayer, everything works like a charm...
```bash
nc *ip* 9999 | mplayer -fps 200 -demuxer h264es -
```
Now, I want to make this video available for Windows users (with minimal setup required, possibly only an .exe). I decided to use Qt 5 - it has qTcpSocket and QMediaPlayer (according to doc, it supports stream-input). I already have some code which can read data from socket and also play local files.

But playing streams does not seem to work. Maybe it is because the video format and some codecs ? WMP also cant play the video I saved using raspivid, although vlc plays it perfectly. I also tested cat'ing a simple .avi file (which Qt plays successfully from local disc) in raspberry pi and playing the same TcpStream in Qt with no success.

Also, after netcat'ing from PI and running the compiled program in Windows, I can see that the LED on wifi dongle on raspberry pi starts flashing - so the stream arrives in the application.

Could you maybe give me some advice, what to do/try next?

I have not much previous experience with C++, so if I am asking something really wrong, please do not hit me too hard :)

Also, the "SimpleChatClient" comes from a random template I started working on..

```c++
SimpleChatClient::SimpleChatClient(QWidget* parent, Qt::WindowFlags flags)
: QWidget(parent, flags)
{
    QVBoxLayout* main   = new QVBoxLayout(this);
    player = new QMediaPlayer(this, QMediaPlayer::StreamPlayback);
    QVideoWidget* widget = new QVideoWidget;
    widget->show();
    player->setVideoOutput(widget);
    main->addWidget(widget);
    setLayout(main);
    socket = new QTcpSocket(this);
    connect(socket, SIGNAL(connected()), this, SLOT(playStream()));
    toggleConnection();
}

SimpleChatClient::~SimpleChatClient()
{
}

void SimpleChatClient::toggleConnection()
{
    if (socket->state() == QAbstractSocket::UnconnectedState)
    {
        socket->connectToHost(SERVER, PORT);
    }
    else
    {
        socket->disconnectFromHost();
    }
}

void SimpleChatClient::playStream()
{
    player->setMedia(QMediaContent(), socket);
    //player->setMedia(QUrl::fromLocalFile("C:\\Users\\m\\d.avi")); //This works for local files
    if (socket->canReadLine())
    {
        player->play();
    }
}
```


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

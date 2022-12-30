---
layout: post
title: "Pilot handbook + drone resource wiki"
name: "drone-keyconcept"
tags: [drone]
tagName: drone
permalink: 2021-11-02-drone-keyconcept.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "drone handbook yaw rudder pitch roll aileron airfoil center gravity axes angle attack IFR VFR chart"
summary: "Tue, Nov 02, 21, pilot's handbook summarized on top of key cocnepts from rapa drone-resource"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-02T10:36:09 +0900
updated: 2021-11-02 10:36
imagesurl: images/drone-resource-wiki/handbook/
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## eggs drone-resource
## 	비행기의 방향 전환
- 조종면 - 방향타(rudder), 승강타(elevator), 보조날개(aileron)

{% include image.html file="drone-resource-wiki/handbook/155-1.jpg" caption="three axes with center of gravity" %}

{% assign filenames = "160-1.jpg,157-1.jpg,156-1.jpg" | split: "," %}
{% include page_gallery.html %}

### [ Aircraft principal axes 비행기 주축 ]
> An aircraft in flight is free to rotate in three dimensions: pitch, nose up or down about an axis running from wing to wing, yaw, nose left or right about an axis running up and down; and roll, rotation about an axis running from nose to tail. The axes are alternatively designated as lateral, vertical, and longitudinal.

> 하늘을 나는 비행기는 3차원으로 자유롭게 회전한다: 날개에서 날개로 이어진 축에 비행기 앞부분이 상하로 움직이는 pitch, 상하로 이어진 축에 비행기 앞부분이 좌우로 움직이는 yaw, 비행기 앞부분에서 꼬리 부분으로 이어지는 축에서 회전하는 roll. 축들은 그 대신에 lateral, vertical, longitudinal로도 나타낸다.


### [ 비행기의 방향 전환 ]

> 날개에 접근하는 공기흐름방향과 날개의 중앙선 사이의 각도를 받음각 이라고 하는데 이 받음각은 어느정도 범위 내에서 각도를 크게 하면 양력이 커지고, 각도를 작게 하면 양력은 작아진다. (images **Pressure distribution on an airfoil and CP changes with AOA**)
{% assign filenames="97-1.jpg,98-1.jpg" | split: "," %}
{% include page_gallery.html %}

> 이렇게 날개의 받음각을 조절하여 양력을 가장 적절한 상태로 조절하기도 하고 주날개에 있는 플랩을 통해 날개 모양을 변형시켜 양력을 조절하기도 한다. 또한 비행기는 주날개와 꼬리날개를 이용하여 비행기의 각도와 방향을 바꾼다. 수평꼬리 날개에는 수평안정판과 승강타의 두 부분으로 나뉘어져 있는데 이륙할 때는 승강타를 위로 올려서 비행기의 뒷부분을 아래로 내리 누르는 힘을 발생시킨다. 그러면 비행기 앞머리가 위로 향하게 되어 속도가 크지 않아도 받음각이 커지므로 양력은 증가하게 되어 이륙을 용이하게 한다. 반대로 승강타를 내리면 비행기 앞부분은 아래로 향하게 된다.

{% include image.html file="drone-resource-wiki/handbook/104-3.jpg" caption="Coefficients of lift and drag at various angles of attack." %}

> 비행기의 수직 꼬리 날개는 비행기를 흔들리지 않고 똑바로 날아갈 수 있도록 중심을 잡아주는 역할을 한다. 수직꼬리에는 방향타도 있어서 방향타를 오른쪽으로 꺾으면 비행기는 오른쪽으로 향하고, 왼쪽으로 꺾으면 비행기는 왼쪽으로 향한다. 그러나 비행기가 방향을 바꿀 때는 방향타와 함께 주날개에 달려는 보조날개의 도움이 필요하다. 주날개에 달려있는 보조날개는 모양을 바꿔 양력을 조절할 수 있는 데 비행기가 회전을 해야 할 때는 양쪽날개의 양력을 서로 다르게 하여 비행기의 몸체를 기울이게 한다. 만약 왼쪽 날개의 양력은 줄이고 오른쪽 날개의 양력을 늘리면 비행기는 왼쪽 아래로 기울어지고 왼쪽으로 회전할 수 있게 되는 것이다.

![aileronyaw](images/drone-resource-wiki/images1/Aileron_yaw.gif)
*An animation of an airplane yawing with its rudder.*

### [ Aircraft rudders ]

> On an aircraft, the rudder is a directional control surface along with the rudder-like elevator (usually attached to horizontal tail structure, if not a slab elevator ) and ailerons (attached to the wings) that control pitch and roll, respectively. The rudder is usually attached to the fin (or vertical stabilizer) which allows the pilot to control yaw about the vertical axis, i.e. change the horizontal direction in which the nose is pointing.

{% assign filenames="160-1.jpg,160-2.jpg,154-3.jpg" | split: "," %}
{% include page_gallery.html %}

> 비행기에서 방향타(rudder)는 각각 pitch를 조종하는, 방향타와 비슷한 승강타(elevator)와 roll을 조종하는 보조날개(aileron)와 함께 직접적인 조종면이다. 방향타는 보통 수직안정판(fin, vertical stabilizer)에 붙어 있어서 조종사가 수직축의 yaw를 조종하게 한다. 즉 비행기 앞부분의 수평 방향을 바꾼다.
비행기의 방향 전환 조종면 - 방향타(rudder), 승강타(elevator), 보조날개(aileron)

![aileronpitch](images/drone-resource-wiki/images1/Aileron_pitch.gif)
*An airplane pitching via tail elevators.*

### [ Elevator (aircraft) ]

> Elevators are flight control surfaces, usually at the rear of an aircraft, which control the aircraft's orientation by changing the pitch of the aircraft, and so also the angle of attack of the wing. In simplified terms, they make the aircraft nose-up or nose-down. (Ascending and descending are more a function of the wing—aircraft typically land nose up.) An increased wing <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.angle_of_attack}}">angle of attack</a> will cause a greater lift to be produced by the profile of the wing, and a slowing of the aircraft speed. A decrease in angle of attack will produce an increase in speed. The elevators may be the only pitch control surface present (and are then called a slab elevator or stabilator), or may be hinged to a fixed or adjustable surface called a tailplane or horizontal stabilizer.

{% assign filenames="163-1.jpg,163-2.jpg,164-1.jpg" | split: "," %}
{% include page_gallery.html %}

> 승강타(elevator)는 보통 비행기의 뒤쪽에 있는 비행조종면으로 비행기의 pitch와 또한 날개의 받음각(angle of attack)을 변화시켜 비행기의 방향을 조종한다. 쉽게 말해서 승강타는 비행기의 앞부분을 상하로 움직인다. (상승과 하강은 날개의 큰 기능이다.— 비행기는 일반적으로 앞부분을 들고 착륙한다.) 커지는 받음각은 날개의 옆모습에 의해 만들어지는 큰 양력과 비행기 속도의 감소를 발생시킨다. 작아지는 받음각은 속도의 증가를 가져온다. 승강타는 존재하는 유일한 피치조종면일 것이다. 고정되거나 조절 가능한 승강타는 꼬리날개(tailplane)나 수평안정판(horizontal stabilizer)으로 불린다.

![aileronroll](images/drone-resource-wiki/images1/Aileron_roll.gif)
<p>
  An animation of an airplane rolling via its ailerons

</p>

{% assign filenames="77-1.jpg,77-2.jpg" | split: "," %}
{% include page_gallery.html %}

{{site.data.alerts.hr_faded}}
### [ Aileron ]

> <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.ailerons}}">Ailerons</a> are hinged flight control surfaces attached to the trailing edge of the wing of a fixed-wing aircraft. The ailerons are used to control the aircraft in roll, which results in a change in heading due to the tilting of the lift vector. The two ailerons are typically interconnected so that one goes down when the other goes up: the down-going aileron increases the lift on its wing while the up-going aileron reduces the lift on its wing, producing a rolling moment about the aircraft's longitudinal axis. Ailerons are usually situated near the wing tip, but may sometimes be situated nearer the wing root. The terms "outboard aileron" and "inboard aileron" are used to describe these positions respectively. The word aileron is French for "little wing".

{% assign filenames="159-1.jpg,159-2.jpg,159-3.jpg" | split: "," %}
{% include page_gallery.html %}

> 보조날개(aileron)는 고정익 날개의 뒷전에 부착된 비행조종면이다. Roll 상태의 비행기를 조종하는 데 사용되는 보조날개는 젖혀짐에 의한 양력 때문에 방향의 변화를 가져온다. 두 개의 보조날개는 일반적으로 서로 연결되어 있어서 하나가 올라갔을 때 다른 하나는 내려간다: 위로 올라가는 보조날개가 날개의 양력을 감소시키는 동안 아래로 내려가는 보조날개가 날개의 양력을 증가시켜서 비행기의 종축에서 rolling 힘을 발생시킨다. 보조날개는 보통 날개의 끝부분 가까이에 위치하지만 때때로 날개 뿌리에 더 가까이 위치할 때도 있다. Outboard aileron(외측 보조날개)와 inboard aileron(내측 보조날개)라는 용어는 이들 각각의 위치를 표현하는 데 사용된다. Aileron의 프랑스어는 little wing이다.

![controsurface](images/drone-resource-wiki/images1/ControlSurfaces.gif)
![controsurface2](images/drone-resource-wiki/images1/ControlSurfaces2.gif)



## Bernui Pt Pd Ps
![altimeter](images/drone-resource-wiki/uploads/altimeter.jpg)
### Altimeter에 대해 설명하겠습니다.

> Aneroid wafer는 주변 기압의 변화에 따라 팽창/수축하는데, 만약 비행기가 높이 상승을 하게되면 대기압이 낮아지고 이것은 Static port와 직접연결된 계기안의 대기압도 동일하게 낮아져서 Aneroid wafer는 팽창하고, 만약 비행기가 낮게 비행을 한다면 상대적으로 대기압이 높아지고, 계기안의 대기압도 높아서 Aneroid wafer는 수축하게 됩니다. 이것이  indicator랑 기계적으로 연결되어 고도를 표시하게 되는겁니다.

![static](images/drone-resource-wiki/uploads/pitot_static_system.jpg)
*pitot / static hole diagram --altimeter, speedometer, elevator(vsi)
<hr>
![VSI](images/drone-resource-wiki/uploads/vsi.jpg)

### VSI

> VSI는 비행기가 상승하거나 하강하게되는 속도를 알려주는 계기입니다. 예를 들어 500ft/m이라면 1분동안 500ft를 상승하는 속도라는 거죠~ㅋ

>그림에 보면 Diaphragm는 static port랑 직접 연결이 되어있고, 주변은 Calibrated leak이라는 것으로 static port랑 연결이 되어 있습니다. 해서 Diaphragm는 비행기가 상승하면 상승하고 있는 고도의 대기압을 동일하게 유지하고, 하강하면 하강하고 있는 위치의 대기압을 그대로 맞춰 유지하게 됩니다. 하지만 Calibrated leak과 연결된 Diaphragm의 주변은 대기압을 맞추기하지만 구멍이 너~~~~~~ 무 작아서 느리게 맞춰진다고 생각하지면 됩니다. 해서 비행기가 상승하게되면 Diaphragm는 상승 고도에 맞는 대기압이지만, 주변기압은 상승하기전 cruise때 대기압이랑 크게 차이가 나지 않게 되어 둘간의 압력차가 생기게 되는거죠~ 이 차이를 기계적으로 indicator에 연결하여 보여주는것이 VSI입니다. 둘이 차이가 나더라도 고도를 바꾸고 다시 Cruise flight을하게되면 압력차가 같아지면 indicator는 '0'을 표시하겠죠.

![Bernoulli](images/drone-resource-wiki/images/bernui.jpg)
*P = pgh (pressure vs. depth) P=ρgh. P is pressure, ρ is the density of the fluid; g is the gravitational constant, h is the height from the surface, or depth that the object is submerged. Pressure at the surface is 0 because h = 0.

![ASI operation](images/drone-resource-wiki/uploads/ASI-operation.png)
### Airspeed Indicator부터 어떻게 작동하나 알아보겠습니다.

> 비행기가 앞으로 비행하게되면, pitot tube hole을따라서 ram air가 <a href="#"  data-toggle="tooltip" data-original-title="{{site.data.glossary.airspeed_indicator}}"> airspeed indicator</a>안에 Diaphragm안으로 들어가게되면서 이 압력에 의해 Diaphragm이 팽창하게 되고, 이 팽창되는 양을 Mechanically indicator와 연결되어 airspeed를 보여줍니다. 속도가 빨라지면 들어오는공기압이 커져서 속도가 빠른것으로 표시가 되고 느리면 압력이 낮아져 속도가 느린것으로 표시가 됩니다.


|---
| ![Pt](images/drone-resource-wiki/uploads/9d5c68d7a2ccdceb033b8cd38fce65d2/Pt.jpg) | {% include image.html file="drone-resource-wiki/handbook/106-1.jpg" caption="look below" %}{::nomarkdown}<figcaption style="text-align: center;"> <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.form_drag}}">Form drag</a> is the portion of parasite drag generated by the aircraft due to its shape and airflow around it</figcaption>{:/} |


{% assign filenames="163-1.jpg,163-2.jpg" | split: "," %}
{% include page_gallery.html %}
## 추력 원리
- 방법
> 멀티콥터에서 추력을 담당하는 부분은 기체를 중심으로 사방으로 펼쳐진 로터다. 이 로터의 회전에 의해 멀티콥터가 균형을 유지하고 이동할 수 있게 된다. 멀티콥터에서는 추력과 양력의 구분이 모호할 수 있고, 단순히 정지 비행을 위해서 양력을 발생시키기도 하지만 바람이 많이 불면 호버링 자세를 수평으로 유지하기 위해 추력을 이용해야 하는 경우도 있다. (lifting theories: **1** Bernoulli’s Principle of Differential Pressure, **2** Newton's law of motion)

- 호버링:
> ** 모든 로터가 균형을 이루어 멀티콥터의 중량만큼 양력을 발생시키면 된다. 정지 비행시에는 비행체에 작용하는 4가지 힘, ***양략, 중력, 추력, 항력***은 모두 평형을 이루게 된다.

- 상승/하강:
> ** 모든 로터가 동일하게 같은 추력을 증가 시켜서 상승하고 반대로 해서 하강한다.

- 전진/후진 :
> ** 전방의 로터는 정지수준의 회전을 유지한테 후방에 위치한 로터의 추력을 증가시면서 전진, 반대로 하면 후진을 할 수 있다.

- 좌/우 수평비행:
> ** 좌우의 한쪽의 추력을 높여 그 반대 방향으로 수평비행을 할 수 있다.

- 좌/우 회전비행:
>  ** 멀티콥터의 반토크를 이용한 비행으로 서로 회전하고자 하는 방향의 반대 방향으로 회전하는 로터의 회전수를 증가시켜 그 반발력을 이용하여 회전하게 된다. 좌로 회전하려먼 우측회전 로터의 속도를 올리고 (CW), 우로 회전하려는 경우, 좌측회전 로터(CCW)의 속도를 높인다.

```diff
@@좌/우 회전 비행의 경우 회전 속도를 높이지 않는 쪽의 회전을 그대로 유지한 채 반토크를 이용하고자 하는 로터의 회전 속도만 증가시키는 경우 전체적인 양력 증가로 인한 상승 비행을 하게 되므로 특정 방향의 회전을 증가 시키는 만큼 반대 방향의 회전은 상대적으로 감소시키되 증가한 회전과 감소한 회전으로 인한 양력은 정지 비행 시와 같이 멀티콥터의 중량만큼 양력을 발생 시켜야 한다.
```


## 항공기의 안정성과 조종성

- 동적 안정성 dynamic stability: 시간의 흐름에 따라 얼마나 빨리 평형상태로 돌아오는지를 말하며 항공기가 진동에 의해 균형을 상실한 후 시간의 흐름에 따라 진폭이 감소하는 것은 안정, 진폭이 커지는 것은 불안정이라고 한다.
   - 장주기 진동: 20-30초 주기의 진동이며 정적으로 안정된 항공기에서 주로 발생하며 조정이 쉽다.
   - 단주기진동  oscillation: 지속적으로 1-2초 이냉의 시간에 발생하는 진동으로 조종성이 매우 떨어지며 기체의 구조에 손상을 입힐 수 있다.

 - 정적 안정: 평형상태를 벗어난 후 다시 원래의 형태로 돌아가려는 경향을 말한다.
   - 평형상태 equilibrium: 항공기에 작용하는 모든 힘이 균형 잡힌 상태로 힘의 변화가 없는 정상 비행 상태
   - 정적 불안정 : 평형상태를 벗어난 후 초기의 평형상태로 부터 벗어나려는 경향을 말한다.
   - 정적 중립: 평형 상태를 벗어난후 그 상태를 유지하려는 경향을 말한다.

{% include image.html file="drone-resource-wiki/images/xyz.jpg" caption="xyz stability" %}

'X - 전진 - Roll - 중력 양력'

<em>
Y - 좌우측 날개 - Pitch -  추력 항력
</em>

Z - 수직  -  Yaw -  측력 외력


> 안정성

  - 세로안정성: 가로측에 대한 항공기의 운동을 안정시키는 것으로 세로 안정이 불안정하면 기수가 들리거나 처짐에 의해 ***급상승 또는 급강하려는 경향을*** 보이므로 매우 위험하다. __세로 안정성은 수평 안정판의 승강타를 조작하여 피칭 운동을 통해 확보한다.__

  - 가로안정성: 세로측에 대한 항공기의 운동을 안정시키는 것으로 좌우 날개 중 한쪽의 날개가 반대쪽보다 낮아졌을 때 가로로 안정시킨다. ***가로안정에 기영하는 요소는 상반각 후퇴각 무게 분포등이 있다.*** 가로 안정성은 주익에 설치된 __보조익 (횡전타/Aileron)을 조작하여 롤링 운동을__ 통해 확보한다.

  - 방향 안정성: 수직축에 대한 항공기의 운동을 안정시키는 것으로 ***수직 안정판에 설치된 방향타 러더를 조작하여 요잉 운동을 통해 확보한다.***

{% include image.html file="drone-resource-wiki/images/xyz.jpg" caption="xyz stability" %}

## 비행장치에 미치는 힘

1. 양력
  - 유체는 물체에 닿은 유체를 밀어내려는 힘에 대한 반작용이며 물체가 진행하는 방향에 대한 경사각과 물체의 면적, 흐름의 속도, 유체의 밀도에 따라 정해진다.
  - 양력은 시간에 따른 공기의 양에 비례하여 커지므로 비행속도, 로터의 회전속도가 빨라질수록 양력은 증가하고, 고도가 증가하면 공기밀도가 낮아지므로 같은 조건에서 양력이 적게 발생한다. 또한 같은 속도일 경우 양력은 더운 여름에 적게 발생하고 추은 경울에 더 많이 발생한다. 약 20%
  - 상대풍(풍판과 마주하는 기류의 방향)에 수직적으로 작용하는 힘이다. 그러므로 양력을 크게함으로써 짧은 걸이에서 이륙을 원할하게 할 수 있기 때문에 항공기의 이륙시에 정풍을 맞는 것이다.

2. 추력
  - 추력의 발생에 따라 항력이 발생하므로 추력에 의한 속력은 항력과 밀접한 관계를 갖는다. 결국 정지 또는 일정한 속도로 이동하는 비행체에서 추력과 항력은 같다.

3. 항력 drag / reaction
  - 저항력이라고도 부르며 비행체가 앞으로 나아가려는 것에 대한 저항하는 힘이다. 항력이 생기는 원인은 주위에 흐르는 유체의 종류, 운동하는 물체의 형태, 크기, 속도에 따라 다르다. 이러한 외력에는 7대 기상요소 (온/압/습/구름/강수/시정/바람)
  - 비행체가 가속을 할 수 있는 것은 추력의 힘이지만 항력과 추력이 동일해지는 시점이 비행체의 실제 속도가 된다.
  - 항력은 추력에 비례하여 증가, 공기와 기체가 닿는 면적과 공기의 밀도에 따라 증감 할 수 있다.

  - 항력의 종류

> 유도항력
`로터가 회전하면서 양력을 발생 시킬때 나타나느 유도기류에 의해 생기는 항력이다. 날개의 끝단에 윙렛이나 윙팁을 설치하여 줄임` <br>

> 형상항력
`회전익 비행체에서서 날개와 몸체의 형테애 따라 공기와 마찰하면서 생기는 항력`  <br>

> 조파항력
`초음속 항공기에서 공기의 압축성 효과로 생기는 충격파에 의해 발생하며 충격파 뒤편으로 유체의 속도는 감소하나 압력과 온도, 밀도는 상승한다.`  <br>

> 유해 항력
`항공기의 표면에서 공기의 마찰로 인해 발생하는 항력으로 유해 항력은 속도에 제곱에 비래하며 증가한다. 종류로는 형상/표면/간섭 항력이 있다.`  <br>


### 공기 흐름의 성질과 날개

#### 날개의 형태에 따라:
  - 대칭형 -- 회전익 항공기에 적합, 양력이 적게 발생하여 실속발생 가능 경우많음; 상부와 하부표면이 대칭을 이루고 캠버선과 익현선이 일치한다.

  - 비대칭형 -- 주로 고정익 항공기 , 대형 헬리콥터에 사용 높은 가격과 제작이어려움; 압력중심 위치이동이 많다. (비틀림이 발생)

#### 블레이드의 구조

```
길이에 따라 익근의 속도는 느리고 익단의 속도는 빠르게 회전한다.

익근의 꼬임각이 익단의 꼬임각보다 크게 한다.

익근과 익단의 꼬임각이 서로 다른 이유는 양력 불균형을 해소하기 위함이다.
```

####  압력중심

에어포일 표면에 작용하는 모든 항공역학적 압력이 힘으로 한점에
집중작용되는 작용점

날개의 익현선 상의 점으로 풍압의 중심이 되는 곳

#### 공력중심 (공기력 중심)

받음각이 변해도 변하지 않는 기준점 즉 **모멘트 값이 받음각에 관계 없이일정한 지점**

  - 모멘트 -- 물체를 회전시키려고 하는 힘의 작용

#### 무게중심 -- 중력에 의한 알짜 토크가 0(제로)인 점

  - 평균공력시위 -- 실제 날개 꼴과 같은 동일한 항공역학적 특성을 갖는가상 날개끝

  - 기류박리:
    - 표면에 흐르는 기류가 날개의 표면과 공기입자 간의 마찰력으로 표면으로부터 떨어져 나가는 현상

    - 날개의 표면과 공기입자간의 마찰력으로 공기속도 감소로 정체구역 발생

    - 경계층 밖의 기류는 정제점을 넘어서게 되고 경계층이 표면에 박리되어 양력은 파괴되고, 항력이 극격히 증가 유도항력증가, 기체손상, 조종능력상실

  - 비행기 날개 종횡비의 비율이 커지면 유해항력이 증가 유도항력이 감소, 활공성능이 좋아진다.

  - 상대풍:

```
날개(Airfoil)에 상대적인 공기의 흐름

날개(Airfoil)의 움직임/방향에 의해 상대풍의 방향은 변하게 된다.

날개(Airfoil)의 움직임과 반대로 향함 날개가 위로 이동하면 상대풍은
아래로
```

#### 무게중심

```
CG = TM(총 모멘트) / TW (총 무게)

무게 중심 CG를 통과하는 축이 형성되며 , X 세로축을 기준으로 통과하는축이 형성된다.

무게중심 축은 X세로축을 기준으로 한다.

세로 안정성 -- 피칭, 가로 안정성 롤링, 방향 안정성 요잉
```

{% include image.html file="drone-resource-wiki/images/media/image3.jpg" caption="center of gravity" %}

#### 관성의 법칙

```
외부의 힘에 의한 변화에 저항하는 힘

즉 정지하고 있는 물체는 계속 정지하려는 성질을 가기며,

움직이는 물체는 외부 힘이 가해질 때 까지 같은 방향, 같은 속도를
유지하려는 성질을 가진다.
```

#### 가속도의 법칙

물체가 어떤 힘을 받게 되면 그 물체는 힘의 방향으로 가속되려는 성질

뒤에서 밀어주는 구간의 힘의 영향으로 속도가 상승할때까지 작용되는 힘

헬기나 드론이 제자리 비행을 하다가 전진 비행을 계속하면 속도가 증가하면서 이륙하게 되는 법칙

#### 작용반작용의 법칙

모든 작용은 힘의 크기가 같고 방향이 반대인 반작용을 수반한다.

헬리콥터의 주 로터가 회전 시 기체는 반대방향으로 회전하려는 토크(Torque)현상도 작용반작용의 법칙

{% include image.html file="drone-resource-wiki/images/media/image4.png" caption="Newton Third law, of motion" %}



#### 베르누이 정리

```
정압(P) + 동압(q) = 전압(Pt)

속도가 증가하면 동압도 증가 정압은 감소 = 전압

속도가 감소하면 동압은 감소 정압은 증가 = 전압

압력(정압)이 높은곳에서 낮은 곳으로 이동하여 양력이 발생

정압은 동일하나 동압이 바뀌기 때문에 정압의 증감이 발생

동압은 공기 밀도와 비례, 공기흐름속도의 제곱에 비례, 부딛히는 면적에 비례

즉. 정압은 상하좌우 방향과 관계 없이 일정함, 비압축성, 비유동성, 무점성

```

` 회전익 비행장치의 등속도 수평 비행 시 -- 추력 = 항력, 양력 = 무게(중력)`

<hr>

### 멀티콥터의 힘의 종류

양무추항 -- 양중추항

양력 -- 영각(받음각)의 증감께 따라 변하며 양력계수, 공기밀도, 속도의제곱, 날개의 면적에 비례한다. 합력상대풍에 수직으로 작용하는 항공역학적인 힘, 양력계수와 항공기 속도만 조종사 변화시킬 수 있다.

무게(중력) -- 속도에 반비례 한다 무게 증가시 속도 감소

추력(추진력) --

항력 -- 속도제곱에 비례 한다 속도가 많아지면 항력도 커진다. 공기밀도, 기온, 습도에 따라 크기가 다름

#### 저항운동

  -형상항력 -- 블레이드가 회전할때 공기와 마찰하면서 발생하는 마찰성항력(회전익 항공기에만 발생); 영각(받음각) 변화에 좌우되지 않으나, 속도에 좌우됨 (날개자체가 받는 항력)

  -유해항력 -- 전체항력 -- 메인로터에 작용하는 항력, 속도제곱에 비례; 항공기의 형체, 표면마찰, 크기, 설계등에 영향을 받으며, 노출최소화 및상을 유선형으로 설계 (동체가 받는)

  - 유도항력 -- 헬리콥터의 양력을 발생함으로서 나타나는 유도기류에 의한 항력 속도증가시 감소; 저속 및 제자리 비행 시 유도항력이 가장크다.

#### 기타사항

  - 유도기류 -- 헬리콥터 로터의 움직임에 의해 변화된 하강기류; 취부각 (붙임각) 의 증가로 영각(받음각)이 증가하면 공기는 아래로 가속 취부각과 비례한다.

  - 지면효과 -- 양력과 밀접한 관계가 있으며 고도에 따라 다르다; 지면에 근접 시 로터 하강풍이 지면과 충돌 양력 발생효율이 증대
    - 1/6 고도에서 20% 증가, 1/2 고도에서는 7% 추진력 증가
    - 영각(받음각)이 증가하고 양력이 증가한다. 같은 출력으로 많은 무게를 지탱할 수 있다.

  - 토크작용 -- 작용반작용의 법칙에 따른 운동법칙

  - 전이성향 -- 토크작용을 상쇄하는 꼬리날개의 추진력이 복합되어 기체가 우측으로 편류하는 현상

  - 전이비행(전이양력) -- 회전익 비행장치가 제자리 비행에서 전진비행으로 바뀌는 과도적 상태

  -  회전운동의 세차 -- 회전하는 물체에 힘을 가했을때 90도가 지난
    지점에서 현상이 나타나는 것


{% include image.html file="drone-resource-wiki/handbook/advisory-circular.jpg" caption="sectional VFR chart IFR chart and chart supplement" %}

## drone-related links

드론 못날리는곳 쉽게이해하기by 하얀고양이 대구달서님 [redzone](http://cafe.naver.com/dronplay/292202)  

* 비행금지구역 관련 국토교통부 첨단항공과 민원 답신 결과 및 추가사항 안내 [kosta notice](http://cafe.naver.com/dronplay/2814690 

* 전세계 드론 관련 법률 정보 사이트 : [legality](https://uavcoach.com/drone-laws/) 
* 각종 비행 허가 신청 방법 정리 by 하얀고양이 대구달서님 [permit instruction](https://cafe.naver.com/dronplay/383350)  
* 원스탑, 비행 및 촬영허가 신고 작성법&샘플 by 포청천 [photo-permit](http://cafe.naver.com/dronplay/365122)

* 공원의 월권? 드론비행금지 현수막 어떻게 해결(?)후기 by 양곰경기안양 [flying in park](https://cafe.naver.com/dronplay/409097)

* 중복투자에 대한 개인적인 의견 by 가윤지윤 경기시흥 [hobby warning](https://cafe.naver.com/dronplay/431306)

* 드론 입문자 드론선택 노하우 by 하니빔 부산동래 [novice](https://cafe.naver.com/dronplay/40752) 
* 센서드론 입문자 분들 4면 호버링 마스터 하셨죠? by 레이븐 부산해운대 [hovering](https://cafe.naver.com/dronplay/419511) 
* 드론 분실 방지를 위한 팁 by 오리카 부산진구 [loser tips](https://cafe.naver.com/dronplay/102654) 
* 센서형 기체 비행 전 체크리스트 by 이데야 대구수성 [checklist](https://cafe.naver.com/dronplay/393893) 
* 드론 초보자를 위한 턴에 관한 팁 [maneuver](http://cafe.naver.com/dronplay/19467) 
* 나의 드론비행 안전수칙 by 폭풍우 인천남구 [safety tip](http://cafe.naver.com/dronplay/329994) 
* 드론입문 두 달, 깨달음 by 벅스 경기평택 [first-step](http://cafe.naver.com/dronplay/367202)  
* 드론, 헬기의 비행원리 by 최강검객 서울금천님 [nautical principle](http://cafe.naver.com/dronplay/282108)

* 센서드론이 얼마나 위험한지, Atti 모드가 왜 필요한지...by 티제이 경기용인 http://cafe.naver.com/dronplay/305844  
* 드론 입문자들이 많이 하시는 실수 by 젊은돼지 서울강서 http://cafe.naver.com/dronplay/276580

* 드론 개념 탑재하기 "드론이란 물건은?"by 젤가스 대구달서 http://cafe.naver.com/dronplay/239837  
* 초보가 초보에게 드리는 당부의 말씀 by 뱅뱅뱅 경북구미 http://cafe.naver.com/dronplay/240835 
* (수치로 보는) 입문기체는 완구가 더 좋다 by 스탭 잿빛 경기이천 http://cafe.naver.com/dronplay/74701 
* 처음 드론 입문하시는 분들을 위한 작은 지침서 by 듀부 경기일산 http://cafe.naver.com/dronplay/19157 
*  드론에 관한 거의 모든것'中 종류/선택/구입방법 by 드론플레이TMhttp://cafe.naver.com/dronplay/140363 
* [드플 매너] 드론 초보 입문시 꼭 읽어두면 좋은 팁! by '스탭 야채 경기하남'님 http://cafe.naver.com/dronplay/214363 
* 기본기를 어느정도 쌓고 계십니까? by 챔피언 광주남구 http://cafe.naver.com/dronplay/122089 

* 드론 날릴 때 주의점 by 페가시스 경북상주(sant****) http://cafe.naver.com/dronplay/118044


{{site.data.alerts.hr_shaded}}

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

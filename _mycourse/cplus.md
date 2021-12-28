---
layout: page
name: cplus
summary: "C++"
sidebar: other_sidebar
permalink: cplus.html
collection: mycourse
title: "cplus"
excerpt_separator: <!--more-->
complex_map: true
map_name: usermap_mycourse
box_number: 1
order_number: 3
series: "MYCOURSE series"
weight: 3
link: https://36io.co
---

{% include custom/series_mycourse_next.html %}

## C++ course



## its origin
Once known mainly as the “yoga of the stars,” the Bikram style of hatha has spread from Beverly
Hills throughout the United States since the late 1970s. The Bikram style is the original “hot
yoga” style, and its classes are taught in a room kept at approximately 106 degrees Fahrenheit (41 degrees Celsius). Bikram yoga is based on one series consisting of 26 poses, which are practiced twice in a class session.[pdf](pdf/yoga/instructinghatha.pdf#page=33)


## oop overview

<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">‘객체지향 언어가 등장하게 된 배경과 역사, </span><span style="color: #000000;">절차적 언어와 비교하여 장점과 단점, </span><span style="color: #000000;">현재 사용되고 있는 객체지향 언어들에 대한 소개’에 대해 서술하겠습니다.</span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;"> 먼저 언어는 크게 절차적 언어와 객체지향 언어로 나눠집니다. </span></p>
<p style="text-align: left;" data-ke-size="size18"><span style="color: #f89009;"><b> 절차적 언어</b></span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">폰 노이만 구조에 기반하여 변수, 배정문, 반복문을 특징으로 하는 명령형 프로그래밍의 일종입니다. </span><span style="color: #000000;">순차적으로 실행하는 것과 데이터에 중심을 맞춘 언어입니다. </span><span style="color: #000000; letter-spacing: 0px;">예로는&nbsp; C언어와 BASIC, PASCAL, FORTRAN 등이 있습니다.</span></p>

<p style="text-align: left;" data-ke-size="size18"><b><span style="color: #f89009;"> 절차적 언어의 장점으로는 </span></b></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">프로그램의 흐름을 쉽게 볼 수 있으므로 가독성이 높아지고 </span><span style="color: #000000;">모듈화와 구조화에 더 용이하므로 </span><span style="color: #000000;">추가적으로 이미 완성된 코드의 실행속도가 빨리 처리되어 시간적으로 유리합니다.</span></p>
<p style="text-align: left;" data-ke-size="size16">&nbsp;</p>
<p style="text-align: left;" data-ke-size="size18"><b><span style="color: #f89009;"> 절차적 언어의 단점으로는 </span></b></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">유지보수가 어려우며 </span><span style="color: #000000;">디버깅이 객체지향 언어보다 어려운 것과 </span><span style="color: #000000;">실행 순서가 정해져 있으므로 코드의 순서가 바뀌면 </span><span style="color: #000000;">동일한 결과를 보장하기 힘들다는 단점이 있습니다.</span></p>
<p style="text-align: left;" data-ke-size="size18"><b><span style="color: #f89009;">객체 지향 언어의 탄생 배경</span></b></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">절차적 언어로 많은 개체들이 상호작용하면서 살아가는 현실 세계를 </span><span style="color: #000000;">그대로 표현할 수 없었습니다. </span><span style="color: #000000; letter-spacing: 0px;">또 하드웨어가 소프트웨어와 컴파일러의 발달을 따라오지 못하는 상황이 발생했습니다. </span><span style="color: #000000;">그래서 객체지향 언어가 등장하는 계기가 됩니다. </span><span style="color: #000000;">객체지향 언어는 기능별로 묶어 모듈화 하여 </span><span style="color: #000000;">하드웨어에서 기능을 중복연산하지 않도록 하고 </span><span style="color: #000000;">모듈을 재활용하기 때문에 하드웨어의 처리량이 줄었습니다. </span><span style="color: #000000;">이에 객체지향 언어가 탄생합니다.</span></p>
<p style="text-align: left;" data-ke-size="size16">&nbsp;</p>
<p style="text-align: left;" data-ke-size="size18"><span style="color: #000000;"><b><span style="color: #f89009;">객</span><span style="color: #f89009;">체 지향적 언어</span></b></span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">객체 지향적 언어는 데이터와 절차를 하나의 덩어리로 묶어서 생각하게 됩니다. </span><span style="color: #000000;">객체 간의 관계와 기능에 중심을 두고 있는 언어입니다. </span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;"> 특징의 첫째로 관련된 데이터와 알고리즘이 하나의 묶음으로 정리된 것으로, </span><span style="color: #000000;">개발자가 만들었으며 관련된 코드와 데이터가 묶여 있고 오류가 없어 사용이 편합니다. </span><span style="color: #000000;">데이터를 감추고 외부 세계와의 상효 작용은 메서드를 통해 이루어지며 </span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">라이브러리를 만들어 업그레이드하면 쉽게 바꿀 수 있는 <b>캡슐화</b>가 있습니다</span></p>
<p style="text-align: left;" data-ke-size="size16">&nbsp;</p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;"> 둘째로 이미 작성된 클래스를 이어받아 새로운 클래스를 생성하는 기법으로 </span><span style="color: #000000;">위에서 말한 기존 코드를 재활용하여 사용하는 것을 의미합니다. </span><span style="color: #000000;">객체지향의 큰 장점 중 하나인 <b>상속</b>이 있습니다</span></p>
<p style="text-align: left;" data-ke-size="size16">&nbsp;</p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;"> 마지막 셋째로 하나의 이름으로 많은 상황에 대처하는 방법입니다. </span><span style="color: #000000;">개념적으로 동일한 작업을 하는 함수들에 같은 이름을 부여할 수 있으며 </span><span style="color: #000000;">코드가 더 간단해지는 효과가 있는 <b>다형성</b> 등등이 있습니다.</span></p>
<p style="text-align: left;" data-ke-size="size16">&nbsp;</p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;"> 현재 사용되고 있는 언어로는 JAVA와 Python, C++ 등등이 있습니다.</span></p>
<p style="text-align: left;" data-ke-size="size18"><span style="color: #f89009;"><b>객체 지향적 언어의 장점으로는</b> </span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">절차적 언어보다 좀 더 세련된 형태의 모듈화를 할 수 있고 </span><span style="color: #000000;">실제 세계의 객체를 자세히 표현하게 때문에 개념적으로 접근이 더욱 쉬우며 </span><span style="color: #000000;">개발자가 만든 데이터를 사용하기 때문에 신뢰성 있는 프로그램을 쉽게 작성할 수 있습니다. </span><span style="color: #000000;">추가로 코드를 재사용하기 용이하고 코딩이 간편하며 </span><span style="color: #000000;">업그레이드와 디버깅이 쉽고, </span><span style="color: #000000;">절차적 언어와 비슷하게 대규모 프로젝트에 적합하다는 장점이 있습니다.</span></p>
<p style="text-align: left;" data-ke-size="size18"><span style="color: #f89009;"><b> 객체 지향적 언어의 단점으로는 </b></span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">어떤 모듈에 있는 하나의 기능만 필요하더라도 </span><span style="color: #000000;">모듈 전체를 가져와야 하기 때문에 프로그램 사이즈가 커질 수 있습니다. </span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">데이터에 대한 접근도 메소드를 통해 접근하기 때문에 </span><span style="color: #000000;">절차 지향적 언어처럼 특정 함수에 접근할 수 없고, </span><span style="color: #000000;">또 식으로만 접근하기 때문에 </span><span style="color: #000000;">상대적으로 절차 지향적 언어보다 느려질 가능성이 있고 </span><span style="color: #000000;">설계에 많은 시간이 들어가며 </span><span style="color: #000000;">실패하면 다시 설계해야 한다는 단점이 있습니다. </span></p>
<p style="text-align: left;" data-ke-size="size16"><span style="color: #000000;">객체지향의 반대는 절차지향이 아니고 절차 지향의 반대는 객체지향이 아닙니다. </span><b><span style="color: #000000;">또 객체지향 언어가 절차적으로 실행되지 않는다는 것은 아닙니다. </span></b><b><span style="color: #000000;">객체지향 언어 역시 절차지향 언어와 동일한 순서로 실행이 됩니다.</span></b></p>
<p style="text-align: left;" data-ke-size="size16">정리하자면, <b>절차지향 언어는 데이터를 중심</b><span style="color: #000000; letter-spacing: 0px;">으로 함수를 구현하고 </span><span style="color: #000000;">이에 반해 <b>객체지향 언어는 기능을 중심</b>으로 구현하게 됩니다. </span></p>


[**Preview**]({{page.link}})
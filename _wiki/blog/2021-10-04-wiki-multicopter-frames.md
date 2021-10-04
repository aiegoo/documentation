---
name: multicopter system
layout: post
permalink: 2021-10-04-wiki-multicopter-frames.html
sidebar: other_sidebar
collection: wiki
summary: "multicopter introduction on airframes"
tags: [wiki, hardware, drones, autopilot]
excerpt_separator: <!--more-->
date: 2021-10-04 09:44:03 +0900
updated: 2021-10-04 4:11 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/documentation
---

* (table of content)
{:toc}

## multicopter system
refer to the book wiki [multicopter_introduction](_wiki/blog/2021-09-28-book-multicopter-introduction.md)
### airframes
그냥 쉽게 생각하면, 장난감 드론의 프레임과 산업용 프레임, 그리고 미션용 (유인/무인) 프레임이 있지만 기본 원리는 같다.

[drone_notes](https://eggs.or.kr/crh/drone_resource/-/wikis/abridged-notes)
- 법률사항, 역사, 기초 비행 이론등, 라파 공동프로젝트
- abridged notes, drone, dynamics, historyrapa, home, legality clause, soloflight project.
[drone_keyconcpet](https://eggs.or.kr/crh/drone_resource/-/wikis/key-concept)
- 기체의 방향 전환, 자세/고도 유지 원리, VSI, 속도 인디케이터, 추력원리, 안정성/조정성 요소, 작용/반작용, 가속도의 법칙 등.

[project_list](#project_list)
#### fuselage
#### landing gear
#### props
- safe roation rate
  Generally, the materials of propellers used on the multicopters are flexible. So, when rotation rate exceeds a certain value, the propellers may deform, which will reduce its efficiency. Therefore, when calculating the safety rotation rate limit, all the possible conditions should be considered. The APC Web site 2 gives an empirical formula for the maximum speed of multicopter propellers, which is 105000 Revolution Per Minute (RPM)/prop diameter (inches). Taking the 10-in. propeller for example, its maximum speed is 10500RPM. By contrast, the maximum speed of Slow Flyer (SF) propellers is only 65000RPM/prop diameter (inches).
### propulsion system

### control system (gcs)
---

{% include links.html %}

## project_list
<script src="https://gist.github.com/aiegoo/64abef5341fb498f4c6108f038473876.js"></script>
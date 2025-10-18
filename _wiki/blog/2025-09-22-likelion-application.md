---
layout: post
title: "Back to School Portfolio - AI Engineering Track Application"
name: "likelion-application"
tags: [ai]
tagName: ai
permalink: 2025-09-22-likelion-application.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: ai
keywords: "ncs likelion ai nlp voice-platform projects"
summary: "Mon, Sep 22, 25, AI 트랙 지원용 링크 모음"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2025-09-22T06:00:21 +0900
updated: 2025-09-22 06:00
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## BACK TO SCHOOL Application Reference Links

<style>
  /* Remove permanent scale; apply only on wide screens */
  .table-zoom{max-width:100%;overflow-x:auto}
  .table-zoom table{border-collapse:collapse;width:100%}
  /* desktop enhancement */
  @media (min-width: 1100px){
    .table-zoom table{font-size:1.05rem}
  }

  /* existing color styles (keep) */
  .links-head{background:#0052cc;color:#fff}
  .links-col{background:#e0f2f1}
  .desc-col{background:#fffde7;color:#4e342e}

  /* second table stripes */
  .ai-list{max-width:100%;overflow-x:auto;margin-top:40px}
  .ai-list table{border-collapse:collapse;width:100%}
  .ai-list th,.ai-list td{border:1px solid #ddd;padding:6px 10px}
  .ai-list thead th{background:#222;color:#fff}
  .ai-list tbody tr:nth-child(even){background:#f3f6fa}
  .ai-list tbody tr:nth-child(odd){background:#ffffff}

  @media (max-width:760px){
    .ai-list th,.ai-list td{padding:4px 6px;font-size:.8rem}
    .ai-list td:nth-child(2){display:block;width:100%}
    .ai-list td:nth-child(3){font-size:.7rem}
  }
</style>

<div class="table-zoom">
  <table>
    <thead>
      <tr>
        <th class="links-head">링크</th>
        <th class="links-head">설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="links-col"><a href="http://pf1.eggs.or.kr">pf1.eggs.or.kr</a></td>
        <td class="desc-col">프로필 사이트</td>
      </tr>
      <tr>
        <td class="links-col"><a href="http://pf7.eggs.or.kr">pf7.eggs.or.kr</a></td>
        <td class="desc-col">포트폴리오 사이트 포털</td>
      </tr>
      <tr>
        <td class="links-col"><a href="https://gist.githubusercontent.com/aiegoo/407a7a63c1a84fde581dd05d1c6820ee/raw/4fa3cbc05d8ce576fd5115ad421275773dc59f5a/code.mmd">과제 답안 링크</a></td>
        <td class="desc-col">구글 Colab 과제 답안</td>
      </tr>
      <tr>
        <td class="links-col"><a href="https://aiegoo.github.io/kisec-final">피티자료</a></td>
        <td class="desc-col">발표 자료</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .sep {
    border: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #bbb, transparent);
    margin: 1.25rem 0;
  }
</style>

<hr class="sep" />

## Other AI tracks 

<style>
  .ai-list {
    max-width: 100%;
    overflow-x: auto;
    margin-top: 30pt; /* push down due to zoomed table above */
  }
  .ai-list table { border-collapse: collapse; width: 100%; }
  .ai-list th, .ai-list td { border: 1px solid #ddd; padding: 6px 10px; }
  .ai-list thead th { background:#222; color:#fff; }
  /* accounting-style stripes: even rows shaded */
  .ai-list tbody tr:nth-child(odd)  { background: #ffffff; }
  .ai-list tbody tr:nth-child(even) { background: #f3f6fa; }
  .ai-list td:nth-child(2) { background:#e6f0ff; } /* summary column */
</style>

{% assign t = 'likelion' %}
{% assign posts = site.posts | where_exp: 'p', 'p.tags contains t' %}
{% assign wiki  = site.wiki  | where_exp: 'w', 'w.tags contains t' %}
{% assign items = posts | concat: wiki | sort: 'date' | reverse %}

<div class="ai-list">
  <table>
    <thead>
      <tr><th>문서</th><th>요약</th><th>링크</th></tr>
    </thead>
    <tbody>
      {% for doc in items %}
        {% assign sum = doc.summary | default: doc.excerpt | strip_newlines %}
        <tr>
          <td>{{ doc.title }}</td>
          <td>{{ sum }}</td>
          <td><a href="{{ doc.url | relative_url }}">{{ doc.url | relative_url }}</a></td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<hr class="sep" />

## AIOT Projects

### GitHub Repository Portfolio

Here are my key AIOT (AI + IoT) projects from my GitHub portfolio:

- **[3D-Printed-Drone-Assembly](https://github.com/aiegoo/3D-Printed-Drone-Assembly)** - 3D Printed Drone Assembly project showcasing custom hardware design
- **[AI-Assisted-Inspection](https://github.com/aiegoo/AI-Assisted-Inspection)** - AI Assisted Infrastructure Inspection using Mixed Reality technology
- **[airc-rl-agent](https://github.com/aiegoo/airc-rl-agent)** - AI RC Car Agent using deep reinforcement learning on Jetson Nano
- **[bebop_autonomy](https://github.com/aiegoo/bebop_autonomy)** - ROS driver for Parrot Bebop Drones 1.0 & 2.0
- **[battery_digital_twin](https://github.com/aiegoo/battery_digital_twin)** - Digital Twin for battery systems with uncertainty quantification
- **[atest-tony](https://github.com/aiegoo/atest-tony)** - Raspberry Pi Arduino and Django API integration
- **[checkMate](https://github.com/aiegoo/checkMate)** - Preflight-check companion for solo pilots
- **[BruteForceAI](https://github.com/aiegoo/BruteForceAI)** - Advanced LLM-powered security tool with AI intelligence

### Documentation Search Results

{% comment %}
Enhanced search for AIOT-related content across multiple keywords and fields
{% endcomment %}

{% assign aiot_items = '' | split: '' %}
{% assign search_terms = 'aiot,iot,drone,raspberry,pi,jetson,firmware,embedded,arduino,sensor' | split: ',' %}

{% comment %}
Search across all collections for AIOT-related content
{% endcomment %}
{% assign all_docs = site.posts | concat: site.pages %}
{% if site.wiki %}
  {% assign all_docs = all_docs | concat: site.wiki %}
{% endif %}

{% for doc in all_docs %}
  {% assign include_doc = false %}
  
  {% comment %}
  Check keywords field
  {% endcomment %}
  {% if doc.keywords %}
    {% for term in search_terms %}
      {% if doc.keywords contains term %}
        {% assign include_doc = true %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
  
  {% comment %}
  Check tags
  {% endcomment %}
  {% if doc.tags %}
    {% for tag in doc.tags %}
      {% for term in search_terms %}
        {% if tag contains term %}
          {% assign include_doc = true %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if include_doc %}{% break %}{% endif %}
    {% endfor %}
  {% endif %}
  
  {% comment %}
  Check title
  {% endcomment %}
  {% if doc.title %}
    {% assign title_lower = doc.title | downcase %}
    {% for term in search_terms %}
      {% if title_lower contains term %}
        {% assign include_doc = true %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endif %}
  
  {% if include_doc %}
    {% assign aiot_items = aiot_items | push: doc %}
  {% endif %}
{% endfor %}

{% assign aiot_items = aiot_items | uniq | sort: 'date' | reverse %}

<div class="ai-list">
  <table>
    <thead>
      <tr><th>프로젝트</th><th>설명</th><th>유형</th><th>링크</th></tr>
    </thead>
    <tbody>
      {% for doc in aiot_items %}
        {% assign sum = doc.summary | default: doc.excerpt | strip_newlines | strip_html | default: "AIOT 관련 프로젝트" %}
        {% assign doc_type = doc.collection | default: "page" %}
        {% if doc.layout == "post" %}{% assign doc_type = "blog" %}{% endif %}
        <tr>
          <td><strong>{{ doc.title | default: doc.name }}</strong></td>
          <td>{{ sum | truncate: 120 }}</td>
          <td><span class="badge badge-{{ doc_type }}">{{ doc_type }}</span></td>
          <td><a href="{{ doc.url | relative_url }}" class="btn btn-sm btn-outline">보기</a></td>
        </tr>
      {% endfor %}
      {% if aiot_items.size == 0 %}
        <tr>
          <td colspan="4" style="text-align: center; color: #666; font-style: italic;">
            AIOT 관련 문서를 찾을 수 없습니다. Raspberry Pi, 드론, IoT 관련 문서를 추가해주세요.
          </td>
        </tr>
      {% endif %}
    </tbody>
  </table>
  
  {% if aiot_items.size > 0 %}
  <div class="aiot-stats" style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 5px;">
    <small><strong>발견된 AIOT 프로젝트:</strong> {{ aiot_items.size }}개 문서</small>
  </div>
  {% endif %}
</div>

<style>
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 0.75em;
  border-radius: 10px;
  color: white;
}
.badge-wiki { background: #28a745; }
.badge-blog { background: #007bff; }
.badge-page { background: #6c757d; }
.btn-outline {
  color: #007bff;
  border: 1px solid #007bff;
  padding: 2px 8px;
  text-decoration: none;
  border-radius: 3px;
  font-size: 0.8em;
}
.btn-outline:hover {
  background: #007bff;
  color: white;
}
</style>

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

---
layout: post
title: "Goorm AI워크로드 최적화 클라우드 엔지니어링 트랙 지원"
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

{% assign aiot_keyword = 'aiot' %}
{% assign aiot_posts = site.posts | where_exp: 'p', 'p.keywords contains aiot_keyword' %}
{% assign aiot_pages = site.pages | where_exp: 'p', 'p.keywords contains aiot_keyword' %}
{% assign aiot_wiki = site.wiki | where_exp: 'w', 'w.keywords contains aiot_keyword' %}
{% assign aiot_items = aiot_posts | concat: aiot_pages | concat: aiot_wiki | sort: 'date' | reverse %}

<div class="ai-list">
  <table>
    <thead>
      <tr><th>프로젝트</th><th>설명</th><th>링크</th></tr>
    </thead>
    <tbody>
      {% for doc in aiot_items %}
        {% assign sum = doc.summary | default: doc.excerpt | strip_newlines | default: "AIOT 프로젝트 문서" %}
        <tr>
          <td>{{ doc.title }}</td>
          <td>{{ sum }}</td>
          <td><a href="{{ doc.url | relative_url }}">{{ doc.url | relative_url }}</a></td>
        </tr>
      {% endfor %}
      {% if aiot_items.size == 0 %}
        <tr>
          <td colspan="3" style="text-align: center; color: #666; font-style: italic;">
            AIOT 키워드가 포함된 문서를 찾을 수 없습니다.
          </td>
        </tr>
      {% endif %}
    </tbody>
  </table>
</div>

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

---
layout: post
title: "멋쟁이 사자처럼 AI 트랙 지원"
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

## 멋쟁이 사자처럼 AI 트랙 지원 (Application)

<style>
  /* First table (quick links) */
  .table-zoom { max-width:100%; overflow-x:auto; transform: scale(2); transform-origin: top left; }
  .table-zoom table { border-collapse: collapse; width: 100%; }
  .table-zoom th, .table-zoom td { border: 1px solid #ddd; padding: 6px 10px; }
  .links-head { background:#0052cc; color:#fff; }
  .links-col  { background:#e0f2f1; }
  .desc-col   { background:#fffde7; color:#4e342e; }

  /* Second table (full list) */
  .ai-list { max-width:100%; overflow-x:auto; }
  .ai-list table { border-collapse: collapse; width: 100%; }
  .ai-list th, .ai-list td { border: 1px solid #ddd; padding: 6px 10px; }
  .ai-list thead th { background:#222; color:#fff; }
  /* accounting-style stripes: even rows shaded */
  .ai-list tbody tr:nth-child(odd)  { background: #ffffff; }
  .ai-list tbody tr:nth-child(even) { background: #f3f6fa; }
  .ai-list td:nth-child(2) { background:#e6f0ff; } /* summary column */
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
        <td class="links-col"><a href="https://colab.research.google.com/drive/12LVMjPAzTROjKxoLqEG5Q4fYg3zkdFnt">과제 답안 링크</a></td>
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

## Other AI tracks (auto, tag = likelion)

<style>
  .ai-list {
    max-width: 100%;
    overflow-x: auto;
    margin-top: 200pt; /* push down due to zoomed table above */
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

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

---
name: Short-circuit evaluation 
layout: post
permalink: term-short-circuit-evaluation.html
sidebar: other_sidebar
collection: wiki
summary: " 단축평가 terminology Short-circuit-evaluation short-circuiting minimal-evaluation McCarthy-evaluation "
tags: [wiki]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 7:13 AM
toc: true
public: true
parent: [[Term-Category]]
latex: false
---
* TOC
{:toc}

## Short-circuit evaluation

* 용어를 자꾸 까먹어 기록함
* `AND` 혹은 `OR`의 연산에 있어 결과가 확실하게 예측 될때 나머지 연산을 실행하지 않고 답을 내버리는 동작을 의미합니다.
* if문을 사용하지 않고 조건부 동작을 할 수 있어 표현식이 단순해지는 효과가 있습니다.

### 표준 용어 여부 확인

1. **Short-circuit evaluation**, **Short-circuiting**
  * short-circuiting, 2020-08-04 현재, 420개 질문, [short-circuiting, stackoverflow 태그 여부 확인 완료](https://stackoverflow.com/questions/tagged/short-circuiting)
  * short-circuit-evaluation, 2020-08-04 현재, 9개 질문, [short-circuit-evaluation, stackoverflow 태그 여부 확인 완료](https://stackoverflow.com/questions/tagged/short-circuit-evaluation)
  * [Short-circuit evaluation, en.wikipedia  용어 등록 여부 확인 완료](https://en.wikipedia.org/wiki/Short-circuit_evaluation)
1. **minimal evaluation**
  * [minimal evaluation, en.wikipedia  용어 등록 여부 확인 완료](https://en.wikipedia.org/wiki/Short-circuit_evaluation)
1. **McCarthy evaluation**
  * [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist): 인공지능 연구로 튜링상 수상(1971), 리스프 언어 설계함
  * [McCarthy evaluation, en.wikipedia  용어 등록 여부 확인 완료](https://en.wikipedia.org/wiki/Short-circuit_evaluation)

### 참고

* [25+ JavaScript Shorthand Coding Techniques](https://www.sitepoint.com/shorthand-javascript-techniques/#2shortcircuitevaluationshorthand)

### 사용시 부작용

* [Be aware of the short-circuit behavior ...](https://wiki.sei.cmu.edu/confluence/display/c/EXP02-C.+Be+aware+of+the+short-circuit+behavior+of+the+logical+AND+and+OR+operators)
* [Watch out for Side-effects](https://chortle.ccsu.edu/Java5/Notes/chap40/ch40_3.html)

{% include links.html %}

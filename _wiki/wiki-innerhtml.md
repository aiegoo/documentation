---
name: developer mode
layout: post
permalink: wiki-innerhtml.html
sidebar: other_sidebar
collection: wiki
summary: "View 에서 가져온 data 를 표기하는 과정에서 문득 value, textContent, innerHTML, innerText의 차이"
tags: [wiki, web]
excerpt_separator: <!--more-->
date: 2021-09-25 17:37:03 +0900
updated: 2021-09-25 5:50 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
---

* TOC
{:toc}

### sample

```html
<div id="div1"> 
  good evening 
  <span>hello</span>
  <span style="display:none">ya</span>
</div>
```

### value
- input과 같은 form 요소의 값을 가져오고 싶을 때는 .value 를 사용한다.

### innerHtml
- innerHTML은 말 그대로 HTML 태그 요소들까지 입력해서 직접 변경할 수 있다.
- 이러한 부분 때문에 XSS 공격에 취약할 수가 있다고 한다.
XSS 공격이란? : 웹 브라우저에서 사용자가 입력할 수 있는 input 태그 등에 악의적인 script를 작성하여 해당 컨텐츠를 이용하는 다른 이용자의 개인정보 및 쿠키정보 탈취 / 악성코드 감염 / 웹페이지 변조 등의 공격을 말한다.

```javascript
document.getElementById("div1").innerHTML 
//result : good evening <span>hello<span><span style="display:none;">ya</span>
```

### innerText

- innerText는 마크업 언어가 적용된 상태로 읽어온다. 즉 태그와 마크업 언어와 같은 태그값은 불러들이지 않는다.
- 사용자가 보이는 상태 style등 마크업 언어가 적용된 상태이다. 따라서 사용자에게 보이지 않는 값들은 아예 불러들이지 않는다.
- 즉 display : none; 한 값들은 불러들이지 않는다.

```javascript
document.getElementById("div1").innerText 
//result : good evening hello
```

### textContent

- div 나 span 등의 요소 안에 있는 text를 읽고 싶을 때는 .textContent 를 사용한다.
- 마크업 태그를 제외한 모든 문자열을 읽고 변경할 수 있다.
- innerHTML은 textContent에 비해서 매번 스타일링까지 적용해서 헤비한 메소드이다. 따라서 textContent를 이용하는 것이 성능적으로 좋은 퍼포먼스를 보인다.
- innerText는 사용자에게 보이지 않는 텍스트 값은 가져오지 않지만, textContent는 마크업 태그를 제외한 텍스트라면 모두 불러들일 수 있다.

```javascript
document.getElementById("div1").innerText 
//result : good evening hello ya
```


{% include links.html %}

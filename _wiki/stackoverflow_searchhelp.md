---
name: 스택 오버플로우에서 검색 하기 
layout: post
permalink: stackoverflow_searchhelp.html
sidebar: other_sidebar
collection: wiki
summary: " 누구보다 빠르게 난 남들과는 다르게 ..."
tags: [wiki]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 11:23 AM
toc: true
public: true
parent: [[Term-Category]]
latex: false
---
* TOC
{:toc}

아마 계속 작업중 ...

## 1. 발단

* stack overflow에서 태그를 클릭할 경우 ...
  ![태그 가리키는 짤](wiki-img/2020/stackoverflow-01.png)
* 이렇게 해당 태그를 포함하는 질문 목록이 나온다.
  ![태그 관련 목록 짤](wiki-img/2020/stackoverflow-02.png)
* 그런데 여기에 태그를 한 개 더해주면 ... and 효과로 범위를 더 좁힐 수 있다
  ![태그 두개 짤](wiki-img/2020/stackoverflow-03.png)
* 추가로 태그에 없는 문자열을 포함해서 ... 원하는 답변을 더 빨리 찾을 수 있다.
  * 그런데 .. [누구보다 빠르게 난 남들과는 다르게 ... 유래](https://namu.wiki/w/%EB%88%84%EA%B5%AC%EB%B3%B4%EB%8B%A4%20%EB%B9%A0%EB%A5%B4%EA%B2%8C%20%EB%82%9C%20%EB%82%A8%EB%93%A4%EA%B3%BC%EB%8A%94%20%EB%8B%A4%EB%A5%B4%EA%B2%8C) 

## 2. 전개

* 이걸 계기로 stack oveflow의 [serach help 페이지](https://stackoverflow.com/help/searching)를 번역해 보기로 했다.
* 구글 번역으로 1차 번역, 이상한 것만 찾아서 2차 번역
* 아래에서 inline html 적용하기 위해 아래 링크를 참조했다
  * stack overflow 질문 : [Inline HTML is escaped by Jekyll](https://stackoverflow.com/q/47262698/9457247)
    * [첫번째 답변](https://stackoverflow.com/a/47274069/9457247) 에서 nomarkdown extension을 사용하는 방법 Get
  * [MDN 키보드 입력 요소의 CSS 설정](https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd)
  * 써먹을 게 많이 나올줄 알았는데 `Enter` 한 개 있네

## 3. 번역결과
* 원본 링크 : [https://stackoverflow.com/help/searching](https://stackoverflow.com/help/searching) ,2020년 5월 15일자 번역이후 업데이트 안함.

### 어떻게 검색 하나요?

모든 페이지에서 상단 표시 줄의 왼쪽 가운데에 표시되는 검색 상자에 검색어를 입력하고 {::nomarkdown}<kbd>Enter</kbd>{:/}를 누르십시오.

(작은 화면에서는 먼저 텍스트 상자를 표시하기 위해 검색 버튼![버튼그림](https://i.stack.imgur.com/5F2Qd.png)을 활성화해야 할 수도 있습니다.)

검색 범위를 더 좁히려면 다음과 같은 몇 가지 기본 팁을 참조하십시오.

* 특정 태그 내에서 검색하려면 대괄호 안에 입력하십시오. `[maintenace] seat` 은 [maintenance] 태그 내에서 "seat"에 대한 언급을 검색합니다.
* (공백 문자를 포함하는) 특정 문구를 찾으려면 따옴표로 묶어 `"flat tire"`처럼 입력하십시오.
* 검색범위를 질문 제목으로만 제한하려면 `title:`과 검색어를 사용하십시오. 마찬가지로 `body:"phrase here"`로 본문에서만 검색하십시오 (제목 제외).
* 코드 블록 내에서만 검색하려면: 
  `code:"new"`는 게시물 내의 코드 블럭 내에서 "new"라는 단어를 검색합니다.
* 나의 게시물 만 검색하려면: 
  `user:me training`은 당신이 작성한 모든 게시물에서 "training"이라는 단어를 검색합니다.
* 태그, 용어 또는 문구에서 결과를 제외하려면 검색어 앞에 접두사 `-`를 붙이십시오. `waffles -unicorns`는 신화적인 생물을 포함하지 않고 맛있는 반죽 베이스의 아침 식사를 언급하는 게시물을 찾는 반면 `[laurel] -[hardy]`는 고전 코미디 커플([1930년대 로렐과 하디](https://namu.wiki/w/%EB%A1%9C%EB%A0%90%EA%B3%BC%20%ED%95%98%EB%94%94)) 검색결과중 (하디를 포함하지 않는) 로렐의 검색결과만 찾는다.
* 와일드 카드 검색을 사용하여 검색 결과를 확장합니다; `encour*` 또는 `Ex*nge`와 같이 단어의 아무 곳에 나 별표(*)를 추가하십시오.

### 고급 검색 옵션:

매우 구체적인 정보를 찾는 데 도움이되는 여러 가지 고급 검색 연산자를 제공합니다.

#### 범위 연산자

특정 범위의 **score** 또는 **answers**의 갯수 또는 특정 범위의 **views**의 갯수에 속하는 질문만 검색하려면 upper 또는 lower 매개 변수 또는 range를 입력 할 수 있습니다.

* `score:-1` 또는 `score:-1..`은 둘다 -1 이상의 점수를 가진 게시물을 보여줍니다. (-1 포함)
* `views:500..1000`또는 `views:500-1000`은 조회수가 500 ~ 1000 인 게시물을 보여줍니다.
* `answers:..3`은 3 개 이하의 답변으로 질문을 반환합니다. (3개 포함)

#### 날짜

다음의 연산자를 이용해 특정 기간 내에 생성되거나 활성화 된 게시물로 결과 범위를 좁힐 수 있습니다.

* `created:` 게시물 작성시기를 지정합니다.
* `lastactive:` 지정된 기간 동안 활성화 된 게시물

날짜는 다음 형식으로 입력 할 수 있습니다.
 
* 날짜 절대값 지정 :
  * *년도만 지정* – 예 : `created:2012..2013`은 2012년 1월1일부터 2013년 12월31일까지 작성된 게시물을 검색합니다. `created:2012`는 2012년 1월1일부터 2012년12월31일까지 작성된 게시물을 검색합니다.
  * *년도및 월 지정* – 예 : `created:2012-04..2012-05`는 2012년 4월1일과 2012년 5월31일 사이에 생성 된 게시물을 검색합니다.
  * *일,월및 연도 지정* – 예 : `lastactive:2012-04-03`은 2012년 4월3일 오전12시와 2012년 4월3일 오후11시59분 사이에 마지막으로 활성화 된 게시물을 검색합니다.

* 날짜 상대값 지정 :

  * `1y`, `1m` 및 `1d`는 "작년", "지난 달"및 "어제"의 약자입니다. 예를 들어 오늘이 4월15일인 경우 `created:1m`은 3월1일에서 3월31일 사이에 생성된 게시물을 검색합니다. ( `1`을 변경하여 몇 년, 몇 달 또는 몇 일전의 게시물을 검색할수 있습니다)
  *  범위 (`1y..`)의 상대 날짜는 이전 기간의 동일한 날짜로 되돌아갑니다. 예를 들어 지난 3개월 동안 활성화 된 모든 게시물을 보려면 `lastactive:3m..`을 사용하십시오. 4월15일이었다면, 1월15일부터 가장 최근까지 활성화 된 게시물을 표시합니다. `lastactive:3m..1m`처럼 범위를 닫을 수도 있습니다.

**주목하세요.** 모든 시간은 UTC로 기록됩니다. 결과가 당신의 시간대와 일치하지 않을 수 있습니다.


#### 사용자 연산자

검색을 특정 사용자의 콘텐츠 (당신 자신 또는 다른 사람의 콘텐츠)로 제한 할 수도 있습니다. 다른 사용자의 게시물을 검색하려면 사용자 ID가 필요합니다.

* `user:mine` 또는 `user:me` (또는 모든 사용자 ID)는 당신의 게시물(또는 ID를 입력 한 사용자의 게시물)만 반환합니다.
* `inbookmarks:mine` (또는 모든 사용자 ID)은 당신(또는 사용자가 입력 한 사용자)이 북마크 한 질문 만 반환합니다.
* `intags:mine`은 즐겨 찾기(favorite)로 표시 한 태그에 나타나는 게시물만 반환합니다.(태그가 없으면 이 연산자는 아무 작업도 수행하지 않습니다. 더 나은 결과를 얻으려면 환경 설정을 업데이트하십시오.)

#### 부울 연산자

다음 검색 연산자를 yes/no, true/false 또는 1/0 값과 함께 사용할 수 있습니다 (각 쌍은 동일하게 동작 함).

* `isaccepted:` yes/true/1 은 "accepted"로 표시된 **답변**만 반환합니다. no/false/0 은 승인되지 않은 답변만 반환합니다.
* `hascode:` yes/true/1 은 코드 블록이 포함된 게시물만 반환합니다. no/false/0 은 코드가 없는 게시물만 반환합니다.
* `hasaccepted:` yes/true/1 은 답변을 수락한 **질문**만 반환합니다. no/false/0 은 응답이 없는 질문만 반환합니다.
* `isanswered:` yes/true/1 은 최소한 하나의 긍정적인(positively-scored) 답변이 있는 질문만 반환합니다. no/false/0 은 긍정적 점수가 없는 질문만 반환합니다.
* `closed:` yes/true/1 은 마감된(closed) 질문만 반환합니다. no/false/0 은 검색에서 마감된 질문을 제외합니다.
* `duplicate:` yes/true/1 은 다른 질문의 중복으로 표시된 질문을 반환합니다. no/false/0 은 검색에서 중복 질문을 제외합니다.
* `migrated:` yes/true/1 은 다른 사이트로 마이그레이션 된 질문 만 반환합니다. no/false/0 은 마이그레이션 된 질문을 검색에서 제외합니다.
* `locked:` yes/true/1 은 잠긴 게시물 (편집, 투표, 의견 및 새로운 답변이 비활성화 된 게시물) 만 반환합니다. no/false/0 은 잠겨있지 않은 게시물만 반환합니다.
* `hasnotice:` yes/true/1 은 아래에 알림이 표시된 게시물만 반환합니다. no/false/0 은 알림이 적용되지 않은 게시물만 반환합니다.
* `wiki:` yes/true/1 은 [커뮤니티 위키](http://meta.stackexchange.com/questions/11740/what-are-community-wiki-posts) 게시물 만 리턴합니다. no/false/0 은 비 커뮤니티 위키 게시물만 반환합니다.

### OR 연산자

여러 태그의 결과를 결합하려면 (대괄호로 묶인) 태그 이름을 단어 "or"로 구분하십시오. `[widgets] or [geegaws]`는 각 태그가 지정된 질문을 모두 반환합니다.
( 번역자 주: `or` 없으면 `and` 로 결합 )

### 기타 연산자

* `url:"example.com"` 은 "example.com"URL이 포함된 게시물을 검색합니다.
* `is:question` 은 검색 결과를 단지 질문으로 좁히고 `is:answer`는 답변의 검색 결과만 반환합니다.
* `inquestion:50691` 은 ID가 50691 인 질문으로 검색을 제한합니다. 질문 페이지의 검색 상자를 사용하여 검색하는 경우 `inquestion:this`를 사용하여 이미보고있는 게시물로 결과를 제한 할 수 있습니다.

### 삭제 된 게시물 (10,000 reputation이 필요함)

[중재자 도구에 액세스 권한](https://stackoverflow.com/help/privileges/moderator-tools)을 얻으면 `deleted:` 연산자를 사용하여 자신의 삭제된 게시물을 검색 할 수 있습니다.

* `deleted:1` 삭제 된 게시물에서만 검색합니다.
* `deleted:all` 은 당신이 작성한 삭제된 혹은 삭제되지 않은 게시물 모두를 검색합니다
* `deleted:0` 은 사용자가 작성한 삭제되지 않은 게시물 만 검색합니다 (실질적으로 `user:me`와 동일).

[사이트 운영자](https://stackoverflow.com/help/site-moderators)는 이 연산자를 사용하여 다른 사용자가 소유한 게시물을 포함하여 사이트의 모든 게시물을 검색할 수 있습니다.

## 4. 결론및 활용

### 같이 알면 좋은 링크

* [Stack Overflow에는 어떤 태그가 있는지 알고 싶을때](https://stackoverflow.com/tags) : 2020년 5월 현재 1719 (9x4=36개/페이지, 61,884개정도?)페이지나 된다. 검색 해보자.
  * 2020년 5월 15일 현재 가장 Popular한 태그는 javascript ( 태그를 단 article이 2,007,023개 )
* [번역글, 내가 StackOverflow를 사용하는 방법, 2017/04/15](https://rinae.dev/posts/how-i-use-stackoverflow-kor) : StackOverflow 사용 경험 공유
* [나를 위한 StackOverflow 명성(Reputiona) 쌓기](https://blog.kimkevin.net/how_to_earn_reputation_stackoverflow/) : StackOverflow 에서 명성 올리는 방법

### Stack Overflow에서 검색시 써볼만한 옵션 응용

* `[tag1] [tag2]` : 태그 중첩으로 범위 좁히기

### Stack Overflow에 등록된 관심있는 태그

* [google-apps-script](https://stackoverflow.com/questions/tagged/google-apps-script) : 구글 앱스 스크립트
* [google-sheets-formula](https://stackoverflow.com/questions/tagged/google-sheets-formula) : 구글 시트 수식

### Stack Overflow Help Center 에서 관심있는 article

* [How do I find topics I'm interested in?](https://stackoverflow.com/help/interesting-topics) : 관심있는 주제 찾는 방법?
*

## 이번 문서 작성으로 얻은 점

* kbd 태그의 inline html 적용으로 문서 표현이 풍부해짐 ( 다른 곳에도 써먹을 수 있다) 
  * {::nomarkdown}<kbd>Enter</kbd>, <kbd>Ctrl</kbd>+ <kbd>c</kbd>{:/}
  * 여러가지 kbd 태그 style [링크](https://auth0.github.io/kbd/)
    * 위 링크에서 kbd 태그가 적용된 엘리먼트는 hover, 클릭동작 표현이 모두 적용되어 있다. 한 번 눌러보자
    * Game에 응용할 수도 ...?

{% include links.html %}

---
name: 오늘의 영감 
layout: post
permalink: 2020-04-28-todays-ideas.html
sidebar: other_sidebar
collection: wiki
summary: ""
tags: [wiki, blog]
excerpt_separator: <!--more-->
date: 2020-04-28 00:35:32 +0900
updated: 2021-10-10 10:10 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/documentation/issues
folder: diary
youtubeID: jBLaP-XwGE8
youtubeID2: IXglpmzFfBA
driveID: 1v8L4SaELogEU0gRyGa2b5X-WWs9NE4Ly
next_post: 2020-04-30-todays-ideas.html
previous_post: 2020-04-18-todays-ideas.html
---
* TOC
{:toc}

# gif 파일 게시할때 클릭시 재생되도록 하기

* [How to Play Animated GIFs onClick](https://www.hongkiat.com/blog/on-click-animated-gif/) : 주요 아이디어는 나쁘지 않음
  * github clone 하여 그냥 index.html 실행시 동작 안됨 
    * cdn 불러오는 곳에 `https:`가 빠져있으므로 추가해줘야 동작 (로컬에서 실행해서 그런가??)
  * Javascript Code에 불필요한 것이 많은듯..
    * 어차피 toggle 형식이므로 toggle 할 때마다 imgSrc, imgAlt를 바꿔주면 되어서 if문 필요없음.

* [online png toools / convert gif to png](https://onlinepngtools.com/convert-gif-to-png) : gif 파일 편집하는 온라인 도구 
  * 위의 아이디어 구현시 gif 파일 첫번째 프레임이 필요한데 이곳에서 얻을수 있음
  * 로컬 머신에 있는 gif 파일을 업로드해야함 (온라인에서 바로 연결하면 좋은데 .. )

# GitHub 가 팀 기능이 공짜

* [GitHub is free for teams](https://github.blog/2020-04-14-github-is-now-free-for-teams/)
  * 이걸 잘 사용해볼 수 있을까?
  * 어떻게 사용하는지 여러가지 읽어보자
    * [GitHub 패키지 저장소 호스팅: GitHub Package Registry 시작하기](https://musma.github.io/2019/09/30/github-package-registry.html) : 팀내에서 사용할 패키지를 오픈소스 패키지와 다르게 팀내 저장소에서 배포?
    * [Git기반의 위키: Gollum](https://blog.outsider.ne.kr/579) : Git 기반의 위키,  팀 플랜과 결합하면??
    * [빠르고 가벼운 개인용 마크다운 위키 - 비트버킷과 골룸을 활용, 놀부](https://nolboo.kim/blog/2013/12/17/markdown-wiki-bitbucket-gollum/) : 어떻게 활용하나... 일단 읽어보자


# GITHUB DROP ICE ?

* vim의 유명 플러그인 개발자 tim pope의 github를 방문했다가 다음과 같은 문구(**github drop ice**)를 발견했다
![tpope github drop ice]( wiki-img/2020/tpope_github_drop_ice.jpg )
  * github가 얼음을 떨어뜨렸다 ?? drop ice라는 숙어가 있나 해서 찾아봤는데...
  * [ice drop](https://en.wiktionary.org/wiki/ice_drop) : 우리나라에서 `하드`라고 불리는 냉동 주스(?) 밖에 못찾았었는데..( `popsicle`이라고도 한다.)
    {% include image.html links="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dongbei_Daban_ice-cropped.jpg/130px-Dongbei_Daban_ice-cropped.jpg" caption="popsicle" %}
{% highlight html %}<img alt="my awesome image"
src="banner.jpeg"
srcset="banner-HD.jpeg 2x, banner-phone.jpeg 640w, banner-phone-HD.jpeg 640w 2x">{% endhighlight %}

  * 앞에 붙어있는 Github에 주목해서 찾아봤더니 이런 내용이 있었다. [dear-github-2.0](https://github.com/drop-ice/dear-github-2.0)
    * 테이블을 만들어 해석을 붙이려고 [kramdown 테이블 작성법](https://kramdown.gettalong.org/syntax.html#tables)을 찾아봤는데 multiline은 안된다고 한다. 즉 한줄에 한셀만 넣을수 있다. 한 문단을 넣으려면 줄로 자르지 말고 길게 한줄로 넣어야 함..
    > Header rows, footer rows and normal rows are all done using these table rows. Table cells can only contain a single line of text, **no multi-line text is supported.** The text of a table cell is parsed as span-level elements.

    * 사용법을 요약해놓은 사례는 다음과 같다

      |---
      | Default aligned | Left aligned | Center aligned | Right aligned
      |-|:-|:-:|-:
      | First body part | Second cell | Third cell | fourth cell
      | Second line |foo | **strong** | baz
      | Third line |quux | baz | bar
      |---
      | Second body
      | 2 line
      |===
      | Footer row

    * 해석 ( 구글 번역으로 1차 번역하고 이상한 부분만 조금씩 손봤다. 구글 만세~ )

|:-:|:-:
| 영어 | 한글 
|-|-
| Dear GitHub | 친애하는 GitHub | 
| Almost 4 years ago, a group of open source maintainers wrote you a letter expressing their frustration that the platform they love most was ignoring their request for help. [You stepped up your game](https://m.blog.naver.com/PostView.nhn?blogId=koreanstyl3&logNo=221232186791&proxyReferer=https:%2F%2Fwww.google.com%2F), and started paying attention, fixing things that were broken, and building new experiences that have gone above and beyond what we asked for. | 거의 4 년 전, 오픈 소스 관리자 그룹은 그들이 가장 사랑하는 플랫폼이 도움 요청을 무시하고 있다는 좌절감을 나타내는 서한을 보냈습니다. 당신은 좀더 제대로 일을했고, 집중하기 시작했으며, 깨진 것들을 고치고, 우리가 요구 한 것 이상으로 새로운 경험을 쌓기 시작했습니다.
  | Now, we are asking you to help again. GitHub's leadership recently chose to renew a contract to provide GitHub Enterprise Server to the Enforcement and Removal Operations (ERO) division of United States Immigrations and Customs Enforcement (ICE). This government agency is actively committing numerous crimes and human rights violations, in contravention of both US and international law. ICE conducts random violent raids throughout the United States, invades communities and workplaces with military equipment, detains buses and trains, and arrests people solely on the basis of their perceived nationality, skin color, or native language. Their agents lurk outside of schools in order to abduct the children of immigrants and force their families to surrender themselves into custody. ICE imprisons people in deplorable and unsanitary conditions and denies them medical care. They separate the children they imprison from their families and offer them for adoption by others via agencies with shady histories. ICE agents subject both the adults and children they imprison to horrific physical, psychological, and sexual abuse. They continue to commit these heinous acts in defiance of multiple judgments issued by US courts and condemnations by humanitarian organizations. Many people, including children, have now died in their custody. | 이제 다시 도와달라고 요청합니다. GitHub의 리더십은 최근 미국 이민국 및 관세 집행 (ICE)의 ERO (Enforcement and Removal Operations) 부서에 GitHub Enterprise Server를 제공하는 계약을 갱신하기로 결정했습니다. 이 정부 기관은 미국과 국제법을 위반하여 수많은 범죄와 인권 침해를 적극적으로 저지르고 있습니다. ICE는 미국 전역에서 무작위로 폭력적인 공격을 수행하고, 군용 장비를 사용하여 지역 사회와 직장에 침입하고, 버스와 기차를 억류하며, 인식 된 국적, 피부색 또는 모국어만으로 사람들을 체포합니다. 그들의 대리인은 이민자 자녀를 납치하고 가족이 자신을 양육하도록 강제하기 위해 학교 밖에서 숨어 있습니다. ICE는 비참하고 비위생적 인 환경에 처한 사람들에게 의료 서비스를 거부합니다. 그들은 투옥 된 자녀를 가족과 분리시키고 그늘진 역사를 가진 기관을 통해 다른 사람들이 입양하도록 제안합니다. ICE 상담원은 성인과 어린이 모두 끔찍한 신체적, 심리적, 성적 학대를 당합니다. 그들은 미국 법원이 발행 한 다수의 판결과 인도주의 단체의 비난을 무시하면서 이러한 끔찍한 행동을 계속하고 있습니다. 아이들을 포함한 많은 사람들이 현재 구류기간중에 죽었습니다.
| At the core of the open source ethos is the idea of liberty. Open source is about inverting power structures and creating access and opportunities for everyone. We, the undersigned, cannot see how to reconcile our ethics with GitHub's continued support of ICE. Moreover, your lack of transparency around the ethical standards you use for conducting business is also concerning to a community that is focused around doing everything out in the open. We want to know that the platform we have invested so much of our time and energy in is operating in a way that is consistent with the values of open source software development. | 오픈 소스 정신의 핵심은 자유의 개념입니다. 오픈 소스의 본질은 권력 구조를 뒤집고 모든 사람을위한 액세스 및 기회를 창출하는 것입니다. 서명한 우리는 GitHub의 지속적인 ICE 지원으로 윤리를 조정하는 방법을 알 수 없습니다. 또한 비즈니스 수행에 사용하는 윤리 기준에 대한 투명성 부족은 개방 된 환경에서 모든 것을 수행하는 데 중점을 둔 커뮤니티에도 관련이 있습니다. 우리는 많은 시간과 에너지를 투자 한 플랫폼이 오픈 소스 소프트웨어 개발의 가치와 일치하는 방식으로 운영되고 있음을 알고 싶습니다.
| We therefore call upon GitHub to: | 따라서 GitHub에 다음을 요청합니다.
| * Immediately cancel your contract with ICE | * 즉각 ICE와의 계약을 취소하십시오 
| * Commit yourself to a higher ethical standard with all of your business dealings, and share that standard with the open source community, the same way you do with your Terms of Service and other community standards. | * 모든 비즈니스 거래에서 더 높은 윤리적 표준을 준수하고 서비스 약관 및 기타 커뮤니티 표준과 동일한 방식으로 오픈 소스 커뮤니티와의 표준을 공유하십시오 
| We still believe in GitHub as a platform, as a place to help the open source community make the world a genuinely better place. Please, step up and join us. | 우리는 여전히 오픈 소스 커뮤니티가 세상을 진정으로 더 나은 곳으로 만드는 데 도움이되는 장소로서 GitHub를 플랫폼으로 믿고 있습니다. 제발, 우리와 함께하십시오.

* 그리고, 위의 letter 아래 연판장 식으로 서명이 쭉 나열되어 있는데 그 중에 tim pope도 있었다.
* 이름은 잘 모르지만... Co-Chair , CEO, 등등 직급과 함께 유명 단체및 Open Source들 ( W3C, RustSec, Oh My Zsh, Swift ...) 이 있는걸 보니 영향력은 있을듯...
* Github가 말을 안들으면.. Bitbucket으로 가나 ...


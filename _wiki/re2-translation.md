---
name: RE2 번역 
layout: post
permalink: stackoverflow_searchhelp.html
sidebar: other_sidebar
collection: wiki
summary: " 구글 RE2 "
tags: [wiki, re2, regex, latex, mathjax]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 11:23 AM
toc: true
public: true
parent: [[Term-Category]]
latex: false
---
* TOC
{:toc}

# 1. 개요

## 링크

* [RE2, github](https://github.com/google/re2)

## 이번글의 특징

* LaTex 사용해봄(봉인 해제..) 
  * 사용방법 : 해당 글의 Front matter에서 latex : false로 되어있는데 true로 변경하면됨
  * 사용법 : [MathJax로 LaTex 사용하기](https://johngrib.github.io/wiki/mathjax-latex/)
  * 관련링크 [MathJax 홈페이지](https://www.mathjax.org/) 
  * Johngrib님 위키를 따라 했다면 이미 적용되어 있음
    * [root / _includes / footer.html 참조](https://github.com/honggaruy/honggaruy.github.io/blob/master/_includes/footer.html)

# 2. re2 wiki

* 원문 링크 : [RE2, github wiki](https://github.com/google/re2/wiki)
 
## WhyRE2

* *Safety is RE2's raison d'être.* 
  * 갑자기 웬 프랑스어
  * 의미를 해석해보면 "안전은 RE2의 존재 이유입니다."
    * 참고 :  [레종 데트르와 레종 데따](https://m.blog.naver.com/PostView.nhn?blogId=ilovemofat&logNo=140056680950&proxyReferer=https:%2F%2Fwww.google.com%2F)
  * [위키피디어에 의하면](https://en.wikipedia.org/wiki/Raison_d%27%C3%AAtre) 영어에서 많이쓰는 French 표현 이라고 한다.
  * 강조하려고 일부러 그런듯..
 
* 문단 1
  * RE2는 다음과 같은 명확한 목표하에 설계되고 구현되었습니다.
    * 인증받지않은 사용자의 정규식 입력을 리스크없이 다룰수 있도록 하겠다
  * 주요 보장중의 하나는 다음과 같습니다
    * 일치 검색 시간이 입력 문자열의 길이와 선형적으로 비례한다는 겁니다
  * 또한 생산적인 측면 또한 고려되어 작성되었습니다
    * 파서, 컴파일러, 실행 엔진은 configurable budget내에서 작동하여 메모리 사용량을 제한합니다
      * 즉, 메모리가 고갈되면 우아하게 에러를 처리합니다
    * 그리고 재귀를 피해 스택 오버플로우를 방지합니다 
 
* 문단 2
  * 모든 환경에서 모든 다른 엔진보다 속도가 빠르고자 하는 것이 목표가 아닙니다
  * RE2는 선형 시간 성능을 보장하지만, 
    * 선형 시간 상수는 정규식의 안전한 처리에 수반되는 오버헤드에 따라 달라집니다.
    * 어떤 의미에서는, backtracking 엔진이 낙관적으로 동작하는 반면에 RE2는 비관적으로 동작합니다
      * 따라서 다양한 상황에서 예상되는 성능을 능가할 수 있습니다 
        
* 문단 3
  * Perl, PCRE 와 다른 엔진이 제공하는 모든 기능을 지원하는 것 또한 목표가 아닙니다
  * 원칙적으로, RE2는 backtracking 솔루션만 존재하는 것으로 알려진 구조를 지원하지 않습니다
  * 따라서, backreferences와 주변보기 assertions이 지원되지 않습니다

* 자세한 내용은 정규 표현식 이론 및 실습에 대한 Russ Cox의 기사를 참조하세요
  * [Regular Expression Matching Can Be Simpl And Fast](https://swtch.com/~rsc/regexp/regexp1.html)
  * [Regular Expression Matching: the Virtual Machine Approach](https://swtch.com/~rsc/regexp/regexp2.html)
  * [Regular Expression Matching in the Wild](https://swtch.com/~rsc/regexp/regexp3.html)

## Syntax

* 정규 표현식은 문자열 세트(character strings)를 설명하기 위한 표기법(notations)입니다
* 특정한 문자열이 정규 표현식으로 표현된 문자집합을 가질 때,
  * 정규 표현식이 문자열과 match되었다고 말합니다
* 가장 간단한 정규식은 단일 리터럴 문자입니다
  * `*+?()|`과 같은 메타 문자를 제외하고 문자는 자신과 match됩니다
  * 메타 문자와 match하려면, backslash로 escape합니다
    * 즉, `\+`는 literal 플러스 문자와 match됩니다
* 두 개의 정규 표현식은 서로 대체 되거나 연결하여 새로운 정규표현식을 구성할 수 있습니다
  * 즉, $e_1$가 $s$에 match하고 $e_2$가 $t$와 match한다면..
    * $e_1$`|`$e_2$도 $s$나 $t$에 match하고 $e_1e_2$도 $st$에 match한다
* 메타문자 `*`,`+`,`?`는 반복 연산자입니다:
  * $e_1$`*`는 0개 이상의 (아마도 다른)strings의 sequence와 match됩니다
    * 위에서 각각의 string은 표현식 $e_1$과 match됩니다 
  * $e_1$`+`는 1개 이상과 match되며
  * $e_1$`?`는 0 혹은 1개와 match됩니다
* 약한 binding부터 강한 binding 순서로 연산자 우선순위는..
  * 첫번째가 교대(alternation, `|`), 그 다음이 연결(concatenation) 마지막이 반복(repetition) 연산자입니다
  * 명시적 괄호(Explicit parentheses)는 이 우선순위에 예외를 줄 수 있습니다.
    * 수학 표현식에서와 마찬가지로요
    * 예를 들자면
      * `ab|cd`는 `(ab)|(cd)`와 같습니다. - `b|c`의 alternation 이 `ab`의 concatenation보다 약함 
      * `ab*`는 `a(b*)`와 같습니다. - `ab` 의 concatenation 보다 `b*` 의 반복(repetion) 이 강함
* 지금까지 설명한 내용은 Unix *egrep* 정규 표현식의 문법의 대부분입니다.
  * 이 부분집합(subset)은 모든 정규식 언어을 묘사하는데 충분합니다
  * 느슨하게 말하면, 정규식 언어(regular language)는 ... 
    * text를 고정된 크기의 메모리를 사용하여 한번 통과하여 일치시킬수 있는 ..
    * 문자열 집합입니다.
  * 최신의 정규 표현식 기능(특히 Perl과 그 복제품들)은 ..
    * 많은 신규 연산자와 escape squence를 추가했는데.. 
    * 이들은 정규식을 간결하게 만들기도 하지만..
    * 가끔은 좀더 혼동을주며, 보다 강력한것 같지도 않습니다.
* 이 페이지는 RE2에서 허용된 정규 표현식 문법의 목록입니다
* PCRE, PERL, VIM에서 허용된 일부 문법 또한 포함됩니다

###  단일 문자 표현식의 종류

| 단일 문자 표현식의 종류                            | 예제           |
| :--                                                | :--            |
| 모든 문자, 개행문자 포함(s=true)                   | `.`            |
| 문자 클래스                                        | `[xyz]`        |
| 문자 이외 클래스                                   | `[^xyz]`       |
| Perl 문자 클래스 ([link](#perl-문자-클래스))       | `\d`           |
| Perl 문자 이외 클래스                              | `\D`           |
| ASCII 문자 클래스                                  | `[[:alpha:]]`  |
| ASCII 문자 이외 클래스([link](#ascii-문자-클래스)) | `[[:^alpha:]]` |
| Unicode 문자 class (한 글자 이름)                  | `\pN`          |
| Unicode 문자 class                                 | `\p{Greek}`    |
| Unicode 문자 이외 클래스 (한 글자 이름)            | `\PN`          |
| Unicode 문자 이외 클래스                           | `\P{Greek}`    |


### Composites

|       | 합성문자                   |
| :--   | :--                        |
| `xy`  | `x` 다음에 오는 `y`        |
| `x│y` | `x` 아니면 `y` (`x` 우선 ) |

### Repetitions

<style>
.notsupport-repet tr:nth-child(n+13) { background: lightgrey; }
</style>


{: .notsupport-repet}
|           | 반복문자                                              |
| :--       | :--                                                   |
| `x*`      | 0개 이상의 `x`, 많은쪽 선호                           |
| `x+`      | 1개 이상의 `x`, 많은쪽 선호                           |
| `x?`      | 0개 혹은 1개의 `x`, 1개를 선호                        |
| `x{n,m}`  | `n` 이나 `n`+1 이나 ... 이나 `m`개의 `x`, 많은쪽 선호 |
| `x{n,}`   | `n`개의 이상의 `x`, 많은쪽 선호                       |
| `x{n}`    | 정확히 `n`개의 `x`                                    |
| `x*?`     | 0개 이상의 `x`, 적은쪽 선호                           |
| `x+?`     | 1개 이상의 `x`, 적은쪽 선호                           |
| `x??`     | 0개 혹은 1개의 `x`, 0개를 선호                        |
| `x{n,m}?` | `n` 이나 `n`+1 이나 ... 이나 `m`개의 `x`, 적은쪽 선호 |
| `x{n,}?`  | `n`개의 이상의 `x`, 적은쪽 선호                       |
| `x{n}?`   | 정확히 `n`개의 `x`                                    |
| `x{}`     | (≡`x*`) (지원 안됨) VIM                               |
| `x{-}`    | (≡`x*?`) (지원 안됨) VIM                              |
| `x{-n}`   | (≡`x{n}?`) (지원 안됨) VIM                            |
| `x=`      | (≡`x?`) (지원 안됨) VIM                               |

* 구현 제한
  * 카운팅 형식인 `x{n,m}`, `x{n,}`, `x{n}`은 최소또는 최대 반복횟수가 1000이 넘는 형식을 거부합니다
  * 무제한 반복은 이 제한이 적용되지 않습니다

### Possessive repetitions

* Possessive 용어
  * Possessive repetitions는 Possessive quantifier라고도 한다
  * Possessive 소유라는 뜻도 있지만 독점의 뜻도 있다.
    * 독점의 뜻이 전부 아니면 0 이므로 이쪽이 맞는듯
  * [Regular-Expressions.info 의 Possessive Quantifiers 설명](https://www.regular-expressions.info/possessive.html)
* Possessive 의 특징
  * backtrack을 하지 않는다
    * 맞지 않으면 바로 끝남 ( The deal is all or nothing. )
     
<style>
.notsupport-possessive tr:nth-child(n+1) { background: lightgrey; }
</style>

{: .notsupport-possessive}
|           | 독점적 반복자                                                |
| :--       | :--                                                          |
| `x*+`     | 0개 이상의 `x`, 독점적 (지원 안됨)                           |
| `x++`     | 1개 이상의 `x`, 독점적 (지원 안됨)                           |
| `x?+`     | 0개 혹은 1개의 `x`, 독점적 (지원 안됨)                       |
| `x{n,m}+` | `n` 이나 `n`+1 이나 ... 이나 `m`개의 `x`, 독점적 (지원 안됨) |
| `x{n,}+`  | `n`개의 이상의 `x`, 독점적 (지원 안됨)                       |


### ASCII 문자 클래스

|               | ASCII 문자 클래스              |
| :--           | :--                            |
| `[[:alnum:]]` | alphanumeric (≡ `[0-9A-Za-z]`) |
| `[[:alpha:]]` | alphabetic (≡ `[A-Za-z]`)      |

### Grouping 

* 아래 표에서 `re`는 `regular expression` 인듯 하다
* 캡쳐 : 어딘가에 잡아(캡쳐)둠. 다른곳에 써먹기 위해.. 
* [Non-Capturing Group , stackoverflow 답변](https://stackoverflow.com/a/3513858/9457247)
  * URL을 regex 파싱할 때 프로토콜인 http or https 부분은 파싱할 때는 필요하지만 match된 이후 별 쓸모가 없다
  * 나중에 써먹을 필요가 없는 부분은 잡아둘(캡처할) 필요가 없으므로 Non-Captureing Group으로 설정하곤 한다 
 
<style>
.notsupport-grouping tr:nth-child(n+3):nth-child(-n+4) { background: lightgrey; }
.notsupport-grouping tr:nth-child(n+7) { background: lightgrey; }
</style>

{: .notsupport-grouping}
|                | 그루핑                                                 |
| :--            | :--                                                    |
| `(re)`         | 번호가 매겨진 캡쳐 그룹 (submatch)                     |
| `(?P<name>re)` | 이름과 번호가 설정된 캡쳐 그룹 (submatch)              |
| `(?<name>re)`  | 이름과 번호가 설정된 캡쳐 그룹 (submatch) (지원 안됨)  |
| `(?'name're)`  | 이름과 번호가 설정된 캡쳐 그룹 (submatch) (지원 안됨)  |
| `(?:re)`       | 캡쳐 안하는 그룹                                       |
| `(?flags)`     | 현재 그룹내에 플래그를 설정; 캡쳐 안하는 그룹          |
| `(?#text)`     | 주석 (지원 안됨)                                       |
| `(?│x│y│z)`    | 브랜치 숫자 리셋 (지원 안됨)                           |
| `(?>re)`       | `re`의 독점적 match (지원 안됨)                        |
| `re@>`         | `re`의 독점적 match (지원 안됨) VIM                    |
| `%(re)`        | 캡쳐 안하는 그룹 (지원 안됨) VIM                       |


### Flags

* [Specifying Modes Inside the Rqgular Expression, regex.info](https://www.regular-expressions.info/modifiers.html)
* regex 맨 앞에 `(?i)` 이런씩으로 붙임
* `(?ismx)`  이렇게 여러개의 옵션을 한 번에 줄 수도 있음

|     | 플래그                                                                                                   |
| :-- | :--                                                                                                      |
| `i` | 매치할 때 case를 신경쓰지 않음 ( 기본값은 false )                                                        |
| `m` | 다중 라인 모드: `^`와 `$`가 text의 처음과 끝뿐만 아니라 <br> line의 처음과 끝과 match됨 (기본값은 false) |
| `s` | `.`가 개행문자 `\n` 까지도 match됨 ( 기본값은 false )                                                    |
| `U` | ungreedy: `x*`와 `x*?`의 의미를 `x*?`, `x+?`로 swap함 ( 기본값은 false )                                 |

* Flag 문법은 `xyz`(설정) `-xyz` (해제) , 혹은 `xy-z` ( `xy`는 설정 `z`는 해제)

### Empty strings

<style>
.notsupport-empty-strings tr:nth-child(n+6):nth-child(-n+8) { background: lightgrey; }
.notsupport-empty-strings tr:nth-child(n+10) { background: lightgrey; }
</style>

{: .notsupport-empty-strings}
|           | 공백  문자열                                                                                                |
| :--       | :--                                                                                                         |
| `^`       | line(`m`이 true일때) 이나 text의 시작                                                                       |
| `$`       | line(`m`이 true일때) 이나 text의 끝 (`\Z`이 아니고 `\z`과 같음)                                             |
| `\A`      | text의 시작                                                                                                 |
| `\b`      | ASCII 단어의 경계 (한 쪽은 `\w`이고 다른한 쪽은 `\W`, `\A` 혹은 `\z`가 됨                                   |
| `\B`      | ASCII 단어의 경계에 있지 않을때                                                                             |
| `\g`      | 찾는 sbutext의 시작 (지원 안됨) PCRE                                                                        |
| `\G`      | 마지막 match의 끝 (지원 안됨) PERL                                                                          |
| `\Z`      | text의 끝이거나, text의 끝에서 새 줄이 시작하기 전 (지원 안됨)                                              |
| `\z`      | text의 끝                                                                                                   |
| `(?=re)`  | `re`에 match되는 text 바로 전 (지원 안됨)                                                                   |
| `(?!re)`  | `re`에 match되지 않는 text 바로 전 (지원 안됨)                                                              |
| `(?<=re)` | `re`에 match되는 text 이후 (지원 안됨)                                                                      |
| `(?<!re)` | `re`에 match되지 않는 text 이후 (지원 안됨)                                                                 |
| `re&`     | `re`에 match되는 text 이전  (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/%5C&)     |
| `re@=`    | `re`에 match되는 text 이전  (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\@=)      |
| `re@!`    | `re`에 match되지않는 text 이전  (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\@!)  |
| `re@<=`   | `re`에 match되는 text 이후  (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\@<=)     |
| `re@<!`   | `re`에 match되지않는 text 이후  (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\@<!) |
| `\zs`     | match 시작의 sets (= `\K`) (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\zs)       |
| `\ze`     | match 끝의 sets  (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\ze)                 |
| `\%^`     | file의 시작 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%^)                      |
| `\%$`     | file의 끝 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%$)                        |
| `\%V`     | screen 상에서 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%V)                    |
| `\%#`     | cursor 위치에서 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%#)                  |
| `\%'m`    | mark `m` 위치에서 (지원 안됨) VIM (링크는 표 아랫쪽 참조)                                                   |
| `\%23l`   | line 23 위치에서 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%l)                 |
| `\%23c`   | column 23 위치에서 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%c)               |
| `\%23v`   | virtual column 23 위치에서 (지원 안됨) [VIM](http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%<v)      |

`\%'m` 링크는 [이 곳][linkid1]을 참조하세요. 테이블내에서 링크 안됨

[linkid1]: http://vimdoc.sourceforge.net/htmldoc/pattern.html#/\%'m "VIM"

### Escape sequences

* [이스케이프 시퀀스란 ?](https://docs.microsoft.com/ko-kr/cpp/c-language/escape-sequences?view=msvc-160)

|      | 이스케이프 시퀀스        |
| :--  | :--                      |
| `\a` | bell (≡`╲007`)           |
| `\f` | form feed (≡`╲014`)      |
| `\t` | horizontal tab (≡`╲011`) |

* 안쓸것 같아 대부분 생략

### Perl 문자 클래스

|      | Perl 문자 클래스 ( all ASCII-only)     |
| :--  | :--                                    |
| `\d` | 숫자 (≡ `[0-9]`)                       |
| `\D` | 숫자아닌 문자  (≡ `[^0-9]`)            |
| `\s` | 공백 문자  (≡ `[\t\n\f\r ]`)           |
| `\S` | 공백아닌 문자  (≡ `[^\t\n\f\r ]`)      |
| `\w` | 일반단어 문자  (≡ `[0-9A-Za-z_]`)      |
| `\W` | 일반단어아닌 문자  (≡ `[^0-9A-Za-z_]`) |
|      |                                        |
|      |                                        |
|      |                                        |

### ASCII 문자 클래스

* 편집시 팁: 연속된 `[[` 앞에 `╲`를 붙여서 링크를 만들지 않도록 한다

|                 | ASCII 문자 클래스                                                       |
| :--             | :--                                                                     |
| `\[[:alnum:]]`  | 알파누메릭 (≡ `[0-9A-Za-z]`)                                            |
| `\[[:alpha:]]`  | 알파베틱 (≡ `[A-Za-z]`)                                                 |
| `\[[:ascii:]]`  | ASCII (≡ `[\x00-\x7F]`)                                                 |
| `\[[:blank:]]`  | 빈칸문자  (≡ `[\t ]`)                                                   |
| `\[[:cntrl:]]`  | control (≡ `[\x00-\x1F\x7F]`)                                           |
| `\[[:digit:]]`  | 숫자  (≡ `[0-9]`)                                                       |
| `\[[:graph:]]`  | graphical (≡ `[!-~]` ≡ `[A-Za-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_{|}~]`) |
| `\[[:lower:]]`  | 소문자 (≡ `[a-z]`)                                                      |
| `\[[:print:]]`  | 프린트되는 문자 (≡ `[ -~]` ≡ `[ [:graph:]]`)                            |
| `\[[:punct:]]`  | 구두점  (≡ `[!-/:-@[- ' {-~]`)                                          |
| `\[[:space:]]`  | 공백문자 (≡ `[\t\n\v\f\r ]`)                                            |
| `\[[:upeer:]]`  | 대문자 (≡ `[A-Z]`)                                                      |
| `\[[:word:]]`   | 단어문자 (≡ `[0-9A-Za-z_]`)                                             |
| `\[[:xdigit:]]` | 16진수  (≡ `[0-9A-Fa-f]`)                                               |

### Unicode character class names--general category

* 어떻게 사용하는지 모르겠어서 생략

### Unicode character class names--scripts

* 어떻게 사용하는지 모르겠어서 생략

### Vim character classes

* 대부분이 Not Supported라 생략
* Not supported가 아닌것은 앞에 나왔음

### Magic

* 일단 생략

### 끝

{% include links.html %}

---
name: 파이썬 코딩의 기술 2판 
layout: post
permalink: book-effective-python-2nd.html
sidebar: other_sidebar
collection: wiki
summary: "똑똑하게 코딩하는 법"
tags: [web, regex, publishing]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:56 PM
toc: true
public: true
parent: [[Books-Category]] 
latex: false
---
* TOC
{:toc}

# 개요

| ![표지](http://image.kyobobook.co.kr/images/book/xlarge/190/x9791165213190.jpg) | 저자: 브렛 슬라킨 (Brett Slatkin) <br> 책제목 : 파이썬 코딩의 기술 개정2판 (원제 : Effective Python: 90 Specific ways to write better Python, 2nd Edition) <br> 부제 : 똑똑하게 코딩하는 법<br><br> 출판사 : 길벗 (원책: Pearson, Addison-Wesley) <br> ISBN 한글 : 979-11-6521-319-0 <br> ISBN 영문 : 978-0134853989 <br> <br> 값: 32,000원 <br> [Book hompage](https://effectivepython.com/) |

## 저자 설명

### 브렛 슬라킨 ( Brett Slatkin)

<style>
.author-container {display: flex; align-items: center; justify-content: space-around;}
</style>

<div markdown="1" class="author-container">

![Brett Slatkin][bslatkin-img]

* 구글 Principal software engineer
* [Google Surveys](https://surveys.google.com/)의 기술적 공동 설립자(technical co-founder)
* [PubSubHubbub 프로토콜](https://github.com/pubsubhubbub/)의 공동 창립자(co-creator)
* 구글의 첫번째 클라우드 컴퓨팅 제품([App Engine](https://cloud.google.com/appengine/))을 런칭함.
* 개인 홈페이지 : [one big fluke](https://www.onebigfluke.com/)

</div>

[bslatkin-img]: https://effectivepython.com/images/bslatkin_square.jpg
{:width="240px"}

<style>
.acceptable-code pre { background:#e1f5fe;}
.correct-code pre { background:#ADFF2F;}
.wrong-code pre { background:#FFB6C1;}
.verywrong-code pre { background:#FF0000;}
</style>

# Chapter 1. 파이썬답게 생각하기

* Pythonic의 의미
* The Zen of Python
  * 파이썬 인터프리터에서 `import this`를 입력
    <iframe height="400px" width="100%" src="https://replit.com/@honggaruy/the-zen-of-python?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe> 
  * [번역본](https://wikidocs.net/7907) 
    
## Better Way 1. 사용 중인 파이썬의 버전을 알아두라

* 이 책은 Python 3.7을 기반으로 테스트
* 새로운 기능을 보이기 위해 일부는 3.8로 진행
* 버전 확인 방법
  * 파이썬 2
    ```sh
    > python --version
    Python 2.7.10
    ```
  * 파이썬 3
    ```sh
    > python3 --version
    Python 3.8.0
    ```
  * 인터프리터에서
    ```python
    import sys
    print(sys.version_info)
    print(sys.version)
    ```
* 2020년 1월 1일부터 python 2는 사용하지 말 것.

## Better Way 2. PEP 8 스타일 가이드를 따르라 

* 다른 프로그래머들과 협업할 때의 기준이 필요하기 때문
* [온라인 가이드](https://www.python.org/dev/peps/pep-0008/) 
* 이 번 better way는 원본이 있고 원본을 간추린 것이므로 번역본에서 언급된 내용을 원소스에서 찾아보고 정리함

### 공백

* [Indentation](https://www.python.org/dev/peps/pep-0008/#indentation)
  * indentation level 마다 4 space를 사용하라
  * 연속되는 줄은 줄바꿈 되는 요소들이 수직적으로 정렬되도록 한다.
    * 이 때 여러가지 괄호(parentheses, brackets, braces)내에서의 파이썬의 implicit line joining을 이용하라
    * 첫

  


* [Tabs of Spaces?](https://www.python.org/dev/peps/pep-0008/#tabs-or-spaces)
  * Spaces are the preferred indentation method.
  * Logacy 코드가 이미 탭으로 되어있는 경우에만 (일관성을 유지하기 위해) 허용됨.
  * Python 3는 indentations에 탭과 스페이스의 혼용을 금지합니다. 
  * 탭과 스페이스로 혼용된 Python 2 indentation은 모두 스페이스로 치환되어야 한다.
  * Python2 command line 띄울때 강력하게 추천하는 옵션
    * python -t : 탭과 스페이스를 불법적으로 혼용시 경고를 띄운다
    * python -tt : 탭과 스페이스를 불법적으로 혼용시 에러를 띄운다

* [Maximum Line Length](https://www.python.org/dev/peps/pep-0008/#maximum-line-length)
  * 모든 line은 79자가 최대치이다.
  * 구조적인 제약이 적은 긴 텍스트 블럭 ( docstrings나 comment)은 72자 이하로 제한해야 한다.
  * 글자수에 제한을 둠으로써..
    * 몇개의 파일을 나란히 열어둘 수 있으며..
    * 두개의 버전을 나란히 비교하는 코드 리뷰툴을 원활하게 사용할 수 있다.
  * 대부분의 툴의 기본적인 줄바꿈은 코드의 비주얼 구조에 어지럽히며, 코드를 이해하기 더 어렵게만든다
  * 79자 제한을 설정한 이유는...
    * 80자 길이로 맞추어진 에디터 창에서 wrapping을 피할수 있으며..
    * 마지막 컬럼에서 툴이 marker glyph를 두더라도 wrapping이 안되도록 하려는 목적이다.
    * 어떤 웹 베이스 툴은 dynamic line wrapping을 전혀 지원하지 않는다. ( 따라서 글자수 제한이 더욱 필요하다.)
  * 어떤 팀들은 더 긴라인을 강력하게 좋아할 수도 있다.
    * 그 코드가 주로 한 팀에서만 독점적으로 관리되고, 그 팀내에서 동의가 된다면..
    * line length limit이 99자까지 늘어나는 것도 허용가능하지만...
    * 주석이나 docstringsjgs 여전히 72자내로 관리되어야 하는것이 조건이다.
  * Python 표준 library는 보수적이며 79자이내로 제한되어야 한다. ( docstrings/comments는 72자 이내이다)
  * 긴줄을 줄바꿈하는데 가장 선호되는 방법은...
    * parenthesese, brackets, braces 안에서 허용되는 파이썬의 묵시적인(implied) line continuation 방법이다
    * 괄호를 포함하는 긴 줄은 괄호안의 표현식을 여러줄에 걸쳐 분리할 수 있다
    * 이 방법은 `backslash`를 이용하여 줄을 연장하는 방법보다는 선호되어야 한다
  * Backslash가 여전히 적당한 방법인 경우도 있다.
    * 예를 들면, 여러라인에 걸친 `with-`문의 경우 묵시적인 연장방법을 사용할 수 없으므로...
    * backslash를 허용할 필요가 있다
      ```python
      with open('/path/to/some/file/you/want/to/read') as file_1, \
           open('/path/to/some/file/being/written', 'w') as file_2:
          file_2.write(file_1.read()) 
      ```
      * [`multiline if-statements`](#multiline-if-statements)에 대한 앞선 논의를 확인해봐라
      * 여러줄에 걸친 `with-statements`에 indentation 관련하여 더 깊은 생각을 확인할 수 있다.
    * assert statemenst도 이런 경우이다.
  * 연속된 라인을 들여쓸 때 적절한 방법으로 들여쓰는지 확인하라
      
    

### 명명 규약

### 식과 문

* [Progamming Recommendations](https://www.python.org/dev/peps/pep-0008/#programming-recommendations) 중 3번째 
  * Use `is not` operator rather than `not ... is`. 
    * While both expressions are functionally identical, the former is more readable and preferred:
  
  {: .correct-code}
  ```python
  # Correct:
  if foo is not None:
  ```
  
  {: .wrong-code}
  ```python
  # Wrong:
  if not foo is None:
  ```
  
* [Progamming Recommendations](https://www.python.org/dev/peps/pep-0008/#programming-recommendations) 중 19번째 
  * for sequences, (stings, lists, tuples), use the fact that empty sequences are false: 
    
  {: .correct-code}
  ```python
  # Correct:
  if not seq:
  if seq:
  ```
  
  {: .wrong-code}
  ```python
  # Wrong:
  if len(seq):
  if not len(seq):
  ```
* [Other Recommendations](https://www.python.org/dev/peps/pep-0008/#other-recommendations) 중 6번째
  * Compund statements (multiple statements on the same line) are generally discouraged:

  {: .correct-code}
  ```python
  # Correct:
  if foo == 'blah':
      do_blah_thing()
  do_one()
  do_two()
  do_three()
  ```
  Rather not:
  
  {: .wrong-code}
  ```python
  # Wrong:
  if foo == 'blah': do_blah_thing()
  do_one(); do_two(); do_three()
  ```

* [Other Recommendations](https://www.python.org/dev/peps/pep-0008/#other-recommendations) 중 7번째
  * While sometimes it's okay to put an if/for/while with a small body on the same line, never do this for multi-clause statements. Also avoid folding such long lines!

  Rather not:
  
  {: .wrong-code}
  ```python
  # Wrong:
  if foo == 'blah': do_blah_thing()
  for x in lst: total += x
  while t < 10: t = delay()
  ```
  Definitely not:
  
  {: .verywrong-code}
  ```python
  # Wrong:
  if foo == 'blah': do_blah_thing()
  else: do_non_blah_thing()

  try: something()
  finally: cleanup()

  do_one(); do_two(); do_three(long, argument,
                               list, like, this)

  if foo == 'blah': one(); two(); three()
  ```
* [multiline-if-statements에 대한 논의](https://www.python.org/dev/peps/pep-0008/#multiline-if-statements)
  {: #multiline-if-statements}
  
  * 이 부분은 좀 기니까 원문을 해석하기로 함
  * if 문의 조건부분이 여러줄을 필요로 할만큼 길다면..
  * `if`+ space + `(` 가 다음에 이어지는 여러줄 조건부분에 대해 자연스럽게 4 space 들여쓰기를 형성함.
  * 이렇게 들여쓰기된 조건부분은 if 문안에서 들여쓰기된 표현식들과 시각적인 충돌을 일으킬수 있다.
  * 이 PEP은 이런 부분을 좀 더 시각적으로 구분하기 위한 방법 (혹은 시각적으로 구분할지 안할지)에 대한 명확한 입장을 취하지 않습니다.
  * 이러한 상황에 대해 받아들일수있는 옵션은 다음과 같지만.. 이것만으로 한정되지도 않습니다.
 
 {: .acceptable-code}
  ```python
  # No extra indentation
  if (this_is_one_thing and
      that_is_another_thing):
      do_something()

  # Add a comment, which will provide some distinction in editors
  # supporting syntax highlighting.
  if (this_is_one_thing and
      that_is_another_thing):
      # Since both conditions are true, we can frobinicate.
      do_something()

  # Add some extra indentation on the conditional continuation line.
  if (this_is_one_thing
          and that_is_another_thing):
      do_something()
  ```
  * [이항 연산자의 앞과 뒤 어느쪽에서 line을 끊을지에 대한 논의](https://www.python.org/dev/peps/pep-0008/#should-a-line-break-before-or-after-a-binary-operator) 도 참고하세요

### 임포트

## Better Way 3.

{% include links.html %}

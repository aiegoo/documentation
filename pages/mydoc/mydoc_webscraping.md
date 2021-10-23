---
title: webscraping
permalink: mydoc_webscraping.html
summary: "webscraping lessons"
sidebar: mydoc_sidebar
tags: [python, machine-learning]
last_updated: July 29, 2021
toc: true
folder: mydoc
youtubeID: B6QEKvzoP2Y
---

{{site.data.alerts.callout_warning}}Most of contents below are drafts from my previous collaboration work and yet to be finished{{site.data.alerts.end}}
## Rapa dashboard using webscraping.
### blackyak :blush:
famous 100 mountains in korea
<hr>
### 한국의 100대 명산 정보 제공용 웹페이지
- 명산정보 :sunrise_over_mountains:
- 날씨정보 :umbrella:
- 주변정보 :convenience_store:
> Python, Django와 Web Scraping 기술을 응용한 Web page 구현 Project 

<hr>

### Project Summary
- User Friendly Web Page Interface
- Review & Exercise Learnt Knowledge & Info
- Vocational Training thru Team Cooperation

### Key Dev Skills
- Django Framework
- python API
- MongoDB (not used)
- Server configuration
- codebase
<script src="https://gist.github.com/aiegoo/832f95be5714b0cab2b06adfae88074c.js"></script>
#### screencast

{% include youtubePlayer.html id=page.youtubeID %}

### future project
- how to integrate Django (backend) with jekyll (front-end)
- apply github Actions to automate web-scraping to update the Jekyll pages. (such as weather, exchange rate, or NOTAM notice from ICAO)

## Python Installation

'''bash
sudo apt-get install build-essential checkinstall

sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev \

libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev

# download python

'''

'''bash
cd /usr/src
sudo wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tgz

# compile the source code
cd Python-3.7.4

sudo ./configure --enable-optimizations

sudo make altinstall

#make altinstall is used to prevent replacing the default python binary file /usr/bin/python.
'''

## installing on Windows

1. Click on the Download Windows x86-64 executable installer link under the top-left stable releases from the following link: https://www.python.org/downloads/
Pop-up window titled Opening python-3.74-amd64.exe will appear.

2. Click the Save File button. The file named python-3.7.4-amd64.exe should start downloading to your default download location. This file is about 30 MB in size, so it might take a while to download y if you are on a slow internet connection.
The file should appear as python-3.7.4-amd64.exe.

3. Move this file to a more permanent location, so that you can install Python (and reinstall it later, if necessary).
4. Start the installation by double clicking the file.
5. Navigate to the directory C:\Users\$USER\AppData\Local\Programs\Python\Python37 (or to the directory where Python was installed: see the pop-up window for installing step 3).
6. Double-click the icon/file python.exe.
The following pop-up window will appear:
![image](https://user-images.githubusercontent.com/42961200/133080768-69bab03c-c191-475f-bf04-26bdc86a44da.png)

### installing modules/libraries

'''
curl -O https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
'''


The easiest way to install pip on Windows is through the use of a Python program called get-pip.py, which you can download at https://bootstrap.pypa.io/get-pip.py.

Once you have saved this file, you need to run it in one of the following ways. If you prefer using a Python interpreter, right-click on the file get-pip.py and choose "open with" and then choose the Python interpreter of your choice.

If you prefer to install pip using the Windows command line tool, navigate to the directory where you have placed the get-pip.py file. For this example, we'll assume this directory is python27, so we'll use the command C:\>cd python27. Once you are in this directory, run the command:

'''bash
python get-pip.py

#python modules
sudo pip install requests

sudo pip install beautifulsoup4

sudo pip install simplekml
'''

### virtual environment

Install virtualenv using pip3:

'''bash
sudo pip3 install virtualenv

# Now create a virtual environment:

virtualenv demo

#You can use any name instead of venv. You can also use a Python interpreter of your choice:

virtualenv -p /usr/bin/python2.7 demo # or python3 -m venv demo

#Next, we will activate the virtual environment:

source demo/bin/activate

#Using fish shell:

source demo/bin/activate.fish

# to deactivate:

Deactivate
'''

## Chan
### GitHub Action을 
- 사용하여 자동 스크래핑(scraping)과 Push 구현하기


GitHub 저장소를 생성한 후에 들어가 보면, 탭 메뉴 중에 **Action**이라는 메뉴가 있습니다.

여기에 Workflow 파일을 생성해 주면, **자동으로 GitHub가 지정된 행동을 실행**해 줍니다.

이것을 응용하면, GitHub page 를 만들어 배포하였을 때, 내부의 데이터를 **일정 시간 간격마다 자동으로 스크래퍼가 실행되어 push까지 되게끔** 설계할 수 있습니다.

흔히 크롤링 혹은 크롤러로 알고 있는 `웹 사이트의 데이터 긁어오기`는 사실 `스크래핑`으로 불러야 정확합니다.

그럼 자동으로 웹 스크래핑(scraping)을 진행하는 코드를 파이썬으로 간단하게 만들어 보겠습니다.

> 웹 스크래핑(web scraping) : 웹 사이트의 데이터를 추출하는 데 사용하는 데이터 추출 기법이다.

> 스크래핑과 크롤링의 차이 : [https://www.parsehub.com/blog/web-scraping-vs-web-crawling/](https://www.parsehub.com/blog/web-scraping-vs-web-crawling/)

------



### **1. 파이썬으로 스크래핑 기능 만들기**

먼저 스크래핑할 사이트를 고릅니다. 저는 연합뉴스 사이트의 코로나19 관련 뉴스 페이지에 들어갔습니다.

> 링크 : https://www.yna.co.kr/safe/news

![](https://i.imgur.com/aDxDqfr.png)

여기에서 위의 뉴스 제목들을 스크래핑해 보겠습니다.

![](https://i.imgur.com/yh0TWwk.png)

> **[그림 1] 개발자 도구로 스크래핑할 대상 파악**

웹 브라우저에서 F12(개발자 도구)를 누른 후 해당 요소를 찾아갑니다. 위의 div > h3 구조 안의 a 태그에 뉴스 기사 제목과 URL이 들어있음을 확인할 수 있습니다.

------

![](https://i.imgur.com/jlqZLPs.png)

> **[그림 2] JS path 복사하기**

파이썬 코드에 스크래핑할 컨텐츠의 경로를 찾기 위한 과정입니다.

모든 a 태그들을 스크래핑 해야 하므로, 그 위의 h3 태그에서 **마우스 우클릭 - Copy - Copy JS path**를 선택합니다.

------

![](https://i.imgur.com/ruuChF2.png)

> **[그림 3] JS Path 복사 결과**

그러면 위와 같은 경로를 얻게 됩니다. 이를 참고하여 파이썬 코드를 작성해 보겠습니다.

------

```python
import requests
from bs4 import BeautifulSoup
import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print('뉴스기사 스크래핑 시작')

req = requests.get('https://www.yna.co.kr/safe/news')
req.encoding= None
html = req.content
soup = BeautifulSoup(html, 'html.parser')
datas = soup.select(
    'div.contents > div.content01 > div > ul > li >article > div >h3'
    )

data = {}

for title in datas:   
    name = title.find_all('a')[0].text
    url = 'http:'+title.find('a')['href']
    data[name] = url

with open(os.path.join(BASE_DIR, 'news.json'), 'w+',encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii = False, indent='\t')

print('뉴스기사 스크래핑 끝')
```

* `웹 스크래핑`에 필요한 `BeautifulSoup` 과 얻어진 데이터를 json 파일로 담기 위한 json 등 필요한 모듈들을 import 합니다.
  * 해당 모듈들이 설치되어 있지 않는 경우, cmd에서 **pip install 모듈명** 으로 설치합니다.
* BASE_DIR 에는 현재 파이썬 파일이 위치한 곳의 경로를 담습니다.
* soup.select에 구한 경로를 넣습니다.
  * div.contents 는 class명이 contents인 div를 말합니다.
  * '>' 표현은 해당 요소의 바로 한 단계 아래에 있는 요소를 나타냅니다.
  * 크롤링할 h3 태그 전까지 위에 있는 경로들이 div.contents > div.content01 > div > ul > ... > 라는 의미입니다.

* find_all(태그명) : 해당 태그명이 붙은 모든 데이터를 불러옵니다.
* find('a')['href'] : a 태그의 href 에 있는 값을 가져옵니다.
* with 문에서는 **데이터를 json파일에 저장하기 위한 코드를 작성하였습니다.**

이렇게 만든 다음 cmd에서 파이썬 파일을 실행해 봅니다.

------

![](https://i.imgur.com/LODtx3Z.png)

> **[그림 4] 스크래핑이 정상적으로 완료됨**

위 그림처럼 스크래핑이 잘 되었음을 확인할 수 있습니다. 그리고 데이터는 json 파일로 저장되었습니다.

**이들을 모두 저장하여 commit과 push를 해 줍니다.**



------

### 2. GitHub Action으로 
- 스크래핑 자동 실행 및 Push 하기
  
이렇게 스크래퍼 파일을 만들어 두면, GitHub Action 에서 이 파일을 주기적으로 자동 실행하고 Push 까지 되도록 Workflow를 작성할 수 있습니다.

이것의 작성에 앞서, 해당 저장소에 **requirements.txt** 파일을 푸쉬하도록 하겠습니다.

------



> **requirements.txt 파일이란?** 설치된 모든 파이썬 패키지(모듈)들의 목록을 저장한 파일
>
> ▶ GitHub Action에서 자동으로 파이썬 파일을 실행할 때, requirements.txt 의 목록을 보고 설치할 수 있게끔 해 줍니다.

내게 설치되어 있는 파이썬 패키지들을 일일이 찾기는 어려우니, 다음과 같이 **cmd에서 명령어를 활용합니다.**

```
pip freeze > requirements.txt
```

![](https://i.imgur.com/p7PZyD1.png)

cmd에서 명령어를 실행하고 나면, 실행한 디렉토리 내에 위처럼 텍스트 파일이 생성됩니다.

**이제 이 파일을 commit하고 push해 놓습니다.**

------

> 아래의 사진 자료에서 `크롤러`, `crawler`, `crawling`이라 적힌 부분은 모두 `스크래퍼` 혹은 `스크래핑(scraping)` 이라는 단어로 대체해야 합니다. 이 점 유의하셔서 봐 주시면 감사하겠습니다. 사진 자료는 추후 다시 작성하여 업데이트할 예정입니다.


------

![](https://i.imgur.com/t6ophaU.png)

다시 자동화를 진행할 repository에 들어와서 **Action** 탭을 클릭합니다.

------

![](https://i.imgur.com/QEOVaFG.png)

여기에서 좀 더 밑으로 내려가 보면...

![](https://i.imgur.com/jdYeIvw.png)

위의 **Python package - Set up this workflow**를 클릭합니다.

------

![](https://i.imgur.com/X3KXZnb.png)

그러면 이처럼 workflow 파일을 작성할 수 있는 디폴트 서식이 뜨게 됩니다.

yml 파일의 이름은 자유롭게 지정하시고, 그 안에 들어갈 내용은 아래와 같이 작성해 줍니다.

------

```yml
name: Run Scraper - Update data # 워크플로우 이름 지정

on:
  schedule:
    - cron:  '*/20 * * * *' # 주기적으로 실행하기 위한 스케줄링 - cron 설정

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python 3.x
      uses: actions/setup-python@v1
      with:
          python-version: '3.x'
          architecture: 'x64'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run Scraper with python
      run: |
        python "Scraper.py"
    - name: Commits
      run: |
        git config --local user.email "your@email"
        git config --local user.name "Auto_Scraping_Name" # 커밋에 포함될 이름
        git add news.json
        git commit -m "Auto - Update data with Scraping" # 커밋 메세지
    - name: Push
      uses: ad-m/github-push-action@master
      with:
        branch: 'master'
        github_token: ${{ secrets.GITHUB_TOKEN }} 
```

* on 에는 cron 표현식을 작성합니다. 이는 해당 Action 을 어떤 주기로 자동 실행할 것인지 설정하는 부분입니다.
  * '*/20 * * * *' 는 **20분 간격으로** 실행하겠다는 표현입니다. (슬래쉬 / 숫자)

* build 밑에는 실제로 실행할 부분들을 설정하는 곳입니다. 주요 내용을 살펴 보자면,
  * **steps 밑에는, GitHub Action 에서 진행할 과정들을 작성합니다.**
  * **name** 은 과정마다의 이름을 자유롭게 설정하는 것으로, 추후에 Action 을 관리하는 페이지에서 볼 수 있습니다.
  * 실행할 python 버전은 '3.x' (3.1, 3.2, 3.3 과 같은) -> **python-version: '3.x'**
  * 실행할 때 **pip install -r reequirements.txt 로, 앞서 푸쉬해 놓은 텍스트 파일에 적혀 있는 패키지를 설치**
  * Commit 단계에서는 스크래핑 파일을 돌려서 변화가 생긴 json 파일을 push하기 위한 git 명령어들을 작성합니다. 커밋 메세지 등 자신에 맞도록 자유롭게 설정합니다.
* 정리해 보면 **Set up Python 3.x - Install dependencies - Run Crawler with python - Commits - Push** 순으로 스텝을 설정해 준 것입니다.

------

작성한 후, 오른편에 있는 Start commit 을 눌러 commit과 push를 합니다.

그러면 아래와 같이, repository에 workflow 관련 파일이 생성되었음을 확인할 수 있습니다.

![](https://i.imgur.com/UTv7n8x.png)

------

이제 실행될 때까지 기다려 보겠습니다.

만약 20분 간격으로 설정해 두었다면, 20분보다 다소 더 시간이 지나야 푸쉬가 이루어질 것입니다. workflow가 실행되기까지 걸리는 시간이 있기 때문입니다.

![](https://i.imgur.com/6njPpDD.png)

![](https://i.imgur.com/DH6q3S2.png)

지정된 시간이 지나면 이처럼 **자동으로 커밋과 푸시가 이루어졌음을 확인할 수 있습니다!**

------

Action 탭에 다시 들어가 보면, 지정한 Workflow가 새로이 나타나 있음을 확인할 수 있습니다.

![](https://i.imgur.com/KKcUBQ4.png)

------

이렇게 자동으로 지정된 일을 작업해 주는 GitHub Action 에 대해 살펴 보았습니다.

Action 기능으로 자동 `스크래핑`과 푸시를 구현하였는데, 실시간 뉴스같이 계속 변하는 데이터들을 `스크래핑`하여 서비스를 하는 등 많은 부분에서 유용하게 활용할 수 있을 것으로 생각됩니다.

{% include taglogic.html %}
{% include links.html %}
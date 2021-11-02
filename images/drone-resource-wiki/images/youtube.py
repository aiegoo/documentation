# #MyCrawler.py

# #pip install selenium 
# #-*- coding: utf-8 -*-
# from selenium import webdriver
# from bs4 import BeautifulSoup

#크롬 드라이버 다운로드 url : https://chromedriver.chromium.org/downloads
# # setup Driver|Chrome : 크롬드라이버 폴더 경로 
# path = "c:/deeplearning/chromedriver.exe"  - 본인의 설치 경로를 지정한다 

# driver = webdriver.Chrome(path) #크롬 웹브라우저를 열고 
# driver.implicitly_wait(3) # 암묵적으로 웹 자원을 (최대) 3초 기다리기

# driver.get("http://google.com/")

# #구글 검색창의 입력박스 이름이 q 이다 
# search_box = driver.find_element_by_name("q")
# #검색어를 입력한다 
# search_box.send_keys("python")
# #검색 동작을 수행한다 
# search_box.submit()


from bs4 import BeautifulSoup 
from selenium import webdriver 
from selenium.webdriver.common.keys import Keys 
from datetime import datetime 
import pandas as pd 
import time 
import re 
driver = webdriver.Chrome('c:/deeplearning_workspace/driver/chromedriver.exe') 
print('크롤링 시작') 


def getCmt(url): 

    youtube_url = url #유튜브 주소 
    driver.get(youtube_url)  #크롬웹을 켜고나서 url호출하기 
    body = driver.find_element_by_tag_name("body")  #body 태그를 찾는다 
    
    print('시작') #(스크롤 내리기) 
    num_of_pagedowns = 7 
    datetime.today() 
    #pageDown(7)
    
    body.send_keys(Keys.PAGE_DOWN) 
    time.sleep(2) 
    
    html = driver.page_source 
    result = BeautifulSoup(html,'html.parser') 
    #print(html) 
    body = result.find("body") 
    #print(body)                                                
    title = body.find_all('yt-formatted-string', attrs={'class':'content style-scope ytd-video-secondary-info-renderer'}) 
    title1=title[0].get_text() 
    print(title1) 


getCmt("https://www.youtube.com/watch?v=DnQ09ZZCjCs") 
    
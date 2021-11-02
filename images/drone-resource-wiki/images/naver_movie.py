import requests, time, re
from bs4 import BeautifulSoup
import sqlite3

def db_insert(acnum,movie_title,movie_score,report,nickname,writed):
    dbfile = "Develop/learn_webscraping/my_labs/db.navermovieDB.db"
    with sqlite3.connect(dbfile) as con:
        cur = con.cursor()
        query = "INSERT INTO navermovieTbl (acnum,movie_title,movie_score,report,nickname,writed,created) VALUES (?,?,?,?,?,?,datetime('now','localtime'))"
        cur.execute(query,(acnum,movie_title,movie_score,report,nickname,writed))
        con.commit()

url = "https://movie.naver.com/movie/point/af/list.nhn?&page={}"
headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'}
page_start = int(input("영화평점 페이지 시작 번호입력(1~1000) :"))
page_end = int(input("영화평점 페이지 끝 번호입력(1~1000) :"))

acnum = 0
movie_title = ""
movie_score = 0
report = ""
nickname = ""
writed = ""

try :
    for i in range(page_start,page_end+1):
        print("\nPage {} - URL : {}".format(i, url.format(i)))
        res = requests.get(url=url.format(i), headers=headers)
        soup = BeautifulSoup(res.text, "html.parser")
        table = soup.find("table", {"class":"list_netizen"})
        for row in table.find_all("tr")[1:]:
            columns = row.find_all("td")
            for n, column in enumerate(columns):
                if n == 0:
                    acnum = column.get_text()
                elif n == 1:
                    movie_title = column.a.get_text()
                    movie_score = column.em.get_text()
                    report = column.a.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.replace("\n","").replace("\t","")
                elif n == 2:
                    nickname = column.a.get_text()
                    writed = column.a.next_sibling.next_sibling

            db_insert(acnum,movie_title,movie_score,report,nickname,writed)
except AttributeError as e:
    print("페이지 범위를 확인하시고 다시하세요.", e)
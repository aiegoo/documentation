---
title: Django Django Two scoops 
tags: [django, gcs, drone]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_django.html
folder: mydoc
---


## django 2 channels 2

- posgresql module error

Instead of psycopg2, run `pip install psycopg2-binary`

- postgresql shell

```shell
sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;

## default user of postgres to another
sudo -u postgresql psql
postgresql=#ALTER USER yourusername WITH PASSWORD 
'set_new_password_without_special_character';
## after this, run manage.py
```

- checking postgresql service

```shell
sudo service postgresql status
sudo service postgresql start
sudo netstat -plunt |grep postgres
```

- django test permission issue

```shell
sudo -u postgres psql
postgres=# => ALTER USER booktime CREATEDB;
```


---
layout: post
title: "java drone app with mavlink mavproxy and gcs"
name: "java-drone"
tags: [drones]
tagName: drones
permalink: 2022-01-07-java-drone.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "drone gcs uav java linh"
summary: "Fri, Jan 07, 22, udemy course integration, and my local dev-with linh"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-01-07T08:52:54 +0900
updated: 2022-01-07 08:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## 4gremoteoperation

## Deployment

### Configuration

Update `cloudapp/src/main/resources/application.yaml`: Application port, logging...
Update port in `cloudapp/config-templates/nginx-site.conf` if needed

### Build jar

Change the current directory to `./soure/cloudapp`

```shell
./gradlew clean
./gradlew bootJar
```

### Deploy

```shell
sudo mkdir /opt/cloudapp

sudo cp ./build/libs/cloudapp*.jar /opt/cloudapp/app.jar
sudo cp ./config-templates/start.sh /opt/cloudapp/start.sh

sudo cp ./config-templates/cloudapp.service /etc/systemd/system/cloudapp.service

sudo systemctl start cloudapp
```

If you want to start the app on boot

```shell
sudo systemctl enable cloudapp
```

### Config NGINX

```shell
sudo cp ./config-templates/nginx-site.conf /etc/nginx/sites-available/<example.com>

# update your domain name
sudo nano /etc/nginx/sites-available/<example.com>
sudo ln -s /etc/nginx/sites-available/<example.com> /etc/nginx/sites-enabled/<example.com>

sudo systemctl restart nginx
```

Config SSL

[Certbot](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)

```shell
# Create SSL certificate for your domain¶
sudo certbot --nginx
```


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

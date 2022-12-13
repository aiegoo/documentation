---
layout: post
title: "How to backup using dd local or remote pc"
name: "dd_cloning"
tags: [linux]
tagName: linux
permalink: 2022-12-13-dd_cloning.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "linux backup raspi dd if gunzip img gz"
summary: "Tue, Dec 13, 22, ssh root@172.30.1.96 "dd if=/dev/sda | gzip -1 -" | dd of=image.gz"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-12-13T16:34:40 +0900
updated: 2022-12-13 16:34
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## cli

```bash
sudo dd if=/dev/sda of=/mnt/extraspace/backup.img.gz bs=20M

sudo dd if=/mnt/yourddimage.img of=/dev/sdX bs=10M

gunzip -c /mnt/yourddimage.img.gz | dd of=/dev/sdX

```

### from remote pc to a local pc

```bash
dd if=/dev/sda | gzip -1 - | ssh user@local dd of=image.gz status=progress

ssh user@remote "dd if=/dev/sda | gzip -1 -" | dd of=image.gz status=progress


dd if=/dev/sda | gzip -1 - | pv | ssh user@local dd of=image.gz
```

`pv` is used to monitor the progress of a large dd operation.



{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

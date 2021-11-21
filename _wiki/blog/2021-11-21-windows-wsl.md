---
layout: post
title: "wsl 1 to 2 upgrade"
name: "windows-wsl"
tags: [windows, getting-started]
tagName: windows
permalink: 2021-11-21-windows-wsl.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: windows
keywords: "wsl ubuntu 18 subsystem windows10"
summary: "Sun, Nov 21, 21, wsl 1 to 2 upgrade"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-11-21T13:38:59 +0900
updated: 2021-11-21 13:38
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## wsl 
- version check
  - <kbd>Windows</kbd> type `winver`
  <118917 means wsl1 or >1903 means wsl2 ready Windows (mine: 21H1 1904)
- wsl --list --verbose

- `wsl --set-version [distro_name] [wsl_version_number]` : in my case `wsl --set-version ubuntu 2`

**caution** `wsl --set-default-version 2` this command didn't work for me.

**ref**
[linuxhint](https://linuxhint.com/check-wsl-version/)

[official_doc](https://docs.microsoft.com/en-us/windows/wsl/compare-versions)

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

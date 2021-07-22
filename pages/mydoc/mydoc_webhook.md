---
title: wehbook deploy automation
tags: [gaurav, pawan, pipeline, automation ]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_webhook.html
folder: mydoc
---

## Git webhook

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

## git cli

```
git diff --stat --cached [remote/branch]

git grep 'Build 0051' $(git rev-list --all)

git log --since="2013-11-12" --before="2013-11-13"

git reset --hard origin/master

git log --since="5 day 10 hours ago" --grep pilot_handbook --all-match
```

```
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash

sudo apt install git-lfs
```

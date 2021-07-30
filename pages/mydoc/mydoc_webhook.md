---
title: wehbook deploy automation
tags: [git, setup]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
series: "GIT series"
weight: 1
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

### to unstage and remove a file from commit

```
$ git restore --source=HEAD^ --staged  -- newfile

$ git reset HEAD newfile

$ git rm --cached newfile

```

{% include custom/series_git_next.html %}



<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a href="#git" data-toggle="tab">Gitcli</a></li>
    <li><a href="#gitlogic" data-toggle="tab">Gitlogic</a></li>
    <li><a href="#gitconfig" data-toggle="tab">Gitconfig</a></li>
</ul>

<div class="tab-content">

<!-- Git cli -->
     <div role="tabpanel" class="tab-pane active" id="git">
                  <h3>Viewing the Commit History</h2>                  
                                     

     </div>

<!-- courese books -->
     <div role="tabpanel" class="tab-pane" id="gitlogic">
          <h2>git logic</h2>
          <p>I counted 18 books for the first year and I thought it was it. I was wrong as the number sees no boundary. </p>

</div>

<!-- tool books -->
<div role="tabpanel" class="tab-pane" id="gitconfig">
    <h2>Toolbooks</h2>
    <p>I spend all of my research stipends on its books.</p>
     <ul>
          <li>
          <i>
     This book together with my other Udemy course I am taking is the core of my learning curves for now.
          </i></li>
     
          <li>
          Most of the on-line courses on <a href="https://www.udemy.com/home/my-courses/learning/?p=5">UDEMY</a> listed here
          <a href="https://www.pivotaltracker.com/story/show/167956227">pivotaltracker stories board</a>, 
          with about 60 paid courses I am taking currently. </li>
          
          <li>
          Recent courses: in collaborative development env. </li>
          
     
          <li>
          <a href="https://eggs.or.kr/index.php">
          Transcripting solution</a> 
          <i>(with Mohammad in Parkistan, to add the call and conference transcripts to the meetme app).</i> </li>
          <li><a href="#">
          <i>the details of development (now in icebox).</i></li>
          <li>
          <a href="https://github.com/aiegoo/mohammad">
          now private github repository</a> <i>(to be completed in November).</i></li>
     </ul>
     
</div>
</div>

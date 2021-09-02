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
toc: false
---
![image](https://user-images.githubusercontent.com/42961200/131799609-7fa4be2d-bd50-4be3-871e-97b3cb11e762.png)

## :octocat: Git webhook

|---
|2018 |2019 |2020 | 2021
| :-: | :-: | :-: | :-:
| [stackoverflowSolution](https://stackoverflow.com/questions/44864419/how-to-automate-docker-deployment-based-on-github-webhook/44866845#44866845) | ![image](https://user-images.githubusercontent.com/42961200/131799900-207674d2-512e-46d7-911a-994546e43327.png) | ![image](https://user-images.githubusercontent.com/42961200/131800013-de3ab1cb-8122-4850-9519-b599141653eb.png) | ![image](https://user-images.githubusercontent.com/42961200/131800086-91effdee-cdbb-4e70-b30b-904425632c22.png) 
|---
| | | |
|===
| | | |


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

$ git checkout -b master SHA

$ git merge -s ours branch1 branch2 brancN  # resolve ours subtree octopus

```

### rebase and merge

```
git checkout feature
git checkout -b temporary-branch
git rebase -i main
# [Clean up the history]
git checkout main
git merge temporary-branch
```

- MEMO: 01daab67641deef5bfba8668973c13f48a562128
- MEMO: git config --global --unset user.password
- MEMO: sudo chmod 777 DIR_NAME
- MEMO: sudo chmod a+rwx /var/szDirectoryName
- MEMO: how to reset --hard origin/master and then revert
  - git -a -m "saved just in case"
  - git checkout -b incase  ---- save tmp files to the branch
  - git checkout applicable branch and then 
  - git reflog # to get the latest commit on the remote
  - git reset --hard HEAD@{n}  # for the lastest commit hash or index #

{% include custom/series_git_next.html %}



<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a href="#git" data-toggle="tab">Gitcli</a></li>
    <li><a href="#gitlogic" data-toggle="tab">Gitlogic</a></li>
    <li><a href="#gitconfig" data-toggle="tab">Gitconfig</a></li>
</ul>
<div class="tab-content">
<!-- Git cli -->
     <div role="tabpanel" class="tab-pane active" id="git">
          <h3>git cli alias </h3> 
          <div>
          <xmp>[filter "lfs"]
                    smudge = git-lfs smudge -- %f
                    process = git-lfs filter-process
                    required = true
                    clean = git-lfs clean -- %f
               [user]
                    name = aiegoo
                    email = 
               [winUpdater]
                    recentlySeenVersion = 2.20.1.windows.1
               [core]
                    editor = \"C:\\Users\\Owner\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" --wait
               [diff]
                    tool = vimdiff
               [difftool "vscode"]
                    cmd = code --wait --new-window --diff $LOCAL $REMOTE
                    prompt = false                          
               [alias]
                    a = !git config --global

                    amd = !git add -A && git commit --amend --no-edit

                    alias = config --get-regexp ^alias\\.

                    p = !git push origin $(git rev-parse --abbrev-ref HEAD)

                    sub = !git submodule update --init --recursive

                    adds = !git add . && git commit -m

                    upstream = !git branch --set-upstream-to=origin/$(git rev-parse --abbrev-ref HEAD)

                    unstream = !git branch --unset-upstream $(git rev-parse --abbrev-ref HEAD)

                    f = !git fetch --all && git rebase origin/master

                    edit-unmerged = "!f() { git diff --name-status --diff-filter=U | cut -f2 ; }; code `f`"

                    add-unmerged = "!f() { git diff --name-status --diff-filter=U | cut -f2 ; }; git add `f`"

                    uncommit = !git reset --soft HEAD^ && git reset

                    commitagain = !git commit -c ORIG_HEAD

                    desc = !git add . && git commit

                    conflicts = !git diff --name-only --diff-filter=U | grep -oE '[^/ ]+$'
                    
                    conflict = !git diff --name-only --diff-filter=U

                    history = !git rev-list --all

                    lt = !git log --stat --pretty=\"format:%h%an%ai%f\"

                    lc = !git log ORIG_HEAD.. --stat --no-merges

                    lg = !git log --all --graph --oneline --date=short --pretty=format:\"%C(yellow)%h%Creset%C(red)%C(bold)%d%Creset%C(white)(%cd)%Creset %s\"
                    
                    pr = "!f() { git fetch -fu ${2:-origin} refs/pull/$1/head:pr/$1 && git checkout pr/$1; }; f"

                    pr-clean = "!git for-each-ref refs/heads/pr/* --format=\"%(refname)\" | while read ref; do branch=${ref#refs/heads/} ; git branch -D $branch;"

                    files  = "!git diff-tree --no-commit-id --name-only -r"

                    find = log --pretty=\"format:%Cgreen%H %Cblue%s\" --name-status --grep

                    filter = !git filter-branch --index-filter \"git rm --cached -f -r --ignore-unmatch\" --tag-name-     filter cat -- --all

                    df = difftool
                    saved = !git show --pretty=\"\" --name-only

                    areusure = !git filter-branch --index-filter "git rm --cached -f -r --ignore-unmatch filenameOrFolderName" --tag-name-filter cat -- --all 

                    clone-branches = "! git branch -a | sed -n \"/\\/HEAD /d; /\\/master$/d; /remotes/p;\" | xargs -L1 git checkout -t"

                    set-url = !git remote set-url --add --push origin

                    lstree = !git diff-tree --no-commit-id --name-status -r
               [difftool]
                    prompt = false</xmp>  

          <xmp>$ git lg -n 3
* 36a7365 (HEAD -> gh-pages, origin/gh-pages, origin/HEAD)(2021-08-01) add git config template to webhook.md
* fd26087(2021-08-01) add git config template to webhook.md
* 6c05cf4(2021-08-01) add git config template to webhook.md

$ git lstree fd26087
M       pages/mydoc/mydoc_webhook.md</xmp>
            
        </div> <!-- end of gitcli contents -->
     </div>
<!-- courese books -->
     <div role="tabpanel" class="tab-pane" id="gitlogic">
          <h3>git logic</h3>
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
          </ul></div>
</div>

### cli examples

```diff
$ git lg -n 3
* 36a7365 (HEAD -> gh-pages, origin/gh-pages, origin/HEAD)(2021-08-01) add git config template to webhook.md
* fd26087(2021-08-01) add git config template to webhook.md
* 6c05cf4(2021-08-01) add git config template to webhook.md

$ git lstree fd26087
M       pages/mydoc/mydoc_webhook.md

```

### git config credential.helper store

<script src="https://gist.github.com/aiegoo/6bcf26b4be91deaa4d7d5c45700012a9.js"></script>

---
title: github team
tags: [git, getting_started]
last_updated: July 11, 2021
keywords: by Oreily, Emma Jane, API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
series: "GIT series"
weight: 2
permalink: mydoc_git_team.html
folder: mydoc
---

[gitteampdf](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:79f561c5-f23e-4c3b-9112-77b06a3ca77d)

{% include custom/series_git_next.html %}

## Git team

[gitknitters](https://github.com/gitforknitters/gitforknitters)


### workflow
> Create and customize step-by-step documentation for your team on how to use Git in your own work flow

```
• basic tools to document your team’s process; 
• where documentation should be placed; 
• what types of things need to be documented; and, 
• sample states for your ticketing system
```

Example

```diff
+Product Manager [Name] 
-Dev site [URL] Branch deployed on dev site [name of branch] 
+Live site [URL] 
-Branch deployed on live site [name of branch] 
+When starting a dev ticket, branch from [name of branch] 
-When starting a hotfix ticket, branch from [name of branch] 
+When updating your work, use [git command] 
-When merging your work, post review use [git command]
```

> ghi cli: 
The most commonly used ghi commands are:

```bash
   list        List your issues (or a repository's)
   show        Show an issue's details
   open        Open (or reopen) an issue
   close       Close an issue
   edit        Modify an existing issue
   comment     Leave a comment on an issue
   label       Create, list, modify, or delete labels
   assign      Assign an issue to yourself (or someone else)
   milestone   Manage project milestones
```

> color the shell output for git: add below in .gitconfig
> You can also fine control what you want to have coloured in what way, e.g.

```
[color]
  diff = auto
  status = auto
  branch = auto
  interactive = auto
  ui = true
  pager = true


[color "status"]
  added = green
  changed = red bold
  untracked = magenta bold

[color "branch"]
  remote = yellow
```

#### github pages documentation for visibility and dns


#### git pull/merge strategy

[bucketdoc](https://www.atlassian.com/git/tutorials/using-branches/merge-strategy)


### Branching strategies
```
• how to choose a branching convention for your team. 
• mainline development 
• branch-per-feature deployment 
• scheduled deployment
```

{% include note.html content="Know when to increment  with  semantic  versioning In  semantic  versioning,  a  release  should  always  be  numbered  as  follows:  MAJOR.MINOR.PATCH.  The  first  number  (MAJOR)  should be  incremented  when  you  make  API-level  changes  which  are  not backwards  compatible.  The  second  number  (MINOR)  should  be  incremented  when  you  add  new  functionality  which  does  not  break existing  functionality  (it  is  “backwards-compatible”).  The  third  number  (PATCH)  should  be  incremented  when  you  make  backwardscompatible  bug  fixes." %}

![gitflow](https://user-images.githubusercontent.com/42961200/127790771-eeb74013-0a52-4873-993f-250950ae62f1.jpg)


### comand and control


### Working in a team

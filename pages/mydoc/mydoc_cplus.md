---
title: C++ learning curve
tags: [console-game, ros, rostopic ]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_cplus.html
folder: mydoc
---

## C++ console game﻿

￣ｰ￣솔로비행 ≖ ≖

･ﾟ✧ SOLO Flight╰(◡‿◡


goal; C++ C# Channel Unity

|  source links  |  video links |
| --- |  :---: |
|[github](https://github.com/aiegoo/obstruction) |  [![youtube](https://i9.ytimg.com/vi/GHOHrMa--pQ/mq1.jpg?sqp=COT7iYcG&rs=AOn4CLD-8juNl2ueP8V_ebHglHhzcKXJRA)](https://youtu.be/GHOHrMa--pQ)  |
| [overview](https://aiegoo.github.io/obstruction) | [gitlab](https://eggs.or.kr/crh/drone_resource/-/blob/tony/linux-2020-11-23_09.08.38.mp4)  |

- necessary skills
c++ c# Unity and Django Channel


## [readme](https://github.com/aiegoo/obstruction/blob/master/README.md)

## Welcome to Obstruction Help Pages

> Assignment Manual (recommended features included but not required)
<object data="https://github.com/aiegoo/obstruction/blob/master/50.CPP_app.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://github.com/aiegoo/obstruction/blob/master/50.CPP_app.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="50.CPP_app.pdf">Download PDF</a>.</p>
    </embed>
</object>

[assignment](https://eggs.or.kr/crh/drone_resource/-/blob/8a8c0dbcb7c50f0f5b7541e4c7125fab2ec93437/50.CPP_app.pdf)
You can use the [editor on GitHub](https://github.com/aiegoo/obstruction/edit/master/README.md) to preview the source and offer your ideas through the pull request, which I would welcome with wide open arms.

Whenever you are done with one version of Obstruction, you can choose another Tag from the branches marked Tag and sequential version numbers, which will run [youtube](https//youtube.com:xkdyk??) to rebuild the pages in your site, from the content in your choice of version files.

### obstruction

Obstruction is a territory game to play against each other in order to obsruct the opponent to dominate the world of the game board.

```markdown
Here is the key rules of the game development

# rule 1 - console game
1. use the ncurses and modular codes for game objects and features
2. try to make it a cross-platform (turned out to be a tall order as libraries used are speciic to each platform.)
## rule 2 - Unity 2D
1. Grid, preFabs, code snippets
2. Play music
3. Game control
4. make either an IOS or Android app
### Deployable results (to be completed)
1. for windows
    git checkout -b v0.1w git@github.com:aiegoo/obstruction
2. for linux
    git checkout -b v0.1Lx git@github.com:aiegoo/obstruction
3. for Unity
    to be continued (see the session recordings via Anydesk)

**Player** and _Opponent_ and `Territory` wqar

[Link](url) and ![Image](src)
```
### winning strategy
board size is important as an odd-sized board tends to make the first player win easily by mirring the 2nd player move. In other cases, try to form a 'L' shape of nodes for each move, from which a player can force out the opponent leaving no room to place at the end of the game.

<table border="1">
<tbody><tr align="center" height="20"><td bgcolor="#cccccc" width="20">&nbsp;</td><td bgcolor="#cccccc" width="20">&nbsp;</td><td bgcolor="#cccccc" width="20">&nbsp;</td><td bgcolor="#cccccc" width="20">&nbsp;</td><td width="20">O</td></tr>
<tr align="center" height="20"><td bgcolor="#cccccc">&nbsp;</td><td>X</td><td bgcolor="#cccccc">&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td></tr>
<tr align="center" height="20"><td bgcolor="#cccccc">&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td><td>O</td></tr>
<tr align="center" height="20"><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td></tr>
<tr align="center" height="20"><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#cccccc">&nbsp;</td><td>X</td></tr>
</tbody></table>



For more details see [blog](http://www.papg.com/show?2XMX).

### Jekyll Themes

You can select styles for dark and light console color.
[repository settings](https://github.com/aiegoo/obstruction/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with running Obstruction? Check out our [Game Center](aiegoo.github.io/obstruction) or [contact support](https://36io.co) and we’ll help you sort it out.

`TL;DR`

### dEvelopment story
[project management](https://github.com/aiegoo/cplus/projects/1)
- Solo Flight and my view on C++
<p style="text-align: center">
I hate C++ as I rarely liked the language specific programmers. They are rare in numbers and <br>alas an odd sorts in characters too. But then it has been some paramount challenge, as untasteful as ever for me <br>to dive into the school of programmers as a student, notwithstanding becoming one, I admit. I still have the reservation to start on this path, but who knows the future? as I always believe in 'divde and conquer'.
</p>
### Game process
The first player should hit 'o' on keyboard while 'x' for the 2nd player.

![step 1 & 2](https://github.com/aiegoo/obstruction/blob/6fac25f80f23a0c381fc8cb4dab5d84bf2da9793/images/obstruction1.png)
<hr>

![step 3 & 4](https://github.com/aiegoo/obstruction/blob/6fac25f80f23a0c381fc8cb4dab5d84bf2da9793/images/obstruction2.png)
<hr>

![step 5 & 6](https://github.com/aiegoo/obstruction/blob/6fac25f80f23a0c381fc8cb4dab5d84bf2da9793/images/obstruction3.png)

### dEvelopment overview
1. ide (C++, C#)
    - Visual Studio 2019
    - VS Code
    - Unity

2. Game idea
    - www.cs.ukzn.ac.za - ncurses manual
    - http://www.papg.com/show?2XN0 - game concept

3. Project term
    - period 1; planning coding: 2 nights
    - period 2; testing: 1 night
    - peirod 3; Unity: 2 nights
    - period 4; Deployment: a couple of hours


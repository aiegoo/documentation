---
layout: post
title: "using git with vim"
name: "fugitive-vim-cheatsheet"
tags: vim
tagName: vim
permalink: 2021-10-11-fugitive-vim-cheatsheet.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: lecture
summary: "shortcut keys and application"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-11T23:56:32 +0900
updated: 2021-10-12 9:52 AM
---

## vim fugitive installation

### vim surround 
[blog](http://www.futurile.net/2016/03/19/vim-surround-plugin-tutorial/)

> Delete surroundings

To delete we use ds, the next character determines the target to delete. Some examples:

| Objective                                   | Original text                             | Command | Edited text                       |
| ------------------------------------------- | ----------------------------------------- | ------- | --------------------------------- |
| Delete quotes surrounding a sentence        | "Hello world!"
  \[\] <--- cursor         | ds"     | Hello world!
\[\] <--- cursor now |
| Delete surrounding tags                     | <p>Start here</p>
       \[\] <--- cursor | dst     | Start here
\[\] <--- cursor now   |
| Delete surrounding parentheses in some code | (var1, var2)                              | ds(     | var1, var2                        |
The cursor can be anywhere within the surrounding text object we're operating on, when the command is complete the cursor moves to the start of the object we operated on. Also, unlike other text objects there's no i or a option for changing how it selects the area.

> Change surrounding

To change a surrounding we use cs, this deletes the supplied text-object and replaces it with the second argument. When used in this way the cursor does not enter Insert mode at the end of the command. There are two ways to use it:

Change one surround to another: cs<surround target><replacement>
Change one surround to another, putting the new ones on separate new lines: cS<surround target><replacement>
Examples of how to use it are:
  
| Objective                                                   | Original text                                        | Command | Edited text                                        |
| ----------------------------------------------------------- | ---------------------------------------------------- | ------- | -------------------------------------------------- |
| Change surrounding quotes from double to single quote marks | "My kingdom for a horse"
      \[\] <--- cursor here | cs"'    | 'My kingdom for a horse'
\[\] <--- cursor here now |
| Change to HTML paragraph with tags on separate lines        | 'Look, to the East'                                  | cS'<p>  | <p>
Look, to the East
</p>                         |  

        
> Add surrounding

Often, rather than altering some existing mark-up or brackets, we want to add some additional surroundings. Add a surrounding uses ys, the following item is the additional mark-up, brackets or text that will placed either side. The ways it can be used are:

Wrap the vim motion or text object in the second argument: ys<motion|text-object><addition>
Change the current line and wrap it with the second argument: yss<addition>
Change the specified motion, putting the new addition on new lines and indenting the text: yS<motion><addition>
Whole line and do the above: ySS<addition>
Some examples of using these methods:
        
| Objective                                                                                                               | Original text                                     | Command | Edited text                                          |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------- | ---------------------------------------------------- |
| Put some quotes around some text at the end of a line.                                                                  | he said, Boo! scary huh
         \[\] <--- cursor | ys$"    | he said, "Boo! scary huh"                            |
| Put some square brackets around some variables. Note use of repetition in the motion.                                   | print var1, var2
      \[\] <--- cursor           | ys3w)   | print (var1, var2)
      \[\] <--- cursor            |
| Put some squiggly brackets around some code. This acts on the whole line with the cursor anywhere on the line           | 34, 21, 7
  \[\] <-- cursor                       | yssB    | { 34, 21, 7 }
\[\] <-- cursor moves                  |
| Convert some speech into a HTML blockquote. Uses Vims search motion and surrounds ability to then put tags around that. | Jack said, "Done it!"
           \[\] <--- cursor | ySf"t   | Jack said, <blockquote>
    "Done it!"
</blockquote> |
| Put some brackets around a procedure and indent the text                                                                | defn -proc1
    \[\] <--- cursor                  | ySSb    | (
     defn -proc1
)                                 |        

> Visual surround

In visual mode, the surround object is called with S, and then an argument that wraps the visual selection. The keyboard usage is something like this:

```
v                         # Enter visual mode
<visually select>         # Use the keyboard to select the section of text
S                         # Press upper case S
"                         # Specify what you want to surround the visual selection with
```

In linewise visual mode the surrounding are placed on separate lines and indented: vS<surround target>
In block wise visual mode (Ctrl-v) each line is surrounded: vS<surround target>

| Objective                                                                      | Original text                                                | Command                            | Edited text                                                           |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------- | --------------------------------------------------------------------- |
| Select a word and put rST italic marks around it                               | Add two eggs
   \[\] <--- cursor                             | viwS\*                             | Add \*two\* eggs
\[\] <--- cursor now                                 |
| Put HTML paragraph around some lines.

Uses linewise visual mode               | Consider this, when
we create an object
we take more memory. | Shift-v,
<highlight the text>
S<p> | <p>
Consider this, when
we create an object
we take more memory.
</p> |
| Put HTML list item on each line to create a list.

Uses block wise visual mode | 6 eggs
4 apples
2 pints of milk                              | Ctrl-v
<highlight the text>
S<li>  | <li>6 eggs</li>
<li>4 apples</li>
<li>2 pints of milk</li>            |

  
## cheatsheet
<script src="https://gist.github.com/mikaelz/38600d22b716b39b031165cd6d201a67.js"></script>

<script src="https://gist.github.com/ayushxx7/b7e749f3623e22f61ef821c362459620.js"></script>

  


### reset diagram
![image](https://user-images.githubusercontent.com/42961200/180112510-13c7b9d5-58bc-4436-a9b7-5dad6fcd6d04.png)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

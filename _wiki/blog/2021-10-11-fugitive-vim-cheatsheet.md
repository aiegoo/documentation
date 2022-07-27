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

<table border="1" class="docutils" style="color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 16px;"><thead valign="bottom"><tr><th class="head" style="margin: 0px; padding: 0px;">Objective</th><th class="head" style="margin: 0px; padding: 0px;">Original text</th><th class="head" style="margin: 0px; padding: 0px;">Command</th><th class="head" style="margin: 0px; padding: 0px;">Edited text</th></tr></thead><tbody valign="top"><tr><td style="margin: 0px; padding: 0px;">Delete quotes surrounding a sentence</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">"Hello world!"
  [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">ds"
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Hello world!
[] &lt;--- cursor now
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Delete surrounding tags</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">&lt;p&gt;Start here&lt;/p&gt;
       [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">dst
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Start here
[] &lt;--- cursor now
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Delete surrounding parentheses in some code</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">(var1, var2)
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">ds(
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border-top: 1px solid rgb(221, 221, 204); border-right: none; border-bottom: 1px solid rgb(221, 221, 204); border-left: 1px solid rgb(221, 221, 204); border-image: initial; overflow: visible; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">var1, var2</pre></td></tr></tbody></table>

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


<table border="1" class="docutils" style="color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 16px;"><thead valign="bottom"><tr><th class="head" style="margin: 0px; padding: 0px;">Objective</th><th class="head" style="margin: 0px; padding: 0px;">Original text</th><th class="head" style="margin: 0px; padding: 0px;">Command</th><th class="head" style="margin: 0px; padding: 0px;">Edited text</th></tr></thead><tbody valign="top"><tr><td style="margin: 0px; padding: 0px;">Change surrounding quotes from double to single quote marks</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">"My kingdom for a horse"
      [] &lt;--- cursor here
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">cs"'
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">'My kingdom for a horse'
[] &lt;--- cursor here now
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Change to HTML paragraph with tags on separate lines</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">'Look, to the East'
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">cS'&lt;p&gt;
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border-top: 1px solid rgb(221, 221, 204); border-right: none; border-bottom: 1px solid rgb(221, 221, 204); border-left: 1px solid rgb(221, 221, 204); border-image: initial; overflow: visible; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">&lt;p&gt;
Look, to the East
&lt;/p&gt;</pre></td></tr></tbody></table>
        
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

<table border="1" class="docutils" style="color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 16px;"><thead valign="bottom"><tr><th class="head" style="margin: 0px; padding: 0px;">Objective</th><th class="head" style="margin: 0px; padding: 0px;">Original text</th><th class="head" style="margin: 0px; padding: 0px;">Command</th><th class="head" style="margin: 0px; padding: 0px;">Edited text</th></tr></thead><tbody valign="top"><tr><td style="margin: 0px; padding: 0px;">Put some quotes around some text at the end of a line.</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">he said, Boo! scary huh
         [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">ys$"
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">he said, "Boo! scary huh"
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Put some square brackets around some variables. Note use of repetition in the motion.</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">print var1, var2
      [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">ys3w)
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">print (var1, var2)
      [] &lt;--- cursor
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Put some squiggly brackets around some code. This acts on the whole line with the cursor anywhere on the line</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">34, 21, 7
  [] &lt;-- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">yssB
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">{ 34, 21, 7 }
[] &lt;-- cursor moves
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Convert some speech into a HTML blockquote. Uses Vims search motion and surrounds ability to then put tags around that.</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Jack said, "Done it!"
           [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">ySf"t
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Jack said, &lt;blockquote&gt;
    "Done it!"
&lt;/blockquote&gt;
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;">Put some brackets around a procedure and indent the text</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">defn -proc1
    [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">ySSb
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border-top: 1px solid rgb(221, 221, 204); border-right: none; border-bottom: 1px solid rgb(221, 221, 204); border-left: 1px solid rgb(221, 221, 204); border-image: initial; overflow: visible; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">(
     defn -proc1
)</pre></td></tr></tbody></table>

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

<table border="1" class="docutils" style="color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 16px;"><thead valign="bottom"><tr><th class="head" style="margin: 0px; padding: 0px;">Objective</th><th class="head" style="margin: 0px; padding: 0px;">Original text</th><th class="head" style="margin: 0px; padding: 0px;">Command</th><th class="head" style="margin: 0px; padding: 0px;">Edited text</th></tr></thead><tbody valign="top"><tr><td style="margin: 0px; padding: 0px;">Select a word and put rST italic marks around it</td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Add two eggs
   [] &lt;--- cursor
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">viwS*
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Add *two* eggs
[] &lt;--- cursor now
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;"><p class="first" style="margin: 0px 0px 1.5em; padding: 0px; text-align: justify;">Put HTML paragraph around some lines.</p><p class="last" style="margin: 0px 0px 1.5em; padding: 0px; text-align: justify;">Uses linewise visual mode</p></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Consider this, when
we create an object
we take more memory.
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Shift-v,
&lt;highlight the text&gt;
S&lt;p&gt;
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">&lt;p&gt;
Consider this, when
we create an object
we take more memory.
&lt;/p&gt;
</pre></td></tr><tr><td style="margin: 0px; padding: 0px;"><p class="first" style="margin: 0px 0px 1.5em; padding: 0px; text-align: justify;">Put HTML list item on each line to create a list.</p><p class="last" style="margin: 0px 0px 1.5em; padding: 0px; text-align: justify;">Uses block wise visual mode</p></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">6 eggs
4 apples
2 pints of milk
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">Ctrl-v
&lt;highlight the text&gt;
S&lt;li&gt;
</pre></td><td style="margin: 0px; padding: 0px;"><pre class="first last literal-block" style="margin-top: 1em; margin-bottom: 1.5em; padding: 0.5em 1em; font-size: 0.75em; line-height: 1.5em; color: rgb(17, 17, 17); background: rgb(255, 255, 240); border: 1px solid rgb(221, 221, 204); overflow: hidden; box-shadow: rgb(204, 204, 204) 1px 1px 6px;">&lt;li&gt;6 eggs&lt;/li&gt;
&lt;li&gt;4 apples&lt;/li&gt;
&lt;li&gt;2 pints of milk&lt;/li&gt;</pre></td></tr></tbody></table>
  
## cheatsheet
<script src="https://gist.github.com/mikaelz/38600d22b716b39b031165cd6d201a67.js"></script>

<script src="https://gist.github.com/ayushxx7/b7e749f3623e22f61ef821c362459620.js"></script>

  


### reset diagram
![image](https://user-images.githubusercontent.com/42961200/180112510-13c7b9d5-58bc-4436-a9b7-5dad6fcd6d04.png)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

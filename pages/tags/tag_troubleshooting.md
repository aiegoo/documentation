---
title: "Troubleshooting pages"
tagName: troubleshooting
search: exclude
permalink: tag_troubleshooting.html
sidebar: mydoc_sidebar
folder: tags
---
{% include taglogic.html %}

{% include links.html %}

- sample of rebase -i exmaple

```
pick a082922 add _site folder
pick 0f8d5bb add folder name to page configuration
pick 197ad71 add bebop edition of bebop auto
pick a598c17 rever to when it worked and changed the config.yml

# Rebase b27e91c..a598c17 onto a598c17 (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

---
title: github config and glossary
tags: [git, glossary ]
last_updated: July 11, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
series: "GIT series"
weight: 2
permalink: mydoc_github.html
folder: mydoc
---

## Git glossary


- git stash usage case [stackoverflow](https://stackoverflow.com/a/19003191)
  
The easy answer to the easy question is git stash apply
Just check out the branch you want your changes on, and then git stash apply. Then use git diff to see the result.

After you're all done with your changes—the apply looks good and you're sure you don't need the stash any more—then use git stash drop to get rid of it.

I always suggest using git stash apply rather than git stash pop. The difference is that apply leaves the stash around for easy re-try of the apply, or for looking at, etc. If pop is able to extract the stash, it will immediately also drop it, and if you the suddenly realize that you wanted to extract it somewhere else (in a different branch), or with --index, or some such, that's not so easy. If you apply, you get to choose when to drop.

It's all pretty minor one way or the other though, and for a newbie to git, it should be about the same. (And you can skip all the rest of this!)

What if you're doing more-advanced or more-complicated stuff?
There are at least three or four different "ways to use git stash", as it were. The above is for "way 1", the "easy way":

You started with a clean branch, were working on some changes, and then realized you were doing them in the wrong branch. You just want to take the changes you have now and "move" them to another branch.

This is the easy case, described above. Run git stash save (or plain git stash, same thing). Check out the other branch and use git stash apply. This gets git to merge in your earlier changes, using git's rather powerful merge mechanism. Inspect the results carefully (with git diff) to see if you like them, and if you do, use git stash drop to drop the stash. You're done!

You started some changes and stashed them. Then you switched to another branch and started more changes, forgetting that you had the stashed ones.

Now you want to keep, or even move, these changes, and apply your stash too.

You can in fact git stash save again, as git stash makes a "stack" of changes. If you do that you have two stashes, one just called stash—but you can also write stash@{0}—and one spelled stash@{1}. Use git stash list (at any time) to see them all. The newest is always the lowest-numbered. When you git stash drop, it drops the newest, and the one that was stash@{1} moves to the top of the stack. If you had even more, the one that was stash@{2} becomes stash@{1}, and so on.

You can apply and then drop a specific stash, too: git stash apply stash@{2}, and so on. Dropping a specific stash, renumbers only the higher-numbered ones. Again, the one without a number is also stash@{0}.

If you pile up a lot of stashes, it can get fairly messy (was the stash I wanted stash@{7} or was it stash@{4}? Wait, I just pushed another, now they're 8 and 5?). I personally prefer to transfer these changes to a new branch, because branches have names, and cleanup-attempt-in-December means a lot more to me than stash@{12}. (The git stash command takes an optional save-message, and those can help, but somehow, all my stashes just wind up named WIP on branch.)

(Extra-advanced) You've used git stash save -p, or carefully git add-ed and/or git rm-ed specific bits of your code before running git stash save. You had one version in the stashed index/staging area, and another (different) version in the working tree. You want to preserve all this. So now you use git stash apply --index, and that sometimes fails with:

Conflicts in index.  Try without --index.
You're using git stash save --keep-index in order to test "what will be committed". This one is beyond the scope of this answer; see this other StackOverflow answer instead.

For complicated cases, I recommend starting in a "clean" working directory first, by committing any changes you have now (on a new branch if you like). That way the "somewhere" that you are applying them, has nothing else in it, and you'll just be trying the stashed changes:

git status               # see if there's anything you need to commit
                         # uh oh, there is - let's put it on a new temp branch
git checkout -b temp     # create new temp branch to save stuff
git add ...              # add (and/or remove) stuff as needed
git commit               # save first set of changes
Now you're on a "clean" starting point. Or maybe it goes more like this:

git status               # see if there's anything you need to commit
                         # status says "nothing to commit"
git checkout -b temp     # optional: create new branch for "apply"
git stash apply          # apply stashed changes; see below about --index
The main thing to remember is that the "stash" is a commit, it's just a slightly "funny/weird" commit that's not "on a branch". The apply operation looks at what the commit changed, and tries to repeat it wherever you are now. The stash will still be there (apply keeps it around), so you can look at it more, or decide this was the wrong place to apply it and try again differently, or whatever.

Any time you have a stash, you can use git stash show -p to see a simplified version of what's in the stash. (This simplified version looks only at the "final work tree" changes, not the saved index changes that --index restores separately.) The command git stash apply, without --index, just tries to make those same changes in your work-directory now.

This is true even if you already have some changes. The apply command is happy to apply a stash to a modified working directory (or at least, to try to apply it). You can, for instance, do this:

git stash apply stash      # apply top of stash stack
git stash apply stash@{1}  # and mix in next stash stack entry too
You can choose the "apply" order here, picking out particular stashes to apply in a particular sequence. Note, however, that each time you're basically doing a "git merge", and as the merge documentation warns:

Running git merge with non-trivial uncommitted changes is discouraged: while possible, it may leave you in a state that is hard to back out of in the case of a conflict.

If you start with a clean directory and are just doing several git apply operations, it's easy to back out: use git reset --hard to get back to the clean state, and change your apply operations. (That's why I recommend starting in a clean working directory first, for these complicated cases.)

What about the very worst possible case?
Let's say you're doing Lots Of Advanced Git Stuff, and you've made a stash, and want to git stash apply --index, but it's no longer possible to apply the saved stash with --index, because the branch has diverged too much since the time you saved it.

This is what git stash branch is for.

If you:

check out the exact commit you were on when you did the original stash, then
create a new branch, and finally
git stash apply --index
the attempt to re-create the changes definitely will work. This is what git stash branch newbranch does. (And it then drops the stash since it was successfully applied.)

Some final words about --index (what the heck is it?)
What the --index does is simple to explain, but a bit complicated internally:

When you have changes, you have to git add (or "stage") them before commiting.
Thus, when you ran git stash, you might have edited both files foo and zorg, but only staged one of those.
So when you ask to get the stash back, it might be nice if it git adds the added things and does not git add the non-added things. That is, if you added foo but not zorg back before you did the stash, it might be nice to have that exact same setup. What was staged, should again be staged; what was modified but not staged, should again be modified but not staged.
The --index flag to apply tries to set things up this way. If your work-tree is clean, this usually just works. If your work-tree already has stuff added, though, you can see how there might be some problems here. If you leave out --index, the apply operation does not attempt to preserve the whole staged/unstaged setup. Instead, it just invokes git's merge machinery, using the work-tree commit in the "stash bag". If you don't care about preserving staged/unstaged, leaving out --index makes it a lot easier for git stash apply to do its thing.


## article reading list
[diff changes]https://opensource.com/article/21/4/git-whatchanged}

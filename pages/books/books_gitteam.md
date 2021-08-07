---
title: gitteam book summary
tags: [books, getting_started, gcs]
last_updated: August 7, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: books_gitteam.html
folder: books
---

|You Want To… | Notes | Solution|
|:----| :---: | ---- |
|Combine several commits up to but not including a specific commit.|  |reset [commit-id]|
|Remove all unsaved changes including untracked files. | Changed files are not committed | clean -fd|
|Remove all staged changes and previously committed |work up to a specific commit but do not remove new files from the working directory.| reset --hard [commitid]|
|You want to remove previous work but keep the commit history intact (“roll forwards”).| Branch has been published; working directory is clean.| revert [commit-id]|
|Remove a single commit from a branch’s history. Changed files are committed; working directory is clean; |branch has not been published.| rebase --interactive |[commit-id]|
|Keep previous work but combine it with another commit. | Select the squash option | rebase --interactive [commit-id]|

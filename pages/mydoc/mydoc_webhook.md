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

<!-- fictions -->
     <div role="tabpanel" class="tab-pane active" id="git">
                            <h2>cli highlights</h2>
                    <li class="chapter">
                    <h2>1. <a href="/book/en/v2/Getting-Started-About-Version-Control">Getting Started</a></h2>
                      <ol>
                          <li>
                            1.1
                            <a href="/book/en/v2/Getting-Started-About-Version-Control">About Version Control </a>
                          </li>
                          <li>
                            1.2
                            <a href="/book/en/v2/Getting-Started-A-Short-History-of-Git">A Short History of Git </a>
                          </li>
                          <li>
                            1.3
                            <a href="/book/en/v2/Getting-Started-What-is-Git%3F">What is Git? </a>
                          </li>
                          <li>
                            1.4
                            <a href="/book/en/v2/Getting-Started-The-Command-Line">The Command Line </a>
                          </li>
                          <li>
                            1.5
                            <a href="/book/en/v2/Getting-Started-Installing-Git">Installing Git </a>
                          </li>
                          <li>
                            1.6
                            <a href="/book/en/v2/Getting-Started-First-Time-Git-Setup">First-Time Git Setup </a>
                          </li>
                          <li>
                            1.7
                            <a href="/book/en/v2/Getting-Started-Getting-Help">Getting Help </a>
                          </li>
                          <li>
                            1.8
                            <a href="/book/en/v2/Getting-Started-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>2. <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Git Basics</a></h2>
                      <ol>
                          <li>
                            2.1
                            <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Getting a Git Repository </a>
                          </li>
                          <li>
                            2.2
                            <a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">Recording Changes to the Repository </a>
                          </li>
                          <li>
                            2.3
                            <a href="/book/en/v2/Git-Basics-Viewing-the-Commit-History" class="active">Viewing the Commit History </a>
                          </li>
                          <li>
                            2.4
                            <a href="/book/en/v2/Git-Basics-Undoing-Things">Undoing Things </a>
                          </li>
                          <li>
                            2.5
                            <a href="/book/en/v2/Git-Basics-Working-with-Remotes">Working with Remotes </a>
                          </li>
                          <li>
                            2.6
                            <a href="/book/en/v2/Git-Basics-Tagging">Tagging </a>
                          </li>
                          <li>
                            2.7
                            <a href="/book/en/v2/Git-Basics-Git-Aliases">Git Aliases </a>
                          </li>
                          <li>
                            2.8
                            <a href="/book/en/v2/Git-Basics-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>3. <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Git Branching</a></h2>
                      <ol>
                          <li>
                            3.1
                            <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Branches in a Nutshell </a>
                          </li>
                          <li>
                            3.2
                            <a href="/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Basic Branching and Merging </a>
                          </li>
                          <li>
                            3.3
                            <a href="/book/en/v2/Git-Branching-Branch-Management">Branch Management </a>
                          </li>
                          <li>
                            3.4
                            <a href="/book/en/v2/Git-Branching-Branching-Workflows">Branching Workflows </a>
                          </li>
                          <li>
                            3.5
                            <a href="/book/en/v2/Git-Branching-Remote-Branches">Remote Branches </a>
                          </li>
                          <li>
                            3.6
                            <a href="/book/en/v2/Git-Branching-Rebasing">Rebasing </a>
                          </li>
                          <li>
                            3.7
                            <a href="/book/en/v2/Git-Branching-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>4. <a href="/book/en/v2/Git-on-the-Server-The-Protocols">Git on the Server</a></h2>
                      <ol>
                          <li>
                            4.1
                            <a href="/book/en/v2/Git-on-the-Server-The-Protocols">The Protocols </a>
                          </li>
                          <li>
                            4.2
                            <a href="/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server">Getting Git on a Server </a>
                          </li>
                          <li>
                            4.3
                            <a href="/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key">Generating Your SSH Public Key </a>
                          </li>
                          <li>
                            4.4
                            <a href="/book/en/v2/Git-on-the-Server-Setting-Up-the-Server">Setting Up the Server </a>
                          </li>
                          <li>
                            4.5
                            <a href="/book/en/v2/Git-on-the-Server-Git-Daemon">Git Daemon </a>
                          </li>
                          <li>
                            4.6
                            <a href="/book/en/v2/Git-on-the-Server-Smart-HTTP">Smart HTTP </a>
                          </li>
                          <li>
                            4.7
                            <a href="/book/en/v2/Git-on-the-Server-GitWeb">GitWeb </a>
                          </li>
                          <li>
                            4.8
                            <a href="/book/en/v2/Git-on-the-Server-GitLab">GitLab </a>
                          </li>
                          <li>
                            4.9
                            <a href="/book/en/v2/Git-on-the-Server-Third-Party-Hosted-Options">Third Party Hosted Options </a>
                          </li>
                          <li>
                            4.10
                            <a href="/book/en/v2/Git-on-the-Server-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>5. <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Git</a></h2>
                      <ol>
                          <li>
                            5.1
                            <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Workflows </a>
                          </li>
                          <li>
                            5.2
                            <a href="/book/en/v2/Distributed-Git-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            5.3
                            <a href="/book/en/v2/Distributed-Git-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            5.4
                            <a href="/book/en/v2/Distributed-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-middle">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>6. <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">GitHub</a></h2>
                      <ol>
                          <li>
                            6.1
                            <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">Account Setup and Configuration </a>
                          </li>
                          <li>
                            6.2
                            <a href="/book/en/v2/GitHub-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            6.3
                            <a href="/book/en/v2/GitHub-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            6.4
                            <a href="/book/en/v2/GitHub-Managing-an-organization">Managing an organization </a>
                          </li>
                          <li>
                            6.5
                            <a href="/book/en/v2/GitHub-Scripting-GitHub">Scripting GitHub </a>
                          </li>
                          <li>
                            6.6
                            <a href="/book/en/v2/GitHub-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>7. <a href="/book/en/v2/Git-Tools-Revision-Selection">Git Tools</a></h2>
                      <ol>
                          <li>
                            7.1
                            <a href="/book/en/v2/Git-Tools-Revision-Selection">Revision Selection </a>
                          </li>
                          <li>
                            7.2
                            <a href="/book/en/v2/Git-Tools-Interactive-Staging">Interactive Staging </a>
                          </li>
                          <li>
                            7.3
                            <a href="/book/en/v2/Git-Tools-Stashing-and-Cleaning">Stashing and Cleaning </a>
                          </li>
                          <li>
                            7.4
                            <a href="/book/en/v2/Git-Tools-Signing-Your-Work">Signing Your Work </a>
                          </li>
                          <li>
                            7.5
                            <a href="/book/en/v2/Git-Tools-Searching">Searching </a>
                          </li>
                          <li>
                            7.6
                            <a href="/book/en/v2/Git-Tools-Rewriting-History">Rewriting History </a>
                          </li>
                          <li>
                            7.7
                            <a href="/book/en/v2/Git-Tools-Reset-Demystified">Reset Demystified </a>
                          </li>
                          <li>
                            7.8
                            <a href="/book/en/v2/Git-Tools-Advanced-Merging">Advanced Merging </a>
                          </li>
                          <li>
                            7.9
                            <a href="/book/en/v2/Git-Tools-Rerere">Rerere </a>
                          </li>
                          <li>
                            7.10
                            <a href="/book/en/v2/Git-Tools-Debugging-with-Git">Debugging with Git </a>
                          </li>
                          <li>
                            7.11
                            <a href="/book/en/v2/Git-Tools-Submodules">Submodules </a>
                          </li>
                          <li>
                            7.12
                            <a href="/book/en/v2/Git-Tools-Bundling">Bundling </a>
                          </li>
                          <li>
                            7.13
                            <a href="/book/en/v2/Git-Tools-Replace">Replace </a>
                          </li>
                          <li>
                            7.14
                            <a href="/book/en/v2/Git-Tools-Credential-Storage">Credential Storage </a>
                          </li>
                          <li>
                            7.15
                            <a href="/book/en/v2/Git-Tools-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>8. <a href="/book/en/v2/Customizing-Git-Git-Configuration">Customizing Git</a></h2>
                      <ol>
                          <li>
                            8.1
                            <a href="/book/en/v2/Customizing-Git-Git-Configuration">Git Configuration </a>
                          </li>
                          <li>
                            8.2
                            <a href="/book/en/v2/Customizing-Git-Git-Attributes">Git Attributes </a>
                          </li>
                          <li>
                            8.3
                            <a href="/book/en/v2/Customizing-Git-Git-Hooks">Git Hooks </a>
                          </li>
                          <li>
                            8.4
                            <a href="/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy">An Example Git-Enforced Policy </a>
                          </li>
                          <li>
                            8.5
                            <a href="/book/en/v2/Customizing-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>9. <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git and Other Systems</a></h2>
                      <ol>
                          <li>
                            9.1
                            <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git as a Client </a>
                          </li>
                          <li>
                            9.2
                            <a href="/book/en/v2/Git-and-Other-Systems-Migrating-to-Git">Migrating to Git </a>
                          </li>
                          <li>
                            9.3
                            <a href="/book/en/v2/Git-and-Other-Systems-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>10. <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Git Internals</a></h2>
                      <ol>
                          <li>
                            10.1
                            <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Plumbing and Porcelain </a>
                          </li>
                          <li>
                            10.2
                            <a href="/book/en/v2/Git-Internals-Git-Objects">Git Objects </a>
                          </li>
                          <li>
                            10.3
                            <a href="/book/en/v2/Git-Internals-Git-References">Git References </a>
                          </li>
                          <li>
                            10.4
                            <a href="/book/en/v2/Git-Internals-Packfiles">Packfiles </a>
                          </li>
                          <li>
                            10.5
                            <a href="/book/en/v2/Git-Internals-The-Refspec">The Refspec </a>
                          </li>
                          <li>
                            10.6
                            <a href="/book/en/v2/Git-Internals-Transfer-Protocols">Transfer Protocols </a>
                          </li>
                          <li>
                            10.7
                            <a href="/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery">Maintenance and Data Recovery </a>
                          </li>
                          <li>
                            10.8
                            <a href="/book/en/v2/Git-Internals-Environment-Variables">Environment Variables </a>
                          </li>
                          <li>
                            10.9
                            <a href="/book/en/v2/Git-Internals-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-right">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>A1. <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Appendix A: Git in Other Environments</a></h2>
                      <ol>
                          <li>
                            A1.1
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Graphical Interfaces </a>
                          </li>
                          <li>
                            A1.2
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio">Git in Visual Studio </a>
                          </li>
                          <li>
                            A1.3
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code">Git in Visual Studio Code </a>
                          </li>
                          <li>
                            A1.4
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-IntelliJ-%2F-PyCharm-%2F-WebStorm-%2F-PhpStorm-%2F-RubyMine">Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine </a>
                          </li>
                          <li>
                            A1.5
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Sublime-Text">Git in Sublime Text </a>
                          </li>
                          <li>
                            A1.6
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash">Git in Bash </a>
                          </li>
                          <li>
                            A1.7
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh">Git in Zsh </a>
                          </li>
                          <li>
                            A1.8
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-PowerShell">Git in PowerShell </a>
                          </li>
                          <li>
                            A1.9
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A2. <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Appendix B: Embedding Git in your Applications</a></h2>
                      <ol>
                          <li>
                            A2.1
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Command-line Git </a>
                          </li>
                          <li>
                            A2.2
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Libgit2">Libgit2 </a>
                          </li>
                          <li>
                            A2.3
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-JGit">JGit </a>
                          </li>
                          <li>
                            A2.4
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git">go-git </a>
                          </li>
                          <li>
                            A2.5
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Dulwich">Dulwich </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A3. <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Appendix C: Git Commands</a></h2>
                      <ol>
                          <li>
                            A3.1
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Setup and Config </a>
                          </li>
                          <li>
                            A3.2
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects">Getting and Creating Projects </a>
                          </li>
                          <li>
                            A3.3
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting">Basic Snapshotting </a>
                          </li>
                          <li>
                            A3.4
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Branching-and-Merging">Branching and Merging </a>
                          </li>
                          <li>
                            A3.5
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects">Sharing and Updating Projects </a>
                          </li>
                          <li>
                            A3.6
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Inspection-and-Comparison">Inspection and Comparison </a>
                          </li>
                          <li>
                            A3.7
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Debugging">Debugging </a>
                          </li>
                          <li>
                            A3.8
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Patching">Patching </a>
                          </li>
                          <li>
                            A3.9
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Email">Email </a>
                          </li>
                          <li>
                            A3.10
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-External-Systems">External Systems </a>
                          </li>
                          <li>
                            A3.11
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Administration">Administration </a>
                          </li>
                          <li>
                            A3.12
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Plumbing-Commands">Plumbing Commands </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                    </div>
                   </div>

                      <span class="light" id="edition">
                        2nd Edition
                      </span>
                  </div>

                  <div id="main" class="book edition2">
                      <h1>2.3 Git Basics - Viewing the Commit History</h1>
                    <div>
                  <h2 id="_viewing_history">Viewing the Commit History</h2>
                  <div class="paragraph">
                  <p>After you have created several commits, or if you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.
                  The most basic and powerful tool to do this is the <code>git log</code> command.</p>
                  </div>
                  <div class="paragraph">
                  <p>These examples use a very simple project called “simplegit”.
                  To get the project, run:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git clone https://github.com/schacon/simplegit-progit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>When you run <code>git log</code> in this project, you should get output that looks something like this:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>By default, with no arguments, <code>git log</code> lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.
                  As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.</p>
                  </div>
                  <div class="paragraph">
                  <p>A huge number and variety of options to the <code>git log</code> command are available to show you exactly what you’re looking for.
                  Here, we’ll show you some of the most popular.</p>
                  </div>
                  <div class="paragraph">
                  <p>One of the more helpful options is <code>-p</code> or <code>--patch</code>, which shows the difference (the <em>patch</em> output) introduced in each commit.
                  You can also limit the number of log entries displayed, such as using <code>-2</code> to show only the last two entries.</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -p -2
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  diff --git a/Rakefile b/Rakefile
                  index a874b73..8f94139 100644
                  --- a/Rakefile
                  +++ b/Rakefile
                  @@ -5,7 +5,7 @@ require 'rake/gempackagetask'
                   spec = Gem::Specification.new do |s|
                       s.platform  =   Gem::Platform::RUBY
                       s.name      =   "simplegit"
                  -    s.version   =   "0.1.0"
                  +    s.version   =   "0.1.1"
                       s.author    =   "Scott Chacon"
                       s.email     =   "schacon@gee-mail.com"
                       s.summary   =   "A simple gem for using Git in Ruby code."

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  diff --git a/lib/simplegit.rb b/lib/simplegit.rb
                  index a0a60ae..47c6340 100644
                  --- a/lib/simplegit.rb
                  +++ b/lib/simplegit.rb
                  @@ -18,8 +18,3 @@ class SimpleGit
                       end

                   end
                  -
                  -if $0 == __FILE__
                  -  git = SimpleGit.new
                  -  puts git.show
                  -end</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This option displays the same information but with a diff directly following each entry.
                  This is very helpful for code review or to quickly browse what happened during a series of commits that a collaborator has added.
                  You can also use a series of summarizing options with <code>git log</code>.
                  For example, if you want to see some abbreviated stats for each commit, you can use the <code>--stat</code> option:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --stat
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                   Rakefile | 2 +-
                   1 file changed, 1 insertion(+), 1 deletion(-)

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                   lib/simplegit.rb | 5 -----
                   1 file changed, 5 deletions(-)

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit

                   README           |  6 ++++++
                   Rakefile         | 23 +++++++++++++++++++++++
                   lib/simplegit.rb | 25 +++++++++++++++++++++++++
                   3 files changed, 54 insertions(+)</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>As you can see, the <code>--stat</code> option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed.
                  It also puts a summary of the information at the end.</p>
                  </div>
                  <div class="paragraph">
                  <p>Another really useful option is <code>--pretty</code>.
                  This option changes the log output to formats other than the default.
                  A few prebuilt option values are available for you to use.
                  The <code>oneline</code> value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits.
                  In addition, the <code>short</code>, <code>full</code>, and <code>fuller</code> values show the output in roughly the same format but with less or more information, respectively:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=oneline
                  ca82a6dff817ec66f44342007202690a93763949 Change version number
                  085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
                  a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The most interesting option value is <code>format</code>, which allows you to specify your own log output format.
                  This is especially useful when you’re generating output for machine parsing — because you specify the format explicitly, you know it won’t change with updates to Git:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h - %an, %ar : %s"
                  ca82a6d - Scott Chacon, 6 years ago : Change version number
                  085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
                  a11bef0 - Scott Chacon, 6 years ago : Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p><a href="ch00/pretty_format">Useful specifiers for <code>git log --pretty=format</code></a> lists some of the more useful specifiers that <code>format</code> takes.</p>
                  </div>
                  <table id="pretty_format" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 1. Useful specifiers for <code>git log --pretty=format</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Specifier</th>
                  <th class="tableblock halign-left valign-top">Description of Output</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%H</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%h</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%T</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%t</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%P</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%an</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ae</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ad</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date (format respects the --date=option)</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ar</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cn</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ce</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cd</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cr</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%s</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="paragraph">
                  <p>You may be wondering what the difference is between <em>author</em> and <em>committer</em>.
                  The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.
                  So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.
                  We’ll cover this distinction a bit more in <a href="ch00/ch05-distributed-git">Distributed Git</a>.</p>
                  </div>
                  <div class="paragraph">
                  <p>The <code>oneline</code> and <code>format</code> option values are particularly useful with another <code>log</code> option called <code>--graph</code>.
                  This option adds a nice little ASCII graph showing your branch and merge history:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h %s" --graph
                  * 2d3acf9 Ignore errors from SIGCHLD on trap
                  *  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
                  |\
                  | * 420eac9 Add method for getting the current branch
                  * | 30e367c Timeout code and tests
                  * | 5a09431 Add timeout protection to grit
                  * | e1193f8 Support for heads with slashes in them
                  |/
                  * d6016bc Require time for xmlschema
                  *  11d191e Merge branch 'defunkt' into local</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This type of output will become more interesting as we go through branching and merging in the next chapter.</p>
                  </div>
                  <div class="paragraph">
                  <p>Those are only some simple output-formatting options to <code>git log</code> — there are many more.
                  <a href="ch00/log_options">Common options to <code>git log</code></a> lists the options we’ve covered so far, as well as some other common formatting options that may be useful, along with how they change the output of the log command.</p>
                  </div>
                  <table id="log_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 2. Common options to <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the patch introduced with each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--stat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show statistics for files modified in each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--shortstat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display only the changed/insertions/deletions line from the --stat command.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-only</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files modified after the commit information.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-status</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files affected with added/modified/deleted information as well.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--abbrev-commit</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the first few characters of the SHA-1 checksum instead of all 40.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--relative-date</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--graph</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display an ASCII graph of the branch and merge history beside the log output.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--pretty</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--oneline</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Shorthand for <code>--pretty=oneline --abbrev-commit</code> used together.</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="sect3">
                  <h3 id="_limiting_log_output">Limiting Log Output</h3><div id="content">


                  <div id="book-chapters">
                    <a class="dropdown-trigger" id="book-chapters-trigger" data-panel-id="chapters-dropdown" href="#">Chapters ▾</a>
                  <div class="dropdown-panel" id="chapters-dropdown">
                    <div class="three-column">
                      <div class="column-left">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>1. <a href="/book/en/v2/Getting-Started-About-Version-Control">Getting Started</a></h2>
                      <ol>
                          <li>
                            1.1
                            <a href="/book/en/v2/Getting-Started-About-Version-Control">About Version Control </a>
                          </li>
                          <li>
                            1.2
                            <a href="/book/en/v2/Getting-Started-A-Short-History-of-Git">A Short History of Git </a>
                          </li>
                          <li>
                            1.3
                            <a href="/book/en/v2/Getting-Started-What-is-Git%3F">What is Git? </a>
                          </li>
                          <li>
                            1.4
                            <a href="/book/en/v2/Getting-Started-The-Command-Line">The Command Line </a>
                          </li>
                          <li>
                            1.5
                            <a href="/book/en/v2/Getting-Started-Installing-Git">Installing Git </a>
                          </li>
                          <li>
                            1.6
                            <a href="/book/en/v2/Getting-Started-First-Time-Git-Setup">First-Time Git Setup </a>
                          </li>
                          <li>
                            1.7
                            <a href="/book/en/v2/Getting-Started-Getting-Help">Getting Help </a>
                          </li>
                          <li>
                            1.8
                            <a href="/book/en/v2/Getting-Started-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>2. <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Git Basics</a></h2>
                      <ol>
                          <li>
                            2.1
                            <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Getting a Git Repository </a>
                          </li>
                          <li>
                            2.2
                            <a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">Recording Changes to the Repository </a>
                          </li>
                          <li>
                            2.3
                            <a href="/book/en/v2/Git-Basics-Viewing-the-Commit-History" class="active">Viewing the Commit History </a>
                          </li>
                          <li>
                            2.4
                            <a href="/book/en/v2/Git-Basics-Undoing-Things">Undoing Things </a>
                          </li>
                          <li>
                            2.5
                            <a href="/book/en/v2/Git-Basics-Working-with-Remotes">Working with Remotes </a>
                          </li>
                          <li>
                            2.6
                            <a href="/book/en/v2/Git-Basics-Tagging">Tagging </a>
                          </li>
                          <li>
                            2.7
                            <a href="/book/en/v2/Git-Basics-Git-Aliases">Git Aliases </a>
                          </li>
                          <li>
                            2.8
                            <a href="/book/en/v2/Git-Basics-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>3. <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Git Branching</a></h2>
                      <ol>
                          <li>
                            3.1
                            <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Branches in a Nutshell </a>
                          </li>
                          <li>
                            3.2
                            <a href="/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Basic Branching and Merging </a>
                          </li>
                          <li>
                            3.3
                            <a href="/book/en/v2/Git-Branching-Branch-Management">Branch Management </a>
                          </li>
                          <li>
                            3.4
                            <a href="/book/en/v2/Git-Branching-Branching-Workflows">Branching Workflows </a>
                          </li>
                          <li>
                            3.5
                            <a href="/book/en/v2/Git-Branching-Remote-Branches">Remote Branches </a>
                          </li>
                          <li>
                            3.6
                            <a href="/book/en/v2/Git-Branching-Rebasing">Rebasing </a>
                          </li>
                          <li>
                            3.7
                            <a href="/book/en/v2/Git-Branching-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>4. <a href="/book/en/v2/Git-on-the-Server-The-Protocols">Git on the Server</a></h2>
                      <ol>
                          <li>
                            4.1
                            <a href="/book/en/v2/Git-on-the-Server-The-Protocols">The Protocols </a>
                          </li>
                          <li>
                            4.2
                            <a href="/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server">Getting Git on a Server </a>
                          </li>
                          <li>
                            4.3
                            <a href="/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key">Generating Your SSH Public Key </a>
                          </li>
                          <li>
                            4.4
                            <a href="/book/en/v2/Git-on-the-Server-Setting-Up-the-Server">Setting Up the Server </a>
                          </li>
                          <li>
                            4.5
                            <a href="/book/en/v2/Git-on-the-Server-Git-Daemon">Git Daemon </a>
                          </li>
                          <li>
                            4.6
                            <a href="/book/en/v2/Git-on-the-Server-Smart-HTTP">Smart HTTP </a>
                          </li>
                          <li>
                            4.7
                            <a href="/book/en/v2/Git-on-the-Server-GitWeb">GitWeb </a>
                          </li>
                          <li>
                            4.8
                            <a href="/book/en/v2/Git-on-the-Server-GitLab">GitLab </a>
                          </li>
                          <li>
                            4.9
                            <a href="/book/en/v2/Git-on-the-Server-Third-Party-Hosted-Options">Third Party Hosted Options </a>
                          </li>
                          <li>
                            4.10
                            <a href="/book/en/v2/Git-on-the-Server-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>5. <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Git</a></h2>
                      <ol>
                          <li>
                            5.1
                            <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Workflows </a>
                          </li>
                          <li>
                            5.2
                            <a href="/book/en/v2/Distributed-Git-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            5.3
                            <a href="/book/en/v2/Distributed-Git-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            5.4
                            <a href="/book/en/v2/Distributed-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-middle">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>6. <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">GitHub</a></h2>
                      <ol>
                          <li>
                            6.1
                            <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">Account Setup and Configuration </a>
                          </li>
                          <li>
                            6.2
                            <a href="/book/en/v2/GitHub-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            6.3
                            <a href="/book/en/v2/GitHub-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            6.4
                            <a href="/book/en/v2/GitHub-Managing-an-organization">Managing an organization </a>
                          </li>
                          <li>
                            6.5
                            <a href="/book/en/v2/GitHub-Scripting-GitHub">Scripting GitHub </a>
                          </li>
                          <li>
                            6.6
                            <a href="/book/en/v2/GitHub-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>7. <a href="/book/en/v2/Git-Tools-Revision-Selection">Git Tools</a></h2>
                      <ol>
                          <li>
                            7.1
                            <a href="/book/en/v2/Git-Tools-Revision-Selection">Revision Selection </a>
                          </li>
                          <li>
                            7.2
                            <a href="/book/en/v2/Git-Tools-Interactive-Staging">Interactive Staging </a>
                          </li>
                          <li>
                            7.3
                            <a href="/book/en/v2/Git-Tools-Stashing-and-Cleaning">Stashing and Cleaning </a>
                          </li>
                          <li>
                            7.4
                            <a href="/book/en/v2/Git-Tools-Signing-Your-Work">Signing Your Work </a>
                          </li>
                          <li>
                            7.5
                            <a href="/book/en/v2/Git-Tools-Searching">Searching </a>
                          </li>
                          <li>
                            7.6
                            <a href="/book/en/v2/Git-Tools-Rewriting-History">Rewriting History </a>
                          </li>
                          <li>
                            7.7
                            <a href="/book/en/v2/Git-Tools-Reset-Demystified">Reset Demystified </a>
                          </li>
                          <li>
                            7.8
                            <a href="/book/en/v2/Git-Tools-Advanced-Merging">Advanced Merging </a>
                          </li>
                          <li>
                            7.9
                            <a href="/book/en/v2/Git-Tools-Rerere">Rerere </a>
                          </li>
                          <li>
                            7.10
                            <a href="/book/en/v2/Git-Tools-Debugging-with-Git">Debugging with Git </a>
                          </li>
                          <li>
                            7.11
                            <a href="/book/en/v2/Git-Tools-Submodules">Submodules </a>
                          </li>
                          <li>
                            7.12
                            <a href="/book/en/v2/Git-Tools-Bundling">Bundling </a>
                          </li>
                          <li>
                            7.13
                            <a href="/book/en/v2/Git-Tools-Replace">Replace </a>
                          </li>
                          <li>
                            7.14
                            <a href="/book/en/v2/Git-Tools-Credential-Storage">Credential Storage </a>
                          </li>
                          <li>
                            7.15
                            <a href="/book/en/v2/Git-Tools-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>8. <a href="/book/en/v2/Customizing-Git-Git-Configuration">Customizing Git</a></h2>
                      <ol>
                          <li>
                            8.1
                            <a href="/book/en/v2/Customizing-Git-Git-Configuration">Git Configuration </a>
                          </li>
                          <li>
                            8.2
                            <a href="/book/en/v2/Customizing-Git-Git-Attributes">Git Attributes </a>
                          </li>
                          <li>
                            8.3
                            <a href="/book/en/v2/Customizing-Git-Git-Hooks">Git Hooks </a>
                          </li>
                          <li>
                            8.4
                            <a href="/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy">An Example Git-Enforced Policy </a>
                          </li>
                          <li>
                            8.5
                            <a href="/book/en/v2/Customizing-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>9. <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git and Other Systems</a></h2>
                      <ol>
                          <li>
                            9.1
                            <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git as a Client </a>
                          </li>
                          <li>
                            9.2
                            <a href="/book/en/v2/Git-and-Other-Systems-Migrating-to-Git">Migrating to Git </a>
                          </li>
                          <li>
                            9.3
                            <a href="/book/en/v2/Git-and-Other-Systems-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>10. <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Git Internals</a></h2>
                      <ol>
                          <li>
                            10.1
                            <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Plumbing and Porcelain </a>
                          </li>
                          <li>
                            10.2
                            <a href="/book/en/v2/Git-Internals-Git-Objects">Git Objects </a>
                          </li>
                          <li>
                            10.3
                            <a href="/book/en/v2/Git-Internals-Git-References">Git References </a>
                          </li>
                          <li>
                            10.4
                            <a href="/book/en/v2/Git-Internals-Packfiles">Packfiles </a>
                          </li>
                          <li>
                            10.5
                            <a href="/book/en/v2/Git-Internals-The-Refspec">The Refspec </a>
                          </li>
                          <li>
                            10.6
                            <a href="/book/en/v2/Git-Internals-Transfer-Protocols">Transfer Protocols </a>
                          </li>
                          <li>
                            10.7
                            <a href="/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery">Maintenance and Data Recovery </a>
                          </li>
                          <li>
                            10.8
                            <a href="/book/en/v2/Git-Internals-Environment-Variables">Environment Variables </a>
                          </li>
                          <li>
                            10.9
                            <a href="/book/en/v2/Git-Internals-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-right">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>A1. <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Appendix A: Git in Other Environments</a></h2>
                      <ol>
                          <li>
                            A1.1
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Graphical Interfaces </a>
                          </li>
                          <li>
                            A1.2
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio">Git in Visual Studio </a>
                          </li>
                          <li>
                            A1.3
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code">Git in Visual Studio Code </a>
                          </li>
                          <li>
                            A1.4
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-IntelliJ-%2F-PyCharm-%2F-WebStorm-%2F-PhpStorm-%2F-RubyMine">Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine </a>
                          </li>
                          <li>
                            A1.5
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Sublime-Text">Git in Sublime Text </a>
                          </li>
                          <li>
                            A1.6
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash">Git in Bash </a>
                          </li>
                          <li>
                            A1.7
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh">Git in Zsh </a>
                          </li>
                          <li>
                            A1.8
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-PowerShell">Git in PowerShell </a>
                          </li>
                          <li>
                            A1.9
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A2. <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Appendix B: Embedding Git in your Applications</a></h2>
                      <ol>
                          <li>
                            A2.1
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Command-line Git </a>
                          </li>
                          <li>
                            A2.2
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Libgit2">Libgit2 </a>
                          </li>
                          <li>
                            A2.3
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-JGit">JGit </a>
                          </li>
                          <li>
                            A2.4
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git">go-git </a>
                          </li>
                          <li>
                            A2.5
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Dulwich">Dulwich </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A3. <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Appendix C: Git Commands</a></h2>
                      <ol>
                          <li>
                            A3.1
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Setup and Config </a>
                          </li>
                          <li>
                            A3.2
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects">Getting and Creating Projects </a>
                          </li>
                          <li>
                            A3.3
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting">Basic Snapshotting </a>
                          </li>
                          <li>
                            A3.4
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Branching-and-Merging">Branching and Merging </a>
                          </li>
                          <li>
                            A3.5
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects">Sharing and Updating Projects </a>
                          </li>
                          <li>
                            A3.6
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Inspection-and-Comparison">Inspection and Comparison </a>
                          </li>
                          <li>
                            A3.7
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Debugging">Debugging </a>
                          </li>
                          <li>
                            A3.8
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Patching">Patching </a>
                          </li>
                          <li>
                            A3.9
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Email">Email </a>
                          </li>
                          <li>
                            A3.10
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-External-Systems">External Systems </a>
                          </li>
                          <li>
                            A3.11
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Administration">Administration </a>
                          </li>
                          <li>
                            A3.12
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Plumbing-Commands">Plumbing Commands </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                    </div>
                   </div>

                      <span class="light" id="edition">
                        2nd Edition
                      </span>
                  </div>

                  <div id="main" class="book edition2">
                      <h1>2.3 Git Basics - Viewing the Commit History</h1>
                    <div>
                  <h2 id="_viewing_history">Viewing the Commit History</h2>
                  <div class="paragraph">
                  <p>After you have created several commits, or if you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.
                  The most basic and powerful tool to do this is the <code>git log</code> command.</p>
                  </div>
                  <div class="paragraph">
                  <p>These examples use a very simple project called “simplegit”.
                  To get the project, run:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git clone https://github.com/schacon/simplegit-progit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>When you run <code>git log</code> in this project, you should get output that looks something like this:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>By default, with no arguments, <code>git log</code> lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.
                  As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.</p>
                  </div>
                  <div class="paragraph">
                  <p>A huge number and variety of options to the <code>git log</code> command are available to show you exactly what you’re looking for.
                  Here, we’ll show you some of the most popular.</p>
                  </div>
                  <div class="paragraph">
                  <p>One of the more helpful options is <code>-p</code> or <code>--patch</code>, which shows the difference (the <em>patch</em> output) introduced in each commit.
                  You can also limit the number of log entries displayed, such as using <code>-2</code> to show only the last two entries.</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -p -2
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  diff --git a/Rakefile b/Rakefile
                  index a874b73..8f94139 100644
                  --- a/Rakefile
                  +++ b/Rakefile
                  @@ -5,7 +5,7 @@ require 'rake/gempackagetask'
                   spec = Gem::Specification.new do |s|
                       s.platform  =   Gem::Platform::RUBY
                       s.name      =   "simplegit"
                  -    s.version   =   "0.1.0"
                  +    s.version   =   "0.1.1"
                       s.author    =   "Scott Chacon"
                       s.email     =   "schacon@gee-mail.com"
                       s.summary   =   "A simple gem for using Git in Ruby code."

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  diff --git a/lib/simplegit.rb b/lib/simplegit.rb
                  index a0a60ae..47c6340 100644
                  --- a/lib/simplegit.rb
                  +++ b/lib/simplegit.rb
                  @@ -18,8 +18,3 @@ class SimpleGit
                       end

                   end
                  -
                  -if $0 == __FILE__
                  -  git = SimpleGit.new
                  -  puts git.show
                  -end</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This option displays the same information but with a diff directly following each entry.
                  This is very helpful for code review or to quickly browse what happened during a series of commits that a collaborator has added.
                  You can also use a series of summarizing options with <code>git log</code>.
                  For example, if you want to see some abbreviated stats for each commit, you can use the <code>--stat</code> option:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --stat
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                   Rakefile | 2 +-
                   1 file changed, 1 insertion(+), 1 deletion(-)

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                   lib/simplegit.rb | 5 -----
                   1 file changed, 5 deletions(-)

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit

                   README           |  6 ++++++
                   Rakefile         | 23 +++++++++++++++++++++++
                   lib/simplegit.rb | 25 +++++++++++++++++++++++++
                   3 files changed, 54 insertions(+)</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>As you can see, the <code>--stat</code> option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed.
                  It also puts a summary of the information at the end.</p>
                  </div>
                  <div class="paragraph">
                  <p>Another really useful option is <code>--pretty</code>.
                  This option changes the log output to formats other than the default.
                  A few prebuilt option values are available for you to use.
                  The <code>oneline</code> value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits.
                  In addition, the <code>short</code>, <code>full</code>, and <code>fuller</code> values show the output in roughly the same format but with less or more information, respectively:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=oneline
                  ca82a6dff817ec66f44342007202690a93763949 Change version number
                  085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
                  a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The most interesting option value is <code>format</code>, which allows you to specify your own log output format.
                  This is especially useful when you’re generating output for machine parsing — because you specify the format explicitly, you know it won’t change with updates to Git:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h - %an, %ar : %s"
                  ca82a6d - Scott Chacon, 6 years ago : Change version number
                  085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
                  a11bef0 - Scott Chacon, 6 years ago : Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p><a href="ch00/pretty_format">Useful specifiers for <code>git log --pretty=format</code></a> lists some of the more useful specifiers that <code>format</code> takes.</p>
                  </div>
                  <table id="pretty_format" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 1. Useful specifiers for <code>git log --pretty=format</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Specifier</th>
                  <th class="tableblock halign-left valign-top">Description of Output</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%H</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%h</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%T</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%t</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%P</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%an</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ae</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ad</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date (format respects the --date=option)</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ar</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cn</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ce</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cd</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cr</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%s</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="paragraph">
                  <p>You may be wondering what the difference is between <em>author</em> and <em>committer</em>.
                  The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.
                  So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.
                  We’ll cover this distinction a bit more in <a href="ch00/ch05-distributed-git">Distributed Git</a>.</p>
                  </div>
                  <div class="paragraph">
                  <p>The <code>oneline</code> and <code>format</code> option values are particularly useful with another <code>log</code> option called <code>--graph</code>.
                  This option adds a nice little ASCII graph showing your branch and merge history:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h %s" --graph
                  * 2d3acf9 Ignore errors from SIGCHLD on trap
                  *  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
                  |\
                  | * 420eac9 Add method for getting the current branch
                  * | 30e367c Timeout code and tests
                  * | 5a09431 Add timeout protection to grit
                  * | e1193f8 Support for heads with slashes in them
                  |/
                  * d6016bc Require time for xmlschema
                  *  11d191e Merge branch 'defunkt' into local</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This type of output will become more interesting as we go through branching and merging in the next chapter.</p>
                  </div>
                  <div class="paragraph">
                  <p>Those are only some simple output-formatting options to <code>git log</code> — there are many more.
                  <a href="ch00/log_options">Common options to <code>git log</code></a> lists the options we’ve covered so far, as well as some other common formatting options that may be useful, along with how they change the output of the log command.</p>
                  </div>
                  <table id="log_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 2. Common options to <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the patch introduced with each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--stat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show statistics for files modified in each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--shortstat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display only the changed/insertions/deletions line from the --stat command.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-only</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files modified after the commit information.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-status</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files affected with added/modified/deleted information as well.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--abbrev-commit</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the first few characters of the SHA-1 checksum instead of all 40.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--relative-date</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--graph</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display an ASCII graph of the branch and merge history beside the log output.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--pretty</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--oneline</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Shorthand for <code>--pretty=oneline --abbrev-commit</code> used together.</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="sect3">
                  <h3 id="_limiting_log_output">Limiting Log Output</h3>
                  <div class="paragraph">
                  <p>In addition to output-formatting options, <code>git log</code> takes a number of useful limiting options; that is, options that let you show only a subset of commits.
                  You’ve seen one such option already — the <code>-2</code> option, which displays only the last two commits.
                  In fact, you can do <code>-&lt;n&gt;</code>, where <code>n</code> is any integer to show the last <code>n</code> commits.
                  In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.</p>
                  </div>
                  <div class="paragraph">
                  <p>However, the time-limiting options such as <code>--since</code> and <code>--until</code> are very useful.
                  For example, this command gets the list of commits made in the last two weeks:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --since=2.weeks</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This command works with lots of formats — you can specify a specific date like <code>"2008-01-15"</code>, or a relative date such as <code>"2 years 1 day 3 minutes ago"</code>.</p>
                  </div>
                  <div class="paragraph">
                  <p>You can also filter the list to commits that match some search criteria.
                  The <code>--author</code> option allows you to filter on a specific author, and the <code>--grep</code> option lets you search for keywords in the commit messages.</p>
                  </div>
                  <div class="admonitionblock note">
                  <table>
                  <tbody><tr>
                  <td class="icon">
                  <div class="title">Note</div>
                  </td>
                  <td class="content">
                  <div class="paragraph">
                  <p>You can specify more than one instance of both the <code>--author</code> and <code>--grep</code> search criteria, which
                  will limit the commit output to commits that match <em>any</em> of the <code>--author</code> patterns and <em>any</em>
                  of the <code>--grep</code> patterns; however, adding the <code>--all-match</code> option further limits the output to
                  just those commits that match <em>all</em> <code>--grep</code> patterns.</p>
                  </div>
                  </td>
                  </tr>
                  </tbody></table>
                  </div>
                  <div class="paragraph">
                  <p>Another really helpful filter is the <code>-S</code> option (colloquially referred to as Git’s “pickaxe” option), which takes a string and shows only those commits that changed the number of occurrences of that string.
                  For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -S function_name</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The last really useful option to pass to <code>git log</code> as a filter is a path.
                  If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files.
                  This is always the last option and is generally preceded by double dashes (<code>--</code>) to separate the paths from the options:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -- path/to/file</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>In <a href="ch00/limit_options">Options to limit the output of <code>git log</code></a> we’ll list these and a few other common options for your reference.</p>
                  </div>
                  <table id="limit_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 3. Options to limit the output of <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 33.3333%;">
                  <col style="width: 66.6667%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-&lt;n&gt;</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the last n commits</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--since</code>, <code>--after</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made after the specified date.</p></td>
                  </tr>
                  <tr><div id="content">


                  <div id="book-chapters">
                    <a class="dropdown-trigger" id="book-chapters-trigger" data-panel-id="chapters-dropdown" href="#">Chapters ▾</a>
                  <div class="dropdown-panel" id="chapters-dropdown">
                    <div class="three-column">
                      <div class="column-left">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>1. <a href="/book/en/v2/Getting-Started-About-Version-Control">Getting Started</a></h2>
                      <ol>
                          <li>
                            1.1
                            <a href="/book/en/v2/Getting-Started-About-Version-Control">About Version Control </a>
                          </li>
                          <li>
                            1.2
                            <a href="/book/en/v2/Getting-Started-A-Short-History-of-Git">A Short History of Git </a>
                          </li>
                          <li>
                            1.3
                            <a href="/book/en/v2/Getting-Started-What-is-Git%3F">What is Git? </a>
                          </li>
                          <li>
                            1.4
                            <a href="/book/en/v2/Getting-Started-The-Command-Line">The Command Line </a>
                          </li>
                          <li>
                            1.5
                            <a href="/book/en/v2/Getting-Started-Installing-Git">Installing Git </a>
                          </li>
                          <li>
                            1.6
                            <a href="/book/en/v2/Getting-Started-First-Time-Git-Setup">First-Time Git Setup </a>
                          </li>
                          <li>
                            1.7
                            <a href="/book/en/v2/Getting-Started-Getting-Help">Getting Help </a>
                          </li>
                          <li>
                            1.8
                            <a href="/book/en/v2/Getting-Started-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>2. <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Git Basics</a></h2>
                      <ol>
                          <li>
                            2.1
                            <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Getting a Git Repository </a>
                          </li>
                          <li>
                            2.2
                            <a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">Recording Changes to the Repository </a>
                          </li>
                          <li>
                            2.3
                            <a href="/book/en/v2/Git-Basics-Viewing-the-Commit-History" class="active">Viewing the Commit History </a>
                          </li>
                          <li>
                            2.4
                            <a href="/book/en/v2/Git-Basics-Undoing-Things">Undoing Things </a>
                          </li>
                          <li>
                            2.5
                            <a href="/book/en/v2/Git-Basics-Working-with-Remotes">Working with Remotes </a>
                          </li>
                          <li>
                            2.6
                            <a href="/book/en/v2/Git-Basics-Tagging">Tagging </a>
                          </li>
                          <li>
                            2.7
                            <a href="/book/en/v2/Git-Basics-Git-Aliases">Git Aliases </a>
                          </li>
                          <li>
                            2.8
                            <a href="/book/en/v2/Git-Basics-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>3. <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Git Branching</a></h2>
                      <ol>
                          <li>
                            3.1
                            <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Branches in a Nutshell </a>
                          </li>
                          <li>
                            3.2
                            <a href="/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Basic Branching and Merging </a>
                          </li>
                          <li>
                            3.3
                            <a href="/book/en/v2/Git-Branching-Branch-Management">Branch Management </a>
                          </li>
                          <li>
                            3.4
                            <a href="/book/en/v2/Git-Branching-Branching-Workflows">Branching Workflows </a>
                          </li>
                          <li>
                            3.5
                            <a href="/book/en/v2/Git-Branching-Remote-Branches">Remote Branches </a>
                          </li>
                          <li>
                            3.6
                            <a href="/book/en/v2/Git-Branching-Rebasing">Rebasing </a>
                          </li>
                          <li>
                            3.7
                            <a href="/book/en/v2/Git-Branching-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>4. <a href="/book/en/v2/Git-on-the-Server-The-Protocols">Git on the Server</a></h2>
                      <ol>
                          <li>
                            4.1
                            <a href="/book/en/v2/Git-on-the-Server-The-Protocols">The Protocols </a>
                          </li>
                          <li>
                            4.2
                            <a href="/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server">Getting Git on a Server </a>
                          </li>
                          <li>
                            4.3
                            <a href="/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key">Generating Your SSH Public Key </a>
                          </li>
                          <li>
                            4.4
                            <a href="/book/en/v2/Git-on-the-Server-Setting-Up-the-Server">Setting Up the Server </a>
                          </li>
                          <li>
                            4.5
                            <a href="/book/en/v2/Git-on-the-Server-Git-Daemon">Git Daemon </a>
                          </li>
                          <li>
                            4.6
                            <a href="/book/en/v2/Git-on-the-Server-Smart-HTTP">Smart HTTP </a>
                          </li>
                          <li>
                            4.7
                            <a href="/book/en/v2/Git-on-the-Server-GitWeb">GitWeb </a>
                          </li>
                          <li>
                            4.8
                            <a href="/book/en/v2/Git-on-the-Server-GitLab">GitLab </a>
                          </li>
                          <li>
                            4.9
                            <a href="/book/en/v2/Git-on-the-Server-Third-Party-Hosted-Options">Third Party Hosted Options </a>
                          </li>
                          <li>
                            4.10
                            <a href="/book/en/v2/Git-on-the-Server-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>5. <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Git</a></h2>
                      <ol>
                          <li>
                            5.1
                            <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Workflows </a>
                          </li>
                          <li>
                            5.2
                            <a href="/book/en/v2/Distributed-Git-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            5.3
                            <a href="/book/en/v2/Distributed-Git-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            5.4
                            <a href="/book/en/v2/Distributed-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-middle">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>6. <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">GitHub</a></h2>
                      <ol>
                          <li>
                            6.1
                            <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">Account Setup and Configuration </a>
                          </li>
                          <li>
                            6.2
                            <a href="/book/en/v2/GitHub-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            6.3
                            <a href="/book/en/v2/GitHub-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            6.4
                            <a href="/book/en/v2/GitHub-Managing-an-organization">Managing an organization </a>
                          </li>
                          <li>
                            6.5
                            <a href="/book/en/v2/GitHub-Scripting-GitHub">Scripting GitHub </a>
                          </li>
                          <li>
                            6.6
                            <a href="/book/en/v2/GitHub-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>7. <a href="/book/en/v2/Git-Tools-Revision-Selection">Git Tools</a></h2>
                      <ol>
                          <li>
                            7.1
                            <a href="/book/en/v2/Git-Tools-Revision-Selection">Revision Selection </a>
                          </li>
                          <li>
                            7.2
                            <a href="/book/en/v2/Git-Tools-Interactive-Staging">Interactive Staging </a>
                          </li>
                          <li>
                            7.3
                            <a href="/book/en/v2/Git-Tools-Stashing-and-Cleaning">Stashing and Cleaning </a>
                          </li>
                          <li>
                            7.4
                            <a href="/book/en/v2/Git-Tools-Signing-Your-Work">Signing Your Work </a>
                          </li>
                          <li>
                            7.5
                            <a href="/book/en/v2/Git-Tools-Searching">Searching </a>
                          </li>
                          <li>
                            7.6
                            <a href="/book/en/v2/Git-Tools-Rewriting-History">Rewriting History </a>
                          </li>
                          <li>
                            7.7
                            <a href="/book/en/v2/Git-Tools-Reset-Demystified">Reset Demystified </a>
                          </li>
                          <li>
                            7.8
                            <a href="/book/en/v2/Git-Tools-Advanced-Merging">Advanced Merging </a>
                          </li>
                          <li>
                            7.9
                            <a href="/book/en/v2/Git-Tools-Rerere">Rerere </a>
                          </li>
                          <li>
                            7.10
                            <a href="/book/en/v2/Git-Tools-Debugging-with-Git">Debugging with Git </a>
                          </li>
                          <li>
                            7.11
                            <a href="/book/en/v2/Git-Tools-Submodules">Submodules </a>
                          </li>
                          <li>
                            7.12
                            <a href="/book/en/v2/Git-Tools-Bundling">Bundling </a>
                          </li>
                          <li>
                            7.13
                            <a href="/book/en/v2/Git-Tools-Replace">Replace </a>
                          </li>
                          <li>
                            7.14
                            <a href="/book/en/v2/Git-Tools-Credential-Storage">Credential Storage </a>
                          </li>
                          <li>
                            7.15
                            <a href="/book/en/v2/Git-Tools-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>8. <a href="/book/en/v2/Customizing-Git-Git-Configuration">Customizing Git</a></h2>
                      <ol>
                          <li>
                            8.1
                            <a href="/book/en/v2/Customizing-Git-Git-Configuration">Git Configuration </a>
                          </li>
                          <li>
                            8.2
                            <a href="/book/en/v2/Customizing-Git-Git-Attributes">Git Attributes </a>
                          </li>
                          <li>
                            8.3
                            <a href="/book/en/v2/Customizing-Git-Git-Hooks">Git Hooks </a>
                          </li>
                          <li>
                            8.4
                            <a href="/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy">An Example Git-Enforced Policy </a>
                          </li>
                          <li>
                            8.5
                            <a href="/book/en/v2/Customizing-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>9. <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git and Other Systems</a></h2>
                      <ol>
                          <li>
                            9.1
                            <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git as a Client </a>
                          </li>
                          <li>
                            9.2
                            <a href="/book/en/v2/Git-and-Other-Systems-Migrating-to-Git">Migrating to Git </a>
                          </li>
                          <li>
                            9.3
                            <a href="/book/en/v2/Git-and-Other-Systems-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>10. <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Git Internals</a></h2>
                      <ol>
                          <li>
                            10.1
                            <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Plumbing and Porcelain </a>
                          </li>
                          <li>
                            10.2
                            <a href="/book/en/v2/Git-Internals-Git-Objects">Git Objects </a>
                          </li>
                          <li>
                            10.3
                            <a href="/book/en/v2/Git-Internals-Git-References">Git References </a>
                          </li>
                          <li>
                            10.4
                            <a href="/book/en/v2/Git-Internals-Packfiles">Packfiles </a>
                          </li>
                          <li>
                            10.5
                            <a href="/book/en/v2/Git-Internals-The-Refspec">The Refspec </a>
                          </li>
                          <li>
                            10.6
                            <a href="/book/en/v2/Git-Internals-Transfer-Protocols">Transfer Protocols </a>
                          </li>
                          <li>
                            10.7
                            <a href="/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery">Maintenance and Data Recovery </a>
                          </li>
                          <li>
                            10.8
                            <a href="/book/en/v2/Git-Internals-Environment-Variables">Environment Variables </a>
                          </li>
                          <li>
                            10.9
                            <a href="/book/en/v2/Git-Internals-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-right">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>A1. <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Appendix A: Git in Other Environments</a></h2>
                      <ol>
                          <li>
                            A1.1
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Graphical Interfaces </a>
                          </li>
                          <li>
                            A1.2
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio">Git in Visual Studio </a>
                          </li>
                          <li>
                            A1.3
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code">Git in Visual Studio Code </a>
                          </li>
                          <li>
                            A1.4
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-IntelliJ-%2F-PyCharm-%2F-WebStorm-%2F-PhpStorm-%2F-RubyMine">Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine </a>
                          </li>
                          <li>
                            A1.5
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Sublime-Text">Git in Sublime Text </a>
                          </li>
                          <li>
                            A1.6
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash">Git in Bash </a>
                          </li>
                          <li>
                            A1.7
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh">Git in Zsh </a>
                          </li>
                          <li>
                            A1.8
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-PowerShell">Git in PowerShell </a>
                          </li>
                          <li>
                            A1.9
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A2. <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Appendix B: Embedding Git in your Applications</a></h2>
                      <ol>
                          <li>
                            A2.1
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Command-line Git </a>
                          </li>
                          <li>
                            A2.2
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Libgit2">Libgit2 </a>
                          </li>
                          <li>
                            A2.3
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-JGit">JGit </a>
                          </li>
                          <li>
                            A2.4
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git">go-git </a>
                          </li>
                          <li>
                            A2.5
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Dulwich">Dulwich </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A3. <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Appendix C: Git Commands</a></h2>
                      <ol>
                          <li>
                            A3.1
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Setup and Config </a>
                          </li>
                          <li>
                            A3.2
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects">Getting and Creating Projects </a>
                          </li>
                          <li>
                            A3.3
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting">Basic Snapshotting </a>
                          </li>
                          <li>
                            A3.4
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Branching-and-Merging">Branching and Merging </a>
                          </li>
                          <li>
                            A3.5
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects">Sharing and Updating Projects </a>
                          </li>
                          <li>
                            A3.6
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Inspection-and-Comparison">Inspection and Comparison </a>
                          </li>
                          <li>
                            A3.7
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Debugging">Debugging </a>
                          </li>
                          <li>
                            A3.8
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Patching">Patching </a>
                          </li>
                          <li>
                            A3.9
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Email">Email </a>
                          </li>
                          <li>
                            A3.10
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-External-Systems">External Systems </a>
                          </li>
                          <li>
                            A3.11
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Administration">Administration </a>
                          </li>
                          <li>
                            A3.12
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Plumbing-Commands">Plumbing Commands </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                    </div>
                   </div>

                      <span class="light" id="edition">
                        2nd Edition
                      </span>
                  </div>

                  <div id="main" class="book edition2">
                      <h1>2.3 Git Basics - Viewing the Commit History</h1>
                    <div>
                  <h2 id="_viewing_history">Viewing the Commit History</h2>
                  <div class="paragraph">
                  <p>After you have created several commits, or if you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.
                  The most basic and powerful tool to do this is the <code>git log</code> command.</p>
                  </div>
                  <div class="paragraph">
                  <p>These examples use a very simple project called “simplegit”.
                  To get the project, run:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git clone https://github.com/schacon/simplegit-progit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>When you run <code>git log</code> in this project, you should get output that looks something like this:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>By default, with no arguments, <code>git log</code> lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.
                  As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.</p>
                  </div>
                  <div class="paragraph">
                  <p>A huge number and variety of options to the <code>git log</code> command are available to show you exactly what you’re looking for.
                  Here, we’ll show you some of the most popular.</p>
                  </div>
                  <div class="paragraph">
                  <p>One of the more helpful options is <code>-p</code> or <code>--patch</code>, which shows the difference (the <em>patch</em> output) introduced in each commit.
                  You can also limit the number of log entries displayed, such as using <code>-2</code> to show only the last two entries.</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -p -2
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  diff --git a/Rakefile b/Rakefile
                  index a874b73..8f94139 100644
                  --- a/Rakefile
                  +++ b/Rakefile
                  @@ -5,7 +5,7 @@ require 'rake/gempackagetask'
                   spec = Gem::Specification.new do |s|
                       s.platform  =   Gem::Platform::RUBY
                       s.name      =   "simplegit"
                  -    s.version   =   "0.1.0"
                  +    s.version   =   "0.1.1"
                       s.author    =   "Scott Chacon"
                       s.email     =   "schacon@gee-mail.com"
                       s.summary   =   "A simple gem for using Git in Ruby code."

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  diff --git a/lib/simplegit.rb b/lib/simplegit.rb
                  index a0a60ae..47c6340 100644
                  --- a/lib/simplegit.rb
                  +++ b/lib/simplegit.rb
                  @@ -18,8 +18,3 @@ class SimpleGit
                       end

                   end
                  -
                  -if $0 == __FILE__
                  -  git = SimpleGit.new
                  -  puts git.show
                  -end</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This option displays the same information but with a diff directly following each entry.
                  This is very helpful for code review or to quickly browse what happened during a series of commits that a collaborator has added.
                  You can also use a series of summarizing options with <code>git log</code>.
                  For example, if you want to see some abbreviated stats for each commit, you can use the <code>--stat</code> option:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --stat
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                   Rakefile | 2 +-
                   1 file changed, 1 insertion(+), 1 deletion(-)

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                   lib/simplegit.rb | 5 -----
                   1 file changed, 5 deletions(-)

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit

                   README           |  6 ++++++
                   Rakefile         | 23 +++++++++++++++++++++++
                   lib/simplegit.rb | 25 +++++++++++++++++++++++++
                   3 files changed, 54 insertions(+)</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>As you can see, the <code>--stat</code> option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed.
                  It also puts a summary of the information at the end.</p>
                  </div>
                  <div class="paragraph">
                  <p>Another really useful option is <code>--pretty</code>.
                  This option changes the log output to formats other than the default.
                  A few prebuilt option values are available for you to use.
                  The <code>oneline</code> value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits.
                  In addition, the <code>short</code>, <code>full</code>, and <code>fuller</code> values show the output in roughly the same format but with less or more information, respectively:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=oneline
                  ca82a6dff817ec66f44342007202690a93763949 Change version number
                  085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
                  a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The most interesting option value is <code>format</code>, which allows you to specify your own log output format.
                  This is especially useful when you’re generating output for machine parsing — because you specify the format explicitly, you know it won’t change with updates to Git:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h - %an, %ar : %s"
                  ca82a6d - Scott Chacon, 6 years ago : Change version number
                  085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
                  a11bef0 - Scott Chacon, 6 years ago : Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p><a href="ch00/pretty_format">Useful specifiers for <code>git log --pretty=format</code></a> lists some of the more useful specifiers that <code>format</code> takes.</p>
                  </div>
                  <table id="pretty_format" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 1. Useful specifiers for <code>git log --pretty=format</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Specifier</th>
                  <th class="tableblock halign-left valign-top">Description of Output</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%H</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%h</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%T</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%t</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%P</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%an</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ae</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ad</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date (format respects the --date=option)</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ar</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cn</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ce</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cd</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cr</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%s</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="paragraph">
                  <p>You may be wondering what the difference is between <em>author</em> and <em>committer</em>.
                  The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.
                  So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.
                  We’ll cover this distinction a bit more in <a href="ch00/ch05-distributed-git">Distributed Git</a>.</p>
                  </div>
                  <div class="paragraph">
                  <p>The <code>oneline</code> and <code>format</code> option values are particularly useful with another <code>log</code> option called <code>--graph</code>.
                  This option adds a nice little ASCII graph showing your branch and merge history:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h %s" --graph
                  * 2d3acf9 Ignore errors from SIGCHLD on trap
                  *  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
                  |\
                  | * 420eac9 Add method for getting the current branch
                  * | 30e367c Timeout code and tests
                  * | 5a09431 Add timeout protection to grit
                  * | e1193f8 Support for heads with slashes in them
                  |/
                  * d6016bc Require time for xmlschema
                  *  11d191e Merge branch 'defunkt' into local</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This type of output will become more interesting as we go through branching and merging in the next chapter.</p>
                  </div>
                  <div class="paragraph">
                  <p>Those are only some simple output-formatting options to <code>git log</code> — there are many more.
                  <a href="ch00/log_options">Common options to <code>git log</code></a> lists the options we’ve covered so far, as well as some other common formatting options that may be useful, along with how they change the output of the log command.</p>
                  </div>
                  <table id="log_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 2. Common options to <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the patch introduced with each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--stat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show statistics for files modified in each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--shortstat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display only the changed/insertions/deletions line from the --stat command.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-only</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files modified after the commit information.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-status</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files affected with added/modified/deleted information as well.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--abbrev-commit</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the first few characters of the SHA-1 checksum instead of all 40.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--relative-date</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--graph</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display an ASCII graph of the branch and merge history beside the log output.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--pretty</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--oneline</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Shorthand for <code>--pretty=oneline --abbrev-commit</code> used together.</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="sect3">
                  <h3 id="_limiting_log_output">Limiting Log Output</h3>
                  <div class="paragraph">
                  <p>In addition to output-formatting options, <code>git log</code> takes a number of useful limiting options; that is, options that let you show only a subset of commits.
                  You’ve seen one such option already — the <code>-2</code> option, which displays only the last two commits.
                  In fact, you can do <code>-&lt;n&gt;</code>, where <code>n</code> is any integer to show the last <code>n</code> commits.
                  In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.</p>
                  </div>
                  <div class="paragraph">
                  <p>However, the time-limiting options such as <code>--since</code> and <code>--until</code> are very useful.
                  For example, this command gets the list of commits made in the last two weeks:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --since=2.weeks</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This command works with lots of formats — you can specify a specific date like <code>"2008-01-15"</code>, or a relative date such as <code>"2 years 1 day 3 minutes ago"</code>.</p>
                  </div>
                  <div class="paragraph">
                  <p>You can also filter the list to commits that match some search criteria.
                  The <code>--author</code> option allows you to filter on a specific author, and the <code>--grep</code> option lets you search for keywords in the commit messages.</p>
                  </div>
                  <div class="admonitionblock note">
                  <table>
                  <tbody><tr>
                  <td class="icon">
                  <div class="title">Note</div>
                  </td>
                  <td class="content">
                  <div class="paragraph">
                  <p>You can specify more than one instance of both the <code>--author</code> and <code>--grep</code> search criteria, which
                  will limit the commit output to commits that match <em>any</em> of the <code>--author</code> patterns and <em>any</em>
                  of the <code>--grep</code> patterns; however, adding the <code>--all-match</code> option further limits the output to
                  just those commits that match <em>all</em> <code>--grep</code> patterns.</p>
                  </div>
                  </td>
                  </tr>
                  </tbody></table>
                  </div>
                  <div class="paragraph">
                  <p>Another really helpful filter is the <code>-S</code> option (colloquially referred to as Git’s “pickaxe” option), which takes a string and shows only those commits that changed the number of occurrences of that string.
                  For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -S function_name</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The last really useful option to pass to <code>git log</code> as a filter is a path.
                  If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files.
                  This is always the last option and is generally preceded by double dashes (<code>--</code>) to separate the paths from the options:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -- path/to/file</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>In <a href="ch00/limit_options">Options to limit the output of <code>git log</code></a> we’ll list these and a few other common options for your reference.</p>
                  </div>
                  <table id="limit_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 3. Options to limit the output of <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 33.3333%;">
                  <col style="width: 66.6667%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-&lt;n&gt;</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the last n commits</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--since</code>, <code>--after</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made after the specified date.</p></td>
                  </tr>
                  <tr><div id="content">


                  <div id="book-chapters">
                    <a class="dropdown-trigger" id="book-chapters-trigger" data-panel-id="chapters-dropdown" href="#">Chapters ▾</a>
                  <div class="dropdown-panel" id="chapters-dropdown">
                    <div class="three-column">
                      <div class="column-left">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>1. <a href="/book/en/v2/Getting-Started-About-Version-Control">Getting Started</a></h2>
                      <ol>
                          <li>
                            1.1
                            <a href="/book/en/v2/Getting-Started-About-Version-Control">About Version Control </a>
                          </li>
                          <li>
                            1.2
                            <a href="/book/en/v2/Getting-Started-A-Short-History-of-Git">A Short History of Git </a>
                          </li>
                          <li>
                            1.3
                            <a href="/book/en/v2/Getting-Started-What-is-Git%3F">What is Git? </a>
                          </li>
                          <li>
                            1.4
                            <a href="/book/en/v2/Getting-Started-The-Command-Line">The Command Line </a>
                          </li>
                          <li>
                            1.5
                            <a href="/book/en/v2/Getting-Started-Installing-Git">Installing Git </a>
                          </li>
                          <li>
                            1.6
                            <a href="/book/en/v2/Getting-Started-First-Time-Git-Setup">First-Time Git Setup </a>
                          </li>
                          <li>
                            1.7
                            <a href="/book/en/v2/Getting-Started-Getting-Help">Getting Help </a>
                          </li>
                          <li>
                            1.8
                            <a href="/book/en/v2/Getting-Started-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>2. <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Git Basics</a></h2>
                      <ol>
                          <li>
                            2.1
                            <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Getting a Git Repository </a>
                          </li>
                          <li>
                            2.2
                            <a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">Recording Changes to the Repository </a>
                          </li>
                          <li>
                            2.3
                            <a href="/book/en/v2/Git-Basics-Viewing-the-Commit-History" class="active">Viewing the Commit History </a>
                          </li>
                          <li>
                            2.4
                            <a href="/book/en/v2/Git-Basics-Undoing-Things">Undoing Things </a>
                          </li>
                          <li>
                            2.5
                            <a href="/book/en/v2/Git-Basics-Working-with-Remotes">Working with Remotes </a>
                          </li>
                          <li>
                            2.6
                            <a href="/book/en/v2/Git-Basics-Tagging">Tagging </a>
                          </li>
                          <li>
                            2.7
                            <a href="/book/en/v2/Git-Basics-Git-Aliases">Git Aliases </a>
                          </li>
                          <li>
                            2.8
                            <a href="/book/en/v2/Git-Basics-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>3. <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Git Branching</a></h2>
                      <ol>
                          <li>
                            3.1
                            <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Branches in a Nutshell </a>
                          </li>
                          <li>
                            3.2
                            <a href="/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Basic Branching and Merging </a>
                          </li>
                          <li>
                            3.3
                            <a href="/book/en/v2/Git-Branching-Branch-Management">Branch Management </a>
                          </li>
                          <li>
                            3.4
                            <a href="/book/en/v2/Git-Branching-Branching-Workflows">Branching Workflows </a>
                          </li>
                          <li>
                            3.5
                            <a href="/book/en/v2/Git-Branching-Remote-Branches">Remote Branches </a>
                          </li>
                          <li>
                            3.6
                            <a href="/book/en/v2/Git-Branching-Rebasing">Rebasing </a>
                          </li>
                          <li>
                            3.7
                            <a href="/book/en/v2/Git-Branching-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>4. <a href="/book/en/v2/Git-on-the-Server-The-Protocols">Git on the Server</a></h2>
                      <ol>
                          <li>
                            4.1
                            <a href="/book/en/v2/Git-on-the-Server-The-Protocols">The Protocols </a>
                          </li>
                          <li>
                            4.2
                            <a href="/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server">Getting Git on a Server </a>
                          </li>
                          <li>
                            4.3
                            <a href="/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key">Generating Your SSH Public Key </a>
                          </li>
                          <li>
                            4.4
                            <a href="/book/en/v2/Git-on-the-Server-Setting-Up-the-Server">Setting Up the Server </a>
                          </li>
                          <li>
                            4.5
                            <a href="/book/en/v2/Git-on-the-Server-Git-Daemon">Git Daemon </a>
                          </li>
                          <li>
                            4.6
                            <a href="/book/en/v2/Git-on-the-Server-Smart-HTTP">Smart HTTP </a>
                          </li>
                          <li>
                            4.7
                            <a href="/book/en/v2/Git-on-the-Server-GitWeb">GitWeb </a>
                          </li>
                          <li>
                            4.8
                            <a href="/book/en/v2/Git-on-the-Server-GitLab">GitLab </a>
                          </li>
                          <li>
                            4.9
                            <a href="/book/en/v2/Git-on-the-Server-Third-Party-Hosted-Options">Third Party Hosted Options </a>
                          </li>
                          <li>
                            4.10
                            <a href="/book/en/v2/Git-on-the-Server-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>5. <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Git</a></h2>
                      <ol>
                          <li>
                            5.1
                            <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Workflows </a>
                          </li>
                          <li>
                            5.2
                            <a href="/book/en/v2/Distributed-Git-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            5.3
                            <a href="/book/en/v2/Distributed-Git-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            5.4
                            <a href="/book/en/v2/Distributed-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-middle">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>6. <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">GitHub</a></h2>
                      <ol>
                          <li>
                            6.1
                            <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">Account Setup and Configuration </a>
                          </li>
                          <li>
                            6.2
                            <a href="/book/en/v2/GitHub-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            6.3
                            <a href="/book/en/v2/GitHub-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            6.4
                            <a href="/book/en/v2/GitHub-Managing-an-organization">Managing an organization </a>
                          </li>
                          <li>
                            6.5
                            <a href="/book/en/v2/GitHub-Scripting-GitHub">Scripting GitHub </a>
                          </li>
                          <li>
                            6.6
                            <a href="/book/en/v2/GitHub-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>7. <a href="/book/en/v2/Git-Tools-Revision-Selection">Git Tools</a></h2>
                      <ol>
                          <li>
                            7.1
                            <a href="/book/en/v2/Git-Tools-Revision-Selection">Revision Selection </a>
                          </li>
                          <li>
                            7.2
                            <a href="/book/en/v2/Git-Tools-Interactive-Staging">Interactive Staging </a>
                          </li>
                          <li>
                            7.3
                            <a href="/book/en/v2/Git-Tools-Stashing-and-Cleaning">Stashing and Cleaning </a>
                          </li>
                          <li>
                            7.4
                            <a href="/book/en/v2/Git-Tools-Signing-Your-Work">Signing Your Work </a>
                          </li>
                          <li>
                            7.5
                            <a href="/book/en/v2/Git-Tools-Searching">Searching </a>
                          </li>
                          <li>
                            7.6
                            <a href="/book/en/v2/Git-Tools-Rewriting-History">Rewriting History </a>
                          </li>
                          <li>
                            7.7
                            <a href="/book/en/v2/Git-Tools-Reset-Demystified">Reset Demystified </a>
                          </li>
                          <li>
                            7.8
                            <a href="/book/en/v2/Git-Tools-Advanced-Merging">Advanced Merging </a>
                          </li>
                          <li>
                            7.9
                            <a href="/book/en/v2/Git-Tools-Rerere">Rerere </a>
                          </li>
                          <li>
                            7.10
                            <a href="/book/en/v2/Git-Tools-Debugging-with-Git">Debugging with Git </a>
                          </li>
                          <li>
                            7.11
                            <a href="/book/en/v2/Git-Tools-Submodules">Submodules </a>
                          </li>
                          <li>
                            7.12
                            <a href="/book/en/v2/Git-Tools-Bundling">Bundling </a>
                          </li>
                          <li>
                            7.13
                            <a href="/book/en/v2/Git-Tools-Replace">Replace </a>
                          </li>
                          <li>
                            7.14
                            <a href="/book/en/v2/Git-Tools-Credential-Storage">Credential Storage </a>
                          </li>
                          <li>
                            7.15
                            <a href="/book/en/v2/Git-Tools-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>8. <a href="/book/en/v2/Customizing-Git-Git-Configuration">Customizing Git</a></h2>
                      <ol>
                          <li>
                            8.1
                            <a href="/book/en/v2/Customizing-Git-Git-Configuration">Git Configuration </a>
                          </li>
                          <li>
                            8.2
                            <a href="/book/en/v2/Customizing-Git-Git-Attributes">Git Attributes </a>
                          </li>
                          <li>
                            8.3
                            <a href="/book/en/v2/Customizing-Git-Git-Hooks">Git Hooks </a>
                          </li>
                          <li>
                            8.4
                            <a href="/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy">An Example Git-Enforced Policy </a>
                          </li>
                          <li>
                            8.5
                            <a href="/book/en/v2/Customizing-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>9. <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git and Other Systems</a></h2>
                      <ol>
                          <li>
                            9.1
                            <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git as a Client </a>
                          </li>
                          <li>
                            9.2
                            <a href="/book/en/v2/Git-and-Other-Systems-Migrating-to-Git">Migrating to Git </a>
                          </li>
                          <li>
                            9.3
                            <a href="/book/en/v2/Git-and-Other-Systems-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>10. <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Git Internals</a></h2>
                      <ol>
                          <li>
                            10.1
                            <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Plumbing and Porcelain </a>
                          </li>
                          <li>
                            10.2
                            <a href="/book/en/v2/Git-Internals-Git-Objects">Git Objects </a>
                          </li>
                          <li>
                            10.3
                            <a href="/book/en/v2/Git-Internals-Git-References">Git References </a>
                          </li>
                          <li>
                            10.4
                            <a href="/book/en/v2/Git-Internals-Packfiles">Packfiles </a>
                          </li>
                          <li>
                            10.5
                            <a href="/book/en/v2/Git-Internals-The-Refspec">The Refspec </a>
                          </li>
                          <li>
                            10.6
                            <a href="/book/en/v2/Git-Internals-Transfer-Protocols">Transfer Protocols </a>
                          </li>
                          <li>
                            10.7
                            <a href="/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery">Maintenance and Data Recovery </a>
                          </li>
                          <li>
                            10.8
                            <a href="/book/en/v2/Git-Internals-Environment-Variables">Environment Variables </a>
                          </li>
                          <li>
                            10.9
                            <a href="/book/en/v2/Git-Internals-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-right">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>A1. <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Appendix A: Git in Other Environments</a></h2>
                      <ol>
                          <li>
                            A1.1
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Graphical Interfaces </a>
                          </li>
                          <li>
                            A1.2
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio">Git in Visual Studio </a>
                          </li>
                          <li>
                            A1.3
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code">Git in Visual Studio Code </a>
                          </li>
                          <li>
                            A1.4
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-IntelliJ-%2F-PyCharm-%2F-WebStorm-%2F-PhpStorm-%2F-RubyMine">Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine </a>
                          </li>
                          <li>
                            A1.5
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Sublime-Text">Git in Sublime Text </a>
                          </li>
                          <li>
                            A1.6
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash">Git in Bash </a>
                          </li>
                          <li>
                            A1.7
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh">Git in Zsh </a>
                          </li>
                          <li>
                            A1.8
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-PowerShell">Git in PowerShell </a>
                          </li>
                          <li>
                            A1.9
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A2. <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Appendix B: Embedding Git in your Applications</a></h2>
                      <ol>
                          <li>
                            A2.1
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Command-line Git </a>
                          </li>
                          <li>
                            A2.2
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Libgit2">Libgit2 </a>
                          </li>
                          <li>
                            A2.3
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-JGit">JGit </a>
                          </li>
                          <li>
                            A2.4
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git">go-git </a>
                          </li>
                          <li>
                            A2.5
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Dulwich">Dulwich </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A3. <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Appendix C: Git Commands</a></h2>
                      <ol>
                          <li>
                            A3.1
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Setup and Config </a>
                          </li>
                          <li>
                            A3.2
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects">Getting and Creating Projects </a>
                          </li>
                          <li>
                            A3.3
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting">Basic Snapshotting </a>
                          </li>
                          <li>
                            A3.4
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Branching-and-Merging">Branching and Merging </a>
                          </li>
                          <li>
                            A3.5
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects">Sharing and Updating Projects </a>
                          </li>
                          <li>
                            A3.6
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Inspection-and-Comparison">Inspection and Comparison </a>
                          </li>
                          <li>
                            A3.7
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Debugging">Debugging </a>
                          </li>
                          <li>
                            A3.8
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Patching">Patching </a>
                          </li>
                          <li>
                            A3.9
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Email">Email </a>
                          </li>
                          <li>
                            A3.10
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-External-Systems">External Systems </a>
                          </li>
                          <li>
                            A3.11
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Administration">Administration </a>
                          </li>
                          <li>
                            A3.12
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Plumbing-Commands">Plumbing Commands </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                    </div>
                   </div>

                      <span class="light" id="edition">
                        2nd Edition
                      </span>
                  </div>

                  <div id="main" class="book edition2">
                      <h1>2.3 Git Basics - Viewing the Commit History</h1>
                    <div>
                  <h2 id="_viewing_history">Viewing the Commit History</h2>
                  <div class="paragraph">
                  <p>After you have created several commits, or if you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.
                  The most basic and powerful tool to do this is the <code>git log</code> command.</p>
                  </div>
                  <div class="paragraph">
                  <p>These examples use a very simple project called “simplegit”.
                  To get the project, run:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git clone https://github.com/schacon/simplegit-progit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>When you run <code>git log</code> in this project, you should get output that looks something like this:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>By default, with no arguments, <code>git log</code> lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.
                  As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.</p>
                  </div>
                  <div class="paragraph">
                  <p>A huge number and variety of options to the <code>git log</code> command are available to show you exactly what you’re looking for.
                  Here, we’ll show you some of the most popular.</p>
                  </div>
                  <div class="paragraph">
                  <p>One of the more helpful options is <code>-p</code> or <code>--patch</code>, which shows the difference (the <em>patch</em> output) introduced in each commit.
                  You can also limit the number of log entries displayed, such as using <code>-2</code> to show only the last two entries.</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -p -2
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  diff --git a/Rakefile b/Rakefile
                  index a874b73..8f94139 100644
                  --- a/Rakefile
                  +++ b/Rakefile
                  @@ -5,7 +5,7 @@ require 'rake/gempackagetask'
                   spec = Gem::Specification.new do |s|
                       s.platform  =   Gem::Platform::RUBY
                       s.name      =   "simplegit"
                  -    s.version   =   "0.1.0"
                  +    s.version   =   "0.1.1"
                       s.author    =   "Scott Chacon"
                       s.email     =   "schacon@gee-mail.com"
                       s.summary   =   "A simple gem for using Git in Ruby code."

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  diff --git a/lib/simplegit.rb b/lib/simplegit.rb
                  index a0a60ae..47c6340 100644
                  --- a/lib/simplegit.rb
                  +++ b/lib/simplegit.rb
                  @@ -18,8 +18,3 @@ class SimpleGit
                       end

                   end
                  -
                  -if $0 == __FILE__
                  -  git = SimpleGit.new
                  -  puts git.show
                  -end</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This option displays the same information but with a diff directly following each entry.
                  This is very helpful for code review or to quickly browse what happened during a series of commits that a collaborator has added.
                  You can also use a series of summarizing options with <code>git log</code>.
                  For example, if you want to see some abbreviated stats for each commit, you can use the <code>--stat</code> option:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --stat
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                   Rakefile | 2 +-
                   1 file changed, 1 insertion(+), 1 deletion(-)

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                   lib/simplegit.rb | 5 -----
                   1 file changed, 5 deletions(-)

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit

                   README           |  6 ++++++
                   Rakefile         | 23 +++++++++++++++++++++++
                   lib/simplegit.rb | 25 +++++++++++++++++++++++++
                   3 files changed, 54 insertions(+)</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>As you can see, the <code>--stat</code> option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed.
                  It also puts a summary of the information at the end.</p>
                  </div>
                  <div class="paragraph">
                  <p>Another really useful option is <code>--pretty</code>.
                  This option changes the log output to formats other than the default.
                  A few prebuilt option values are available for you to use.
                  The <code>oneline</code> value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits.
                  In addition, the <code>short</code>, <code>full</code>, and <code>fuller</code> values show the output in roughly the same format but with less or more information, respectively:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=oneline
                  ca82a6dff817ec66f44342007202690a93763949 Change version number
                  085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
                  a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The most interesting option value is <code>format</code>, which allows you to specify your own log output format.
                  This is especially useful when you’re generating output for machine parsing — because you specify the format explicitly, you know it won’t change with updates to Git:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h - %an, %ar : %s"
                  ca82a6d - Scott Chacon, 6 years ago : Change version number
                  085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
                  a11bef0 - Scott Chacon, 6 years ago : Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p><a href="ch00/pretty_format">Useful specifiers for <code>git log --pretty=format</code></a> lists some of the more useful specifiers that <code>format</code> takes.</p>
                  </div>
                  <table id="pretty_format" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 1. Useful specifiers for <code>git log --pretty=format</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Specifier</th>
                  <th class="tableblock halign-left valign-top">Description of Output</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%H</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%h</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%T</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%t</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%P</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%an</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ae</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ad</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date (format respects the --date=option)</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ar</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cn</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ce</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cd</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cr</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%s</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="paragraph">
                  <p>You may be wondering what the difference is between <em>author</em> and <em>committer</em>.
                  The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.
                  So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.
                  We’ll cover this distinction a bit more in <a href="ch00/ch05-distributed-git">Distributed Git</a>.</p>
                  </div>
                  <div class="paragraph">
                  <p>The <code>oneline</code> and <code>format</code> option values are particularly useful with another <code>log</code> option called <code>--graph</code>.
                  This option adds a nice little ASCII graph showing your branch and merge history:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h %s" --graph
                  * 2d3acf9 Ignore errors from SIGCHLD on trap
                  *  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
                  |\
                  | * 420eac9 Add method for getting the current branch
                  * | 30e367c Timeout code and tests
                  * | 5a09431 Add timeout protection to grit
                  * | e1193f8 Support for heads with slashes in them
                  |/
                  * d6016bc Require time for xmlschema
                  *  11d191e Merge branch 'defunkt' into local</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This type of output will become more interesting as we go through branching and merging in the next chapter.</p>
                  </div>
                  <div class="paragraph">
                  <p>Those are only some simple output-formatting options to <code>git log</code> — there are many more.
                  <a href="ch00/log_options">Common options to <code>git log</code></a> lists the options we’ve covered so far, as well as some other common formatting options that may be useful, along with how they change the output of the log command.</p>
                  </div>
                  <table id="log_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 2. Common options to <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the patch introduced with each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--stat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show statistics for files modified in each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--shortstat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display only the changed/insertions/deletions line from the --stat command.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-only</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files modified after the commit information.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-status</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files affected with added/modified/deleted information as well.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--abbrev-commit</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the first few characters of the SHA-1 checksum instead of all 40.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--relative-date</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--graph</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display an ASCII graph of the branch and merge history beside the log output.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--pretty</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--oneline</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Shorthand for <code>--pretty=oneline --abbrev-commit</code> used together.</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="sect3">
                  <h3 id="_limiting_log_output">Limiting Log Output</h3>
                  <div class="paragraph">
                  <p>In addition to output-formatting options, <code>git log</code> takes a number of useful limiting options; that is, options that let you show only a subset of commits.
                  You’ve seen one such option already — the <code>-2</code> option, which displays only the last two commits.
                  In fact, you can do <code>-&lt;n&gt;</code>, where <code>n</code> is any integer to show the last <code>n</code> commits.
                  In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.</p>
                  </div>
                  <div class="paragraph">
                  <p>However, the time-limiting options such as <code>--since</code> and <code>--until</code> are very useful.
                  For example, this command gets the list of commits made in the last two weeks:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --since=2.weeks</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This command works with lots of formats — you can specify a specific date like <code>"2008-01-15"</code>, or a relative date such as <code>"2 years 1 day 3 minutes ago"</code>.</p>
                  </div>
                  <div class="paragraph">
                  <p>You can also filter the list to commits that match some search criteria.
                  The <code>--author</code> option allows you to filter on a specific author, and the <code>--grep</code> option lets you search for keywords in the commit messages.</p>
                  </div>
                  <div class="admonitionblock note">
                  <table>
                  <tbody><tr>
                  <td class="icon">
                  <div class="title">Note</div>
                  </td>
                  <td class="content">
                  <div class="paragraph">
                  <p>You can specify more than one instance of both the <code>--author</code> and <code>--grep</code> search criteria, which
                  will limit the commit output to commits that match <em>any</em> of the <code>--author</code> patterns and <em>any</em>
                  of the <code>--grep</code> patterns; however, adding the <code>--all-match</code> option further limits the output to
                  just those commits that match <em>all</em> <code>--grep</code> patterns.</p>
                  </div>
                  </td>
                  </tr>
                  </tbody></table>
                  </div>
                  <div class="paragraph">
                  <p>Another really helpful filter is the <code>-S</code> option (colloquially referred to as Git’s “pickaxe” option), which takes a string and shows only those commits that changed the number of occurrences of that string.
                  For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -S function_name</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The last really useful option to pass to <code>git log</code> as a filter is a path.
                  If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files.
                  This is always the last option and is generally preceded by double dashes (<code>--</code>) to separate the paths from the options:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -- path/to/file</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>In <a href="ch00/limit_options">Options to limit the output of <code>git log</code></a> we’ll list these and a few other common options for your reference.</p>
                  </div>
                  <table id="limit_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 3. Options to limit the output of <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 33.3333%;">
                  <col style="width: 66.6667%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-&lt;n&gt;</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the last n commits</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--since</code>, <code>--after</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made after the specified date.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--until</code>, <code>--before</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made before the specified date.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--author</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the author entry matches the specified string.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--committer</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the committer entry matches the specified string.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--grep</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits with a commit message containing the string</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-S</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits adding or removing code matching the string</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="paragraph">
                  <p>For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
                     --before="2008-11-01" --no-merges -- t/
                  5610e3b - Fix testcase failure when extended attributes are in use
                  acd3b9e - Enhance hold_lock_file_for_{update,append}() API
                  f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
                  d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
                  51a94af - Fix "checkout --track -b newbranch" on detached HEAD
                  b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.</p>
                  </div>
                  <div class="admonitionblock tip"><div id="content">


                  <div id="book-chapters">
                    <a class="dropdown-trigger" id="book-chapters-trigger" data-panel-id="chapters-dropdown" href="#">Chapters ▾</a>
                  <div class="dropdown-panel" id="chapters-dropdown">
                    <div class="three-column">
                      <div class="column-left">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>1. <a href="/book/en/v2/Getting-Started-About-Version-Control">Getting Started</a></h2>
                      <ol>
                          <li>
                            1.1
                            <a href="/book/en/v2/Getting-Started-About-Version-Control">About Version Control </a>
                          </li>
                          <li>
                            1.2
                            <a href="/book/en/v2/Getting-Started-A-Short-History-of-Git">A Short History of Git </a>
                          </li>
                          <li>
                            1.3
                            <a href="/book/en/v2/Getting-Started-What-is-Git%3F">What is Git? </a>
                          </li>
                          <li>
                            1.4
                            <a href="/book/en/v2/Getting-Started-The-Command-Line">The Command Line </a>
                          </li>
                          <li>
                            1.5
                            <a href="/book/en/v2/Getting-Started-Installing-Git">Installing Git </a>
                          </li>
                          <li>
                            1.6
                            <a href="/book/en/v2/Getting-Started-First-Time-Git-Setup">First-Time Git Setup </a>
                          </li>
                          <li>
                            1.7
                            <a href="/book/en/v2/Getting-Started-Getting-Help">Getting Help </a>
                          </li>
                          <li>
                            1.8
                            <a href="/book/en/v2/Getting-Started-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>2. <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Git Basics</a></h2>
                      <ol>
                          <li>
                            2.1
                            <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Getting a Git Repository </a>
                          </li>
                          <li>
                            2.2
                            <a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">Recording Changes to the Repository </a>
                          </li>
                          <li>
                            2.3
                            <a href="/book/en/v2/Git-Basics-Viewing-the-Commit-History" class="active">Viewing the Commit History </a>
                          </li>
                          <li>
                            2.4
                            <a href="/book/en/v2/Git-Basics-Undoing-Things">Undoing Things </a>
                          </li>
                          <li>
                            2.5
                            <a href="/book/en/v2/Git-Basics-Working-with-Remotes">Working with Remotes </a>
                          </li>
                          <li>
                            2.6
                            <a href="/book/en/v2/Git-Basics-Tagging">Tagging </a>
                          </li>
                          <li>
                            2.7
                            <a href="/book/en/v2/Git-Basics-Git-Aliases">Git Aliases </a>
                          </li>
                          <li>
                            2.8
                            <a href="/book/en/v2/Git-Basics-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>3. <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Git Branching</a></h2>
                      <ol>
                          <li>
                            3.1
                            <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Branches in a Nutshell </a>
                          </li>
                          <li>
                            3.2
                            <a href="/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Basic Branching and Merging </a>
                          </li>
                          <li>
                            3.3
                            <a href="/book/en/v2/Git-Branching-Branch-Management">Branch Management </a>
                          </li>
                          <li>
                            3.4
                            <a href="/book/en/v2/Git-Branching-Branching-Workflows">Branching Workflows </a>
                          </li>
                          <li>
                            3.5
                            <a href="/book/en/v2/Git-Branching-Remote-Branches">Remote Branches </a>
                          </li>
                          <li>
                            3.6
                            <a href="/book/en/v2/Git-Branching-Rebasing">Rebasing </a>
                          </li>
                          <li>
                            3.7
                            <a href="/book/en/v2/Git-Branching-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>4. <a href="/book/en/v2/Git-on-the-Server-The-Protocols">Git on the Server</a></h2>
                      <ol>
                          <li>
                            4.1
                            <a href="/book/en/v2/Git-on-the-Server-The-Protocols">The Protocols </a>
                          </li>
                          <li>
                            4.2
                            <a href="/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server">Getting Git on a Server </a>
                          </li>
                          <li>
                            4.3
                            <a href="/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key">Generating Your SSH Public Key </a>
                          </li>
                          <li>
                            4.4
                            <a href="/book/en/v2/Git-on-the-Server-Setting-Up-the-Server">Setting Up the Server </a>
                          </li>
                          <li>
                            4.5
                            <a href="/book/en/v2/Git-on-the-Server-Git-Daemon">Git Daemon </a>
                          </li>
                          <li>
                            4.6
                            <a href="/book/en/v2/Git-on-the-Server-Smart-HTTP">Smart HTTP </a>
                          </li>
                          <li>
                            4.7
                            <a href="/book/en/v2/Git-on-the-Server-GitWeb">GitWeb </a>
                          </li>
                          <li>
                            4.8
                            <a href="/book/en/v2/Git-on-the-Server-GitLab">GitLab </a>
                          </li>
                          <li>
                            4.9
                            <a href="/book/en/v2/Git-on-the-Server-Third-Party-Hosted-Options">Third Party Hosted Options </a>
                          </li>
                          <li>
                            4.10
                            <a href="/book/en/v2/Git-on-the-Server-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>5. <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Git</a></h2>
                      <ol>
                          <li>
                            5.1
                            <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Workflows </a>
                          </li>
                          <li>
                            5.2
                            <a href="/book/en/v2/Distributed-Git-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            5.3
                            <a href="/book/en/v2/Distributed-Git-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            5.4
                            <a href="/book/en/v2/Distributed-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-middle">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>6. <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">GitHub</a></h2>
                      <ol>
                          <li>
                            6.1
                            <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">Account Setup and Configuration </a>
                          </li>
                          <li>
                            6.2
                            <a href="/book/en/v2/GitHub-Contributing-to-a-Project">Contributing to a Project </a>
                          </li>
                          <li>
                            6.3
                            <a href="/book/en/v2/GitHub-Maintaining-a-Project">Maintaining a Project </a>
                          </li>
                          <li>
                            6.4
                            <a href="/book/en/v2/GitHub-Managing-an-organization">Managing an organization </a>
                          </li>
                          <li>
                            6.5
                            <a href="/book/en/v2/GitHub-Scripting-GitHub">Scripting GitHub </a>
                          </li>
                          <li>
                            6.6
                            <a href="/book/en/v2/GitHub-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>7. <a href="/book/en/v2/Git-Tools-Revision-Selection">Git Tools</a></h2>
                      <ol>
                          <li>
                            7.1
                            <a href="/book/en/v2/Git-Tools-Revision-Selection">Revision Selection </a>
                          </li>
                          <li>
                            7.2
                            <a href="/book/en/v2/Git-Tools-Interactive-Staging">Interactive Staging </a>
                          </li>
                          <li>
                            7.3
                            <a href="/book/en/v2/Git-Tools-Stashing-and-Cleaning">Stashing and Cleaning </a>
                          </li>
                          <li>
                            7.4
                            <a href="/book/en/v2/Git-Tools-Signing-Your-Work">Signing Your Work </a>
                          </li>
                          <li>
                            7.5
                            <a href="/book/en/v2/Git-Tools-Searching">Searching </a>
                          </li>
                          <li>
                            7.6
                            <a href="/book/en/v2/Git-Tools-Rewriting-History">Rewriting History </a>
                          </li>
                          <li>
                            7.7
                            <a href="/book/en/v2/Git-Tools-Reset-Demystified">Reset Demystified </a>
                          </li>
                          <li>
                            7.8
                            <a href="/book/en/v2/Git-Tools-Advanced-Merging">Advanced Merging </a>
                          </li>
                          <li>
                            7.9
                            <a href="/book/en/v2/Git-Tools-Rerere">Rerere </a>
                          </li>
                          <li>
                            7.10
                            <a href="/book/en/v2/Git-Tools-Debugging-with-Git">Debugging with Git </a>
                          </li>
                          <li>
                            7.11
                            <a href="/book/en/v2/Git-Tools-Submodules">Submodules </a>
                          </li>
                          <li>
                            7.12
                            <a href="/book/en/v2/Git-Tools-Bundling">Bundling </a>
                          </li>
                          <li>
                            7.13
                            <a href="/book/en/v2/Git-Tools-Replace">Replace </a>
                          </li>
                          <li>
                            7.14
                            <a href="/book/en/v2/Git-Tools-Credential-Storage">Credential Storage </a>
                          </li>
                          <li>
                            7.15
                            <a href="/book/en/v2/Git-Tools-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>8. <a href="/book/en/v2/Customizing-Git-Git-Configuration">Customizing Git</a></h2>
                      <ol>
                          <li>
                            8.1
                            <a href="/book/en/v2/Customizing-Git-Git-Configuration">Git Configuration </a>
                          </li>
                          <li>
                            8.2
                            <a href="/book/en/v2/Customizing-Git-Git-Attributes">Git Attributes </a>
                          </li>
                          <li>
                            8.3
                            <a href="/book/en/v2/Customizing-Git-Git-Hooks">Git Hooks </a>
                          </li>
                          <li>
                            8.4
                            <a href="/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy">An Example Git-Enforced Policy </a>
                          </li>
                          <li>
                            8.5
                            <a href="/book/en/v2/Customizing-Git-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>9. <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git and Other Systems</a></h2>
                      <ol>
                          <li>
                            9.1
                            <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git as a Client </a>
                          </li>
                          <li>
                            9.2
                            <a href="/book/en/v2/Git-and-Other-Systems-Migrating-to-Git">Migrating to Git </a>
                          </li>
                          <li>
                            9.3
                            <a href="/book/en/v2/Git-and-Other-Systems-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>10. <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Git Internals</a></h2>
                      <ol>
                          <li>
                            10.1
                            <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Plumbing and Porcelain </a>
                          </li>
                          <li>
                            10.2
                            <a href="/book/en/v2/Git-Internals-Git-Objects">Git Objects </a>
                          </li>
                          <li>
                            10.3
                            <a href="/book/en/v2/Git-Internals-Git-References">Git References </a>
                          </li>
                          <li>
                            10.4
                            <a href="/book/en/v2/Git-Internals-Packfiles">Packfiles </a>
                          </li>
                          <li>
                            10.5
                            <a href="/book/en/v2/Git-Internals-The-Refspec">The Refspec </a>
                          </li>
                          <li>
                            10.6
                            <a href="/book/en/v2/Git-Internals-Transfer-Protocols">Transfer Protocols </a>
                          </li>
                          <li>
                            10.7
                            <a href="/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery">Maintenance and Data Recovery </a>
                          </li>
                          <li>
                            10.8
                            <a href="/book/en/v2/Git-Internals-Environment-Variables">Environment Variables </a>
                          </li>
                          <li>
                            10.9
                            <a href="/book/en/v2/Git-Internals-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                      <div class="column-right">
                        <ol class="book-toc">
                    <li class="chapter">
                    <h2>A1. <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Appendix A: Git in Other Environments</a></h2>
                      <ol>
                          <li>
                            A1.1
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Graphical Interfaces </a>
                          </li>
                          <li>
                            A1.2
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio">Git in Visual Studio </a>
                          </li>
                          <li>
                            A1.3
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code">Git in Visual Studio Code </a>
                          </li>
                          <li>
                            A1.4
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-IntelliJ-%2F-PyCharm-%2F-WebStorm-%2F-PhpStorm-%2F-RubyMine">Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine </a>
                          </li>
                          <li>
                            A1.5
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Sublime-Text">Git in Sublime Text </a>
                          </li>
                          <li>
                            A1.6
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash">Git in Bash </a>
                          </li>
                          <li>
                            A1.7
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh">Git in Zsh </a>
                          </li>
                          <li>
                            A1.8
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-PowerShell">Git in PowerShell </a>
                          </li>
                          <li>
                            A1.9
                            <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Summary">Summary </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A2. <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Appendix B: Embedding Git in your Applications</a></h2>
                      <ol>
                          <li>
                            A2.1
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Command-line Git </a>
                          </li>
                          <li>
                            A2.2
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Libgit2">Libgit2 </a>
                          </li>
                          <li>
                            A2.3
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-JGit">JGit </a>
                          </li>
                          <li>
                            A2.4
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git">go-git </a>
                          </li>
                          <li>
                            A2.5
                            <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Dulwich">Dulwich </a>
                          </li>
                      </ol>
                    </li>
                    <li class="chapter">
                    <h2>A3. <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Appendix C: Git Commands</a></h2>
                      <ol>
                          <li>
                            A3.1
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Setup and Config </a>
                          </li>
                          <li>
                            A3.2
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects">Getting and Creating Projects </a>
                          </li>
                          <li>
                            A3.3
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting">Basic Snapshotting </a>
                          </li>
                          <li>
                            A3.4
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Branching-and-Merging">Branching and Merging </a>
                          </li>
                          <li>
                            A3.5
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects">Sharing and Updating Projects </a>
                          </li>
                          <li>
                            A3.6
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Inspection-and-Comparison">Inspection and Comparison </a>
                          </li>
                          <li>
                            A3.7
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Debugging">Debugging </a>
                          </li>
                          <li>
                            A3.8
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Patching">Patching </a>
                          </li>
                          <li>
                            A3.9
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Email">Email </a>
                          </li>
                          <li>
                            A3.10
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-External-Systems">External Systems </a>
                          </li>
                          <li>
                            A3.11
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Administration">Administration </a>
                          </li>
                          <li>
                            A3.12
                            <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Plumbing-Commands">Plumbing Commands </a>
                          </li>
                      </ol>
                    </li>
                  </ol>

                      </div>
                    </div>
                   </div>

                      <span class="light" id="edition">
                        2nd Edition
                      </span>
                  </div>

                  <div id="main" class="book edition2">
                      <h1>2.3 Git Basics - Viewing the Commit History</h1>
                    <div>
                  <h2 id="_viewing_history">Viewing the Commit History</h2>
                  <div class="paragraph">
                  <p>After you have created several commits, or if you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.
                  The most basic and powerful tool to do this is the <code>git log</code> command.</p>
                  </div>
                  <div class="paragraph">
                  <p>These examples use a very simple project called “simplegit”.
                  To get the project, run:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git clone https://github.com/schacon/simplegit-progit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>When you run <code>git log</code> in this project, you should get output that looks something like this:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>By default, with no arguments, <code>git log</code> lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.
                  As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.</p>
                  </div>
                  <div class="paragraph">
                  <p>A huge number and variety of options to the <code>git log</code> command are available to show you exactly what you’re looking for.
                  Here, we’ll show you some of the most popular.</p>
                  </div>
                  <div class="paragraph">
                  <p>One of the more helpful options is <code>-p</code> or <code>--patch</code>, which shows the difference (the <em>patch</em> output) introduced in each commit.
                  You can also limit the number of log entries displayed, such as using <code>-2</code> to show only the last two entries.</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -p -2
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                  diff --git a/Rakefile b/Rakefile
                  index a874b73..8f94139 100644
                  --- a/Rakefile
                  +++ b/Rakefile
                  @@ -5,7 +5,7 @@ require 'rake/gempackagetask'
                   spec = Gem::Specification.new do |s|
                       s.platform  =   Gem::Platform::RUBY
                       s.name      =   "simplegit"
                  -    s.version   =   "0.1.0"
                  +    s.version   =   "0.1.1"
                       s.author    =   "Scott Chacon"
                       s.email     =   "schacon@gee-mail.com"
                       s.summary   =   "A simple gem for using Git in Ruby code."

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                  diff --git a/lib/simplegit.rb b/lib/simplegit.rb
                  index a0a60ae..47c6340 100644
                  --- a/lib/simplegit.rb
                  +++ b/lib/simplegit.rb
                  @@ -18,8 +18,3 @@ class SimpleGit
                       end

                   end
                  -
                  -if $0 == __FILE__
                  -  git = SimpleGit.new
                  -  puts git.show
                  -end</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This option displays the same information but with a diff directly following each entry.
                  This is very helpful for code review or to quickly browse what happened during a series of commits that a collaborator has added.
                  You can also use a series of summarizing options with <code>git log</code>.
                  For example, if you want to see some abbreviated stats for each commit, you can use the <code>--stat</code> option:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --stat
                  commit ca82a6dff817ec66f44342007202690a93763949
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Mon Mar 17 21:52:11 2008 -0700

                      Change version number

                   Rakefile | 2 +-
                   1 file changed, 1 insertion(+), 1 deletion(-)

                  commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 16:40:33 2008 -0700

                      Remove unnecessary test

                   lib/simplegit.rb | 5 -----
                   1 file changed, 5 deletions(-)

                  commit a11bef06a3f659402fe7563abf99ad00de2209e6
                  Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
                  Date:   Sat Mar 15 10:31:28 2008 -0700

                      Initial commit

                   README           |  6 ++++++
                   Rakefile         | 23 +++++++++++++++++++++++
                   lib/simplegit.rb | 25 +++++++++++++++++++++++++
                   3 files changed, 54 insertions(+)</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>As you can see, the <code>--stat</code> option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed.
                  It also puts a summary of the information at the end.</p>
                  </div>
                  <div class="paragraph">
                  <p>Another really useful option is <code>--pretty</code>.
                  This option changes the log output to formats other than the default.
                  A few prebuilt option values are available for you to use.
                  The <code>oneline</code> value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits.
                  In addition, the <code>short</code>, <code>full</code>, and <code>fuller</code> values show the output in roughly the same format but with less or more information, respectively:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=oneline
                  ca82a6dff817ec66f44342007202690a93763949 Change version number
                  085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
                  a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The most interesting option value is <code>format</code>, which allows you to specify your own log output format.
                  This is especially useful when you’re generating output for machine parsing — because you specify the format explicitly, you know it won’t change with updates to Git:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h - %an, %ar : %s"
                  ca82a6d - Scott Chacon, 6 years ago : Change version number
                  085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
                  a11bef0 - Scott Chacon, 6 years ago : Initial commit</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p><a href="ch00/pretty_format">Useful specifiers for <code>git log --pretty=format</code></a> lists some of the more useful specifiers that <code>format</code> takes.</p>
                  </div>
                  <table id="pretty_format" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 1. Useful specifiers for <code>git log --pretty=format</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Specifier</th>
                  <th class="tableblock halign-left valign-top">Description of Output</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%H</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%h</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated commit hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%T</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%t</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated tree hash</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%P</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated parent hashes</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%an</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ae</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ad</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date (format respects the --date=option)</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ar</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Author date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cn</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer name</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ce</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer email</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cd</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cr</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Committer date, relative</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>%s</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="paragraph">
                  <p>You may be wondering what the difference is between <em>author</em> and <em>committer</em>.
                  The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.
                  So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.
                  We’ll cover this distinction a bit more in <a href="ch00/ch05-distributed-git">Distributed Git</a>.</p>
                  </div>
                  <div class="paragraph">
                  <p>The <code>oneline</code> and <code>format</code> option values are particularly useful with another <code>log</code> option called <code>--graph</code>.
                  This option adds a nice little ASCII graph showing your branch and merge history:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h %s" --graph
                  * 2d3acf9 Ignore errors from SIGCHLD on trap
                  *  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
                  |\
                  | * 420eac9 Add method for getting the current branch
                  * | 30e367c Timeout code and tests
                  * | 5a09431 Add timeout protection to grit
                  * | e1193f8 Support for heads with slashes in them
                  |/
                  * d6016bc Require time for xmlschema
                  *  11d191e Merge branch 'defunkt' into local</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This type of output will become more interesting as we go through branching and merging in the next chapter.</p>
                  </div>
                  <div class="paragraph">
                  <p>Those are only some simple output-formatting options to <code>git log</code> — there are many more.
                  <a href="ch00/log_options">Common options to <code>git log</code></a> lists the options we’ve covered so far, as well as some other common formatting options that may be useful, along with how they change the output of the log command.</p>
                  </div>
                  <table id="log_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 2. Common options to <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 20%;">
                  <col style="width: 80%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-p</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the patch introduced with each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--stat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show statistics for files modified in each commit.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--shortstat</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display only the changed/insertions/deletions line from the --stat command.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-only</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files modified after the commit information.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-status</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files affected with added/modified/deleted information as well.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--abbrev-commit</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the first few characters of the SHA-1 checksum instead of all 40.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--relative-date</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--graph</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Display an ASCII graph of the branch and merge history beside the log output.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--pretty</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--oneline</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Shorthand for <code>--pretty=oneline --abbrev-commit</code> used together.</p></td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="sect3">
                  <h3 id="_limiting_log_output">Limiting Log Output</h3>
                  <div class="paragraph">
                  <p>In addition to output-formatting options, <code>git log</code> takes a number of useful limiting options; that is, options that let you show only a subset of commits.
                  You’ve seen one such option already — the <code>-2</code> option, which displays only the last two commits.
                  In fact, you can do <code>-&lt;n&gt;</code>, where <code>n</code> is any integer to show the last <code>n</code> commits.
                  In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.</p>
                  </div>
                  <div class="paragraph">
                  <p>However, the time-limiting options such as <code>--since</code> and <code>--until</code> are very useful.
                  For example, this command gets the list of commits made in the last two weeks:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log --since=2.weeks</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>This command works with lots of formats — you can specify a specific date like <code>"2008-01-15"</code>, or a relative date such as <code>"2 years 1 day 3 minutes ago"</code>.</p>
                  </div>
                  <div class="paragraph">
                  <p>You can also filter the list to commits that match some search criteria.
                  The <code>--author</code> option allows you to filter on a specific author, and the <code>--grep</code> option lets you search for keywords in the commit messages.</p>
                  </div>
                  <div class="admonitionblock note">
                  <table>
                  <tbody><tr>
                  <td class="icon">
                  <div class="title">Note</div>
                  </td>
                  <td class="content">
                  <div class="paragraph">
                  <p>You can specify more than one instance of both the <code>--author</code> and <code>--grep</code> search criteria, which
                  will limit the commit output to commits that match <em>any</em> of the <code>--author</code> patterns and <em>any</em>
                  of the <code>--grep</code> patterns; however, adding the <code>--all-match</code> option further limits the output to
                  just those commits that match <em>all</em> <code>--grep</code> patterns.</p>
                  </div>
                  </td>
                  </tr>
                  </tbody></table>
                  </div>
                  <div class="paragraph">
                  <p>Another really helpful filter is the <code>-S</code> option (colloquially referred to as Git’s “pickaxe” option), which takes a string and shows only those commits that changed the number of occurrences of that string.
                  For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -S function_name</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>The last really useful option to pass to <code>git log</code> as a filter is a path.
                  If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files.
                  This is always the last option and is generally preceded by double dashes (<code>--</code>) to separate the paths from the options:</p>
                  </div>
                  <div class="listingblock">
                  <div class="content">
                  <pre class="highlight"><code class="language-console" data-lang="console">$ git log -- path/to/file</code></pre>
                  </div>
                  </div>
                  <div class="paragraph">
                  <p>In <a href="ch00/limit_options">Options to limit the output of <code>git log</code></a> we’ll list these and a few other common options for your reference.</p>
                  </div>
                  <table id="limit_options" class="tableblock frame-all grid-all stretch">
                  <caption class="title">Table 3. Options to limit the output of <code>git log</code>
                  </caption>
                  <colgroup>
                  <col style="width: 33.3333%;">
                  <col style="width: 66.6667%;">
                  </colgroup>
                  <thead>
                  <tr>
                  <th class="tableblock halign-left valign-top">Option</th>
                  <th class="tableblock halign-left valign-top">Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>-&lt;n&gt;</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Show only the last n commits</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--since</code>, <code>--after</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made after the specified date.</p></td>
                  </tr>
                  <tr>
                  <td class="tableblock halign-left valign-top"><p class="tableblock"><code>--until</code>, <code>--before</code></p></td>
                  <td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made before the specified date.</p></td>
                  </tr><div id="content">
          

<div id="book-chapters">
  <a class="dropdown-trigger" id="book-chapters-trigger" data-panel-id="chapters-dropdown" href="#">Chapters ▾</a>
<div class="dropdown-panel" id="chapters-dropdown">
  <div class="three-column">
    <div class="column-left">
      <ol class="book-toc">
  <li class="chapter">
  <h2>1. <a href="/book/en/v2/Getting-Started-About-Version-Control">Getting Started</a></h2>
    <ol>
        <li>
          1.1
          <a href="/book/en/v2/Getting-Started-About-Version-Control">About Version Control </a>
        </li>
        <li>
          1.2
          <a href="/book/en/v2/Getting-Started-A-Short-History-of-Git">A Short History of Git </a>
        </li>
        <li>
          1.3
          <a href="/book/en/v2/Getting-Started-What-is-Git%3F">What is Git? </a>
        </li>
        <li>
          1.4
          <a href="/book/en/v2/Getting-Started-The-Command-Line">The Command Line </a>
        </li>
        <li>
          1.5
          <a href="/book/en/v2/Getting-Started-Installing-Git">Installing Git </a>
        </li>
        <li>
          1.6
          <a href="/book/en/v2/Getting-Started-First-Time-Git-Setup">First-Time Git Setup </a>
        </li>
        <li>
          1.7
          <a href="/book/en/v2/Getting-Started-Getting-Help">Getting Help </a>
        </li>
        <li>
          1.8
          <a href="/book/en/v2/Getting-Started-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>2. <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Git Basics</a></h2>
    <ol>
        <li>
          2.1
          <a href="/book/en/v2/Git-Basics-Getting-a-Git-Repository">Getting a Git Repository </a>
        </li>
        <li>
          2.2
          <a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">Recording Changes to the Repository </a>
        </li>
        <li>
          2.3
          <a href="/book/en/v2/Git-Basics-Viewing-the-Commit-History" class="active">Viewing the Commit History </a>
        </li>
        <li>
          2.4
          <a href="/book/en/v2/Git-Basics-Undoing-Things">Undoing Things </a>
        </li>
        <li>
          2.5
          <a href="/book/en/v2/Git-Basics-Working-with-Remotes">Working with Remotes </a>
        </li>
        <li>
          2.6
          <a href="/book/en/v2/Git-Basics-Tagging">Tagging </a>
        </li>
        <li>
          2.7
          <a href="/book/en/v2/Git-Basics-Git-Aliases">Git Aliases </a>
        </li>
        <li>
          2.8
          <a href="/book/en/v2/Git-Basics-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>3. <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Git Branching</a></h2>
    <ol>
        <li>
          3.1
          <a href="/book/en/v2/Git-Branching-Branches-in-a-Nutshell">Branches in a Nutshell </a>
        </li>
        <li>
          3.2
          <a href="/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Basic Branching and Merging </a>
        </li>
        <li>
          3.3
          <a href="/book/en/v2/Git-Branching-Branch-Management">Branch Management </a>
        </li>
        <li>
          3.4
          <a href="/book/en/v2/Git-Branching-Branching-Workflows">Branching Workflows </a>
        </li>
        <li>
          3.5
          <a href="/book/en/v2/Git-Branching-Remote-Branches">Remote Branches </a>
        </li>
        <li>
          3.6
          <a href="/book/en/v2/Git-Branching-Rebasing">Rebasing </a>
        </li>
        <li>
          3.7
          <a href="/book/en/v2/Git-Branching-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>4. <a href="/book/en/v2/Git-on-the-Server-The-Protocols">Git on the Server</a></h2>
    <ol>
        <li>
          4.1
          <a href="/book/en/v2/Git-on-the-Server-The-Protocols">The Protocols </a>
        </li>
        <li>
          4.2
          <a href="/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server">Getting Git on a Server </a>
        </li>
        <li>
          4.3
          <a href="/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key">Generating Your SSH Public Key </a>
        </li>
        <li>
          4.4
          <a href="/book/en/v2/Git-on-the-Server-Setting-Up-the-Server">Setting Up the Server </a>
        </li>
        <li>
          4.5
          <a href="/book/en/v2/Git-on-the-Server-Git-Daemon">Git Daemon </a>
        </li>
        <li>
          4.6
          <a href="/book/en/v2/Git-on-the-Server-Smart-HTTP">Smart HTTP </a>
        </li>
        <li>
          4.7
          <a href="/book/en/v2/Git-on-the-Server-GitWeb">GitWeb </a>
        </li>
        <li>
          4.8
          <a href="/book/en/v2/Git-on-the-Server-GitLab">GitLab </a>
        </li>
        <li>
          4.9
          <a href="/book/en/v2/Git-on-the-Server-Third-Party-Hosted-Options">Third Party Hosted Options </a>
        </li>
        <li>
          4.10
          <a href="/book/en/v2/Git-on-the-Server-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>5. <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Git</a></h2>
    <ol>
        <li>
          5.1
          <a href="/book/en/v2/Distributed-Git-Distributed-Workflows">Distributed Workflows </a>
        </li>
        <li>
          5.2
          <a href="/book/en/v2/Distributed-Git-Contributing-to-a-Project">Contributing to a Project </a>
        </li>
        <li>
          5.3
          <a href="/book/en/v2/Distributed-Git-Maintaining-a-Project">Maintaining a Project </a>
        </li>
        <li>
          5.4
          <a href="/book/en/v2/Distributed-Git-Summary">Summary </a>
        </li>
    </ol>
  </li>
</ol>

    </div>
    <div class="column-middle">
      <ol class="book-toc">
  <li class="chapter">
  <h2>6. <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">GitHub</a></h2>
    <ol>
        <li>
          6.1
          <a href="/book/en/v2/GitHub-Account-Setup-and-Configuration">Account Setup and Configuration </a>
        </li>
        <li>
          6.2
          <a href="/book/en/v2/GitHub-Contributing-to-a-Project">Contributing to a Project </a>
        </li>
        <li>
          6.3
          <a href="/book/en/v2/GitHub-Maintaining-a-Project">Maintaining a Project </a>
        </li>
        <li>
          6.4
          <a href="/book/en/v2/GitHub-Managing-an-organization">Managing an organization </a>
        </li>
        <li>
          6.5
          <a href="/book/en/v2/GitHub-Scripting-GitHub">Scripting GitHub </a>
        </li>
        <li>
          6.6
          <a href="/book/en/v2/GitHub-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>7. <a href="/book/en/v2/Git-Tools-Revision-Selection">Git Tools</a></h2>
    <ol>
        <li>
          7.1
          <a href="/book/en/v2/Git-Tools-Revision-Selection">Revision Selection </a>
        </li>
        <li>
          7.2
          <a href="/book/en/v2/Git-Tools-Interactive-Staging">Interactive Staging </a>
        </li>
        <li>
          7.3
          <a href="/book/en/v2/Git-Tools-Stashing-and-Cleaning">Stashing and Cleaning </a>
        </li>
        <li>
          7.4
          <a href="/book/en/v2/Git-Tools-Signing-Your-Work">Signing Your Work </a>
        </li>
        <li>
          7.5
          <a href="/book/en/v2/Git-Tools-Searching">Searching </a>
        </li>
        <li>
          7.6
          <a href="/book/en/v2/Git-Tools-Rewriting-History">Rewriting History </a>
        </li>
        <li>
          7.7
          <a href="/book/en/v2/Git-Tools-Reset-Demystified">Reset Demystified </a>
        </li>
        <li>
          7.8
          <a href="/book/en/v2/Git-Tools-Advanced-Merging">Advanced Merging </a>
        </li>
        <li>
          7.9
          <a href="/book/en/v2/Git-Tools-Rerere">Rerere </a>
        </li>
        <li>
          7.10
          <a href="/book/en/v2/Git-Tools-Debugging-with-Git">Debugging with Git </a>
        </li>
        <li>
          7.11
          <a href="/book/en/v2/Git-Tools-Submodules">Submodules </a>
        </li>
        <li>
          7.12
          <a href="/book/en/v2/Git-Tools-Bundling">Bundling </a>
        </li>
        <li>
          7.13
          <a href="/book/en/v2/Git-Tools-Replace">Replace </a>
        </li>
        <li>
          7.14
          <a href="/book/en/v2/Git-Tools-Credential-Storage">Credential Storage </a>
        </li>
        <li>
          7.15
          <a href="/book/en/v2/Git-Tools-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>8. <a href="/book/en/v2/Customizing-Git-Git-Configuration">Customizing Git</a></h2>
    <ol>
        <li>
          8.1
          <a href="/book/en/v2/Customizing-Git-Git-Configuration">Git Configuration </a>
        </li>
        <li>
          8.2
          <a href="/book/en/v2/Customizing-Git-Git-Attributes">Git Attributes </a>
        </li>
        <li>
          8.3
          <a href="/book/en/v2/Customizing-Git-Git-Hooks">Git Hooks </a>
        </li>
        <li>
          8.4
          <a href="/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy">An Example Git-Enforced Policy </a>
        </li>
        <li>
          8.5
          <a href="/book/en/v2/Customizing-Git-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>9. <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git and Other Systems</a></h2>
    <ol>
        <li>
          9.1
          <a href="/book/en/v2/Git-and-Other-Systems-Git-as-a-Client">Git as a Client </a>
        </li>
        <li>
          9.2
          <a href="/book/en/v2/Git-and-Other-Systems-Migrating-to-Git">Migrating to Git </a>
        </li>
        <li>
          9.3
          <a href="/book/en/v2/Git-and-Other-Systems-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>10. <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Git Internals</a></h2>
    <ol>
        <li>
          10.1
          <a href="/book/en/v2/Git-Internals-Plumbing-and-Porcelain">Plumbing and Porcelain </a>
        </li>
        <li>
          10.2
          <a href="/book/en/v2/Git-Internals-Git-Objects">Git Objects </a>
        </li>
        <li>
          10.3
          <a href="/book/en/v2/Git-Internals-Git-References">Git References </a>
        </li>
        <li>
          10.4
          <a href="/book/en/v2/Git-Internals-Packfiles">Packfiles </a>
        </li>
        <li>
          10.5
          <a href="/book/en/v2/Git-Internals-The-Refspec">The Refspec </a>
        </li>
        <li>
          10.6
          <a href="/book/en/v2/Git-Internals-Transfer-Protocols">Transfer Protocols </a>
        </li>
        <li>
          10.7
          <a href="/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery">Maintenance and Data Recovery </a>
        </li>
        <li>
          10.8
          <a href="/book/en/v2/Git-Internals-Environment-Variables">Environment Variables </a>
        </li>
        <li>
          10.9
          <a href="/book/en/v2/Git-Internals-Summary">Summary </a>
        </li>
    </ol>
  </li>
</ol>

    </div>
    <div class="column-right">
      <ol class="book-toc">
  <li class="chapter">
  <h2>A1. <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Appendix A: Git in Other Environments</a></h2>
    <ol>
        <li>
          A1.1
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Graphical-Interfaces">Graphical Interfaces </a>
        </li>
        <li>
          A1.2
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio">Git in Visual Studio </a>
        </li>
        <li>
          A1.3
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code">Git in Visual Studio Code </a>
        </li>
        <li>
          A1.4
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-IntelliJ-%2F-PyCharm-%2F-WebStorm-%2F-PhpStorm-%2F-RubyMine">Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine </a>
        </li>
        <li>
          A1.5
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Sublime-Text">Git in Sublime Text </a>
        </li>
        <li>
          A1.6
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash">Git in Bash </a>
        </li>
        <li>
          A1.7
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh">Git in Zsh </a>
        </li>
        <li>
          A1.8
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-PowerShell">Git in PowerShell </a>
        </li>
        <li>
          A1.9
          <a href="/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Summary">Summary </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>A2. <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Appendix B: Embedding Git in your Applications</a></h2>
    <ol>
        <li>
          A2.1
          <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Command-line-Git">Command-line Git </a>
        </li>
        <li>
          A2.2
          <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Libgit2">Libgit2 </a>
        </li>
        <li>
          A2.3
          <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-JGit">JGit </a>
        </li>
        <li>
          A2.4
          <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-go-git">go-git </a>
        </li>
        <li>
          A2.5
          <a href="/book/en/v2/Appendix-B%3A-Embedding-Git-in-your-Applications-Dulwich">Dulwich </a>
        </li>
    </ol>
  </li>
  <li class="chapter">
  <h2>A3. <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Appendix C: Git Commands</a></h2>
    <ol>
        <li>
          A3.1
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config">Setup and Config </a>
        </li>
        <li>
          A3.2
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects">Getting and Creating Projects </a>
        </li>
        <li>
          A3.3
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Basic-Snapshotting">Basic Snapshotting </a>
        </li>
        <li>
          A3.4
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Branching-and-Merging">Branching and Merging </a>
        </li>
        <li>
          A3.5
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects">Sharing and Updating Projects </a>
        </li>
        <li>
          A3.6
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Inspection-and-Comparison">Inspection and Comparison </a>
        </li>
        <li>
          A3.7
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Debugging">Debugging </a>
        </li>
        <li>
          A3.8
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Patching">Patching </a>
        </li>
        <li>
          A3.9
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Email">Email </a>
        </li>
        <li>
          A3.10
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-External-Systems">External Systems </a>
        </li>
        <li>
          A3.11
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Administration">Administration </a>
        </li>
        <li>
          A3.12
          <a href="/book/en/v2/Appendix-C%3A-Git-Commands-Plumbing-Commands">Plumbing Commands </a>
        </li>
    </ol>
  </li>
</ol>

    </div>
  </div>
 </div>

    <span class="light" id="edition">
      2nd Edition
    </span>
</div>

<div id="main" class="book edition2">
    <h1>2.3 Git Basics - Viewing the Commit History</h1>
  <div>
<h2 id="_viewing_history">Viewing the Commit History</h2>
<div class="paragraph">
<p>After you have created several commits, or if you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.
The most basic and powerful tool to do this is the <code>git log</code> command.</p>
</div>
<div class="paragraph">
<p>These examples use a very simple project called “simplegit”.
To get the project, run:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git clone https://github.com/schacon/simplegit-progit</code></pre>
</div>
</div>
<div class="paragraph">
<p>When you run <code>git log</code> in this project, you should get output that looks something like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Sat Mar 15 10:31:28 2008 -0700

    Initial commit</code></pre>
</div>
</div>
<div class="paragraph">
<p>By default, with no arguments, <code>git log</code> lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.
As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.</p>
</div>
<div class="paragraph">
<p>A huge number and variety of options to the <code>git log</code> command are available to show you exactly what you’re looking for.
Here, we’ll show you some of the most popular.</p>
</div>
<div class="paragraph">
<p>One of the more helpful options is <code>-p</code> or <code>--patch</code>, which shows the difference (the <em>patch</em> output) introduced in each commit.
You can also limit the number of log entries displayed, such as using <code>-2</code> to show only the last two entries.</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log -p -2
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

diff --git a/Rakefile b/Rakefile
index a874b73..8f94139 100644
--- a/Rakefile
+++ b/Rakefile
@@ -5,7 +5,7 @@ require 'rake/gempackagetask'
 spec = Gem::Specification.new do |s|
     s.platform  =   Gem::Platform::RUBY
     s.name      =   "simplegit"
-    s.version   =   "0.1.0"
+    s.version   =   "0.1.1"
     s.author    =   "Scott Chacon"
     s.email     =   "schacon@gee-mail.com"
     s.summary   =   "A simple gem for using Git in Ruby code."

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

diff --git a/lib/simplegit.rb b/lib/simplegit.rb
index a0a60ae..47c6340 100644
--- a/lib/simplegit.rb
+++ b/lib/simplegit.rb
@@ -18,8 +18,3 @@ class SimpleGit
     end

 end
-
-if $0 == __FILE__
-  git = SimpleGit.new
-  puts git.show
-end</code></pre>
</div>
</div>
<div class="paragraph">
<p>This option displays the same information but with a diff directly following each entry.
This is very helpful for code review or to quickly browse what happened during a series of commits that a collaborator has added.
You can also use a series of summarizing options with <code>git log</code>.
For example, if you want to see some abbreviated stats for each commit, you can use the <code>--stat</code> option:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --stat
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

 Rakefile | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

 lib/simplegit.rb | 5 -----
 1 file changed, 5 deletions(-)

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon &lt;schacon@gee-mail.com&gt;
Date:   Sat Mar 15 10:31:28 2008 -0700

    Initial commit

 README           |  6 ++++++
 Rakefile         | 23 +++++++++++++++++++++++
 lib/simplegit.rb | 25 +++++++++++++++++++++++++
 3 files changed, 54 insertions(+)</code></pre>
</div>
</div>
<div class="paragraph">
<p>As you can see, the <code>--stat</code> option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed.
It also puts a summary of the information at the end.</p>
</div>
<div class="paragraph">
<p>Another really useful option is <code>--pretty</code>.
This option changes the log output to formats other than the default.
A few prebuilt option values are available for you to use.
The <code>oneline</code> value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits.
In addition, the <code>short</code>, <code>full</code>, and <code>fuller</code> values show the output in roughly the same format but with less or more information, respectively:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=oneline
ca82a6dff817ec66f44342007202690a93763949 Change version number
085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit</code></pre>
</div>
</div>
<div class="paragraph">
<p>The most interesting option value is <code>format</code>, which allows you to specify your own log output format.
This is especially useful when you’re generating output for machine parsing — because you specify the format explicitly, you know it won’t change with updates to Git:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h - %an, %ar : %s"
ca82a6d - Scott Chacon, 6 years ago : Change version number
085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
a11bef0 - Scott Chacon, 6 years ago : Initial commit</code></pre>
</div>
</div>
<div class="paragraph">
<p><a href="ch00/pretty_format">Useful specifiers for <code>git log --pretty=format</code></a> lists some of the more useful specifiers that <code>format</code> takes.</p>
</div>
<table id="pretty_format" class="tableblock frame-all grid-all stretch">
<caption class="title">Table 1. Useful specifiers for <code>git log --pretty=format</code>
</caption>
<colgroup>
<col style="width: 20%;">
<col style="width: 80%;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">Specifier</th>
<th class="tableblock halign-left valign-top">Description of Output</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%H</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Commit hash</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%h</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated commit hash</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%T</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Tree hash</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%t</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated tree hash</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%P</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Parent hashes</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%p</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Abbreviated parent hashes</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%an</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Author name</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ae</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Author email</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ad</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Author date (format respects the --date=option)</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ar</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Author date, relative</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cn</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Committer name</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%ce</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Committer email</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cd</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Committer date</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%cr</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Committer date, relative</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>%s</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p>You may be wondering what the difference is between <em>author</em> and <em>committer</em>.
The author is the person who originally wrote the work, whereas the committer is the person who last applied the work.
So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.
We’ll cover this distinction a bit more in <a href="ch00/ch05-distributed-git">Distributed Git</a>.</p>
</div>
<div class="paragraph">
<p>The <code>oneline</code> and <code>format</code> option values are particularly useful with another <code>log</code> option called <code>--graph</code>.
This option adds a nice little ASCII graph showing your branch and merge history:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty=format:"%h %s" --graph
* 2d3acf9 Ignore errors from SIGCHLD on trap
*  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
|\
| * 420eac9 Add method for getting the current branch
* | 30e367c Timeout code and tests
* | 5a09431 Add timeout protection to grit
* | e1193f8 Support for heads with slashes in them
|/
* d6016bc Require time for xmlschema
*  11d191e Merge branch 'defunkt' into local</code></pre>
</div>
</div>
<div class="paragraph">
<p>This type of output will become more interesting as we go through branching and merging in the next chapter.</p>
</div>
<div class="paragraph">
<p>Those are only some simple output-formatting options to <code>git log</code> — there are many more.
<a href="ch00/log_options">Common options to <code>git log</code></a> lists the options we’ve covered so far, as well as some other common formatting options that may be useful, along with how they change the output of the log command.</p>
</div>
<table id="log_options" class="tableblock frame-all grid-all stretch">
<caption class="title">Table 2. Common options to <code>git log</code>
</caption>
<colgroup>
<col style="width: 20%;">
<col style="width: 80%;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">Option</th>
<th class="tableblock halign-left valign-top">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-p</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show the patch introduced with each commit.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--stat</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show statistics for files modified in each commit.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--shortstat</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Display only the changed/insertions/deletions line from the --stat command.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-only</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files modified after the commit information.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--name-status</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show the list of files affected with added/modified/deleted information as well.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--abbrev-commit</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show only the first few characters of the SHA-1 checksum instead of all 40.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--relative-date</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--graph</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Display an ASCII graph of the branch and merge history beside the log output.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--pretty</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--oneline</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Shorthand for <code>--pretty=oneline --abbrev-commit</code> used together.</p></td>
</tr>
</tbody>
</table>
<div class="sect3">
<h3 id="_limiting_log_output">Limiting Log Output</h3>
<div class="paragraph">
<p>In addition to output-formatting options, <code>git log</code> takes a number of useful limiting options; that is, options that let you show only a subset of commits.
You’ve seen one such option already — the <code>-2</code> option, which displays only the last two commits.
In fact, you can do <code>-&lt;n&gt;</code>, where <code>n</code> is any integer to show the last <code>n</code> commits.
In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.</p>
</div>
<div class="paragraph">
<p>However, the time-limiting options such as <code>--since</code> and <code>--until</code> are very useful.
For example, this command gets the list of commits made in the last two weeks:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --since=2.weeks</code></pre>
</div>
</div>
<div class="paragraph">
<p>This command works with lots of formats — you can specify a specific date like <code>"2008-01-15"</code>, or a relative date such as <code>"2 years 1 day 3 minutes ago"</code>.</p>
</div>
<div class="paragraph">
<p>You can also filter the list to commits that match some search criteria.
The <code>--author</code> option allows you to filter on a specific author, and the <code>--grep</code> option lets you search for keywords in the commit messages.</p>
</div>
<div class="admonitionblock note">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">
<div class="paragraph">
<p>You can specify more than one instance of both the <code>--author</code> and <code>--grep</code> search criteria, which
will limit the commit output to commits that match <em>any</em> of the <code>--author</code> patterns and <em>any</em>
of the <code>--grep</code> patterns; however, adding the <code>--all-match</code> option further limits the output to
just those commits that match <em>all</em> <code>--grep</code> patterns.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
<div class="paragraph">
<p>Another really helpful filter is the <code>-S</code> option (colloquially referred to as Git’s “pickaxe” option), which takes a string and shows only those commits that changed the number of occurrences of that string.
For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log -S function_name</code></pre>
</div>
</div>
<div class="paragraph">
<p>The last really useful option to pass to <code>git log</code> as a filter is a path.
If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files.
This is always the last option and is generally preceded by double dashes (<code>--</code>) to separate the paths from the options:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log -- path/to/file</code></pre>
</div>
</div>
<div class="paragraph">
<p>In <a href="ch00/limit_options">Options to limit the output of <code>git log</code></a> we’ll list these and a few other common options for your reference.</p>
</div>
<table id="limit_options" class="tableblock frame-all grid-all stretch">
<caption class="title">Table 3. Options to limit the output of <code>git log</code>
</caption>
<colgroup>
<col style="width: 33.3333%;">
<col style="width: 66.6667%;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">Option</th>
<th class="tableblock halign-left valign-top">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-&lt;n&gt;</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show only the last n commits</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--since</code>, <code>--after</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made after the specified date.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--until</code>, <code>--before</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made before the specified date.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--author</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the author entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--committer</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the committer entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--grep</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits with a commit message containing the string</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-S</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits adding or removing code matching the string</p></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p>For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch</code></pre>
</div>
</div>
<div class="paragraph">
<p>Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.</p>
</div>
<div class="admonitionblock tip">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Tip</div>
</td>
<td class="content">
<div class="title">Preventing the display of merge commits</div>
<div class="paragraph">
<p>Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative.
To prevent the display of merge commits cluttering up your log history, simply add the log option <code>--no-merges</code>.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="nav"><a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">prev</a> | <a href="/book/en/v2/Git-Basics-Undoing-Things">next</a></div></div>
</div>

        </div>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--author</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the author entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--committer</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the committer entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--grep</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits with a commit message containing the string</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-S</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits adding or removing code matching the string</p></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p>For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch</code></pre>
</div>
</div>
<div class="paragraph">
<p>Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.</p>
</div>
<div class="admonitionblock tip">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Tip</div>
</td>
<td class="content">
<div class="title">Preventing the display of merge commits</div>
<div class="paragraph">
<p>Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative.
To prevent the display of merge commits cluttering up your log history, simply add the log option <code>--no-merges</code>.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="nav"><a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">prev</a> | <a href="/book/en/v2/Git-Basics-Undoing-Things">next</a></div></div>
</div>

        </div>
<table>
<tbody><tr>
<td class="icon">
<div class="title">Tip</div>
</td>
<td class="content">
<div class="title">Preventing the display of merge commits</div>
<div class="paragraph">
<p>Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative.
To prevent the display of merge commits cluttering up your log history, simply add the log option <code>--no-merges</code>.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="nav"><a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">prev</a> | <a href="/book/en/v2/Git-Basics-Undoing-Things">next</a></div></div>
</div>

        </div>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--until</code>, <code>--before</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made before the specified date.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--author</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the author entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--committer</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the committer entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--grep</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits with a commit message containing the string</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-S</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits adding or removing code matching the string</p></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p>For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch</code></pre>
</div>
</div>
<div class="paragraph">
<p>Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.</p>
</div>
<div class="admonitionblock tip">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Tip</div>
</td>
<td class="content">
<div class="title">Preventing the display of merge commits</div>
<div class="paragraph">
<p>Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative.
To prevent the display of merge commits cluttering up your log history, simply add the log option <code>--no-merges</code>.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="nav"><a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">prev</a> | <a href="/book/en/v2/Git-Basics-Undoing-Things">next</a></div></div>
</div>

        </div>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--until</code>, <code>--before</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made before the specified date.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--author</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the author entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--committer</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the committer entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--grep</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits with a commit message containing the string</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-S</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits adding or removing code matching the string</p></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p>For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch</code></pre>
</div>
</div>
<div class="paragraph">
<p>Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.</p>
</div>
<div class="admonitionblock tip">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Tip</div>
</td>
<td class="content">
<div class="title">Preventing the display of merge commits</div>
<div class="paragraph">
<p>Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative.
To prevent the display of merge commits cluttering up your log history, simply add the log option <code>--no-merges</code>.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="nav"><a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">prev</a> | <a href="/book/en/v2/Git-Basics-Undoing-Things">next</a></div></div>
</div>

        </div>
<div class="paragraph">
<p>In addition to output-formatting options, <code>git log</code> takes a number of useful limiting options; that is, options that let you show only a subset of commits.
You’ve seen one such option already — the <code>-2</code> option, which displays only the last two commits.
In fact, you can do <code>-&lt;n&gt;</code>, where <code>n</code> is any integer to show the last <code>n</code> commits.
In reality, you’re unlikely to use that often, because Git by default pipes all output through a pager so you see only one page of log output at a time.</p>
</div>
<div class="paragraph">
<p>However, the time-limiting options such as <code>--since</code> and <code>--until</code> are very useful.
For example, this command gets the list of commits made in the last two weeks:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --since=2.weeks</code></pre>
</div>
</div>
<div class="paragraph">
<p>This command works with lots of formats — you can specify a specific date like <code>"2008-01-15"</code>, or a relative date such as <code>"2 years 1 day 3 minutes ago"</code>.</p>
</div>
<div class="paragraph">
<p>You can also filter the list to commits that match some search criteria.
The <code>--author</code> option allows you to filter on a specific author, and the <code>--grep</code> option lets you search for keywords in the commit messages.</p>
</div>
<div class="admonitionblock note">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">
<div class="paragraph">
<p>You can specify more than one instance of both the <code>--author</code> and <code>--grep</code> search criteria, which
will limit the commit output to commits that match <em>any</em> of the <code>--author</code> patterns and <em>any</em>
of the <code>--grep</code> patterns; however, adding the <code>--all-match</code> option further limits the output to
just those commits that match <em>all</em> <code>--grep</code> patterns.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
<div class="paragraph">
<p>Another really helpful filter is the <code>-S</code> option (colloquially referred to as Git’s “pickaxe” option), which takes a string and shows only those commits that changed the number of occurrences of that string.
For instance, if you wanted to find the last commit that added or removed a reference to a specific function, you could call:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log -S function_name</code></pre>
</div>
</div>
<div class="paragraph">
<p>The last really useful option to pass to <code>git log</code> as a filter is a path.
If you specify a directory or file name, you can limit the log output to commits that introduced a change to those files.
This is always the last option and is generally preceded by double dashes (<code>--</code>) to separate the paths from the options:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log -- path/to/file</code></pre>
</div>
</div>
<div class="paragraph">
<p>In <a href="ch00/limit_options">Options to limit the output of <code>git log</code></a> we’ll list these and a few other common options for your reference.</p>
</div>
<table id="limit_options" class="tableblock frame-all grid-all stretch">
<caption class="title">Table 3. Options to limit the output of <code>git log</code>
</caption>
<colgroup>
<col style="width: 33.3333%;">
<col style="width: 66.6667%;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">Option</th>
<th class="tableblock halign-left valign-top">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-&lt;n&gt;</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Show only the last n commits</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--since</code>, <code>--after</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made after the specified date.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--until</code>, <code>--before</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Limit the commits to those made before the specified date.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--author</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the author entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--committer</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits in which the committer entry matches the specified string.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>--grep</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits with a commit message containing the string</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>-S</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Only show commits adding or removing code matching the string</p></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p>For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre class="highlight"><code class="language-console" data-lang="console">$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch</code></pre>
</div>
</div>
<div class="paragraph">
<p>Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.</p>
</div>
<div class="admonitionblock tip">
<table>
<tbody><tr>
<td class="icon">
<div class="title">Tip</div>
</td>
<td class="content">
<div class="title">Preventing the display of merge commits</div>
<div class="paragraph">
<p>Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative.
To prevent the display of merge commits cluttering up your log history, simply add the log option <code>--no-merges</code>.</p>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="nav"><a href="/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository">prev</a> | <a href="/book/en/v2/Git-Basics-Undoing-Things">next</a></div></div>
</div>

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

You may want to fork the Tower project into your own github account. This will allow you to make changes and commit back to your local fork while developing and testing. Once your changes are complete, you can then submit a pull request to the main project. 

Development is done on the [develop](https://github.com/DroidPlanner/Tower/tree/develop) branch, while [master](https://github.com/DroidPlanner/Tower/tree/master) holds the latest production ready release. Substantial features are developed in branches and merged into develop once complete and tested. [Here is a more extensive guide on how to use git in this project.](https://github.com/Droidplanner/droidplanner/wiki/How-to-use-GIT-to-collaborate-with-the-code)

##  Windows
Download Git: [Git download](http://git-scm.com/downloads). And install it.

Now open Git GUI. Select Git clone, and type the following address: [https://github.com/DroidPlanner/Tower.git](https://github.com/DroidPlanner/Tower.git)

On the target directory type a folder on your PC (type in a new folder, that the git will generate).
[[/Images/setupGit1.png]]

## Mac/Linux
Just run the following commands to clone the DroidPlanner project from the main repository.
```
# Install GIT
sudo apt-get install git-gui gitk
sudo apt-get update
 
# Download DroidPlanner project
git clone https://github.com/DroidPlanner/Tower.git
```

#### Advanced (with Fork)
Fork the Tower project:

Then, in your terminal app:
```
$ git clone git@github.com:<YOUR_GITHUB_USERNAME>/Tower.git tower
$ cd tower
```
Occasionally you'll want to update your local fork with the upstream changes. To do this you'll need to add the main repository as a remote, then fetch and merge the changes into your local fork.

```
# From your local tower folder (You only need to do this the first time):
$ git remote add upstream https://github.com/DroidPlanner/Tower.git
```
Then, each time you want to update your fork:
```
$ git fetch upstream
$ git merge upstream/master
```

If you want to learn more about Github workflow with forks and whatnot, you can read the [Github docs](https://help.github.com/articles/fork-a-repo).
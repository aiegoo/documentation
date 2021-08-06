Our branching model is based off the [nvie branching model](http://nvie.com/posts/a-successful-git-branching-model/). 

- [develop](https://github.com/DroidPlanner/Tower/tree/develop) - Code in which we are working at the moment. Always start development from this branch, if not you may find problems merging your changes back into the main code in the future. 

- release-x.y.z - Code from the `develop` branch that's being evaluated / tested (via beta releases) for production release.

- [master](https://github.com/DroidPlanner/Tower/tree/master) - Production releases that are onto the Google Play store.
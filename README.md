# How this works.
* Each section is in a branch. Run the following to see all sections.
```shell
git branch
```
* Go to the section by switching to that branch
```shell
git checkout BRANCH-NAME
```
* Once inside the section, progress through it by going through commits.
```shell
git checkout intro-commit-sha # go to the first commit
git log --reverse --pretty=%H BRANCH-NAME -- | grep -A 1 $(git rev-parse HEAD) | tail -n1 | xargs git checkout # To move one commit forward in history
git checkout Head^1 # To move one commit backward in history
```

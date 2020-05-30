# infinite-animal-crossing-lofi

### git workflow
1. (first time setup) pull the repository `git clone https://github.com/dryu99/infinite-animal-crossing-lofi.git`
2. checkout into a new branch `git checkout -b NAME-OF-BRANCH`
3. make your changes, go wild!
4. tell git to track your changes by doing `git add .`
5. save your changes and give it a meaningful name by doing `git commit -m "describe your changes here"`
6. double check to see what git is keeping track of by doing `git status`
7. push those changes up to github `git push origin NAME-OF-BRANCH`
8. go to github and make a pull request!
9. merge it into master

### common pitfalls
1. help! what do i do if my git says "failed to push some refs to origin"
    1. you wanna pull your changes and do `git pull origin master`
2. help! i wanna revert to an earlier version!
   1. find the last time you saved your work by doing `git log` and keep track of the hash
   2. then `git reset --hard <hash>` 
3. how do i update my local version to be up to date with github?
   1. `git pull origin master`
4. how do i switch branches?
   1. `git checkout NAME-OF-BRANCH`

   carmen

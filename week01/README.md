# COMP2110 Week 01

Briefly summarise the work you've done this week here.

Completed non-workshop activities.
1. open a terminal. Select git bash

git config user.name "Your Name"
git config user.email "your.email@example.com"
 
check if it is correct 
git config user.name
git config user.email

Press `q` to exit

This sets your identity for all repositories on your computer.
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

2. How to commit?
git commit -m "initial_setup_done"

Add Changes to the Last Commit (Keep Same Message)
# 1️. Stage your changes
git add .

(or add specific files)
git add filename.js

# 2️. Amend the last commit (keep same message)
git commit --amend --no-edit

--amend → modifies the last commit

--no-edit → keeps the existing commit message

# 3. push
git push
git push --force
git push --force-with-lease

# 4. Always a good idea to check the status of the branch 
git status

Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

`git add .gitignore`
`git commit -m "Add .gitignore file"`
`git push`



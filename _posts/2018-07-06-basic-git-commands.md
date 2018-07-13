---
layout: post
title: Basic Git commands
date:   2017-04-20
desc: "Basic Git commands"
keywords: "Git,git,commands,website,blog,easy"
categories: [Git]
tags: [Git]
icon: icon-html
---

Git commands.
Command line instructions

Git global setup
git config --global user.name "Bruce Wane"
git config --global user.email "example@email.com"

Create a new repository
git clone
https://gitlab.com/pmutua/agiza.git

cd agiza
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Existing folder
cd existing_folder
git init
git remote add origin
https://gitlab.com/pmutua/agiza.git

git add .
git commit -m "Initial commit"
git push -u origin master

Existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin
https://gitlab.com/pmutua/agiza.git
git push -u origin --all
git push -u origin --tags

[docs]: ../docs/7.5.0/index.md

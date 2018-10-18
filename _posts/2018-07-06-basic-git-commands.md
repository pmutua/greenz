---
layout: post
title: Basic Git commands
date:   2017-04-20
desc: "Basic Git commands"
keywords: "Git,git,commands,website,blog,easy,git-commands"
categories: [Git,Blog]
tags: [git,git-commands]
icon: icon-html
---

# Git commands

## Git global setup

```bash
git config --global user.name "Bruce Wane"
git config --global user.email "example@email.com"
```

# Creating new repository 

Create a new repository on Git Hub. For Example  repository name is 
`examplerepo`

Then clone it to your computer directory of choice.

```bash
git clone https://gitlab.com/username/examplerepo.git

cd agiza
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

```

# Existing folder

```bash
cd existing_folder
git init
git remote add origin
https://gitlab.com/pmutua/agiza.git

git add .
git commit -m "Initial commit"
git push -u origin master
```

# Existing Git repository

```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin
https://gitlab.com/pmutua/agiza.git
git push -u origin --all
git push -u origin --tags
```

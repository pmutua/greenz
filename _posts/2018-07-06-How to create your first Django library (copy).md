---
layout: post
title: How to create your first Django library.
description: >
	This is a guide how to create first third-party django library or application, attempting to be kindly. Django documentation tell you way to create django’s projects and applications. But there isn’t (perhaps) way to distribute applications like django-cms, django-blog-zinnia. So, I’ll show you it.
tags: [tutorial]
author: author1
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---


# Contents

Command line instructions

Git global setup
git config --global user.name "Philip Mutua"
git config --global user.email "pmutua@live.com"

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

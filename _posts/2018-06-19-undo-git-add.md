---
layout: post
title: How to Undo a git add - remove files staged for a git commit
description: >
	GitLab is an open source GIT repository manager based on Rails and developed by GitLab Inc. It is a web-based GIT repository manager that allows your team to work on code, track bugs and feature requests and to test and deploy applications. GitLab provides features like a wiki, issue tracking, code reviews, activity feeds and merge management. It is capable of hosting multiple projects.
tags: [tutorial]
author: author1
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---

Sometimes you will find yourself in a situation that you want to revert to the previous commit. In this tutorial I'm going to show you how to Undo a `git add` and remove files staged for a git commit. It's pretty much simple as shown below:

`git reset filename.txt`

Will remove a file named `filename.txt` from the current index, the "about to be committed" area, without changing anything else.

To undo `git add . ` use `git reset`  (no dot).

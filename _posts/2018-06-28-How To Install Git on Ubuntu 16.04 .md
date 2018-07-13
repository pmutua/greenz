---
layout: post
title: How to Undo a git add - remove files staged for a git commit
date:   2017-05-06
desc: " How to Undo a git add - remove files staged for a git commit"
keywords: "Git,reset commit"
categories: [Git]
tags: [Git]
icon: icon-html
---

Introduction

An indispensable tool in modern software development is some kind of version control system. Version control systems allow you to keep track of your software at the source level. You can track changes, revert to previous stages, and branch to create alternate versions of files and directories.

One of the most popular version control systems is git, a distributed version control system. Many projects maintain their files in a git repository, and sites like GitHub and Bitbucket have made sharing and contributing to code simple and valuable.

In this guide, we will demonstrate how to install and configure git on an Ubuntu 16.04 system. We will cover how to install the software in two different ways, each of which have benefits.

This tutorial assumes you are signed in as a non-root user which you can learn how to create here.
How To Install Git with Apt

By far the easiest way of getting git installed and ready to use is by using Ubuntu's default repositories. This is the fastest method, but the version may be older than the newest version. If you need the latest release, consider following the steps to compile git from source.

You can use the apt package management tools to update your local package index. Afterwards, you can download and install the program:

    sudo apt-get update
    sudo apt-get install git

This will download and install git to your system. You will still have to complete the configuration steps that we cover in the "setup" section, so feel free to skip to that section now.
How To Install Git from Source

A more flexible method of installing git is to compile the software from source. This takes longer and will not be maintained through your package manager, but it will allow you to download the latest release and will give you some control over the options you include if you wish to customize.

Before you begin, you need to install the software that git depends on. This is all available in the default repositories, so we can update our local package index and then install the packages:

    sudo apt-get update
    sudo apt-get install build-essential libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip




How To Set Up Git

Now that you have git installed, you need to do a few things so that the commit messages that will be generated for you will contain your correct information.

The easiest way of doing this is through the git config command. Specifically, we need to provide our name and email address because git embeds this information into each commit we do. We can go ahead and add this information by typing:

    git config --global user.name "Your Name"
    git config --global user.email "youremail@domain.com"

We can see all of the configuration items that have been set by typing:

    git config --list

git configuration

user.name=Your Name
user.email=youremail@domain.com

As you can see, this has a slightly different format. The information is stored in your git configuration file, which you can optionally edit by hand with your text editor like this:

    nano ~/.gitconfig

~/.gitconfig contents

[user]
    name = Your Name
    email = youremail@domain.com

There are many other options that you can set, but these are the two essential ones needed. If you skip this step, you'll likely see warnings when you commit to git that are similar to this:
Output when git username and email not set

[master 0d9d21d] initial project version
 Committer: root 
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

This makes more work for you because you will then have to revise the commits you have done with the corrected information.
Conclusion

You should now have git installed and ready to use on your system. To learn more about how to use Git, check out these articles:

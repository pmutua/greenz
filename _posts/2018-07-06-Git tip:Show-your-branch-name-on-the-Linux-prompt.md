---
layout: post
title: How to Show your branch name on the Linux prompt.
date:   2018-03-05
desc: "How to Show your  branch name on the Linux prompt"
keywords: "Git,website,blog,easy"
categories: [Git,Blog]
tags: [git,tips,linux]
icon: icon-html
---

Git is one of the most popular Source Control Management (SCM) software packages to provide revision control. Subversion (aka SVN) and Mercurial are other popular systems. These systems organize source code in branches and revisions that can be named by means of tagging.

Branches can be used to allow you to work on different versions of the software concurrently. A popular way of organizing is to create a branch for every major feature you are building. Another organization can be used to distinguish between a “development” and “production” version, so that you can easily apply a small code change in case of any bugs.

In any of the above schemes it is important to know which branch you are working on, when committing code to the repository. This post explains how you can add the branch name in red to the prompt.

Firstly, we have to turn on the colored prompt in “.bashrc”:


```bash
# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes
```


Now add the following code to `.bashrc` for Git branch information:

```bash

# Show git branch name
force_color_prompt=yes
color_prompt=yes
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
if [ "$color_prompt" = yes ]; then
 PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[01;31m\]$(parse_git_branch)\[\033[00m\]\$ '
else
 PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi
unset color_prompt force_color_prompt
```

With this change you will be less likely to commit your code to the wrong branch. Enjoy!

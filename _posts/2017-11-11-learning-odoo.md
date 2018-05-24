---
layout: post
title: A Simple Hello World program in Odoo.
description: >
  In this tutorial I'm going to show you how to make a simple "Hello World" program.
tags: [tutorial]
author: author1
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---
A couple of days ago I found my self learning `go` programming language,I took a glance on it's syntax and it was quite different from what I'm used to. I come from using dynamic typed, interpreted languages like Python,Ruby and JavaScript.`Go` is sort of different it's a static typed,compiled language just like C++ and Java.

In my opinion,`go`'s syntax is quite simple to write. You will be amazed by how you can make a simple 
hello world program with just a few lines of code.

In this tutorial I'm going to show you how to make a simple "Hello World" program.

Before you get started you need to install `go` in your computer depending on your operating system.
If you have already installed `go` then jump to the part below.

First create a directory in your prefered workspace. For instance we are going to make a **hello_world** folder.

Then inside the __hello_world__ folder create a file called `main.go`

Open `main.go` file with your favourite text editor, then add the code below. That's it! and there you have your hello world program. Pretty cool right? : )

NB:// Always use double `""` quotes not single `''` quotes when specifying your `import`

```golang

package main 

import "fmt" 

func main(){
	printIn "Hello World"
}

```

# Explanation 

**How do I run the code in the project?**

**What does `package main mean` ?**

**What does import "fmt" mean?**

**What is the `func` thing?**

**How is `main.go file organized`?**


It's an immensely useful tool and one we encourage you to use here with Hyde.

Find out more by [visiting the project on GitHub](https://github.com/go).

[docs]: ../docs/7.5.0/index.md






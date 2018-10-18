---
layout: post
title: Setting Up a Virtual Environment in Python.
date:   2017-01-05
desc: "Setting Up a Virtual Environment in Python."
keywords: "Python,Virtualenv,setting up virtualenv"
categories: [Python]
tags: [python,virtualenv]
icon: icon-html
---

When you use virtualenv, you create an isolated environment with its own installation directories which your user has full permissions to. This allows you to install a custom version of Python and its different packages which is not connected to the global installation on the server. This also solves the issue with permissions when installing software.


# pip and virtualenv

 View the following links for further details on installing and using `pip` and `virtualenv`, depending on which version of Python you're using:

### Python 2
- [Installing and using virtualenv with Python 3](https://help.dreamhost.com/hc/en-us/articles/215489338-Installing-and-using-Python-s-virtualenv)
- [Using pip3 to install Python3 modules](https://help.dreamhost.com/hc/en-us/articles/115000221112-Using-pip-to-install-Python-2-modules)

### Python 3
- [Installing and using virtualenv with Python 3](https://help.dreamhost.com/hc/en-us/articles/115000695551-Installing-and-using-Python-s-virtualenv-using-Python-3)
- [Using pip3 to install Python3 modules](https://help.dreamhost.com/hc/en-us/articles/115000699011-Using-pip3-to-install-Python3-modules)

First you will create a directory:
`mkdir environment_file`

Then install python packages in `environment_file` using `virtualenv` depending on the python version you would like to install.

# Example

#### Python3.6

`virtualenv -p python3.6 environment_file`


#### Python2.7

`virtualenv -p python3.6 environment_file`

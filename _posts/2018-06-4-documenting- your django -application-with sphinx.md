---
layout: post
title: How to start documenting your django application with sphinx
date:   2018-05-07
desc: "In this tutorial I'm going to show you how to start documenting your django application with sphinx."
keywords: "Python,Sphinx,Django"
categories: [Python,Django]
tags: [python,django,sphinx,django]
icon: icon-html

---

install [sphinx](http://www.sphinx-doc.org/en/stable/)

For Python 3
`pip3 install sphinx`

For Python 2


`cd` to your django project

Make a directory called `docs`

`mkdir` docs

`cd`  to docs

run `sphinx-quckstart`

then configure your `conf.py` file

```python

import os
import sys

sys.path.insert(0, os.path.abspath('../'))

os.environ['DJANGO_SETTINGS_MODULE'] = 'mis.settings'
import django
django.setup()



```

Inside your doc folder generate your `.rst` files

For example you have an application called `hr` you would like to import everything to document

you will run `sphinx-apidoc -o source ../hr`


Then to make them availabe in the index file add them in the `index.rst`

```markdown
.. ERP documentation master file, created by
   sphinx-quickstart on Wed Jun 13 11:40:12 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to ERP's documentation!
===============================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   source/modules


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

```

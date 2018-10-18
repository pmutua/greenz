---
layout: post
title: How to install Sphinx to documenting your app.
description: >
  Sphinx is a tool that makes it easy to create intelligent and beautiful documentation for Python projects (or other documents consisting of multiple reStructuredText sources), written by Georg Brandl. It was originally created for the new Python documentation, and has excellent facilities for Python project documentation, but C/C++ is supported as well, and more languages are planned.
keywords: "Python,Programming,gh-pages,website,blog,easy"
categories: [Python]
tags: [python,sphinx,documentation]
icon: icon-html
author: author1
---

Sphinx uses reStructuredText as its markup language, and many of its strengths come from the power and straightforwardness of reStructuredText and its parsing and translating suite, the Docutils.

Among its features are the following:

- Output formats: HTML (including derivative formats such as HTML Help, Epub and Qt Help), plain text, manual pages and LaTeX or direct PDF output using rst2pdf
- Extensive cross-references: semantic markup and automatic links for functions, classes, glossary terms and similar pieces of information
- Hierarchical structure: easy definition of a document tree, with automatic links to siblings, parents and children
- Automatic indices: general index as well as a module index
- Code handling: automatic highlighting using the Pygments highlighter
- Flexible HTML output using the Jinja 2 templating engine
- Various extensions are available, e.g. for automatic testing of snippets and inclusion of appropriately formatted docstrings
- Setuptools integration

For more information, refer to the the documentation.
Installation

Sphinx is published on PyPI and can be installed from there:

`pip install -U sphinx`

We also publish beta releases:

`pip install -U --pre sphinx`

Find out more by [visiting the project on GitHub](https://github.com/sphinx-doc/sphinx).

[docs]: ../docs/7.5.0/index.md

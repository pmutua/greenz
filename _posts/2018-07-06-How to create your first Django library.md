---
layout: post
title: How to create your first Django library.
description: >

tags: [tutorial]
author: author1
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---


This is a guide how to create first third-party django library or application, attempting to be kindly. Django documentation tell you way to create django’s projects and applications. But there isn’t (perhaps) way to distribute applications like django-cms, django-blog-zinnia. So, I’ll show you it.

### How to create your first Django library
- 1. Create your application
- 2. Packaging
- 3. Way to run tests without projects
- 4. Use tox
### Conclusion


On the end, the layout of the package will be like this:

```markdown
django-myapp
|-- __init__.py
|-- MANIFEST.in
|-- README.rst
|-- LICENSE
|-- setup.py
|-- test_settings.py
|-- myapp
|   |-- __init__.py
|   |-- models.py
|   |-- views.py
|   `-- tests.py
`-- tox.ini
```



Whole example project described on this page is on Github: [django-myapp](https://github.com/hirokiky/django-myapp).

This guide includes about packaging or python environments. If you have created couple of python libraries, you can skip over some steps to [3. Way to run tests without projects](http://hirokiky.org/tech/create_django_library.html#way-to-run-django-app-tests). But at least, I expect you to finish the tutorial of [django’s document](https://docs.djangoproject.com/) and create some apps.

# 1. Create your application

When you create third-party library, you won’t need to create a project. Just create your application by using startapp sub-command. But wait. you will distribute this application, so you need a parent directory to package it like this:

```bash
mkdir django-myapp
cd django-myapp
django-admin.py startapp myapp
```

OK, just it. Write your codes as same as way you learned at tutorial. “Can’t run tests”...? Yeah, I know it. and I’ll show you about it later.

And you need to write README and LICENSE file to describe about your package. I won’t use packages without README or documentation:

```bash
touch README.rst
touch LICENSE
```

Also It’s good idea to manage packages by using some VCS like git:

`git init`

# 2. Packaging

To distribute your app/lib, make it as a package. Just thing you need to do is putting setup.py file under the django-myapp directory meaning next to myapp directory.

The contents of this file will contain information about your package, name, version, description, required packages, and so on:


```python
import os
from setuptools import setup

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()

setup(
    name='django-myapp',
    version='0.1',
    packages=['myapp'],
    description='A line of description',
    long_description=README,
    author='yourname',
    author_email='yourname@example.com',
    url='https://github.com/yourname/django-myapp/',
    license='MIT',
    install_requires=[
        'Django>=1.6,<1.7',
    ]
)

```

I recommend you to write them at least.

**name**
	The name of package like django-cms. This name will use when you specify the package by pip. So if you name it as django-myapp, users will type pip install django-myapp.
**version**
	Version of you package. I recommend to follow semantic versioning
**packages**
	List of python modules you want to contain. Basically, It’s enough to specify the django application you created.
**description**
	A line of description. It will be used, for example, on package list of PyPI.
**long_description**
	Lines of description. Basically it’s good idea to use README file as long_description. This will be used the package page of PyPI like here django-reportmail
**author**
	Your name.
**author_email**
	Your email address
**url**
	A URL for your web site of the package. Basically, it’s enough to put the URL for your repository on Github and so.
**license**
	The name of license you want to use. I always specify ‘MIT’ meaning the MIT license
**install_requires**
	A list of packages that your packages require. It’s django package, so it’s necessary to write ‘Django’ at least.

All right cool ;)

And then, It requires `MANIFEST.in` file on the project directory to specify which files you want to distribute:

```bash
include *.txt *.ini *.cfg *.rst
recursive-include myapp *.ico *.png *.css *.gif *.jpg *.txt *.js *.html *.xml
```

Without this file, templates of your application won’t be included the package. For more detail, refer [official doc about specifying the files to distribute](https://docs.python.org/3.3/distutils/sourcedist.html#specifying-the-files-to-distribute)

It’s over. After created `setup.py`, run this command to register this new package for development:

`python setup.py develop`
For more detail about setup.py, please refer another documents or packages. Python [Packaging User Guide](http://python-packaging-user-guide.readthedocs.org/) will help you. And I imitated setup.py of some another packages. Actually I haven’t read documents so much.

If you want to upload your package to PyPI. just register the application and upload:

```bash
python setup.py register
python setup.py sdist upload
```

From the second time, it’s enough to run the second line. Also you can refer the doc about uploading on Python Packaging User Guide

# 3. Way to run tests without projects
Basically django always requires ‘projects’ for all of actions. then how can we run tests? actually It’s easy, you can just use `django-admin.py` command and specify settings file for testing. First, create the settings for testing on the project root:

`touch test_settings.py`

And the contents of the file will be like this:

```python
INSTALLED_APPS = (
    'myapp',
)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
}
SECRET_KEY = "secret_key_for_testing"

```

Ya, it’s easy. Of cause you can put some additional settings to correspond to tests of your application. And this article about [optimizing your tests in Django](http://www.machinalis.com/blog/optimizing-your-tests-in-django/) will be helpful.

To run the test by using the setting, type this command at the project root:

`django-admin.py test --settings=test_settings`

# 4. Use tox

If you want the package to support multiple versions of Python or Django, It’s the best idea to use [tox](https://pypi.python.org/pypi/tox).

Ok, let’s consider a case which supporting two versions of Python, Python2.7 and Python3.3. Put a file name tox.ini on the package root:

`touch tox.ini`

And then, write setting like this:

```bash
[tox]
envlist = py27, py33, flake8

[testenv]
commands =
    pip install -e .
    django-admin.py test --settings=test_settings
```

To run those tests, install tox and type like this:

```bash
pip install tox
tox
```

Three bunches of tests will run. tests with Python2.7, Python3.3 and flake8 testing to check syntax of your codes.

For more about tox and flake8, refer the official documentations.

- [tox documentation](http://tox.readthedocs.org/en/latest/)
- [flake8](https://pypi.python.org/pypi/flake8)

# Conclusion
It’s over.

If you have some question or want to point out my mistake please Contact me on [twitter](http://twitter.com/itsphilipmutua). I’ll answer and fix this page as soon as I can.

For more detail about git, refer the [git official site](http://git-scm.com/).

Find out more by [visiting the project on GitHub](https://github.com/go).

[docs]: ../docs/7.5.0/index.md

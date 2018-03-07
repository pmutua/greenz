---
layout: post
title: How to Reset Migrations in Django 
  
tags: [tutorial]
author: author1

---

The Django migration system was developed and optmized to work with large number of migrations.Sometimes you might need to reset your migrations when you have undesirable results from your database. This tutorial is only if you are in development and you dont mind cleaning up your database.


Anyway, if you want to perform a clean-up, I will present an option in this tutorial.


**Scenario:**
The project is still in the development environment and you want to perform a full clean up. You don’t mind throwing the whole database away.

### 1. Remove the all migrations files within your project

Go through each of your projects apps migration folder and remove everything inside, except the
 `__init__.py ` file.

Or if you are using a unix-like OS you can run the following script (inside your project dir):


`find . -path "*/migrations/*.py" -not -name "__init__.py" -delete`


`find . -path "*/migrations/*.pyc"  -delete`


### 2. Drop the current database, or delete the `db.sqlite3` if it is your case.

`cd` to where `db.sqlite3` is located within your project  and type `rm db.sqlite3`.

### 3. Create the initial migrations and generate the database schema:


`python manage.py makemigrations`


`python manage.py migrate`



Now you have a new clean database schema.	


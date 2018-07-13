---
layout: post
title:  "How to Use Celery and RabbitMQ with Django - PART 2"
date:   2017-12-21
desc: "Qontinuation."
keywords: "Django,Celery,gh-pages,website,blog,easy"
categories: [Django]
tags: [Django,Celery]
icon: icon-html


---

## Table of Contents
<ul>
	<li>Installing RabbitMQ on Windows and Other OSs</li>
	<li>Celery Basic Setup</li>
	<li>Creating Our First Celery Task</li>
	<li>Starting The Worker Process</li>
	<li>Managing The Worker Process in Production with Supervisor</li>
</ul>



# Installing RabbitMQ on Windows and Other OSs
Unfortunately I don’t have access to a Windows computer to try things out, but you can find the installation guide for [Windows on RabbitMQ’s Website](https://www.rabbitmq.com/install-windows.html).

For other operating systems, check the Downloading and Installing [RabbitMQ on their Website](https://www.rabbitmq.com/download.html).


# Celery Basic Setup
First, consider the following Django project named mysite with an app named core:

```markdown
	mysite/
	 |-- mysite/
	 |    |-- core/
	 |    |    |-- migrations/
	 |    |    |-- templates/
	 |    |    |-- apps.py
	 |    |    |-- models.py
	 |    |    +-- views.py
	 |    |-- templates/
	 |    |-- __init__.py
	 |    |-- settings.py
	 |    |-- urls.py
	 |    +-- wsgi.py
	 |-- manage.py
	 +-- requirements.txt

 ```


Add the `CELERY_BROKER_URL` configuration to the `settings.py` file:

`settings.py`

`CELERY_BROKER_URL = 'amqp://localhost'`
Alongside with the `settings.py` and `urls.py` files, let’s create a new file named 

**celery.py**

```python
	import os
	from celery import Celery

	os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

	app = Celery('mysite')
	app.config_from_object('django.conf:settings', namespace='CELERY')
	app.autodiscover_tasks()
```

Now edit the `__init__.py` file in the project root:

`__init__.py`

```python
from .celery import app as celery_app

__all__ = ['celery_app']

```

This will make sure our Celery app is important every time Django starts.

<hr>

# Creating Our First Celery Task
We can create a file named tasks.py inside a Django app and put all our Celery tasks into this file. The Celery app we created in the project root will collect all tasks defined across all Django apps listed in the `INSTALLED_APPS` configuration.

Just for testing purpose, let’s create a Celery task that generates a number of random User accounts.

`core/tasks.py`

```python
import string

from django.contrib.auth.models import User
from django.utils.crypto import get_random_string

from celery import shared_task

@shared_task
def create_random_user_accounts(total):
    for i in range(total):
        username = 'user_{}'.format(get_random_string(10, string.ascii_letters))
        email = '{}@example.com'.format(username)
        password = get_random_string(50)
        User.objects.create_user(username=username, email=email, password=password)
    return '{} random users created with success!'.format(total)
The important bits here are:

from celery import shared_task

@shared_task
def name_of_your_function(optional_param):
    pass  # do something heavy
Then I defined a form and a view to process my Celery task:

forms.py

from django import forms
from django.core.validators import MinValueValidator, MaxValueValidator

class GenerateRandomUserForm(forms.Form):
    total = forms.IntegerField(
        validators=[
            MinValueValidator(50),
            MaxValueValidator(500)
        ]
    )

```


Then your view:

**views.py**

```python
from django.contrib.auth.models import User
from django.contrib import messages
from django.views.generic.edit import FormView
from django.shortcuts import redirect

from .forms import GenerateRandomUserForm
from .tasks import create_random_user_accounts

class GenerateRandomUserView(FormView):
    template_name = 'core/generate_random_users.html'
    form_class = GenerateRandomUserForm

    def form_valid(self, form):
        total = form.cleaned_data.get('total')
        create_random_user_accounts.delay(total)
        messages.success(self.request, 'We are generating your random users! Wait a moment and refresh this page.')
        return redirect('users_list')

```

The important bit is here:

`create_random_user_accounts.delay(total)`

Instead of calling the `create_random_user_accounts` directly, I’m calling `create_random_user_accounts.delay()`. This way we are instructing Celery to execute this function in the background.

Then Django keep processing my view `GenerateRandomUserView` and returns smoothly to the user.

But before you try it, check the next section to learn how to start the Celery worker process.

# Starting The Worker Process
Open a new terminal tab, and run the following command:

`celery -A mysite worker -l info`

Now we can test it. I submitted 500 in my form to create 500 random users.

The response is immediate:

Meanwhile, checking the Celery Worker Process:

```bash
[2017-08-20 19:11:17,485: INFO/MainProcess] Received task:
mysite.core.tasks.create_random_user_accounts[8799cfbd-deae-41aa-afac-95ed4cc859b0]

```


Then after a few seconds, if we refresh the page, the users are there:

If we check the Celery Worker Process again, we can see it completed the execution:

```bash
[2017-08-20 19:11:45,721: INFO/ForkPoolWorker-2] Task
mysite.core.tasks.create_random_user_accounts[8799cfbd-deae-41aa-afac-95ed4cc859b0] succeeded in
28.225658523035236s: '500 random users created with success!'

```

# Managing The Worker Process in Production with Supervisor
If you are deploying your application to a VPS like [DigitalOcean](https://m.do.co/c/074832454ff1) you will want to run the worker process in the background. In my tutorials I like to use Supervisord to manage the Gunicorn workers, so it’s usually a nice fit with Celery.

First install it (on Ubuntu):

`sudo apt-get install supervisor`
Then create a file named **mysite-celery.conf** in the folder: **/etc/supervisor/conf.d/mysite-celery.conf**:

```bash
[program:mysite-celery]
command=/home/mysite/bin/celery worker -A mysite --loglevel=INFO
directory=/home/mysite/mysite
user=nobody
numprocs=1
stdout_logfile=/home/mysite/logs/celery.log
stderr_logfile=/home/mysite/logs/celery.log
autostart=true
autorestart=true
startsecs=10

; Need to wait for currently executing tasks to finish at shutdown.
; Increase this if you have very long running tasks.
stopwaitsecs = 600

stopasgroup=true

; Set Celery priority higher than default (999)
; so, if rabbitmq is supervised, it will start first.
priority=1000

```

In the example below, I’m considering my Django project is inside a virtual environment. The path to my virtual environment is **/home/mysite/**.

Now reread the configuration and add the new process:

```bash
sudo supervisorctl reread
sudo supervisorctl update
```
If you are not familiar with deploying Django to a production server and working with Supervisor, maybe this part will make more sense if you check this post from the blog: [How to Deploy a Django Application to Digital Ocean](https://simpleisbetterthancomplex.com/tutorial/2016/10/14/how-to-deploy-to-digital-ocean.html).


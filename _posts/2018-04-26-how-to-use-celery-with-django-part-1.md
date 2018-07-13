---
layout: post
title:  "How to Use Celery and RabbitMQ with Django - Part 1"
date:   2018-02-04
desc: "Celery is an asynchronous task queue based on distributed message passing. Task queues are used as a strategy to distribute the workload between threads/machines. In this tutorial I will explain how to install and setup Celery + RabbitMQ to execute asynchronous in a Django application. To work with Celery, we also need to install RabbitMQ because Celery requires an external solution to send and receive messages. Those solutions are called message brokers. Currently, Celery supports RabbitMQ, Redis, and Amazon SQS as message broker solutions."
keywords: "Django,Celery,gh-pages,website,blog,easy"
categories: [Django]
tags: [Django,Python,Celery]
icon: icon-html
---

## Table of Contents
<ul>
	<li>Why Should I Use Celery?</li>
	<li>Installation</li>
	<li>Installing RabbitMQ on Ubuntu 16.04</li>
	<li>Installing RabbitMQ on Mac</li>
</ul>


canonical_url: http://docs.celeryproject.org/en/latest/getting-started/brokers/rabbitmq.html



<h2>Why Should I Use Celery?</h2>
<p>Web applications works with request and response cycles. When the user access a certain URL of your application the Web browser send a request to your server. Django receive this request and do something with it. Usually it involves executing queries in the database, processing data. While Django does his thing and process the request, the user have to wait. When Django finalize its job processing the request, it sends back a response to the user who finally will see something.</p>

<p>Ideally this request and response cycle should be fast, otherwise we would leave the user waiting for way too long. And even worse, our Web server can only serve a certain number of users at a time. So, if this process is slow, it can limit the amount of pages your application can serve at a time.</p>

<p>For the most part we can work around this issue using cache, optimizing database queries, and so on. But there are some cases that theres no other option: the heavy work have to be done. A report page, export of big amount of data, video/image processing are a few examples of cases where you may want to use Celery.</p>

<p>We don’t use Celery through the whole project, but only for specific tasks that are time-consuming. The idea here is to respond to the user as quick as possible, and pass the time-consuming tasks to the queue so to be executed in the background, and always keep the server ready to respond to new requests.</p>




# Installation
The easiest way to install Celery is using pip:

`pip install Celery`

Now we have to install RabbitMQ.

# Installing RabbitMQ on Ubuntu 16.04
To install it on a newer Ubuntu version is very straightforward:

`apt-get install -y erlang`
`apt-get install rabbitmq-server`

Then enable and start the RabbitMQ service:

`systemctl enable rabbitmq-server`
`systemctl start rabbitmq-server`

Check the status to make sure everything is running smooth:

`systemctl status rabbitmq-server`

Installing RabbitMQ on Mac
Homebrew is the most straightforward option:

`brew install rabbitmq`

The RabbitMQ scripts are installed into `/usr/local/sbin`. You can add it to your `.bash_profile` or `.profile`.

`vim ~/.bash_profile`

Then add it to the bottom of the file:

`
export PATH=$PATH:/usr/local/sbin
`

Restart the terminal to make sure the changes are in effect.

Now you can start the RabbitMQ server using the following command:

`rabbitmq-server`


[Continue To Read Part 2](http://127.0.0.1:4000/2018/04/26/how-to-use-celery-with-django-part-2/)
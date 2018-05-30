---
layout: post
title: Solving Docker permission denied while trying to connect to the Docker daemon socket
description: >
  In this tutorial I'm going to show you how to make a simple "Hello World" program.
tags: [tutorial]
author: author1
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---
Problem:
You are trying to run a docker container or do the docker tutorial, but you only get an error message like this:

```bash

docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.26/containers/create: dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.

Solution:
The error message tells you that your current user can’t access the docker engine, because you’re lacking permissions to access the unix socket to communicate with the engine.

As a temporary solution, you can use `sudo` to run the failed command as root.
However it is recommended to fix the issue by adding the current user to the `docke` group:

Run this command in your favourite shell and then **completely log out of your account and log back in** (if in doubt, reboot!):

```bash
sudo usermod -a -G docker $USER

After doing that, you should be able to run the command without any issues. Run `docker run hello-world` as a normal user in order to check if it works. Reboot if the issue still persists.

Logging out and logging back in is required because the group change will not have an effect unless your session is closed.










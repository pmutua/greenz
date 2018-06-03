---
layout: post
title: How To Install and Use Docker on Ubuntu 16.04
description: >

  Docker is an application that makes it simple and easy to run application processes in a container, which are like virtual machines, only more portable, more resource-friendly, and more dependent on the host operating system. For a detailed introduction to the different components of a Docker container, check out [The Docker Ecosystem.An Introduction to Common Components](https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components).

  There are two methods for installing Docker on Ubuntu 16.04. One method involves installing it on an existing installation of the operating system. The other involves spinning up a server with a tool called [Docker Machine](https://www.digitalocean.com/community/tutorials/how-to-provision-and-manage-remote-docker-hosts-with-docker-machine-on-ubuntu-16-04) that auto-installs Docker on it.

  In this tutorial, you'll learn how to install and use it on an existing installation of Ubuntu 16.04.
tags: [tutorial]
author: author1
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---


# Prerequisites

To follow this tutorial, you will need the following:

- 64-bit Ubuntu 16.04 server
- Non-root user with sudo privileges Initial Setup Guide for Ubuntu 16.04 explains how to set this up.)

<blockquote>
  Note: Docker requires a 64-bit version of Ubuntu as well as a kernel version equal to or greater than 3.10. The default 64-bit Ubuntu 16.04 server meets these requirements.
</blockquote>

All the commands in this tutorial should be run as a non-root user. If root access is required for the command, it will be preceded by `sudo`. [Initial Setup Guide for Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04) explains how to add users and give them sudo access.


# Step 1 — Installing Docker

The Docker installation package available in the official Ubuntu 16.04 repository may not be the latest version. To get the latest and greatest version, install Docker from the official Docker repository. This section shows you how to do just that.

First, add the GPG key for the official Docker repository to the system:


`$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

Add the Docker repository to APT sources:

`$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`


Next, update the package database with the Docker packages from the newly added repo:

`$ sudo apt-get update`



You should see output similar to the follow:


```
Output of apt-cache policy docker-ce

docker-ce:
  Installed: (none)
  Candidate: 17.03.1~ce-0~ubuntu-xenial
  Version table:
     17.03.1~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.0~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages



```

Notice that `docker-ce` is not installed, but the candidate for installation is from the Docker repository for Ubuntu 16.04. The `docker-ce` version number might be different.

Finally, install Docker:

`$ sudo apt-get install -y docker-ce`


Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it's running:

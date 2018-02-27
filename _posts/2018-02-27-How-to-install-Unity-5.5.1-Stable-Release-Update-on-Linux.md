---
layout: post
title: How to install Unity 5.5.1 Stable Release Update on Linux

description: > 
  Unity, a flexible and powerful development platform for creating multiplatform 3D and 2D games as well as an interactive experiences on 	 Linux. With Unity, you can target more devices easily, and with a single click you can deploy your game to mobile, VR, desktop, Web, 		Console as well as TV platforms.
  
tags: [tutorial]
author: author1

---

[Unity ](https://unity3d.com/) is a cross-platform game engine developed by Unity Technologies, which is primarily used to develop both three-dimensional and two-dimensional video games and simulations for computers, consoles, and mobile devices.




Furthermore, it’s a complete ecosystem for anyone who aims to build a business on creating high-end content and connecting to their most loyal and enthusiastic players and customersr.

Before we proceed with how to install unity, lets see some of the supported platforms, as well as updates to this release.ple:

**Supported Target Platforms For Linux**
The Unity Editor for Linux supports export to the following platforms:

- Linux, Windows as well as Mac Standalone
- Android, WebGL, Tizen as well as SamsungTV
- Legacy WebPlayer
- iOS project deployment (experimental in 5.5 build


> Note that your desktop machines needs a modern graphics card with vendor-supported graphics drivers (provided by NVIDIA, AMD, or Intel) for it to run on Linux.

See [release notes](https://unity3d.com/unity/whats-new/unity-5.5.1) for complete details.

##### How to install Unity 5.5.1f1 build update on Ubuntu 17.04, Ubuntu 16.10, Ubuntu 16.04, Ubuntu 15.04, Ubuntu 14.04

```bash
sudo apt-get install gdebi

wget http://beta.unity3d.com/download/f5287bef00ff/unity-editor_amd64-5.5.1xf1Linux.deb

sudo gdebi unity-editor_amd64-5.5.1xf1Linux.deb 

```

##### How to remove Unity from Ubuntu

```bash
sudo apt-get remove unity-editor

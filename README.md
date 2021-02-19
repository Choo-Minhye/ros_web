## Overview

This repo contains some examples regarding web-based tools for controlling a robot.

* navtest: Visualize 2D map & navigate the robot using mouse click
* teleop_test: Control the robot manually using the keyboard
* rosweb: Subscribe to and publish arbitrary topics & show live video feed from RGBD camera

## Robot-Side Setup

This guide assumes that you're using Kobuki with Orbbec Astra RGBD camera.

0. Install dependencies
```bash
sudo apt install ros-[version_name]-rosbridge-suite
sudo apt install ros-[version_name]-web-video-server
```

1. Run roscore

```bash
roslaunch kobuki_metapackage kobuki_navigation.launch
```

2. Run the rosbridge server

```bash
roslaunch rosbridge_server rosbridge_websocket.launch
```

3. Run the video streaming server

```bash
roslaunch astra_camera astra.launch
rosrun web_video_server web_video_server
```

## How to Use Tools

Press the link below or open the corresponding html file (except rosweb) in your web browser.

* [navtest](https://github.com/3watt/webtool-examples/raw/master/navtest.html) ([wiki](https://wiki.ros.org/nav2djs/))
* [teleop_test](https://github.com/3watt/webtool-examples/raw/master/teleop_test.html) ([wiki](https://wiki.ros.org/keyboardteleopjs/))
* [rosweb](http://labrom.eesc.usp.br/rosweb/) ([repo](https://github.com/EESC-LabRoM/rosweb))

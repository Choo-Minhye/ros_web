
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

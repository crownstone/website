---
layout: post
title: Robot Remote Control with ØMQ
description: 
category: 
tags: []
author: dominikegger
---
{% include JB/setup %}

# Robot Remote Control with ØMQ

In earlier blog posts we presented the Swarm Control App where we added
different robots to an Android app in order to control them remotely and
display their sensor data on the phone. However, this was only the first step;
what we want is to connect the robots to the Cloud where we process the sensor
data and send back remote commands to the robot.

As a little showcase we took a Romo 1.0, equipped it with an Android
smartphone and wrote an app which publishes the video from it's camera and
listens to remote commands. The camera video is sent to a server which
forwards the video stream to subscribed client(s). The clients in turn can
send remote commands back to the server which relays it to the Romo. The
message passing is done with [ØMQ](http://www.zeromq.org/), a high
performance, asynchronous message system for many different languages which
provides message queues, N-to-N connections, different messaging patterns, and
several messaging transports. On the server we are running node.js to forward
the ØMQ messages and provide the website for the web client.

{% youtube wCX6XXzhrCM %}

## Romo Brain

The source code of the app running on Romo can be found
[here](https://github.com/eggerdo/RomoBrain) and uses the
[RomoSDK](https://github.com/Romotive/Romo-SDK-Gen2) provided by Romotive. It
compresses the camera frames as 640 x 480 JPEG images and sends them encoded
in ØMQ messages to the server. It also subscribes to ØMQ messages containing
remote control commands which are decoded to control the Romo.

## Robot Server

On the server side we are running node.js. The node provides two channels for
video and two channels for command messages. The incoming channels uses the
Push-Pull, the outgoing channel the Pub-Sub pattern. Messages received on the
incoming socket are forwarded to all subscribers on the outgoing channel. In
addition, the node provides another outgoing channel on which every incoming
video message is published encoded as Base64. This stream was added to support
web clients and will be described in more detail later on. The source code can
be found [here](https://github.com/eggerdo/robot_server.node).

The Romo establishes two connections with the Robot Server. It connects to the
incoming video channel of the server to push video messages and subscribes to
the outgoing command channel to receive command messages. The messages are
designed such that the Subscriber can filter messages so that it only receives
messages it is interested in. The server on the other hand will process every
message.

## Remote Control Client

In order to control the robot and to show the flexibility of ØMQ we
implemented two different clients: an Android app and a web client. However,
there is no limit to the possible clients, since ØMQ comes in over 30
different programming languages.

### Android Client

The Android app to control the Romo over ØMQ can be found
[here](https://github.com/eggerdo/RoboTalk-User). It provides the possibility
to drive the Romo around and displayes the video stream of the Romo's camera
on the screen. It subscribes to the outgoing video channel of the Robot
Server, decodes the video message and displays it on the screen. In turn,
remote commands are encoded as a JSON string in a ØMQ message and pushed to
the server.

### Web Client

The Web Client used to control the Romo from a Web Browser is composed of a
node.js node which serves the HTML web page from a server and a bridge between
WebSockets and ØMQ. The web site uses JavaScript to encode command messages
and decode video messages. Because a website cannot make TCP connections,
WebSockets are used to send the ØMQ messages to the server serving the
website. There a python script provides a bridge between WebSockets and ØMQ to
connect to the Robot Server. The code for the web server and ZmqWebBridge can
be found [here](https://github.com/eggerdo/robot_ctrl.node).

## Performance

Performance of our setup looks quite well. To control the Romo we used an LG
Optimus 2x which delivered a video stream of about 20 fps. The RTT is about
100ms for a video message, and 60 ms for a command message. (This was measured
with an internet connection of 40 Mpbs down and 36 Mbps uplink and includes
encoding and decoding of the data in a ØMQ message as well as transmission to
and back from the server). As a result we get a frame rate of 20 fps on the
receiving side as well. However, using a slower internet connection will
significantly reduce the frame rate on the receiving side and reducing the
image size might be a good idea.





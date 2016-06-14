---
layout: post
title: Android and rosjava
description: 
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

# Android and rosjava

## Open source

![Random shot of desk]({{ site.url }}/attachments/rosjava_image.jpg){: .float-right }

coders and employees from Google have joined forces to create rosjava. This is
a pure Java implementation of [ROS](http://www.willowgarage.com/pages/software/ros-platform) (from Willow Garage). ROS shouldn't be seen as a solution for
all and everything. So, for what can it be useful? Under other things, it
provides:

  * utilities for robots to make it easier to visualize, compress and communicate data
  * basic data processing software
  * drivers for devices of which you might like to address their data (a famous example is the Kinect).

Enough to be really useful! However, there is something that is a little bit a
negative point. ROS might be overwhelming if you just start with your first
robot or Android project. It can be quite a pain to figure everything out. So
here we go with a sort tutorial where we will guide you around (undocumented)
issues that will come up.



##  Documentation

First of all, you definitely need to look at the [online documentation of the android_core](http://docs.rosjava.googlecode.com/hg/android_core/html/building.html) where you will discover that a lot of documentation online is outdated. The
android core for example does not make use of the "rosmake" utility, but of
the "gradlew" build utility. If you have not installed ROS yet, feel free to
do so. The directions in this blog post will target Ubuntu Precise Penguin
(12.10). You can install using `sudo aptitude install ros-fuerte-ros`. The
first thing I have to warn against is installing stuff yourself using
mercurial.



##  Setup

Feel free to setup the system how you want of course. I tend to use multiple
Eclipse workspaces to keep code together that belongs together. So, a
`~/myworkspace/nonequilibrium` for statistical physics code, a
`~/myworkspace/android` for Java code for Android, a `~/myworkspace/arduino`
for Arduino related code, a `~/myworkspace/nodejs` for node.js code, and
naturally for ROS: mkdir ~/myworkspace/ros && cd ~/myworkspace/ros



Please, follow closely the [rosws
tutorial](http://www.ros.org/doc/api/rosinstall/html/rosws_tutorial.html ) to
create the proper ROS workspace:

`sudo apt-get install python-pip`

`sudo pip install -U rosinstall`

`rosws init`

`source setup.bash `

And copy that line indeed to your `~/.bashrc` file as recommended



Using rosws we can "merge" code from different locations. This will only add
references to the given code or repositories, not the code itself.

`rosws merge http://android.rosjava.googlecode.com/hg/.rosinstall`

`rosws merge http://rosjava.googlecode.com/hg/.rosinstall`

`rosws merge /opt/ros/electric/.rosinstall`



Now to get the code actually and check the results:

`rosws update`

`rosws info`



`# Expected output:  
workspace: /home/anne/myworkspace/ros  
ROS_ROOT: /opt/ros/fuerte/ros  
Localname       & nbsp;        S SCM  Version-Spec UID  (Spec)  URI  (Spec)
[https://...]  
\\--------- &n; bsp;            &n; bsp; - ---- ------------ -----------
\-------------------------  
ros java_core           &nb; sp;   hg   default      7cfb92045e17
code.google.com/p/rosjava  
/opt/ros/electric/stacks &nb; sp;            &nb; sp;            &nb; sp;  
/opt/ros/electric/ros    ;              ;              ;  
google   &nbs; p;            &nbs; p;    hg   default      736ac32a2ede
code.google.com/p/rosjava.google  
android_core  &n; bsp;            hg   default      9327ca89c140
code.google.com/p/rosjava.android`

Pay attention that `ROS_ROOT` is not empty. Eventually check everything using
`env | grep ROS`. You can also use `rospack list-names` to return a list of
all packages.

##  Hurdle 1: Forgetting to source script

We will try to build our first code:

`roscd rosjava_core`



roscd: No such package 'rosjava_core'

If an error like this happens and `rosjava` is actually in the `rosws info`
list, then you will need to call the script in the ROS workspace.

`source setup.sh`

`roscd rosjava_core`

`./gradlew install`

##  Hurdle 2: Refer to Android

And then similar the other code:

`roscd google`

`./gradlew install`

`roscd android_core`

`./gradlew debug`



Execution failed for task ':android_acm_serial:updateProject'. A problem
occurred starting command 'android'.

This fails for me because it cannot find `android. `Now you will think that
you only need to update your environmental $PATH, however, it is not just bash
that does not find the android binary, but it is `ANT`, the Java build system.
Hence you will need to add this to your ~/.bashrc file:

`export PATH=$PATH:/opt/android-sdk- linux_x86/tools`

`export CLASSPATH=$CLASSPATH:/opt/android-sdk-linux_x86/tools`

`sudo killall java `

Make sure the `JVM` is dead. Close all neat Java programs such as Eclipse and
JabRef beforehand. And now run `./gradlew clean debug` again.



On my system it still complains about the fact that a _target needs to be
specified_, but for now we will build one project that does not have so many
dependencies:

`./gradlew android_tutorial_pubsub:clean android_tutorial_pubsub:debug`

##  Hurdle 3: Set Android target

There is a problem about the absence of the `build.xml` file on building the
files straight from the repository.

Buildfile: build.xml does not exist!

The solution is simple:

`cd android_honeycomb_mr2`

`android list targets`

Pick the one that is recent enough for honeycomb, in my case that is number 3.

`android update project --target 3 --path .`



You can pick `android_tutorial_teleop` afterwards for example for which you
will need to do the same. I am curious in streaming the camera from my
smartphone to my computer for now: `android_tutorial_camera`. Installing on
your smartphone is easy by just connecting your smartphone via USB and after
the build `ant installd` (where the d stands for the debug version).





##  Hurdle 4: Display image

According to the [ROS wiki](http://www.ros.org/wiki/image_view) image_view
resides apparently in the pipeline package. We also install rxgraph which is a
nice utility to visualize our architecture and last, but not least we will
need to be able to get compressed images (transport plugins):

`sudo aptitude install ros-fuerte-image- common ros-fuerte-image-pipeline`

`sudo aptitude install ros-fuerte-rx `

`sudo aptitude install ros-fuerte-image- transport-plugins`



Now on your PC start the ROS core and note down your IP address:

`roscore`

`sudo ifconfig`



Start the **CameraTutorial app** on your smartphone and connect to the IP
address you just wrote down, e.g. http://10.10.1.133:11311. You can check
beforehand if you can reach your PC from your smartphone using the browser on
your phone (however, Opera Mobile couldn't find my server for some reason, so
don't trust such a check too much). Needless to say, use an IP address and not
some local name only known to your computer. Finally, start the viewer on the
PC side:

`rosrun image_view image_view image:=/camera/image compressed`



Done! Proof can be found in the form of the picture (from the camera on my
smartphone) at the top of this blog post obtained by right-clicking in the
image viewer on my PC.



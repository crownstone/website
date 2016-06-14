---
layout: post
title: Localization
author: remcotukker
description: 
category: 
tags: ["localization", "slam"]
---
{% include JB/setup %}

# Localization

This is a follow-up on the earlier post about
[SLAM]({{site.url}}/2012/02/28/a-brief-story-of-slam/). Localization
is inherent to SLAM if the system is working perfectly, but that usually requires
expensive sensors like laser range finders and lots of computing power. As we
envision cheap and expendable robots, we would like to know whether reliable
localization is also possible in a simpler way.

For outdoor robots, the solution is easy: existing maps with GPS (and in the
near future, [Galileo](http://www.esa.int/esaNA/galileo.html)). This is the
approach that is used for [Fireswarm](http://fireswarm.nl/). For indoor
robots, such a simple, almost luxurious solution is not available,
unfortunately. Thus, we have to rely on a number of sensors, like a compass,
gyroscope and distance sensors. There is one sensor that can really give a lot
of information for almost no money though: a camera. Can we use something like
a webcam for robust SLAM?

##  Visual SLAM

In fact, this has already been achieved with
[PTAM](http://www.robots.ox.ac.uk/~gk/PTAM/). Unfortunately, PTAM and its
dependencies have not been maintained the past two years. The result is
software that is hard to get working (especially on non-standard platforms
such as smartphones) and does not include the latest developments in SLAM
algorithms, especially regarding loop closing and bundle adjustment.

{% youtube 2zZ4MrcAqNQ %}

This means we have work to do! First of all, we have to decide whether we can
make adaptations to the environment. Markers and so on make the task easier,
but may not be acceptable in every application. A map that is known beforehand
also solves part of the task: most of the mapping part of the SLAM algorithm.
Of course, we should solve the localization task in the worst-case scenario of
an unknown dynamic environment.

##  Ceiling odometry



As a start, we are building a simple 2d demo. We can use a camera to look at
the ceiling and use this video stream to estimate where we have walked. The
first step is to detect and track features on the ceiling. This may seem easy,
but to find stable features for tracking is easier said than done. To track
these features and find out where they moved, we can use the iterative Lucas-
Kanade method*. [This method](http://docs.opencv.org/modules/video/doc/motion_analysis_and_object_tracking.html) is built into OpenCV and
gives good results.



Then, we can calculate the
[homography](http://en.wikipedia.org/wiki/Homography) between the old and new
locations of the features. The homography is a matrix describing the
transformation between the coordinates. Because the features are all on the
same stationary plane, the homography matrix actually describes how the camera
has moved. Again, OpenCV has [a function](http://docs.opencv.org/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html?highlight=findhomography#cv.FindHomography) to do all the dirty work for us, including
[RANSAC](http://en.wikipedia.org/wiki/RANSAC) for outlier rejection. If I get
around to working on this a bit more, this demo will soon be available as an
app for Android!



*Alternatively, we can use [phase correlation](http://en.wikipedia.org/wiki/Phase_correlation), which is based on a Fourier transform over the old and new images. OpenCV only includes a function to use this method for translations, but it has been shown that it can also be used to find rotations. While initial tests did not give great results, I would like to look into this further, as it seems to be a good method to quickly use all the information in an image to estimate rotation and translation.





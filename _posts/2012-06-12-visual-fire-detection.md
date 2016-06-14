---
author: bartvanvliet
layout: post
title: "Visual fire detection"
description: 
category: 
tags: [fireswarm]
---
{% include JB/setup %}

# Visual fire detection

May 22 we had a second sensor test flight.
With this flight, we could test the improved payload modules and this time we did get usable images from the downwards facing camera.
With these images we could try out some visual fire detection algorithms.


## Color

The first algorithm simply filters by color.

![Fire detected by color at the edges of the fire. The center is so bright that the pixels are over saturated (white).]({{ site.url }}/attachments/visual_fire_detection_color1.png "Fire detected by color at the edges of the fire. The center is so bright that the pixels are over saturated (white)."){: style="width: 800px"}

![Fire detected by color at the top center (few pixels at the helicopter). The yellow truck (down left) is also marked as fire and thus a false positive.]({{ site.url }}/attachments/visual_fire_detection_color2.png "Fire detected by color at the top center (few pixels at the helicopter). The yellow truck (down left) is also marked as fire and thus a false positive."){: style="width: 800px"}

The color filter will result in many false positives and we will never be able to trust on color alone.

## Flicker

The second algorithm tries to find flickering pixels: pixel values that go up and down over time.
The camera recorded images in bursts of 8 images, here is such a burst of a very small fire:

![Burst of 8 images of a small fire (at the helicopter).]({{ site.url }}/attachments/visual_fire_detection_flicker1.gif "Burst of 8 images of a small fire (at the helicopter)."){: style="width: 400px"}

When we check for flicker and threshold the results, we get:

![Flicker detection found the fire, but also many false positives.]({{ site.url }}/attachments/visual_fire_detection_flicker2.png "Flicker detection found the fire, but also many false positives."){: style="width: 800px"}

The flicker detection also has many false positives.
This is possibly caused by the motion of the plane, resulting in movement of pixels over the image.
The moved pixel can be replaced by a pixel that has very different values.
If this happens more often over the burst, it will be seen as a flickering pixel.

## Optic flow

To be able to compensate for the movement, we need to calculate the optic flow.
We followed the algorithm as described in [Real-Time Quantized Optical Flow](http://flohauptic.googlecode.com/svn/trunk/optic_flow/docs/articles/Camus%20-%2097%20-%20Real-Time%20Quantized%20Optical%20Flow.pdf).
This resulted in very noisy flow fields, which was caused by lack of texture in certain parts of the images.
We filtered out those flow vectors by checking the difference of the possible displacements.
If the difference is large enough, we assumed one displacement matched a lot better than the others and thus there must be enough texture.
The result is shown in the image below.

![Calculated optical flow of a big fire. Top left: original image, top center: textureness, top right: optic flow, bottom: optic flow drawn as arrows]({{ site.url }}/attachments/visual_fire_detection_flow.gif "Calculated optical flow of a big fire. Top left: original image, top center: textureness, top right: optic flow, bottom: optic flow drawn as arrows"){: style="width: 800px"}

There is still some noise in the flow vectors, especially if the exposure time of the camera suddenly changes.
However, once the exposure is under control, the noise will be low enough to use the optic flow to compensate and maybe even find moving smoke or fire.

## Motion compensation

In the images below you can see results when we compensated for average motion.

![Image burst compensated for average motion.]({{ site.url }}/attachments/visual_fire_detection_motion.gif "Image burst compensated for average motion."){: style="width: 400px"}

![Color and flicker detection on images compensated for motion. This removes a lot of noise for the flicker detection.]({{ site.url }}/attachments/visual_fire_detection_combined.gif "Color and flicker detection on images compensated for motion. This removes a lot of noise for the flicker detection."){: style="width: 800px"}

There are still more features that we can extract from the images, so far the results are promising and we trust that we can detect fire with the color camera.


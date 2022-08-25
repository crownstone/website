---
layout: post
title: "Attaching a MicroView to the Crownstone"
description: "Monitoring power consumption and graphing stuff using a MicroView attached to a Crownstone."
category: 
tags: [bluetooth low energy, internet of things]
author: bartvanvliet
---
{% include JB/setup %}

# MicroView and Crownstone
![Crownstone with attached MicroView]({{ site.url }}/attachments/microview.JPG "Crownstone with attached MicroView"){: style="width: 680px"}

Last week I figured it would be nice to attach the [MicroView](http://learn.microview.io/intro/general-overview-of-microview.html) to the Crownstone, so that it could display some info you normally see on your phone.
Since the Crownstone can only supply a low amount of power, the first thing I had to do is figure out how much power the MicroView consumes. I couldn't find this online quick enough, so I simply measured it: about 12mA at 3.3V. This should be low enough for the Crownstone to supply!

![Schematic]({{ site.url }}/attachments/microview_schematic.svg){: style="width: 680px"}


# Display the data
Next, I experimented with the widgets, these are provided by the MicroView library and can display a number nicely. It turned out you can have two next to eachother plus some text above, perfect :).
I wrote a simple input parser that can parse arrays of integer. Then, I edited the code of the Crownstone to output temperature and RSSI values in the simple format.

After this worked, I figured it was time to show a graph of the current consumption of the light bulb that is connected via the Crownstone. Since it can sample the current at about 10kHz, you can actually see the 50Hz AC curve that comes out of the [wall socket](http://en.wikipedia.org/wiki/AC_power_plugs_and_sockets).
To be able to switch between the different kinds of info, I added a simple push button to the MicroView.

# Video
In the video you see it all working. As soon as I connect to the Crownstone, the RSSI starts to update. Then I click the button and ask for a sample of the current graph.

{% youtube JS4tf2v2Wg4?t=85 %}

# Code
You can find the code I made for the MicroView at our [github](https://github.com/dobots/crownstone-micro-view). And the Crownstone code is available under the [bluenet repository](https://github.com/crownstone/bluenet).

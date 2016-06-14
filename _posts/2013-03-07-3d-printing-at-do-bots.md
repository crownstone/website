---
layout: post
title: 3D printing at DoBots
description: 
category: 
tags: []
author: marchulscher
---
{% include JB/setup %}

# 3D printing

The [Snakebot Project]({{ site.url }}/2012/07/26/snakebot-project/) showed us the benefits of 3D printing when designing a
robot. In particular, 3D printing allows for quick prototyping of parts with
great accuracy and strength. This lead us to look for a 3D printer of our own,
to aid us in building Dotty.

##  Available printers

Due to the fact that more and more people are into designing and making things
for themselves, 3D printers have become a widespread phenomenon among makers.
Open-source printers and schematics can easily be found online for anyone who
is interested in building one.

The [reprap](http://www.reprap.org) community is one of the largest, dedicated
to open-source 3D printing and provided us with numerous insights in
performance criteria, robustness and printing volumes. The idea behind reprap
is that people can help eachother by printing parts for new 3D printers. For
anyone eager to learn about 3D printing, the Reprap wiki is one of the best
places to start.

In the end we found a local printer manufacturer
[felixprinters](http://www.felixprinters.com) that could supply us with all
necessary parts and instructions to build our own.

![Felix printer]({{ site.url }}/attachments/3d_printer_0.jpg "Felix 3D printer")

##  Printing

One of the first things we noticed when printing is that calibration is
everything. The smallest of offsets in any one of the axes will result in
subpar prints or even total failures.

Over the course of printing our first parts, we saw gradual improvement. Both
due to our own tweaking to the calibration mechanics and adjustments to the
printing parameters in the software host.

![Printer calibration]({{ site.url }}/attachments/3d_printer_1.jpg "Fial!")


Parameters such as bed temperature, fill ratio and nozzle temperature all
influence the outcome of the print job. The bed temperature in particular
caused a couple of botched printing jobs. Set the bed temperature too low and
the print will contort due to the heat gradient. Set it too high and the print
will sink a little due to sagging at the bottom. In the end, a bed temperature
of 65°C provided us with good results. Tweaking all printing parameters is a
good way to gain insight in the working of the machine.

Another thing we needed to get used to was the printing speed. Depending on
the complexity, even small objects can take up to half an hour to complete.
Printing this cat for instance took upwards of two hours.

![Printed cat]({{ site.url }}/attachments/3d_printer_2.jpg "Printed cat")

##  CAD Programs

To create our own parts, we need to model them in a 3D CAD program. Luckily
there are multiple open-source CAD programs available. You should distinguish
between solid modeling or shell modeling, the former being more geared towards
modeling real solid objects.

One of the more commonly used solid modelers is "openSCAD". Instead of editing
a 3D object by direct manipulations, this modeler uses an input that describes
the model form by lines of code. This has as added bonus that it is easy to
alter any object easily to fit different specifications, or to add options
with the change of a single variable.

![Dotty components]({{ site.url }}/attachments/3d_printer_3.jpg "Dotty components")

This approach is particularly useful to people that are used to programming,
of which we have plenty here at the office. Other popular modeling options
include "Blender" and Google's "Sketchup", though these are shell modeling
programs and require model closing before it can be used as a printable file.

##  Dotty

We intend to use our newly found printing toy to make casings and frames for
the [Dotty]({{ site.url }}/2012/08/26/the-dotty-robot). Right now we're trying out multiple variants, so be sure
to check back here when we have more to show you.



---
layout: post
title: Snakebot Project
description: 
category: 
tags: []
author: jannyramakers
---
{% include JB/setup %}

# Snakebot Project

![Snakebot animation]({{ site.url }}/attachments/snake_example.png){: .float-right} 

Over the past semester, we have been working with a group of students from the Hogeschool Rotterdam (University of Applied Sciences).

The assignment: design a robot that is capable of locomotion on land, in shallow water, on sea beds and on river banks.

The result: a functioning 1,5m SnakeBot prototype.

##  Why a snake?

One of the use cases that we have in mind for our swarm robots is
environmental monitoring. Swarms of unobtrusive, expendable robots canvassing
forests, rivers and seas, keeping an eye on water levels and air quality.

One acute problem to solve in The Netherlands is the overgrowth of
cyanobacteria (blue-green algae) that poison recreational waters. These
bacteria can multiply very quickly, so it is important to keep a close eye on
lakes, and quickly detect and fight growing bacterial colonies.

So our swarm robots must be able to move through difficult terrain, such as
shallow water. Wheeled vehicles or big boats are out of the question. Why not
take a hint from mother nature, and copy the snake design?

##  3D printing

![3D Printing]({{ site.url }}/attachments/snake_printing1.jpg){: .float-right}) 

The students designed a
snake robot which is made up of 11 segments. Each segment (exept for the
head/tail) contains either a battary, or two servos. Gears were added to
transfer power from the relatively light servos to move the relatively heavy
snake joints. The head segment very appropriately contains the 'brain', in the
shape of an Arduino Uno.

The segmented approach makes it possible to assemble longer and shorter
snakes.

The segments were 3D printed, and covered with a plastic coating to make them
water proof. None of the DoBots employees had ever used a 3D printer before, so
this project was also a valuable learning experience for us! We're now
seriously considering using the 3D printer to expand some of the off-the-shelf
robots that we use in our experiments.

For pictures, videos and and account of the printing-and-assembling process, [see the project blog](http://jelkevandersande.nl/projecten/snakebot-project/) by one of the students.

The whole snakebot now cost us around 500 euros, but we're aiming to bring to
price down even further, so that it becomes financially possible to introduce
(swarms of) snakes in natural areas.

##  Next steps

![Snake components]({{ site.url }}/attachments/snake_printing2.jpg)
Over the next months,
we will work hard to improve the prototype. We want to make the segments
smaller, so that the robot itself becomes smaller, too. We would like to place
the battery inside the servo-segment, so that there is less variation between
the segments, making mass-production easier.

Further, our snake still needs sensors. We are currently testing all sorts of
small sensors. In the next version, we'll decide which sensors we install.

Also, we wil teach the robot to move in an effective way. We're researching
reward mechanisms, so that the robot can learn by itself which movements are
useful in which situation.

Keep an eye on our blog for updates!

Do you think that working on our snakebot might be an interesting project for
you? We can always use good interns with a background in computer science,
(technical) informatics, electrical or mechanical engineering, so don't
hesitate to give us a call!



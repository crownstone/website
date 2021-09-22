---
layout: page
title: VolkerWessels
header: VolkerWessels
description: "Crownstone Use Case at VolkerWessels"
markdown: true
background-image: banner-office
permalink: use-case/volkerwessels/
---
{% include JB/setup %}

# Internet of Things

The Crownstone infrastructure can be used in smart offices for sustainability and communication. It has been integrated
with the [Yodiwo platform](https://www.yodiwo.com/theplatform/). The Yodiwo platform contains a graphical user 
interface, called [Cyan](https://tcyan.yodiwo.com/login), in which development and deployment can be done in a 
visual style with graphs. Network devices, cloud services, analytics are blocks that all can be linked together in
a graphical user interface. The Yodiwo platform also contains a hardware device (IoT Fog Gateway) that can function 
as a gateway to and from the premises of a building. 
The architecture of Yodiwo is visualized in the following picture.

![Yodiwo overview]({{site.url}}/attachments/use-case/yodiwo-overview.png){: style="max-width:90%;" .img-center }


# Crownstone integration

The Crownstone integration has two parts. The first part is the graphical user interface. The second part is a 
USB device that can be plugged into the Yodiwo hub.

## Graphical user interface

First, components have been created that can be used in the 
graphical user interface. Those components are shown in the next picture.

![Yodiwo and Crownstone]({{site.url}}/attachments/use-case/yodiwo1.png){: style="max-width:90%" .img-center }

Crownstone has created several graphical user elements and the software behind it to control Crownstones from the
Yodiwo interface or read sensor data. The software that is behind those elements is written in Python and can be
found at the [yodiwo-crownstone-node](https://github.com/crownstone/yodiwo-crownstone-node) repository. This code
makes use of the [yodiwo-python-node](https://github.com/crownstone/yodiwo-python-node), a node written in Python 
that accesses the Yodiwo cloud services using Yodiwo's [Plegma API](https://docs.yodiwo.com/doc/apis/plegma/).

## Crownstone USB dongle

Second, a dongle can be plugged into the Yodiwo IoT gateway. The reason to use a Crownstone USB dongle rather than a 
gateway with a Bluetooth stack is threefold:

* The Bluetooth stack on a gateway is often not really robust. A common stack is "bluez" and for
example Android has developed "bluedroid" because of quality issues with "bluez". Although Android is using
"bluez" again, its cross-platform stability and performance is still not what it can be. 
* The diversity of Bluetooth devices is such that having a Bluetooth stack is only part of the development. For
each device a set of services and characteristics has to be written and read, in-band encryption implemented, and 
all these services and characteristics have custom protocols with respect to the order in which they have to be accessed.
There is not yet standardization with respect to this.
* To maintain a standard Bluetooth Low Energy connection - to one of the Crownstones - introduces additionally latency with respect to the
remaining Crownstones. By implementing the Bluetooth stack including our mesh directly on the Crownstone USB dongle
we can immediately send messages into the mesh. This means lower latencies.

![USB dongle]({{site.url}}/attachments/use-case/usb-dongle.png){: style="max-width:40%" }
![USB dongle]({{site.url}}/attachments/use-case/usb-dongle1.png){: style="max-width:40%" }

Note, the [USB dongles](https://shop.crownstone.rocks/products/crownstone-usb-dongle) can be obtained from the webshop, but
should only be bought in the context of a project.

# VolkerWessels Services

VolkerWessels has with Crownstones integrated into the Yodiwo IoT platform the abilities to offer the following
services to their customers:

* Very quick roll out of energy monitoring solutions for big corporate clients. Deploying the software, and rolling
out new software updates can all be done from the Yodiwo graphical user interface. After installing Crownstones at
site and placing a Yodiwo gateway, the software rollout is basically just the press of a button.

* Localization information of people within offices can now be sent to the Yodiwo platform. The people run the normal
Crownstone app. The "admin" of a building defines rules like the following:

  * To allow people to turn on/off lights based on their presence.
  * To set time schedules for printers, coffee machines, and monitors, for instance to switch them off at night.
  * To monitor particular appliances but disallow anyone to actually switch them off, or even set a warning signal if an 
appliance is switched off.

* Localization information of people can also be synchronized through the Yodiwo platform with meeting room schedules. Moreover, if people are not present in the meeting room it is possible to cancel the registration so someone else can make use of the room.


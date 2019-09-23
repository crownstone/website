---
layout: page
title: New Hardware, the Crownstone built-in One
header: New Hardware, the Crownstone built-in One
description: The Crownstone built-in One is a smart switch, dimmer, and positioning system in one. The One contains improvements on the Zero with respect to form factor, switchcraft, antenna design, and dimming.
group: Landing
permalink: built-in-one/
markdown: true
---

{% include JB/setup %}

# Crownstone Built-in One

We have a new version of the Crownstone! The Crownstone built-in One! 

![Crownstone built-in One]({{ site.url }}/attachments/builtin-v2.png){: .img-center}

First of all, the current version of the Crownstone Zero already has a lot of the capabilities that this new version 
has as well. If we create a list with the components on board and their function of both versions, there will be a 
lot of the same items:

* insulated gate bipolar transistors: a dimmer of incandescant and LED lights
* relay: a switch up to 16A 
* operational amplifiers: current and power measurements
* a Bluetooth Low Energy chipset: control and indoor positioning using signal strengths of messages from smart devices
* integrated power supply: power the dimmer, the relay, and the chip

![Crownstone built-in One PCB]({{ site.url }}/attachments/builtin-one-pcb.png){: style="width: 50%"}{: .img-center}

So, what is the difference? 

* the form factor is slightly different to fit (a part of) the utility boxes in Germany
* a plastic extrusion near the connectors to reduce metal fatigue due to repeatedly inserting wires
* a larger capacitance which boost the integrated power supply to allow for switchcraft (see below)
* a three stage current measurement circuit to reduce 50Hz interference
* compatibility with both 110V and 240V, plus both CE and FCC compliance
* a ten pins connector for GPIO (see Crownstone Inside)
* a metal antenna for a better signal-to-noise ratio across all BLE advertising channels
* a thermal fuse across both the IGBTs and the relay
* an improved IGBT gate driver to be able to dim more powerful lights

# Switchcraft

Switchcraft is how we call the combination of using an ordinary light switch with the Crownstone simultaneously. 

![Switcraft]({{ site.url }}/attachments/switchcraft.png){: .img-center }

It's operation is actually quite simple. Both outgoing poles of the switch are shorted. Due to traveling time of the
switch there is a fraction of time that there is no connection at all. In other words, we have made a pulse switch
from an ordinary switch. 

At the Crownstone we measure the incoming voltage curve very frequently (in the kilohertz range). This means we can
detect if the power supply drops for that fraction of time. The Crownstone firmware detects the switch with an
algorithm and subsequently switches the light (or any other device).

The caveat is that the Crownstone has to be powered on during this period with a temporary power supply. There is no
space to fit a battery inside. Hence, we use capacitors. The Crownstone built-in One has a capacitor that is able to
power it for up to 80 milliseconds. This is enough time to prevent a reset. 

Very astute observers might note that it is possible to detect a switch even through a reset. However, this is very
involved and potentially leads to many false positives. It would e.g. require the Crownstone to measure the 
temperature to see if it is a cold boot versus a warm boot. However, there are plenty of other situations in which a
reboot might happen. For example, after a firmware upgrade, after a configuration change, or after a momentary glitch
in the grid. After a power outage in your city you do not want all your lamps to be on. For more on Switchcraft we
refer to the [installation instructions]({{ site.url }}/installation).

# Crownstone Inside 

Crownstones are integrated in products of innovative companies, called Crownstone Inside. For such partners there is no special Crownstone
development kit necessary anymore!
For product integration (or for electronic 
enthusiasts) the new version comes with a place where a connector can be mounted. 
This connector is a so-called board-to-board connector of which the specifications are the following:
1.) a dot pitch of 0.1 inch, 2.) 10 pins, 3.) 2 rows, and 4.) SMD mount. An example of such a connector is the Sametec
[TSM-105-01-T-DV](https://nl.farnell.com/samtec/tsm-105-01-t-dv/connector-header-10pos-2row-2/dp/2578718).


# Internationalization

The Crownstone built-in One can be used internationally for grids that operate on 110V and grids that operate on
240V. The One is certified both for CE and FCC. This means that it can be used (and sold) both 
in Europe as well as in the United States.




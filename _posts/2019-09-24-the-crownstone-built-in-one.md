---
layout      : post
title       : "The Crownstone Built-in One."
description : "The Crownstone Built-in One, it is not only a switch, dimmer, power monitor, but it also supports switchcraft."
tags        : [crownstone, new product, built-in, built-in one, switch, dimmer, switchcraft]
author      : annevanrossum
picture     : attachments/blog/builtin_one.jpg
excerpt     : "The Crownstone Built-in One supports switchcraft, the simultaneous use of an ordinary light switch with the digital control from your smartphone."
---
{% include JB/setup %}

# Crownstone Built-in One

After months and months of hard work by our extended team, Peet van Tooren, Anton Montagne, the engineers from [Van Mierlo Ingenieursbureau](https://www.vanmierlo.com/), 
and many people from the packaging, manufacturing, and certification companies, we present: the **Crownstone Built-in One**!

![Crownstone Built-in One]({{ site.url }}/attachments/blog/builtin_one.jpg)

So, what's new with this Crownstone version? Many things! 

* The form factor is slightly different to fit (a part of) the utility boxes in Germany.
* A plastic extrusion near the connectors to reduce metal fatigue due to repeatedly inserting wires.
* It has larger capacitors, which boost the integrated power supply to allow for switchcraft (see below).
* A three stage current measurement circuit to reduce (50 Hz) interference.
* Compatibility with both 110V and 240V, plus both CE and FCC compliance.
* A ten pins connector for GPIO (for product integration).
* A metal antenna for a better signal-to-noise ratio across all BLE advertising channels.
* A thermal fuse across both the IGBTs and the relay.
* An improved IGBT gate driver to be able to dim more powerful lights.

![Built-in One Close-up]({{ site.url }}/attachments/blog/builtin_one_closeup.jpg)

Read more on the new Crownstone Built-in One on the [Crownstone website](https://crownstone.rocks/built-in-one/). If 
you have the previous edition of the Crownstones, know that you are not left in the cold though! You can seamlessly
use the new and the old Crownstones together.

<a href="https://shop.crownstone.rocks/products/built-in-crownstone" class="myButton">Get the One!</a>

Note that you still will be able to use the existing built-in Crownstone, the Crownstone Built-in Zero. Currently, we
are running all kind of compatibility tests. The Crownstone One comes namely with new firmware. One of the most 
interesting features is instant switching via secure broadcasts. The reduced latency is very sweet. For example, when
giving a voice command through Alexa ([UK](https://www.amazon.co.uk/Crownstone/dp/B07KQ1WC96), [DE](https://www.amazon.de/Crownstone/dp/B07KQ1WC96), [US](https://www.amazon.com/Crownstone/dp/B07KQ1WC96)), the Crownstone switches before you get the confirmation beep from Alexa! 
In our deep dive on the bootloader (see section below, we will go into details on why this process
takes quite some time).

# Technical dive

Our purpose with Crownstone is to create a product that is seamless in its use. However, to get to a product that can be
used without thought, much thought has to be put into it! Let's take the opportunity and dive into two technical aspects 
of such a smart product. The first topic is the "bootloader", the second topic is "dimming".

# Bootloader

Our team is not just the few heads as shown at the bottom of an email like this. There are many people contributing to
our success who can be found on our [team page](https://crownstone.rocks/team/). Naveen has been on our team to work
on the so-called bootloader. On a device like the Crownstone (and on a computer in general) before application code
can run, we need a small program that starts the application. This program [boots](https://en.wikipedia.org/wiki/Booting)
the computer. The verb booting seems to refer to the saying "to pull oneself up by one's bootstraps" and some say it
comes from a story about the fictional [baron Munchausen](https://blogs.loc.gov/international-collections/2017/08/the-tall-tales-of-baron-munchausen/) who supposedly pulled himself out of a swamp. The details aren't right though,
he pulled himself out (including his horse) using his pigtail. Anyway, it's the code that is started before all the
other code. 

On the Crownstone the bootloader has another very important function. It is able to receive new firmware updates
"over the air". New functionality can arrive through your smartphone onto the Crownstone device. This process has taken
place already many times before. Now, however, there is an extra obstacle. A major version update (including the
new Bluetooth Mesh)! To update to this new version requires circumventing
technical constraints. For example, the address from which we start the bootloader is fixed. Hence, we need a very 
sophisticated update procedure. Several intermediate bootloaders are required that each lift some of the constraints of 
the older ones. Each time we do want to leave the Crownstone in a bootable state. Quite a challenge! Only when we have
tackled this, the plugs and built-ins in the field can be safely updated. Keep tight!

# Dimming 

There is another challenge that becomes quickly quite technical: **dimming**. 
Stable dimming on the Crownstone is addressed head on by Aniket. 
There are many ways to dim, it is possible to do so-called pulse width modulation for example. What we use at Crownstone
is so-called phase cutting. This is known as leading or trailing edge dimming. Devices that can benefit from
[leading edge dimming](https://www.ecmweb.com/lighting-control/shining-light-dimming) are devices that have wire-wound
transformers. Such loads are inductive: the current lags behind the voltage. A "hard firing" technique makes sure that 
the (inductive) load reaches the device's current threshold level. In contrast, trailing edge dimming can benefit 
devices that have electronic transformers which are usually capacitive. 

![Dimmer]({{ site.url }}/attachments/blog/dimmer.png)

The topic Aniket is working on is general robustness of this phase cutting mechanism. To know when to cut the phase,
the Crownstone has to recognize when there is a so-called zero-crossing. This moment in time is used to define when
the Crownstone is actually on and when it's off. The zero-crossing needs to be accurately measured, even when there are
measurements errors (in the analog-digital conversion) and in timing (other processes might have
a higher priority to run). The solution direction is to look at the frequency of the grid. This is around 50Hz in the
EU and pretty stable.
Aniket is designing algorithms that take this into account to make sure that we can use a predicted 
zero-crossing time value rather than the actual zero-crossing. The latter is only used to update our estimate of the frequency
(on a longer time scale). For the techies, check [this](https://github.com/asamant/bluenet/blob/dimmer-doc/docs/DIMMER_NOTES.md)!

# What else is happening?

A global perspective on our smart homes, our privacy, upcoming artificial intelligence, and what this means for us:

* [You are not the user](https://www.nngroup.com/articles/computer-skill-levels/), only 5% of the population does have good digital skills.
* Protestors use a [Bluetooth Mesh app](https://www.bbc.com/news/technology-49565587), Bridgefy, to communicate.
* [Repairing a Lenovo Laptops](https://adammunich.com/how-to-repair-the-parts-that-explode-in-lenovo-yoga-laptops/). Should we have the right to repair? We think so!
* Sustainability can be achieved by [more capitalism](https://www.technologyreview.com/s/613845/the-planet-has-a-fever-and-the-cure-is-more-capitalism-a-prominent-economist-argues/), an interesting view on efficiencies, technological progress, etc. on climate change.
* A (probably unecrypted) backup is stolen with data on 260.000 [Allianz customers](http://www.tellerreport.com/tech/2019-09-19---safe-with-backups-260-000-customers-stolen-from-travel-insurer-allianz-.rkej2eL-DS.html). The question arises: should we have stricter regulations w.r.t. backups?

# New team member!

We like to welcome Arend de Jonge in [our team](https://crownstone.rocks/team/)! As software developer and mathematician 
versed in encryption he will be able to boost our firmware development to new heights. If that does not interest you, 
his work as acrobat might! 

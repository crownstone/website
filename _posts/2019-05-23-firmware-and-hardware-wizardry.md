---
layout      : post
title       : "Firmware and hardware wizardry."
description : "Firmware and hardware wizardry. All kind of magic done by our developers."
tags        : [firmware, hardware, nRF52, developer, programmer]
author      : annevanrossum
picture     : attachments/blog/firmware_developer.png
excerpt     : "For a noob, the code on a device like Crownstone might look like magic spells; the programmer might look like a wizard including the long hair; the computer like a science-fiction console. However, did you know that as a firmware developer most of the time is spend on debugging!?"
---
{% include JB/setup %}

# Firmware wizards

For a noob, the code on a device like Crownstone might look like magic spells; the programmer might look like a wizard
including the long hair; the computer like a science-fiction console. However, did you know that as a firmware developer
most of the time is spend on debugging!?

![Firmware developer]({{ site.url }}/attachments/blog/firmware_developer.png){: style="width:100%"}

This and much more information can be found in this [nice blog post](https://interrupt.memfault.com/blog/gdb-for-firmware-1)
on using the gdb tool for debugging Nordic chips. We ourselves spend some time on chasing a bug which has been 
described in our public [issue tracker](https://github.com/crownstone/bluenet/issues/66). It can be summarized as follows:

* The Crownstone firmware exists out of a bootloader, a radio stack (softdevice), and the application.
* The bootloader identifies the correctness of the application through a so-called checksum.
* The binary file created from the so-called [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) file missed particular sections introduced in newer SDK versions from Nordic.
* The code dynamically filled in those sections, invalidating the checksum at a second boot.

An interesting quest to find out that this was happening! So, why did we do all this? The benefit of the new SDK 15 itself
is not so pronounced. However, there is a very good reason to upgrade, namely to incorporate the 
[Bluetooth Mesh](https://www.youtube.com/watch?time_continue=1&v=wa_ARkZSr_U)
standard rather than the current OpenMesh implementation.  

* It is a better fit for our use case (messaging towards a particular node rather than flooding the network).
* It is better encrypted. Network encryption besides application keys allow reuse of the mesh across multiple manufacturers.
* It is easier to extend to new message types.
* It will (potentially) be directly supported by new smartphone models decreasing latencies.

# Hardware wizards

Just as with software, hardware requires its own wizardry. Have you ever wondered how silicon chips actually work? 
At [hackaday](https://hackaday.com/2019/05/20/integrated-circuits-can-be-easy-to-understand-with-the-right-teachers/)
the Uncovering the Silicon booth at [Maker Faire](https://makerfaire.com/) created macroscale representations of electronic
circuits to easily understand their properties.

![Silicon Chips]({{ site.url }}/attachments/blog/silicon_chips.jpg){: style="width:100%"}

One of the gurus who makes you help understand this even better is [Ben Eater](https://www.youtube.com/channel/UCS0N5baNlQWJCUrhCEo8WlA).
Check out Ben's videos to understand how to create a complete 8-bit computer. 

An interesting component on the Crownstone boards is the so-called MLCC, a multi-layer [ceramic capacitor](https://en.wikipedia.org/wiki/Ceramic_capacitor).
The capacity of such a capacitor is increased by an increase in the number of layers and a decrease in the distance between the electrodes.
To manufacture many thin layers on top of each other is a delicate process and many advances have been made in the recent years. Due to the fact that MLCCs can
be surface-mounted and do not require through-hole soldering they are typically cheaper. In theory! In practice, the market of MLCCs
is in turmoil. There's a severe [MLCC shortage](https://www.iotforall.com/iot-component-supply-shortages/). 
Electric cars require around 22.000 MLCCs compared to the 3.000 in a combustion engine. More importantly, the 
1.5 billion smart phones produced each year each house up to 1.000 MLCCs! There are Chinese companies [prematurely](https://www.theburnin.com/market-watch/mlcc-market-predictions-2019/) hoarding
the components, other companies selling [traceability](https://chip1.com/) to counter counterfeits.
What's also important to note is that the underlying ceramic technology lags behind that of nickel technology (used in 
batteries) which will slow down progress at the manufacturers. The lead times for MLCCs will remain long for quite
some time according to [Dennis Zogbi](https://www.ttiinc.com/content/ttiinc/en/resources/marketeye/categories/passives/me-zogbi-20170602.html).

Even for Crownstone as a small player this has consequences, namely for our bill of materials. It's one of many things
we will take into account when we design new hardware! We won't be sitting ducks and though of something else as well. 
If you are a master
student in business informatics, we offer an internship 
([description, pdf](https://docs.google.com/document/d/1U1_mCueBOET4_dUxCKebBDIzbu2OySQn_nPbggZZEdQ/export?format=pdf)).
to build a model for electronic components as commodities. You will help us in making our technology and process decisions much stronger!

# Electric cars

Crownstone closely follows other sectors that undergo a process of electrification. No other sector is as volatile
as the car industry nowadays. There are R&D opportunities for Crownstone such as the design of faster charging 
stations. Moreover, the introduction of those "batteries-on-wheels" in our cities will influence the distribution, management,
and control of energy itself. Crownstone's fine-grained control on a power outlet level can lead to
significant cost benefits to consumer and utility provider alike.

There are other aspects at play as well. In general (not taken into account tiny components like the MLCCs) 
there are far fewer parts needed for an electric motor compared to a combustion engine. 

![A car engine]({{ site.url }}/attachments/blog/car_engine.jpg){: style="width:100%"}

Quick side note: Check the beautiful animations at [animagraff](https://animagraffs.com/how-a-car-engine-works/) if you like to know more!
They have animations on car engines, self-driving cars, mechanical watches, electric cars; a pleasure to look at!

Fewer parts makes cars cheaper and 
- likely - more robust. There are fewer things to be worn out. Fewer components also means less manufacturing work and - regretfully - 
job losses (75.000 to 210.000 in Germany alone, [Bloomberg](https://www.bloomberg.com/features/2019-bmw-electric-car-german-engines/)). 
The reduction in human labor means that the engines become cheaper again. The jobs will
not only disappear at car manufacturers but also in the automotive supply chains. Counterintuitively, it is likely that 
the overall market size of the automotive industry will decrease. This does not even take into considerations the
possibility that the sharing economy takes off with a decreased number of cars per person as well.
Key take-away is that electrification might have a much larger impact on jobs than automation. We might need to tackle this
before "the robots take over". 

# What else is happening?

A global perspective on our smart homes, our privacy, upcoming artificial intelligence, and what this means for us:

* [Facebook](https://www.buzzfeednews.com/article/katienotopoulos/facebook-advertisers-data-brokers-car-dealerships) who has your data!?
* Starting the 1st of July, Dutch companies are obligated to use LED lights. The [motion](https://www.tweedekamer.nl/kamerstukken/brieven_regering/detail?id=2018Z20512&did=2018D53429) cites a reduction of 0.9 megaton CO2.
* [Xcel Energy](https://www.xcelenergy.com/) (3.3M customers) closes two coal plants.
* [Heat pumps](https://radar.avrotros.nl/uitzendingen/gemist/item/tv-uitzending-25-02-2019/) in the Dutch tv-program Radar got a very bad vibe, but was that 
[justified](https://www.vakbladwarmtepompen.nl/projecten/artikel/2019/03/warmtepompgebruiker-bij-radar-wat-ging-er-mis-1014414)?
* [Delete Facebook](https://github.com/weskerfoot/DeleteFB) posts with a Selenium script.
* [MicroG](https://microg.org/) re-implements proprietary Android apps as open-source apps.
* Why open-source firmware is important for security by [Jessie Frazelle](https://blog.jessfraz.com/post/why-open-source-firmware-is-important-for-security/).
* A new documentary on the first smartphone, [General Magic](https://hyperallergic.com/500449/general-magic-documentary-smartphone-apple-silicon-valley/), which flopped spectacularly.
* [Ian Bicking](https://www.ianbicking.org/blog/2019/04/users-want-control-is-a-shrug.html) on what privacy actually means for different people.


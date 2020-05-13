---
layout      : post
title       : "Crownstone energy consumption in standby."
description : "The Crownstones use very little energy themselves. This means they can really operate as standby killers"
tags        : [energy consumption, standby killer]
author      : annevanrossum
picture     : attachments/blog/power_measurement_10plugs.png
excerpt     : "The Crownstones use very little power themselves. This means that they can operate as standby killers."
---
{% include JB/setup %}

# Energy Consumption

Crownstones are meant to be placed behind any power outlet and light switch. If you equip your home with Crownstones you have a super smart home that can do many things for you. Your home will however not only make your life more comfortable. 
Crownstones can make it also more sustainable! It can turn off lights when you are not there. Or turn of devices and appliances that use a lot of energy in standby power mode.

![Energy Consumption]({{ site.url }}/attachments/blog/power_measurement_10plugs.png){: .float-right style="width:50%"}

The question that then rises... "How much power does a Crownstone itself use?" If you would have your entire home equiped with Crownstones you don't want the system itself to use more than you can save by using it as an standby killer! 

That's why we show here a picture with a Brennenstuhl power measurement unit. It shows a stack of ten Crownstones, each completely enabled, running in normal mode and performing meshing. The ten Crownstones draw 2.4 Watt. This means that per Crownstone we are using 0.24 Watt. 

Only **0.24 Watt** per Crownstone is pretty good. It powers the Nordic chip. It powers the Bluetooth Low Energy radio stack. It allows communication with other Crownstones. It contains leakage through the shunt to measure current. It contains leakage through the IGBTs that can be used for dimming. It powers the 10V circuitry for switching the relay. Most countries nowadays ask for a standby power consumption of **1 Watt**, so it's important to have our normal - fully operational - mode under that level. The Crownstone should work with all functions on energy levels that allow other devices to be just on standby.

A nice website about sustainability "without the hot air" is [withouthotair.com](http://www.withouthotair.com/). On the particular topic of switching of a phone charger David JC MacKay [writes](http://www.withouthotair.com/c11/page_68.shtml): *"All the energy saved in switching off your charger for one day is used up in one second of car-driving."*
This however is not true for any device! A laserprinter might very well use a lot of energy in standby. Of course, also when a device is on it is using a lot more. A television broadcasting when no one is present is plain and simple quite a waste! 

## Energy Measurement

In the above setup we have used a third-party device to show how much we actually use. Feel free to repeat this experiment at home.

One thing that has to be mentioned is the power measurement on the Crownstone itself. Regretfully this is yet not accurate enough to measure very low power levels. The power fluctuations reported by the Crownstone in the app are at around 3 Watt. This has a technical explanation. To measure power we sample the voltage and the current and multiply these values over a window of 20 milliseconds (when on 50 Hz). The voltage measurements are measured quite accurate by the Crownstone. The current measurements are however harder to get to an accurate level. 

![Current curve]({{ site.url }}/attachments/blog/current_measurements_with_lamp.png){: .float-right style="width:40%"}

In the picture at the right you see multiple curves overlayed on top of each other. The squiggly line is the average over a set of those curves. The curves are not smooth. This stems from noise in the environment. On the Crownstone we calculate a moving average over multiple of those curves. There are 50 curves in one seconds, which means quite a reduction in fluctuations. However, the longer this window, the slower the updates on power consumption appear on a phone or other device. 

There are a few tricks which can make the power measurements more accurate. A nice topic for another blog post! However, for this version of the Crownstone we will always use less energy than we can actually accurately measure! That can be seen as a glass half full or a glass half empty. :-)

---
layout      : post
title       : "A truly smart light switch"
description : "A smart light switch allows a light to be switched both digitally as well as physically. It is not as easy as it seems to build this!"
tags        : [switch, smart switch, switchcraft]
author      : annevanrossum
picture     : attachments/blog/cs_switchcraft_1.png
excerpt     : "A solution that makes your light switches truly smart"
---
{% include JB/setup %}

# Making a 2-wire switch smart

There are quite a few blog posts and products online that describe the problem of making a 2-wire switch **smart**.

Check for example:
* [The IOT Pad](https://theiotpad.com/tips/smart-switches-no-neutral-wire)
* [the smart cave](https://thesmartcave.com/smart-switch-with-no-neutral/)
* [smart home](https://www.smarthome.com/pages/what-to-do-if-you-dont-have-a-neutral-wire)
* [techhive on C by GE switches](https://www.techhive.com/article/3512824/c-by-ge-hubless-no-neutral-wire-required-smart-switch-how-did-they-do-it.html)
* [Yoswit products](https://www.yoswit.com/2-wire-smart-light-switch.html)

All of the above choose one solution to solve this... Crownstone did something even **smarter**! 

First, we will describe what's so hard to tackle with 2-wire switches. Second, we will analyse common solutions. Third, we will introduce the **switchcraft** solution by Crownstone and explain its benefits in detail.

## What's so difficult?

A 2-wire switch does have, indeed, **two** wires. One incoming wire and one outgoing wire. The incoming wire is the **live** wire from the grid. The outgoing wire goes to the light. There is a neutral wire, but it is not at the switch. It is going straight to the light. When the switch is toggled the live wire will start or stop carrying current. This turns the light on or off.

Now, it might already be clear why this can be a problem. If the switch is toggled such that the live wire is disconnected from the light, there is no current flowing. If there is no current flowing electrical components in the light switch will not be powered. This means that there is no wireless connection possible and you cannot dim the device digitally.

## Common solutions

One solution is to incorporate a battery function in the switch. This is not necessary a physical battery, but something that stories energy for a longer time. It can indeed be a rechargeable battery or for example a so-called supercapacitor. This component can be charging when the light is on. When the light is switched off the smart module in the switch uses the energy of the battery or the capacitor to keep listening for digital commands. There is a disadvantage though. When the light is switched off for long times (and this depends on capacity and the energy use of the switch itself), it will stop listening for digital commands. Or worse, if a non-rechargeable battery is used, you might need to swap the batteries of your "smart" light switches after a few years! Argh!!

A second solution is to have the switch toggle between high current and a very low current. The switch can be seen as a device that is in series with the light. It can draw a tiny bit of current while you do not notice at the light that there is this amount of current flowing. This especially works with old-fashioned incandescent or halogen light bulbs. There is again a disadvantage. LED lights require less power than ever. This means that a small current is already big enough to actually turn on the LEDs! For that reason, manufacturers often offer a workaround: an additional device that has to be placed at the light. It is a capacitor that pulls away enough current from the light to prevent it from switching on. The more energy your LEDs use, the likelier it is that this hack works.

A third solution is so-called energy-harvesting. An energy-harvesting switch (check the manufacturer EnOcean) uses the physical energy of a switch event to send a wireless message. This message can be sent to a module that does the actual switching. The module can be placed at the light where you have both a live and a neutral wire. Of course, if you use the physical switch as well, you run the risk of powering everything off. To prevent this, you can replace your physical switch by this energy-harvesting switch. There are very few disadvantages here, we will just list two. First, this type of technology is relative expensive. Second, there are only very few messages that will be sent by the switch. If the receiving module accidentally misses those, it will miss the event and you have to toggle another time.

## Switchcraft

The solution in the Crownstone modules is quite different. The Crownstone measures the input voltage on a high frequency (around 5 kHz). For a single sine wave - in Europe at 50 Hz - this results in a lot of samples, around a 100. We use this information to recognize temporary dips in the power supply. This, we can use to our advantage to recognize dips caused by a light switch! The Crownstone is mounted at the ceiling light. That is also often the most convenient location (with respect to space). We configure the light switch as a **pulse switch**, in particular a break switch.

![Switchcraft wiring diagram]({{ site.url }}/attachments/installation/en/switchcraft_wiring_diagram.png)

The pulse (the temporary disconnect) travels to the Crownstone and can be recognized as such. This allows the Crownstone to switch state. This has quite a few advantages:

* You can switch any light source. Even if we a LED would use only 10 mW, this setup would still work!
* You can switch the light any time. It is not the case that after a holiday the batteries in your switches got depleted.

There are a few other interesting consequences as well. One example, you can arrange multiple pulse switches in series. Each of those will be able to control the Crownstone at the end. This means you can create a hotel switch with many more than two or three switches. Another example, you can flip the switch multiple times and - potentially - have different actions as result. The Crownstone's interpretation of the incoming train of pulses can be such that it distinguishes between flipping the switch once and multiple times.

## Are there disadvantages?

You might wonder why other manufacturers do not use this solution. First, it requires accurate monitoring of the incoming voltage. This cannot be done by off-the-shelf monitoring chips. It requires the electronic expertise to implement the measurement circuit, it makes the product slightly more expensive to build, and it requires software expertise to recognize the switch events. This all apart from the fact that inventions like these are creative! Second, it requires the module to stay active with power for a while after the supply is cut off. This is not a logical engineering requirement except for this use case! To come up with a solution like this means that the team of electronic and software engineers have to work together and understand each other's requirements extremely well.

There are always downsides imaginable. However, with careful considerations there are very few. For example, if the electricity grid itself falls out for a while and the power comes back on, this does not take the same time as flipping a switch (around 5 ms). In other words, the lights will not go on after a power failure. The only issue we can imagine at Crownstone is with very particular switches that have uncharacteristic traveling times. If you find something interesting, let us know!

## Conclusion

![Switch with kid]({{ site.url }}/attachments/blog/switch-and-kid.png)

It is important to be able to use the physical light switch and be able to use digital commands at the same time. There are only a few ways to do this and each have their own disadvantages. Crownstone uses a new method that has many benefits compared to the existing methods. It works with a two-wire setup so it can be used to retrofit buildings. It works with LEDs, even if they use almost no power to light up. We think it's a neat function and we hope lot's of people will benefit from physical and digital switching alike!

---
layout      : post
title       : "Crownstone New Behaviour."
description : "Crownstone new behaviour abilities allows you to adjust to guests, babysitters and much more!"
tags        : [crownstone, smart home, rules, behaviour, guests, babysitter, dim lights, twilight mode, abilities]
author      : annevanrossum
picture     : attachments/blog/app_behaviour.png
excerpt     : "Crownstones behaviour become smarter overnight. Now your house can react even more flexible to your presence of the presence of people in your household. There is a twilight mode that allows you to automatically dim lights when it is night. There is also a new section with abilities that can you enable."
---
{% include JB/setup %}

# New Behaviour!

Crownstone releases today a complete revamp of the software. If you have bought Crownstones, they will have become smarter again (after running the update of course)!
* Your house can now react very flexible to your presence.
* There is a twilight mode to dim your lights when turned on at night!
* Your Crownstones got new abilities that you can enable.

# From Triggers to State

Crownstone worked last months on the new Crownstone Built-in One hardware, integration with Bluetooth Mesh, removal of connection delays, and implementing switchcraft. Now we come with a much more flexible way to make your smart home respond to you!

The indoor localization deployed by Crownstone previously listened only to triggers. With this, the home could respond to events like "enter home", "exit home", "enter room", and "exit room". You could also specify that this would only happen when it was dark outside. Hence, when you came home and it was dark, the lights could go on. However, this is not smart enough yet.

What we actually want is a scenario like this one: **The lights go on when it gets dark while we are in the living room**. The Crownstones should check the time of day and react to someone's presence even if a person is just sitting quiet in a room.

Another disadvantage of triggers has to do with multiple people in the same household. There can be **multiple exit** events. This makes it hard. When should you actually turn off the lights when everybody is gone? The Crownstones can't just react to the event itself. This is why reasoning with states leads to a much better user experience.

The new software version enables the Crownstones to have behavioural rules that depend on states as well as triggers. All this sounds very complex. We had to think thoroughly on how to present this to our users. The complex combination of schedules, timers, indoor localization, and other smart features we all collected it under the concept **Behaviour**. These can be set up by something that looks like **hyperlinks**: clickable phrases in a sentence.

![Picture]({{ site.url }}/attachments/blog/app_behaviour.png)

At the Behaviour screens you can define when and how you want your house to respond to you. This can be based on sunrise, sunset, or wall clock time. Moreover, your smart home will respond to your presence much faster than it did before (it is using encrypted broadcasts rather than connections). It will also be more reliable and easier on your phone’s battery. Most importantly, it will take into account the locations of others in your household.

Click for example on "somebody" to change it to "nobody" and you can set rules that only switch "on" or "off" when nobody is around. Or click on "kitchen" to change it to another room or the entire house. Or click on "while it's dark outside" to change it to a fixed time period.

# Babysitters and parties!

Suppose you have a babysitter and you want to turn the house into a "dumb" house for a while. That's possible now. There’s a new button in the top right corner of the sphere overview that allows you to quickly enable or disable the presence-based behaviour. This is also convenient if you give a party or in any other situation where people without smartphones are present in your house. Of course, they can use the switches, but you don't want a room to go dark when you leave!

![Picture]({{ site.url }}/attachments/blog/app_babysitter.png)

# Twilight

Switchcraft (the use of normal switches parallel to lamps) opens up new possibilities. One of these is the Twilight mode. Twilight allows you to have your Crownstones turn on in a dimmed mode at night. You won’t be "blinded" if you go to the bathroom at night. You simple press the wall switch and it will go on at, say, 40%. This works completely independent of your phone. Your guests will also be able to use the Twilight mode!

# Abilities

This Crownstone software version (which is 4.0.1 to be specific) also introduces abilities. These are things your Crownstone can do for you. You can choose to enable or disable these. The abilities are currently threefold: dimming, switchcraft, and tap-to-toggle. If for example, a particular lamp cannot be dimmed, you disable the dimming ability. In 2020 you will see the rise of new abilities as well!

![Picture]({{ site.url }}/attachments/blog/app_abilities.png)

For the coming months we have many other features planned for you! For example, currently the rules work with multiple people in a household, but they can't yet be personalized further. Also, we deployed a server which uses so-called server-sent events as a server push technology. This allows us to have lightweight connections for further integrations. Think of Google Home, Homey, Home Assistant, and other integrations.

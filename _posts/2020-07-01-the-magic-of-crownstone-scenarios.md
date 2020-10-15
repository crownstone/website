---
layout      : post
title       : "The magic of Crownstone scenarios."
description : "Crownstone scenarios for example around sunset and how to configure those so that they are automated"
tags        : [scenarios, smart home, automation]
author      : teresavandam
picture     : attachments/blog/scenarios2.jpg
excerpt     : "We sketch two scenarios that use the Crownstone capabilities around sunset and at night. The first scenario uses indoor localization. The second scenario makes your switch smarter at night."
---
{% include JB/setup %}

# The magic of Crownstone scenarios

We [previously mentioned]({{ site.url }}{% link _posts/2020-06-22-automation-the-key-ingredient-for-a-truly-smart-home.md %})
that the key ingredients to create a scenario are four: **preferences**, **time**, **place** and 
**presence**. Each of them are necessary for our house to know what needs to be done, how we want it to be done and when we want that to happen. Now that we know that **home automation** is needed for a truly smart home experience, we can just simply create scenarios for our home, so it can do things automatically for us based on our wishes. We will introduce two useful scenarios that will help you with automating your home and save you some time. Let’s start!

![Smart home]({{ site.url }}/attachments/blog/scenarios2.jpg)

# How to start?

With Crownstone, creating scenarios is really easy and straightforward thanks to the **Crownstone app** and indoor localization. As mentioned in our previous post, indoor localization is Crownstone’s secret ingredient used to detect if you’re in a certain room. It allows your lights and devices to immediately react upon your presence. One basic concept the Crownstone app introduces is the **sphere**. A sphere is a **connected group** of Crownstones. 
A sphere can for example represent your home or your office. Taking your home as a sphere, you can arrange the Crownstones of that sphere into different “rooms”. In this sense you can include your living room, kitchen, bathroom, bedroom, etc. into your home sphere.
After assigning Crownstones to a specific room, you need to let them know how to **recognize** that you are in that room. For this, you press the **training icon** in the app and then you walk around your room for around 30 seconds. Now your Crownstones will be able to recognize when you are present in that room. Once you finish this task, you can start creating your first scenario!

![Sunset scenario]({{ site.url }}/attachments/blog/scenarios_livingroom.jpg)

# Sunset

![Sunset scenario screenshot]({{ site.url }}/attachments/blog/scenarios_screenshot1.jpg){: .float-right}{: style="max-width: 250px"}

One task with which Crownstones can help, is to turn on the lights when it starts to get dark. 
The more lights we have, the nicer it will be to automate this. Moreover, we do not need to worry about the location of lights switches: we can place a cabinet there! We do not need to crawl behind the couch if we've a switch at a difficult to reach location. When we are reading a book, we do not need to walk around and our flow is not interrupted. Moreover, if we like our lights at different levels of brightness we only need to configure them once.

Of course, we can do this ourselves, but there's no need to force yourself to do this every night! A "semi" smart home with a voice assistant or smart home app is already a step forward, but now you are still forced to set the lights every night. This can all be avoided by using the automated Crownstone sunset scenario.

The sunset scenario will turn on the lights **at sunset** and when you are **present** in the room. Note, that if your home does not know your location, this can't work! For this, you need presence-aware behaviour.
In the app select the Crownstone you'd like to exhibit sunset behaviour and specify the brightness at which you want your lights to be turned on. Next, specify the room in which someone needs to be present for this Crownstone to react to. Finally, pick a time at which you want this behaviour to occur. You can for example configure it to be 30 minutes before sunset. In the example in the figure, we set the lights to be dimmed at 70% while it is dark outside.

![Sleeping baby scenario]({{ site.url }}/attachments/blog/scenarios_baby.jpg)

# Sleeping baby

![Sleeping baby scenario screenshot]({{ site.url }}/attachments/blog/scenarios_screenshot2.jpg){: .float-right}{: style="max-width: 250px"}

For our second scenario, let’s say that you have a baby at home. When the little one is sleeping at night, sometimes you might want to enter the room to check if everything is fine. Of course you don’t want to interrupt his pleasant sleep. Therefore, requesting Google or Alexa to turn on the lights is not the ideal situation here. Also, turning on the lights with 100% brightness might wake up your baby! So, how can Crownstone help you? You can create a “sleepy baby” scenario by using indoor localization and twilight mode.

For this scenario, the Crownstones in the baby room can be set to be presence-aware like above, but it doesn't need to be presence aware! Of course, you can turn on the lights automatically when you enter the room. However, there is another option as well. This is called the **twilight mode**. The twilight mode makes your ordinary light switch smart (if it is configured with 
[switchcraft]({{ site.url }}/installation/#header-switchcraft-installation)). Now, when you flip the switch at night, the lights are dimmed! In the app you can configure the Crownstones using this twilight mode as a "behaviour" option per Crownstone. 
Your baby can keep dreaming peacefully!

# Conclusion

As previously mentioned, Crownstones together with the Crownstone app allow you to create useful scenarios in a simple and straightforward manner. Once scenarios are created, just let the magic happen and enjoy your comfortable, smart home. Take advantage of the indoor localization function and make your life a bit easier step by step. 

If you have a question on this or other home automation scenarios, add a comment or send us an email. We like to hear your ideas!

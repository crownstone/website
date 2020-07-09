---
layout      : post
title       : "Insight into the Crownstone App."
description : "The Crownstone app is designed to give you a warm welcome to home automation. It is a very intuitive app that guides you along the whole journey and gives you a lot of flexibility to create the scenarios you need to automate your home."
tags        : [smart home, automation, smart home app, ]
author      : teresavandam
picture     : attachments/blog/crownstone_app2.jpg
excerpt     : "When creating our first two scenarios to automate our home, we used the Crownstone app and experienced how simple and straightforward this process can be. Now, we will provide a general overview of the Crowstone app and compare it with other smart home apps, so we can let you know why we are proud of our app."
---
{% include JB/setup %}

# Insight into the Crownstone app

In our [previous post]({{ site.url }}{% link _posts/2020-07-01-the-magic-of-crownstone-scenarios.md %}) we started using the Crownstone app by creating scenarios for our home, so it can automatically do things for us based on our wishes. We introduced the concept of **“sphere”** used in the Crownstone app. This sphere can be for example our house, in which we can group our Crownstones in rooms such as the living room, the bathroom, the bedroom, etc. We also mentioned that after **training** our crownstones, they will be able to recognize when we enter or leave a room. Awesome, isn’t it? When creating our first two scenarios to automate our home, we used the Crownstone app and experienced how simple and straightforward this process can be. Now, we will provide some basics of the Crowstone app and compare it with other smart home apps, so we can let you know why we are proud of our app. Here we go!

![Crownstone app]({{ site.url }}/attachments/blog/crownstone_app2.jpg)

# The basics

![Crownstone app]({{ site.url }}/attachments/blog/crownstone_app1.jpg){: .float-right}{: style="max-width: 250px"}

First of all, the Crownstone app is designed to give you a warm welcome to home automation. We wanted it to be a very intuitive app that guides you along the journey and gives you lots of **flexibility** to create the scenarios to automate your home. It lets you add as many rooms to your sphere as you want, add Crowntones to your rooms, add behaviours to every Crownstone, invite more people to your sphere, create scenes (setting multiple Crownstones into a specific behaviour with a single tap), check the real time power usage of each Crownstone, add behaviour to your wall switches, etc. The app  is meant to help you to set up your Crownstones in a very easy way while giving you plenty of room to **personalize** the behaviour of every Crownstone in your home. We know each of us have different needs and preferences, and that’s why our app’s logic tries to cover different possibilities and considers various situations. In this sense, Crownstone app provides you not only with three types of behaviours (i.e. presence aware, smart timer and twilight mode), but also with additional features such as: energy monitoring, scenes, etc. so you can have a good start to automate your home.

We want our users to create **scenarios** and let their home react to them instead of using their smartphone like a remote control for their lights of devices. We believe that a truly smart home has the ability not only to save **energy**, but also to save user’s valuable **time**. We prefer our users to be relaxing on the couch with a nice cup of coffee, rather than clicking everywhere on the app to turn the lights on/off. Of course, there might be situations where we need to grab our phone and change the brightness of a lamp, because it is darker than normal. Or maybe we are enjoying a special dinner and we want to create a romantic atmosphere, dimming the lights down low  and turning on some colorful LED  lights. We’ve got your back! The Crownstone app will let you make any change you want in a very easy and fast way.
![Crownstone app]({{ site.url }}/attachments/blog/crownstone_app3.jpg)

# What do we do better?

When buying a new dimmer, a smart light, a motion sensor, etc. it is always important to check how well the **app** that comes together with that hardware works. Maybe the smart lights you want to buy have nice colors and look very fancy or maybe the dimmer that you want to buy has a very tempting discount of 60%. However, the magic stops when the app that comes with those lights or that dimmer does not let you login, keeps closing itself, logs you out every time, does not save the schedules or behaviours that you previously set up, etc. At Crownstone we know that all those inconveniences are far from providing a good user experience. That’s why we work on improving our app and looking for new ways to solve the problems that may arise.

Let’s take a look at the [mydlink Home app](https://play.google.com/store/apps/details?id=com.dlink.mydlinkmyhome&hl=en_US). Most of the problems in this app are related to reliability. For example, the app crashes and the user is logged out accidentally. These inconveniences are problematic because the very goal of the smart home experience is to make the life of the user easier. Worse, if the login mechanism contains bug, you might not be able to login at all. In such a case you can’t control your smart plug(s). You might call this “bricking” even though there's nothing wrong with the software on the devices themselves. So, how does Crownstone deal with these problems? The Crownstone app avoids logging out the user every time by storing the credentials (email and the hash of the password) in a safe place. They can be used for logging in automatically in case a user's token expires. Of course a user can still log out whenever they wish to do so with a simple log-out button. Regarding an app crashing: we all know that there is a small chance that this happens. At Crownstone we monitor app crashes and our developers are actively engaged in email conversations with users/reporters whenever a user lets us know. 

Now, let’s consider the [EATON Halo Home app](https://apps.apple.com/us/app/eaton-halo-home/id1313470202). There are two main problems  with this app: it deletes the behaviors and/or schedules that the user has previously made, and the time between the trigger event and the response from the smart device is quite large. These problems can be related to each other. Why? If an app uses the cloud, then every request the user makes (entering or leaving a room, toggling a button directly in the app, etc.) needs to perform a "roundtrip" through the internet. If an app uses a hub, the hub has to be available on the local network. In both cases, it takes longer for the device to respond. It is slower to respond to an enter or exit "event". It is also slower to respond to a user toggling a button in the smartphone app. Crownstones broadcast directly to smartphones. Smartphones also broadcast directly to Crownstones. This means response times are very short. Moreover, Crownstone does not rely on communication for its automation. In our case, the behavior is stored directly on the Crownstones themselves. Even if a Crownstone finds itself in complete isolation it will know what to do because it remembered it for you!

![Crownstone app]({{ site.url }}/attachments/blog/crownstone_app4.jpg)

# Conclusion

At Crownstone we understand that there is no perfect hardware or software. However, there is always room for improvement. Our Crownstones and our app are made around the core idea: **indoor positioning** is the key enabler for true home automation. Subsequently, automation gives our users comfort, safety, and saves our users time, energy, and money. 
It can be difficult to compare among several products. Key take-away is that for buying something for your smart home you should not only consider the physical product, the **hardware**, itself. It is just as important to look at the app behind that product, the **software**. If you buy fancy smart lights but the app does not work as it is supposed to do, then you won't benefit from the smartness of those lights. If you buy a smart plug, but, for instance, the app deletes the schedules that you configured or crashes every time, you just bought an annoying product, or worse, a fancy paperweight. At Crownstone our focus is on software just as much as on the hardware. We are dedicated to improve the functionality and performance of our Crownstones devices and our Crownstone app every day. We believe that the overall experience we provide to our customers is what will make you really happy.
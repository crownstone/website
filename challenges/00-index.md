---
layout: page
title: Software developer
header: Pages
description: "Software developer challenges"
keywords: "software developer, challenges, job, application"
kramdown: 
  parse_block_html: true
markdown: true
background-image: banner-software-jobs.jpg
permalink: challenges/software/
---
{% include JB/setup %}

We have many interesting challenges for developers! From the Crownstone firmware to the clouds, there are many distinct fields and puzzles to solve. 

We're a small team of flexible developers, working on many aspects of the Crownstone and its accompanying services. To just see a subset of our busy hive check this video:

{% youtube XI9GMjByfVk %}


# Embedded software engineer

Do you like embedded programming, this is the perfect challenge! We're running our stack based on the Nordic radio stack (S132 softdevice on **Cortex ARM** processors). It uses BLE for communication and indoor localization (iBeacon like, but with a twist). We're using the ADC peripheral to measure power and current curves very accurately (to also potentially identify appliances by their power). We are using a mesh to communicate between nodes. The firmware uses mainly **C++**.

We're working on several large challenges:

+ Currently we are doing localization from a smartphone using Crownstones as beacons. We are in the process of a redesign of the architecture where we perform the localization on the Crownstones themselves (in-network localization). This has as benefits that (1) smartphones only need to transmit messages saving battery on the smartphone, (2) that we can immediately respond to smartphone iBeacon advertisements reducing latencies, (3) that we can perform indoor localization independent from implementation of Android BLE stacks.

+ Appliance identification using high-frequency fingerprints has been done using deep learning in the cloud. To be able to run classifiers on the device itself they need to be completely stripped down.

Do you also like to work on algorithms? Even better! Do literature research, create a simulator, prototype your algorithm in Python, test your theories and finally implement your features in the Crownstone firmware! There are many challenges like improved indoor localization, in network localization, device classification, mesh traffic optimization etc. Currently, our firmware uses **C++**, but we are open for people who love to program in **Rust**.


# Full stack developer

You can work on our cloud backend services for a sprint, then solve complex UX/UI problems in the consumer app the next. Come up with new features and have plenty of freedom to implement them as you think is best.

Always wanted that curtain to close just by saying “Alexa, close the curtains”? You can use the Crownstone indoor location to determine which of the curtains around your house needs to be closed, make the integration with Amazon Alexa and our the cloud, expand our libraries and finally run it on a Raspberry Pi to improve your own smart home!

How about smart watches? Design an Apple Watch app from the ground up, integrate it with our smartphone app and have Siri set the mood by dimming the lights! Prefer Android? Explore the APIs of Fitbit watches, get our Crownstone network to track them and suggest quick remote control options based on your location in the house, while managing battery usage.


# App developer

Crownstone has a single app for consumers, but there are many use case specific apps that are to be made. For example, an electrician or installer should have a professional app to install Crownstones in a house. You have the freedom to design, create and improve these new apps as well as their privacy-sensitive dataflows between our cloud services and the app.

These apps can be either native apps (**Kotlin** on Android, or **Swift** on iOS), or use frameworks like **React Native**. Most will use the Crownstone bluetooth library. This means you will also have to be able to use some less commonly used features of the phone OS. It is a very challenging position! It's not just another boring app.


## Back-end developer

Although the Crownstones don't require internet to be functional, a lot of the Crownstone software relies on cloud services. There is a lot of data coming in from Crownstones in the field and their usage data has to be analysed, summarized and classified. The infrastructure between different types of databases and the REST client can be streamlined and improved with enough freedom to do this as you see fit.

Crownstone aims to be a secure smart home solution. This means the servers, databases and cloud services should also be secure, which will be your responsibility.

Depending on your skill level we will challenge you accordingly. For example, we currently use a **nodejs**-based server with a *Mongo* database. However, we have run preliminary experiments with **Go** and **Cassandra** and we are exploring the use of **Swift** in combination with **PostgreSQL**. You will be part of our process of scaling up to be able to handle more and more of our smart home customers!

# Contact

There are many challenges ahead, integration with IoT platforms, new features in our apps and firmware, machine learning in our cloud services, dashboard creation for our users and clients and so on. If you like working with different programming languages and frameworks and enjoy solving numerous challenging puzzles, our dev team is looking for you! Join us in making Crownstone the next big thing!

{% include snippets/email subject="Software developer inquiry" prefix="You can reach us at " postfix="." %}

{% include snippets/bottom-margin %}

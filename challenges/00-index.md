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

The Crownstones have an nRF52832 chip (built around an ARM Cortex M4F) that performs a lot of functions; it handles the Bluetooth communication, controls a relay and dimmer, measures power consumption. But the chip should be capable to do a lot more!

We are looking for an embedded software engineer who can take up challenges like implementing an Arduino runtime environment, enable firmware updates via the mesh network, or have the Crownstones communicate to 3rd party Bluetooth peripherals.

Prefer to work on algorithms? Do literature research, create a simulator, prototype your algorithm in Python, test your theories and finally implement your features in the Crownstone firmware! There are many challenges like improved indoor localization, in network localization, device classification, mesh traffic optimization etc.


# Full stack developer

You can work on our cloud backend services for a sprint, then solve complex UX/UI problems in the consumer app the next. Come up with new features and have plenty of freedom to implement them as you think is best.

Always wanted that curtain to close just by saying “Alexa, close the curtains”? You can use the Crownstone indoor location to determine which of the curtains around your house needs to be closed, make the integration with Amazon Alexa and our the cloud, expand our libraries and finally run it on a Raspberry Pi to improve your own smart home!

How about smart watches? Design an Apple Watch app from the ground up, integrate it with our smartphone app and have Siri set the mood by dimming the lights! Prefer Android? Explore the API’s of fitbit watches, get our Crownstone network to track them and suggest quick remote control options based on your location in the house, while managing battery usage.

# App developer

Crownstone has a single app for consumers, but there are many use case specific apps that can be made. For example, an electrician or installer should have a professional app to install Crownstones in a house. You have the freedom to design, create and improve these new apps as well as their privacy-sensitive dataflows between our cloud services and the app.

These apps can be either native apps (Java on Android, or Swift on iOS), or use frameworks like React Native. Most will, however, have to use the Crownstone bluetooth library. This means you will also have to be able to use some less commonly used features of the phone OS, not just another boring app.
Back-end developer
Although the Crownstones don’t require internet to be functional, a lot of the Crownstone software relies on cloud services. There is a lot of data coming in from Crownstones in the field and their usage data has to be analysed, summarized and classified. The infrastructure between different types of databases and the REST client can be streamlined and improved with enough freedom to do this as you see fit.

Crownstone aims to be a secure smart home solution. This means the servers, databases and cloud services should also be secure, which will be your responsibility.

# Contact

There are many challenges ahead, integration with IoT platforms, new features in our apps and firmware, machine learning in our cloud services, dashboard creation for our users and clients and so on. If you like working with different programming languages and frameworks and enjoy solving numerous challenging puzzles, our dev team is looking for you! Join us in making Crownstone the next big thing!

{% include snippets/email subject="Software developer inquiry" prefix="You can reach us at " postfix="." %}


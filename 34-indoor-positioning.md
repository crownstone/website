---
layout: page
title: Indoor positioning
header: Indoor positioning
permalink: indoor-positioning/
background-image: banner-indoor-positioning.jpg
banner-caption: Indoor positioning
kramdown: 
  parse_block_html: true
learn-more:
  - title: "Blog post: Indoor localization, how does it work?"
    image: "/images/indoor-positioning/entering.jpg"
    link: "/2020/08/07/how-would-my-home-react-to-me"
  - title: "Frequent asked questions: Indoor positioning"
    image: "/images/indoor-positioning/room.jpg"
    link: "/indoor-localization-faq"
---

{% include JB/setup %}


{% include snippets/slogan-begin %}

What is indoor positioning?

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin %}

{% include snippets/centered-text-home-begin %}

It's the ability of the Crownstones to know **where** you are if you carry a smart device with you. 
Crownstones use the position of this smart device through measuring **Bluetooth Low Energy signals**. 
This makes it possible for the Crownstones to react upon your **presence and proximity**.

{% include snippets/centered-text-home-end %}

{% include snippets/centered-image-home img='/images/indoor-positioning/map.jpg' img-alt='map'%}

{% include snippets/full-width-container-end %}


{% include snippets/margin %}



{% include snippets/slogan-begin blue-bg='true' %}

Requirements for indoor positioning

{% include snippets/slogan-end %}



{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-blue-bg-begin %}

### To enable indoor positioning in your Crownstones the following is required:

<p>&nbsp;</p>

- To have a minimum of **4 Crownstones** in the same sphere. The localization works best with at least two Crownstones per room.
- To **train** the Crownstones by walking a few rounds in a specific room.
- To have **bluetooth enabled** in your smartphone.

{% include snippets/two-cols-text-img-blue-bg-end img='/images/indoor-positioning/layout.jpg' img-alt='layout'%}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

The basics

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-right='true' %}

### Broadcasting distance

<p>&nbsp;</p>

Expect a Crownstone to broadcast 5-10m to contribute to the indoor positioning

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning/broadcasting.svg' img-alt='broadcasting' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin %}

### Recommended number

<p>&nbsp;</p>

Try to have most places covered by around 4 Crownstones. Most often 2 Crownstones per room gives enough info to the classifier.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning/min-number.svg' img-alt='minimum number of devices' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-right='true' %}

### Fingerprints

<p>&nbsp;</p>

 The classifier is a room-based and uses fingerprints. An accuracy "in meters" does not reflect this.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning/fingerprints.svg' img-alt='radar' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin %}

### Latency is also important

<p>&nbsp;</p>

More Crownstones means fewer misclassifications which means algorithms can make their decisions faster.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning/latency.svg' img-alt='latency' %}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

Scenarios

{% include snippets/slogan-end %}


{% include snippets/margin %}


{% include snippets/scenarios-container-begin %}


{% include snippets/scenario-begin img="/images/indoor-positioning/scenario-1.jpg" img-alt="scenario 1" title="You sit on the couch and it is getting dark" %}

The lights in the room where you are can be **turned on automatically**. Presence information is needed to avoid lights going on even if you are not there!

{% include snippets/scenario-end %}


{% include snippets/scenario-begin img="/images/indoor-positioning/scenario-2.jpg" img-alt="scenario 2" title="Go to bed without worries" %}

Forget about manually turning off stuff before going to bed. Lights and devices can be automatically turned off when you are **not present** in a room and after a certain time.

{% include snippets/scenario-end %}


{% include snippets/scenario-begin img="/images/indoor-positioning/scenario-3.jpg" img-alt="scenario 3" title="Because always it's better safe than sorry" %}

Turning off outlets when an **adult is not around** gives peace of mind! Specially knowing that no one can play with it in a dangerous manner.

{% include snippets/scenario-end %}

{% include snippets/scenarios-container-end %}


{% include snippets/margin %}



{% include snippets/slogan-begin blue-bg='true' %}

How accurate is it?

{% include snippets/slogan-end %}



{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-blue-bg-begin %}

### The accuracy depends on several factors, such as:

<p>&nbsp;</p>

- The quality of the training
- The number of Crownstones and their location
- The presence of metal appliances
- The presence of people themselves 

To know more details about each of these factors, we recommend you read this [blog post]({{ site.url }}/2020/08/07/how-would-my-home-react-to-me).

{% include snippets/two-cols-text-img-blue-bg-end img='/images/indoor-positioning/accuracy.jpg' img-alt='accuracy'%}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

Learn more about indoor positioning

{% include snippets/slogan-end %}


{% include snippets/margin %}


{% include snippets/learn-more %}


{% include snippets/margin %}
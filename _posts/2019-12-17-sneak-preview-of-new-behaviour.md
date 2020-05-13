---
layout      : post
title       : "Sneak Preview of New Behaviour."
description : "A sneak preview of the new Crownstone behaviour. It controls lights lightning fast!"
tags        : []
author      : 
picture     : attachments/blog/excellent_beurs.png
excerpt     : "Sneak preview of new behaviour. It can control a light very fast!"
---
{% include JB/setup %}

# Sneak Preview

The Crownstone Built-in One comes with revamped firmware and allows the user to toggle a light extremely fast. The 
last newsletter explained the sophisticated process with multiple bootloaders and multiple steps to get this 
firmware also to all the Zero generation Crownstones built-ins and plugs in the field. 
Now the time has come for us to make use of this new firmware to provide you with new functions.
The most important functionality we will be adding is the ability to gracefully handle multiple people in a household. 
The complexity of handling this is staggering! We think we are almost there and our group of beta testers will be 
testing this new functionality over the holidays extensively. Below you see a sneak preview of this large update!

<table>
<tr>
<td>
<img align="none" src="{{ site.url }}/attachments/blog/app_behaviour0.png" style="margin: 0px;" width="100%" />
</td>
<td>
<img align="none" src="{{ site.url }}/attachments/blog/app_behaviour1.png" style="margin: 0px;" width="100%" />
</td>
</tr>
</table>

At the right you see that there are phrases underlined just like hyperlinks on the internet. By clicking on them you
can alter them, for example you can change "all day" to "while it's dark outside" if you want a particular Crownstone
only to be on while it is dark outside. To be able to define a rule for "somebody" means that nobody is left in the 
dark anyore.

# Company Culture

Often we talk about either smart home technology - its applications, new products - or world-wide smart home
topics - privacy, open-source, sustainability. We rarely talk about Crownstone as a smart home
startup. What is its **vision**? How do we want to work together to achieve this vision? 
We created a [document template](https://docs.google.com/document/d/1rhXi-uVL_nNeGsjVHyJq5ORIcF2m5P5FoUzEDoU1kcc/) to
be reminded of our mission and core values: save people time, encouraging people to go for quality time, and 
operate transparently. Even the existence of this document is a testament to the latter.

Then, how is it to work at Crownstone?
Even though we do not agree with the ethics of the large IT companies, there are many things we can learn from them as 
a smaller company.
Our meetings are kept to a minimum. A lot of our decisions are through thoroughly worked out documents with cons and
pros. We did not [forbid slides yet](https://slab.com/blog/jeff-bezos-writing-management-strategy/).
We do have an open office space and we might benefit from more uninterrupted 
[streaks of time](https://blog.nuclino.com/makers-don-t-let-yourself-be-forced-into-the-manager-schedule). 
It's a pity that so many things are still unknown though (read e.g. the [consequences of an out-of-hours email ban on happiness](https://www.independent.co.uk/life-style/health-and-families/office-work-emails-out-of-hours-ban-employees-wellbeing-mental-health-study-a9161311.html)).
We are too
small to enforce an API for [every function in our company](https://medium.com/slingr/what-year-did-bezos-issue-the-api-mandate-at-amazon-57f546994ca2),
but we encourage automation in on-boarding, shipping, etc. to give ourselves "quality work time" as well. 
(See us, busy bees working [on code]( https://youtu.be/4SOVV8OK7m8).)
We're convinced this will all improve the quality of our products and our services!

# Smarter Homes

Our previous email detailed the Crownstone Built-in One, the newest version of our hardware that can be
used in series with a conventional light switch using [switchcraft](https://crownstone.rocks/installation/). We
demonstrated our new hardware on the [Bright Day](https://www.brightday.nl/) and the 
[Excellent Woonbeurs](https://excellentmagazine.nl/woonbeurs/). This gave us a lot of opportunity to talk with
people to learn what smart home features are most wished for.

{% youtube uWSj61d--ck %}

What becomes more and more clear to us, is that there is a large privacy void between American and Chinese companies
that can be filled by customer-centric European companies. One of the questions we got - for example - was if we knew
baby monitors that were developed with privacy in mind. A pretty decent request, upon which we had no
aanswer! Maybe one of you do? 

![Slide curtain motor]({{ site.url }}/attachments/blog/slide_curtain.jpg)

We're always looking for collaborations with hardware manufacturers that have the same vision on privacy (the user
is the owner of their data).
Recently, we talked with [Slide](https://nl.slide.store/), a company that makes motors to control curtains. They
spend a lot of time making it work perfectly for any curtain. Think of all different weights a curtain can have. Think
of sensors to decide to pull harder when necessary. Think of calibrating itself so it also knows when it is half open.
However, most importantly, they are working hard on a local API. This means that no data needs to go "to the cloud"!
It is currently in closed beta, especially due to the fact that the local and cloud authentication mechanisms are
yet incompatible. It looks like a great product to integrate with next year! Tell us what you think!

# What else is happening?

* Apple has a new [privacy statement](https://www.apple.com/privacy/). Even if Apple's motivation is to attack Google, the end might justify the means.
* Github, owned by Microsoft, [speaking out](https://github.blog/2019-10-09-github-and-us-government-developers/) against the policies enforced by the U.S. Immigration & Customs Enforcement.
* Gitlab [cancels their plans](https://gitlab.com/gitlab-org/growth/product/issues/164) to track their users.
* Apple's treatment of developers [can be improved](https://tyler.io/broken/).
* The [EFF](https://www.eff.org/deeplinks/2019/11/why-adding-client-side-scanning-breaks-end-end-encryption) explains why scanning for contraband files on the client side breaks end-to-end encryption.
* Tracking users by [audio fingerprinting](https://iq.opengenus.org/audio-fingerprinting/). A sad way in which privacy breached in an admittedly innovative manner. It's a bit like using [battery level](https://www.independent.co.uk/life-style/gadgets-and-tech/news/phone-batteries-can-be-used-to-spy-on-users-tracking-them-around-the-internet-and-ripping-them-off-a7169706.html) to implement tracking.
* Tracking users by [carriers](https://cfenollosa.com/blog/mass-cellphone-surveillance-experiment-in-spain.html) on a large scale. All cellphones in Spain for eight days! Note that a SIM card connects to cell towers and conveys your location in a manner that you can not disable. Even when your battery dies you can still be tracked, but that is another [story](https://www.bgr.in/news/google-can-track-you-even-when-your-phone-battery-dies-report-598498/).


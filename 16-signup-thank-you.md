---
layout: page
title: Thank you
header: Thank you
group: Landing
markdown: true
permalink: signup-thank-you/
---
{% include JB/setup %}

# Welcome to the Crownstone community!

To make sure someone else cannot register with your email address, we kindly ask you to confirm your email address by clicking the link in the email we just sent you. Thank you!

<br/>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="{{ site.url }}/attachments/sannedonders-annebart.jpg" alt="Anne and Bart">
    </div>

    <div class="item">
      <img src="{{ site.url }}/attachments/sannedonders-marc.jpg" alt="Marc">
    </div>

    <div class="item">
      <img src="{{ site.url }}/attachments/sannedonders-annebartmarc.jpg" alt="Anne, Bart, and Marc">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

## Reading material

To get you started, we gathered some links to resources here for you:

* [Alexa]({{ site.url }}/integrations/alexa), where the integration with Alexa is described. You do need the Crownstone
hardware for this!

* [Crownstone for business](https://crownstone.rocks/business/), where we describe our position w.r.t. indoor localization and automation in the larger ecosystem of the industry. 

* [Technology](https://crownstone.rocks/technology-consumer/), on the website gives an overview of the technology currently implemented and the features that are upcoming.

* The [bluenet firmware](https://github.com/crownstone/bluenet) can be used for our plugs and digital connectors, but you might also would like to use it for your own hardware or prototypes if it's based on the nRF52 chipset by Nordic. You will have encryption, mesh communication, iBeacon conformity, a DFU procedure, a setup process, etc. See [here](https://github.com/crownstone/bluenet/blob/master/docs/FIRMWARE_SPECS.md) for a more technical list of specifications. No need to reinvent the wheel anymore!

* The [source for the app](https://github.com/crownstone/CrownstoneApp) is available as well. It's able to control Bluetooth Low-Energy devices such as ours, uses React Native for screens that are both responsive and beautiful (check the screenshots), and has undergone all kind of stabilization, robustness, and optimization steps you do not want to know! You'll be able to find the apps [via this website](https://crownstone.rocks/app/) at Apple and Google.

* The [Crownstone cloud code](https://github.com/crownstone/crownstone-cloud) for a REST API-based online server can be used to host your own data on premises or somewhere else online under your own management. It uses loopback to (moderately) decouple from the database behind it, has a [visual explorer](https://cloud.crownstone.rocks/explorer/#/) for the API, webhooks, etc. Of course we [host](https://cloud.crownstone.rocks/) it ourselves as well.

* You've free access to an [archive of past issues](http://us10.campaign-archive2.com/home/?u=d03baf337210e326a61dc14d5&id=a23d3e9ded) as well. Read up on fancy, but energy hungry light bulbs or how Bluetooth Low Energy messages are actually constructed for example.

{% include snippets/bottom-margin %}

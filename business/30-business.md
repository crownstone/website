---
layout: page
title: Business
header: Business
description: "Crownstone for businesses"
group: [navigation-business-footer]
markdown: true
background-image: banner-office.jpg
permalink: business/
---
{% include JB/setup %}

# Crownstone

The Crownstone infrastructure can be used in smart offices for sustainability and communication.

Sustainability, who does not dislike the fact that all our offices light up like christmas trees during the entire night! That's such a waste!

* switch off office equipment (multi-functionals, coffee machines, televisions, electronic equipment) when nobody is around
* switch off lights when nobody is around (and not when someone is still working!!)

Productivity is about not spending time on aspects that do not have to do with your job. People are spending nowadays a lot of time in finding a desk to work, finding a meeting room, and even finding colleagues. Time that can be spent better!

* know if your colleague is working from home, in a meeting room, or where he or she is in the building
* find an unoccupied meeting room
* find a desk

Moreover, there is little known in many organizations on how often people meet up and how long the meetings last. There is a lot to gain also by analyzing this and for example organize a little "notch" from the meeting room to round up!

## Infrastructure

The Crownstone infrastructure can stream position information from smartphones and wearables to the internet.

![Crownstone Infrastructure]({{ BASE_URL }}/images/crownstone-architecture.svg){: style="width: 100%"}

Most applications will make use of smartphones. It is not possible to know the position of someone without that user installing a Crownstone app or third-party app. In particular applications, for example, in elderly care, it might be interesting to find the position of someone through wearables. In this setting a gateway is often used (but optional). To use the position of people carrying wearables consent is required.

# Guidestone 

The Guidestone is a simplified Crownstone (<a href="https://shop.crownstone.rocks/products/guidestones">shop</a>) that works as an iBeacon and comes with indoor localization capabilities alone (it is not a switch, dimmer, etc.). The benefits of the Guidestones above ordinary battery-based iBeacons:

* A short advertisement interval means frequent updates and thus faster localization.
* A high signal strength means more beacons visible through walls that are difficult to penetrate which increases localization accuracy.
* Indoor localization algorithms on the phone (there are a lot of parties that use only proximity to beacons for localization, this does not work, you need to use machine learning).
* The Guidestones can be updated at all once from a central location because they are all inter-connected through a mesh.
* The Guidestones are able to scan for BLE (Bluetooth Low-Energy) devices. This means that they can scan for the presence of people carrying bracelets, watches, or any other deivce that sends out regular BLE messages. They can even track iBeacons!

This product is that far simplified, that we have competitors (although they use USB beacons that require an additional adaptor). For a comparison, look at:

* Radbeacon's shop lists <a href="http://store.radiusnetworks.com/collections/all/products/radbeacon-usb-2">$29</a> plus <a href="http://store.radiusnetworks.com/collections/all/products/radbeacon-usb-power-supply">$9</a> for an adaptor.
* Kontakt's shop lists <a href="https://store.kontakt.io/our-products/29-usb-beacon.html">$60</a> without adaptor.
* Glimworm's shop lists <a href="https://glimwormbeacons.com/buy/ibeacons">€25 euro</a> without adaptor.

## Architecture 

The Guidestone product is interesting for business partners who want to focus on indoor localization only. For particular sectors additional development is required. For example, to be able to integrate with other data sources, get the data to the internet, or perform local computation.

![Guidestone Wearable Infrastructure]({{ BASE_URL }}/images/guidestone-wearables.svg){: style="width: 100%"}

# Partnerships
                
Currently Crownstone partners with consumer partners, application partners, and product partners. Crownstone is positioned as a provider of hardware and services. These services concern indoor localization and automation.

![Crownstone Partners]({{ BASE_URL }}/images/crownstone-partners.svg){: style="width: 100%"}

Moreover, Crownstone has particular tools and applications for flexible working that allows our partners to directly perform sales without a co-development traject. For other verticals we provide partners with APIs and libraries to build their own value-added proposition to a particular market segment.

# Partners

Crownstone is a **platform provider**. Our resellers provide these services to their customer segment. Our partners provide additional services on top of ours for example for elderly care, offices, or facility management.

![Crownstone Recommended Partners]({{ BASE_URL }}/images/crownstone-recommended-partners.svg){: style="width: 100%"}

Fill in <a href="https://crownstone.typeform.com/to/j2qpoR">this form</a> to apply for a partnership with Crownstone.



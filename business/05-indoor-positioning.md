---
layout: page
title: Indoor Positioning
header: Business
group: [navigation-business-submenu, navigation-business-footer]
skip-newsletter: true
background-image: banner-indoor-positioning-b2b
permalink: business/indoor-positioning/
banner-caption: Indoor positioning
architecture:
  - title: Wireless fingerprints
    description: The algorithms run on the smartphone. The integration of the Crownstone mobile fingerprinting SDK is moderately complex. Localization can be very accurate but is labor-intensive. It requires training the algorithm per room for different smartphones.
    image: /images/indoor-positioning-b2b/smartphone.svg
    image-alt: smartphone
  - title: In-network localization
    description: The algorithms run on the Crownstone mesh. The integration of the Crownstone mobile iBeacon SDK is relatively simple. Localization can be less accurate. This setup requires a hub to get the localization data towards your servers. This can also localize tags (no SDK required).
    image: /images/indoor-positioning-b2b/network.svg
    image-alt: network
  - title: Crownstone as iBeacons
    description: The default localization mechanisms on a smartphone are used. No Crownstone SDK is required. The Crownstones are configured as normal iBeacons. Localization accuracy depends on the smartphone libraries your developer use.
    image: /images/indoor-positioning-b2b/ibeacons.svg
    image-alt: iBeacons
  - title: Centralized localization
    description: The algorithms run on a Crownstone hub or in the cloud. Proximity information is communicated over Bluetooth mesh to a hub. Localization in real-time might be challenging (expect multiple-second delays). This can also localize tags (no SDK required).
    image: /images/indoor-positioning-b2b/tag.svg
    image-alt: ble tag
solutions:
  - description: Support for the app developers to integrate our SDKs.
    image: /images/indoor-positioning-b2b/sdk.svg
    image-alt: sdk
  - description: Hubs and servers. We can provide hardware and cloud services. We can implement an uplink towards a custom interface on your backend.
    image: /images/indoor-positioning-b2b/hub.svg
    image-alt: hub
  - description: Software updates and security patches for firmware over-the-air.
    image: /images/indoor-positioning-b2b/firmware.svg
    image-alt: firmware
software-modules:
  - description: We can provide monitoring or maintenance services about Crownstones, the Crownstone network, hubs, or other hardware if required.
    image: /images/indoor-positioning-b2b/monitoring.svg
    image-alt: monitoring
  - description: We can build dashboards if you have no application partner.
    image: /images/indoor-positioning-b2b/dashboard.svg
    image-alt: dashboards
  - description: We can build apps if you have no app development partner.
    image: /images/indoor-positioning-b2b/apps.svg
    image-alt: apps
  - description: We can integrate with building automation or energy management systems.
    image: /images/indoor-positioning-b2b/building.svg
    image-alt: building
  - description: We can directly integrate with Bluetooth sensors from any nearby Crownstone making any Bluetooth sensor part of your smart building.
    image: /images/indoor-positioning-b2b/sensor.svg
    image-alt: sensor
areas:
  - slogan: Workforce management
    image: /images/indoor-positioning-b2b/workforce
  - slogan: Workplace efficiency
    image: /images/indoor-positioning-b2b/workplace
  - slogan: Building automation
    image: /images/indoor-positioning-b2b/automation
---


{% include JB/setup %}


{% include snippets/slogan-begin %}

Indoor positioning

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin %}

{% include snippets/centered-text-home-begin background='light'%}

It's the ability of the Crownstones to know **where** someone is when carrying either a smart device or a Bluetooth tag. Crownstones use the position of these smart devices by measuring **Bluetooth Low Energy** signals. This makes it possible for the Crownstones to react to **presence and proximity**.

{% include snippets/centered-text-home-end %}

{% include snippets/centered-image-home img-size='small' img='/images/indoor-positioning-b2b/positioning' format='jpg' img-alt='positioning'%}

{% include snippets/full-width-container-end %}

{% include snippets/margin %}



{% include snippets/slogan-begin background='blue' %}

Requirements for indoor positioning

{% include snippets/slogan-end %}



{% include snippets/full-width-container-begin background="blue" %}

{% include snippets/two-cols-text-img-begin background="blue"%}

#### For Crownstones to perform indoor positioning the following is required:  

<p>&nbsp;</p>


- We recommend one Crownstone module per 10 - 25m2
- To have Bluetooth enabled in your smartphone or to carry a Bluetooth tag.

{% include snippets/two-cols-text-img-end background="blue" img='/images/indoor-positioning-b2b/office.jpg' img-alt='office'%}

{% include snippets/full-width-container-end %}


{% include snippets/slogan-begin %}

The basics

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-alignment='right' %}

### Broadcast distance

<p>&nbsp;</p>

A Crownstone or tag can broadcast from 5m to up to 50m while still contributing to indoor positioning.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/broadcasting.svg' img-alt='broadcasting' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin %}

### Density

<p>&nbsp;</p>

The more Crownstones, the higher the accuracy. As a rule of thumb, **two Crownstones** per room is sufficient for fingerprinting (see below).

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/room.svg' img-alt='room' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-alignment='right' %}

### Wireless fingerprints

<p>&nbsp;</p>

The fingerprint classifier can learn to localize people **per room**. This is often more useful than so-called trilateration and an actual position in meters (or yards).

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/radar.svg' img-alt='radar' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin %}

### Latency

<p>&nbsp;</p>

More Crownstones means fewer misclassifications which means algorithms can make their decisions faster.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/latency.svg' img-alt='latency' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-alignment='right' %}

### Location and occupancy

<p>&nbsp;</p>

Data provided through our API can give information about the location of a user, or provide information about the occupancy per room.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/occupancy.svg' img-alt='occupancy' %}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin background='blue' %}

Architecture

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin background='blue'%}

{% include snippets/centered-text-home-begin background='dark'%}

Crownstone supports at least **four ways** to integrate indoor localization.

{% include snippets/centered-text-home-end %}

{% include snippets/full-width-container-end %}

{% include snippets/two-items-in-a-row %}



{% include snippets/slogan-begin %}

A complete solution

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin %}

{% include snippets/centered-text-home-begin background='light'%}

Along with our solutions we can also provide the following 

{% include snippets/centered-text-home-end %}

{% include snippets/full-width-container-end %}


{% include snippets/three-items-in-a-row  id='solutions'%}



{% include snippets/slogan-begin background='blue' %}

Software modules

{% include snippets/slogan-end %}

{% include snippets/three-items-in-a-row  id='software-modules' background='dark' %}


{% include snippets/slogan-begin %}

Application areas

{% include snippets/slogan-end %}


{% include snippets/margin %}

{% include snippets/three-frames-in-a-row  id='areas' no-arrow='true' no-link='true' %}

{% include snippets/margin %}


{% include snippets/slogan-begin %}

Support

{% include snippets/slogan-end %}


{% include snippets/global-container-begin size="small" %}

{% include snippets/contact-option-begin img="/images/contact/email.svg" img-alt="email-icon" title="Send us an email" %}

For general questions drop us an email. We'd love to help you!

{% assign email = ".rocks, stone, crown, @, sk, a" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="Support: Indoor positioning"%}


{% include snippets/contact-option-begin img="/images/contact/phone.svg" img-alt="phone-icon" title="Give us a call" %}

Interested in our technology? Then talk with us, we're all ears!

{% include snippets/contact-option-end tel="true" %}

{% include snippets/global-container-end %}

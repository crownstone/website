---
layout: page
title: Indoor Positioning
header: Business
group: [navigation-business-submenu]
skip-newsletter: true
background-image: banner-indoor-positioning-b2b
banner-caption: Indoor positioning
architecture:
  - title: Wireless fingerprinting
    description: The algorithms run on the smartphone. The integration of this SDK is moderately complex. The SDK implements fingerprinting. Localization can be very accurate but it requires training.
    image: /images/indoor-positioning-b2b/smartphone.svg
    image-alt: smartphone
  - title: In-network localization
    description: The algorithms run on the Crownstone network. The integration of this SDK is relatively simple. The smartphone only has to function as an iBeacon.
    image: /images/indoor-positioning-b2b/network.svg
    image-alt: network
  - title: Crownstone as iBeacons
    description: The default localization mechanisms on a smartphone are used and the Crownstones are configured as iBeacons.
    image: /images/indoor-positioning-b2b/ibeacons.svg
    image-alt: iBeacons
  - title: Hub localization
    description: Information about tags or phones is communicated over Bluetooth mesh to a hub where the algorithms run for positioning.
    image: /images/indoor-positioning-b2b/tag.svg
    image-alt: ble tag
solutions:
  - description: Support for the app developers to integrate our SDK
    image: /images/indoor-positioning-b2b/sdk.svg
    image-alt: sdk
  - description: Hubs and servers and implement an interface towards a backend
    image: /images/indoor-positioning-b2b/hub.svg
    image-alt: hub
  - description: Software updates and security patches for the firmware
    image: /images/indoor-positioning-b2b/firmware.svg
    image-alt: firmware
software-modules:
  - description: Monitoring services on which nodes are up through internet-connected hubs.
    image: /images/indoor-positioning-b2b/monitoring.svg
    image-alt: monitoring
  - description: We can build dashboards if there is no application partner.
    image: /images/indoor-positioning-b2b/dashboard.svg
    image-alt: dashboards
  - description: We can build apps if there is no app development partner
    image: /images/indoor-positioning-b2b/apps.svg
    image-alt: apps
  - description: We can integrate with building automation or energy management systems
    image: /images/indoor-positioning-b2b/building.svg
    image-alt: building
  - description: Possible to integrate with Bluetooth sensors without an intermediate platform
    image: /images/indoor-positioning-b2b/sensor.svg
    image-alt: sensor
areas:
  - title: Workforce management
    image: /images/indoor-positioning-b2b/workforce.jpg
  - title: Workplace efficiency
    image: /images/indoor-positioning-b2b/workplace.jpg
  - title: Building automation
    image: /images/indoor-positioning-b2b/automation.jpg
---


{% include JB/setup %}


{% include snippets/slogan-begin %}

Indoor positioning

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin %}

{% include snippets/centered-text-home-begin background='light'%}

It's the ability of the Crownstones to know **where** someone is when carrying either a smart device or a bluetooth tag. Crownstones use the position of these smart devices through measuring **Bluetooth Low Energy** signals. This makes it possible for the Crownstones to react upon **presence and proximity**.

{% include snippets/centered-text-home-end %}

{% include snippets/centered-image-home img-size='small' img='/images/indoor-positioning-b2b/positioning.jpg' img-alt='positioning'%}

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
- To have bluetooth enabled in your smartphone or to carry a bluetooth tag.

{% include snippets/two-cols-text-img-end background="blue" img='/images/indoor-positioning-b2b/office.jpg' img-alt='office'%}

{% include snippets/full-width-container-end %}


{% include snippets/slogan-begin %}

The basics

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-alignment='right' %}

### Broadcasting distance

<p>&nbsp;</p>

Expect a Crownstone to broadcast 5-10m to contribute to the indoor positioning

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/broadcasting.svg' img-alt='broadcasting' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin %}

### Recommended number

<p>&nbsp;</p>

Try to have most places covered by around 4 Crownstones. Most often 2 Crownstones per 25m2 gives enough info to the classifier.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/room.svg' img-alt='room' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-alignment='right' %}

### Fingerprints

<p>&nbsp;</p>

 The classifier is a room-based and uses fingerprints. An accuracy "in meters" does not reflect this.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/radar.svg' img-alt='radar' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin %}

### Latency is also important

<p>&nbsp;</p>

More Crownstones means fewer misclassifications which means algorithms can make their decisions faster.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/latency.svg' img-alt='latency' %}

{% include snippets/full-width-container-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-centered-text-img-begin text-alignment='right' %}

### Occupancy and location

<p>&nbsp;</p>

Data provided from our API gives information of occupancy monitoring per room and location per user.

{% include snippets/two-cols-centered-text-img-end img='/images/indoor-positioning-b2b/occupancy.svg' img-alt='occupancy' %}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin background='blue' %}

Architecture

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin background='blue'%}

{% include snippets/centered-text-home-begin background='dark'%}

There are **four ways** with which indoor localization can be implemented

{% include snippets/centered-text-home-end %}

{% include snippets/full-width-container-end %}

{% include snippets/two-items-in-a-row %}



{% include snippets/slogan-begin %}

An integral solution

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


{% include snippets/application-areas %}



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
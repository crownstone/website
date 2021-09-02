---
layout: page
title: Contact
header: Contact
group: Landing
markdown: true
background-image: banner-address.jpg
banner-caption: Contact us!
skip-newsletter: true
permalink: contact/
specs:
  - icon: el-idea
    title: Press
    link: /presskit/
  - icon: el-envelope
    title: Newsletter
    link: /email-updates/
  - icon: el-edit
    title: Blog
    link: /blog/
---
{% include JB/setup %}


{% include snippets/slogan-begin %}

Get in touch

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin %}

{% include snippets/centered-text-home-begin background='light'%}

Want to get in touch? We'd love to hear from you. Here's how you can reach us...

{% include snippets/centered-text-home-end %}

{% include snippets/full-width-container-end %}



{% include snippets/global-container-begin %}


{% include snippets/contact-option-begin img="/images/contact/email.svg" img-alt="email-icon" title="Send us an email" %}

For general questions drop us an email. We'd love to help you!

{% assign email = ".rocks, stone, crown, @, sk, a" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="General Inquiry"%}


{% include snippets/contact-option-begin img="/images/contact/phone.svg" img-alt="phone-icon" title="Give us a call" %}

Interested in our technology? Then talk with us, we're all ears!

{% include snippets/contact-option-end tel="true" %}


{% include snippets/contact-option-begin img="/images/contact/wa.svg" img-alt="wa-icon" title="Send a Whatsapp" %}

If you prefer to chat with us, send us a message on Whatsapp.

{% include snippets/contact-option-end wa="true" %}


{% include snippets/contact-option-begin img="/images/contact/discord.svg" img-alt="discord-icon" title="Join our community" %}

For general questions or more in-depth discussions, use Discord!

{% include snippets/contact-option-end link="true" %}


{% include snippets/contact-option-begin img="/images/contact/financial.svg" img-alt="finance-icon" title="Financial contact" %}

For questions regarding offers, quotes, invoices, etc. you can send an email to

{% assign email = ".rocks, stone, crown, @, ling, bil" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="Financial Inquiry"%}


{% include snippets/global-container-end %}



{% include snippets/slogan-begin %}

Where to find us?

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin text-alignment='right' %}

The address of our head quarters:

**Crownstone**<br>
{{ site.company.street }} <br>
3013 AK Rotterdam <br>
The Netherlands <br>

**KvK**: {{ site.company.kvk }}<br>
**BTW/VAT**: {{ site.company.vat }}<br>
**IBAN**: {{ site.company.iban }}<br>
**BIC/SWIFT**: {{ site.company.bic }}

{% include snippets/two-cols-text-img-end xl-img="true" img='/images/contact/map.jpg' img-alt='map' %}

{% include snippets/full-width-container-end %}

Important. When sending parcels to our address make sure you use the complete street number: **{{ site.company.street_number }}** (including unit number).



{% include snippets/slogan-begin %}

How to find our office?

{% include snippets/slogan-end %}


{% include snippets/margin %}


**Driving:** We like to refer you to the directions provided by [Google Maps](https://www.google.ie/maps/place/Crownstone/@51.9233355,4.4669633,17z/data=!3m1!4b1!4m5!3m4!1s0x47c434a44d95a89d:0xc1a444b798de16f9!8m2!3d51.9233355!4d4.469152).


**Public Transportation:** The closest option for public transportation is Rotterdam central station. In there you have access to the train, bus, tram and metro. When facing the main entrance of the Rotterdam central station you will have at your left the "Groothandelsgebouw", where our office is located.


**Parking:** You can park in the Engels Parking, which is located at the back of the "Groothandelsgebouw". It can be accessed via the Conradstraat.

**Within the building:** Access the “Groothandelsgebouw” through the main entrance. Here, follow the directions for “Kleinhandel”. This means, go to the first floor, and then go left to the entrance to Kleinhandel. Follow the corridor all the way to the back of the building (you will pass several doors). Almost at the back of the building you will see the Crownstone office at the right.


{% include snippets/specs spread="true" %}

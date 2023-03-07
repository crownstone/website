---
layout: page
title: Contact
header: Contact
lang: nl
markdown: true
background-image: banner-address
banner-caption: Neem contact op!
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

Neem contact op

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin %}

{% include snippets/centered-text-home-begin background='light'%}

Wil je in contact komen? We zouden graag van je horen. Zo kun je ons bereiken...

{% include snippets/centered-text-home-end %}

{% include snippets/full-width-container-end %}



{% include snippets/global-container-begin %}


{% include snippets/contact-option-begin img="/images/contact/email.svg" img-alt="email-icon" title="Stuur ons een e-mail" %}

Voor algemene vragen stuur ons een e-mail. We helpen je graag!

{% assign email = ".rocks, stone, crown, @, sk, a" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="General Inquiry"%}


{% include snippets/contact-option-begin img="/images/contact/phone.svg" img-alt="phone-icon" title="Bel ons" %}

Interesse in onze technologie? Praat dan met ons, we zijn een en al oor!

{% include snippets/contact-option-end tel="true" %}


{% include snippets/contact-option-begin img="/images/contact/wa.svg" img-alt="wa-icon" title="Stuur een Whatsapp" %}

Als je liever met ons chat, stuur ons dan een WhatsApp-bericht.

{% include snippets/contact-option-end wa="true" %}


{% include snippets/contact-option-begin img="/images/contact/discord.svg" img-alt="discord-icon" title="Word lid van onze community" %}

Voor algemene vragen of meer diepgaande discussies, gebruik Discord!

{% include snippets/contact-option-end link="true" %}


{% include snippets/contact-option-begin img="/images/contact/financial.svg" img-alt="finance-icon" title="Financieel contact" %}

Voor vragen over offertes, offertes, facturen etc. kun je een e-mail sturen naar:

{% assign email = ".rocks, stone, crown, @, ling, bil" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="Financial Inquiry"%}


{% include snippets/global-container-end %}



{% include snippets/slogan-begin %}

Waar kunnen we worden gevonden?

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin text-alignment='right' %}

In het centrum van Rotterdam, naast Centraal, het station!

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

Belangrijk. Zorg ervoor dat je bij het verzenden van pakketten naar ons adres het volledige huisnummer gebruikt: **{{ site.company.street_number }}** (inclusief unitnummer).



{% include snippets/slogan-begin %}

Hoe kom ik daar?

{% include snippets/slogan-end %}


{% include snippets/margin %}


**Rijden:** Wij verwijzen je graag naar de routebeschrijving van [Google Maps](https://www.google.ie/maps/place/Crownstone/@51.9233355,4.4669633,17z/data=!3m1!4b1!4m5!3m4!1s0x47c434a44d95a89d:0xc1a444b798de16f9!8m2!3d51.9233355!4d4.469152).

**Openbaar vervoer:** De dichtstbijzijnde optie voor openbaar vervoer is Rotterdam centraal station. Daar heb je toegang tot de trein, bus, tram en metro. Als je met je gezicht naar de hoofdingang van het centraal station van Rotterdam kijkt, zie je aan de linkerkant het Groothandelsgebouw, waar ons kantoor is gevestigd.

**Parkeren:** Je kan parkeren in de Engels Parking, deze is gelegen aan de achterzijde van het Groothandelsgebouw. Het is te bereiken via de Conradstraat.

**Binnen het gebouw:** Via de hoofdentree toegang tot het Groothandelsgebouw. Volg hier de aanwijzingen voor “Kleinhandel”. Dit betekent: ga naar de eerste verdieping en ga dan links naar de ingang van Kleinhandel. Volg de gang helemaal naar de achterkant van het gebouw (je passeert verschillende deuren). Bijna aan de achterkant van het gebouw zie je aan de rechterkant het kantoor van Crownstone.

{% include snippets/specs spread="true" %}
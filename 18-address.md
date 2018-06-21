---
layout: page
title: Address
header: Address
group: Landing
markdown: true
background-image: banner-address.jpg
permalink: address/
---
{% include JB/setup %}

# Physical address

The address of Crownstone head quarters:

**Crownstone**
<br>
{{ site.company.street }}
<br>
{{ site.company.postal_code }}
<br>
KvK: {{ site.company.kvk }}
<br>
BTW/VAT: {{ site.company.vat }}
<br>
IBAN: {{ site.company.iban }}
<br>
BIC/SWIFT: {{ site.company.bic }}

Important. When sending parcels to our address make sure you use the complete street number: **{{ site.company.street_number }}**

# Financial Contact

For questions regarding offers, quotes, invoices, and other financial information, you can contact us best at:

{% assign email = ".rocks, stone, crown, @, ling, bil" | split: ", "  %}
<div class="email"><i class='el el-envelope'></i> email: {% include snippets/email subject="Financial Inquiry" email=email %}</div>


# General Contact

{% assign email = ".rocks, stone, crown, @, am, te" | split: ", "  %}
<div class="email"><i class='el el-envelope'></i> email: {% include snippets/email subject="General Inquiry" email=email %}</div>

<i class='el el-phone'></i> 
phone: 
<a href="tel:{{ site.company.phone_international }}">{{ site.company.phone_international }}</a> / {{ site.company.phone_local }}


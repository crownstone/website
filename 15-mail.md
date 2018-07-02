---
layout: page
title: Mail
header: Mail
group: Landing
permalink: mail/
markdown: true
redirect_url: mailto:team@crownstone.rocks
---
{% include JB/setup %}

# Mail

{% assign email = ".rocks, stone, crown, @, am, te" | split: ", "  %}
<div class="email">{% include snippets/email subject="Crownstone" email=email prefix="You will be (if supported by the browser) automatically redirected to: " postfix="." %}</div>

---
layout: page
title: App Help
header: Crownstone Modules
group: Landing
permalink: crownstone-modules-help/
background-image: banner-cs-modules-help.jpg
kramdown: 
  parse_block_html: true
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Crownstone modules Help

On the list below you can find some of the most frequent asked questions about Crownstone's functions such as *Switchcraft* and *Twilight* as well as information about installation behind ceiling lights and power outlets.


{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqFlashing" question="I tried turning off my LED light and it is still on (or flashes intermittently). Is this to be expected?" %}

This is a known issue. The current version of the Crownstone plugs (not the built-in version) implements a filter that allows small amounts of current to pass through to the device that's plugged in. 
Normally this is no issue, but nowadays there are LED lights that are so efficient that they can still function using this tiny bit of current. 
The next version of the Crownstone plug will not have this behavior, but will be functionally completely equivalent. 

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqInstallation" question="How to install the built-in Crownstones?" %}

Installation of the built-in Crownstone should be exactly as indicated in the installation manual included in every package (see also below). 
What is very important to do is to pre-bend the wires. Strip the wires at 7-9 mm. It can be at 7 mm if you have standard 2.5mm^2 wires of which the plastic fits snugly into the connector. 
You should not have thicker wires such as 6mm^2 (because these are meant for 32-40A appliances).

![Crownstone installation manual behind a light switch]({{ site.url }}/attachments/installing-crownstone-light.png){: style="width:100%"}

Note that the [wire coloring](https://en.wikipedia.org/wiki/Electrical_wiring) is different in each country. 
More importantly, in your home the colors might be actually incorrect! Never rely on the colors!

It is always recommended to switch the **live** line. The Crownstone switches between 1 and 4. The connectors 2 and 3 are shorted internally. 
The numbering is as follows: (1) Live to load (to the light), (2) Neutral to load, (3) Neutral from source (from the wall/grid), and (4) Live/phase from source. 

{% include snippets/faq-end %}


{% include snippets/faq-group-end %}



**Note:** Click on the questions to expand (and click again to collapse) the answers.

{% include snippets/column-end %}
{% include snippets/row-end %}

<script>
window.onload = function() {
    var hash = window.location.hash; 
    if(hash != "") {
        var id = hash.substr(1); 
        document.getElementById(id).classList.add("in");
    }
};
</script>

{% include snippets/bottom-margin %}
---
layout: page
title: Crownstone modules help
header: Crownstone modules help
group: Landing
permalink: crownstone-modules-faq/
background-image: banner-modules-faq.jpg
banner-caption: Crownstone modules
kramdown: 
  parse_block_html: true
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Crownstone Modules Help

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
More importantly, in your home the colors might be actually incorrect! Never rely on the colors! It is always recommended to switch the **live** line.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqPowerOutlet" question="Can Crownstones be placed only behind power outlets?" %}

No, the built-in Crownstones can be placed behind single or double power outlets as well as behind ceiling lights. For more information about how to install the Crownstones you can visit this [page]({{ site.url }}/installation/).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqWallSwitch" question="How do I place a Crownstone behind a wall switch?" %}

The built-in Crownstones cannot be placed behind a wall switch. To control a ceiling light, a Crownstone should be placed not behind the wall switch but behind the ceiling light itself. 
If you want to benefit from the Switchcraft function, an easy adaptation of your existing wall switches is needed. This allows them to work together with Crownstones. To know more about Switchcraft installation you can visit this [page]({{ site.url }}/installation/switchcraft).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqAnyLight" question="Does Crownstone work with any type of light?" %}

The Crownstone can switch any light, but it might not be able to dim every type of light. First and foremost, the light itself has to be dimmable. If your light (or group of lights) can be dimmed by a trailing edge dimmer and the total power usage is below 100W, the Crownstone can be used to dim the light(s).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqLedLamp" question="Does Crownstone work with any LED lamp?" %}

For a LED lamp it must be explicitly stated that the lamp is dimmable. Otherwise, a LED lamp cannot be dimmed.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqRemoteControl" question="Can I switch the Crownstones on or off when I’m away from home?" %}

We’re hard at work to finalize our Crownstone Hub. The hub will allow us to provide remote access. This feature will be added in the future.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqSocket" question="Do I have enough space behind my socket?" %}

This depends on how deep your socket is and how many cables are passing behind the socket. Generally, the Crownstone fits snugly in a 40mm junction box, where more space makes it easier to install. 50mm junction boxes are recommended to make installation easier.

{% include snippets/faq-end %}



{% include snippets/faq-group-end %}



**Note:** Click on the questions to expand (and click again to collapse) the answers.

{% include snippets/column-end %}
{% include snippets/row-end %}


{% include snippets/bottom-margin %}

<script>
window.onload = function() {
    var hash = window.location.hash; 
    if(hash !== " ") {
        var id = hash.substr(1);
        document.getElementById(id.concat('+')).classList.add("show");
        document.getElementById(id).scrollIntoView();
    }
};

function updateHash(new_hash){
    var hash = "#" + new_hash.slice(0, -1);
    window.history.pushState("", "", hash);
}
</script>
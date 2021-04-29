---
layout: page
title: General information help
header: General information help
permalink: general-info-faq/
background-image: banner-faq-general-info.jpg
banner-caption: General information
kramdown: 
  parse_block_html: true
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# General Information Help

{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqContractor" question="I can ask my contractor to install other wall switches, what should I ask him to install Crownstones?" %}

Crownstones work with any two-way switch (wisselschakelaar). If you want to install your Crownstone behind the switch instead of behind the light, you can ask your installer to add a neutral wire to the switch’s junction box.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqShower" question="Can I also place Crownstones in the shower?" %}

Crownstones do not have an IP rating and are not waterproof. Usually, the junction box distributing the wires is not right above the shower, so as long as the Crownstone itself is not exposed to moisture it can be used to control bathroom lights. It could be that the switches in your bathroom will switch both the phase and the neutral wires. In that case, Crownstone cannot be used to control the lights and be switched by the wall switch.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqSpotlightTransformer" question="I only want to switch and not dim, can I use spotlights with a transformer?" %}

Yes, that is possible.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqTransformer" question="Are there any other reasons to have spots without a transformer?" %}

Transformers are generally more expensive, since they drive the spots, have to be dimmable, have to be able to carry a certain wattage etc. You can visit this [page](https://www.lamp123.nl/merken/philips/led-lampen/detail/16215/philips-led-spot-dimbaar-38w-50w-gu10-warm-glow-6-stuks.html) to see an example of spots that don’t use a transformer.
{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqCentralBox" question="I have a central box in my ceiling, but it is already very full, now what?" %}

You can install the Crownstone inside of the cover of your light, or try to install the Crownstone behind the wall switch. This does require a neutral wire behind the wall switch however.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqSwitchDetection" question="Is it possible to use switch state detection (switchcraft) for a Crownstone that is not physically connected to a light?" %}

This is a question with a bit complicated answer! The change in switch state can be communicated by the Crownstone hub towards the Crownstone Event server. This will be able to update a Homey or Home Assistant hub. A Home Assistant hub with a Crownstone dongle can also receive those changes in switch state on its own. Given the incoming event those hubs can decide to switch Crownstones or other smart home devices.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqInstallation" question="Does Crownstone offer installation services?" %}

Regarding installation of Crownstones, there are 3 possibilities: you can do it yourself, via an external installer, by yourself or via Crownstone as part of our subscription service. For more information about our subscription service, you can visit this [page](https://subscribe.crownstone.rocks/welcome).

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
        document.getElementById(id).classList.add("show");
        document.getElementById(id).scrollIntoView();
    }
};
</script>
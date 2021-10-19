---
layout: page
title: Alexa Help
header: Alexa Help
group: Landing
permalink: integrations/alexa-faq/
background-image: banner-alexa-faq
banner-caption: Alexa integration
kramdown: 
  parse_block_html: true
---

{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Alexa Help

On the list below you can find some of the most frequent asked questions about Crownstone's integration with Alexa.


{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqAlexaScenes" question="How do I use scenes?" %}

Scenes as defined in the Crownstone app are not supported on Alexa at the moment. This will be added in the future. However, you can make your own scenes in the **Alexa app** to control groups of Crownstones.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqAlexaAutomations" question="Can I use automations?" %}

You can use the Alexa app to control groups of Crownstones with a single command.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqAlexaDim" question="I can't dim with Alexa, what can I do?" %}

For Alexa to dim your lights, the dimming function needs to be enabled for that specific Crownstone. You can do that in **My abilities** section of the Crownstone. This ability needs to be enabled per Crownstone.

![Crownstone dimming]({{ site.url }}/images/faq-app/dimming.png){: style="width:35%"}

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqAlexaHowToDim" question="How do I dim with Alexa?" %}

Once the dimming ability has been enabled, you can dim your lights by saying the command: *“Alexa set the lights to 50%”* or *“Alexa set lights to full”*. If you just say *“Alexa dim the lights”*, Alexa will say that that room or Crownstone is not responding.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGAlexaLocalization" question="How do I use localization with Alexa?" %}

Localization cannot be used in combination with Alexa at this time.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGAlexaOnlyLights" question="How do I turn on just the lights?" %}

The Alexa app allows you to define which Crownstones are lights. See this [page](https://www.amazon.com/gp/help/customer/display.html?nodeId=GWWP73LAN988JVAF) for more information. 
Once that’s set up, you can place those Crownstones in the **same room** as the Alexa within the Alexa app. If you tell Alexa *“turn on the lights”* it will turn them on for you.

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
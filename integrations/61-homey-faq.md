---
layout: page
title: Homey Help
header: Homey Help
group: Landing
permalink: integrations/homey-faq/
background-image: banner-homey-faq
banner-caption: Crownstone & Homey
kramdown: 
  parse_block_html: true
---

{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Homey Help

On the list below you can find some of the most frequent asked questions about the Crownstone's app for Homey.


{% include snippets/faq-group-begin %}



{% include snippets/faq-begin ref="faqHomeyDim" question="I can't dim a Crownstone, what can I do?" %}

To dim your lights the dimming function needs to be enabled for that specific Crownstone. You can do that in **My abilities** section of the Crownstone. This ability needs to be enabled per Crownstone.

![Crownstone dimming]({{ site.url }}/images/faq-app/dimming.png){: style="width:35%"}

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqHomeyHowToDim" question="How do I dim with Homey?" %}

Once the dimming ability has been enabled, you can dim your lights by using a **Dim to %** card as a **Then** card. 
It is also possible to use the dimming of a light as a trigger and use it as a **When** card. In that case you need to use a **Dim-level changed** card.  

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqHomeyPositioningNotWorking" question="Why I can't use the indoor positioning feature?" %}

For you to be able to use the indoor positioning feature, you need to have at least **four Crownstones** in your sphere and train them by walking a few rounds in a specific room. 
You do the same in the rest of the rooms so the Crownstone’s AI can learn in which room you are! 

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqHomeyPositioning" question="How do I use indoor positioning with Homey?" %}

To make use of the indoor positioning feature of Crownstone with Homey, you can use 2 types of cards: 

1. As a **When** card you can use the **Who? enters Where?** card. In that case, the event of a user entering a room will trigger the flow. 
2. As an **And** card you can use **Who? is present in the Where?** card. In that case, the event of a user being present in a room would be used as a condition in the flow.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqHomeyWallSwitch" question="Can I use a Crownstone simultaneously with a physical wall switch?" %}

Yes, it is possible. That is what we call Switchcraft. It is an easy adaptation of existing wall switches, allowing them to work together with Crownstones.
For more information on this topic, visit the [switchcraft]({{ site.url }}/installation/switchcraft) installation page.

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

---
layout: page
title: Indoor localization help
header: Indoor localization help
permalink: indoor-localization-faq/
background-image: banner-position-faq.jpg
banner-caption: Indoor localization
kramdown: 
  parse_block_html: true
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Indoor Localization Help

{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqIndoorLocalization" question="What is indoor localization?" %}

Crownstones know where you are if you carry a smart device with you such as your smartphone. Crownstones use the position of this smart device through measuring Bluetooth Low Energy signals. This makes it possible for the Crownstones to react upon your presence and proximity. This ability is called indoor positioning (or indoor localization). To enable this feature, you need to have a minimum number of Crownstones and train them by walking a few rounds in a specific room. You do the same in the rest of the rooms so the Crownstone’s AI can learn in which room you are!

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqMinimumStones" question="What is the minimum number of Crownstones that I need to enable indoor localization?" %}

**Four Crownstones** in the home is the absolute minimum. The more Crownstones are present, the more information the Crownstones have on your location. The localization works best with at least two Crownstones per room. The Crownstones in other rooms also contribute to the positioning accuracy because the Bluetooth signals go through walls. Hence, two Crownstones per room is often sufficient (the Crownstones in neighbouring rooms are participating as well).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqReactToPresence" question="How long does it take for a Crownstone to react to my presence?" %}

For the Crownstones to detect your presence it might take up to 10 seconds, which means that if you walk along the hallway to get to the toilet, the lights at the hallway won’t automatically turn on. On the other hand, if you stay in the hallway for a longer time, the Crownstone will realize that you actually are in the hallway and the lights will turn on.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqReactToAbsence" question="How long does it take for a Crownstone to detect that I leave a room?" %}

If you leave a room for a few minutes and then you come back, your lights won’t automatically turn off. In this case the Crownstones will still hear you, but they hear you’re in a different room. Then they wait 5 minutes to avoid turning stuff off and on. Crownstones detect your “absence” (not presence) after not hearing from you for 5 minutes. After that time, they will think that you have left the house (the sphere). Therefore, your lights and electronic devices (that don’t need to be on when you are not at home) can be turned off after you leave home for more than 5 minutes.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqAccuracy" question="How accurate is the indoor localization?" %}

First of all, the accuracy depends on several factors, such as the quality of the training, the number of Crownstones you have, the location of the Crownstones themselves, the presence of metal appliances, having your phone inside your pocket or purse, presence of people themselves, etc.
To know more about the effects of these factors over the accuracy of indoor localization, you can take a look at this [post]({{ site.url }}/2020/08/07/how-would-my-home-react-to-me) where more detailed explanation can be found.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqTraining" question="Are there any guidelines when training the Crownstones?" %}

To improve the quality of the training, it is recommended that you grab your phone and walk around the room trying to cover most places in the room and trying to hold your phone the same way you do when not training. 

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
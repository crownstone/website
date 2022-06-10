---
layout: page
title: Indoor localization help
header: Indoor localization help
permalink: indoor-localization-faq/
background-image: banner-position-faq
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

Crownstones know where you are if you carry a smart device with you such as your smartphone. Your smart device measures the Bluetooth Low Energy signals emitted by the Crownstones. This makes it possible for the Crownstones to react to your presence and proximity. This ability is called indoor positioning (or indoor localization). To enable this feature, you need to have a minimum number of Crownstones and train them by walking a few rounds in a specific room. You do the same in the rest of the rooms so the Crownstone’s AI can learn in which room you are!

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqMinimumStones" question="What is the minimum number of Crownstones that I need to enable indoor localization?" %}

**Four Crownstones** in the home is the absolute minimum. The more Crownstones are present, the more information the Crownstones have on your location. The localization works best with at least two Crownstones per room. The Crownstones in other rooms also contribute to the positioning accuracy because the Bluetooth signals go through walls. Hence, two Crownstones per room is often sufficient (the Crownstones in neighbouring rooms are participating as well).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqReactToPresence" question="How long does it take for a Crownstone to react to my presence?" %}

For the Crownstones to detect your presence it might take up to **10 seconds**, which means that if you walk along the hallway to get to the toilet, the lights at the hallway won’t automatically turn on. On the other hand, if you stay in the hallway for a longer time, the Crownstone will realize that you actually are in the hallway and the lights will turn on.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqReactToAbsence" question="How long does it take for a Crownstone to detect when I leave home?" %}

Crownstones detect that you leave the house after not hearing from you for **5 minutes**. After that time, they will think that you have left home (the sphere). Once a room is no longer occupied by anyone, a five-minute grace period starts. The five-minute grace is to avoid turning lights (or devices) off and on when you are still at home, but there is a long delay when your smartphone advertises your location to the Crownstones.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqAccuracy" question="How accurate is the indoor localization?" %}

It’s difficult to put a number (in meters) for this answer as the **accuracy depends on several factors** such as the number of Crownstones present, how the training was done, the presence of metal appliances or the presence of people, etc. A more detailed explanation of this topic can be found in this [post]({{ site.url }}/2020/08/07/how-would-my-home-react-to-me).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqTraining" question="Are there any guidelines when training the Crownstones?" %}

To improve the quality of the training, we give the following recommendations:

- Try to **cover evenly** most places in the room.
- Hold your phone the same way you do when **not training**.
- Try to hold your phone **not always** in the same orientation.
- Re-train a room when a Crownstone is **moved** to another place inside the room.
- Re-train a room when a Crownstones is **added** or removed from that room.

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
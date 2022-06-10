---
layout: page
title: Indoor positioning
header: Indoor positioning
description: "Information about indoor positioning for Crownstone app users"
kramdown: 
  parse_block_html: true
permalink: positioning-users/
background-image: banner-positioning-users
banner-caption: Indoor positioning
factors:
  - title: Absorbance of signals
    description: "The strength of the received signals gets reduced when the signals need to travel through other high density or conducting materials. For example, metal appliances that block and reflect wireless signals such as fridges, ovens, washing machines, dryers, etc. Increasing the number of Crownstones will diminish these effects."
    image: /images/positioning-users/absorbance.png
    image-alt: absorbance of signals
  - title: Coverage
    description: "Placing the Crownstones behind ceiling lights is of great help to increase the area covered by the Crownstones and diminish the absorbance of the broadcasted signals. This translates into better performance of the indoor localization."
    image: /images/positioning-users/coverage.png
    image-alt: ceiling lights
  - title: Areas vs Rooms
    description: "The indoor localization has difficulty with multiple areas (i.e. no wall is separating the areas) in the same room (i.e. a space delimited by walls). This is because the difference in the measured signal in these areas can be very small. Therefore, it is preferred to have walls in between so that the signal strength can be better differentiated."
    image: /images/positioning-users/areas-rooms.png
    image-alt: Areas vs Rooms
  - title: Symmetry
    description: "For indoor positioning, Crownstones should not only be placed along a single axis because not enough information will be provided to identify in which room you are. For example, in the setting shown above, the Crownstones will have trouble identifying in which room you are because the strength of the signals at the intersection on the left is the same as on the right."
    image: /images/positioning-users/symmetry.png
    image-alt: Symmetry
---
{% include JB/setup %}



{% include snippets/slogan-begin %}

What is indoor positioning?

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin text-alignment='right' %}

It's the ability of the Crownstones to know **where** you are when carrying a smart device with you. Your smart device measures the **Bluetooth Low Energy signals** emitted by the Crownstones. This makes it possible for the Crownstones to react to your **presence and proximity**.

{% include snippets/two-cols-text-img-end img='/images/positioning-users/map.jpg' img-alt='map' %}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin background='blue' %}

Requirements for indoor positioning

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin background="blue"%}

To enable indoor positioning the following is required:  

- A minimum of **4 Crownstones** in the same sphere. It is recommended to have at least 2 Crownstones per room for better performance.
- To **train** the Crownstones by walking a few rounds in a specific room.
- To enable **Bluetooth** in your smartphone.

{% include snippets/two-cols-text-img-end background="blue" img='/images/positioning-users/layout.jpg' img-alt='layout'%}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

How does indoor positioning work?

{% include snippets/slogan-end %}


{% include snippets/global-container-begin %}


{% include snippets/column-frame-begin img='/images/positioning-users/broadcasting.svg' img-alt='broadcasting' title="Broadcasting"%}

Every Crownstone in the sphere broadcasts its unique identifier a certain number of times per second. 

{% include snippets/column-frame-end %}


{% include snippets/column-frame-begin img='/images/positioning-users/training.svg' img-alt='training' title="Training"%}

While walking around a room, your phone records how strong each Crownstone is “heard” in different places of the room. This is what we call the fingerprint of a room.

{% include snippets/column-frame-end %}


{% include snippets/global-container-end %}


{% include snippets/global-container-begin %}


{% include snippets/column-frame-begin img='/images/positioning-users/sensing.svg' img-alt='sensing' title="Sensing"%}

Every second your phone will make a list of all the Crownstones it senses in that second, and how loud it perceives them.

{% include snippets/column-frame-end %}


{% include snippets/column-frame-begin img='/images/positioning-users/classification.svg' img-alt='classification' title="Classification"%}

Based on what the smartphone sensed, the Crownstone system will find the room that most closely matches that.

{% include snippets/column-frame-end %}


{% include snippets/global-container-end %}


{% include snippets/margin %}



{% include snippets/slogan-begin background='blue' %}

Placement of the Crownstones

{% include snippets/slogan-end %}


{% include snippets/full-width-container-begin background='blue'%}

{% include snippets/centered-text-home-begin background='dark'%}

Several factors should be considered when placing Crownstones. A brief explanation of some of these factors is mentioned below:

{% include snippets/centered-text-home-end %}

{% include snippets/full-width-container-end %}


{% include snippets/two-items-in-a-row id='factors' %}



{% include snippets/slogan-begin %}

When is indoor positioning of great help?

{% include snippets/slogan-end %}


{% include snippets/margin %}


{% include snippets/global-container-begin %}


{% include snippets/scenario-begin img="/images/positioning-users/coach.jpg" img-alt="coach" title="You sit on the couch and it is getting dark" %}

The lights in the room where you are can be **turned on automatically**. Presence information is needed to avoid lights going on even if you are not there!

{% include snippets/scenario-end %}


{% include snippets/scenario-begin img="/images/positioning-users/bed.jpg" img-alt="bed" title="Go to bed with peace of mind" %}

A small delay doesn't matter when **turning things off**. The only thing that matters is that you no longer have to do it manually! No more rounds of checking if everything has turned off!

{% include snippets/scenario-end %}


{% include snippets/scenario-begin img="/images/positioning-users/neighboring.jpg" img-alt="neighboring rooms" title="Neighboring rooms are also turned on" %}

Some people don't like to peer into or walk into a dark hallway or another room. If you turn on the lights in all **neighboring rooms** a small delay doesn't matter.

{% include snippets/scenario-end %}

{% include snippets/global-container-end %}


{% include snippets/margin %}



{% include snippets/slogan-begin %}

Frequently Asked Questions

{% include snippets/slogan-end %}


{% include snippets/global-container-begin %}

{% include snippets/margin %}

{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqMinimumStones" question="What is the minimum number of Crownstones needed for indoor positioning?" %}

**Four Crownstones** at home is the absolute minimum. The more Crownstones are present, the more information becomes available to know someone’s location. Since the Crownstones in other rooms also contribute to the positioning accuracy, two Crownstones per room is often sufficient. Depending on the house, if there are heavy reinforced concrete ceilings and walls, the signals won't travel as far and you might need more Crownstones.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqReactToPresence" question="How long does it take for a Crownstone to react to my presence?" %}

For a Crownstone to detect your presence it might take up to **10 seconds**. For example, when walking along the hallway to get to another room, the lights in the hallway won’t automatically turn on. However, they will do it if you stay in the hallway for a longer time.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqReactToAbsence" question="How long does it take for a Crownstone to detect when I leave home?" %}

Crownstones detect that you leave the house after not hearing from you for **5 minutes**. After that time, they will think that you have left home (the sphere). Once a room is no longer occupied by anyone, a five-minute grace period starts. The five-minute grace is to avoid turning lights (or devices) off and on when you are still at home, but there is a long delay when your smartphone advertises your location to the Crownstones.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqTraining" question="Are there any guidelines when training the Crownstones?" %}

To improve the quality of the training, we give the following recommendations:

- Try to **cover evenly** most places in the room.
- Hold your phone the same way you do when **not training**.
- Try to hold your phone **not always** in the same orientation.
- Re-train a room when a Crownstone is **moved** to another place inside the room.
- Re-train a room when a Crownstones is **added** or removed from that room.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqAccuracy" question="How accurate is the indoor positioning?" %}

It’s difficult to put a number (in meters) for this answer as the **accuracy depends on several factors** such as the number of Crownstones present, how the training was done, the presence of metal appliances or the presence of people, etc. A more detailed explanation of this topic can be found in this [post]({{ site.url }}/2020/08/07/how-would-my-home-react-to-me).

{% include snippets/faq-end %}


{% include snippets/faq-group-end %}

{% include snippets/margin %}

{% include snippets/global-container-end %}


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
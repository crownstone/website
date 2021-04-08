---
layout: page
title: Google Home Help
header: Google Home Help
group: Landing
permalink: integrations/google-home-faq/
background-image: banner-faq-google.jpg
kramdown: 
  parse_block_html: true
---

{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Google Home Help

On the list below you can find some of the most frequent asked questions about Crownstone's integration with Google Home and Google Assistant.


{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqGoogleDim" question="Google does not dim my lights, what can I do?" %}

For Google Assistant to dim your lights, the dimming function needs to be enabled for that specific Crownstone. You can do that in **My abilities** section of the Crownstone. This ability needs to be enabled per Crownstone.

![Crownstone dimming]({{ site.url }}/images/faq-app/dimming.png){: style="width:35%"}

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGoogleSmartTv" question="Why does the Crownstone behind my smart TV not react to my voice command?" %}

If your Crownstone behind your smart TV is given the name **TV**, it will create confusion to Google since both devices have the same name. As a result it will only turn on/off your smart TV, but not the Crownstone itself. If you want to be able to control your Crownstone behind the TV with voice commands, you should change the name of the Crownstone to something like **Screen**. 

Alternatively, you can also set a smart timer to your Crownstone behind the smart TV so you don’t need to turn it on/off when still at home. 

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGoogleDeviceName" question="Why cannot Google Assistant understand the name of a device?" %}

There are some device names that are not recommended since they increase the chances of misinterpretation. Words such as “TV, light, scene, turn, switch, etc.” as a device name are not recommended. It is better if you avoid using the same word in various names (like “bathroom” as a room and “bathroom lights” as a device).

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGoogleDevices" question="Is it possible to use more than one Google Home device to control my Crownstones?" %}

Yes, it is possible. For example, if you have several Google devices at home, you can give a voice command to a Google device in the kitchen to turn on/off or dim the lights in the Living room. You only need to be sure those Crownstones are also added in your Google Home app, and that these devices are placed in the same Google Account. If you have Google Assistant app in your phone, you can also control your Crownstones by giving voice commands directly to your phone.

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGoogleMissingDevices" question="I don’t see all my Crownstone devices in my Google Home account, what can I do?" %}

If you added more Crownstone devices to your Sphere after you linked your Crownstone account to Google Home, they will appear under the **Linked to you** section located at the end of the list of devices in the Google Home app. In this case you only need to assign your Crownstones to a room in the Google Home app, to do so you can see the instructions on this [page](https://crownstone.rocks/integrations/google-home/).

If your Crownstone device still does not appear under the **Linked to you** section, you can reconnect your Crownstone account to Google Home. To do so, follow these steps:
 
1. Go to your Google Home app on press on the **plus** button located at the top left corner.
2. Select **Set up device** under the Add to home section.
3. Press on **Works with Google.**
4. Under Linked services you should see Crownstone together with the number of devices linked to your Google account. Next, press on it.
5. In the window that pops up, press on **Reconnect account.**

![Google home faq]({{ site.url }}/images/google-home-faq.png){: style="width:95%"}

{% include snippets/faq-end %}



{% include snippets/faq-begin ref="faqGoogleMultipleDevices" question="Can I control more than one Crownstone using one voice command?" %}

Yes, it is possible. As long as the Crownstones are included into a room in the Google Home App or into an Assistant routine, several Crownstones can be controlled with a single voice command. For example, if you say: ‘Hey Google, turn on the lights’, all lights belonging to the room where you are will be turned on. 

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
---
layout           : page
title            : "Integrate Crownstone with Homey"
header           : "Integrate Crownstone with Homey"
description      : "Crownstone brings the functionality of switching, dimming, and presence information to your Homey flows"
markdown         : true
background-image : banner-homey
permalink        : integrations/homey/
---

{% include JB/setup %}


# Homey

With the Crownstone app for Homey you can have not only Crownstones reacting to **your presence**, but also other devices coupled to your Homey. 
This is possible when using Crownstone within your **Homey flows**. For example, now both your Crownstones and your Philips Hue lights can be switched on when you are in the living room and it is getting dark!

## Getting started

Homey connects to a device by installing an app. Before you can add to Homey any light or other devices that are connected to your Crownstones, choose the **Crownstone app** from the Homey app collection and install it. 
We have included some instructions below for you to get started with the Crownstone app for Homey.

### Adding the Crownstone app to Homey

1. Go to your Homey app and press on the **plus** button located at the top left corner. Then select **New device**.
   ![Homey app]({{ site.url }}/attachments/homey/homey1.jpg){: style="width:80%"}

2. In the search menu type **Crownstone** and select this option.
   ![Homey app]({{ site.url }}/attachments/homey/homey2.jpg){: style="width:80%"}

3. Press on the **Connect** button.
   ![Homey app]({{ site.url }}/attachments/homey/homey3.jpg){: style="width:80%"}

4. In the new window, fill in the credentials of your Crownstone account and press on **Login**.
   ![Homey app]({{ site.url }}/attachments/homey/homey4.jpg){: style="width:80%"}
   
5. Once logged in, you will need to select the Crownstones that you want to add to your Homey app. After that, press on **Next**.
   ![Homey app]({{ site.url }}/attachments/homey/homey5.jpg){: style="width:80%"}

6. The Crownstone app is now linked to your Homey! The added Crownstones will appear below the **Home section**. From there you can assign them to a room in your Homey app.
   ![Homey app]({{ site.url }}/attachments/homey/homey6.jpg){: style="width:80%"}
   

## Including your Crownstones into a flow

Flows are scenarios in Homey that do things automatically for you. Flows in Homey work via a **when-and-then** principle. 
Let's make a pair of flows where Crownstones are being included.

    
### Presence aware sunset

With this flow you can make your **Philips hue** sunset scene to get activate only when someone is present in a room! 

1. The **When card** will be a Date & time card **The sun sets**.
2. The **And card** will be a Crownstone card of **who is present where**. In this case we want to activate the scene when anybody is present in the room.
3. The **Then card** will be a Philips hue card of **Activate a scene**. Choose your favorite scene for the sunset!

    ![Flow2]({{ site.url }}/attachments/homey/flow2.png){: style="width:75%"}

    
### Automatic cool down

With this flow you can make your fan automatically turning on when someone enters a room and the temperature is within a certain range.

1. The **When card** will be a Crownstone card **who enters where**. Since we want to make it personalized, a person and a room are chosen. You can also choose anybody as person.
2. The **And card** will be a Tado card of **temperature range**. You can set the range at which you want the fan to automatically turn on.
3. The **Then card** will be a **device on** card. In this case your fan. 

   ![Flow1]({{ site.url }}/attachments/homey/flow1.png){: style="width:75%"}
   
## More information 

You can go to this [page]({{ site.url }}/integrations/homey-faq/) to check some of the most frequent questions related to the Crownstone app for Homey.

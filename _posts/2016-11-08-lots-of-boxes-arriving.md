---
layout: post
title: "Lots of boxes arriving!"
description: "The Crownstone products are delivered at the Crownstone headquarters."
tags: [crownstone, unpacking, delivery, electronics, sourcing]
author: annevanrossum
---
{% include JB/setup %}

# Christmas early this year?

Plastics and metal arrived from China from the facilities of [AMS](http://www.ams-site.com/) last week! That makes everybody super happy of course, especially Bart! :-)

![Box Arrival]({{ site.url }}/attachments/box-arrival-bart.jpg "Box Arrival Bart"){: .float-left width="42%" style="margin:4%"}
![Box Arrival]({{ site.url }}/attachments/box-arrival-dominik.jpg "Box Arrival Dominik"){: .float-right width="42%" style="margin:4%"}
![Box Arrival]({{ site.url }}/attachments/box-arrival-marc.jpg "Box Arrival Marc"){: .float-left width="42%" style="margin:4%"}
![Box Arrival]({{ site.url }}/attachments/box-arrival.jpg "Box Arrival"){: .float-right width="42%" style="margin:4%"}

Now we only have to wait for the electronics to arrive! The PCBs are this week populated in Czech republic and the first 7 panels (with each 15 pieces, and yes, that number can also be [optimized](http://circuitpeople.com/blog/panelsinpcbmanufacturing.aspx)) will be sent immediately when they're done. In the meantime we are figuring out how to optimize the process. [Geolumen](http://www.geolumen.it/), a fellow startup at Rockstart, built their own assembly line in the last months. [Pick-and-place](https://www.wikiwand.com/en/SMT_placement_equipment) of the electronics is quite expensive to outsource. To fulfill our cost reduction plans we will have to do the same!

If you like to be involved in this process, drop us a line of course! We will do the product assembly for the first Crownstones ourselves, so we can guarantee their quality and speed up the delivery to everybody.
 
## Sourcing Components

 Our sourcing process is one of the serious games that have to be played in a hardware startup. It is a big part of cost optimization. You do not want to know how much we paid to have your product made! This [investor's guide](http://hwguide.spetic.si/) to hardware states $25k-$250k for funding 3-6 months of personnel costs for software contrasting it with between 500k and $1MM for hardware. It's hence not surprising that hardware startups like the one behind the cool [keezel](https://tweakers.net/nieuws/104199/amsterdamse-start-up-wil-gebruik-wifi-hotspots-veiliger-maken-met-router.html) product - a secure router that you can use in public places - although raising [$1MM on Indiegogo](https://www.indiegogo.com/projects/keezel-online-security-for-every-device-everywhere-wifi-technology#/) is still strapped for cash! To give you a little bit of insight into this sourcing process, take a look at this screenshot of [Octopart](https://octopart.com/bom-tool) Marc took.

![Sourcing Components]({{ site.url }}/attachments/sourcing-components.png "Sourcing Components"){: width="80%" style="display: block; margin-left: auto; margin-right: auto"}

 Every component is automatically sourced from the main distributor sites, like Digi-Key, Farnell, and Mouser. Of course to scale up our production this will not be sufficient. Individual negotiations with manufacturers have already started. However, it's a good starting point that saves a lot of time!

## Built-in Crownstones

 Finally, we need to give the built-in Crownstones also some love. They have been neglected in the last few newsletters! 

![Built-in Crownstone]({{ site.url }}/attachments/builtin-crownstone-view0.jpg "Built-in Crownstone"){: .float-left width="42%" style="margin:4%"}
![Built-in Crownstone]({{ site.url }}/attachments/builtin-crownstone-view1.jpg "Built-in Crownstone"){: .float-right width="42%" style="margin:4%"}
![Built-in Crownstone]({{ site.url }}/attachments/builtin-crownstone-view2.jpg "Built-in Crownstone"){: .float-left width="42%" style="margin:4%"}
![Built-in Crownstone]({{ site.url }}/attachments/builtin-crownstone-view3.jpg "Built-in Crownstone"){: .float-right width="42%" style="margin:4%"}

 You see that the shape has been slightly adapted from the first development items to accommodate for both the relays and the X2 capacitor. The thickness is one of the most important design considerations (besides of course fitting in the junction box). By having the relay and the capacitor on their side we're able to reach a thinness of only 14 mm (1 mm less than the 15 mm we anticipated)!

## Action!

 There were many other interesting events in the last weeks. At Mediamarkt [we were second](https://twitter.com/annevanrossum/status/794872193725460480) right after flow.ai in a Get in the Ring competition. We're looking forward to build smart homes in their stores! We also discussed with the engineers from Nordic how to advance the [OpenMesh stack](https://github.com/NordicSemiconductor/nRF51-ble-bcast-mesh) (mainly about firmware updates over the air, security, and robustness) and how to integrate with the energy-harvesting [EnOcean switches](https://www.enocean.com/en/enocean_modules_2.4ghz_ble/ptm-215b/) which do not require batteries. This means you can place these anywhere you want, be it under your desk, on a door, or near your bed, and control Crownstones from there.

 We're gonna put up a board on which you can vote for functionality this sprint! You want to use the Crownstones for a wake-up light? Vote for it! You want to use the Crownstones to know if your laundry machine is done? Vote for it! And if you don't wanna wait, start [programming your own apps already](https://crownstone.rocks/business/developers/)!
  

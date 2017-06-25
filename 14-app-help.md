---
layout: page
title: App Help
header: Crownstone Apps
group: Landing
permalink: app-help/
---
{% include JB/setup %}

<div class="container">
    <div class="row">
        <div class="col-md-12 col-sm-12">
            <h1>App Help</h1>

            <p>The app itself is self-explanatory. However, if there are particular questions coming in we will use them to answer them on this page.</p>

            <div class="bs-example">
                <div class="panel-group" id="accordion">

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseNewStone">How to add a Crownstone in the app?</a>
                            </h4>
                        </div>
                        <div id="collapseNewStone" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <p>
                                Open the Crownstone app, just in the general overview. Now power on the Crownstone (plug it in). Keep the phone <strong>really close</strong> and this means <strong>really</strong> close. You will see a blue icon flashing. This is the Crownstone discovered by the phone. Click on it and read the instruction for setup. After this procedure you are the digital owner of the Crownstone and you can decide who is allowed to use it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">How to enable dimming lights?</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <p>
Dimming is already possible in the Crownstone firmware. However, to prevent you from accidently dimming the wrong devices we have not yet enabled it in the app. See our <a href="https://trello.com/b/6rUcIt62/crownstone-transparent-product-roadmap">roadmap</a> that lists when to expect which functionality and where you can vote to make sure the functionality you like most will increase in priority.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">What is a sphere?</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                One basic concept the Crownstone app introduces is the <strong>sphere</strong>. A sphere is a loosely connected group of Crownstones, a little bit like a 
<a href="https://support.google.com/plus/answer/6320407?hl=en">circle on Google+</a>, 
a 
<a href="https://www.facebook.com/help/104002523024878">page on Facebook</a>, 
or a 
<a href="https://support.twitter.com/articles/76460">list on Twitter</a>.
A very logical sphere is your home. Another logical sphere is your office. However, nothing prevents you from defining a sphere that is not confined to a single physical space. Access rights are defined on the level of a sphere. This makes it easy to give other people access to select groups of Crownstones that you own.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">How to enable the indoor localization?</a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                If you have four or more Crownstones in a single sphere, there will be an icon at the top-left that allows you to initiate teaching your home the rooms that are available. Each room gets a little sign that indicates that it can be taught. It is important not to place the Crownstones too far from each other. They have to be a maximum of 10-20 meters apart, preferably in adjacent rooms. Currently the indoor localization is disabled if in a room not enough Crownstones are visible. This is due to the fact that the current machine learning method cannot cope yet with seeing less Crownstones. The training itself is by walking around in the room when pressing a big round button in the interface. You can subsequently couple actions to the interface if you enable Beta functionality.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">I tried turning off my LED light with the Crownstone and it's still on (or flashes intermittently). Is this to be expected?</a>
                            </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
This is a known issue. The current version of the Crownstone plugs (not the built-in version) implements a filter that allows small amounts of current to pass through to the device that's plugged in. Normally this is no issue, but nowadays ther are LED lights that are so efficient that they can still function using this tiny bit of current. The next version of the Crownstone plug will not have this behavior, but will be functionally completely equivalent. 
                                </p>
                            </div>
                        </div>
                    </div>



                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">How to install the built-in Crownstones?</a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
Installation of the built-in Crownstone should be exactly as indicated in the installation manual included in every package (see also below). What is very important to do is to pre-bend the wires. Strip the wires at 7-9 mm. It can be at 7 mm if you have standard 2.5mm^2 wires of which the plastic fits snugly into the connector. You should not have thicker wires such as 6mm^2 (because these are meant for 32-40A appliances).</p>
<p>
<img src="{{ site.url }}/attachments/installing-crownstone-light.png" width="100%" title="Crownstone installation manual behind a light switch" alt="Crownstone installation manual behind a light switch">
</p>
<p>
Note that the <a href="https://en.wikipedia.org/wiki/Electrical_wiring">wire coloring</a> are different in each country. More importantly, in your home they might be incorrect!
</p>
<p>
It is always recommended to switch the <strong>live</strong> line. The Crownstone switches between 1 and 4. The connectors 2 and 3 are shorted internally. The numbering is as follows: (1) live to load (to the light), (2) neutral to load, (3) neutral from source (from the wall/grid), and (4) live/phase from source. 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">How can I factory reset the Crownstone?</a>
                            </h4>
                        </div>
                        <div id="collapseSix" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                Due to security reasons you cannot always perform a factory reset. A factory reset is only possible the first 20 seconds after you have put power on the Crownstone. After that initial period this will not be possible except if you turn the power off and on again. Note that the possibility of a factory reset might be disabled in future editions (in that case this answer will be updated). 
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
                <p><strong>Note:</strong> Click on the linked heading text to expand or collapse the answers.</p>
            </div>
        </div>
    </div>  
</div>

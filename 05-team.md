---
layout: page
title: Team
header: Pages
description: "Follow us an Facebook, Twitter, or contact us individually!"
keywords: "team, follow us, facebook, twitter, contact, personal, Crownstone"
kramdown: 
  parse_block_html: true
background-image: banner-team.jpg
group: [navigation, navigation-consumer-footer]
permalink: team/
custom_css:
- https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}
                
# Vision
                
In the future indoor positioning is going to bigger than outdoor positioning (GPS). Our homes and offices will never be smart if they do not know where we are! 

There will be a time that every power outlet and light socket will have a chip. A smart outlet brings comfort, safety, and energy savings. There are many, many more power outlets than smartphones in the world. That's the potential impact of a company like Crownstone! Billions of low-energy chips! Billions of energy savings each year!

{% include snippets/column-end %}
{% include snippets/column-begin %}

# Who are we?

The best way to show who we are is with a little video!
                    
You can follow us as a team on [Facebook](https://www.facebook.com/crownstones) and [Twitter](https://twitter.com/CrownstoneRocks). You can follow individual team members on Twitter as well, like [Hans](https://twitter.com/hans_abbink), who loves enterpreneurship, [Peet](https://twitter.com/pmavantooren), who supports many crowdfunding projects, or [Anne](https://twitter.com/annevanrossum), who can't stop talking about robots and artificial intelligence.
                    
Apart from work, if you're into martial arts, drop Bart a message. Peet likes everything that involves audio and Alex is into 3D animations.

{% include snippets/column-end %}
{% include snippets/column-begin %}

{% vimeo 139370746 "Team introduction" 1024 840 %}

{% include snippets/column-end %}
{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin %}
                
# Where are we?
                    
Right in the center of Rotterdam!
                
__Crownstone__
<br>
{{ site.company.street }}
<br>
{{ site.company.postal_code }}
<br>
KvK: {{ site.company.kvk }}
<br>
BTW/VAT: {{ site.company.vat }}
 
## Contact

<div class="email">
<i class='el el-envelope'></i> 
email: team@...
</div>

<p>
<i class='el el-phone'></i> 
phone: 
<a href="tel:{{ site.company.phone_international }}">{{ site.company.phone_international }}</a> / {{ site.company.phone_local }}
</p>

{% include snippets/column-end %}
{% include snippets/column-begin %}
                
# How to get there?

Crownstone is housed in the beautiful Groothandelsgebouw at Rotterdam Central Station (<a href="http://ghg.nl/en/contact/">parking for and direction by car</a>). We recommend to come by public transport, it's at the station!

<!-- 9292 widget v2 -->
<div class="widget">
<center>
<a href='//9292.nl/en?to=rotterdam%2Fstationsplein-45' data-9292='widget' data-9292-text='Crownstone' data-9292-ref='rotterdam/stationsplein-45' data-9292-width='290' data-9292-height='550' data-9292-api-key='de198d3c876f29d3ca91379d27873b7d741a86dcf61dcdca60920e38dc45ffee' data-9292-widget-key='3bbbf433cf353c1fca32bb2a9327c8497556f7b27ae6d388ef9e02f195d17667' data-targetblank="on">Plan my journey</a>
<script src='//9292.nl/static/js/widget.js'></script>
</center>
</div>

Plan your return trip with [Rotterdam Central departure times](http://www.ns.nl/actuele-vertrektijden/avt?station=RTD). Count at least two minutes walking through the Groothandelsgebouw.

{% include snippets/column-end %}
{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}
                
# Background

Crownstone has been originally developed by DoBots, has as seed investor [Almende Investments](http://almende-investments.com), is part of the [Rockstart accelerator](http://www.rockstart.com/blog/rockstart-introduces-participants-of-2016-smart-energy-accelerator), and launched as company in April 2016.

We recommend that you scroll through the website and the blog to know what the role of our products can be in a business-to-business context. Indoor localisation has wide applicability apart from use at home, including (informal) care, flexible places at work, and preventive maintenance.

We have a very transparent manner of operation. You can find a lot of information about us online, such as the [Kickstarter](https://www.kickstarter.com/projects/dobots/crownstone)
where we raised over 70.000 euros for the Crownstones, our [blog]({{ BASE_PATH }}/blog), where we give you a lot of insight into our projects, and our [github repositories](https://github.com/crownstone).

Find pictures and logos on the [press kit]({{ BASE_PATH }}/presskit) page.

{% include snippets/column-end %}
{% include snippets/row-end %}

{% include snippets/divider %}


{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Core Team

The Crownstone team is extremely well versed in a wide variety of skills. We have all been to
Dutch or international universities and like challenges above anything else!

It is easy to contact each of us individually. Just use our first name and <abbr title="for example: joe@crownstone.rocks">attach @crownstone.rocks</abbr> at the end.

{% include snippets/column-end %}
{% include snippets/row-end no-container-end=true %}

{% include snippets/row-begin no-container-begin=true %}

{% include snippets/team-member-begin name="Anne van Rossum" picture="annevanrossum.jpg" title="CEO" %}

<p>
{% include snippets/social channel="linkedin" nickname="annevanrossum" %}
{% include snippets/social channel="twitter" nickname="annevanrossum" %}
{% include snippets/social channel="googleplus" nickname="+Annevanrossum" %}
{% include snippets/social channel="github" nickname="mrquincle" %}
{% include snippets/social channel="website" nickname="annevanrossum.com" %}
</p>

<p>
Anne studied electrical engineering and cognitive psychology. At Almende and DoBots he coordinated and did research on autonomous robots. Every Wednesday is math day!
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Peet van Tooren" picture="peetvantooren.jpg" title="CTO" %}
                    
<p>
{% include snippets/social channel="linkedin" nickname="peetvantooren" %}
{% include snippets/social channel="twitter" nickname="PMAvanTooren" %}
{% include snippets/social channel="googleplus" nickname="+PeetToorenvan" %}
</p>
                    
<p>
Peet worked for a lot of international companies (Siemens, Philips) in the car industry, mainly on navigation software.
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Bart van Vliet" picture="bartvanvliet.jpg" title="Software developer" %}
                    
<p>
{% include snippets/social channel="linkedin" nickname="bart-van-vliet-4197b8103" %}
{% include snippets/social channel="twitter" nickname="Bart_vanVliet" %}
{% include snippets/social channel="github" nickname="vliedel" %}
</p>

<p>
Bart has a masters in Mechanical Engineering and does not shy away from the most in-depth embedded programming jobs. Ask him anything on the nRF architecture!
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Alex de Mulder" picture="alexdemulder.jpg" title="Designer & Software developer" %}

<p>
{% include snippets/social channel="linkedin" nickname="alex-de-mulder-443a1bb" %}
{% include snippets/social channel="vimeo" nickname="alexdemulder" %}
{% include snippets/social channel="github" nickname="AlexDM0" %}
</p>

<p>
Alex has a masters in Applied Physics and is a stellar developer. At times his physics training shows, for example in the beautiful visualizations in our app.
</p>

{% include snippets/team-member-end %}

{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}

{% include snippets/column-begin colsize="12" %}

# Crownstone Advisors and Experts

At Crownstone we have multiple advisors and experts who help us bring Crownstone to the market. Hans Abbink is a successful entrepreneur and investor in the Rotterdam region under the investment company [Almende Investments](http://almende-investments.com). Alexander Weisz is an expert in management and business development for starting companies such as [Finch Buildings](http://www.finchbuildings.com/en/) and [Quantoz](https://quantoz.com). Berend Olde Rikkert has ample experience in the energy sector, for example at the successful [Quby](https://www.quby.com) company, known from the Eneco Toon and as vice president Energy and Utilities at Capgemini.

{% include snippets/column-end %}
{% include snippets/row-end no-container-end=true %}

{% include snippets/row-begin no-container-begin=true %}

{% include snippets/team-member-begin name="Hans Abbink" picture="hansabbink.jpg" title="Founder Almende Investments" %}

<p>
{% include snippets/social channel="linkedin" nickname="hansabbink" %}
{% include snippets/social channel="twitter" nickname="hans_abbink" %}
{% include snippets/social channel="website" nickname="almende-investments.com/" %}
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Alexander Weisz" picture="alexanderweisz.jpg" title="Business Consultant" %}

<p>
{% include snippets/social channel="linkedin" nickname="alexanderjweisz" %}
{% include snippets/social channel="twitter" nickname="alexander_we" %}
{% include snippets/social channel="website" nickname="alexanderweisz.nl" %}
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Berend Olde Rikkert" picture="berendolderikkert.jpg" title="Partnership Director" %}

<p>
{% include snippets/social channel="linkedin" nickname="berend-olde-rikkert-5904421" %}
{% include snippets/social channel="twitter" nickname="berendor" %}
</p>

{% include snippets/team-member-end %}

{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Our Current Master Students
                    
Feel free to contact our master students to get some additional insight into Crownstone. Use their first name and <abbr title="for example: joe@crownstone.rocks">attach @crownstone.rocks</abbr> at the end.

{% include snippets/column-end %}
{% include snippets/row-end no-container-end=true %}

{% include snippets/row-begin no-container-begin=true %}

{% include snippets/team-member-begin name="Victoria Mavrikopoulou" picture="victoriamavrikopoulou.png" title="TU Delft" %}

<p>
Active and passive in-network localization
</p>

{% include snippets/team-member-end %}

{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Interns

Our most recent interns, who perform a wide range of tasks. They help people with advice on Crownstones, test all kind of smartphone variants, organize hackathons, building a booth for trade fairs, desoldering and soldering electronic components, product assembly, and much more.

{% include snippets/column-end %}
{% include snippets/row-end no-container-end=true %}

{% include snippets/row-begin no-container-begin=true %}

{% include snippets/team-member-begin name="Edwin Aleksanian" picture="edwinaleksanian.png" title="Human Technologies, Techniek College Rotterdam" %}

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Jeandre Artsen" picture="jeandreartsen.png" title="Human Technologies, Techniek College Rotterdam" %}

{% include snippets/team-member-end %}

{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Hall of Fame

For a nice overview of past employees and interns, who have worked on robotics and wireless sensor networks at Crownstone, our sister company [DoBots](https://dobots.nl), or our mother company [Almende](http://almende.com), (scientific research), take a look at [our hall of fame]({{ BASE_PATH }}/hall-of-fame).

Really, go there! :-) There is lot of interesting research and perhaps software you can use yourself!

{% include snippets/column-end %}
{% include snippets/row-end %}


<script type="text/javascript">
  function addEmailAddress() {
    var a = new Array("{{ site.contact-team.email[0] }}", "{{ site.contact-team.email[1] }}", "{{ site.contact-team.email[2] }}", "{{ site.contact-team.email[3] }}", "{{ site.contact-team.email[4] }}", "{{ site.contact-team.email[5] }}");
    var address = "";
    for (var i = a.length - 1; i >=0; i--) {
      address += a[i];
    }
    var list = document.getElementsByClassName("email");
    for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = "<p><i class='el el-envelope'></i> email: <a href='mailto:" + address + "'>" + address + "</a></p>";
    }
  }
  addEmailAddress();
</script>

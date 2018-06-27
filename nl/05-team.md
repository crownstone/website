---
layout: page
title: Team
header: Pages
group: [navigation, navigation-consumer-footer]
lang: nl
kramdown: 
  parse_block_html: true
background-image: banner-team.jpg
permalink: team/
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}
                
# Visie

In de toekomst verwachten wij dat positiebepaling binnenshuis groter gaat zijn dan positiebepaling buitenshuis (GPS). 
Onze huizen en kantoren kunnen nooit echt slim worden als ze niet weten waar we zijn! 

Er komt een moment wanneer elk stopcontact en elke fitting een chip heeft. Slimme stopcontactjes betekent uiteindelijk comfort, veiligheid en energiebesparing. Er zijn veel meer stopcontacten dan smartphones in de wereld. Dat is dan ook de potentiele impact van een bedrijf zoals Crownstone. Miljarden van chips! Miljarden aan energiebesparing per jaar!

{% include snippets/column-end %}
{% include snippets/column-begin %}

# Wie zijn we?

Dit kunnen we het beste laten zien door een korte clip! 

Je kan ons als team volgen op [Facebook](https://www.facebook.com/crownstones) en [Twitter](https://twitter.com/CrownstoneRocks). 
Ook kan je ons individueel volgen op bijvoorbeeld Twitter, bijvoorbeeld [Hans](https://twitter.com/hans_abbink)
als Rotterdamse ondernemer, [Peet](https://twitter.com/pmavantooren), 
een fervent supporter van crowdfunding projecten, of [Anne](https://twitter.com/annevanrossum), met zijn voorkeur voor robots en kunstmatige intelligentie.

ls je graag wilt sparren (en dan bedoelen we vechtsporten), stuur Bart een berichtje. Peet houdt daarnaast van alles dat audio betreft, en een van Alex' favoriete bezigheden is 3D animaties.

{% include snippets/column-end %}
{% include snippets/column-begin %}

{% vimeo 139370746 "Team introduction" 1024 840 %}

{% include snippets/column-end %}
{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin %}
                
# Waar kunnen we worden gevonden?
                    
In het centrum van Rotterdam, naast Centraal, het station!
                
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

{% assign email = ".rocks, stone, crown, @, am, te" | split: ", "  %}
<div class="email"><i class='el el-envelope'></i> email: {% include snippets/email subject="Crownstone Contact" email=email %}</div>

<p>
<i class='el el-phone'></i> 
phone: 
<a href="tel:{{ site.company.phone_international }}">{{ site.company.phone_international }}</a> / {{ site.company.phone_local }}
</p>

{% include snippets/column-end %}
{% include snippets/column-begin %}
                
# Hoe kom ik daar?

Crownstone B.V. is gevestigd in het indrukwekkende Groothandelsgebouw naast Rotterdam Centraal
([parkeren en route per auto](http://ghg.nl/contact/)). 
We raden aan om met het openbaar vervoer te komen, het is echt naast het station!

<!-- 9292 widget v1 -->
<div class="widget">
<center>
<a href='https://9292.nl/?naar=rotterdam%2Fstationsplein-45' data-9292='widget' data-9292-text='Crownstone' data-9292-ref='rotterdam/stationsplein-45' data-9292-width='290' data-9292-height='550' data-9292-api-key='de198d3c876f29d3ca91379d27873b7d741a86dcf61dcdca60920e38dc45ffee' data-9292-widget-key='3bbbf433cf353c1fca32bb2a9327c8497556f7b27ae6d388ef9e02f195d17667' data-targetblank="on">Plan mijn reis</a>
<script src='https://9292.nl/static/js/widget.js'></script>
</center>
</div>

Plan ook je terugreis via [Rotterdam Centraal, actuele vertrektijden](http://www.ns.nl/actuele-vertrektijden/avt?station=RTD). Reken op minstens twee minuten voor het lopen door het Groothandelsgebouw zelf.

{% include snippets/column-end %}
{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}
                
# Geschiedenis

Crownstone is oorspronkelijk ontwikkelt door Distributed Organimsm B.V. (DoBots) en heeft achter zich als investeerder 
[Almende Investments](http://almende-investments.com/)
en de 
[Rockstart accelerator](http://www.rockstart.com/blog/rockstart-introduces-participants-of-2016-smart-energy-accelerator/).
Crownstone is opgericht in April 2016.

Crownstone's technologie is vrij nieuw. Om te weten te komen wat de mogelijkheden zijn, raden wij vooral aan om de website en de blog te bezoeken 
om te weten te komen wat Crownstone mogelijk maakt voor zowel de consumenten als de zakelijke markt. 
Positiebepaling binnenshuis is namelijk niet gebonden tot de thuissituatie, maar brengt nieuwe mogelijkheden voor sectoren zoals de (informele) zorg, het nieuwe werken, en preventief onderhoud.

Crownstone opereert in een zeer transparante wijze. Veel informatie over ons kan online worden gevonden, zoals de 
[Kickstarter](https://www.kickstarter.com/projects/dobots/crownstone)
waar de eerste marktpotentie duidelijk voor ons werd, ons 
[blog]({{ BASE_PATH }}/blog)
  waar we veel inzicht geven in onze projecten en onze open-source code in onze
[github repositories](https://github.com/crownstone).
  
Vind meer fotografisch materiaal, logo's en renders op de pagina met de [persmap]({{ BASE_PATH }}/presskit)

{% include snippets/column-end %}
{% include snippets/row-end %}

{% include snippets/divider %}


{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Kernteam

Het Crownstone team is bekwaam in een grote diversiteit van vaardigheden. 
We zijn bijvoorbeeld allen opgeleid op een Nederlandse of gerenomeerde buitenlandse universiteit en houden van uitdagingen als geen ander!

Het is erg gemakkelijk om met een ieder van ons in contact te komen. Gebruik onze voornaam en 
<abbr title="bijvoorbeeld: jan@crownstone.rocks">voeg @crownstone.rocks toe</abbr>.

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
Anne studeerde electrotechniek en cognitieve psychologie. Bij Almende en DoBots heeft hij veel onderzoek gedaan naar autonome robots. Elke woensdag is wiskundedag!
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Peet van Tooren" picture="peetvantooren.jpg" title="CTO" %}
                    
<p>
{% include snippets/social channel="linkedin" nickname="peetvantooren" %}
{% include snippets/social channel="twitter" nickname="PMAvanTooren" %}
{% include snippets/social channel="googleplus" nickname="+PeetToorenvan" %}
</p>
                    
<p>
Peet heeft voor veel internationale bedrijven (Siemens, Philips) gewerkt, vooral in de autoindustrie, voornamelijk op navigatiesoftware.
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Bart van Vliet" picture="bartvanvliet.jpg" title="Software developer" %}
                    
<p>
{% include snippets/social channel="linkedin" nickname="bart-van-vliet-4197b8103" %}
{% include snippets/social channel="twitter" nickname="Bart_vanVliet" %}
{% include snippets/social channel="github" nickname="vliedel" %}
</p>

<p>
Bart heeft een master in werktuigbouwkunde en is niet bang voor de meest uitdagende embedded software problemen. Vraag hem alles over de nRF architectuur!
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Alex de Mulder" picture="alexdemulder.jpg" title="Designer & Software developer" %}

<p>
{% include snippets/social channel="linkedin" nickname="alex-de-mulder-443a1bb" %}
{% include snippets/social channel="vimeo" nickname="alexdemulder" %}
{% include snippets/social channel="github" nickname="AlexDM0" %}
</p>

<p>
Alex heeft een master in natuurkunde en is een sterontwikkelaar. Zijn natuurkunde achtergrond fonkelt soms door in bijvoorbeeld de mooie visualisaties in onze app.
</p>

{% include snippets/team-member-end %}

<div class="clearfix visible-xl-block"></div>

{% include snippets/team-member-begin name="Fija Pijpelink" picture="fijapijpelink.jpg" title="Design/Communication Specialist" %}

<p>
Fija zorgt dat onze communicatie duidelijk en mooi is.
</p>

{% include snippets/team-member-end %}

{% include snippets/team-member-begin name="Frans Dijckmeester" picture="fransdijckmeester.jpg" title="Assistant Financial Controller" %}

<p>
Frans verzorgt en automatiseert onze financieen en boekhouding.
</p>

{% include snippets/team-member-end %}

{% include snippets/row-end %}

{% include snippets/divider %}

{% include snippets/row-begin %}

{% include snippets/column-begin colsize="12" %}

# Crownstone Adviseurs en Experts

Crownstone heeft de luxe gebruik te kunnen maken van meerdere adviseurs en experts om onze producten en diensten naar de markt brengen. 
Hans Abbink is een succesvolle ondernemer en investeerder in de regio Rotterdam met de investeringsmaatschappij [Almende Investments](http://almende-investments.com). 
Alexander Weisz is een expert in management en business development voor startende ondernemingen zoals [Finch Buildings](http://www.finchbuildings.com/) en [Quantoz](https://quantoz.com). 
Berend Olde Rikkert heeft enorme ervaring in de energiesector, bijvoorbeeld bij het succesvolle [Quby](https://www.quby.com), bekend van de Eneco Toon en als vice president Energy en Utilities bij Capgemini.

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

# Onze Huidige Master Studenten
                    
Voel je vrij om onze huidige studenten wat te vragen, dat geeft je ongetwijfeld weer wat ander inzicht in Crownstone. Gebruik ook voor hen hun voornaam en
<abbr title="bijvoorbeeld: jan@crownstone.rocks">voeg @crownstone.rocks</abbr> toe aan het einde.

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

# Stagiaires

Onze huidige interns oefenen een hele reeks van diverse taken uit. Ze helpen mensen met advies, testen allerlei smartphone types, organiseren hackathons, helpen met presentaties bij handelsbeurzen, solderen en desolderen electronische componenten, voeren product assemblage uit, en veel meer.

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



Voor een mooi overzicht van voormalige medewerkers en stagiaires die aan robotica, draadloze sensornetwerken bij Crownstone, ons zusterbedrijf [DoBots](http://dobots.nl) (robotica), of ons moederbedrijf [Almende](http://almende.com) (wetenschappelijk onderzoek), hebben gewerkt, kijk vooral in onze [hall of fame]({{ BASE_PATH}}/hall-of-fame)!

Dat menen we echt! :-) Over de afgelopen jaren hebben we veel interessant onderzoek gedaan met software relevant voor een groot aantal applicaties in kunstmatige intelligente, machine learning, of internet of things!

{% include snippets/column-end %}
{% include snippets/row-end %}


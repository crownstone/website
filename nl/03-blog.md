---
layout: page
title : Blog
header : Blog
group: [navigation-consumer-footer]
lang: nl
permalink: blog/
background-image: banner-blog.jpg
banner-caption: "Goed verhaal"
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# Blog
				
Bij Crownstone bloggen we over een brede reeks van onderwerpen die te maken hebben met domotica, positiebepaling en consumentenelektronica. 
Geniet ervan en neem contact op als je ergens meer van wilt weten!
De blog is in het Engels geschreven.
				
Onze nieuwsbrieven zijn ook zeer interessant en betreffen ook onze eigen activiteiten (ze zijn beschikbaar via onze website na een bepaalde tijd).
Je kan de nieuwsbrieven teruglezen via
[dit online archief](http://us10.campaign-archive2.com/home/?u=d03baf337210e326a61dc14d5&id=a23d3e9ded)
en je aanmelden via de link onderaan deze pagina als je graag meer wilt weten van Crownstone.
De nieuwsbrief is eveneens in het Engels geschreven, sorry! :-)
			
{% include snippets/column-end %}
{% include snippets/row-end %}

<div class="container">
	<div class="row">
		<div class="col">
		{% assign posts_collate = site.posts %}
		{% include JB/posts_collate %}
		</div>
	</div>
</div>

{% include snippets/bottom-margin %}

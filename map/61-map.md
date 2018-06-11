---
layout: page
title: Map
header: Pages
description: "Crownstone installers and shops"
keywords: "crownstone, installers"
markdown: true
no-background-image: banner-crownstone-tech.jpg
permalink: map/
---
{% include JB/setup %}

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
      <div id="map">
      </div>
  </div>
</div>

<script>
// Initialize and add the map
function initMap() {
  // The location of Crownstone
  var crownstone = {
    position: { lat: 51.924316, lng: 4.466971},
    title: 'Crownstone'
  }

  // The map, centered at Crownstone
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 8, center: crownstone.position});
  var m0 = new google.maps.Marker({position: crownstone.position, title: crownstone.title, map: map});
  
  var installers = [
    { 
      position: {lat: 53.0237322, lng: 6.575343},
      title: 'Cedel'
    },
    { 
      position: {lat: 51.828581, lng: 4.436748},
      title: '4 Control Meet- en Regeltechniek BV'
    },
    {
      position: {lat: 52.1676513, lng: 5.4051313},
      title: 'VolkerWessels Telecom'
    }
  ];
  installers.forEach(function(installer) {
     new google.maps.Marker({position: installer.position, title: installer.title, map: map});
  });

}
</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCks6BmHAzzIOHrtoDJIngpkbyC9AacyM8&callback=initMap">
</script>


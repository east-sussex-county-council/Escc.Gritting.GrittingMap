if(jQuery!=="undefined"&&esccGoogleMaps!=="undefined"){var esccGrittingMap=function(){var f,g={},a,b=new google.maps.InfoWindow({});function e(){$.ajax({url:"/js/googlemapsmarkerwithlabel-googlemapsmarkerclusterer-v1.jsx",dataType:"script",cache:true,success:function(){f=esccGoogleMaps.createMap();var h=[{url:"img/gritters.png",height:37,width:67,textColor:"#ffffff",textSize:12}];a=new MarkerClusterer(f,[],{gridSize:30,styles:h});esccGoogleMaps.addLocationSearch("google-location","google-search",f);c()}})}function c(){$.getJSON("gritterdata.ashx",function(l,h){var k=l.length;for(var j=0;j<k;j++){if(g[l[j].id]===undefined){g[l[j].id]=new MarkerWithLabel({icon:"img/gritter.png",labelClass:"marker-label",labelContent:l[j].name});(function(m,i){google.maps.event.addListener(i,"click",function(){d(m,i)})}(l[j],g[l[j].id]));a.addMarker(g[l[j].id])}g[l[j].id].setPosition(new google.maps.LatLng(l[j].lat,l[j].lng))}setTimeout(c,60000)})}function d(i,h){b.setContent('<div class="text"><h2>'+esccGoogleMaps.htmlEncode(i.name)+"</h2><p>"+esccGoogleMaps.htmlEncode(i.status)+"</p></div>");b.open(f,h)}e()};$(function(){esccGoogleMaps.loadGoogleMapsApi({callback:"esccGrittingMap",libraries:"places"})})};
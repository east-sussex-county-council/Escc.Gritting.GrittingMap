if(jQuery!=="undefined"&&esccGoogleMaps!=="undefined"){var esccGrittingMap=function(){var d,e={},a;function c(){$.ajax({url:"/js/googlemapsmarkerwithlabel-googlemapsmarkerclusterer-v1.jsx",dataType:"script",cache:true,success:function(){d=esccGoogleMaps.createMap();var f=[{url:"img/gritters.png",height:37,width:67,textColor:"#ffffff",textSize:12}];a=new MarkerClusterer(d,[],{gridSize:30,styles:f});esccGoogleMaps.addLocationSearch("google-location","google-search",d);b()}})}function b(){$.getJSON("gritterdata.ashx",function(j,f){var h=j.length;for(var g=0;g<h;g++){if(e[j[g].id]===undefined){e[j[g].id]=new MarkerWithLabel({icon:"img/gritter.png",labelClass:"marker-label",labelContent:j[g].name});a.addMarker(e[j[g].id])}e[j[g].id].setPosition(new google.maps.LatLng(j[g].lat,j[g].lng))}setTimeout(b,10000)})}c()};$(function(){esccGoogleMaps.loadGoogleMapsApi({callback:"esccGrittingMap",libraries:"places"})})};
// JavaScript Document

//alert ("Heads up! This page will use your location to help you find the nearest food!");


var map;
var philadelphia = new google.maps.LatLng(39.952675, -75.164032);

var grindcore = new google.maps.LatLng(39.929005,-75.151899);
var blackbird = new google.maps.LatLng(39.942682,-75.152076);
var newHarmony = new google.maps.LatLng(39.954403,-75.154410);
var hipCityVeg = new google.maps.LatLng(39.950734,-75.170453);
var vedge = new google.maps.LatLng(39.947899,-75.161436);

var cantina = new google.maps.LatLng(39.928886,-75.164468);
var royalTavern = new google.maps.LatLng(39.937047,-75.154548);
var b2 = new google.maps.LatLng(39.930875,-75.162377);
var breezys = new google.maps.LatLng(39.934282,-75.177768);
var sketch = new google.maps.LatLng(39.970490,-75.130099);
var soyCafe = new google.maps.LatLng(39.961749,-75.141327);


// Marker
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(39.929005,-75.151899), 
  map: map,
  title: 'Grindcore House'
});

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: "#333333" },//5bbb59
        { saturation: -100 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var mapOptions = {
    zoom: 14,
    center: philadelphia,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);





// Vegan Markers array	
	

var points = [
	{
		'position': grindcore,
		'title': 'Grindcore House'
	},
	{
		'position': blackbird,
		'title': 'Blackbird Pizza'
	},
	{
		'position': newHarmony,
		'title': 'New Harmony'
	},
	{
		'position': cantina,
		'title': 'Cantina Los Caballitos'
	},
	{
		'position': hipCityVeg,
		'title': 'Hip City Veg'
	},
	{
		'position': vedge,
		'title': 'Vedge'
	}
];

for(i=0; i < points.length; i++) {
	// points[i]
	var marker = new google.maps.Marker({
		position: points[i].position,
		map: map,
	  	icon: "images/Pin-green.png"
	});
}


// Vegetarian Markers array	


var points = [
	{
		'position': cantina,
		'title': 'Cantina Los Caballitos'
	},
	{	
		'position': royalTavern,
		'title': 'Royal Tavern'
	},
	{	
		'position': b2,
		'title': 'B2'
	},
	{	
		'position': breezys,
		'title': 'Breezys Cafe'
	},
	{	
		'position': sketch,
		'title': 'Sketch'
	},
	{	
		'position': soyCafe,
		'title': 'Soy Cafe'
	}
	
];

for(i=0; i < points.length; i++) {
	// points[i]
	var marker = new google.maps.Marker({
		position: points[i].position,
		map: map,
	  	icon: "images/Pin-yellow.png"
	});
}	
	
	
	

}


google.maps.event.addDomListener(window, 'load', initialize);




// Pop-ups

var infowindow = new google.maps.InfoWindow({
  content: 'Grindcore House'
});

google.maps.event.addListener(grindcore, 'click', function() {
  infowindow.open(map, marker);
});
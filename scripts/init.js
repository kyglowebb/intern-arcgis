require([
	"scripts/mapView",
	// added these below for popup make sure updated csv layer
	"esri/PopupTemplate",
	"esri/arcadeProfiles/popupProfile",
	"esri/arcgis/utils",
	"dojo/domReady!",
	// added these to put in feature layer because I guess this is where the layers go?
	"esri/layers/FeatureLayer"
],
function(                     // my guess is init is where you put your main functions?
	mapView,
	PopupTemplate,
    popupProfile,
	arcgisUtils,
	FeatureLayer               // Create a featureLayer & add a rest endpoint of the restaurants
){

	var restaurant = new FeatureLayer ({
		url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/Routes_to_Restaurants_(Points)/FeatureServer/0"
	});
	map.add(restaurant,0);
	
	var popupRestaurants = {
		"title": "{TITLE}",
		"content": "<b>City:</b> {city}<br> <b>State:</b> {state}<br> <b>Name:</b> {name}<br> <b>Longitutde:</b> {longitude}<br> <b>Latitude:</b> {latitude}<br> <b>Phone Number:</b> {phone}<br>"
	}

	var displayRestaurants = new FeatureLayer ({ 
		url: ""
	})

});

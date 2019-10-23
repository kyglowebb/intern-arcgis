require([
	"scripts/mapView", 	// import mapView
	// added these below for popup make sure updated csv layer
	//"esri/PopupTemplate",
	//"esri/arcadeProfiles/popupProfile",
	//"esri/arcgis/utils",
	// added these to put in feature layer because I guess this is where the layers go?
	"esri/layers/FeatureLayer",
	"esri/layers/CSVLayer",  // Perhaps I don't need this because it will be done through Feature Layer?
	"dojo/domReady!",
],
function(                     // my guess is init is where you put your main functions?
	mapView,
	//PopupTemplate,
    //popupProfile,
	//arcgisUtils,
	FeatureLayer,
	CSVLayer,               // Create a featureLayer & add a rest endpoint of the restaurants
	
){

	// var restaurant = new FeatureLayer ({
	// 	url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/Routes_to_Restaurants_(Points)/FeatureServer/0"
	// });
	// mapView.map.add(restaurant,0);
	
	var popupRestaurants = {
		"title": "{TITLE}",
		"content": "<b>City:</b> {city}<br> <b>State:</b> {state}<br> <b>Name:</b> {name}<br> <b>Longitutde:</b> {longitude}<br> <b>Latitude:</b> {latitude}<br> <b>Phone Number:</b> {phone}<br>"
	}

	var displayRestaurants = new CSVLayer ({ 
		url: "./info.csv",
		outfields: ["city", "state", "name", "latitude", "longitude", "phone"],
		renderer: {
			type: "simple",  // autocasts as new SimpleRenderer()
			symbol: {
			  type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
			  size: 6,
			  color: "black",
			  outline: {  // autocasts as new SimpleLineSymbol()
				width: 0.5,
				color: "white"
			  }
			}
		  }
	});
	mapView.map.add(displayRestaurants);

});
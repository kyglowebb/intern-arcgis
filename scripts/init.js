require([
	"scripts/mapView", 	// import mapView
	// added these below for popup make sure updated csv layer
	"esri/PopupTemplate",
	//"esri/arcadeProfiles/popupProfile",
	//"esri/arcgis/utils",
	// added these to put in feature layer because I guess this is where the layers go?
	"esri/layers/FeatureLayer",
	"esri/layers/CSVLayer",  // Perhaps I don't need this because it will be done through Feature Layer?
	"dojo/domReady!",

],
function(                     // my guess is init is where you put your main functions?
	mapView,
	PopupTemplate,
    //popupProfile,
	//arcgisUtils,
	FeatureLayer,
	CSVLayer,               // Create a featureLayer & add a rest endpoint of the restaurants
	
){
	// var restaurant = new FeatureLayer ({
	// 	url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/Routes_to_Restaurants_(Points)/FeatureServer/0"
	// });
	// mapView.map.add(restaurant,0);

	var popupRestaurants = new PopupTemplate({
		title: "Top Restaurants in",
		content: "<b>City:</b> {city}<br> <b>State:</b> {state}<br> <b>Name:</b> {name}<br> <b>Latitude:</b> {latitude}<br> <b>Longitude:</b> {longitude}<br> <b>Phone Number:</b> {phone}<br>"
	  });

	  // popupTemplate.title = "Marriage in NY, Zip Code: {ZIP}",

	//popupTemplate.content = "<p>As of 2015, <b>{MARRIEDRATE}%</b> of the" +
	   //" population in this zip code is married.</p>" +
	   //"<ul><li>{MARRIED_CY} people are married</li>" +
	   //"<li>{NEVMARR_CY} have never married</li>" +
	   //"<li>{DIVORCD_CY} are divorced</li><ul>";
	
	
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
				width: 1,
				color: "white"
			  }
			}
		  }
	});
	mapView.map.add(displayRestaurants);

	popupTemplate = popupRestaurants;

});

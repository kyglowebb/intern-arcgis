require([
	"scripts/mapView", 	
	"esri/layers/FeatureLayer",
	"esri/PopupTemplate",
	"esri/layers/CSVLayer", 
	"dojo/domReady!",

],
function(                     
	mapView,
	FeatureLayer,
	PopupTemplate,
	CSVLayer,              
	
){

	// Create a feature layer to attach the popup template to
	// Create title and content within the popup template

	var featureLayer = new FeatureLayer({
		url: "./info.csv",
	});

// Maybe it's because feature layer doesn't know how to make a pop up
// so first I make feature layer
// then I connect feature layer to pop up
// or I connect popup to csv layer which can be done because csv layer contains popup!!
// then I display popup by doing the weird dot thing

mapView.map.popupTemplate.title = "{NAME} in {CITY}",
mapView.map.popupTemplate.content = "<b>City:</b>{city}<br><b>State:</b>{state}" +
"<br><b>Name:</b>{name}<br><b>Latitude:</b>{latitude}<br>" +
"<b>Longitude:</b>{longitude}<br><b>Phone Number:</b> {phone}<br>";


//" population in this zip code is married.</p>" +
//"<ul><li>{MARRIED_CY} people are married</li>" +
//"<li>{NEVMARR_CY} have never married</li>" +
//"<li>{DIVORCD_CY} are divorced</li><ul>";

	  // Set the PopupTemplate on the layer
	  //featureLayer.popupTemplate = display;
	  // template.popupTemplate = display;

	// displays black dots
	var display = new CSVLayer ({     
		url: "./info.csv",
		outfields: ["city", "state", "name", "latitude", "longitude", "phone"],
		renderer: {
			type: "simple",  
			symbol: {
			  type: "simple-marker",  
			  size: 6,
			  color: "black",
			  outline: {  // autocasts as new SimpleLineSymbol()
				width: 1,
				color: "white"
			  }
			}
		  }
	});
	mapView.map.add(popupTemplate);
	mapView.map.add(template);

	// I think I need to connect the CSVLayer to the popup template
	// connect popup to csvLayer
	// CSVLayer.template;

	//csvLayer.labelingInfo = [ statesLabelClass ];

	// mapView.map.add(template);
	// mapView.map.add(restaurant,0);

});

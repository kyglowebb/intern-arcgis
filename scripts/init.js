require([
	"scripts/mapView", 	
	"esri/PopupTemplate",
	"esri/layers/FeatureLayer",
	"esri/layers/CSVLayer",  
	"dojo/domReady!",
],
function(                     
	mapView,
	PopupTemplate,
	FeatureLayer,
	CSVLayer,              
){
	
	var popupRestaurants = new PopupTemplate ({
		"title": "{name}",
        "content": "<b>City:</b>{city}<br><b>State:</b>{state}" +
		"<br><b>Name:</b>{name}<br><b>Latitude:</b>{latitude}<br>" +
		"<b>Longitude:</b>{longitude}<br><b>Phone Number:</b> {phone}<br>"
		});

	var displayRestaurants = new CSVLayer ({ 
		url: "./info.csv",
		PopupTemplate: popupRestaurants,
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

	displayRestaurants.renderer = {
		type: "simple", // autocasts as new SimpleRenderer()
		symbol: {
		  type: "point-2d", // autocasts as new PointSymbol3D()
		  symbolLayers: [
			{
			  type: "icon", // autocasts as new IconSymbol3DLayer()
			  material: { color: [238, 69, 0, 0.75] },
			  outline: {
				width: 0.5,
				color: "white"
			  },
			  size: "12px"
			}
		  ]
		}
	  };

	mapView.map.add(displayRestaurants);


});
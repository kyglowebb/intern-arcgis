define([
	"scripts/Constants",
	"scripts/map",
	
	"esri/views/MapView",
	"esri/layers/CSVLayer",
	//"esri/layers/FeatureLayer"
],
function(
	Constants, map,
	MapView,
	//FeatureLayer,
	CSVLayer
){
	
	var viewProperties = {
		map: map,
		container: Constants.MAP_VIEW_DIV_ID,
		zoom: 3,
		center: [-99.14725260912257, 36.48617178360141],
		layers: [csvLayer]
	}
	var view = new MapView(viewProperties);

	var csvLayer = new CSVLayer({
		url: "locations.csv",
		copyright: "USGS Earthquakes"
	});
	map.add(csvLayer);  // adds the layer to the map










/*
	var featureLayer = new FeatureLayer({
		src: "scripts/locations.csv"
	  });
	
	  map.add(featureLayer);
	  */

	return view;
});

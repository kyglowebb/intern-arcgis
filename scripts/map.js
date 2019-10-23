define([
	"esri/Map",
	//"esri/layers/FeatureLayer", // added this cause it said featureLayer not defined
],
function(
	Map,
	//FeatureLayer,              // added this cause it said featureLayer not defined
){

// This is where you add the FeatureLayers
// map.add(trailheadsLayer);
	
	var mapProperties = {
		basemap : 'topo',
		//layers: [featureLayer],    // added this for the popup
	};
	
	var map = new Map(mapProperties);
	return map;
});

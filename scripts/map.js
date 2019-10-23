define([
	"esri/Map"
	
],
function(
	Map
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

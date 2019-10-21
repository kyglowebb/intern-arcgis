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
	};
	
	var map = new Map(mapProperties);
	return map;
});

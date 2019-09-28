define([
	"esri/Map"
],
function(
	Map
){
	
	var mapProperties = {
		basemap : 'topo',
	};
	
	var map = new Map(mapProperties);
	return map;
});

define([
	"esri/Map"
],
function(
	Map
){
	
	var mapProperties = {
		basemap : 'streets',
    };
	
	var map = new Map(mapProperties);
	return map;
});

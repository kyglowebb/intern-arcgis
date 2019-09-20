define([
	"esri/Map"
],
function(
	Map
){
	
	var mapProperties = {
		basemap : 'gray',
		
    };
	
	var map = new Map(mapProperties);
	return map;
});

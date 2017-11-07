define([
	"scripts/Constants",
	"scripts/map",
	
	"esri/views/MapView"
],
function(
	Constants, map,
	MapView
){
	
	var viewProperties = {
		map: map,
		container: Constants.MAP_VIEW_DIV_ID
	}
	var view = new MapView(viewProperties);
	return view;
});

define([
	"scripts/Constants",
	"scripts/map",
	"esri/views/MapView",
	 
],
function(
	Constants, map,
	MapView,

){
	
	var viewProperties = {
		map: map,
		container: Constants.MAP_VIEW_DIV_ID,
		zoom: 4,
		center: [-95.7129, 37.0902]
	}
	var view = new MapView(viewProperties); 
	return view;
});

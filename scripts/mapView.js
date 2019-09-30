define([
	"scripts/Constants",
	"scripts/map",
	
	"esri/views/MapView",
	
	"esri/layers/FeatureLayer", // I added in order to implement server-side and client-side SQL filters
],
function(
	Constants, map,
	MapView,
	FeatureLayer // I added in order to implment server-side and client-side SQL filters
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

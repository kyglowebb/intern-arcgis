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
		container: Constants.MAP_VIEW_DIV_ID
	
	}
	var view = new MapView(viewProperties);
	return view;
});

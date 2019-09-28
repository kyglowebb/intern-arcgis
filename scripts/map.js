define([
	"esri/Map",
	"esri/dijit/Popup", "esri/dijit/PopupTemplate",
	"esri/layers/FeatureLayer",
	"esri/symbols/SimpleFillSymbol", "esri/Color",
	"dojo/dom-class", "dojo/dom-construct", "dojo/on",
	"dojox/charting/Chart", "dojox/charting/themes/Dollar",
	"dojo/domReady!"
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

define(["scripts/Constants", "scripts/map", "esri/views/MapView",], function (
  Constants,
  map,
  MapView
) {
  var viewProperties = {
    map: map,
    container: Constants.MAP_VIEW_DIV_ID,
    zoom: 4,
    center: [-100, 36]
  };
  var view = new MapView(viewProperties);

  return view;
});
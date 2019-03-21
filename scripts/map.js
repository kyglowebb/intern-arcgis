define(["esri/Map"], function (Map) {
  var mapProperties = {
    basemap: "terrain"
  };

  var map = new Map(mapProperties);
  return map;
});

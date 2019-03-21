define(["scripts/Constants",
  "scripts/map",
  "esri/views/MapView",
  "esri/renderers/SimpleRenderer",
  "esri/layers/CSVLayer",
  //"esri/layers/FeatureLayer",
  "esri/widgets/Search"
],
  function (
    Constants,
    map,
    MapView,
    citiesRenderer,
    FeatureLayer,
    Search
  ) {

    var viewProperties = {
      map: map,
      container: Constants.MAP_VIEW_DIV_ID,
      zoom: 4,
      center: [-100, 36],
      layers: [citiesLayer]
    };
    var view = new MapView(viewProperties);

    // Set a basic symbol on a layer to visualize all features the same way
    var citiesRenderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        labelsVisible: true,
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        style: "x",
        size: 6,
        color: "blue",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 100,
          color: "black"
        }
      }
    };
    var template = {
      title: "{ID}",
      content: "{description}"
    }

    var citiesLayer = new FeatureLayer({
      url: "./citiesLayer.csv",
      popupTemplate: template,
      renderer: citiesRenderer
    });

    view.ui.add(new Search({
      view: view
    }), "top-right");

    map.add(citiesLayer);
    return view;
  });
define([
    "scripts/mapView",
],


    function (view) {
        var button = {
            coordinates: []
        }
        $(document).ready(function () {
            var store = Object.seal(button.coordinates);

            var increment = [];
            function storeCoords(i) {
                return function () {
                    console.log(button.coordinates[i]);
                    var center = store[i];
                    var bool = center.split(' ');
                    var one = bool[0];
                    var two = bool[1];
                    console.log(one);
                    console.log(two);
                    var id = "#btn";
                    id += i + 1;
                    console.log(id);
                    $(id).click(function () {
                        view.zoom = 10;
                        view.center = [one, two];
                    });
                    console.log("increment is :" + i);
                };
            }
            for (let i = 0; i < button.coordinates.length; i++) {
                increment[i] = storeCoords(i);
            }
            for (let j = 0; j < button.coordinates.length; j++) {
                increment[j]();
            }

            //sends them back
            $("#back").click(function () {
                view.zoom = 4;
                view.center = [-100, 36];
            });

        });
        return button;
    });
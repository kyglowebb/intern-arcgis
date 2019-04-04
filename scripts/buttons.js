define([
    "scripts/mapView",
],

    function (view) {
        $(document).ready(function () {

            //IT WORKS. PICK OUT THE CORRECT COORDINATES
            //ADD THE REST OF THE BUTTONS
            $("#btn1").click(function () {
                view.zoom = 10;
                view.center = [-119.5383, 37.8651];
            });
            $("#btn2").click(function () {
                view.zoom = 10;
                view.center = [-115.901, 33.8734];
            });
            $("#btn3").click(function () {
                view.zoom = 10;
                view.center = [-112.132706, 35.960503];
            });
            $("#btn4").click(function () {
                view.zoom = 10;
                view.center = [-118.82517, 36.49073];
            });
            $("#btn5").click(function () {
                view.zoom = 10;
                view.center = [-148.9066, 63.7314];
            });

            //sends them back
            $("#back").click(function () {
                view.zoom = 4;
                view.center = [-100, 36];
            });
        });
    });
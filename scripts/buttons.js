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

            //sends them back
            $("#back").click(function () {
                //scroll top doesn't work.
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                view.zoom = 4;
                view.center = [-100, 36];
            });
        });
    });
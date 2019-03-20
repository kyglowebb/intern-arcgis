// SCRAPPED BECAUSE GOOGLE API KEYS

define([
    "script/mapView",
], function currentLocation() {
    return -100;

});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}
function geoSuccess(position) {
    var lat = -100;
    //var lng = 36;
    // var lat = position.coords.latitude;
    // var lng = position.coords.longitude;
    return (lat);
}

function geoError() {
    var lat = 100;
    var lng = 36;
    return (lat, lng)
}
define([
    "scripts/buttons"
],
    function (buttons) {

        console.log(buttons);

        var csvUrl = "./citiesLayer.csv";

        function handleCSVResult(csvString) {
            // Get the div element to append the data to
            var dataArea = document.querySelector('#csv_data');

            // Split csv to rows
            var rows = csvString.split('\n');

            var htmlStr = '';

            var longLat = [];
            var long = [];
            var lat = [];
            var cells;
            // Iterate over each row starting at 1 to skip title
            for (var i = 1; i < rows.length; i++) {
                var row = rows[i];

                // split row to cells
                cells = row.split(',');

                // Extract data from cell
                var ID = cells[0];
                var latitude = cells[1];
                var longitute = cells[2];
                var description = cells[3];
                var image = cells[4];

                lat[i - 1] = latitude;
                long[i - 1] = longitute;
                longLat[i - 1] = latitude + ' ' + longitute;
                // Add extracted CSV data to string
                htmlStr += '<div class="card">'
                htmlStr += '<button id="btn' + i + '"class="button"">'
                if (image.length > 1) {
                    htmlStr += '<img src="' + image + '"' + 'alt="J Tree" style="width: 100%; height: 100%;">';
                }
                htmlStr += '<h2><b>' + ID + '</b></h2>';
                htmlStr += '<p>' + description + '</p></button></div>';
            }


            //createButtons(cells);
            dataArea.innerHTML = htmlStr;

            console.log("Load data from CSV");
            return longLat;

        }

        // Init Ajax Object
        var ajax = new XMLHttpRequest();

        // Set a GET request to the URL which points to your CSV file
        ajax.open('GET', csvUrl);

        // Set the action that will take place once the browser receives your CSV
        ajax.onreadystatechange = function () {
            if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
                // Request was successful
                var csvData = ajax.responseText;

                // Do something with that data here
                //handleCSVResult(csvData);
                var data = handleCSVResult(csvData);
                buttons.coordinates = data;
                console.log(data);
            }
        }
        // Send request
        ajax.send();
    })
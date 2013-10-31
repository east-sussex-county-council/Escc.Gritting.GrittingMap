﻿if (jQuery !== 'undefined' && esccGoogleMaps !== 'undefined') {

    var esccGrittingMap = function () {
        /// <summary>Application to display the location of gritters on a map. This function forms the namespace.</summary>
        var map, markers = {};

        function setupApplication() {
            /// <summary>Set up the application and load the initial data</summary>
            $.ajax({
                url: "js/libs/markerwithlabel_packed.js",
                dataType: "script",
                cache: true,
                success: function () {
                    map = esccGoogleMaps.createMap();
                    esccGoogleMaps.addLocationSearch('google-location', 'google-search');
                    loadGritters();
                }
            });
        }

        function loadGritters() {
            /// <summary>Loads gritter data and creates or updates markers</summary>
            $.getJSON("gritterdata.ashx", function (data, status) {
               var gritters = data.length;
                for (var i = 0; i < gritters; i++) {
                     if (markers[data[i].id] === undefined) {
                        markers[data[i].id] = new MarkerWithLabel({
                            map: map,
                            icon: "img/gritter.png",
                            labelClass: "marker-label",
                            labelContent: data[i].name
                        });
                    }
                    markers[data[i].id].setPosition(new google.maps.LatLng(data[i].lat, data[i].lng));
                }

                setTimeout(loadGritters, 5000);
            });
        }

        setupApplication();
    };

    $(function () {
        esccGoogleMaps.loadGoogleMapsApi({ callback: "esccGrittingMap", libraries: "places" });
    });
}
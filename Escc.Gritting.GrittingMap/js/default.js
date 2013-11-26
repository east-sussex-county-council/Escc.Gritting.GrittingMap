if (jQuery !== 'undefined' && esccGoogleMaps !== 'undefined') {

    var esccGrittingMap = function () {
        /// <summary>Application to display the location of gritters on a map. This function forms the namespace.</summary>
        var map, markers = {}, clusterer, infoWindow = new google.maps.InfoWindow({});

        function setupApplication() {
            /// <summary>Set up the application and load the initial data</summary>
            $.ajax({
                url: "/js/googlemapsmarkerwithlabel-googlemapsmarkerclusterer-v1.jsx",
                dataType: "script",
                cache: true,
                success: function () {
                    map = esccGoogleMaps.createMap();

                    var clustererStyle = [{ url: 'img/gritters.png', height: 37, width: 67, textColor: '#ffffff', textSize: 12}];
                    clusterer = new MarkerClusterer(map, [], { 'gridSize': 30, styles: clustererStyle });
                    esccGoogleMaps.addLocationSearch('google-location', 'google-search', map);
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
                            icon: "img/gritter.png",
                            labelClass: "marker-label",
                            labelContent: data[i].name,
                            position: new google.maps.LatLng(data[i].lat, data[i].lng)
                        });

                        (function(gritter, marker) {
                            google.maps.event.addListener(marker, 'click', function() {
                                showGritterDetails(gritter, marker);
                            });
                        }(data[i], markers[data[i].id]));
                        
                        clusterer.addMarker(markers[data[i].id]);
                    } else {
                        markers[data[i].id].setPosition(new google.maps.LatLng(data[i].lat, data[i].lng));
                    }
                }

                setTimeout(loadGritters, 60000);
            });
        }
        
        function showGritterDetails(gritter, marker) {
            infoWindow.setContent("<div class=\"text\"><h2>" + esccGoogleMaps.htmlEncode(gritter.name) + "</h2><p>" + esccGoogleMaps.htmlEncode(gritter.status) + "</p></div>");
            infoWindow.open(map,marker);
        }

        setupApplication();
    };

    $(function () {
        esccGoogleMaps.loadGoogleMapsApi({ callback: "esccGrittingMap", libraries: "places" });
    });
}
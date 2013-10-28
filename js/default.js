if (jQuery != 'undefined' && esccGoogleMaps != 'undefined') {

    var esccGrittingMap = function () {
        /// <summary>Application to display the location of gritters on a map. This function forms the namespace.</summary>
        var map;

        function setupApplication() {
            /// <summary>Set up the application and load the initial data</summary>
            $.ajax({
                url: "js/libs/markerwithlabel_packed.js",
                dataType: "script",
                cache: true,
                success: function() {
                    map = esccGoogleMaps.createMap();
                    esccGoogleMaps.addLocationSearch('google-location', 'google-search');
                    createExampleMarkers();              
                }
            });
        }

        function createExampleMarkers() {
            new MarkerWithLabel({
                map: map,
                position: new google.maps.LatLng(50.76675, 0.156443),
                icon: "img/gritter.png",
                labelClass: "marker-label",
                labelContent: "Snowy Joey"
            });

            new MarkerWithLabel({
                map: map,
                position: new google.maps.LatLng(50.95674, 0.256442),
                icon: "img/gritter.png",
                labelClass: "marker-label",
                labelContent: "Gritney Spears",
                labelAnchor: new google.maps.Point(20, 0)
            });

            new MarkerWithLabel({
                map: map,
                position: new google.maps.LatLng(50.96674, 0.545443),
                icon: "img/gritter.png",
                labelClass: "marker-label",
                labelContent: "Stony Tony",
                labelAnchor: new google.maps.Point(20, 0)
            });
        }

        setupApplication();
    };

    $(function () {
        esccGoogleMaps.loadGoogleMapsApi({ callback: "esccGrittingMap", libraries: "places" });
    });
}
if (jQuery !== 'undefined' && esccGoogleMaps !== 'undefined') {

    var esccGrittingMap = function () {
        /// <summary>Application to display the location of gritters on a map. This function forms the namespace.</summary>
        var map;

        function setupApplication() {
            /// <summary>Set up the application and load the initial data</summary>
            $.ajax({
                url: "js/libs/markerwithlabel_packed.js",
                dataType: "script",
                cache: true,
                success: function () {
                    map = esccGoogleMaps.createMap();
                    esccGoogleMaps.addLocationSearch('google-location', 'google-search');
                    createExampleMarkers();
                }
            });
        }

        function createExampleMarkers() {
            $.getJSON("gritterdata.ashx", function (data, status) {
                var gritters = data.length;
                for (var i = 0; i < gritters; i++) {
                    new MarkerWithLabel({
                        map: map,
                        position: new google.maps.LatLng(data[i].lat, data[i].long),
                        icon: "img/gritter.png",
                        labelClass: "marker-label",
                        labelContent: data[i].name
                    });
                }
            });
        }

        setupApplication();
    };

    $(function () {
        esccGoogleMaps.loadGoogleMapsApi({ callback: "esccGrittingMap", libraries: "places" });
    });
}
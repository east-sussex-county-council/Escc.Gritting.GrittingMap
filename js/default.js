if (jQuery != 'undefined') {

    $(function() {
        /// <summary>Application to display the location of gritters on a map. This function forms the namespace.</summary>
         var map, centreOnPoint = new google.maps.LatLng(50.96674, 0.256443);

            function setupApplication() {
                /// <summary>Set up the application and load the initial data</summary>
                createMap();
            }

            function createMap() {
                /// <summary>Add a Google map to the page, centred on the area covered</summary>
                var mapOptions = {
                    center: centreOnPoint,
                    zoom: 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
            }

        setupApplication();
    });
}
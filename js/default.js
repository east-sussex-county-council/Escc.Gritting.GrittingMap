if (jQuery != 'undefined') {

    $(function() {
        /// <summary>Application to display the location of gritters on a map. This function forms the namespace.</summary>
         var map, centreOnPoint = new google.maps.LatLng(50.96674, 0.256443);

        function setupApplication() {
            /// <summary>Set up the application and load the initial data</summary>
            createMap();
            addSearchBox();
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

        function addSearchBox() {
            /// <summary>Wire up the search box to zoom to a typed location using the Google geocoder</summary>
            var input = document.getElementById('google-location');
            var button = $("#google-search");

            addSearchAutocomplete(input, button);
            addSearchAction(input, button);
        }

        function addSearchAutocomplete(input, button) {
            ///<summary>Add the standard Google autocomplete to the search box, biased towards an area a little wider than East Sussex </summary>
            var options = {
                bounds: new google.maps.LatLngBounds(
                        new google.maps.LatLng(51.198279, -0.252686),
                        new google.maps.LatLng(50.713852, 1.065674)),
                componentRestrictions: { country: 'uk' }
            };
            var autocomplete = new google.maps.places.Autocomplete(input, options);

            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (place.formatted_address) input.value = place.formatted_address;
                button.click();
            });
        }

        function addSearchAction(input, button) {
            ///<summary>Go to the place typed by the user, or selected from the Google autocomplete</summary>
            var geocoder = new google.maps.Geocoder();

            button.click(function (e) {
                e.preventDefault();
                geocoder.geocode(
                    { 'address': input.value },
                    function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            var loc = results[0].geometry.location;
                            map.setCenter(new google.maps.LatLng(loc.lat(), loc.lng()));
                            map.setZoom(15);
                        }
                        else {
                            alert("Not found: " + status);
                        }
                    }
                );
            });
        }

        setupApplication();
    });
}
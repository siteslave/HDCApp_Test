angular.module('starter.directives', [])

.directive('map', function($rootScope, $ionicLoading, $ionicPlatform) {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {

        var markers = [];

        $ionicPlatform.ready(function () {
          $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
          });
          navigator.geolocation.getCurrentPosition(function (pos) {

            var mapOptions = {
              //center: new google.maps.LatLng(13.795534592741397, 100.57345487569083),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.HYBRID
            };

            var map = new google.maps.Map($element[0], mapOptions);

            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

            console.log('Got pos', pos);
            $ionicLoading.hide();

            var clearMarker = function () {
              for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
              }
            };

            map.addListener('click', function (e) {

              clearMarker();

              $rootScope.setLatLng(e.latLng);

              var marker = new google.maps.Marker({
                position: e.latLng,
                map: map,
                title: 'Click to zoom'
              });

              markers.push(marker);

            });


          }, function (error) {
            alert('Unable to get location: ' + error.message);
          });
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});

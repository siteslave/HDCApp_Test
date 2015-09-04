angular.module('starter.controllers.MapController', [])

  .controller('MapController', function($rootScope, $scope, $ionicLoading, $ionicPlatform) {

      $scope.save = function () {
        console.log('Save data');
        console.log(JSON.stringify($rootScope.latLng));
        console.log($scope.title);
        alert(JSON.stringify($rootScope.latLng));
      };

      $rootScope.setLatLng = function (latLng) {
        $rootScope.latLng = latLng;
        console.log('--------------------');
        console.log(JSON.stringify(latLng));
        console.log('--------------------');
      };

  });

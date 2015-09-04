angular.module('starter.controllers.MapController', [
  'stater.services.MapService'
])

  .controller('MapController', function($rootScope, $scope,
                                        $ionicLoading,
                                        $ionicPlatform,
                                        MapService
  ) {

      $scope.save = function () {
        //console.log('Save data');
        //console.log(JSON.stringify($rootScope.latLng));
        //console.log($scope.title);
        //alert(JSON.stringify($rootScope.latLng));
        var lat = $rootScope.latLng.G;
        var lng = $rootScope.latLng.K;
        var title = $scope.title;

        MapService.saveMap(lat, lng, title)
          .then(function (data) {
            if (data.ok) {
              alert('บันทึกเสร็จเรียบร้อย');
            } else {
              console.log(data.msg);
              alert('เกิดข้อผิดพลาด');
            }
          }, function (err) {
            console.log('Error' + JSON.stringify(err));
          })

      };

      $rootScope.setLatLng = function (latLng) {
        $rootScope.latLng = latLng;
        //console.log('--------------------');
        //console.log(JSON.stringify(latLng));
        //console.log('--------------------');
      };

  });

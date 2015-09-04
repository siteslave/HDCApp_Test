angular.module('starter.controllers.MainController', [
  'stater.services.MainService'
])

  .controller('MainController', function($scope, MainService) {

    $scope.years = [
      {id: '2556', name: 'ปีงบประมาณ 2556'},
      {id: '2557', name: 'ปีงบประมาณ 2557'},
      {id: '2558', name: 'ปีงบประมาณ 2558'}
    ];

    //$scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.type = 'StackedBar';

    //$scope.data = [
    //  [65, 59, 90, 81, 56, 55, 40], // target
    //  [28, 48, 40, 19, 96, 27, 100] // result
    //];
    $scope.labels = [];
    $scope.data = [];
    var target = [];
    var result = [];

    $scope.showGraph = function () {
      //alert(JSON.stringify($scope.year));
      MainService.getKPI($scope.year.id)
        .then(function (data) {
          if (data.ok) {
            // มีข้อมูล
            // {"ampurname":"เมืองมหาสารคาม","ampcode":"4401",
            // "target":843,"result":313}

            angular.forEach(data.rows, function (v) {
              $scope.labels.push(v.ampurname);
              target.push(v.target);
              result.push(v.result);
            });

            $scope.data.push(target);
            $scope.data.push(result);

          } else {
            // เกิดข้อผิดพลาดฝั่ง server
            alert('SERVER ERROR: ' + JSON.stringify(data.msg));
          }
        }, function (err) {
          alert('CONNECTION ERROR: ' + JSON.stringify(err));
        });

    };



  });

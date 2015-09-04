angular.module('starter.controllers.MainController', [])

  .controller('MainController', function($scope) {

    $scope.years = [
      {id: '2556', name: '2556'},
      {id: '2557', name: '2557'},
      {id: '2558', name: '2558'}
    ];

    $scope.showGraph = function () {
      alert(JSON.stringify($scope.year));
    };

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.type = 'StackedBar';

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];

  });

angular.module('starter', [
  'ionic',
  'starter.controllers.MainController',
  'starter.controllers.MapController',
  'starter.directives',
  'ngCordova',
  'chart.js'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

  });
});

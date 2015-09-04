
angular.module('stater.services.MapService', [])
  .factory('MapService', function ($q, $http) {

    return {

      saveMap: function (lat, lng, title) {
        var q = $q.defer();

        var options = {
          url: 'http://localhost:3000/savemap',
          method: 'POST',
          data: {
            lat: lat,
            lng: lng,
            title: title
          }
        };

        $http(options)
          .success(function (data) {
            q.resolve(data);
          })
          .error(function (err) {
            q.reject(err);
          });

        return q.promise;

      }

    };

  });

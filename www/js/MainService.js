
angular.module('stater.services.MainService', [])
  .factory('MainService', function ($q, $http) {

    return {

      getKPI: function (year) {
        var q = $q.defer();

        var options = {
          url: 'http://localhost:3000/kpi',
          method: 'POST',
          data: {
            year: year
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

angular.module('MovieApp')
    .factory('MovieFactory', ['$http', function($http) {

        return {

            get: function() {
                return $http.get("/database/movies.json");
            }

        }
    }]);
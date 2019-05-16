angular.module('MovieApp', [])
    .controller('MovieController', ['$scope', 'MovieFactory', function($scope, MovieFactory) {

        //Call MovieFactory get function
        MovieFactory.get().then(function(response) {
            $scope.movies = response.data;
            console.log(response);
            for (i = 0; i < $scope.movies.length; i++) {
                let duration = $scope.movies[i].duration.replace(/pt|m/gi, "");
                //console.log(duration);
                let hours = Math.floor(duration / 60);
                let minutes = Math.floor(duration % 60);
                //console.log(hours);
                //console.log(minutes);
                $scope.movies[i].duration = hours + ":" + minutes;

            }
        });

    }]);
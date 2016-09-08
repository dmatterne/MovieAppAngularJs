angular.module('moviesApp')
    .config(function($routeProvider) {


        $routeProvider.when('/movies/add' , {
            templateUrl: 'app/movies-add/movies-add.html',
            controller: 'addMoviesApp',
            controllerAs: 'ama'
        });

        $routeProvider.when('/movies/search' , {
            templateUrl: 'app/movies-search/movies-search.html',
            controller: 'searchMoviesApp',
            controllerAs: 'sma'
        });


        $routeProvider.when('/movies/:id' , {
            templateUrl: 'app/movies-details/movies-details.html',
            controller: 'detailsMoviesApp',
            controllerAs: 'dma'
        });

                $routeProvider.when('/movies' , {
            templateUrl: 'app/movies-list/movies-list.html',
            controller: 'listMoviesApp',
            controllerAs: 'lma'
        });

        $routeProvider.when('/' , {
            templateUrl: 'app/movies-home/movies-home.html',
            controller: 'homeMoviesApp',
            controllerAs: 'hma'
        });

        $routeProvider.otherwise({
           redirectTo: '/'
        });

    });
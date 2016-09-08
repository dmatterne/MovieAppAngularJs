function listMoviesAppController($http, apiUrl) {

    var that = this;

    this.title = 'The Collection';

    this.movies = [];

    function getMovies () {
        $http.get(apiUrl).then(function (res) {
            that.movies = res.data;
        });
    }


    getMovies();


}

angular.module('moviesApp').controller('listMoviesApp', listMoviesAppController);
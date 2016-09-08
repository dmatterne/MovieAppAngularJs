function addMoviesAppController($http, apiUrl, $location) {

    var that = this;

    this.title = 'Add a Movie to your collection';

    this.searchname = '';

    this.movies = [];

    this.showList = false;

    this.newMovie = {
        imdbId: ''
    }


    this.searchMovie = function () {


        $http.get(apiUrl + "/Lookup?title=" + that.searchname).then(function (res) {
            that.movies = res.data;
        });
        // console.log('searchmovie');
        //that.showList = true;
    }

    this.addToCollection = function (id) {

        var movieToAdd = {
            imdbId: id
        };


        $http.post(apiUrl, movieToAdd).then(function () {
            $location.path('/movies');
        });


    }


}

angular.module('moviesApp').controller('addMoviesApp', addMoviesAppController);
function searchMoviesAppController($http, apiUrl, $location) {

    var that = this;

    this.title = 'Search Movie in collection';

    this.searchname = '';

    this.movies = [];



    this.searchMovie = function () {


        $http.get(apiUrl + "/Search?title=" + that.searchname).then(function (res) {
            that.movies = res.data;
        });
        // console.log('searchmovie');
        //that.showList = true;
    }





}

angular.module('moviesApp').controller('searchMoviesApp', searchMoviesAppController);
function detailsMoviesAppController ($routeParams, $http, apiUrl, $location) {

   var that = this;

   this.title = 'Movie Details';

   this.movie = {
      id : '',
      title : '',
       poster : '',
       imdbId : '',
       year : '',
      rating : '',
      seen : ''
   };



   function getMovieDetails() {

      $http.get(apiUrl + '/' + $routeParams.id).then(function (res) {
         that.movie = res.data;
      });

   }

   getMovieDetails();


   this.deleteMovie = function () {
      $http.delete(apiUrl + '/' + $routeParams.id).then(function (res) {
         $location.path('/movies')
      });
   }

}

angular.module('moviesApp').controller('detailsMoviesApp', detailsMoviesAppController);
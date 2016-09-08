var moviesApp = angular.module('moviesApp', ['ngRoute']);

moviesApp.config(function(appVersion) {
    console.log('app - config ' + appVersion);
});

moviesApp.run(function() {
    console.log('app - run');
});

moviesApp.constant('apiUrl', 'https://angularcoursebackend.azurewebsites.net/api/Movies');

moviesApp.constant('appVersion','0.1');

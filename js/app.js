var app = angular.module('kennelApp', ['ngRoute', 'RouteControllers', 'angular-storage', 'ui.bootstrap']);
app.controller("MainController", ['$scope', function($scope) {}]);
angular.module('kennelApp')
.config(function($locationProvider, $routeProvider) {
  
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'resources/home.html',
    controller: 'HomeController'
  })
  .when('/kennel/home', {
    templateUrl: 'resources/home.html',
  })
  .when('/services', {
    templateUrl: 'resources/services.html',
  })
  .when('/story', {
    templateUrl: 'resources/story.html',
  })
  .when('/contact', {
    templateUrl: 'resources/contact.html',
    controller: 'ContactController'
  })
  .when('/FAQ', {
    templateUrl: 'resources/FAQ.html',
  })
  .otherwise({
    redirectTo: '/'
  }); // if not above path
});

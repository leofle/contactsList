'use strict';

/**
 * @ngdoc overview
 * @name angappApp
 * @description
 * # angappApp
 *
 * Main module of the application.
 */
var myapp = angular
  .module('angappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

myapp.config(function ($routeProvider) {
    $routeProvider
      .when('/כולם', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/דיגיטל', {
        templateUrl: 'views/none.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/כולם'
      });
  });

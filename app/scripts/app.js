'use strict';

/**
 * @ngdoc overview
 * @name angappApp
 * @description
 * #angappApp
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
    'ngTouch',
    'ui.router'
  ]);

myapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/all');
    $stateProvider
    .state('/all', {
      url: '/all',
      templateUrl: 'views/main.html'
    })
    .state('state1.list', {
      url: '/list',
      templateUrl: 'partials/state1.list.html',
      controller: 'MainCtrl'
    });

  });

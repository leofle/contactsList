'use strict';

/**
 * @ngdoc function
 * @name angappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angappApp
 */
var myapp = angular.module('angappApp');

myapp.filter('orderObjectBy', function(){
  return function(input, attribute) {
    if (!angular.isObject(input)) {return input;}

    var array = [];
    for(var objectKey in input) {
      array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute], 10);
        b = parseInt(b[attribute], 10);
        return a - b;
      });
    return array;
  };
});


myapp.controller('MainCtrl',function($scope,$http){

    $http({method: 'GET', url: 'json/contact.json'}).
        success(function(data) {
            $scope.content=data;
          });


  });

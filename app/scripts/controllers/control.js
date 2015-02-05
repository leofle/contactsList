'use strict';

/**
 * @ngdoc function
 * @name angappApp.controller:SelectController
 * @description
 * # SelectController
 * Controller of the angappApp
 */
angular.module('angappApp')
.controller('SelectController', function($scope) {

    $scope.options = [
      { label: 'כולם', value: 'כולם'},
      { label: 'דיגיטל', value: 'דיגיטל' },
      { label: 'סטודיו', value: 'סטודיו' },
      { label: 'קופיס', value: 'קופיס' },
      { label: 'הפקה', value: 'הפקה' },
      { label: 'אחר', value: 'אחר' }
    ];

    $scope.SelectModel = $scope.options[0];
  });

'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:LoaderCtrl
 * @description
 * # LoaderCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('LoaderCtrl', function ($scope) {
    
    $scope.loader = {};

    // defines as loaded
    $scope.loader.loaded = true;

    console.log('LoaderCtrl');    

  });

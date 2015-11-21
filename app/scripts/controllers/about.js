'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('AboutCtrl', function ($scope) {


    $scope.bodyCopy = "hello world";

    $scope.transitionIn = true;

    console.log("AboutCtrl", $scope);

  });


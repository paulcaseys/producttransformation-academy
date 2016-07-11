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

    // logs controller
    console.log("AboutCtrl");


    // body copy example
    $scope.bodyCopy = "hello world";

    // declares that the transition in should begin
    $scope.transitionIn = true;



  });


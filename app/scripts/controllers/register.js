'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('RegisterCtrl', function ($scope) {

    // logs controller
    console.log("RegisterCtrl");


    // body copy example
    $scope.bodyCopy = "hello world";

    // declares that the transition in should begin
    $scope.transitionIn = true;

    

  });

'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('NavigationController', function ($scope, $location) {
    
    // Must use a wrapper object, otherwise "activeItem" won't work
    $scope.states = {};

    // determine active item
    //var active = (viewLocation === $location.path());


    $scope.items = [{
        id: 'home',
        title: 'Home',
        path: '#/'
    }, {
        id: 'about',
        title: 'About',
        path: '#/about'
    }, {
        id: 'waypointexample',
        title: 'Waypoint example',
        path: '#/waypointexample'
    }];

    // declare default activeItem
    $scope.states.activeItem = 'home';
    
    var path = "#"+$location.path();
    var lookup = {};

    // checks which item matches the path
    for (var i = 0, len = $scope.items.length; i < len; i++) {
        lookup = $scope.items[i];
        if($scope.items[i].path === path){
            $scope.states.activeItem = $scope.items[i].id;
        }
    }
    
    console.log('NavigationController activeItem : '+$scope.states.activeItem);

});
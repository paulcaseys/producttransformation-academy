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


    var el = this;

    // initialises on view
    el.init = function(){
        // logs the view
        el.testMethod();

        $scope. description = "This is the about page";

    };


    // method for the console
    el.testMethod = function(){
       console.log('AboutCtrl testMethod');
    };


    /*******************
     * TRANSITION IN/OUT
     * these are called when the view is routed in / out
     */

    // transitions the view in
    el.transitionIn = function(){
        // basic way to hide element
        //$(this.el).hide();
    };

    // removes all eventlisteners
    el.transitionOut = function(){
        // basic way to hide element
        //$(this.el).hide();
    };


    // inits it all
    el.init();



  });


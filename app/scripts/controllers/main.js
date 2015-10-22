'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('MainCtrl', function () {


    var el = this;

    // initialises on view
    el.init = function(){
        // logs the view
        el.testMethod();

    };


    // method for the console
    el.testMethod = function(){
       console.log('MainCtrl testMethod');
    };


    /*******************
     * TRANSITION IN/OUT
     * these are called when the view is routed in / out
     */

    // transitions the view in
    el.transitionIn = function(){
        // basic way to hide element
        //$(this.el).hide();
    },

    // removes all eventlisteners
    el.transitionOut = function(){
        // basic way to hide element
        //$(this.el).hide();
    },


    // inits it all
    el.init();


  });

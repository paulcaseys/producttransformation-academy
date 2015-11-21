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
    console.log("AboutCtrl", $scope);


    // body copy example
    $scope.bodyCopy = "hello world";

    // declares that the transition in should begin
    $scope.transitionIn = true;

    ///////////////////////////////////
    // waypoint detection
    // 
    // declares self
    /* var self = this;
    self.detectWaypoint = function() {
      
      howItWorksY = self.getElementOffset(howItWorksElement[0]).top;      
      if(howItWorksY < yOffset && howItWorksInitiated === false || self.isTouchDevice() === true){
        console.log("pop1");
        self.howItWorksInit();
        howItWorksInitiated = true;
        $scope.$apply();
      }
      featuresY = self.getElementOffset(featuresElement[0]).top;      
      if(featuresY < yOffset && featuresInitiated === false || self.isTouchDevice() === true){
        console.log("pop2");
        self.featuresInit();
        featuresInitiated = true;
        $scope.$apply();
      }

    };
    // upon scrolls
    window.onscroll = function () {  
      self.detectWaypoint();
      console.log("hhh");
    };

    self.getElementOffset = function(el) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    };

    self.isTouchDevice = function() {
      try {  
        document.createEvent("TouchEvent");  
        return true;  
      } catch (e) {  
        return false;  
      }  
    };

    setTimeout(self.detectWaypoint, 1000);
    */

  });


'use strict';

describe('Controller: WaypointexamplectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBoilerplateApp'));

  var WaypointexamplectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaypointexamplectrlCtrl = $controller('WaypointexamplectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WaypointexamplectrlCtrl.awesomeThings.length).toBe(3);
  });
});

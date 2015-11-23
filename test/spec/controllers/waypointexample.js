'use strict';

describe('Controller: WaypointCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBoilerplateApp'));

  var WaypointCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaypointCtrl = $controller('WaypointCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WaypointCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: QuotelistCtrl', function () {

  // load the controller's module
  beforeEach(module('justThinkApp'));

  var QuotelistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuotelistCtrl = $controller('QuotelistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

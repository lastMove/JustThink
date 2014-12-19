'use strict';

describe('Controller: QuoteDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('justThinkApp'));

  var QuoteDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuoteDetailCtrl = $controller('QuoteDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

angular.module('justThinkApp')
  .controller('QuotelistCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/quotes').success(function(quotes)
    {
    	$scope.quotes = quotes;
    })
  });

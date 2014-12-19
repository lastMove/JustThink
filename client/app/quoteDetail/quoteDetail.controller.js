'use strict';

angular.module('justThinkApp')
  .controller('QuoteDetailCtrl', function ($scope, $param) {
    $scope.message = 'Hello';
    var id = param.id;
    console.log('%s', /api/quotes/' + id);
    $http.get('/api/quotes/' + id).success(function(quote)
    {
    	$scope.quote = quote;
    	console.log('%s', /api/quotes/' + id);
    })
  });

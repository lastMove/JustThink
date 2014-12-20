'use strict';

angular.module('justThinkApp')
  .controller('QuotelistCtrl', function ($scope, $http, ngTableParams) {
    $scope.message = 'Hello';
    $http.get('/api/quotes').success(function(quotes)
    {
    	$scope.quotes = quotes;

    	$scope.tableQuotes = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: quotes.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(quotes, params.orderBy()) :
                                quotes;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    });
  });

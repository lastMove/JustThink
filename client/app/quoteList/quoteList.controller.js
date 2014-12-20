'use strict';

angular.module('justThinkApp', ['ngTable'])
  .controller('QuotelistCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    var quoteList;
    $http.get('/api/quotes').success(function(quotes)
    {
    	quoteList = quotes;
    	$scope.quotes = quotes;
    });

    $scope.tableQuotes = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: quoteList.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(quoteList, params.orderBy()) :
                                quoteList;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
  });

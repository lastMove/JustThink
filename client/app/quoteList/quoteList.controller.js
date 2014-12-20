'use strict';

angular.module('justThinkApp')
  .controller('QuotelistCtrl', function ($scope, $http, $filter, ngTableParams) {
    $scope.message = 'Hello';
    $http.get('/api/quotes').success(function(quotes)
    {
    	console.log(quotes);
    	$scope.quotes = quotes;

    	$scope.tableQuotes = new ngTableParams({
		    page: 1,            // show first page
		    count: 10,          // count per page
		    sorting: {
		        date: 'desc'     // initial sorting
		    }
		}, {
		    total: quotes.length, // length of data
		    getData: function($defer, params) {
		        // use build-in angular filter
		        var filteredData = params.filter() ?
				                    $filter('filter')(quotes, params.filter()) :
				                    quotes;
		        var orderedData = params.sorting() ?
		                            $filter('orderBy')(filteredData, params.orderBy()) :
		                            filteredData;
		       $scope.quotes = orderedData;
		       params.total(orderedData.length);
		       $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		    }
		});
    });
  });
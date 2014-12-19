'use strict';

angular.module('justThinkApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('quoteDetail', {
        url: '/quoteDetail',
        templateUrl: 'app/quoteDetail/quoteDetail.html',
        controller: 'QuoteDetailCtrl'
      });
  });
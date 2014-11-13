'use strict';

angular.module('justThinkApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('quoteList', {
        url: '/quoteList',
        templateUrl: 'app/quoteList/quoteList.html',
        controller: 'QuotelistCtrl'
      });
  });
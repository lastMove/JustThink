'use strict';

angular.module('justThinkApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'span' : 'glyphicon glyphicon-home',
      'link': '/'
    },
    { 'title' : 'Quotes',
      'span' : 'glyphicon glyphicon-comment',
      'link' : '/quoteList'
    },
    {  'title' : 'My Quotes',
       'span' : 'glyphicon glyphicon-user',
       'link' : ''}];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
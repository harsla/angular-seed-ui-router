'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
])
.config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
  .state('view1', {
    url: '/view1',
    templateUrl: 'view1/view1.html',
    controller: 'view1/view1.js'
  })
  .state('view2', {
    url: '/view2',
    templateUrl: 'view2/view2.html',
    controller: 'view2/view2.js'
  });
});

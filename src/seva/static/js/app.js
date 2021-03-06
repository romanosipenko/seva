'use strict';

angular.module('seva', ['seva.controllers', 'seva.filters', 'ui.gravatar']).
  config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/index', {
        templateUrl: '/static/js/tmpl/company-avg.html',
        controller: 'IndexCtrl'
      });
      $routeProvider.when('/user/:username', {
          templateUrl: '/static/js/tmpl/user-details.html',
          controller: 'UserDetails'
        });
      $routeProvider.when('/technology/:tech', {
          templateUrl: '/static/js/tmpl/technology-details.html',
          controller: 'TechnologyDetails'
        });
      $routeProvider.otherwise({redirectTo: '/index'});
  }]);

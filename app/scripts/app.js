'use strict';

angular.module('pehratekcomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/builder', {
            templateUrl: 'views/products/builder.html',
            controller: 'MainCtrl'
        })
        .when('/product/:id', {
            templateUrl: 'views/products/builder-options.html',
            controller: 'MainCtrl'
        })
        .when('/product/:id/option/:cat', {
            templateUrl: 'views/products/builder-options.html',
            controller: 'MainCtrl'
        })
        .when('/system-detail/:id', {
            templateUrl: 'views/products/system-detail.html',
            controller: 'MainCtrl'
        })
        .when('/option-detail/:opt', {
            templateUrl: 'views/products/option-detail.html',
            controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  });

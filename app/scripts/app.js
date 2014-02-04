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
        .when('/product-detail/:id', {
            templateUrl: 'views/products/product-detail.html',
            controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  });

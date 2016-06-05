'use strict';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '',
      templateUrl: 'templates/app.html',
      abstract: true,
      controller: 'mainCtrl'
    })
    .state('app.login', {
      url: '/login',
      views: {
        'catalogView': {
          templateUrl: 'templates/login.html'
        }
      }
    })
    .state('app.catalog', {
      url: '/catalog',
      views: {
        'catalogView': {
          templateUrl: 'templates/catalog.html'
        }
      },
      data: {
        authorization: true
      }
    })
    .state('app.favorite', {
      url: '/favorite',
      views: {
        'catalogView': {
          templateUrl: 'templates/favorite.html'
        }
      },
      data: {
        authorization: true
      }
    });

  $urlRouterProvider.otherwise('/login');
}]);

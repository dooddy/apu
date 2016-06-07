'use strict';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '',
      templateUrl: 'templates/home.html',
      abstract: true,
      controller: 'mainCtrl'
    })
    .state('app.login', {
      url: '/login',
      views: {
        'catalogView': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
    .state('app.register', {
      url: '/register',
      views: {
        'catalogView': {
          templateUrl: 'templates/register.html',
          controller: 'registerCtrl'
        }
      }
    })
    .state('app.catalog', {
      url: '/catalog',
      views: {
        'catalogView': {
          templateUrl: 'templates/catalog.html',
          controller: 'catalogCtrl'
        }
      },
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$waitForSignIn();
        }]
      },
      data:  {
        hideBackButton: true
      }
    })
    .state('app.add', {
      url: '/add',
      views: {
        'catalogView': {
          templateUrl: 'templates/add.html',
          controller: 'addCtrl'
        }
      },
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$waitForSignIn();
        }]
      }
    })
    .state('app.favorite', {
      url: '/favorite',
      views: {
        'catalogView': {
          templateUrl: 'templates/favorite.html',
          controller: 'favoriteAppsCtrl'
        }
      },
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$waitForSignIn();
        }]
      },
      data:  {
        hideBackButton: true
      }
    });

  $urlRouterProvider.otherwise('/login');
}]);

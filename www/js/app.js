var app = angular.module('AppThumbsUp', ['ionic', 'firebase'])
  .run(['$rootScope', '$state', '$ionicPlatform', 'authService', function ($rootScope, $state, $ionicPlatform, authService) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          authService.setUser(user);
          $rootScope.currentUser = user;
          $state.go('app.catalog');
        } else {
          authService.setUser(null);
          $rootScope.currentUser = null;
          $state.go('app.login');
        }
      });

      $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (toState.data && toState.data.authorization && !authService.isLoggedIn()) {
          event.preventDefault();
          $state.go('app.login');
        }
      });
    });
  }]);

var app = angular.module('AppThumbsUp', ['ionic', 'firebase', 'ngCordova'])
  .run(['$rootScope', '$state', '$ionicPlatform', '$firebaseObject', 'Auth', function ($rootScope, $state, $ionicPlatform, $firebaseObject, Auth) {
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

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
        $rootScope.hideBackButton = toState.data && toState.data.hideBackButton ? true : false;
      });

      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if (error === 'AUTH_REQUIRED') {
          $state.go('app.login');
        }
      });
    });
  }]);

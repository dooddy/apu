'use strict';

app.controller('mainCtrl', ['$scope', 'authService', function($scope, authService) {
  $scope.login = function() {
    authService.loginWithGoogle();
  };

  $scope.logout = function() {
    authService.logout();
  }
}]);

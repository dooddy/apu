'use strict';

app.controller('registerCtrl', ['$scope', 'Auth', '$ionicPopup', function($scope, Auth, $ionicPopup) {
  $scope.form = {
    email: '',
    password: '',
    repeatPassword: ''
  };

  $scope.register = function() {
    if ($scope.form.password !== $scope.form.repeatPassword) {
      $ionicPopup.alert({
        title: 'Error',
        template: 'Passwords do not match'
      });
      return;
    }

    Auth.$createUserWithEmailAndPassword($scope.form.email, $scope.form.password).then().catch(function(error) {
      $ionicPopup.alert({
        title: 'Error',
        template: error
      })
    });
  };
}]);

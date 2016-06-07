'use strict';

app.controller('loginCtrl', ['$scope', 'Auth', '$ionicPopup', function($scope, Auth, $ionicPopup) {
  $scope.form = {
    email: '',
    password: ''
  };

  $scope.login = function() {
    Auth.$signInWithEmailAndPassword($scope.form.email, $scope.form.password).then().catch(function(error) {
      $ionicPopup.alert({
        title: 'Error',
        template: error
      })
    });
  };
}]);

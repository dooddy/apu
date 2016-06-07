'use strict';

app.controller('mainCtrl', ['$scope', '$firebaseObject', 'Auth', '$state', '$ionicPopup', function($scope, $firebaseObject, Auth, $state, $ionicPopup) {
  $scope.Auth = Auth;

  Auth.$onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
      $state.go('app.catalog');

      var usersRef = firebase.database().ref().child('users').child(user.uid);
      $scope.currentUser = $firebaseObject(usersRef);

      $scope.currentUser.admin = user.email === 'testadmin@gmail.com';
      $scope.currentUser.email = user.email;
      $scope.currentUser.$save();
    } else {
      $state.go('app.login');
    }
  });
}]);

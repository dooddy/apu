'use strict';

app.controller('mainCtrl', ['$scope', '$firebaseObject', 'Auth', '$state', function($scope, $firebaseObject, Auth, $state) {
  $scope.Auth = Auth;

  Auth.$onAuthStateChanged(function(user) {
    if (user) {
      $state.go('app.catalog');

      $scope.currentUser = $firebaseObject(firebase.database().ref().child('users').child(user.uid));

      $scope.currentUser.$loaded(function(obj) {
        if (obj.email) {
          return
        }
        obj.admin = user.email === 'testadmin@gmail.com';
        obj.email = user.email;
        obj.$save();
      })

    } else {
      $state.go('app.login');
    }
  });
}]);

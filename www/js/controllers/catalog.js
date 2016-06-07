'use strict';

app.controller('catalogCtrl', ['$scope', '$firebaseArray', 'currentAuth', function($scope, $firebaseArray, currentAuth) {
  var appsRef = firebase.database().ref().child('apps');
  $scope.apps = $firebaseArray(appsRef);
  $scope.add = function() {
    $firebaseArray(appsRef).push($scope.app);
  }
}]);

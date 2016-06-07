'use strict';

app.controller('addCtrl', ['$scope', '$firebaseArray', '$ionicPopup', function($scope, $firebaseArray, $ionicPopup) {
  $scope.app = {
    name: '',
    description: '',
    link: ''
  };

  var appsRef = firebase.database().ref().child('apps');
  $scope.add = function() {
    $firebaseArray(appsRef).$add($scope.app)
      .then()
      .catch(function(error) {
        $ionicPopup.alert({
          title: 'Error',
          template: error
        });
      });
  }
}]);

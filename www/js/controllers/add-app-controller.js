'use strict';

app.controller('addAppCtrl', ['$scope', 'apps', '$ionicPopup', '$ionicLoading', '$state', function($scope, apps, $ionicPopup, $ionicLoading, $state) {
  $scope.appImage = false;
  $scope.app = {
    name: '',
    description: '',
    link: ''
  };

  $scope.setImage = function(image) {
    $scope.app.image = image;
  };

  $scope.add = function() {
    // Show loading on upload to firebase
    $ionicLoading.show({ template: 'Loading...' });
    apps.$add($scope.app)
      .then(function(obj) {
        // After upload hide loading window and go to catalog page 
        $ionicLoading.hide({ template: 'Loading...' }).then(function() {
          $state.go('app.catalog');
        });
      })
      .catch(function(error) {
        $ionicPopup.alert({
          title: 'Error',
          template: error
        });
      });
  }
}]);

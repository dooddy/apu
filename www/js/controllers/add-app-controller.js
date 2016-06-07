'use strict';

app.controller('addCtrl', ['$scope', 'apps', '$ionicPopup', '$state', function($scope, apps, $ionicPopup, $state) {
  $scope.app = {
    name: '',
    description: '',
    link: ''
  };

  $scope.add = function() {
    apps.$add($scope.app)
      .then(function() {
        $state.go('app.catalog');
      })
      .catch(function(error) {
        $ionicPopup.alert({
          title: 'Error',
          template: error
        });
      });
  }
}]);

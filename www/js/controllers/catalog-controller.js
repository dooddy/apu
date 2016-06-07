'use strict';

app.controller('catalogCtrl', ['$scope', 'apps', '$ionicPopup', 'user', function($scope, apps, $ionicPopup, user) {
  $scope.apps = apps;
  $scope.favoriteApps = user.favoriteApps;

  $scope.delete = function(app) {
    apps.$remove(app)
      .then()
      .catch(function(error) {
        $ionicPopup.alert({
          title: 'Error',
          template: error
        })
      })
  };

  $scope.toggleFavorites = function(app) {
    user.favoriteApps[app.$id] = user.favoriteApps[app.$id] ? null : true;
    user.favoriteApps.$save();
  }
}]);

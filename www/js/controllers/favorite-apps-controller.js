'use strict';

app.controller('favoriteAppsCtrl', ['$scope', 'user', function($scope, user) {
  $scope.favoriteApps = user.favoriteApps;
}]);

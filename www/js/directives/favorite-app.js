'use strict';

app.directive('favoriteApp', [function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/favorite-app.html',
    replace: true,
    scope: {
      key: '='
    },
    controller: ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
      $scope.app = $firebaseObject(firebase.database().ref().child('apps/'+$scope.key));
    }]
  }
}]);

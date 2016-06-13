'use strict';

app.directive('uploadImage', [function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="upload-image" ng-click="uploadImage()">' +
                '<input class="button button-block button-positive" value="Upload image" />' +
                '<img ng-if="image" ng-src="{{image}}" />' +
              '</div>',
    scope: {
      setImage: '=' // Property to pass parent controller method
    },
    controller: ['$scope', '$cordovaCamera', '$ionicLoading', '$ionicPopup', function($scope, $cordovaCamera, $ionicLoading, $ionicPopup) {
      $scope.image = null;

      $scope.uploadImage = function() {
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          encodingType: Camera.EncodingType.JPEG,
          popoverOptions: CameraPopoverOptions,
          correctOrientation:true
        };
        
        // Start showing loading process
        $ionicLoading.show({ template: 'Loading...' });
        $cordovaCamera.getPicture(options).then(function(imageData) {
          // Hide loading process window on finish
          $ionicLoading.hide();
          $scope.image = 'data:image/jpeg;base64, ' + imageData;
          
          // Set image to parent model
          $scope.setImage($scope.image);
        }, function(error) {
          $ionicPopup.alert({
            title: 'Error',
            template: error
          })
        });
      }
    }]
  }
}]);

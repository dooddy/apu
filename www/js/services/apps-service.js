'use strict';

app.factory('apps', ['$firebaseArray', function($firebaseArray) {
  var ref = firebase.database().ref().child('apps');

  return $firebaseArray(ref);
}]);

'use strict';

app.factory('user', ['$firebaseObject', '$firebaseArray', 'Auth', function($firebaseObject, $firebaseArray, Auth) {
  var ref = firebase.database().ref().child('users').child(Auth.$getAuth().uid);
  return {
    favoriteApps: $firebaseObject(ref.child('favoriteApps'))
  };
}]);

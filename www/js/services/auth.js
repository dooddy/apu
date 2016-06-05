'use strict';

app.service('authService', [function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  var service = this;

  service.getUser = function() {
    return service.user;
  };

  service.setUser = function(user) {
    service.user = user;
  };

  service.loginWithGoogle = function() {
    firebase.auth().signInWithPopup(provider).then(function(authData) {
      service.setUser(authData.user);
    }).catch(function(error) {
      console.log('Login Failed!', error);
    });
  };

  service.isLoggedIn = function() {
    return service.user ? true : false;
  };

  service.logout = function() {
    firebase.auth().signOut();
  }
}]);

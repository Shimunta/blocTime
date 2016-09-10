(function () {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref();
    
    // download tasks into an array
    var tasks = $firebaseArray(ref);

    return {
      all: tasks

    }
  }
  angular
      .module('blocTime')
      .factory('Tasks', ['$firebaseArray', Tasks])
})();

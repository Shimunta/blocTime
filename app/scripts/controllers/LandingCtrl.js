(function() {
  function LandingCtrl(Tasks, $scope) {
    $scope.allTasks = Tasks.all;

    $scope.addTask = function() {
      Tasks.all.$add({
        content: $scope.newTask,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      $scope.newTask = "";
    }


  }

  angular
      .module('blocTime')
      .controller('LandingCtrl', ['Tasks', '$scope', LandingCtrl]);
})();

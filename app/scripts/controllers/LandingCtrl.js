(function() {
  function LandingCtrl(Tasks, $scope) {
    $scope.allTasks = Tasks.all;

    $scope.addTask = function() {
      Tasks.all.$add({
        content: $scope.newTask,
        created_at: true
      });
      $scope.newTask = "";
    }


  }

  angular
      .module('blocTime')
      .controller('LandingCtrl', ['Tasks', '$scope', LandingCtrl]);
})();

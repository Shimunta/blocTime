(function () {
  function pomoTimer ($interval) {
      return {
          templateUrl: 'templates/directives/pomo_timer.html',
          replace: true,
          restrict: 'E',
          scope: { },
          link: function(scope, element, attributes) {
              scope.text = "Start Timer";
              scope.breakAttr = false;
              scope.currentTime = 1500
              var begin;

              var countdown = function () {
                scope.currentTime = scope.currentTime - 1
              };

              scope.toggleTimer = function() {
                  if (scope.breakAttr == false) {
                    scope.text = "Reset Timer";
                    scope.breakAttr = true;
                    begin = $interval(countdown, 1000);
                  } else if (scope.breakAttr == true) {
                    scope.text = "Start Timer";
                    scope.breakAttr = false;
                    $interval.cancel(begin);
                    scope.currentTime = 1500;
                  }
              }
          }
      };
  }

  angular
      .module('blocTime')
      .directive('pomoTimer', ['$interval', pomoTimer]);
})();

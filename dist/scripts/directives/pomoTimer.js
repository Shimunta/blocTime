(function () {
  function pomoTimer ($interval, MY_TIME) {
      return {
          templateUrl: 'templates/directives/pomo_timer.html',
          replace: true,
          restrict: 'E',
          scope: { },
          link: function(scope, element, attributes) {
              scope.text = "Start Timer";
              scope.onBreak= false;
              scope.currentTime = MY_TIME.workTime;
              scope.breakText =  "Start Break"
              var breakCount = 0;
              var begin;

              var startTimer = function () {
                begin = $interval(function(){
                  scope.currentTime--;
                  if(scope.currentTime < 0) {
                    $interval.cancel(begin);
                        if (scope.onBreak === false) {
                            if (breakCount === 4) {
                              scope.onBreak = true;
                              scope.currentTime = MY_TIME.longBreak;
                              scope.breakText = "Start Break";
                              breakCount = 0;
                            } else {
                              scope.onBreak = true;
                              scope.currentTime = MY_TIME.breakTime;
                              scope.breakText = "Start Break";
                            }
                        } else {
                          scope.onBreak = false;
                          scope.currentTime = MY_TIME.workTime;
                          scope.text = "Start Timer";
                          breakCount++;
                        }

                  }
                }, 1000);
              };

              var resetTimer = function() {
                if (scope.onBreak === false) {
                  $interval.cancel(begin);
                  scope.currentTime = MY_TIME.workTime;
                } else {
                  $interval.cancel(begin);
                  scope.currentTime = MY_TIME.breakTime
                }
              }

              scope.toggleWorkTimer = function() {
                  if (scope.text === "Start Timer") {
                    scope.text = "Reset Timer";
                    startTimer();
                  } else if (scope.text === "Reset Timer") {
                    scope.text = "Start Timer";
                    resetTimer();
                  }
              }

              scope.toggleBreakTimer = function() {
                if  (scope.breakText === "Start Break") {
                  scope.breakText = "Reset Timer";
                  startTimer();
                } else if (scope.breakText = "Reset Timer") {
                  scope.breakText = "Start Break"
                  resetTimer();
                }

              }
          }
      };
  }

  angular
      .module('blocTime')
      .directive('pomoTimer', ['$interval', 'MY_TIME', pomoTimer]);
})();

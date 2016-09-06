(function() {
  function config($stateProvider, $locationProvider, MY_TIME) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
          });
      $stateProvider
          .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/landing.html'
          });
  }



    var MY_TIME = {
      workTime: 2,
      breakTime: 2,
      longBreak: 5
    };



angular
  .module('blocTime', ['ui.router','firebase'])
  .config(config)
  .constant('MY_TIME', MY_TIME)
})();

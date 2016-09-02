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
      workTime: 1500,
      breakTime: 300
    };



angular
  .module('blocTime', ['ui.router','firebase'])
  .config(config)
  .constant('MY_TIME', MY_TIME)
})();

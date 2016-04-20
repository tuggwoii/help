'use strict';
module.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
          url: "/",
          templateUrl: "views/index.html"
      })
      .state('other', {
          url: "/test",
          templateUrl: "views/test.html"
      });
});
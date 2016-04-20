'use strict';
module.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
          url: "/",
          templateUrl: "views/index.html"
      }).state('other', {
          url: "/test",
          templateUrl: "views/test.html"
      }).state('category', {
          url: "/category",
          templateUrl: "views/category.html"
      });
});
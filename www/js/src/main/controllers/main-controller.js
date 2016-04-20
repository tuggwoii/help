'use strict';
module.controller('MainController', function ($rootScope, $scope, PageService) {

    $scope.onStart = function () {

    };

    $scope.help = function () {
       
    };

    $scope.find = function () {
        console.log('here');
        PageService.moveTo('category', 'left');
    };

    $scope.onStart();

});

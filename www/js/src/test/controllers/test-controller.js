'use strict';
module.controller('TestController', function ($rootScope, $scope, PageService) {

    $scope.onStart = function () {

    };

    $scope.onClick = function () {
        PageService.moveTo('index', 'right');
    };

    $scope.onStart();

});
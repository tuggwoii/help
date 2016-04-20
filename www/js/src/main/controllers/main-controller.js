'use strict';
module.controller('MainController', function ($rootScope, $scope, PageService) {

    $scope.onStart = function () {

    };

    $scope.onClick = function () {
        PageService.moveTo('test', 'left');
    };

    $scope.onStart();

});

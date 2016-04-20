'use strict';
module.controller('CategoryController', function ($rootScope, $scope, PageService) {

    $scope.onStart = function () {

    };

    $scope.back = function () {
        PageService.moveTo('index', 'right');
    };

    $scope.onStart();

});

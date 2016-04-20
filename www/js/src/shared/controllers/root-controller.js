'use strict';
module.controller('RootController', function ($rootScope, $scope, $timeout) {

    $scope.onStart = function () {
        $timeout(function () {
            $scope.push = 'left';
        }, 500);
    };

    $scope.$on('PUSH', function (event, push) {
        $scope.push = push;
    });

    $scope.onStart();

});
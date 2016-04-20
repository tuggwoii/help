'use strict';
module.controller('RootController', function ($rootScope, $scope, $timeout, $http) {

    $scope.onStart = function () {
        $http.get('js/src/strings/th.json').then(function (res) {
            $scope.strings = res.data;
        });

        $timeout(function () {
            $scope.push = 'left';
        }, 500);
    };

    $scope.$on('PUSH', function (event, push) {
        $scope.push = push;
    });

    $scope.onStart();

});
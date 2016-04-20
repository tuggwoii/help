'use strict';
module.service('PageService', function ($rootScope) {
    var screens = [
        { name: 'index', url: '/' },
        { name: 'test', url: '/test' }
    ];

    return {
        moveTo: function (screen, push) {
            angular.forEach(screens, function (scrs) {
                if (scrs.name === screen) {
                    $rootScope.$broadcast('PUSH', push);
                    location.hash = scrs.url;
                }
            });
        }
    };
});
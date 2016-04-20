'use strict';
var module = angular.module('app', ['ui.router', 'ngAnimate']);
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
module.config(function () { });
var app = {

    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.run();
    },
    run: function () {
        angular.bootstrap(document, ['app']);
    }
};
if (isChrome) {
    $(document).ready(app.run);
}
else {
    app.initialize();
}
//$(document).ready(app.run);
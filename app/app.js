(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<home></home>'
                })
                .when('/timer', {
                    template: '<timer></timer>'
                });
        });
}());
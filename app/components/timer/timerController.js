angular.module('app').controller('timerController',
    function ($interval, $scope, timerService) {
        $scope.timer = timerService;
    });
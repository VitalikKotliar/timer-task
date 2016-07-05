angular
    .module('app')
    .service('timerService', function ($interval) {
        var self = this;
        this.counter = 0;

        this.start = function () {
            this.interval = $interval(function () {
                self.counter++;
            }, 200);
        };

        this.stop = function () {
            $interval.cancel(this.interval);
        }
    });
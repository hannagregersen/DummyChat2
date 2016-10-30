/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        function ($scope) {
            $scope.title = "Channel";
        }
    ]);
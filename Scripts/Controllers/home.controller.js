/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "messagesApi",
        "channelsApi",
        function ($scope, messagesApi, channelsApi) {
            $scope.title = "Home";
        }

]);
/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "$cookies",
        "messagesApi",
        "channelsApi",
        function ($scope, $location, $route, $cookies, messagesApi, channelsApi) {
            $scope.$route = $route;
            $scope.$cookies = $cookies;
            $scope.messages = [];
            $scope.channels = [];
            $scope.favoriteChannels = [];
   
            $scope.go = function (url) {
                $location.path(url);
            };
        }

    ]);
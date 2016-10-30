/// <reference path="../angular.js" />



angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "$cookies",
        "postsApi",
        "channelsApi",
        function ($scope, $location, $route, $cookies, postsApi, channelsApi) {
            $scope.$route = $route;
            $scope.$cookies = $cookies;
            $scope.posts = [];
            $scope.channels = [];
            $scope.favoriteChannels = [];
   
            $scope.go = function (url) {
                $location.path(url);
            };
        }

    ]);
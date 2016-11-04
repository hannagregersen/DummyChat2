/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelsController", [
        "$scope",
        "$cookies",
        "channelsApi",
        function ($scope, $cookies, channelsApi) {

            $scope.title = "Channels";
            $scope.newChannel = {};

            $scope.addChannel = function () {
                $scope.channels.push($scope.newChannel);
                channelsApi.saveChannels($scope.newChannel);
                $scope.newChannel = {};
                $("#newChannelModal").modal("hide");
            };

            $scope.removeChannel = function (id) {
                channelsApi.deleteChannel(id).then(function (data) {
                    $scope.getChannels();
                });
            }

            $scope.getChannels = function () {
                console.log("channels");
                channelsApi.getChannels().then(function (data) {
                    if (data != null)
                        $scope.channels = data;
                });
            }

            $scope.addFavorit = function (id) {
                channelsApi.getChannel(id).then(function (data) {
                    if (data != null) {
                        $scope.favoriteChannels.push(data);
                        $cookies.remove('myFavoriteChannels');
                        $cookies.putObject('myFavoriteChannels', $scope.favoriteChannels);
                    }
                });
            }

            $scope.checkFavorites = function () {
                var favorites = $cookies.getObject('myFavoriteChannels');
                if (favorites != null) {
                    $scope.favoriteChannels = favorites;
                }
            }

            $scope.getChannels();
            $scope.checkFavorites();
        }
    ]);
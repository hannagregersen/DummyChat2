/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "$routeParams",
        "$interval",
        "channelsApi",
        "messagesApi",
        function ($scope, $routeParams,$interval, channelsApi, messagesApi) {
            $scope.$on("$destroy", function () {
                if (angular.isDefined($scope.stop)) {
                    $interval.cancel($scope.stop);
                }
            });
            var channelId = $routeParams.id;
            $scope.currentChannel = {};
            $scope.stop;

            if (channelId != null && channelId.length > 0) {
                channelsApi.getChannel(channelId).then(function (data) {
                    $interval.cancel(stop);
                    if (data != null) {
                        $scope.currentChannel = data;
                        $scope.messages = data.messages;
                        $scope.stop = $interval(function () {
                            if (channelId != null && channelId.length > 0) {
                                channelsApi.getChannel(channelId).then(function (data) {
                                    if (data != null) {
                                        $scope.currentChannel = data;
                                        $scope.messages = data.messages;
                                    }
                                });
                            }
                        }, 1000);
                    }
                });
            }
 
            $scope.newMessage = {};

            $scope.addMessage = function () {
                messagesApi.addMessage($scope.newMessage);
                channelsApi.getChannel(channelId).then(function (data) {
                    if (data != null) {
                        $scope.currentChannel = data;
                        $scope.messages = data.messages;
                        $scope.messages.push($scope.newMessage);
                    }
                });
                $scope.newMessage = {};
                $("#newMessageModal").modal("hide");
            };

            $scope.getMessages = function () {
                messagesApi.getMessages()
                   .then(function (data) {
                       console.log(data);
                       if (data != null)
                           $scope.messages = data;
                   });
            }

            $scope.deleteMessage = function (message) {
                messagesApi.deleteMessage(message)
                    .then(function () {
                        var index = $scope.messages.map(function (message) {
                            return message.id;
                        }).indexOf(message.id);

                        $scope.messages.splice(index, 1);
                    });

                $scope.deleteChannel = function (channel) {
                    channelsApi.deleteChannel(channel.id)
                        .then(function () {
                            var index = $scope.channels.map(function (channel) {
                                return channel.id;
                            }).indexOf(channel.id);

                            $scope.channel.splice(index, 1);
                        });
                }
            }
        }
    ]);
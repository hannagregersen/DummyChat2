/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        "channelsApi",
        function ($scope, postsApi, channelsApi) {
            $scope.title = "Home";
            
            $scope.deletePost = function (post) {
                postsApi.deletePost(post.id)
                    .then(function () {
                        var index = $scope.posts.map(function (post) {
                            return post.id;
                        }).indexOf(post.id);

                        $scope.posts.splice(index, 1);
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

            $scope.getPosts = function () {
                postsApi.getPosts()
                   .then(function (data) {
                       console.log(data);
                       if (data != null)
                           $scope.posts = data;
                   });
            }
            $scope.getPosts();

        }

]);
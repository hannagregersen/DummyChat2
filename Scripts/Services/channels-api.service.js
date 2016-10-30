angular.module("mainModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var apiChannels = api + "/channels";

            this.saveChannels = function (channels) {
                var deferred = $q.defer();
                $http.post(apiChannels, channels)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
            }

            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(apiChannels)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.getChannel = function (id) {
                var deferred = $q.defer();

                $http.get(apiChannels + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.channel(apiChannels, newChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateChannel = function (updatedChannel) {
                var deferred = $q.defer();

                $http.put(apiChannels + "/" + updatedChannel.id, updatedChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteChannel = function (id) {
                var deferred = $q.defer();

                $http.delete(apiChannels + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };
        }
    ]);
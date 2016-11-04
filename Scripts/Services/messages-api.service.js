angular.module("mainModule")
    .service("messagesApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var messagesApi = api + "/messages";

            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messagesApi)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addMessage = function (newMessage) {
                var deferred = $q.defer();
                console.log("add" + newMessage);
                $http.post(messagesApi, newMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateMessage = function (updatedMessage) {
                var deferred = $q.defer();

                $http.put(messages + "/" + updatedMessages.id, updatedMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteMessage = function (id) {
                var deferred = $q.defer();
                console.log(id);
                $http.delete(messagesApi + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };
        }
    ]);
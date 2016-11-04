angular.module("mainModule")
    .controller("NewMessageController", [
        "$scope",
        "messagesApi",
        function ($scope, messagesApi) {
            $scope.title = "New message";
           
            
        }
    ]);
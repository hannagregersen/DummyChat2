angular.module("mainModule")
.directive("successButton", [
    function () {
        return {
            restrict: "E",
            scope: {
                clicked: "=ngModel"
            },
            template: ''
                
        }
    }
]);
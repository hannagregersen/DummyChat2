angular.module("mainModule")
.directive("successButton", [
    function () {
        return {
            restrict: "E",
            scope: {
                clicked: "=ngModel"
            },
            template: `
                <button type="submit"
                        ng-click="clicked = !clicked"
                        class ="btn btn-success">
                    <span class ="glyphicon glyphicon-check"
                        ng-show="clicked"
                        Success!
                </button>
                `
        }
    }
]);
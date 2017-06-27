angular.module("myFirstApp", [])
    .run(function($rootScope) {
        $rootScope.nombre = "Codigo Facilito";
    })

.controller("FirstController", function($scope) {
        $scope.nombre = "asdasdasd";
        setTimeout(function() {
            $scope.$apply(function() {
                $scope.nombre = "KHE"
            });
        }, 1000);
    })
    .controller("ChildController", function($scope) {

    });
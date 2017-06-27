angular.module("CustomDirective", [])
    .directive('backImg', function() {
        return function(scope, element, attrs) {
            attrs.$observe('backImg', function(value) {
                element.css({
                    'background': 'url(' + value + ')',
                    'background-size': 'cover',
                    'background-position': 'center'
                });
            });
        }
    })
    /**
     * style="background:url({{repo.owner.avatar_url}});background-position:center;background-size:cover;"
     */
    .controller("AppCtrl", function($scope, $http) {
        $http.get("https://api.github.com/users/damianlongoria/repos")
            .success(function(data) {
                $scope.repos = data;
            })
            .error(function(err) {
                console.log(err);
            })
    });
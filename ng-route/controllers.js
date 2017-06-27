angular.module("CustomDirective")
    .controller("ReposController", function($scope, $http) {
        console.log("Entrando a ReposController")
        $scope.repos = [];
        $http.get("https://api.github.com/users/twitter/repos")
            .success(function(data) {
                $scope.posts = data;
                for (var i = data.length - 1; i >= 0; i--) {
                    var repo = data[i];
                    $scope.repos.push(repo.name);
                };
            })
            .error(function(err) {
                console.log(err);
            });
        $scope.optionSelected = function(data) {
            $scope.$apply(function() {
                $scope.main_repo = data;
            })
        }
        $scope.clean = function() {
            $scope.main_repo = null;
            $('input').val('');
        };
    })
    .controller("RepoController", function($scope, $http, $routeParams) {
        console.log("Entrando a RepoController")
        $scope.repo = {};
        $http.get("https://api.github.com/repos/twitter/" + $routeParams.name)
            .success(function(data) {
                $scope.repo = data;
                console.log("aqui andamos perro")
            })
            .error(function(err) {
                console.log(err);

            });
    });
angular.module("FinalApp")
    .controller("MainController", function($scope, $resource, PostResource) {

        User = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });

        $scope.posts = PostResource.query();
        $scope.users = User.query();
        $scope.removePost = function(post) {
                PostResource.delete({ id: post.id }, function(data) {
                    console.log(data);
                });
                $scope.posts = $scope.posts.filter(function(element) {
                    return element.id !== post.id;
                })
            }
            // query() -> GET /posts -> Un arreglo de posts -> isArray: true
    })
    .controller("PostController", function($scope, PostResource, $routeParams, $location) {
        $scope.title = "Editar Post";
        $scope.post = PostResource.get({ id: $routeParams.id });
        $scope.savePost = function() {
            PostResource.update({ id: $scope.post.id }, { data: $scope.post }, function(data) {
                console.log(data);
                $location.path("/post/" + $scope.post.id);
            });
        }
    })
    .controller("NewController", function($scope, PostResource, $location) {

        $scope.title = "Crear Post";
        $scope.savePost = function() {
            PostResource.save({ data: $scope.post }, function(data) {
                console.log(data);
                $location.path("/");
            });
        }
    });
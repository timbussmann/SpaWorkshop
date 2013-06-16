app.controller('scrumboardController', function($scope, $http) {

    $http.get('/api/stories').success(function (stories) {
        $scope.stories = stories;
    });
});
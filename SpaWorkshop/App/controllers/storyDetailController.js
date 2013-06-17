app.controller('storyDetailController', function($scope, $http, $routeParams) {
    $http.get('/api/story/' + $routeParams.storyId).success(function(story) {
        $scope.story = story;
    });
});
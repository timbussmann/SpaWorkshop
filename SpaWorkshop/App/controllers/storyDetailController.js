app.controller('storyDetailController', function ($scope, $http, $routeParams) {

    $scope.states = ['Sprint Backlog', 'Work In Progress', 'To Verify', 'Done'];

    $http.get('/api/story/' + $routeParams.storyId).success(function(story) {
        $scope.story = story;
    });
});
app.controller('scrumboardController', function($scope, $http) {

    $http.get('/api/stories').success(function (stories) {
        $scope.stories = stories;
    });
});

app.controller('storyDetailController', function ($scope, $http, $routeParams, $location) {

    $scope.states = ['Sprint Backlog', 'Work In Progress', 'To Verify', 'Done'];
});
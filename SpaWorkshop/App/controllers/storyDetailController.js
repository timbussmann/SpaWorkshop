app.controller('storyDetailController', function ($scope, $http, $routeParams, $location) {

    $scope.states = ['Sprint Backlog', 'Work In Progress', 'To Verify', 'Done'];

    $http.get('/api/story/' + $routeParams.storyId).success(function(story) {
        $scope.story = story;
    });

    $scope.saveStory = function() {
        $http.put('/api/story/', $scope.story).success(function() {
            $location.url('/scrumboard');
        });
    };

});
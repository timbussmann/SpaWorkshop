app.controller('scrumboardController', function($scope, $http) {

    $http.get('/api/stories').success(function (stories) {
        $scope.stories = stories;
    });
});

app.controller('chatController', function ($scope) {
    
    $scope.messages = '';
    var hub = $.connection.chatHub;
    hub.client.addMessage = function (message) {
        $scope.messages += 'Someone else: ' + message + '\n';
        $scope.$apply();
    };

    $.connection.hub.start();

    $scope.sendMessage = function () {
        var message = $scope.chatMessage;
        $scope.messages += 'You: ' + message + '\n';
        hub.server.sendMessage(message);
        $scope.chatMessage = '';
    };
});

app.controller('storyDetailController', function ($scope, $http, $routeParams, $location) {

    $scope.states = ['Sprint Backlog', 'Work In Progress', 'To Verify', 'Done'];

    $http.get('/api/story/' + $routeParams.storyId).success(function (story) {
        $scope.story = story;
    });

    $scope.saveStory = function () {
        $http.put('/api/story/', $scope.story).success(function () {
            $location.url('/scrumboard');
        });
    };
});
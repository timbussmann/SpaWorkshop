app.controller('scrumboardController', function($scope, $http) {

    $http.get('/api/stories').success(function (stories) {
        $scope.stories = stories;
    });

    $scope.messages = '';
    var hub = $.connection.chatHub;
    hub.client.addMessage = function(message) {
        $scope.messages += 'Someone else:' + message + '\n';
        $scope.$apply();
    };
    
    $.connection.hub.start();

    $scope.sendMessage = function () {
        var message = $scope.chatMessage;
        $scope.messages += 'You:' + message + '\n';
        hub.server.sendMessage(message);
        $scope.chatMessage = '';
    };
});
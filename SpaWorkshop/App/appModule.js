var app = angular.module('scrumboard', [], function($routeProvider, $locationProvider) {

    $routeProvider.when('/scrumboard', {
        templateUrl: '/App/views/scrumboardView.html'
    });
    $routeProvider.when('/details/:storyId', {
        templateUrl: '/App/views/storyDetailView.html',
        controller: 'storyDetailController'
    });
    $routeProvider.otherwise({ redirectTo: '/scrumboard' });

    $locationProvider.html5Mode(true);
});

app.service('chatService', function($rootScope) {

    var self = this;
    this.messages = '';

    var hub = $.connection.chatHub;
    hub.client.addMessage = function(message) {
        self.messages += 'Someone else: ' + message + '\n';

        $rootScope.$apply(function() {
            $rootScope.$broadcast('MessageReceived');
        });
    };
    $.connection.hub.start();

    this.sendMessage = function(message) {
        self.messages += 'you: ' + message + '\n';
        hub.server.sendMessage(message);
    };
});
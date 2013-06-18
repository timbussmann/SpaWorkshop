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
    this.messages = sessionStorage.getItem('chat') || '';

    var hub = $.connection.chatHub;
    if (hub){
        hub.client.addMessage = function(message) {
            addMessage('Someone else: ' + message);

            $rootScope.$apply(function() {
                $rootScope.$broadcast('MessageReceived');
            });
        };
        $.connection.hub.start();
    }

    this.sendMessage = function(message) {
        addMessage('You: ' + message);
        hub.server.sendMessage(message);
    };

    function addMessage(message) {
        self.messages += message + '\n';
        sessionStorage.setItem('chat', self.messages);
    }
});
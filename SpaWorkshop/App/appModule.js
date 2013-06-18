var app = angular.module('scrumboard', [], function($routeProvider, $locationProvider) {

    $routeProvider.when('/scrumboard', {
        templateUrl: '/App/views/scrumboardView.html',
        controller: 'scrumboardController'
    });
    
    // add additional routes here
    
    $routeProvider.otherwise({ redirectTo: '/scrumboard' });

    $locationProvider.html5Mode(true);
});
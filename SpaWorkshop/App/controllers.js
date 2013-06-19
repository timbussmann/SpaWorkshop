app.controller('scrumboardController', function($scope, $http) {

    // load the stories from the api instead
    $scope.stories = [{
        title: 'demo story',
        description: 'if you can see this story, your bindings are working correctly.'
    }];

});
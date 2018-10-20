'use strict';

var app = angular.module('todoApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../views/TodoList.html',
            controller: 'TodoListCtrl'
        })
        .when('/todo/details/:id', {
            templateUrl: '../../views/TodoDetails.html',
            controller: 'TodoDetailsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('TodoLayoutCtrl', function ($scope) {
    $scope.theMessage = 'Hello I am here to help. TodoLayoutCtrl';
});

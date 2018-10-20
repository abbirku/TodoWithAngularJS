app.controller('TodoListCtrl', function ($scope, $location, TodoService) {
    console.log('inside TodoListCtrl');

    //console.log($location.absUrl());
    //console.log($location.protocol() + "://" + $location.host() + ":" + $location.port());

    $scope.todo = {
        Id: 0,
        Name: '',
        TodoDescription: '',
        IsComplete: false
    };

    $scope.LinkToTodoDetails = function (id) {
        $location.path('/todo/details/' + id);
    }

    $scope.GetAllTodo = function () {
        TodoService.GetAllTodo().then(function (response) {
            $scope.todoList = response;
        });
    };

    $scope.GetAllTodo();

    $scope.ClearModalData = function () {
        $scope.todo = {
            name: '',
            todoDescription: '',
            IsComplete: false
        };
    };

    $scope.Save = function () {
        TodoService.PostTodo($scope.todo).then(function (response) {
            alert(response);
        }).then(function () {
            $scope.GetAllTodo();
            $scope.ClearModalData();
            angular.element(".modal").modal('hide');
        });
    };

    $scope.DeleteTodo = function (id) {
        TodoService.DeleteTodo(id).then(function (response) {
            alert(response);
        }).then(function () {
            $scope.GetAllTodo();
        });
    };


});
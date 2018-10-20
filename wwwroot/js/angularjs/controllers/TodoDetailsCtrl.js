app.controller('TodoDetailsCtrl', function ($scope, $routeParams, $location, TodoService) {
    console.log('Inside TodoDetailsCtrl');
    console.log($routeParams.id);

    $scope.CreateTodoObject = function () {
        var obj = {
            Id: $routeParams.id,
            Name: $scope.todo.Name,
            TodoDescription: $scope.todo.TodoDescription,
            IsComplete: $scope.todo.IsComplete
        };
        return obj;
    };

    TodoService.GetTodoById($routeParams.id).then(function (response) {
        $scope.todo = response;
    });

    $scope.UpdateTodo = function () {
        var obj = $scope.CreateTodoObject();
        console.log(obj);
        TodoService.UpdateTodo($routeParams.id, obj).then(function (response) {
            alert(response);
        }).then(function () {
            $location.path('/');
        });

    };
});
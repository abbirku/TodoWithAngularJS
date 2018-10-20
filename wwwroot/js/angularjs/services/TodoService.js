app.factory('TodoService', function ($http, $location) {
    var GetData = function () {
        var obj = [{
            Id: 1,
            Name: "Abbir 1",
            IsComplete: true
        },
        {
            Id: 2,
            Name: "Abbir 2",
            IsComplete: false
        },
        {
            Id: 3,
            Name: "Abbir 3",
            IsComplete: false
        }];
        return obj;
    };

    var baseUri = $location.protocol() + "://" + $location.host() + ":" + $location.port() + '/';
    console.log(baseUri);

    return {
        GetData: GetData,
        GetAllTodo: function () {
            var promise = $http({
                method: 'GET',
                url: baseUri + 'api/todo'
            }).then(function (response) {
                if (response.data.success === true) {
                    return response.data.data;
                } else {
                    console.log(response.data.errorMessage);
                    return {};
                }
            });
            return promise;
        },
        GetTodoById: function (id) {
            var promise = $http({
                method: 'GET',
                url: baseUri + 'api/todo/' + id
            }).then(function (response) {
                if (response.data.success === true) {
                    return response.data.data;
                } else {
                    console.log(response.data.errorMessage);
                    return {};
                }
            });
            return promise;
        },
        PostTodo: function (item) {
            var promise = $http({
                method: 'POST',
                url: baseUri + 'api/todo',
                data: item
            }).then(function (response) {
                if (response.data.success === true) {
                    return response.data.data;
                } else {
                    return response.data.errorMessage;
                }
            });
            return promise;
        },
        UpdateTodo: function (id, item) {
            var promise = $http({
                method: 'PUT',
                url: baseUri + 'api/todo/' + id,
                data: item
            }).then(function (response) {
                if (response.data.success === true) {
                    return response.data.data;
                } else {
                    return response.data.errorMessage;
                }
            });
            return promise;
        },
        DeleteTodo: function (id) {
            var promise = $http({
                method: 'DELETE',
                url: baseUri + 'api/todo/' + id
            }).then(function (response) {
                if (response.data.success === true) {
                    return response.data.data;
                } else {
                    console.log(response.data.errorMessage);
                    return {};
                }
            });
            return promise;
        }
    };
});
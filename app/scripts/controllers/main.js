'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http) { 
    $scope.quotes = [];
    $scope.addTodo = function () {
      $scope.quotes.push($scope.todo);
      $scope.todo = '';
    };
    $scope.addquotes = function (formTodoText) {
        console.log(formTodoText);
    	$scope.quotes.push({text:formTodoText});
   		$scope.formTodoText = '';
  	};
    $scope.removeTodo = function (index) {
      $scope.quotes.splice(index, 1);
    };
	$scope.getQuote = function(quote) {
        var url = 'https://qualified-day-584.appspot.com/_ah/api/lqs/v1/livequote/'.concat(quote);
        $http.get(url).
        success(function(data) {
            $scope.greeting = data;
            $scope.quotes.push(data);
        });
    }
  });


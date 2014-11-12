angular.module('todoDiary', [])
  .controller('todoController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'Learn HTML/CSS', checked:true},
      {text:'Javascript', checked:false}];
 
    $scope.add = function() {
      $scope.todos.push({text:$scope.todoWork, checked:false});
      $scope.todoWork = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.checked ? 0 : 1;
      });
      return count;
    };
  }]);
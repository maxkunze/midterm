var app = angular.module('allTasks', []); 

app.controller('taskCtrl', function($scope) {

    $scope.tasks = [];
    $scope.saved = JSON.parse(localStorage.getItem('tasks'));
    $scope.tasks = Array.isArray($scope.saved) ? $scope.saved : [];
    console.log($scope.tasks)
    
    $scope.newTask = {id: cuid(), description:'', date:'', complete: false}
    $scope.newTask.id = cuid()
    
    
    $scope.addTask = function() {
        $scope.newTask.complete = false;
        $scope.tasks.push($scope.newTask);
        $scope.newTask = {id: cuid(), description:'', date:'', complete: false}
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };

    
    $scope.deleteTask = function(){
        $scope.tasks.splice(this.$index, 1)
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));

    };
    
    
    $scope.save = function () {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
});
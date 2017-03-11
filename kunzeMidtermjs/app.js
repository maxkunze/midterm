var app = angular.module('allTasks', []); 

app.controller('taskCtrl', function($scope) {
    
$scope.today = new Date();
$scope.saved = localStorage.getItem('tasks');
$scope.task = (localStorage.getItem('tasks')!==null) ? 
JSON.parse($scope.saved) : [ {description: "This is your first task", date: $scope.today, complete: false}];
localStorage.setItem('tasks', JSON.stringify($scope.task));

$scope.description = null;
$scope.deadline = null;
$scope.addTask = function () {
    if ($scope.deadline == null || $scope.deadline == '') {
        $scope.task.push({
            description: $scope.description,
            date: "No deadline",
            complete: false,
        }) 
    } else {
        $scope.task.push({
            description: $scope.description,
            date: $scope.deadline,
            complete: false,
        })
    };
    $scope.description = '';
    $scope.deadline = '';
    localStorage.setItem('tasks', JSON.stringify($scope.task));
};
$scope.deleteTask = function () {
    var completedTask = $scope.task;
    $scope.task = [];
    angular.forEach(completedTask, function (task) {
        if (!task.complete) {
            $scope.task.push(task);
        }
    });
    localStorage.setItem('tasks', JSON.stringify($scope.task));
};
$scope.editTask = function () {
    $scope.task = $scope.tasks.task;

    localStorage.setItem('tasks', JSON.stringify($scope.task));
   //$scope.editTask = function (index) {
   //$scope.task = $scope.tasks[index].task;
   //$scope.editIndex = index;}
};
$scope.save = function () {
    localStorage.setItem('tasks', JSON.stringify($scope.task));
}
});
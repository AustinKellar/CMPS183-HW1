
var app = angular.module('app', []);
app.controller('MainController', ['$scope', function($scope) {
	$scope.courses = [
		{ number: 'CMPS109', title: 'Advanced Programming', dept: 'Computer Science', quarter: 'Fall' },
		{ number: 'CMPS180', title: 'Database Systems', dept: 'Computer Science', quarter: 'Fall' },
		{ number: 'ARTG80G', title: 'Interactive Design', dept: 'Art and Design', quarter: 'Fall' },
		{ number: 'CMPS128', title: 'Distributed Systems', dept: 'Computer Science', quarter: 'Winter' },
		{ number: 'CMPS183', title: 'Web Applications', dept: 'Computer Science', quarter: 'Winter' },
		{ number: 'CMPM176', title: 'Game Systems', dept: 'Computational Media', quarter: 'Winter' }
	];
	$scope.todos = [
		{
			title: 'Make a profile for Peter Parker',
			notes: 'These are notes about the profile',
			due: '2/15/18',
			completed: true
		},
		{
			title: 'Make a to do list for Peter Parker',
			notes: 'These are notes about the to do list',
			due: '2/16/18',
			completed: false
		},
		{
			title: 'Make a to do form for Peter Parker',
			notes: 'These are notes about the to do form',
			due: '12/17/18',
			completed: false
		},
		{
			title: 'Turn in this assignment',
			notes: 'This is the assignment to turn in',
			due: '12/18/18',
			completed: false
		}
	];

	$scope.check = function(tite) {
		$scope.filterTable();
	};

	$scope.filterTable = function() {
		if($scope.filter == 'Show All') {
			$scope.showing = $scope.todos;
		} else if($scope.filter == 'Show Completed') {
			$scope.showing = [];
			for(var i=0; i<$scope.todos.length; i++) {
				if($scope.todos[i].completed == true) {
					$scope.showing.push($scope.todos[i]);
				}
			}
		} else {
			$scope.showing = [];
			for(var i=0; i<$scope.todos.length; i++) {
				if($scope.todos[i].completed == false) {
					$scope.showing.push($scope.todos[i]);
				}
			}
		}
	}
	$scope.showing = undefined;
	$scope.filter = 'Show All';
	$scope.filterTable();

	$scope.submission = {
		title: undefined,
		date: undefined,
		notes: undefined
	};

	$scope.submitTask = function() {
		console.log($scope.submission);
	};
}]);
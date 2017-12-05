"use strict";
define(['app'],function(app){
	app.register.controller('ToDoController',['$scope','$rootScope','$uiModal',function($scope,$rootScope,$uiModal){
		$scope.init = function(){
			$rootScope.__MODULE_NAME = 'ToDo';
			$scope.ToDoLabel = 'My to do list';
			$scope.Tasks = [
				'Do laundry',
				'Deposit check',
				'Buy milk'
			];
		}
		$scope.SetActiveTask = function(task){
			$scope.ActiveTask = task;
		}
		$scope.openTaskModal = function(){
			var taskModal = $uiModal.open({
					'templateUrl':'TaskModal.html',
					'controller':'TaskModalController'
				});
		}
	}]);
	app.register.controller('TaskModalController',['$scope','$uiModalInstance',function($scope,$uiModalInstance){
		
	}]);
});
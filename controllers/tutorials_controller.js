"use strict";
define(['app'],function(app){
	app.register.controller('ToDoController',['$scope','$rootScope','$uibModal',function($scope,$rootScope,$uibModal){
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
			var taskModal = $uibModal.open({
					'templateUrl':'TaskModal.html',
					'controller':'TaskModalController'
				});
		}
	}]);
	app.register.controller('TaskModalController',['$scope','$uibModalInstance',function($scope,$uibModalInstance){
		
	}]);
});
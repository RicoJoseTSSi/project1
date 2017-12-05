"use strict";
define(['app','api'],function(app){
	app.register.controller('ToDoController',['$scope','$rootScope','$uibModal','api',function($scope,$rootScope,$uibModal,api){
		$scope.init = function(){
			$rootScope.__MODULE_NAME = 'ToDo';
			$scope.ToDoLabel = 'My to do list';
			api.GET('tasks',function success(response){
				$scope.Tasks = response.data;
			});
		}
		$scope.SetActiveTask = function(task){
			$scope.ActiveTask = task;
		}
		$scope.openTaskModal = function(){
			var taskModal = $uibModal.open({
					'templateUrl':'TaskModal.html',
					'controller':'TaskModalController'
				});
			taskModal.result.then(function confirmAction(){
				
			},function dismisssAction(){
				api.GET('tasks',function success(response){
					$scope.Tasks = response.data;
				});
			});
		}
	}]);
	app.register.controller('TaskModalController',['$scope','$uibModalInstance','api',function($scope,$uibModalInstance,api){
		$scope.confirmTask = function(){
			var data = {title:$scope.NewTask};
			api.POST('tasks',data,function success(response){
				$uibModalInstance.dismiss();
			});
		};
		$scope.cancelTask = function(){
			$uibModalInstance.dismiss();
		};
	}]);
});
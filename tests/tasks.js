"use strict";
define(['model'],function($model){
	var Task  = new $model(
			{
				meta:{
					title:'Task Lists'
				},
				data:[
					{id:1,title:'Do Laundry'},
					{id:2,title:'Deposit check'},
					{id:3,title:'Buy milk'}
				]
			}
		);
	return Task;
});
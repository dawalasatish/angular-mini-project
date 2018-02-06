angular.module("App").factory("fact",function(){
		var a = {};
		a.username = function(){
			return 'Hello user.....'
		}
		return a;
	});
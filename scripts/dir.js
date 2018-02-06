angular.module("App").directive("myDir",function(){
	return{
		templateUrl:"views/About.html",
		restrict:'E',
		replace:true,
		scope:{

		},
		controller:function($scope,$rootScope,nameprovider){
			//$scope.name = fact.username();
			$scope.nm = nameprovider.appName;
		

 $rootScope.$on("event", function (event, args) {
	 document.getElementById('logo').src = args;
        console.log(args);
    });
		}
	}
});
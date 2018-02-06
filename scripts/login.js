
angular.module("App").controller("homeCtrl",function($state,$scope,Myservice){
$scope.Login=function(){
/*$state.go("dashboard");*/
var login ={
nationalId : $scope.username,
password : $scope.password
}
var details = JSON.stringify(login);
Myservice.post("http://shamba.shambadigital.com/Shamba/login",details).then(function success(response){
$scope.data=response;
console.log($scope.data);
if(response.status === 'success'){
$state.go("homepage");
}
else{
alert("Credentials are invalid");
}
})
}

})
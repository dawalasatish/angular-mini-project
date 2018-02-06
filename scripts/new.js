angular.module('App')
 .controller('personsignupCtrl',  function ($scope,Myservice) {
   
   
  $scope.getCountriesData=function(){
 
Myservice.get("http://shamba.shambadigital.com/Shamba/county").then(function(resp){
if(resp.status=="success"){

$scope.countriesList=angular.copy(resp.result);
console.log($scope.countriesList)
}
else if(resp.status=='fail'){
swal("Failed... Please Try Again");	

}
});
  };
  
  $scope.getOrgData = function(){
Myservice.get("http://62.12.118.38/Shamba/orgList").then(function(resp){
if(resp.status=="success"){

$scope.organisationList=angular.copy(resp.result);
}
else if(resp.status=='fail'){
swal("There Is A Problem In Server");	

}
},function(resp){
       swal("There Is A Problem In Server.Please Try Again");
 });
 
};

$scope.orgChange=function(obj){
$scope.detailsObj.countyId = angular.copy(obj.id)
};
$scope.orgConst=function(obj){
$scope.detailsObj.constId = angular.copy(obj.id)
};
$scope.orgWard=function(obj){
$scope.detailsObj.wardId = angular.copy(obj.id)
};
  
  $scope.imageUploadFunc = function(event){
 var files = event.target.files;

   for (var i = 0; i < files.length; i++) {
   var file = files[i];
   
  
     $scope.detailsObj.profileImage = file;
     console.log($scope.image)

  }
};

$scope.personSignUp=function(){

$scope.detailsObj.userType='EXT';


var formData = new FormData();
var params = $scope.detailsObj;
$.each(params, function(k, v) {
formData.append(k, v);
});
Myservice.uploadimage("http://62.12.118.38/Shamba/emp/register",formData).then(function(resp){
if(resp.status=="success"){
alert("success")

}
else{
alert('error')	
}
});

};

$scope.init=function(){
$scope.getOrgData();
 $scope.getCountriesData();
$scope.detailsObj={};
};

/*angular.forEach(my_object, function(value, key) {
 console.log(value, key);
}); */
 /* $(document).ready(function () {
                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').toggleClass('active');
                });
            }); */
  
   
});
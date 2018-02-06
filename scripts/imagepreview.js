angular.module('App')
.controller('imageuploadingCtrl',  function ($scope,$rootScope) {
  
  

 $scope.imageUploadFunc = function(event){


var preview = document.getElementById('controller');  
var file    = document.querySelector('input[type=file]').files[0];
 var reader  = new FileReader();

 

 if (file) {
 
   reader.readAsDataURL(file);
  
 }
 
 reader.addEventListener("load", function () {
 
   preview.src = reader.result;
   $rootScope.$broadcast('event',  preview.src)
 }, false);
    

 }
});
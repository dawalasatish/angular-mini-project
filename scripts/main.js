var app = angular.module("App",["ui.router",'oc.lazyLoad','angular-loading-bar']);
app.controller("Ctrl",function($scope, $state){

});

app.config(function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider,$provide,cfpLoadingBarProvider){
	 $provide.provider('nameprovider', function () {
     this.$get = function () { 
      // var appname = "Ojas-IT";
      var img = "logo.png";
       return { appName: img };
        }
      })

  $urlRouterProvider.otherwise("/")
	$stateProvider
	
    
 
	.state("/",{
		url:"/",
		templateUrl:"views/Login.html",
		 controller:'ctrl',
		/*resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load('scripts/app.js');
                    }
                 }*/
            resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                    	name :"Myservice",
                    	files:['scripts/service.js']
                    }),
                    $ocLazyLoad.load({
                    	name :"routerApp",
                    	files:['scripts/app.js']
                    })
                    }
                 }     

	})
  .state("new",{
    url:"/new",
    templateUrl:"views/new.html",
     controller:'personsignupCtrl',
    /*resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load('scripts/app.js');
                    }
                 }*/
            resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name :"Myservice",
                      files:['scripts/service.js']
                    }),
                    $ocLazyLoad.load({
                      name :"routerApp",
                      files:['scripts/new.js']
                    })
                    }
                 }     

  })

	.state("homepage",{
		url:"/homepage",
		templateUrl:"views/Home.html",
		controller:'homeCtrl',
		 resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                    	name :"Myservice",
                    	files:['scripts/service.js']
                    }),
                    $ocLazyLoad.load({
                    	name :"routerApp",
                    	files:['scripts/homecrtl.js']
                    }),
                      $ocLazyLoad.load({
                    	directive :"directive",
                    	files:['scripts/dir.js']
                    }),
                   $ocLazyLoad.load({
                    	factory :"factory",
                    	files:['scripts/factory.js']
                    }),
                   $ocLazyLoad.load({
                     filter :"numberfilter",
                      files:['scripts/filter.js']
                    })
                    }


                 }     

	})
  .state("charts",{
    url:"/charts",
    templateUrl:"views/chart.html",
    controller:'homeCtrl',
     resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name :"Myservice",
                      files:['scripts/service.js']
                    }),
                    $ocLazyLoad.load({
                      name :"routerApp",
                      files:['scripts/homecrtl.js']
                    }),
                      $ocLazyLoad.load({
                      directive :"directive",
                      files:['scripts/dir.js']
                    })
                    }


                 }     

  })
  .state("datatable",{
    url:"/datatable",
    templateUrl:"views/datatable.html",
    controller:'datatableCtrl',
     resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name :"routerApp",
                      files:['scripts/datatable.js']
                    }),
                      $ocLazyLoad.load({
                      directive :"directive",
                      files:['scripts/dir.js']
                    })
                    }


                 }     

  })
	/*resolve :{
		lazyLoad: function($ocLazyLoad){
			return $ocLazyLoad.load('app.js')
		}
	}*/
	 .state("imagepreview",{
    url:"/imagepreview",
    templateUrl:"views/imagepreview.html",
     controller:'imageuploadingCtrl',
    /*resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load('scripts/app.js');
                    }
                 }*/
            resolve: {
               lazyLoad:  function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name :"routerApp",
                      files:['scripts/imagepreview.js']
                    }),
                    $ocLazyLoad.load({
                      directive :"directive",
                      files:['scripts/dir.js']
                    })
                    }
                 }     

  })



});

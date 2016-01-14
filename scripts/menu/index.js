angular.module('app.menu',[])
.config(function($stateProvider){
	$stateProvider
		.state('menu',{
			url:'',
			templateUrl: '/scripts/menu/main.html',
			controller: 'MenuController as ctrl'
		})
})
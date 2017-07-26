var app = angular.module('apiDemo', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/input' , {
		controller: 'inputCtrl',
		templateUrl: 'partials/input.html'
	})
	.otherwise({redirectTo: '/input'})
})
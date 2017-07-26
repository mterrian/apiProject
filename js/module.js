var app = angular.module('apiDemo', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/input' , {
		controller: 'inputCtrl',
		templateUrl: 'partials/input.html'
	})
	.when('/output', {
		controller: 'outputCtrl',
		templateUrl: 'partials/output.html'
	})
	.otherwise({redirectTo: '/input'})
})
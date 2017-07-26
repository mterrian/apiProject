var app = angular.module('apiDemo');

app.directive('quoteButtons', function(){
	return{
		replace: false,
		restrict: 'E',
		templateUrl: 'partials/input.html'
	}
})
var app = angular.module('apiDemo');

app.controller('inputCtrl', function($scope, quoteService){

	$scope.getMovieQuote = function(){
		quoteService.getMovieQuote() 

	};

	$scope.getFamousQuote = function(){
		quoteService.getFamousQuote()
	};


		

});
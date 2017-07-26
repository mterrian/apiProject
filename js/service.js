var app = angular.module('apiDemo');

app.service('quoteService', function($http, $route){

		var quote = [];


		return {
			getMovieQuote: getMovieQuote,
			getFamousQuote: getFamousQuote,
			getQuote: getQuote

		}

		function getMovieQuote() {
			$http({
			method: 'GET',
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1',
			headers: {
				"X-Mashape-Key": "udmuECNtasmshZfkTrYejx0L2b0wp1xAaXUjsnLtaG3CHtMNrp",
				"accept": "application/json"
			}
			}).then(function succesfulCallback(response){
			console.log(response.data)
			quote = response.data;
			$route.reload();
			console.log(quote)
			});

		}

		function getFamousQuote() {
			$http({
			method: 'GET',
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
			headers: {
				"X-Mashape-Key": "udmuECNtasmshZfkTrYejx0L2b0wp1xAaXUjsnLtaG3CHtMNrp",
				"accept": "application/json"
			}
		}).then(function succesfulCallback(response){
			console.log(response.data)
		});


		}

		function getQuote(){
			return quote
		}


});
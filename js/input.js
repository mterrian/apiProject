var app = angular.module('apiDemo')

app.controller('inputCtrl', function($scope, $http){

		$http({
			method: 'GET',
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10',
			header: {
				"X-Mashape-Key": "udmuECNtasmshZfkTrYejx0L2b0wp1xAaXUjsnLtaG3CHtMNrp",
				"accept": "application/json"
			}
		}).then(function succesfulCallback(response){
			console.log(response)
		});


});
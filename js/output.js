var app = angular.module('apiDemo');


app.controller('outputCtrl', function($scope, quoteService){
$scope.quote = quoteService.getQuote();


})
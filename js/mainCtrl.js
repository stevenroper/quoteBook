var app = angular.module('quoteBook');

app.controller('MainCtrl', function($scope, dataService) {

	var getQuotes = function() {
		$scope.quotes = dataService.getData();
	};

	getQuotes();
});
var app = angular.module('quoteBook');

app.controller('MainCtrl', function($scope, dataService) {

	var getQuotes = function() {
		$scope.quotes = dataService.getData();
	};

	getQuotes();

	$scope.addQuote = function() {
		dataService.addData($scope.newQuote);
		$scope.newQuote = {};
		$scope.toggleAddFields = false;
		getQuotes();
	};

	$scope.removeQuote = function(index) {
		dataService.removeData(index);
		getQuotes();
	};

	$scope.resetQuoteCookie = function() {
		dataService.resetCookieArray();
		getQuotes();
	}

});
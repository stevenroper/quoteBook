var app = angular.module('quoteBook');

app.controller('MainCtrl', function($scope, dataService) {

	var getQuotes = function() {
		$scope.quotes = dataService.getData();
	}();

	$scope.addQuote = function() {
		dataService.addData($scope.newQuote);
		$scope.newQuote = {};
		$scope.toggleAddFields = false;
	};

	$scope.removeQuote = function(index) {
		dataService.removeData(index);
	};

});
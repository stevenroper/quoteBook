var app = angular.module('quoteBook');

app.controller('MainCtrl', function($scope, dataService) {

	var getQuotes = function() {
		$scope.quotes = dataService.getData();
	}();

	$scope.addQuote = function() {
		dataService.addData($scope.newQuote);
	};

	$scope.removeQuote = function() {

	};

	$scope.filterQuote = function() {

	};

	// $scope.toggleShow = function() {
	// 	if($scope.showAddQuoteFields) {
	// 		$scope.showAddQuoteFields = false;
	// 	} else {
	// 		$scope.showAddQuoteFields = true;
	// 	}
	// }


});
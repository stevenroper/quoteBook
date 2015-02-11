var app = angular.module('quoteBook');

app.controller('MainCtrl', function($scope, dataService) {

	dataService.addData({text: 'Blah', author: 'Me'});

});
var app = angular.module('quoteBook');

app.service('dataService', function($cookies, $cookieStore) {
	var dummyQuotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  this.resetCookieArray = function() {
  	$cookieStore.put('quotesArray', dummyQuotes);
  };

  this.getData = function() {
  	var quotes = $cookieStore.get('quotesArray');
  	return quotes;
  };

  this.addData = function(inputData) {
  	var dataOkay = false;
  	
  	for(var key in inputData) {
  		if(key === 'text' || key === 'author') {
  			dataOkay = true;
  		} else {
  			dataOkay = false;
  		}
  	}

  	if(dataOkay) {
  		var tempCookieArray = $cookieStore.get('quotesArray');
  		tempCookieArray.unshift(inputData);
  		$cookieStore.put('quotesArray', tempCookieArray);
  	} else {
  		console.log('There is an error with the input data.')
  	}
  };

  this.removeData = function(index) {
  	var tempCookieArray = $cookieStore.get('quotesArray');
  	tempCookieArray.splice(index, 1);
  	$cookieStore.put('quotesArray', tempCookieArray)
  };

});
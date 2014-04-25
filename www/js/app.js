
angular.module('giles', ['ngRoute']);

angular.module('giles').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'content'
		})
		.when('/portfolio', {
			templateUrl: 'portfolio.html',
			controller: 'portfolio'
		});
}]);

// API Values
angular.module('giles').value('instagramApiURL', 'https://api.instagram.com/v1/');
angular.module('giles').value('instagramClienId', '39e8f05d556240808c7e98e5926d1f7d');
angular.module('giles').value('instagramUserId', '11782829');


angular.module('giles').controller('content', ['$scope', 'instagramService', function ($scope, instagramService) {

	instagramService.async().then(function (res) {
		$scope.instagrams = res.data;
	});

	$scope.noOpacity = true;

	$scope.fade = function (val) {
		if (val) {
			$scope.noOpacity = false;
		} else {
			$scope.noOpacity = true;
		}
	};

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

}]);
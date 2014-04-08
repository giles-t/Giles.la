
angular.module('giles', []);

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

}]);

angular.module('giles').directive('ngVideo', [function () {

	// poster="img/bg.jpeg"
	var video =
		'<video loop autoplay muted>'+
			'<source src="vid/sunset.mp4" type="video/mp4">'+
		'</video>';

	return {
		restrict: 'A',
		replace: true,
		link: function (scope, el, attrs) {

			var showVideo = false;

			if (window.innerWidth > 1200) {
				showVideo = true;
				el.after(video);
			}

			window.onresize = function (e) {
				if (e.target.innerWidth > 1200 && !showVideo) {
					showVideo = true;
					el.after(video);
				}
			};

		}
	}
}]);

angular.module('giles').factory('instagramService', function ($http, instagramApiURL, instagramClienId, instagramUserId) {
	var service = {
    async: function () {
			var promise = $http({
	      method: 'JSONP',
	      responseType: 'json',
        url: instagramApiURL + 'users/' + instagramUserId + '/media/recent/?callback=JSON_CALLBACK&client_id=' + instagramClienId
      }).then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return service;
});

// API Values
angular.module('giles').value('instagramApiURL', 'https://api.instagram.com/v1/');
angular.module('giles').value('instagramClienId', '39e8f05d556240808c7e98e5926d1f7d');
angular.module('giles').value('instagramUserId', '11782829');

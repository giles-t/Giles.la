
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
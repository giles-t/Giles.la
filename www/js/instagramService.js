
angular.module('giles').factory('instagramService', ['$http', 'instagramApiURL', 'instagramClienId', 'instagramUserId', function ($http, instagramApiURL, instagramClienId, instagramUserId) {
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
}]);

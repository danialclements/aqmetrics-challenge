(function() {
	"use strict";

	var app = angular.module('aqMetricsApp');
	var alertsServiceUrl = 'https://api.myjson.com/bins/23j7c';

	var serviceFactory = function($http) {
		
		function getAlerts() {
			return $http.get(alertsServiceUrl).then(function(res) {
				if (res.status === 200) {
					// The service returns an additional data property
					return res.data.data;
				}
			});
		}

		return {
			getAlerts: getAlerts
		};
	}

	app.factory('alertsService', ['$http', serviceFactory]);
})();
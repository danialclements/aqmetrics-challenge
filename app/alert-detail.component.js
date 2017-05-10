(function() {
	'use strict';

	var app = angular.module('aqMetricsApp');

	app.component('alertDetail', {
		templateUrl: '/app/alert-detail.component.html', 
		controllerAs: 'model',
		bindings: {
			alert: '='
		}
	});
})();
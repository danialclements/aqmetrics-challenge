(function() {
	'use strict';

	var app = angular.module('aqMetricsApp');

	function alertsAppController(alertsService) {
		var model = this;

		// Initialize the selected alert
		model.selectedAlert = null;
		model.alerts = [];

		model.$onInit = function() {
			// Fetch alerts
			alertsService.getAlerts().then(function(alerts) {
				model.alerts = alerts;
			});
		}

		// Handle the onAlertSelected event that occurs on the alert-list
		model.onAlertSelected = function(alert) {
			model.selectedAlert = alert;
		}
	}

	app.component('alertsApp', {
		templateUrl: '/app/alerts-app.component.html',
		controllerAs: 'model',
		controller: ['alertsService', alertsAppController]
	})
})();
(function() {
	"use strict";

	var app = angular.module('aqMetricsApp');

	function controller(alertsService) {
		var model = this;
		model.alerts = [];
		model.selectedAlert = null;

		model.getClassForAlert = function(alert) {
			return alert === model.selectedAlert ? 'active' : '';
		}

		model.onAlertClicked = function(alert) {
			model.selectedAlert = alert;
			model.onAlertSelected({ alert: alert });
		}
	}
	
	app.component('alertList', {
		templateUrl: '/app/alert-list.component.html',
		controllerAs: 'model',
		controller: ['alertsService', controller],
		bindings: {
			onAlertSelected: '&',
			alerts: '='
		}
	})
})();
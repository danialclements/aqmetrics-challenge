describe('An alerts service', () => {
	var alertsService;

	beforeEach(module('aqMetricsApp'));
	beforeEach(inject(function ($httpBackend, _alertsService_) {
		alertsService = _alertsService_;
	}));

	describe('a getAlerts method', () => {
		it('should exist', () => {
			expect(alertsService.getAlerts).toBeDefined();
		});

		it('should return a promise', () => {
			var promise = alertsService.getAlerts();
			expect(typeof promise.then).toBe('function');
		});
	});
});
(function () {
	'use strict';

	overlayApp.controller('overlayCtrl',
	['$http', '$scope', '$rootScope', function ($http, $scope, $rootScope) {

		var overlayData = this;
		this.isGridOpened = false;

		$scope.$on('ngDialog.opened', function (e, $dialog) {
			$http({
				method: 'GET',
				url: $scope.ngDialogData
			}).then(function (response) {
				console.log(response);
			});
		});

	}]);
})();
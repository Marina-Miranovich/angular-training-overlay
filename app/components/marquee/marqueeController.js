(function () {
	'use strict';

	overlayApp.controller('marqueeCtrl',
	['$scope','ngDialog', function ($scope, ngDialog) {
		var feedUrl = 'http://stg2.releng.foxsports.com/api/v2/content?userexp=relevantRelated&source=%22http://www.foxsports.com/mlb/lists/new-york-mets-top-ten-players-in-2015-rankings-by-wins-above-replacement-102715%22&tags=baseball-mlb-league-1&p=url:*/lists/*,url:*/photos/*,*/galley/*&op=OR';

		$scope.openOverlay = function () {
			ngDialog.open({
				template: 'app/components/overlay/overlay.tpl.html',
				controller: 'overlayCtrl',
				controllerAs: 'overlayData',
				data: feedUrl,
				trapFocus: false
			});
		};

	}]);
})()
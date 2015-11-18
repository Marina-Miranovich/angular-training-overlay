(function () {
	'use strict';

	overlayApp.controller('overlayCtrl',
	['$http', '$scope', function ($http, $scope) {

		var overlayData = this;
		this.isGridOpened = false;
		this.items= [{
				title: 'Title 1',
				description: 'Slide description 1',
				image: 'http://a.fssta.com/content/dam/fsdigital/fscom/mlb/images/2015/10/28/102815-mlb-mets-7-pi-mp.jpg'
			}, {
				title: 'Title 2',
				description: 'Slide description 2',
				image: 'http://a.fssta.com/content/dam/fsdigital/fscom/mlb/images/2015/10/28/102815-mlb-mets-7-pi-mp.jpg'
			}
		];

		// this.items = Array.apply(null, Array(10)).map(function () {
		// 	return {
		// 		title: 'Some title',
		// 		description: 'Slide description',
		// 		image: 'http://a.fssta.com/content/dam/fsdigital/fscom/mlb/images/2015/10/28/102815-mlb-mets-7-pi-mp.jpg'
		// 	};
		// });

	}]);
})();
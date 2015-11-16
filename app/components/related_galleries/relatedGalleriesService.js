(function() {
	'use strict';
	angular.module('overlayApp').factory('RelatedGalleries', ['$http', function ($http) {
		function get () {
			return $http({
				method: 'GET',
				url: 'http://stg2.releng.foxsports.com/api/v2/content?userexp=relevantRelated&source=%22http://www.foxsports.com/mlb/lists/new-york-mets-top-ten-players-in-2015-rankings-by-wins-above-replacement-102715%22&tags=baseball-mlb-league-1&p=url:*/lists/*,url:*/photos/*,*/galley/*&op=OR'
			});
		}
		return {
			get: get
		};
	}]);
})();
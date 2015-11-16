(function  () {
	'use strict';
	angular.module('overlayApp').controller('relatedGalleriesController',
	['RelatedGalleries', function(RelatedGalleries) {
		var relatedGalleries = this;
		relatedGalleries.tag = '';

		RelatedGalleries.get().then(function (result) {
			var tags = result.data.response.info.tags_display;

			relatedGalleries.items = result.data.response.docs;
			for (var key in tags) {
				relatedGalleries.tag += tags[key].display;
			}
		});
	}]);
})();
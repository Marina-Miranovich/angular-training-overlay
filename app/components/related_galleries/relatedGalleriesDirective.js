(function() {
	'use strict';
	angular.module('overlayApp').directive('relatedGalleries', function () {
		return {
			restrict: 'E',
			controller: 'relatedGalleriesController',
			controllerAs: 'relatedGalleries',
			templateUrl: 'app/components/related_galleries/relatedGalleries.tpl.html',
			replace: true,
			link: function () {} 
		};
	});
})();
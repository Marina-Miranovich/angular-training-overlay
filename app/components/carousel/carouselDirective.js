(function () {
	'use strict';

	angular.module('overlayApp').directive('owlCarousel', function () {
		return {
			restrict: 'A',
			controller: 'carouselController',
			controllerAs: 'carousel',
			link: function (scope, elem, attr) {
				var isHero = typeof attr.owlHero !== 'undefined';

				scope.carousel.init(elem, isHero);
			}
		};
	})
})();
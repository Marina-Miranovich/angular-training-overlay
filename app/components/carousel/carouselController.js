(function () {
	'use strict';

	angular.module('overlayApp').controller('carouselController',
	['$rootScope', 'SyncCarousels', function ($rootScope, SyncCarousels) {
		var carousel = this;
		var isGridOpened = false;

		this.currentItem = SyncCarousels.getCurrentItem();
		this.isGridOpened = false;

		this.init = function (elem, isHero) {
			SyncCarousels.initCarousel({
				elem: elem,
				isHero: isHero,
				onCurrentUpdated: updateCurrent,
			});
		};

		//This is for grid view
		this.goToSlide = function (number) {
			SyncCarousels.updateCurrentItem(number);
			this.toggleGrid();
		};

		this.toggleGrid = function () {
			isGridOpened = !isGridOpened;
			$rootScope.$emit('ngDialog.toggleGrid', isGridOpened);
		};

		function updateCurrent (newCurrent) {
			carousel.currentItem = newCurrent;
		}

	}]);
})();
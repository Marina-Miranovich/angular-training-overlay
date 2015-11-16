(function () {
	'use strict';

	angular.module('overlayApp').factory('SyncCarousels', ['$rootScope', function ($rootScope) {
		var navConfig = [
			'<span>&lt;</span>prev',
			'next<span>&gt;</span>'
		];
		var carousels = [];
		var current = 0;
		var dismissCallback = false;

		function initCarousel (opt) {
			setTimeout( function () {
				$(opt.elem).owlCarousel({
					singleItem: true,
					navigation: opt.isHero,
					pagination: false,
					responsiveRefreshRate: 200,
					slideSpeed: 1000,
					mouseDrag: opt.isHero,
					touchDrag: opt.isHero,
					navigationText: opt.isHero ? navConfig : '',
					afterAction: opt.isHero ? setCurrentCallback : function () {}
				});
				carousels.push({
					elem: opt.elem,
					callback: opt.onCurrentUpdated
				});
			}, 0);
		}

		function getCurrent () {
			return current;
		}

		function setCurrentCallback (owlElem) {
			if (dismissCallback) {
				dismissCallback = false;
				return;
			}

			var current = owlElem.data().owlCarousel ? owlElem.data().owlCarousel.currentItem : 0;
			setCurrent(current);
			$rootScope.$apply();
		}

		function setCurrent (number, action) {
			var action = action ? action : 'owl.goTo';
			current = number;

			carousels.forEach(function (carousel) {
				carousel.elem.trigger(action, number);
				if (typeof carousel.callback === 'function') {
					carousel.callback(number);
				}
			});
		}

		function updateCurrentItem (number) {
			//when updated the number we don't need fire callback, otherwise we fire setCurrent twice.
			dismissCallback = true;
			setCurrent(number, 'owl.jumpTo');
		}

		return {
			/* 
			 * Inits Owl Carousle jQuery plugin.
			 * Params: 
			 *   opt: Object 
			 *     elem: is a container for carousel; jQuery Object
			 *     isHero: indicates if carousel is a hero carousel; boolean
			 *       Hero carousel has a nav, touch and drag events and lazy loads images
			 *     onCurrentUpdated: is a callback in case current item number changed; function
			 */
			initCarousel: initCarousel,
			/* 
			 * Returns current item number
			 */
			getCurrentItem: getCurrent,
			/*
			 * Updates current item number in all synced carousels
			 * P
			 */
			updateCurrentItem: updateCurrentItem
		};

	}]);
})();
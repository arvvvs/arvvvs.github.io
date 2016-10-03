/// <reference path="_all.ts" />


module personalWebsite{
	angular
		.module('personalWebsite', ['ngMaterial', 'ngAnimate'])
		.controller('mainController', MainController)
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
			console.log('its false');
		}]);
}	




/// <reference path="_all.ts" />


module personalWebsite{
	angular
		.module('personalWebsite', ['ngMaterial', 'ngAnimate'])
		.controller('mainController', MainController)
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(true);
			console.log('its true');
		}]);
}	




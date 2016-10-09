/// <reference path="_all.ts" />


module personalWebsite{
	angular
		.module('personalWebsite', ['ngAnimate'])
		.controller('mainController', MainController)
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(true);
		}]);
}	




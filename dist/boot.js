/// <reference path="_all.ts" />
var personalWebsite;
(function (personalWebsite) {
    angular
        .module('personalWebsite', ['ngMaterial', 'ngAnimate'])
        .controller('mainController', personalWebsite.MainController)
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
            console.log('its false');
        }]);
})(personalWebsite || (personalWebsite = {}));
//# sourceMappingURL=boot.js.map
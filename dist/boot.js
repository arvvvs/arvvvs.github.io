/// <reference path="_all.ts" />
var personalWebsite;
(function (personalWebsite) {
    angular
        .module('personalWebsite', ['ngMaterial', 'ngAnimate'])
        .controller('mainController', personalWebsite.MainController)
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(true);
            console.log('its true');
        }]);
})(personalWebsite || (personalWebsite = {}));
//# sourceMappingURL=boot.js.map
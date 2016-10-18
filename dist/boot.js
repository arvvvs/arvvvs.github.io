/// <reference path="_all.ts" />
var personalWebsite;
(function (personalWebsite) {
    angular
        .module('personalWebsite', ['ngAnimate'])
        .controller('mainController', personalWebsite.MainController)
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);
})(personalWebsite || (personalWebsite = {}));
//# sourceMappingURL=boot.js.map
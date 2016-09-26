/// <reference path="_all.ts" />
var personalWebsite;
(function (personalWebsite) {
    angular
        .module('personalWebsite', ['ngMaterial', 'ngAnimate'])
        .controller('mainController', personalWebsite.MainController);
})(personalWebsite || (personalWebsite = {}));
//# sourceMappingURL=boot.js.map
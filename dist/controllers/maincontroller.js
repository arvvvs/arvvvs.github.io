/// <reference path="../_all.ts" />
var personalWebsite;
(function (personalWebsite) {
    var MainController = (function () {
        function MainController() {
            this.front = true;
        }
        MainController.$inject = [];
        return MainController;
    }());
    personalWebsite.MainController = MainController;
    $(function () {
        $(".element").typed({
            strings: ["Hello," + "<br/>" + "^500I\'m Akshay"],
            typeSpeed: 45,
        });
    });
})(personalWebsite || (personalWebsite = {}));
//# sourceMappingURL=maincontroller.js.map
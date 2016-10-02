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
    console.log("Hello there! If you're looking at this it means that you're looking at my websites code.  I built this website using Angular, Angular Material, TypeScript, SASS and a few other tools.  I'm always making improvements to it as I learn new things, so it's never really finished. \nI'm currently looking for a full time developer position so if you have any openings please let me know! My email is averma2@binghamton.edu");
})(personalWebsite || (personalWebsite = {}));
//# sourceMappingURL=maincontroller.js.map
/// <reference path="../_all.ts" />
var personalWebsite;
(function (personalWebsite) {
    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
            this.front = true;
            var that = this;
            angular.element(document).bind('mousewheel', function (e) {
                if (e.originalEvent.wheelDelta < 0) {
                    that.front = false;
                    $scope.$apply();
                }
            });
            angular.element(document).keydown(function (e) {
                if (e.which === 40) {
                    that.front = false;
                    $scope.$apply();
                }
                else if (e.which === 38) {
                    that.front = true;
                    $scope.$apply();
                }
            });
        }
        MainController.$inject = ['$scope'];
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
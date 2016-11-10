/// <reference path="jquery.d.ts" />
var fbParallax;
(function (fbParallax) {
    var Parallax = (function () {
        function Parallax(elementList) {
            this.element = elementList.classNames;
            this.parentElement = elementList.parentName;
        }
        Parallax.prototype.runParallaxElement = function () {
            for (var item in this.element) {
                if (this.isScrolledIntoView(this.element[item], this.parentElement)) {
                    $('.' + this.element[item]).addClass('active');
                }
                else {
                    $('.' + this.element[item]).removeClass('active');
                }
            }
        };
        Parallax.prototype.isScrolledIntoView = function (elem, parentElem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $('.' + elem).closest('.' + parentElem).offset().top;
            var elemBottom = elemTop + $('.' + elem).closest('.' + parentElem).height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };
        return Parallax;
    }());
    fbParallax.Parallax = Parallax;
})(fbParallax || (fbParallax = {}));
var parallax2000 = {
    "classNames": ["demoOne", "demoTwo", "demoThree", "demoFour"],
    "parentName": "item-container"
};
var loadParallax = new fbParallax.Parallax(parallax2000);
$(document).ready(function () {
    loadParallax.runParallaxElement();
    $(window).scroll(function () {
        loadParallax.runParallaxElement();
    });
});
//# sourceMappingURL=app.js.map
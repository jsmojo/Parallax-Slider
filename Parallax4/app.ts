/// <reference path="jquery.d.ts" />

namespace fbParallax {

    export class Parallax {
        element: Array<string>;
        parentElement: string;

        constructor(elementList?: any) {
            this.element = elementList.classNames;
            this.parentElement = elementList.parentName;
        }
        runParallaxElement() {
            for (var item in this.element) {

                if (this.isScrolledIntoView(this.element[item], this.parentElement)) {
                    $('.' + this.element[item]).addClass('active');
                }
                else {
                    $('.' + this.element[item]).removeClass('active');
                }
            }
        }
        isScrolledIntoView(elem: string, parentElem: string): boolean {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $('.' + elem).closest('.' + parentElem).offset().top;
            var elemBottom = elemTop + $('.' + elem).closest('.' + parentElem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
    } 
}

var parallax2000 = {
    "classNames": ["demoOne", "demoTwo", "demoThree", "demoFour"],
    "parentName": "item-container"
}

var loadParallax = new fbParallax.Parallax(parallax2000);

$(document).ready(function () {
    loadParallax.runParallaxElement();

    $(window).scroll(() => {
        loadParallax.runParallaxElement();
    });
});
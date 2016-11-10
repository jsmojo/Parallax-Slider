///// <reference path="jquery.d.ts" />
//class Parallax {
//    element: string;
//    constructor(elementName) {
//        this.element = elementName;
//    }
//    runParallaxElement() {
//        $('.' + this.element).addClass('active');
//    }
//    reverseParallaxElement() {
//        $('.'+this.element).removeClass('active');        
//    }
//}
//class IsScrolledIntoView {
//    element: string;
//    constructor(elementName) {
//        this.element = elementName;
//    }
//    isInView() {
//    }
//}
//let slideOne = new Parallax("demoOne");
//let slideTwo = new Parallax("demoTwo");
//let slideThree = new Parallax("demoThree");
//let slideFour = new Parallax("demoFour");
//let /*elementList*/ = [slideOne, slideTwo, slideThree, slideFour];
//function isScrolledIntoView(elem) {
//    var docViewTop = $(window).scrollTop();
//    var docViewBottom = docViewTop + $(window).height();
//    var elemTop = $('.' + elem).closest('.item-container').offset().top;
//    var elemBottom = elemTop + $('.' + elem).closest('.item-container').height();
//    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//}
//function runAds() {
//    for (var item in elementList) {
//        if (isScrolledIntoView(elementList[item].element)) {
//            elementList[item].runParallaxElement();
//        }
//        else {
//            elementList[item].reverseParallaxElement();
//        }
//    }
//}
//$(window).scroll( () => {
//    runAds();
//});
//setTimeout(function () {
//    runAds();
//}, 0);
//# sourceMappingURL=app2.js.map
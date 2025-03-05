// function MobileDetect() {
//     var UA = navigator.userAgent.toLowerCase();
//     return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA)) ? true : false;
// }
// jQuery(document).ready(function ($) {
//     // Если браузер не мобильный, работаем
//     if (!MobileDetect()) {
//         var

//             $window = $(window), // Основное окно

//             $target = $("#fixed-menu-nav"), // Блок, который нужно фиксировать при прокрутке

//             $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

//         $window.on('scroll', function () {

//             // Как далеко вниз прокрутили страницу
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//             // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
//             if (scrollTop > $h) {

//                 $target.addClass("sheensay_fixed");

//                 // Иначе возвращаем всё назад
//             } else {

//             }
//         });
//     }
// });

$(window).scroll(function () {
  function getBodyScrollTop() {
  }



  if (-[1,]) {
    if (document.body.offsetHeight > window.innerHeight) {
      getBodyScrollTop()
    } else {
      getBodyScrollTop()
    }

  } else {
    if (document.body.offsetHeight > document.documentElement.clientHeight) {
      getBodyScrollTop()
    }
    else {
      getBodyScrollTop()

    }
  }

});



// function getBodyScrollLeft()
// {
// return self.pageXOffset || (document.documentElement && document.documentElement.scrollLeft) || (document.body && document.body.scrollLeft);
// }

/*window.addEventListener('scroll', function (e) {
  const
    documentScrollHeight = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    oldScroll = this.oldScroll || 0,
    newScroll = this.scrollY,
    // isScrollDown = newScroll > oldScroll,
    isScrollUp = oldScroll > newScroll;
  if (documentScrollHeight > 160)
    document.querySelector('.nav-bx').classList.toggle('scroll-down', isScrollUp);
    this.oldScroll = newScroll;
});*/
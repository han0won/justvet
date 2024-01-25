$(document).ready(function() {
    var $header = $('header'); // 헤더를 변수에 넣기
    var $page = $('.page-start'); // 색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top; // 색상 변할 부분의 top값 구하기
  
    $window.resize(function() {
      pageOffsetTop = $page.offset().top;
    });
  
    $window.on('scroll', function() {
      var scrolled = $window.scrollTop() >= pageOffsetTop;
      $header.toggleClass('down', scrolled);
    });
});

var swiper = new Swiper(".vis-Swiper", {
    autoplay : true, 
    loop:true,
    delay: 2000
});
  
var swiper = new Swiper(".int-Swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
                                  
  breakpoints: {
    654: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
  },
});
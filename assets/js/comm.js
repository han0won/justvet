$(document).ready(function() {
    var $header = $('header'); 
    var $page = $('.page-start'); // 색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top; // 색상 변할 부분의 top값
  
    $window.resize(function() {
      pageOffsetTop = $page.offset().top;
    });
  
    $window.on('scroll', function() {
      var scrolled = $window.scrollTop() >= pageOffsetTop;
      $header.toggleClass('down', scrolled);
    });

    $(".gnb-menu").click(function(){
      $(".gnb-menu").toggleClass("gnb-open");
      $(".gnb-menu > i").toggleClass("fa-xmark");
      if($(".gnb-menu").hasClass("gnb-open")) {
        $("#gnb").animate({left: '0'}, 300);
      } else {
        $("#gnb").animate({left: '-100%'}, 300);
      }
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

var swiper = new Swiper(".food-swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      1024: {
          centeredSlides: false,
      },
  },
});
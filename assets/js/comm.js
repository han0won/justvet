document.addEventListener('DOMContentLoaded', function() {
  // 스크롤 다운할때 헤더 색상 변경
  const Header = document.querySelector('#header');
  const page = document.querySelector('.page-start');
  
  window.addEventListener('scroll', function() {
    const pageOffsetTop = page.offsetTop
    const scrolled = window.scrollY >= pageOffsetTop;

    Header.classList.toggle('down', scrolled);
  })

  // gnb 아이콘 클릭시 카테고리 펼쳐짐
  const gnbMenu = document.querySelector('.gnb-menu')
  const gnbMenuIcon = document.querySelector('.gnb-menu > i')
  
  gnbMenu.addEventListener('click', function() {
    gnbMenu.classList.toggle('gnb-open');
    gnbMenuIcon.classList.toggle('fa-xmark');

    if (gnbMenu.classList.contains('gnb-open')) {
      document.getElementById('gnb').style.right = '0';
    } else {
      document.getElementById('gnb').style.right = '-100%';
    }
  })
})

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
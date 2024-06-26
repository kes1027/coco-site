$(function () {
  // s: cursor events
  const $window = $(window);
  const $cursor = $('.custom-cursor');

  // 슬라이더
  // s: video slider
  const projectSlider = new Swiper('.project-slider', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 100,
    loopedSlides: 3,
    centeredSlides: true,

    // autoplay: {
    //   delay: 10000 /* 10초 기다렸다가 실행 */,
    // },

    speed: 1000, //슬라이드 되는 속도 : 기본값 300ms (0.3초)
    effect: 'slide', // 기본값(slide), fade, cube, coverflow, flip, card 등

    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });

  // s: character slider
  const characterSlider = new Swiper('.character-slider', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 125,

    // autoplay:
    //   delay: 10000 /* 10초 기다렸다가 실행 */,
    // },
    speed: 1000, //슬라이드 되는 속도 : 기본값 300ms (0.3초)
    effect: 'slide', // 기본값(slide), fade, cube, coverflow, flip, card 등

    // Navigation arrows
    navigation: {
      nextEl: '.btn-next2',
      prevEl: '.btn-prev2',
    },
  });
}); // end: jQuery

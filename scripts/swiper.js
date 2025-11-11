    document.addEventListener('DOMContentLoaded', () => {
      const mainSwiper = new Swiper('.main-swiper', {
        speed: 400,
        spaceBetween: 100,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
      });
    });

    const moreSwiper = new Swiper('.more-swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      // navigation: {
      //   nextEl: '.more-next',
      //   prevEl: '.more-prev',
      // }
    })
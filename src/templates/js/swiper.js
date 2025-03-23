import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    noSwipingClass: 'slide-container',
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
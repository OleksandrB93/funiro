export const autoplay = {
  delay: 2000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

export const navigation = {
  nextEl: ".swiper-next",
  prevEl: ".swiper-prev",
};

export const navigationExplains = {
  nextEl: ".swiper-next",
};


export const pagination = {
  el: ".swiper-pagination2",
  bulletClass: `swiper-pagination-bullet`,
  bulletActiveClass: "swiper-pagination-bullet-active",
  clickable: true,
};

export const heroSliderBreackpoints = {
  390: {
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 1,
  },
  1440: {
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,
    initialSlide: 1,
  },
};

export const explainsSliderBreackpoints = {
  390: {
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 0,
  },
  1440: {
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 2.4,
    spaceBetween: 80,
    initialSlide: 0,
  },
};

export const tipsSliderBreackpoints = {
  390: {
    // centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 1,
  },
  1440: {
    // centeredSlides: true,
    grabCursor: true,
    sliderPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 1,
  },
};

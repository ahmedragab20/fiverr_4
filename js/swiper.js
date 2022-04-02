let screenSize = document.body.offsetWidth;
let slides;
if (screenSize >= 1920) {
  slides = 7;
} else if (screenSize >= 1025) {
  slides = 5;
} else if (screenSize >= 900) {
  slides = 4;
} else if (screenSize >= 768) {
  slides = 3;
} else if (screenSize >= 480) {
  slides = 2;
} else {
  slides = 1.2;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: slides,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  autoplay: {
    delay: 500,
    disableOnInteraction: false
  },
  speed: 4000,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 5,
    }
  },

});

//Mobile menu

let mobileMenu = document.getElementById("js-mobile-menu");
let mobileToggle = document.getElementById("js-mobile-toggle");
mobileToggle.addEventListener("click", function() {
  mobileMenu.classList.toggle("active");
  // mobileMenu.classList.toggle("overflow-hidden");
});
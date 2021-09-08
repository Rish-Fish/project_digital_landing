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

let mobileMenu = document.getElementById("js-mobile-menu"); //<ul>
let mobilMenuStop = document.getElementById("js-mobile-menu-stop"); //<html>
let mobileToggle = document.getElementById("js-mobile-toggle"); //бургер -> close
let mobileLinkClose = document.querySelectorAll(".mobile-menu__item");

// открытие mobile menu по клику на бургер
mobileToggle.addEventListener("click", function() {
  mobileMenu.classList.toggle("active"), // state in base.css
  mobilMenuStop.classList.toggle("overflow-hidden"), // state in base.css
  mobileToggle.classList.toggle("mobile-toggle-close")
});
 
// закрытие по клику на ссылки
mobileLinkClose.forEach(function (mobileLinkClose) {
  mobileLinkClose.addEventListener('click', function() {
    mobileMenu.classList.remove("active"), // state in base.css
    mobilMenuStop.classList.remove("overflow-hidden"), // state in base.css
    mobileToggle.classList.remove("mobile-toggle-close")
  })
});
  
// cкрытие меню по клику на Esc
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    mobileMenu.classList.remove("active"), // state in base.css
    mobilMenuStop.classList.remove("overflow-hidden"), // state in base.css
    mobileToggle.classList.remove("mobile-toggle-close")
  }
  });
// @@@@@@@@@@@@@@@@ show & remove navmenu @@@@@@@@@@@@@@@@@

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@@@@ remove menu by click on navlinks @@@@@@@@@@@@@

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// .scroll-header

// @@@@@@@@@@@@@@@@ add boxshadow to header  @@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@@@ swiperjs.com  @@@@@@@@@@@@@@@@@

const swiper = new Swiper('.swiper', {
  spaceBetween: 25,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  breakpoints: {
    992: {
      spaceBetween: 80,
    },
  },
});

// @@@@@@@@@@@@@@@@ show scroll up  @@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 300) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

// @@@@@@@@@@@@@@@@ scrollrevealjs.org  @@@@@@@@@@@@@@@@@

const sr = ScrollReveal({
  origin: 'top',
  distance: '70px',
  duration: 2500,
  delay: 500,
});

sr.reveal(`.home__container , .swiper`);
sr.reveal(`.giving__content , .gift__card , .footer__content`, {
  interval: 100,
});
sr.reveal(`.celebrate__data , .message__form , .footer__img-left`, {
  origin: 'left',
});
sr.reveal(`.celebrate__img , .message__img , .footer__img-right`, {
  origin: 'right',
});

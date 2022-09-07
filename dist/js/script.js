// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  window.pageYOffset > fixedNav ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Create Dots
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');
let curSlide = 0;
const maxSlide = slides.length;

function createDots() {
  slides.forEach((_, e) => {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${e}"></button>`);
    console.log(e);
  });
}
createDots();

// ? Mengaktifkan dots pada gambar awal
const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};

activateDot(0);

// ? Menggeser slide
function goToSlide(slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
}
goToSlide(0);

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;

    slides.forEach((el) => el.classList.add('hidden'));
    slides[slide].classList.remove('hidden');
    goToSlide(slide);
    activateDot(slide);
  }
});

// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const backTop = document.querySelector('#btn-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    backTop.classList.add('flex');
    backTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    backTop.classList.remove('flex');
    backTop.classList.add('hidden');
  }
};

// Selector Dark toogle
const darkToggle = document.querySelector('#mode-dark');
const html = document.querySelector('html');
// Selector Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu && e.target != darkToggle) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode toggle

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindah posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Create Dots
const dotsItem = function () {
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
};

dotsItem();

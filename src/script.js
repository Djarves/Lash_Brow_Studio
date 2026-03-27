// Бургер меню
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const body = document.body;


// Открытие / закрытие меню
const toggleMenu = () => {
  burger.classList.toggle('active'); // крестик
  nav.classList.toggle('active');    // меню
  overlay.classList.toggle('active'); // затемнение
  body.classList.toggle('lock');     // блокировка скролла
};

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Плавный скролл по якорям + меню не закрывается крестиком
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
 
  });
});


// Плавный скролл + закрытие меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });

      // 🔥 закрываем меню
      nav.classList.remove('active');
      burger.classList.remove('active');
      document.body.classList.remove('lock');
    }
  });
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('lock');
});

document.addEventListener('click', (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickBurger = burger.contains(e.target);

  if (!isClickInsideNav && !isClickBurger) {
    nav.classList.remove('active');
    burger.classList.remove('active');
    document.body.classList.remove('lock');
  }
});

const video = document.querySelector('.hero__video');
video.playbackRate = 0.4;



burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('lock');
  overlay.classList.toggle('active'); // 🔥
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  burger.classList.remove('active');
  document.body.classList.remove('lock');
  overlay.classList.remove('active');
});

const video = document.querySelector('.hero__video');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  video.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`;
});

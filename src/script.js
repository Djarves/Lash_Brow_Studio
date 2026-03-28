const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

// открытие/закрытие меню по бургеру
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('lock');
});

// удаляем закрытие по клику на overlay
overlay.addEventListener('click', () => {
  burger.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('lock');
});

// плавный скролл по ссылкам
document.querySelectorAll('.header__nav').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    // закрытие меню после клика по ссылке
    burger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('lock');

    // скролл с offset
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

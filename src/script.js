// Бургер меню
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Закрываем бургер на мобильных
      nav.classList.remove('active');
    }
  });
});

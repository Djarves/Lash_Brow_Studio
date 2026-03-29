const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const body = document.body;
const images = document.querySelectorAll('.gallery__img');
const popup = document.getElementById('popup');
const popupImg = document.querySelector('.popup__img');
const popupClose = document.querySelector('.popup__close');
const arrowLeft = document.querySelector('.popup__arrow--left');
const arrowRight = document.querySelector('.popup__arrow--right');

let currentIndex = 0;

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

// открыть
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();

    popup.classList.add('active');
    document.body.classList.add('lock'); // 🔥 блок скролла
  });
});

// показать картинку
function showImage() {
  popupImg.src = images[currentIndex].src;
}

// закрыть
function closePopup() {
  popup.classList.remove('active');
  document.body.classList.remove('lock'); // 🔥 вернуть скролл
}

popupClose.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// стрелки
arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});


let startX = 0;

popup.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

popup.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    // свайп влево
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  if (endX - startX > 50) {
    // свайп вправо
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
});




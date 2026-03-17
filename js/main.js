// Ждем, пока весь HTML загрузится
document.addEventListener('DOMContentLoaded', () => {
  
  const swiper = new Swiper('.mySwiper', {
    // Настройки
    slidesPerView: 1,      // 1 слайд на мобильном
    spaceBetween: 20,     // Расстояние между карточками
    centeredSlides: true, // Активный слайд по центру
    loop: true,           // Бесконечная прокрутка
    
    // Точки внизу
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Адаптив под разные экраны
    breakpoints: {
      // Если экран шире 768px (планшеты и ПК)
      768: {
        slidesPerView: "auto", // Слайды будут такой ширины, как в CSS
        spaceBetween: 30,
      }
    }
  });

});
// Слайдер проектов (Case Studies)
const projectsSwiper = new Swiper(".projects-slider", {
  loop: true,
  pagination: {
    el: ".projects-slider .swiper-pagination",
    clickable: true,
  },
});

// Слайдер отзывов (Testimonials)
const feedbackSwiper = new Swiper(".feedback-slider", {
  loop: true,
  pagination: {
    el: ".feedback-slider .swiper-pagination",
    clickable: true,
    // Чтобы точки не имели лишних отступов и слушались твоих flex-контейнеров
    bulletClass: "swiper-pagination-bullet !m-0", 
  },
  navigation: {
    nextEl: ".feedback-slider .swiper-button-next-custom",
    prevEl: ".feedback-slider .swiper-button-prev-custom",
  },
});
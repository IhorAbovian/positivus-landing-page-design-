let projectsSwiper;
const projectsSliderMedia = window.matchMedia("(max-width: 767px)");

const toggleProjectsSwiper = () => {
  if (projectsSliderMedia.matches) {
    if (!projectsSwiper) {
      projectsSwiper = new Swiper(".projects-slider", {
        loop: true,
        pagination: {
          el: ".projects-slider .swiper-pagination",
          clickable: true,
        },
      });
    }
    return;
  }

  if (projectsSwiper) {
    projectsSwiper.destroy(true, true);
    projectsSwiper = undefined;
  }
};

toggleProjectsSwiper();
projectsSliderMedia.addEventListener("change", toggleProjectsSwiper);

const feedbackSwiper = new Swiper(".feedback-slider", {
  loop: true,
  pagination: {
    el: ".feedback-slider .swiper-pagination",
    clickable: true,

    bulletClass: "swiper-pagination-bullet !m-0",
  },
  navigation: {
    nextEl: ".feedback-slider .swiper-button-next-custom",
    prevEl: ".feedback-slider .swiper-button-prev-custom",
  },
});

const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  } else {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  }
});

new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
});
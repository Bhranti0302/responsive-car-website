/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__toggle"),
  navClose = document.querySelector(".nav__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.querySelector(".nav__menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER SLIDER ===============*/

const swiperHome = new Swiper(".home__swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return (
        '<span class="' +
        className +
        '">' +
        String(index + 1).padStart(2, "0") +
        "</span>"
      );
    },
  },
});

// This is swiper slide - just download swiper-bundle.min.css/js and go to https://swiperjs.com/get-started

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");

  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");

      const sectionsClass = document.querySelector(
        `.nav__menu a[href*="${sectionId}"]`
      );

      if (!sectionsClass) {
        return;
      }

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  };

  window.addEventListener("scroll", scrollActive);
  scrollActive();
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".home__bg", { scale: 1.1, opacity: 1 });
sr.reveal(".home__swiper", { origin: "right", distance: "300px", delay: 800 });
sr.reveal(".home__data", { origin: "bottom", distance: "120px", delay: 1600 });
sr.reveal(".swiper-pagination-bullet", {
  origin: "top",
  delay: 1800,
  opacity: 0,
});
sr.reveal(".home__button", {
  origin: "top",
  delay: 2200,
});
sr.reveal(".about__data", { origin: "left" });
sr.reveal(".about__video", { origin: "right" });
sr.reveal(".models__card", { interval: 100 });
sr.reveal(".info__img", { distance: "120px" });
sr.reveal(".info__number", {
  origin: "bottom",
  distance: "80px",
  delay: 800,
});
sr.reveal(".info__group", { interval: 100, delay: 1300 });
sr.reveal(".footer__container", { interval: 100 });

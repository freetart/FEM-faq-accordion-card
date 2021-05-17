"use strict";

// accordion
const accordion = () => {
  const faqLink = document.querySelectorAll(".faq__link");

  faqLink.forEach((link) => {
    link.addEventListener("click", () => {
      link.parentElement.classList.toggle("active");
    });
  });
};
accordion();

// preloader
const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();

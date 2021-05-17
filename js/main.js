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

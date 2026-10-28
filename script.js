const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation" : "Close navigation",
  );
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) {
    return;
  }

  formStatus.textContent =
    "Thanks for sharing the details. This demo isn't connected to a service inbox, so your request hasn't been sent.";
  contactForm.reset();
});

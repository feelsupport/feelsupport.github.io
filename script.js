document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-menu-container");
  const hamburgerIcon = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-btn");
  const navLinks = document.querySelectorAll(".nav-link");
  let openDropdown = null;

  //    HAMBURGER TOGGLE
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
  });

  //    DROPDOWN TOGGLE (CLICK ONLY MOBILE)
  navLinks.forEach((link) => {
    const trigger = link.querySelector("a");
    const dropdown = link.querySelector(".dropdown");

    if (!dropdown) return;

    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");

    trigger.addEventListener("click", (e) => {
      // only toggle on mobile
      if (window.innerWidth <= 900) {
        e.preventDefault();

        if (openDropdown && openDropdown !== dropdown) {
          closeDropdown(openDropdown);
        }

        if (dropdown.classList.contains("show")) {
          closeDropdown(dropdown);
          openDropdown = null;
        } else {
          openDropdown = dropdown;
          openDropdown.classList.add("show");
          trigger.setAttribute("aria-expanded", "true");
        }
      }
    });
  });

  function closeDropdown(dropdown) {
    dropdown.classList.remove("show");
    const parentLink = dropdown.closest(".nav-link").querySelector("a");
    parentLink.setAttribute("aria-expanded", "false");
  }

  //    CLOSE ON OUTSIDE CLICK
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-link") &&
      !e.target.closest(".hamburger-menu-container")
    ) {
      document
        .querySelectorAll(".dropdown.show")
        .forEach((d) => closeDropdown(d));
      openDropdown = null;
    }
  });

  //    AUTO-CLOSE ON SCROLL
  window.addEventListener("scroll", () => {
    document
      .querySelectorAll(".dropdown.show")
      .forEach((d) => closeDropdown(d));
    navMenu.classList.remove("active");
    hamburgerIcon.classList.remove("active");
    openDropdown = null;
  });

  //    KEYBOARD ACCESSIBILITY
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".dropdown.show")
        .forEach((d) => closeDropdown(d));
      navMenu.classList.remove("active");
      hamburgerIcon.classList.remove("active");
      openDropdown = null;
    }

    if (e.key === "Enter" && document.activeElement.closest(".nav-link")) {
      document.activeElement.click();
    }
  });
});

// BANNER CAROUSEL SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const images = [
    "images/cahrity.jpg ",
    "images/support4.jpg",
    "images/unite.jpg",
    "images/charity.jpg",
  ];

  let current = 0;

  // create background divs
  images.forEach((img, index) => {
    const div = document.createElement("div");
    div.classList.add("banner-bg");
    if (index === 0) div.classList.add("active");
    div.style.backgroundImage = `url('${img}')`;
    banner.prepend(div);
  });

  const backgrounds = document.querySelectorAll(".banner-bg");

  setInterval(() => {
    backgrounds[current].classList.remove("active");
    current = (current + 1) % backgrounds.length;
    backgrounds[current].classList.add("active");
  }, 4000);
});

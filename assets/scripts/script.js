window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  const navLinks = navbar.querySelectorAll(".nav-link");

  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-white", "shadow-sm");

    navLinks.forEach((link) => {
      link.classList.remove("text-warning");
      link.classList.add("text-dark");
    });
  } else {
    navbar.classList.remove("bg-white", "shadow-sm");
    navbar.classList.add("bg-transparent");

    navLinks.forEach((link) => {
      link.classList.remove("text-dark");
      link.classList.add("text-warning");
    });
  }
});

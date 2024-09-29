const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active"); // Ajoute/enlève la classe active pour afficher/cacher le menu
});

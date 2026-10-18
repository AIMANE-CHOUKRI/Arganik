const menu = document.querySelector(".button-menu");
const nav = document.querySelector(".burger-menu");

menu.addEventListener("click", () => {
  const isOpen = nav.hidden;

  nav.hidden = !isOpen;

  menu.textContent = isOpen ? "✕" : "☰";

  menu.setAttribute("aria-expanded", isOpen);
  menu.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
});
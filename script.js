const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    links.classList.toggle("open", !isOpen);
  });
  links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();

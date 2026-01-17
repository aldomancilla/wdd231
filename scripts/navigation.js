const navbuttons = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

navbuttons.addEventListener("click", () => {
  navbuttons.classList.toggle("show");
  navBar.classList.toggle("show");
});

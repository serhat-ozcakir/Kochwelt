const burgerButton = document.querySelector(".burger-button");
const menu = document.querySelector(".navbar-responsive");

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("navbar-hidden");
  console.log("Menu toggled!");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    menu.classList.add("navbar-hidden");
  }
});
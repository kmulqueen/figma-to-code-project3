const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-button");
const backButton = document.querySelector(".back-button");

menu.addEventListener("click", () => {
  nav.style.transform = "translateX(0%)";
});

backButton.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
});

const bur = document.querySelector(".bur");
const links = document.querySelector(".links-menu");
const bars = document.querySelectorAll(".bur span");

bur.addEventListener("click", () => {
  links.classList.toggle("act");
  bars.forEach((child) => {
    child.classList.toggle("animate");
  });
});

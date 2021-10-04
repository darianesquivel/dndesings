/* MENU RESPONSIVE */

let menu = document.querySelector("#bur");
menu.addEventListener("click", function () {
  let change = document.querySelector(".menuNav");
  change.classList.toggle("active");
});

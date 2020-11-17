let clicks = 0;
var navbar = document.querySelector(".headerHide");
var ham = document.querySelector(".hamButton");
var showContent = document.querySelector(".musicOption-div");
var showAll = document.querySelector(".learnMore");

function toggleHamburger() {
  navbar.classList.toggle("headerShow");
}
function learnMore() {
  showContent.classList.toggle("musicOption-div-show");
}

function increaseCart() {
  clicks++;
  document.querySelector(".counter").innerHTML = clicks;
}
function decreseCart() {
  clicks--;
  if (clicks < 0) {
    clicks = 0;
    alert("Your cart is empty");
  }
  document.querySelector(".counter").innerHTML = clicks == 0 ? "" : clicks;
}

for (const x of [...document.querySelectorAll(".hamButton")]) {
  x.addEventListener("click", toggleHamburger);
}
for (const x of [...document.querySelectorAll(".learnMore")]) {
  x.addEventListener("click", learnMore);
}

for (const x of [...document.querySelectorAll(".increaseCount")]) {
  x.addEventListener("click", increaseCart);
}
for (const x of [...document.querySelectorAll(".decreaseCount")]) {
  x.addEventListener("click", decreseCart);
}

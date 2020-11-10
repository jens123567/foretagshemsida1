const shoppingCartElement =  document.getElementById("clicks")
let clicks = 0;

function onClick () {
    clicks++;
    shoppingCartElement.innerHTML = clicks;
};

[...document.querySelectorAll(".add-shopping-cart")].forEach(ele => {
    ele.addEventListener("click",onClick);
})
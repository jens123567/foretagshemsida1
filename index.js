let clicks = 0;
var navbar = document.querySelector(".headerHide")
var ham = document.querySelector(".hamButton")


function toggleHamburger(){
    navbar.classList.toggle("headerShow")
    console.log("yes")
   /* ham.classList.toggle("showClose")*/
  }

function increaseCart(){
    console.log("YEEET")
    clicks++;
    document.querySelector("#counter").innerHTML = clicks;

}
function decreseCart(){
    clicks--;
    if (clicks < 0) {
        clicks = 0;
    }
    document.querySelector("#counter").innerHTML = clicks == 0 ? "" : clicks;

    

}
function rickRoll(){
   
        window.open( 
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    
}

ham.addEventListener("click", toggleHamburger)


for(const x of [...document.querySelectorAll(".increaseCount")]){
    x.addEventListener("click",increaseCart)
}
for(const x of [...document.querySelectorAll(".decreaseCount")]){
    x.addEventListener("click",decreseCart)
    
}
for(const x of [...document.querySelectorAll(".ricked")]){
    x.addEventListener("click", rickRoll)
}

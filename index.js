let clicks = 0;

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

for(const x of [...document.querySelectorAll(".increaseCount")]){
    x.addEventListener("click",increaseCart)
}
for(const x of [...document.querySelectorAll(".decreaseCount")]){
    x.addEventListener("click",decreseCart)
    
}



let countdown = 5;

function strt(){
    document.getElementById("timer").innerHTML = "in " + countdown +"s";
    countdown--;
    if(countdown < 0){
       clearInterval(intervel);
       window.close();
    }

}
let intervel = setInterval(strt, 1000);
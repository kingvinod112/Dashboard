
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


function time(){
     let t=new Date();
     let ampm ="";
     (t.getHours() ) >= 12 ? ampm = " PM" : ampm = " AM";
     document.getElementById("LiveTime").innerHTML = (t.getHours()===12 ? "12" : t.getHours() % 12 ) + ":" + ((t.getMinutes() < 10) ? "0"+t.getMinutes() : t.getMinutes()) + ":" + ((t.getSeconds() < 10) ? "0"+t.getSeconds() : t.getSeconds()) + ampm;
}



function Logout(){
    localStorage.setItem("uname", "Demo Login");
    location.reload();
    
} 


// ----------------Random Numbers-----------------
let primary = 0;
let warning = 0;
let success = 0;
let danger  = 0;
function ran(){
 primary = Math.floor(Math.random() * 30);
 warning = Math.floor(Math.random() * 20);
 success = Math.floor(Math.random() * 10);
 danger  = Math.floor(Math.random() * 10);
 
 getData();
 
}

function getData(){
    document.getElementById("primaryCard").innerHTML = (primary < 10) ? "0" + primary : primary;
    document.getElementById("warningCard").innerHTML = (warning < 10) ? "0" + warning : warning;
    document.getElementById("successCard").innerHTML = (success < 10 && success >= 0) ? "0" + success : success;
    document.getElementById("dangerCard" ).innerHTML = (danger < 10) ? "0" + danger : danger;
    
}
setTimeout(ran, 0);
setInterval(ran, 5000);


function callName(){
   
    document.getElementById("loginNamea").innerHTML = " " + localStorage.getItem("uname");
    if(localStorage.getItem("uname") === "Demo Login"){
        document.getElementById("Logout").style.display="none";
        document.getElementById("Login").style.display="block";
    }else if(localStorage.getItem("uname") === null){
        localStorage.setItem("uname", "Demo Login");
        location.reload();
    }else{
        document.getElementById("Logout").style.display="block";
        document.getElementById("Login").style.display="none";
    }
    
   
}
setTimeout(callName, 0);
setInterval(time, 1000);

document.getElementById("inputEmail").addEventListener("blur", function(event) {   
   
    localStorage.setItem("name", event.target.value);
     console.log(Lname);

})

function setName(){
    localStorage.setItem("uname", localStorage.getItem("name"));
}


let flag1, flag2 = false;
flag1 = false;
document.getElementById("inputEmail").addEventListener("input", function (check1) {
    let a = check1.target.value;
    
    a.length > 0 ? flag1 = true : flag1 = false;
    flag();
})

document.getElementById("inputPassword").addEventListener("input", function (check2) {
    let a = check2.target.value;
    a.length > 0  ? flag2 = true : flag2 = false;
    flag();
})

function flag(){
    flag1 & flag2 ? document.getElementById("logbtn").style.display="block" : document.getElementById("logbtn").style.display="none";
}


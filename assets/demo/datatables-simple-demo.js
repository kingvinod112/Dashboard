window.addEventListener('DOMContentLoaded', event => {


    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});





function timec(){
    let t=new Date();
    let ampm ="";
    (t.getHours() ) >= 12 ? ampm = " PM" : ampm = " AM";
    document.getElementById("LiveTimec").innerHTML = (t.getHours()===12 ? "12" : t.getHours() % 12 ) + ":" + ((t.getMinutes() < 10) ? "0"+t.getMinutes() : t.getMinutes()) + ":" + ((t.getSeconds() < 10) ? "0"+t.getSeconds() : t.getSeconds()) + ampm;
  }
  
  
  
  function Logout(){
   localStorage.setItem("uname", "Demo Login");
   location.reload();
   
  }

function callName(){
    timec();
    
    document.getElementById("loginNamec").innerHTML = " " + localStorage.getItem("uname");
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
setTimeout(callName, 100);
setInterval(timec, 1000);


function readyTwo(){
  var ctx = document.getElementById("myBarChart");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [displayMonths[5], displayMonths[4], displayMonths[3], displayMonths[2], displayMonths[1], displayMonths[0]],
      datasets: [{
        label: "Revenue",
        backgroundColor: "rgba(38, 211, 196,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [4315, 6312, 7251, 9841, 10821, 14984],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
  
}


let months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

let mon = new Date();


let displayMonths = [];


for (let i = 0; i < 12; i++) {
  let monthIndex = (mon.getMonth() - i + 12) % 12; // Wrap around using modulo
  displayMonths.push(months[monthIndex]);
}
// document.getElementById("test").innerHTML = displayMonths;



function readyThree(){
    var ctx = document.getElementById("myBarChart");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [displayMonths[11], displayMonths[10], displayMonths[9],displayMonths[8],displayMonths[7], displayMonths[6]],
      datasets: [{
     
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderWidth: 1,

        borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
        data: [11015, 12015, 13015, 12215, 14015, 13015],
      }],
    },
    options: {
      scales: {
        xAxes: { 
          min: 0,
          max: 100
        },
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 6
          },
          gridLines: {
            display: true
          }
        }],
        
      },
      legend: {
        display: false
      }
    }
  
    
  
 
    
  });
 
}
var check = false;
function start(){
  
if(check){
  readyThree();
  check = !check;
}else{
  readyTwo();
  check = !check;
}
}

setInterval(start, 4000);
setTimeout(start, 0);



function timeb(){
  let t=new Date();
  let ampm ="";
  (t.getHours() ) >= 12 ? ampm = " PM" : ampm = " AM";
  document.getElementById("LiveTimeb").innerHTML = (t.getHours()===12 ? "12" : t.getHours() % 12 ) + ":" + ((t.getMinutes() < 10) ? "0"+t.getMinutes() : t.getMinutes()) + ":" + ((t.getSeconds() < 10) ? "0"+t.getSeconds() : t.getSeconds()) + ampm;
}



function Logout(){
 localStorage.setItem("uname", "Demo Login");
 location.reload();
 
}

function callName(){
  timeb();
 
  document.getElementById("loginNameb").innerHTML = " " + localStorage.getItem("uname");
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
setInterval(timeb, 1000);

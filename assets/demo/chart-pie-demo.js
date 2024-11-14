

function readyFour(types){
  var ctx = document.getElementById("myPieChart");
  new Chart(ctx, {
  type: types,
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
}

let checkk = true;
function start(){
  if(checkk){
    readyFour('pie');
    checkk = !checkk;
  }else{
    readyFour('polarArea');
    checkk = !checkk;
  }
}
setInterval(start, 4000);
setTimeout(start, 0);
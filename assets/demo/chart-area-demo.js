
function ready(){
  var ctx = document.getElementById("myAreaChart");
  const data = {
      labels: last12Days,
      datasets: [{
        label: 'Looping tension',
        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
        pointBackgroundColor: 'rgb(15, 112, 220)',
        pointRadius: 3,
        borderColor: 'rgb(75, 192, 192)',
      }]
    };
   
  
     new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: { 
            min: 0,
            max: 100
          }
        },
        legend: {
          display: false
        }
      }
    });
    }

    let currentDate = new Date();
    let last12Days = [];

    function formatDate(date) {
      const options = { month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    for (let i = 0; i < 12; i++) {
      let pastDate = new Date(currentDate);
      pastDate.setDate(currentDate.getDate() - i);
      let formattedDate = formatDate(pastDate);
      last12Days.push(formattedDate);
    }

   

    

    function readyone(){
      var ctx = document.getElementById("myAreaChart");
        new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{
            label: "Sessions",
            lineTension: 0.3,
            backgroundColor: "rgba(122, 124, 212, 0.1)",
            borderColor: "rgba(2,137,216,1)",
            pointRadius: 4,
            pointBackgroundColor: "rgba(123, 77,216,1)",
            pointBorderColor: "rgba(255,255,255,1)",
           
            pointBorderWidth: 1,
            data: [10000, 20259, 38849, 24159, 36651, 22984, 32451],
          }],
        },
        options: {
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: true
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 40000,
                maxTicksLimit: 5
              },
              gridLines: {
                color: "rgba(0, 0, 0, .125)",
              }
            }],
          },
          legend: {
            display: false
          }
        }
      });
      
    }

    let a = true;
    function swap(){
      if(a){
     ready();
      a = false;
    }else{
      readyone();
      a = true;
    }
    }
    setInterval(swap, 4000);
    setTimeout(readyone, 0);
    
    
   
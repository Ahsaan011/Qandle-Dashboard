const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
      datasets: [
        {
        label: 'Work Hours',
        data: [9, 8, 8.5, 0, 0, 3,4],
        borderWidth: 1,
        borderRadius:5,
        backgroundColor:['#64c595', '#64c595','#64c595','#dc4e41','#f3a111','#64c595']
      },
      {
        label:'Break Duration',
        backgroundColor:'#f3a111',
        data: [0, 0, 0, 0, 6, 0,0],
      },
      {
        label:'Auto Clock-out',
        backgroundColor:'#dc4e41',
        data: [0, 0, 0, 7, 0, 0,0],
      },
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid:{
            display:false
          }
        },
        x: {
            grid:{
                display:false
            }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
      
    }
  });

//   #f3a111 break duration
// #dc4e41 auto clock out

$(function() {


  var barDataNumberOfFlights = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "2017",
        backgroundColor: 'rgba(237,85,101,0.7)',
        borderColor: "rgba(237,85,101,0.8)",
        pointBackgroundColor: "rgba(237,85,101,1)",
        pointBorderColor: "#fff",
        data: [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label: "2016",
        backgroundColor: 'rgba(220, 220, 220, 0.7)',
        pointBorderColor: "#fff",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 45, 51, 47, 55]
      }
    ]
  };
  var barOptionsNumberOfFlights = {
    responsive: true
  };
  var ctx2 = document.getElementById("numberOfFlights").getContext("2d");
  new Chart(ctx2, {
    type: 'bar',
    data: barDataNumberOfFlights,
    options: barOptionsNumberOfFlights
  });




  var distributionOfAirlines = {
      labels: ["Air Canada","Singapore Airlines","Malaysia Airlines" ],
      datasets: [{
          data: [300,50,100],
          backgroundColor: ["rgba(237,85,101,0.8)","#CFCDDA","#39383E"]
      }]
  } ;
  var distributionOfAirlinesOptions = {
      responsive: true,
      legend:{
        position:"left"
      }
  };
  var ctx4 = document.getElementById("distributionOfAirlines").getContext("2d");
  new Chart(ctx4, {
    type: 'doughnut',
    data: distributionOfAirlines,
    options:distributionOfAirlinesOptions
  });




  var distributionOfManufacturers = {
      labels: ["Boeing","Airbus","Embraer" ],
      datasets: [{
          data: [65,50,30],
          backgroundColor: ["rgba(237,85,101,0.8)","#CFCDDA","#39383E"]
      }]
  } ;
  var distributionOfManufacturersOptions = {
      responsive: true,
      legend:{
        position:"left"
      }
  };
  var ctx4 = document.getElementById("distributionOfManufacturers").getContext("2d");
  new Chart(ctx4, {
    type: 'doughnut',
    data: distributionOfManufacturers,
    options:distributionOfManufacturersOptions
  });



  var distributionOfFlightTypes = {
      labels: ["Scheduled","Charter","Business", "VIP" ],
      datasets: [{
          data: [65,50,30,9],
          backgroundColor: ["rgba(237,85,101,0.8)","#CFCDDA","#39383E", "#8B2D3B" ]
      }]
  } ;
  var distributionOfFlightTypesOptions = {
      responsive: true,
      legend:{
        position:"left"
      }
  };
  var ctx4 = document.getElementById("distributionOfFlightTypes").getContext("2d");
  new Chart(ctx4, {
    type: 'doughnut',
    data: distributionOfFlightTypes,
    options:distributionOfFlightTypesOptions
  });





  var numberOfAcModels = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
          {
              label: "Boeing",
              fill: false,
              borderColor: "rgba(237,85,101,0.7)",
              pointBackgroundColor: "rgba(237,85,101,1)",
              pointBorderColor: "#fff",
              data: [65, 59, 80, 81, 56, 55, 40, 80, 83, 90, 87, 91]
          },{
              label: "Airbus",
              fill: false,
              borderColor: "rgba(207, 205, 218, 0.7)",
              pointBackgroundColor: "rgba(207, 205, 218, 1)",
              pointBorderColor: "#fff",
              data: [28, 48, 40, 19, 86, 27, 90, 65, 71, 70, 68, 79]
          },{
              label: "Embraer",
              fill: false,
              borderColor: "rgba(57, 56, 62, 0.7)",
              pointBackgroundColor: "rgba(57, 56, 62, 1)",
              pointBorderColor: "#fff",
              data: [25, 17, 20, 18, 36, 45, 35, 44, 51, 62, 48, 54]
          }
      ]
  };
  var numberOfAcModelsOptions = {
      responsive: true
  };
  var ctx = document.getElementById("numberOfAcModels").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: numberOfAcModels,
    options:numberOfAcModelsOptions});












  // var lineData = {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [
  //
  //         {
  //             label: "Data 1",
  //             backgroundColor: 'rgba(26,179,148,0.5)',
  //             borderColor: "rgba(26,179,148,0.7)",
  //             pointBackgroundColor: "rgba(26,179,148,1)",
  //             pointBorderColor: "#fff",
  //             data: [28, 48, 40, 19, 86, 27, 90]
  //         },{
  //             label: "Data 2",
  //             backgroundColor: 'rgba(220, 220, 220, 0.5)',
  //             pointBorderColor: "#fff",
  //             data: [65, 59, 80, 81, 56, 55, 40]
  //         }
  //     ]
  // };
  //
  // var lineOptions = {
  //     responsive: true
  // };
  //
  // var ctx = document.getElementById("lineChart").getContext("2d");
  // new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});






  // var polarData = {
  //     datasets: [{
  //         data: [
  //             300,140,200
  //         ],
  //         backgroundColor: [
  //             "#a3e1d4", "#dedede", "#b5b8cf"
  //         ],
  //         label: [
  //             "My Radar chart"
  //         ]
  //     }],
  //     labels: [
  //         "App","Software","Laptop"
  //     ]
  // };
  //
  // var polarOptions = {
  //     segmentStrokeWidth: 2,
  //     responsive: true
  //
  // };
  //
  // var ctx3 = document.getElementById("polarChart").getContext("2d");
  // new Chart(ctx3, {type: 'polarArea', data: polarData, options:polarOptions});





  // var doughnutData = {
  //     labels: ["App","Software","Laptop" ],
  //     datasets: [{
  //         data: [300,50,100],
  //         backgroundColor: ["#a3e1d4","#dedede","#b5b8cf"]
  //     }]
  // } ;
  //
  //
  // var doughnutOptions = {
  //     responsive: true
  // };
  //
  // var ctx4 = document.getElementById("doughnutChart").getContext("2d");
  // new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});






  // var radarData = {
  //     labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  //     datasets: [
  //         {
  //             label: "My First dataset",
  //             backgroundColor: "rgba(220,220,220,0.2)",
  //             borderColor: "rgba(220,220,220,1)",
  //             data: [65, 59, 90, 81, 56, 55, 40]
  //         },
  //         {
  //             label: "My Second dataset",
  //             backgroundColor: "rgba(26,179,148,0.2)",
  //             borderColor: "rgba(26,179,148,1)",
  //             data: [28, 48, 40, 19, 96, 27, 100]
  //         }
  //     ]
  // };
  //
  // var radarOptions = {
  //     responsive: true
  // };
  //
  // var ctx5 = document.getElementById("radarChart").getContext("2d");
  // new Chart(ctx5, {type: 'radar', data: radarData, options:radarOptions});

});

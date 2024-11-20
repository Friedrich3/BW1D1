const answerChart = document.getElementById("chart");
new Chart(answerChart, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19],
      borderWidth: 0
    }]
  },

});
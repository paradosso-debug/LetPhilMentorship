/**
 * @defintion - creates chart to be put on html in DOM
 * @param {String} chartId - going to be id of canvas on html
 * @param {Array} labels - array of timestamps as strings on the x axis
 * @param {Array} data - array of numbers to plot of line chart
 * @param {String} label - symbol of coin being passed
 */
function createChart(Chart, chartId, labels, data, label) {
  // chartSection appendChild here
  const canvas = document.createElement("canvas");
  canvas.id = chartId;

  new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          borderWidth: 1,
        },
      ],
    },
  });

  chartSection.appendChild(canvas);
}

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

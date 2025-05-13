// TASK 1: Configure Axios to communicate with the Coinbase cryptocurrency API.

const api = axios.create({
  baseURL: "https://coinbase.com/api/v2/assets/prices",
});

const coins = ["bitcoin", "ethereum"];

function createChart(Chart, coinId, labels, data, symbol) {
  const chartSection = document.getElementById("chartSection");
  const canvas = document.createElement("canvas");
  canvas.id = coinId;
  chartSection.appendChild(canvas);

  new Chart(canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: `${symbol}, Amount`,
          data: data,
          bordercolor: "blue",
          backgroundcolor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: { responsive: true },
  });
}

async function makeCharts() {
  const chartSection = document.getElementById("chartSection");
  chartSection.innerHTML = `<div class=loader"></div>`;

  const responses = await Promise.all(
    coins.map(async (coin) => {
      const response = await api.get(`/${coin}`);
      const prices = response.data.data.prices.hour.prices.slice(0, 24);

      const labels = prices.map(([_, timestamp]) =>
        new Date(timestamp * 1000).toLocaleTimeString()
      );

      const data = prices.map(([price]) => Number(price));
      return { coinId: coin, labels, data, symbol: response.data.data.base };
    })
  );

  chartSection.innerHTML = "";

  responses.forEach((res) =>
    createChart(Chart, res.coinId, res.labels, res.data, res.symbol)
  );
}

makeCharts();

setInterval(makeCharts, 10000);

// TASK 1: Configure Axios to communicate with the Coinbase cryptocurrency API.

// TASK 2: Define an array containing names of cryptocurrencies for data fetching.

// TASK 3: Write a JavaScript function to create and insert a canvas element into the HTML for each cryptocurrency.

// TASK 4: Inside this function, configure Chart.js to draw line charts with provided data.

// TASK 5: Develop an asynchronous function to request cryptocurrency prices from the Coinbase API.

// TASK 6: Format the timestamps into readable local time strings.

// TASK 7: Prepare price data for use in the Chart.js datasets.

// TASK 8: Call your function to display charts dynamically using the prepared data.

// TASK 9: Display a loading spinner during the data fetching process, removing it when data arrives.

// TASK 10: Set an interval to automatically refresh and update the charts every 10 seconds.

export const chartBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Games Played Per Month"
      },
      scales: {
        x: {
          type: "category",
          grid: {
            display: true
          }
        },
        y: {
          grid: {
            display: true
          },
          ticks: {
            beginAtZero: true
          }
        }
      }
    }
  };

export const chartDoughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "Completion Chart"
    }
  }
}

export const chartRadarOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "Completion Chart"
    }
  }
}
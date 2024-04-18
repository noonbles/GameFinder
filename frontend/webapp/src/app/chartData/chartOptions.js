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
  borderWidth: 0,
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
  scales: {
    r: {
        angleLines: {
            display: true
        },
        ticks: {
          display: false
        },
        grid: {
          color: "white"
        }
    }
},
  plugins: {
    legend: {
      position: "bottom",
      textColor: "white",
    },
    title: {
      display: true,
      text: "Completion Chart"
    },
  }
}
import {
  // Mock data
  MOCK_30_DAYS,
  MOCK_30_DAYS_AUTH_CALLS,
  MOCK_30_DAYS_UNAUTH_CALLS,
} from './MOCKS';

const lineChartData = {
  type: 'line',
  data: {
    labels: MOCK_30_DAYS.value,
    datasets: [
      {
        label: 'Authorizen Calls',
        data: MOCK_30_DAYS_AUTH_CALLS.value,
        fill: false,
        borderColor: '#6b6b6b',
        borderWidth: 2,
      },
      {
        label: 'Unauthorized Calls',
        data: MOCK_30_DAYS_UNAUTH_CALLS.value,
        fill: false,
        borderColor: '#e15555',
        borderWidth: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: 20,
    },
    elements: {
      point: {
        pointStyle: 'circle',
        radius: 1.5,
      },
    },
    plugins: {
      /**
       * Chart.js 3.3.0 doesn't support legend padding nativaly
       * Refer to : https://stackoverflow.com/questions/42585861/chart-js-increase-spacing-between-legend-and-chart
       * The workaround is complex.
       */
      legend: {
        labels: {
          boxHeight: 1,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          padding: 10,
        },
        grid: {
          drawTicks: false,
          borderWidth: 3,
        },
      },
      x: {
        ticks: {
          padding: 10,
        },
        grid: {
          drawTicks: false,
          display: false,
          borderWidth: 3,
        },
      },
    },
  },
};

const barChartData = {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
};
const bubbleChartData = {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
};

const doughnutChartData = {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
};

import {
  // Mock data for Pie Chart
  MOCK_5_APIS,
  MOCK_5_API_CALLS,
} from './MOCKS';

const pieChartData = {
  type: 'pie',
  data: {
    labels: MOCK_5_APIS.value,
    datasets: [
      {
        label: 'My First Dataset',
        data: MOCK_5_API_CALLS,
        backgroundColor: [
          'rgb(8,48,107)',
          'rgb(8,81,156)',
          'rgb(33,113,181)',
          'rgb(107,174,214)',
          'rgb(198,219,239)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    tooltips: {
      enabled: false,
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 30,
          pointStyle: 'cirlce',
        },
      },
    },
  },
};

const polarAreaChartData = {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  },
};

const radarChartData = {
  type: 'radar',
  data: {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
};

const scatterChartData = {
  type: 'scatter',
  data: {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
};

const chartsDefault = {
  bar: barChartData,
  bubble: bubbleChartData,
  doughnut: doughnutChartData,
  pie: pieChartData,
  line: lineChartData,
  polarArea: polarAreaChartData,
  radar: radarChartData,
  scatter: scatterChartData,
};

export { chartsDefault };

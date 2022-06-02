// Import stylesheets
import './style.css';

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const Chart = require('chart.js');
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map((d) => d.day),
    datasets: [
      {
        label: 'Speding',
        data: data.map((d) => d.amount),
        backgroundColor: ['hsl(10, 79%, 65%)'],
        hoverBackgroundColor: ['hsl(27, 66%, 92%)'],
        clickBackgroundColor: ['hsl(186, 34%, 60%)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      bar: {
        borderRadius: 10,
      },
    },
    onClick: (e) => {
      // var element = myChart.getElementAtEvent(e);
      // backgroundColor[element[0]._index] = 'blue'
    },
  },
});

const sum = data.reduce((acc, currItem) => acc + currItem.amount, 0);
const total = document.getElementById('total');
total.innerHTML = 'R$' + sum;

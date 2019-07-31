import store from './store.js';

const roundCtx = document.getElementById('round-results').getContext('2d');

const productLabels = [];
const pickData = [];
const roundHistory = store.getRoundHistory();

console.log(roundHistory);

for(let i =0; i<roundHistory.length;i++){
    const selected = roundHistory[i];
    const code = selected.code;
    const quant = selected.quantity;
    productLabels.push(code);
    pickData.push(quant);
}

console.log(pickData);



const roundResults = new Chart(roundCtx, {
    type: 'bar',
    data: {
        labels: productLabels,
        datasets: [
            {
                label: 'All Time Selections',
                data: pickData,

            }
        ]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
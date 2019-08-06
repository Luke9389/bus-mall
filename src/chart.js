import store from './store.js';

const roundCtx = document.getElementById('round-results').getContext('2d');

const productLabels = [];
const pickData = [];
const displayData = [];
const roundDisplays = store.getRoundDisplays();
const roundHistory = store.getRoundHistory();

for(let i = 0; i < roundHistory.length; i++) {
    const selected = roundHistory[i];
    const quant = selected.quantity;
    pickData.push(quant);
}
for(let i = 0; i < roundDisplays.length; i++) {
    const selected = roundDisplays[i];
    const displays = selected.displays;
    productLabels.push(selected.id);
    displayData.push(displays);
}
const roundResults = new Chart(roundCtx, {
    type: 'bar',
    data: {
        labels: productLabels,
        datasets: [
            {
                label: 'This Round\'s Selections',
                data: pickData,
                backgroundColor: '#EBCCD1'
            },
            {
                label: 'This Round\'s Displays',
                data: displayData,
                backgroundColor: '#D6E9C6'
            }
        ]

    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }, {
                display: false,
                stacked: true,
            }
            ],
            yAxes: [{ ticks: { beginAtZero: true } }]
        }
    }
});

const allTimeCtx = document.getElementById('all-time-results').getContext('2d');

const allTimeProductLabels = [];
const allTimePickData = [];
const allTimeDisplayData = [];
const allTimeHistory = store.getAllTimeHistory();
const allTimeDisplays = store.getAllTimeDisplays();

for(let j = 0; j < allTimeHistory.length; j++) {
    const selected = allTimeHistory[j];
    const quant = selected.quantity;
    allTimePickData.push(quant);
}
for(let i = 0; i < allTimeDisplays.length; i++) {
    const selected = allTimeDisplays[i];
    const displays = selected.displays;
    allTimeProductLabels.push(selected.id);
    allTimeDisplayData.push(displays);
}

const allTimeResults = new Chart(allTimeCtx, {
    type: 'bar',
    data: {
        labels: allTimeProductLabels,
        datasets: [
            {
                label: 'All Time Selections',
                data: allTimePickData,
                backgroundColor: '#EBCCD1'
            },
            {
                label: 'All Time Displays',
                data: allTimeDisplayData,
                backgroundColor: '#D6E9C6'
            }
        ]

    },
    options: {
        scales: {
            xAxes: [{ stacked: true }, { stacked: true, display: false }],
            yAxes: [{ ticks: { beginAtZero: true } }]
        }
    }
});


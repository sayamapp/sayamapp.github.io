export function test2() {
    return renderAcGraph()
}
let json = require('../json/atcoder.json');
let myCtx = document.getElementById("myChartAc");

function renderAcGraph() {
    let results = json.results;
    let labels = [];
    let data = [];
    for (let i = 0; i < results.length; i++) {
        labels.push(i);
        data.push(results[i]['NewRating']);
    }
    console.log(data);

    let chart = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                borderColor: 'red',
                backgroundColor: 'red',
                tension: 0.4,
            }, ],
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        suggestedMax: 1000,
                        suggestedMin: 0,
                        stepSize: 400,
                    },
                    grid: {
                        color: 'white',
                    },
                },
            },
            elements: {
                line: {
                    borderWidth: 1,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    };

    new Chart(myCtx, chart);
};
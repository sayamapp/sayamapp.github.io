
let myCtx = document.getElementById("myChartAc");
let labels = [1,2,3,4,5,6];
let data = [100, 200, 12, 14, 31, 122];

let chart = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: 'cyan',
                backgroundColor: 'red',
                tension: 0.4,
            },
        ],
    },
    options: {
        scales: {
            y: {
                ticks: {
                    suggestedMax: 200,
                    suggestedMin: 0,
                    stepSize: 100,
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

newChart(myCtx, chart);
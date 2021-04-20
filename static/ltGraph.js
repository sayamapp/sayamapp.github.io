var myCtx2 = document.getElementById("myChartLt");
let labels2 = [1,2,3,4,5,6];
let data2 = [0, 14500, 0, 0, 0, 0];

let chart2 = {
    type: 'line',
    data: {
        labels: labels2,
        datasets: [
            {
                data: data2,
                borderColor: 'orange',
                backgroundColor: 'red',
                tension: 0.4,
            },
        ],
    },
    options: {
        scales: {
            y: {
                ticks: {
                    suggestedMax: 100000,
                    suggestedMin: 0,
                    stepSize: 30000,
                },
                grid: {
                    color: 'cyan',
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

newChart(myCtx2, chart2);
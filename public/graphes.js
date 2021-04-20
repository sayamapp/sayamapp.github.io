let acCtx = document.getElementById(graphId);
// let labels = [1, 2, 3, 4, 5, 6];
// let data = [200, 25, 155, 12, 14, 115];
let chart = new Chart(acCtx, {
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
});
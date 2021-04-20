let pathAc = './atcoder.json';

let myCtx = document.getElementById("myChartAc");




loadJSON(function (json) {
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

    newChart(myCtx, chart);
});

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', pathAc, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}
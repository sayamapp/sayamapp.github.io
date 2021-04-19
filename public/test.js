const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const a = 2 * Math.PI / 6;
const r = 30;
function drawHexagon(x, y, color) {
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = 'greenyellow';
    ctx.fillStyle = color;
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawHexagon2(x, y, color) {
    drawHexagon(x, y, 'black')
    ctx.fillStyle = color;
    let dr = r / 2;
    ctx.beginPath();
    for(var j = 0; j < 6; j++) {
        ctx.lineTo(x + dr * Math.sin(a * j), y + dr * Math.cos(a * j));
    }
    ctx.closePath();
    ctx.fill();
}

function drawHexagon3(x, y, color) {
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = color;
    ctx.fillStyle = 'black'
    let rs = [30, 20, 10, 5];
    for (var i = 0; i < 4; i++) {
        let dr = rs[i];
        ctx.beginPath();
        for (var j = 0; j < 6; j++) {
            ctx.lineTo(x + dr * Math.sin(a * j), y + dr * Math.cos(a * j));
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

var cs = [];
var ds = [];
loadJSON(function (json) {
    let contributes = json.Contribute.reverse();
    for (let i = 0; i < 14 * 7 ; i++) {
        var count = Number(contributes[i].count);
        var date = contributes[i].data;
        cs.push(count);
        ds.push(date);
    }
    cs = cs.reverse();
    console.log(cs);

    for (let j = 0; j < 14; j++) {
        let x = r;
        let y = r;
        let dx = r * Math.sin(a);
        for (let i = 0; i < 7; i++) {
            console.log(j * 7 + i);
            if (i % 2 == 0) {
                if (cs[j * 7 + i] === 0 && Math.random() > 0.5) {
                    drawHexagon(x + 2 * dx * j, y + (r + r * Math.cos(a)) * i, 'black');
                } else if (cs[j * 7 + i] === 1) {
                    drawHexagon2(x + 2 * dx * j, y + (r + r * Math.cos(a)) * i, 'gold');
                } else if (cs[j * 7 + i] === 2 || cs[j * 7 + i] === 3) {
                    drawHexagon3(x + 2 * dx * j, y + (r + r * Math.cos(a)) * i, 'orange');
                } else if (cs[j * 7 + i] !== 0){
                    drawHexagon(x + 2 * dx * j, y + (r + r * Math.cos(a)) * i, 'red');
                } 
            } else {
                if (cs[j * 7 + i] === 0 && Math.random() > 0.5) {
                    drawHexagon(x + 2 * dx * j + dx, y + (r + r * Math.cos(a)) * i, 'black');
                } else if (cs[j * 7 + i] === 1) {
                    drawHexagon2(x + 2 * dx * j + dx, y + (r + r * Math.cos(a)) * i, 'gold');
                } else if (cs[j * 7 + i] === 2 || cs[j * 7 + i] === 3) {
                    drawHexagon3(x + 2 * dx * j + dx, y + (r + r * Math.cos(a)) * i, 'orange');
                } else if (cs[j * 7 + i] !== 0){
                    drawHexagon(x + 2 * dx * j + dx, y + (r + r * Math.cos(a)) * i, 'red');
                }
            }
        }
    }
});





function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './contribute.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}
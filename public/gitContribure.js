const canvas = document.getElementById('canvas-kusa');
const ctx = canvas.getContext('2d');
const a = 2 * Math.PI / 6;
const pathJson = './contribute.json';
const r = 30;
const offsetX = 3;
const offsetY = 3;
const tileCountX = 14;
const tileCountY = 7;

loadJSON(function (json) {
    let contributes = json.Contribute.reverse();
    let cs = [];
    let ds = [];

    for (let i = 0; i < tileCountX * tileCountY ; i++) {
        var count = Number(contributes[i].count);
        var date = contributes[i].data;
        cs.push(count);
        ds.push(date);
    }
    cs = cs.reverse();
    ds = ds.reverse();

    let originX = r;
    let originY = r;
    let dx = r * Math.sin(a);
    for (let cx = 0; cx < tileCountX; cx++) {
        for (let cy = 0; cy < tileCountY; cy++) {
            let idx = cx * tileCountY + cy;
            let cc = cs[idx];
            let x = originX + offsetX + 2 * dx * cx;
            x = cy % 2 == 0 ? x : x + dx;
            let y = originY + offsetY + (r + r * Math.cos(a)) * cy;
            let flag1 = Math.random() > 0.5;
            

            if (cc === 0 && flag1) {
                drawHexagon1(x, y, 'black');
            } else if (cc === 0) {

            } else if (cc <= 3) {
                drawHexagon2(x, y, 'gold');
            } else if (cc <= 5) {
                drawHexagon3(x, y, 'orange');
            } else {
                drawHexagon1(x, y, 'red');
            }

            let c = 255 / Math.max((tileCountX - (cx * cx / 10)), 1);
            let outline_color = 'rgb(' + c + ',' + c + ',' + c + ')';
            drawOutline(x, y, outline_color); 
        }
    }
});

function drawOutline(x, y, color) {
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = color;
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));
    }
    ctx.closePath();
    ctx.stroke();
}

function drawHexagon1(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));
    }
    ctx.closePath();
    ctx.fill();
}

function drawHexagon2(x, y, color) {
    drawHexagon1(x, y, 'black')
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


function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', pathJson, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}
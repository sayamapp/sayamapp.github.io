'use strict'

console.log("run");


var Xray = require('x-ray');
var x = Xray();

var userName = 'sayamapp';
var url = `https://github.com/users/${userName}/contributions`;

x(url, 'rect', [ { count: '@data-count', date: '@data-date' }])((error, result) => {
    if (error) {
        console.log(error);
    } else {
        // console.log(result);

        var fs = require('fs');
        var file = 'contribute.json';
        let data = JSON.stringify({Contribute: result}, null, ' ');
        fs.writeFileSync(file, data);
    }
}); 


let requestURL = 'https://atcoder.jp/users/sandbox0436/history/json';
let testURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let test = JSON.parse(request.responseText);
    var fs = require('fs');
    var file = 'atcoder.json';
    let data = JSON.stringify({results: test}, null, ' ');
    fs.writeFileSync(file, data);
}
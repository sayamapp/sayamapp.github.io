const path = require('path');

module.exports = {
    entry: './static/js/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './static'),
    },
    mode: 'development'
}
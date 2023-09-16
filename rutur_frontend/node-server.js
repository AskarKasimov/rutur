const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(morgan(':date[iso] – :remote-addr :method :url – :status :response-time ms :res[content-length]'), express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);
const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/', (req, res) => {
    res.send('Test');
})


app.listen(3000);
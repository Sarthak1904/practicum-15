const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Arithmatic Service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    const num1 = parseInt(req.params.n);
    const num2 = parseInt(req.params.m);
    const sum = num1 + num2;
    res.json(sum);
});
//listening port
app.listen(port);
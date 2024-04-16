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

app.get('/isprime/:n', (req, res) => {
    result = ''
    const num = parseInt(req.params.n);
    const isPrime = checkPrime(num);
    if(isPrime) {
        result = 'Prime';
    }
    else{
        result = 'Not Prime'
    }
    res.json(result);
});

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

//listening port
app.listen(port);
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Arithmetic functions
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function add(n, m) {
  return n + m;
}

// Express setup
if (!process.env.PORT) {
  throw new Error('Please specify the port number for the HTTP server with the environment variable PORT.');
}
const port = process.env.PORT;

app.use(cors());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/add/:n/:m', (req, res) => {
  const result = Number(req.params.n) + Number(req.params.m);
  res.json({ sum: result });
});

app.get('/isPrime/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  const isPrimeResult = isPrime(number);
  res.json({ 
    number: number,
    isPrime: isPrimeResult,
    message: isPrimeResult ? `${number} is a prime number.` : `${number} is not a prime number.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Test cases
test('2 + 3 is equal to 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('6 + 9 is equal to 15', () => {
  expect(add(6, 9)).toBe(15);
});

test('67823567823568 + 3265823957 is equal to 5', () => {
  expect(add(2000, 15)).toBe(2015);
});

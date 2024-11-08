// Create web server
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Hello World!');
});

app.put('/', (req, res) => {
  res.send('Hello World!');
});

app.delete('/', (req, res) => {
  res.send('Hello World!');
});

app.patch('/', (req, res) => {
  res.send('Hello World!');
});

app.options('/', (req, res) => {
  res.send('Hello World!');
});

app.head('/', (req, res) => {
  res.send('Hello World!');
});

app.connect('/', (req, res) => {
  res.send('Hello World!');
});

app.trace('/', (req, res) => {
  res.send('Hello World!');
});

app.all('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

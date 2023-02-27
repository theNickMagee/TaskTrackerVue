const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors());
app.get('/', (req, res) => {
  res.end('Task Tracker API');
});

app.get('/task', (req, res) => {
    res.end("Get a tasks");
  });

app.get('/all', (req, res) => {
    res.end("Get all tasks");
  });

  app.post('/task', (req, res) => {
    res.end("Posted task");
  });

  app.put('/task', (req, res) => {
    res.end("Put task");
  });

  app.delete('/task', (req, res) => {
    res.end("Delete task");
  });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
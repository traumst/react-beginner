const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

app.get('/', (req, res) => {
  db.getPosts((err, posts) => {
    if(err) {
      res.json({})
    } else {
      res.json(posts)
    }
  });
});

process.on('SIGTERM', () => {
  db.close();
  console.log("Gracefully shutdown");
});

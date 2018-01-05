const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.listen(3000, () => {
  console.log(`Server listening on port 3000`)
});

app.get('/', function(req, res) {
  db.getPosts((err, posts) => {
    if(err) {
      res.json({})
    } else {
      res.json(posts)
    }
  });
});

// app.get('/api/signatures', function(req, res) {
//   Signature.find({}).then(eachOne => {
//     res.json(eachOne);
//   })
// })
// app.post('/api/signatures', function(req, res) {
//   Signature.create({
//     guestSignature: req.body.SignatureOfGuest,
//     message: req.body.MessageofGuest,
//   }).then(signature => {
//     res.json(signature)
//   });
// });


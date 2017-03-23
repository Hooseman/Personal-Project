var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

var config = require('./config.js');

var db = massive.connectSync({
  connectionString : config.elephantsql
});

app.set('db', db);

db.set_schema(function(err, data) {
  if (err) console.log(err);
  else console.log("All tables successfully reset")
})

app.get('/api/rifles', function(req, res, next) {
  db.get_rifles(function(err, sunglasses) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(sunglasses)
      console.log(sunglasses)
    }
  });
})

app.get('/api/shotguns', function(req, res, next) {
  db.get_rifles(function(err, sunglasses) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(sunglasses)
      console.log(sunglasses)
    }
  });
})

app.get('/api/handguns', function(req, res, next) {
  db.get_rifles(function(err, sunglasses) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(sunglasses)
      console.log(sunglasses)
    }
  });
})
// app.get('/api/products', function(req, res, next) {
//   db.get_sunglasses(function(err, sunglasses) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.json(sunglasses)
//       console.log(sunglasses)
//     }
//   });
// })


// db.set_schema((err, data) => {
//     if (err) console.log(err);
//     else console.log('All tables successfully reset');
// })







app.listen(config.port, function() {
  console.log("Started server on port", config.port);
});

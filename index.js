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
  db.get_rifles(function(err, rifles) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(rifles)
      console.log(rifles)
    }
  });
})

app.get('/api/shotguns', function(req, res, next) {
  db.get_shotguns(function(err, shotguns) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(shotguns)
      console.log(shotguns)
    }
  });
})

app.get('/api/handguns', function(req, res, next) {
  db.get_handguns(function(err, handguns) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(handguns)
      console.log(handguns)
    }
  });
})
// app.get('/api/products', function(req, res, next) {
//   db.get_products(function(err, sunglasses) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.json(sunglasses)
//       console.log(sunglasses)
//     }
//   });
// })

app.get('/api/ammunition', function(req, res, next) {
  db.get_ammunition(function(err, ammunition) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(ammunition)
      console.log(ammunition)
    }
  });
})


// db.set_schema((err, data) => {
//     if (err) console.log(err);
//     else console.log('All tables successfully reset');
// })







app.listen(config.port, function() {
  console.log("Started server on port", config.port);
});

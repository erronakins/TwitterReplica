const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.get('/hello', (req, res) => {
  res.send('Hello World From A8!');
});

app.get('/', (req, res) => {
  res.send('Hello Heroku You have Found me - the best Node Server in the world!');
});

const movieService = require('./services/movies-service');
movieService(app);

require('./services/twitter-service')(app);
require('./services/twitter-serviceA8')(app);
require('./services/movies/service')(app);

app.listen(process.env.PORT || 4000);


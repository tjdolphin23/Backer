const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
// bring in the models
const db = require(path.resolve(__dirname, "./models"));
// API routes
const routes = require(path.resolve(__dirname, "./controllers/angelFish_Controller"));
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

/*-----------------------------------React Routes--------------------------------------*/
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../Build/react-ui', 'index.html'));
});
/*------------------------Sync DB and Start Express Server-----------------------------*/
db.sequelize.sync().then(function() {
  app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });
});

//-----------------------------------------------------------------------------------------------------------
/*------------API ROUTES and Requires-----------------
const Users = require((path.resolve(__dirname, "./models/backers.js")));
// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/api/about', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.status(200).json({ "name": 'Tobi' });
});

app.get('/api/about', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.status(200);
  Users.findAll({}).then(function(results) {
    res.json(results);
  });
});*/
//------------------------------------------------------------------------------------------------------------
/*// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));*/
//------------------------------------------------------------------------------------------------------------
// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../controllers/connection.js");

// Creates a "user" model that matches up with DB
var User = sequelize.define("s4o6h6fg2ixdyxen", {
    // id of user (int)
    id: Sequelize.INTEGER,
    // name of users (a string)
    name: Sequelize.STRING,
    // the user's username (a string)
    username: Sequelize.STRING,
    // user's email address (a string)
    email: Sequelize.STRING,
    // user's password (a string)
    password: Sequelize.STRING,
    // is a founder (a boolean)
    founder: Sequelize.BOOLEAN,
    // is a isUser (a boolean)
    isUser: Sequelize.BOOLEAN,
    // is a investor (a boolean)
    investor: Sequelize.BOOLEAN,
    // user's country location (a string)
    country: Sequelize.STRING,
  });
  // Syncs with DB
  User.sync();
  // Makes the user Model available for other files (will also create a table)
  module.exports = User;





// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL/JAWSDB USING SEQUELIZE
// *********************************************************************************
// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize

if (process.env.JAWSDB_URL){
  var sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}
else{
	console.log("No connection made to JAWSDB");
  	sequelize = new Sequelize('example-app-db', 'root', null);
};

// Exports the connection for other files to use
module.exports = sequelize;

/*------------------------------------Connection to Heroku jawsdb without sequelize-------------------------------------------------------*/

/*// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "zV0zNQ15Mu26",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected To Database as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;*/
// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../controllers/connection.js");

// Creates a "user" model that matches up with DB
var User = sequelize.define("backer", {
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


  // Creates a "investor" model that matches up with DB
var Investor = sequelize.define("backer", {
    // id of investor (int)
    id: Sequelize.INTEGER,
    // username of investor (a string)
    username: Sequelize.STRING,
    // investor's country location (a string)
    country: Sequelize.STRING,
    // the investor's company name (a string)
    company_name: Sequelize.STRING,
    // investor's amount to invest(int)
    amount_investing: Sequelize.INTEGER,
    // the investor's business background (a string)
    business_background: Sequelize.STRING,
    // the investor's investment experience (a string)
    investing_experience: Sequelize.STRING,
    // is investor going to be silent partner (boolean)
    silent_investor: Sequelize.BOOLEAN,
    // the investor's industry of interest (a string)
    industry_interest: Sequelize.STRING,
    // investor's net worth (int)
    net_worth: Sequelize.INTEGER,
    // is investor accredited (boolean)
    accredited_investor: Sequelize.BOOLEAN,
    // the investor's looking in company (a string)
    qualities_of_company: Sequelize.STRING,
    // the investor's other information (a string)
    other: Sequelize.STRING,
  });
  // Syncs with DB
  Investor.sync();
  // Makes the investor Model available for other files (will also create a table)
  module.exports = Investor;


    // Creates a "founder" model that matches up with DB
var Founder = sequelize.define("backer", {
    // id of founder (int)
    id: Sequelize.INTEGER,
    // username of investor (a string)
    username: Sequelize.STRING,
    // founder's country location (a string)
    country: Sequelize.STRING,
    // the founder's company name (a string)
    company_name: Sequelize.STRING,
    // founder's amount of money needed (int)
    investment_needed: Sequelize.INTEGER,
    // the investor's bu (a int)
    percent_giving: Sequelize.INTEGER,
    // the investor's investment experience (a string)
    investing_experience: Sequelize.STRING,
    // is investor going to be silent partner (boolean)
    silent_investor: Sequelize.BOOLEAN,
    // the investor's industry of interest (a string)
    industry_interest: Sequelize.STRING,
    // investor's net worth (int)
    net_worth: Sequelize.INTEGER,
    // is investor accredited (boolean)
    accredited_investor: Sequelize.BOOLEAN,
    // the investor's looking in company (a string)
    qualities_of_company: Sequelize.STRING,
    // the investor's other information (a string)
    other: Sequelize.STRING,
  });
  // Syncs with DB
  Investor.sync();
  // Makes the user Model available for other files (will also create a table)
  module.exports = Investor;



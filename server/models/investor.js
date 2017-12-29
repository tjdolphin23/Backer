// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../controllers/connection.js");

// Creates a "investor" model that matches up with DB
var Investor = sequelize.define("s4o6h6fg2ixdyxen", {
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
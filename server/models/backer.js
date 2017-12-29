// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../controllers/connection.js");

// Creates a "user" model that matches up with DB
var User = sequelize.define("users", {
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


/*// Creates a "investor" model that matches up with DB
var Investor = sequelize.define("investor", {
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
var Founder = sequelize.define("founder", {
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
    // the percentage founder is willing to give up (a int)
    percent_giving: Sequelize.INTEGER,
    // the founder's product (a string)
    product: Sequelize.STRING,
    // the product summary (a string)
    product_summary: Sequelize.STRING,
    // the product solution to problem (a string)
    problem_solution: Sequelize.STRING,
    // the product's industry (a string)
    industry: Sequelize.STRING,
    // the product's competition (a string)
    competition: Sequelize.STRING,
    // the product's market size (a string)
    market_size: Sequelize.STRING,
    // the product's market trends (a string)
    market_trends: Sequelize.STRING,
    // the product's differentiators (a string)
    differentiators: Sequelize.STRING,
    // the product's gross sales (an int)
    gross_sales: Sequelize.INTEGER,
    // the product's gross costs (an int)
    gross_costs: Sequelize.INTEGER,
    // the product's net profits (an int)
    net_profits: Sequelize.INTEGER,
    // the product's other investors (a string)
    other_investors: Sequelize.STRING,
    // the number of employees (an int)
    number_of_employees: Sequelize.INTEGER,
    // the product's target market (a string)
    target_market: Sequelize.STRING,
    // the product sale price (an int)
    sale_price: Sequelize.INTEGER,
    // the product cost price (an int)
    cost_price: Sequelize.INTEGER,
    // the product's features  (a string)
    features: Sequelize.STRING,
    // the product's patent (a boolean)
    product_patent: Sequelize.BOOLEAN,

  });
  // Syncs with DB
  Founder.sync();
  // Makes the user Model available for other files (will also create a table)
  module.exports = Founder;*/



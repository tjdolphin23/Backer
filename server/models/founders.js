const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  // Creates a "investor" model that matches up with DB
  const Founders = sequelize.define("founders", {
      // username of founder (a string)
      username: Sequelize.STRING,
      // founder's working capital(int)
      working_capital: Sequelize.INTEGER,
      // founder's net worth (int)
      net_worth: Sequelize.INTEGER,
      // the founder's business background (a string)
      business_background: Sequelize.STRING,
      // the founder's industry interest (a string)
      industry_interests: Sequelize.STRING,
      // founder's previous work (a STRING)
      previous_projects: Sequelize.STRING,
      // the investor's other information (a string)
      other: Sequelize.STRING
    });
  return Founders;
};
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  // Creates a "investor" model that matches up with DB
  const Founders = sequelize.define("founders", {
      // username of founder (a string)
      userName: Sequelize.STRING,
      // founder's working capital(int)
      workingCapital: Sequelize.INTEGER,
      // founder's net worth (int)
      netWorth: Sequelize.INTEGER,
      // the founder's business background (a string)
      businessBackground: Sequelize.STRING,
      // the founder's industry interest (a string)
      industryInterests: Sequelize.STRING,
      // founder's previous work (a STRING)
      previousProjects: Sequelize.STRING,
      // the investor's other information (a string)
      other: Sequelize.STRING
    });
  return Founders;
};
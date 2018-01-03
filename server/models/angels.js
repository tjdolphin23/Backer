const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  // Creates a "investor" model that matches up with DB
  const Angels = sequelize.define("angels", {
      // username of investor (a string)
      userName: Sequelize.STRING,
      // investor's country location (a string)
      country: Sequelize.STRING,
      // the investor's company name (a string)
      companyName: Sequelize.STRING,
      // investor's amount to invest(int)
      amountInvesting: Sequelize.INTEGER,
      // the investor's business background (a string)
      businessBackground: Sequelize.STRING,
      // the investor's investment experience (a string)
      investingExperience: Sequelize.STRING,
      // is investor going to be silent partner (boolean)
      silentInvestor: Sequelize.BOOLEAN,
      // the investor's industry of interest (a string)
      industryInterest: Sequelize.STRING,
      // investor's net worth (int)
      netWorth: Sequelize.INTEGER,
      // is investor accredited (boolean)
      accreditedInvestor: Sequelize.BOOLEAN,
      // the investor's looking in company (a string)
      companyQualities: Sequelize.STRING,
      // the investor's other information (a string)
      other: Sequelize.STRING
    });
  return Angels;
};




/*-------------------------------------------The below code is for guidance--------------------------------------------------*/
/*// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Burger.hasOne(models.Customer);
      }
    }
  });
  return Burger;
};*/

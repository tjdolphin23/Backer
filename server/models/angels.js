module.exports = function (sequelize, DataTypes) {
  // Creates a "investor" model that matches up with DB
  const Angels = sequelize.define("angels", {
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

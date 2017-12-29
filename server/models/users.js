const Sequelize = require('sequelize');
module.exports=function(sequelize, Datatypes) {
  // Creates a "user" model that matches up with DB
  var Users = sequelize.define("users", {
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
  return Users;
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

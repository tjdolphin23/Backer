
// Our angel fish controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
const path = require('path');
const express = require("express");
const router = express.Router();

// grabbing our models
const db = require(path.resolve(__dirname, "../models"));

// get route -> test for about
router.get('/about', function (req, res) {
  res.set('Content-Type', 'application/json');
  // res.status(200).json({ "Server Source Name": 'Tobi' });
  db.users.findAll({}).then(function(users){
    return res.json({"users": users});
  })
});

// post route to create user
router.post("/start/signup", function(req, res) {
  // edited sign up to add user credentials
  db.users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    founder: req.body.founder,
    angel: req.body.angel
  })
  // pass the result of our call
  .then(function(user) {
    // log the result to our terminal/bash window
    console.log(user);
    //set packet header for http
    res.set('Content-Type', 'application/json');
    //return user
    return res.json({"user": user});
  });
});

// post route to find existing user
router.post("/start/signin", function(req, res) {
  // console.log(req.body.email+" "+req.body.password);
  // edited sign up to find user credentials
  db.users.findOne({where: {email: req.body.email, password: req.body.password}})
  // pass the result of our call
  .then(function(user) {
    //set packet header for http
    res.set('Content-Type', 'application/json');
    //return userId and userName
    return res.json({"userId": user.id, "userName": user.username});
  });
});

//route to create a project
router.post("/project", function (req, res) {
  //creating new project to database
  db.projects.create({
    username: req.body.userName,
    country: req.body.country,
    investment_needed: req.body.amount,
    percent_giving: req.body.giving,
    product: req.body.product,
    product_summary: req.body.summary,
    problem_solution: req.body.problem_solution,
    industry: req.body.industy,
    competition: req.body.competition,
    market_size: req.body.market_size,
    market_trends: req.body.market_trends,
    differentiators: req.body.differentiators,
    gross_sales: req.body.gross_sales,
    gross_costs: req.body.costs,
    net_profits: req.body.profit,
    other_investors: req.body.other_investors,
    number_of_employees: req.body.employees,
    target_market: req.body.target_market,
    sale_price: req.body.price,
    cost_pric: req.body.cost,
    features: req.body.features,
    product_patent: req.body.patent
  })
  .then(function(projects) {
    // log the result to our terminal/bash window
    console.log(projects);
  });
});


//get angel info to display on dashboard
router.post("/founder/dashboard", function(req, res) {
  db.projects.findAll({
    where: {
      industry: '',
      investment_needed: '',

    }
  })
  .then(function(products) {
   
  })
})


module.exports = router;

/*-------------------------------------------The below code is for guidance--------------------------------------------------*/

/*// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  // replace old function with sequelize function
  db.Burger.findAll({
    include: [db.Customer],
    // Here we specify we want to return our burgers in ordered by ascending burger_name
    order: [
      ["burger_name", "ASC"]
    ]
  })
  // use promise method to pass the burgers...
  .then(function(dbBurger) {
    // into the main index, updating the page
    var hbsObject = {
      burger: dbBurger
    };
    return res.render("index", hbsObject);
  });
});

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Burger.create({
    burger_name: req.body.burger_name
  })
  // pass the result of our call
  .then(function(dbBurger) {
    // log the result to our terminal/bash window
    console.log(dbBurger);
    // redirect
    res.redirect("/");
  });
});

// put route to devour a burger
router.put("/burgers/update", function(req, res) {
  // If we are given a customer, create the customer and give them this devoured burger
  if (req.body.customer) {
    db.Customer.create({
      customer: req.body.customer,
      BurgerId: req.body.burger_id
    })
    .then(function(dbCustomer) {
      return db.Burger.update({
        devoured: true
      }, {
        where: {
          id: req.body.burger_id
        }
      });
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });
  }
  // If we aren't given a customer, just update the burger to be devoured
  else {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.body.burger_id
      }
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });
  }
});*/

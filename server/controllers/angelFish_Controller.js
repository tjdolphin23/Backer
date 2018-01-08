
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
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    founder: req.body.founder,
    angel: req.body.angel
  })
  // pass the result of our call
  .then(function(user) {
    // log the result to our terminal/bash window
    console.log("User Created");
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
    console.log("User Logged In");
    //set packet header for http
    res.set('Content-Type', 'application/json');
    //return userId and userName
    return res.json({"userId": user.id, "userName": user.userName});
  });
});

//route to create a project
router.post("/founderDash/create", function (req, res) {
  //creating new project to database
  db.projects.create({
    userName: req.body.userName,
    companyName: req.body.companyName,
    investmentNeeded: req.body.amount,
    percentGiving: req.body.giving,
    productName: req.body.productName,
    productSummary: req.body.summary,
    problemSolution: req.body.problemSolution,
    industry: req.body.industy,
    competition: req.body.competition,
    marketSize: req.body.marketSize,
    marketTrends: req.body.marketTrends,
    differentiators: req.body.differentiators,
    grossSales: req.body.grossSales,
    grossCosts: req.body.costs,
    netProfits: req.body.profit,
    otherInvestors: req.body.otherInvestors,
    employeeCount: req.body.employees,
    targetMarket: req.body.targetMarket,
    salePrice: req.body.price,
    costPrice: req.body.cost,
    features: req.body.features,
    productPatent: req.body.patent,
    other: req.body.other
  })
  .then(function(project) {
    // log the result to our terminal/bash window
    console.log("Project Created");
    //set packet header for http
    res.set('Content-Type', 'application/json');
    //return userId and userName
    return res.json({"project": project});

  });
});


//search/view project route
router.post("/dashboard", function(req, res) {
  //search angels database in find all
  db.angels.FindAll({
    //search parameters
    where: {
      //keyword of product summary
      keyword: "%" + keyword + "%",
      //amount founders need for project
      amount: "gte" + amount,
      //product industry
      industry: "%" + industry + "%"
    }
  })
  .then(function(angels) {
    //log search results
    console.log("Return search");
  })
});

//search for angels 
router.post("/dashboard", function(req, res) {
//search angels in dashboard with findAll
db.founders.findAll({
  //search parameters
  where: {
    //amount angel is willing to invest
    amountInvesting: "gte" + amount,
    //keyword search angel's investing experience
    experience: "%" + experience + "%",
    //keyword search industry experience/business background
    industry: "%" + industry + "%"
  }
}).then(function(founders){
  //log search results
  console.log("Results found");
})
});

module.exports = router;

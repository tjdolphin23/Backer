
// Our angel fish controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
const path = require('path');
const express = require("express");
const router = express.Router();

// grabbing our models
const db = require(path.resolve(__dirname, "../models"));
// allows use of special mysql search filters
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// get route -> test for about
/*router.get('/about', function (req, res) {
  res.set('Content-Type', 'application/json');
  // res.status(200).json({ "Server Source Name": 'Tobi' });
  db.users.findAll({}).then(function(users){
    return res.json({"users": users});
  })
});*/

// post route to create user
router.post("/start/signup", function(req, res) {
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
  .then(function(user) {
    console.log("User Created");
    res.set('Content-Type', 'application/json');
    return res.json({"user": user})
  })
  .catch(error=>{
    console.log(error);
    res.set('Content-Type', 'application/json');
    return res.json({"error": error.errors[0].message});
  });
});

// post route to sign in
router.post("/start/signin", function(req, res) {
  db.users.findOne({where: {email: req.body.email, password: req.body.password}})
  .then(function(user) {
    if(user === null) {
      console.log("User Rejected");
      res.set('Content-Type', 'application/json');
      return res.json({"userReject": "User information not found"});
    }
    else {
      console.log("User Logged In");
      res.set('Content-Type', 'application/json');
      return res.json({"userId": user.id, "userName": user.userName});
    }
    
  })
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
});

//route to create a product
router.post("/founderDash/create", function (req, res) {
  let productPatent = req.body.productPatent
    if (productPatent === "yes") {
      productPatent = true;
    } else {
      productPatent = false;
  };
  let otherInvestors = req.body.otherInvestors
    if(otherInvestors === "yes") {
      otherInvestors = true;
    } else {
      otherInvestors = false;
    };
  db.products.create({
    userName: req.body.userName,
    companyName: req.body.companyName,
    investmentNeeded: req.body.investmentNeeded,
    percentGiving: req.body.percentGiving,
    productTitle: req.body.productTitle,
    productSummary: req.body.productSummary,
    problemSolution: req.body.problemSolution,
    industry: req.body.industry,
    competition: req.body.competition,
    marketSize: req.body.marketSize,
    marketTrends: req.body.marketTrends,
    differentiators: req.body.differentiators,
    grossSales: req.body.grossSales,
    grossCosts: req.body.grossCosts,
    netProfits: req.body.netProfits,
    otherInvestors: otherInvestors,
    employeeCount: req.body.employeeCount,
    targetMarket: req.body.targetMarket,
    salePrice: req.body.salePrice,
    costPrice: req.body.costPrice,
    features: req.body.features,
    productPatent: productPatent,
    other: req.body.other
  })
  .then(function(product) {
    console.log("Project Created");
    res.set('Content-Type', 'application/json');
    return res.json({"product": product});
  })
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
});

//get founder products
router.post("/founderDash/products", function(req, res) {
  db.products.findAll({
    //search parameters
    where: {
      userName: req.body.userName,
    }
  })
  .then(function(products) {
    console.log("Founder has viewed their Products");
    res.set('Content-Type', 'application/json');
    return res.json({"products": products});
  })
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
});

//get a single product - accessible by either founder or angel
router.post("/productDetails", function(req, res) {
  db.products.findOne({
    //search parameters
    where: {
      id: req.body.id,
    }
  })
  .then(function(product) {
    console.log("Details of a product have been accessed");
    res.set('Content-Type', 'application/json');
    return res.json({"product": product});
  })
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
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
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
});

//Search for products from the angel dashboard
router.post("/angelDash/searchProducts", function(req, res) {
  //search products table
  db.products.findAll({
    //search parameters
    where: {
      //keyword of product summary
      productSummary: {
        [Op.like]: req.body.search
      }
    }
  })
  .then(function(products) {
    console.log("An angel has searched for products");
    res.set('Content-Type', 'application/json');
    return res.json({"products": products});
  })
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
});

//Delete founder products
router.post("/founderDash/delete", function(req, res) {
  db.products.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(products) {
    console.log("A founder has attempted to delete a product");
    res.set('Content-Type', 'application/json');
    return res.json({"products": products});
  })
  .catch(error=>{
    res.set('Content-Type', 'application/json');
    return res.json({"error": error});
  });
});

module.exports = router;

var express = require('express')
var router = express.Router()

// Session open and close stuff

var session = require('express-session');


// Initialising router - put at start
router.use('*',  function(req, res, next) {

  if (req.session.first_name){
    console.log("There is session data, e.g. first_name: " +  req.session.first_name );
    next();
  } else {
    console.log("no vars in session");
  req.session.first_name = "";


// initialise other vars 
    next(); // moves to next router
}

});



// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


// add your routes here
module.exports = router



// NOTE: I removed evertything else from the legalisation-prototype routes.js to keep it clean, but haven't tested 
// so it's possible something is missing. If so refer the full version

// START additional payments stuff

//THE BIG RESET FUNCTION! This ensures the session gets cleared each time you reload the page
router.get('/additional-payments', function (req, res) {
  //resetAll();
  req.session.destroy();
  console.log("reset");
  res.render('additional-payments');

});


// 1. Store the data in session
router.get('/additional-payments-confirm', function(req, res, next){
  for (var propName in req.query) {
    if (req.query.hasOwnProperty(propName)) {
      req.session[propName] = req.query[propName];
    }
  }


// 2. Calculate the cost and then store that in session
// For this we need the number of documents, and the postage choice, then add them together
// Payment values are in here from legalisation e.g. £30 per document, £5.50 for UK courier etc

var documentscost = req.session.numberofdocuments * 30;

 if (req.session.postagechoice == "uk"){

 var postagecost = 5.50;

  } else if (req.session.postagechoice == "europe") {

 var postagecost = 14.50;

  }  else if (req.session.postagechoice == "rest-of-world") {

 var postagecost = 25;

  }   else {

 var postagecost = 0;

  }

var totalcost = documentscost + postagecost;

// sort the decimals out so the page will display, for example, 35.50 instead of 35.5
var totalcost2decimals = totalcost.toFixed(2);

// save this to the session while I'm at it, so I can use it wherever needed beyond this particular page (e.g. the additional-payments-done page will use this
// later on, in step 4)
req.session.totalcost2decimals = totalcost2decimals;

// 3. Render the page, with the data variables needed
 res.render('additional-payments-confirm', {
    'totalcost2decimals'   : totalcost2decimals,
    'numberofdocuments'  : req.session.numberofdocuments,
    'postagechoice'  : req.session.postagechoice
  });

});



// 4. Get email and other variables into the additional payment confirmation page 
router.get('/additional-payments-done', function(req, res, next){

  res.render('additional-payments-done', {
    'additionalpaymentsemail'  : req.session.additionalpaymentsemail,
    'totalcost2decimals'   : req.session.totalcost2decimals,
    'numberofdocuments'  : req.session.numberofdocuments,
    'postagechoice'  : req.session.postagechoice
  });
});


// END additional payments stuff




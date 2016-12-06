var express = require('express')
var router = express.Router()

// Session open and close stuff, you need to add this at the top
var session = require('express-session');


// Initialising router - put at start too
router.use('*',  function(req, res, next) {

// Start logging in the console. For this you just need to change the first_name to any input value(s) which you are
// collecting in sessions and want to log. Here I am just using the very first thing collected to indicate whether
// the session capture is working or not
  if (req.session.first_name){
    console.log("There is session data, e.g. first_name: " +  req.session.first_name );
    next();
  } else {
    console.log("There is no session data - no vars in session");
  req.session.first_name = "";

// initialise other vars 
    next(); // moves to next router
}

});



//THE BIG RESET FUNCTION! This ensures that every time you come back to index the session is cleared down for a new user
router.get('/index', function (req, res) {
  //resetAll();
  req.session.destroy();
  console.log("reset");
  res.render('index');

});

// THE IN-PAGE RESET FUNCTION! Link to this to wipe the prototype from any page and return back to that same page
// Quick reset to clear variables and remove any query string
router.get('/reset', function(req, res){
req.session.destroy();
  var backURL=req.header('Referer') || '/';
  backURL = backURL.split("?").shift();
  // do your thang
  res.redirect(backURL);
});



// Route index page
router.get('/', function (req, res) {
  res.render('index')
})



// add your routes here
module.exports = router




// START CODE FOR THE SESSION TEST FILES


// Lets start by collecting all the data posted from the session-test-inputs page. That page form points at /session-test, 
// so here we get session-test, cycle through the query string for any data (?first_name=Mark&last_name=Barlow, etc), and store it in
// the session using the same variable name for ease. Thereafter we can start calling that data from the session instead of from the query 
router.get('/session-test', function(req, res, next){
  for (var propName in req.query) {
    if (req.query.hasOwnProperty(propName)) {
      req.session[propName] = req.query[propName];
    }
  }

// Now set a variable using is_uk as stored in the sessions
  var is_uk = req.session.is_uk;

// Standard branching
  if (is_uk == "false"){

    res.redirect("/session-test-branch-nonuk");

    router.get('/session-test-branch-nonuk', function(req, res, next){

// Set variables which this page will use in the html, drawing the data from the session. You have to do this for any data you want to use on a a given page.
  res.render('session-test-branch-nonuk', {
    'first_name'  : req.session.first_name,
    'last_name'   : req.session.last_name,
    'telephone'   : req.session.telephone,
    'email'       : req.session.email,

  });
});


  } else {

// As above - set variables which this page will use in the html, drawing the data from the session. You have to do this for any data you want to use on a a given page.
    res.render('session-test', {
    'first_name'  : req.session.first_name,
    'last_name'   : req.session.last_name,
    'telephone'   : req.session.telephone,
    'email'       : req.session.email,
  });

  }


// simpler version  -  if no branching is required then you could just do this:
//  res.render('session-test', {
//    'first_name'     : req.session.first_name,
 //   'last_name'   : req.session.last_name,
  //  'telephone'   : req.session.telephone,
 //   'email'   : req.session.email,
//  });


});



// Now continuing onwards to the subsequent page if you click the next link- calling data via session in the same way.
// There's no need to keep reposting it page to page, once it's in the session it stays there until you clear it, for use on any
// page

router.get('/session-test-next', function(req, res, next){

  res.render('session-test-next', {
    'first_name'  : req.session.first_name,
    'last_name'   : req.session.last_name,
    'telephone'   : req.session.telephone,
    'email'       : req.session.email,

  });
});


// END  CODE FOR THE SESSION TEST FILES



// This is a commented up version of the routes.js file from my post-dl prototype.

// You need to install the 'request' module for your app. In command line, go to the root directory for your app and type 'npm install request'. Once it has finished running, run 'npm install' again. 

var express = require('express')
var router = express.Router()

// You then need to load the module for your app using 'var request = require('request')

var request = require('request')
var json2csv = require('json2csv')
var fs = require('fs')


// Route index page
router.get('/', function (req, res) {

  res.render('index')
})

// add your routes here


	

router.get('/usa', function (req, res) {

var fields = ['title', 'format', 'web_url']

// The command on the next line makes the API call and specifies the objects you can call at the end of it.

request('https://www.gov.uk/api/world-locations/usa/organisations', function(error, response, body){
	
// The line after this creates a variable from the results returned in the 'body' of the API call
	var results = JSON.parse(body).results

// This prints the results to the command line
	console.dir(results)
	console.dir(results[0].title)


// The rest of this is what I was doing with the results - in this case converting some of the data into a csv file and downloading it.
var csv = json2csv({ data: results, fields: fields });

	console.dir(csv)

fs.writeFileSync('usa.csv', csv)
	console.dir('file saved');
;

	res.download ('usa.csv');

});
});

router.get('/afghanistan', function (req, res) {

var fields = ['title', 'format', 'web_url']

request('https://www.gov.uk/api/world-locations/afghanistan/organisations', function(error, response, body){
	var results = JSON.parse(body).results

	console.dir(results)
	console.dir(results[0].title)

var csv = json2csv({ data: results, fields: fields });

	console.dir(csv)

fs.writeFileSync('afghanistan.csv', csv)
	console.dir('file saved');
;

	res.download ('afghanistan.csv')

});
});

router.get('/canada', function (req, res) {

var fields = ['title', 'format', 'web_url']

request('https://www.gov.uk/api/world-locations/canada/organisations', function(error, response, body){
	var results = JSON.parse(body).results

	console.dir(results)
	console.dir(results[0].title)

var csv = json2csv({ data: results, fields: fields });

	console.dir(csv)

fs.writeFileSync('canada.csv', csv)
	console.dir('file saved');
;

	res.download ('canada.csv')

});

});

module.exports = router;

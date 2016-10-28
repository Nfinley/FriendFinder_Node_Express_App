/* HTML-Routes.js File. Created by Nigel Finley for the UT Coding Bootcamp
	Purpose: This file includes two routes: A Route to `/survey` which should display the survey page and 
	a default route that leads to `home.html` which displays the home page. */
var path = require('path');

// module.exports = function(app){

// // Basic route that sends the user to index.html page
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//     // res.send("Hello World!");
// });

// // route to take users to the survey page
// app.get('/survey', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/survey.html'));
// });

// }



// ===== USING .Router ===========
var express = require('express');
var router = express.Router();
var app = express();


// Basic route that sends the user to index.html page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    // res.send("Hello World!");
});

// // route to take users to the survey page
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});



module.exports = router;



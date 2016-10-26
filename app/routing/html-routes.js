/* HTML-Routes.js File. Created by Nigel Finley for the UT Coding Bootcamp
	Purpose: This file includes two routes: A Route to `/survey` which should display the survey page and 
	a default route that leads to `home.html` which displays the home page. */


module.exports = function(app, path){

// Basic route that sends the user to index.html page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    // res.send("Hello World!");
});

// route to take users to the survey page
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

}



// NEEDED A MIDDLEWARE TO MAKE THE .ROUTER to work
// var express = require('express');
// var router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });
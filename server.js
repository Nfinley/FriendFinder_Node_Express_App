// Server.js File. Created by Nigel Finley for the UT Coding Bootcamp

// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/css', express.static(__dirname + '/css'));


// Starts the server to begin listening
// =============================================================
// console.log("here");

app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('App listening on PORT ' + PORT);
});

// ====ROUTES =====
// These will need to go in separate files

// Basic route that sends the user to index.html page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/index.html'));
    // res.send("Hello World!");
});

// route to take users to the survey page
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});
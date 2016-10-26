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
app.use('/css', express.static(__dirname + '/app/public/css'));

// Requiring other files
require('./app/routing/html-routes.js')(app, path);
require('./app/routing/api-routes.js')(app);

// app.use('/', htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('App listening on PORT ' + PORT);
});

 // ============================================================

// var customers = [{
//     customerName: 'Customer 1',
//     phoneNumber: 5555555555,
//     customerEmail: 'test@gmail.com',
//     customerID: 2
// }, {
//     customerName: 'Customer 2',
//     phoneNumber: 1234567891,
//     customerEmail: 'test2@gamil.com',
//     customerID: 3
// }];



// app.get('/api/friends', function(req, res){
// 	res.json(customers);
// 	// res.status(201).send();
// })

 // Basic route that sends the user to index.html page
// app.use('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'app/public/index.html'));
//     // res.send("Hello World!");
// });

// // route to take users to the survey page
// app.get('/survey', function(req, res) {
//     res.sendFile(path.join(__dirname, 'app/public/survey.html'));
// });




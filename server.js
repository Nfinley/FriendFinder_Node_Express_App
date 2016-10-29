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


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring other files
// require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

// ===== When using ROUTER =====
var htmlRoutes = require('./app/routing/html-routes.js');
app.use('/', htmlRoutes);



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
var questions = [
{ question: "Your mind is always buzzing with unexplored ideas and plans", questionNumber: 1 },
{ question: "You feel more energetic after spending time with a group of people", questionNumber: 2 },
{ question: "You think that everyone's views should be respected regardless of whether they are supported by facts or not", questionNumber: 3 },
{ question: "You rarely get carried away by fantasies and ideas", questionNumber: 4 },
{ question: "In a discussion, truth should be more important than  people's sensitivities", questionNumber: 5 },
{ question: "You are an extreme dog lover", questionNumber: 6 },
{ question: "People can rarely upset you", questionNumber: 7 }, 
{ question: "You find it easy to stay relaxed and focused even when there is some pressure", questionNumber: 8 }, 
{ question: "Generally speaking, you rely more on your experience thatn your imagination", questionNumber: 9 }, 
{ question: "You rarely do something just out of sheer curiousity", questionNumber: 10 }
];

// route to take users to the survey page
app.get('/questions', function(req, res) {
	var data = { q: []};

	for(var i =0; i < questions.length; i +=1){
		var currentQuestion = questions[i];
		data.q.push(currentQuestion);
	}
    res.render('index', data);
});

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



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('App listening on PORT ' + PORT);
});

// api-routes.js File. Created by Nigel Finley for the UT Coding Bootcamp. 
// Purpose: houses a get and post route for the api/friends directory

var friends = require('../data/friends');

// using export here as a function instead of using express.Router
module.exports = function(app) {



    app.get('/api/friends', function(req, res) {
        res.json(friends.users);
        console.log(friends.users);
        // res.status(201).send();
    });
    // This takes in the survey html and pushes it to the friends object
    // Add the logic here to handle the  compatibility logic. 
    app.post('/survey', function(req, res) {

        //=======LOGIC to handle the user input from the page and finds the best match =========
        var newUser = req.body;
        var totalDifference = 0;
        var personIndex = 0;
        // For each that cycles through each scoreSum of current users to find lowest score
        friends.users.forEach(function(obj, index) {
            var currentScore = 0;
            currentScore += Math.abs(newUser.scoreSum - parseInt(obj.scoreSum));
            // console logs to test scores 
            // console.log("first for each furrent score: ", obj.scoreSum);
            // console.log("result of first abs", currentScore);
            if (index == 0) {
                totalDifference = currentScore;
                personIndex = index;
            }
            if (totalDifference > currentScore) {
                totalDifference = currentScore;
                personIndex = index;
                console.log("In if pscore: ", totalDifference);
            }
        });
        friends.users.push(newUser);
        res.send(friends.users[personIndex]);
        // console logs to test final scores. 
        // console.log('final score: '+ totalDifference);
        // console.log('index winner: '+ personIndex);
        // pushing to the array in order view with the api/friends
        
  
    });
}



